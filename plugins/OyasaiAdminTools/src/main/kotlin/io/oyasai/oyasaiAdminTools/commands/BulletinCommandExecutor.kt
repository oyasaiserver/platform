package io.oyasai.oyasaiAdminTools.commands

import io.oyasai.oyasaiAdminTools.bulletin.BulletinGUI
import io.oyasai.oyasaiAdminTools.bulletin.BulletinManager
import io.oyasai.oyasaiAdminTools.bulletin.SurveyManager
import io.oyasai.oyasaiAdminTools.bulletin.models.Notice
import io.oyasai.oyasaiAdminTools.bulletin.models.Survey
import net.kyori.adventure.text.minimessage.MiniMessage
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.command.TabCompleter
import org.bukkit.entity.Player

import io.oyasai.oyasaiAdminTools.utils.PermsUtils

object BulletinCommandExecutor : CommandExecutor, TabCompleter {
    private val miniMessage = MiniMessage.miniMessage()

    private fun adminCheck(sender: CommandSender): Boolean {
        if (!sender.hasPermission("oyasai.admin")) {
            sender.sendMessage(miniMessage.deserialize("<red>権限がありません。</red>"))
            return false
        }
        return true
    }

    override fun onCommand(sender: CommandSender, command: Command, label: String, args: Array<out String>): Boolean {
        if (sender !is Player) {
            sender.sendMessage("このコマンドはプレイヤーのみ実行可能です。")
            return true
        }

        // Shortcut for opening last survey
        if (command.name.equals("anke", true)) {
            openLastSurvey(sender)
            return true
        }

        if (args.isEmpty() || args[0].equals("help", true)) {
            sendHelp(sender)
            return true
        }

        when (args[0].lowercase()) {
            "add" -> {
                if (!adminCheck(sender)) return true
                if (args.size < 3) {
                    sender.sendMessage(miniMessage.deserialize("<red>使用法: /bl add <survey|notice> <ID></red>"))
                    return true
                }
                val type = args[1].lowercase()
                val id = args[2]

                if (type == "survey") {
                    if (BulletinManager.surveys.any { it.id == id }) {
                        sender.sendMessage(miniMessage.deserialize("<red>そのIDのアンケートは既に存在します。</red>"))
                        return true
                    }
                    val newSurvey = Survey(id = id, title = "新しいアンケート")
                    BulletinManager.surveys.add(newSurvey)
                    BulletinManager.save()
                    BulletinManager.refreshTimers()
                    sender.sendMessage(miniMessage.deserialize("<green>アンケート '$id' を追加しました。</green>"))
                    BulletinGUI.openSurveysMenu(sender)
                } else if (type == "notice") {
                    if (BulletinManager.notices.any { it.id == id }) {
                        sender.sendMessage(miniMessage.deserialize("<red>そのIDの通知は既に存在します。</red>"))
                        return true
                    }
                    val newNotice = Notice(id = id, message = "新しい通知", interval = 300)
                    BulletinManager.notices.add(newNotice)
                    BulletinManager.save()
                    BulletinManager.refreshTimers()
                    sender.sendMessage(miniMessage.deserialize("<green>通知 '$id' を追加しました。</green>"))
                    BulletinGUI.openNoticesMenu(sender)
                } else {
                    sender.sendMessage(miniMessage.deserialize("<red>タイプは survey または notice を指定してください。</red>"))
                }
            }
            "gui" -> {
                if (!adminCheck(sender)) return true
                BulletinGUI.openMainMenu(sender)
            }
            "open" -> {
                openLastSurvey(sender)
            }
            "resume" -> {
                val progress = SurveyManager.getProgress(sender.uniqueId)
                if (progress == null) {
                    sender.sendMessage(miniMessage.deserialize("<red>進行中のアンケートはありません。</red>"))
                    return true
                }
                val survey = BulletinManager.surveys.find { it.id == progress.surveyId } ?: return true
                SurveyManager.showQuestion(sender, survey, progress.currentQuestionIndex)
            }
            "answer" -> {
                if (args.size < 3) return true
                val index = args[1].toIntOrNull() ?: return true
                val answer = args.drop(2).joinToString(" ")
                SurveyManager.handleAnswer(sender, index, answer)
            }
            "reload" -> {
                if (!adminCheck(sender)) return true
                BulletinManager.reload()
                sender.sendMessage(miniMessage.deserialize("<green>広報設定をリロードしました。</green>"))
            }
            "send" -> {
                if (!adminCheck(sender)) return true
                if (args.size < 2) {
                    sender.sendMessage(miniMessage.deserialize("<red>使用法: /bl send <survey_id></red>"))
                    return true
                }
                SurveyManager.exportResultsToDiscord(sender, args[1])
            }
            else -> {
                // Assume args[0] is surveyId for backward compatibility or direct start
                SurveyManager.startSurvey(sender, args[0])
            }
        }

        return true
    }

