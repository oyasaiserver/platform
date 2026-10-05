package io.oyasai.chat.common.protocol

import java.util.UUID

/** Only a correlated proxy response can authorize network sends. The config ID is display-only. */
class BackendIdentity(val configuredId: String) {
  @Volatile
  var id: String = configuredId
    private set

  @Volatile
  var confirmed: Boolean = false
    private set

  private var adoptedId: String? = null
  private var conflicted = false
  private val pending = mutableMapOf<UUID, Pair<UUID, Long>>()

  enum class Acceptance {
    REJECTED,
    CONFIRMED,
    CONFLICT,
  }

  @Synchronized
  fun request(player: UUID, name: String, now: Long = System.currentTimeMillis()): NetworkEnvelope {
    pending.entries.removeIf { now - it.value.second > MAX_MESSAGE_AGE_MILLIS }
    val request =
        NetworkEnvelope.backend(
            type = MessageType.BACKEND_ID_REQUEST,
            backendId = id,
            originPlayerId = player,
            senderName = name,
            content = "IDENTIFY",
            timestamp = now,
        )
    pending[player] = request.messageId to now
    return request
  }

  @Synchronized
  fun accept(
      envelope: NetworkEnvelope,
      carrier: UUID,
      now: Long = System.currentTimeMillis(),
  ): Acceptance {
    val request = pending[carrier] ?: return Acceptance.REJECTED
    if (
        envelope.type != MessageType.BACKEND_ID ||
            envelope.originKind != MessageOrigin.PROXY ||
            envelope.originBackend != PROXY_ORIGIN_BACKEND ||
            !envelope.isFresh(now) ||
            envelope.targetPlayerId != carrier ||
            envelope.replyToMessageId != request.first ||
            now - request.second > MAX_MESSAGE_AGE_MILLIS ||
            envelope.content.isBlank() ||
            envelope.content.length > 64 ||
            envelope.content.any { it.isWhitespace() || it.isISOControl() } ||
            envelope.content == PROXY_ORIGIN_BACKEND
    )
        return Acceptance.REJECTED
    pending.remove(carrier)
    if (conflicted || (adoptedId != null && adoptedId != envelope.content)) {
      conflicted = true
      confirmed = false
      return Acceptance.CONFLICT
    }
    id = envelope.content
    adoptedId = id
    confirmed = true
    return Acceptance.CONFIRMED
  }

  @Synchronized
  fun forget(player: UUID) {
    pending.remove(player)
  }
}
