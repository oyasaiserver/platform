package icu.oyasai.games.kimodameshi

import java.lang.reflect.Proxy
import kotlin.test.*
import org.bukkit.configuration.file.YamlConfiguration
import org.bukkit.inventory.ItemStack
import org.bukkit.inventory.PlayerInventory

class KimodameshiInventoryTest {
  private class Marker : ItemStack()

  private class Inventory {
    var contents: Array<ItemStack?> = arrayOfNulls(43)
    var selected = 8
    val inventory =
        Proxy.newProxyInstance(
            PlayerInventory::class.java.classLoader,
            arrayOf(PlayerInventory::class.java),
        ) { _, method, args ->
          when (method.name) {
            "getSize" -> 43
            "setContents" -> {
              @Suppress("UNCHECKED_CAST") val items = args!![0] as Array<ItemStack?>
              contents = items
              null
            }
            "getHeldItemSlot" -> selected
            "setHeldItemSlot" -> {
              selected = args!![0] as Int
              null
            }
            else -> error("Unexpected inventory access: ${method.name}")
          }
        } as PlayerInventory
  }

  @Test
  fun `legacy or interrupted inventory setup recovers instead of resuming original items in game`() {
    for (state in listOf("preparing", "ending", "grace", "playing")) {
      assertEquals("waiting", recoveredKimodameshiState(state, false))
    }
    assertEquals("waiting", recoveredKimodameshiState("preparing", true))
    assertEquals("waiting", recoveredKimodameshiState("ending", true))
  }

  @Test
  fun `only checkpointed active games can resume after restart`() {
    assertEquals("grace", recoveredKimodameshiState("grace", true))
    assertEquals("playing", recoveredKimodameshiState("playing", true))
    assertEquals("waiting", recoveredKimodameshiState("waiting", true))
  }

  @Test
  fun `restore includes all current equipment slots and original selection`() {
    val state = Inventory()
    val first = Marker()
    val last = Marker()
    val data =
        YamlConfiguration().apply {
          set("slot.0", first)
          set("slot.42", last)
          set("held-slot", 4)
        }
    restoreKimodameshiInventory(state.inventory, data)
    assertEquals(43, state.contents.size)
    assertSame(first, state.contents[0])
    assertSame(last, state.contents[42])
    assertNull(state.contents[41])
    assertEquals(4, state.selected)
  }

  @Test
  fun `legacy snapshots clear unused slots and keep selection when it was not recorded`() {
    val state = Inventory()
    state.contents[42] = Marker()
    restoreKimodameshiInventory(state.inventory, YamlConfiguration())
    assertTrue(state.contents.all { it == null })
    assertEquals(8, state.selected)
  }
}
