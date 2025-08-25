package com.baakun.dynamicprofile

import com.baakun.dynamicprofile.util.Tools.getStats
import com.github.srain3.sociallikes.datas.Data
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.event.ClickEvent
import net.kyori.adventure.text.event.HoverEvent
import net.kyori.adventure.text.format.NamedTextColor
import net.kyori.adventure.text.format.TextDecoration
import org.bukkit.Bukkit
import org.bukkit.plugin.java.JavaPlugin
import org.bukkit.scheduler.BukkitRunnable

class RecommendBroadcaster(private val plugin: JavaPlugin) {
  private var frameIndex = 0 // 0,1:普通枠 2:特別枠
  val EMPTY = Integer.MIN_VALUE

  fun start(intervalTicks: Long) {
    object : BukkitRunnable() {
        override fun run() {
          broadcastRandomRecommend()
        }
      }
      .runTaskTimer(plugin, intervalTicks, intervalTicks)
  }

  fun startAndReturnTask(intervalTicks: Long): BukkitRunnable {
    val task =
      object : BukkitRunnable() {
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

    val perm =
      plugin.server.servicesManager
        .getRegistration(net.milkbowl.vault.permission.Permission::class.java)
        ?.provider

    val targetPlayers =
      when (frameIndex % 3) {
        2 -> {
          var filtered =
            onlinePlayers.filter { player ->
              (perm?.playerInGroup(player, "spdonator") == true ||
                perm?.playerInGroup(player, "donator") == true) &&
                getStats(player.uniqueId).recommends.isNotEmpty()
            }
          if (filtered.isEmpty()) filtered = onlinePlayers
          filtered
        }

        else -> onlinePlayers
      }
    frameIndex = (frameIndex + 1) % 3
    if (targetPlayers.isEmpty()) return

    val player = targetPlayers.filter { getStats(it.uniqueId).recommends.isNotEmpty() }.random()
    val stats = getStats(player.uniqueId)
    val recommendIds = stats.recommends.values.filter { it != EMPTY }
    if (recommendIds.isEmpty()) return
    val selected = recommendIds.random()

    val message =
      Component.text()
        .appendNewline()
        .append(Component.text("【おすすめ建築】").color(NamedTextColor.LIGHT_PURPLE))
        .append(Component.text(" ${player.name} さんの「"))
        .append(Component.text("${Data.getSLData(selected)?.title}").color(NamedTextColor.GREEN))
        .append(Component.text("」 ").color(NamedTextColor.WHITE))
        .append(
          Component.text("/sltp ${selected}")
            .color(NamedTextColor.WHITE)
            .decorate(TextDecoration.BOLD)
        )
        .appendNewline()
        .append(Component.text(" §b[ここをクリックでテレポート]").color(NamedTextColor.AQUA))
        .clickEvent(ClickEvent.runCommand("/sltp $selected"))
        .hoverEvent(HoverEvent.showText(Component.text("クリックしてテレポート！")))
        .appendNewline()
        .build()
    Bukkit.getServer().onlinePlayers.forEach { it.sendMessage(message) }
    Bukkit.getServer().onlinePlayers.forEach {
      if (getStats(it.uniqueId).notice)
        it.playSound(it.location, org.bukkit.Sound.ENTITY_EXPERIENCE_ORB_PICKUP, 0.2f, 1.5f)
    }
  }
}
