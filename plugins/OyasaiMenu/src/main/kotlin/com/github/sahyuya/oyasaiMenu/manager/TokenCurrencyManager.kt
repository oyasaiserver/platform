package com.github.sahyuya.oyasaiMenu.manager

import com.github.sahyuya.oyasaiMenu.OyasaiMenu
import me.realized.tokenmanager.api.TokenManager
import org.bukkit.Bukkit
import org.bukkit.entity.Player

object TokenCurrencyManager {
  private var plugin: OyasaiMenu? = null

  fun init(p: OyasaiMenu) {
    plugin = p
    if (isAvailable) p.logger.info("TokenManager を検出しました。ポイントショップが有効です。")
    else p.logger.warning("TokenManager が見つかりません。ポイントショップは無効です。")
  }

  private val manager: TokenManager?
    get() =
        Bukkit.getPluginManager()
            .takeIf { it.isPluginEnabled("TokenManager") }
            ?.getPlugin("TokenManager") as? TokenManager

  val isAvailable: Boolean
    get() = manager != null

  fun getTokens(player: Player): Long =
      runCatching { manager?.getTokens(player)?.orElse(0L) ?: 0L }
          .onFailure { plugin?.logger?.warning("TokenManager: getTokens() に失敗: ${it.message}") }
          .getOrDefault(0L)

  /** @return 成功なら null、失敗なら &c 付きエラーメッセージ */
  fun removeTokens(player: Player, amount: Long): String? {
    val tm = manager ?: return "&cTokenManager が見つかりません。"
    if (amount <= 0) return "&cポイント価格が無効です。"
    val current = getTokens(player)
    if (current < amount) return "&cポイントが不足しています。(所持: ${format(current)}P / 必要: ${format(amount)}P)"
    return if (
        runCatching { tm.removeTokens(player, amount) }
            .onFailure {
              plugin?.logger?.warning("TokenManager: removeTokens() に失敗: ${it.message}")
            }
            .getOrDefault(false)
    )
        null
    else "&cポイント引き落とし処理に失敗しました。"
  }

  fun format(amount: Long): String = String.format("%,d", amount)
}
