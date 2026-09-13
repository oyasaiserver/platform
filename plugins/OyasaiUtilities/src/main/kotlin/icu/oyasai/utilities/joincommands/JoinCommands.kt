package icu.oyasai.utilities.joincommands

import icu.oyasai.utilities.OyasaiUtilities
import java.io.File
import java.nio.file.Files
import org.bukkit.Bukkit
import org.bukkit.World
import org.bukkit.command.CommandSender
import org.bukkit.configuration.ConfigurationSection
import org.bukkit.configuration.file.YamlConfiguration
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.EventPriority
import org.bukkit.event.Listener
import org.bukkit.event.player.PlayerChangedWorldEvent
import org.bukkit.event.player.PlayerCommandPreprocessEvent
import org.bukkit.event.player.PlayerJoinEvent

/**
 * SirBlobman JoinCommands 互換の参加時コマンド実行。
 *
 * 設定: `plugins/OyasaiUtilities/joincommands/config.yml`
 *
 * 初回参加データ: `plugins/OyasaiUtilities/joincommands/playerdata/<uuid>.data.yml`
 *
 * 移行時は `plugins/JoinCommands/` 配下をフォールバック読み込みする。
 */
object JoinCommands : Listener {
  private val plugin
    get() = OyasaiUtilities.plugin

  private var debugMode = false
  private var disablePlayerData = false
  private var serverJoinCommands = emptyList<ServerJoinCommand>()
  private var worldJoinCommands = emptyList<WorldJoinCommand>()

  fun onEnable() {
    reloadConfig()
    plugin.server.pluginManager.registerEvents(this, plugin)
    plugin.server.getPluginCommand("joincommands")?.let { command ->
      command.setExecutor(JoinCommandsCommand)
      command.tabCompleter = JoinCommandsCommand
    }
  }

  fun onDisable() {
    JoinCommandsPlayerData.clearCache()
  }

  fun reloadConfig(sender: CommandSender? = null): Boolean {
    return try {
      val config = loadYaml()
      debugMode = config.getBoolean("debug-mode", false)
      disablePlayerData = config.getBoolean("disable-player-data", false)
      serverJoinCommands = loadServerJoinCommands(config)
      worldJoinCommands = loadWorldJoinCommands(config)
      logIgnoredSections(config)
      plugin.logger.info(
          "[JoinCommands] Loaded ${serverJoinCommands.size} server-join and ${worldJoinCommands.size} world-join command(s)."
      )
      sender?.sendMessage("§aSuccessfully reloaded the JoinCommands configuration.")
      true
    } catch (ex: Exception) {
      plugin.logger.warning("[JoinCommands] Failed to reload config: ${ex.message}")
      sender?.sendMessage("§cFailed to reload the JoinCommands configuration.")
      false
    }
  }

  @EventHandler(priority = EventPriority.MONITOR, ignoreCancelled = true)
  fun onJoin(event: PlayerJoinEvent) {
    val player = event.player
    debug("Detected PlayerJoinEvent for ${player.name}")
    runServerJoinCommands(player)
    JoinCommandsPlayerData.setJoinedServerBefore(player, disablePlayerData)
    val world = player.world
    runWorldJoinCommands(player, world)
    JoinCommandsPlayerData.setJoinedWorldBefore(player, world, disablePlayerData)
  }

  @EventHandler(priority = EventPriority.MONITOR, ignoreCancelled = true)
  fun onChangeWorld(event: PlayerChangedWorldEvent) {
    val player = event.player
    val world = player.world
    debug("Detected PlayerChangedWorldEvent for ${player.name} -> ${world.name}")
    runWorldJoinCommands(player, world)
    JoinCommandsPlayerData.setJoinedWorldBefore(player, world, disablePlayerData)
  }

  private fun runServerJoinCommands(player: Player) {
    for (command in serverJoinCommands) {
      if (!canExecuteServer(command, player)) continue
      Bukkit.getScheduler()
          .runTaskLater(plugin, Runnable { execute(player, command.commandList) }, command.delay)
    }
  }

  private fun runWorldJoinCommands(player: Player, world: World) {
    for (command in worldJoinCommands) {
      if (!canExecuteWorld(command, player, world)) continue
      Bukkit.getScheduler()
          .runTaskLater(
              plugin,
              Runnable { execute(player, command.commandList, world.name) },
              command.delay,
          )
    }
  }

  private fun canExecuteServer(command: ServerJoinCommand, player: Player): Boolean {
    if (command.firstJoinOnly && hasJoinedServerBefore(player)) return false
    return hasRequiredPermission(player, command.permission)
  }

  private fun canExecuteWorld(command: WorldJoinCommand, player: Player, world: World): Boolean {
    if (command.worldList.isEmpty()) return false
    if ("*" !in command.worldList && world.name !in command.worldList) return false
    if (command.firstJoinOnly && hasJoinedWorldBefore(player, world)) return false
    return hasRequiredPermission(player, command.permission)
  }

  private fun hasRequiredPermission(player: Player, permission: String): Boolean =
      permission.isBlank() || player.hasPermission(permission)

  private fun hasJoinedServerBefore(player: Player): Boolean {
    if (disablePlayerData) return false
    return JoinCommandsPlayerData.hasJoinedServerBefore(player)
  }

  private fun hasJoinedWorldBefore(player: Player, world: World): Boolean {
    if (disablePlayerData) return false
    return JoinCommandsPlayerData.hasJoinedWorldBefore(player, world)
  }

