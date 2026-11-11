package com.github.sahyuya.oyasaiMusic.audio

import com.github.sahyuya.oyasaiMusic.interop.PlaybackBuffer
import com.github.sahyuya.oyasaiMusic.model.NoteEvent
import com.github.sahyuya.oyasaiMusic.model.Song
import java.nio.file.Path
import java.util.UUID
import java.util.concurrent.CountDownLatch
import java.util.concurrent.ExecutionException
import java.util.concurrent.Executors
import java.util.concurrent.RejectedExecutionException
import java.util.concurrent.TimeUnit
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith
import kotlin.test.assertIs
import kotlin.test.assertNotNull
import kotlin.test.assertNotSame
import kotlin.test.assertSame
import kotlin.test.assertTrue
import org.junit.jupiter.api.io.TempDir

class PlaybackPreparationTest {
  @TempDir lateinit var directory: Path

  @Test
  fun `queue saturation rejects excess work and invalidated jobs cannot repopulate cache`() {
    val started = CountDownLatch(2)
    val release = CountDownLatch(1)
    PlaybackPreparation().use { preparation ->
      try {
        val running =
            List(2) { index ->
              preparation.request("running-$index", { 1L }) {
                started.countDown()
                check(release.await(10, TimeUnit.SECONDS))
                "result-$index"
              }
            }
        assertTrue(started.await(5, TimeUnit.SECONDS))
        val queued =
            List(32) { index -> preparation.request("queued-$index", { 1L }) { "queued-$index" } }
        val excess = preparation.request("excess", { 1L }) { "excess" }
        val error = assertFailsWith<ExecutionException> { excess.get(5, TimeUnit.SECONDS) }
        assertIs<RejectedExecutionException>(error.cause)
        preparation.invalidate()
        release.countDown()
        (running + queued).forEach { it.get(10, TimeUnit.SECONDS) }
        assertEquals(0, preparation.entryCount())
        assertEquals(0L, preparation.retainedBytes())
        assertEquals("recovered", preparation.request("excess", { 1L }) { "recovered" }.get())
      } finally {
        release.countDown()
      }
    }
  }

  @Test
  fun `cache evicts by estimated bytes and excludes individually oversized results`() {
    val halfBudget = PlaybackPreparation.MAX_BYTES / 2
    PlaybackPreparation().use { preparation ->
      for (index in 0..2) {
        preparation
            .request("large-$index", { halfBudget }) { "large-$index" }
            .get(5, TimeUnit.SECONDS)
      }
      assertEquals(2, preparation.entryCount())
      assertEquals(PlaybackPreparation.MAX_BYTES, preparation.retainedBytes())
      assertEquals(
          "oversized",
          preparation
              .request("oversized", { PlaybackPreparation.MAX_BYTES + 1 }) { "oversized" }
              .get(5, TimeUnit.SECONDS),
      )
      assertEquals(2, preparation.entryCount())
      assertEquals(PlaybackPreparation.MAX_BYTES, preparation.retainedBytes())
      val before = preparation.computations.get()
      preparation.request("large-0", { halfBudget }) { "replacement" }.get(5, TimeUnit.SECONDS)
      assertEquals(before + 1, preparation.computations.get())
      assertEquals(2, preparation.entryCount())
    }
  }

  @Test
  fun `cache evicts oldest identity and distinguishes playback routes`() {
    val file = directory.resolve("bounded.bin").toFile()
    SongAudioFile.write(file, listOf(NoteEvent(100, 0, 12, 80, 0)))
    val song =
        Song(
            authorUuid = UUID.randomUUID(),
            title = "Bounded",
            createdAt = 0,
            bpm = 120,
            recordMaterial = "MUSIC_DISC_13",
            fileName = file.name,
            recordIdentity = "first",
        )
    PlaybackPreparation().use { preparation ->
      val first = preparation.audio(file, song, 3, null).get(10, TimeUnit.SECONDS)
      for (index in 1..260) {
        preparation
            .audio(file, song.copy(recordIdentity = "identity-$index"), 3, null)
            .get(10, TimeUnit.SECONDS)
        assertTrue(preparation.entryCount() <= 256)
        assertTrue(preparation.retainedBytes() <= PlaybackPreparation.MAX_BYTES)
      }
      assertEquals(256, preparation.entryCount())
      val reloaded = preparation.audio(file, song, 3, null).get(10, TimeUnit.SECONDS)
      assertNotSame(first, reloaded)
      val fold =
          preparation.payload(reloaded, PlaybackMode.DEFAULT, null).get(10, TimeUnit.SECONDS)
      val spatial =
          preparation
              .payload(reloaded, PlaybackMode.POSITIONAL, null)
              .get(10, TimeUnit.SECONDS)
      val bankA =
          preparation
              .payload(reloaded, PlaybackMode.DEFAULT, ByteArray(32) { 1 })
              .get(10, TimeUnit.SECONDS)
      val bankB =
          preparation
              .payload(reloaded, PlaybackMode.DEFAULT, ByteArray(32) { 2 })
              .get(10, TimeUnit.SECONDS)
      assertNotSame(fold, spatial)
      assertNotSame(fold, bankA)
      assertNotSame(bankA, bankB)
      assertSame(
          bankA,
          preparation
              .payload(reloaded, PlaybackMode.DEFAULT, ByteArray(32) { 1 })
              .get(10, TimeUnit.SECONDS),
      )
      assertEquals(0, assertNotNull(fold.payload).bankPolicy)
      assertEquals(1, assertNotNull(spatial.payload).spatialMode)
      assertEquals(1, assertNotNull(bankA.payload).bankPolicy)
    }
  }

