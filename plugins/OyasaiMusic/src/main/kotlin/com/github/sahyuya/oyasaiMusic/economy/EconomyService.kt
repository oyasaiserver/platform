package com.github.sahyuya.oyasaiMusic.economy

import io.oyasai.economy.api.EconomyResult
import io.oyasai.economy.api.OyasaiEconomyApi
import java.util.UUID
import java.util.concurrent.CompletableFuture
import org.bukkit.Bukkit

class EconomyService {
  private fun economy() = Bukkit.getServicesManager().load(OyasaiEconomyApi::class.java)

  fun transfer(
      uuid: UUID,
      currency: String,
      amount: Long,
      charge: Boolean,
  ): CompletableFuture<PayoutResult> = completePayout(economy(), uuid, currency, amount, charge)
}

internal fun completePayout(
    provider: OyasaiEconomyApi?,
    uuid: UUID,
    currency: String,
    amount: Long,
    charge: Boolean,
): CompletableFuture<PayoutResult> {
  if (amount < 0) return CompletableFuture.completedFuture(PayoutResult.Failed("金額が不正です"))
  if (amount == 0L) return CompletableFuture.completedFuture(PayoutResult.Success)
  if (provider == null)
      return CompletableFuture.completedFuture(PayoutResult.Unavailable("経済APIを利用できません"))
  return try {
    val operation =
        if (charge) provider.withdraw(currency, uuid, amount)
        else provider.deposit(currency, uuid, amount)
    operation.completion
        .thenApply<PayoutResult> { result ->
          when (result) {
            is EconomyResult.Success -> PayoutResult.Success
            is EconomyResult.InsufficientFunds -> PayoutResult.Failed("残高が不足しています")
            is EconomyResult.Failed -> PayoutResult.Failed("経済処理に失敗しました")
          }
        }
        .orTimeout(30, java.util.concurrent.TimeUnit.SECONDS)
        .exceptionally { PayoutResult.Unknown("経済処理の結果を確認できません。管理者による照合が必要です") }
  } catch (error: Exception) {
    CompletableFuture.completedFuture(PayoutResult.Unknown("経済APIの応答が不明です。管理者による照合が必要です"))
  }
}

sealed interface PayoutResult {
  data object Success : PayoutResult

  data class Unavailable(val reason: String) : PayoutResult

  data class Failed(val reason: String) : PayoutResult

  data class Unknown(val reason: String) : PayoutResult
}
