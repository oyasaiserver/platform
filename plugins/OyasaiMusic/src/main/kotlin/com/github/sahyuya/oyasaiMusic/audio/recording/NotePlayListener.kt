package com.github.sahyuya.oyasaiMusic.audio

import org.bukkit.event.EventHandler
import org.bukkit.event.EventPriority
import org.bukkit.event.Listener
import org.bukkit.event.block.NotePlayEvent

/**
 * ノートブロックの発音イベントを検知し、動的録音中の全プレイヤーのセッションへ橋渡しする。
 * `NotePlayEvent` は「プレイヤー操作またはレッドストーン信号によってノートブロックが
 * 鳴らされたとき」に発火する（block自体に鳴った、というイベントでプレイヤー起点ではないため、
 * 録音中の全セッションに対して距離判定を行う）。
 */
class NotePlayListener(
    private val sessionManager: RecordingSessionManager,
    private val maxRadius: Double,
    private val fullVolumeRadius: Double,
    private val minVolumeFloor: Int,
) : Listener {

    @EventHandler(priority = EventPriority.MONITOR, ignoreCancelled = true)
    fun onNotePlay(event: NotePlayEvent) {
        if (!sessionManager.hasAnySession()) return
        val now = System.currentTimeMillis()

        for (session in sessionManager.activeSessions()) {
            DynamicRecorder.process(
                session = session,
                block = event.block,
                instrument = event.instrument,
                pitch = event.note.id,
                eventTimeMillis = now,
                maxRadius = maxRadius,
                fullVolumeRadius = fullVolumeRadius,
                minVolumeFloor = minVolumeFloor,
            )
        }
    }
}
