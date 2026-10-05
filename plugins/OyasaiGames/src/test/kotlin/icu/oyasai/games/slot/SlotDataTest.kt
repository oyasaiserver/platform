package icu.oyasai.games.slot

import java.nio.file.Path
import java.util.UUID
import java.util.logging.Handler
import java.util.logging.LogRecord
import java.util.logging.Logger
import kotlin.test.*
import org.bukkit.configuration.file.YamlConfiguration
import org.junit.jupiter.api.io.TempDir

class SlotDataTest {
  @TempDir lateinit var directory: Path
  private val logger = Logger.getAnonymousLogger()

  private fun link() =
      """
      machineType: BLOCK_LINK
      machineUUID: 00000000-0000-0000-0000-000000000001
      worldUID: 00000000-0000-0000-0000-000000000002
      blockX: 1
      blockY: 2
      blockZ: 3
      locked: true
      linkTo: 00000000-0000-0000-0000-000000000003
      """
          .trimIndent()

  @Test
  fun `legacy link YAML preserves identity and does not require duplicate settings`() {
    val file = directory.resolve("example.yml").toFile().apply { writeText(link()) }
    val machine = loadSlotMachine(file, logger)
    assertEquals(UUID(0, 1), machine.id)
    assertEquals(UUID(0, 2).toString(), machine.yaml.getString("worldUID"))
    assertTrue(machine.yaml.getBoolean("locked"))
    assertTrue(machine.prizes.isEmpty())
    assertEquals(link(), file.readText())
  }

  @Test
  fun `bad link identity or coordinates is rejected without changing file`() {
    for (yaml in
        listOf(
            link().replace("blockX: 1", "blockX: wrong"),
            link().replace("linkTo: 00000000-0000-0000-0000-000000000003", "linkTo: broken"),
        )) {
      val file = directory.resolve("example.yml").toFile().apply { writeText(yaml) }
      assertFails { loadSlotMachine(file, logger) }
      assertEquals(yaml, file.readText())
    }
  }

  @Test
  fun `unknown keys are reported but kept for roundtrip`() {
    val yaml = YamlConfiguration().apply { loadFromString("known: 2\nfuture: example\n") }
    val messages = mutableListOf<String>()
    logger.addHandler(
        object : Handler() {
          override fun publish(record: LogRecord) {
            messages.add(record.message)
          }

          override fun flush() {}

          override fun close() {}
        }
    )
    auditSlotKeys(yaml, setOf("known"), "fixture", logger)
    assertEquals(1, messages.size)
    assertTrue(messages.single().contains("future"))
    assertEquals("example", yaml.getString("future"))
  }

  @Test
  fun `malformed YAML is not silently treated as an empty machine`() {
    val file =
        directory.resolve("example.yml").toFile().apply { writeText("machineType: [broken\n") }
    assertFails { loadSlotMachine(file, logger) }
    assertEquals("machineType: [broken\n", file.readText())
  }

  @Test
  fun `entity without prizes is retained as unplayable`() {
    val id = UUID(0, 7)
    val file = directory.resolve("entity.yml").toFile()
    val original =
        "machineType: ENTITY\nmachineUUID: $id\nentityUID: ${UUID(0, 8)}\nisCitizensNPC: false\n"
    file.writeText(original)
    val machine = loadSlotMachine(file, logger)
    assertEquals(id, machine.id)
    assertTrue(machine.prizes.isEmpty())
    assertEquals(original, file.readText())
  }
}
