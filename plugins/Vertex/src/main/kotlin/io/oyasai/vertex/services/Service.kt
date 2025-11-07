package io.oyasai.vertex.services

import org.bukkit.command.Command
import org.bukkit.event.Listener

abstract class Service : Listener {
  open val commands: List<Command> = listOf()

  fun onLoad() {}

  fun onEnable() {}

  fun onDisable() {}
}
