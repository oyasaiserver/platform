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
          "japanize",
          "oyasaichat",
      )
  private val shortcutCommands = mutableMapOf<String, Command>()
  private val displacedCommands = mutableMapOf<String, Command>()

  internal lateinit var runtime: PaperRuntime
  internal lateinit var sourceMessages: io.oyasai.chat.paper.japanize.SourceMessageQueue
  internal lateinit var textTransformers: RecipientTextTransformerRegistry

  internal val chatLifecycleLock = Any()
  @Volatile internal var reloadInProgress = false
  internal var pendingChatCommits = 0
  internal var importInProgress = false

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
    sourceMessages = io.oyasai.chat.paper.japanize.SourceMessageQueue(this)
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
      onBackendPlayerJoin(it)
    }
    bindCommands()
    logger.info(
        "OyasaiChat enabled for backend ${runtime.config.network.backendId} with ${runtime.config.channels.channels.size} channels."
    )
  }

  internal fun onBackendPlayerJoin(player: Player) {
    // Paper join can precede Velocity post-connect; retry on the next tick as well
    // as handling the proxy announcement. PM state requests require a confirmed ID.
    server.scheduler.runTask(this, Runnable { runtime.bridge.requestIdentity(player) })
    if (runtime.config.network.identity.confirmed) runtime.privateMessages.onBackendJoin(player)
  }

  fun importLunaChat(sender: CommandSender) {
    if (!sender.hasPermission("oyasaichat.admin.import")) {
      sender.sendMessage(
          runtime.formatter.error("You do not have permission to import LunaChat data.")
      )
      return
    }
    if (
        importInProgress ||
            !runtime.dictionary.canReloadSafely() ||
            !sourceMessages.canReloadSafely() ||
            pendingChatCommits != 0 ||
            !runtime.privateMessages.canReloadSafely()
    ) {
      sender.sendMessage(
          runtime.formatter.error("Wait until pending messages finish before importing.")
      )
      return
    }
    importInProgress = true
    sender.sendMessage(
        runtime.formatter.info("LunaChat import started; resolving names asynchronously.")
    )
    val states = runtime.states
    val playerDefault = runtime.config.japanize.playerDefault
    val lookup =
        if (server.pluginManager.isPluginEnabled("LuckPerms"))
            io.oyasai.chat.paper.japanize.LuckPermsNameLookup.available(this)
        else null
    val resolver =
        io.oyasai.chat.paper.japanize.LunaImportResolver(
            lookup,
            { name ->
              val result = java.util.concurrent.CompletableFuture<UUID?>()
              // Bukkit's cached-only access stays on the server thread. Never query Mojang.
              server.scheduler.runTask(
                  this,
                  Runnable {
                    runCatching { server.getOfflinePlayerIfCached(name)?.uniqueId }
                        .onSuccess { result.complete(it) }
                        .onFailure { result.completeExceptionally(it) }
                  },
              )
              result
            },
        )
    java.util.concurrent.CompletableFuture.supplyAsync {
          io.oyasai.chat.paper.japanize.LunaImport.loadData(
              java.io.File(dataFolder, "imports/lunachat")
          )
        }
        .thenCompose { data -> resolver.resolve(data, playerDefault).thenApply { data to it } }
        .whenComplete { resolved, resolutionFailure ->
          if (isEnabled)
              server.scheduler.runTask(
                  this,
                  Runnable {
                    if (resolutionFailure != null) {
                      importInProgress = false
                      val message = "LunaChat import failed: ${resolutionFailure.message}"
                      sender.sendMessage(runtime.formatter.error(message))
                      logger.warning(message)
                      return@Runnable
                    }
                    val (data, plan) = resolved
                    val saved =
                        runCatching {
                              val dictionarySaved = runtime.dictionary.mergeImport(data.dictionary)
                              states.importJapanize(plan.players).thenCombine(dictionarySaved) {
                                  changed,
                                  _ ->
                                changed
                              }
                            }
                            .getOrElse { java.util.concurrent.CompletableFuture.failedFuture(it) }
                    saved.whenComplete { changed, failure ->
                      if (isEnabled)
                          server.scheduler.runTask(
                              this,
                              Runnable {
                                states.finishImport()
                                importInProgress = false
                                val message =
                                    if (failure == null)
                                        "LunaChat import saved: changed=$changed, selected=${plan.players.size}, dictionary=${data.dictionary.size}, invalid-players=${data.invalidPlayers}, invalid-dictionary=${data.invalidDictionary}, invalid-cache=${data.invalidCache}, skipped-default=${plan.skippedDefault} (player-default=$playerDefault)."
                                    else
                                        "LunaChat import failed; retry the same staged files: ${failure.message}"
                                sender.sendMessage(runtime.formatter.info(message))
                                logger.info(message)
                                plan.report().forEach { line ->
                                  sender.sendMessage(runtime.formatter.info(line))
                                  logger.info("LunaChat import $line")
                                }
                              },
                          )
                    }
                  },
              )
        }
  }

  fun reloadRuntime(sender: CommandSender): Boolean {
    check(server.isPrimaryThread) { "OyasaiChat reload must run on the server thread" }
    val busy =
        synchronized(chatLifecycleLock) {
          if (
              importInProgress ||
                  !runtime.dictionary.canReloadSafely() ||
                  pendingChatCommits != 0 ||
                  !sourceMessages.canReloadSafely() ||
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
                candidateConfig.network.identity = runtime.config.network.identity
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

      runtime.dictionary.close()
      previousStates.flushAndShutdown()
      previousDiscord.disable()
      runtime.delivery.close()
      server.messenger.unregisterIncomingPluginChannel(this, NETWORK_CHANNEL)

      sourceMessages.close()
      runtime = candidate
      sourceMessages = io.oyasai.chat.paper.japanize.SourceMessageQueue(this)
      server.messenger.registerIncomingPluginChannel(this, NETWORK_CHANNEL, candidate.bridge)
      candidate.discord.enable()
      server.onlinePlayers.forEach { player ->
        val state = candidate.chat.initialize(player)
        liveState[player.uniqueId]?.let { previous ->
          state.lastPrivateMessagePeer = previous.lastPrivateMessagePeer
          state.privateMessageModePeer = previous.privateMessageModePeer
          state.privateMessageModeName = previous.privateMessageModeName
        }
        onBackendPlayerJoin(player)
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
    sourceMessages.close()
    runtime.dictionary.close()
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
