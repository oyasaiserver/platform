package com.github.sahyuya.oyasaiMusic.interop

import com.github.sahyuya.oyasaiMusic.OyasaiMusic
import org.bukkit.entity.Player
import org.bukkit.plugin.messaging.PluginMessageListener

/** Paper-side registration and bounded dispatch for OMMT plugin messages. */
class OyasaiPluginMessaging(
    private val plugin: OyasaiMusic,
    private val uploads: OmmtUploadService,
    private val clients: OmmtPlaybackClientRegistry,
) : PluginMessageListener {
  private var enabled = false

  fun enable() {
    if (enabled) return
    enabled = true
    val messenger = plugin.server.messenger
    messenger.registerOutgoingPluginChannel(plugin, UploadPacketCodec.CHANNEL)
    messenger.registerIncomingPluginChannel(plugin, UploadPacketCodec.CHANNEL, this)
    messenger.registerOutgoingPluginChannel(plugin, PlaybackBuffer.CHANNEL)
    messenger.registerIncomingPluginChannel(plugin, PlaybackBuffer.CHANNEL, this)
    uploads.bindPacketSender(::sendUpload)
  }

  fun disable() {
    if (!enabled) return
    enabled = false
    uploads.bindPacketSender(null)
    val messenger = plugin.server.messenger
    messenger.unregisterIncomingPluginChannel(plugin, UploadPacketCodec.CHANNEL, this)
    messenger.unregisterOutgoingPluginChannel(plugin, UploadPacketCodec.CHANNEL)
    messenger.unregisterIncomingPluginChannel(plugin, PlaybackBuffer.CHANNEL, this)
    messenger.unregisterOutgoingPluginChannel(plugin, PlaybackBuffer.CHANNEL)
  }

  override fun onPluginMessageReceived(channel: String, player: Player, message: ByteArray) {
    if (!enabled || !player.isOnline) return
    val maximum =
        when (channel) {
          UploadPacketCodec.CHANNEL -> UploadPacketCodec.MAX_PACKET_BYTES
          PlaybackBuffer.CHANNEL -> PlaybackWireCodec.MAX
          else -> return
        }
    if (!PluginMessageBounds.accepts(message.size) || message.size > maximum) return
    val copy = message.copyOf()
    val action = Runnable { dispatch(channel, player, copy) }
    if (plugin.server.isPrimaryThread) action.run()
    else plugin.server.scheduler.runTask(plugin, action)
  }

  private fun dispatch(channel: String, player: Player, message: ByteArray) {
    if (!enabled || !player.isOnline) return
    when (channel) {
      UploadPacketCodec.CHANNEL -> {
        val decoded = runCatching { UploadPacketCodec.decodeClient(message) }.getOrNull() ?: return
        uploads.handlePacket(player, decoded)
      }
      PlaybackBuffer.CHANNEL -> {
        val decoded = runCatching { PlaybackWireCodec.decode(message) }.getOrNull() ?: return
        clients.handlePacket(player, decoded)
      }
    }
  }

  private fun sendUpload(player: Player, bytes: ByteArray) {
    if (enabled && player.isOnline && bytes.size <= UploadPacketCodec.MAX_PACKET_BYTES) {
      player.sendPluginMessage(plugin, UploadPacketCodec.CHANNEL, bytes)
    }
  }
}
