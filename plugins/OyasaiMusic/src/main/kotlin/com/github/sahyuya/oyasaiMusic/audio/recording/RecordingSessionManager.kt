package com.github.sahyuya.oyasaiMusic.audio

import org.bukkit.Location
import java.util.UUID
import java.util.concurrent.ConcurrentHashMap

/**
 * プレイヤーごとの動的録音セッション([DynamicRecordingSession])を管理する。
 * `/record start` で開始、`/record stop` で終了して下書き保存へ渡す。
 */
class RecordingSessionManager {

    private val sessions = ConcurrentHashMap<UUID, DynamicRecordingSession>()

    fun isRecording(playerUuid: UUID): Boolean = sessions.containsKey(playerUuid)

    fun start(playerUuid: UUID, origin: Location, quantizeUnit: Int): DynamicRecordingSession {
        require(quantizeUnit in 1..4) { "量子化単位は1〜4である必要があります: $quantizeUnit" }
        val session = DynamicRecordingSession(
            origin = origin.clone(),
            startTimeMillis = System.currentTimeMillis(),
            quantizeStepMs = quantizeUnit * 100L,
        )
        sessions[playerUuid] = session
        return session
    }

    fun get(playerUuid: UUID): DynamicRecordingSession? = sessions[playerUuid]

    /** セッションを終了し、その状態を返す（呼び出し側が保存処理を行う）。 */
    fun stop(playerUuid: UUID): DynamicRecordingSession? = sessions.remove(playerUuid)

    fun hasAnySession(): Boolean = sessions.isNotEmpty()

    fun activeSessions(): Collection<DynamicRecordingSession> = sessions.values
}
