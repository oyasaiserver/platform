package com.baakun.dynamicprofile

import com.baakun.dynamicprofile.util.Tools
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
  private var frameIndex = 0 // 0: 特別枠
  private var specialFrameInterval = 3
  val EMPTY = Integer.MIN_VALUE

  private val specialCache = mutableSetOf<java.util.UUID>()
  val normalCache = mutableSetOf<java.util.UUID>()
  private val specialBuildingCache = mutableSetOf<Int>()
  val normalBuildingCache = mutableSetOf<Int>()

  fun startAndReturnTask(intervalTicks: Long): BukkitRunnable {
    // configからspecialFrameIntervalを取得
    specialFrameInterval = plugin.config.getInt("specialFrameInterval", 3)
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

    val (targetPlayers, cache) = //targetPlayers: おススメ設定済み　かつ　枠に合致するプレイヤーのリスト
      when (frameIndex % specialFrameInterval) {
        0 -> { // 特別枠
          val filtered =
            onlinePlayers.filter { player ->
              (perm?.playerInGroup(player, "spdonator") == true ||
                perm?.playerInGroup(player, "donator") == true) &&
                getStats(player.uniqueId).recommends.values.any { it != EMPTY }
            }
          filtered to specialCache
        }
        else -> {
          // 通常枠
          val filtered =
            onlinePlayers.filter { player ->
              getStats(player.uniqueId).recommends.values.any { it != EMPTY }
            }
          filtered to normalCache
        }
      }
    frameIndex = (frameIndex + 1) % specialFrameInterval
    if (targetPlayers.isEmpty()) return
    val mode: RecommendMode =
      if (Tools.plugin.config.getInt("RecommendBroadcastMode", 0) == 0) {
        RecommendMode.BUILDING_FIRST
      } else {
        RecommendMode.PLAYER_FIRST
      }
    when (mode) {
      RecommendMode.PLAYER_FIRST -> {
        // プレイヤーから選ぶ
        val uncachedPlayers = targetPlayers.filter { it.uniqueId !in cache }
        val player =
          when {
            uncachedPlayers.isNotEmpty() -> uncachedPlayers.random()
            else -> {
              cache.clear()
              val retryUncached = targetPlayers.filter { it.uniqueId !in cache }
              if (retryUncached.isEmpty()) return
              retryUncached.random()
            }
          }
        cache.add(player.uniqueId)
        val stats = getStats(player.uniqueId)
        val recommendIds = stats.recommends.values.filter { it != EMPTY }
        if (recommendIds.isEmpty()) return
        val selected = recommendIds.random()
        sendRecommendMessage(player.name, selected)
      }
      RecommendMode.BUILDING_FIRST -> {
        // 看板を直接選ぶ
        val allRecommends =
          targetPlayers.flatMap { player ->
            getStats(player.uniqueId)
              .recommends
              .values
              .filter { it != EMPTY }
              .map { id -> player to id }
          }
        if (allRecommends.isEmpty()) return
        val buildingCache =
          if (cache === specialCache) specialBuildingCache else normalBuildingCache
        val uncached = allRecommends.filter { (_, id) -> id !in buildingCache }
        val (player, selected) =
          when {
            uncached.isNotEmpty() -> uncached.random()
            else -> {
              buildingCache.clear()
              val retryUncached = allRecommends.filter { (_, id) -> id !in buildingCache }
              if (retryUncached.isEmpty()) return
              retryUncached.random()
            }
          }
        buildingCache.add(selected)
        sendRecommendMessage(player.name, selected)
      }
      RecommendMode.HYBRID -> {
        // プレイヤーも建築も被らないように選ぶ
        val uncachedPlayers = targetPlayers.filter { it.uniqueId !in cache }
        val player = when {
          uncachedPlayers.isNotEmpty() -> uncachedPlayers.random()
          else -> {
            cache.clear()
            val retryUncached = targetPlayers.filter { it.uniqueId !in cache }
            if (retryUncached.isEmpty()) return
            retryUncached.random()
          }
        }
        val buildingCache = if (cache === specialCache) specialBuildingCache else normalBuildingCache
        val stats = getStats(player.uniqueId)
        val recommendIds = stats.recommends.values.filter { it != EMPTY }
        if (recommendIds.isEmpty()) return
        val uncachedBuildings = recommendIds.filter { it !in buildingCache }
        val selected = when {
          uncachedBuildings.isNotEmpty() -> uncachedBuildings.random()
          else -> {
            buildingCache.clear()
            val retryUncached = recommendIds.filter { it !in buildingCache }
            if (retryUncached.isEmpty()) return
            retryUncached.random()
          }
        }
        cache.add(player.uniqueId)
        buildingCache.add(selected)
        sendRecommendMessage(player.name, selected)
      }
    }
  }

  private fun sendRecommendMessage(playerName: String, selected: Int) {
    val message =
      Component.text()
        .appendNewline()
        .append(Component.text("【おすすめ建築】").color(NamedTextColor.LIGHT_PURPLE))
        .append(Component.text(" ${playerName} さんの「"))
        .append(Component.text("${Data.getSLData(selected)?.title}").color(NamedTextColor.GREEN))
        .append(Component.text("」 ").color(NamedTextColor.WHITE))
        .appendNewline()
        .append(
          Component.text("/sltp ${selected} ")
            .color(NamedTextColor.WHITE)
            .decorate(TextDecoration.BOLD)
        )
        .append(Component.text(" §b[ここをクリックでテレポート]").color(NamedTextColor.AQUA))
        .clickEvent(ClickEvent.runCommand("/sltp $selected"))
        .hoverEvent(HoverEvent.showText(Component.text("クリックしてテレポート！")))
        .appendNewline()
        .build()
    Bukkit.broadcast(message)
    Bukkit.getServer().onlinePlayers.forEach {
      if (getStats(it.uniqueId).recommends.values.all { v -> v == EMPTY })
        it.sendMessage(
          Component.text("おすすめ建築が未登録です！ /dp から設定できます")
            .color(NamedTextColor.YELLOW)
            .hoverEvent(HoverEvent.showText(Component.text("/dp コマンドでおすすめ建築を登録できます！")))
        )
      if (getStats(it.uniqueId).notice)
        it.playSound(it.location, org.bukkit.Sound.ENTITY_EXPERIENCE_ORB_PICKUP, 0.2f, 1.5f)
    }
  }
}
