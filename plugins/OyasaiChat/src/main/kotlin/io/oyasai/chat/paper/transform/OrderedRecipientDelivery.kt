package io.oyasai.chat.paper.transform

import java.util.UUID
import java.util.concurrent.CompletableFuture
import net.kyori.adventure.text.Component

class OrderedRecipientDelivery {
  private val lock = Any()
  private val tails = mutableMapOf<UUID, CompletableFuture<Void>>()

  fun enqueue(
      recipientId: UUID,
      value: CompletableFuture<Component>,
      deliver: (Component) -> CompletableFuture<Void>,
  ) {
    val next =
        synchronized(lock) {
          val previous = tails[recipientId] ?: CompletableFuture.completedFuture(null)
          previous
              .thenCompose { value }
              .thenCompose(deliver)
              .exceptionally { null }
              .also { tails[recipientId] = it }
        }
    next.whenComplete { _, _ ->
      synchronized(lock) { if (tails[recipientId] === next) tails.remove(recipientId) }
    }
  }

  fun clear(recipientId: UUID) {
    synchronized(lock) { tails.remove(recipientId) }
  }

  fun clearAll() {
    synchronized(lock) { tails.clear() }
  }

  internal fun pendingRecipients(): Int = synchronized(lock) { tails.size }
}
