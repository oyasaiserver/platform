package io.oyasai.oyasaiAdminTools.bulletin.survey

import club.minnced.discord.webhook.WebhookClient
import club.minnced.discord.webhook.send.WebhookEmbed
import club.minnced.discord.webhook.send.WebhookEmbedBuilder
import io.oyasai.oyasaiAdminTools.OyasaiAdminTools.Companion.plugin
import io.oyasai.oyasaiAdminTools.bulletin.survey.models.Survey
import io.oyasai.oyasaiAdminTools.bulletin.survey.models.SurveyResult
import io.oyasai.oyasaiAdminTools.utils.CSVUtils
import io.oyasai.oyasaiAdminTools.utils.JsonUtils
import io.oyasai.oyasaiAdminTools.utils.MMUtils.mm
import org.bukkit.Bukkit
import org.bukkit.entity.Player
import java.io.File
import java.util.UUID

object SurveyExporter {

    fun exportResultsToDiscord(player: Player, surveyId: String) {
        val survey = SurveyManager.surveys.find { it.id == surveyId } ?: run {
            player.sendMessage("<red>アンケートが見つかりません。</red>".mm())
            return
        }

        val webhookUrl = survey.discordWebhookUrl
        if (webhookUrl == null || webhookUrl.isBlank()) {
            player.sendMessage("<red>このアンケートにはDiscord Webhookが設定されていません。</red>".mm())
            return
        }

        val file = File(plugin.dataFolder, "surveys/results_${surveyId}.json")
        if (!file.exists()) {
            player.sendMessage("<red>収集されたデータがまだありません。</red>".mm())
            return
        }

        Bukkit.getScheduler().runTaskAsynchronously(plugin, Runnable {
            try {
                val results: List<SurveyResult> = JsonUtils.fromJson(file.readText())
                if (results.isEmpty()) {
                    player.sendMessage("<red>収集されたデータが空です。</red>".mm())
                    return@Runnable
                }

                // Prepare data for CSV
                val headers = mutableListOf("Timestamp", "UUID", "Name")
                headers.addAll(survey.questions.mapIndexed { i, q -> "Q${i+1}: ${q.text}" })

                val rows = results.map { result ->
                    val row = mutableListOf(result.timestamp.toString(), result.uuid, result.name)
                    row.addAll(survey.questions.indices.map { i -> result.answers.getOrNull(i) ?: "" })
                    row
                }

                // Generate CSV using utility
                val csvContent = CSVUtils.createCsv(headers, rows)

                val client = WebhookClient.withUrl(webhookUrl)

                // Send as CSV file
                client.send("📊 **アンケート結果エクスポート (CSV): ${survey.title}**")
                client.send(csvContent.toByteArray(), "results_${surveyId}.csv")

                client.close()
                player.sendMessage("<green>データをCSV形式でDiscordに送信しました。</green>".mm())
            } catch (e: Exception) {
                player.sendMessage("<red>Discordへの送信に失敗しました: ${e.message}</red>".mm())
                plugin.logger.warning("Failed to export results for survey ${surveyId}: ${e.message}")
                e.printStackTrace()
            }
        })
    }

    fun sendDiscordNotification(survey: Survey, player: Player, answers: List<String>) {
        val webhookUrl = survey.discordWebhookUrl ?: return
        if (webhookUrl.isBlank()) return

        Bukkit.getScheduler().runTaskAsynchronously(plugin, Runnable {
            try {
                val client = WebhookClient.withUrl(webhookUrl)
                val embed = WebhookEmbedBuilder()
                    .setTitle(WebhookEmbed.EmbedTitle(survey.title, null))
                    .setDescription("プレイヤー **${player.name}** がアンケートに回答しました。")
                    .setColor(0x00FF00)

                survey.questions.forEachIndexed { i, q ->
                    val answer = answers.getOrNull(i) ?: "未回答"
                    embed.addField(WebhookEmbed.EmbedField(true, q.text, answer))
                }

                client.send(embed.build())
                client.close()
            } catch (e: Exception) {
                plugin.logger.warning("Failed to send discord notification for survey ${survey.id}: ${e.message}")
            }
        })
    }

    fun saveResult(surveyId: String, uuid: UUID, name: String, answers: List<String>) {
        val resultFile = "surveys/results_${surveyId}.json"
        val results = JsonUtils.readJsonFileSafe(resultFile, mutableListOf<SurveyResult>())

        val newResult = SurveyResult(
            uuid = uuid.toString(),
            name = name,
            timestamp = System.currentTimeMillis(),
            answers = answers
        )

        results.add(newResult)
        JsonUtils.writeJsonFile(resultFile, results)
    }
}
