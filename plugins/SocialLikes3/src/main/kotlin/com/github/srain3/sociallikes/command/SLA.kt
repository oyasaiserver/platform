package com.github.srain3.sociallikes.command

import com.github.srain3.sociallikes.Tools
import com.github.srain3.sociallikes.Tools.color
import com.github.srain3.sociallikes.datas.Data
import com.github.srain3.sociallikes.datas.PublicityHistory
import java.time.LocalDateTime
import org.bukkit.Bukkit
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.entity.Player

/** 直近に設置・宣伝されたSL看板へテレポートするコマンド。 */
object SLA : CommandExecutor {
  private const val MAX_HISTORY = 10

  private data class SignEvent(val time: LocalDateTime, val signId: Int)

  override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<out String>,
  ): Boolean {
    if (command.name != "sla") return false
    if (sender !is Player) return false

    if (!Data.loading) {
      sender.sendMessage(Tools.socialLikesLOGO + " &e現在ロード作業中です、しばらくお待ち下さい。".color())
      return true
    }

    val historyNumber =
        when {
          args.isEmpty() -> 1
          args.size > 1 -> {
            sender.sendMessage(Tools.socialLikesLOGO + " &e使い方: /sla [1-10]".color())
            return true
          }
          else ->
              args[0].toIntOrNull()
                  ?: run {
                    sender.sendMessage(Tools.socialLikesLOGO + " &e使い方: /sla [1-10]".color())
                    return true
                  }
        }
    if (historyNumber !in 1..MAX_HISTORY) {
      sender.sendMessage(Tools.socialLikesLOGO + " &e指定できる履歴は1〜10です。".color())
      return true
    }

    val signEvents =
        buildList {
              Data.getSLDataAll().forEach { add(SignEvent(it.time, it.id)) }
              PublicityHistory.getData().values.forEach { add(SignEvent(it.timeStamp, it.slid)) }
            }
            .mapNotNull { event -> Data.getSLData(event.signId)?.let { event } }
            .sortedByDescending { it.time }
            .take(MAX_HISTORY)

    val event =
        signEvents.getOrNull(historyNumber - 1)
            ?: run {
              sender.sendMessage(Tools.socialLikesLOGO + " &e指定された履歴の看板はありません。".color())
              return true
            }

    Bukkit.dispatchCommand(sender, "sltp ${event.signId}")
    return true
  }
}
