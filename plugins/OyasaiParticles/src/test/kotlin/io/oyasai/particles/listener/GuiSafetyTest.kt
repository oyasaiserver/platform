package io.oyasai.particles.listener

import io.oyasai.particles.gui.AreaEditorHolder
import io.oyasai.particles.gui.AreaGuiManager
import io.oyasai.particles.gui.AreaListHolder
import io.oyasai.particles.gui.AreaOptionSelectHolder
import io.oyasai.particles.gui.EffectSelectionCategory
import kotlin.test.Test
import org.bukkit.entity.Player
import org.bukkit.event.inventory.ClickType
import org.bukkit.event.inventory.InventoryAction
import org.bukkit.event.inventory.InventoryClickEvent
import org.bukkit.event.inventory.InventoryDragEvent
import org.bukkit.event.inventory.InventoryType
import org.bukkit.inventory.Inventory
import org.bukkit.inventory.InventoryHolder
import org.bukkit.inventory.InventoryView
import org.mockito.Mockito

class GuiSafetyTest {

  @Test
  fun `cancels collect to cursor and lower inventory clicks on particle gui`() {
    val guiManager = Mockito.mock(AreaGuiManager::class.java)
    val listener = GuiListener(guiManager)
    val holder = AreaListHolder(showAll = false, page = 0)
    val topInventory = Mockito.mock(Inventory::class.java)
    Mockito.`when`(topInventory.holder).thenReturn(holder)
    Mockito.`when`(topInventory.size).thenReturn(54)

    val view = Mockito.mock(InventoryView::class.java)
    Mockito.`when`(view.topInventory).thenReturn(topInventory)
    val player = Mockito.mock(Player::class.java)
    Mockito.`when`(view.player).thenReturn(player)

    val clickLower =
        InventoryClickEvent(
            view,
            InventoryType.SlotType.CONTAINER,
            60,
            ClickType.DOUBLE_CLICK,
            InventoryAction.COLLECT_TO_CURSOR,
        )
    listener.onInventoryClick(clickLower)
    kotlin.test.assertTrue(clickLower.isCancelled)
    Mockito.verifyNoInteractions(guiManager)
  }

  @Test
  fun `cancels inventory drag on editor gui`() {
    val guiManager = Mockito.mock(AreaGuiManager::class.java)
    val listener = GuiListener(guiManager)
    val holder = AreaEditorHolder(areaId = "sample")
    val topInventory = Mockito.mock(Inventory::class.java)
    Mockito.`when`(topInventory.holder).thenReturn(holder)

    val view = Mockito.mock(InventoryView::class.java)
    Mockito.`when`(view.topInventory).thenReturn(topInventory)
    val player = Mockito.mock(Player::class.java)
    Mockito.`when`(view.player).thenReturn(player)

    val dragEvent =
        InventoryDragEvent(
            view,
            null,
            Mockito.mock(org.bukkit.inventory.ItemStack::class.java),
            false,
            emptyMap(),
        )
    listener.onInventoryDrag(dragEvent)
    kotlin.test.assertTrue(dragEvent.isCancelled)
  }

  @Test
  fun `ignores non-plugin inventory even if title matches`() {
    val guiManager = Mockito.mock(AreaGuiManager::class.java)
    val listener = GuiListener(guiManager)
    val foreignHolder = Mockito.mock(InventoryHolder::class.java)
    val topInventory = Mockito.mock(Inventory::class.java)
    Mockito.`when`(topInventory.holder).thenReturn(foreignHolder)

    val view = Mockito.mock(InventoryView::class.java)
    Mockito.`when`(view.topInventory).thenReturn(topInventory)
    val player = Mockito.mock(Player::class.java)
    Mockito.`when`(view.player).thenReturn(player)

    val clickEvent =
        InventoryClickEvent(
            view,
            InventoryType.SlotType.CONTAINER,
            0,
            ClickType.LEFT,
            InventoryAction.PICKUP_ALL,
        )
    listener.onInventoryClick(clickEvent)
    kotlin.test.assertFalse(clickEvent.isCancelled)
  }

  @Test
  fun `cancels inventory drag on option selector gui`() {
    val guiManager = Mockito.mock(AreaGuiManager::class.java)
    val listener = GuiListener(guiManager)
    val holder =
        AreaOptionSelectHolder(areaId = "sample", category = EffectSelectionCategory.PARTICLE)
    val topInventory = Mockito.mock(Inventory::class.java)
    Mockito.`when`(topInventory.holder).thenReturn(holder)

    val view = Mockito.mock(InventoryView::class.java)
    Mockito.`when`(view.topInventory).thenReturn(topInventory)
    val player = Mockito.mock(Player::class.java)
    Mockito.`when`(view.player).thenReturn(player)

    val dragEvent =
        InventoryDragEvent(
            view,
            null,
            Mockito.mock(org.bukkit.inventory.ItemStack::class.java),
            false,
            emptyMap(),
        )
    listener.onInventoryDrag(dragEvent)
    kotlin.test.assertTrue(dragEvent.isCancelled)
  }
}
