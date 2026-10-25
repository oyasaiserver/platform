package io.oyasai.economy

import java.util.UUID

internal data class BalanceRecord(val name: String?, val balance: Long)

internal data class BalanceWrite(
    val uuid: UUID,
    val name: String?,
    val balance: Long,
    val delta: Long,
    val reason: String,
    val actorUuid: UUID? = null,
    val notificationType: NotificationType? = null,
    val currency: String,
    val source: String? = null,
    val transferId: String? = null,
    val note: String? = null,
    val senderName: String? = null,
)

internal data class MutationContext(
    val actorUuid: UUID? = null,
    val notificationType: NotificationType? = null,
)

internal enum class NotificationType {
  ADD,
  REMOVE,
  SET,
  RECEIVE,
}

internal data class BalanceChange(
    val uuid: UUID,
    val name: String?,
    val oldBalance: Long,
    val newBalance: Long,
    val delta: Long,
    val reason: String,
)

internal data class Transfer(val debit: BalanceChange, val credit: BalanceChange)

internal data class RankedBalance(val uuid: UUID, val record: BalanceRecord)

internal data class PendingNotification(
    val transactionId: Long,
    val targetUuid: UUID,
    val type: NotificationType,
    val delta: Long,
    val balanceAfter: Long,
    val currency: String,
    val senderName: String? = null,
)
