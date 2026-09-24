package icu.oyasai.utilities.joincommands

import icu.oyasai.utilities.OyasaiUtilities
import java.io.File
import java.util.logging.Level
import org.bukkit.Bukkit
import org.bukkit.configuration.ConfigurationSection
import org.bukkit.configuration.file.YamlConfiguration
import org.bukkit.event.EventHandler
import org.bukkit.event.EventPriority
import org.bukkit.event.Listener
import org.bukkit.event.player.PlayerCommandPreprocessEvent
import org.bukkit.event.player.PlayerJoinEvent
import org.bukkit.permissions.Permission
import org.bukkit.permissions.PermissionDefault

internal data class JoinCommandDefinition(
    val id: String,
    val commands: List<String>,
    val permission: Permission?,
    val firstJoinOnly: Boolean,
    val delay: Long,
)

internal data class JoinCommand(val playerCommand: Boolean, val command: String)

internal fun parseJoinCommands(
    section: ConfigurationSection?,
    warn: (String) -> Unit,
): List<JoinCommandDefinition> {
  if (section == null) return emptyList()
  return buildList {
    for (id in section.getKeys(false)) {
      val entry = section.getConfigurationSection(id)
      if (entry == null) {
        warn("JoinCommands: '$id' skipped (empty command-list)")
        continue
      }
      val commands = entry.getStringList("command-list")
      val delay = entry.getLong("delay", 0L)
      if (commands.isEmpty() || delay < 0L) {
        val reason = if (commands.isEmpty()) "empty command-list" else "negative delay"
        warn("JoinCommands: '$id' skipped ($reason)")
        continue
      }
      val permission =
          entry
              .getString("permission")
              ?.takeIf { it.isNotBlank() }
              ?.let { Permission(it, PermissionDefault.FALSE) }
      add(
          JoinCommandDefinition(
              id,
              commands,
              permission,
              entry.getBoolean("first-join-only"),
              delay,
          )
      )
    }
  }
}

internal fun prepareJoinCommand(raw: String, playerName: String): JoinCommand? {
  val playerCommand = raw.startsWith("[PLAYER]")
  val command =
      (if (playerCommand) raw.removePrefix("[PLAYER]") else raw)
          .trim()
          .replace("{player}", playerName)
  return command.takeIf { it.isNotEmpty() }?.let { JoinCommand(playerCommand, it) }
}

object JoinCommands : Listener {
  private val plugin
    get() = OyasaiUtilities.plugin

  private var definitions = emptyList<JoinCommandDefinition>()

  fun onEnable() {
    val file = File(plugin.dataFolder, "JoinCommands/config.yml")
    if (!file.isFile) {
      plugin.logger.info("JoinCommands/config.yml not found; join commands disabled")
      return
    }
    definitions =
        parseJoinCommands(
            YamlConfiguration.loadConfiguration(file)
                .getConfigurationSection("server-join-commands"),
            plugin.logger::warning,
        )
    plugin.logger.info("JoinCommands: ${definitions.size} definitions loaded")
    plugin.server.pluginManager.registerEvents(this, plugin)
  }

  @EventHandler(priority = EventPriority.MONITOR)
  fun onJoin(event: PlayerJoinEvent) {
    val player = event.player
    for (definition in definitions) {
      if (definition.firstJoinOnly && player.hasPlayedBefore()) continue
      if (definition.permission != null && !player.hasPermission(definition.permission)) continue
      Bukkit.getScheduler()
          .runTaskLater(
              plugin,
              Runnable {
                if (!player.isOnline) return@Runnable
                for (raw in definition.commands) {
                  val command = prepareJoinCommand(raw, player.name) ?: continue
                  try {
                    if (command.playerCommand) {
                      val preprocess = PlayerCommandPreprocessEvent(player, "/${command.command}")
                      Bukkit.getPluginManager().callEvent(preprocess)
                      if (!preprocess.isCancelled) {
                        val message = preprocess.message.removePrefix("/")
                        if (message.isNotEmpty()) player.performCommand(message)
                      }
                    } else {
                      Bukkit.dispatchCommand(Bukkit.getConsoleSender(), command.command)
                    }
                  } catch (ex: Exception) {
                    plugin.logger.log(
                        Level.WARNING,
                        "JoinCommands: command failed in '${definition.id}' for ${player.name}",
                        ex,
                    )
                  }
                }
              },
              definition.delay,
          )
    }
  }
}
