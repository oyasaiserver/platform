package io.oyasai

import io.oyasai.anybuilder.aircraftbuilder.AircraftBuilderGUI
import io.oyasai.anybuilder.carbuilder2.CarBuilder2GUI
import io.oyasai.anybuilder.carbuilder2.CarBuilder2SmokeGUI
import io.oyasai.anybuilder.common.VehicleRegistry
import io.oyasai.toolbox.CustomHead
import io.oyasai.toolbox.CustomYaml
import io.oyasai.toolbox.NetworkModeSetting
import io.oyasai.toolbox.OyasaiMenu
import io.oyasai.toolbox.Tools
import io.oyasai.toolbox.Tools.addText
import io.oyasai.toolbox.Tools.allHide
import io.oyasai.toolbox.UnderBlockPattern
import java.util.LinkedHashMap
import java.util.Locale
import java.util.UUID
import org.bukkit.Material
import org.bukkit.Sound
import org.bukkit.SoundCategory
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.command.TabCompleter
import org.bukkit.entity.Player
import org.bukkit.inventory.ItemStack

// realvehicle|rvmenu camera
// realvehicle|rvmenu garage
// realvehicle|rvmenu net
// realvehicle|rvmenu vip [car_smoke]
// realvehicle|rvmenu admin eventmode|ubc
// realvehicle|rvmenu break

object VehicleMenuCommand : CommandExecutor, TabCompleter {
  private const val COMMAND_NAME = "realvehicle"
  private const val COMMAND_ALIAS = "rvmenu"
  private const val SUB_CAMERA = "camera"
  private const val SUB_GARAGE = "garage"
  private const val SUB_NETWORK = "net"
  private const val SUB_VIP = "vip"
  private const val SUB_ADMIN = "admin"
  private const val SUB_BREAK = "break"
  private const val SUB_EVENT_MODE = "eventmode"
  private const val SUB_UNDER_BLOCK = "ubc"
  private const val SUB_RELOAD = "reload"
  private const val SUB_VIP_SMOKE = "car_smoke"
  private const val MENU_SIZE = 45
  private const val HINT_ROW_WIDTH = 9
  private const val HINT_TOP_ROW_START = 0
  private const val HINT_BOTTOM_ROW_START = 36
  private const val SLOT_CAR = 12
  private const val SLOT_AIRCRAFT = 14
  private const val SLOT_CAMERA = 35
  private const val SLOT_GARAGE = 34

  var eventMode: Boolean = false

  private val cameraSetting: MutableMap<UUID, Boolean> = LinkedHashMap()
  private val netSettingConfig: CustomYaml = CustomYaml("NetworkModeSetting.yml")
  private val netSetting: MutableMap<UUID, NetworkModeSetting> = LinkedHashMap()

