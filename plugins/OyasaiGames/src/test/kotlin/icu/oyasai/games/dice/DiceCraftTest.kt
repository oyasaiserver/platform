package icu.oyasai.games.dice

import java.lang.reflect.Proxy
import kotlin.test.Test
import kotlin.test.assertFalse
import kotlin.test.assertNull
import kotlin.test.assertSame
import kotlin.test.assertTrue
import org.bukkit.Material
import org.bukkit.NamespacedKey
import org.bukkit.block.Block
import org.bukkit.block.Crafter
import org.bukkit.event.block.CrafterCraftEvent
import org.bukkit.event.inventory.ClickType
import org.bukkit.event.inventory.CraftItemEvent
import org.bukkit.event.inventory.InventoryAction
import org.bukkit.event.inventory.InventoryType
import org.bukkit.event.inventory.PrepareItemCraftEvent
import org.bukkit.inventory.CraftingInventory
import org.bukkit.inventory.CraftingRecipe
import org.bukkit.inventory.Inventory
import org.bukkit.inventory.InventoryView
import org.bukkit.inventory.ItemStack
import org.bukkit.inventory.meta.ItemMeta
import org.bukkit.persistence.PersistentDataContainer
import org.bukkit.persistence.PersistentDataType
import org.bukkit.plugin.Plugin

class DiceCraftTest {
  private val plugin =
      proxy(Plugin::class.java) { name, _ ->
        when (name) {
          "getName" -> "OyasaiGames"
          "namespace" -> "oyasaigames"
          else -> error("Unexpected plugin method: $name")
        }
      }
  private val diceItem = DiceItem(plugin)
  private val diceManager = DiceManager(plugin, diceItem)
  private val listener =
      DiceListener(diceItem, diceManager, DiceChargeManager(plugin, diceItem, diceManager))

  @Test
  fun `all dice materials are rejected in every personal and workbench ingredient slot`() {
    for (mode in DiceMode.BASE_MODES) {
      for (size in listOf(4, 9)) {
        for (slot in 0 until size) {
          val matrix = arrayOfNulls<ItemStack>(size)
          matrix[slot] = stack(mode.material, diceMeta())
          val fixture = CraftFixture(matrix)
          listener.onPrepareItemCraft(fixture.prepare())
          assertNull(fixture.result, "${mode.id}, grid $size, slot $slot")
        }
      }
    }
  }

  @Test
  fun `mode marker alone also protects existing dice`() {
    val fixture = CraftFixture(arrayOf(stack(Material.EMERALD_BLOCK, diceMeta(modeOnly = true))))
    listener.onPrepareItemCraft(fixture.prepare())
    assertNull(fixture.result)
    val event = fixture.craft(ClickType.LEFT)
    listener.onCraftItem(event)
    assertTrue(event.isCancelled)
  }

  @Test
  fun `craft commit rechecks ingredients for normal shift hotbar and drop clicks`() {
    for (material in listOf(Material.DIAMOND_BLOCK, Material.EMERALD_BLOCK)) {
      for (click in
          listOf(
              ClickType.LEFT,
              ClickType.SHIFT_LEFT,
              ClickType.NUMBER_KEY,
              ClickType.DROP,
              ClickType.CONTROL_DROP,
          )) {
        val fixture = CraftFixture(arrayOf(stack(material)))
        listener.onPrepareItemCraft(fixture.prepare())
        assertSame(fixture.output, fixture.result)
        fixture.matrix[0] = stack(material, diceMeta())
        val event = fixture.craft(click)
        listener.onCraftItem(event)
        assertTrue(event.isCancelled, "$material, $click")
        assertNull(fixture.result)
      }
    }
  }

  @Test
  fun `ordinary minerals and empty slots retain their crafting result`() {
    for (material in listOf(Material.DIAMOND_BLOCK, Material.EMERALD_BLOCK)) {
      val fixture = CraftFixture(arrayOf(null, stack(Material.AIR), stack(material), null))
      listener.onPrepareItemCraft(fixture.prepare())
      assertSame(fixture.output, fixture.result)
      val event = fixture.craft(ClickType.SHIFT_LEFT)
      listener.onCraftItem(event)
      assertFalse(event.isCancelled)
      assertSame(fixture.output, fixture.result)
      event.isCancelled = true
      listener.onCraftItem(event)
      assertTrue(event.isCancelled)
    }
  }

