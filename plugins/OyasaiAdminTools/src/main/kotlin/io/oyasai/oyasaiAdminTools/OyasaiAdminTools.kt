package io.oyasai.oyasaiAdminTools

import io.oyasai.oyasaiAdminTools.commands.*
import io.oyasai.oyasaiAdminTools.utils.JsonUtils
import org.bukkit.plugin.java.JavaPlugin

class OyasaiAdminTools : JavaPlugin() {
  companion object {
    lateinit var plugin: OyasaiAdminTools
  }

  override fun onEnable() {
    plugin = this
    // Plugin startup logic
    plugin.saveDefaultConfig()

    this.getCommand("syokaku")?.setExecutor(SyokakuCommandExecutor)
    this.getCommand("syokaku")?.tabCompleter = SyokakuCommandExecutor
    this.getCommand("syokakumanager")?.setExecutor(SyokakuManagerCommandExecutor)
    this.getCommand("syokakumanager")?.tabCompleter = SyokakuManagerCommandExecutor
  }

  override fun onDisable() {
    // Plugin shutdown logic
    JsonUtils.writeJsonFile("ranks.json", io.oyasai.oyasaiAdminTools.rank.RankManager.ranks)
  }
}
