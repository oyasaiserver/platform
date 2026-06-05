package io.oyasai.oyasaiAdminTools.bulletin

import io.oyasai.oyasaiAdminTools.OyasaiAdminTools
import io.oyasai.oyasaiAdminTools.bulletin.models.Notice
import io.oyasai.oyasaiAdminTools.bulletin.models.Survey
import io.oyasai.oyasaiAdminTools.utils.JsonUtils
import io.oyasai.oyasaiAdminTools.utils.PermsUtils
import net.kyori.adventure.text.minimessage.MiniMessage
import org.bukkit.Bukkit
import org.bukkit.scheduler.BukkitTask

object BulletinManager {
    private val plugin = OyasaiAdminTools.plugin
    private val miniMessage = MiniMessage.miniMessage()

    var notices = mutableListOf<Notice>()
    var surveys = mutableListOf<Survey>()
    
    val surveyBroadcastHistory = mutableListOf<String>()

    private val tasks = mutableListOf<BukkitTask>()

    fun load() {
        stopAll()
        notices = JsonUtils.readJsonFileSafe("notices.json", mutableListOf<Notice>()).toMutableList()
        surveys = JsonUtils.readJsonFileSafe("surveys.json", mutableListOf<Survey>()).toMutableList()
        startAll()
    }

    fun save() {
        JsonUtils.writeJsonFile("notices.json", notices)
        JsonUtils.writeJsonFile("surveys.json", surveys)
    }

    fun startAll() {
        val now = System.currentTimeMillis()

        notices.filter { it.enabled && (it.expiresAt == null || it.expiresAt > now) }.forEach { notice ->
            startBulletinTimer(
                interval = notice.interval,
                message = notice.message,
                targetGroups = notice.targetGroups,
                sound = notice.sound,
                expiresAt = notice.expiresAt,
                onExpire = {
                    val target = notices.find { it.id == notice.id }
                    if (target != null) {
                        notices[notices.indexOf(target)] = target.copy(enabled = false)
                        save()
                        plugin.logger.info("Notice ${notice.id} has expired and was disabled.")
                    }
                }
            )
        }

        surveys.filter { it.enabled && (it.expiresAt == null || it.expiresAt > now) }.forEach { survey ->
            startBulletinTimer(
                interval = survey.broadcastInterval,
                message = survey.broadcastMessage,
                targetGroups = survey.targetGroups,
                sound = survey.sound,
                expiresAt = survey.expiresAt,
                onExpire = {
                    val target = surveys.find { it.id == survey.id }
                    if (target != null) {
                        surveys[surveys.indexOf(target)] = target.copy(enabled = false)
                        save()
                        plugin.logger.info("Survey ${survey.id} has expired and was disabled.")
                    }
                },
                onTick = {
                    surveyBroadcastHistory.add(survey.id)
                    if (surveyBroadcastHistory.size > 50) surveyBroadcastHistory.removeAt(0)
                },
                playerFilter = { player ->
                    val responseCount = survey.respondedPlayers.getOrDefault(player.uniqueId, 0)
                    responseCount < survey.maxResponses
                }
            )
        }
    }

    private fun startBulletinTimer(
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
