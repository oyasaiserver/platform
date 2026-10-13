package com.github.srain3.painttools.events

import com.github.srain3.painttools.tools.ToolBox
import com.github.srain3.painttools.tools.configs.MapData
import com.github.srain3.painttools.tools.configs.MapIdList
import org.bukkit.Bukkit
import org.bukkit.Material
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
              ToolBox.pl.paintIdKey,
              PersistentDataType.INTEGER,
          ) ?: return@forEach
      if (!MapIdList.checkID(id)) return@forEach
      MapData.loadMapData(id) { mMap ->
        if (!frame.isValid) return@loadMapData
        val currentItem = frame.item
        val currentMeta = currentItem.itemMeta as? MapMeta ?: return@loadMapData
        if (
            currentMeta.persistentDataContainer.get(
                ToolBox.pl.paintIdKey,
                PersistentDataType.INTEGER,
            ) != id
        )
            return@loadMapData
        val mapView = currentMeta.mapView ?: Bukkit.createMap(event.world)
        mapView.centerZ = frame.location.blockZ
        mapView.centerX = frame.location.blockX
        mapView.renderers.toList().forEach(mapView::removeRenderer)
        mapView.addRenderer(mMap.render())
        currentMeta.mapView = mapView
        currentItem.itemMeta = currentMeta
        frame.setItem(currentItem, false)
      }
    }
  }
}
