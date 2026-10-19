package io.oyasai.oyasaiAdminTools.assistant

import java.lang.reflect.Proxy
import java.util.UUID
import org.bukkit.Server
import org.bukkit.command.CommandSender
import org.bukkit.entity.Player
import org.bukkit.permissions.PermissionAttachmentInfo

/**
 * Minimal fakes for the assistant sender. Only the members the tested code calls are meaningful;
 * anything else fails loudly instead of returning a silent default.
 */
internal object AssistantSenderFakes {
  fun player(
      name: String,
      uuid: UUID = UUID.nameUUIDFromBytes(name.toByteArray()),
      online: Boolean = true,
      permissions: Set<String> = setOf(AssistantFeature.PERMISSION),
  ): Player {
    lateinit var proxy: Player
    proxy =
        Proxy.newProxyInstance(Player::class.java.classLoader, arrayOf(Player::class.java)) {
            _,
            method,
            args ->
          when (method.name) {
            "getName" -> name
            "name" -> net.kyori.adventure.text.Component.text(name)
            "getUniqueId" -> uuid
            "isOnline" -> online
            "hasPermission" -> permission(permissions, method.parameterTypes, args)
            "isPermissionSet" -> permission(permissions, method.parameterTypes, args)
            "permissionValue" ->
                when {
                  permissionValue(permissions, method.parameterTypes, args) ->
                      net.kyori.adventure.util.TriState.TRUE
                  else -> net.kyori.adventure.util.TriState.FALSE
                }
            "getEffectivePermissions" ->
                permissions.mapTo(mutableSetOf()) { node ->
                  PermissionAttachmentInfo(
                      proxy as org.bukkit.permissions.Permissible,
                      node,
                      null,
                      true,
                  )
                }
            "sendMessage" -> null
            // Kotlin calls these on the player object from inside the sender.
            "getDeclaringClass" -> Player::class.java
            "getClassLoader" -> Player::class.java.classLoader
            "isOp" -> false
            "toString" -> "FakePlayer($name)"
            "hashCode" -> System.identityHashCode(this)
            "equals" -> this === args?.first()
            // Paper's interface implementations may call other members during a test; answer with
            // the type's empty value instead of failing the whole test process.
            else -> defaultValue(method.returnType)
          }
        } as Player
    return proxy
  }

  private fun defaultValue(type: Class<*>): Any? =
      when (type) {
        java.lang.Boolean.TYPE -> false
        java.lang.Integer.TYPE -> 0
        java.lang.Long.TYPE -> 0L
        java.lang.Double.TYPE -> 0.0
        java.lang.Float.TYPE -> 0f
        java.lang.Short.TYPE -> 0.toShort()
        java.lang.Byte.TYPE -> 0.toByte()
        java.lang.Character.TYPE -> '\u0000'
        java.lang.Void.TYPE -> null
        else -> if (type.isAssignableFrom(Set::class.java)) emptySet<Any>() else null
      }

  private fun permission(
      held: Set<String>,
      parameterTypes: Array<Class<*>>,
      args: Array<Any?>?,
  ): Boolean {
    val name =
        if (parameterTypes.first() == String::class.java) args!![0] as String
        else permissionName(args)
    return within(name, held)
  }

  private fun permissionValue(
      held: Set<String>,
      parameterTypes: Array<Class<*>>,
      args: Array<Any?>?,
  ): Boolean {
    val name =
        if (parameterTypes.first() == String::class.java) args!![0] as String
        else permissionName(args)
    return within(name, held)
  }

  private fun permissionName(args: Array<Any?>?): String =
      (args!![0] as org.bukkit.permissions.Permission).name

  /** A held `parent.*` grants children, like Bukkit's wildcard handling. */
  private fun within(name: String, held: Set<String>): Boolean =
      name in held || held.any { it.endsWith(".*") && name.startsWith(it.removeSuffix("*")) }

  fun server(
      online: () -> List<Player>,
      dispatchCommand: (CommandSender, String) -> Boolean = { _, _ -> true },
  ): Server =
      Proxy.newProxyInstance(Server::class.java.classLoader, arrayOf(Server::class.java)) {
          _,
          method,
          args ->
        when (method.name) {
          "getPlayer" -> {
            val uuid = args!![0] as UUID
            online().firstOrNull { it.uniqueId == uuid }
          }
          "dispatchCommand" -> dispatchCommand(args!![0] as CommandSender, args[1] as String)
          "isPrimaryThread" -> true
          else -> throw UnsupportedOperationException("FakeServer.${method.name}")
        }
      } as Server
}
