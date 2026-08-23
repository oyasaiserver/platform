package com.github.sahyuya.oyasaiMusic.db

import com.github.sahyuya.oyasaiMusic.model.Song
import java.util.UUID

/**
 * いいね登録と作者ポイント報酬を担当するサービス。
 *
 * 送信者のお金は通常時に未受取残高へ加算せず、いいね成立後にGUI層からVaultへ即時入金する。
 * 呼び出しは非同期スレッドから行うこと（内部のDBアクセスが同期的なため）。
 */
class LikeService(
    private val socialRepository: SocialRepository,
    likeRewardMoney: Long,
    likeRewardPoints: Long,
) {

  /** いいね成立後に送信者へVaultで即時入金する金額。 */
  val likerMoneyReward: Long = likeRewardMoney.coerceAtLeast(0)
  private val authorPointReward: Long = likeRewardPoints.coerceAtLeast(0)

  /** @return true = 新規にいいねを反映できた / false = 既にいいね済みだった（何もしない） */
  fun like(likerUuid: UUID, song: Song): Boolean {
    if (!song.published) return false
    val songId = song.id ?: return false
    return socialRepository.registerLikeWithAuthorReward(
        likerUuid = likerUuid,
        authorUuid = song.authorUuid,
        songId = songId,
        authorPointReward = authorPointReward,
    )
  }
}
