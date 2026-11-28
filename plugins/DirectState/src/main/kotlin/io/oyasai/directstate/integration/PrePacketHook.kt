package io.oyasai.directstate.integration

import io.netty.channel.Channel
import io.netty.channel.ChannelDuplexHandler
import io.netty.channel.ChannelHandlerContext
import net.minecraft.core.BlockPos
import net.minecraft.network.protocol.Packet
import net.minecraft.network.protocol.PacketType
import net.minecraft.network.protocol.game.ServerGamePacketListener
import net.minecraft.network.protocol.game.ServerboundPlayerActionPacket
import net.minecraft.network.protocol.game.ServerboundUseItemOnPacket
import org.bukkit.Bukkit
import org.bukkit.block.Block
import org.bukkit.craftbukkit.CraftServer
import org.bukkit.craftbukkit.entity.CraftPlayer
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.player.PlayerJoinEvent
import org.bukkit.plugin.java.JavaPlugin

/**
 * PlayerInteractEvent / BlockBreakEvent のどのリスナー（他プラグインの LOWEST を含む）よりも先に、 メインスレッドの PacketProcessor
 * キュー上で対象ブロックの状態を確保する。
 */
internal class PrePacketHook(
    private val plugin: JavaPlugin,
    private val onPreUseItem: (Player, Block) -> Unit,
    private val onPreAction: (Player, Block) -> Unit,
) : Listener {
  private val handlerName = "directstate_pre_packet"

  fun injectAll() {
    plugin.server.onlinePlayers.forEach(::inject)
  }

  fun close() {
    plugin.server.onlinePlayers.forEach(::eject)
  }

  @EventHandler
  fun onJoin(event: PlayerJoinEvent) {
    inject(event.player)
  }

  private fun inject(player: Player) {
    val craft = player as? CraftPlayer ?: return
    val channel = craft.handle.connection.connection.channel
    if (!channel.isActive) return
    val pipeline = channel.pipeline()
    if (pipeline.get("packet_handler") == null || pipeline.get(handlerName) != null) return
    pipeline.addBefore("packet_handler", handlerName, PacketInterceptor(player, craft))
  }

  private fun eject(player: Player) {
    val craft = player as? CraftPlayer ?: return
    val channel = craft.handle.connection.connection.channel
    removeHandler(channel)
  }

  private fun removeHandler(channel: Channel) {
    val pipeline = channel.pipeline()
    if (pipeline.get(handlerName) != null) {
      runCatching { pipeline.remove(handlerName) }
    }
  }

  private inner class PacketInterceptor(
      private val player: Player,
      private val craft: CraftPlayer,
  ) : ChannelDuplexHandler() {
    override fun channelRead(ctx: ChannelHandlerContext, msg: Any) {
      when (msg) {
        is ServerboundUseItemOnPacket -> {
          schedule(msg.type(), msg.hitResult.blockPos, onPreUseItem)
        }
        is ServerboundPlayerActionPacket -> {
          if (
              msg.action == ServerboundPlayerActionPacket.Action.START_DESTROY_BLOCK ||
                  msg.action == ServerboundPlayerActionPacket.Action.STOP_DESTROY_BLOCK
          ) {
            schedule(msg.type(), msg.pos, onPreAction)
          }
        }
      }
      super.channelRead(ctx, msg)
    }

    private fun <T : Packet<ServerGamePacketListener>> schedule(
        packetType: PacketType<T>,
        pos: BlockPos,
        action: (Player, Block) -> Unit,
    ) {
      val server = (Bukkit.getServer() as? CraftServer)?.server ?: return
      val listener = craft.handle.connection
      server
          .packetProcessor()
          .scheduleIfPossible(
              listener,
              PrePacket(packetType) {
                if (!player.isOnline) return@PrePacket
                val world = player.world
                if (!world.isChunkLoaded(pos.x shr 4, pos.z shr 4)) return@PrePacket
                action(player, world.getBlockAt(pos.x, pos.y, pos.z))
              },
          )
    }
  }

  private class PrePacket<T : Packet<ServerGamePacketListener>>(
      private val packetType: PacketType<T>,
      private val task: () -> Unit,
  ) : Packet<ServerGamePacketListener> {
    override fun type(): PacketType<out Packet<ServerGamePacketListener>> = packetType

    override fun handle(listener: ServerGamePacketListener) = task()
  }
}
