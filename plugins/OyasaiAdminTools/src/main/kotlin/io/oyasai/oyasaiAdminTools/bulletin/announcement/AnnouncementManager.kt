package io.oyasai.oyasaiAdminTools.bulletin.announcement

import io.oyasai.oyasaiAdminTools.OyasaiAdminTools
import io.oyasai.oyasaiAdminTools.bulletin.announcement.models.Announcement
import io.oyasai.oyasaiAdminTools.utils.JsonUtils
import io.oyasai.oyasaiAdminTools.utils.PermsUtils
import net.kyori.adventure.text.minimessage.MiniMessage
import org.bukkit.Bukkit
import org.bukkit.scheduler.BukkitTask

object AnnouncementManager {
    private val plugin = OyasaiAdminTools.plugin
    private val miniMessage = MiniMessage.miniMessage()

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
            startTimer(
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
        }
    }

    private fun startTimer(
        interval: Long,
        message: String,
        targetGroups: List<String>,
        sound: String? = null,
        expiresAt: Long? = null,
        onExpire: (() -> Unit)? = null,
        onTick: (() -> Unit)? = null,
        playerFilter: ((org.bukkit.entity.Player) -> Boolean)? = null
    ) {
        val taskWrapper = object : Runnable {
            var task: BukkitTask? = null

            override fun run() {
                if (expiresAt != null && System.currentTimeMillis() > expiresAt) {
                    onExpire?.invoke()
                    task?.cancel()
                    return
                }

                onTick?.invoke()
                Bukkit.getOnlinePlayers().forEach { player ->
                    if (playerFilter != null && !playerFilter(player)) return@forEach

                    val sendMsg = {
                        val msg = message.replace("%player%", player.name)
                        player.sendMessage(miniMessage.deserialize(msg))

                        sound?.let { soundStr ->
                            try {
                                player.playSound(player.location, soundStr, 1.0f, 1.0f)
                            } catch (e: Exception) {
                                // Ignore invalid sound
                            }
                        }
                    }

                    if (targetGroups.isNotEmpty()) {
                        PermsUtils.hasAnyGroup(player.uniqueId, targetGroups).thenAccept { hasGroup ->
                            if (hasGroup) Bukkit.getScheduler().runTask(plugin, Runnable { sendMsg() })
                        }
                    } else {
                        sendMsg()
                    }
                }
            }
        }

        taskWrapper.task = Bukkit.getScheduler().runTaskTimer(plugin, taskWrapper, interval * 20L, interval * 20L)
        tasks.add(taskWrapper.task!!)
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