  @Test
  fun `automated crafter rejects dice in every ingredient slot`() {
    for (mode in DiceMode.BASE_MODES) {
      for (slot in 0 until 9) {
        val contents = arrayOfNulls<ItemStack>(9)
        contents[slot] = stack(mode.material, diceMeta())
        val event = crafterEvent(contents)
        listener.onCrafterCraft(event)
        assertTrue(event.isCancelled, "${mode.id}, slot $slot")
      }
    }
  }

  @Test
  fun `automated crafter permits ordinary mineral ingredients`() {
    for (material in listOf(Material.DIAMOND_BLOCK, Material.EMERALD_BLOCK)) {
      val event = crafterEvent(arrayOf(null, stack(material), stack(Material.AIR)))
      listener.onCrafterCraft(event)
      assertFalse(event.isCancelled)
      event.isCancelled = true
      listener.onCrafterCraft(event)
      assertTrue(event.isCancelled)
    }
  }

  private fun diceMeta(modeOnly: Boolean = false): ItemMeta {
    val data =
        proxy(PersistentDataContainer::class.java) { name, args ->
          when (name) {
            "has" ->
                if (modeOnly) {
                  args!![0] == diceItem.modeKey && args[1] == PersistentDataType.STRING
                } else {
                  args!![0] == diceItem.diceKey && args[1] == PersistentDataType.BYTE
                }
            else -> error("Unexpected PDC method: $name")
          }
        }
    return proxy(ItemMeta::class.java) { name, _ ->
      when (name) {
        "getPersistentDataContainer" -> data
        else -> error("Unexpected item meta method: $name")
      }
    }
  }

  private fun stack(material: Material, meta: ItemMeta? = null): ItemStack =
      object : ItemStack() {
        override fun getType() = material

        override fun getItemMeta() = meta

        public override fun clone(): ItemStack = stack(material, meta)
      }

  private inner class CraftFixture(val matrix: Array<ItemStack?>) {
    val output = stack(Material.DIAMOND)
    var result: ItemStack? = output
    val inventory =
        proxy(CraftingInventory::class.java) { name, args ->
          when (name) {
            "getMatrix" -> matrix
            "getResult" -> result
            "setResult" -> {
              result = args!![0] as ItemStack?
              null
            }
            else -> error("Unexpected crafting inventory method: $name")
          }
        }
    val view =
        proxy(InventoryView::class.java) { name, args ->
          when (name) {
            "getTopInventory" -> inventory
            "convertSlot" -> args!![0]
            else -> error("Unexpected inventory view method: $name")
          }
        }

    fun prepare() = PrepareItemCraftEvent(inventory, view, false)

    fun craft(click: ClickType) =
        CraftItemEvent(
            recipe(),
            view,
            InventoryType.SlotType.RESULT,
            0,
            click,
            if (click == ClickType.SHIFT_LEFT) InventoryAction.MOVE_TO_OTHER_INVENTORY
            else InventoryAction.PICKUP_ALL,
            0,
        )
  }

  private fun crafterEvent(contents: Array<ItemStack?>): CrafterCraftEvent {
    val inventory =
        proxy(Inventory::class.java) { name, _ ->
          if (name == "getContents") contents
          else error("Unexpected crafter inventory method: $name")
        }
    val crafter =
        proxy(Crafter::class.java) { name, _ ->
          if (name == "getInventory") inventory else error("Unexpected crafter method: $name")
        }
    val block =
        proxy(Block::class.java) { name, _ ->
          if (name == "getState") crafter else error("Unexpected block method: $name")
        }
    return CrafterCraftEvent(block, recipe(), stack(Material.DIAMOND))
  }

  private fun recipe(): CraftingRecipe =
      object :
          CraftingRecipe(
              NamespacedKey("oyasaigames", "dice_craft_test"),
              stack(Material.DIAMOND),
          ) {}

  private fun <T> proxy(type: Class<T>, call: (String, Array<Any?>?) -> Any?): T =
      type.cast(
          Proxy.newProxyInstance(type.classLoader, arrayOf(type)) { _, method, args ->
            call(method.name, args)
          }
      )
}
