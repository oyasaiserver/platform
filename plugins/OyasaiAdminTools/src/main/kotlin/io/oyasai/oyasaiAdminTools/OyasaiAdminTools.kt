package io.oyasai.oyasaiAdminTools

import io.oyasai.oyasaiAdminTools.commands.GrieferCommandExecutor
import io.oyasai.oyasaiAdminTools.commands.KakutyoCommandExecutor
import io.oyasai.oyasaiAdminTools.commands.PlayerManagerCommandExecutor
import io.oyasai.oyasaiAdminTools.commands.SyokakuCommandExecutor
import io.oyasai.oyasaiAdminTools.commands.SyokakuManagerCommandExecutor
import io.oyasai.oyasaiAdminTools.utils.JsonUtils
import org.bukkit.Bukkit
import org.bukkit.plugin.java.JavaPlugin

class OyasaiAdminTools : JavaPlugin() {
  companion object {
    lateinit var plugin: OyasaiAdminTools
  }

  override fun onEnable() {
    plugin = this
    // Plugin startup logic
    plugin.saveDefaultConfig()

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
  }

  override fun onDisable() {
    // Plugin shutdown logic
    JsonUtils.writeJsonFile("ranks.json", io.oyasai.oyasaiAdminTools.rank.RankManager.ranks)
  }
}