    private fun openLastSurvey(player: Player) {
        val recentIds = BulletinManager.surveyBroadcastHistory.reversed().distinct()
        for (id in recentIds) {
            val survey = BulletinManager.surveys.find { it.id == id } ?: continue
            if (!survey.enabled) continue

            val responseCount = survey.respondedPlayers.getOrDefault(player.uniqueId, 0)
            if (responseCount >= survey.maxResponses) continue

            if (PermsUtils.hasAnyGroupSync(player.uniqueId, survey.targetGroups)) {
                SurveyManager.startSurvey(player, id)
                return
            }
        }
        player.sendMessage(miniMessage.deserialize("<red>現在回答可能な新しいアンケートはありません。</red>"))
    }

    private fun sendHelp(player: Player) {
        player.sendMessage(miniMessage.deserialize("<gold>==== [Oyasai Bulletin Help] ====</gold>"))
        player.sendMessage(miniMessage.deserialize("<yellow>/anke</yellow> : 最新のアンケートを開く"))
        player.sendMessage(miniMessage.deserialize("<yellow>/bl resume</yellow> : 中断したアンケートを再開する"))
        player.sendMessage(miniMessage.deserialize("<yellow>/bl <ID></yellow> : 指定したアンケートを開始する"))
        if (player.hasPermission("oyasai.admin")) {
            player.sendMessage(miniMessage.deserialize("<gray>-- 管理者用 --</gray>"))
            player.sendMessage(miniMessage.deserialize("<yellow>/bl gui</yellow> : 管理ダッシュボードを開く"))
            player.sendMessage(miniMessage.deserialize("<yellow>/bl add survey <ID></yellow> : 新しいアンケートを追加"))
            player.sendMessage(miniMessage.deserialize("<yellow>/bl add notice <ID></yellow> : 新しい通知を追加"))
            player.sendMessage(miniMessage.deserialize("<yellow>/bl send <ID></yellow> : アンケート結果をDiscordに送信"))
            player.sendMessage(miniMessage.deserialize("<yellow>/bl reload</yellow> : 設定をリロード"))
        }
    }

    override fun onTabComplete(sender: CommandSender, command: Command, alias: String, args: Array<out String>): List<String> {
        if (args.size == 1) {
            val list = BulletinManager.surveys.map { it.id }.toMutableList()
            list.add("open")
            list.add("resume")
            list.add("help")
            if (sender.hasPermission("oyasai.admin")) {
                list.add("reload")
                list.add("gui")
                list.add("send")
                list.add("add")
            }
            return list.filter { it.startsWith(args[0], true) }
        }

        if (args.size == 2 && args[0].equals("add", true) && sender.hasPermission("oyasai.admin")) {
            return listOf("survey", "notice").filter { it.startsWith(args[1], true) }
        }

        if (args.size == 2 && args[0].equals("send", true) && sender.hasPermission("oyasai.admin")) {
            return BulletinManager.surveys.map { it.id }.filter { it.startsWith(args[1], true) }
        }

        return emptyList()
    }
}
