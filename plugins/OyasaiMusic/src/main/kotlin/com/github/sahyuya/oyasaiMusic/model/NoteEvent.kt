package com.github.sahyuya.oyasaiMusic.model

/**
 * 音源バイナリフォーマット（データ・システム設計書 2章）における1音符分のデータ。 ディスク上は8バイト固定長でパックされる。
 *
 * @param timeMs 録音開始からの発音ミリ秒（0〜3バイト目, Int）
 * @param instrument 楽器ID 0〜255（4バイト目）。[com.oyasai.music.audio.instrument.InstrumentMapper] で バニラの
 *   [org.bukkit.Instrument] と相互変換する。
 * @param pitch 音階 0〜24（5バイト目）。バニラのノートブロックの音域(F#3〜F#5)に対応。
 * @param volume 音量 0〜100（6バイト目）
 * @param pan 定位 -100(左)〜0(中央)〜100(右)（7バイト目）
 * @param customSound 看板4行目で指定されたバニラ音源の実体パス。nullなら通常のノートブロック音色を使う。
 * @param customSoundSeed 指定パターンをクライアント側で固定する再生seed。
 */
data class NoteEvent(
    val timeMs: Int,
    val instrument: Int,
    val pitch: Byte,
    val volume: Int,
    val pan: Int,
    val customSound: String? = null,
    val customSoundSeed: Long? = null,
) {
  init {
    require(timeMs >= 0) { "timeMsは0以上である必要があります: $timeMs" }
    require(instrument in 0..255) { "instrumentは0〜255である必要があります: $instrument" }
    require(pitch in 0..24) { "pitchは0〜24である必要があります: $pitch" }
    require(volume in 0..100) { "volumeは0〜100である必要があります: $volume" }
    require(pan in -100..100) { "panは-100〜100である必要があります: $pan" }
    require(customSound == null || customSound.matches(Regex("[a-z0-9_./:-]{1,256}"))) {
      "customSoundの形式が不正です: $customSound"
    }
    require(customSound != null || customSoundSeed == null) { "customSoundSeedにはcustomSoundが必要です" }
  }

  /** 音量・定位を上書きしたコピーを返す（看板による上書き記録用）。 */
  fun withOverride(volume: Int? = null, pan: Int? = null): NoteEvent =
      copy(
          volume = volume?.coerceIn(0, 100) ?: this.volume,
          pan = pan?.coerceIn(-100, 100) ?: this.pan,
      )
}
