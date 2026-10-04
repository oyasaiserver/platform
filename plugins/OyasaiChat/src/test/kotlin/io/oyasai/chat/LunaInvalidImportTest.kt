package io.oyasai.chat

import io.oyasai.chat.paper.japanize.LunaImport
import io.oyasai.chat.paper.japanize.LunaImportResolver
import java.io.File
import java.util.UUID
import java.util.concurrent.CompletableFuture
import kotlin.test.*
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.io.TempDir

class LunaInvalidImportTest {
  @TempDir lateinit var directory: File

  @Test
  fun `loads explicit empty YAML keys and skips invalid names before lookup or saving`() {
    val id = UUID.randomUUID()
    File(directory, "japanize.yml")
        .writeText(
            "? ''\n: false\n'   ': true\n'bad name': false\n\"bad\\tname\": true\n'${"a".repeat(65)}': false\n\"bad\\u200Bname\": false\nPlayer: false\nMissing: true\n"
        )
    File(directory, "uuidcache.yml").writeText("'$id': Player\n'${UUID.randomUUID()}': ''\n")
    File(directory, "dictionary.yml")
        .writeText("? ''\n: ignored\n'   ': ignored\n'./spawn': /spawn\n")
    val data = LunaImport.loadData(directory)
    assertEquals(6, data.invalidPlayers)
    assertEquals(2, data.invalidDictionary)
    assertEquals(1, data.invalidCache)
    assertEquals(mapOf("player" to false, "missing" to true), data.preferences)
    assertEquals(mapOf("./spawn" to "/spawn"), data.dictionary)
    val lookups = mutableListOf<String>()
    val resolved =
        LunaImportResolver(
                null,
                { name ->
                  lookups += name
                  CompletableFuture.completedFuture(null)
                },
            )
            .resolve(data, true)
            .join()
    assertEquals(listOf("missing"), lookups)
    assertEquals(mapOf(id to false), resolved.players)
    assertEquals("UNRESOLVED: on=1, off=0", resolved.report().last())
    val destination = File(directory, "saved.yml")
    LunaImport.saveDictionary(destination, data.dictionary)
    assertEquals(data.dictionary, LunaImport.dictionary(destination))
    assertEquals(data, LunaImport.loadData(directory))
    assertEquals(6, LunaImport.load(directory).invalidPlayers)
  }

  @Test
  fun `guards every dynamic dictionary path before changing existing file`() {
    val file = File(directory, "dictionary.yml")
    LunaImport.saveDictionary(file, mapOf("./spawn" to "/spawn"))
    val original = file.readBytes()
    listOf("", "   ", "\u0000bad", "bad\u0000").forEach { key ->
      assertFailsWith<IllegalArgumentException> {
        LunaImport.saveDictionary(file, mapOf("valid" to "ok", key to "invalid"))
      }
      assertContentEquals(original, file.readBytes())
    }
  }

  @Test
  fun `retains literal scalar keys and safely reloads dictionary with empty keys`() {
    val file = File(directory, "input.yml")
    file.writeText("'': discarded\n00123: kept\nOn: literal\n'./spawn': /spawn\n")
    assertEquals(
        mapOf("" to "discarded", "00123" to "kept", "On" to "literal", "./spawn" to "/spawn"),
        LunaImport.flatYaml(file),
    )
    assertEquals(
        mapOf("00123" to "kept", "On" to "literal", "./spawn" to "/spawn"),
        LunaImport.dictionary(file),
    )
  }
}
