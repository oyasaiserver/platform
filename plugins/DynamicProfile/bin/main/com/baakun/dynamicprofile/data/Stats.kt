package com.baakun.dynamicprofile.data

import com.baakun.dynamicprofile.DynamicProfile.Companion.UUIDMap
import com.baakun.dynamicprofile.Tools
import com.baakun.dynamicprofile.Tools.levelGroups
import com.baakun.dynamicprofile.Tools.rewardReceiveStatus
import com.baakun.dynamicprofile.Tools.toFormat
import com.baakun.dynamicprofile.exp.BehType
import com.baakun.dynamicprofile.exp.Calculator
import com.baakun.dynamicprofile.leaderBoard.LBStats
import com.google.gson.annotations.Expose
import java.time.Duration
import java.time.Instant
import java.time.LocalDateTime
import java.time.ZoneId
import java.time.format.DateTimeFormatter
import java.util.*
import net.kyori.adventure.text.Component
import net.kyori.adventure.title.Title
import org.bukkit.*

data class Stats(
  @Expose var uuid: String = UUID.randomUUID().toString(),
  @Expose var exp: Int = 0,
  @Expose var move: Int = 0,
  @Expose var vehicle: Int = 0,
  @Expose var fly: Int = 0,
  @Expose var jump: Int = 0,
  @Expose var block: Int = 0,
  @Expose var chat: Int = 0,
  @Expose var vote: Int = 0,
  @Expose var like: Int = 0,
  @Expose var receiveLike: Int = 0,
  @Expose var join: Int = 0,
  @Expose var playTime: Int = 0,
  @Expose var distance: Double = 0.0,
  @Expose var lastCheck: Long = 0L,
  @Expose var lastLv: Int = 0,
  @Expose var notice: Boolean = true,
  @Expose
  var recommends: MutableMap<Int, Int> =
    mutableMapOf(Pair(0, -0), Pair(1, -0), Pair(2, -0), Pair(3, -0), Pair(4, -0)),
  @Expose var lastLogin: String = LocalDateTime.now().toString(),
  @Expose val friends: MutableList<UUID> = mutableListOf(),
  @Expose var title: Int = -1,
  var timePlayed: Int = 0,
) {
  fun addAllCounts(stats: Stats) {
    this.exp += stats.exp
    this.move += stats.move
    this.vehicle += stats.vehicle
    this.fly += stats.fly
    this.jump += stats.jump
    this.block += stats.block
    this.chat += stats.chat
    this.vote += stats.vote
    this.like += stats.like
    this.receiveLike += stats.receiveLike
    this.join += stats.join
  }

  fun getLBStats(): LBStats {
    return LBStats(
      UUID.fromString(uuid),
      exp,
      move,
      vehicle,
      fly,
      jump,
      block,
      chat,
      vote,
      like,
      receiveLike,
      join,
    )
  }

  /** カウントのみ、経験値は引かれない */
  fun setCount(type: BehType, count: Int) {
    set(type, count)
  }

  /** ユーザーの所持ポイントをTokenManagerから取得して返す。取得できない場合-1を返す */
  fun getPoint(): Int {
    val user: OfflinePlayer = Bukkit.getOfflinePlayer(UUID.fromString(uuid))
    try { // なんかNoSuchElementError適菜の出ることがあるからtry
      val player = user.player ?: return -1
      return Tools.token?.getTokens(player)?.asLong?.toInt() ?: -1
    } catch (_: Exception) {
      return -1
    }
  }

  /** ユーザーの所持金を[Double]で返す。Vaultプラグインがない場合-1を返す */
  private fun getMoney(): Double {
    val user: OfflinePlayer = Bukkit.getOfflinePlayer(UUID.fromString(uuid))
    return try { // こっちも心配だから
      Tools.econ?.getBalance(user) ?: -1.0
    } catch (_: Exception) {
      -1.0
    }
  }

  /** ユーザーの所持金をVaultプラグインのFormatに従った[String]で返す。Vaultがない場合はnullという文字を返す */
  fun getMoneyString(): String {
    return Tools.econ?.format(getMoney()) ?: "null"
  }

  /** サーバに存在した最後の日付と時間を文字列で返す。 オンラインの場合は現在の時間を返す。 */
  fun getLastOnlineTime(): String {
    val user: OfflinePlayer = Bukkit.getOfflinePlayer(UUID.fromString(uuid))
    val timeLong = user.lastSeen
    if (timeLong == 0L) {
      return "未ログインユーザー"
    }
    val ldt = LocalDateTime.ofInstant(Date(timeLong).toInstant(), ZoneId.systemDefault())
    return ldt.toFormat()
  }

  /** 総プレイ時間を文字で返す(〇〇〇時間〇〇分) */
  fun getPlayTime(): String {
    val user: OfflinePlayer = Bukkit.getOfflinePlayer(UUID.fromString(uuid))
    val tick = user.getStatistic(Statistic.PLAY_ONE_MINUTE)
    val minute = (tick / 20) / 60
    val hour = minute / 60
    return "${hour}時間${minute % 60}分"
  }

  /** 初ログイン日時を取得（フォーマット済み） */
  fun getFirstPlayed(): String {
    val user: OfflinePlayer = Bukkit.getOfflinePlayer(UUID.fromString(uuid))
    val instant = Instant.ofEpochMilli(user.firstPlayed)
    val localDateTime = LocalDateTime.ofInstant(instant, ZoneId.systemDefault())
    val dateTimeFormatter = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss")
    return dateTimeFormatter.format(localDateTime)
  }

  /** レベリング報酬についての、レベルごとの受け取り状況を更新する */
  fun addReceiveRewardStatus(lv: Int) {
    val user: OfflinePlayer = Bukkit.getOfflinePlayer(UUID.fromString(uuid))
    val status = rewardReceiveStatus
    val list = status.getStringList(lv.toString())
    list.add(user.uniqueId.toString())
    status.set(lv.toString(), list)
    status.save()
  }

  /** 報酬の受け取り状況を取得する */
  fun getReceiveRewardStatus(lv: Int): Boolean {
    val user: OfflinePlayer = Bukkit.getOfflinePlayer(UUID.fromString(uuid))
    return rewardReceiveStatus.getStringList(lv.toString()).contains(user.uniqueId.toString())
  }

  fun addCount(type: BehType) {
    addCount(type, 1)
  }

  /**
   * 動作タイプごとの経験値を計算し、userに付与する。
   *
   * @param type 動作タイプを入力
   * @param multiple 一度に複数回の動作分の経験値を与えたいときに入力する。
   */
  fun addCount(type: BehType, multiple: Int) {
    val userUUID = UUID.fromString(uuid)
    val user: OfflinePlayer = Bukkit.getOfflinePlayer(userUUID)
    val levelGroup = levelGroups
    val expGain = Calculator.expAmount(type) * multiple
    val currentExp = this.exp
    val count = this.get(type)
    val isDistanceType = type == BehType.MOVE || type == BehType.FLY || type == BehType.VEHICLE

    // 経験値・カウント加算処理
    if (!isDistanceType || (count + distance.toInt()) > count) {
      this.exp = currentExp + expGain
      this.set(type, count + multiple)
      UUIDMap.getOrPut(userUUID) { LBStats(userUUID) }.add(type, multiple)
      if (isDistanceType) distance = 0.0
    }

    // レベルアップ判定・通知
    val onlinePlayer = Bukkit.getOnlinePlayers().firstOrNull { it.uniqueId == user.uniqueId }
    if (onlinePlayer != null && System.currentTimeMillis() - lastCheck > 1000) {
      lastCheck = System.currentTimeMillis()
      val newLevel = Calculator.getLevel(user)
      if (newLevel > lastLv) {
        // 権限付与
        levelGroup.getString(newLevel.toString())?.let { group ->
          Tools.plugin.server.dispatchCommand(
            Tools.plugin.server.consoleSender,
            "lp user ${onlinePlayer.name} parent add $group",
          )
        }
        // 通知
        if (this.notice) {
          Bukkit.getLogger()
            .info(
              "${onlinePlayer.name} さんのレベルが $newLevel に上がりました！, LastAction: $type, Exp: $currentExp -> ${currentExp + expGain}"
            )
          onlinePlayer.playSound(
            onlinePlayer.eyeLocation,
            Sound.ENTITY_PLAYER_LEVELUP,
            SoundCategory.MASTER,
            0.75F,
            1F,
          )
          onlinePlayer.sendMessage(Component.text("§e/dpl コマンドであなたのサーバー内順位を確認！"))
          onlinePlayer.sendMessage(Component.text("§6/dp コマンドでプロフィールを確認！"))
          onlinePlayer.sendMessage(Component.text("§7レベルアップ時のタイトル通知は、自分のプロフィールからオフにすることができます。"))
          onlinePlayer.showTitle(
            Title.title(
              Component.text("§e§lLEVEL UP!"),
              Component.text("§6You are now Lv. $newLevel !"),
              Title.Times.times(
                Duration.ofNanos(500),
                Duration.ofSeconds(3),
                Duration.ofMillis(500),
              ),
            )
          )
        } else {
          onlinePlayer.sendMessage(Component.text("§6You are now Lv. $newLevel !"))
        }
        if (Tools.plugin.config.getIntegerList("noticeLvs").contains(newLevel)) {
          Bukkit.broadcast(
            Component.text(
              "[§eLEVEL UP!§f] §a${onlinePlayer.name} §fさんのレベルが §6$newLevel §fに上がりました！"
            )
          )
        }
      }
      if (onlinePlayer.isOnline) lastLv = newLevel
    }
  }

  /**
   * 動作タイプと回数を入力し、プレイヤーのStatsに登録する。（加算ではない）
   *
   * @param type 動作タイプ
   * @param count 動作をした回数
   */
  fun set(type: BehType, count: Int) =
    when (type) {
      BehType.MOVE -> move = count
      BehType.VEHICLE -> vehicle = count
      BehType.FLY -> fly = count
      BehType.JUMP -> jump = count
      BehType.PLACE_BLOCK -> block = count
      BehType.CHAT -> chat = count
      BehType.VOTE -> vote = count
      BehType.LIKE -> like = count
      BehType.RECEIVE_LIKE -> receiveLike = count
      BehType.JOIN -> join = count
      BehType.PLAY_TIME -> playTime = count
    }

  fun get(type: BehType): Int =
    when (type) {
      BehType.MOVE -> move
      BehType.VEHICLE -> vehicle
      BehType.FLY -> fly
      BehType.JUMP -> jump
      BehType.PLACE_BLOCK -> block
      BehType.CHAT -> chat
      BehType.VOTE -> vote
      BehType.LIKE -> like
      BehType.RECEIVE_LIKE -> receiveLike
      BehType.JOIN -> join
      BehType.PLAY_TIME -> playTime
    }
}
