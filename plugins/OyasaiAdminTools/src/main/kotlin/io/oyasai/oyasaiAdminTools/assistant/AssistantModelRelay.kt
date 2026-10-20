package io.oyasai.oyasaiAdminTools.assistant

import com.google.gson.JsonObject
import com.google.gson.JsonParser
import io.ktor.client.HttpClient
import io.ktor.client.engine.java.Java
import io.ktor.client.plugins.HttpTimeout
import io.ktor.client.request.*
import io.ktor.client.statement.*
import io.ktor.http.*
import io.ktor.utils.io.readAvailable
import java.io.ByteArrayOutputStream

// Treat the external brain and every stdio message as untrusted.
internal class AssistantModelRelay(
    private val key: String,
    private val model: String,
    timeoutMs: Long,
) : AutoCloseable {
  private val http =
      HttpClient(Java) {
        followRedirects = false
        install(HttpTimeout) { requestTimeoutMillis = timeoutMs }
      }

  suspend fun complete(body: JsonObject): String {
    val request = sanitize(body, model)
    return http
        .preparePost("https://openrouter.ai/api/v1/chat/completions") {
          bearerAuth(key)
          contentType(ContentType.Application.Json)
          setBody(request.toString())
        }
        .execute { response ->
          check(response.status == HttpStatusCode.OK) { "Model relay failed" }
          val output = ByteArrayOutputStream()
          val buffer = ByteArray(8192)
          val channel = response.bodyAsChannel()
          while (true) {
            val count = channel.readAvailable(buffer, 0, buffer.size)
            if (count == -1) break
            check(output.size() + count <= 524288) { "Model response too large" }
            output.write(buffer, 0, count)
          }
          val result = output.toString(Charsets.UTF_8)
          check(JsonParser.parseString(result).asJsonObject.has("choices"))
          result
        }
  }

  override fun close() {
    http.close()
  }

  companion object {
    internal val TOOLS =
        setOf("get_context", "run_command", "read", "bash", "write", "edit", "search_memory")

    internal fun sanitize(body: JsonObject, model: String): JsonObject {
      require(body.toString().toByteArray(Charsets.UTF_8).size <= 524288)
      require(body.keySet() == setOf("messages", "tools"))
      val messages = body["messages"].asJsonArray
      require(messages.size() in 1..128)
      for (entry in messages) {
        val message = entry.asJsonObject
        require(message["role"].asString in setOf("system", "user", "assistant", "tool"))
        require(
            message.keySet().all { it in setOf("role", "content", "tool_calls", "tool_call_id") }
        )
        val content = message["content"]
        require(
            content != null &&
                (content.isJsonNull ||
                    (content.isJsonPrimitive && content.asJsonPrimitive.isString))
        )
      }
      val tools = body["tools"].asJsonArray
      require(tools.size() <= TOOLS.size)
      val names = mutableSetOf<String>()
      for (entry in tools) {
        val tool = entry.asJsonObject
        require(tool["type"].asString == "function")
        val function = tool["function"].asJsonObject
        require(function["name"].asString in TOOLS && names.add(function["name"].asString))
        require(function.toString().length <= 16384)
      }
      return JsonObject().apply {
        addProperty("model", model)
        addProperty("stream", false)
        addProperty("max_tokens", 2048)
        add("messages", messages.deepCopy())
        if (!tools.isEmpty) add("tools", tools.deepCopy())
      }
    }
  }
}
