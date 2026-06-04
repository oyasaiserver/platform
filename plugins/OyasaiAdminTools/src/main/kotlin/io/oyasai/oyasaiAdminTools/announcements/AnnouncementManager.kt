package io.oyasai.oyasaiAdminTools.announcements

import io.oyasai.oyasaiAdminTools.OyasaiAdminTools
import io.oyasai.oyasaiAdminTools.announcements.models.Broadcast
import io.oyasai.oyasaiAdminTools.announcements.models.Survey
import io.oyasai.oyasaiAdminTools.utils.JsonUtils
import io.oyasai.oyasaiAdminTools.utils.PermsUtils
import net.kyori.adventure.text.minimessage.MiniMessage
import org.bukkit.Bukkit
import org.bukkit.scheduler.BukkitTask

object AnnouncementManager {
    private val plugin = OyasaiAdminTools.plugin
    private val miniMessage = MiniMessage.miniMessage()

    var broadcasts = mutableListOf<Broadcast>()
    var surveys = mutableListOf<Survey>()

    var lastBroadcastedSurveyId: String? = null

    private val tasks = mutableListOf<BukkitTask>()

    fun load() {
        stopAll()

        broadcasts = JsonUtils.readJsonFileSafe("broadcasts.json", mutableListOf<Broadcast>()).toMutableList()
        surveys = JsonUtils.readJsonFileSafe("surveys.json", mutableListOf<Survey>()).toMutableList()

        startAll()
    }

    fun save() {
        JsonUtils.writeJsonFile("broadcasts.json", broadcasts)
        JsonUtils.writeJsonFile("surveys.json", surveys)
    }

    fun startAll() {
        val now = System.currentTimeMillis()
        
        broadcasts.filter { it.enabled && (it.expiresAt == null || it.expiresAt > now) }.forEach { broadcast ->
            startAnnouncementTimer(
                interval = broadcast.interval,
                message = broadcast.message,
                requiredGroups = broadcast.requiredGroups,
                sound = broadcast.sound,
                expiresAt = broadcast.expiresAt,
                onExpire = {
                    val target = broadcasts.find { it.id == broadcast.id }
                    if (target != null) {
                        broadcasts[broadcasts.indexOf(target)] = target.copy(enabled = false)
                        save()
                        plugin.logger.info("Broadcast ${broadcast.id} has expired and was disabled.")
                    }
                }
            )
        }

        surveys.filter { it.enabled && (it.expiresAt == null || it.expiresAt > now) }.forEach { survey ->
            startAnnouncementTimer(
                interval = survey.broadcastInterval,
                message = survey.broadcastMessage,
                requiredGroups = survey.requiredGroups,
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
                onTick = { lastBroadcastedSurveyId = survey.id },
                playerFilter = { player ->
                    val responseCount = survey.respondedPlayers.getOrDefault(player.uniqueId, 0)
                    responseCount < survey.maxResponses
                }
            )
        }
    }

    private fun startAnnouncementTimer(
        interval: Long,
        message: String,
        requiredGroups: List<String>,
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

                    if (requiredGroups.isNotEmpty()) {
                        PermsUtils.hasAnyGroup(player.uniqueId, requiredGroups).thenAccept { hasGroup ->
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
