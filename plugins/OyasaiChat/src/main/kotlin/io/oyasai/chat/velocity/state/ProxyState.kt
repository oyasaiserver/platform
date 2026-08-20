package io.oyasai.chat.velocity.state

import com.velocitypowered.api.event.Subscribe
import com.velocitypowered.api.event.connection.DisconnectEvent
import java.util.UUID
import java.util.concurrent.ConcurrentHashMap

// Velocity上の一時的なPM相手・返信先状態。
data class ConversationMode(val targetId: UUID, val targetName: String)

/** プレイヤー接続中にVelocityが保持する一時的なプレイヤー状態。 */
class ProxyState {
  private val replyPeers = ConcurrentHashMap<UUID, UUID>()
  private val conversationModes = ConcurrentHashMap<UUID, ConversationMode>()

  fun noteReply(first: UUID, second: UUID) {
    replyPeers[first] = second
    replyPeers[second] = first
  }

  fun replyPeerOf(playerId: UUID): UUID? = replyPeers[playerId]

  fun setConversation(playerId: UUID, targetId: UUID, targetName: String) {
    conversationModes[playerId] = ConversationMode(targetId, targetName)
  }

  fun conversationOf(playerId: UUID): ConversationMode? = conversationModes[playerId]

  fun removeConversation(playerId: UUID) {
    conversationModes.remove(playerId)
    conversationModes.entries.removeIf { it.value.targetId == playerId }
  }

  @Subscribe
  fun onDisconnect(event: DisconnectEvent) {
    val playerId = event.player.uniqueId
    val peer = replyPeers.remove(playerId)
    if (peer != null) replyPeers.remove(peer, playerId)
    replyPeers.entries.removeIf { it.value == playerId }
    removeConversation(playerId)
  }
}
