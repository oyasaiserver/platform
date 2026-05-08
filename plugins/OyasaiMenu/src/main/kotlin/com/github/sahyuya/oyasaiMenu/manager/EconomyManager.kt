package com.github.sahyuya.oyasaiMenu.manager

import com.github.sahyuya.oyasaiMenu.OyasaiMenu
import net.milkbowl.vault.economy.Economy
import org.bukkit.Bukkit
import org.bukkit.entity.Player

/**
 * EconomyManager (manager パッケージへ移動)
 *
 * Vault Economy API のシングルトンラッパー。
 * Vault / 経済プラグイン未導入でも NullPointerException が発生しない。
 */
object EconomyManager {

    private var economy: Economy? = null

    fun init(plugin: OyasaiMenu) {
        economy = Bukkit.getServicesManager().getRegistration(Economy::class.java)?.provider
        if (economy == null) {
            plugin.logger.warning("Vault Economy が見つかりません。Vault と EssentialsX 等を導入してください。")
        } else {
            plugin.logger.info("Vault Economy: ${economy!!.name} を検出しました。")
        }
    }

    val isAvailable: Boolean get() = economy != null

    fun getBalance(player: Player): Double = economy?.getBalance(player) ?: 0.0

    /** @return 成功なら null、失敗なら &c 付きエラーメッセージ */
    fun withdraw(player: Player, amount: Double): String? {
        val eco = economy ?: return "&c経済プラグインが見つかりません。"
        if (amount <= 0) return "&c金額は1以上で指定してください。"
        if (eco.getBalance(player) < amount)
            return "&c残高不足 (所持: ${format(eco.getBalance(player))} / 必要: ${format(amount)})"
        return if (eco.withdrawPlayer(player, amount).transactionSuccess()) null
        else "&c引き落とし処理に失敗しました。"
    }

    /** @return 成功なら null、失敗なら &c 付きエラーメッセージ */
    fun deposit(player: Player, amount: Double): String? {
        if (amount <= 0) return null
        val eco = economy ?: return "&c経済プラグインが見つかりません。"
        return if (eco.depositPlayer(player, amount).transactionSuccess()) null
        else "&c入金処理に失敗しました。"
    }

    fun format(amount: Double): String =
        economy?.format(amount) ?: String.format("%,.2f", amount)
}