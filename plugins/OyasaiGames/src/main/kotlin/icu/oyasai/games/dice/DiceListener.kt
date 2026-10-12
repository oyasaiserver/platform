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
import org.bukkit.inventory.ItemStack

class DiceListener(
    private val diceItem: DiceItem,
    private val diceManager: DiceManager,
    private val chargeManager: DiceChargeManager,
) : Listener {

  /** サイコロに関連する操作かどうかを判定。 一般の建築（通常のLodestone等の設置）を誤って巻き込まないよう、サイコロ所持中またはチャージ中・直近投擲時のみ対象とする。 */
  private fun isDiceAction(player: Player, item: ItemStack?): Boolean {
    if (diceItem.isDice(item)) return true
    if (diceItem.isDice(player.inventory.itemInMainHand)) return true
    if (diceItem.isDice(player.inventory.itemInOffHand)) return true
    if (chargeManager.isCharging(player)) return true
    if (chargeManager.isRecentThrower(player)) return true
    return false
  }

  /** サイコロ使用中の誤ったブロック設置を防止。 (DiceItemのBLOCK_INTERACTION_RANGE短縮により通常は届かないが、万が一パケットが飛んだ場合の安全弁) */
  @EventHandler(priority = EventPriority.LOWEST, ignoreCancelled = false)
  fun onBlockPlace(event: BlockPlaceEvent) {
    val player = event.player
    if (!isDiceAction(player, event.itemInHand)) return

    event.isCancelled = true
    event.setBuild(false)
    event.blockReplacedState.update(true, false)
    player.updateInventory()

    val loc = event.blockPlaced.location
    val previousData = event.blockReplacedState.blockData
    player.sendBlockChange(loc, previousData)

    // クライアント側（統合版等）のゴーストブロック予測を1tick後に再同期して確実に解消
    diceManager.plugin.server.scheduler.runTaskLater(
        diceManager.plugin,
        Runnable {
          if (loc.block.type == event.blockPlaced.type) {
            loc.block.setBlockData(previousData, false)
          }
          player.sendBlockChange(loc, previousData)
          player.updateInventory()
        },
        1L,
    )
  }

  @EventHandler(priority = EventPriority.LOWEST)
  fun onPlayerInteract(event: PlayerInteractEvent) {
    val player = event.player
    val mainHand = player.inventory.itemInMainHand
    val offHand = player.inventory.itemInOffHand
    val eventItem = event.item
    val effectiveItem = if (eventItem != null && !eventItem.type.isAir) eventItem else mainHand

    val isHoldingDice =
        diceItem.isDice(mainHand) || diceItem.isDice(offHand) || diceItem.isDice(effectiveItem)
    val isDiceContext = isHoldingDice || isDiceAction(player, effectiveItem)

    // オフハンド操作、またはサイコロ操作時のメインハンド以外での操作は無効化
    if (event.hand != EquipmentSlot.HAND) {
      if (isDiceContext) {
        event.setUseItemInHand(Event.Result.DENY)
        event.setUseInteractedBlock(Event.Result.DENY)
        event.isCancelled = true
      }
      return
    }

    if (isDiceContext) {
      val action = event.action

      if (action == Action.RIGHT_CLICK_AIR || action == Action.RIGHT_CLICK_BLOCK) {
        event.setUseItemInHand(Event.Result.DENY)
        event.setUseInteractedBlock(Event.Result.DENY)
        event.isCancelled = true

        val diceToUse = if (diceItem.isDice(mainHand)) mainHand else effectiveItem
        diceItem.sanitizePlayerDice(player)

        if (player.isSneaking) {
          chargeManager.cancel(player)
          val currentMode = diceItem.getDiceMode(diceToUse)
          val isBroadcast = diceItem.isBroadcast(diceToUse)
          DiceMenuGui.open(player, currentMode, isBroadcast, diceItem, diceManager)
        } else {
          chargeManager.onRightClick(player, diceToUse)
        }
      } else if (action == Action.LEFT_CLICK_AIR || action == Action.LEFT_CLICK_BLOCK) {
        if (chargeManager.isCharging(player)) {
          chargeManager.cancel(player)
        }
      }
      return
    }

    // サイコロを持っていなくても、周囲の止まったサイコロを右クリックで回収可能
    val action = event.action
    if (action == Action.RIGHT_CLICK_AIR || action == Action.RIGHT_CLICK_BLOCK) {
      if (chargeManager.isRecentThrower(player)) {
        event.setUseItemInHand(Event.Result.DENY)
        event.setUseInteractedBlock(Event.Result.DENY)
        event.isCancelled = true
      }

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
    val player = event.player
    // 統合版（Bedrock）プレイヤーの場合、画面タッチ操作でアームスイングが発生するためチャージをキャンセルしない
    if (BedrockSupport.isBedrockPlayer(player)) return
    if (chargeManager.isCharging(player)) {
      chargeManager.cancel(player)
    }
  }

  @EventHandler
  fun onPlayerQuit(event: PlayerQuitEvent) {
    if (chargeManager.isCharging(event.player)) {
      chargeManager.cancel(event.player)
    }
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
        val statusText = if (newBroadcast) "全体公開 (ON)" else "自分のみ (非公開)"
        val statusColor = if (newBroadcast) NamedTextColor.GREEN else NamedTextColor.AQUA
        player.sendMessage(
            Component.text("[おやさいサイコロ] 投擲時の公開設定を ", NamedTextColor.GOLD)
                .append(Component.text(statusText, statusColor))
                .append(Component.text(" に切り替えました！", NamedTextColor.GOLD))
        )
        val refreshedMode = diceItem.getDiceMode(heldItem)
        DiceMenuGui.open(player, refreshedMode, newBroadcast, diceItem, diceManager)
      }
      DiceMenuGui.SLOT_RECEIVE_CHAT -> {
        val newReceive = diceManager.toggleChatReceive(player)
        player.playSound(
            player.location,
            Sound.UI_BUTTON_CLICK,
            0.8f,
            if (newReceive) 1.4f else 0.8f,
        )
        val statusText = if (newReceive) "受信する (ON)" else "受信しない (OFF)"
        val statusColor = if (newReceive) NamedTextColor.GREEN else NamedTextColor.RED
        player.sendMessage(
            Component.text("[おやさいサイコロ] 他人のサイコロ結果のチャット通知を ", NamedTextColor.GOLD)
                .append(Component.text(statusText, statusColor))
                .append(Component.text(" に切り替えました！", NamedTextColor.GOLD))
        )
        val currentMode = diceItem.getDiceMode(heldItem)
        val isBroadcast = diceItem.isBroadcast(heldItem)
        DiceMenuGui.open(player, currentMode, isBroadcast, diceItem, diceManager)
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
      item: ItemStack,
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
    DiceMenuGui.open(player, mode, isBroadcast, diceItem, diceManager)
  }

  private fun updateCountAndRefresh(
      player: Player,
      item: ItemStack,
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
    DiceMenuGui.open(player, newMode, isBroadcast, diceItem, diceManager)
  }

  @EventHandler(priority = EventPriority.HIGH)
  fun onInventoryDrag(event: InventoryDragEvent) {
    if (event.view.topInventory.holder is DiceMenuHolder) {
      event.isCancelled = true
    }
  }
}
