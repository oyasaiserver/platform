package io.oyasai.chat.paper

import io.oyasai.chat.api.OyasaiChatApi
import io.oyasai.chat.paper.chat.initialize
import io.oyasai.chat.paper.chat.join
import io.oyasai.chat.paper.command.OyasaiCommandExecutor
import io.oyasai.chat.paper.config.PaperConfigLoader
import io.oyasai.chat.paper.integration.NoopDiscordBridge
import io.oyasai.chat.paper.network.NETWORK_CHANNEL
import io.oyasai.chat.paper.runtime.PaperRuntime
import io.oyasai.chat.paper.runtime.PaperRuntimeFactory
import io.oyasai.chat.paper.transform.RecipientTextTransformerRegistry
import java.util.UUID
import org.bukkit.command.Command
import org.bukkit.command.CommandSender
import org.bukkit.command.PluginCommand
import org.bukkit.command.SimpleCommandMap
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.EventPriority
import org.bukkit.event.Listener
import org.bukkit.event.server.PluginDisableEvent
import org.bukkit.event.server.PluginEnableEvent
import org.bukkit.event.server.ServerLoadEvent
import org.bukkit.plugin.ServicePriority
import org.bukkit.plugin.java.JavaPlugin

// Paper側プラグインの起動・再読み込み・終了管理。
private data class LivePlayerChatState(
    val lastPrivateMessagePeer: UUID?,
    val privateMessageModePeer: UUID?,
    val privateMessageModeName: String?,
)

class OyasaiChatPlugin : JavaPlugin(), Listener {
  private val primaryCommandNames =
      listOf(
          "ch",
          "join",
          "leave",
          "chwho",
          "chlist",
          "setchannel",
          "msg",
          "r",
          "oyasaichat",
      )
  private val shortcutCommands = mutableMapOf<String, Command>()
  private val displacedCommands = mutableMapOf<String, Command>()

  internal lateinit var runtime: PaperRuntime
  internal lateinit var textTransformers: RecipientTextTransformerRegistry

  internal val chatLifecycleLock = Any()
  @Volatile internal var reloadInProgress = false
  internal var pendingChatCommits = 0

  override fun onEnable() {
    saveDefaultConfig()
    textTransformers = RecipientTextTransformerRegistry(this)
    val runtime =
        runCatching {
              PaperRuntimeFactory.create(this, PaperConfigLoader.load(config), textTransformers)
            }
            .getOrElse {
              logger.severe("Invalid OyasaiChat configuration: ${it.message}")
              server.pluginManager.disablePlugin(this)
              return
            }
    this.runtime = runtime
    runtime.discord.enable()

    server.pluginManager.registerEvents(this, this)
    server.messenger.registerOutgoingPluginChannel(this, NETWORK_CHANNEL)
    server.messenger.registerIncomingPluginChannel(this, NETWORK_CHANNEL, runtime.bridge)
    server.pluginManager.registerEvents(PaperChatEvents(this), this)
    server.servicesManager.register(
        OyasaiChatApi::class.java,
        textTransformers,
        this,
        ServicePriority.Normal,
    )
    server.onlinePlayers.forEach {
      runtime.chat.initialize(it)
      runtime.privateMessages.onBackendJoin(it)
    }
    bindCommands()
    logger.info(
        "OyasaiChat enabled for backend ${runtime.config.network.backendId} with ${runtime.config.channels.channels.size} channels."
    )
  }

  fun reloadRuntime(sender: CommandSender): Boolean {
    check(server.isPrimaryThread) { "OyasaiChat reload must run on the server thread" }
    val busy =
        synchronized(chatLifecycleLock) {
          if (
              pendingChatCommits != 0 ||
                  !runtime.privateMessages.canReloadSafely() ||
                  !runtime.delivery.canReloadSafely()
          ) {
            true
          } else {
            reloadInProgress = true
            false
          }
        }
    if (busy) {
      sender.sendMessage(
          runtime.formatter.error(
              "Reload is temporarily unavailable while chat or private messages are in flight. Try again."
          )
      )
      return false
    }

    try {
      val candidate =
          runCatching {
                reloadConfig()
                val candidateConfig = PaperConfigLoader.load(config)
                PaperRuntimeFactory.create(this, candidateConfig, textTransformers)
              }
              .getOrElse {
                logger.warning(
                    "OyasaiChat reload rejected; the previous configuration remains active: ${it.message}"
                )
                sender.sendMessage(
                    runtime.formatter.error(
                        "Reload failed; the previous configuration is still active. ${it.message}"
                    )
                )
                return false
              }

      val liveState =
          runtime.states.allLoaded().mapValues { (_, state) ->
            LivePlayerChatState(
                state.lastPrivateMessagePeer,
                state.privateMessageModePeer,
                state.privateMessageModeName,
            )
          }
      val previousStates = runtime.states
      val previousDiscord = runtime.discord

      previousStates.flushAndShutdown()
      previousDiscord.disable()
      runtime.delivery.close()
      server.messenger.unregisterIncomingPluginChannel(this, NETWORK_CHANNEL)

      runtime = candidate
      server.messenger.registerIncomingPluginChannel(this, NETWORK_CHANNEL, candidate.bridge)
      candidate.discord.enable()
      server.onlinePlayers.forEach { player ->
        val state = candidate.chat.initialize(player)
        liveState[player.uniqueId]?.let { previous ->
          state.lastPrivateMessagePeer = previous.lastPrivateMessagePeer
          state.privateMessageModePeer = previous.privateMessageModePeer
          state.privateMessageModeName = previous.privateMessageModeName
        }
        candidate.privateMessages.onBackendJoin(player)
      }
      bindCommands()

      logger.info(
          "OyasaiChat reloaded for backend ${candidate.config.network.backendId} with ${candidate.config.channels.channels.size} channels and ${server.onlinePlayers.size} online player states."
      )
      sender.sendMessage(
          candidate.formatter.info("OyasaiChat configuration and online player states reloaded.")
      )
      return true
    } finally {
      reloadInProgress = false
    }
  }

