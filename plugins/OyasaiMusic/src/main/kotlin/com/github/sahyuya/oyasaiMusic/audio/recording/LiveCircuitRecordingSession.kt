package com.github.sahyuya.oyasaiMusic.audio

import com.github.sahyuya.oyasaiMusic.model.NoteEvent
import com.sk89q.worldedit.math.BlockVector3
import java.util.UUID
import java.util.concurrent.CopyOnWriteArrayList

/**
 * `/record we start` で使う、コピー元回路の実演奏を記録するセッション。
 * FAWEクリップボードが指すワールド座標の範囲だけを対象にするため、周囲のノートブロックは混ざらない。
 */
class LiveCircuitRecordingSession(
    val playerUuid: UUID,
    val worldUuid: UUID,
    val minimum: BlockVector3,
    val maximum: BlockVector3,
    val startTimeNanos: Long,
    /** 最小レッドストーンティック（0.5 = 50ms）から得た、録音時刻の量子化単位。 */
    @Volatile var quantizationMs: Int,
    val replacement: RecordingReplacementTarget? = null,
) {
    val notes: MutableList<NoteEvent> = CopyOnWriteArrayList()

    fun contains(x: Int, y: Int, z: Int): Boolean =
        x in minimum.x()..maximum.x() && y in minimum.y()..maximum.y() && z in minimum.z()..maximum.z()

    /** サーバー処理の揺れを、指定された最小回路単位へ丸めて除去する。 */
    fun quantizeElapsedMs(actualElapsedMs: Int): Int =
        (kotlin.math.round(actualElapsedMs.toDouble() / quantizationMs) * quantizationMs).toInt().coerceAtLeast(0)
}
