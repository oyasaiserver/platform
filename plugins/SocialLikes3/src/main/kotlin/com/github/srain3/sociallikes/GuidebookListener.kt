package com.github.srain3.sociallikes

import com.github.srain3.sociallikes.Tools.color
import com.github.srain3.sociallikes.datas.Data
import com.github.srain3.sociallikes.datas.SLDatabase
import com.github.srain3.sociallikes.gui.GuidebookBookUI
import java.util.UUID
import org.bukkit.block.Sign
import org.bukkit.event.EventHandler
import org.bukkit.event.EventPriority
import org.bukkit.event.Listener
import org.bukkit.event.block.Action
import org.bukkit.event.player.PlayerInteractEvent
import org.bukkit.event.player.PlayerQuitEvent
import org.bukkit.inventory.EquipmentSlot

object GuidebookListener : Listener {
  private const val TELEPORT_COOLDOWN_MILLIS = 30_000L

  private val addModes = mutableMapOf<UUID, Int>()
  private val lastTeleports = mutableMapOf<UUID, Long>()

  fun startAddMode(player: org.bukkit.entity.Player, guidebookId: Int) {
    addModes[player.uniqueId] = guidebookId
    player.sendMessage(Tools.socialLikesLOGO + " &e編集キーを持って、追加するSL看板を右クリックしてください。".color())
  }

  fun handleSignRightClick(event: PlayerInteractEvent, sign: Sign): Boolean {
    if (event.hand != EquipmentSlot.HAND) return false
    val item = event.player.inventory.itemInMainHand
    val editorId = GuidebookService.editorId(item) ?: return false
    event.isCancelled = true
    if (!ready(event.player)) return true
    if (addModes[event.player.uniqueId] == editorId) {
      val build =
          Events.readSignId(sign)?.let(Data::getSLData)
              ?: Data.getSLDataAll().firstOrNull {
                it.worldName == sign.world.name &&
                    it.loc.blockX == sign.x &&
                    it.loc.blockY == sign.y &&
                    it.loc.blockZ == sign.z
              }
      if (
          build == null ||
              build.worldName != sign.world.name ||
              build.loc.blockX != sign.x ||
              build.loc.blockY != sign.y ||
              build.loc.blockZ != sign.z ||
              (!Tools.isSLSign(sign) && !Tools.isLegacySLSign(sign))
      ) {
        event.player.sendMessage(Tools.socialLikesLOGO + " &c有効なSL看板ではありません。".color())
        return true
      }
      if (GuidebookService.addBuild(event.player, editorId, build)) {
        addModes.remove(event.player.uniqueId)
        GuidebookBookUI.openEditor(event.player, editorId)
      }
      return true
    }

    GuidebookBookUI.openEditor(event.player, editorId)
    return true
  }

  @EventHandler(priority = EventPriority.HIGHEST, ignoreCancelled = false)
  fun onInteract(event: PlayerInteractEvent) {
    if (event.hand != EquipmentSlot.HAND) return
    val item = event.player.inventory.itemInMainHand
    val touristId = GuidebookService.touristId(item)
    if (touristId != null) {
      if (!ready(event.player)) {
        event.isCancelled = true
        return
      }
      when (event.action) {
        Action.LEFT_CLICK_AIR,
        Action.LEFT_CLICK_BLOCK -> {
          event.isCancelled = true
          teleport(event.player, touristId)
        }
        Action.RIGHT_CLICK_AIR,
        Action.RIGHT_CLICK_BLOCK ->
            if (opensBook(event)) {
              event.isCancelled = true
              openTouristInfo(event.player, touristId)
            }
        else -> Unit
      }
      return
    }

    val editorId = GuidebookService.editorId(item) ?: return
    if (!ready(event.player)) {
      event.isCancelled = true
      return
    }
    if (opensBook(event)) {
      event.isCancelled = true
      GuidebookBookUI.openEditor(event.player, editorId)
    }
  }

  /** 右クリックで本を開いてよいか。看板・チェストなど元から右クリック操作があるブロックはそちらを優先する */
  private fun opensBook(event: PlayerInteractEvent): Boolean =
      event.action == Action.RIGHT_CLICK_AIR ||
          (event.action == Action.RIGHT_CLICK_BLOCK &&
              event.clickedBlock?.type?.isInteractable != true)

  @EventHandler
  fun onQuit(event: PlayerQuitEvent) {
    addModes.remove(event.player.uniqueId)
    GuidebookBookUI.clear(event.player.uniqueId)
  }

  private fun teleport(player: org.bukkit.entity.Player, guidebookId: Int) {
    val guidebook = SLDatabase.loadGuidebookBlocking(guidebookId)
    if (guidebook == null || !guidebook.published) {
      player.sendMessage(Tools.socialLikesLOGO + " &cこのガイドブックは現在公開されていません。".color())
      return
    }
    val now = System.currentTimeMillis()
    val remaining = TELEPORT_COOLDOWN_MILLIS - (now - (lastTeleports[player.uniqueId] ?: 0L))
    if (remaining > 0) {
      player.sendMessage(
          Tools.socialLikesLOGO + " &eあと${(remaining + 999) / 1000}秒で再び案内できます。".color()
      )
      return
    }
    if (GuidebookService.teleportToNext(player, guidebook)) {
      lastTeleports[player.uniqueId] = now
    }
  }

  private fun openTouristInfo(player: org.bukkit.entity.Player, guidebookId: Int) {
    val guidebook = SLDatabase.loadGuidebookBlocking(guidebookId)
    if (guidebook == null || !guidebook.published) {
      player.sendMessage(Tools.socialLikesLOGO + " &cこのガイドブックは現在公開されていません。".color())
      return
    }
    GuidebookBookUI.openInfo(player, guidebook)
  }

  private fun ready(player: org.bukkit.entity.Player): Boolean {
    if (Data.loading) return true
    player.sendMessage(Tools.socialLikesLOGO + " &e現在ロード作業中です、しばらくお待ち下さい。".color())
    return false
  }
}
