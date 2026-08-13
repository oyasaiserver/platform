package com.github.sahyuya.oyasaiMusic.audio

import com.sk89q.worldedit.math.BlockVector3
import java.util.UUID
import java.util.concurrent.ConcurrentHashMap

/** プレイヤーごとの生演奏・現地回路録音セッションを管理する。 */
class RecordingSessionManager {

  private val dynamicSessions = ConcurrentHashMap<UUID, DynamicRecordingSession>()
  private val liveCircuitSessions = ConcurrentHashMap<UUID, LiveCircuitRecordingSession>()
  private val preferredCircuitQuantizationMs = ConcurrentHashMap<UUID, Int>()

  fun isRecording(playerUuid: UUID): Boolean =
      dynamicSessions.containsKey(playerUuid) || liveCircuitSessions.containsKey(playerUuid)

  fun startDynamic(
      playerUuid: UUID,
      replacement: RecordingReplacementTarget? = null,
  ): DynamicRecordingSession {
    val session =
        DynamicRecordingSession(
            playerUuid = playerUuid,
            startTimeNanos = System.nanoTime(),
            replacement = replacement,
        )
    dynamicSessions[playerUuid] = session
    return session
  }

  fun startLiveCircuit(
      playerUuid: UUID,
      worldUuid: UUID,
      minimum: BlockVector3,
      maximum: BlockVector3,
      quantizationMs: Int,
      replacement: RecordingReplacementTarget? = null,
  ): LiveCircuitRecordingSession {
    val session =
        LiveCircuitRecordingSession(
            playerUuid,
            worldUuid,
            minimum,
            maximum,
            System.nanoTime(),
            quantizationMs,
            replacement,
        )
    liveCircuitSessions[playerUuid] = session
    preferredCircuitQuantizationMs[playerUuid] = quantizationMs
    return session
  }

  fun stopDynamic(playerUuid: UUID): DynamicRecordingSession? = dynamicSessions.remove(playerUuid)

  fun stopLiveCircuit(playerUuid: UUID): LiveCircuitRecordingSession? =
      liveCircuitSessions.remove(playerUuid)

  /** 回路をまだ起動していない待機中に、最小RStickだけを変更する。 */
  fun updateLiveCircuitQuantization(playerUuid: UUID, quantizationMs: Int): Boolean {
    val session = liveCircuitSessions[playerUuid] ?: return false
    if (session.notes.isNotEmpty()) return false
    session.quantizationMs = quantizationMs
    preferredCircuitQuantizationMs[playerUuid] = quantizationMs
    return true
  }

  /** 設定画面からの回路録音で、直前に指定したRStickを引き継ぐ。 */
  fun preferredCircuitQuantization(playerUuid: UUID): Int? =
      preferredCircuitQuantizationMs[playerUuid]

  fun hasAnySession(): Boolean = dynamicSessions.isNotEmpty() || liveCircuitSessions.isNotEmpty()

  fun activeDynamicSessions(): Collection<DynamicRecordingSession> = dynamicSessions.values

  fun activeLiveCircuitSessions(): Collection<LiveCircuitRecordingSession> =
      liveCircuitSessions.values
}
