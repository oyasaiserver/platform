package icu.oyasai.utilities.creative_management

import icu.oyasai.utilities.OyasaiUtilities.plugin
import java.io.BufferedReader
import java.io.FileReader
import java.io.IOException
import java.util.*
import org.bukkit.GameMode
import org.bukkit.event.EventHandler
import org.bukkit.event.EventPriority
import org.bukkit.event.Listener
import org.bukkit.event.inventory.InventoryType
import org.bukkit.event.player.PlayerGameModeChangeEvent
import org.bukkit.event.player.PlayerJoinEvent
import org.bukkit.event.player.PlayerKickEvent
import org.bukkit.event.player.PlayerQuitEvent

object InventoryEvent : Listener {
  private val mem = mutableMapOf<String, InventoryManager>()

  @EventHandler
  fun joinPlayer(e: PlayerJoinEvent) {
    var forceGameMode = false

    try {
      val `is` = BufferedReader(FileReader("server.properties"))
      val props = Properties()
      props.load(`is`)
      `is`.close()
      forceGameMode = props.getProperty("force-gamemode").toBoolean()
    } catch (_: IOException) {
      //
    }
    if (forceGameMode) {
      val im = InventoryManager(e.getPlayer())
      if (!e.getPlayer().hasPermission("cm.bypass")) {
        if (im.hasContent()) im.loadInventory(plugin.server.defaultGameMode)
        else im.saveInventory(e.getPlayer().gameMode)
      }
      mem[e.player.uniqueId.toString()] = im
    } else {
      mem[e.player.uniqueId.toString()] = InventoryManager(e.player)
    }
  }

  @EventHandler(priority = EventPriority.MONITOR, ignoreCancelled = true)
  fun gameModeChange(e: PlayerGameModeChangeEvent) {
    try {
      if (e.getPlayer().openInventory.type != InventoryType.CRAFTING) e.getPlayer().closeInventory()
    } catch (_: Error) {
      e.getPlayer().closeInventory()
    }
    if (e.newGameMode == e.getPlayer().gameMode) return
    val p = e.getPlayer()
    if (!p.hasPermission("cm.bypass")) {
      val im = mem[p.uniqueId.toString()] ?: InventoryManager(p)

      val gmFrom: GameMode = p.gameMode
      val gmTo: GameMode = e.newGameMode

      if (gmFrom != gmTo) {
        im.saveInventory(gmFrom)
        im.loadInventory(gmTo)
      }
    }
  }

  @EventHandler(priority = EventPriority.MONITOR, ignoreCancelled = true)
  fun onGMChangeRemoveEffects(e: PlayerGameModeChangeEvent) {
    val p = e.getPlayer()
    if (!p.hasPermission("cm.bypass")) {
      for (effect in p.activePotionEffects) {
        p.removePotionEffect(effect.type)
      }
    }
  }

  @EventHandler(ignoreCancelled = true, priority = EventPriority.MONITOR)
  fun onQuit(e: PlayerQuitEvent) {
    val p = e.getPlayer()
    val im = mem[p.uniqueId.toString()] ?: InventoryManager(p)
    im.saveInventory(p.gameMode)
  }

  @EventHandler(ignoreCancelled = true, priority = EventPriority.MONITOR)
  fun onKicked(e: PlayerKickEvent) {
    val p = e.getPlayer()
    val im = mem[p.uniqueId.toString()] ?: InventoryManager(p)
    im.saveInventory(p.gameMode)
  }
}
