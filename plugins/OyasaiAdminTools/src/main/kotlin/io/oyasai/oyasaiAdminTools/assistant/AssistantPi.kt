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
    private val containerImage: String? = null,
) : AssistantBackend {
  private val mutex = Mutex()
  @Volatile private var closed = false
  private var child: Child? = null

  private val relay =
      if (containerImage != null) AssistantModelRelay(key, model, timeoutMs) else null

  init {
    if (containerImage == null) start()
    else {
      // Probe the image at enable time, then discard even the empty workspace.
      val state = start()
      try {
        kotlinx.coroutines.runBlocking {
          kotlinx.coroutines.withTimeout(timeoutMs) {
            val ready = state.messages.receive()
            check(ready["type"].asString == "ready" && ready["protocol"].asInt == 1)
            check(
                ready["tools"].asJsonArray.map { it.asString }.toSet() == AssistantModelRelay.TOOLS
            )
          }
        }
      } catch (failure: Throwable) {
        relay?.close()
        throw failure
      } finally {
        stop(state)
      }
    }
  }

  @Synchronized
  private fun start(): Child {
    check(!closed) { "Pi backend closed" }
    child?.let { if (it.process.isAlive) return it else stop(it) }
    val containerName =
        if (containerImage != null) "oyasai-assistant-${UUID.randomUUID()}" else null
    val command =
        if (containerImage != null)
            containerCommand(node, containerImage, docs, model, containerName!!)
        else listOf(node, script, docs, model)
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
              if (containerImage == null) environment()["OYASAI_ASSISTANT_API_KEY"] = key
              redirectError(ProcessBuilder.Redirect.DISCARD)
            }
            .start()
    val state = Child(process, containerName)
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
            check(
                ready["tools"].asJsonArray.map { it.asString }.toSet() ==
                    (if (containerImage == null) NAMES else AssistantModelRelay.TOOLS)
            )
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
          var modelCalls = 0
          var toolCalls = 0
          while (true) {
            val message = state.messages.receive()
            check(message["id"].asString == id)
            when (message["type"].asString) {
              "model" -> {
                check(relay != null && ++modelCalls <= maxToolCalls + 1)
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
                check(name in (if (containerImage == null) NAMES else AssistantModelRelay.TOOLS))
                if (name !in setOf("get_context", "run_command"))
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
          if (!complete || containerImage != null) stop(state)
        }
      }

  @Synchronized
  private fun stop(state: Child) {
    if (child === state) child = null
    state.messages.close()
    state.process.destroy()
    if (!state.process.waitFor(2, TimeUnit.SECONDS)) state.process.destroyForcibly()
    state.process.outputStream.close()
    state.containerName?.let {
      // An agent may fork children or ignore stdin EOF; remove its named container on every exit.
      val cleanup =
          ProcessBuilder(node, "rm", "--force", "--ignore", "--time", "0", it)
              .apply {
                val inherited =
                    environment().filterKeys { name ->
                      name in setOf("HOME", "PATH", "XDG_RUNTIME_DIR", "DBUS_SESSION_BUS_ADDRESS")
                    }
                environment().clear()
                environment().putAll(inherited)
              }
              .redirectOutput(ProcessBuilder.Redirect.DISCARD)
              .redirectError(ProcessBuilder.Redirect.DISCARD)
              .start()
      val removed = cleanup.waitFor(5, TimeUnit.SECONDS)
      if (!removed) cleanup.destroyForcibly()
      check(removed && cleanup.exitValue() == 0) { "Pi container cleanup failed" }
      logger.info("Assistant Pi container removed name=$it")
    }
  }

  @Synchronized
  override fun close() {
    closed = true
    try {
      child?.let { stop(it) }
    } finally {
      relay?.close()
    }
  }

  private class Child(val process: Process, val containerName: String?) {
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
    internal fun containerCommand(
        podman: String,
        image: String,
        docs: String,
        model: String,
        name: String,
    ): List<String> {
      require(image.isNotBlank() && !image.startsWith("-"))
      val root = java.nio.file.Path.of(docs).toRealPath()
      require(
          java.nio.file.Files.isDirectory(root) &&
              ':' !in root.toString() &&
              ',' !in root.toString()
      )
      return listOf(
          podman,
          "run",
          "--rm",
          "-i",
          "--pull=never",
          "--name",
          name,
          "--network=none",
          "--ipc=none",
          "--no-hosts",
          "--cap-drop=ALL",
          "--security-opt=no-new-privileges",
          "--read-only",
          "--read-only-tmpfs=false",
          "--user=1000:1000",
          "--userns=keep-id:uid=1000,gid=1000",
          "--tmpfs=/workspace:rw,size=64m,mode=1777,noexec,nosuid,nodev",
          "--env=TMPDIR=/workspace",
          "--memory=512m",
          "--cpus=1",
          "--pids-limit=64",
          "--volume=$root:/docs:ro",
          image,
          model,
          "--container",
      )
    }

    private val NAMES = setOf("get_context", "run_command", "search_docs", "read_doc")

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
