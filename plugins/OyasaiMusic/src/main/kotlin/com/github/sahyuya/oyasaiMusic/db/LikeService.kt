package com.github.sahyuya.oyasaiMusic.db

import com.github.sahyuya.oyasaiMusic.model.Song
import java.util.UUID

/**
 * いいね登録と作者ポイント報酬を担当するサービス。
 *
 * 送信者のお金は通常時に未受取残高へ加算せず、いいね成立後にGUI層からOyasaiEconomyへ即時入金する。 呼び出しは非同期スレッドから行うこと（内部のDBアクセスが同期的なため）。
 */
class LikeService(
    private val database: DatabaseManager,
    private val socialRepository: SocialRepository,
    private val journal: EconomyJournal,
    likeRewardMoney: Long,
    likeRewardPoints: Long,
) {

  /** いいね成立後に送信者へOyasaiEconomyで即時入金する金額。 */
  private val likerMoneyReward: Long = likeRewardMoney.coerceAtLeast(0)
  private val authorPointReward: Long = likeRewardPoints.coerceAtLeast(0)

  data class Added(val senderReward: EconomyJournal.Entry?)

  /** Persist the like, author reward and sender's payment intent together. */
  fun like(likerUuid: UUID, song: Song): Added? {
    if (!song.released) return null
    val songId = song.id ?: return null
    return database.transaction {
      if (
          !socialRepository.registerLikeWithAuthorReward(
              likerUuid,
              song.authorUuid,
              songId,
              authorPointReward,
          )
      )
          return@transaction null
      Added(
          if (likerMoneyReward > 0)
              journal.create(
                  likerUuid,
                  "LIKE",
                  "yen",
                  likerMoneyReward,
                  "$songId:${song.recordIdentity}",
              )
          else null
      )
    }
  }
}
