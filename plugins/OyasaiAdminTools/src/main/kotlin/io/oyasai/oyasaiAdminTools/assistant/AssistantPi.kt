package io.oyasai.oyasaiAdminTools.assistant

import com.google.gson.JsonObject
import com.google.gson.JsonParser
import java.io.BufferedReader
import java.util.UUID
import java.util.concurrent.TimeUnit
import java.util.logging.Logger
import kotlinx.coroutines.channels.Channel
import kotlinx.coroutines.sync.Mutex
import kotlinx.coroutines.sync.withLock

// One warm child, serialized requests, conversations isolated by operator UUID.
internal class AssistantPi(
    private val command: List<String>,
    key: String,
    model: String,
    private val timeoutMs: Long,
    private val logger: Logger,
    private val idleMinutes: Int = 10,
    private val maxMessages: Int = 40,
    private val maxChars: Int = 48000,
) : AssistantBackend {
  private val mutex = Mutex()
  @Volatile private var closed = false
  private var child: Child? = null

  private val relay = AssistantModelRelay(key, model, timeoutMs)

  init {
    require(command.isNotEmpty() && command.first().isNotBlank())
    val state =
        try {
          start()
        } catch (failure: Throwable) {
          relay.close()
          throw failure
        }
    try {
      kotlinx.coroutines.runBlocking {
        kotlinx.coroutines.withTimeout(timeoutMs) { awaitReady(state) }
      }
    } catch (failure: Throwable) {
      relay.close()
      stop(state)
      throw failure
    }
  }

  private suspend fun awaitReady(state: Child) {
    val ready = state.messages.receive()
    check(ready["type"].asString == "ready" && ready["protocol"].asInt == 1)
    check(ready["tools"].asJsonArray.map { it.asString }.toSet() == AssistantModelRelay.TOOLS)
    state.ready = true
  }

  @Synchronized
  private fun start(): Child {
    check(!closed) { "Pi backend closed" }
    child?.let { if (it.process.isAlive) return it else stop(it) }
    val process =
        ProcessBuilder(command)
            .apply {
              // No NODE_OPTIONS, Pi credentials, shell hooks or unrelated service secrets
              // inherited.
              val inherited =
                  environment().filterKeys {
                    it in setOf("HOME", "PATH", "XDG_RUNTIME_DIR", "DBUS_SESSION_BUS_ADDRESS")
                  }
              environment().clear()
              environment().putAll(inherited)
              redirectError(ProcessBuilder.Redirect.DISCARD)
            }
            .start()
    val state = Child(process)
    child = state
    Thread(
            {
              try {
                process.inputStream.bufferedReader(Charsets.UTF_8).use { reader ->
                  while (true) {
                    val line = readLine(reader) ?: break
                    check(
                        state.messages.trySend(JsonParser.parseString(line).asJsonObject).isSuccess
                    )
                  }
                }
              } catch (_: Exception) {
                // Protocol/provider text can contain credentials; log only the lifecycle.
              } finally {
                state.messages.close()
                process.destroy()
                logger.info("Assistant Pi child exited pid=${process.pid()}")
              }
            },
            "assistant-pi-stdout",
        )
        .apply {
          isDaemon = true
          start()
        }
    logger.info("Assistant Pi child started pid=${process.pid()}")
    return state
  }

  override suspend fun run(
      request: String,
      maxToolCalls: Int,
      tools: Map<String, AssistantTool>,
      progress: AssistantProgress,
  ): String = runFor("offline", request, maxToolCalls, tools, progress)

  override suspend fun runFor(
      actor: String,
      request: String,
      maxToolCalls: Int,
      tools: Map<String, AssistantTool>,
      progress: AssistantProgress,
  ): String = exchange(actor, "request", request, maxToolCalls, tools, progress)

  override suspend fun reset(actor: String) {
    exchange(actor, "reset", "reset", 0, emptyMap(), AssistantProgress())
  }

  override suspend fun summarize(actor: String, facts: String): String =
      exchange(actor, "summary", facts, 0, emptyMap(), AssistantProgress())

  private suspend fun exchange(
      actor: String,
      kind: String,
      request: String,
      maxToolCalls: Int,
      tools: Map<String, AssistantTool>,
      progress: AssistantProgress,
  ): String =
      mutex.withLock {
        val state = start()
        var complete = false
        try {
          if (!state.ready) awaitReady(state)
          val id = UUID.randomUUID().toString()
          state.send(
              JsonObject().apply {
                addProperty("type", kind)
                addProperty("actor", actor)
                addProperty("idleMinutes", idleMinutes)
                addProperty("maxMessages", maxMessages)
                addProperty("maxChars", maxChars)
                addProperty("id", id)
                addProperty("text", request)
                addProperty("maxToolCalls", maxToolCalls)
                addProperty("timeoutMs", timeoutMs)
              }
          )
          val seen = mutableSetOf<String>()
          var modelCalls = 0
          var toolCalls = 0
          while (true) {
            val message = state.messages.receive()
            check(message["id"].asString == id)
            when (message["type"].asString) {
              "model" -> {
                check(++modelCalls <= maxToolCalls + 1)
                val callId = message["callId"].asString
                check(callId.length <= 64 && seen.add(callId))
                val result = relay.complete(message["body"].asJsonObject)
                val usage = JsonParser.parseString(result).asJsonObject["usage"]
                logger.info(
                    "Assistant Pi model tokens=${usage?.asJsonObject?.get("total_tokens")?.asLong ?: 0}"
                )
                state.send(
                    JsonObject().apply {
                      addProperty("type", "model_result")
                      addProperty("id", id)
                      addProperty("callId", callId)
                      addProperty("result", result)
                    }
                )
              }
              "tool" -> {
                check(++toolCalls <= maxToolCalls)
                val name = message["name"].asString
                check(name in setOf("get_context", "run_command", "search_memory"))
                val callId = message["callId"].asString
                check(callId.length <= 64 && seen.add(callId))
                val args =
                    message["args"].asJsonObject.entrySet().associate { (name, value) ->
                      check(value.isJsonPrimitive && value.asJsonPrimitive.isString)
                      name to value.asString
                    }
                val result = tools.getValue(name).execute(args)
                state.send(
                    JsonObject().apply {
                      addProperty("type", "tool_result")
                      addProperty("id", id)
                      addProperty("callId", callId)
                      addProperty("result", result.take(16000))
                    }
                )
              }
              "trace" -> {
                val name = message["name"].asString
                check(name in AssistantModelRelay.TOOLS)
                if (name !in setOf("get_context", "run_command", "search_memory"))
                    progress.localTool(name, message["args"].toString())
                progress.record(name, message["result"].asString)
              }
              "usage" -> {
                /* Informational only; provider usage is logged by the host relay. */
              }
              "answer" -> {
                val answer = message["answer"].asString
                check(answer.isNotBlank() && answer.length <= 4000)
                complete = true
                return@withLock answer
              }
              else -> error("Pi request failed")
            }
          }
          @Suppress("UNREACHABLE_CODE") error("Pi request ended")
        } finally {
          // A cancelled/dead request must never continue to propose commands or poison the next
          // one.
          if (!complete) stop(state)
        }
      }

  @Synchronized
  private fun stop(state: Child) {
    if (child === state) child = null
    state.messages.close()
    state.process.destroy()
    if (!state.process.waitFor(2, TimeUnit.SECONDS)) state.process.destroyForcibly()
    state.process.outputStream.close()
  }

  @Synchronized
  override fun close() {
    closed = true
    try {
      child?.let { stop(it) }
    } finally {
      relay.close()
    }
  }

  private class Child(val process: Process) {
    val messages = Channel<JsonObject>(64)
    val writer = process.outputStream.bufferedWriter(Charsets.UTF_8)
    var ready = false

    fun send(message: JsonObject) {
      writer.write(message.toString())
      writer.newLine()
      writer.flush()
    }
  }

  companion object {
    private fun readLine(reader: BufferedReader): String? {
      val line = StringBuilder()
      while (true) {
        val char = reader.read()
        if (char == -1) return if (line.isEmpty()) null else error("Truncated Pi message")
        if (char == 10) return line.toString()
        check(line.length < 1048576) { "Pi message too long" }
        line.append(char.toChar())
      }
    }
  }
}
