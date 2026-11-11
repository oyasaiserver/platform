package io.oyasai.anybuilder.network

import io.netty.channel.ChannelDuplexHandler
import io.netty.channel.embedded.EmbeddedChannel
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertTrue

class MetadataHandlerTest {
  @Test
  fun `only installs before an existing packet handler`() {
    val channel = EmbeddedChannel()
    try {
      assertFalse(addMetadataHandler(channel.pipeline(), "filter", ChannelDuplexHandler()))
      channel.pipeline().addLast("packet_handler", ChannelDuplexHandler())
      assertTrue(addMetadataHandler(channel.pipeline(), "filter", ChannelDuplexHandler()))
      assertEquals(listOf("filter", "packet_handler"), channel.pipeline().names().take(2))
    } finally {
      channel.finishAndReleaseAll()
    }
  }
}
