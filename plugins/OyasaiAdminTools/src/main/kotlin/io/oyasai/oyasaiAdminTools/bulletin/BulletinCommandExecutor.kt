package io.oyasai.oyasaiAdminTools.bulletin

import io.oyasai.oyasaiAdminTools.bulletin.announcement.AnnouncementManager
import io.oyasai.oyasaiAdminTools.bulletin.announcement.commands.AnnouncementSubCommand
import io.oyasai.oyasaiAdminTools.bulletin.survey.SurveyManager
import io.oyasai.oyasaiAdminTools.bulletin.survey.commands.SurveySubCommand
import io.oyasai.oyasaiAdminTools.utils.MMUtils.msg
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.command.TabCompleter
import org.bukkit.entity.Player

object BulletinCommandExecutor : CommandExecutor, TabCompleter {

    override fun onCommand(sender: CommandSender, command: Command, label: String, args: Array<out String>): Boolean {
        if (sender !is Player) {
            sender.sendMessage("このコマンドはプレイヤーのみ実行可能です。")
            return true
        }

        // Shortcut for /anke
        if (command.name.equals("anke", true)) {
            SurveySubCommand.handle(sender, args.toList())
            return true
        }

        if (args.isEmpty() || args[0].equals("help", true)) {
            sendHelp(sender)
            return true
        }

        val subCommand = args[0].lowercase()
        val subArgs = args.drop(1)

        when (subCommand) {
            "announce", "announcement", "notice", "a" -> AnnouncementSubCommand.handle(sender, subArgs)
            "survey", "s", "anke" -> SurveySubCommand.handle(sender, subArgs)
            "reload" -> {
                if (!sender.hasPermission("oyasai.admin")) {
                    sender.msg("<red>権限がありません。</red>")
                    return true
                }
                AnnouncementManager.reload()
                SurveyManager.reload()
                sender.msg("<green>広報設定（お知らせ・アンケート）をリロードしました。</green>")
            }
            "gui" -> {
                if (!sender.hasPermission("oyasai.admin")) {
                    sender.msg("<red>権限がありません。</red>")
                    return true
                }
                BulletinGUI.openMainMenu(sender)
            }
            else -> {
                val inputId = args[0]
                val survey = SurveyManager.surveys.find { it.id.equals(inputId, ignoreCase = true) }
                if (survey != null) {
                    SurveyManager.startSurvey(sender, survey.id)
                } else {
                    sendHelp(sender)
                }
            }
            }

        return true
    }

    private fun sendHelp(player: Player) {
        player.msg("<gold>==== [Oyasai Bulletin Help] ====</gold>")
        player.msg("<yellow>/anke</yellow> : 最新のアンケートを開く")
        player.msg("<yellow>/bl survey <ID></yellow> : アンケートを開始する")
        player.msg("<yellow>/bl survey resume</yellow> : アンケートを再開する")
        if (player.hasPermission("oyasai.admin")) {
            player.msg("<gray>-- 管理者用 --</gray>")
            player.msg("<yellow>/bl gui</yellow> : 総合管理画面")
            player.msg("<yellow>/bl announce gui</yellow> : お知らせ管理")
            player.msg("<yellow>/bl survey gui</yellow> : アンケート管理")
            player.msg("<yellow>/bl reload</yellow> : 全てのリロード")
        }
    }

    override fun onTabComplete(sender: CommandSender, command: Command, alias: String, args: Array<out String>): List<String> {
        if (command.name.equals("anke", true)) return emptyList()

        if (args.size == 1) {
            val list = mutableListOf("help", "announce", "survey")
            if (sender.hasPermission("oyasai.admin")) {
                list.add("gui")
                list.add("reload")
            }
            list.addAll(SurveyManager.surveys.filter { it.enabled }.map { it.id })
            return list.filter { it.startsWith(args[0], true) }
        }

        if (args.size >= 2) {
            val sub = args[0].lowercase()
            when (sub) {
                "announce", "announcement", "notice", "a" -> {
                    if (!sender.hasPermission("oyasai.admin")) return emptyList()
                    if (args.size == 2) {
                        return listOf("gui", "add", "reload").filter { it.startsWith(args[1], true) }
                    }
                }
                "survey", "s", "anke" -> {
                    if (args.size == 2) {
                        val list = mutableListOf("resume", "open")
                        if (sender.hasPermission("oyasai.admin")) {
                            list.add("gui")
                            list.add("add")
                            list.add("reload")
                            list.add("send")
                        }
                        val surveyIds = if (sender.hasPermission("oyasai.admin")) {
                            SurveyManager.surveys.map { it.id }
                        } else {
                            SurveyManager.surveys.filter { it.enabled }.map { it.id }
                        }
                        list.addAll(surveyIds)
                        return list.filter { it.startsWith(args[1], true) }
                    }
                    if (args.size == 3 && args[1].equals("send", true) && sender.hasPermission("oyasai.admin")) {
                        return SurveyManager.surveys.map { it.id }.filter { it.startsWith(args[2], true) }
                    }
                }
            }
        }

        return emptyList()
    }
}
