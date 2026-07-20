@file:Suppress("DEPRECATION")

package me.marzipan.OyasaiPets

import java.util.logging.Logger
import me.realized.tm.api.TMAPI
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.format.NamedTextColor.*
import org.bukkit.*
import org.bukkit.command.*
import org.bukkit.entity.*
import org.bukkit.inventory.*

/**
 * 経済システム
 *
 * TokenManager (TMAPI) との連携を通じて、プレイヤーのポイント残高の取得、 ポイントの消費を管理します。
 */
class EconomySystem(private val logger: Logger) {

  /**
   * プレイヤーの現在のポイント残高を取得
   *
   * @param player 対象プレイヤー
   * @return ポイント残高 (取得失敗時は 0)
   */
  fun getPlayerTokens(player: Player): Long {
    return try {
      TMAPI.getTokens(player.uniqueId)
    } catch (e: Exception) {
      logger.warning("Failed to get tokens for ${player.name}: ${e.message}")
      0L
    }
  }

  /**
   * プレイヤーからポイントを消費（残高チェック付き）
   *
   * @param player 対象プレイヤー
   * @param amount 消費するポイント数
   * @return 成功したかどうか
   */
  @Suppress("DEPRECATION")
  fun refundTokens(player: Player, amount: Int) {
    if (amount <= 0) return
    try {
      TMAPI.addTokens(player.uniqueId, amount)
    } catch (e: Exception) {
      logger.warning("Failed to refund tokens to ${player.name}: ${e.message}")
    }
  }

  @Suppress("DEPRECATION")
  fun consumeTokens(player: Player, amount: Int): Boolean {
    if (amount <= 0) return true

    val currentTokens =
        try {
          TMAPI.getTokens(player.uniqueId)
        } catch (e: Exception) {
          logger.warning("Failed to get tokens for ${player.name}: ${e.message}")
          player.sendMessage(Component.text("ポイント情報の取得に失敗しました。", RED))
          return false
        }

    if (currentTokens < amount) {
      player.sendMessage(
          Component.text("ポイントが不足しています！ (必要: ${amount}pt, 所持: ${currentTokens}pt)", RED)
      )
      return false
    }

    return try {
      TMAPI.removeTokens(player.uniqueId, amount)
      true
    } catch (e: Exception) {
      logger.warning("Failed to remove tokens from ${player.name}: ${e.message}")
      player.sendMessage(Component.text("ポイント処理中にエラーが発生しました。", RED))
      false
    }
  }
}
