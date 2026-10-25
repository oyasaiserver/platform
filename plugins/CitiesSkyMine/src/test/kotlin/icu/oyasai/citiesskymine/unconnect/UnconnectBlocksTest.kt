package icu.oyasai.citiesskymine.unconnect

import java.lang.reflect.Proxy
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertNotNull
import kotlin.test.assertNull
import kotlin.test.assertTrue
import org.bukkit.Material
import org.bukkit.block.BlockFace
import org.bukkit.block.data.BlockData
import org.bukkit.block.data.MultipleFacing
import org.bukkit.block.data.Waterlogged
import org.bukkit.block.data.type.Fence
import org.bukkit.block.data.type.Gate
import org.bukkit.block.data.type.GlassPane
import org.bukkit.block.data.type.Wall

class UnconnectBlocksTest {
  @Test
  fun disconnectsOnlySupportedBlocksWithoutMutatingInputOrOtherStates() {
    for ((type, material) in
        listOf(
            Fence::class.java to Material.OAK_FENCE,
            GlassPane::class.java to Material.GLASS_PANE,
            GlassPane::class.java to Material.IRON_BARS,
            MultipleFacing::class.java to Material.CHORUS_PLANT,
        )) {
      val original = blockData(type, material)
      val result = assertNotNull(unconnected(original)) as MultipleFacing
      assertTrue(result.faces.isEmpty(), material.name)
      assertFalse((original as MultipleFacing).faces.isEmpty(), "入力は変更しない")
      assertTrue((result as Waterlogged).isWaterlogged, "水没状態を保持する")
      assertEquals(material, result.material)
      assertNull(unconnected(result), "再実行で変更数を増やさない")
    }

    val originalWall = blockData(Wall::class.java, Material.COBBLESTONE_WALL) as Wall
    val wall = assertNotNull(unconnected(originalWall)) as Wall
    assertTrue(wall.isUp)
    for (face in horizontalFaces) assertEquals(Wall.Height.NONE, wall.getHeight(face))
    assertTrue((wall as Waterlogged).isWaterlogged)
    assertFalse(originalWall.isUp)
    assertEquals(Wall.Height.TALL, originalWall.getHeight(BlockFace.NORTH))
    assertNull(unconnected(wall))

    for (material in listOf(Material.VINE, Material.BROWN_MUSHROOM_BLOCK, Material.SCULK_VEIN)) {
      assertNull(unconnected(blockData(MultipleFacing::class.java, material)), material.name)
    }
    assertNull(unconnected(blockData(Gate::class.java, Material.OAK_FENCE_GATE)))
    assertNull(unconnected(blockData(BlockData::class.java, Material.STONE)))
  }

  // BlockData はサーバーの生成処理に依存させず、使う状態だけを保持する。
  private fun blockData(
      type: Class<out BlockData>,
      material: Material,
      faces: MutableSet<BlockFace> =
          (if (material == Material.CHORUS_PLANT)
                  horizontalFaces + listOf(BlockFace.UP, BlockFace.DOWN)
              else horizontalFaces)
              .toMutableSet(),
      heights: MutableMap<BlockFace, Wall.Height> =
          horizontalFaces.associateWith { Wall.Height.TALL }.toMutableMap(),
      initialUp: Boolean = false,
  ): BlockData {
    var up = initialUp
    return Proxy.newProxyInstance(
        BlockData::class.java.classLoader,
        arrayOf(type, Waterlogged::class.java),
    ) { _, method, args ->
      when (method.name) {
        "getMaterial" -> material
        "clone" -> blockData(type, material, faces.toMutableSet(), heights.toMutableMap(), up)
        "getFaces" -> faces.toSet()
        "getAllowedFaces" ->
            if (material == Material.CHORUS_PLANT)
                (horizontalFaces + listOf(BlockFace.UP, BlockFace.DOWN)).toSet()
            else horizontalFaces.toSet()
        "setFace" -> {
          val face = args!![0] as BlockFace
          if (args[1] as Boolean) faces.add(face) else faces.remove(face)
          null
        }
        "getHeight" -> heights[args!![0]]
        "setHeight" -> {
          heights[args!![0] as BlockFace] = args[1] as Wall.Height
          null
        }
        "isUp" -> up
        "setUp" -> {
          up = args!![0] as Boolean
          null
        }
        "isWaterlogged" -> true
        else -> error("Unexpected BlockData call: ${method.name}")
      }
    } as BlockData
  }

  private val horizontalFaces =
      listOf(BlockFace.NORTH, BlockFace.EAST, BlockFace.SOUTH, BlockFace.WEST)
}
