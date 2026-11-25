package icu.oyasai.games.kimodameshi

import org.bukkit.configuration.file.YamlConfiguration
import org.bukkit.inventory.PlayerInventory

internal fun restoreKimodameshiInventory(inventory: PlayerInventory, data: YamlConfiguration) {
  inventory.contents = Array(inventory.size) { data.getItemStack("slot.$it") }
  inventory.heldItemSlot = data.getInt("held-slot", inventory.heldItemSlot).coerceIn(0, 8)
}

internal fun recoveredKimodameshiState(state: String, inventoryCheckpointed: Boolean): String =
    when (state) {
      "preparing",
      "ending" -> "waiting"
      "grace",
      "playing" -> if (inventoryCheckpointed) state else "waiting"
      else -> state
    }
