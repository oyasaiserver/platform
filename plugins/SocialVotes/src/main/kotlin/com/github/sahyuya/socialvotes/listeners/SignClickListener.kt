package com.github.sahyuya.socialvotes.listeners

import com.github.sahyuya.socialvotes.SocialVotes
import com.github.sahyuya.socialvotes.commands.AddModeManager
import com.github.sahyuya.socialvotes.commands.RemoveModeManager
import com.github.sahyuya.socialvotes.commands.UpdateModeManager
import com.github.sahyuya.socialvotes.gui.*
import com.github.sahyuya.socialvotes.util.NotifyUtil
import com.github.sahyuya.socialvotes.util.SignDisplayUtil
import com.github.sahyuya.socialvotes.util.SignDisplayUtil.SVLOGOSHORT
import org.bukkit.Material
import org.bukkit.Sound
import org.bukkit.block.Sign
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.inventory.InventoryClickEvent
import org.bukkit.event.player.PlayerInteractEvent

class SignClickListener : Listener {

  @EventHandler
  fun onClick(e: PlayerInteractEvent) {
    val p = e.player
    val block = e.clickedBlock ?: return
    val dm = SocialVotes.dataManager
    val clicked = e.clickedBlock ?: return
    val state = clicked.state as? Sign

    if (state == null) {
      cancelAllModesIfActive(p)
      return
    }
    val signId = dm.readSignIdFromBlock(state)
    if (signId == null) {
      cancelAllModesIfActive(p)
      return
    }

    // ==================================================
    // Add モード
    // ==================================================
    if (AddModeManager.isWatching(p.uniqueId)) {
      val groupName = AddModeManager.getGroup(p.uniqueId) ?: return

      val sign =
          dm.signById[signId]
              ?: run {
                NotifyUtil.invalid(p, "SV看板データが存在しません。")
                return
              }

      if (sign.group != null) {
        NotifyUtil.invalid(p, "この看板は既にグループに所属しています。")
        return
      }

      val group =
          dm.groupByName[groupName]
              ?: run {
                NotifyUtil.invalid(p, "そのグループは存在しません。")
                return
              }

      if (group.signIds.size >= 45) {
        NotifyUtil.invalid(p, "45個を超えるため追加できません。")
        return
      }

      group.signIds.add(sign.id)
      sign.group = groupName
      dm.save()

      NotifyUtil.success(p, "「${sign.name}」(ID:${sign.id}) をグループ $groupName に追加しました。")
      SignDisplayUtil.applyFormat(state, sign)
      state.update(true)
      return
    }

    // ==================================================
    // Remove モード
    // ==================================================
    if (RemoveModeManager.isWatching(p.uniqueId)) {

      val sign =
          dm.signById[signId]
              ?: run {
                NotifyUtil.invalid(p, "SV看板データが存在しません。")
                return
              }

      val groupName =
          sign.group
              ?: run {
                NotifyUtil.invalid(p, "この看板はグループに所属していません。")
                return
              }

      val group = dm.groupByName[groupName] ?: return

      if (!p.isOp && group.owner != p.uniqueId) {
        NotifyUtil.invalid(p, "この操作はグループ作成者またはOPのみ可能です。")
        return
      }

      sign.group = null
      group.signIds.remove(sign.id)
      dm.save()

      NotifyUtil.success(p, "「${sign.name}」(ID:${sign.id}) をグループから除外しました。")
      SignDisplayUtil.applyFormat(state, sign)
      state.update(true)
      return
    }

    // ==================================================
    // Update モード
    // ==================================================
    if (UpdateModeManager.isWatching(p.uniqueId)) {

      val svSign = dm.signById[signId] ?: return

      // 旧実体削除
      svSign.toLocation()?.block?.type = Material.AIR

      // 座標更新
      dm.updateSignLocation(signId, block.location)

      // 新看板にID再付与
      dm.writeSignIdToBlock(state, signId)

      NotifyUtil.success(p, "「${svSign.name}」(ID:${signId}) の座標を更新しました。")

      SignDisplayUtil.applyFormat(state, svSign)
      state.update(true)
      return
    }

    // ==================================================
    // 通常動作
    // ==================================================
    val sign = dm.signById[signId] ?: return

    // Shift + 右クリック → GUI
    if (p.isSneaking) {
      SimpleGUI.open(p, sign)
      return
    }

    // ----------------------------
    // 投票処理
    // ----------------------------
    val uuid = p.uniqueId
    val now = System.currentTimeMillis()
    val group = sign.group?.let { dm.groupByName[it] }

    if (sign.creators.contains(uuid)) {
      NotifyUtil.invalid(p, "自身が作成したSV看板には投票できません。")
      return
    }

    sign.group?.let { gName ->
      val g = dm.groupByName[gName]
      g?.startTime?.let {
        if (now < it) {
          NotifyUtil.invalid(p, "投票期間外です（開始前）")
          return
        }
      }
      g?.endTime?.let {
        if (now >= it) {
          NotifyUtil.invalid(p, "投票期間外です（終了）")
          return
        }
      }
    }

    val perSignMap = dm.playerVotesPerSign.computeIfAbsent(sign.id) { mutableMapOf() }
    val usedOnSign = perSignMap.getOrDefault(uuid, 0)

    // 看板上限処理
    val effectiveSignLimit =
        when {
          group != null && group.maxVotesPerPlayer > 0 && sign.maxVotesPerSign > 0 ->
              minOf(sign.maxVotesPerSign, group.maxVotesPerPlayer)
          sign.maxVotesPerSign > 0 -> sign.maxVotesPerSign
          else -> null
        }

    if (effectiveSignLimit != null && usedOnSign >= effectiveSignLimit) {
      NotifyUtil.invalid(p, "この看板への投票上限に到達しています")
      return
    }

    if (group != null && group.maxVotesPerPlayer > 0) {
      val gmap = dm.playerVotes.computeIfAbsent(group.name) { mutableMapOf() }
      val usedInGroup = gmap.getOrDefault(uuid, 0)

      if (usedInGroup >= group.maxVotesPerPlayer) {
        NotifyUtil.invalid(p, "このグループでの投票上限に到達しています")
        return
      }
      gmap[uuid] = usedInGroup + 1
    }

    perSignMap[uuid] = usedOnSign + 1
    sign.votes++

    dm.save()
    p.playSound(p.location, Sound.ENTITY_PLAYER_LEVELUP, 1.0f, 2.0f)
    p.sendActionBar("§a「${sign.name}」(ID:${sign.id})に投票しました！")
    SignDisplayUtil.applyFormat(state, sign)
    state.update(true)
  }

