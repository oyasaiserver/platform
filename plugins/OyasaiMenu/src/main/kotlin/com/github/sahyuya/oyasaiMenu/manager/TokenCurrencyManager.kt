package com.github.sahyuya.oyasaiMenu.manager

import com.github.sahyuya.oyasaiMenu.OyasaiMenu
import io.oyasai.economy.api.OyasaiEconomyApi
import org.bukkit.Bukkit
import org.bukkit.entity.Player

object TokenCurrencyManager {
  private val manager
    get() = Bukkit.getServicesManager().load(OyasaiEconomyApi::class.java)

  fun init(plugin: OyasaiMenu) {
    if (!isAvailable) plugin.logger.warning("OyasaiEconomy が見つかりません。")
  }

  val isAvailable
    get() = manager != null

  fun getTokens(player: Player): Long = manager?.balance("token", player.uniqueId) ?: 0L

  fun removeTokens(player: Player, amount: Long): String? {
    if (amount < 0) return "&cポイント価格が無効です。"
    return if (manager?.withdraw("token", player.uniqueId, amount)?.accepted == true) null
    else "&cポイント不足、または引き落としに失敗しました。"
  }

  fun format(amount: Long): String = String.format("%,d", amount)
}
