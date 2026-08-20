package io.oyasai.chat.velocity

import com.google.inject.Inject
import com.velocitypowered.api.event.Subscribe
import com.velocitypowered.api.event.connection.PluginMessageEvent
import com.velocitypowered.api.event.connection.PluginMessageEvent.ForwardResult
import com.velocitypowered.api.event.proxy.ProxyInitializeEvent
import com.velocitypowered.api.plugin.Plugin
import com.velocitypowered.api.plugin.annotation.DataDirectory
import com.velocitypowered.api.proxy.ProxyServer
import com.velocitypowered.api.proxy.ServerConnection
import com.velocitypowered.api.proxy.messages.MinecraftChannelIdentifier
import java.nio.file.Files
import java.nio.file.Path
import io.oyasai.chat.common.protocol.EnvelopeCodec
import io.oyasai.chat.common.protocol.MessageDeduplicator
import io.oyasai.chat.common.protocol.MessageOrigin
import io.oyasai.chat.velocity.config.VelocityConfigLoader
import io.oyasai.chat.velocity.lifecycle.LoginMessageService
import io.oyasai.chat.velocity.routing.NetworkMessageRouter
import io.oyasai.chat.velocity.state.ProxyState
import org.slf4j.Logger

// Velocity側プラグインの起動と受信メッセージ入口。
@Plugin(
    id = "oyasaichat",
    name = "OyasaiChat",
    version = "0.1.0-SNAPSHOT",
    description = "バックエンド間チャット同期",
    authors = ["takucan"],
)
class OyasaiVelocityPlugin
@Inject
constructor(
    private val proxy: ProxyServer,
    private val logger: Logger,
    @DataDirectory private val dataDirectory: Path,
) {
  private val deduplicator = MessageDeduplicator()
  private val identifier = MinecraftChannelIdentifier.from("oyasaichat:main")
  private lateinit var router: NetworkMessageRouter

  @Subscribe
  fun onProxyInitialization(event: ProxyInitializeEvent) {
    val path = dataDirectory.resolve("config.yml")
    if (!Files.exists(path)) {
      Files.createDirectories(dataDirectory)
      javaClass.classLoader.getResourceAsStream("velocity-config.yml")!!.use {
        Files.copy(it, path)
      }
    }
    val config =
        runCatching {
          VelocityConfigLoader.load(path, proxy.allServers.map { it.serverInfo.name }.toSet())
        }
            .getOrElse {
              logger.error("Invalid OyasaiChat Velocity configuration: {}", it.message)
              throw it
            }
    val state = ProxyState()
    router =
        NetworkMessageRouter(
            proxy,
            logger,
            config,
            state,
            identifier,
        )
    proxy.channelRegistrar.register(identifier)
    proxy.eventManager.register(this, state)
    proxy.eventManager.register(this, LoginMessageService(proxy, config, logger))
    logger.info("OyasaiChat Velocity bridge enabled with {} network groups.", config.groups.size)
  }

  @Subscribe
  fun onPluginMessage(event: PluginMessageEvent) {
    if (event.identifier != identifier) return
    event.result = ForwardResult.handled()
    val source =
        event.source as? ServerConnection
            ?: run {
              logger.warn("Rejected client-originated OyasaiChat plugin message.")
              return
            }
    val envelope =
        runCatching { EnvelopeCodec.decode(event.data) }
            .getOrElse {
              logger.warn("Rejected malformed OyasaiChat network message: {}", it.message)
              return
            }
    if (!envelope.isFresh()) {
      logger.warn("Rejected stale/future OyasaiChat network message {}.", envelope.messageId)
      return
    }
    if (envelope.originKind != MessageOrigin.BACKEND) {
      logger.warn("Rejected proxy-originated message {} received from backend.", envelope.messageId)
      return
    }
    val sourceBackend = source.serverInfo.name
    if (envelope.originBackend != sourceBackend) {
      logger.warn(
          "Rejected message {} with origin {} from backend {}.",
          envelope.messageId,
          envelope.originBackend,
          sourceBackend,
      )
      return
    }
    if (deduplicator.firstSeen(envelope.messageId)) router.route(source, envelope)
  }

}