  // ==================================================
  // GUI / Chat
  // ==================================================
  @EventHandler
  fun onInventoryClick(e: InventoryClickEvent) {
    val p = e.whoClicked as? Player ?: return
    val top = e.view.topInventory

    when (e.view.title) {
      SVLOGOSHORT + "簡易GUI" -> {
        if (e.rawSlot < top.size) {
          e.isCancelled = true
          SimpleGUI.onClick(p, e.rawSlot)
        }
      }
      SVLOGOSHORT + "詳細設定GUI" -> {
        if (e.rawSlot < top.size) {
          e.isCancelled = true
          DetailGUI.onClick(p, e.rawSlot)
        }
      }
      SVLOGOSHORT + "投票結果" -> {
        e.isCancelled = true
        ResultGUI.onClick(p, e.rawSlot)
      }
      SVLOGOSHORT + "投票者一覧" -> {
        e.isCancelled = true
        VoterListGUI.onClick(p, e.rawSlot)
      }
    }
  }

  private fun cancelAllModesIfActive(p: Player, notify: Boolean = true) {
    val wasActive =
        AddModeManager.isWatching(p.uniqueId) ||
            RemoveModeManager.isWatching(p.uniqueId) ||
            UpdateModeManager.isWatching(p.uniqueId)
    if (!wasActive) return
    AddModeManager.cancel(p.uniqueId)
    RemoveModeManager.cancel(p.uniqueId)
    UpdateModeManager.cancel(p.uniqueId)
    if (notify) {
      p.playSound(p.location, Sound.BLOCK_IRON_DOOR_CLOSE, 1.0f, 1.0f)
      p.sendMessage("SV看板以外をクリックしたため、操作状態を解除しました。")
    }
  }
}
