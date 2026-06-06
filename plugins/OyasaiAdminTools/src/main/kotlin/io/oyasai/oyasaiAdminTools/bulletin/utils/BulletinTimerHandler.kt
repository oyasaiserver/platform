package io.oyasai.oyasaiAdminTools.bulletin.utils

import io.oyasai.oyasaiAdminTools.OyasaiAdminTools.Companion.plugin
import io.oyasai.oyasaiAdminTools.utils.PermsUtils
import net.kyori.adventure.text.minimessage.MiniMessage
import org.bukkit.Bukkit
import org.bukkit.entity.Player
import org.bukkit.scheduler.BukkitTask

object BulletinTimerHandler {
    private val miniMessage = MiniMessage.miniMessage()

    fun startTimer(
        interval: Long,
        message: String,
        targetGroups: List<String>,
        sound: String? = null,
        expiresAt: Long? = null,
        onExpire: (() -> Unit)? = null,
        onTick: (() -> Unit)? = null,
        playerFilter: ((Player) -> Boolean)? = null
    ): BukkitTask {
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

        val task = Bukkit.getScheduler().runTaskTimer(plugin, taskWrapper, interval * 20L, interval * 20L)
        taskWrapper.task = task
        return task
    }
}
