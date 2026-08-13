package com.ququla89.headhunt.util

import net.kyori.adventure.text.serializer.legacy.LegacyComponentSerializer
import org.bukkit.Bukkit

fun broadcastLegacy(message: String) {
  val component = LegacyComponentSerializer.legacySection().deserialize(message)
  for (player in Bukkit.getOnlinePlayers()) {
    player.sendMessage(component)
  }
  Bukkit.getConsoleSender().sendMessage(component)
}
