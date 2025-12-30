package com.github.srain3.painttools.events

import com.github.srain3.painttools.tools.ToolBox
import com.github.srain3.painttools.tools.configs.MapData
import com.github.srain3.painttools.tools.configs.MapIdList
import java.awt.Color
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.NamespacedKey
import org.bukkit.entity.ItemFrame
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.world.ChunkLoadEvent
import org.bukkit.inventory.meta.MapMeta
import org.bukkit.persistence.PersistentDataType

/** Chunkロード時にMap更新を行う */
object LoadChunkEvent : Listener {
  @EventHandler
  fun loadChunk(event: ChunkLoadEvent) {
    event.chunk.entities.filterIsInstance<ItemFrame>().forEach { frame ->
      if (frame.item.type != Material.FILLED_MAP) return@forEach
      val mapMeta = frame.item.itemMeta as MapMeta
      val id =
          mapMeta.persistentDataContainer.get(
              NamespacedKey(ToolBox.pl, "ID"),
              PersistentDataType.INTEGER,
          ) ?: return@forEach
      if (!MapIdList.checkID(id)) return@forEach
      val mapView = mapMeta.mapView ?: Bukkit.createMap(event.world)
      val mMap = MapData.loadMapData(id)
      mMap.cash.forEach { (index, color) ->
        if ((color.red == 1 && color.green == 1 && color.blue == 1)) {
          mMap.cash[index] = Color(1, 1, 1, 0)
        }
      }
      mapView.centerZ = frame.location.blockZ
      mapView.centerX = frame.location.blockX

      for (renderer in mapView.renderers) {
        mapView.removeRenderer(renderer)
      }
      mapView.addRenderer(mMap.render())
      mapMeta.mapView = mapView
      frame.item.itemMeta = mapMeta
    }
  }
}
