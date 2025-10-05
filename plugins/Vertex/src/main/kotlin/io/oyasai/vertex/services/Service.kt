package io.oyasai.vertex.services

import org.bukkit.event.Listener

interface Service : Listener {
  fun onLoad() {}

  fun onEnable() {}

  fun onDisable() {}
}
