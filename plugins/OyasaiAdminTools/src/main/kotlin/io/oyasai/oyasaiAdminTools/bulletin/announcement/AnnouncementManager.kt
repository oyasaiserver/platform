package io.oyasai.oyasaiAdminTools.bulletin.announcement

import io.oyasai.oyasaiAdminTools.OyasaiAdminTools
import io.oyasai.oyasaiAdminTools.bulletin.announcement.models.Announcement
import io.oyasai.oyasaiAdminTools.bulletin.utils.BulletinManagerUtils
import io.oyasai.oyasaiAdminTools.bulletin.utils.BulletinTaskRegistry
import io.oyasai.oyasaiAdminTools.bulletin.utils.BulletinTimerHandler

object AnnouncementManager {
  private val plugin = OyasaiAdminTools.plugin
  private val taskRegistry = BulletinTaskRegistry()

  var announcements = mutableListOf<Announcement>()

  fun load() {
    stopAll()
    announcements = plugin.db.loadAnnouncements()
    startAll()
  }

  fun save() {
    plugin.db.saveAnnouncements(announcements)
  }

  fun startAll() {
    val now = System.currentTimeMillis()

    announcements
        .filter { it.enabled && (it.expiresAt == null || it.expiresAt > now) }
        .forEach { announcement ->
          val task =
              BulletinTimerHandler.startTimer(
                  interval = announcement.interval,
                  messages = announcement.messages,
                  targetGroups = announcement.targetGroups,
                  sound = announcement.sound,
                  expiresAt = announcement.expiresAt,
                  onExpire = {
                    BulletinManagerUtils.updateAnnouncement(announcement.id) {
                      it.copy(enabled = false)
                    }
                    plugin.logger.info(
                        "Announcement ${announcement.id} has expired and was disabled."
                    )
                  },
              )
          taskRegistry.register(task)
        }
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
}
