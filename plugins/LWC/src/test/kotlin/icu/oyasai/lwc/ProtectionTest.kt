package icu.oyasai.lwc

import java.util.UUID
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertTrue
import org.bukkit.Material
import org.bukkit.block.BlockFace
import org.bukkit.block.data.Bisected
import org.bukkit.block.data.type.Chest

class ProtectionTest {
  @Test
  fun `legacy data and protection rules`() {
    val owner = UUID.randomUUID()
    val friend = UUID.randomUUID()
    val key = BlockKey("world", 1, 2, 3)
    val protection =
        Protection.read(
            1,
            key,
            owner,
            2,
            """{"rights":[{"name":"$friend","type":1,"rights":1},{"name":"group","type":2,"rights":1}],"flags":[{"id":9}]}""",
        )
    assertTrue(friend in protection.shared)
    assertFalse(protection.hopper)
    protection.setShared(friend, false)
    protection.setHopper(true)
    assertFalse(friend in protection.shared)
    assertTrue(protection.hopper)
    assertTrue(protection.json().contains("group"))
    assertTrue(protection.json().contains("\"id\":9"))
    assertEquals(-1, doorOtherY(Bisected.Half.TOP))
    assertEquals(1, doorOtherY(Bisected.Half.BOTTOM))
    assertEquals(1 to 0, chestOtherOffset(Chest.Type.LEFT, BlockFace.NORTH))
    assertEquals(-1 to 0, chestOtherOffset(Chest.Type.RIGHT, BlockFace.NORTH))
    assertTrue(isContainer(Material.CHEST))
    assertTrue(isContainer(Material.WHITE_SHULKER_BOX))
    Material.entries
        .filter {
          it.name == "COPPER_CHEST" ||
              it.name.endsWith("_COPPER_CHEST") ||
              it.name.endsWith("_SHELF")
        }
        .forEach { assertTrue(isContainer(it), it.name) }
    assertTrue(isManual(Material.OAK_DOOR))
    assertFalse(isContainer(Material.OAK_DOOR))
    assertFalse(isManual(Material.STONE))
    assertEquals(60, remainingSeconds(60_000, 0))
    assertEquals(1, remainingSeconds(60_000, 59_001))
    assertEquals(0, remainingSeconds(60_000, 60_000))
  }
}
