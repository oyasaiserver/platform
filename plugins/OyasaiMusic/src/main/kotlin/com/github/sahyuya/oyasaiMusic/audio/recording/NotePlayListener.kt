package com.github.sahyuya.oyasaiMusic.audio

import org.bukkit.Bukkit
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
) : Listener {

    @EventHandler(priority = EventPriority.MONITOR, ignoreCancelled = true)
    fun onNotePlay(event: NotePlayEvent) {
        if (!sessionManager.hasAnySession()) return
        val now = System.nanoTime()

        for (session in sessionManager.activeDynamicSessions()) {
            val recorder = Bukkit.getPlayer(session.playerUuid) ?: continue
            DynamicRecorder.process(
                session = session,
                block = event.block,
                instrument = event.instrument,
                pitch = event.note.id,
                recorderLocation = recorder.location,
                eventTimeNanos = now,
            )
        }
        for (session in sessionManager.activeLiveCircuitSessions()) {
            DynamicRecorder.processLiveCircuit(
                session = session,
                block = event.block,
                instrument = event.instrument,
                pitch = event.note.id,
                eventTimeNanos = now,
            )
        }
    }
}
