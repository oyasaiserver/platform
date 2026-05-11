package io.oyasaiserver.anybuilder.runtime

import net.minecraft.world.entity.decoration.ArmorStand
import net.minecraft.world.phys.AABB
import net.minecraft.world.phys.Vec3
import org.bukkit.Location
import org.bukkit.craftbukkit.CraftWorld
import org.bukkit.event.entity.CreatureSpawnEvent.SpawnReason

private class CustomArmorStandEntity(loc: Location, x: Double, y: Double) : ArmorStand((loc.world as CraftWorld).handle, loc.x, loc.y, loc.z) {
    private val aabbX: Double = x * 0.707
    private val aabbY: Double = y

    init {
        (loc.world as CraftWorld).handle.addFreshEntity(this, SpawnReason.CUSTOM)
    }

    override fun makeBoundingBox(position: Vec3): AABB {
        return super.makeBoundingBox(position)
            .expandTowards(aabbX, aabbY, aabbX)
            .expandTowards(-aabbX, 0.0, -aabbX)
    }
}

object ArmorStandSpawner {
    fun spawn(loc: Location, x: Double, y: Double): org.bukkit.entity.ArmorStand {
        val entity = CustomArmorStandEntity(loc, x, y)
        return entity.bukkitEntity as org.bukkit.entity.ArmorStand
    }
}
