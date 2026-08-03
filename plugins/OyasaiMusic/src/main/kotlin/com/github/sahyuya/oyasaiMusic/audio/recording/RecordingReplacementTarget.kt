package com.github.sahyuya.oyasaiMusic.audio

/** `/record stop` 時に新規下書きではなく既存楽曲の音源を差し替える録音先。 */
data class RecordingReplacementTarget(
    val songId: Long,
    val fileName: String,
)
