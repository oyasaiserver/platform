package com.github.sahyuya.oyasaiMusic.gui

import com.github.sahyuya.oyasaiMusic.OyasaiMusic
import com.github.sahyuya.oyasaiMusic.audio.PluginSoundEffect
import com.github.sahyuya.oyasaiMusic.economy.PayoutResult
import java.util.logging.Level
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.format.NamedTextColor
import org.bukkit.Bukkit
import org.bukkit.entity.Player

/**
 * DBで新規いいねが確定した後にだけ呼ぶ、送信者側の効果音と即時報酬。
 * 通常時は未受取残高を経由せずオンラインのPlayerへ直接入金し、Vault障害時だけ退避する。
 */
internal fun OyasaiMusic.deliverLikeSenderReward(player: Player) {
  soundEffectService.play(PluginSoundEffect.LIKE_SENT, listOf(player))
  val amount = likeService.likerMoneyReward
  if (amount <= 0) return

  val payout =
      runCatching { economyService.deposit(player, amount) }
          .getOrElse {
            logger.log(
                Level.WARNING,
                "いいね即時報酬のVault入金呼び出しに失敗しました: player=${player.uniqueId}, amount=$amount",
                it,
            )
            PayoutResult.Failed("Vault入金処理で例外が発生しました")
          }
  when (payout) {
    PayoutResult.Success -> {
      player.sendMessage(
          Component.text("${amount}円を入手しました。", NamedTextColor.GOLD),
      )
    }
    is PayoutResult.Unavailable -> {
      storeFailedLikeReward(player, amount, payout.reason)
    }
    is PayoutResult.Failed -> {
      storeFailedLikeReward(player, amount, payout.reason)
    }
  }
}

/** Vault障害時だけ報酬を失わないため未受取残高へ退避する。通常のいいね報酬経路では呼ばれない。 */
private fun OyasaiMusic.storeFailedLikeReward(player: Player, amount: Long, reason: String) {
  val playerUuid = player.uniqueId
  Bukkit.getScheduler()
      .runTaskAsynchronously(
          this,
          Runnable {
            val stored =
                runCatching { userRepository.addPending(playerUuid, money = amount) }
                    .onFailure {
                      logger.log(
                          Level.SEVERE,
                          "いいね報酬の障害時退避に失敗しました: player=$playerUuid, amount=$amount",
                          it,
                      )
                    }
                    .isSuccess
            Bukkit.getScheduler()
                .runTask(
                    this,
                    Runnable {
                      if (!player.isOnline) return@Runnable
                      val message =
                          if (stored) {
                            "即時入金に失敗したため、${amount}円を未受取報酬へ退避しました。"
                          } else {
                            "${amount}円の入金と障害時退避に失敗しました。管理者へお知らせください。"
                          }
                      player.sendMessage(
                          Component.text(
                              "$message（$reason）",
                              if (stored) NamedTextColor.YELLOW else NamedTextColor.RED,
                          ),
                      )
                    },
                )
          },
      )
}
