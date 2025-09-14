package com.github.srain3.sociallikes.datas

import java.time.LocalDateTime
import java.time.ZoneOffset
import java.util.UUID
import org.bukkit.Bukkit

data class RankUpData(val user: UUID, var buildCount: Int) {
  private val firstLoginLong: Long? =
    try {
      val firstPlayed = Bukkit.getOfflinePlayer(user).firstPlayed
      if (firstPlayed == 0L) {
        null
      } else {
        firstPlayed / 1000L
      }
    } catch (_: Exception) {
      null
    }

  /** 初ログインの記録 */
  val firstLogin: LocalDateTime? =
    firstLoginLong?.let { LocalDateTime.ofEpochSecond(it, 0, ZoneOffset.UTC) }

  /** プレイヤーの最後のログイン時間を取得する、未プレイの場合null */
  fun lastOnlineTime(): LocalDateTime? {
    val offPlayer = Bukkit.getOfflinePlayer(user)
    val long = offPlayer.lastSeen / 1000L
    if (long == 0L) {
      return null
    }
    return LocalDateTime.ofEpochSecond(long, 0, ZoneOffset.UTC)
  }

  /** 初ログインからの経過日数を返す、未プレイの場合null */
  fun numberOfDaysElapsed(): Int? {
    val lot = lastOnlineTime() ?: return null
    if (firstLogin == null) return null
    val s = lot.toEpochSecond(ZoneOffset.UTC) - firstLogin.toEpochSecond(ZoneOffset.UTC)
    return (s / 60 / 60 / 24).toInt()
  }

  /** buildCountを1増やす */
  fun plusBuild() {
    buildCount += 1
  }

  /** buildCountを1減らす */
  fun minusBuild() {
    buildCount -= 1
  }
}
