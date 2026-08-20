package io.oyasai.chat.paper.network

import io.oyasai.chat.common.model.ChatConfig
import io.oyasai.chat.common.protocol.EnvelopeCodec
import io.oyasai.chat.common.protocol.MessageDeduplicator
import io.oyasai.chat.common.protocol.MessageOrigin
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

  fun send(player: Player, envelope: NetworkEnvelope): Boolean {
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
