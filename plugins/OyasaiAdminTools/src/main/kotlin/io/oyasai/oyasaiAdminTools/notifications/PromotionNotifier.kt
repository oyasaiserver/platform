package io.oyasai.oyasaiAdminTools.notifications

import com.baakun.dynamicprofile.data.PromotionRecord
import com.baakun.dynamicprofile.data.PromotionType
import io.oyasai.oyasaiAdminTools.OyasaiAdminTools.Companion.plugin
import io.oyasai.oyasaiAdminTools.discord.SendEmbedMessage
import java.util.UUID
import org.bukkit.Bukkit
import org.bukkit.Sound

object PromotionNotifier {

  private fun notifyServer(
      targetName: String?,
      newRankName: String,
      promotedBy: String?,
      record: PromotionRecord,
      special: Boolean,
  ) {
    val action = if (record.type == PromotionType.PROMOTE) "§6「↑昇格↑」" else "§c「↓降格↓」"
    val by = if (promotedBy != null) "§7(実行: $promotedBy)" else ""
    val name = targetName ?: "Unknown"
    Bukkit.getScheduler()
        .runTask(
            plugin,
            Runnable {
              val message = "§6おめでとう！ §a${name} さんが §e「${newRankName}§e」 §aに${action}§aしました！！$by"
              Bukkit.getOnlinePlayers().forEach {
                if (it.name.equals(name, ignoreCase = true)) {
                  it.sendMessage(message)
                  it.playSound(it, Sound.UI_TOAST_CHALLENGE_COMPLETE, 1F, 1F)
                } else {
                  it.sendMessage(message)
                  it.playSound(it, Sound.ENTITY_EXPERIENCE_ORB_PICKUP, 1F, 2F)
                }
                if (special) {
                  it.playSound(it, Sound.ENTITY_FIREWORK_ROCKET_TWINKLE_FAR, 1F, 1F)
                }
              }
            },
        )
  }

  private fun notifyDiscord(
      targetUUID: UUID,
      targetName: String?,
      promoterName: String?,
      record: PromotionRecord,
  ) {
    SendEmbedMessage.sendPromotionNotification(targetUUID, targetName, promoterName, record)
  }

  fun notifyDiscord(notification: PromotionNotification) {
    notifyDiscord(
        notification.targetUUID,
        notification.targetName,
        notification.promoterName,
        notification.record,
    )
  }

  fun notifyServer(notification: PromotionNotification) {
    notifyServer(
        notification.targetName,
        notification.newRankName,
        notification.promoterName,
        notification.record,
        notification.special,
    )
  }

  fun notifyAll(notification: PromotionNotification) {
    notifyAll(
        notification.targetUUID,
        notification.targetName,
        notification.newRankName,
        notification.promoterName,
        notification.record,
        notification.special,
    )
  }

  private fun notifyAll(
      targetUUID: UUID,
      targetName: String?,
      newRankName: String,
      promoterName: String?,
      record: PromotionRecord,
      special: Boolean,
  ) {
    notifyServer(targetName, newRankName, promoterName, record, special)
    try {
      notifyDiscord(targetUUID, targetName, promoterName, record)
    } catch (e: Exception) {
      plugin.logger.warning("Failed to send discord notification: ${e.message}")
    }
  }
}
