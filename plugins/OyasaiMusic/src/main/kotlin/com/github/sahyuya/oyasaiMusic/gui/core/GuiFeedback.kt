package com.github.sahyuya.oyasaiMusic.gui

import net.kyori.adventure.text.Component
import net.kyori.adventure.text.format.NamedTextColor
import org.bukkit.Sound
import org.bukkit.entity.Player

/** GUI操作の短い通知をアクションバーへ統一する。 */
object GuiFeedback {
  fun info(player: Player, message: String, color: NamedTextColor = NamedTextColor.AQUA) {
    player.sendActionBar(Component.text(message, color))
  }

  fun invalid(player: Player, message: String) {
    info(player, message, NamedTextColor.RED)
    player.playSound(player.location, Sound.ENTITY_VILLAGER_NO, 0.7f, 1.0f)
  }
}
