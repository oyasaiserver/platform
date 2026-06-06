package io.oyasai.oyasaiAdminTools.bulletin.announcement

import io.oyasai.oyasaiAdminTools.OyasaiAdminTools
import io.oyasai.oyasaiAdminTools.bulletin.announcement.models.Announcement
import io.oyasai.oyasaiAdminTools.bulletin.utils.BulletinTimerHandler
import io.oyasai.oyasaiAdminTools.utils.JsonUtils
import org.bukkit.scheduler.BukkitTask

object AnnouncementManager {
    private val plugin = OyasaiAdminTools.plugin

    var announcements = mutableListOf<Announcement>()
    private val tasks = mutableListOf<BukkitTask>()

    fun load() {
        stopAll()
        announcements = JsonUtils.readJsonFileSafe("announcements.json", mutableListOf<Announcement>()).toMutableList()
        startAll()
    }

    fun save() {
        JsonUtils.writeJsonFile("announcements.json", announcements)
    }

    fun startAll() {
        val now = System.currentTimeMillis()

        announcements.filter { it.enabled && (it.expiresAt == null || it.expiresAt > now) }.forEach { announcement ->
            val task = BulletinTimerHandler.startTimer(
                interval = announcement.interval,
                message = announcement.message,
                targetGroups = announcement.targetGroups,
                sound = announcement.sound,
                expiresAt = announcement.expiresAt,
                onExpire = {
                    val target = announcements.find { it.id == announcement.id }
                    if (target != null) {
                        announcements[announcements.indexOf(target)] = target.copy(enabled = false)
                        save()
                        plugin.logger.info("Announcement ${announcement.id} has expired and was disabled.")
                    }
                }
            )
            tasks.add(task)
        }
    }

    fun stopAll() {
        tasks.forEach { it.cancel() }
        tasks.clear()
    }

    fun reload() {
        load()
    }

    fun refreshTimers() {
        stopAll()
        startAll()
    }
}
