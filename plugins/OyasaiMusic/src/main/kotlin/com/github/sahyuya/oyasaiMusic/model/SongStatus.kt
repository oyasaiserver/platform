package com.github.sahyuya.oyasaiMusic.model

/**
 * songs.status カラムに対応する審査ステータス。
 * データ・システム設計書 1-1章: 0=下書き, 1=仮OK, 2=永続OK, 3=却下
 */
enum class SongStatus(val code: Int) {
    DRAFT(0),
    TEMP_OK(1),
    PERMANENT_OK(2),
    REJECTED(3);

    companion object {
        fun fromCode(code: Int): SongStatus =
            entries.firstOrNull { it.code == code }
                ?: throw IllegalArgumentException("不明なstatusコード: $code")
    }
}
