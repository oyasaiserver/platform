package com.github.sahyuya.socialvotes

import com.github.sahyuya.socialvotes.util.NotifyUtil
import com.github.sahyuya.socialvotes.util.SignDisplayUtil
import com.github.sahyuya.socialvotes.util.TimeParser
import java.util.UUID
import org.bukkit.Bukkit
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.player.AsyncPlayerChatEvent

object ChatInput : Listener {

  enum class Action {
    // SimpleGUI
    RENAME_SIGN,
    SET_CREATOR_DISPLAY,
    ADD_CREATOR,
    REMOVE_CREATOR,
    // DetailGUI
    SET_SIGN_MAX,
    SET_GROUP_MAX,
    SET_START_TIME,
    SET_END_TIME,
  }

  data class InputState(val action: Action, val signId: Int)

  // =====================
  // 外部呼び出し用 API
  // =====================
  private val states = mutableMapOf<UUID, InputState>()

  fun start(uuid: UUID, state: InputState) {
    states[uuid] = state
  }

  fun cancel(uuid: UUID) {
    states.remove(uuid)
  }

  // =====================
  // チャット入力処理
  // =====================
  @EventHandler
  fun onChat(e: AsyncPlayerChatEvent) {
    val p = e.player
    val state = states.remove(p.uniqueId) ?: return
    e.isCancelled = true
    val dm = SocialVotes.dataManager
    val sign = dm.signById[state.signId]
    if (sign == null) {
      NotifyUtil.error(p, "§c対象の看板が存在しません。")
      cancel(p.uniqueId)
      return
    }
    val group = sign.group?.let { dm.groupByName[it] }
    val msg = e.message.trim()

    when (state.action) {

    // ---------------------
    // 看板名変更
    // ---------------------
      Action.RENAME_SIGN -> {
        if (msg.isBlank()) {
          NotifyUtil.success(p, "§c変更をキャンセルしました。")
          return
        }
        sign.name = msg
        dm.save()
        Bukkit.getScheduler()
          .runTask(
            SocialVotes.instance,
            Runnable {
              SignDisplayUtil.updateSingle(sign)
              NotifyUtil.success(p, "§a看板名を「$msg」に変更しました。")
            },
          )
      }

      // ---------------------
      // 制作者名変更
      // ---------------------
      Action.SET_CREATOR_DISPLAY -> {
        sign.creatorDisplayName = msg.ifBlank { null }

        dm.save()

        Bukkit.getScheduler()
          .runTask(
            SocialVotes.instance,
            Runnable {
              SignDisplayUtil.updateSingle(sign)
              NotifyUtil.success(p, "§a制作者表示名を更新しました。")
            },
          )
      }

      // ---------------------
      // 作者追加
      // ---------------------
      Action.ADD_CREATOR -> {

        if (msg.isBlank()) {
          NotifyUtil.success(p, "§7変更は行われませんでした。")
          return
        }

        // プレイヤー名 → UUID 解決
        val target = Bukkit.getOfflinePlayer(msg)
        val uuid = target.uniqueId

        if (target.name == null) {
          NotifyUtil.error(p, "§cプレイヤー $msg は存在しません。")
          return
        }

        if (sign.creators.contains(uuid)) {
          NotifyUtil.error(p, "§e${target.name} は既に投票対象に含まれています。")
          return
        }

        sign.creators.add(uuid)
        dm.save()

        Bukkit.getScheduler()
          .runTask(
            SocialVotes.instance,
            Runnable {
              SignDisplayUtil.updateSingle(sign)
              NotifyUtil.success(p, "§a${target.name} を投票対象プレイヤーとして追加しました。")
            },
          )
      }

      // ---------------------
      // 作者削除
      // ---------------------
      Action.REMOVE_CREATOR -> {
        val target = Bukkit.getOfflinePlayer(msg)
        val uuid = target.uniqueId

        if (!sign.creators.contains(uuid)) {
          NotifyUtil.error(p, "§cそのプレイヤーは制作者ではありません。")
          return
        }

        if (sign.creators.size <= 1) {
          NotifyUtil.error(p, "§c制作者は最低1人必要です。")
          return
        }

        sign.creators.remove(uuid)
        dm.save()

        Bukkit.getScheduler()
          .runTask(
            SocialVotes.instance,
            Runnable {
              SignDisplayUtil.updateSingle(sign)
              NotifyUtil.success(p, "§a${target.name} を制作者から削除しました。")
            },
          )
      }

      // ---------------------
      // 看板単体 最大投票数
      // ---------------------
      Action.SET_SIGN_MAX -> {
        val v = msg.toIntOrNull()
        if (v == null || v <= 0) {
          NotifyUtil.success(p, "§7変更は行われませんでした。")
          return
        }
        // グループ制限を超えないよう補正
        val groupMax = group?.maxVotesPerPlayer ?: Int.MAX_VALUE
        val newValue = minOf(v, groupMax)
        sign.maxVotesPerSign = newValue
        dm.save()
        Bukkit.getScheduler()
          .runTask(
            SocialVotes.instance,
            Runnable {
              SignDisplayUtil.updateSingle(sign)
              NotifyUtil.success(p, "§a看板の最大投票数を $newValue 票に設定しました。")
            },
          )
      }

      // ---------------------
      // グループ全体 最大投票数
      // ---------------------
      Action.SET_GROUP_MAX -> {
        val groupName = sign.group
        if (groupName == null) {
          NotifyUtil.error(p, "§cこの看板はグループに属していません。")
          cancel(p.uniqueId)
          return
        }
        val group = dm.groupByName[groupName]
        if (group == null) {
          NotifyUtil.error(p, "§cグループが存在しません。")
          cancel(p.uniqueId)
          return
        }
        val v = msg.toIntOrNull()
        if (v == null || v <= 0) {
          NotifyUtil.success(p, "§7変更は行われませんでした。")
          return
        }
        group.maxVotesPerPlayer = v
        // 所属看板の制限を超えていたら切り下げ
        for (sid in group.signIds) {
          val s = dm.signById[sid] ?: continue
          if (s.maxVotesPerSign > v) {
            s.maxVotesPerSign = v
          }
        }
        dm.save()
        Bukkit.getScheduler()
          .runTask(
            SocialVotes.instance,
            Runnable {
              SignDisplayUtil.updateGroup(group)
              NotifyUtil.success(p, "§aグループ全体の最大投票数を $v 票に変更しました。")
            },
          )
      }

      // ---------------------
      // グループ　投票開始時刻
      // ---------------------
      Action.SET_START_TIME -> {
        if (msg.isBlank()) return
        group ?: return
        if (msg == "0") {
          group.startTime = null
        } else {
          group.startTime = TimeParser.parse(msg) ?: return
        }
        dm.save()
        Bukkit.getScheduler()
          .runTask(
            SocialVotes.instance,
            Runnable {
              SignDisplayUtil.updateGroup(group)
              NotifyUtil.success(p, "§a時刻設定を更新しました。")
            },
          )
      }

      // ---------------------
      // グループ　投票終了時刻
      // ---------------------
      Action.SET_END_TIME -> {
        if (msg.isBlank()) return
        group ?: return
        if (msg == "0") {
          group.endTime = null
        } else {
          group.endTime = TimeParser.parse(msg) ?: return
        }
        dm.save()
        Bukkit.getScheduler()
          .runTask(
            SocialVotes.instance,
            Runnable {
              SignDisplayUtil.updateGroup(group)
              NotifyUtil.success(p, "§a時刻設定を更新しました。")
            },
          )
      }
    }
  }
}
