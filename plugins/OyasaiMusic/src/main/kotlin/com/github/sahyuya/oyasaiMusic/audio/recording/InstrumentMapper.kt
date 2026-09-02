package com.github.sahyuya.oyasaiMusic.audio

import kotlin.math.pow
import org.bukkit.Instrument
import org.bukkit.Sound

/**
 * NoteEvent.instrument(0〜255の楽器ID) と バニラの [org.bukkit.Instrument] を相互変換するユーティリティ。
 * 通常経路では [Instrument.getSound] が返す音を利用する。任意の拡張音域リソースパックを
 * 読み込んだ受信者だけは、SoundDispatcher がこの通常経路より前に拡張用イベントへ分岐する。
 *
 * OYMB/OYPB の ID は 26.2 固有の runtime table であり、enum ordinal ではない。
 * OYMI/OYMC の stable editor/import table とは意図的に別物で、変換は import 境界でだけ行う。
 */
object InstrumentMapper {

  private val runtime = listOf(
      Instrument.PIANO, Instrument.BASS_DRUM, Instrument.SNARE_DRUM, Instrument.STICKS,
      Instrument.BASS_GUITAR, Instrument.FLUTE, Instrument.BELL, Instrument.GUITAR,
      Instrument.CHIME, Instrument.XYLOPHONE, Instrument.IRON_XYLOPHONE, Instrument.COW_BELL,
      Instrument.DIDGERIDOO, Instrument.BIT, Instrument.BANJO, Instrument.PLING,
      Instrument.TRUMPET, Instrument.TRUMPET_EXPOSED, Instrument.TRUMPET_OXIDIZED,
      Instrument.TRUMPET_WEATHERED,
  )
  private val runtimeIds = runtime.withIndex().associate { it.value to it.index }

  /** バニラ [Instrument] を 0〜255 のIDへ変換する。 */
  fun toId(instrument: Instrument): Int = runtimeIds[instrument] ?: 0

  /** IDからバニラ [Instrument] を復元する。範囲外の場合は PIANO にフォールバックする。 */
  fun toInstrument(id: Int): Instrument = runtime.getOrElse(id) { Instrument.PIANO }

  /** 再生に使うバニラ [Sound] を取得する。 CUSTOM_HEAD（プレイヤーの頭で発動する任意音）は録音元を再現できないため PIANO で代替する。 */
  fun soundFor(instrument: Instrument): Sound = instrument.sound ?: Instrument.PIANO.sound!!

  /** ノートブロックの音階(0〜24)を再生ピッチ(float)に変換する。 バニラのノートブロックと同じ計算式: 2^((note-12)/12) */
  fun pitchToPlaybackPitch(pitch: Byte): Float =
      2.0.pow((pitch.coerceIn(0, 24) - 12) / 12.0).toFloat()

  /** Octave-fold an extended/fine pitch then retain its cents in the vanilla playback multiplier. */
  fun pitchCentsToPlaybackPitch(pitchCentsInput: Int): Float {
    var cents = pitchCentsInput.coerceIn(-5400, 7300)
    while (cents < 0) cents += 1200
    while (cents > 2400) cents -= 1200
    return 2.0.pow((cents - 1200) / 1200.0).toFloat()
  }
}
