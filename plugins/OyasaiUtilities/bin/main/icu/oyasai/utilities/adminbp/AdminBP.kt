package icu.oyasai.utilities.adminbp

import icu.oyasai.utilities.OyasaiUtilities
import icu.oyasai.utilities.YamlConfig
import java.util.*
import org.bukkit.Bukkit
import org.bukkit.OfflinePlayer
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.player.PlayerJoinEvent
import org.bukkit.event.player.PlayerQuitEvent
import org.bukkit.inventory.ItemStack

object AdminBP : Listener {
  private val fileCache = mutableMapOf<UUID, YamlConfig>()
  private val itemCache = mutableMapOf<UUID, MutableMap<Int, MutableList<ItemStack?>>>()

  const val MAX_PAGE = 9

  @EventHandler
  fun joinPlayer(e: PlayerJoinEvent) {
    loadPlayerCache(e.player)
  }

  @EventHandler
  fun quitPlayer(e: PlayerQuitEvent) {
    removePlayerCache(e.player)
  }

  private fun loadPlayerCache(player: OfflinePlayer) {
    if (!player.isOp) return
    val file = YamlConfig("AdminBP/${player.uniqueId}.yml")
    val itemList = mutableMapOf<Int, MutableList<ItemStack?>>()
    for (page in 1..MAX_PAGE) {
      val list = mutableListOf<ItemStack?>()
      for (i in 0..<54) {
        val item = file.getItemStack("page_${page}.slot_${i}")
        list.add(i, item)
      }
      itemList[page] = list
    }

    fileCache[player.uniqueId] = file
    itemCache[player.uniqueId] = itemList
  }

  private fun removePlayerCache(player: OfflinePlayer) {
    fileCache.remove(player.uniqueId)
    itemCache.remove(player.uniqueId)
  }

  fun getItemList(uuid: UUID): MutableMap<Int, MutableList<ItemStack?>>? {
    return itemCache[uuid]
  }

  fun save(uuid: UUID, newList: MutableMap<Int, MutableList<ItemStack?>>) {
    val file = fileCache[uuid] ?: return
    for (page in 1..MAX_PAGE) {
      for (i in 0..53) {
        file.set("page_${page}.slot_${i}", null)
      }
    }
    newList.forEach { (page, list) ->
      list.forEachIndexed { i, itemStack -> file.set("page_${page}.slot_${i}", itemStack) }
    }
    itemCache[uuid] = newList
    file.save()
  }

  fun onDisable() {
    AdminBPGui.disableFix()

    Bukkit.getServer().onlinePlayers.forEach { player ->
      val list = itemCache[player.uniqueId] ?: return@forEach
      save(player.uniqueId, list)
    }
  }

  fun onEnable() {
    Bukkit.getServer().onlinePlayers.forEach { player -> loadPlayerCache(player) }

    Bukkit.getServer().pluginManager.registerEvents(this, OyasaiUtilities.plugin)
    Bukkit.getServer().pluginManager.registerEvents(AdminBPGui, OyasaiUtilities.plugin)

    Bukkit.getServer().getPluginCommand("adminbp")?.setExecutor(AdminBPCmd)
  }
}
