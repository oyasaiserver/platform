package io.oyasai.oyasaiAdminTools.announcements

import club.minnced.discord.webhook.WebhookClient
import club.minnced.discord.webhook.send.WebhookEmbed
import club.minnced.discord.webhook.send.WebhookEmbedBuilder
import io.oyasai.oyasaiAdminTools.OyasaiAdminTools
import io.oyasai.oyasaiAdminTools.announcements.models.Question
import io.oyasai.oyasaiAdminTools.announcements.models.QuestionType
import io.oyasai.oyasaiAdminTools.announcements.models.Survey
import io.oyasai.oyasaiAdminTools.utils.JsonUtils
import io.oyasai.oyasaiAdminTools.utils.PermsUtils
import net.kyori.adventure.inventory.Book
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.event.ClickEvent
import net.kyori.adventure.text.minimessage.MiniMessage
import net.kyori.adventure.text.serializer.plain.PlainTextComponentSerializer
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.entity.Player
import org.bukkit.inventory.ItemStack
import org.bukkit.inventory.meta.BookMeta
import java.util.UUID

object SurveyManager {
    private val plugin = OyasaiAdminTools.plugin
    private val miniMessage = MiniMessage.miniMessage()
    private val plainSerializer = PlainTextComponentSerializer.plainText()

    private val playerProgress = mutableMapOf<UUID, SurveyProgress>()

    fun getProgress(uuid: UUID): SurveyProgress? = playerProgress[uuid]

    data class SurveyProgress(
        val surveyId: String,
        val answers: MutableList<String> = mutableListOf(),
        var currentQuestionIndex: Int = 0
    )

    data class SurveyResult(
        val uuid: String,
        val name: String,
        val timestamp: Long,
        val answers: List<String>
    )

    fun startSurvey(player: Player, surveyId: String) {
        val survey = AnnouncementManager.surveys.find { it.id == surveyId } ?: run {
            player.sendMessage(miniMessage.deserialize("<red>アンケートが見つかりません。</red>"))
            return
        }

        if (survey.requiredGroups.isNotEmpty()) {
            PermsUtils.hasAnyGroup(player.uniqueId, survey.requiredGroups).thenAccept { hasGroup ->
                Bukkit.getScheduler().runTask(plugin, Runnable {
                    if (!hasGroup) {
                        player.sendMessage(miniMessage.deserialize("<red>このアンケートに回答する権限がありません。</red>"))
                    } else {
                        proceedToStartSurvey(player, survey)
                    }
                })
            }
        } else {
            proceedToStartSurvey(player, survey)
        }
    }

    private fun proceedToStartSurvey(player: Player, survey: Survey) {
        val responseCount = survey.respondedPlayers.getOrDefault(player.uniqueId, 0)
        if (responseCount >= survey.maxResponses) {
            player.sendMessage(miniMessage.deserialize("<red>このアンケートは既に上限回数（${survey.maxResponses}回）回答済みです。</red>"))
            return
        }

        val existingProgress = playerProgress[player.uniqueId]
        if (existingProgress != null && existingProgress.surveyId == survey.id) {
            showQuestion(player, survey, existingProgress.currentQuestionIndex)
            return
        }

        playerProgress[player.uniqueId] = SurveyProgress(survey.id)
        showQuestion(player, survey, 0)
    }

    fun showQuestion(player: Player, survey: Survey, index: Int) {
        if (index >= survey.questions.size) {
            finishSurvey(player, survey)
            return
        }

        val question = survey.questions[index]
        val progress = playerProgress[player.uniqueId] ?: return
        progress.currentQuestionIndex = index

        when (question.type) {
            QuestionType.CLICK_TO_ANSWER -> {
                player.sendMessage(miniMessage.deserialize("<gray>本を閉じてしまった場合は <yellow>/sv resume</yellow> か <click:run_command:/sv resume><yellow><u>[ここをクリック]</u></yellow></click> で開き直せます。</gray>"))
                showBookChoice(player, survey, question, index)
            }
            QuestionType.CHAT_CHOICE -> {
                if (player.name.startsWith(".")) {
                    // Bedrock フォールバック
                    player.sendMessage(miniMessage.deserialize("<gray>本を閉じてしまった場合は <yellow>/sv resume</yellow> か <click:run_command:/sv resume><yellow><u>[ここをクリック]</u></yellow></click> で開き直せます。</gray>"))
                    showBookChoice(player, survey, question, index)
                } else {
                    // Java はチャットでクリックして回答できる
                    player.sendMessage(miniMessage.deserialize("<gold>[アンケート] ${question.text}</gold>"))
                    val optionsComponent = Component.text()
                    question.options.forEachIndexed { i, option ->
                        val choice = miniMessage.deserialize("<blue><u>[${option}]</u></blue>")
                            .clickEvent(ClickEvent.runCommand("/sv answer $index $option"))
                        optionsComponent.append(choice)
                        if (i < question.options.size - 1) optionsComponent.append(Component.text(" "))
                    }
                    player.sendMessage(optionsComponent.build())
                }
            }
            QuestionType.WRITE_IN_BOOK -> {
                val item = ItemStack(Material.WRITABLE_BOOK)
                val meta = item.itemMeta as BookMeta
                meta.displayName(miniMessage.deserialize("<gold>${survey.title} - 回答用</gold>"))
                meta.lore(listOf(miniMessage.deserialize("<gray>内容を記入して「署名」してください。</gray>")))
                item.itemMeta = meta

                player.inventory.addItem(item)
                player.sendMessage(miniMessage.deserialize("<green>本を付与しました。質問: ${question.text}</green>"))
                player.sendMessage(miniMessage.deserialize("<green>回答を記入して署名（Sign）してください。</green>"))
            }
        }
    }

