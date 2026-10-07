package me.ankokunsan.entityPose

import me.ankokunsan.entityPose.EntityPose.Companion.GUI_KEY
import org.bukkit.Material
import org.bukkit.inventory.ItemStack
import org.bukkit.persistence.PersistentDataType

internal fun getFiller(): ItemStack {
  return ItemStack(Material.LIGHT_GRAY_STAINED_GLASS_PANE).apply {
    itemMeta =
        itemMeta?.apply {
          setDisplayName(" ")
          persistentDataContainer.set(GUI_KEY, PersistentDataType.STRING, "FILLER")
        }
  }
}

internal fun formatLoc(value: Double): String {
  return String.format("%.3f", value)
}
