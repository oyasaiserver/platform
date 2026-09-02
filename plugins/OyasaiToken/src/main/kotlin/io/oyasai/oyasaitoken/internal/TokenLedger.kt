package io.oyasai.oyasaitoken.internal

import java.util.UUID

/**
 * In-memory balance view and the only place that may change it.
 *
 * The [persist] callback must enqueue all supplied writes as one FIFO persistence job. The callback
 * is invoked while this ledger's lock is held, so a successful enqueue and the matching memory
 * update have one ordering point for every mutation, including transfers.
 */
internal class TokenLedger(
    private val defaultBalance: () -> Long,
    private val persist: (List<BalanceWrite>) -> Boolean,
) {
  private val lock = Any()
  private val balances = mutableMapOf<UUID, BalanceRecord>()

  fun replaceAll(loaded: Map<UUID, BalanceRecord>) {
    synchronized(lock) {
      balances.clear()
      balances.putAll(loaded)
    }
  }

  fun size(): Int = synchronized(lock) { balances.size }

  fun isNotEmpty(): Boolean = synchronized(lock) { balances.isNotEmpty() }

  fun nameOf(uuid: UUID): String? = synchronized(lock) { balances[uuid]?.name }

  /**
   * Returns the cached balance or the configured default. If an unknown account cannot enqueue its
   * default-balance write, this deliberately does not add it to [balances]; a failed read-side
   * initialization must not create an in-memory state that SQLite has not accepted.
   */
  fun balance(uuid: UUID, name: String?, persistIfMissing: Boolean): Long {
    synchronized(lock) {
      val current = balances[uuid]
      if (current == null) {
        val created = BalanceRecord(name, defaultBalance())
        if (persistIfMissing && persist(listOf(created.defaultWrite(uuid)))) {
          balances[uuid] = created
        }
        return created.balance
      }

      if (
          persistIfMissing &&
              !name.isNullOrBlank() &&
              current.name != name &&
              persist(listOf(current.nameUpdate(uuid, name)))
      ) {
        balances[uuid] = current.copy(name = name)
      }
      return current.balance
    }
  }

  fun set(uuid: UUID, name: String?, amount: Long): BalanceChange? {
    require(amount >= 0) { "amount must be non-negative" }
    return synchronized(lock) {
      val current = account(uuid, name)
      val write =
          BalanceWrite(
              uuid = uuid,
              name = name ?: current.record.name,
              balance = amount,
              delta = amount - current.record.balance,
              reason = "set",
          )
      commit(
          current.initialWrite?.let { listOf(it, write) } ?: listOf(write),
          mapOf(uuid to BalanceRecord(write.name, amount)),
      ) {
        BalanceChange(
            uuid,
            current.record.name,
            current.record.balance,
            amount,
            write.delta,
            "set",
        )
      }
    }
  }

  fun add(uuid: UUID, name: String?, amount: Long): BalanceChange? {
    if (amount < 0) return if (amount == Long.MIN_VALUE) null else remove(uuid, name, -amount)
    return synchronized(lock) {
      val current = account(uuid, name)
      val next = current.record.balance.checkedAdd(amount) ?: return@synchronized null
      val write =
          BalanceWrite(
              uuid = uuid,
              name = name ?: current.record.name,
              balance = next,
              delta = amount,
              reason = "add",
          )
      commit(
          current.initialWrite?.let { listOf(it, write) } ?: listOf(write),
          mapOf(uuid to BalanceRecord(write.name, next)),
      ) {
        BalanceChange(
            uuid,
            current.record.name,
            current.record.balance,
            next,
            amount,
            "add",
        )
      }
    }
  }

  fun remove(uuid: UUID, name: String?, amount: Long): BalanceChange? {
    if (amount < 0) return if (amount == Long.MIN_VALUE) null else add(uuid, name, -amount)
    return synchronized(lock) {
      val current = account(uuid, name)
      if (current.record.balance < amount) return@synchronized null
      val next = current.record.balance - amount
      val write =
          BalanceWrite(
              uuid = uuid,
              name = name ?: current.record.name,
              balance = next,
              delta = -amount,
              reason = "remove",
          )
      commit(
          current.initialWrite?.let { listOf(it, write) } ?: listOf(write),
          mapOf(uuid to BalanceRecord(write.name, next)),
      ) {
        BalanceChange(
            uuid,
            current.record.name,
            current.record.balance,
            next,
            -amount,
            "remove",
        )
      }
    }
  }

  /**
   * Accepts both halves of a transfer together. No balance is changed in memory unless the single
   * persistence job containing every write was accepted by the FIFO writer.
   */
  fun transfer(
      sourceUuid: UUID,
      sourceName: String?,
      targetUuid: UUID,
      targetName: String?,
      amount: Long,
  ): Transfer? {
    require(amount > 0) { "amount must be positive" }
    return synchronized(lock) {
      val source = account(sourceUuid, sourceName)
      if (source.record.balance < amount) return@synchronized null

      if (sourceUuid == targetUuid) {
        return@synchronized transferToSelf(source, sourceName, targetName, amount)
      }

      val target = account(targetUuid, targetName)
      val sourceNext = source.record.balance - amount
      val targetNext = target.record.balance.checkedAdd(amount) ?: return@synchronized null
      val sourceWrite =
          BalanceWrite(
              sourceUuid,
              sourceName ?: source.record.name,
              sourceNext,
              -amount,
              "remove",
          )
      val targetWrite =
          BalanceWrite(
              targetUuid,
              targetName ?: target.record.name,
              targetNext,
              amount,
              "add",
          )
      val writes = buildList {
        source.initialWrite?.let(::add)
        target.initialWrite?.let(::add)
        add(sourceWrite)
        add(targetWrite)
      }
      commit(
          writes,
          mapOf(
              sourceUuid to BalanceRecord(sourceWrite.name, sourceNext),
              targetUuid to BalanceRecord(targetWrite.name, targetNext),
          ),
      ) {
        Transfer(
            BalanceChange(
                sourceUuid,
                source.record.name,
                source.record.balance,
                sourceNext,
                -amount,
                "remove",
            ),
            BalanceChange(
                targetUuid,
                target.record.name,
                target.record.balance,
                targetNext,
                amount,
                "add",
            ),
        )
      }
    }
  }

  fun top(limit: Int): List<RankedBalance> {
    return synchronized(lock) {
      balances.entries
          .sortedByDescending { it.value.balance }
          .take(limit.coerceIn(1, 50))
          .map { (uuid, record) -> RankedBalance(uuid, record) }
    }
  }

  private fun transferToSelf(
      source: Account,
      sourceName: String?,
      targetName: String?,
      amount: Long,
  ): Transfer? {
    val debited = source.record.balance - amount
    val sourceWrite =
        BalanceWrite(
            source.uuid,
            sourceName ?: source.record.name,
            debited,
            -amount,
            "remove",
        )
    val targetWrite =
        BalanceWrite(
            source.uuid,
            targetName ?: sourceWrite.name,
            source.record.balance,
            amount,
            "add",
        )
    val writes = buildList {
      source.initialWrite?.let(::add)
      add(sourceWrite)
      add(targetWrite)
    }
    return commit(
        writes,
        mapOf(source.uuid to BalanceRecord(targetWrite.name, source.record.balance)),
    ) {
      Transfer(
          BalanceChange(
              source.uuid,
              source.record.name,
              source.record.balance,
              debited,
              -amount,
              "remove",
          ),
          BalanceChange(
              source.uuid,
              source.record.name,
              debited,
              source.record.balance,
              amount,
              "add",
          ),
      )
    }
  }

  private fun account(uuid: UUID, name: String?): Account {
    val existing = balances[uuid]
    if (existing != null) return Account(uuid, existing, null)
    val created = BalanceRecord(name, defaultBalance())
    return Account(uuid, created, created.defaultWrite(uuid))
  }

  private inline fun <T> commit(
      writes: List<BalanceWrite>,
      updates: Map<UUID, BalanceRecord>,
      accepted: () -> T,
  ): T? {
    if (!persist(writes)) return null
    balances.putAll(updates)
    return accepted()
  }

  private fun BalanceRecord.defaultWrite(uuid: UUID): BalanceWrite =
      BalanceWrite(uuid, name, balance, 0, "default")

  private fun BalanceRecord.nameUpdate(uuid: UUID, name: String): BalanceWrite =
      BalanceWrite(uuid, name, balance, 0, "name-update")

  private fun Long.checkedAdd(amount: Long): Long? =
      runCatching { Math.addExact(this, amount) }.getOrNull()

  private data class Account(
      val uuid: UUID,
      val record: BalanceRecord,
      val initialWrite: BalanceWrite?,
  )
}

internal data class BalanceRecord(val name: String?, val balance: Long)

internal data class BalanceWrite(
    val uuid: UUID,
    val name: String?,
    val balance: Long,
    val delta: Long,
    val reason: String,
    val actorUuid: UUID? = null,
)

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
