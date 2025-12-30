package com.github.srain3.painttools.tools.configs

import com.github.srain3.painttools.tools.FileBox
import com.github.srain3.painttools.tools.ToolBox
import java.awt.Color
import java.io.File
import java.io.IOException
import java.time.LocalDateTime
import java.util.logging.Level
import javax.imageio.IIOException
import javax.imageio.ImageIO
import org.bukkit.entity.Player
import org.bukkit.map.MapCanvas
import org.bukkit.map.MapRenderer
import org.bukkit.map.MapView

/** Mapごとのデータ */
data class MapDataCash(val id: Int, var cash: MutableMap<Int, Color>, var time: LocalDateTime) {
  fun checkID(input: Int): Boolean {
    return input == id
  }

  fun render(): MapRenderer {
    time = LocalDateTime.now()
    val list = cash
    return object : MapRenderer() {
      override fun render(map: MapView, canvas: MapCanvas, player: Player) {
        // スレッド中にfor回して参照してはいけないらしい
        for (x in 0..127) {
          for (y in 0..127) {
            val color = list[(x + 1) + (y * 128)] ?: continue
            canvas.setPixelColor(x, y, color)
          }
        }
      }

      override fun isExplorerMap(): Boolean = false
    }
  }
}

/** DataCashまとめ */
object MapData {
  /** /data/<ID>.ymlを保管する変数 */
  private var mapDataList = mutableListOf<MapDataCash>()

  /** /data/<ID>.ymlへセーブ */
  fun saveMapDataConfig() {
    val nowTime = LocalDateTime.now()
    val list = mapDataList.toMutableList()
    for (mapDataCash in list) {
      // val file = FileBox.getCfg("/data/${mapDataCash.id}.yml")
      val pngFile = File(ToolBox.pl.dataFolder, "/img/${mapDataCash.id}.png")
      if (!pngFile.exists()) {
        val imgFolder = File(ToolBox.pl.dataFolder, "/img")
        if (!imgFolder.exists()) {
          try {
            imgFolder.mkdirs()
          } catch (ex: IOException) {
            ToolBox.pl.logger.log(Level.SEVERE, "Could not save config to /img", ex)
          }
        }
        try {
          pngFile.createNewFile()
        } catch (ex: IOException) {
          ToolBox.pl.logger.log(
              Level.SEVERE,
              "Could not save config to /img/${mapDataCash.id}.png",
              ex,
          )
        }
      }
      var bufferedImage = ImageIO.read(pngFile)
      if (bufferedImage == null) {
        bufferedImage = ImageIO.read(ToolBox.pl.getResource("newPNG.png"))
      }
      // //mapDataCash.cash.values.forEach { mapCash ->
      // file.set("X${mapCash.x}_Y${mapCash.y}", mapCash.color)
      // //bufferedImage.setRGB(mapCash.x,mapCash.y, mapCash.color.asRGB())
      // //}
      for (x in 0..127) {
        for (y in 0..127) {
          bufferedImage.setRGB(x, y, mapDataCash.cash[(x + 1) + (y * 128)]?.rgb ?: continue)
        }
      }
      // FileBox.saveFile("/data/${mapDataCash.id}.yml", file)
      ImageIO.write(bufferedImage, "PNG", pngFile)
      if (nowTime.isAfter(mapDataCash.time.plusMinutes(10))) {
        mapDataList.remove(mapDataCash)
        // Bukkit.getServer().logger.info("[PaintTools] remove mapDataCash!")
      }
    }
  }

  /** 無効化時にキャッシュをクリアしておく */
  fun disableUnloadMemTask() {
    mapDataList.clear()
    undoCash = null
  }

  /** pos(X,Y)とcolorのリストを呼び出す */
  fun loadMapData(id: Int): MapDataCash {
    return if (mapDataList.any { it.checkID(id) }) {
      mapDataList.first { it.checkID(id) }
    } else {
      val posList = mutableMapOf<Int, Color>()
      if (FileBox.checkFile("/data/$id.yml")) {
        val file = FileBox.getCfg("/data/$id.yml")
        file.getKeys(false).forEach { keyStr ->
          val split = keyStr.replace("X", "").replace("Y", "").split("_")
          val x = split[0].toInt()
          val y = split[1].toInt()
          val color = Color(file.getColor(keyStr)?.asRGB() ?: return@forEach)
          posList[(x + 1) + (y * 128)] = color
        }
        FileBox.removeFile("/data/$id.yml")
      } else {
        val pngFile = File(ToolBox.pl.dataFolder, "/img/${id}.png")
        if (!pngFile.exists()) {
          val imgFolder = File(ToolBox.pl.dataFolder, "/img")
          if (!imgFolder.exists()) {
            try {
              imgFolder.mkdirs()
            } catch (ex: IOException) {
              ToolBox.pl.logger.log(Level.SEVERE, "Could not save config to /img", ex)
            }
          }
          try {
            pngFile.createNewFile()
          } catch (ex: IOException) {
            ToolBox.pl.logger.log(Level.SEVERE, "Could not save config to /img/${id}.png", ex)
          }
        }
        var bufferedImage =
            try {
              ImageIO.read(pngFile)
            } catch (_: IIOException) {
              null
            }
        if (bufferedImage == null) {
          bufferedImage = ImageIO.read(ToolBox.pl.getResource("newPNG.png"))
        }
        val colorIntList = bufferedImage.getRGB(0, 0, 128, 128, IntArray(128 * 128), 0, 128)
        for (x in 0..127) {
          for (y in 0..127) {
            posList[(x + 1) + (y * 128)] = Color(colorIntList[y * 128 + x], true)
          }
        }
      }
      val dataCash = MapDataCash(id, posList, LocalDateTime.now())
      mapDataList.add(dataCash)
      dataCash
    }
  }

  var undoCash: UndoCash? = UndoCash()

  fun savaUndo(): Boolean {
    return undoCash?.save(mapDataList) ?: false
  }
}