  override fun onDisable() {
    server.servicesManager.unregisterAll(this)
    if (::textTransformers.isInitialized) textTransformers.close()
    if (!::runtime.isInitialized) return
    unregisterShortcutCommands()
    releaseClaimedCommands()
    runtime.discord.disable()
    runtime.delivery.close()
    runtime.states.flushAndShutdown()
    server.messenger.unregisterIncomingPluginChannel(this, NETWORK_CHANNEL)
    server.messenger.unregisterOutgoingPluginChannel(this, NETWORK_CHANNEL)
  }

  // DiscordSRVが後から有効化された場合の遅延連携。
  @EventHandler
  fun onPluginEnable(event: PluginEnableEvent) {
    if (!::runtime.isInitialized) return
    if (event.plugin.name == "DiscordSRV") {
      val bridge = PaperRuntimeFactory.createDiscordBridge(this, runtime.config)
      if (bridge !is NoopDiscordBridge) {
        runtime.discord.disable()
        runtime.discord = bridge
        bridge.enable()
      }
    }
    claimCommandLabels()
  }

  @EventHandler
  fun onPluginDisable(event: PluginDisableEvent) {
    if (::textTransformers.isInitialized && event.plugin !== this) {
      textTransformers.unregisterOwner(event.plugin)
    }
  }

  @EventHandler(priority = EventPriority.MONITOR)
  fun onServerLoad(event: ServerLoadEvent) {
    claimCommandLabels()
  }

  private fun bindCommands() {
    val executor = OyasaiCommandExecutor(this, runtime.chat, runtime.privateMessages)
    primaryCommandNames.forEach { name ->
      getCommand(name)?.apply {
        setExecutor(executor)
        tabCompleter = executor
      }
    }
    registerShortcutCommands()
    claimCommandLabels()
  }

  private fun registerShortcutCommands() {
    unregisterShortcutCommands()
    val commandMap = server.commandMap
    runtime.config.channels.channels
        .flatMap { it.shortcutCommands }
        .distinct()
        .forEach { label ->
          val command = ChannelShortcutCommand(label)
          commandMap.register(label, "oyasaichat", command)
          shortcutCommands[label] = command
        }
  }

  // Paper 1.21+ の CommandMap#getKnownCommands は Brigadier へのブリッジマップ
  // (BukkitBrigForwardingMap) を返す。entrySet の removeIf は不可のため、
  // 必ずキー指定の remove / put で操作する。
  private val knownCommandsField: java.lang.reflect.Field? =
      runCatching {
            SimpleCommandMap::class.java.getDeclaredField("knownCommands").apply {
              isAccessible = true
            }
          }
          .getOrNull()

  @Suppress("UNCHECKED_CAST")
  private fun knownCommandsMutable(): MutableMap<String, Command>? =
      knownCommandsField?.get(server.commandMap) as? MutableMap<String, Command>

  private fun MutableMap<String, Command>.claimIfOwner(label: String, command: Command) {
    if (server.commandMap.getCommand(label.lowercase()) === command) remove(label)
  }

  private fun unregisterShortcutCommands() {
    val commandMap = server.commandMap
    val known = knownCommandsMutable()
    shortcutCommands.forEach { (label, command) ->
      known?.claimIfOwner(label, command)
      known?.claimIfOwner("oyasaichat:$label", command)
      command.unregister(commandMap)
      displacedCommands.remove(label)?.let { known?.put(label, it) }
    }
    shortcutCommands.clear()
  }

  private fun claimCommandLabels() {
    val knownCommands = knownCommandsMutable() ?: return
    val commands =
        buildMap<String, Command> {
          primaryCommandNames.forEach { name ->
            val command: PluginCommand = getCommand(name) ?: return@forEach
            put(command.name.lowercase(), command)
            command.aliases.forEach { put(it.lowercase(), command) }
          }
          putAll(shortcutCommands)
        }
    commands.forEach { (label, command) ->
      val previous = knownCommands.put(label, command)
      if (previous != null && previous !== command) {
        displacedCommands[label] = previous
        logger.info("Claimed /$label from ${previous.name} for OyasaiChat.")
      }
    }
    server.onlinePlayers.forEach { it.updateCommands() }
  }

  private fun releaseClaimedCommands() {
    val knownCommands = knownCommandsMutable() ?: return
    displacedCommands.forEach { (label, command) -> knownCommands[label] = command }
    displacedCommands.clear()
  }

  private inner class ChannelShortcutCommand(label: String) : Command(label) {
    init {
      description = "Send to or select the OyasaiChat channel for /$label"
      usageMessage = "/$label [message]"
    }

    override fun execute(
        sender: CommandSender,
        commandLabel: String,
        args: Array<out String>,
    ): Boolean {
      val player =
          sender as? Player
              ?: run {
                sender.sendMessage(runtime.formatter.error("This command requires a player."))
                return true
              }
      if (reloadInProgress) {
        player.sendMessage(
            runtime.formatter.error("Chat configuration is reloading; please try again.")
        )
        return true
      }
      val channel = runtime.config.channels.findShortcut(name) ?: return false
      val message = args.joinToString(" ").trim()
      if (message.isEmpty()) runtime.chat.join(player, player, channel.id)
      else runtime.chat.sendOneShotChannel(player, channel, message)
      return true
    }
  }
}
