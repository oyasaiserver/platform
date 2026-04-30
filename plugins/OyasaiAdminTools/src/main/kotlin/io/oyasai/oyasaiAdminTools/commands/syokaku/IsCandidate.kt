package io.oyasai.oyasaiAdminTools.commands.syokaku

import com.baakun.dynamicprofile.util.Tools.getStats
import com.github.srain3.sociallikes.datas.Data
import io.oyasai.oyasaiAdminTools.OyasaiAdminTools.Companion.plugin
import io.oyasai.oyasaiAdminTools.rank.RankManager.getNextRank
import io.oyasai.oyasaiAdminTools.rank.RankManager.isCandidate
import io.oyasai.oyasaiAdminTools.utils.DateTimeUtils
import io.oyasai.oyasaiAdminTools.utils.PermsUtils.getCurrentRank
import io.oyasai.oyasaiAdminTools.utils.PlayerUtils
import java.time.temporal.ChronoUnit
import org.bukkit.Bukkit
import org.bukkit.Statistic
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender

object IsCandidate : CommandExecutor {
  override fun onCommand(
    sender: CommandSender,
    command: Command,
    label: String,
    args: Array<out String>,
  ): Boolean {
    val dynamicProfilePlugin = Bukkit.getPluginManager().getPlugin("DynamicProfile")
    if (dynamicProfilePlugin == null || !dynamicProfilePlugin.isEnabled) {
      sender.sendMessage("§cDynamicProfileプラグインが見つかりません。")
      return true
    }

    // /syokaku iscandidate <player>
    if (args.size < 1) {
      sender.sendMessage("§cUsage: /syokaku iscandidate <player>")
      return true
    }
    val playerName = args[0]
    Bukkit.getScheduler().runTaskAsynchronously(plugin, Runnable {
      val playerUUID = PlayerUtils.resolveUUID(playerName)
      if (playerUUID == null) {
        Bukkit.getScheduler().runTask(plugin, Runnable {
          sender.sendMessage("§cプレイヤー '$playerName' が見つかりません。")
        })
        return@Runnable
      }
      val player = Bukkit.getOfflinePlayer(playerUUID)
      isCandidate(player).thenAccept { nextRank ->
        val statsData = getStats(player.uniqueId) // DynamicProfile依存
        val tick = player.getStatistic(Statistic.PLAY_ONE_MINUTE)
        val minute = (tick / 20) / 60
        val hour = minute / 60
        val joinDays = statsData.join
        val buildCount = Data.getSLDataAll().count { it.owner.equals(player.uniqueId) } // SL依存

        getCurrentRank(player.uniqueId).thenAccept { currentRank ->
          Bukkit.getScheduler()
            .runTask(
              plugin,
              Runnable {
                if (currentRank != null) {

                  val next = getNextRank(currentRank)
                  if (next == null) {
                    sender.sendMessage("§e${player.name}さんは既に最高ランクです。")
                  } else {
                    val messageHour =
                      "プレイ時間: $hour/${next.minPlayTimeHours}時間 ${if (hour >= next.minPlayTimeHours) "§a(達成)" else "§c(未達成)"}"
                    val messageJoinDays =
                      "ログイン日数: $joinDays/${next.minJoinDays}日 ${if (joinDays >= next.minJoinDays) "§a(達成)" else "§c(未達成)"}"
                    val messageElapse =
                      "経過日数: ${
                        ChronoUnit.DAYS.between(
                          DateTimeUtils.unixToJST(player.firstPlayed),
                          DateTimeUtils.getCurrentJST()
                        )
                      }/${next.minElapse}日 ${
                        if (ChronoUnit.DAYS.between(
                            DateTimeUtils.unixToJST(player.firstPlayed), DateTimeUtils.getCurrentJST(),
                          ) >= next.minElapse
                        ) "§a(達成)" else "§c(未達成)"
                      }"
                    val messageBuildCount =
                      "建築数: $buildCount/${next.minBuilds}個 ${if (buildCount >= next.minBuilds) "§a(達成)" else "§c(未達成)"}"
                    sender.sendMessage(messageHour)
                    sender.sendMessage(messageJoinDays)
                    sender.sendMessage(messageElapse)
                    sender.sendMessage(messageBuildCount)
                    if (nextRank != null) {
                      sender.sendMessage("§a${player.name}さんは§e${nextRank.name}§aの昇格候補です。")
                    } else {
                      sender.sendMessage("§e${player.name}さんはまだ昇格条件を満たしていません。")
                    }
                  }
                } else {
                  sender.sendMessage("§c${player.name}さんのランクが見つかりません。")
                }
              },
            )
        }
      }
    })
    return true
  }
}
