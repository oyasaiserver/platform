package com.baakun.dynamicprofile

import com.baakun.dynamicprofile.Tools.getStats
import com.github.srain3.sociallikes.datas.Data
import com.github.srain3.sociallikes.datas.SLData
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.event.ClickEvent
import net.kyori.adventure.text.event.HoverEvent
import net.kyori.adventure.text.format.NamedTextColor
import net.kyori.adventure.text.format.Style
import net.kyori.adventure.text.format.TextDecoration
import org.bukkit.Bukkit
import org.bukkit.plugin.java.JavaPlugin
import org.bukkit.scheduler.BukkitRunnable
import java.util.UUID

class RecommendBroadcaster(private val plugin: JavaPlugin) {
    fun start(intervalTicks: Long) {
        object : BukkitRunnable() {
            override fun run() {
                broadcastRandomRecommend()
            }
        }.runTaskTimer(plugin, intervalTicks, intervalTicks)
    }

    fun startAndReturnTask(intervalTicks: Long): BukkitRunnable {
        val task = object : BukkitRunnable() {
            override fun run() {
                broadcastRandomRecommend()
            }
        }
        task.runTaskTimer(plugin, intervalTicks, intervalTicks)
        return task
    }

    private fun broadcastRandomRecommend() {
        val onlinePlayers = Bukkit.getOnlinePlayers().toList()
        if (onlinePlayers.isEmpty()) return
        val weightedList = mutableListOf<org.bukkit.entity.Player>()
        for (player in onlinePlayers) {
            val perm = plugin.server.servicesManager.getRegistration(net.milkbowl.vault.permission.Permission::class.java)?.provider

            val isSPVip = perm?.playerInGroup(player, "spdonator") == true
            val isVip = perm?.playerInGroup(player, "donator") == true
            val weight = when {
                    isSPVip -> 3
                    isVip -> 2
                    else -> 1
                }
            repeat(weight) { weightedList.add(player) }
        }
        if (weightedList.isEmpty()) return
        val player = weightedList.random()
        val stats = getStats(player.uniqueId)
        val recommendIds = stats.recommends.values.filter { it > 0 }
        if (recommendIds.isEmpty()) return
        val selected = recommendIds.random()

        val message = Component.text()
            .appendNewline()
            .append(Component.text("【おすすめ建築】").color(NamedTextColor.LIGHT_PURPLE))
            .append(Component.text(" ${player.name} さんの「"))
                .append(Component.text("${Data.getSLData(selected)?.title}").color(NamedTextColor.GREEN))
            .append(Component.text("」 ").color(NamedTextColor.WHITE))
            .append(Component.text("/sltp ${selected}").color(NamedTextColor.WHITE).decorate(TextDecoration.BOLD))
            .appendNewline()
            .append(
                Component.text(" §b[ここをクリックでテレポート]")
                    .color(NamedTextColor.AQUA)

            )
            .clickEvent(ClickEvent.runCommand("/sltp $selected"))
            .hoverEvent(
                HoverEvent.showText(
                    Component.text("クリックしてテレポート！")
                )
            )
            .appendNewline()
            .build()
        Bukkit.getServer().onlinePlayers.forEach { it.sendMessage(message) }
        Bukkit.getServer().onlinePlayers.forEach {
            if(getStats(it.uniqueId).notice)
                it.playSound(it.location, org.bukkit.Sound.ENTITY_EXPERIENCE_ORB_PICKUP, 0.2f, 1.5f)

        }
    }
}
