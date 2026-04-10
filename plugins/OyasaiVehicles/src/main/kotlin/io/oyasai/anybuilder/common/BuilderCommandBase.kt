package io.oyasai.anybuilder.common

import io.oyasai.toolbox.Tools
import java.util.LinkedHashMap
import java.util.UUID
import org.bukkit.Bukkit
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.entity.Player
import org.bukkit.scheduler.BukkitRunnable

// BuilderCommandBase - helper utilities for builder commands
// Used by: carbuilder2 (cbmenu) and aircraftbuilder (ac)

abstract class BuilderCommandBase : CommandExecutor {
  private val userTask: MutableMap<UUID, Boolean> = LinkedHashMap()

  fun beginUserTask(player: Player, busyMessage: String): Boolean {
    if (userTask[player.uniqueId] == true) {
      player.sendMessage(busyMessage)
      return false
    }
    userTask[player.uniqueId] = true
    return true
  }

  fun endUserTask(player: Player) {
    userTask[player.uniqueId] = false
  }

  fun validateVehicleName(name: String, sender: CommandSender, invalidMessage: String): Boolean {
    if (Regex("[^A-Za-z0-9_]").containsMatchIn(name)) {
      sender.sendMessage(invalidMessage)
      return false
    }
    return true
  }

  fun prepareSavePlayer(
      sender: CommandSender,
      name: String,
      busyMessage: String,
      invalidMessage: String
  ): Player? {
    val player = sender as? Player ?: return null
    if (!beginUserTask(player, busyMessage)) {
      return null
    }
    if (!validateVehicleName(name, player, invalidMessage)) {
      endUserTask(player)
      return null
    }
    return player
  }

  fun <T> resolveSaveData(
      player: Player,
      name: String,
      resolveData: (String) -> T,
      canEdit: (T, Player) -> Boolean
  ): T? {
    val data = resolveData(name)
    if (!canEdit(data, player)) {
      endUserTask(player)
      return null
    }
    return data
  }

  fun runSaveReloadTask(player: Player, reloadTask: () -> Unit, onComplete: () -> Unit) {
    val plugin = requireNotNull(Tools.pl) { "Plugin is not initialized" }
    Bukkit.getScheduler()
        .runTaskAsynchronously(
            plugin,
            Runnable {
              reloadTask()
              object : BukkitRunnable() {
                    override fun run() {
                      onComplete()
                      endUserTask(player)
                    }
                  }
                  .runTask(plugin)
            })
  }

  fun openRootMenuIfPermitted(
      sender: CommandSender,
      hasPermission: (Player) -> Boolean,
      deniedMessage: String,
      openMenu: (Player) -> Unit
  ): Boolean {
    if (sender is Player) {
      if (!hasPermission(sender)) {
        sender.sendMessage(deniedMessage)
        return true
      }
      openMenu(sender)
    }
    return true
  }

  fun <T> spawnSingleArgumentTrial(
      sender: CommandSender,
      name: String,
      data: T?,
      canSpawn: (Player) -> Boolean,
      deniedMessage: String,
      spawnTrial: (Player, T) -> Unit,
      successMessage: (String) -> String
  ): Boolean {
    if (sender !is Player || data == null) {
      return true
    }
    if (!canSpawn(sender)) {
      sender.sendMessage(deniedMessage)
      return true
    }
    spawnTrial(sender, data)
    sender.sendMessage(successMessage(name))
    return true
  }

  fun handlePlayerPurchase(
      sender: CommandSender,
      hasData: Boolean,
      canUse: (Player) -> Boolean,
      deniedMessage: String,
      openListMenu: (Player) -> Unit,
      inventoryFullMessage: String,
      onInventoryFull: (Player) -> Unit = {},
      cost: Int,
      pay: (UUID, Int) -> Boolean,
      onPaymentSuccess: (Player) -> Unit,
      onPaymentFailure: (Player) -> Unit
  ): Boolean {
    val player = sender as? Player ?: return true
    if (!canUse(player)) {
      player.sendMessage(deniedMessage)
      return true
    }
    if (!hasData) {
      openListMenu(player)
      return true
    }
    if (player.inventory.firstEmpty() == -1) {
      onInventoryFull(player)
      player.sendMessage(inventoryFullMessage)
      return true
    }
    if (pay(player.uniqueId, cost)) {
      onPaymentSuccess(player)
    } else {
      onPaymentFailure(player)
    }
    return true
  }

  fun <T> executeSaveFlow(
      sender: CommandSender,
      name: String,
      existingData: T?,
      deniedMessage: String,
      canCreate: (CommandSender) -> Boolean,
      busyMessage: String,
      invalidNameMessage: String,
      resolveData: (String) -> T,
      canEdit: (T, Player) -> Boolean,
      onReady: (Player, T) -> Unit
  ): Boolean {
    if (existingData == null && !canCreate(sender)) {
      sender.sendMessage(deniedMessage)
      return true
    }
    val player =
        prepareSavePlayer(
            sender = sender,
            name = name,
            busyMessage = busyMessage,
            invalidMessage = invalidNameMessage) ?: return true
    val data =
        resolveSaveData(player = player, name = name, resolveData = resolveData, canEdit = canEdit)
            ?: return true

    onReady(player, data)
    return true
  }
}
