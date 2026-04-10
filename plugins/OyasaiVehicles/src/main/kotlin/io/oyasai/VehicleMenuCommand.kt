package io.oyasai

import io.oyasai.anybuilder.aircraftbuilder.AircraftBuilderGUI
import io.oyasai.anybuilder.aircraftbuilder.data.AircraftBuilderEntityList
import io.oyasai.anybuilder.carbuilder2.CarBuilder2GUI
import io.oyasai.anybuilder.carbuilder2.CarBuilder2SmokeGUI
import io.oyasai.anybuilder.carbuilder2.data.CarBuilder2EntityList
import io.oyasai.toolbox.*
import io.oyasai.toolbox.Tools.addText
import io.oyasai.toolbox.Tools.allHide
import java.util.*
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
  var eventMode: Boolean = false

  private val cameraSetting: MutableMap<UUID, Boolean> = LinkedHashMap()
  private val netSettingConfig: CustomYaml = CustomYaml("NetworkModeSetting.yml")
  private val netSetting: MutableMap<UUID, NetworkModeSetting> = LinkedHashMap()

  override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<out String>
  ): Boolean {
    if (command.name != "realvehicle") return false

    if (args.isEmpty()) {
      if (sender is Player) {
        this.mainMenu().open(sender)
      }
      return true
    }

    when (args[0]) {
      "camera" -> {
        if (sender !is Player) return true
        val uuid = sender.uniqueId
        val newStatus = !camera(uuid)
        cameraSetting[uuid] = newStatus
        sender.sendMessage(
            Tools.color(
                "[OyasaiVehicles] 視点追尾(カメラ自動回転)を${if (newStatus) "&a有効" else "&c無効"}&rに切り替えました"))
        return true
      }
      "garage" -> {
        if (sender is Player) {
          VehicleGarageService.openInventoryGUI(sender)
        }
        return true
      }
      "net",
      "network" -> {
        if (sender !is Player) return true
        val uuid = sender.uniqueId
        val setting = net(uuid)
        setting.nextMode()
        sender.sendMessage(
            Tools.color("[OyasaiVehicles] ネットワーク設定を&a${setting.currentModeLabel()}&rに切り替え"))
        return true
      }
      "vip" -> {
        if (sender !is Player) return true
        if (args.size >= 2) {
          if (args[1] == "car_smoke") {
            if (sender.hasPermission("oyasaivehicles.vip.car.smoke")) {
              CarBuilder2SmokeGUI.smokeGUI().open(sender)
            } else {
              sender.sendMessage(Tools.color("[OyasaiVehicles] &c権限がありません。"))
              Tools.sendDonateLink(sender)
            }
            return true
          }
        } else {
          Tools.sendDonateLink(sender)
        }
        return true
      }
      "admin" -> {
        if (!sender.hasOyasaiAdminPermission()) {
          sender.sendMessage(Tools.color("[OyasaiVehicles] 権限がありません。"))
          return true
        }
        if (args.size >= 2) {
          when (args[1]) {
            "eventmode" -> {
              eventMode = !eventMode
              sender.sendMessage(
                  Tools.color(
                      "[OyasaiVehicles] イベントモードを${if (eventMode) "&a有効化" else "&c無効化"}&rしました"))
              return true
            }
            "ubc" -> {
              sender.sendMessage(
                  "UnderBlockIsSpeed.yml reload! load Material=> ${UnderBlockPattern.loadConfig()}")
              return true
            }
            else ->
                sender.sendMessage(
                    Tools.color("[OyasaiVehicles] Unknown admin subcommand: ${args[1]}"))
          }
        }
        return true
      }
      "break" -> {
        if (sender !is Player) return true
        val uuid = sender.uniqueId
        val cars = CarBuilder2EntityList.breakUserCar(uuid)
        val aircrafts = AircraftBuilderEntityList.breakUserAircraft(uuid)
        sender.sendMessage(Tools.color("[OyasaiVehicles] 貴方が出した乗り物を ${cars + aircrafts} 台を壊しました。"))
        return true
      }
      else -> {
        sender.sendMessage(Tools.color("[OyasaiVehicles] Unknown subcommand: ${args[0]}"))
        return true
      }
    }
  }

  override fun onTabComplete(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<out String>
  ): MutableList<String>? {
    if (command.name != "realvehicle") return null

    return when (args.size) {
      0,
      1 -> {
        if (sender.hasOyasaiAdminPermission()) {
          mutableListOf("garage", "break", "admin", "camera", "net", "vip")
        } else {
          mutableListOf("garage", "break", "camera", "net", "vip")
        }
      }
      2 -> {
        when (args[0]) {
          "admin" ->
              if (sender.hasOyasaiAdminPermission()) mutableListOf("eventmode", "ubc")
              else mutableListOf()
          "vip" -> mutableListOf("car_smoke")
          else -> mutableListOf()
        }
      }
      else -> mutableListOf()
    }
  }

  fun camera(uuid: UUID): Boolean = cameraSetting[uuid] ?: true

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
    val gui = OyasaiMenu(45, "Vehicle Menu")
    gui.setGlobalClickAction { it.isCancelled = true }
    gui.setGlobalDragAction { it.isCancelled = true }

    val glass =
        ItemStack(Material.BLACK_STAINED_GLASS_PANE).allHide().addText("&e統合版は非対応", emptyList())

    for (i in 0..8) {
      gui.setItem(i, glass)
      gui.setItem(i + 36, glass)
    }

    gui.setItem(
        12,
        ItemStack(Material.ENDER_PEARL)
            .allHide()
            .addText("&aCarBuilder2", listOf("&f車の試乗・購入などはこちらから", "&e統合版は非対応"))) {
          val p = it.whoClicked as Player
          p.playSound(p.location, Sound.UI_BUTTON_CLICK, SoundCategory.PLAYERS, 1.0f, 1.0f)
          CarBuilder2GUI.menu().open(p)
        }

    gui.setItem(
        14,
        ItemStack(Material.FEATHER)
            .allHide()
            .addText("&aAircraftBuilder", listOf("&f飛行機の試乗・購入などはこちらから", "&e統合版は非対応"))) {
          val p = it.whoClicked as Player
          p.playSound(p.location, Sound.UI_BUTTON_CLICK, SoundCategory.PLAYERS, 1.0f, 1.0f)
          AircraftBuilderGUI.menu().open(p)
        }

    val cameraIcon =
        (CustomHead.getHead("camera") ?: ItemStack(Material.ENDER_EYE))
            .allHide()
            .addText("&f視点追尾", listOf("&f乗車時の視点追尾ON/OFFを切り替え"))
    gui.setItem(35, cameraIcon) {
      val p = it.whoClicked as Player
      p.playSound(p.location, Sound.UI_BUTTON_CLICK, SoundCategory.PLAYERS, 1.0f, 1.0f)
      p.closeInventory()
      p.performCommand("rvmenu camera")
    }

    gui.setItem(34, ItemStack(Material.CHEST).allHide().addText("&fガレージ", listOf("&fガレージを開く"))) {
      val p = it.whoClicked as Player
      p.playSound(p.location, Sound.UI_BUTTON_CLICK, SoundCategory.PLAYERS, 1.0f, 1.0f)
      p.closeInventory()
      p.performCommand("rvmenu garage")
    }

    return gui
  }
}
