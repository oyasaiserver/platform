package io.oyasai.anybuilder.aircraftbuilder.command

import com.sk89q.worldedit.WorldEdit
import io.oyasai.anybuilder.aircraftbuilder.AircraftBuilderGUI
import io.oyasai.anybuilder.aircraftbuilder.AircraftBuilderItem
import io.oyasai.anybuilder.aircraftbuilder.AircraftBuilderSpawn
import io.oyasai.anybuilder.aircraftbuilder.data.AircraftBuilderBaseCache
import io.oyasai.anybuilder.aircraftbuilder.data.AircraftBuilderBaseData
import io.oyasai.anybuilder.aircraftbuilder.data.AircraftBuilderConfig
import io.oyasai.anybuilder.aircraftbuilder.data.AircraftBuilderSchematic
import io.oyasai.canCreateAircraftBuilder
import io.oyasai.canUseAircraftBuilder
import io.oyasai.getEntityLimitByPermission
import io.oyasai.hasOyasaiAdminPermission
import io.oyasai.toolbox.Tools
import io.oyasai.vehicle.base.VehicleBalanceSettings.sizeLimit
import java.util.Locale
import org.bukkit.Bukkit
import org.bukkit.Location
import org.bukkit.Sound
import org.bukkit.command.BlockCommandSender
import org.bukkit.command.CommandSender
import org.bukkit.command.ConsoleCommandSender
import org.bukkit.entity.Player
import org.bukkit.util.Vector

// aircraftbuilder|acmenu <name> machineset <TopSpeed> <Power> <Brake>
// aircraftbuilder|acmenu <name> eventcar <costLimit>
// aircraftbuilder|acmenu <name> save <body|seat|...> [size]
// aircraftbuilder|acmenu <name> buy

fun AircraftBuilderCommand.handleAircraftBuilderMachineSet(
    data: AircraftBuilderBaseData?,
    sender: CommandSender,
    args: Array<out String>
) {
  if (data == null) {
    sender.sendMessage("[AircraftBuilder] Data does not exist!")
    return
  }
  if (!sender.hasOyasaiAdminPermission()) {
    sender.sendMessage(AircraftBuilder_PERMISSION_DENIED)
    return
  }
  if (args.size < 5) {
    sender.sendMessage("[AircraftBuilder] Invalid argument count")
    sender.sendMessage("[AircraftBuilder] /ac <name> machineset <TopSpeed> <Power> <Brake>")
    return
  }

  val topSpeed = args[2].toIntOrNull() ?: return
  val power = args[3].toIntOrNull() ?: return
  val brake = args[4].toIntOrNull() ?: return

  if (topSpeed !in 1..AircraftBuilderItem.TOP_SPEED_MAX ||
      power !in 1..AircraftBuilderItem.POWER_MAX ||
      brake !in 1..AircraftBuilderItem.BRAKE_MAX) {
    sender.sendMessage("[AircraftBuilder] Stat values are out of range")
    return
  }

  val item =
      AircraftBuilderItem.buyItem(args[0], null)
          ?: run {
            sender.sendMessage("[AircraftBuilder] Vehicle ${args[0]} does not exist")
            return
          }
  if (!AircraftBuilderItem.setAircraftStats(item, topSpeed, power, brake)) {
    sender.sendMessage("[AircraftBuilder] Failed to apply stat values")
    return
  }

  val targetPlayerName = args.getOrNull(5)
  val targetPlayer = targetPlayerName?.let { Bukkit.getPlayer(it) }

  if (sender is Player) {
    if (targetPlayerName != null) {
      val requestedPlayer =
          targetPlayer
              ?: run {
                sender.sendMessage("[AircraftBuilder] Player $targetPlayerName does not exist")
                return
              }
      if (!requestedPlayer.isOnline) {
        sender.sendMessage("[AircraftBuilder] Player $targetPlayerName is offline")
        return
      }
      AircraftBuilderSpawn.spawn(requestedPlayer.location, item, null, requestedPlayer, data)
      requestedPlayer.sendMessage("[AircraftBuilder] Spawned custom trial vehicle for ${args[0]}")
      sender.sendMessage(
          "[AircraftBuilder] Spawned custom trial vehicle for ${args[0]} to ${requestedPlayer.name}")
    } else {
      AircraftBuilderSpawn.spawn(sender.location, item, null, null, data)
      sender.sendMessage("[AircraftBuilder] Spawned custom trial vehicle for ${args[0]}")
    }
    return
  }

  if (sender is ConsoleCommandSender) {
    if (targetPlayer == null) {
      sender.sendMessage("[AircraftBuilder] Player $targetPlayerName does not exist")
      return
    }
    if (!targetPlayer.isOnline) {
      sender.sendMessage("[AircraftBuilder] Player $targetPlayerName is offline")
      return
    }
    AircraftBuilderSpawn.spawn(targetPlayer.location, item, null, targetPlayer, data)
    targetPlayer.sendMessage("[AircraftBuilder] Spawned custom trial vehicle for ${args[0]}")
    sender.sendMessage(
        "[AircraftBuilder] Spawned custom trial vehicle for ${args[0]} to ${targetPlayer.name}")
    return
  }

  if (sender is BlockCommandSender) {
    if (args.size < 6) {
      sender.sendMessage("[AircraftBuilder] Invalid argument count")
      return
    }
    val yaw = Tools.getYawFromCardinalDirections(args[5])
    val nearbyPlayer =
        findNearbyAircraftBuilderPlayer(sender.block.location)
            ?: run {
              sender.sendMessage("[AircraftBuilder] 近くにプレイヤーがいません")
              return
            }
    AircraftBuilderSpawn.spawn(nearbyPlayer.location, item, null, nearbyPlayer, data, yaw.toFloat())
    nearbyPlayer.sendMessage("[AircraftBuilder] Spawned custom trial vehicle for ${args[0]}")
    sender.sendMessage(
        "[AircraftBuilder] Spawned custom trial vehicle for ${args[0]} to ${nearbyPlayer.name}")
    return
  }
}

