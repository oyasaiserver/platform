package com.github.sahyuya.oyasaiMusic.model

import java.util.UUID

/** users テーブル1行分に対応するモデル。 データ・システム設計書 1-2章: オンライン・オフライン問わず蓄積され、 メインメニューからのアクションで一括受取（リセット）される。 */
data class UserRewardData(
    val uuid: UUID,
    val pendingMoney: Long = 0,
    val pendingPoints: Long = 0,
    /** 外部経済/ポイント基盤へ実際に付与済みの累計。 */
    val totalMoney: Long = 0,
    val totalPoints: Long = 0,
)
