package io.oyasai.chat

import io.oyasai.chat.common.japanize.OrderedSourceQueue
import io.oyasai.chat.paper.transform.OrderedRecipientDelivery
import java.util.UUID
import java.util.concurrent.CompletableFuture
import kotlin.test.*
import net.kyori.adventure.text.Component
import org.junit.jupiter.api.Test

class OrderingTest {
  @Test
  fun mixedPublicAndPmCommitsKeepSourceOrder() {
    val queue = OrderedSourceQueue()
    val id = UUID.randomUUID()
    val firstHttp = CompletableFuture<Void>()
    val pmAcknowledgement = CompletableFuture<Void>()
    val order = mutableListOf<String>()
    queue.enqueue(id) {
      order += "public"
      firstHttp
    }
    queue.enqueue(id) {
      order += "pm"
      pmAcknowledgement
    }
    queue.enqueue(id) {
      order += "shortcut"
      CompletableFuture.completedFuture(null)
    }
    assertEquals(listOf("public"), order)
    assertFalse(queue.isIdle())
    firstHttp.complete(null)
    assertEquals(listOf("public", "pm"), order)
    pmAcknowledgement.complete(null)
    assertEquals(listOf("public", "pm", "shortcut"), order)
    assertTrue(queue.isIdle())
  }

  @Test
  fun sourceFailuresCapacityOtherSendersAndClose() {
    val queue = OrderedSourceQueue(2)
    val id = UUID.randomUUID()
    val first = CompletableFuture<Void>()
    var sent = 0
    assertTrue(queue.enqueue(id) { first })
    assertTrue(queue.enqueue(id) { throw IllegalStateException("fixture") })
    assertFalse(queue.enqueue(id) { error("must not start") })
    assertTrue(
        queue.enqueue(UUID.randomUUID()) {
          sent++
          CompletableFuture.completedFuture(null)
        }
    )
    assertEquals(1, sent)
    first.completeExceptionally(IllegalStateException("fixture"))
    assertTrue(queue.isIdle())
    val pending = CompletableFuture<Void>()
    queue.enqueue(id) { pending }
    queue.enqueue(id) { error("must not start after close") }
    queue.close()
    pending.complete(null)
    assertTrue(queue.isIdle())
    assertFalse(queue.enqueue(id) { error("closed") })
  }

  @Test
  fun delayedRecipientTransformCannotBeOvertakenByUnconvertedMessage() {
    val ordered = OrderedRecipientDelivery()
    val id = UUID.randomUUID()
    val first = CompletableFuture<Component>()
    val delivered = mutableListOf<Component>()
    val deliver: (Component) -> CompletableFuture<Void> = {
      delivered += it
      CompletableFuture.completedFuture(null)
    }
    ordered.enqueue(id, first, deliver)
    ordered.enqueue(id, CompletableFuture.completedFuture(Component.text("#skip")), deliver)
    assertTrue(delivered.isEmpty())
    first.complete(Component.text("converted"))
    assertEquals(listOf<Component>(Component.text("converted"), Component.text("#skip")), delivered)
  }

  @Test
  fun conversionDeliversWithoutPresenceResponseAndUnconvertedMessagesKeepOrder() {
    val id = UUID.randomUUID()
    val presenceResponse = CompletableFuture<io.oyasai.chat.common.protocol.NetworkEnvelope>()
    var refreshes = 0
    val presence =
        io.oyasai.chat.paper.network.PlayerPresenceCache { _ ->
          refreshes++
          presenceResponse.thenAccept { error("This fixture never responds") }
        }
    presence.receive(
        io.oyasai.chat.common.protocol.NetworkEnvelope.proxy(
            type = io.oyasai.chat.common.protocol.MessageType.PRESENCE_RESULT,
            content = "RemotePlayer",
            targetPlayerId = id,
        )
    )
    val now = System.currentTimeMillis() + 20_000
    val names = presence.snapshot(now) + "LocalPlayer"
    assertEquals(setOf("RemotePlayer", "LocalPlayer"), names)
    assertEquals(1, refreshes)
    presence.snapshot(now)
    assertEquals(1, refreshes)
    assertFalse(presenceResponse.isDone)

    val conversion = CompletableFuture<String>()
    val engine =
        io.oyasai.chat.common.japanize.Japanizer(
            io.oyasai.chat.common.japanize.JapanizeSettings(enabled = true)
        ) { text ->
          if (text.any { it in '\u3041'..'\u3096' }) conversion
          else CompletableFuture.completedFuture(text)
        }
    val queue = OrderedSourceQueue()
    val delivered = mutableListOf<String>()
    queue.enqueue(id) {
      engine.prepare("ohayou RemotePlayer LocalPlayer", true, names).thenAccept {
        delivered += it.text
      }
    }
    queue.enqueue(id) { engine.prepare("日本語", true, names).thenAccept { delivered += it.text } }
    assertTrue(delivered.isEmpty())
    conversion.complete("おはよう ")
    assertEquals(listOf("おはよう RemotePlayer LocalPlayer", "日本語"), delivered)
    assertFalse(presenceResponse.isDone)
    assertTrue(queue.isIdle())
    // With no earlier conversion in flight, skipped messages finish synchronously.
    queue.enqueue(id) { engine.prepare("#skip", true, names).thenAccept { delivered += it.text } }
    assertEquals("skip", delivered.last())
    assertTrue(queue.isIdle())
  }
}
