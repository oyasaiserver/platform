package com.github.sahyuya.oyasaiMenu.util

import net.luckperms.api.LuckPermsProvider
import net.luckperms.api.query.QueryOptions
import org.bukkit.entity.Player

object PermissionCondition {
  fun matches(player: Player, raw: String?): Boolean {
    val condition = raw?.trim()?.takeIf { it.isNotEmpty() } ?: return true
    val group =
        when {
          condition.startsWith("lpgroup:", ignoreCase = true) -> condition.substringAfter(':')
          condition.startsWith("group:", ignoreCase = true) -> condition.substringAfter(':')
          condition.startsWith("group.", ignoreCase = true) -> condition.substringAfter('.')
          else -> null
        }?.trim()

    if (!group.isNullOrEmpty()) {
      return hasLuckPermsGroup(player, group) || player.hasPermission("group.$group")
    }
    return player.hasPermission(condition)
  }

  private fun hasLuckPermsGroup(player: Player, group: String): Boolean =
      runCatching {
            val lp = LuckPermsProvider.get()
            val user = lp.userManager.getUser(player.uniqueId) ?: return player.hasPermission("group.$group")
            user.primaryGroup.equals(group, ignoreCase = true) ||
                user.getInheritedGroups(QueryOptions.nonContextual())
                    .any { it.name.equals(group, ignoreCase = true) }
          }
          .getOrElse { player.hasPermission("group.$group") }
}
