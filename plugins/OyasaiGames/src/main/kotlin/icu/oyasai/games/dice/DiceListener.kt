package icu.oyasai.games.dice

import net.kyori.adventure.text.Component
import net.kyori.adventure.text.format.NamedTextColor
import org.bukkit.Sound
import org.bukkit.entity.Player
import org.bukkit.event.Event
import org.bukkit.event.EventHandler
import org.bukkit.event.EventPriority
import org.bukkit.event.Listener
import org.bukkit.event.block.Action
import org.bukkit.event.block.BlockCanBuildEvent
import org.bukkit.event.block.BlockPlaceEvent
import org.bukkit.event.inventory.InventoryClickEvent
import org.bukkit.event.inventory.InventoryDragEvent
import org.bukkit.event.player.PlayerAnimationEvent
import org.bukkit.event.player.PlayerChangedWorldEvent
import org.bukkit.event.player.PlayerInteractAtEntityEvent
import org.bukkit.event.player.PlayerInteractEntityEvent
import org.bukkit.event.player.PlayerInteractEvent
import org.bukkit.event.player.PlayerJoinEvent
import org.bukkit.event.player.PlayerQuitEvent
import org.bukkit.inventory.EquipmentSlot

class DiceListener(
    private val diceItem: DiceItem,
    private val diceManager: DiceManager,
    private val chargeManager: DiceChargeManager,
) : Listener {

  @EventHandler(priority = EventPriority.LOWEST)
  fun onBlockCanBuild(event: BlockCanBuildEvent) {
    val player = event.player ?: return
    if (
        diceItem.isDice(player.inventory.itemInMainHand) ||
            diceItem.isDice(player.inventory.itemInOffHand)
    ) {
      event.isBuildable = false
    }
  }

  @EventHandler(priority = EventPriority.LOWEST, ignoreCancelled = false)
  fun onBlockPlace(event: BlockPlaceEvent) {
    val player = event.player
    if (
        diceItem.isDice(event.itemInHand) ||
            diceItem.isDice(player.inventory.itemInMainHand) ||
            diceItem.isDice(player.inventory.itemInOffHand)
    ) {
      event.isCancelled = true
      event.setBuild(false)
      event.blockReplacedState.update(true, false)
      player.updateInventory()
    }
  }

  @EventHandler(priority = EventPriority.LOWEST)
  fun onPlayerInteract(event: PlayerInteractEvent) {
    val player = event.player
    val item = event.item

    // サイコロの右クリック操作（メインハンド優先、オフハンドでのブロック設置重複を完全遮断）
    if (event.hand != EquipmentSlot.HAND) {
      if (item != null && diceItem.isDice(item)) {
        event.setUseItemInHand(Event.Result.DENY)
        event.setUseInteractedBlock(Event.Result.DENY)
        event.isCancelled = true
      }
      return
    }

    if (item != null && diceItem.isDice(item)) {
      diceItem.sanitizePlayerDice(player)
      val action = event.action

      if (action == Action.RIGHT_CLICK_AIR || action == Action.RIGHT_CLICK_BLOCK) {
        event.setUseItemInHand(Event.Result.DENY)
        event.setUseInteractedBlock(Event.Result.DENY)
        event.isCancelled = true

        // 手の届く範囲のブロックを右クリックした場合、クライアント側のゴースト設置を防止
        if (action == Action.RIGHT_CLICK_BLOCK) {
          val placedBlock = event.clickedBlock?.getRelative(event.blockFace)
          if (placedBlock != null) {
            player.sendBlockChange(placedBlock.location, placedBlock.blockData)
          }
        }

        if (player.isSneaking) {
          chargeManager.cancel(player)
          val currentMode = diceItem.getDiceMode(item)
          val isBroadcast = diceItem.isBroadcast(item)
          DiceMenuGui.open(player, currentMode, isBroadcast, diceItem)
        } else {
          chargeManager.onRightClick(player, item)
        }
      } else if (action == Action.LEFT_CLICK_AIR || action == Action.LEFT_CLICK_BLOCK) {
        chargeManager.cancel(player)
      }
      return
    }

    // サイコロを持っていない場合でも、周囲・視線のサイコロを手動回収可能にする
    val action = event.action
    if (action == Action.RIGHT_CLICK_AIR || action == Action.RIGHT_CLICK_BLOCK) {
      val targetLoc = event.clickedBlock?.location?.add(0.5, 0.5, 0.5)
      if (diceManager.tryCollectNearby(player, targetLoc)) {
        event.isCancelled = true
      }
    }
  }

  @EventHandler(priority = EventPriority.HIGH)
  fun onEntityInteract(event: PlayerInteractAtEntityEvent) {
    val entity = event.rightClicked
    if (diceManager.handleEntityInteract(event.player, entity.entityId)) {
      event.isCancelled = true
    }
  }

  @EventHandler(priority = EventPriority.HIGH)
  fun onPlayerInteractEntity(event: PlayerInteractEntityEvent) {
    val entity = event.rightClicked
    if (diceManager.handleEntityInteract(event.player, entity.entityId)) {
      event.isCancelled = true
    }
  }

  @EventHandler
  fun onPlayerAnimation(event: PlayerAnimationEvent) {
    chargeManager.cancel(event.player)
  }

  @EventHandler
  fun onPlayerQuit(event: PlayerQuitEvent) {
    chargeManager.cancel(event.player)
    diceManager.handlePlayerQuit(event.player)
  }

  @EventHandler(priority = EventPriority.MONITOR)
  fun onPlayerJoin(event: PlayerJoinEvent) {
    diceManager.updatePlayerVisibility(event.player)
  }

  @EventHandler(priority = EventPriority.MONITOR)
  fun onPlayerChangedWorld(event: PlayerChangedWorldEvent) {
    diceManager.updatePlayerVisibility(event.player)
  }

  @EventHandler(priority = EventPriority.HIGH)
  fun onInventoryClick(event: InventoryClickEvent) {
    if (event.view.topInventory.holder !is DiceMenuHolder) return
    event.isCancelled = true

    val player = event.whoClicked as? Player ?: return
    if (event.clickedInventory != event.view.topInventory) return

    val heldItem = player.inventory.itemInMainHand
    if (!diceItem.isDice(heldItem)) {
      player.closeInventory()
      return
    }

    val currentMode = diceItem.getDiceMode(heldItem)
    val currentCount = currentMode.diceCount

    when (event.slot) {
      DiceMenuGui.SLOT_D2 ->
          updateModeAndRefresh(player, heldItem, DiceMode.D2.withCount(currentCount))
      DiceMenuGui.SLOT_D4 ->
          updateModeAndRefresh(player, heldItem, DiceMode.D4.withCount(currentCount))
      DiceMenuGui.SLOT_1D6 ->
          updateModeAndRefresh(player, heldItem, DiceMode.ONE_D6.withCount(currentCount))
      DiceMenuGui.SLOT_D8 ->
          updateModeAndRefresh(player, heldItem, DiceMode.D8.withCount(currentCount))
      DiceMenuGui.SLOT_D10 ->
          updateModeAndRefresh(player, heldItem, DiceMode.D10.withCount(currentCount))
      DiceMenuGui.SLOT_D12 ->
          updateModeAndRefresh(player, heldItem, DiceMode.D12.withCount(currentCount))
      DiceMenuGui.SLOT_D20 ->
          updateModeAndRefresh(player, heldItem, DiceMode.D20.withCount(currentCount))
      DiceMenuGui.SLOT_D100 ->
          updateModeAndRefresh(player, heldItem, DiceMode.D100.withCount(currentCount))

      DiceMenuGui.SLOT_COUNT_1 -> updateCountAndRefresh(player, heldItem, currentMode, 1)
      DiceMenuGui.SLOT_COUNT_2 -> updateCountAndRefresh(player, heldItem, currentMode, 2)
      DiceMenuGui.SLOT_COUNT_3 -> updateCountAndRefresh(player, heldItem, currentMode, 3)
      DiceMenuGui.SLOT_COUNT_4 -> updateCountAndRefresh(player, heldItem, currentMode, 4)
      DiceMenuGui.SLOT_COUNT_5 -> updateCountAndRefresh(player, heldItem, currentMode, 5)
      DiceMenuGui.SLOT_COUNT_6 -> updateCountAndRefresh(player, heldItem, currentMode, 6)
      DiceMenuGui.SLOT_COUNT_7 -> updateCountAndRefresh(player, heldItem, currentMode, 7)
      DiceMenuGui.SLOT_COUNT_8 -> updateCountAndRefresh(player, heldItem, currentMode, 8)
      DiceMenuGui.SLOT_COUNT_9 -> updateCountAndRefresh(player, heldItem, currentMode, 9)
      DiceMenuGui.SLOT_COUNT_10 -> updateCountAndRefresh(player, heldItem, currentMode, 10)

      DiceMenuGui.SLOT_BROADCAST -> {
        val newBroadcast = diceItem.toggleBroadcast(heldItem)
        player.playSound(
            player.location,
            Sound.UI_BUTTON_CLICK,
            0.8f,
            if (newBroadcast) 1.4f else 0.8f,
        )
        val statusText = if (newBroadcast) "全体公開 (ON)" else "自分のみ (OFF)"
        val statusColor = if (newBroadcast) NamedTextColor.GREEN else NamedTextColor.RED
        player.sendMessage(
            Component.text("[おやさいサイコロ] チャット通知を ", NamedTextColor.GOLD)
                .append(Component.text(statusText, statusColor))
                .append(Component.text(" に切り替えました！", NamedTextColor.GOLD))
        )
        val refreshedMode = diceItem.getDiceMode(heldItem)
        DiceMenuGui.open(player, refreshedMode, newBroadcast, diceItem)
      }
      DiceMenuGui.SLOT_STATUS -> {
        player.playSound(player.location, Sound.ITEM_BOOK_PAGE_TURN, 0.7f, 1.0f)
      }
      DiceMenuGui.SLOT_CLOSE -> {
        player.playSound(player.location, Sound.UI_BUTTON_CLICK, 0.7f, 0.9f)
        player.closeInventory()
      }
    }
  }

  private fun updateModeAndRefresh(
      player: Player,
      item: org.bukkit.inventory.ItemStack,
      mode: DiceMode,
  ) {
    diceItem.updateDiceSettings(item, newMode = mode)
    player.playSound(player.location, Sound.UI_BUTTON_CLICK, 0.8f, 1.3f)
    player.sendMessage(
        Component.text("[おやさいサイコロ] モードを ", NamedTextColor.GOLD)
            .append(Component.text(mode.displayName, NamedTextColor.GREEN))
            .append(Component.text(" に切り替えました！", NamedTextColor.GOLD))
    )
    val isBroadcast = diceItem.isBroadcast(item)
    DiceMenuGui.open(player, mode, isBroadcast, diceItem)
  }

  private fun updateCountAndRefresh(
      player: Player,
      item: org.bukkit.inventory.ItemStack,
      currentMode: DiceMode,
      targetCount: Int,
  ) {
    if (currentMode.diceCount == targetCount) return
    val newMode = currentMode.withCount(targetCount)
    diceItem.updateDiceSettings(item, newMode = newMode)
    player.playSound(player.location, Sound.UI_BUTTON_CLICK, 0.8f, 1.4f)
    player.sendMessage(
        Component.text("[おやさいサイコロ] 投げる個数を ", NamedTextColor.GOLD)
            .append(
                Component.text(
                    "${targetCount}個 (${targetCount}D)",
                    NamedTextColor.GREEN,
                )
            )
            .append(Component.text(" に切り替えました！", NamedTextColor.GOLD))
    )
    val isBroadcast = diceItem.isBroadcast(item)
    DiceMenuGui.open(player, newMode, isBroadcast, diceItem)
  }

  @EventHandler(priority = EventPriority.HIGH)
  fun onInventoryDrag(event: InventoryDragEvent) {
    if (event.view.topInventory.holder is DiceMenuHolder) {
      event.isCancelled = true
    }
  }
}
