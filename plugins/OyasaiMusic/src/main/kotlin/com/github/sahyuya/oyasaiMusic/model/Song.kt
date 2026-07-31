package com.github.sahyuya.oyasaiMusic.model

import java.util.UUID

/**
 * songs テーブル1行分に対応するモデル。
 * データ・システム設計書 1-1章に準拠。
 *
 * @param id 楽曲ID（自動採番。新規作成時はnull）
 * @param authorUuid 作者のUUID
 * @param title 題名
 * @param createdAt 作成日時（UNIX秒）
 * @param bpm 基準BPM（録音時のグリッド基準・再生速度の基準にもなる）
 * @param recordMaterial レコードの種類（バニラマテリアル名, 例: MUSIC_DISC_13）
 * @param price レコード販売価格
 * @param referenceUrl 参考リンク（未設定はnull）
 * @param status 審査ステータス（OPによる「オリジナル審査」の結果。公開可否とは独立、[published]参照）
 * @param likes 総いいね数
 * @param views 総視聴回数
 * @param fileName 紐づく音源ファイル(.bin)名
 * @param supportsPositional 楽曲にPanの指定（看板による静的指定、または動的録音の自動算出）が
 *        一度でもあったか。falseの場合、立体音響再生(PlaybackMode.POSITIONAL)は選択できない
 *        （追加項目.txt: 「その楽曲にPanの指定がない場合は通常再生のみ可能」）。
 * @param published 公開状態（GUIフェーズで追加）。作者が楽曲設定画面から任意に切替可能な
 *        独立フラグで、[status]（OP審査結果）とは別概念。falseの間は一覧・検索等に表示されない
 *        （UI/UX設計書8章「未公開（下書き）状態」に対応。既定は録音直後=false）。
 * @param reviewRequestedAt OP審査を依頼した時刻（UNIX秒）。nullなら未依頼。
 */
data class Song(
    val id: Long? = null,
    val authorUuid: UUID,
    val title: String,
    val createdAt: Long,
    val bpm: Int,
    val recordMaterial: String,
    val price: Int = 1000,
    val referenceUrl: String? = null,
    val status: SongStatus = SongStatus.DRAFT,
    val likes: Long = 0,
    val views: Long = 0,
    val fileName: String,
    val supportsPositional: Boolean = false,
    val published: Boolean = false,
    val reviewRequestedAt: Long? = null,
) {
    /**
     * 収益化（視聴ポイント・レコード売上）が有効かどうか。
     * UI/UX設計書 7章: 参考URL登録 or OP審査通過（仮OK/永続OK）が条件。
     * 公開状態([published])とは独立した判定（非公開でも審査自体は通過し得る）。
     */
    fun isMonetizationEligible(): Boolean =
        referenceUrl != null || status == SongStatus.TEMP_OK || status == SongStatus.PERMANENT_OK

}
