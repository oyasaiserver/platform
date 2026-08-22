package io.oyasai.chat.paper.pm

import io.oyasai.chat.common.protocol.MAX_MESSAGE_AGE_MILLIS
import io.oyasai.chat.common.protocol.MessageType
import io.oyasai.chat.common.protocol.NetworkEnvelope
import io.oyasai.chat.paper.OyasaiChatPlugin
import io.oyasai.chat.paper.chat.ChatService
import io.oyasai.chat.paper.chat.state
import java.util.UUID
import net.kyori.adventure.text.Component
import org.bukkit.SoundCategory
import org.bukkit.command.CommandSender
import org.bukkit.entity.Player

// PMの送信・返信・会話モード管理。
class PrivateMessageService(internal val plugin: OyasaiChatPlugin, internal val chat: ChatService) {
  // コマンドとPlugin MessageはPaperのサーバースレッドから入る。
  internal val pendingReplies = mutableMapOf<UUID, PendingReply>()
  internal val pendingConversationTargets = mutableMapOf<UUID, PendingConversationTarget>()
  internal val pendingOutbound = mutableMapOf<UUID, PendingOutbound>()

  internal data class PendingReply(
      val message: String,
      val createdAt: Long = System.currentTimeMillis(),
  )

  internal data class PendingConversationTarget(
      val name: String,
      val createdAt: Long = System.currentTimeMillis(),
  )

  internal data class PendingOutbound(
      val sourceId: UUID,
      val targetName: String,
      val message: String,
      val createdAt: Long = System.currentTimeMillis(),
  )

  fun isConversationPending(playerId: UUID): Boolean =
      pendingConversationTargets.containsKey(playerId)

  fun canReloadSafely(now: Long = System.currentTimeMillis()): Boolean {
    pendingReplies.entries.removeIf { now - it.value.createdAt > MAX_MESSAGE_AGE_MILLIS }
    pendingConversationTargets.entries.removeIf {
      now - it.value.createdAt > MAX_MESSAGE_AGE_MILLIS
    }
    pendingOutbound.entries.removeIf { now - it.value.createdAt > MAX_MESSAGE_AGE_MILLIS }
    return pendingReplies.isEmpty() &&
        pendingConversationTargets.isEmpty() &&
        pendingOutbound.isEmpty()
  }

  internal fun playReceiveSound(target: Player) {
    val settings = chat.config.privateMessageReceiveSound
    if (!settings.enabled) return
    runCatching {
          target.playSound(
              target.location,
              settings.sound,
              SoundCategory.PLAYERS,
              settings.volume,
              settings.pitch,
          )
        }
        .onFailure {
          plugin.logger.warning(
              "Unable to play private-message receive sound '${settings.sound}' for ${target.name}: ${it.message}"
          )
        }
  }

  /** /msg <player>で使う1対1の会話モード開始。 */
  fun startConversation(source: Player, targetInput: String): Boolean {
    val input = targetInput.trim()
    if (input.isBlank()) {
      source.sendMessage(chat.formatter.error("Player name must not be empty."))
      return false
    }
    val currentState = chat.state(source)
    if (
        currentState.privateMessageModePeer != null &&
            currentState.privateMessageModeName.equals(input, true)
    ) {
      stopConversation(source)
      source.sendMessage(chat.formatter.info("Private message mode disabled."))
      return true
    }
    val local = plugin.server.onlinePlayers.firstOrNull { it.name.equals(input, true) }
    if (local != null) {
      val targetState = chat.state(local)
      if (!targetState.privateMessagesEnabled) {
        source.sendMessage(chat.formatter.error("That player has private messages disabled."))
        return false
      }
      if (!setConversationTarget(source, local.uniqueId, local.name)) {
        source.sendMessage(chat.formatter.error("Network bridge is unavailable."))
        return false
      }
      source.sendMessage(chat.formatter.info("Private message mode: ${local.name}."))
      return true
    }

    pendingConversationTargets[source.uniqueId] = PendingConversationTarget(input)
    val sent =
        chat.bridge.send(
            source,
            NetworkEnvelope.backend(
                type = MessageType.PRIVATE_TARGET_REQUEST,
                backendId = chat.config.network.backendId,
                originPlayerId = source.uniqueId,
                targetPlayerName = input,
                senderName = source.name,
                content = "RESOLVE",
            ),
        )
    if (!sent) {
      pendingConversationTargets.remove(source.uniqueId)
      source.sendMessage(chat.formatter.error("Network bridge is unavailable."))
    }
    return sent
  }

