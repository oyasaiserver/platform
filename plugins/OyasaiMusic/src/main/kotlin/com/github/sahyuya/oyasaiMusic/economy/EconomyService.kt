package com.github.sahyuya.oyasaiMusic.economy

import io.oyasai.economy.api.EconomyResult
import io.oyasai.economy.api.OyasaiEconomyApi
import java.util.UUID
import java.util.concurrent.CompletableFuture
import org.bukkit.Bukkit
import org.bukkit.OfflinePlayer
import org.bukkit.entity.Player
import org.bukkit.plugin.Plugin

class EconomyService(private val plugin: Plugin) {
  private fun economy() = Bukkit.getServicesManager().load(OyasaiEconomyApi::class.java)

  fun withdraw(player: Player, amount: Long): PayoutResult {
    val provider = economy() ?: return PayoutResult.Unavailable("経済APIを利用できません")
    return withdrawWithinBalance(provider, player, amount)
  }

  fun deposit(player: Player, amount: Long): PayoutResult {
    val provider = economy() ?: return PayoutResult.Unavailable("経済APIを利用できません")
    return if (provider.deposit("yen", player.uniqueId, amount).accepted) PayoutResult.Success
    else PayoutResult.Failed("入金に失敗しました")
  }

  fun grantPoints(player: Player, amount: Long): CompletableFuture<PayoutResult> =
      tokenPayout(economy(), player.uniqueId, player.name, amount, false)

  fun chargePoints(player: Player, amount: Long): CompletableFuture<PayoutResult> =
      tokenPayout(economy(), player.uniqueId, player.name, amount, true)
}

internal fun tokenPayout(
    provider: OyasaiEconomyApi?,
    uuid: UUID,
    playerName: String,
    amount: Long,
    charge: Boolean,
): CompletableFuture<PayoutResult> {
  if (amount < 0) return CompletableFuture.completedFuture(PayoutResult.Failed("ポイント数が不正です"))
  if (amount == 0L) return CompletableFuture.completedFuture(PayoutResult.Success)
  if (provider == null)
      return CompletableFuture.completedFuture(PayoutResult.Unavailable("経済APIを利用できません"))
  return runCatching {
        (if (charge) provider.withdraw("token", uuid, amount)
            else provider.deposit("token", uuid, amount))
            .completion
            .handle { result, error ->
              when {
                error != null -> PayoutResult.Failed("ポイント処理を保存できませんでした")
                result is EconomyResult.Success -> PayoutResult.Success
                result is EconomyResult.InsufficientFunds ->
                    PayoutResult.Failed("ポイントが不足しています（必要: ${amount}P）")
                else -> PayoutResult.Failed("ポイント処理に失敗しました")
              }
            }
      }
      .getOrElse { CompletableFuture.completedFuture(PayoutResult.Failed("ポイントAPIの呼び出しに失敗しました")) }
}

internal fun withdrawWithinBalance(
    provider: OyasaiEconomyApi,
    player: OfflinePlayer,
    amount: Long,
): PayoutResult {
  if (amount < 0) return PayoutResult.Failed("価格が不正です")
  if (amount == 0L) return PayoutResult.Success
  return if (provider.withdraw("yen", player.uniqueId, amount).accepted) PayoutResult.Success
  else PayoutResult.Failed("所持金不足、または引き落としに失敗しました")
}

sealed interface PayoutResult {
  data object Success : PayoutResult

  data class Unavailable(val reason: String) : PayoutResult

  data class Failed(val reason: String) : PayoutResult
}
