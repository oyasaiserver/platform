package io.oyasai.oyasaiAdminTools.assistant

import java.nio.file.Files
import java.time.*
import kotlin.test.*

class AssistantMemoryTest {
  private val clock = Clock.fixed(Instant.parse("2026-10-19T01:30:00Z"), ZoneOffset.UTC)

  @Test
  fun appendSearchAndRedactionKeepOnlySafeFacts() {
    val root = Files.createTempDirectory("assistant-memory")
    try {
      val memory = AssistantMemory(root, clock)
      val record = AssistantMemory.Record("operator")
      record.add("request", "生のチャット全文 SECRET")
      record.add("tool-result:get_context", "198.51.100.1 secret=private")
      record.add("execute", "sendAs=assistant dynamicprofile:syokaku iscandidate pmzt")
      record.add("execution-result", "sendAs=assistant accepted=true")
      assertFalse(record.facts().contains("SECRET"))
      assertFalse(record.facts().contains("198.51.100"))
      memory.append(
          record,
          "pmztの照会。198.51.100.1 sk-or-v1-private token=private https://private.invalid",
      )
      val file = root.resolve("2026-10-19.md")
      val prefix = Files.readString(file)
      assertTrue(prefix.startsWith("# 2026-10-19\n"))
      assertFalse(prefix.contains("198.51.100"))
      assertFalse(prefix.contains("sk-or"))
      assertFalse(prefix.contains("token=private"))
      memory.append(record, "追加")
      assertTrue(Files.readString(file).startsWith(prefix))
      assertContains(memory.search("pmzt", 1), "受付済み（成功未確認）")
      assertContains(memory.search("not-present", 1), "該当する記録はありません")
      Files.writeString(root.resolve("2020-01-01.md"), "- 01:00 operator：old-only")
      assertFalse(memory.search("old-only", 1).contains("2020-01-01"))
      assertFails { memory.search("pmzt", 0) }
    } finally {
      Files.list(root).use { it.forEach(Files::delete) }
      Files.delete(root)
    }
  }

  @Test
  fun concurrentAppendDoesNotLoseRowsAndSymlinksAreRejected() {
    val root = Files.createTempDirectory("assistant-memory-parallel")
    val outside = Files.createTempFile("assistant-outside", ".md")
    try {
      val memory = AssistantMemory(root, clock)
      val threads =
          (1..12).map { n ->
            Thread { memory.append(AssistantMemory.Record("operator"), "row$n") }.apply { start() }
          }
      threads.forEach { it.join() }
      val file = root.resolve("2026-10-19.md")
      assertEquals(12, Files.readAllLines(file).count { it.startsWith("- ") })
      Files.delete(file)
      Files.createSymbolicLink(file, outside)
      assertFails { memory.append(AssistantMemory.Record("operator"), "must not write") }
      assertEquals("", Files.readString(outside))
    } finally {
      Files.list(root).use { it.forEach(Files::delete) }
      Files.delete(root)
      Files.delete(outside)
    }
  }
}
