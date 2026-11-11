package com.github.sahyuya.oyasaiMusic.interop

import com.github.sahyuya.oyasaiMusic.model.NoteEvent
import java.util.HexFormat
import java.util.zip.InflaterInputStream
import kotlin.test.Test
import kotlin.test.assertContentEquals
import kotlin.test.assertNotNull

class PlaybackBufferGoldenTest {
  @Test
  fun `v2 encoder produces the shared OYPB fixture`() {
    val fixture =
        assertNotNull(javaClass.getResourceAsStream("/oypb-306.hex")).bufferedReader().use {
          it.readLines()
        }
    val note = NoteEvent(50, 0, 12, 63, -20)
    val custom =
        note.copy(
            pitchCents = 3600,
            customSound = "minecraft:block.note_block.harp",
            customSoundSeed = 421,
        )
    val v2 = assertNotNull(PlaybackBuffer.prepareV2(listOf(custom), customPattern = { 2 }))
    val actual = InflaterInputStream(v2.compressed.inputStream()).use { it.readBytes() }
    assertContentEquals(HexFormat.of().parseHex(fixture[1]), actual)
  }
}
