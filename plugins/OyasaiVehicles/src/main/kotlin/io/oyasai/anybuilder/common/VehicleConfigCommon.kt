package io.oyasaiserver.anybuilder.common

import io.oyasaiserver.hasOyasaiAdminPermission
import io.oyasaiserver.toolbox.CustomYaml
import org.bukkit.command.CommandSender
import org.bukkit.entity.Player
import java.util.UUID

object VehicleConfigCommon {
    fun getOwnerUUID(config: CustomYaml): UUID? = config.getString("owner")?.let { raw ->
        try {
            UUID.fromString(raw)
        } catch (_: Exception) {
            null
        }
    }

    fun isOwnerOrAdmin(config: CustomYaml, sender: CommandSender): Boolean {
        if (sender.hasOyasaiAdminPermission()) return true
        if (sender !is Player) return false
        val owner = getOwnerUUID(config) ?: return true
        return sender.uniqueId == owner
    }
}
