package io.oyasai.anybuilder.carbuilder2.command

import io.oyasai.anybuilder.carbuilder2.CarBuilder2Item
import io.oyasai.anybuilder.carbuilder2.CarBuilder2Spawn
import io.oyasai.anybuilder.carbuilder2.model.CarBuilder2BaseData
import io.oyasai.hasOyasaiAdminPermission
import io.oyasai.toolbox.Tools
import java.util.Locale
import org.bukkit.Bukkit
import org.bukkit.Location
import org.bukkit.command.BlockCommandSender
import org.bukkit.command.CommandSender
import org.bukkit.command.ConsoleCommandSender
import org.bukkit.entity.Player
import org.bukkit.inventory.ItemStack

// carbuilder2|cbmenu <name> machineset <TopSpeed> <Power> <Brake> <Gears> <Grip> <isMT(true|false)>
// [Mode] [player|direction]
// carbuilder2|cbmenu <name> eventcar <costLimit>

fun CarBuilder2Command.handleCarBuilder2MachineSet(
    data: CarBuilder2BaseData?,
    sender: CommandSender,
    args: Array<out String>
) {
  val name = args[0]
  if (!sender.hasOyasaiAdminPermission()) {
    sender.sendMessage(CarBuilder2_PERMISSION_DENIED)
    return
  }
  if (data == null) {
    sender.sendMessage("[CarBuilder2] Vehicle $name does not exist")
    return
  }
  if (args.size < 8) {
    sender.sendMessage(
        "[CarBuilder2] /cbmenu <name> machineset <TopSpeed> <Power> <Brake> <Gears> <Grip> <isMT> [Mode] [player/direction]")
    return
  }

  val topSpeed = args[2].toIntOrNull()
  val power = args[3].toIntOrNull()
  val brake = args[4].toIntOrNull()
  val gears = args[5].toIntOrNull()
  val grip = args[6].toIntOrNull()
  val isMT = args[7].toBooleanStrictOrNull()
  val modeArgument = args.getOrNull(8)
  val selectedMode = modeArgument?.let { normalizeCarMode(it) }
  val modeName = selectedMode ?: "Normal"
  val spawnTargetArg = if (selectedMode != null) args.getOrNull(9) else modeArgument
  if (topSpeed == null ||
      power == null ||
      brake == null ||
      gears == null ||
      grip == null ||
      isMT == null) {
    sender.sendMessage("[CarBuilder2] Invalid arguments")
    return
  }

  val item =
      CarBuilder2Item.buyCarItem(name, if (sender is Player) sender.name else null)
          ?: run {
            sender.sendMessage("[CarBuilder2] Vehicle $name does not exist")
            return
          }

  if (topSpeed !in 1..CarBuilder2Item.TOP_SPEED_MAX ||
      power !in 1..CarBuilder2Item.POWER_MAX ||
      brake !in 1..CarBuilder2Item.BRAKE_MAX ||
      gears !in 1..CarBuilder2Item.GEAR_MAX ||
      grip !in 1..CarBuilder2Item.GRIP_MAX) {
    sender.sendMessage("[CarBuilder2] Stat values are out of range")
    return
  }

  if (!CarBuilder2Item.setCarVehicleStats(item, topSpeed, power, brake, gears, grip)) {
    sender.sendMessage("[CarBuilder2] Failed to apply stat values")
    return
  }

  if (isMT) {
    CarBuilder2Item.changeCarIsMT(item)
  }
  if (!applyCarMode(item, modeName)) {
    sender.sendMessage("[CarBuilder2] Invalid mode: $modeName")
    return
  }

  val aimedBlock = if (sender is Player) sender.getTargetBlockExact(5) else null
  val spawnByDirection =
      sender is BlockCommandSender ||
          (sender is Player && aimedBlock?.type in COMMAND_BLOCK_MATERIALS)

  when (sender) {
    is Player -> {
      if (spawnByDirection && spawnTargetArg != null) {
        val nearbyPlayer =
            findNearbyCarBuilder2Player(sender.location)
                ?: run {
                  sender.sendMessage("[CarBuilder2] 近くにプレイヤーがいません")
                  return
                }
        val yaw = Tools.getYawFromCardinalDirections(spawnTargetArg).toFloat()
        CarBuilder2Spawn.spawn(nearbyPlayer.location, item, nearbyPlayer, nearbyPlayer, data, yaw)
        sender.sendMessage(
            "[CarBuilder2] Spawned custom trial car for $name to ${nearbyPlayer.name}")
      } else if (spawnTargetArg != null) {
        val targetPlayer = resolveOnlinePlayer(sender, spawnTargetArg) ?: return
        CarBuilder2Spawn.spawn(targetPlayer.location, item, targetPlayer, targetPlayer, data)
        sender.sendMessage(
            "[CarBuilder2] Spawned custom trial car for $name to ${targetPlayer.name}")
      } else {
        CarBuilder2Spawn.spawn(sender.location, item, null, sender, data)
        sender.sendMessage("[CarBuilder2] Spawned custom trial car for $name")
      }
    }

    is ConsoleCommandSender -> {
      if (spawnTargetArg == null) {
        sender.sendMessage(
            "[CarBuilder2] /cbmenu <name> machineset <TopSpeed> <Power> <Brake> <Gears> <Grip> <isMT> [Mode] <player>")
        return
      }
      val targetPlayer = resolveOnlinePlayer(sender, spawnTargetArg) ?: return
      CarBuilder2Spawn.spawn(targetPlayer.location, item, targetPlayer, targetPlayer, data)
      sender.sendMessage("[CarBuilder2] Spawned custom trial car for $name to ${targetPlayer.name}")
    }

    is BlockCommandSender -> {
      if (spawnTargetArg == null) {
        sender.sendMessage(
            "[CarBuilder2] /cbmenu <name> machineset <TopSpeed> <Power> <Brake> <Gears> <Grip> <isMT> [Mode] <direction>")
        return
      }
      val nearbyPlayer =
          findNearbyCarBuilder2Player(sender.block.location)
              ?: run {
                sender.sendMessage("[CarBuilder2] 近くにプレイヤーがいません")
                return
              }
      val yaw = Tools.getYawFromCardinalDirections(spawnTargetArg).toFloat()
      CarBuilder2Spawn.spawn(nearbyPlayer.location, item, nearbyPlayer, nearbyPlayer, data, yaw)
      sender.sendMessage("[CarBuilder2] Spawned custom trial car for $name to ${nearbyPlayer.name}")
    }

    else -> {
      sender.sendMessage(
          "[CarBuilder2] This command is only available to players, console, or command blocks")
    }
  }
}