    private fun showBookChoice(player: Player, survey: Survey, question: Question, index: Int) {
        val bookBuilder = Book.builder()
            .title(Component.text(survey.title))
            .author(Component.text("Oyasai Server"))

        val page = Component.text().append(miniMessage.deserialize(question.text)).append(Component.newline())

        question.options.forEach { option ->
            val optionComponent = miniMessage.deserialize("<blue><u>[${option}]</u></blue>")
                .clickEvent(ClickEvent.runCommand("/sv answer $index $option"))
            page.append(Component.newline()).append(optionComponent)
        }

        bookBuilder.addPage(page.build())
        player.openBook(bookBuilder.build())
    }

    fun handleAnswer(player: Player, questionIndex: Int, answer: String) {
        val progress = playerProgress[player.uniqueId] ?: return

        if (questionIndex != progress.currentQuestionIndex) {
            return
        }

        val survey = AnnouncementManager.surveys.find { it.id == progress.surveyId } ?: return

        val cleanAnswer = plainSerializer.serialize(miniMessage.deserialize(answer))

        progress.answers.add(cleanAnswer)
        showQuestion(player, survey, progress.currentQuestionIndex + 1)
    }

    private fun finishSurvey(player: Player, survey: Survey) {
        val progress = playerProgress.remove(player.uniqueId) ?: return

        val currentCount = survey.respondedPlayers.getOrDefault(player.uniqueId, 0)
        survey.respondedPlayers[player.uniqueId] = currentCount + 1
        AnnouncementManager.save()

        player.sendMessage(miniMessage.deserialize("<green>アンケートにご協力ありがとうございました！</green>"))

        val rewardCount = survey.rewardedPlayers.getOrDefault(player.uniqueId, 0)
        if (rewardCount < survey.maxRewards) {
            survey.rewardCommands.forEach { cmd ->
                val finalCmd = cmd.replace("%player%", player.name)
                Bukkit.dispatchCommand(Bukkit.getConsoleSender(), finalCmd)
            }
            survey.rewardedPlayers[player.uniqueId] = rewardCount + 1
            AnnouncementManager.save()
        } else {
            player.sendMessage(miniMessage.deserialize("<gray>報酬は既に上限回数（${survey.maxRewards}回）受け取っているため、今回は付与されません。</gray>"))
        }

        // Log answers
        plugin.logger.info("Player ${player.name} finished survey ${survey.id}: ${progress.answers}")

        saveResult(survey.id, player.uniqueId, player.name, progress.answers)
        sendDiscordNotification(survey, player, progress.answers)
    }

    fun exportResultsToDiscord(player: Player, surveyId: String) {
        val survey = AnnouncementManager.surveys.find { it.id == surveyId } ?: run {
            player.sendMessage(miniMessage.deserialize("<red>アンケートが見つかりません。</red>"))
            return
        }

        val webhookUrl = survey.discordWebhookUrl
        if (webhookUrl == null || webhookUrl.isBlank()) {
            player.sendMessage(miniMessage.deserialize("<red>このアンケートにはDiscord Webhookが設定されていません。</red>"))
            return
        }

        val file = java.io.File(plugin.dataFolder, "surveys/results_${surveyId}.json")
        if (!file.exists()) {
            player.sendMessage(miniMessage.deserialize("<red>収集されたデータがまだありません。</red>"))
            return
        }

        Bukkit.getScheduler().runTaskAsynchronously(plugin, Runnable {
            try {
                val results: List<SurveyResult> = JsonUtils.fromJson(file.readText())
                if (results.isEmpty()) {
                    player.sendMessage(miniMessage.deserialize("<red>収集されたデータが空です。</red>"))
                    return@Runnable
                }

                // Generate CSV
                val csvContent = StringBuilder()

                // Header
                val headers = mutableListOf("Timestamp", "UUID", "Name")
                survey.questions.forEachIndexed { i, q -> headers.add("Q${i+1}: ${q.text}") }
                csvContent.append(headers.joinToString(",") { "\"${it.replace("\"", "\"\"")}\"" }).append("\n")

                results.forEach { result ->
                    val row = mutableListOf<String>()
                    row.add(result.timestamp.toString())
                    row.add(result.uuid)
                    row.add(result.name)

                    val answers = result.answers
                    survey.questions.forEachIndexed { i, _ ->
                        val answer = answers.getOrNull(i) ?: ""
                        row.add(answer)
                    }
                    csvContent.append(row.joinToString(",") { "\"${it.replace("\"", "\"\"")}\"" }).append("\n")
                }

                val client = WebhookClient.withUrl(webhookUrl)

                // Send as CSV file
                client.send("📊 **アンケート結果エクスポート (CSV): ${survey.title}**")
                client.send(csvContent.toString().toByteArray(), "results_${surveyId}.csv")

                client.close()
                player.sendMessage(miniMessage.deserialize("<green>データをCSV形式でDiscordに送信しました。</green>"))
            } catch (e: Exception) {
                player.sendMessage(miniMessage.deserialize("<red>Discordへの送信に失敗しました: ${e.message}</red>"))
                plugin.logger.warning("Failed to export results for survey ${surveyId}: ${e.message}")
                e.printStackTrace()
            }
        })
    }

    private fun sendDiscordNotification(survey: Survey, player: Player, answers: List<String>) {
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

    private fun saveResult(surveyId: String, uuid: UUID, name: String, answers: List<String>) {
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
