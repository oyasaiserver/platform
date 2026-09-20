package com.vexsoftware.votifier.model

import com.google.gson.JsonElement
import com.google.gson.JsonObject
import java.util.Arrays
import java.util.Base64
import java.util.UUID

/**
 * Compatibility model for plugins compiled against NuVotifier's public API. This implementation is
 * independent; its surface intentionally matches 2.7.2.
 */
open class Vote {
  private var serviceName: String? = null
  private var username: String? = null
  private var address: String? = null
  private var timeStamp: String? = null
  private var additionalData: ByteArray? = null
  private var playerUuid: UUID? = null

  constructor()

  constructor(serviceName: String?, username: String?, address: String?, timeStamp: String?) {
    this.serviceName = serviceName
    this.username = username
    this.address = address
    this.timeStamp = timeStamp
  }

  constructor(
      serviceName: String?,
      username: String?,
      address: String?,
      timeStamp: String?,
      additionalData: ByteArray?,
  ) : this(serviceName, username, address, timeStamp) {
    this.additionalData = additionalData?.clone()
  }

  constructor(
      vote: Vote
  ) : this(
      vote.serviceName,
      vote.username,
      vote.address,
      vote.timeStamp,
      vote.additionalData?.clone(),
  ) {
    playerUuid = vote.playerUuid
  }

  constructor(
      json: JsonObject
  ) : this(
      json["serviceName"].asString,
      json["username"].asString,
      json["address"].asString,
      timestamp(json["timestamp"]),
  ) {
    if (json.has("additionalData"))
        additionalData = Base64.getDecoder().decode(json["additionalData"].asString)
    playerUuid = json.get("uuid")?.asString?.let(UUID::fromString)
  }

  internal fun playerUuid(): UUID? = playerUuid

  open fun setServiceName(serviceName: String?) {
    this.serviceName = serviceName
  }

  open fun getServiceName(): String? = serviceName

  open fun setUsername(username: String?) {
    this.username = username
  }

  open fun getUsername(): String? = username

  open fun setAddress(address: String?) {
    this.address = address
  }

  open fun getAddress(): String? = address

  open fun setTimeStamp(timeStamp: String?) {
    this.timeStamp = timeStamp
  }

  open fun getTimeStamp(): String? = timeStamp

  open fun getAdditionalData(): ByteArray? = additionalData?.clone()

  open fun serialize(): JsonObject =
      JsonObject().also {
        it.addProperty("serviceName", serviceName)
        it.addProperty("username", username)
        it.addProperty("address", address)
        it.addProperty("timestamp", timeStamp)
        additionalData?.let { data ->
          it.addProperty("additionalData", Base64.getEncoder().encodeToString(data))
        }
      }

  open override fun toString(): String =
      "Vote (from: $serviceName username: $username address: $address timeStamp: $timeStamp additionalData: ${additionalData?.let { Base64.getEncoder().encodeToString(it) } ?: "null"})"

  open override fun equals(other: Any?): Boolean =
      other is Vote &&
          serviceName == other.serviceName &&
          username == other.username &&
          address == other.address &&
          timeStamp == other.timeStamp &&
          Arrays.equals(additionalData, other.additionalData)

  open override fun hashCode(): Int {
    var result = serviceName?.hashCode() ?: 0
    result = 31 * result + (username?.hashCode() ?: 0)
    result = 31 * result + (address?.hashCode() ?: 0)
    result = 31 * result + (timeStamp?.hashCode() ?: 0)
    return 31 * result + Arrays.hashCode(additionalData)
  }

  private companion object {
    fun timestamp(value: JsonElement): String =
        runCatching { value.asLong.toString() }.getOrElse { value.asString }
  }
}
