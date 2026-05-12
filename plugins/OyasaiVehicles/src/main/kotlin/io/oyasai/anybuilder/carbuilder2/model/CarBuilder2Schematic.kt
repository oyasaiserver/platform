package io.oyasai.anybuilder.carbuilder2.model

import com.sk89q.worldedit.bukkit.BukkitAdapter
import com.sk89q.worldedit.extent.clipboard.Clipboard
import com.sk89q.worldedit.math.BlockVector3
import io.oyasai.anybuilder.schematic.BuilderSchematic
import io.oyasai.anybuilder.schematic.SchematicToData
import org.bukkit.Material
import org.bukkit.block.data.BlockData
import org.bukkit.entity.Player
import org.bukkit.util.Vector
import java.util.LinkedHashMap
import java.util.Locale
import kotlin.collections.iterator

object CarBuilder2Schematic {
    fun saveFile(sender: Player, data: CarBuilder2BaseData, type: CarBuilder2BaseDataType, size: Double) {
        val fileName = "${data.name}_${type.name.lowercase(Locale.ROOT)}.schem"
        BuilderSchematic.saveFile(sender, data.name, "CarBuilder2", fileName) { clipboard ->
            if (type == CarBuilder2BaseDataType.Body) {
                applyHeadOffsets(clipboard, data, size)
            }
        }
    }

    private fun applyHeadOffsets(clipboard: Clipboard, data: CarBuilder2BaseData, bodySize: Double) {
        val raw = LinkedHashMap<Vector, BlockData>()
        val region = clipboard.region
        val min = region.minimumPoint
        for (y in 0 until region.height) {
            for (x in 0 until region.width) {
                for (z in 0 until region.length) {
                    val pos = BlockVector3.at(min.x() + x, min.y() + y, min.z() + z)
                    val blockData = BukkitAdapter.adapt(clipboard.getFullBlock(pos))
                    if (blockData.material != Material.AIR) {
                        raw[Vector(x.toDouble(), y.toDouble(), z.toDouble())] = blockData
                    }
                }
            }
        }

        if (raw.isEmpty()) return

        val bodyRaw = LinkedHashMap<Vector, BlockData>()
        for ((vec, blockData) in raw) {
            if (!isOffsetMarkerBlock(blockData)) {
                bodyRaw[vec] = blockData
            }
        }
        if (bodyRaw.isEmpty()) return

        val fullSize = SchematicToData.size(raw)
        val bodySizeData = SchematicToData.size(bodyRaw)
        val bodyCenterShift = selectionCenter(fullSize.second.second, fullSize.second.first)
            .subtract(selectionCenter(bodySizeData.second.second, bodySizeData.second.first))
        val compressed = SchematicToData.compressBlockData(raw)
        if (compressed.isEmpty()) return

        val fixWidth = bodySize / bodySizeData.first.maxX
        var hit = false
        var headlightCount = 0
        var wheelCount = 0
        var wheel2Count = 0
        val headlightOffset = LinkedHashMap<Int, Vector>()
        val wheelOffset = LinkedHashMap<Int, Vector>()
        val wheel2Offset = LinkedHashMap<Int, Vector>()

        fun roundVec(vec: Vector): Vector {
            return Vector(
                Math.round(vec.x * 1000.0) * 0.001,
                Math.round(vec.y * 1000.0) * 0.001,
                Math.round(vec.z * 1000.0) * 0.001
            )
        }

        for ((offset, pair) in compressed) {
            when (pair.first.placementMaterial) {
                Material.CREEPER_HEAD, Material.CREEPER_WALL_HEAD -> {
                    hit = true
                    val centeredOffset = offset.clone().add(bodyCenterShift)
                    val vec = centeredOffset.setX(centeredOffset.x + (pair.second.x / 2.0)).multiply(fixWidth)
                    headlightOffset[headlightCount] = roundVec(vec)
                    headlightCount++
                }
                Material.SKELETON_SKULL, Material.SKELETON_WALL_SKULL -> {
                    hit = true
                    val vec = Vector(
                        offset.x + (pair.second.x / 2.0),
                        offset.y + (pair.second.y / 2.0),
                        offset.z + (pair.second.z / 2.0)
                    ).add(bodyCenterShift).multiply(fixWidth)
                    wheelOffset[wheelCount] = roundVec(vec)
                    wheelCount++
                }
                Material.ZOMBIE_HEAD, Material.ZOMBIE_WALL_HEAD -> {
                    hit = true
                    val vec = Vector(
                        offset.x + (pair.second.x / 2.0),
                        offset.y + (pair.second.y / 2.0),
                        offset.z + (pair.second.z / 2.0)
                    ).add(bodyCenterShift).multiply(fixWidth)
                    wheel2Offset[wheel2Count] = roundVec(vec)
                    wheel2Count++
                }
                else -> Unit
            }
        }

        if (!hit) return

        if (headlightOffset.isNotEmpty()) {
            data.config.set("HeadLight.Offset", null)
            for ((index, vec) in headlightOffset) {
                data.config.set("HeadLight.Offset.$index", vec)
            }
        }
        if (wheelOffset.isNotEmpty()) {
            data.config.set("Wheel.Offset", null)
            for ((index, vec) in wheelOffset) {
                data.config.set("Wheel.Offset.$index", vec)
            }
        }
        if (wheel2Offset.isNotEmpty()) {
            data.config.set("Wheel2.Offset", null)
            for ((index, vec) in wheel2Offset) {
                data.config.set("Wheel2.Offset.$index", vec)
            }
        }
        data.config.save()
    }

    private fun isOffsetMarkerBlock(blockData: BlockData): Boolean {
        return when (blockData.material) {
            Material.CREEPER_HEAD, Material.CREEPER_WALL_HEAD,
            Material.SKELETON_SKULL, Material.SKELETON_WALL_SKULL,
            Material.ZOMBIE_HEAD, Material.ZOMBIE_WALL_HEAD -> true
            else -> false
        }
    }

    private fun selectionCenter(min: Vector, max: Vector): Vector {
        return min.clone().add(max.clone().add(Vector(1.0, 1.0, 1.0))).multiply(0.5)
    }
}
