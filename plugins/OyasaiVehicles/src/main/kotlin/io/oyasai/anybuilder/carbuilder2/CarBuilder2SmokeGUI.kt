package io.oyasai.anybuilder.carbuilder2

import io.oyasai.toolbox.CustomYaml
import io.oyasai.toolbox.OyasaiMenu
import io.oyasai.toolbox.Tools.color
import java.util.UUID
import org.bukkit.Color
import org.bukkit.Material
import org.bukkit.entity.Player
import org.bukkit.inventory.ItemStack

object CarBuilder2SmokeGUI {
  private val colorMaterialList: Map<Material, Color> =
      mapOf(
          Material.WHITE_WOOL to Color.fromRGB(255, 255, 255),
          Material.LIGHT_GRAY_WOOL to Color.fromRGB(170, 170, 170),
          Material.GRAY_WOOL to Color.fromRGB(85, 85, 85),
          Material.BLACK_WOOL to Color.fromRGB(0, 0, 0),
          Material.BROWN_WOOL to Color.fromRGB(180, 104, 77),
          Material.RED_WOOL to Color.fromRGB(170, 0, 0),
          Material.ORANGE_WOOL to Color.fromRGB(255, 170, 0),
          Material.YELLOW_WOOL to Color.fromRGB(255, 255, 85),
          Material.LIME_WOOL to Color.fromRGB(85, 255, 85),
          Material.GREEN_WOOL to Color.fromRGB(0, 170, 0),
          Material.CYAN_WOOL to Color.fromRGB(0, 170, 170),
          Material.LIGHT_BLUE_WOOL to Color.fromRGB(85, 255, 255),
          Material.BLUE_WOOL to Color.fromRGB(0, 0, 170),
          Material.PURPLE_WOOL to Color.fromRGB(170, 0, 170),
          Material.MAGENTA_WOOL to Color.fromRGB(155, 90, 200),
          Material.PINK_WOOL to Color.fromRGB(255, 170, 200),
      )

  private val colorStringList: Map<Material, String> =
      mapOf(
          Material.WHITE_WOOL to "白色",
          Material.LIGHT_GRAY_WOOL to "薄灰色",
          Material.GRAY_WOOL to "灰色",
          Material.BLACK_WOOL to "黒色",
          Material.BROWN_WOOL to "茶色",
          Material.RED_WOOL to "赤色",
          Material.ORANGE_WOOL to "金色",
          Material.YELLOW_WOOL to "黄色",
          Material.LIME_WOOL to "黄緑色",
          Material.GREEN_WOOL to "緑色",
          Material.CYAN_WOOL to "青緑色",
          Material.LIGHT_BLUE_WOOL to "水色",
          Material.BLUE_WOOL to "青色",
          Material.PURPLE_WOOL to "紫色",
          Material.MAGENTA_WOOL to "薄紫色",
          Material.PINK_WOOL to "桃色",
      )

  private val data: MutableMap<UUID, List<Color>> = mutableMapOf()
  private val yaml: MutableMap<UUID, CustomYaml> = mutableMapOf()

  fun joinPlayerColorList(file: CustomYaml, uuid: UUID): List<Color> {
    val color = file.getColor("CarSmoke", Color.WHITE) ?: Color.WHITE
    val list = listOf(color, color)
    data[uuid] = list
    yaml[uuid] = file
    return list
  }

  fun quitPlayerColorList(uuid: UUID) {
    val file = yaml[uuid]
    if (file != null) {
      val color = data[uuid]?.firstOrNull() ?: Color.WHITE
      file.set("CarSmoke", color)
      file.save()
      data.remove(uuid)
      yaml.remove(uuid)
    }
  }

  fun getPlayerColor(uuid: UUID): Color {
    return data[uuid]?.firstOrNull() ?: Color.WHITE
  }

  fun smokeGUI(): OyasaiMenu {
    val gui = OyasaiMenu(18, "&6Smoke Color GUI")
    gui.setGlobalClickAction { event: org.bukkit.event.inventory.InventoryClickEvent ->
      event.isCancelled = true
    }
    gui.setGlobalDragAction { event: org.bukkit.event.inventory.InventoryDragEvent ->
      event.isCancelled = true
    }

    var count = 0
    for (entry in colorMaterialList.entries) {
      val material = entry.key
      val colorVal = entry.value
      val item = ItemStack(material)
      gui.setItem(count, item) { event: org.bukkit.event.inventory.InventoryClickEvent ->
        val player = event.whoClicked as Player
        data[player.uniqueId] = listOf(colorVal, colorVal)
        val colorName = colorStringList[material] ?: "ERROR"
        player.sendMessage(color("[CarBuilder2] &6スモークを &a$colorName &6に変更しました"))
      }
      count++
    }
    return gui
  }
}
