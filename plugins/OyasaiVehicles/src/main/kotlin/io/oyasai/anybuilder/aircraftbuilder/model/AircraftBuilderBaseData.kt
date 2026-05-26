package io.oyasai.anybuilder.aircraftbuilder.model

import com.sk89q.worldedit.WorldEdit
import io.oyasai.anybuilder.common.VehicleConfigCommon
import io.oyasai.anybuilder.runtime.BaseVehicleBaseDataCore
import io.oyasai.anybuilder.runtime.BaseVehicleCache
import io.oyasai.anybuilder.schematic.BuilderSchematic
import io.oyasai.anybuilder.schematic.SchematicToData
import io.oyasai.toolbox.CustomYaml
import java.util.*
import java.util.LinkedHashMap
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.block.data.BlockData
import org.bukkit.command.CommandSender
import org.bukkit.entity.Player
import org.bukkit.util.BoundingBox
import org.bukkit.util.Vector

class AircraftBuilderConfig(fileName: String) : CustomYaml(fileName) {
  fun getOffsetBody(): Vector = getVector("Body.Offset") ?: Vector(0.0, 0.0, 0.0)

  fun getBodySize(): Double = getDouble("Body.Size", 7.0)

  fun getRotateBody(): Double = getDouble("Body.Rotate", 0.0)

  fun getOwnerUUID(): UUID? = VehicleConfigCommon.getOwnerUUID(this)

  fun getSeatList(): List<Pair<Int, Vector>> {
    val seats = sortedMapOf<Int, Vector>()

    for (key in getKeys(true)) {
      if (key.startsWith("Seat.")) {
        val index = key.removePrefix("Seat.").toIntOrNull() ?: continue
        seats[index] = getVector(key) ?: Vector().zero()
      }
    }

    return seats.entries.map { it.key to it.value }
  }

  fun setBodyOffset(offset: Vector) {
    set("Body.Offset", offset)
  }

  fun setBodySize(size: Double) {
    set("Body.Size", size)
  }

  fun setRotateBody(rotate: Double) {
    set("Body.Rotate", rotate)
  }

  fun setSeatOffset(index: Int, offset: Vector) {
    set("Seat.$index", offset)
  }

  fun clearSeatOffset(index: Int) {
    set("Seat.$index", null)
  }

  fun isOwnerOrAdmin(sender: CommandSender): Boolean =
      VehicleConfigCommon.isOwnerOrAdmin(this, sender)
}

class AircraftBuilderBaseData(name: String) :
    BaseVehicleBaseDataCore<AircraftBuilderConfig>(
        name,
        AircraftBuilderConfig("AircraftBuilder/$name/$name.yml"),
        "AircraftBuilder",
    ) {
  val body: MutableMap<Vector, Pair<BlockData, Vector>> = LinkedHashMap()
  var boxSize: BoundingBox = BoundingBox()

  init {
    load()
  }

  override fun isEmpty(): Boolean = totalEntity() == 0

  fun totalEntity(): Int = body.size

  fun getBlock(): BlockData {
    return body.values.firstOrNull()?.first ?: Material.BARRIER.createBlockData()
  }

  fun reloadData(we: WorldEdit?): Boolean {
    if (we == null) return false

    body.clear()
    val raw = SchematicToData.fileToRawBlockData(vehicleFile("$name.schem")) ?: return true
    if (raw.isEmpty()) return false

    boxSize = SchematicToData.size(raw).first
    body.putAll(SchematicToData.compressBlockData(raw))
    return true
  }

  private fun load() {
    val we = WorldEdit.getInstance()
    if (we != null) {
      reloadData(we)
    } else {
      Bukkit.getLogger().warning("[AircraftBuilder] WorldEdit読み込み失敗")
    }
  }
}

object AircraftBuilderBaseCache :
    BaseVehicleCache<AircraftBuilderBaseData>("AircraftBuilder", "AircraftBuilder") {
  override fun createBaseData(name: String): AircraftBuilderBaseData = AircraftBuilderBaseData(name)
}

object AircraftBuilderSchematic {
  fun saveFile(sender: Player, data: AircraftBuilderBaseData, size: Double) {
    BuilderSchematic.saveFile(sender, data.name, "AircraftBuilder", "${data.name}.schem")
  }
}
