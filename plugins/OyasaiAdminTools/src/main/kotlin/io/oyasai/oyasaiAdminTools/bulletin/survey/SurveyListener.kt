package io.oyasai.oyasaiAdminTools.bulletin.survey

import io.oyasai.oyasaiAdminTools.OyasaiAdminTools.Companion.plugin
import io.oyasai.oyasaiAdminTools.bulletin.survey.models.QuestionType
import net.kyori.adventure.text.serializer.plain.PlainTextComponentSerializer
import org.bukkit.Bukkit
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.inventory.InventoryClickEvent
import org.bukkit.event.inventory.InventoryDragEvent
import org.bukkit.event.inventory.InventoryType
import org.bukkit.event.player.PlayerDropItemEvent
import org.bukkit.event.player.PlayerEditBookEvent
import org.bukkit.inventory.ItemStack
import org.bukkit.persistence.PersistentDataType

object SurveyListener : Listener {
  private val plainSerializer = PlainTextComponentSerializer.plainText()

  private fun isSurveyBook(item: ItemStack?): Boolean {
    return item
        ?.itemMeta
        ?.persistentDataContainer
        ?.has(SurveyManager.surveyBookKey, PersistentDataType.BYTE) == true
  }

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
                if (isSurveyBook(player.inventory.itemInMainHand)) {
                  player.inventory.setItemInMainHand(null)
                }
                if (isSurveyBook(player.inventory.itemInOffHand)) {
                  player.inventory.setItemInOffHand(null)
                }
                val slot = event.slot
                if (slot in 0 until player.inventory.size) {
                  if (isSurveyBook(player.inventory.getItem(slot))) {
                    player.inventory.setItem(slot, null)
                  }
                }
              },
          )
    }
  }

  @EventHandler(ignoreCancelled = true)
  fun onBookDrop(event: PlayerDropItemEvent) {
    if (isSurveyBook(event.itemDrop.itemStack)) {
      event.itemDrop.remove()
    }
  }

  @EventHandler(ignoreCancelled = true)
  fun onInventoryClick(event: InventoryClickEvent) {
    val top = event.view.topInventory
    if (top.type == InventoryType.CRAFTING || top == event.whoClicked.inventory) return
    val hotbarItem =
        if (event.hotbarButton >= 0) event.whoClicked.inventory.getItem(event.hotbarButton)
        else null
    if (isSurveyBook(event.currentItem) || isSurveyBook(event.cursor) || isSurveyBook(hotbarItem)) {
      event.isCancelled = true
    }
  }

  @EventHandler(ignoreCancelled = true)
  fun onInventoryDrag(event: InventoryDragEvent) {
    val top = event.view.topInventory
    if (top.type == InventoryType.CRAFTING || top == event.whoClicked.inventory) return
    if (isSurveyBook(event.oldCursor)) {
      event.isCancelled = true
    }
  }
}
