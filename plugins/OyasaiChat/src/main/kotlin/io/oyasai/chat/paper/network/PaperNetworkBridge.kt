package io.oyasai.chat.paper.network

import io.oyasai.chat.common.model.ChatConfig
import io.oyasai.chat.common.protocol.BackendIdentity
import io.oyasai.chat.common.protocol.EnvelopeCodec
import io.oyasai.chat.common.protocol.MessageDeduplicator
import io.oyasai.chat.common.protocol.MessageOrigin
import io.oyasai.chat.common.protocol.MessageType
import io.oyasai.chat.common.protocol.NetworkEnvelope
import io.oyasai.chat.common.protocol.PROXY_ORIGIN_BACKEND
import io.oyasai.chat.paper.OyasaiChatPlugin
import org.bukkit.entity.Player
import org.bukkit.plugin.messaging.PluginMessageListener

// PaperとVelocity間のPlugin Message送受信。
const val NETWORK_CHANNEL = "oyasaichat:main"

class PaperNetworkBridge(
    private val plugin: OyasaiChatPlugin,
    private val config: ChatConfig,
    private val handler: PaperNetworkHandler,
) : PluginMessageListener {
  private val deduplicator = MessageDeduplicator()

  fun requestIdentity(player: Player) {
    if (!player.isOnline || !plugin.isEnabled) return
    val request = config.network.identity.request(player.uniqueId, player.name)
    runCatching { player.sendPluginMessage(plugin, NETWORK_CHANNEL, EnvelopeCodec.encode(request)) }
        .onFailure { plugin.logger.warning("Unable to request backend identity: ${it.message}") }
  }

  fun send(player: Player, envelope: NetworkEnvelope): Boolean {
    if (!config.network.identity.confirmed) {
      requestIdentity(player)
      plugin.logger.warning(
          "Network delivery is unavailable until Velocity confirms this backend ID."
      )
      return false
    }
    if (
        envelope.originKind != MessageOrigin.BACKEND ||
            envelope.originBackend != config.network.backendId
    ) {
      plugin.logger.warning(
          "Refusing envelope with incorrect origin backend '${envelope.originBackend}'."
      )
      return false
    }
    if (!player.isOnline || !plugin.isEnabled) {
      plugin.logger.warning(
          "Cannot send network message ${envelope.messageId}: player carrier is offline."
      )
      return false
    }
    return runCatching {
          player.sendPluginMessage(plugin, NETWORK_CHANNEL, EnvelopeCodec.encode(envelope))
          true
        }
        .getOrElse {
          plugin.logger.warning("Unable to send network message: ${it.message}")
          false
        }
  }

  override fun onPluginMessageReceived(channel: String, player: Player, message: ByteArray) {
    if (channel != NETWORK_CHANNEL) return
    val envelope =
        runCatching { EnvelopeCodec.decode(message) }
            .getOrElse {
              plugin.logger.warning("Rejected malformed network message from proxy: ${it.message}")
              return
            }
    if (!envelope.isFresh()) {
      plugin.logger.warning("Rejected stale/future network message ${envelope.messageId}.")
      return
    }
    if (envelope.type == MessageType.BACKEND_ID) {
      plugin.server.scheduler.runTask(
          plugin,
          Runnable {
            if (!player.isOnline || envelope.targetPlayerId != player.uniqueId) return@Runnable
            if (envelope.replyToMessageId == null) {
              // Post-connect announcement starts authentication; it cannot set the ID itself.
              requestIdentity(player)
              return@Runnable
            }
            val identity = config.network.identity
            val wasConfirmed = identity.confirmed
            val previous = identity.id
            when (identity.accept(envelope, player.uniqueId)) {
              BackendIdentity.Acceptance.REJECTED ->
                  plugin.logger.warning("Rejected uncorrelated backend identity response.")
              BackendIdentity.Acceptance.CONFLICT ->
                  plugin.logger.severe(
                      "Velocity backend ID changed from '$previous' to '${envelope.content}'; network sends are disabled until restart."
                  )
              BackendIdentity.Acceptance.CONFIRMED -> {
                if (!wasConfirmed) {
                  plugin.logger.info(
                      "Velocity confirmed backend ID '${identity.id}' (configured '${identity.configuredId}')."
                  )
                  if (identity.id != identity.configuredId)
                      plugin.logger.warning(
                          "Velocity backend ID differs from network.backend-id; using Velocity's registered name."
                      )
                  plugin.runtime.presence.invalidate()
                  plugin.runtime.presence.snapshot()
                  plugin.server.onlinePlayers.forEach {
                    plugin.runtime.privateMessages.onBackendJoin(it)
                  }
                }
              }
            }
          },
      )
      return
    }
    if (envelope.type == MessageType.BACKEND_ID_REQUEST) return
    if (!config.network.identity.confirmed && envelope.originKind == MessageOrigin.BACKEND) return
    if (
        envelope.originKind == MessageOrigin.BACKEND &&
            envelope.originBackend !in config.network.knownBackends()
    ) {
      plugin.logger.warning(
          "Rejected network message ${envelope.messageId} from unknown backend '${envelope.originBackend}'."
      )
      return
    }
    if (
        envelope.originKind == MessageOrigin.PROXY && envelope.originBackend != PROXY_ORIGIN_BACKEND
    ) {
      plugin.logger.warning(
          "Rejected network message ${envelope.messageId} with invalid proxy origin."
      )
      return
    }
    if (!deduplicator.firstSeen(envelope.messageId)) return
    if (
        envelope.originKind == MessageOrigin.BACKEND &&
            envelope.originBackend == config.network.backendId
    ) {
      plugin.logger.warning(
          "Suppressed looped network message ${envelope.messageId} from own backend."
      )
      return
    }
    plugin.server.scheduler.runTask(plugin, Runnable { handler.receive(envelope) })
  }
}
