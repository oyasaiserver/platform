package io.oyasai.anybuilder.common

import io.oyasai.Permissions
import io.oyasai.toolbox.CustomYaml
import java.util.UUID
import org.bukkit.command.CommandSender
import org.bukkit.entity.Player

object VehicleConfigCommon {
  fun getOwnerUUID(config: CustomYaml): UUID? =
      config.getString("owner")?.let { raw ->
        try {
          UUID.fromString(raw)
        } catch (_: Exception) {
          null
        }
      }

  fun isOwnerOrAdmin(config: CustomYaml, sender: CommandSender): Boolean {
    if (sender.hasPermission(Permissions.ADMIN)) return true
    if (sender !is Player) return false
    val owner = getOwnerUUID(config) ?: return true
    return sender.uniqueId == owner
  }
}
