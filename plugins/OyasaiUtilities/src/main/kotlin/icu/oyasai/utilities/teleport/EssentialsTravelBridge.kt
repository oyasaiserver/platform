package icu.oyasai.utilities.teleport

import com.earth2me.essentials.Essentials
import java.util.UUID
import org.bukkit.entity.Player
import org.bukkit.plugin.Plugin

/** Loaded only when Essentials is enabled; no Essentials types escape this adapter. */
class EssentialsTravelBridge(plugin: Plugin) : TravelBridge {
  private val essentials = plugin as Essentials

  override fun clearJail(player: Player) {
    val user = essentials.getUser(player)
    if (
        !user.isJailed &&
            user.jail.isNullOrEmpty() &&
            user.jailTimeout <= 0 &&
            user.onlineJailedTime <= 0
    )
        return
    // Own SQLite has been loaded and flushed before retiring the legacy listener/timer state.
    user.setJailed(false)
    user.setJailTimeout(0)
    user.setJail(null)
    user.setOnlineJailedTime(0)
  }

  override fun offlineExempt(id: UUID): Boolean =
      essentials.getUser(id)?.isAuthorized("essentials.jail.exempt") == true
}
