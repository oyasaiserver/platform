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

// One child, serialized requests, fresh in-memory conversation for every request.
internal class AssistantPi(
    private val node: String,
    private val script: String,
    private val docs: String,
    private val model: String,
    private val key: String,
    private val timeoutMs: Long,
    private val logger: Logger,
) : AssistantBackend {
  private val mutex = Mutex()
  @Volatile private var closed = false
  private var child: Child? = null

  init {
    start()
  }

  @Synchronized
  private fun start(): Child {
    check(!closed) { "Pi backend closed" }
    child?.let { if (it.process.isAlive) return it else stop(it) }
    val process =
        ProcessBuilder(node, script, docs, model)
            .apply {
              // No NODE_OPTIONS, Pi credentials, shell hooks or unrelated service secrets
              // inherited.
              val home = environment()["HOME"]
              environment().clear()
              if (home != null) environment()["HOME"] = home
              environment()["OYASAI_ASSISTANT_API_KEY"] = key
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
  ): String =
      mutex.withLock {
        val state = start()
        var complete = false
        try {
          if (!state.ready) {
            val ready = state.messages.receive()
            check(ready["type"].asString == "ready" && ready["protocol"].asInt == 1)
            check(ready["tools"].asJsonArray.map { it.asString }.toSet() == NAMES)
            state.ready = true
          }
          val id = UUID.randomUUID().toString()
          state.send(
              JsonObject().apply {
                addProperty("type", "request")
                addProperty("id", id)
                addProperty("text", request)
                addProperty("maxToolCalls", maxToolCalls)
                addProperty("timeoutMs", timeoutMs)
              }
          )
          val seen = mutableSetOf<String>()
          while (true) {
            val message = state.messages.receive()
            check(message["id"].asString == id)
            when (message["type"].asString) {
              "tool" -> {
                val name = message["name"].asString
                check(name in setOf("get_context", "run_command"))
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
                check(name in NAMES)
                if (name == "search_docs" || name == "read_doc")
                    progress.localTool(name, message["args"].toString())
                progress.record(name, message["result"].asString)
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
    child?.let { stop(it) }
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
    private val NAMES = setOf("get_context", "run_command", "search_docs", "read_doc")

    private fun readLine(reader: BufferedReader): String? {
      val line = StringBuilder()
      while (true) {
        val char = reader.read()
        if (char == -1) return if (line.isEmpty()) null else error("Truncated Pi message")
        if (char == 10) return line.toString()
        check(line.length < 65536) { "Pi message too long" }
        line.append(char.toChar())
      }
    }
  }
}
