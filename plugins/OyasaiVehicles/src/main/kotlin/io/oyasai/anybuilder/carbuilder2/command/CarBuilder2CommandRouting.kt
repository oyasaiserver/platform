package io.oyasai.anybuilder.carbuilder2.command

import io.oyasai.anybuilder.carbuilder2.CarBuilder2GUI
import io.oyasai.anybuilder.carbuilder2.CarBuilder2Item
import io.oyasai.anybuilder.carbuilder2.CarBuilder2Spawn
import io.oyasai.anybuilder.carbuilder2.data.CarBuilder2BaseCache
import io.oyasai.anybuilder.carbuilder2.data.CarBuilder2BaseData
import io.oyasai.anybuilder.carbuilder2.data.CarBuilder2BaseDataType
import io.oyasai.anybuilder.common.command.BuilderCommandRouter
import io.oyasai.canRideCarBuilder2OrAdmin
import io.oyasai.canUseCarBuilder2
import io.oyasai.toolbox.Tools
import java.util.Locale
import org.bukkit.Material
import org.bukkit.Sound
import org.bukkit.command.Command
import org.bukkit.command.CommandSender
import org.bukkit.entity.Player
import org.bukkit.inventory.ItemStack

// carbuilder2|cbmenu <name> spawn [direction|player]
// carbuilder2|cbmenu <name> buy
// carbuilder2|cbmenu <name> info
// carbuilder2|cbmenu <name> save <body|wheel|wheel2|headlight> [size]
// carbuilder2|cbmenu <name> size <type> <value> [auto]
// carbuilder2|cbmenu <name> offset <type> <index> <x> <y> <z>|del
// carbuilder2|cbmenu <name> headlight angle <value>|rotateoffset <x> <y> <z>
// carbuilder2|cbmenu <name> sound <name>
// carbuilder2|cbmenu <name> spring <value>
// carbuilder2|cbmenu <name> machineset <TopSpeed> <Power> <Brake> <Gears> <Grip> <isMT> [Mode]
// [player/direction]
// carbuilder2|cbmenu <name> eventcar <costLimit>

const val CarBuilder2_PERMISSION_DENIED = "[CarBuilder2] 権限がありません。"
const val CarBuilder2_TRIAL_ITEM_COST = 100
const val COMMAND_BLOCK_SEARCH_XZ = 3.5
const val COMMAND_BLOCK_SEARCH_Y = 4.5

val CARDINAL_DIRECTIONS =
    listOf(
        "n",
        "nne",
        "ne",
        "ene",
        "e",
        "ese",
        "se",
        "sse",
        "s",
        "ssw",
        "sw",
        "wsw",
        "w",
        "wnw",
        "nw",
        "nnw")

val COMMAND_BLOCK_MATERIALS =
    setOf(Material.COMMAND_BLOCK, Material.CHAIN_COMMAND_BLOCK, Material.REPEATING_COMMAND_BLOCK)

val OFFSET_AUTO_SCALE_TYPES =
    listOf(
        CarBuilder2BaseDataType.Wheel,
        CarBuilder2BaseDataType.Wheel2,
        CarBuilder2BaseDataType.HeadLight)

val CarBuilder2_GENERAL_COMMANDS = setOf("spawn", "buy", "info")
val CarBuilder2_MANAGER_COMMANDS =
    setOf("delete", "save", "size", "offset", "headlight", "sound", "spring")
val CarBuilder2_ADMIN_COMMANDS = setOf("machineset", "eventcar")

fun CommandSender.canManageCarBuilder2(data: CarBuilder2BaseData?): Boolean {
  return data?.config?.isOwnerOrAdmin(this) == true
}

@Suppress("UNUSED_PARAMETER")
fun handleCarBuilder2Command(
    sender: CommandSender,
    command: Command,
    label: String,
    args: Array<out String>
): Boolean {
  if (command.name != "carbuilder2") return false

  if (args.isEmpty()) {
    return handleCarBuilder2RootCommand(sender)
  }

  val name = args[0]
  val data = CarBuilder2BaseCache.getBaseData(name)

  if (args.size == 1) {
    return handleCarBuilder2SingleArgumentCommand(sender, name, data)
  }

  val subCommand = args[1].lowercase(Locale.ROOT)
  return BuilderCommandRouter.routeSubCommand(
      subCommand = subCommand,
      adminCommands = CarBuilder2_ADMIN_COMMANDS,
      managerCommands = CarBuilder2_MANAGER_COMMANDS,
      generalCommands = CarBuilder2_GENERAL_COMMANDS,
      handleAdmin = { cmd -> handleCarBuilder2AdminCommand(cmd, data, sender, args) },
      handleManager = { handleCarBuilder2ManagerCommand(data, sender, args) },
      handleGeneral = { cmd -> handleCarBuilder2GeneralCommand(cmd, sender, name, data, args) },
      handleUnknown = { true })
}

