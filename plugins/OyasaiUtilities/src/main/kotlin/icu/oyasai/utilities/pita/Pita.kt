package icu.oyasai.utilities.pita

import icu.oyasai.utilities.YamlConfig
import icu.oyasai.utilities.tpath.TeleportManager
import java.util.UUID
import java.util.concurrent.ConcurrentHashMap
import org.bukkit.Bukkit
import org.bukkit.Location
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.player.PlayerMoveEvent
import org.bukkit.event.player.PlayerQuitEvent
import org.bukkit.event.player.PlayerTeleportEvent
import org.bukkit.util.Vector

object Pita : Listener, CommandExecutor {

  private val enabledPlayers = mutableSetOf<UUID>()
  private var defaultEnabled = false
  private val config by lazy { YamlConfig("Pita/config.yml", true) }
  private val dataFile by lazy { YamlConfig("Pita/data.yml") }

  private val stopLocations = ConcurrentHashMap<UUID, Location>()

  fun onEnable() {
    // load config
    config.saveDefault()
    defaultEnabled = config.getBoolean("default-enabled", false)

    // load data
    loadData()
  }

  fun onDisable() {
    saveData()
  }

  private fun loadData() {
    dataFile.reload()
    val list = dataFile.getStringList("enabled-players")
    list.forEach { uuidString ->
      try {
        enabledPlayers.add(UUID.fromString(uuidString))
      } catch (_: Exception) {}
    }
  }

  private fun saveData() {
    dataFile.set("enabled-players", enabledPlayers.map { it.toString() })
    dataFile.save()
  }

  override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<out String>,
  ): Boolean {
    if (sender !is Player) {
      sender.sendMessage("This command can only be used by players.")
      return true
    }

    val uuid = sender.uniqueId
    if (enabledPlayers.contains(uuid)) {
      enabledPlayers.remove(uuid)
      sender.sendMessage("§aPita Mode: §cOFF")
      Bukkit.getLogger().info("${sender.name} has disabled Pita Mode.")
    } else {
      enabledPlayers.add(uuid)
      sender.sendMessage("§aPita Mode: §bON (Pita!)")
      Bukkit.getLogger().info("${sender.name} has enabled Pita Mode.")
    }
    return true
  }

  @EventHandler
  fun onPlayerMove(event: PlayerMoveEvent) {
    val player = event.player

    if (!enabledPlayers.contains(player.uniqueId) && !defaultEnabled) return

    if (!player.isFlying) {
      stopLocations.remove(player.uniqueId)
      return
    }

    val input = player.currentInput
    val isMoving =
        input.isForward ||
            input.isBackward ||
            input.isLeft ||
            input.isRight ||
            input.isJump ||
            input.isSneak

    if (!isMoving) {
      val from = event.from
      val to = event.to

      // 慣性で動いている場合
      if (from.x != to.x || from.y != to.y || from.z != to.z) {
        val uuid = player.uniqueId
        val stopLoc = stopLocations[uuid]

        if (stopLoc == null) {
          stopLocations[uuid] = to.clone()
          player.velocity = Vector(0.0, 0.0, 0.0)
        } else {
          TeleportManager.pushIgnore(player)

          val newTo = stopLoc.clone()
          event.to = newTo
          player.velocity = Vector(0.0, 0.0, 0.0)
        }
      }
    } else {
      stopLocations.remove(player.uniqueId)
    }
  }

  @EventHandler
  fun onPlayerQuit(event: PlayerQuitEvent) {
    stopLocations.remove(event.player.uniqueId)
  }

  @EventHandler
  fun onPlayerTeleport(event: PlayerTeleportEvent) {
    stopLocations.remove(event.player.uniqueId)
  }
}
