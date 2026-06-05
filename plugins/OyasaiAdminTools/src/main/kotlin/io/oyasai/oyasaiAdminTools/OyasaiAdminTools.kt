package io.oyasai.oyasaiAdminTools

import io.oyasai.oyasaiAdminTools.commands.*
import io.oyasai.oyasaiAdminTools.bulletin.*
import io.oyasai.oyasaiAdminTools.utils.JsonUtils
import org.bukkit.Bukkit
import org.bukkit.plugin.java.JavaPlugin

class OyasaiAdminTools : JavaPlugin() {
  companion object {
    lateinit var plugin: OyasaiAdminTools
  }

  override fun onEnable() {
    // Plugin startup logic
    plugin = this
    plugin.saveDefaultConfig()

    BulletinManager.load()

    val commandMap = Bukkit.getCommandMap()
    val knownCommands = commandMap.knownCommands
    knownCommands.remove("ban")
    knownCommands.remove("advancedban:ban")

    this.getCommand("syokaku")?.setExecutor(SyokakuCommandExecutor)
    this.getCommand("syokaku")?.tabCompleter = SyokakuCommandExecutor
    this.getCommand("syokakumanager")?.setExecutor(SyokakuManagerCommandExecutor)
    this.getCommand("syokakumanager")?.tabCompleter = SyokakuManagerCommandExecutor
    this.getCommand("playermanager")?.setExecutor(PlayerManagerCommandExecutor)
    this.getCommand("playermanager")?.tabCompleter = PlayerManagerCommandExecutor
    this.getCommand("ban")?.setExecutor(GrieferCommandExecutor)
    this.getCommand("ban")?.tabCompleter = GrieferCommandExecutor
    this.getCommand("kakutyo")?.setExecutor(KakutyoCommandExecutor)
    this.getCommand("kakutyo")?.tabCompleter = KakutyoCommandExecutor

    // Bulletin Commands
    this.getCommand("bl")?.setExecutor(BulletinCommandExecutor)
    this.getCommand("bl")?.tabCompleter = BulletinCommandExecutor
    this.getCommand("anke")?.setExecutor(BulletinCommandExecutor)
    this.getCommand("anke")?.tabCompleter = BulletinCommandExecutor

    Bukkit.getPluginManager().registerEvents(BulletinListener, this)
    Bukkit.getPluginManager().registerEvents(BookInputHandler, this)
  }

  override fun onDisable() {
    // Plugin shutdown logic
    BulletinManager.stopAll()
    BulletinManager.save()
    JsonUtils.writeJsonFile("ranks.json", io.oyasai.oyasaiAdminTools.rank.RankManager.ranks)
  }
}
