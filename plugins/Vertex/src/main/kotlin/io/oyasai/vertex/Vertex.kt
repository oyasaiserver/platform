package io.oyasai.vertex

import io.oyasai.vertex.services.Service
import io.oyasai.vertex.services.schematics.SchematicsService
import org.bukkit.plugin.java.JavaPlugin

class Vertex : JavaPlugin() {
  override fun onLoad() {
    services.forEach { it.onLoad() }
  }

  override fun onEnable() {
    services.forEach { service ->
      server.pluginManager.registerEvents(service, this)
      service.commands.forEach { command ->
        server.commandMap.run {
          knownCommands.values.removeIf { it.name == command.name }
          register(command.name, command)
        }
      }
      service.onEnable()
    }
  }

  override fun onDisable() {
    services.forEach { it.onDisable() }
  }

  companion object {
    val plugin by lazy { getPlugin(Vertex::class.java) }
    val services = listOf<Service>(SchematicsService)
  }
}
