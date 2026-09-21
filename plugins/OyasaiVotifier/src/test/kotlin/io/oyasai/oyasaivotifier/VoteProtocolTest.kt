package io.oyasai.oyasaivotifier

import com.vexsoftware.votifier.model.Vote
import java.io.InputStream
import java.net.Socket
import java.security.KeyPair
import java.security.KeyPairGenerator
import java.util.Base64
import java.util.UUID
import java.util.concurrent.CountDownLatch
import java.util.concurrent.TimeUnit
import java.util.logging.Logger
import javax.crypto.Cipher
import javax.crypto.Mac
import javax.crypto.spec.SecretKeySpec
import kotlin.test.Test
import kotlin.test.assertContentEquals
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertTrue

class VoteProtocolTest {
  @Test
  fun `v1 cipher round trip uses the legacy 256 byte block`() {
    val pair = keyPair()
    val plaintext = "VOTE\nsite\nPlayer\n127.0.0.1\n1\n".toByteArray().copyOf(245)
    val encrypted = encrypt(pair, plaintext)
    val decrypted =
        Cipher.getInstance("RSA/ECB/PKCS1Padding").run {
          init(Cipher.DECRYPT_MODE, pair.private)
          doFinal(encrypted)
        }
    assertContentEquals(plaintext, decrypted)
  }

  @Test
  fun `v2 HMAC accepts the exact payload bytes and rejects changes`() {
    val payload = "{\"serviceName\":\"site\",\"username\":\"Player\"}"
    val signature = signature(payload)
    assert(validHmac("secret", payload, signature))
    assertFalse(validHmac("secret", "$payload ", signature))
  }

  @Test
  fun `v1 wire packet constructs a vote`() = withServer { server, pair, received, accepted ->
    Socket("127.0.0.1", server.port).use { socket ->
      socket.soTimeout = 2_000
      assertTrue(socket.inputStream.readAsciiLine().startsWith("VOTIFIER 2 "))
      socket
          .getOutputStream()
          .write(encrypt(pair, "VOTE\nsite\nPlayer\n127.0.0.1\n1\n".toByteArray()))
      socket.getOutputStream().flush()
    }
    assertTrue(accepted.await(2, TimeUnit.SECONDS))
    assertEquals(VoteProtocol.V1, received.protocol)
    assertEquals("site", received.vote.getServiceName())
    assertEquals("Player", received.vote.getUsername())
  }

  @Test
  fun `v2 magic packet validates challenge and preserves uuid`() =
      withServer { server, _, received, accepted ->
        val uuid = UUID.randomUUID()
        Socket("127.0.0.1", server.port).use { socket ->
          socket.soTimeout = 2_000
          val challenge = socket.inputStream.readAsciiLine().removePrefix("VOTIFIER 2 ")
          sendV2(
              socket,
              "{\"serviceName\":\"site\",\"username\":\"Player\",\"address\":\"127.0.0.1\",\"timestamp\":\"1\",\"challenge\":\"$challenge\",\"uuid\":\"$uuid\"}",
          )
          assertEquals("{\"status\":\"ok\"}", socket.inputStream.readAsciiLine())
        }
        assertTrue(accepted.await(2, TimeUnit.SECONDS))
        assertEquals(VoteProtocol.V2, received.protocol)
        assertEquals(uuid, received.vote.playerUuid())
      }

  @Test
  fun `v2 rejects an incorrect challenge and too-short packet`() =
      withServer { server, _, _, accepted ->
        Socket("127.0.0.1", server.port).use { socket ->
          socket.soTimeout = 2_000
          socket.inputStream.readAsciiLine()
          sendV2(
              socket,
              "{\"serviceName\":\"site\",\"username\":\"Player\",\"address\":\"127.0.0.1\",\"timestamp\":\"1\",\"challenge\":\"wrong\"}",
          )
        }
        Socket("127.0.0.1", server.port).use { socket ->
          socket.inputStream.readAsciiLine()
          socket.getOutputStream().run {
            write(byteArrayOf(0x73, 0x3A, 0, 1, 0))
            flush()
          }
        }
        assertFalse(accepted.await(300, TimeUnit.MILLISECONDS))
      }

  @Test
  fun `v2 accepts the 65535 byte packet boundary`() = withServer { server, _, _, accepted ->
    Socket("127.0.0.1", server.port).use { socket ->
      socket.soTimeout = 2_000
      val challenge = socket.inputStream.readAsciiLine().removePrefix("VOTIFIER 2 ")
      val payload =
          "{\"serviceName\":\"site\",\"username\":\"Player\",\"address\":\"127.0.0.1\",\"timestamp\":\"1\",\"challenge\":\"$challenge\"}"
      sendV2(socket, payload, 65_535)
      assertEquals("{\"status\":\"ok\"}", socket.inputStream.readAsciiLine())
    }
    assertTrue(accepted.await(2, TimeUnit.SECONDS))
  }

  private fun withServer(block: (VoteServer, KeyPair, Received, CountDownLatch) -> Unit) {
    val pair = keyPair()
    val received = Received()
    val accepted = CountDownLatch(1)
    val server =
        VoteServer(Logger.getLogger("VoteProtocolTest"), config(), pair) { vote, protocol ->
          received.vote = vote
          received.protocol = protocol
          accepted.countDown()
        }
    server.start()
    try {
      block(server, pair, received, accepted)
    } finally {
      server.close()
    }
  }

  private fun config() =
      VotifierConfig(
          "127.0.0.1",
          0,
          1,
          true,
          mapOf("default" to "secret"),
          RewardTable(listOf(WeightedReward(1, Reward(0.0, 0, emptyList())))),
          PartyReward(
              1,
              RewardTable(listOf(WeightedReward(1, Reward(0.0, 0, emptyList())))),
              emptyList(),
          ),
      )

  private fun keyPair(): KeyPair =
      KeyPairGenerator.getInstance("RSA").apply { initialize(2048) }.generateKeyPair()

  private fun encrypt(pair: KeyPair, plaintext: ByteArray): ByteArray =
      Cipher.getInstance("RSA/ECB/PKCS1Padding").run {
        init(Cipher.ENCRYPT_MODE, pair.public)
        doFinal(plaintext)
      }

  private fun sendV2(socket: Socket, payload: String, length: Int? = null) {
    val body =
        "{\"payload\":\"${payload.replace("\\", "\\\\").replace("\"", "\\\"")}\",\"signature\":\"${signature(payload)}\"}"
            .let { json -> length?.let { json + " ".repeat(it - json.toByteArray().size) } ?: json }
            .toByteArray()
    require(body.size <= 65_535)
    socket.getOutputStream().run {
      write(byteArrayOf(0x73, 0x3A, (body.size ushr 8).toByte(), body.size.toByte()))
      write(body)
      flush()
    }
  }

  private fun signature(payload: String): String =
      Mac.getInstance("HmacSHA256")
          .run {
            init(SecretKeySpec("secret".encodeToByteArray(), "HmacSHA256"))
            doFinal(payload.encodeToByteArray())
          }
          .let(Base64.getEncoder()::encodeToString)

  private fun InputStream.readAsciiLine(): String {
    val bytes = ArrayList<Byte>()
    while (true) {
      val next = read()
      require(next >= 0) { "Connection closed before newline" }
      if (next == '\n'.code) return bytes.toByteArray().decodeToString().removeSuffix("\r")
      bytes += next.toByte()
    }
  }

  private class Received {
    lateinit var vote: Vote
    lateinit var protocol: VoteProtocol
  }
}
