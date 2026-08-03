package com.github.sahyuya.oyasaiMusic.db

import com.github.sahyuya.oyasaiMusic.model.Song
import java.util.UUID

/**
 * いいね報酬（UI/UX設計書 7章「基本報酬」）を担当するサービス。
 * 「無条件で即時（オフライン時はプール）発生」との記述通り、実際のVault送金は
 * ここでは行わず、[UserRepository] のpending残高へ積み立てる（受取操作はGUIフェーズで実装する
 * メインメニューの「未受取報酬の一括受取」から行う）。
 *
 * 呼び出しは非同期スレッドから行うこと（内部のDBアクセスが同期的なため）。
 */
class LikeService(
    private val socialRepository: SocialRepository,
    private val likeRewardMoney: Long,
    private val likeRewardPoints: Long,
) {

    /**
     * @return true = 新規にいいねを反映できた / false = 既にいいね済みだった（何もしない）
     */
    fun like(likerUuid: UUID, song: Song): Boolean {
        if (!song.published) return false
        val songId = song.id ?: return false
        return socialRepository.registerLikeWithRewards(
            likerUuid = likerUuid,
            authorUuid = song.authorUuid,
            songId = songId,
            likerMoneyReward = likeRewardMoney,
            authorPointReward = likeRewardPoints,
        )
    }
}
