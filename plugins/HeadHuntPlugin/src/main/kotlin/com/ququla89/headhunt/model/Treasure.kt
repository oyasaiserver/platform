package com.ququla89.headhunt.model

import java.util.UUID
import org.bukkit.Location
import org.bukkit.World

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
    fun fromLocation(
        id: UUID,
        location: Location,
    ): Treasure =
        Treasure(
            id = id,
            worldName = requireNotNull(location.world) { "座標にはワールドが必要です。" }.name,
            x = location.blockX,
            y = location.blockY,
            z = location.blockZ,
        )
  }
}
