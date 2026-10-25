package com.github.sahyuya.oyasaiMenu.manager

import com.github.sahyuya.oyasaiMenu.OyasaiMenu
import io.oyasai.economy.api.OyasaiEconomyApi
import org.bukkit.Bukkit
import org.bukkit.entity.Player

object EconomyManager {
  private val economy
    get() = Bukkit.getServicesManager().load(OyasaiEconomyApi::class.java)

  fun init(plugin: OyasaiMenu) {
    if (!isAvailable) plugin.logger.warning("OyasaiEconomy が見つかりません。")
  }

  val isAvailable
    get() = economy != null

  fun getBalance(player: Player): Long = economy?.balance("yen", player.uniqueId) ?: 0L

  fun withdraw(player: Player, amount: Long): String? {
    if (amount < 0) return "&c価格は0以上の整数で指定してください。"
    return if (economy?.withdraw("yen", player.uniqueId, amount)?.accepted == true) null
    else "&c残高不足、または引き落としに失敗しました。"
  }

  fun deposit(player: Player, amount: Long): String? =
      if (economy?.deposit("yen", player.uniqueId, amount)?.accepted == true) null
      else "&c入金処理に失敗しました。"

  fun format(amount: Long): String = economy?.format("yen", amount) ?: String.format("¥%,d", amount)
}
