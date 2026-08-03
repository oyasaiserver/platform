package com.github.sahyuya.oyasaiMusic.audio

import com.github.sahyuya.oyasaiMusic.model.NoteEvent
import org.bukkit.Instrument
import org.bukkit.Location
import org.bukkit.block.Block

/**
 * 生演奏録音（`/record live`）と現地回路録音（`/record we start`）の共通変換処理。
 * `NotePlayEvent` をフックする都度、[process] を呼び出して1音符分の [NoteEvent] を得る。
 *
 * - 録音者の現在位置を毎回参照し、同一ワールド・半径48ブロック以内だけを記録する
 * - 音量は常に100、Panは常に0とする
 * - 看板は3行目の発音ずらしと4行目のカスタム音源だけを適用する
 */
object DynamicRecorder {

    private const val RECORDING_RADIUS = 48.0

    /**
     */
    fun process(
        session: DynamicRecordingSession,
        block: Block,
        instrument: Instrument,
        pitch: Byte,
        recorderLocation: Location,
        eventTimeNanos: Long = System.nanoTime(),
    ): NoteEvent? {
        if (block.world != recorderLocation.world) return null
        val dx = block.x + 0.5 - recorderLocation.x
        val dy = block.y + 0.5 - recorderLocation.y
        val dz = block.z + 0.5 - recorderLocation.z
        if (dx * dx + dy * dy + dz * dz > RECORDING_RADIUS * RECORDING_RADIUS) return null

        val note = createNote(session.startTimeNanos, block, instrument, pitch, eventTimeNanos)
        session.notes.add(note)
        return note
    }

    fun processLiveCircuit(
        session: LiveCircuitRecordingSession,
        block: Block,
        instrument: Instrument,
        pitch: Byte,
        eventTimeNanos: Long = System.nanoTime(),
    ): NoteEvent? {
        if (block.world.uid != session.worldUuid || !session.contains(block.x, block.y, block.z)) return null
        val actualElapsedMs = ((eventTimeNanos - session.startTimeNanos).coerceAtLeast(0L) / 1_000_000L).toInt()
        val quantizedElapsedMs = session.quantizeElapsedMs(actualElapsedMs)
        val note = createNote(session.startTimeNanos, block, instrument, pitch, eventTimeNanos, quantizedElapsedMs)
        session.notes.add(note)
        return note
    }

    /** 量子化せず、イベント発生時刻をミリ秒に一度だけ変換する。 */
    private fun createNote(
        startTimeNanos: Long,
        block: Block,
        instrument: Instrument,
        pitch: Byte,
        eventTimeNanos: Long,
        elapsedOverrideMs: Int? = null,
    ): NoteEvent {
        val elapsedMs = elapsedOverrideMs
            ?: ((eventTimeNanos - startTimeNanos).coerceAtLeast(0L) / 1_000_000L).toInt()
        val quarterNoteMs = 500.0 // 回路／生演奏の看板3行目は既存どおり120 BPM基準で解釈する。
        val signDelay = SignOverrideProcessor.extractDelayFromWorld(block, quarterNoteMs) ?: 0
        val customSound = SignOverrideProcessor.extractCustomSoundFromWorld(block)
        return NoteEvent(
            timeMs = (elapsedMs + signDelay).coerceAtLeast(0),
            instrument = InstrumentMapper.toId(instrument),
            pitch = pitch.coerceIn(0, 24),
            volume = 100,
            pan = 0,
            customSound = customSound?.eventKey,
            customSoundSeed = customSound?.seed,
        )
    }
}
