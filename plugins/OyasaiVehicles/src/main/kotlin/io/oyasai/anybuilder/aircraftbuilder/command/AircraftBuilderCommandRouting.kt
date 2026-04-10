package io.oyasai.anybuilder.aircraftbuilder.command

import io.oyasai.anybuilder.aircraftbuilder.AircraftBuilderGUI
import io.oyasai.anybuilder.aircraftbuilder.AircraftBuilderSpawn
import io.oyasai.anybuilder.aircraftbuilder.data.AircraftBuilderBaseCache
import io.oyasai.anybuilder.aircraftbuilder.data.AircraftBuilderBaseData
import io.oyasai.anybuilder.common.BuilderCommandRouter
import io.oyasai.canRideAircraftBuilderOrAdmin
import io.oyasai.canUseAircraftBuilder
import java.util.Locale
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.command.BlockCommandSender
import org.bukkit.command.Command
import org.bukkit.command.CommandSender
import org.bukkit.command.ConsoleCommandSender
import org.bukkit.entity.Player
import org.bukkit.inventory.ItemStack

// aircraftbuilder|acmenu <name> spawn
// aircraftbuilder|acmenu <name> buy
// aircraftbuilder|acmenu <name> info
// aircraftbuilder|acmenu <name> create|save|size|offset|delete
// aircraftbuilder|acmenu <name> machineset <TopSpeed> <Power> <Brake>
// aircraftbuilder|acmenu <name> eventcar <costLimit>

const val AircraftBuilder_PERMISSION_DENIED = "[AircraftBuilder] このコマンドを実行する権限がありません。"
const val AircraftBuilder_TRIAL_ITEM_COST = 100
const val COMMAND_BLOCK_SEARCH_XZ = 3.5
const val COMMAND_BLOCK_SEARCH_Y = 4.5

val AircraftBuilder_GENERAL_COMMANDS = setOf("spawn", "buy", "info")
val AircraftBuilder_MANAGER_COMMANDS = setOf("delete", "offset", "save", "size", "create")
val AircraftBuilder_ADMIN_COMMANDS = setOf("machineset", "eventcar")

fun CommandSender.canManageAircraftBuilder(data: AircraftBuilderBaseData?): Boolean {
  return data?.config?.isOwnerOrAdmin(this) == true
}

@Suppress("UNUSED_PARAMETER")
fun handleAircraftBuilderCommand(
    sender: CommandSender,
    command: Command,
    label: String,
    args: Array<out String>
): Boolean {
  if (command.name != "aircraftbuilder") {
    return false
  }

  if (args.isEmpty()) {
    return handleAircraftBuilderRootCommand(sender)
  }

  if (args[0].isBlank()) {
    return false
  }

  val name = args[0]
  val data = AircraftBuilderBaseCache.getBaseData(name)

  if (args.size == 1) {
    return handleAircraftBuilderSingleArgumentCommand(sender, name, data)
  }

  val subCommand = args[1].lowercase(Locale.ROOT)
  return BuilderCommandRouter.routeSubCommand(
      subCommand = subCommand,
      adminCommands = AircraftBuilder_ADMIN_COMMANDS,
      managerCommands = AircraftBuilder_MANAGER_COMMANDS,
      generalCommands = AircraftBuilder_GENERAL_COMMANDS,
      handleAdmin = { cmd -> handleAircraftBuilderAdminCommand(cmd, data, sender, args) },
      handleManager = { cmd -> handleAircraftBuilderManagerCommand(cmd, data, sender, args) },
      handleGeneral = { cmd -> handleAircraftBuilderGeneralCommand(cmd, sender, name, data, args) })
}

private fun handleAircraftBuilderRootCommand(sender: CommandSender): Boolean {
  return AircraftBuilderCommand.openRootMenuIfPermitted(
      sender = sender,
      hasPermission = { it.canUseAircraftBuilder() },
      deniedMessage = AircraftBuilder_PERMISSION_DENIED,
      openMenu = { AircraftBuilderGUI.menu().open(it) })
}

private fun handleAircraftBuilderSingleArgumentCommand(
    sender: CommandSender,
    name: String,
    data: AircraftBuilderBaseData?
): Boolean {
  return AircraftBuilderCommand.spawnSingleArgumentTrial(
      sender = sender,
      name = name,
      data = data,
      canSpawn = { it.canRideAircraftBuilderOrAdmin() },
      deniedMessage = AircraftBuilder_PERMISSION_DENIED,
      spawnTrial = { player, baseData ->
        AircraftBuilderSpawn.spawn(
            player.location, ItemStack(Material.HOPPER_MINECART), null, player, baseData)
      },
      successMessage = { vehicleName ->
        "[AircraftBuilder] Spawned trial vehicle for $vehicleName"
      })
}

