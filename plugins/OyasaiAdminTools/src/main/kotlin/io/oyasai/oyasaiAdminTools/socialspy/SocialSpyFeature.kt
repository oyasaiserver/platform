package io.oyasai.oyasaiAdminTools.socialspy

import io.oyasai.oyasaiAdminTools.OyasaiAdminTools
import io.oyasai.oyasaiAdminTools.playerhistory.readUserdata
import io.oyasai.oyasaiAdminTools.staff.*
import java.io.File
import java.util.UUID
import org.bukkit.Bukkit
import org.bukkit.command.CommandSender
import org.bukkit.entity.Player
import org.bukkit.event.*
import org.bukkit.event.player.*
import org.bukkit.event.server.PluginEnableEvent

class SocialSpyFeature(plugin: OyasaiAdminTools) : ToggleFeature(plugin, "socialspy") {
  private lateinit var store: ToggleStore
  private val states = mutableMapOf<UUID, Boolean>()
  private val compatibility = EssentialsSpyCompatibility(plugin)

  private fun load(p: Player) {
    states[p.uniqueId] =
        store.load(p.uniqueId) {
          readUserdata(File(plugin.dataFolder.parentFile, "Essentials/userdata"), p.uniqueId)
              .getBoolean("socialspy")
        }
    if (!p.hasPermission("essentials.socialspy") && states[p.uniqueId] == true) {
      store.save(p.uniqueId, false)
      states[p.uniqueId] = false
    }
    compatibility.suppress(p)
  }

  override fun start() {
    store = ToggleStore(plugin.db, "socialspy")
    Bukkit.getOnlinePlayers().forEach(::load)
  }

  override fun toggle(sender: CommandSender, target: Player, enabled: Boolean?) {
    val value =
        enabled
            ?: !(states[target.uniqueId]
                ?: store.load(target.uniqueId) {
                  readUserdata(
                          File(plugin.dataFolder.parentFile, "Essentials/userdata"),
                          target.uniqueId,
                      )
                      .getBoolean("socialspy")
                })
    store.save(target.uniqueId, value)
    states[target.uniqueId] = value
    compatibility.suppress(target)
    target.sendMessage("§6socialspy: ${if (value) "ON" else "OFF"}")
    if (sender != target)
        sender.sendMessage("§6${target.name} socialspy: ${if (value) "ON" else "OFF"}")
  }

  @EventHandler(priority = EventPriority.HIGHEST, ignoreCancelled = true)
  fun command(e: PlayerCommandPreprocessEvent) {
    // Suppress only the foreign runtime flag, before Essentials' MONITOR handler. No disk writes.
    Bukkit.getOnlinePlayers().forEach { compatibility.suppress(it) }
    if (!SocialSpyRules.matches(e.message, plugin.config.getStringList("staff.socialspy-commands")))
        return
    if (e.player.hasPermission("essentials.chat.spy.exempt")) return
    val hidden =
        e.player.getMetadata("vanished").any { it.owningPlugin == plugin && it.asBoolean() }
    val name =
        if (hidden && plugin.config.getBoolean("staff.hide-displayname-in-vanish", true))
            e.player.name
        else e.player.displayName
    Bukkit.getOnlinePlayers()
        .filter {
          it != e.player && states[it.uniqueId] == true && it.hasPermission("essentials.socialspy")
        }
        .forEach { it.sendMessage("§7[SocialSpy] $name: ${e.message}") }
  }

  @EventHandler(priority = EventPriority.LOWEST)
  fun join(e: PlayerJoinEvent) {
    try {
      load(e.player)
    } catch (failure: Exception) {
      plugin.logger.log(java.util.logging.Level.SEVERE, "SocialSpy restore failed", failure)
    }
  }

  @EventHandler
  fun quit(e: PlayerQuitEvent) {
    states.remove(e.player.uniqueId)
    compatibility.restore(e.player.uniqueId)
  }

  @EventHandler
  fun essentialsEnabled(e: PluginEnableEvent) {
    if (e.plugin.name == "Essentials") Bukkit.getOnlinePlayers().forEach(::load)
  }

  override fun stop() {
    states.clear()
    compatibility.restore()
  }
}
