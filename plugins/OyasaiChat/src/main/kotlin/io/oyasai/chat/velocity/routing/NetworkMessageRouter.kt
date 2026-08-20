package io.oyasai.chat.velocity.routing

import com.velocitypowered.api.proxy.ProxyServer
import com.velocitypowered.api.proxy.ServerConnection
import com.velocitypowered.api.proxy.messages.MinecraftChannelIdentifier
import io.oyasai.chat.common.protocol.EnvelopeCodec
import io.oyasai.chat.common.protocol.MessageType
import io.oyasai.chat.common.protocol.NetworkEnvelope
import io.oyasai.chat.common.protocol.PresenceSnapshotCodec
import io.oyasai.chat.velocity.config.VelocityRoutingConfig
import io.oyasai.chat.velocity.state.ProxyState
import org.slf4j.Logger

// Velocity受信メッセージの転送先決定と転送。
class NetworkMessageRouter(
    private val proxy: ProxyServer,
    private val logger: Logger,
    private val config: VelocityRoutingConfig,
    private val state: ProxyState,
    private val identifier: MinecraftChannelIdentifier,
) {
  fun route(source: ServerConnection, envelope: NetworkEnvelope) {
    val sourceBackend = source.serverInfo.name
    when (envelope.type) {
      MessageType.CHANNEL_MESSAGE -> routeChannel(sourceBackend, envelope)
      MessageType.PRIVATE_MESSAGE -> routePrivate(source, envelope)
      MessageType.PRIVATE_MESSAGE_RESULT -> routePrivateResult(envelope)
      MessageType.PRIVATE_REPLY_REQUEST -> routeReplyRequest(sourceBackend, envelope)
      MessageType.PRIVATE_REPLY_UPDATE -> routeReplyUpdate(envelope)
      MessageType.PRIVATE_TARGET_REQUEST -> routeTargetRequest(sourceBackend, envelope)
      MessageType.PRIVATE_MODE_SET -> routeModeSet(sourceBackend, envelope)
      MessageType.PRIVATE_MODE_CLEAR -> routeModeClear(sourceBackend, envelope)
      MessageType.PRIVATE_MODE_REQUEST -> routeModeRequest(sourceBackend, envelope)
      MessageType.PRESENCE_REQUEST -> routePresenceRequest(sourceBackend, envelope)
      MessageType.PRIVATE_REPLY_STATE,
      MessageType.PRIVATE_TARGET_RESULT,
      MessageType.PRIVATE_MODE_STATE,
      MessageType.PRESENCE_RESULT ->
          logger.warn(
              "Rejected backend-originated proxy response {} ({}).",
              envelope.messageId,
              envelope.type,
          )
    }
  }

  private fun routeChannel(sourceBackend: String, envelope: NetworkEnvelope) {
    val targets = channelTargets(envelope)
    if (targets.isEmpty() && envelope.networkGroup != null) {
      logger.warn(
          "No safe destinations for channel message {} (group {}, origin {}).",
          envelope.messageId,
          envelope.networkGroup,
          sourceBackend,
      )
      return
    }
    targets.forEach { backend -> sendToBackend(backend, EnvelopeCodec.encode(envelope)) }
  }

  private fun routePrivate(source: ServerConnection, envelope: NetworkEnvelope) {
    val target =
        envelope.targetPlayerId?.let { proxy.getPlayer(it).orElse(null) }
            ?: envelope.targetPlayerName?.let { proxy.getPlayer(it).orElse(null) }
    val destination = target?.currentServer?.orElse(null)
    if (target == null || destination == null) {
      sendPrivateResult(source.serverInfo.name, envelope, "OFFLINE")
      return
    }
    val routed = envelope.copy(targetPlayerId = target.uniqueId, targetPlayerName = null)
    if (!destination.sendPluginMessage(identifier, EnvelopeCodec.encode(routed))) {
      logger.warn(
          "Velocity could not route PM {} to backend {}.",
          envelope.messageId,
          destination.serverInfo.name,
      )
      sendPrivateResult(source.serverInfo.name, envelope, "UNAVAILABLE")
    }
  }

  private fun routePrivateResult(envelope: NetworkEnvelope) {
    val peer = envelope.originPlayerId
    val requester = envelope.targetPlayerId
    if (envelope.content == "DELIVERED" && peer != null && requester != null)
        state.noteReply(requester, peer)
    val source =
        requester?.let {
          proxy.getPlayer(it).flatMap { player -> player.currentServer }.orElse(null)
        }
    if (source == null) {
      logger.warn(
          "Dropping PM result {} because its requester is no longer connected.",
          envelope.messageId,
      )
      return
    }
    sendToBackend(source.serverInfo.name, EnvelopeCodec.encode(envelope))
  }

  private fun routeReplyRequest(sourceBackend: String, envelope: NetworkEnvelope) {
    val requester = envelope.originPlayerId ?: return
    val peer = state.replyPeerOf(requester)
    val peerName = peer?.let { id -> proxy.getPlayer(id).map { it.username }.orElse(null) }
    sendProxyResponse(
        sourceBackend,
        NetworkEnvelope.proxy(
            type = MessageType.PRIVATE_REPLY_STATE,
            originPlayerId = peer,
            targetPlayerId = requester,
            targetPlayerName = peerName,
            senderName = "OyasaiChat",
            content = if (peer == null) "NONE" else "AVAILABLE",
        ),
    )
  }

  private fun routeReplyUpdate(envelope: NetworkEnvelope) {
    val first = envelope.originPlayerId ?: return
    val second = envelope.targetPlayerId ?: return
    if (envelope.content == "SET") state.noteReply(first, second)
  }

  private fun routeTargetRequest(sourceBackend: String, envelope: NetworkEnvelope) {
    val requester = envelope.originPlayerId ?: return
    val target = envelope.targetPlayerName?.let { proxy.getPlayer(it).orElse(null) }
    val available = target?.currentServer?.orElse(null) != null
    sendProxyResponse(
        sourceBackend,
        NetworkEnvelope.proxy(
            type = MessageType.PRIVATE_TARGET_RESULT,
            originPlayerId = target?.uniqueId,
            targetPlayerId = requester,
            targetPlayerName = target?.username,
            senderName = "OyasaiChat",
            content = if (available) "AVAILABLE" else "OFFLINE",
        ),
    )
  }

  private fun routeModeSet(sourceBackend: String, envelope: NetworkEnvelope) {
    val playerId = envelope.originPlayerId ?: return
    val targetId = envelope.targetPlayerId ?: return
    val player = proxy.getPlayer(playerId).orElse(null) ?: return
    if (player.currentServer.orElse(null)?.serverInfo?.name != sourceBackend) {
      logger.warn("Rejected private mode set {} from a mismatched backend.", envelope.messageId)
      return
    }
    val target = proxy.getPlayer(targetId).orElse(null)
    if (target?.currentServer?.orElse(null) == null) {
      state.removeConversation(playerId)
      logger.warn(
          "Rejected private mode set {} because target {} is not connected.",
          envelope.messageId,
          targetId,
      )
      return
    }
    state.setConversation(playerId, targetId, envelope.targetPlayerName ?: target.username)
  }

  private fun routeModeClear(sourceBackend: String, envelope: NetworkEnvelope) {
    val playerId = envelope.originPlayerId ?: return
    val player = proxy.getPlayer(playerId).orElse(null) ?: return
    if (player.currentServer.orElse(null)?.serverInfo?.name != sourceBackend) {
      logger.warn("Rejected private mode clear {} from a mismatched backend.", envelope.messageId)
      return
    }
    state.removeConversation(playerId)
  }

  private fun routeModeRequest(sourceBackend: String, envelope: NetworkEnvelope) {
    val playerId = envelope.originPlayerId ?: return
    val player = proxy.getPlayer(playerId).orElse(null) ?: return
    if (player.currentServer.orElse(null)?.serverInfo?.name != sourceBackend) {
      logger.warn("Rejected private mode request {} from a mismatched backend.", envelope.messageId)
      return
    }
    val mode = state.conversationOf(playerId)
    val target = mode?.targetId?.let { proxy.getPlayer(it).orElse(null) }
    val activeMode = mode?.takeIf { target?.currentServer?.orElse(null) != null }
    if (mode != null && activeMode == null) state.removeConversation(playerId)
    sendProxyResponse(
        sourceBackend,
        NetworkEnvelope.proxy(
            type = MessageType.PRIVATE_MODE_STATE,
            originPlayerId = activeMode?.targetId,
            targetPlayerId = playerId,
            targetPlayerName = activeMode?.targetName,
            senderName = "OyasaiChat",
            content = if (activeMode == null) "NONE" else "SET",
        ),
    )
  }

  private fun routePresenceRequest(sourceBackend: String, envelope: NetworkEnvelope) {
    val requesterId = envelope.originPlayerId ?: return
    val requester = proxy.getPlayer(requesterId).orElse(null) ?: return
    if (requester.currentServer.orElse(null)?.serverInfo?.name != sourceBackend) {
      logger.warn(
          "Rejected presence request {} with mismatched source backend {}.",
          envelope.messageId,
          sourceBackend,
      )
      return
    }
    sendProxyResponse(
        sourceBackend,
        NetworkEnvelope.proxy(
            type = MessageType.PRESENCE_RESULT,
            targetPlayerId = requesterId,
            senderName = "OyasaiChat",
            content = PresenceSnapshotCodec.encode(proxy.allPlayers.map { it.username }),
        ),
    )
  }

  private fun sendPrivateResult(sourceBackend: String, original: NetworkEnvelope, result: String) {
    val sourcePlayer = original.originPlayerId ?: return
    sendProxyResponse(
        sourceBackend,
        NetworkEnvelope.proxy(
            type = MessageType.PRIVATE_MESSAGE_RESULT,
            replyToMessageId = original.messageId,
            targetPlayerId = sourcePlayer,
            senderName = "OyasaiChat",
            content = result,
        ),
    )
  }

  private fun sendProxyResponse(backend: String, envelope: NetworkEnvelope) {
    sendToBackend(backend, EnvelopeCodec.encode(envelope))
  }

  private fun channelTargets(envelope: NetworkEnvelope): Set<String> {
    val group = envelope.networkGroup ?: return emptySet()
    val configured = config.groupForChannel(envelope.channelId.orEmpty()) ?: return emptySet()
    if (configured != group) return emptySet()
    val members = config.groups[group] ?: return emptySet()
    if (envelope.originBackend !in members) return emptySet()
    return members - envelope.originBackend
  }

  private fun sendToBackend(backend: String, data: ByteArray): Boolean {
    val server =
        proxy.getServer(backend).orElse(null)
            ?: run {
              logger.warn(
                  "Configured OyasaiChat backend '{}' is not registered in Velocity.",
                  backend,
              )
              return false
            }
    if (!server.sendPluginMessage(identifier, data)) {
      logger.warn("Velocity could not send OyasaiChat message to '{}'.", backend)
      return false
    }
    return true
  }
}
