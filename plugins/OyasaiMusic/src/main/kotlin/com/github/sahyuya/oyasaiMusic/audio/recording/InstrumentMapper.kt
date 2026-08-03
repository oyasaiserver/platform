package com.github.sahyuya.oyasaiMusic.audio

import kotlin.math.pow
import org.bukkit.Instrument
import org.bukkit.Sound

/**
 * NoteEvent.instrument(0〜255の楽器ID) と バニラの [org.bukkit.Instrument] を相互変換するユーティリティ。
 * リソースパックを使わない設計のため、常にバニラの [Instrument.getSound] が返す音を利用する。
 *
 * IDには [Instrument.ordinal] をそのまま採用する。これにより将来Minecraft側で 楽器の種類が増減しても、コード変更なしに追随できる（ただしordinalの並びは
 * Minecraft/Paperのバージョン間で変わり得るため、録音時と再生時でサーバーの バージョンが変わる場合は音源の再エクスポートを推奨する）。
 */
object InstrumentMapper {

  // 注意: org.bukkit.InstrumentはJava側で定義されたenumのため、Kotlinの`.entries`は使えず`values()`を用いる。
  private val INSTRUMENTS: Array<Instrument> = Instrument.values()

  /** バニラ [Instrument] を 0〜255 のIDへ変換する。 */
  fun toId(instrument: Instrument): Int = instrument.ordinal

  /** IDからバニラ [Instrument] を復元する。範囲外の場合は PIANO にフォールバックする。 */
  fun toInstrument(id: Int): Instrument = INSTRUMENTS.getOrElse(id) { Instrument.PIANO }

  /** 再生に使うバニラ [Sound] を取得する。 CUSTOM_HEAD（プレイヤーの頭で発動する任意音）は録音元を再現できないため PIANO で代替する。 */
  fun soundFor(instrument: Instrument): Sound = instrument.sound ?: Instrument.PIANO.sound!!

  /** ノートブロックの音階(0〜24)を再生ピッチ(float)に変換する。 バニラのノートブロックと同じ計算式: 2^((note-12)/12) */
  fun pitchToPlaybackPitch(pitch: Byte): Float =
      2.0.pow((pitch.coerceIn(0, 24) - 12) / 12.0).toFloat()
}
