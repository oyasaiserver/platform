package com.github.sahyuya.oyasaiMusic.model

import java.util.UUID

/**
 * playlists テーブル1行分に対応するモデル（GUIフェーズで追加）。
 * UI/UX設計書「④緑色ブロック(お気に入り＆プレイリスト)」に対応。
 *
 * @param songCount 登録曲数（一覧表示用。JOINクエリで算出するため書き込みには使わない）
 */
data class Playlist(
    val id: Long? = null,
    val ownerUuid: UUID,
    val name: String,
    val createdAt: Long,
    val songCount: Long = 0,
)
