package com.baakun.dynamicprofile.command

import com.baakun.dynamicprofile.DynamicProfile.Companion.UUIDMap
import com.baakun.dynamicprofile.DynamicProfile.Companion.allUser
import com.baakun.dynamicprofile.command.LBType.*
import com.baakun.dynamicprofile.model.Calculator.getExp
import com.baakun.dynamicprofile.model.Calculator.getLeve
import com.baakun.dynamicprofile.util.Tools.getIndexes
import com.baakun.dynamicprofile.util.Tools.getStats
import com.baakun.dynamicprofile.util.Tools.getWeeklyLB
import java.util.*
import kotlin.concurrent.thread
import org.bukkit.Bukkit
import org.bukkit.Statistic
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.command.TabCompleter
import org.bukkit.entity.Player

enum class LBType {
  LEVEL,
  LIKE,
  RECEIVE_LIKE,
  CHAT,
  MOVE,
  PLAYTIME,
}

object LeaderBoardCommandCompleter : TabCompleter {
  override fun onTabComplete(
      p0: CommandSender,
      p1: Command,
      p2: String,
      p3: Array<out String>,
  ): List<String?>? {

    if (p3 != null) {
      when (p3.size) {
        1 -> return mutableListOf("level", "like", "reclike", "chat", "move", "playtime")
        2 -> return mutableListOf("1", "2", "3", "4", "5")
      }
    }
    return null
  }
}

object LeaderBoardCommand : CommandExecutor {
  override fun onCommand(
      p0: CommandSender,
      p1: Command,
      p2: String,
      p3: Array<out String>,
  ): Boolean {
    val hi: MutableList<UUID> =
        if (p1.name.equals("dpleaderboard")) allUser else UUIDMap.keys.toMutableList()
    fun getSenderStatsRef(uuid: UUID) =
        if (p1.name.equals("dpleaderboard")) getStats(uuid).getLBStats() else getWeeklyLB(uuid)
    try {
      var type: LBType = LEVEL
      var page = 0

      if (!p3.isNullOrEmpty()) {
        type =
            when (p3[0]) {
              "level" -> LEVEL
              "like" -> LIKE
              "reclike" -> RECEIVE_LIKE
              "chat" -> CHAT
              "move" -> MOVE
              "playtime" -> PLAYTIME
              else -> LEVEL
            }
        try {
          page = p3[0].toInt() - 1
        } catch (ignored: NumberFormatException) {}
        if (p3.size >= 2) page = p3[1].toInt() - 1
        if (page < 0) page = 0
      }
      p0.sendMessage("${hi.size} 人分のデータを照合中")
      thread {
        p0.sendMessage("--------------------")
        p0.sendMessage(
            "リーダーボード - ${
                    when(type){
                        LEVEL->"レベル"
                        LIKE->"いいねした回数"
                        RECEIVE_LIKE->"いいねされた回数"
                        CHAT -> "チャットした回数"
                        MOVE -> "移動した距離"
                        PLAYTIME-> "プレイした時間"
                    }
                }  page ${page+1}"
        )
        val sorted =
            hi.sortedByDescending {
              when (type) {
                LEVEL -> Bukkit.getOfflinePlayer(it).getExp()
                LIKE -> getSenderStatsRef(it).like
                RECEIVE_LIKE -> getSenderStatsRef(it).receiveLike
                CHAT -> getSenderStatsRef(it).chat
                MOVE -> getSenderStatsRef(it).move
                PLAYTIME -> Bukkit.getOfflinePlayer(it).getStatistic(Statistic.PLAY_ONE_MINUTE)
              }
            }
        for (i in getIndexes(page, 11, sorted.size)) {
          val data = getSenderStatsRef(sorted.get(i))
          val name = Bukkit.getOfflinePlayer(sorted.get(i)).name
          p0.sendMessage(
              "${i+1}位 - ${
                        when(type) {
                            RECEIVE_LIKE->"${data.receiveLike}回"
                            LIKE->"${data.like}回"
                            CHAT->"${data.chat}回"
                            MOVE->"${data.move}メートル"
                            LEVEL->"Lv.${Bukkit.getOfflinePlayer(sorted.get(i)).getLeve()}"
                            PLAYTIME->getStats(sorted.get(i)).getPlayTime()
                        }}, $name"
          )
        }
        if (p0 is Player) {
          val data = getSenderStatsRef(p0.uniqueId)
          p0.sendMessage("------------")
          p0.sendMessage("あなたの順位")
          p0.sendMessage(
              "${sorted.indexOf(p0.uniqueId)+1}位 - ${
                        when(type) {
                            RECEIVE_LIKE->"${data.receiveLike}回"
                            LIKE->"${data.like}回"
                            CHAT->"${data.chat}回"
                            MOVE->"${data.move}メートル"
                            LEVEL->"Lv.${p0.getLeve()}"
                            PLAYTIME-> getStats(p0.uniqueId).getPlayTime()
                        }}, ${p0.name}"
          )
        }
        p0.sendMessage("--------------------")
      }
    } catch (e: IndexOutOfBoundsException) {
      e.printStackTrace()
      p0.sendMessage("指定の数字が大きすぎます")
    }
    return true
  }
}
