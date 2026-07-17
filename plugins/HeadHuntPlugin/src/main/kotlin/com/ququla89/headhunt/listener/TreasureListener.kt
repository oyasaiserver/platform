package com.ququla89.headhunt.listener

import com.ququla89.headhunt.manager.FindOutcome
import com.ququla89.headhunt.manager.GameManager
import com.ququla89.headhunt.manager.TreasureManager
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
import java.util.UUID

private const val PREFIX = "§6[HeadHunt] §r"

class TreasureListener(
    private val treasureManager: TreasureManager,
    private val gameManager: GameManager,
) : Listener {

    @EventHandler(priority = EventPriority.HIGH)
    fun onInteract(event: PlayerInteractEvent) {
        if (event.hand != EquipmentSlot.HAND) return
        if (event.action != Action.RIGHT_CLICK_BLOCK) return
        val block = event.clickedBlock ?: return
        if (block.state !is Skull) return

        val player = event.player
        val treasureId = treasureManager.readTreasureId(block)

        if (gameManager.setModeEnabled && player.isOp) {
            handleSetModeInteract(player, block, treasureId, event)
            return
        }

        if (gameManager.isRunning && treasureId != null) {
            event.isCancelled = true
            handleFind(player, treasureId)
        }
    }

    private fun handleSetModeInteract(
        player: Player,
        block: Block,
        treasureId: UUID?,
        event: PlayerInteractEvent,
    ) {
        if (treasureId != null) {
            if (player.isSneaking) {
                treasureManager.unregisterAt(block)
                treasureManager.save()
                player.sendMessage(PREFIX + "§a宝HEADの登録を解除しました。")
            } else {
                player.sendMessage(PREFIX + "§e既に登録済みです。")
            }
            event.isCancelled = true
            return
        }

        val mainHandEmpty = player.inventory.itemInMainHand.type == Material.AIR
        if (mainHandEmpty) {
            val treasure = treasureManager.register(block.location)
            if (treasure != null) {
                treasureManager.save()
                player.sendMessage(PREFIX + "§a宝HEADとして登録しました。 (合計: ${treasureManager.size}件)")
            }
            event.isCancelled = true
        }
    }

    private fun handleFind(player: Player, treasureId: UUID) {
        when (val outcome = gameManager.onTreasureFound(player.uniqueId, treasureId)) {
            is FindOutcome.NotInTeam -> {
                player.sendMessage(PREFIX + "§cチームに参加してください。")
            }
            is FindOutcome.AlreadyFoundBySelf -> Unit
            is FindOutcome.AlreadyFoundByTeammate -> {
                val finderName = Bukkit.getOfflinePlayer(outcome.finderId).name ?: "誰か"
                player.sendMessage(PREFIX + "§eチームメイトの${finderName}さんが発見済みです。")
            }
            is FindOutcome.GameNotRunning -> Unit
            is FindOutcome.Found -> {
                player.sendMessage(PREFIX + "§a宝を発見しました！")
                if (outcome.complete) {
                    announceCompletion(player, outcome.winnerTeamName)
                }
            }
        }
    }

    private fun announceCompletion(finder: Player, winnerTeamName: String?) {
        val message = if (winnerTeamName != null) {
            PREFIX + "§b${finder.name} §aさんがすべての宝を発見し、§b${winnerTeamName} §aチームの勝利です！"
        } else {
            PREFIX + "§b${finder.name} §aさんがすべての宝を発見しました！"
        }
        Bukkit.broadcastMessage(message)
        Bukkit.getConsoleSender().sendMessage(message)
    }

    @EventHandler
    fun onBlockPlace(event: BlockPlaceEvent) {
        if (!gameManager.setModeEnabled) return
        val player = event.player
        if (!player.isOp) return
        if (event.block.state !is Skull) return

        val treasure = treasureManager.register(event.block.location)
        if (treasure != null) {
            treasureManager.save()
            player.sendMessage(PREFIX + "§a設置したHEADを宝HEADとして登録しました。 (合計: ${treasureManager.size}件)")
        }
    }

    @EventHandler
    fun onBlockBreak(event: BlockBreakEvent) {
        val block = event.block
        if (!treasureManager.isTreasureBlock(block)) return

        if (gameManager.isRunning) {
            event.isCancelled = true
            return
        }

        treasureManager.unregisterAt(block)
        treasureManager.save()
        event.player.sendMessage(PREFIX + "§e宝HEADの登録を解除しました。(ブロック破壊)")
    }
}
