@file:Suppress("DEPRECATION")

package io.oyasai.oyasaiAdminTools.punishment

import org.bukkit.event.EventHandler
import org.bukkit.event.EventPriority
import org.bukkit.event.Listener
import org.bukkit.event.player.AsyncPlayerChatEvent
import org.bukkit.event.player.AsyncPlayerPreLoginEvent
import org.bukkit.event.player.PlayerCommandPreprocessEvent

object PunishmentListener : Listener {
  @EventHandler(priority = EventPriority.HIGHEST)
  fun onPreLogin(event: AsyncPlayerPreLoginEvent) {
    val ban = PunishmentService.activeBan(event.uniqueId) ?: return
    event.disallow(
        AsyncPlayerPreLoginEvent.Result.KICK_BANNED,
        net.kyori.adventure.text.serializer.legacy.LegacyComponentSerializer.legacySection()
            .deserialize(PunishmentService.banKickMessage(ban)),
    )
  }

  @EventHandler(priority = EventPriority.HIGHEST, ignoreCancelled = true)
  fun onChat(event: AsyncPlayerChatEvent) {
    val mute = PunishmentService.activeMute(event.player.uniqueId) ?: return
    event.isCancelled = true
    event.player.sendMessage(PunishmentService.muteDenyMessage(mute))
  }

  @EventHandler(priority = EventPriority.HIGHEST, ignoreCancelled = true)
  fun onCommand(event: PlayerCommandPreprocessEvent) {
    val mute = PunishmentService.activeMute(event.player.uniqueId) ?: return
    if (!PunishmentService.isMutedCommand(event.message)) return
    event.isCancelled = true
    event.player.sendMessage(PunishmentService.muteDenyMessage(mute))
  }
}
