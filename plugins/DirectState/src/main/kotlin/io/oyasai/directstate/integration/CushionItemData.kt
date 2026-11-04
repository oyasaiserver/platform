package io.oyasai.directstate.integration

import net.minecraft.world.entity.EntityType
import org.bukkit.craftbukkit.entity.CraftCushion
import org.bukkit.craftbukkit.entity.CraftPlayer
import org.bukkit.craftbukkit.inventory.CraftItemStack
import org.bukkit.entity.Cushion
import org.bukkit.entity.Player
import org.bukkit.inventory.ItemStack

internal object CushionItemData {
  fun apply(player: Player, cushion: Cushion, item: ItemStack) {
    val entity = (cushion as CraftCushion).handle
    val location = cushion.location
    EntityType.createDefaultStackConfig<net.minecraft.world.entity.decoration.Cushion>(
            entity.level(),
            CraftItemStack.asNMSCopy(item),
            (player as CraftPlayer).handle,
        )
        .apply(entity)
    entity.snapTo(location.x, location.y, location.z, location.yaw, location.pitch)
  }
}
