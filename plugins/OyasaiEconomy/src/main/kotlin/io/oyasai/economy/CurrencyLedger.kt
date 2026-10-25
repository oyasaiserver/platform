package io.oyasai.economy

import java.util.Locale
import java.util.UUID
import java.util.concurrent.CompletableFuture

/** All currencies share this arithmetic and FIFO acceptance point; SQLite stays on its worker. */
internal class CurrencyLedger(
    var policy: CurrencyPolicy,
    private val persist: (List<BalanceWrite>, CompletableFuture<Boolean>?) -> Boolean,
    private val lock: Any = Any(),
) {
  private val balances = mutableMapOf<UUID, BalanceRecord>()
  private val nameIndex = mutableMapOf<String, MutableSet<UUID>>()

  fun replaceAll(loaded: Map<UUID, BalanceRecord>) =
      synchronized(lock) {
        balances.clear()
        nameIndex.clear()
        loaded.forEach { (uuid, record) -> putRecord(uuid, record) }
      }

  fun size() = synchronized(lock) { balances.size }

  fun nameOf(uuid: UUID) = synchronized(lock) { balances[uuid]?.name }

  fun contains(uuid: UUID) = synchronized(lock) { uuid in balances }

  fun snapshot() = synchronized(lock) { balances.toMap() }

  fun resolve(name: String): UUID? =
      synchronized(lock) {
        val matches = nameIndex[name.lowercase(Locale.ROOT)].orEmpty()
        require(matches.size < 2) { "同じ名前の口座が複数あります: $name" }
        matches.firstOrNull()
      }

  fun balance(uuid: UUID): Long? = synchronized(lock) { balances[uuid]?.balance }

  fun join(uuid: UUID, name: String?): Boolean =
      synchronized(lock) {
        val existing = balances[uuid]
        val record =
            BalanceRecord(
                name?.takeIf { it.isNotBlank() } ?: existing?.name,
                existing?.balance ?: policy.initial,
            )
        val updates = mutableMapOf(uuid to record)
        val writes = mutableListOf<BalanceWrite>()
        if (!name.isNullOrBlank()) {
          nameIndex[name.lowercase(Locale.ROOT)]
              .orEmpty()
              .filter { it != uuid }
              .forEach { id ->
                val cleared = balances.getValue(id).copy(name = null)
                updates[id] = cleared
                writes += write(id, cleared, 0, "name-update")
              }
        }
        if (existing == null) writes += write(uuid, record, record.balance, "initial")
        else if (existing.name != record.name) writes += write(uuid, record, 0, "name-update")
        if (writes.isEmpty()) return@synchronized true
        commit(writes, updates, null) { true } ?: false
      }

  fun change(
      uuid: UUID,
      amount: Long,
      reason: String,
      context: MutationContext = MutationContext(),
      completion: CompletableFuture<Boolean>? = null,
      before: (BalanceChange) -> Boolean = { true },
  ): BalanceChange? =
      synchronized(lock) {
        if (!policy.enabled || amount < 0) return@synchronized reject(completion)
        val current = balances[uuid] ?: return@synchronized reject(completion)
        val next =
            when (reason) {
              "api_deposit",
              "admin_give" -> runCatching { Math.addExact(current.balance, amount) }.getOrNull()
              "api_withdraw",
              "admin_take" ->
                  runCatching { Math.subtractExact(current.balance, amount) }.getOrNull()
              "admin_set",
              "admin_reset" -> amount
              else -> error("未対応の操作: $reason")
            } ?: return@synchronized reject(completion)
        if (next !in 0..policy.maximum) return@synchronized reject(completion)
        val change =
            BalanceChange(uuid, current.name, current.balance, next, next - current.balance, reason)
        if (change.delta == 0L) {
          completion?.complete(true)
          return@synchronized change
        }
        if (!before(change)) return@synchronized reject(completion)
        val updated = current.copy(balance = next)
        commit(
            listOf(write(uuid, updated, change.delta, reason, context)),
            mapOf(uuid to updated),
            completion,
        ) {
          change
        }
      }

  fun transfer(
      from: UUID,
      to: UUID,
      amount: Long,
      completion: CompletableFuture<Boolean>? = null,
      actor: UUID? = null,
      notifyReceive: Boolean = false,
      before: (Transfer) -> Boolean = { true },
  ): Transfer? =
      synchronized(lock) {
        if (!policy.enabled || amount < 0 || from == to) return@synchronized reject(completion)
        val a = balances[from] ?: return@synchronized reject(completion)
        val b = balances[to] ?: return@synchronized reject(completion)
        val debit =
            runCatching { Math.subtractExact(a.balance, amount) }.getOrNull()
                ?: return@synchronized reject(completion)
        val credit =
            runCatching { Math.addExact(b.balance, amount) }.getOrNull()
                ?: return@synchronized reject(completion)
        if (debit < 0 || credit > policy.maximum) return@synchronized reject(completion)
        val result =
            Transfer(
                BalanceChange(from, a.name, a.balance, debit, -amount, "transfer"),
                BalanceChange(to, b.name, b.balance, credit, amount, "transfer"),
            )
        if (amount > 0 && amount !in policy.transferMinimum..policy.transferMaximum)
            return@synchronized reject(completion)
        if (amount == 0L) {
          completion?.complete(true)
          return@synchronized result
        }
        if (!before(result)) return@synchronized reject(completion)
        val transferId = UUID.randomUUID().toString()
        val source = a.copy(balance = debit)
        val target = b.copy(balance = credit)
        val writes =
            listOf(
                write(from, source, -amount, "transfer", MutationContext(actor))
                    .copy(transferId = transferId),
                write(
                        to,
                        target,
                        amount,
                        "transfer",
                        MutationContext(from, NotificationType.RECEIVE.takeIf { notifyReceive }),
                    )
                    .copy(transferId = transferId, senderName = a.name ?: from.toString()),
            )
        commit(writes, mapOf(from to source, to to target), completion) { result }
      }

  fun top(limit: Int, offset: Int = 0) =
      synchronized(lock) {
        balances.entries
            .sortedWith(
                compareByDescending<Map.Entry<UUID, BalanceRecord>> { it.value.balance }
                    .thenBy { it.key }
            )
            .drop(offset)
            .take(limit)
            .map { RankedBalance(it.key, it.value) }
      }

  private fun write(
      uuid: UUID,
      r: BalanceRecord,
      delta: Long,
      reason: String,
      context: MutationContext = MutationContext(),
  ) =
      BalanceWrite(
          uuid,
          r.name,
          r.balance,
          delta,
          reason,
          context.actorUuid,
          context.notificationType,
          policy.id,
      )

  private fun <T> commit(
      writes: List<BalanceWrite>,
      updates: Map<UUID, BalanceRecord>,
      completion: CompletableFuture<Boolean>?,
      accepted: () -> T,
  ): T? {
    if (!persist(writes, completion)) return reject(completion)
    updates.forEach { (uuid, record) -> putRecord(uuid, record) }
    return accepted()
  }

  private fun putRecord(uuid: UUID, record: BalanceRecord) {
    balances[uuid]?.name?.lowercase(Locale.ROOT)?.let { old ->
      nameIndex[old]?.let { ids ->
        ids.remove(uuid)
        if (ids.isEmpty()) nameIndex.remove(old)
      }
    }
    balances[uuid] = record
    record.name?.lowercase(Locale.ROOT)?.let { name ->
      nameIndex.getOrPut(name) { mutableSetOf() }.add(uuid)
    }
  }

  private fun reject(completion: CompletableFuture<Boolean>?): Nothing? {
    completion?.complete(false)
    return null
  }
}