  /** AsyncChatEventがローカルの受信者へ配信した後の、会話モードPMの確定。 プレイヤーへの再表示は行わず、状態変更とネットワーク・外部連携だけを処理。 */
  fun commitConversationMessage(
      source: Player,
      message: String,
      expectedPeer: UUID? = null,
      expectedName: String? = null,
  ): Boolean {
    val state = chat.state(source)
    if (state.privateMessageModePeer == null && state.privateMessageModeName == null) {
      if (pendingConversationTargets.containsKey(source.uniqueId)) {
        source.sendMessage(chat.formatter.error("Private message target is still being resolved."))
        return true
      }
      return false
    }
    if (
        (expectedPeer != null && state.privateMessageModePeer != expectedPeer) ||
            (expectedName != null && state.privateMessageModeName != expectedName)
    ) {
      source.sendMessage(
          chat.formatter.error("Private message mode changed; message was not sent.")
      )
      return true
    }
    val peer = state.privateMessageModePeer
    val targetName = state.privateMessageModeName ?: peer?.toString() ?: return true
    if (message.isBlank()) {
      source.sendMessage(chat.formatter.error("Message must not be empty."))
      return true
    }
    sendInternal(source, targetName, peer, message, deliverLocal = false)
    return true
  }

  fun stopConversation(player: Player) {
    val wasPending = pendingConversationTargets.remove(player.uniqueId) != null
    val state = chat.state(player)
    val wasActive = state.privateMessageModePeer != null || state.privateMessageModeName != null
    state.privateMessageModePeer = null
    state.privateMessageModeName = null
    if (wasActive || wasPending) {
      chat.bridge.send(
          player,
          NetworkEnvelope.backend(
              type = MessageType.PRIVATE_MODE_CLEAR,
              backendId = chat.config.network.backendId,
              originPlayerId = player.uniqueId,
              senderName = player.name,
              content = "CLEAR",
          ),
      )
    }
  }

  /** バックエンド接続後または再読み込み後の、Proxy全体の会話モード問い合わせ。 */
  fun onBackendJoin(player: Player) {
    chat.bridge.send(
        player,
        NetworkEnvelope.backend(
            type = MessageType.PRIVATE_MODE_REQUEST,
            backendId = chat.config.network.backendId,
            originPlayerId = player.uniqueId,
            senderName = player.name,
            content = "REQUEST",
        ),
    )
  }

  fun onQuit(player: Player) {
    pendingReplies.remove(player.uniqueId)
    pendingConversationTargets.remove(player.uniqueId)
    pendingOutbound.entries.removeIf { it.value.sourceId == player.uniqueId }
  }

  fun send(sender: CommandSender, targetInput: String, message: String): Boolean {
    val source =
        sender as? Player
            ?: run {
              sender.sendMessage(
                  chat.formatter.error(
                      "Console PM requires an online target and is not supported for replies."
                  )
              )
              return false
            }
    return sendInternal(source, targetInput, null, message)
  }

