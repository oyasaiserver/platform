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

  private val diceMaterials: Set<org.bukkit.Material> by lazy {
    DiceType.entries.map { it.material }.toSet()
  }

  private fun isDiceRelated(
      player: Player,
      item: org.bukkit.inventory.ItemStack?,
      placedType: org.bukkit.Material? = null,
  ): Boolean {
    if (diceItem.isDice(item)) return true
    if (diceItem.isDice(player.inventory.itemInMainHand)) return true
    if (diceItem.isDice(player.inventory.itemInOffHand)) return true
    if (chargeManager.isCharging(player) || chargeManager.isRecentThrower(player)) return true

    // 設置されようとしているブロックがサイコロ素材の場合
    if (placedType != null && diceMaterials.contains(placedType)) {
      if (placedType == org.bukkit.Material.LODESTONE)
          return true // LODESTONEブロックの設置は無条件でサイコロ誤設置とみなして遮断
      if (diceItem.hasDice(player)) return true
      if (diceManager.hasActiveDice(player)) return true
      if (player.hasCooldown(placedType)) return true
      val main = player.inventory.itemInMainHand
      if (main.type == placedType) {
        if (
            diceItem.isDice(main) ||
                main.containsEnchantment(org.bukkit.enchantments.Enchantment.UNBREAKING)
        )
            return true
      }
    }

    // 手持ちアイテムがサイコロ素材の場合
    val mainItem = player.inventory.itemInMainHand
    if (diceMaterials.contains(mainItem.type)) {
      if (mainItem.type == org.bukkit.Material.LODESTONE) return true
      if (diceItem.hasDice(player)) return true
      if (diceManager.hasActiveDice(player)) return true
      if (player.hasCooldown(mainItem.type)) return true
    }

    return false
  }

  @EventHandler(priority = EventPriority.LOWEST)
  fun onBlockCanBuild(event: BlockCanBuildEvent) {
    val player = event.player ?: return
    val main = player.inventory.itemInMainHand
    val off = player.inventory.itemInOffHand
    if (isDiceRelated(player, main, main.type) || isDiceRelated(player, off, off.type)) {
      event.isBuildable = false
    }
  }

  @EventHandler(priority = EventPriority.LOWEST, ignoreCancelled = false)
  fun onBlockPlaceLowest(event: BlockPlaceEvent) {
    handleBlockPlace(event)
  }

  @EventHandler(priority = EventPriority.HIGHEST, ignoreCancelled = false)
  fun onBlockPlaceHighest(event: BlockPlaceEvent) {
    handleBlockPlace(event)
  }

  private fun handleBlockPlace(event: BlockPlaceEvent) {
    val player = event.player
    val placedType = event.blockPlaced.type
    val block = event.blockPlaced
    val loc = block.location
    val previousType = event.blockReplacedState.type
    val previousData = event.blockReplacedState.blockData

    if (isDiceRelated(player, event.itemInHand, placedType)) {
      event.isCancelled = true
      event.setBuild(false)
      event.blockReplacedState.update(true, false)
      player.updateInventory()

      // 1. 即時同期: 元のブロック状態を送信してクライアント側の即時予測を上書き
      player.sendBlockChange(loc, previousData)

      // 2. 1tick後: クライアント予測によるゴーストブロックを完全に抹消
      diceManager.plugin.server.scheduler.runTaskLater(
          diceManager.plugin,
          Runnable {
            if (loc.block.type == placedType) {
              loc.block.type = previousType
              loc.block.setBlockData(previousData, false)
            }
            player.sendBlockChange(loc, previousData)
            player.updateInventory()
          },
          1L,
      )

      // 3. 3tick後: GeyserMCのパケット遅延時にも確実に同期
      diceManager.plugin.server.scheduler.runTaskLater(
          diceManager.plugin,
          Runnable {
            if (loc.block.type == placedType) {
              loc.block.type = previousType
              loc.block.setBlockData(previousData, false)
            }
            player.sendBlockChange(loc, previousData)
            player.updateInventory()
          },
          3L,
      )

      // 4. 5tick後: 念押し同期
      diceManager.plugin.server.scheduler.runTaskLater(
          diceManager.plugin,
          Runnable {
            if (loc.block.type == placedType) {
              loc.block.type = previousType
              loc.block.setBlockData(previousData, false)
            }
            player.sendBlockChange(loc, previousData)
          },
          5L,
      )
    }
  }

  @EventHandler(priority = EventPriority.LOWEST)
  fun onPlayerInteract(event: PlayerInteractEvent) {
    val player = event.player
    val mainHand = player.inventory.itemInMainHand
    val offHand = player.inventory.itemInOffHand
    val eventItem = event.item
    val effectiveItem = if (eventItem != null && !eventItem.type.isAir) eventItem else mainHand

    // 誤って世界に残ってしまったLODESTONEブロックを右クリックした場合、自動で消去（空気化）
    if (event.clickedBlock?.type == org.bukkit.Material.LODESTONE) {
      val cBlock = event.clickedBlock!!
      cBlock.type = org.bukkit.Material.AIR
      player.sendBlockChange(cBlock.location, org.bukkit.Material.AIR.createBlockData())
    }

    val isHoldingDice =
        diceItem.isDice(mainHand) || diceItem.isDice(offHand) || diceItem.isDice(effectiveItem)
    val isDiceContext =
        isHoldingDice || isDiceRelated(player, effectiveItem, event.clickedBlock?.type)

    // オフハンド操作、またはメインハンド以外でのブロック設置・誤操作を完全遮断
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

        // ブロックを右クリックした場合、ゴースト設置を未然かつ確実に消去
        if (action == Action.RIGHT_CLICK_BLOCK) {
          val clicked = event.clickedBlock
          if (clicked != null) {
            val face = event.blockFace
            val targetLoc = clicked.getRelative(face).location
            val currentData = targetLoc.block.blockData
            val clickedData = clicked.blockData

            player.sendBlockChange(targetLoc, currentData)
            player.sendBlockChange(clicked.location, clickedData)

            diceManager.plugin.server.scheduler.runTaskLater(
                diceManager.plugin,
                Runnable {
                  player.sendBlockChange(targetLoc, targetLoc.block.blockData)
                  player.sendBlockChange(clicked.location, clicked.location.block.blockData)
                  player.updateInventory()
                },
                1L,
            )
            diceManager.plugin.server.scheduler.runTaskLater(
                diceManager.plugin,
                Runnable {
                  player.sendBlockChange(targetLoc, targetLoc.block.blockData)
                  player.sendBlockChange(clicked.location, clicked.location.block.blockData)
                  player.updateInventory()
                },
                3L,
            )
          }
        }

        val diceToUse = if (diceItem.isDice(mainHand)) mainHand else effectiveItem
        diceItem.sanitizePlayerDice(player)

        if (player.isSneaking) {
          chargeManager.cancel(player)
          val currentMode = diceItem.getDiceMode(diceToUse)
          val isBroadcast = diceItem.isBroadcast(diceToUse)
          DiceMenuGui.open(player, currentMode, isBroadcast, diceItem)
        } else {
          chargeManager.onRightClick(player, diceToUse)
        }
      } else if (action == Action.LEFT_CLICK_AIR || action == Action.LEFT_CLICK_BLOCK) {
        chargeManager.cancel(player)
      }
      return
    }

    // サイコロを持っていない場合でも、投擲直後や周囲・視線のサイコロ回収処理
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
    // 統合版（Bedrock）プレイヤーの場合、画面タッチ操作でアームスイングが発生するためチャージをキャンセルしない
    if (BedrockSupport.isBedrockPlayer(event.player)) return
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
