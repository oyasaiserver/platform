package io.oyasai.oyasaiAdminTools.assistant

import com.sk89q.bukkit.util.DynamicPluginCommand
import com.sk89q.worldedit.bukkit.WorldEditPlugin
import com.sk89q.worldedit.util.formatting.text.TextComponent
import org.bukkit.command.Command
import org.bukkit.plugin.PluginDescriptionFile
import org.bukkit.plugin.java.JavaPlugin
import org.enginehub.piston.impl.CommandManagerImpl
import sun.misc.Unsafe

/** Shape produced by registering FAWE commands twice: bare keys keep the first wrapper. */
internal class FaweCommandFakes(val known: MutableMap<String, Command> = linkedMapOf()) {
  val dispatcher = CommandManagerImpl()
  val plugin =
      (Unsafe::class.java.getDeclaredField("theUnsafe").apply { isAccessible = true }.get(null)
              as Unsafe)
          .allocateInstance(WorldEditPlugin::class.java) as WorldEditPlugin
  private val inspectorClass = Class.forName("com.sk89q.worldedit.bukkit.BukkitCommandInspector")

  init {
    val description =
        PluginDescriptionFile("FastAsyncWorldEdit", "test", WorldEditPlugin::class.java.name)
    for (field in listOf("description", "pluginMeta")) JavaPlugin::class
        .java
        .getDeclaredField(field)
        .apply { isAccessible = true }
        .set(plugin, description)
  }

  fun wrapper(name: String, aliases: List<String> = emptyList()): DynamicPluginCommand {
    val inspector =
        inspectorClass.declaredConstructors
            .single()
            .apply { isAccessible = true }
            .newInstance(plugin, dispatcher)
    return DynamicPluginCommand(arrayOf(name), "", "", plugin, inspector, plugin).apply {
      this.aliases = aliases
    }
  }

  fun replaceDelegate(name: String) {
    val replacement =
        CommandManagerImpl().apply {
          register(name) { it.description(TextComponent.of("replacement")) }
        }
    val canonical = known.getValue("fastasyncworldedit:$name") as DynamicPluginCommand
    inspectorClass
        .getDeclaredField("dispatcher")
        .apply { isAccessible = true }
        .set(canonical.registeredWith, replacement)
  }

  fun register(name: String, aliases: List<String> = emptyList()): Command {
    dispatcher.register(name) { it.aliases(aliases).description(TextComponent.of("test")) }
    val original = wrapper(name, aliases)
    val canonical = wrapper(name)
    for (label in listOf(name) + aliases) {
      known[label] = original
      known["fastasyncworldedit:$label"] = canonical
    }
    return canonical
  }
}
