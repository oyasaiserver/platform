package icu.oyasai.citiesskymine.unconnect

import org.bukkit.Material
import org.bukkit.block.BlockFace
import org.bukkit.block.data.BlockData
import org.bukkit.block.data.MultipleFacing
import org.bukkit.block.data.type.Fence
import org.bukkit.block.data.type.GlassPane
import org.bukkit.block.data.type.Wall

private val WALL_FACES = listOf(BlockFace.NORTH, BlockFace.EAST, BlockFace.SOUTH, BlockFace.WEST)

internal fun unconnected(data: BlockData): BlockData? {
  if (data is Wall) {
    if (data.isUp && WALL_FACES.all { data.getHeight(it) == Wall.Height.NONE }) return null
    return (data.clone() as Wall).apply {
      WALL_FACES.forEach { setHeight(it, Wall.Height.NONE) }
      isUp = true
    }
  }
  if (data is Fence || data is GlassPane || data.material == Material.CHORUS_PLANT) {
    val facing = data as? MultipleFacing ?: return null
    if (facing.faces.isEmpty()) return null
    return (data.clone() as MultipleFacing).apply { allowedFaces.forEach { setFace(it, false) } }
  }
  return null
}
