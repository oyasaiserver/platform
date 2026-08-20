package io.oyasai.chat.paper.network

import io.oyasai.chat.common.protocol.MessageOrigin
import io.oyasai.chat.common.protocol.MessageType
import io.oyasai.chat.common.protocol.NetworkEnvelope
import io.oyasai.chat.common.protocol.PresenceSnapshotCodec
import io.oyasai.chat.paper.OyasaiChatPlugin
import io.oyasai.chat.paper.chat.ChatService

// コマンド補完用オンラインプレイヤー名の一時保存。
private const val PRESENCE_CACHE_TTL_MILLIS = 10_000L

/**
 * コマンド補完だけに使う、短時間有効なProxy全体のオンライン名キャッシュ。 PM送信時はVelocity側でUUIDと現在のサーバーを正式確認するため、古い候補が表示されても
 * オフラインの相手へPMは送信されない。
 */
class PlayerPresenceCache(
    private val plugin: OyasaiChatPlugin,
    private val chat: ChatService,
) {
  @Volatile private var names: Set<String> = emptySet()
  @Volatile private var updatedAt: Long = 0L
  @Volatile private var requestedAt: Long = 0L

  fun receive(envelope: NetworkEnvelope) {
    if (
        envelope.originKind != MessageOrigin.PROXY || envelope.type != MessageType.PRESENCE_RESULT
    ) {
      plugin.logger.warning("Rejected invalid presence result ${envelope.messageId}.")
      return
    }
    names = PresenceSnapshotCodec.decode(envelope.content)
    updatedAt = System.currentTimeMillis()
  }

  fun names(partial: String, now: Long = System.currentTimeMillis()): List<String> {
    if (now - updatedAt > PRESENCE_CACHE_TTL_MILLIS) {
      requestRefresh(now)
      return emptyList()
    }
    val lower = partial.lowercase()
    return names.filter { it.lowercase().startsWith(lower) }.sorted()
  }

  private fun requestRefresh(now: Long) {
    if (now - requestedAt <= PRESENCE_CACHE_TTL_MILLIS) return
    val carrier = plugin.server.onlinePlayers.firstOrNull() ?: return
    requestedAt = now
    chat.bridge.send(
        carrier,
        NetworkEnvelope.backend(
            type = MessageType.PRESENCE_REQUEST,
            backendId = chat.config.network.backendId,
            timestamp = now,
            originPlayerId = carrier.uniqueId,
            senderName = carrier.name,
            content = "REQUEST",
        ),
    )
  }
}