  internal fun sendInternal(
      source: Player,
      targetInput: String,
      targetId: java.util.UUID?,
      message: String,
      deliverLocal: Boolean = true,
  ): Boolean {
    if (message.isBlank()) {
      source.sendMessage(chat.formatter.error("Message must not be empty."))
      return false
    }
    val local =
        targetId?.let(plugin.server::getPlayer)
            ?: plugin.server.onlinePlayers.firstOrNull { it.name.equals(targetInput, true) }
    if (local != null) {
      val targetState = chat.state(local)
      if (!targetState.privateMessagesEnabled) {
        source.sendMessage(chat.formatter.error("That player has private messages disabled."))
        return false
      }
      chat.state(source).lastPrivateMessagePeer = local.uniqueId
      targetState.lastPrivateMessagePeer = source.uniqueId
      chat.states.save(source)
      chat.states.save(local)
      if (deliverLocal) {
        val component =
            chat.formatter.privateMessage(
                senderName = source.name,
                targetName = local.name,
                message = Component.text(message),
                presentation = chat.formatter.snapshot(source),
            )
        source.sendMessage(component)
        local.sendMessage(component)
      }
      playReceiveSound(local)
      chat.bridge.send(
          source,
          NetworkEnvelope.backend(
              type = MessageType.PRIVATE_REPLY_UPDATE,
              backendId = chat.config.network.backendId,
              originPlayerId = source.uniqueId,
              targetPlayerId = local.uniqueId,
              senderName = source.name,
              content = "SET",
          ),
      )
      plugin.runtime.discord.onPrivateMessage(source.name, local.name, message)
      return true
    }
    val envelope =
        NetworkEnvelope.backend(
            type = MessageType.PRIVATE_MESSAGE,
            backendId = chat.config.network.backendId,
            originPlayerId = source.uniqueId,
            targetPlayerId = targetId,
            targetPlayerName = if (targetId == null) targetInput else null,
            senderName = source.name,
            content = message,
        )
    if (deliverLocal) {
      pendingOutbound[envelope.messageId] = PendingOutbound(source.uniqueId, targetInput, message)
    }
    if (!chat.bridge.send(source, envelope)) {
      pendingOutbound.remove(envelope.messageId)
      source.sendMessage(chat.formatter.error("Network bridge is unavailable."))
      return false
    }
    return true
  }

  fun reply(sender: CommandSender, message: String): Boolean {
    val player =
        sender as? Player
            ?: run {
              sender.sendMessage(chat.formatter.error("Only players can use /r."))
              return false
            }
    if (message.isBlank()) {
      sender.sendMessage(chat.formatter.error("Message must not be empty."))
      return false
    }
    val peer = chat.state(player).lastPrivateMessagePeer
    if (peer == null) {
      pendingReplies[player.uniqueId] = PendingReply(message)
      val sent =
          chat.bridge.send(
              player,
              NetworkEnvelope.backend(
                  type = MessageType.PRIVATE_REPLY_REQUEST,
                  backendId = chat.config.network.backendId,
                  originPlayerId = player.uniqueId,
                  senderName = player.name,
                  content = "REQUEST",
              ),
          )
      if (!sent) {
        pendingReplies.remove(player.uniqueId)
        sender.sendMessage(chat.formatter.error("You have no private-message recipient."))
      }
      return sent
    }
    val local = plugin.server.getPlayer(peer)
    val displayName = local?.name ?: plugin.server.getOfflinePlayer(peer).name ?: peer.toString()
    return sendInternal(player, displayName, peer, message)
  }

  internal fun setConversationTarget(
      source: Player,
      targetId: UUID,
      targetName: String,
      syncProxy: Boolean = true,
  ): Boolean {
    pendingConversationTargets.remove(source.uniqueId)
    val state = chat.state(source)
    state.privateMessageModePeer = targetId
    state.privateMessageModeName = targetName
    state.lastPrivateMessagePeer = targetId
    if (!syncProxy) return true
    val sent =
        chat.bridge.send(
            source,
            NetworkEnvelope.backend(
                type = MessageType.PRIVATE_MODE_SET,
                backendId = chat.config.network.backendId,
                originPlayerId = source.uniqueId,
                targetPlayerId = targetId,
                targetPlayerName = targetName,
                senderName = source.name,
                content = "SET",
            ),
        )
    if (!sent) {
      state.privateMessageModePeer = null
      state.privateMessageModeName = null
    }
    return sent
  }
}
