package com.github.sahyuya.oyasaiMusic.audio

import com.github.sahyuya.oyasaiMusic.model.NoteEvent
import org.bukkit.Instrument
import org.bukkit.block.Block
import kotlin.math.cos
import kotlin.math.roundToInt
import kotlin.math.roundToLong
import kotlin.math.sin
import kotlin.math.sqrt

/**
 * 動的録音（データ・システム設計書 3章 `/record start <1〜4>`）。
 * `NotePlayEvent` をフックする都度、[process] を呼び出して1音符分の [NoteEvent] を得る。
 *
 * - 発音ミリ秒は [DynamicRecordingSession.quantizeStepMs] を基準にクオンタイズ（最も近いグリッドへ丸める）
 * - 音量は録音開始地点(origin)からの距離により減衰させる
 * - Panはoriginのプレイヤー向き(yaw)を基準とした左右方向への射影から算出する
 * - 音ブロック真上の看板があれば [SignOverrideProcessor] の値で上書きする
 */
object DynamicRecorder {

    /**
     * @param maxRadius これを超える距離のノートブロックは録音対象外とする（config: dynamic-record-radius）
     * @param fullVolumeRadius この距離以内は減衰なし(音量100)とする（config: dynamic-record-full-volume-radius）
     * @param minVolumeFloor 最大距離まで減衰した際の音量下限
     */
    fun process(
        session: DynamicRecordingSession,
        block: Block,
        instrument: Instrument,
        pitch: Byte,
        eventTimeMillis: Long = System.currentTimeMillis(),
        maxRadius: Double = 32.0,
        fullVolumeRadius: Double = 2.0,
        minVolumeFloor: Int = 20,
    ): NoteEvent? {
        val origin = session.origin
        if (block.world != origin.world) return null

        val dx = (block.x + 0.5) - origin.x
        val dy = (block.y + 0.5) - origin.y
        val dz = (block.z + 0.5) - origin.z
        val distance = sqrt(dx * dx + dy * dy + dz * dz)
        if (distance > maxRadius) return null

        // --- 発音時刻をグリッドへクオンタイズ ---
        val elapsed = eventTimeMillis - session.startTimeMillis
        val steps = (elapsed.toDouble() / session.quantizeStepMs).roundToLong()
        val quantizedMs = (steps * session.quantizeStepMs).toInt().coerceAtLeast(0)

        // --- 距離による音量減衰(線形) ---
        val volume = when {
            distance <= fullVolumeRadius -> 100
            distance >= maxRadius -> minVolumeFloor
            else -> {
                val ratio = (distance - fullVolumeRadius) / (maxRadius - fullVolumeRadius)
                (100 - ratio * (100 - minVolumeFloor)).roundToInt()
            }
        }.coerceIn(0, 100)

        // --- originの向き(yaw)を基準とした左右射影でPanを算出 ---
        val yawRad = Math.toRadians(origin.yaw.toDouble())
        // Minecraftの前方ベクトル = (-sin(yaw), 0, cos(yaw)) を90度回転させたものを右方向とする。
        // 左右が実際のゲーム内感覚と逆だった場合は符号を反転させて調整すること。
        val rightX = cos(yawRad)
        val rightZ = sin(yawRad)
        val lateral = dx * rightX + dz * rightZ
        val pan = (lateral / maxRadius * 100).roundToInt().coerceIn(-100, 100)

        var finalVolume = volume
        var finalPan = pan
        val (overrideVolume, overridePan) = SignOverrideProcessor.extractFromWorld(block)
        overrideVolume?.let { finalVolume = it }
        overridePan?.let { finalPan = it }
        val customSound = SignOverrideProcessor.extractCustomSoundFromWorld(block)

        val note = NoteEvent(
            timeMs = quantizedMs,
            instrument = InstrumentMapper.toId(instrument),
            pitch = pitch.coerceIn(0, 24),
            volume = finalVolume,
            pan = finalPan,
            customSound = customSound?.eventKey,
            customSoundSeed = customSound?.seed,
        )
        session.notes.add(note)
        return note
    }
}
