package io.oyasai.oyasaiAdminTools.assistant

import com.google.gson.GsonBuilder
import com.google.gson.JsonObject
import com.google.gson.Strictness
import java.nio.ByteBuffer
import java.nio.charset.CodingErrorAction
import java.util.UUID

internal object AssistantProtocol {
  private val gson = GsonBuilder().disableHtmlEscaping().setStrictness(Strictness.STRICT).create()
  private val tools =
      mapOf(
          "get_context" to emptySet(),
          "get_selection" to emptySet(),
          "run_command" to setOf("command", "summary"),
          "run_commands" to setOf("commands", "summary"),
          "lock_selection" to emptySet(),
          "unlock_selection" to emptySet(),
          "search_memory" to setOf("query", "days"),
          "record_memory" to setOf("summary"),
      )

  data class Request(val id: String, val tool: String, val args: Map<String, String>)

  private fun parse(message: ByteArray): JsonObject {
    require(message.size <= 32768) { "message too large" }
    val text =
        Charsets.UTF_8.newDecoder()
            .onMalformedInput(CodingErrorAction.REPORT)
            .decode(ByteBuffer.wrap(message))
            .toString()
    return gson.fromJson(text, JsonObject::class.java)
  }

  private fun string(json: JsonObject, name: String): String {
    val value = json.get(name)
    require(value != null && value.isJsonPrimitive && value.asJsonPrimitive.isString)
    return value.asString
  }

  fun requestId(message: ByteArray): String? =
      runCatching { string(parse(message), "id").also { require(it.length <= 64) } }.getOrNull()

  fun decode(message: ByteArray): Request {
    val json = parse(message)
    require(json.get("v")?.toString() == "1") { "unsupported version" }
    val id = string(json, "id").also { require(it.length <= 64) }
    val tool = string(json, "tool")
    val expected = tools[tool] ?: error("unknown tool")
    val args = json.getAsJsonObject("args")
    require(args != null && args.keySet() == expected) { "invalid arguments" }
    return Request(id, tool, expected.associateWith { string(args, it) })
  }

  fun encode(id: String, value: String, error: Boolean): ByteArray {
    var result = value.take(8000)
    while (true) {
      val json =
          JsonObject().apply {
            addProperty("v", 1)
            addProperty("id", id)
            addProperty(if (error) "error" else "result", result)
          }
      val bytes = gson.toJson(json).toByteArray(Charsets.UTF_8)
      if (bytes.size <= 32766) return bytes
      result = result.dropLast(256)
    }
  }
}

/** Admission is per operator; confirmation keeps the same call busy until it finishes. */
internal class AssistantCalls(
    private val limit: Int,
    private val now: () -> Long = System::nanoTime,
) {
  private val active = mutableSetOf<UUID>()
  private val times = mutableMapOf<UUID, ArrayDeque<Long>>()

  @Synchronized
  fun begin(id: UUID): String? {
    if (id in active) return "busy"
    val time = now()
    val recent = times.getOrPut(id) { ArrayDeque() }
    while (recent.isNotEmpty() && time - recent.first() >= 60_000_000_000L) recent.removeFirst()
    if (recent.size >= limit.coerceAtLeast(1)) return "rate limit"
    recent.addLast(time)
    active.add(id)
    return null
  }

  @Synchronized
  fun finish(id: UUID) {
    active.remove(id)
  }
}
