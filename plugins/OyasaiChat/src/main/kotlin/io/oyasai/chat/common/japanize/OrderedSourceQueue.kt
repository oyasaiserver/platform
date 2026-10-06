package io.oyasai.chat.common.japanize

import java.util.UUID
import java.util.concurrent.CompletableFuture

/** Serializes source conversion and commit completion, across public chat, shortcuts and PM. */
class OrderedSourceQueue(private val maxPerSender: Int = 32) : AutoCloseable {
  private val tails = mutableMapOf<UUID, CompletableFuture<Void>>()
  private val counts = mutableMapOf<UUID, Int>()
  private var closed = false

  @Synchronized
  fun enqueue(id: UUID, work: () -> CompletableFuture<Void>): Boolean {
    if (closed || (counts[id] ?: 0) >= maxPerSender) return false
    val previous = tails[id] ?: CompletableFuture.completedFuture(null)
    val next = CompletableFuture<Void>()
    tails[id] = next
    counts[id] = (counts[id] ?: 0) + 1
    previous.whenComplete { _, _ ->
      val result =
          synchronized(this) {
            if (closed) CompletableFuture.completedFuture(null)
            else runCatching(work).getOrElse { CompletableFuture.failedFuture(it) }
          }
      result.whenComplete { _, _ ->
        synchronized(this) {
          if (tails[id] === next) tails.remove(id)
          counts[id] = ((counts[id] ?: 1) - 1).coerceAtLeast(0)
          if (counts[id] == 0) counts.remove(id)
        }
        next.complete(null)
      }
    }
    return true
  }

  @Synchronized fun isIdle(): Boolean = tails.isEmpty()

  @Synchronized
  override fun close() {
    closed = true
    tails.values.toList().forEach { it.complete(null) }
    tails.clear()
    counts.clear()
  }
}
