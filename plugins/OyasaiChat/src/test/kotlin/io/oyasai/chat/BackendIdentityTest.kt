package io.oyasai.chat

import io.oyasai.chat.common.model.ChannelDefinition
import io.oyasai.chat.common.model.NetworkSettings
import io.oyasai.chat.common.protocol.*
import java.util.UUID
import kotlin.test.*
import org.junit.jupiter.api.Test

class BackendIdentityTest {
  private val player = UUID.randomUUID()
  private val now = 100000L

  private fun response(request: NetworkEnvelope, backend: String = "lobby") =
      EnvelopeCodec.decode(
          EnvelopeCodec.encode(
              NetworkEnvelope.proxy(
                  type = MessageType.BACKEND_ID,
                  content = backend,
                  targetPlayerId = player,
                  replyToMessageId = request.messageId,
                  timestamp = now,
              )
          )
      )

  @Test
  fun `config is display fallback and only correlated proxy response confirms ID`() {
    val identity = BackendIdentity("main")
    assertEquals("main", identity.id)
    assertFalse(identity.confirmed)
    val request = identity.request(player, "Player", now)
    assertEquals(
        MessageType.BACKEND_ID_REQUEST,
        EnvelopeCodec.decode(EnvelopeCodec.encode(request)).type,
    )
    assertEquals(
        BackendIdentity.Acceptance.CONFIRMED,
        identity.accept(response(request), player, now),
    )
    assertEquals("lobby", identity.id)
    assertTrue(identity.confirmed)
    assertEquals(
        BackendIdentity.Acceptance.REJECTED,
        identity.accept(response(request), player, now),
    )
  }

  @Test
  fun `rejects spoofed uncorrelated wrong carrier and stale identities`() {
    val identity = BackendIdentity("main")
    val request = identity.request(player, "Player", now)
    val correct = response(request)
    listOf(
            correct.copy(originKind = MessageOrigin.BACKEND, originBackend = "lobby"),
            correct.copy(originBackend = "fake_proxy"),
            correct.copy(replyToMessageId = null),
            correct.copy(replyToMessageId = UUID.randomUUID()),
            correct.copy(targetPlayerId = UUID.randomUUID()),
            correct.copy(timestamp = 0),
            correct.copy(content = ""),
            correct.copy(content = "bad\nname"),
            correct.copy(content = "x".repeat(65)),
        )
        .forEach {
          assertEquals(BackendIdentity.Acceptance.REJECTED, identity.accept(it, player, now))
          assertFalse(identity.confirmed)
        }
    assertFailsWith<IllegalArgumentException> {
      EnvelopeCodec.decode(
          EnvelopeCodec.encode(
              correct.copy(originKind = MessageOrigin.BACKEND, originBackend = "lobby")
          )
      )
    }
    assertEquals(
        BackendIdentity.Acceptance.REJECTED,
        identity.accept(correct, UUID.randomUUID(), now),
    )
    assertEquals(
        BackendIdentity.Acceptance.REJECTED,
        identity.accept(correct.copy(timestamp = now + 31000), player, now + 31000),
    )
  }

  @Test
  fun `confirmed identity survives repeated notifications and disagreement fails closed`() {
    val identity = BackendIdentity("main")
    assertEquals(
        BackendIdentity.Acceptance.CONFIRMED,
        identity.accept(response(identity.request(player, "Player", now)), player, now),
    )
    assertEquals(
        BackendIdentity.Acceptance.CONFIRMED,
        identity.accept(response(identity.request(player, "Player", now)), player, now),
    )
    assertEquals(
        BackendIdentity.Acceptance.CONFLICT,
        identity.accept(response(identity.request(player, "Player", now), "axiom"), player, now),
    )
    assertEquals("lobby", identity.id)
    assertFalse(identity.confirmed)
    assertEquals(
        BackendIdentity.Acceptance.CONFLICT,
        identity.accept(response(identity.request(player, "Player", now), "axiom"), player, now),
    )
  }

  @Test
  fun `channel membership follows registered ID rather than initial config`() {
    val network = NetworkSettings("main", mapOf("gameplay" to setOf("main", "axiom")))
    val channel = ChannelDefinition("global", "Global", networkGroup = "gameplay")
    network.identity.accept(response(network.identity.request(player, "Player", now)), player, now)
    assertEquals("lobby", network.backendId)
    assertNull(network.groupFor(channel))
  }

  @Test
  fun `a conflict remains blocked even if the old name is announced again`() {
    val identity = BackendIdentity("main")
    identity.accept(response(identity.request(player, "Player", now)), player, now)
    identity.accept(response(identity.request(player, "Player", now), "axiom"), player, now)
    assertEquals(
        BackendIdentity.Acceptance.CONFLICT,
        identity.accept(response(identity.request(player, "Player", now)), player, now),
    )
    assertFalse(identity.confirmed)
  }

  @Test
  fun `disconnect invalidates pending request`() {
    val identity = BackendIdentity("main")
    val request = identity.request(player, "Player", now)
    identity.forget(player)
    assertEquals(
        BackendIdentity.Acceptance.REJECTED,
        identity.accept(response(request), player, now),
    )
  }
}
