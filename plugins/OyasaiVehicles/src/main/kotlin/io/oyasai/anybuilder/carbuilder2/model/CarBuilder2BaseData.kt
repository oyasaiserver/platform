package io.oyasai.anybuilder.carbuilder2.model

import com.sk89q.worldedit.WorldEdit
import io.oyasai.anybuilder.runtime.BaseVehicleBaseDataCore
import io.oyasai.anybuilder.runtime.BaseVehicleCache
import io.oyasai.anybuilder.schematic.SchematicToData
import java.util.LinkedHashMap
import java.util.Locale
import kotlin.collections.iterator
import kotlin.math.abs
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.block.data.BlockData
import org.bukkit.util.BoundingBox
import org.bukkit.util.Vector

class CarBuilder2BaseData(name: String) :
    BaseVehicleBaseDataCore<CarBuilder2Config>(
        name, CarBuilder2Config("CarBuilder2/$name/$name.yml"), "CarBuilder2") {
  val body: MutableMap<Vector, Pair<BlockData, Vector>> = LinkedHashMap()
  val wheel: MutableMap<Vector, Pair<BlockData, Vector>> = LinkedHashMap()
  val wheel2: MutableMap<Vector, Pair<BlockData, Vector>> = LinkedHashMap()
  val headLight: MutableMap<Vector, Pair<BlockData, Vector>> = LinkedHashMap()
  val boxSize: MutableMap<CarBuilder2BaseDataType, BoundingBox> = LinkedHashMap()

  init {
    load()
  }

  override fun isEmpty(): Boolean = totalEntity() == 0

  fun getEntityCount(type: CarBuilder2BaseDataType): Int {
    return when (type) {
      CarBuilder2BaseDataType.Body -> body.size
      CarBuilder2BaseDataType.Wheel -> wheel.size
      CarBuilder2BaseDataType.Wheel2 -> wheel2.size
      CarBuilder2BaseDataType.HeadLight -> headLight.size
    }
  }

  fun totalWheelEntity(): Int {
    return getEntityCount(CarBuilder2BaseDataType.Wheel) *
        config.getOffset(CarBuilder2BaseDataType.Wheel).size +
        getEntityCount(CarBuilder2BaseDataType.Wheel2) *
            config.getOffset(CarBuilder2BaseDataType.Wheel2).size
  }

  fun totalHeadLightEntity(): Int {
    return getEntityCount(CarBuilder2BaseDataType.HeadLight) *
        config.getOffset(CarBuilder2BaseDataType.HeadLight).size
  }

  fun totalEntity(): Int {
    return body.size + totalWheelEntity() + totalHeadLightEntity()
  }

  fun getBlock(): BlockData {
    return body.values.firstOrNull()?.first ?: Material.BARRIER.createBlockData()
  }

  fun reloadData(type: CarBuilder2BaseDataType, we: WorldEdit?): Boolean {
    if (we == null) return false

    when (type) {
      CarBuilder2BaseDataType.Body -> body.clear()
      CarBuilder2BaseDataType.Wheel -> wheel.clear()
      CarBuilder2BaseDataType.Wheel2 -> wheel2.clear()
      CarBuilder2BaseDataType.HeadLight -> headLight.clear()
    }

    val raw: MutableMap<Vector, BlockData> =
        SchematicToData.fileToRawBlockData(
            vehicleFile("${name}_${type.configName.lowercase(Locale.ROOT)}.schem")) ?: return true
    if (type == CarBuilder2BaseDataType.Body) {
      raw.entries.removeIf { entry -> isHeadBlock(entry.value) }
    }
    if (raw.isEmpty()) return false

    boxSize[type] = SchematicToData.size(raw).first
    val compressed = SchematicToData.compressBlockData(raw)

    when (type) {
      CarBuilder2BaseDataType.Body -> body.putAll(compressed)
      CarBuilder2BaseDataType.Wheel -> wheel.putAll(compressed)
      CarBuilder2BaseDataType.Wheel2 -> wheel2.putAll(compressed)
      CarBuilder2BaseDataType.HeadLight -> {
        val minY = compressed.keys.minOfOrNull { it.y } ?: 0.0
        val minZ = compressed.keys.minOfOrNull { it.z } ?: 0.0
        val addVec = Vector(0.0, abs(minY), abs(minZ))
        val newComp = LinkedHashMap<Vector, Pair<BlockData, Vector>>()
        for ((vec, data) in compressed) {
          newComp[vec.clone().add(addVec)] = data
        }
        headLight.putAll(newComp)
      }
    }
    return true
  }

  private fun load() {
    val we = WorldEdit.getInstance()
    if (we != null) {
      CarBuilder2BaseDataType.entries.forEach { reloadData(it, we) }
    } else {
      Bukkit.getLogger().warning("[CarBuilder2] WorldEdit読み込み失敗")
    }
  }

  private fun isHeadBlock(block: BlockData): Boolean {
    return when (block.getMaterial()) {
      Material.SKELETON_SKULL,
      Material.SKELETON_WALL_SKULL,
      Material.ZOMBIE_HEAD,
      Material.ZOMBIE_WALL_HEAD,
      Material.CREEPER_HEAD,
      Material.CREEPER_WALL_HEAD -> true
      else -> false
    }
  }
}

object CarBuilder2BaseCache : BaseVehicleCache<CarBuilder2BaseData>("CarBuilder2", "CarBuilder2") {
  override fun createBaseData(name: String): CarBuilder2BaseData = CarBuilder2BaseData(name)
}
