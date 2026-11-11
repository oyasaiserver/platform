package com.github.sahyuya.oyasaiMusic.audio

import com.github.sahyuya.oyasaiMusic.interop.PlaybackBuffer
import com.github.sahyuya.oyasaiMusic.model.NoteEvent
import com.github.sahyuya.oyasaiMusic.model.Song
import com.github.sahyuya.oyasaiMusic.resourcepack.OyasaiResourcePackService
import java.io.File
import java.nio.file.Files
import java.util.concurrent.*
import java.util.concurrent.atomic.AtomicLong

/** No Bukkit objects enter the bounded preparation workers. */
class PlaybackPreparation : AutoCloseable {
  data class Audio(
      val key: String,
      val notes: List<NoteEvent>,
      val indexed: List<Pair<Int, NoteEvent>>,
      val bedrock: Set<Int>,
      val duration: Int,
      val bytes: Long,
      val extended: Map<Int, OyasaiResourcePackService.ExtendedPlayback>,
  )

  private data class Cached(val value: Any, val bytes: Long)

  private val workers =
      ThreadPoolExecutor(
          2,
          2,
          0,
          TimeUnit.MILLISECONDS,
          ArrayBlockingQueue(32),
          ThreadFactory { Thread(it, "OyasaiMusic-Prepare").apply { isDaemon = true } },
          ThreadPoolExecutor.AbortPolicy(),
      )
  private val cache = LinkedHashMap<String, Cached>(16, .75f, true)
  private val pending = mutableMapOf<String, CompletableFuture<Any>>()
  private var bytes = 0L
  private var generation = 0L
  val computations = AtomicLong()
  val hits = AtomicLong()
  private val preparationNanos = AtomicLong()

  @Synchronized
  fun diagnostics(): String =
      "computations=${computations.get()} hits=${hits.get()} prepMs=${preparationNanos.get() / 1_000_000} " +
          "queued=${workers.queue.size} active=${workers.activeCount} cacheEntries=${cache.size} cacheBytes=$bytes"

  @Synchronized
  fun invalidate() {
    generation++
    cache.clear()
    bytes = 0
  }

  @Synchronized fun currentGeneration(): Long = generation

  @Synchronized fun retainedBytes(): Long = bytes

  @Synchronized fun entryCount(): Int = cache.size

  @Suppress("UNCHECKED_CAST")
  @Synchronized
  internal fun <T : Any> request(
      key: String,
      weight: (T) -> Long,
      build: () -> T,
  ): CompletableFuture<T> {
    val scoped = "$generation:$key"
    cache[scoped]?.let {
      hits.incrementAndGet()
      return CompletableFuture.completedFuture(it.value as T)
    }
    pending[scoped]?.let {
      hits.incrementAndGet()
      return it as CompletableFuture<T>
    }
    val future = CompletableFuture<T>()
    pending[scoped] = future as CompletableFuture<Any>
    val epoch = generation
    try {
      workers.execute {
        val started = System.nanoTime()
        try {
          computations.incrementAndGet()
          val result = build()
          synchronized(this) {
            val size = weight(result).coerceAtLeast(0)
            if (epoch == generation && size <= MAX_BYTES) {
              cache[scoped] = Cached(result, size)
              bytes += size
              while (bytes > MAX_BYTES || cache.size > 256) {
                val iterator = cache.entries.iterator()
                val old = iterator.next()
                bytes -= old.value.bytes
                iterator.remove()
              }
            }
          }
          future.complete(result)
        } catch (error: Throwable) {
          future.completeExceptionally(error)
        } finally {
          preparationNanos.addAndGet(System.nanoTime() - started)
          synchronized(this) { pending.remove(scoped) }
        }
      }
    } catch (error: RejectedExecutionException) {
      pending.remove(scoped)
      future.completeExceptionally(error)
    }
    return future
  }

  fun audio(file: File, song: Song, chordLimit: Int, template: String?): CompletableFuture<Audio> {
    // Metadata I/O is called only from the caller's async lookup stage.
    val key =
        "${song.recordIdentity}:${file.canonicalPath}:${Files.getLastModifiedTime(file.toPath())}:${file.length()}:$chordLimit"
    return request("audio:$key:$template", { it.bytes }) {
      val read = SongAudioFile.read(file)
      val notes = read.notes.sortedBy { it.timeMs }
      val indexed = notes.mapIndexed { i, note -> i to note }
      val surviving = HashSet<Int>()
      indexed
          .groupBy { it.second.timeMs to it.second.instrument }
          .values
          .forEach { group ->
            if (group.size < chordLimit) group.forEach { surviving.add(it.first) }
            else {
              surviving.add(group.minBy { it.second.pitch }.first)
              surviving.add(group.maxBy { it.second.pitch }.first)
            }
          }
      val extended = buildMap {
        if (template != null)
            indexed.forEach { (index, note) ->
              OyasaiResourcePackService.resolveExtendedPlayback(note, template)?.let {
                put(index, it)
              }
            }
      }
      Audio(
          key,
          notes,
          indexed,
          surviving,
          notes.lastOrNull()?.timeMs ?: 0,
          256L +
              notes.sumOf { 240L + (it.customSound?.length ?: 0) * 2L } +
              extended.values.sumOf { 128L + it.soundEvent.length * 2L },
          extended,
      )
    }
  }

  data class Buffer(val payload: PlaybackBuffer.PreparedV2?)

  fun payload(
      audio: Audio,
      mode: PlaybackMode,
      manifest: ByteArray?,
  ): CompletableFuture<Buffer> {
    val bank = manifest?.copyOf()
    val key = "buffer:${audio.key}:$mode:${bank?.joinToString("") { "%02x".format(it) }}"
    return request(key, { it.payload?.let { p -> 256L + p.compressed.size * 2L } ?: 32L }) {
      Buffer(
          PlaybackBuffer.prepareV2(
              audio.notes,
              spatialMode = if (mode == PlaybackMode.POSITIONAL) 1 else 0,
              bankPolicy = if (bank == null) 0 else 1,
              manifestHash = bank ?: ByteArray(32),
              customPattern = { n ->
                n.customSound?.let { event ->
                  n.customSoundSeed?.let { VanillaSoundCatalog.patternForSeed(event, it) }
                }
              },
          )
      )
    }
  }

  override fun close() {
    invalidate()
    workers.shutdownNow()
    synchronized(this) {
      pending.values.forEach { it.completeExceptionally(CancellationException("Plugin stopped")) }
      pending.clear()
    }
  }

  companion object {
    const val MAX_BYTES = 128L * 1024 * 1024
  }
}
