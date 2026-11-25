package icu.oyasai.utilities.creative_management

import java.io.File
import java.util.UUID
import kotlin.test.*
import org.junit.jupiter.api.io.TempDir

class InventoryHoldsTest {
  @Test
  fun `holds survive restart and cannot be stolen by another game`(@TempDir folder: File) {
    val id = UUID.randomUUID()
    val holds = InventoryHolds(folder)
    holds.acquire(id, "pvp")
    holds.acquire(id, "pvp")
    val restarted = InventoryHolds(folder)
    assertTrue(restarted.held(id))
    assertFails { restarted.checkAvailable(id, "zombies") }
    assertFails { restarted.acquire(id, "zombies") }
    var persisted = false
    assertFails { restarted.release(id, "zombies") { persisted = true } }
    assertFalse(persisted)
    restarted.release(id, "pvp") { persisted = true }
    assertTrue(persisted)
    assertFalse(InventoryHolds(folder).held(id))
  }

  @Test
  fun `failed restoration keeps protection on disk and in memory`(@TempDir folder: File) {
    val id = UUID.randomUUID()
    val holds = InventoryHolds(folder)
    holds.acquire(id, "pvp")
    assertFails { holds.release(id, "pvp") { error("player or mode bank save failed") } }
    assertTrue(holds.held(id))
    assertTrue(InventoryHolds(folder).held(id))
    holds.release(id, "pvp") { assertTrue(InventoryHolds(folder).held(id)) }
    assertFalse(holds.held(id))
  }

  @Test
  fun `failed hold write does not acquire ownership`(@TempDir folder: File) {
    val id = UUID.randomUUID()
    File(folder, "$id.hold.tmp").mkdir()
    val holds = InventoryHolds(folder)
    assertFails { holds.acquire(id, "pvp") }
    assertFalse(holds.held(id))
    assertFalse(File(folder, "$id.hold").exists())
  }

  @Test
  fun `an unreadable hold directory cannot silently discard existing protection`(
      @TempDir folder: File
  ) {
    val invalid = File(folder, "holds").also { it.writeText("not a directory") }
    assertFails { InventoryHolds(invalid) }
  }

  @Test
  fun `corrupt holds fail closed rather than resuming normal inventory saves`(
      @TempDir folder: File
  ) {
    File(folder, "${UUID.randomUUID()}.hold").writeText("")
    assertFails { InventoryHolds(folder) }
  }
}
