package io.oyasai.chat.common.protocol

import com.google.gson.GsonBuilder
import com.google.gson.JsonObject
import com.google.gson.JsonParser
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
    val originBackendPrefix: String? = null,
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
        originBackendPrefix: String? = null,
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
            originBackendPrefix = originBackendPrefix,
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

// Validation処理はAI生成
object EnvelopeCodec {
  private val gson = GsonBuilder().serializeNulls().create()

  private val backendTypes =
      setOf(
          MessageType.CHANNEL_MESSAGE,
          MessageType.PRIVATE_MESSAGE,
          MessageType.PRIVATE_MESSAGE_RESULT,
          MessageType.PRIVATE_REPLY_REQUEST,
          MessageType.PRIVATE_REPLY_UPDATE,
          MessageType.PRIVATE_TARGET_REQUEST,
          MessageType.PRIVATE_MODE_SET,
          MessageType.PRIVATE_MODE_CLEAR,
          MessageType.PRIVATE_MODE_REQUEST,
          MessageType.PRESENCE_REQUEST,
      )

  private val proxyTypes =
      setOf(
          MessageType.PRIVATE_MESSAGE_RESULT,
          MessageType.PRIVATE_REPLY_STATE,
          MessageType.PRIVATE_TARGET_RESULT,
          MessageType.PRIVATE_MODE_STATE,
          MessageType.PRESENCE_RESULT,
      )

  fun encode(envelope: NetworkEnvelope): ByteArray =
      gson.toJson(envelope).toByteArray(Charsets.UTF_8)

  fun decode(bytes: ByteArray): NetworkEnvelope {
    val json =
        runCatching { JsonParser.parseString(String(bytes, Charsets.UTF_8)) }
            .getOrElse { throw IllegalArgumentException("Envelope is not valid JSON.", it) }
    require(json.isJsonObject) { "Envelope must be a JSON object." }
    val objectJson = json.asJsonObject

    require(requiredInt(objectJson, "protocolVersion") == PROTOCOL_VERSION) {
      "Unsupported protocol version."
    }
    val type = requiredEnum<MessageType>(objectJson, "type")
    val origin = requiredEnum<MessageOrigin>(objectJson, "originKind")
    val originBackend = requiredString(objectJson, "originBackend")
    require(originBackend != PROXY_ORIGIN_BACKEND || origin == MessageOrigin.PROXY) {
      "Backend origin must not use the proxy origin name."
    }
    require(origin != MessageOrigin.PROXY || originBackend == PROXY_ORIGIN_BACKEND) {
      "Proxy origin must use the proxy origin name."
    }
    requiredLong(objectJson, "timestamp")
    requiredString(objectJson, "senderName")
    val content = requiredString(objectJson, "content")
    require(content.length <= MAX_PAYLOAD_LENGTH) { "Envelope content is too long." }

    validateOptionalUuid(objectJson, "messageId", required = true)
    validateOptionalUuid(objectJson, "replyToMessageId")
    validateOptionalUuid(objectJson, "originPlayerId")
    validateOptionalUuid(objectJson, "targetPlayerId")
    validateType(type, origin, objectJson)

    return gson.fromJson(objectJson, NetworkEnvelope::class.java)
  }

  private inline fun <reified T : Enum<T>> requiredEnum(json: JsonObject, name: String): T {
    val value = requiredString(json, name)
    return runCatching { enumValueOf<T>(value) }
        .getOrElse { throw IllegalArgumentException("Unknown $name '$value'.", it) }
  }

  private fun requiredString(json: JsonObject, name: String): String {
    val value = json.get(name)
    require(value != null && value.isJsonPrimitive && value.asJsonPrimitive.isString) {
      "Envelope field '$name' must be a string."
    }
    return value.asString
  }

  private fun requiredInt(json: JsonObject, name: String): Int {
    val value = requiredNumber(json, name)
    return value.toIntOrNull()
        ?: throw IllegalArgumentException("Envelope field '$name' must be an integer.")
  }

  private fun requiredLong(json: JsonObject, name: String): Long {
    val value = requiredNumber(json, name)
    return value.toLongOrNull()
        ?: throw IllegalArgumentException("Envelope field '$name' must be an integer.")
  }

  private fun requiredNumber(json: JsonObject, name: String): String {
    val value = json.get(name)
    require(value != null && value.isJsonPrimitive && value.asJsonPrimitive.isNumber) {
      "Envelope field '$name' must be a number."
    }
    return value.asString
  }

  private fun validateOptionalUuid(json: JsonObject, name: String, required: Boolean = false) {
    val value = json.get(name)
    if (value == null || value.isJsonNull) {
      require(!required) { "Envelope field '$name' is required." }
      return
    }
    require(value.isJsonPrimitive && value.asJsonPrimitive.isString) {
      "Envelope field '$name' must be a UUID string."
    }
    runCatching { UUID.fromString(value.asString) }
        .getOrElse { throw IllegalArgumentException("Envelope field '$name' must be a UUID.", it) }
  }

  private fun validateType(type: MessageType, origin: MessageOrigin, json: JsonObject) {
    require(if (origin == MessageOrigin.BACKEND) type in backendTypes else type in proxyTypes) {
      "Message type '$type' is not allowed for origin '$origin'."
    }
    when (type) {
      MessageType.CHANNEL_MESSAGE -> {
        requiredString(json, "channelId")
        requiredString(json, "networkGroup")
      }
      MessageType.PRIVATE_MESSAGE -> {
        requireUuid(json, "originPlayerId")
        requireUuidOrString(json, "targetPlayerId", "targetPlayerName")
      }
      MessageType.PRIVATE_MESSAGE_RESULT -> requireUuid(json, "targetPlayerId")
      MessageType.PRIVATE_REPLY_REQUEST,
      MessageType.PRIVATE_MODE_CLEAR,
      MessageType.PRIVATE_MODE_REQUEST,
      MessageType.PRESENCE_REQUEST -> requireUuid(json, "originPlayerId")
      MessageType.PRIVATE_TARGET_REQUEST -> {
        requireUuid(json, "originPlayerId")
        requiredString(json, "targetPlayerName")
      }
      MessageType.PRIVATE_REPLY_UPDATE,
      MessageType.PRIVATE_MODE_SET -> {
        requireUuid(json, "originPlayerId")
        requireUuid(json, "targetPlayerId")
      }
      MessageType.PRIVATE_REPLY_STATE,
      MessageType.PRIVATE_TARGET_RESULT,
      MessageType.PRIVATE_MODE_STATE,
      MessageType.PRESENCE_RESULT -> requireUuid(json, "targetPlayerId")
    }
  }

  private fun requireUuid(json: JsonObject, name: String) {
    validateOptionalUuid(json, name, required = true)
  }

  private fun requireUuidOrString(json: JsonObject, uuidName: String, stringName: String) {
    val uuid = json.get(uuidName)
    val string = json.get(stringName)
    val hasUuid = uuid != null && !uuid.isJsonNull
    val hasString = string != null && !string.isJsonNull
    require(hasUuid || hasString) { "Envelope requires '$uuidName' or '$stringName'." }
    if (hasUuid) validateOptionalUuid(json, uuidName)
    if (hasString) requiredString(json, stringName)
  }
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
      content.lineSequence().map(String::trim).filter(String::isNotEmpty).toSet()
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
