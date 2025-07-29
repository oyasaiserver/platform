package io.oyasai.lib.minecraft

import org.bukkit.event.Listener

abstract class Service : Listener {
  open fun onLoad() {}

  open fun onEnable() {}

  open fun onDisable() {}
}
