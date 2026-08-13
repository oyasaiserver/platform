package com.ququla89.headhunt.listener

import com.ququla89.headhunt.manager.FindOutcome
import com.ququla89.headhunt.manager.GameManager
import com.ququla89.headhunt.manager.TreasureManager
import com.ququla89.headhunt.util.broadcastLegacy
import java.util.UUID
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.block.Block
import org.bukkit.block.Skull
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.EventPriority
import org.bukkit.event.Listener
import org.bukkit.event.block.Action
import org.bukkit.event.block.BlockBreakEvent
import org.bukkit.event.block.BlockPlaceEvent
import org.bukkit.event.player.PlayerInteractEvent
import org.bukkit.inventory.EquipmentSlot

private const val PREFIX = "§6[HeadHunt] §r"

class TreasureListener(
    private val treasureManager: TreasureManager,
    private val gameManager: GameManager,
) : Listener {
  @EventHandler(priority = EventPriority.HIGHEST, ignoreCancelled = true)
  fun onInteract(event: PlayerInteractEvent) {
    if (event.hand != EquipmentSlot.HAND) return
    if (event.action != Action.RIGHT_CLICK_BLOCK) return
    val block = event.clickedBlock ?: return
    if (block.state !is Skull) return

    val player = event.player
    val markerId = treasureManager.readTreasureId(block)
    val registeredTreasure = treasureManager.findAt(block)

    if (gameManager.isSetModeEnabled(player.uniqueId) && player.hasPermission("headhunt.admin")) {
      handleSetModeInteract(player, block, markerId, registeredTreasure?.id, event)
      return
    }

    if (gameManager.isRunning && markerId != null) {
      event.isCancelled = true
      if (registeredTreasure == null) {
        player.sendMessage(PREFIX + "§cこの宝HEADは登録情報と一致しません。管理者に連絡してください。")
        return
      }
      handleFind(player, registeredTreasure.id)
    }
  }

  private fun handleSetModeInteract(
      player: Player,
      block: Block,
      markerId: UUID?,
      registeredTreasureId: UUID?,
      event: PlayerInteractEvent,
  ) {
    if (registeredTreasureId != null) {
      if (player.isSneaking) {
        treasureManager.unregisterAt(block)
        if (saveOrWarn(player)) {
          player.sendMessage(PREFIX + "§a宝HEADの登録を解除しました。")
        }
      } else {
        player.sendMessage(PREFIX + "§e既に登録済みです。")
      }
      event.isCancelled = true
      return
    }

    if (markerId != null && player.isSneaking) {
      treasureManager.unregisterAt(block)
      if (saveOrWarn(player)) {
        player.sendMessage(PREFIX + "§a古い宝HEADの登録情報を削除しました。")
      }
      event.isCancelled = true
      return
    }

    val mainHandEmpty = player.inventory.itemInMainHand.type == Material.AIR
    if (mainHandEmpty) {
      val treasure = treasureManager.register(block.location)
      if (treasure != null) {
        if (saveOrWarn(player)) {
          val repairLabel = if (markerId != null) "古い登録情報を修復し、" else ""
          player.sendMessage(
              PREFIX + "§a${repairLabel}宝HEADとして登録しました。 (合計: ${treasureManager.size}件)"
          )
        }
      }
      event.isCancelled = true
    }
  }

  private fun handleFind(
      player: Player,
      treasureId: UUID,
  ) {
    when (val outcome = gameManager.onTreasureFound(player.uniqueId, treasureId)) {
      is FindOutcome.NotInTeam -> {
        player.sendMessage(PREFIX + "§cチームに参加してください。")
      }

      is FindOutcome.InvalidTreasure -> {
        player.sendMessage(PREFIX + "§cこの宝HEADは登録情報と一致しません。管理者に連絡してください。")
      }

      is FindOutcome.AlreadyFoundBySelf -> {}

      is FindOutcome.AlreadyFoundByTeammate -> {
        val finderName = Bukkit.getOfflinePlayer(outcome.finderId).name ?: "誰か"
        player.sendMessage(PREFIX + "§eチームメイトの${finderName}さんが発見済みです。")
      }

      is FindOutcome.GameNotRunning -> {}

      is FindOutcome.Found -> {
        player.sendMessage(PREFIX + "§a宝を発見しました！")
        if (outcome.complete) {
          announceCompletion(player, outcome.winnerTeamName)
        }
      }
    }
  }

  private fun announceCompletion(
      finder: Player,
      winnerTeamName: String?,
  ) {
    val message =
        if (winnerTeamName != null) {
          PREFIX + "§b${finder.name} §aさんがすべての宝を発見し、§b$winnerTeamName §aチームの勝利です！"
        } else {
          PREFIX + "§b${finder.name} §aさんがすべての宝を発見しました！"
        }
    broadcastLegacy(message)
  }

  @EventHandler(priority = EventPriority.HIGHEST, ignoreCancelled = true)
  fun onBlockPlace(event: BlockPlaceEvent) {
    val player = event.player
    if (!gameManager.isSetModeEnabled(player.uniqueId)) return
    if (!player.hasPermission("headhunt.admin")) return
    if (event.block.state !is Skull) return

    val treasure = treasureManager.register(event.block.location)
    if (treasure != null) {
      if (saveOrWarn(player)) {
        player.sendMessage(PREFIX + "§a設置したHEADを宝HEADとして登録しました。 (合計: ${treasureManager.size}件)")
      }
    }
  }

  @EventHandler(priority = EventPriority.HIGHEST, ignoreCancelled = true)
  fun onBlockBreak(event: BlockBreakEvent) {
    val block = event.block
    if (!treasureManager.isTreasureBlock(block)) return

    if (gameManager.isRunning && treasureManager.findAt(block) != null) {
      event.isCancelled = true
      return
    }

    val removedTreasure = treasureManager.unregisterAt(block)
    if (saveOrWarn(event.player)) {
      val message =
          if (removedTreasure != null) {
            "§e宝HEADの登録を解除しました。(ブロック破壊)"
          } else {
            "§e古い宝HEADの登録情報を削除しました。(ブロック破壊)"
          }
      event.player.sendMessage(PREFIX + message)
    }
  }

  private fun saveOrWarn(player: Player): Boolean {
    if (treasureManager.save()) return true
    player.sendMessage(PREFIX + "§c宝HEAD情報の保存に失敗しました。管理者に連絡してください。")
    return false
  }
}