private fun handleAircraftBuilderGeneralCommand(
    subCommand: String,
    sender: CommandSender,
    name: String,
    data: AircraftBuilderBaseData?,
    args: Array<out String>
): Boolean {
  when (subCommand) {
    "spawn" -> {
      handleAircraftBuilderSpawn(sender, name, data, args)
      return true
    }
    "buy" -> {
      AircraftBuilderCommand.handleAircraftBuilderBuy(sender, name, data)
      return true
    }
    "info" -> {
      AircraftBuilderCommand.handleAircraftBuilderInfo(sender, data)
      return true
    }
  }
  return false
}

private fun handleAircraftBuilderManagerCommand(
    subCommand: String,
    data: AircraftBuilderBaseData?,
    sender: CommandSender,
    args: Array<out String>
): Boolean {
  if (subCommand == "create") {
    AircraftBuilderCommand.handleAircraftBuilderSave(data, sender, args)
    return true
  }
  AircraftBuilderCommand.handleAircraftBuilderSetting(data, sender, args)
  return true
}

private fun handleAircraftBuilderAdminCommand(
    subCommand: String,
    data: AircraftBuilderBaseData?,
    sender: CommandSender,
    args: Array<out String>
): Boolean {
  when (subCommand) {
    "machineset" -> {
      AircraftBuilderCommand.handleAircraftBuilderMachineSet(data, sender, args)
      return true
    }
    "eventcar" -> {
      AircraftBuilderCommand.handleAircraftBuilderEventCar(data, sender, args)
      return true
    }
  }
  return false
}

private fun handleAircraftBuilderSpawn(
    sender: CommandSender,
    name: String,
    data: AircraftBuilderBaseData?,
    args: Array<out String>
) {
  if (data == null) return
  when (args.size) {
    2 -> {
      if (sender is Player) {
        if (!sender.canRideAircraftBuilderOrAdmin()) {
          sender.sendMessage(AircraftBuilder_PERMISSION_DENIED)
          return
        }
        AircraftBuilderSpawn.spawn(
            sender.location, ItemStack(Material.HOPPER_MINECART), null, sender, data)
        sender.sendMessage("[AircraftBuilder] Spawned trial vehicle for $name")
      }
      return
    }
    3 -> {
      val target = Bukkit.getPlayer(args[2])
      if (sender is Player) {
        if (!sender.canRideAircraftBuilderOrAdmin()) {
          sender.sendMessage(AircraftBuilder_PERMISSION_DENIED)
          return
        }
        if (target != null && target.isOnline) {
          AircraftBuilderSpawn.spawn(
              target.location, ItemStack(Material.HOPPER_MINECART), null, target, data)
          target.sendMessage("[AircraftBuilder] Spawned trial vehicle for $name")
          sender.sendMessage("[AircraftBuilder] Spawned trial vehicle for $name to ${target.name}")
        } else {
          sender.sendMessage("[AircraftBuilder] Player ${args[2]} does not exist")
        }
        return
      }
      if (sender is ConsoleCommandSender) {
        if (target != null && target.isOnline) {
          AircraftBuilderSpawn.spawn(
              target.location, ItemStack(Material.HOPPER_MINECART), null, target, data)
          target.sendMessage("[AircraftBuilder] Spawned trial vehicle for $name")
        } else {
          sender.sendMessage("[AircraftBuilder] Player ${args[2]} does not exist")
        }
        return
      }
      if (sender is BlockCommandSender) {
        val yaw = io.oyasai.toolbox.Tools.getYawFromCardinalDirections(args[2])
        val blockLoc = sender.block.location
        val nearby =
            io.oyasai.toolbox.Tools.getNearbyPlayers(
                    blockLoc,
                    COMMAND_BLOCK_SEARCH_XZ,
                    COMMAND_BLOCK_SEARCH_Y,
                    COMMAND_BLOCK_SEARCH_XZ)
                .firstOrNull()
        if (nearby != null) {
          AircraftBuilderSpawn.spawn(
              nearby.location,
              ItemStack(Material.HOPPER_MINECART),
              null,
              nearby,
              data,
              yaw.toFloat())
          nearby.sendMessage("[AircraftBuilder] Spawned trial vehicle for $name")
        }
        return
      }
    }
    else -> {
      sender.sendMessage("[AircraftBuilder] Invalid arguments")
      return
    }
  }
}
