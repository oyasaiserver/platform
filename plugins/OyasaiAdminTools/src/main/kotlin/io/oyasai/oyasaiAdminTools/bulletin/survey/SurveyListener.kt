package io.oyasai.oyasaiAdminTools.bulletin.survey

import io.oyasai.oyasaiAdminTools.OyasaiAdminTools.Companion.plugin
import io.oyasai.oyasaiAdminTools.bulletin.survey.models.QuestionType
import net.kyori.adventure.text.serializer.plain.PlainTextComponentSerializer
import org.bukkit.Bukkit
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.player.PlayerEditBookEvent
import org.bukkit.persistence.PersistentDataType

object SurveyListener : Listener {
  private val plainSerializer = PlainTextComponentSerializer.plainText()

  @EventHandler
  fun onBookSign(event: PlayerEditBookEvent) {
    if (!event.isSigning) return

    val player = event.player
    val progress = SurveyManager.getProgress(player.uniqueId) ?: return
    val survey = SurveyManager.surveys.find { it.id == progress.surveyId } ?: return
    val question = survey.questions.getOrNull(progress.currentQuestionIndex) ?: return

    if (question.type == QuestionType.WRITE_IN_BOOK) {
      val bookMeta = event.newBookMeta
      if (
          !bookMeta.persistentDataContainer.has(
              SurveyManager.surveyBookKey,
              PersistentDataType.BYTE,
          )
      ) {
        return
      }

      val content = bookMeta.pages().joinToString("\n") { plainSerializer.serialize(it) }

      SurveyManager.handleAnswer(player, progress.currentQuestionIndex, content)

      Bukkit.getScheduler()
          .runTask(
              plugin,
              Runnable {
                val item = player.inventory.itemInMainHand
                if (
                    item.itemMeta
                        ?.persistentDataContainer
                        ?.has(SurveyManager.surveyBookKey, PersistentDataType.BYTE) == true
                ) {
                  player.inventory.setItemInMainHand(null)
                }
              },
          )
    }
  }
}
