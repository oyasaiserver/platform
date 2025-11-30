package io.oyasai.oyasaiAdminTools.notifications

import com.baakun.dynamicprofile.data.PromotionRecord
import com.baakun.dynamicprofile.data.PromotionType
import io.oyasai.oyasaiAdminTools.OyasaiAdminTools.Companion.plugin
import io.oyasai.oyasaiAdminTools.discord.SendEmbedMessage
import io.oyasai.oyasaiAdminTools.rank.Rank
import org.bukkit.Bukkit
import org.bukkit.Sound
import java.util.UUID

object PromotionNotifier {

  fun notifyServer(
    targetName: String?,
    newRankName: String,
    promotedBy: String?,
    record: PromotionRecord,
    special: Boolean,
  ) {
    val action = if (record.type == PromotionType.PROMOTE) "昇格" else "降格"
    val by = promotedBy ?: "Unknown"
    val name = targetName ?: "Unknown"
    Bukkit.getScheduler().runTask(plugin, Runnable {

      val message = "§a${name}さんが§e${newRankName}§aに${action}しました！！ by $by"
      Bukkit.getOnlinePlayers().forEach {
        if (it.name.equals(name, ignoreCase = true)) {
          it.sendMessage("§6おめでとうございます！§r $message")
          it.playSound(it, Sound.UI_TOAST_CHALLENGE_COMPLETE, 1F, 1F)
        } else {
          it.sendMessage(message)
          it.playSound(it, Sound.ENTITY_EXPERIENCE_ORB_PICKUP, 1F, 2F)
        }
        if (special){
          it.playSound(it, Sound.ENTITY_FIREWORK_ROCKET_TWINKLE_FAR, 1F, 1F)
        }
      }

    })
  }

  fun notifyDiscord(
    targetUUID: UUID,
    targetName: String?,
    promoterName: String?,
    record: PromotionRecord,
  ) {
    SendEmbedMessage.sendNotification(targetUUID, targetName, promoterName, record)
  }

  fun notifyAll(
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