private fun handleCarBuilder2RootCommand(sender: CommandSender): Boolean {
  return CarBuilder2Command.openRootMenuIfPermitted(
      sender = sender,
      hasPermission = { it.canUseCarBuilder2() },
      deniedMessage = CarBuilder2_PERMISSION_DENIED,
      openMenu = { CarBuilder2GUI.menu().open(it) })
}

private fun handleCarBuilder2SingleArgumentCommand(
    sender: CommandSender,
    name: String,
    data: CarBuilder2BaseData?
): Boolean {
  return CarBuilder2Command.spawnSingleArgumentTrial(
      sender = sender,
      name = name,
      data = data,
      canSpawn = { it.canRideCarBuilder2OrAdmin() },
      deniedMessage = CarBuilder2_PERMISSION_DENIED,
      spawnTrial = { player, baseData ->
        CarBuilder2Spawn.spawn(
            player.location, ItemStack(Material.HOPPER_MINECART), null, player, baseData)
      },
      successMessage = { vehicleName -> "[CarBuilder2] Spawned trial car for $vehicleName" })
}

private fun handleCarBuilder2GeneralCommand(
    subCommand: String,
    sender: CommandSender,
    name: String,
    data: CarBuilder2BaseData?,
    args: Array<out String>
): Boolean {
  when (subCommand) {
    "spawn" -> {
      handleCarBuilder2Spawn(sender, name, data, args)
      return true
    }
    "buy" -> {
      handleCarBuilder2Buy(sender, name, data)
      return true
    }
    "info" -> {
      handleCarBuilder2Info(sender, name, data)
      return true
    }
  }
  return false
}

private fun handleCarBuilder2ManagerCommand(
    data: CarBuilder2BaseData?,
    sender: CommandSender,
    args: Array<out String>
): Boolean {
  CarBuilder2Command.handleCarBuilder2Settings(data, sender, args)
  return true
}

private fun handleCarBuilder2AdminCommand(
    subCommand: String,
    data: CarBuilder2BaseData?,
    sender: CommandSender,
    args: Array<out String>
): Boolean {
  when (subCommand) {
    "machineset" -> CarBuilder2Command.handleCarBuilder2MachineSet(data, sender, args)
    "eventcar" -> CarBuilder2Command.handleCarBuilder2EventCar(data, sender, args)
    else -> return false
  }
  return true
}

private fun handleCarBuilder2Spawn(
    sender: CommandSender,
    name: String,
    data: CarBuilder2BaseData?,
    args: Array<out String>
) {
  if (data == null) return
  if (sender is Player) {
    if (!sender.canRideCarBuilder2OrAdmin()) {
      sender.sendMessage(CarBuilder2_PERMISSION_DENIED)
      return
    }
    val yaw =
        if (args.size > 2) Tools.getYawFromCardinalDirections(args[2])
        else sender.location.yaw.toDouble()
    CarBuilder2Spawn.spawn(
        sender.location, ItemStack(Material.HOPPER_MINECART), null, sender, data, yaw.toFloat())
    sender.sendMessage("[CarBuilder2] Spawned car for $name")
  }
}

private fun handleCarBuilder2Buy(sender: CommandSender, name: String, data: CarBuilder2BaseData?) {
  CarBuilder2Command.handlePlayerPurchase(
      sender = sender,
      hasData = data != null,
      canUse = { it.canUseCarBuilder2() },
      deniedMessage = CarBuilder2_PERMISSION_DENIED,
      openListMenu = { CarBuilder2GUI.listMenu(true).open(it) },
      inventoryFullMessage = "[CarBuilder2] Inventory is full!",
      cost = CarBuilder2_TRIAL_ITEM_COST,
      pay = io.oyasai.milepoint.MileagePoint::payment,
      onPaymentSuccess = {
        it.playSound(it.location, Sound.ENTITY_PLAYER_LEVELUP, 0.5f, 1.235f)
        val item = CarBuilder2Item.buyCarItem(name, it.name)
        if (item != null) {
          it.inventory.addItem(item)
          it.sendMessage("[CarBuilder2] Purchased $name!")
        }
      },
      onPaymentFailure = { it.sendMessage("[CarBuilder2] Not enough points!") })
}