  override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<out String>,
  ): Boolean {
    if (command.name != COMMAND_NAME) return false

    if (args.isEmpty()) {
      if (sender is Player) {
        mainMenu().open(sender)
      }
      return true
    }

    return when (args[0]) {
      SUB_CAMERA -> handleCameraCommand(sender)
      SUB_GARAGE -> handleGarageCommand(sender)
      SUB_NETWORK,
      "network" -> handleNetworkCommand(sender)
      SUB_VIP -> handleVipCommand(sender, args)
      SUB_ADMIN -> handleAdminCommand(sender, args)
      SUB_BREAK -> handleBreakCommand(sender)
      else -> {
        sender.sendMessage(Tools.color("[OyasaiVehicles] Unknown subcommand: ${args[0]}"))
        true
      }
    }
  }

  override fun onTabComplete(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<out String>,
  ): MutableList<String>? {
    if (command.name != COMMAND_NAME) return null

    return when (args.size) {
      0,
      1 -> {
        if (sender.hasOyasaiAdminPermission()) {
          mutableListOf(SUB_GARAGE, SUB_BREAK, SUB_ADMIN, SUB_CAMERA, SUB_NETWORK, SUB_VIP)
        } else {
          mutableListOf(SUB_GARAGE, SUB_BREAK, SUB_CAMERA, SUB_NETWORK, SUB_VIP)
        }
      }
      2 ->
          when (args[0]) {
            SUB_ADMIN ->
                if (sender.hasOyasaiAdminPermission())
                    mutableListOf(SUB_EVENT_MODE, SUB_UNDER_BLOCK, SUB_RELOAD)
                else mutableListOf()
            SUB_VIP -> mutableListOf(SUB_VIP_SMOKE)
            else -> mutableListOf()
          }
      3 ->
          when (args[1].lowercase(Locale.ROOT)) {
            SUB_RELOAD -> mutableListOf("all", "config", "vehicles")
            else -> mutableListOf()
          }
      else -> mutableListOf()
    }
  }

  fun camera(uuid: UUID): Boolean = cameraSetting[uuid] ?: false

  fun net(uuid: UUID): NetworkModeSetting {
    return netSetting.getOrPut(uuid) {
      NetworkModeSetting(netSettingConfig.getInt(uuid.toString(), 0))
    }
  }

  fun onDisable() {
    for ((uuid, setting) in netSetting) {
      netSettingConfig.set(uuid.toString(), setting.currentModeIndex())
    }
    netSettingConfig.save()
  }

  private fun mainMenu(): OyasaiMenu {
    val gui = OyasaiMenu(MENU_SIZE, "Vehicle Menu")
    gui.setGlobalClickAction { it.isCancelled = true }
    gui.setGlobalDragAction { it.isCancelled = true }

    val glass =
        ItemStack(Material.BLACK_STAINED_GLASS_PANE).allHide().addText("&e統合版は非対応", emptyList())
    for (index in 0 until HINT_ROW_WIDTH) {
      gui.setItem(HINT_TOP_ROW_START + index, glass)
      gui.setItem(HINT_BOTTOM_ROW_START + index, glass)
    }

    gui.setItem(
        SLOT_CAR,
        ItemStack(Material.ENDER_PEARL)
            .allHide()
            .addText("&aCarBuilder2", listOf("&f車の試乗・購入などはこちらから", "&e統合版は非対応")),
    ) {
      openBuilderMenu(it) { player -> CarBuilder2GUI.menu().open(player) }
    }

    gui.setItem(
        SLOT_AIRCRAFT,
        ItemStack(Material.FEATHER)
            .allHide()
            .addText("&aAircraftBuilder", listOf("&f飛行機の試乗・購入などはこちらから", "&e統合版は非対応")),
    ) {
      openBuilderMenu(it) { player -> AircraftBuilderGUI.menu().open(player) }
    }

    val cameraIcon =
        (CustomHead.getHead("camera") ?: ItemStack(Material.ENDER_EYE))
            .allHide()
            .addText("&f視点追尾", listOf("&f乗車時の視点追尾ON/OFFを切り替え"))
    gui.setItem(SLOT_CAMERA, cameraIcon) {
      openCommand(it.whoClicked as Player, "$COMMAND_ALIAS $SUB_CAMERA")
    }

    gui.setItem(
        SLOT_GARAGE,
        ItemStack(Material.CHEST).allHide().addText("&fガレージ", listOf("&fガレージを開く")),
    ) {
      openCommand(it.whoClicked as Player, "$COMMAND_ALIAS $SUB_GARAGE")
    }

    return gui
  }

  private fun handleCameraCommand(sender: CommandSender): Boolean {
    val player = sender as? Player ?: return true
    val uuid = player.uniqueId
    val newStatus = !camera(uuid)
    cameraSetting[uuid] = newStatus
    player.sendMessage(
        Tools.color("[OyasaiVehicles] 視点追尾(カメラ自動回転)を${if (newStatus) "&a有効" else "&c無効"}&rに切り替えました")
    )
    return true
  }

  private fun handleGarageCommand(sender: CommandSender): Boolean {
    if (sender is Player) {
      VehicleGarageService.openInventoryGUI(sender)
    }
    return true
  }

  private fun handleNetworkCommand(sender: CommandSender): Boolean {
    val player = sender as? Player ?: return true
    val setting = net(player.uniqueId)
    setting.nextMode()
    player.sendMessage(
        Tools.color("[OyasaiVehicles] ネットワーク設定を&a${setting.currentModeLabel()}&rに切り替え")
    )
    return true
  }

  private fun handleVipCommand(sender: CommandSender, args: Array<out String>): Boolean {
    val player = sender as? Player ?: return true
    val subCommand = args.getOrNull(1)?.lowercase(Locale.ROOT)
    if (subCommand == SUB_VIP_SMOKE) {
      if (player.hasPermission("oyasaivehicles.vip.car.smoke")) {
        CarBuilder2SmokeGUI.smokeGUI().open(player)
      } else {
        player.sendMessage(Tools.color("[OyasaiVehicles] &c権限がありません。"))
        Tools.sendDonateLink(player)
      }
    } else if (subCommand == null) {
      Tools.sendDonateLink(player)
    }
    return true
  }

  private fun handleAdminCommand(sender: CommandSender, args: Array<out String>): Boolean {
    if (!sender.hasOyasaiAdminPermission()) {
      sender.sendMessage(Tools.color("[OyasaiVehicles] 権限がありません。"))
      return true
    }

    when (args.getOrNull(1)?.lowercase(Locale.ROOT)) {
      SUB_EVENT_MODE -> {
        eventMode = !eventMode
        sender.sendMessage(
            Tools.color("[OyasaiVehicles] イベントモードを${if (eventMode) "&a有効化" else "&c無効化"}&rしました")
        )
      }
      SUB_UNDER_BLOCK ->
          sender.sendMessage(
              "UnderBlockIsSpeed.yml reload! load Material=> ${UnderBlockPattern.loadConfig()}"
          )
      SUB_RELOAD ->
          when (args.getOrNull(2)?.lowercase(Locale.ROOT)) {
            null,
            "",
            "all" -> sender.sendMessage(VehicleReloadService.reloadAll())
            "config" -> sender.sendMessage(VehicleReloadService.reloadSettings())
            "vehicle",
            "vehicles" -> sender.sendMessage(VehicleReloadService.reloadVehicles())
            else ->
                sender.sendMessage(
                    Tools.color("[OyasaiVehicles] Unknown reload target: ${args[2]}")
                )
          }
      null -> Unit
      else ->
          sender.sendMessage(Tools.color("[OyasaiVehicles] Unknown admin subcommand: ${args[1]}"))
    }
    return true
  }

  private fun handleBreakCommand(sender: CommandSender): Boolean {
    val player = sender as? Player ?: return true
    val count = VehicleRegistry.breakAllUserVehicles(player.uniqueId)
    player.sendMessage(Tools.color("[OyasaiVehicles] 貴方が出した乗り物を $count 台を壊しました。"))
    return true
  }

  private fun openBuilderMenu(
      event: org.bukkit.event.inventory.InventoryClickEvent,
      openMenu: (Player) -> Unit,
  ) {
    val player = event.whoClicked as Player
    player.playMenuClick()
    openMenu(player)
  }

  private fun openCommand(player: Player, command: String) {
    player.playMenuClick()
    player.closeInventory()
    player.performCommand(command)
  }

  private fun Player.playMenuClick() {
    playSound(location, Sound.UI_BUTTON_CLICK, SoundCategory.PLAYERS, 1.0f, 1.0f)
  }
}
