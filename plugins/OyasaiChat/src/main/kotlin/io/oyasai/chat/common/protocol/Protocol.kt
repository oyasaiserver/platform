package io.oyasai.chat.common.protocol

import com.google.gson.GsonBuilder
import java.util.UUID

// PaperとVelocity間のメッセージ形式。
const val PROTOCOL_VERSION: Int = 3
const val MAX_PAYLOAD_LENGTH: Int = 4096
const val MAX_MESSAGE_AGE_MILLIS: Long = 30_000
const val MAX_FUTURE_SKEW_MILLIS: Long = 5_000
const val PROXY_ORIGIN_BACKEND: String = "__velocity_proxy__"

enum class MessageType {
  CHANNEL_MESSAGE,
  PRIVATE_MESSAGE,
  PRIVATE_MESSAGE_RESULT,
  PRIVATE_REPLY_REQUEST,
  PRIVATE_REPLY_STATE,
  PRIVATE_REPLY_UPDATE,
  PRIVATE_TARGET_REQUEST,
  PRIVATE_TARGET_RESULT,
  PRIVATE_MODE_SET,
  PRIVATE_MODE_CLEAR,
  PRIVATE_MODE_REQUEST,
  PRIVATE_MODE_STATE,
  PRESENCE_REQUEST,
  PRESENCE_RESULT,
}

enum class MessageOrigin {
  BACKEND,
  PROXY,
}

data class NetworkEnvelope(
    val protocolVersion: Int = PROTOCOL_VERSION,
    val messageId: UUID = UUID.randomUUID(),
    val replyToMessageId: UUID? = null,
    val type: MessageType,
    val originKind: MessageOrigin = MessageOrigin.BACKEND,
    val originBackend: String,
    val timestamp: Long,
    val channelId: String? = null,
    val networkGroup: String? = null,
    val originBackendSuffix: String? = null,
    val originPlayerId: UUID? = null,
    val targetPlayerId: UUID? = null,
    val targetPlayerName: String? = null,
    val senderName: String,
    val content: String,
) {
  fun isFresh(now: Long = System.currentTimeMillis()): Boolean =
      timestamp >= now - MAX_MESSAGE_AGE_MILLIS && timestamp <= now + MAX_FUTURE_SKEW_MILLIS

  companion object {
    fun backend(
        type: MessageType,
        backendId: String,
        senderName: String,
        content: String,
        replyToMessageId: UUID? = null,
        channelId: String? = null,
        networkGroup: String? = null,
        originBackendSuffix: String? = null,
        originPlayerId: UUID? = null,
        targetPlayerId: UUID? = null,
        targetPlayerName: String? = null,
        timestamp: Long = System.currentTimeMillis(),
    ): NetworkEnvelope =
        NetworkEnvelope(
            type = type,
            originBackend = backendId,
            timestamp = timestamp,
            replyToMessageId = replyToMessageId,
            channelId = channelId,
            networkGroup = networkGroup,
            originBackendSuffix = originBackendSuffix,
            originPlayerId = originPlayerId,
            targetPlayerId = targetPlayerId,
            targetPlayerName = targetPlayerName,
            senderName = senderName,
            content = content,
        )

    fun proxy(
        type: MessageType,
        content: String,
        replyToMessageId: UUID? = null,
        originPlayerId: UUID? = null,
        targetPlayerId: UUID? = null,
        targetPlayerName: String? = null,
        senderName: String = "OyasaiChat",
        timestamp: Long = System.currentTimeMillis(),
    ): NetworkEnvelope =
        NetworkEnvelope(
            type = type,
            originKind = MessageOrigin.PROXY,
            originBackend = PROXY_ORIGIN_BACKEND,
            timestamp = timestamp,
            replyToMessageId = replyToMessageId,
            originPlayerId = originPlayerId,
            targetPlayerId = targetPlayerId,
            targetPlayerName = targetPlayerName,
            senderName = senderName,
            content = content,
        )
  }
}

object EnvelopeCodec {
  private val gson = GsonBuilder().serializeNulls().create()

  fun encode(envelope: NetworkEnvelope): ByteArray =
      gson.toJson(envelope).toByteArray(Charsets.UTF_8)

  fun decode(bytes: ByteArray): NetworkEnvelope =
      gson.fromJson(String(bytes, Charsets.UTF_8), NetworkEnvelope::class.java)
}

/** Proxy全体のコマンド名候補を短く保持する変換処理。 */
object PresenceSnapshotCodec {
  fun encode(names: Collection<String>): String {
    val result = StringBuilder()
    names
        .map(String::trim)
        .filter { it.isNotEmpty() }
        .distinct()
        .sorted()
        .forEach { name ->
          val additional = name.length + if (result.isEmpty()) 0 else 1
          if (result.length + additional <= MAX_PAYLOAD_LENGTH) {
            if (result.isNotEmpty()) result.append('\n')
            result.append(name)
          }
        }
    return result.toString()
  }

  fun decode(content: String): Set<String> =
      content
          .lineSequence()
          .map(String::trim)
          .filter(String::isNotEmpty)
          .toSet()
}

class MessageDeduplicator(
    private val maxEntries: Int = 4096,
    private val ttlMillis: Long = MAX_MESSAGE_AGE_MILLIS * 2,
) {
  private val seen = LinkedHashMap<UUID, Long>()

  @Synchronized
  fun firstSeen(id: UUID, now: Long = System.currentTimeMillis()): Boolean {
    seen.entries.removeIf { now - it.value > ttlMillis }
    if (seen.containsKey(id)) return false
    seen[id] = now
    while (seen.size > maxEntries) seen.remove(seen.entries.first().key)
    return true
  }
}
