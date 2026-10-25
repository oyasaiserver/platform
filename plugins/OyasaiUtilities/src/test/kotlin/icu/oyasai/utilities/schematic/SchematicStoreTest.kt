package icu.oyasai.utilities.schematic

import java.io.InputStream
import java.nio.file.Path
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith
import kotlin.test.assertFalse
import org.junit.jupiter.api.io.TempDir

class SchematicStoreTest {
  @TempDir lateinit var tempDir: Path

  @Test
  fun `ID is the last slash separated segment`() {
    assertEquals("abc123", SchematicStore.idOf("abc123"))
    assertEquals("abc123", SchematicStore.idOf("https://schematic.cloud/download/abc123"))
    assertEquals("", SchematicStore.idOf("abc/"))
  }

  @Test
  fun `save writes the final file and removes the temporary file`() {
    val directory = tempDir.toFile()
    val saved =
        "schematic content".byteInputStream().use { input ->
          SchematicStore.save(directory, "abc123", input, 10) { 0 }
        }
    assertEquals(directory.resolve("abc123.schem"), saved)
    assertEquals("schematic content", saved.readText())
    assertEquals(listOf("abc123.schem"), directory.list()!!.toList())
  }

  @Test
  fun `oversized downloads leave no new file and preserve existing files`() {
    val directory = tempDir.toFile()
    val existing = directory.resolve("existing.schem").apply { writeText("original") }
    for (id in listOf("new", "existing")) {
      val source =
          object : InputStream() {
            override fun read(): Int = 0

            override fun read(buffer: ByteArray, offset: Int, length: Int): Int {
              buffer.fill(0, offset, offset + length)
              return length
            }
          }
      val failure =
          assertFailsWith<IllegalArgumentException> {
            source.use { input -> SchematicStore.save(directory, id, input, 10) { 0 } }
          }
      assertEquals("サイズ上限は 32 MiB です", failure.message)
      assertFalse(directory.resolve("new.schem").exists())
      assertEquals("original", existing.readText())
      assertEquals(listOf("existing.schem"), directory.list()!!.toList())
    }
  }

  @Test
  fun `expired downloads remove the temporary file`() {
    val directory = tempDir.toFile()
    val failure =
        assertFailsWith<IllegalStateException> {
          "content".byteInputStream().use { input ->
            SchematicStore.save(directory, "abc123", input, 10) { 11 }
          }
        }
    assertEquals("ダウンロードがタイムアウトしました", failure.message)
    assertEquals(emptyList(), directory.list()!!.toList())
  }
}
