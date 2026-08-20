package io.oyasai.chat.paper

import io.oyasai.chat.paper.chat.initialize
import io.oyasai.chat.paper.command.OyasaiCommandExecutor
import io.oyasai.chat.paper.config.PaperConfigLoader
import io.oyasai.chat.paper.network.NETWORK_CHANNEL
import io.oyasai.chat.paper.runtime.PaperRuntime
import io.oyasai.chat.paper.runtime.PaperRuntimeFactory
import java.util.UUID
import org.bukkit.command.CommandSender
import org.bukkit.plugin.java.JavaPlugin

// Paper側プラグインの起動・再読み込み・終了管理。
private data class LivePlayerChatState(
    val lastPrivateMessagePeer: UUID?,
    val privateMessageModePeer: UUID?,
    val privateMessageModeName: String?,
)

class OyasaiChatPlugin : JavaPlugin() {
  internal lateinit var runtime: PaperRuntime

  internal val chatLifecycleLock = Any()
  @Volatile internal var reloadInProgress = false
  internal var pendingChatCommits = 0

  override fun onEnable() {
    saveDefaultConfig()
    val runtime =
        runCatching { PaperRuntimeFactory.create(this, PaperConfigLoader.load(config)) }
            .getOrElse {
              logger.severe("Invalid OyasaiChat configuration: ${it.message}")
              server.pluginManager.disablePlugin(this)
              return
            }
    this.runtime = runtime
    runtime.discord.enable()

    server.messenger.registerOutgoingPluginChannel(this, NETWORK_CHANNEL)
    server.messenger.registerIncomingPluginChannel(this, NETWORK_CHANNEL, runtime.bridge)
    server.pluginManager.registerEvents(PaperChatEvents(this), this)
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
          if (pendingChatCommits != 0 || !runtime.privateMessages.canReloadSafely()) {
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
                PaperRuntimeFactory.create(this, candidateConfig)
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
    if (!::runtime.isInitialized) return
    runtime.discord.disable()
    runtime.states.flushAndShutdown()
    server.messenger.unregisterIncomingPluginChannel(this, NETWORK_CHANNEL)
    server.messenger.unregisterOutgoingPluginChannel(this, NETWORK_CHANNEL)
  }

  private fun bindCommands() {
    val executor = OyasaiCommandExecutor(this, runtime.chat, runtime.privateMessages)
    listOf("ch", "join", "leave", "chwho", "chlist", "setchannel", "msg", "r", "oyasaichat")
        .forEach { name ->
          getCommand(name)?.apply {
            setExecutor(executor)
            tabCompleter = executor
          }
        }
  }
}
