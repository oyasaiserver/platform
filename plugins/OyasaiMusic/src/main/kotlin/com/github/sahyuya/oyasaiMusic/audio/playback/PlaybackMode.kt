package com.github.sahyuya.oyasaiMusic.audio

/**
 * 音の送信方式。UI/UX上は以下の名称で呼ぶ（追加項目.txt 準拠）。
 *
 * - [DEFAULT] = 「デフォルト再生」: Adventure APIの `Sound.Emitter.self()`
 *   内部的には `ClientboundSoundEntityPacket` を使用）で、音源をプレイヤー自身に追従させる。
 *   Panは扱わない。プレイヤーが移動しても音源が追従するため、移動による音響の乱れが起きない。
 * - [POSITIONAL] = 「立体音響再生」: `Location` + Pan方式（プレイヤーの視線を基準に左右へ
 *   音の広がる再生）。楽曲にPanの指定（看板による静的指定、または動的録音による自動算出）が
 *   一切無い楽曲では選択できない（[com.oyasai.music.model.Song.supportsPositional] が false）。
 *   楽曲詳細GUIで、リスナーごとにどちらで再生するか個別に選択・保存できる想定
 *   （[com.oyasai.music.db.PlaybackPreferenceRepository]）。
 */
enum class PlaybackMode {
    DEFAULT,
    POSITIONAL,
}