  private fun execute(player: Player, commandList: List<String>, worldName: String? = null) {
    if (!player.isOnline) return
    val playerName = player.name
    for (raw in commandList) {
      var command = raw.replace("{player}", playerName)
      if (worldName != null) {
        command = command.replace("{world}", worldName)
      }
      when {
        command.startsWith("[PLAYER]") -> runAsPlayer(player, command.substring(8))
        command.startsWith("[OP]") -> runAsOp(player, command.substring(4))
        command.startsWith("[BPLAYER]") || command.startsWith("[BCONSOLE]") ->
            debug("Skipping proxy command prefix (not implemented): $command")
        else -> runAsConsole(command)
      }
    }
  }

  private fun runAsPlayer(player: Player, command: String) {
    if (command.isEmpty()) return
    val event = PlayerCommandPreprocessEvent(player, "/$command")
    Bukkit.getPluginManager().callEvent(event)
    if (event.isCancelled) return
    val message = event.message
    if (message.isEmpty()) return
    player.performCommand(message.substring(1))
  }

  private fun runAsOp(player: Player, command: String) {
    if (command.isEmpty()) return
    if (player.isOp) {
      runAsPlayer(player, command)
      return
    }
    try {
      player.isOp = true
      runAsPlayer(player, command)
    } finally {
      player.isOp = false
    }
  }

  private fun runAsConsole(command: String) {
    if (command.isEmpty()) return
    Bukkit.dispatchCommand(Bukkit.getConsoleSender(), command)
  }

  private fun loadYaml(): YamlConfiguration {
    val file = configFile()
    if (!file.exists() && !copyLegacyConfig(file)) {
      saveDefaultConfig(file)
    }
    return YamlConfiguration.loadConfiguration(file)
  }

  private fun copyLegacyConfig(target: File): Boolean {
    val legacy = File(plugin.dataFolder.parentFile, "JoinCommands/config.yml")
    if (!legacy.isFile) return false
    target.parentFile.mkdirs()
    Files.copy(legacy.toPath(), target.toPath())
    plugin.logger.info("[JoinCommands] Copied config from JoinCommands/config.yml")
    return true
  }

  private fun saveDefaultConfig(target: File) {
    target.parentFile.mkdirs()
    plugin.saveResource("joincommands/config.yml", false)
  }

  private fun configFile(): File = File(plugin.dataFolder, "joincommands/config.yml")

  private fun loadServerJoinCommands(config: YamlConfiguration): List<ServerJoinCommand> {
    val section = config.getConfigurationSection("server-join-commands")
    if (section == null) {
      plugin.logger.warning("[JoinCommands] Missing 'server-join-commands' section.")
      return emptyList()
    }
    return section.getKeys(false).mapNotNull { id -> loadServerJoinCommand(section, id) }
  }

  private fun loadWorldJoinCommands(config: YamlConfiguration): List<WorldJoinCommand> {
    val section = config.getConfigurationSection("world-join-commands")
    if (section == null) {
      plugin.logger.warning("[JoinCommands] Missing 'world-join-commands' section.")
      return emptyList()
    }
    return section.getKeys(false).mapNotNull { id -> loadWorldJoinCommand(section, id) }
  }

  private fun loadServerJoinCommand(parent: ConfigurationSection, id: String): ServerJoinCommand? {
    val section = parent.getConfigurationSection(id) ?: return null
    val commandList = section.getStringList("command-list")
    if (commandList.isEmpty()) {
      plugin.logger.warning(
          "[JoinCommands] Skipping server join command '$id': empty command-list."
      )
      return null
    }
    val delay = section.getLong("delay")
    if (delay < 0L) {
      plugin.logger.warning("[JoinCommands] Skipping server join command '$id': negative delay.")
      return null
    }
    return ServerJoinCommand(
        id = id,
        commandList = commandList,
        permission = section.getString("permission").orEmpty(),
        firstJoinOnly = section.getBoolean("first-join-only"),
        delay = delay,
    )
  }

  private fun loadWorldJoinCommand(parent: ConfigurationSection, id: String): WorldJoinCommand? {
    val section = parent.getConfigurationSection(id) ?: return null
    val commandList = section.getStringList("command-list")
    val worldList = section.getStringList("world-list")
    if (commandList.isEmpty() || worldList.isEmpty()) {
      plugin.logger.warning(
          "[JoinCommands] Skipping world join command '$id': empty command-list or world-list."
      )
      return null
    }
    val delay = section.getLong("delay")
    if (delay < 0L) {
      plugin.logger.warning("[JoinCommands] Skipping world join command '$id': negative delay.")
      return null
    }
    return WorldJoinCommand(
        id = id,
        worldList = worldList,
        commandList = commandList,
        permission = section.getString("permission").orEmpty(),
        firstJoinOnly = section.getBoolean("first-join-only"),
        delay = delay,
    )
  }

  private fun logIgnoredSections(config: YamlConfiguration) {
    if (config.getBoolean("bungeecord-hook", false)) {
      plugin.logger.info(
          "[JoinCommands] bungeecord-hook is set but proxy execution is not implemented."
      )
    }
    if (config.getBoolean("placeholderapi-hook", false)) {
      plugin.logger.info(
          "[JoinCommands] placeholderapi-hook is set; only {player}/{world} replacements are applied."
      )
    }
    val proxy = config.getConfigurationSection("proxy-join-commands")
    if (proxy != null && proxy.getKeys(false).isNotEmpty()) {
      plugin.logger.info("[JoinCommands] proxy-join-commands is present but not executed.")
    }
  }

  private fun debug(message: String) {
    if (!debugMode) return
    plugin.logger.info("[JoinCommands][Debug] $message")
  }

  private data class ServerJoinCommand(
      val id: String,
      val commandList: List<String>,
      val permission: String,
      val firstJoinOnly: Boolean,
      val delay: Long,
  )

  private data class WorldJoinCommand(
      val id: String,
      val worldList: List<String>,
      val commandList: List<String>,
      val permission: String,
      val firstJoinOnly: Boolean,
      val delay: Long,
  )
}
