package icu.oyasai.utilities.timerbar

import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.entity.Player

object TimerCmd : CommandExecutor {
  override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<out String>,
  ): Boolean {
    if (command.name != "timerbar") return false
    if (!sender.hasPermission("oyasaiutilities.timerbar")) return false
    if (args.isEmpty()) {
      showHelp(sender)
      return true
    }
    if (sender !is Player) return true
    when (args[0]) {
      "start" -> {
        if (TimerBar.isTimerObject()) {
          sender.sendMessage("[TimerBar] 既にタイマーが起動しています。二重起動はできません。")
          return true
        }
        if (args.size < 2) {
          showHelp(sender)
          return true
        }
        if (TimerBar.startTimer(args[1]!!)) {
          sender.sendMessage("[TimerBar] タイマーを開始しました！")
        } else {
          sender.sendMessage("[TimerBar] タイマーを開始できませんでした。時間は「1h30m」のように指定してください。")
        }
      }

      "add" -> {
        if (!TimerBar.isTimerObject()) {
          sender.sendMessage("[TimerBar] タイマーが起動していません。")
          return true
        }
        if (args.size < 2) {
          showHelp(sender)
          return true
        }
        val sec = TimerObj.strToSec(args[1]!!)
        if (sec == 0) {
          sender.sendMessage("[TimerBar] 残り時間延長をできませんでした。時間は「1h30m」のように指定してください。")
          return true
        }
        TimerObj.addNowSec(sec)
        sender.sendMessage("[TimerBar] 残り時間を「${TimerObj.secToStr(sec)}」延長しました。")
      }

      "end" -> {
        if (!TimerBar.isTimerObject()) {
          sender.sendMessage("[TimerBar] タイマーが起動していません。")
          return true
        }
        TimerBar.endTimer()
        sender.sendMessage("[TimerBar] タイマーを終了し非表示にしました")
      }

      else -> {
        showHelp(sender)
      }
    }
    return true
  }

  private fun showHelp(sender: CommandSender) {
    sender.apply {
      sendMessage("[TimerBar] /timerbar start <Time>")
      sendMessage("[TimerBar] ↑<Time>の部分は「1h30m」のように「〇〇h〇〇m〇〇s」と指定すると動く")
      sendMessage("[TimerBar] ↑「3m」や「1h10s」などでも行ける")
      sendMessage("-------------------------------------")
      sendMessage("[TimerBar] /timerbar add <Time>")
      sendMessage("[TimerBar] 動いているタイマーに指定時間を追加する")
      sendMessage("-------------------------------------")
      sendMessage("[TimerBar] /timerbar end")
      sendMessage("[TimerBar] タイマーを終了し非表示にする")
    }
  }
}
