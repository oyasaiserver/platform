package icu.oyasai.games.slot

import java.nio.file.Path
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith
import kotlin.test.assertFalse
import kotlin.test.assertTrue
import org.junit.jupiter.api.io.TempDir

class SlotFilesTest {
  @TempDir lateinit var directory: Path

  @Test
  fun `import preserves bytes and never imports twice even without marker`() {
    val legacy = directory.resolve("SlotMachine").toFile()
    val destination = directory.resolve("OyasaiGames/slot").toFile()
    legacy.resolve("machines").mkdirs()
    legacy.resolve("players").mkdirs()
    val machine = "items:\n  '0':\n    weight: 3\n"
    val player = "machines: {}\n"
    legacy.resolve("machines/example.yml").writeText(machine)
    legacy.resolve("players/example.yml").writeText(player)
    legacy.resolve("config.yml").writeText("luckLevelToPercentConversion: 12.5\n")
    assertTrue(importLegacySlot(destination, legacy))
    assertEquals(machine, destination.resolve("machines/example.yml").readText())
    assertEquals(player, destination.resolve("players/example.yml").readText())
    assertEquals(machine, legacy.resolve("machines/example.yml").readText())
    assertTrue(destination.resolve("imported.txt").isFile)
    destination.resolve("imported.txt").delete()
    legacy.resolve("machines/example.yml").writeText("modified")
    assertFalse(importLegacySlot(destination, legacy))
    assertEquals(machine, destination.resolve("machines/example.yml").readText())
  }

  @Test
  fun `failed import leaves no partial destination`() {
    val legacy = directory.resolve("SlotMachine").toFile()
    legacy.resolve("machines").mkdirs()
    val destination = directory.resolve("OyasaiGames/slot").toFile()
    assertFailsWith<IllegalArgumentException> { importLegacySlot(destination, legacy) }
    assertFalse(destination.exists())
    assertTrue(destination.parentFile.listFiles()!!.isEmpty())
  }

  @Test
  fun `atomic save replaces complete file`() {
    val file = directory.resolve("slot/state.yml").toFile()
    saveSlotFile(file, "first")
    saveSlotFile(file, "second")
    assertEquals("second", file.readText())
    assertEquals(listOf("state.yml"), file.parentFile.list()!!.toList())
  }

  @Test
  fun `counter updates preserve opaque components comments and line endings`() {
    val original =
        """
        # fixture
        timesUsed: 7 # retained
        items:
          '0':
            item:
              components:
                opaque: '{custom:[1,2,3]}'
                timesWon: 999
            stats:
              timesWon: 2
          '1':
            stats:
              timesWon: 3
        future: untouched
        """
            .trimIndent() + "\n"
    for (text in listOf(original, original.replace("\n", "\r\n"))) {
      assertEquals(
          text.replace("timesUsed: 7", "timesUsed: 8").replace("timesWon: 2", "timesWon: 4"),
          patchMachineCounters(text, 8, mapOf("0" to 4)),
      )
      assertEquals(
          text.replace("timesUsed: 7", "timesUsed: 8"),
          patchMachineCounters(text, 8, emptyMap()),
      )
      assertFailsWith<IllegalStateException> {
        patchMachineCounters(text, 8, mapOf("missing" to 1))
      }
    }
  }
}
