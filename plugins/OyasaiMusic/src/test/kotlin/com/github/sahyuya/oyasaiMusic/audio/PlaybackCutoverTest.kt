package com.github.sahyuya.oyasaiMusic.audio

import com.github.sahyuya.oyasaiMusic.model.NoteEvent
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertNull
import kotlin.test.assertTrue

class PlaybackCutoverTest {
  @Test
  fun `personal playback and all seven ambient slots can coexist`() {
    assertTrue(hasLocalPlaybackSlot(true, 6, 1))
    assertTrue(hasLocalPlaybackSlot(false, 7, 0))
    assertFalse(hasLocalPlaybackSlot(true, 7, 0))
    assertFalse(hasLocalPlaybackSlot(true, 7, 1))
    assertFalse(hasLocalPlaybackSlot(false, 6, 1))
  }

  @Test
  fun `last-note handoff remains alive until the transfer resolves`() {
    assertFalse(canFinishPlayback(true, 1050, 1000, awaitingStartAck = true))
    assertFalse(canFinishPlayback(true, 1049, 1000, awaitingStartAck = false))
    assertFalse(canFinishPlayback(false, 1100, 1000, awaitingStartAck = false))
    assertTrue(canFinishPlayback(true, 1100, 1000, awaitingStartAck = false))
  }

  @Test
  fun `mid-song cutover expects the first audible note at or after the position`() {
    val notes =
        listOf(
                NoteEvent(0, 0, 12, 90, 0),
                NoteEvent(499, 0, 12, 90, 0),
                NoteEvent(500, 0, 12, 0, 0),
                NoteEvent(500, 0, 12, 90, 0),
                NoteEvent(620, 0, 12, 0, 0),
                NoteEvent(700, 0, 12, 90, 0),
                NoteEvent(710, 0, 12, 0, 0),
            )
            .mapIndexed { index, note -> index to note }
    assertEquals(500, firstAudibleAtOrAfter(notes, 500))
    assertEquals(700, firstAudibleAtOrAfter(notes, 501))
    assertNull(firstAudibleAtOrAfter(notes, 701))
    assertNull(firstAudibleAtOrAfter(emptyList(), 0))
  }
}
