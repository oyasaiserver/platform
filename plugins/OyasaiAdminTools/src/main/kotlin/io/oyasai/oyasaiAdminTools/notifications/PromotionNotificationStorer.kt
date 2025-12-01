package io.oyasai.oyasaiAdminTools.notifications

import io.oyasai.oyasaiAdminTools.OyasaiAdminTools.Companion.plugin
import org.bukkit.Bukkit

object PromotionNotificationStorer {
  private val pendingNotifications = mutableListOf<PromotionNotification>()
  fun storePendingNotification(notification: PromotionNotification) {
    pendingNotifications.add(notification)

    // 5分後に自動削除
    Bukkit.getScheduler().runTaskLater(plugin, Runnable {
      pendingNotifications.remove(notification)
    }, 20 * 60 * 5)
  }
}
