package io.oyasai.oyasaivotifier

import java.security.KeyPairGenerator
import java.util.Base64
import javax.crypto.Cipher
import javax.crypto.Mac
import javax.crypto.spec.SecretKeySpec
import kotlin.test.Test
import kotlin.test.assertContentEquals

class VoteProtocolTest {
  @Test
  fun `v1 cipher round trip uses the legacy 256 byte block`() {
    val pair = KeyPairGenerator.getInstance("RSA").apply { initialize(2048) }.generateKeyPair()
    val plaintext = "VOTE\\nsite\\nPlayer\\n127.0.0.1\\n1\\n".toByteArray().copyOf(245)
    val encrypted =
        Cipher.getInstance("RSA/ECB/PKCS1Padding").run {
          init(Cipher.ENCRYPT_MODE, pair.public)
          doFinal(plaintext)
        }
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
    val signature =
        Mac.getInstance("HmacSHA256")
            .run {
              init(SecretKeySpec("secret".encodeToByteArray(), "HmacSHA256"))
              doFinal(payload.encodeToByteArray())
            }
            .let(Base64.getEncoder()::encodeToString)
    assert(validHmac("secret", payload, signature))
    assert(!validHmac("secret", "$payload ", signature))
  }
}
