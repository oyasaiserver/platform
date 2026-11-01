package io.oyasai.oyasaiAdminTools.assistant

import com.sk89q.bukkit.util.DynamicPluginCommand
import com.sk89q.worldedit.bukkit.WorldEditPlugin
import org.bukkit.command.Command
import org.enginehub.piston.CommandManager

/** Optional FAWE linkage stays outside the general command rules. Unknown shapes fail closed. */
internal object FaweCommandIdentity {
  private val inspector =
      Class.forName(
          "com.sk89q.worldedit.bukkit.BukkitCommandInspector",
          false,
          WorldEditPlugin::class.java.classLoader,
      )
  private val dispatcher = inspector.getDeclaredField("dispatcher").apply { isAccessible = true }
  private val plugin = inspector.getDeclaredField("plugin").apply { isAccessible = true }

  fun resolve(command: Command, label: String): Pair<String, Any>? {
    if (command.javaClass !== DynamicPluginCommand::class.java) return null
    val dynamic = command as DynamicPluginCommand
    if (dynamic.plugin !is WorldEditPlugin || dynamic.owner !== dynamic.plugin) return null
    val registration = dynamic.registeredWith
    if (registration?.javaClass !== inspector || plugin.get(registration) !== dynamic.plugin)
        return null
    val manager = dispatcher.get(registration) as CommandManager
    val delegate = manager.getCommand(label.substringAfter(':')).orElse(null) ?: return null
    return delegate.name to delegate
  }
}
