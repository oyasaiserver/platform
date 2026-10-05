package com.github.srain3.painttools.tools.configs

import com.github.srain3.painttools.tools.ToolBox
import java.awt.Color
import java.awt.image.BufferedImage
import java.time.LocalDateTime
import org.bukkit.entity.Player
import org.bukkit.map.MapCanvas
import org.bukkit.map.MapRenderer
import org.bukkit.map.MapView

internal class PaintRenderGate {
  private var pending = true

  fun consume(): Boolean = pending.also { pending = false }
}

data class MapDataCash(val id: Int, var cash: MutableMap<Int, Color>, var time: LocalDateTime) {
  var revision = 0
  var savedRevision = 0

  fun checkID(input: Int): Boolean = input == id

  fun changed() {
    revision++
  }

  fun render(): MapRenderer {
    time = LocalDateTime.now()
    val image = BufferedImage(128, 128, BufferedImage.TYPE_INT_ARGB)
    for (y in 0 until 128) for (x in 0 until 128) {
      image.setRGB(x, y, cash[(x + 1) + y * 128]?.rgb ?: 0)
    }
    val gate = PaintRenderGate()
    return object : MapRenderer(false) {
      override fun render(map: MapView, canvas: MapCanvas, player: Player) {
        if (gate.consume()) canvas.drawImage(0, 0, image)
      }

      override fun isExplorerMap(): Boolean = false
    }
  }
}

object MapData {
  private val mapData = mutableMapOf<Int, MapDataCash>()
  private val loading = mutableMapOf<Int, MutableList<(MapDataCash) -> Unit>>()
  private lateinit var store: CanvasStore
  var undoCash: UndoCash? = UndoCash()

  internal fun initialize(database: CanvasStore) {
    store = database
  }

  fun newCanvas(id: Int) {
    mapData[id] =
        MapDataCash(
            id,
            (1..(128 * 128)).associateWith { Color(1, 1, 1, 0) }.toMutableMap(),
            LocalDateTime.now(),
        )
  }

  fun loadMapData(id: Int, onLoaded: ((MapDataCash) -> Unit)? = null): MapDataCash? {
    mapData[id]?.let {
      return it.also { data ->
        data.time = LocalDateTime.now()
        onLoaded?.invoke(data)
      }
    }
    val callbacks = loading[id]
    if (callbacks != null) {
      if (onLoaded != null) callbacks.add(onLoaded)
      return null
    }
    loading[id] =
        mutableListOf<(MapDataCash) -> Unit>().also { if (onLoaded != null) it.add(onLoaded) }
    store
        .submit { store.load(id) }
        .whenComplete { colors, failure ->
          if (!ToolBox.pl.isEnabled) return@whenComplete
          ToolBox.pl.server.scheduler.runTask(
              ToolBox.pl,
              Runnable {
                val waiting = loading.remove(id) ?: return@Runnable
                if (failure != null) {
                  ToolBox.pl.logger.warning("Canvas $id load failed: ${failure.message}")
                  return@Runnable
                }
                val data = MapDataCash(id, colors, LocalDateTime.now())
                mapData[id] = data
                waiting.forEach { it(data) }
              },
          )
        }
    return null
  }

  /** Snapshot on the main thread; encode and commit on the canvas worker. */
  fun saveMapDataConfig() {
    val now = LocalDateTime.now()
    mapData.values.toList().forEach { data ->
      if (data.revision != data.savedRevision) {
        val revision = data.revision
        val copy = data.cash.toMap()
        store
            .submit { store.save(data.id, copy) }
            .whenComplete { _, failure ->
              if (failure != null)
                  ToolBox.pl.logger.warning("Canvas ${data.id} save failed: ${failure.message}")
              else if (ToolBox.pl.isEnabled)
                  ToolBox.pl.server.scheduler.runTask(
                      ToolBox.pl,
                      Runnable { data.savedRevision = maxOf(data.savedRevision, revision) },
                  )
            }
      }
      if (now.isAfter(data.time.plusMinutes(10)) && data.revision == data.savedRevision)
          mapData.remove(data.id)
    }
  }

  fun flush() {
    mapData.values.forEach { data ->
      if (data.revision != data.savedRevision) {
        val copy = data.cash.toMap()
        store.submit { store.save(data.id, copy) }.join()
      }
    }
  }

  fun disableUnloadMemTask() {
    mapData.clear()
    loading.clear()
    undoCash = null
  }

  fun savaUndo(): Boolean = undoCash?.save(mapData.values.toMutableList()) ?: false
}
