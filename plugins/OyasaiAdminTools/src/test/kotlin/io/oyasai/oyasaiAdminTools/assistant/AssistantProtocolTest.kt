package io.oyasai.oyasaiAdminTools.assistant

import com.google.gson.JsonParser
import java.util.UUID
import kotlin.test.*

class AssistantProtocolTest {
  private fun request(tool: String = "get_context", args: String = "{}", id: String = "test") =
      """{"v":1,"id":"$id","tool":"$tool","args":$args}""".toByteArray()

  @Test
  fun validatesUtf8SizeVersionIdToolAndStringArguments() {
    assertEquals("test", AssistantProtocol.decode(request()).id)
    for (tool in listOf("lock_selection", "unlock_selection")) {
      assertEquals(emptyMap(), AssistantProtocol.decode(request(tool)).args)
      assertFails { AssistantProtocol.decode(request(tool, """{"extra":"bad"}""")) }
    }
    assertEquals(
        "plugins\nplugins",
        AssistantProtocol.decode(
                request("run_commands", """{"commands":"plugins\nplugins","summary":"一覧"}""")
            )
            .args["commands"],
    )
    assertEquals(emptyMap(), AssistantProtocol.decode(request("get_selection")).args)
    assertEquals(
        "7",
        AssistantProtocol.decode(request("search_memory", """{"query":"tp","days":"7"}"""))
            .args["days"],
    )
    for (invalid in
        listOf(
            ByteArray(32769),
            "{v:1}".toByteArray(),
            "{".toByteArray(),
            request("unknown"),
            request("get_selection", """{"world":"other"}"""),
            request(id = "x".repeat(65)),
            request("search_memory", """{"query":"tp","days":7}"""),
            request("run_command", """{"command":"tp"}"""),
            request().toString(Charsets.UTF_8).replace("\"v\":1", "\"v\":2").toByteArray(),
            byteArrayOf(0xc3.toByte(), 0x28),
        )) assertFails { AssistantProtocol.decode(invalid) }
    assertEquals("test", AssistantProtocol.requestId(request("unknown")))
  }

  @Test
  fun responseKeepsIdAndCapsCharactersAndEncodedBytes() {
    for (value in listOf("あ".repeat(9000), "\u0000".repeat(8000), "result")) {
      val bytes = AssistantProtocol.encode("日本語", value, false)
      val json = JsonParser.parseString(bytes.toString(Charsets.UTF_8)).asJsonObject
      assertEquals("日本語", json["id"].asString)
      assertTrue(json["result"].asString.length <= 8000)
      assertTrue(bytes.size <= 32766)
    }
    assertEquals(
        "busy",
        JsonParser.parseString(
                AssistantProtocol.encode("id", "busy", true).toString(Charsets.UTF_8)
            )
            .asJsonObject["error"]
            .asString,
    )
  }

  @Test
  fun confirmationStaysBusyAndRateLimitUsesRollingMinutePerOperator() {
    var time = 0L
    val calls = AssistantCalls(2) { time }
    val id = UUID.randomUUID()
    assertNull(calls.begin(id))
    assertEquals("busy", calls.begin(id))
    calls.finish(id)
    assertNull(calls.begin(id))
    calls.finish(id)
    assertEquals("rate limit", calls.begin(id))
    assertNull(calls.begin(UUID.randomUUID()))
    time = 60_000_000_000L
    assertNull(calls.begin(id))
  }
}
