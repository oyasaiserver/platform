package io.oyasai.chat.paper.pm

import io.oyasai.chat.common.protocol.MessageOrigin
import io.oyasai.chat.common.protocol.MessageType
import io.oyasai.chat.common.protocol.NetworkEnvelope
import io.oyasai.chat.paper.chat.state

// Velocityから届いたPM関連メッセージ処理。
internal fun PrivateMessageService.receiveTargetResult(envelope: NetworkEnvelope) {
  if (
      envelope.originKind != MessageOrigin.PROXY ||
          envelope.type != MessageType.PRIVATE_TARGET_RESULT
  ) {
    plugin.logger.warning("Rejected invalid private-message target result ${envelope.messageId}.")
    return
  }
  val requesterId = envelope.targetPlayerId ?: return
  val requester =
      plugin.server.getPlayer(requesterId)
          ?: run {
            pendingConversationTargets.remove(requesterId)
            return
          }
  if (pendingConversationTargets.remove(requesterId) == null) return
  val targetId = envelope.originPlayerId
  if (envelope.content != "AVAILABLE" || targetId == null) {
    requester.sendMessage(chat.formatter.error("That player is offline."))
    return
  }
  val targetName = envelope.targetPlayerName ?: targetId.toString()
  val currentState = chat.state(requester)
  if (currentState.privateMessageModePeer == targetId) {
    stopConversation(requester)
    requester.sendMessage(chat.formatter.info("Private message mode disabled."))
    return
  }
  if (!setConversationTarget(requester, targetId, targetName)) {
    requester.sendMessage(chat.formatter.error("Network bridge is unavailable."))
    return
  }
  requester.sendMessage(chat.formatter.info("Private message mode: $targetName."))
}

internal fun PrivateMessageService.receiveModeState(envelope: NetworkEnvelope) {
  if (
      envelope.originKind != MessageOrigin.PROXY || envelope.type != MessageType.PRIVATE_MODE_STATE
  ) {
    plugin.logger.warning("Rejected invalid private-message mode state ${envelope.messageId}.")
    return
  }
  val requester = envelope.targetPlayerId?.let(plugin.server::getPlayer) ?: return
  val state = chat.state(requester)
  when (envelope.content) {
    "SET" -> {
      val targetId = envelope.originPlayerId ?: return
      val targetName = envelope.targetPlayerName ?: targetId.toString()
      setConversationTarget(requester, targetId, targetName, syncProxy = false)
    }
    "NONE" -> {
      state.privateMessageModePeer = null
      state.privateMessageModeName = null
    }
    else ->
        plugin.logger.warning(
            "Rejected private-message mode state ${envelope.messageId} with invalid content."
        )
  }
}

internal fun PrivateMessageService.receivePrivateResult(envelope: NetworkEnvelope) {
  if (envelope.originKind != MessageOrigin.PROXY && envelope.originKind != MessageOrigin.BACKEND) {
    plugin.logger.warning("Rejected invalid private-message result ${envelope.messageId}.")
    return
  }
  val sender = envelope.targetPlayerId?.let(plugin.server::getPlayer) ?: return
  val pending = envelope.replyToMessageId?.let(pendingOutbound::remove)
  when (envelope.content) {
    "DELIVERED" -> {
      chat.state(sender).lastPrivateMessagePeer = envelope.originPlayerId
      chat.states.save(sender)
      if (pending != null && pending.sourceId == sender.uniqueId) {
        val targetName = envelope.senderName.takeIf { it.isNotBlank() } ?: pending.targetName
        sender.sendMessage(
            chat.formatter.privateMessage(
                sender.name,
                targetName,
                pending.message,
                outgoing = true,
            )
        )
      }
    }
    "DISABLED" -> {
      stopConversation(sender)
      sender.sendMessage(chat.formatter.error("That player has private messages disabled."))
    }
    "OFFLINE" -> {
      stopConversation(sender)
      sender.sendMessage(chat.formatter.error("That player is offline."))
    }
    "UNAVAILABLE" -> {
      stopConversation(sender)
      sender.sendMessage(chat.formatter.error("The target backend is unavailable."))
    }
  }
}

internal fun PrivateMessageService.receiveReplyState(envelope: NetworkEnvelope) {
  if (envelope.originKind != MessageOrigin.PROXY) {
    plugin.logger.warning("Rejected non-proxy reply state ${envelope.messageId}.")
    return
  }
  val requester = envelope.targetPlayerId?.let(plugin.server::getPlayer) ?: return
  val message = pendingReplies.remove(requester.uniqueId)?.message ?: return
  val peer = envelope.originPlayerId
  if (peer == null) {
    requester.sendMessage(chat.formatter.error("You have no private-message recipient."))
    return
  }
  val peerName =
      plugin.server.getPlayer(peer)?.name
          ?: plugin.server.getOfflinePlayer(peer).name
          ?: peer.toString()
  sendInternal(requester, peerName, peer, message)
}
