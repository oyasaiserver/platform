package com.github.sahyuya.oyasaiMusic.audio

import com.github.sahyuya.oyasaiMusic.model.NoteEvent
import org.bukkit.Location
import java.util.concurrent.CopyOnWriteArrayList

/**
 * 動的録音（データ・システム設計書 3章 `/record start <1〜4>`）の実行中セッション。
 *
 * `NotePlayEvent` をフックして録音するため、コマンド実行(start)〜終了(stop)の間、
 * プレイヤーごとに1つ保持される状態オブジェクト。
 *
 * @param quantizeStepMs 量子化グリッドの間隔（引数1〜4 × 100ms。redstone repeaterの遅延単位と対応）
 * @param origin 録音開始時点のプレイヤー位置・向き（Pan計算・BPM算出の基準点）
 */
class DynamicRecordingSession(
    val origin: Location,
    val startTimeMillis: Long,
    val quantizeStepMs: Long,
) {
    val notes: MutableList<NoteEvent> = CopyOnWriteArrayList()

    /** 引数の量子化単位から、便宜上の基準BPMを逆算する（60000 / stepMs）。楽曲のbpmカラムに使用。 */
    fun impliedBpm(): Int = (60000.0 / quantizeStepMs).toInt().coerceAtLeast(1)
}
