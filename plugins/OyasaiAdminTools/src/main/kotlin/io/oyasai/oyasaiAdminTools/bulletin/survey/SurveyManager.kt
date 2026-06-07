package io.oyasai.oyasaiAdminTools.bulletin.survey

import io.oyasai.oyasaiAdminTools.OyasaiAdminTools
import io.oyasai.oyasaiAdminTools.bulletin.survey.models.Question
import io.oyasai.oyasaiAdminTools.bulletin.survey.models.QuestionType
import io.oyasai.oyasaiAdminTools.bulletin.survey.models.Survey
import io.oyasai.oyasaiAdminTools.bulletin.survey.models.SurveyProgress
import io.oyasai.oyasaiAdminTools.bulletin.utils.BulletinManagerUtils
import io.oyasai.oyasaiAdminTools.bulletin.utils.BulletinTaskRegistry
import io.oyasai.oyasaiAdminTools.bulletin.utils.BulletinTimerHandler
import io.oyasai.oyasaiAdminTools.utils.JsonUtils
import io.oyasai.oyasaiAdminTools.utils.MMUtils.mm
import java.util.UUID
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

object SurveyManager {
  private val plugin = OyasaiAdminTools.plugin
  private val miniMessage = MiniMessage.miniMessage()
  private val plainSerializer = PlainTextComponentSerializer.plainText()
  private val taskRegistry = BulletinTaskRegistry()
  val surveyBookKey = org.bukkit.NamespacedKey(plugin, "survey_book")

  var surveys = mutableListOf<Survey>()
  val surveyBroadcastHistory = mutableListOf<String>()
  private val playerProgress = mutableMapOf<UUID, SurveyProgress>()

  fun load() {
    stopAll()
    surveys = JsonUtils.readJsonFileSafe("surveys.json", mutableListOf<Survey>()).toMutableList()
    startAll()
  }

  fun save() {
    JsonUtils.writeJsonFile("surveys.json", surveys)
  }

  fun startAll() {
    val now = System.currentTimeMillis()

    surveys
        .filter { it.enabled && (it.expiresAt == null || it.expiresAt > now) }
        .forEach { survey ->
          val task =
              BulletinTimerHandler.startTimer(
                  interval = survey.broadcastInterval,
                  messages = survey.broadcastMessages,
                  targetGroups = survey.targetGroups,
                  sound = survey.sound,
                  expiresAt = survey.expiresAt,
                  onExpire = {
                    BulletinManagerUtils.updateSurvey(survey.id) { it.copy(enabled = false) }
                    plugin.logger.info("Survey ${survey.id} has expired and was disabled.")
                  },
                  onTick = {
                    surveyBroadcastHistory.add(survey.id)
                    if (surveyBroadcastHistory.size > 50) surveyBroadcastHistory.removeAt(0)
                  },
                  playerFilter = { player ->
                    val responseCount =
                        survey.respondedPlayers.getOrDefault(player.uniqueId.toString(), 0)
                    responseCount < survey.maxResponses
                  },
              )
          taskRegistry.register(task)
        }
  }

  fun startLastAvailableSurvey(player: Player) {
    val recentIds = surveyBroadcastHistory.reversed().distinct()
    for (id in recentIds) {
      val survey = surveys.find { it.id == id } ?: continue
      if (!survey.enabled) continue

      val responseCount = survey.respondedPlayers.getOrDefault(player.uniqueId.toString(), 0)
      if (responseCount >= survey.maxResponses) continue

      val hasAccess =
          survey.targetGroups.isEmpty() ||
              survey.targetGroups.any { player.hasPermission("group.$it") }
      if (hasAccess) {
        startSurvey(player, id)
        return
      }
    }
    player.sendMessage("<red>現在回答可能な新しいアンケートはありません。</red>".mm())
  }

  fun stopAll() {
    taskRegistry.cancelAll()
  }

  fun reload() {
    load()
  }

  fun refreshTimers() {
    stopAll()
    startAll()
  }

  fun getProgress(uuid: UUID): SurveyProgress? = playerProgress[uuid]

  fun startSurvey(player: Player, surveyId: String) {
    val survey =
        surveys.find { it.id == surveyId }
            ?: run {
              player.sendMessage("<red>アンケートが見つかりません。</red>".mm())
              return
            }

    val hasAccess =
        survey.targetGroups.isEmpty() ||
            survey.targetGroups.any { player.hasPermission("group.$it") }
    if (!hasAccess) {
      player.sendMessage("<red>このアンケートに回答する権限がありません。</red>".mm())
    } else {
      proceedToStartSurvey(player, survey)
    }
  }