  @Test
  fun `compare fifty eager preparations with cached negotiated preparation`() {
    val file = directory.resolve("comparison.bin").toFile()
    val notes =
        List(4096) { index ->
          NoteEvent(
              index / 12 * 50,
              index % 16,
              (index % 25).toByte(),
              index % 101,
              index % 201 - 100,
          )
        }
    SongAudioFile.write(file, notes)
    val song =
        Song(
            authorUuid = UUID.randomUUID(),
            title = "Comparison",
            createdAt = 0,
            bpm = 120,
            recordMaterial = "MUSIC_DISC_13",
            fileName = file.name,
        )
    val manifest = ByteArray(32) { 1 }
    val baselineStarted = System.nanoTime()
    var baselineBytes = 0L
    repeat(50) {
      val loaded = SongAudioFile.read(file).notes
      PlaybackMode.entries.forEach { mode ->
        val spatial = if (mode == PlaybackMode.POSITIONAL) 1 else 0
        baselineBytes += assertNotNull(PlaybackBuffer.prepareV2(loaded, spatial)).compressed.size
        baselineBytes +=
            assertNotNull(PlaybackBuffer.prepareV2(loaded, spatial, 1, manifest)).compressed.size
      }
    }
    val baselineMs = (System.nanoTime() - baselineStarted) / 1_000_000
    PlaybackPreparation().use { preparation ->
      val started = System.nanoTime()
      repeat(50) {
        val audio = preparation.audio(file, song, 3, null).get(20, TimeUnit.SECONDS)
        val payload =
            assertNotNull(
                preparation
                    .payload(audio, PlaybackMode.DEFAULT, manifest)
                    .get(20, TimeUnit.SECONDS)
                    .payload
            )
        assertEquals(notes.size, audio.notes.size)
        assertTrue(payload.compressed.isNotEmpty())
      }
      val cachedMs = (System.nanoTime() - started) / 1_000_000
      assertEquals(2L, preparation.computations.get())
      assertEquals(98L, preparation.hits.get())
      println(
          "PREPARATION_COMPARISON requests=50 notes=4096 baselineFileReads=50 " +
              "baselineBuffers=200 baselineCompressedBytes=$baselineBytes baselineMs=$baselineMs " +
              "cachedFileReads=1 cachedBuffers=1 cachedMs=$cachedMs " +
              "retainedBytes=${preparation.retainedBytes()}"
      )
    }
  }

  @Test
  fun `fifty requests share preparation and preserve the recorded notes`() {
    val song =
        Song(
            authorUuid = UUID.randomUUID(),
            title = "Preparation fixture",
            createdAt = 0,
            bpm = 120,
            recordMaterial = "MUSIC_DISC_13",
            fileName = "fixture.bin",
        )
    val file = directory.resolve(song.fileName).toFile()
    val notes =
        List(4096) { i -> NoteEvent(i / 12 * 50, 0, 12, i % 101, i % 201 - 100) } +
            listOf(
                NoteEvent(50, 0, 24, 87, -90, pitchCents = 3600),
                NoteEvent(50, 0, 12, 63, 92, "minecraft:block.note_block.harp", 421L),
            )
    SongAudioFile.write(file, notes)
    val template = "oyasaimusic:bank/i/{instrument}/a/{anchor}"
    val callers = Executors.newFixedThreadPool(50)
    val ready = CountDownLatch(50)
    val start = CountDownLatch(1)
    try {
      PlaybackPreparation().use { preparation ->
        val requests =
            List(50) {
              callers.submit<PlaybackPreparation.Audio> {
                ready.countDown()
                check(start.await(10, TimeUnit.SECONDS))
                preparation.audio(file, song, 3, template).get(20, TimeUnit.SECONDS)
              }
            }
        assertTrue(ready.await(10, TimeUnit.SECONDS))
        start.countDown()
        val results = requests.map { it.get(25, TimeUnit.SECONDS) }
        val prepared = results.first()
        results.forEach { assertSame(prepared, it) }
        assertEquals(notes.sortedBy { it.timeMs }, prepared.notes)
        val extendedIndex = prepared.notes.indexOfFirst { it.pitchCents == 3600 }
        val extended = assertNotNull(prepared.extended[extendedIndex])
        assertEquals("oyasaimusic:bank/i/0/a/p36", extended.soundEvent)
        assertEquals(1f, extended.pitch)
        assertEquals(1L, preparation.computations.get())
        assertEquals(49L, preparation.hits.get())
        assertEquals(1, preparation.entryCount())
        assertTrue(preparation.retainedBytes() in 1..PlaybackPreparation.MAX_BYTES)
        preparation.invalidate()
        assertEquals(0L, preparation.retainedBytes())
        preparation.audio(file, song, 3, template).get(20, TimeUnit.SECONDS)
        assertEquals(2L, preparation.computations.get())
      }
    } finally {
      callers.shutdownNow()
    }
  }
}
