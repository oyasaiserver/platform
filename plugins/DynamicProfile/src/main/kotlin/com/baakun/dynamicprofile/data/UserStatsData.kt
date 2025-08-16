package com.baakun.dynamicprofile.data

import com.baakun.dynamicprofile.Tools.toFormat
import java.time.LocalDateTime
import java.time.ZoneId
import java.util.*
import org.bukkit.OfflinePlayer

/** ユーザーごとの情報を記録するデータクラス */
data class UserStatsData(val user: OfflinePlayer) {
  /** サーバに存在した最後の日付と時間を文字列で返す。 オンラインの場合は現在の時間を返す。 */
  fun getLastOnlineTime(): String {
    val timeLong = user.lastSeen
    if (timeLong == 0L) {
      return "未ログインユーザー"
    }
    val ldt = LocalDateTime.ofInstant(Date(timeLong).toInstant(), ZoneId.systemDefault())
    return ldt.toFormat()
  }
}