  private fun proceedToStartSurvey(player: Player, survey: Survey) {
    val responseCount = survey.respondedPlayers.getOrDefault(player.uniqueId.toString(), 0)
    if (responseCount >= survey.maxResponses) {
      player.sendMessage("<red>このアンケートは既に上限回数（${survey.maxResponses}回）回答済みです。</red>".mm())
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
        player.sendMessage(
            "<gray>本を閉じてしまった場合は <yellow>/anke resume</yellow> か <click:run_command:/anke resume><yellow><u>[ここをクリック]</u></yellow></click> で開き直せます。</gray>"
                .mm()
        )
        showBookChoice(player, survey, question, index)
      }
      QuestionType.CHAT_CHOICE -> {
        if (player.name.startsWith(".")) {
          // Bedrock フォールバック
          player.sendMessage(
              "<gray>本を閉じてしまった場合は <yellow>/anke resume</yellow> か <click:run_command:/anke resume><yellow><u>[ここをクリック]</u></yellow></click> で開き直せます。</gray>"
                  .mm()
          )
          showBookChoice(player, survey, question, index)
        } else {
          // Java はチャットでクリックして回答できる
          player.sendMessage("<gold>[アンケート] ${question.text}</gold>".mm())
          val optionsComponent = Component.text()
          question.options.forEachIndexed { i, option ->
            val choice =
                miniMessage
                    .deserialize("<blue><u>[${option}]</u></blue>")
                    .clickEvent(ClickEvent.runCommand("/anke answer $index $option"))
            optionsComponent.append(choice)
            if (i < question.options.size - 1) optionsComponent.append(Component.text(" "))
          }
          player.sendMessage(optionsComponent.build())
        }
      }
      QuestionType.WRITE_IN_BOOK -> {
        val hasBook =
            player.inventory.contents.filterNotNull().any {
              it.itemMeta
                  ?.persistentDataContainer
                  ?.has(surveyBookKey, org.bukkit.persistence.PersistentDataType.BYTE) == true
            }

        if (hasBook) {
          player.sendMessage("<yellow>既にアンケート回答用の本を持っています。インベントリを確認してください。</yellow>".mm())
          player.sendMessage("<green>質問: ${question.text}</green>".mm())
        } else {
          val item = ItemStack(Material.WRITABLE_BOOK)
          val meta = item.itemMeta as BookMeta
          meta.displayName("<gold>${survey.title} - 回答用</gold>".mm())
          meta.lore(listOf("<gray>内容を記入して「署名」してください。</gray>".mm()))
          meta.persistentDataContainer.set(
              surveyBookKey,
              org.bukkit.persistence.PersistentDataType.BYTE,
              1.toByte(),
          )
          item.itemMeta = meta

          player.inventory.addItem(item)
          player.sendMessage("<green>本を付与しました。質問: ${question.text}</green>".mm())
          player.sendMessage("<green>回答を記入して署名（Sign）してください。</green>".mm())
        }
      }
    }
  }

  private fun showBookChoice(player: Player, survey: Survey, question: Question, index: Int) {
    val bookBuilder =
        Book.builder().title(Component.text(survey.title)).author(Component.text("Oyasai Server"))

    val page =
        Component.text().append(miniMessage.deserialize(question.text)).append(Component.newline())

    question.options.forEach { option ->
      val optionComponent =
          miniMessage
              .deserialize("<blue><u>[${option}]</u></blue>")
              .clickEvent(ClickEvent.runCommand("/anke answer $index $option"))
      page.append(Component.newline()).append(optionComponent)
    }

    bookBuilder.addPage(page.build())
    val book = bookBuilder.build()
    Bukkit.getScheduler().runTask(plugin, Runnable { player.openBook(book) })
  }

  fun handleAnswer(player: Player, questionIndex: Int, answer: String) {
    val progress = playerProgress[player.uniqueId] ?: return

    if (questionIndex != progress.currentQuestionIndex) {
      return
    }

    val survey = surveys.find { it.id == progress.surveyId } ?: return

    val cleanAnswer = plainSerializer.serialize(miniMessage.deserialize(answer))

    progress.answers.add(cleanAnswer)
    showQuestion(player, survey, progress.currentQuestionIndex + 1)
  }

  private fun finishSurvey(player: Player, survey: Survey) {
    val progress = playerProgress.remove(player.uniqueId) ?: return

    val currentCount = survey.respondedPlayers.getOrDefault(player.uniqueId.toString(), 0)
    survey.respondedPlayers[player.uniqueId.toString()] = currentCount + 1
    save()

    player.sendMessage("<green>アンケートにご協力ありがとうございました！</green>".mm())

    val rewardCount = survey.rewardedPlayers.getOrDefault(player.uniqueId.toString(), 0)
    if (rewardCount < survey.maxRewards) {
      survey.rewardCommands.forEach { cmd ->
        val finalCmd = cmd.replace("%player%", player.name)
        Bukkit.dispatchCommand(Bukkit.getConsoleSender(), finalCmd)
      }
      survey.rewardedPlayers[player.uniqueId.toString()] = rewardCount + 1
      save()
    } else {
      player.sendMessage("<gray>報酬は既に上限回数（${survey.maxRewards}回）受け取っているため、今回は付与されません。</gray>".mm())
    }

    // Log answers
    plugin.logger.info("Player ${player.name} finished survey ${survey.id}: ${progress.answers}")

    SurveyExporter.saveResult(survey.id, player.uniqueId, player.name, progress.answers)
    SurveyExporter.sendDiscordNotification(survey, player, progress.answers)
  }
}
