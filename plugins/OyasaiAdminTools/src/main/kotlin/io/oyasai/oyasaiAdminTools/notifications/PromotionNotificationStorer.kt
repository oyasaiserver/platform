package io.oyasai.oyasaiAdminTools.notifications

import io.oyasai.oyasaiAdminTools.OyasaiAdminTools.Companion.plugin
import org.bukkit.Bukkit
import org.bukkit.scheduler.BukkitTask

object PromotionNotificationStorer {
  private val pendingNotifications = mutableListOf<PromotionNotification>()
  private val tasks = mutableMapOf<String, BukkitTask>() // [playerUUID] = task

  fun storePendingNotification(notification: PromotionNotification) {
    val uuid = notification.targetUUID.toString()

    // 既存の通知とタスクを削除してから追加
    removePendingNotification(uuid)
    pendingNotifications.add(notification)

    // 5分後に自動削除
    val task =
      Bukkit.getScheduler()
        .runTaskLater(
          plugin,
          Runnable {
            pendingNotifications.removeIf { it.targetUUID.toString() == uuid }
            tasks.remove(uuid)
          },
          20 * 60 * 5,
        )
    tasks[uuid] = task
  }

  fun getPendingNotification(targetUUID: String): PromotionNotification? {
    return pendingNotifications.find { it.targetUUID.toString() == targetUUID }
  }

  fun removePendingNotification(targetUUID: String) {
    tasks[targetUUID]?.cancel()
    tasks.remove(targetUUID)
    pendingNotifications.removeIf { it.targetUUID.toString() == targetUUID }
  }

  fun getAllPendingNotifications(): List<PromotionNotification> {
    return pendingNotifications.toList()
  }
}