fun AircraftBuilderCommand.handleAircraftBuilderEventCar(
    data: AircraftBuilderBaseData?,
    sender: CommandSender,
    args: Array<out String>
) {
  if (data == null) {
    sender.sendMessage("[AircraftBuilder] Data does not exist!")
    return
  }
  if (sender !is Player || !sender.hasOyasaiAdminPermission()) {
    sender.sendMessage(AircraftBuilder_PERMISSION_DENIED)
    return
  }
  if (args.size < 3) {
    sender.sendMessage("[AircraftBuilder] /ac <name> eventcar <costLimit>")
    return
  }
  val costLimit = args[2].toIntOrNull()
  if (costLimit == null || costLimit <= 0) {
    sender.sendMessage("[AircraftBuilder] Cost limit must be at least 1")
    return
  }
  val item = AircraftBuilderItem.eventCarItem(args[0], costLimit)
  if (item == null) {
    sender.sendMessage("[AircraftBuilder] Vehicle ${args[0]} does not exist")
    return
  }
  sender.inventory.addItem(item)
  sender.sendMessage("[AircraftBuilder] Gave event vehicle ${args[0]}")
}

fun AircraftBuilderCommand.handleAircraftBuilderSetting(
    data: AircraftBuilderBaseData?,
    sender: CommandSender,
    args: Array<out String>
) {
  if (args.size < 2) return
  if (!sender.canManageAircraftBuilder(data)) {
    sender.sendMessage(AircraftBuilder_PERMISSION_DENIED)
    return
  }

  when (args[1].lowercase(Locale.ROOT)) {
    "delete" -> {
      val vehicleData = data ?: return
      if (vehicleData.deleteFiles()) {
        sender.sendMessage("[AircraftBuilder] Deleted all data for ${vehicleData.name}")
      } else {
        sender.sendMessage("[AircraftBuilder] Internal error deleting data for ${vehicleData.name}")
        Bukkit.getLogger().warning("[AircraftBuilder] ${vehicleData.name} file delete error!!!")
      }
      AircraftBuilderBaseCache.delBaseData(vehicleData.name)
    }
    "offset" -> {
      val vehicleData = data ?: return
      if (args.size < 5) return
      val config = vehicleData.config
      val partTypeName = args[2]
      val index = args[3].toIntOrNull() ?: 0
      if (args[4].equals("del", ignoreCase = true)) {
        if (!updateAircraftOffset(config, partTypeName, index, null)) return
        config.save()
        sender.sendMessage("[AircraftBuilder] Deleted $partTypeName offset $index for ${args[0]}")
        return
      }

      if (args.size < 7) return
      val x = args[4].toDoubleOrNull() ?: 0.0
      val y = args[5].toDoubleOrNull() ?: 0.0
      val z = args[6].toDoubleOrNull() ?: 0.0
      val offsetVector = Vector(x, y, z)

      if (!updateAircraftOffset(config, partTypeName, index, offsetVector)) return
      config.save()
      sender.sendMessage(
          "[AircraftBuilder] Set $partTypeName offset $index: X_$x|Y_$y|Z_$z for ${args[0]}")
    }
    "save" -> handleAircraftBuilderSave(data, sender, args)
    "size" -> {
      val vehicleData = data ?: return
      if (args.size < 3) return
      var size = args[2].toDoubleOrNull() ?: 7.0
      if (sizeLimit < size) {
        size = sizeLimit.toDouble()
        sender.sendMessage("[AircraftBuilder] Size exceeds limit. Set to $sizeLimit")
      }
      vehicleData.config.setBodySize(size)
      vehicleData.config.save()
      sender.sendMessage("[AircraftBuilder] Set Body size to $size for ${args[0]}")
    }
  }
}

