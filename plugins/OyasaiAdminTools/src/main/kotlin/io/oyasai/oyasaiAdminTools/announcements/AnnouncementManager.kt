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
        broadcasts.filter { it.enabled }.forEach { broadcast ->
            startAnnouncementTimer(
                interval = broadcast.interval,
                message = broadcast.message,
                requiredGroups = broadcast.requiredGroups
            )
        }

        surveys.filter { it.enabled }.forEach { survey ->
            startAnnouncementTimer(
                interval = survey.broadcastInterval,
                message = survey.broadcastMessage,
                requiredGroups = survey.requiredGroups,
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
        onTick: (() -> Unit)? = null,
        playerFilter: ((org.bukkit.entity.Player) -> Boolean)? = null
    ) {
        val task = Bukkit.getScheduler().runTaskTimer(plugin, Runnable {
            onTick?.invoke()
            Bukkit.getOnlinePlayers().forEach { player ->
                if (playerFilter != null && !playerFilter(player)) return@forEach

                val sendMsg = {
                    val msg = message.replace("%player%", player.name)
                    player.sendMessage(miniMessage.deserialize(msg))
                }

                if (requiredGroups.isNotEmpty()) {
                    PermsUtils.hasAnyGroup(player.uniqueId, requiredGroups).thenAccept { hasGroup ->
                        if (hasGroup) Bukkit.getScheduler().runTask(plugin, Runnable { sendMsg() })
                    }
                } else {
                    sendMsg()
                }
            }
        }, interval * 20L, interval * 20L)
        tasks.add(task)
    }

    fun stopAll() {
        tasks.forEach { it.cancel() }
        tasks.clear()
    }

    fun reload() {
        load()
    }
}
