package com.ququla89.headhunt.model

import org.bukkit.Location
import org.bukkit.World
import java.util.UUID

data class Treasure(
    val id: UUID,
    val worldName: String,
    val x: Int,
    val y: Int,
    val z: Int,
) {
    fun toLocation(worldResolver: (String) -> World?): Location? {
        val world = worldResolver(worldName) ?: return null
        return Location(world, x.toDouble(), y.toDouble(), z.toDouble())
    }

    companion object {
        fun fromLocation(id: UUID, location: Location): Treasure =
            Treasure(
                id = id,
                worldName = requireNotNull(location.world) { "Location must have a world" }.name,
                x = location.blockX,
                y = location.blockY,
                z = location.blockZ,
            )
    }
}
