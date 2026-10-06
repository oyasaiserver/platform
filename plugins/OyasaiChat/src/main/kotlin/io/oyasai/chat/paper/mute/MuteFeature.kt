package io.oyasai.chat.paper.mute

import io.oyasai.chat.paper.OyasaiChatPlugin
import io.oyasai.chat.paper.storage.ChatDatabase
import java.io.File
import java.util.UUID
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.command.PluginCommand
import org.bukkit.command.TabCompleter
import org.bukkit.configuration.file.YamlConfiguration
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.EventPriority
import org.bukkit.event.HandlerList
import org.bukkit.event.Listener
import org.bukkit.event.player.PlayerCommandPreprocessEvent
import org.bukkit.event.player.PlayerJoinEvent
import org.bukkit.event.player.PlayerQuitEvent
import org.bukkit.event.server.PluginEnableEvent
import org.bukkit.event.server.ServerLoadEvent
import org.bukkit.scheduler.BukkitTask

/** Paper-local ownership; no Utilities or proxy state dependency. */
class MuteFeature(private val plugin: OyasaiChatPlugin) :
    Listener, CommandExecutor, TabCompleter, AutoCloseable {
  private val database = ChatDatabase(File(plugin.dataFolder, "oyasaichat.db"))
  private val store: MuteStore
  private val displaced = mutableMapOf<String, Command?>()
  private var task: BukkitTask? = null
  private var essentialsEventsRegistered = false
  private var blockedCommands = setOf("f", "kittycannon")
  private var maxMuteSeconds = -1L

  init {
    try {
      store = MuteStore(database, File(plugin.dataFolder.parentFile, "Essentials/userdata"))
      loadSettings()
    } catch (failure: Throwable) {
      database.close()
      throw failure
    }
  }

  fun enable() {
    val command = checkNotNull(plugin.getCommand("mute"))
    command.setExecutor(this)
    command.tabCompleter = this
    plugin.server.pluginManager.registerEvents(this, plugin)
    registerEssentialsEvents()
    claim()
    plugin.server.onlinePlayers.forEach { initialize(it) }
    task =
        plugin.server.scheduler.runTaskTimer(
            plugin,
            Runnable {
              plugin.server.onlinePlayers.forEach { player ->
                runCatching { state(player.uniqueId) }.onFailure { report(it) }
              }
            },
            20L,
            20L,
        )
  }

  private fun loadSettings() {
    blockedCommands = plugin.config.getStringList("mute.commands").toSet()
    maxMuteSeconds = plugin.config.getLong("mute.max-mute-time", -1)
    val file = File(plugin.dataFolder.parentFile, "Essentials/config.yml")
    if (file.exists()) {
      val yaml = YamlConfiguration().apply { load(file) }
      if (yaml.contains("mute-commands"))
          blockedCommands = yaml.getStringList("mute-commands").toSet()
      maxMuteSeconds = yaml.getLong("max-mute-time", maxMuteSeconds)
    }
    blockedCommands = blockedCommands.map { it.lowercase().removePrefix("/") }.toSet()
  }

  private fun state(uuid: UUID): MuteState {
    var state = store.get(uuid)
    if (state.essentialsCleanupPending && clearEssentials(uuid)) {
      state = state.copy(essentialsCleanupPending = false)
      store.put(uuid, state)
    }
    if (state.expired(System.currentTimeMillis())) {
      state = MuteState(essentialsCleanupPending = state.essentialsCleanupPending)
      store.put(uuid, state)
      plugin.server.getPlayer(uuid)?.sendMessage("mute の期限が切れました。")
    }
    return state
  }

  /** Reflection keeps Essentials entirely optional, including the test/standalone runtime. */
  private fun clearEssentials(uuid: UUID): Boolean {
    val essentials =
        plugin.server.pluginManager.getPlugin("Essentials")?.takeIf { it.isEnabled } ?: return false
    val user =
        essentials.javaClass.getMethod("getUser", UUID::class.java).invoke(essentials, uuid)
            ?: error("Essentials user not found: $uuid")
    user.javaClass.getMethod("setMuted", Boolean::class.javaPrimitiveType).invoke(user, false)
    user.javaClass.getMethod("setMuteTimeout", Long::class.javaPrimitiveType).invoke(user, 0L)
    user.javaClass.getMethod("setMuteReason", String::class.java).invoke(user, null)
    plugin.logger.info("Cleared migrated Essentials mute for $uuid after SQLite commit.")
    return true
  }

  private fun initialize(player: Player) {
    runCatching { state(player.uniqueId) }.onFailure { report(it) }
  }

  fun rejection(player: Player): String? =
      try {
        val state = state(player.uniqueId)
        if (!state.active(System.currentTimeMillis())) null
        else
            "mute 中は発言できません。" +
                (if (state.expiresAt > 0)
                    " 残り ${((state.expiresAt - System.currentTimeMillis()) / 1000).coerceAtLeast(0)} 秒。"
                else "") +
                (state.reason?.let { " 理由: $it" } ?: "")
      } catch (failure: Throwable) {
        report(failure)
        "mute 状態を確認できません。運営に連絡してください。"
      }

  @EventHandler(priority = EventPriority.LOWEST)
  fun onJoin(event: PlayerJoinEvent) {
    initialize(event.player)
  }

  @EventHandler(priority = EventPriority.MONITOR)
  fun onQuit(event: PlayerQuitEvent) {
    store.unload(event.player.uniqueId)
  }

  @EventHandler(priority = EventPriority.HIGHEST, ignoreCancelled = true)
  fun onCommand(event: PlayerCommandPreprocessEvent) {
    if (!MuteRules.blocksCommand(event.message, blockedCommands)) return
    rejection(event.player)?.let {
      event.isCancelled = true
      event.player.sendMessage(it)
    }
  }

  @EventHandler
  fun onPluginEnable(event: PluginEnableEvent) {
    if (event.plugin.name == "Essentials") {
      runCatching {
            registerEssentialsEvents()
            loadSettings()
            store.loadedIds().forEach { state(it) }
          }
          .onFailure { report(it) }
    }
    claim()
  }

  @EventHandler(priority = EventPriority.MONITOR)
  fun onServerLoad(event: ServerLoadEvent) {
    claim()
  }

  @Suppress("UNCHECKED_CAST")
  private fun registerEssentialsEvents() {
    if (essentialsEventsRegistered) return
    val essentials =
        plugin.server.pluginManager.getPlugin("Essentials")?.takeIf { it.isEnabled } ?: return
    val eventClass =
        Class.forName(
            "net.ess3.api.events.MuteStatusChangeEvent",
            true,
            essentials.javaClass.classLoader,
        ) as Class<out org.bukkit.event.Event>
    plugin.server.pluginManager.registerEvent(
        eventClass,
        this,
        EventPriority.HIGHEST,
        { _, event ->
          (event as org.bukkit.event.Cancellable).isCancelled = true
          plugin.logger.info("Essentials mute change cancelled; use OyasaiChat /mute.")
        },
        plugin,
        true,
    )
    essentialsEventsRegistered = true
  }

  private fun claim() {
    val command = plugin.getCommand("mute") ?: return
    val known = plugin.server.commandMap.knownCommands
    val previous = known["mute"]
    if (previous === command) return
    if (previous != null && (previous !is PluginCommand || previous.plugin.name != "Essentials")) {
      plugin.logger.warning("Cannot claim /mute owned by another plugin: ${previous.name}")
      return
    }
    if (!displaced.containsKey("mute")) displaced["mute"] = previous
    known["mute"] = command
    plugin.server.onlinePlayers.forEach { it.updateCommands() }
  }

  override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<out String>,
  ): Boolean {
    if (!sender.hasPermission("essentials.mute")) {
      sender.sendMessage("権限がありません。")
      return true
    }
    if (args.isEmpty()) {
      sender.sendMessage("/mute <player> [期間] [理由]")
      return true
    }
    runCatching {
          val input = args[0]
          val online =
              plugin.server.getPlayerExact(input)?.takeIf { sender !is Player || sender.canSee(it) }
                  ?: plugin.server.onlinePlayers.firstOrNull {
                    it.name.startsWith(input, true) && (sender !is Player || sender.canSee(it))
                  }
          val uuid = runCatching { UUID.fromString(input) }.getOrNull()
          val target =
              online
                  ?: uuid?.let { plugin.server.getOfflinePlayer(it) }
                  ?: plugin.server.getOfflinePlayerIfCached(input)
          if (target == null) {
            sender.sendMessage("既知のプレイヤーが見つかりません。")
            return true
          }
          if (!target.isOnline && sender is Player) {
            if (!sender.hasPermission("essentials.mute.offline")) {
              sender.sendMessage("オフラインのプレイヤーを操作する権限がありません。")
              return true
            }
          } else if (target.player?.hasPermission("essentials.mute.exempt") == true) {
            sender.sendMessage("このプレイヤーは mute を免除されています。")
            return true
          }
          val now = System.currentTimeMillis()
          val previous = state(target.uniqueId)
          val next =
              MuteRules.change(previous, args.drop(1), now)
                  .copy(essentialsCleanupPending = previous.essentialsCleanupPending)
          if (
              maxMuteSeconds > 0 &&
                  next.expiresAt - now > maxMuteSeconds * 1000 &&
                  sender is Player &&
                  !sender.hasPermission("essentials.mute.unlimited")
          ) {
            sender.sendMessage("mute の期間が上限を超えています。")
            return true
          }
          store.put(target.uniqueId, next)
          val message =
              "${sender.name}: ${target.name ?: target.uniqueId} の mute を" +
                  (if (next.active(now)) "設定しました。" else "解除しました。") +
                  (if (next.expiresAt > 0) " 期限: ${java.time.Instant.ofEpochMilli(next.expiresAt)}"
                  else "") +
                  (next.reason?.let { " 理由: $it" } ?: "")
          sender.sendMessage(message)
          target.player?.takeIf { it !== sender }?.sendMessage(message)
          plugin.server.onlinePlayers
              .filter {
                it !== sender && it !== target.player && it.hasPermission("essentials.mute.notify")
              }
              .forEach { it.sendMessage(message) }
          plugin.logger.info(message)
        }
        .onFailure {
          report(it)
          sender.sendMessage("mute の処理に失敗しました。ログを確認してください。")
        }
    return true
  }

  override fun onTabComplete(
      sender: CommandSender,
      command: Command,
      alias: String,
      args: Array<out String>,
  ): List<String> =
      if (!sender.hasPermission("essentials.mute")) emptyList()
      else if (args.size == 1)
          plugin.server.onlinePlayers
              .filter {
                (sender !is Player || sender.canSee(it)) && it.name.startsWith(args[0], true)
              }
              .map { it.name }
      else listOf("10m", "1h", "1d").filter { it.startsWith(args.lastOrNull() ?: "") }

  private fun report(failure: Throwable) {
    plugin.logger.log(java.util.logging.Level.SEVERE, "OyasaiChat mute failed", failure)
  }

  override fun close() {
    task?.cancel()
    HandlerList.unregisterAll(this)
    val known = plugin.server.commandMap.knownCommands
    displaced.forEach { (label, previous) ->
      if (known[label] === plugin.getCommand("mute")) {
        if (previous == null) known.remove(label) else known[label] = previous
      }
    }
    displaced.clear()
    database.close()
  }
}
