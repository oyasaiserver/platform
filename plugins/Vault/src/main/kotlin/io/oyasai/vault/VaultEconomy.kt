package io.oyasai.vault

import java.math.BigDecimal
import java.math.RoundingMode
import java.text.NumberFormat
import java.util.Locale
import java.util.UUID
import net.milkbowl.vault.economy.AbstractEconomy
import net.milkbowl.vault.economy.EconomyResponse
import net.milkbowl.vault.economy.EconomyResponse.ResponseType
import org.bukkit.OfflinePlayer
import org.bukkit.entity.Player

internal class VaultEconomy(private val plugin: VaultPlugin) : AbstractEconomy() {
  override fun isEnabled() = plugin.ready

  override fun getName() = "Oyasai Vault"

  override fun hasBankSupport() = false

  override fun fractionalDigits() = 0

  override fun currencyNameSingular() = "¥"

  override fun currencyNamePlural() = "¥"

  override fun format(amount: Double): String {
    if (!amount.isFinite()) return "¥0"
    return "¥" +
        NumberFormat.getIntegerInstance(Locale.JAPAN)
            .format(BigDecimal.valueOf(amount).setScale(0, RoundingMode.HALF_UP))
  }

  private fun uuid(name: String): UUID? = plugin.read { resolve(name) }

  private fun uuid(player: OfflinePlayer): UUID = player.uniqueId

  private fun balance(uuid: UUID?): Long = uuid?.let { plugin.read { balance(it) } } ?: 0L

  override fun hasAccount(playerName: String) =
      uuid(playerName)?.let { plugin.read { balance(it) != null } } ?: false

  override fun hasAccount(player: OfflinePlayer) =
      plugin.read { balance(uuid(player)) != null } ?: false

  override fun hasAccount(playerName: String, worldName: String) = hasAccount(playerName)

  override fun getBalance(playerName: String) = balance(uuid(playerName)).toDouble()

  override fun getBalance(player: OfflinePlayer) = balance(uuid(player)).toDouble()

  override fun getBalance(playerName: String, world: String) = getBalance(playerName)

  override fun has(playerName: String, amount: Double) = has(uuid(playerName), amount)

  override fun has(player: OfflinePlayer, amount: Double) = has(uuid(player), amount)

  override fun has(playerName: String, worldName: String, amount: Double) = has(playerName, amount)

  private fun has(uuid: UUID?, amount: Double): Boolean {
    val rounded = Money.round(amount) ?: return false
    return uuid != null && plugin.read { has(uuid, rounded) } == true
  }

  private fun response(uuid: UUID?, amount: Double, deposit: Boolean): EconomyResponse {
    val old = balance(uuid).toDouble()
    val rounded = Money.round(amount) ?: return failure(amount, old, "金額が無効です")
    if (uuid == null || !plugin.ready) return failure(amount, old, "経済を利用できません")
    val next =
        plugin.write {
          change(
              uuid,
              rounded,
              if (deposit) "deposit" else "withdraw",
              !deposit && plugin.loan(uuid),
          )
        } ?: return failure(amount, old, "残高不足、上限超過、または口座がありません")
    return EconomyResponse(rounded.toDouble(), next.toDouble(), ResponseType.SUCCESS, "")
  }

  private fun failure(amount: Double, balance: Double, message: String) =
      EconomyResponse(amount, balance, ResponseType.FAILURE, message)

  override fun depositPlayer(playerName: String, amount: Double) =
      response(uuid(playerName), amount, true)

  override fun depositPlayer(player: OfflinePlayer, amount: Double) =
      response(uuid(player), amount, true)

  override fun depositPlayer(playerName: String, worldName: String, amount: Double) =
      depositPlayer(playerName, amount)

  override fun withdrawPlayer(playerName: String, amount: Double) =
      response(uuid(playerName), amount, false)

  override fun withdrawPlayer(player: OfflinePlayer, amount: Double) =
      response(uuid(player), amount, false)

  override fun withdrawPlayer(playerName: String, worldName: String, amount: Double) =
      withdrawPlayer(playerName, amount)

  override fun createPlayerAccount(playerName: String) = false

  override fun createPlayerAccount(playerName: String, worldName: String) = false

  override fun createPlayerAccount(player: OfflinePlayer) =
      if (player is Player && player.isOnline && plugin.ready)
          plugin.write { join(player.uniqueId, player.name) } == true
      else false

  private fun bank() = failure(0.0, 0.0, "銀行は未対応です")

  override fun createBank(name: String, player: String) = bank()

  override fun deleteBank(name: String) = bank()

  override fun bankBalance(name: String) = bank()

  override fun bankHas(name: String, amount: Double) = bank()

  override fun bankWithdraw(name: String, amount: Double) = bank()

  override fun bankDeposit(name: String, amount: Double) = bank()

  override fun isBankOwner(name: String, playerName: String) = bank()

  override fun isBankMember(name: String, playerName: String) = bank()

  override fun getBanks(): List<String> = emptyList()
}
