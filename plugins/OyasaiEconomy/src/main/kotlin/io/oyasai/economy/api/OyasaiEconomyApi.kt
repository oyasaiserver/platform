package io.oyasai.economy.api

import java.util.UUID
import java.util.concurrent.CompletableFuture

/** Obtain the single provider from Bukkit ServicesManager. Amounts are whole units. */
interface OyasaiEconomyApi {
  fun currencies(): Set<String>

  /** null means unavailable, disabled, or an unknown account. Reads never create accounts. */
  fun balance(currency: String, uuid: UUID): Long?

  fun format(currency: String, amount: Long): String

  fun deposit(currency: String, uuid: UUID, amount: Long, notify: Boolean = false): EconomyOperation

  fun withdraw(
      currency: String,
      uuid: UUID,
      amount: Long,
      notify: Boolean = false,
  ): EconomyOperation

  fun set(currency: String, uuid: UUID, amount: Long, notify: Boolean = false): EconomyOperation

  fun reset(currency: String, uuid: UUID, notify: Boolean = false): EconomyOperation

  fun transfer(
      currency: String,
      from: UUID,
      to: UUID,
      amount: Long,
      notify: Boolean = false,
  ): EconomyOperation
}

/**
 * accepted reports the memory/queue decision immediately; completion reports the durable result.
 */
data class EconomyOperation(val accepted: Boolean, val completion: CompletableFuture<EconomyResult>)

sealed interface EconomyResult {
  data class Success(val newBalance: Long, val delta: Long) : EconomyResult

  data class InsufficientFunds(val balance: Long, val required: Long) : EconomyResult

  data class Failed(val reason: String) : EconomyResult
}
