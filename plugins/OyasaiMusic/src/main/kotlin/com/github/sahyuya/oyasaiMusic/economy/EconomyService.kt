package com.github.sahyuya.oyasaiMusic.economy

import net.milkbowl.vault.economy.Economy
import org.bukkit.Bukkit
import org.bukkit.OfflinePlayer
import org.bukkit.entity.Player
import org.bukkit.plugin.Plugin

/** Vault money and commit-confirmed OyasaiTokens points. */
class EconomyService(private val plugin: Plugin) {

  private fun economy(): Economy? =
      Bukkit.getServicesManager().getRegistration(Economy::class.java)?.provider

  fun withdraw(player: Player, amount: Long): PayoutResult {
    if (amount < 0) return PayoutResult.Failed("価格が不正です")
    if (amount == 0L) return PayoutResult.Success
    val provider = economy() ?: return PayoutResult.Unavailable("Vault の経済サービスが見つかりません")
    return withdrawWithinBalance(provider, player, amount)
  }

  fun deposit(player: Player, amount: Long): PayoutResult {
    if (amount <= 0) return PayoutResult.Success
    val provider = economy() ?: return PayoutResult.Unavailable("Vault の経済サービスが見つかりません")
    val response = provider.depositPlayer(player, amount.toDouble())
    return if (response.transactionSuccess()) PayoutResult.Success
    else PayoutResult.Failed(response.errorMessage.ifBlank { "入金に失敗しました" })
  }

  private fun tokenService(): io.oyasai.oyasaitoken.api.OyasaiTokenService? =
      if (Bukkit.getPluginManager().isPluginEnabled("TokenManager"))
          Bukkit.getServicesManager().load(io.oyasai.oyasaitoken.api.OyasaiTokenService::class.java)
      else null

  fun grantPoints(
      player: Player,
      amount: Long,
  ): java.util.concurrent.CompletableFuture<PayoutResult> = movePoints(player, amount, false)

  fun chargePoints(
      player: Player,
      amount: Long,
  ): java.util.concurrent.CompletableFuture<PayoutResult> = movePoints(player, amount, true)

  private fun movePoints(
      player: Player,
      amount: Long,
      charge: Boolean,
  ): java.util.concurrent.CompletableFuture<PayoutResult> =
      tokenPayout(
          runCatching { tokenService() }.getOrNull(),
          player.uniqueId,
          player.name,
          amount,
          charge,
      )
}

internal fun tokenPayout(
    provider: io.oyasai.oyasaitoken.api.OyasaiTokenService?,
    uuid: java.util.UUID,
    playerName: String,
    amount: Long,
    charge: Boolean,
): java.util.concurrent.CompletableFuture<PayoutResult> {
  if (amount < 0)
      return java.util.concurrent.CompletableFuture.completedFuture(
          PayoutResult.Failed("ポイント数が不正です")
      )
  if (amount == 0L)
      return java.util.concurrent.CompletableFuture.completedFuture(PayoutResult.Success)
  if (provider == null)
      return java.util.concurrent.CompletableFuture.completedFuture(
          PayoutResult.Unavailable("OyasaiTokensのAPIが利用できません")
      )
  return runCatching {
        val request =
            io.oyasai.oyasaitoken.api.TokenRequest(
                uuid,
                amount,
                playerName,
                io.oyasai.oyasaitoken.api.Delivery.Silent,
            )
        (if (charge) provider.charge(request) else provider.grant(request)).handle { result, error
          ->
          when {
            error != null -> PayoutResult.Failed("ポイント処理を保存できませんでした")
            result is io.oyasai.oyasaitoken.api.TokenResult.Success -> PayoutResult.Success
            result is io.oyasai.oyasaitoken.api.TokenResult.InsufficientFunds ->
                PayoutResult.Failed("ポイントが不足しています（必要: ${amount}P）")
            else -> PayoutResult.Failed("ポイント処理に失敗しました")
          }
        }
      }
      .getOrElse {
        java.util.concurrent.CompletableFuture.completedFuture(
            PayoutResult.Failed("ポイントAPIの呼び出しに失敗しました")
        )
      }
}

/**
 * Called synchronously by the purchase handler: never yield between check and withdrawal. Some
 * Vault providers permit overdrafts, so withdrawal success alone is insufficient.
 */
internal fun withdrawWithinBalance(
    provider: Economy,
    player: OfflinePlayer,
    amount: Long,
): PayoutResult {
  if (amount < 0) return PayoutResult.Failed("価格が不正です")
  if (amount == 0L) return PayoutResult.Success
  val price = amount.toDouble()
  val balance = provider.getBalance(player)
  if (!balance.isFinite()) return PayoutResult.Failed("所持金を確認できませんでした")
  if (balance < price || !provider.has(player, price)) {
    return PayoutResult.Failed("所持金が不足しています（価格: ${amount}円）")
  }
  val response = provider.withdrawPlayer(player, price)
  return if (response.transactionSuccess()) PayoutResult.Success
  else PayoutResult.Failed(response.errorMessage.orEmpty().ifBlank { "引き落としに失敗しました" })
}

sealed interface PayoutResult {
  data object Success : PayoutResult

  data class Unavailable(val reason: String) : PayoutResult

  data class Failed(val reason: String) : PayoutResult
}
