package io.oyasai.oyasaiAdminTools.punishment

import java.util.UUID

data class PunishmentRecord(
    val id: Long = 0,
    val uuid: UUID,
    val name: String,
    val type: PunishmentType,
    val reason: String,
    val operator: String,
    val start: Long,
    val end: Long?,
    val active: Boolean,
) {
  fun isExpired(now: Long = System.currentTimeMillis()): Boolean {
    return end != null && end <= now
  }
}
