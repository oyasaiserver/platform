package com.github.sahyuya.oyasaiMenu.util

import net.luckperms.api.LuckPermsProvider
import org.bukkit.entity.Player

object PlayerAccess {
  fun hasRequirement(player: Player, requirement: String?): Boolean {
    val value = requirement?.takeIf { it.isNotBlank() } ?: return true
    if (value.startsWith("lpgroup:", ignoreCase = true)) {
      return hasLuckPermsGroup(player, value.substringAfter(':'))
    }
    return hasPermission(player, value)
  }

  fun hasPermission(player: Player, permission: String): Boolean {
    if (permission.isBlank()) return true
    return runCatching {
          val user =
              LuckPermsProvider.get().userManager.getUser(player.uniqueId)
                  ?: return player.hasPermission(permission)
          user.cachedData.permissionData.checkPermission(permission).asBoolean()
        }
        .getOrElse { player.hasPermission(permission) }
  }

  private fun hasLuckPermsGroup(player: Player, groupName: String): Boolean {
    val group = groupName.trim()
    if (group.isEmpty()) return true
    return runCatching {
          val user =
              LuckPermsProvider.get().userManager.getUser(player.uniqueId)
                  ?: return player.hasPermission("group.$group")
          user.primaryGroup.equals(group, ignoreCase = true) ||
              user.cachedData.permissionData.checkPermission("group.$group").asBoolean()
        }
        .getOrElse {
          player.hasPermission("group.$group") || player.hasPermission("lpgroup:$group")
        }
  }
}