fun CarBuilder2Command.handleCarBuilder2EventCar(
    data: CarBuilder2BaseData?,
    sender: CommandSender,
    args: Array<out String>
) {
  val name = args[0]
  if (data == null) {
    sender.sendMessage("[CarBuilder2] Vehicle $name does not exist")
    return
  }
  if (sender !is Player || !sender.hasOyasaiAdminPermission()) {
    sender.sendMessage(CarBuilder2_PERMISSION_DENIED)
    return
  }
  if (args.size < 3) {
    sender.sendMessage("[CarBuilder2] /cbmenu <name> eventcar <costLimit>")
    return
  }

  val costLimit = args[2].toIntOrNull()
  if (costLimit == null || costLimit <= 0) {
    sender.sendMessage("[CarBuilder2] Cost limit must be at least 1")
    return
  }

  val item = CarBuilder2Item.eventCarItem(name, costLimit)
  if (item == null) {
    sender.sendMessage("[CarBuilder2] Vehicle $name does not exist")
    return
  }

  sender.inventory.addItem(item)
  sender.sendMessage("[CarBuilder2] Gave event vehicle $name")
}

fun normalizeCarMode(raw: String): String? {
  return when (raw.trim().lowercase(Locale.ROOT).replace('-', '_')) {
    "normal" -> "Normal"
    "normal_race" -> "Normal_Race"
    "pro" -> "Pro"
    "pro+" -> "Pro+"
    "real" -> "Real"
    else -> null
  }
}

private val CAR_MODE_STEP_COUNT =
    mapOf("Normal" to 0, "Normal_Race" to 1, "Pro" to 2, "Pro+" to 3, "Real" to 4)

fun applyCarMode(item: ItemStack, mode: String): Boolean {
  val steps = CAR_MODE_STEP_COUNT[mode] ?: return false

  repeat(steps) {
    if (CarBuilder2Item.changeCarMode(item) == null) {
      return false
    }
  }
  return true
}

private fun findNearbyCarBuilder2Player(location: Location): Player? {
  return Tools.getNearbyPlayers(
          location, COMMAND_BLOCK_SEARCH_XZ, COMMAND_BLOCK_SEARCH_Y, COMMAND_BLOCK_SEARCH_XZ)
      .firstOrNull()
}

private fun resolveOnlinePlayer(sender: CommandSender, playerName: String): Player? {
  val targetPlayer = Bukkit.getPlayer(playerName)
  if (targetPlayer == null || !targetPlayer.isOnline) {
    sender.sendMessage("[CarBuilder2] Player $playerName does not exist")
    return null
  }
  return targetPlayer
}
