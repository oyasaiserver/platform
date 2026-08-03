package com.github.sahyuya.oyasaiMusic.economy

import net.milkbowl.vault.economy.Economy
import org.bukkit.Bukkit
import org.bukkit.entity.Player
import org.bukkit.plugin.Plugin

/**
 * 外部の経済プラグインとの境界をまとめるサービス。
 *
 * お金は Vault の Economy サービスを利用する。ポイントは TokenManager ごとの API 差異で
 * 本体が壊れないよう、設定したコンソールコマンド経由で付与する。ポイントコマンドを空欄に した場合はポイントを受け取れないだけで、DB 上の未受取残高は消去しない。
 */
class EconomyService(private val plugin: Plugin, private val pointCommandTemplate: String) {

  private fun economy(): Economy? =
      Bukkit.getServicesManager().getRegistration(Economy::class.java)?.provider

  fun withdraw(player: Player, amount: Long): PayoutResult {
    if (amount <= 0) return PayoutResult.Success
    val provider = economy() ?: return PayoutResult.Unavailable("Vault の経済サービスが見つかりません")
    val response = provider.withdrawPlayer(player, amount.toDouble())
    return if (response.transactionSuccess()) PayoutResult.Success
    else PayoutResult.Failed(response.errorMessage.ifBlank { "残高が不足しているか、引き落としに失敗しました" })
  }

  fun deposit(player: Player, amount: Long): PayoutResult {
    if (amount <= 0) return PayoutResult.Success
    val provider = economy() ?: return PayoutResult.Unavailable("Vault の経済サービスが見つかりません")
    val response = provider.depositPlayer(player, amount.toDouble())
    return if (response.transactionSuccess()) PayoutResult.Success
    else PayoutResult.Failed(response.errorMessage.ifBlank { "入金に失敗しました" })
  }

  /** ポイントは設定済みのコンソールコマンドで付与する。戻り値 false の場合は残高を保持する。 */
  fun grantPoints(player: Player, amount: Long): PayoutResult {
    if (amount <= 0) return PayoutResult.Success
    if (pointCommandTemplate.isBlank()) {
      return PayoutResult.Unavailable("ポイント付与コマンドが未設定です")
    }
    val command =
        pointCommandTemplate
            .replace("%player%", player.name)
            .replace("%points%", amount.toString())
            .replace("%amount%", amount.toString())
            .removePrefix("/")
    return if (Bukkit.dispatchCommand(Bukkit.getConsoleSender(), command)) PayoutResult.Success
    else PayoutResult.Failed("ポイント付与コマンドの実行に失敗しました")
  }
}

sealed interface PayoutResult {
  data object Success : PayoutResult

  data class Unavailable(val reason: String) : PayoutResult

  data class Failed(val reason: String) : PayoutResult
}
