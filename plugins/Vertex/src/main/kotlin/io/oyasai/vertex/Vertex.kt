package io.oyasai.vertex

import io.oyasai.vertex.services.schematics.OyasaiSchematics
import org.bukkit.plugin.java.JavaPlugin

class Vertex : JavaPlugin() {
  override fun onEnable() {
    val command = OyasaiSchematics
    server.commandMap.run {
      knownCommands.values.removeIf { it.name == command.name }
      register(command.name, command)
    }
  }

  companion object {
    val plugin by lazy { getPlugin(Vertex::class.java) }
  }
}
