package io.oyasai.oyasaiAdminTools.bulletin

import io.oyasai.oyasaiAdminTools.OyasaiAdminTools.Companion.plugin
import io.oyasai.oyasaiAdminTools.bulletin.models.QuestionType
import net.kyori.adventure.text.serializer.plain.PlainTextComponentSerializer
import org.bukkit.Bukkit
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.player.PlayerEditBookEvent
import org.bukkit.persistence.PersistentDataType

object BulletinListener : Listener {
    private val plainSerializer = PlainTextComponentSerializer.plainText()

    @EventHandler
    fun onBookSign(event: PlayerEditBookEvent) {
        if (!event.isSigning) return

        val player = event.player
        val progress = getProgressFor(player.uniqueId) ?: return
        val survey = BulletinManager.surveys.find { it.id == progress.surveyId } ?: return
        val question = survey.questions.getOrNull(progress.currentQuestionIndex) ?: return

        if (question.type == QuestionType.WRITE_IN_BOOK) {
            val bookMeta = event.newBookMeta
            if (!bookMeta.persistentDataContainer.has(SurveyManager.surveyBookKey, PersistentDataType.BYTE)) {
                return
            }

            val content = bookMeta.pages().joinToString("\n") { plainSerializer.serialize(it) }

            SurveyManager.handleAnswer(player, progress.currentQuestionIndex, content)

            Bukkit.getScheduler().runTask(plugin, Runnable {
                val item = player.inventory.itemInMainHand
                if (item.itemMeta?.persistentDataContainer?.has(SurveyManager.surveyBookKey, PersistentDataType.BYTE) == true) {
                    player.inventory.setItemInMainHand(null)
                }
            })
        }
    }

    private fun getProgressFor(uuid: java.util.UUID): SurveyManager.SurveyProgress? {
        return SurveyManager.getProgress(uuid)
    }
}
