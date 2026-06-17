package icu.oyasai.citiesskymine.access

import icu.oyasai.citiesskymine.Main
import icu.oyasai.citiesskymine.util.MessageUtil
import org.bukkit.command.BlockCommandSender
import org.bukkit.command.CommandSender
import org.bukkit.command.ConsoleCommandSender
import org.bukkit.entity.Player

class CsmAccessController(private val plugin: Main) {
  enum class CommandKey(val id: String, val legacyPermission: String) {
    RELOAD("reload", "citiesskymine.admin"),
    ROAD("road", "citiesskymine.road"),
    INTERSECTION("intersection", "citiesskymine.road"),
    FACADE("facade", "citiesskymine.build"),
    PAYLOAD("payload", "citiesskymine.payload"),
    LOAD("load", "citiesskymine.payload"),
    LOAD64("load64", "citiesskymine.payload"),
    WINDOW("window", "citiesskymine.window"),
    SLAB_STAIRS("slabstairs", "citiesskymine.slabstairs"),
    COLUMNS("columns", "citiesskymine.columns"),
    STACK("stack", "citiesskymine.stack"),
    SELECTION("selection", "citiesskymine.selection"),
    CONFIG("config", "citiesskymine.config"),
    CLOUD("cloud", "citiesskymine.cloud"),
    BEZIER("bezier", "citiesskymine.bezier"),
    DEBUGSTICK("debugstick", "citiesskymine.debugstick"),
    PRESET("preset", "citiesskymine.preset"),
  }

  fun require(sender: CommandSender, command: CommandKey): Boolean {
    if (canUse(sender, command)) return true
    MessageUtil.error(sender, "このコマンドを使用する権限がありません。")
    return false
  }

  fun canUse(sender: CommandSender, command: CommandKey): Boolean {
    if (!plugin.config.getBoolean("access.enabled", true)) {
      return sender.hasPermission(command.legacyPermission)
    }

    if (plugin.config.getBoolean("access.op-bypass", true) && sender.isOp) {
      return true
    }

    if (
        plugin.config.getBoolean("access.legacy-permissions-bypass", true) &&
            sender.hasPermission(command.legacyPermission)
    ) {
      return true
    }

    if (sender !is Player) {
      return nonPlayerCanUse(sender, command)
    }

    val roles = rolesFor(sender)
    if (roles.isEmpty()) return false
    val allowedRoles = allowedRoles(command)
    if (allowedRoles.any { it == "*" }) return true
    return allowedRoles.any { it in roles }
  }

  private fun nonPlayerCanUse(sender: CommandSender, command: CommandKey): Boolean {
    if (sender is ConsoleCommandSender && plugin.config.getBoolean("access.console-bypass", true)) {
      return true
    }
    if (sender is BlockCommandSender) {
      return commandMatches(
          command,
          plugin.config.getStringList("access.command-blocks.allowed-commands"),
      )
    }
    return commandMatches(
        command,
        plugin.config.getStringList("access.non-player.allowed-commands"),
    )
  }

  private fun rolesFor(player: Player): Set<String> {
    val result = LinkedHashSet<String>()
    for (role in roleIds()) {
      val permission = rolePermission(role)
      if (permission.isNotBlank() && player.hasPermission(permission)) {
        addRoleWithInheritance(role, result, LinkedHashSet())
      }
    }
    return result
  }

  private fun addRoleWithInheritance(
      role: String,
      result: MutableSet<String>,
      visiting: MutableSet<String>,
  ) {
    val normalized = role.lowercase()
    if (!visiting.add(normalized)) return
    result.add(normalized)
    for (parent in plugin.config.getStringList("access.roles.$normalized.inherits")) {
      addRoleWithInheritance(parent, result, visiting)
    }
    visiting.remove(normalized)
  }

  private fun roleIds(): Set<String> {
    val configured = plugin.config.getConfigurationSection("access.roles")?.getKeys(false).orEmpty()
    return (configured + DEFAULT_ROLE_PERMISSIONS.keys).map { it.lowercase() }.toSet()
  }

  private fun rolePermission(role: String): String =
      plugin.config.getString("access.roles.$role.permission")
          ?: DEFAULT_ROLE_PERMISSIONS[role]
          ?: "citiesskymine.role.$role"

  private fun allowedRoles(command: CommandKey): List<String> {
    val path = "access.commands.${command.id}"
    val rolesPath = "$path.roles"
    val configured =
        when {
          plugin.config.isList(path) -> plugin.config.getStringList(path)
          plugin.config.isList(rolesPath) -> plugin.config.getStringList(rolesPath)
          else -> DEFAULT_COMMAND_ROLES[command].orEmpty()
        }
    return configured.map { it.lowercase() }
  }

  private fun commandMatches(command: CommandKey, configured: List<String>): Boolean =
      configured.any { raw ->
        val value = raw.trim()
        value == "*" || value.equals(command.id, ignoreCase = true)
      }

  companion object {
    private val DEFAULT_ROLE_PERMISSIONS =
        mapOf(
            "admin" to "citiesskymine.role.admin",
            "takumi" to "citiesskymine.role.takumi",
            "builder" to "citiesskymine.role.builder",
        )

    private val DEFAULT_COMMAND_ROLES =
        mapOf(
            CommandKey.RELOAD to listOf("admin"),
            CommandKey.ROAD to listOf("builder", "takumi", "admin"),
            CommandKey.INTERSECTION to listOf("builder", "takumi", "admin"),
            CommandKey.FACADE to listOf("builder", "takumi", "admin"),
            CommandKey.PAYLOAD to listOf("takumi", "admin"),
            CommandKey.LOAD to listOf("takumi", "admin"),
            CommandKey.LOAD64 to listOf("takumi", "admin"),
            CommandKey.WINDOW to listOf("builder", "takumi", "admin"),
            CommandKey.SLAB_STAIRS to listOf("builder", "takumi", "admin"),
            CommandKey.COLUMNS to listOf("builder", "takumi", "admin"),
            CommandKey.STACK to listOf("builder", "takumi", "admin"),
            CommandKey.SELECTION to listOf("builder", "takumi", "admin"),
            CommandKey.CONFIG to listOf("builder", "takumi", "admin"),
            CommandKey.CLOUD to listOf("builder", "takumi", "admin"),
            CommandKey.BEZIER to listOf("builder", "takumi", "admin"),
            CommandKey.DEBUGSTICK to listOf("takumi", "admin"),
            CommandKey.PRESET to listOf("builder", "takumi", "admin"),
        )
  }
}
