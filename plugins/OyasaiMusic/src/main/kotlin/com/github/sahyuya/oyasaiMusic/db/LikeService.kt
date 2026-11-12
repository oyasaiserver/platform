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

  sealed interface Result {
    data class Added(val senderReward: EconomyJournal.Entry?) : Result

    data object AlreadyAdded : Result

    data object StaleSong : Result
  }

  /** Persist the like, author reward and sender's payment intent together. */
  fun like(likerUuid: UUID, song: Song): Result {
    if (!song.released) return Result.StaleSong
    val songId = song.id ?: return Result.StaleSong
    return database.transaction {
      val current = SongRepository(database).findById(songId)
      if (current == null || !current.released || current.recordIdentity != song.recordIdentity)
          return@transaction Result.StaleSong
      if (
          !socialRepository.registerLikeWithAuthorReward(
              likerUuid,
              song.authorUuid,
              songId,
              authorPointReward,
              song.recordIdentity,
          )
      )
          return@transaction Result.AlreadyAdded
      Result.Added(
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

internal fun likeFailureMessage(result: LikeService.Result): String =
    if (result == LikeService.Result.StaleSong) "§c楽曲が変更または削除されました。画面を開き直してください。" else "既にいいね済みです。"
