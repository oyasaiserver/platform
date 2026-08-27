package io.oyasai.chat.paper.network

import io.oyasai.chat.api.ChatTextSender
import io.oyasai.chat.api.ChatTextSurface
import io.oyasai.chat.common.protocol.MessageOrigin
import io.oyasai.chat.common.protocol.MessageType
import io.oyasai.chat.common.protocol.NetworkEnvelope
import io.oyasai.chat.paper.OyasaiChatPlugin
import io.oyasai.chat.paper.chat.ChatService
import io.oyasai.chat.paper.chat.state
import io.oyasai.chat.paper.pm.receiveModeState
import io.oyasai.chat.paper.pm.receivePrivateResult
import io.oyasai.chat.paper.pm.receiveReplyState
import io.oyasai.chat.paper.pm.receiveTargetResult
import net.kyori.adventure.text.Component

// Velocityから届いたメッセージのPaper側反映。
/** 読み込み済みProxyメッセージのPaper側チャット・プレイヤー状態への反映。 */
class PaperNetworkHandler(
    private val plugin: OyasaiChatPlugin,
    private val chat: ChatService,
) {
  fun receive(envelope: NetworkEnvelope) {
    when (envelope.type) {
      MessageType.CHANNEL_MESSAGE -> receiveChannel(envelope)
      MessageType.PRIVATE_MESSAGE -> receivePrivate(envelope)
      MessageType.PRIVATE_MESSAGE_RESULT -> chat.privateMessages.receivePrivateResult(envelope)
      MessageType.PRIVATE_REPLY_STATE -> chat.privateMessages.receiveReplyState(envelope)
      MessageType.PRIVATE_TARGET_RESULT -> chat.privateMessages.receiveTargetResult(envelope)
      MessageType.PRIVATE_MODE_STATE -> chat.privateMessages.receiveModeState(envelope)
      MessageType.PRESENCE_RESULT -> plugin.runtime.presence.receive(envelope)
      MessageType.PRESENCE_REQUEST -> reject(envelope, "backend-originated presence request")
      MessageType.PRIVATE_REPLY_REQUEST,
      MessageType.PRIVATE_REPLY_UPDATE,
      MessageType.PRIVATE_TARGET_REQUEST,
      MessageType.PRIVATE_MODE_SET,
      MessageType.PRIVATE_MODE_CLEAR,
      MessageType.PRIVATE_MODE_REQUEST -> reject(envelope, "proxy-only message")
    }
  }

  private fun receiveChannel(envelope: NetworkEnvelope) {
    val channel = envelope.channelId?.let(chat.config.channels::find) ?: return
    val group = channel.networkGroup
    if (
        group != envelope.networkGroup ||
            envelope.originKind != MessageOrigin.BACKEND ||
            envelope.originBackend !in chat.config.network.groups[group].orEmpty()
    ) {
      reject(envelope, "channel origin/group mismatch")
      return
    }
    chat.deliverLocal(
        channel,
        envelope.senderName,
        envelope.originPlayerId,
        envelope.content,
        envelope.messageId,
        envelope.originBackendPrefix,
        envelope.originBackendSuffix,
        externalAuthorized = envelope.senderCanSendLinks,
        senderLocale = envelope.senderLocale,
        surface =
            if (envelope.originPlayerId == null) ChatTextSurface.EXTERNAL_CHAT
            else ChatTextSurface.PUBLIC_CHAT,
    )
  }

  private fun receivePrivate(envelope: NetworkEnvelope) {
    val target = envelope.targetPlayerId?.let(plugin.server::getPlayer)
    val senderId = envelope.originPlayerId
    if (target == null || senderId == null) {
      reject(envelope, "PM requires a connected UUID target and sender")
      return
    }
    val targetState = chat.state(target)
    val accepted = targetState.privateMessagesEnabled
    if (accepted) {
      targetState.lastPrivateMessagePeer = senderId
      chat.states.save(target)
      if (chat.ownsTransformation(ChatTextSurface.PRIVATE_MESSAGE)) {
        chat.delivery.dispatch(
            messageId = envelope.messageId,
            surface = ChatTextSurface.PRIVATE_MESSAGE,
            sender = ChatTextSender(senderId, envelope.senderName, envelope.senderLocale),
            originalText = envelope.content,
            recipients = listOf(target),
            render = { _, body ->
              chat.formatter.privateMessage(
                  senderName = envelope.senderName,
                  targetName = target.name,
                  message = body,
                  presentation = null,
                  senderCanSendLinks = envelope.senderCanSendLinks,
              )
            },
            afterDelivery = { current ->
              chat.privateMessages.playReceiveSound(current)
              acknowledgePrivate(current, senderId, envelope, "DELIVERED")
            },
        )
      } else {
        val current = plugin.server.getPlayer(target.uniqueId)
        if (current === target && current.isOnline) {
          runCatching {
                current.sendMessage(
                    chat.formatter.privateMessage(
                        senderName = envelope.senderName,
                        targetName = current.name,
                        message = Component.text(envelope.content),
                        presentation = null,
                        senderCanSendLinks = envelope.senderCanSendLinks,
                    )
                )
                chat.privateMessages.playReceiveSound(current)
                acknowledgePrivate(current, senderId, envelope, "DELIVERED")
              }
              .onFailure {
                plugin.logger.warning(
                    "Unable to deliver network private message ${envelope.messageId}: ${it.message}"
                )
              }
        }
      }
    } else {
      val current = plugin.server.getPlayer(target.uniqueId)
      if (current === target && current.isOnline) {
        acknowledgePrivate(current, senderId, envelope, "DISABLED")
      }
    }
  }

  private fun acknowledgePrivate(
      target: org.bukkit.entity.Player,
      senderId: java.util.UUID,
      envelope: NetworkEnvelope,
      result: String,
  ) {
    chat.bridge.send(
        target,
        NetworkEnvelope.backend(
            type = MessageType.PRIVATE_MESSAGE_RESULT,
            backendId = chat.config.network.backendId,
            replyToMessageId = envelope.messageId,
            originPlayerId = target.uniqueId,
            targetPlayerId = senderId,
            senderName = target.name,
            content = result,
        ),
    )
  }

  private fun reject(envelope: NetworkEnvelope, reason: String) {
    plugin.logger.warning("Rejected $reason ${envelope.messageId}.")
  }
}
