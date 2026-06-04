package io.oyasai.oyasaiAdminTools.commands

import io.oyasai.oyasaiAdminTools.announcements.AnnouncementManager
import io.oyasai.oyasaiAdminTools.announcements.SurveyManager
import net.kyori.adventure.text.minimessage.MiniMessage
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.command.TabCompleter
import org.bukkit.entity.Player

object SurveyCommandExecutor : CommandExecutor, TabCompleter {
    private val miniMessage = MiniMessage.miniMessage()

  fun adminCheck(sender: CommandSender): Boolean {
    if (!sender.hasPermission("oyasai.admin"))
      sender.sendMessage(miniMessage.deserialize("<red>権限がありません。</red>"))
    return sender.hasPermission("oyasai.admin")
  }

    override fun onCommand(sender: CommandSender, command: Command, label: String, args: Array<out String>): Boolean {
        if (sender !is Player) {
            sender.sendMessage("このコマンドはプレイヤーのみ実行可能です。")
            return true
        }

        if (label.equals("svo", true)) {
            openLastSurvey(sender)
            return true
        }

        if (args.isEmpty() || args[0].equals("help", true)) {
            sendHelp(sender)
            return true
        }

        when (args[0]) {
            "open" -> {
                openLastSurvey(sender)
            }
            "resume" -> {
                val progress = SurveyManager.getProgress(sender.uniqueId)
                if (progress == null) {
                    sender.sendMessage(miniMessage.deserialize("<red>進行中のアンケートはありません。</red>"))
                    return true
                }
                val survey = AnnouncementManager.surveys.find { it.id == progress.surveyId } ?: return true
                SurveyManager.showQuestion(sender, survey, progress.currentQuestionIndex)
            }
            "answer" -> {
                if (args.size < 3) return true
                val index = args[1].toIntOrNull() ?: return true
                val answer = args.drop(2).joinToString(" ")
                SurveyManager.handleAnswer(sender, index, answer)
            }
            "reload" -> {
                if(!adminCheck(sender)) return true
                AnnouncementManager.reload()
                sender.sendMessage(miniMessage.deserialize("<green>通信設定をリロードしました。</green>"))
            }
            "gui" -> {
              if(!adminCheck(sender)) return true
                io.oyasai.oyasaiAdminTools.announcements.AnnouncementGUI.openMainMenu(sender)
            }
            "send" -> {
              if(!adminCheck(sender)) return true
                if (args.size < 2) {
                    sender.sendMessage(miniMessage.deserialize("<red>使用法: /sv send <survey_id></red>"))
                    return true
                }
                SurveyManager.exportResultsToDiscord(sender, args[1])
            }
            else -> {
                // Assume args[0] is surveyId
                SurveyManager.startSurvey(sender, args[0])
            }
        }

        return true
    }

    private fun openLastSurvey(player: Player) {
        val lastId = AnnouncementManager.lastBroadcastedSurveyId
        if (lastId == null) {
            player.sendMessage(miniMessage.deserialize("<red>最近放送されたアンケートはありません。</red>"))
            return
        }
        SurveyManager.startSurvey(player, lastId)
    }

    private fun sendHelp(player: Player) {
        player.sendMessage(miniMessage.deserialize("<gold>==== [Oyasai Survey Help] ====</gold>"))
        player.sendMessage(miniMessage.deserialize("<yellow>/sv open</yellow> : 最新のアンケートを開く"))
        player.sendMessage(miniMessage.deserialize("<yellow>/sv resume</yellow> : 中断したアンケートを再開する"))
        player.sendMessage(miniMessage.deserialize("<yellow>/sv <ID></yellow> : 指定したアンケートを開始する"))
        if (player.hasPermission("oyasai.admin")) {
            player.sendMessage(miniMessage.deserialize("<gray>-- 管理者用 --</gray>"))
            player.sendMessage(miniMessage.deserialize("<yellow>/sv gui</yellow> : 管理メニューを開く"))
            player.sendMessage(miniMessage.deserialize("<yellow>/sv send <ID></yellow> : 結果をCSVでDiscordに送信"))
            player.sendMessage(miniMessage.deserialize("<yellow>/sv reload</yellow> : 設定をリロード"))
        }
    }

    override fun onTabComplete(sender: CommandSender, command: Command, alias: String, args: Array<out String>): List<String> {
        if (args.size == 1) {
            val list = AnnouncementManager.surveys.map { it.id }.toMutableList()
            list.add("open")
            list.add("resume")
            list.add("help")
            if (sender.hasPermission("oyasai.admin")) {
                list.add("reload")
                list.add("gui")
                list.add("send")
            }
            return list.filter { it.startsWith(args[0], true) }
        }
        return emptyList()
    }
}
