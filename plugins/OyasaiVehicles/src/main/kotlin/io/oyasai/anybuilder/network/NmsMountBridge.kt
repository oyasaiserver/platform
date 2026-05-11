package io.oyasaiserver.anybuilder.network

import io.netty.buffer.Unpooled
import net.minecraft.network.FriendlyByteBuf
import net.minecraft.network.protocol.game.ClientboundSetPassengersPacket
import org.bukkit.craftbukkit.entity.CraftPlayer
import org.bukkit.entity.Player
import kotlin.math.max

object NmsMountBridge {
    fun sendMountPacket(player: Player, vehicleEntityId: Int, passengerEntityIds: IntArray) {
        val packet = createSetPassengersPacket(vehicleEntityId, passengerEntityIds)
        (player as CraftPlayer).handle.connection.send(packet)
    }

    private fun createSetPassengersPacket(vehicleEntityId: Int, passengerEntityIds: IntArray): ClientboundSetPassengersPacket {
        val buf = FriendlyByteBuf(Unpooled.buffer(max(32, 8 + passengerEntityIds.size * 5)))
        buf.writeVarInt(vehicleEntityId)
        buf.writeVarIntArray(passengerEntityIds)
        return ClientboundSetPassengersPacket.STREAM_CODEC.decode(buf)
    }
}
