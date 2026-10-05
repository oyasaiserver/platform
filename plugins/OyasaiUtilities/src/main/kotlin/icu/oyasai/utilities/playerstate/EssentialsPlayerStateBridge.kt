package icu.oyasai.utilities.playerstate

import com.earth2me.essentials.Essentials
import net.ess3.api.events.AfkStatusChangeEvent
import net.ess3.api.events.FlyStatusChangeEvent
import net.ess3.api.events.NickChangeEvent
import org.bukkit.command.CommandSender
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.EventPriority
import org.bukkit.event.HandlerList
import org.bukkit.event.Listener

/** Only instantiated after Essentials is enabled; no Essentials types escape this class. */
class EssentialsPlayerStateBridge(plugin: org.bukkit.plugin.Plugin) : PlayerStateBridge, Listener {
  private val essentials = plugin as Essentials

  override fun enable() {
    essentials.server.onlinePlayers.forEach { essentials.getUser(it).setAfk(false) }
  }

  @EventHandler(priority = EventPriority.HIGHEST)
  fun onAfk(event: AfkStatusChangeEvent) {
    // Let silent JOIN/QUIT clear an old persisted AFK=true, then prevent all live transitions.
    if (
        !event.value &&
            event.cause in listOf(AfkStatusChangeEvent.Cause.JOIN, AfkStatusChangeEvent.Cause.QUIT)
    )
        return
    event.isCancelled = true
  }

  override fun allowFly(sender: CommandSender, player: Player, enabled: Boolean): Boolean {
    val event =
        FlyStatusChangeEvent(
            essentials.getUser(player),
            (sender as? Player)?.let(essentials::getUser),
            enabled,
        )
    essentials.server.pluginManager.callEvent(event)
    return !event.isCancelled
  }

  override fun syncFly(player: Player, enabled: Boolean) {
    // The pinned compileOnly API (2.21.2) predates flymode persistence; runtime target is 776f709.
    val user = essentials.getUser(player)
    user.javaClass.getMethod("setFlyModeEnabled", java.lang.Boolean.TYPE).invoke(user, enabled)
  }

  override fun allowNick(sender: CommandSender, player: Player, nickname: String?): Boolean {
    // Preserve the upstream constructor's historical inversion of controller/affected.
    val event =
        NickChangeEvent(
            (sender as? Player)?.let(essentials::getUser),
            essentials.getUser(player),
            nickname,
        )
    essentials.server.pluginManager.callEvent(event)
    return !event.isCancelled
  }

  override fun syncNick(player: Player, nickname: String?) {
    essentials.getUser(player).setNickname(nickname)
  }

  override fun disable() {
    HandlerList.unregisterAll(this)
  }
}
