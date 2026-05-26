package io.oyasai.anybuilder.network

import io.netty.channel.ChannelDuplexHandler
import io.netty.channel.ChannelHandlerContext
import io.netty.channel.ChannelPromise
import io.oyasai.VehicleMenuCommand
import io.oyasai.anybuilder.runtime.EntityRuntime
import java.util.UUID
import java.util.concurrent.ConcurrentHashMap
import net.minecraft.network.protocol.Packet
import net.minecraft.network.protocol.game.ClientGamePacketListener
import net.minecraft.network.protocol.game.ClientboundBundlePacket
import net.minecraft.network.protocol.game.ClientboundSetEntityDataPacket
import org.bukkit.Bukkit
import org.bukkit.craftbukkit.entity.CraftPlayer
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.player.PlayerJoinEvent
import org.bukkit.event.player.PlayerQuitEvent
import org.bukkit.plugin.Plugin

object NmsMetadataFilterService : Listener {
  private const val HANDLER_PREFIX = "oyasaivehicles_metadata_filter_"
  private val injectedPlayers: MutableSet<UUID> = ConcurrentHashMap.newKeySet()

  fun enable(plugin: Plugin) {
    plugin.server.pluginManager.registerEvents(this, plugin)
    Bukkit.getOnlinePlayers().forEach { inject(it) }
  }

  fun disable() {
    Bukkit.getOnlinePlayers().forEach { uninject(it) }
    injectedPlayers.clear()
  }

  @EventHandler
  fun onPlayerJoin(event: PlayerJoinEvent) {
    inject(event.player)
  }

  @EventHandler
  fun onPlayerQuit(event: PlayerQuitEvent) {
    uninject(event.player)
  }

  private fun inject(player: Player) {
    val uuid = player.uniqueId
    val channel = (player as CraftPlayer).handle.connection.connection.channel ?: return
    val handlerName = HANDLER_PREFIX + uuid

    channel.eventLoop().execute {
      if (channel.pipeline().get(handlerName) == null) {
        channel.pipeline().addBefore("packet_handler", handlerName, MetadataFilterHandler(uuid))
      }
      injectedPlayers.add(uuid)
    }
  }

  private fun uninject(player: Player) {
    val uuid = player.uniqueId
    val channel = (player as CraftPlayer).handle.connection.connection.channel ?: return
    val handlerName = HANDLER_PREFIX + uuid

    channel.eventLoop().execute {
      if (channel.pipeline().get(handlerName) != null) {
        channel.pipeline().remove(handlerName)
      }
      injectedPlayers.remove(uuid)
    }
  }

  private class MetadataFilterHandler(private val playerUUID: UUID) : ChannelDuplexHandler() {
    override fun write(ctx: ChannelHandlerContext, msg: Any, promise: ChannelPromise) {
      if (msg is Packet<*>) {
        when (msg) {
          is ClientboundSetEntityDataPacket -> {
            if (shouldCancelMetadataPacket(playerUUID, msg)) {
              promise.setSuccess()
              return
            }
          }
          is ClientboundBundlePacket -> {
            val originalPackets = msg.subPackets().toList()
            val kept =
                originalPackets.filterNot { packet -> shouldCancelPacket(playerUUID, packet) }

            if (kept.isEmpty()) {
              promise.setSuccess()
              return
            }

            if (kept.size != originalPackets.size) {
              if (kept.size == 1) {
                ctx.write(kept[0], promise)
              } else {
                val rebuilt =
                    ClientboundBundlePacket(kept.map { it as Packet<in ClientGamePacketListener> })
                ctx.write(rebuilt, promise)
              }
              return
            }
          }
        }
      }

      super.write(ctx, msg, promise)
    }
  }

  private fun shouldCancelPacket(playerUUID: UUID, packet: Packet<*>): Boolean {
    return packet is ClientboundSetEntityDataPacket &&
        shouldCancelMetadataPacket(playerUUID, packet)
  }

  private fun shouldCancelMetadataPacket(
      playerUUID: UUID,
      packet: ClientboundSetEntityDataPacket,
  ): Boolean {
    if (!EntityRuntime.displayEntityIds.contains(packet.id())) return false

    val packetTick = EntityRuntime.packetTick
    when (VehicleMenuCommand.net(playerUUID).currentModeIndex()) {
      0 -> return false
      1 -> if (packetTick != 3) return false
      2 -> if (packetTick % 2 != 0) return false
      3 -> if (packetTick == 0) return false
    }

    val str = packet.packedItems().toString()
    return str.length > 15 && (str[14] != '2' || str[15] != ',')
  }
}
