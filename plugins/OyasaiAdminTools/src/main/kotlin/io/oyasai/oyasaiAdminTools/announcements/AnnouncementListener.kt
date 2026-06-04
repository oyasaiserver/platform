package io.oyasai.oyasaiAdminTools.announcements

import io.oyasai.oyasaiAdminTools.OyasaiAdminTools.Companion.plugin
import io.oyasai.oyasaiAdminTools.announcements.models.QuestionType
import net.kyori.adventure.text.serializer.plain.PlainTextComponentSerializer
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.player.PlayerEditBookEvent

object AnnouncementListener : Listener {
    private val plainSerializer = PlainTextComponentSerializer.plainText()

    @EventHandler
    fun onBookEdit(event: PlayerEditBookEvent) {
        if (!event.isSigning) return

        val player = event.player
        val progress = getProgressFor(player.uniqueId) ?: return
        val survey = AnnouncementManager.surveys.find { it.id == progress.surveyId } ?: return
        val question = survey.questions.getOrNull(progress.currentQuestionIndex) ?: return

        if (question.type == QuestionType.WRITE_IN_BOOK) {
            val content = event.newBookMeta.pages().joinToString("\n") { plainSerializer.serialize(it) }

            SurveyManager.handleAnswer(player, progress.currentQuestionIndex, content)

            Bukkit.getScheduler().runTask(plugin, Runnable {
                val item = player.inventory.itemInMainHand
                if (item.type == Material.WRITABLE_BOOK || item.type == Material.WRITTEN_BOOK) {
                    player.inventory.setItemInMainHand(null)
                }
            })
        }
    }

    private fun getProgressFor(uuid: java.util.UUID): SurveyManager.SurveyProgress? {
        return SurveyManager.getProgress(uuid)
    }
}
