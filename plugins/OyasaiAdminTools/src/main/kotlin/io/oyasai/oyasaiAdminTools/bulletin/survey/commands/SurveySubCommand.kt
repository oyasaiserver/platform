package io.oyasai.oyasaiAdminTools.bulletin.survey.commands

import io.oyasai.oyasaiAdminTools.bulletin.survey.SurveyManager
import io.oyasai.oyasaiAdminTools.bulletin.survey.gui.SurveyBrowser
import io.oyasai.oyasaiAdminTools.bulletin.survey.gui.SurveyEditor
import io.oyasai.oyasaiAdminTools.bulletin.survey.models.Survey
import io.oyasai.oyasaiAdminTools.utils.MMUtils.msg
import org.bukkit.command.CommandSender
import org.bukkit.entity.Player

object SurveySubCommand {

    fun handle(sender: CommandSender, args: List<String>) {
        if (sender !is Player) {
            sender.sendMessage("このコマンドはプレイヤーのみ実行可能です。")
            return
        }

        if (args.isEmpty()) {
            SurveyManager.startLastAvailableSurvey(sender)
            return
        }

        when (args[0].lowercase()) {
            "gui" -> {
                if (!sender.hasPermission("oyasai.admin")) {
                    sender.msg("<red>権限がありません。</red>")
                    return
                }
                SurveyBrowser.open(sender)
            }
            "add" -> {
                if (!sender.hasPermission("oyasai.admin")) return
                if (args.size < 2) {
                    sender.msg("<red>使用法: /bl survey add <ID></red>")
                    return
                }
                val id = args[1]
                if (SurveyManager.surveys.any { it.id == id }) {
                    sender.msg("<red>そのIDのアンケートは既に存在します。</red>")
                    return
                }
                val newSurvey = Survey(id = id, title = "新しいアンケート")
                SurveyManager.surveys.add(newSurvey)
                SurveyManager.save()
                SurveyManager.refreshTimers()
                sender.msg("<green>アンケート '$id' を追加しました。</green>")
                SurveyEditor.open(sender, newSurvey)
            }
            "open" -> SurveyManager.startLastAvailableSurvey(sender)
            "resume" -> {
                val progress = SurveyManager.getProgress(sender.uniqueId)
                if (progress == null) {
                    sender.msg("<red>進行中のアンケートはありません。</red>")
                    return
                }
                val survey = SurveyManager.surveys.find { it.id == progress.surveyId } ?: return
                SurveyManager.showQuestion(sender, survey, progress.currentQuestionIndex)
            }
            "answer" -> {
                if (args.size < 3) return
                val index = args[1].toIntOrNull() ?: return
                val answer = args.drop(2).joinToString(" ")
                SurveyManager.handleAnswer(sender, index, answer)
            }
            "send" -> {
                if (!sender.hasPermission("oyasai.admin")) return
                if (args.size < 2) {
                    sender.msg("<red>使用法: /bl survey send <ID></red>")
                    return
                }
                SurveyManager.exportResultsToDiscord(sender, args[1])
            }
            "reload" -> {
                if (!sender.hasPermission("oyasai.admin")) return
                SurveyManager.reload()
                sender.msg("<green>アンケート設定をリロードしました。</green>")
            }
            else -> {
                // If args[0] is surveyId
                SurveyManager.startSurvey(sender, args[0])
            }
        }
    }
}
