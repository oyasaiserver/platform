package io.oyasai.lib.minecraft

import org.bukkit.event.Listener

interface Service : Listener {
  fun onLoad() {}

  fun onEnable() {}

  fun onDisable() {}
}