private fun updateAircraftOffset(
    config: AircraftBuilderConfig,
    partTypeName: String,
    index: Int,
    offset: Vector?
): Boolean {
  when (partTypeName) {
    "body" -> config.setBodyOffset(offset ?: Vector(0.0, 0.0, 0.0))
    "seat" -> {
      if (offset == null) config.clearSeatOffset(index) else config.setSeatOffset(index, offset)
    }
    else -> return false
  }
  return true
}

private fun findNearbyAircraftBuilderPlayer(location: Location): Player? {
  return Tools.getNearbyPlayers(
          location, COMMAND_BLOCK_SEARCH_XZ, COMMAND_BLOCK_SEARCH_Y, COMMAND_BLOCK_SEARCH_XZ)
      .firstOrNull()
}

fun AircraftBuilderCommand.handleAircraftBuilderBuy(
    sender: CommandSender,
    name: String,
    data: AircraftBuilderBaseData?
) {
  handlePlayerPurchase(
      sender = sender,
      hasData = data != null,
      canUse = { it.canUseAircraftBuilder() },
      deniedMessage = AircraftBuilder_PERMISSION_DENIED,
      openListMenu = { AircraftBuilderGUI.listMenu(true).open(it) },
      inventoryFullMessage = "[AircraftBuilder] Inventory is full!",
      onInventoryFull = {
        it.playSound(it.location, org.bukkit.Sound.BLOCK_AMETHYST_BLOCK_STEP, 0.35f, 0.5f)
        it.closeInventory()
      },
      cost = AircraftBuilder_TRIAL_ITEM_COST,
      pay = io.oyasai.milepoint.MileagePoint::payment,
      onPaymentSuccess = {
        it.playSound(it.location, org.bukkit.Sound.ENTITY_PLAYER_LEVELUP, 0.5f, 1.235f)
        val item = AircraftBuilderItem.buyItem(name, it.name)
        if (item != null) {
          it.inventory.addItem(item)
          it.sendMessage("[AircraftBuilder] Purchased $name!")
        }
      },
      onPaymentFailure = {
        it.playSound(it.location, Sound.BLOCK_AMETHYST_BLOCK_STEP, 0.35f, 0.5f)
        it.sendMessage("[AircraftBuilder] Not enough points!")
      })
}

fun AircraftBuilderCommand.handleAircraftBuilderSave(
    existingData: AircraftBuilderBaseData?,
    sender: CommandSender,
    args: Array<out String>
) {
  val name = args[0]
  executeSaveFlow(
      sender = sender,
      name = name,
      existingData = existingData,
      deniedMessage = AircraftBuilder_PERMISSION_DENIED,
      canCreate = { it.canCreateAircraftBuilder() },
      busyMessage = "[AircraftBuilder] Saving process is already running. Please wait.",
      invalidNameMessage =
          "[AircraftBuilder] Vehicle name can only contain alphanumeric characters and underscores!",
      resolveData = { vehicleName ->
        existingData
            ?: AircraftBuilderBaseData(vehicleName).also {
              AircraftBuilderBaseCache.addBaseData(it)
            }
      },
      canEdit = { vehicleData, editor -> vehicleData.config.isOwnerOrAdmin(editor) },
      onReady = { player, vehicleData ->
        val size =
            if (args.size >= 3) args[2].toDoubleOrNull() ?: vehicleData.config.getBodySize()
            else vehicleData.config.getBodySize()
        val ownerUUID = vehicleData.config.getOwnerUUID() ?: player.uniqueId

        player.sendMessage("[AircraftBuilder] Saving $name...")
        AircraftBuilderSchematic.saveFile(player, vehicleData, size)

        runSaveReloadTask(
            player = player,
            reloadTask = { vehicleData.reloadData(WorldEdit.getInstance()) },
            onComplete = {
              if (!vehicleData.isEmpty()) {
                vehicleData.config.set("owner", ownerUUID.toString())
                vehicleData.config.save()
                player.sendMessage(
                    "[AircraftBuilder] Finished saving $name. Entity count: ${vehicleData.totalEntity()}")
                val entityLimit = player.getEntityLimitByPermission()
                if (vehicleData.totalEntity() > entityLimit) {
                  player.sendMessage(
                      "[AircraftBuilder] Total entities exceed $entityLimit! Cannot spawn!")
                }
              } else {
                player.sendMessage("[AircraftBuilder] Saving finished. (No block data!)")
              }
            })
      })
}
