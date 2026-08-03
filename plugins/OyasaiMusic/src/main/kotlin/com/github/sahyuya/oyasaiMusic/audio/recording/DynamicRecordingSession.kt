package com.github.sahyuya.oyasaiMusic.audio

import com.github.sahyuya.oyasaiMusic.model.NoteEvent
import java.util.UUID
import java.util.concurrent.CopyOnWriteArrayList

/**
 * 生演奏録音（`/record live`）の実行中セッション。
 *
 * `NotePlayEvent` をフックして録音するため、コマンド実行(start)〜終了(stop)の間、
 * プレイヤーごとに1つ保持される状態オブジェクト。
 *
 */
class DynamicRecordingSession(
    val playerUuid: UUID,
    val startTimeNanos: Long,
    val replacement: RecordingReplacementTarget? = null,
) {
    val notes: MutableList<NoteEvent> = CopyOnWriteArrayList()
}
