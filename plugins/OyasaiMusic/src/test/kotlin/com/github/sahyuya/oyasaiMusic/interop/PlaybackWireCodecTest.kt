package com.github.sahyuya.oyasaiMusic.interop

import java.nio.ByteBuffer
import java.util.UUID
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith

class PlaybackWireCodecTest {
  @Test
  fun `only supported Minecraft versions advertise the new capabilities`() {
    val cases =
        mapOf(
            "26.2" to 0x1f,
            "26.3" to 0x1f,
            "26.3.build.2655-stable" to 0x1f,
            "26.1" to 0,
            "26.4" to 0,
            "1.21.11" to 0,
            "unknown" to 0,
        )
    for ((version, expectedFlags) in cases) {
      val message = PlaybackWireCodec.decode(PlaybackBuffer.serverCapabilitiesEnvelope(version))
      assertEquals(10, message.type, version)
      assertEquals(UUID(0, 0), message.id, version)
      assertEquals(4, message.body.size, version)
      assertEquals(expectedFlags, ByteBuffer.wrap(message.body).int, version)
    }
  }

  @Test
  fun `incoming envelope rejects truncated oversized and unknown-version packets`() {
    val session = UUID(2, 3)
    val packet = PlaybackWireCodec.encode(9, session) { write(ByteArray(24 * 1024 - 18)) }
    val message = PlaybackWireCodec.decode(packet)
    assertEquals(session, message.id)
    assertEquals(24 * 1024 - 18, message.body.size)
    assertFailsWith<IllegalArgumentException> { PlaybackWireCodec.decode(packet.copyOf(17)) }
    assertFailsWith<IllegalArgumentException> { PlaybackWireCodec.decode(packet + 0.toByte()) }
    val unknownVersion = packet.copyOf().apply { this[0] = 2 }
    assertFailsWith<IllegalArgumentException> { PlaybackWireCodec.decode(unknownVersion) }
  }
}
