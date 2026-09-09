package io.oyasai.directstate.edit.shape

import kotlin.math.abs
import kotlin.math.max
import org.bukkit.Material
import org.bukkit.block.BlockFace
import org.bukkit.block.data.*
import org.bukkit.block.data.type.*
import org.bukkit.util.Vector

/** シンプル棒とHand編集から、壁・接続面・Slab・Stairs・Full Blockの形状変更を計算する。 */
internal class ShapeEditor(
    private val families: ShapeFamilies = ShapeFamilies(defaultBlockNames()),
) {
  private val faces = listOf(BlockFace.NORTH, BlockFace.EAST, BlockFace.SOUTH, BlockFace.WEST)
  private val shapes =
      listOf(
          Stairs.Shape.STRAIGHT,
          Stairs.Shape.INNER_LEFT,
          Stairs.Shape.INNER_RIGHT,
          Stairs.Shape.OUTER_LEFT,
          Stairs.Shape.OUTER_RIGHT,
      )

  /** シンプル棒・Hand編集の対象になる形状かをイベント振り分け時に判定する。 */
  fun supports(data: BlockData) =
      data is Fence ||
          data is GlassPane ||
          data is Wall ||
          families.find(data.material.name) != null

  /** シンプル棒用。右クリックなら形を足し、左クリックなら取り除く。 */
  fun edit(original: BlockData, hit: Vector, face: BlockFace?, add: Boolean): BlockData {
    val data = original.clone()
    val radial = Vector(hit.x - 0.5, 0.0, hit.z - 0.5)
    val side = connectionSide(radial, face)
    when (data) {
      is MultipleFacing ->
          if (data is Fence || data is GlassPane) {
            data.setFace(side, add)
            return data
          }
      is Wall -> {
        // 上下面の中央4分の1は、腕ではなく中央支柱へのクリックとして扱う。
        val post =
            max(abs(radial.x), abs(radial.z)) <= 0.25 &&
                (face == BlockFace.UP || face == BlockFace.DOWN)
        if (post) data.isUp = add
        else
            data.setHeight(
                side,
                Wall.Height.entries[
                        (data.getHeight(side).ordinal + if (add) 1 else -1).coerceIn(0, 2)],
            )
        return data
      }
    }
    val family = families.find(data.material.name) ?: return data
    val initial = solidMask(data)
    // 半ブロックの境界では、削除時はクリック面を少し通過させ、追加時はその外側へ移動する。
    val point = hit.clone().add((face?.direction ?: Vector()).multiply(if (add) 0.001 else -0.001))
    val mask = SolidGeometry.edit(initial, add, point.x, point.y, point.z, family.stairs != null)
    if (mask == initial) return data
    return blockDataForMask(data, family, mask)
  }

  /** 棒と素手で同じ腕を選ぶための共通判定。中央近くの側面クリックだけクリック面を優先する。 */
  private fun connectionSide(radial: Vector, face: BlockFace?): BlockFace {
    if (face != null && face in faces && max(abs(radial.x), abs(radial.z)) <= 0.13) return face
    return faces.maxBy { radial.dot(it.direction) }
  }

  /** Slab・Stairs・Full Blockを、上下半分それぞれの四隅を表す8bitへ変換する。 */
  private fun solidMask(data: BlockData): Int =
      when (data) {
        is Slab ->
            when (data.type) {
              Slab.Type.BOTTOM -> 0x0f
              Slab.Type.TOP -> 0xf0
              Slab.Type.DOUBLE -> 0xff
            }
        is Stairs -> {
          val state =
              StairGeometry.states.first {
                it.facing == faces.indexOf(data.facing) && it.shape == shapes.indexOf(data.shape)
              }
          if (data.half == Bisected.Half.BOTTOM) 0x0f or (state.mask shl 4) else 0xf0 or state.mask
        }
        else -> 0xff
      }

  /** 8bitの形に一致するSlab・Stairs・Full Blockを作り、水没状態を引き継ぐ。 */
  private fun blockDataForMask(
      original: BlockData,
      family: ShapeFamilies.Family,
      mask: Int,
  ): BlockData {
    val result =
        when (mask) {
          0xff -> Material.valueOf(family.full).createBlockData()
          0x0f,
          0xf0 -> {
            val slab = Material.valueOf(family.slab).createBlockData() as Slab
            slab.type = if (mask == 0x0f) Slab.Type.BOTTOM else Slab.Type.TOP
            slab
          }
          else -> {
            val stairs =
                Material.valueOf(family.stairs ?: return original.clone()).createBlockData()
                    as Stairs
            stairs.half = if (mask and 0x0f == 0x0f) Bisected.Half.BOTTOM else Bisected.Half.TOP
            // 全部埋まった半分を除き、もう半分の四隅から階段の向きとshapeを選ぶ。
            // 同じ外形を複数の向きで表せる場合は、見た目が変わらないよう元の向きを優先する。
            val partial = if (stairs.half == Bisected.Half.BOTTOM) mask shr 4 else mask and 0x0f
            val state =
                StairGeometry.states
                    .filter { it.mask == partial }
                    .minBy {
                      if (original is Stairs && faces[it.facing] == original.facing) 0 else 1
                    }
            stairs.facing = faces[state.facing]
            stairs.shape = shapes[state.shape]
            stairs
          }
        }
    if (result is Waterlogged && original is Waterlogged)
        result.isWaterlogged = original.isWaterlogged
    return result
  }

  companion object {
    /** 現在のPaperが扱うブロック名の集合。テストではコンストラクタから指定できる。 */
    fun defaultBlockNames(): Set<String> =
        Material.entries.filter { it.isBlock }.map { it.name }.toSet()
  }

  /** 素手デバッグ棒用。右クリックした接続部分を切り替え、固体形状を巡回する。 */
  fun toggle(original: BlockData, hit: Vector, face: BlockFace?): BlockData {
    val data = original.clone()
    val clickFace = face?.name?.let { runCatching { ClickGeometry.Face.valueOf(it) }.getOrNull() }
    val local = ClickGeometry.local(hit.x, hit.y, hit.z, clickFace)
    val radial = Vector(local.x - 0.5, 0.0, local.z - 0.5)
    val side = connectionSide(radial, face)
    when (data) {
      is MultipleFacing ->
          if (data is Fence || data is GlassPane) {
            data.setFace(side, !data.hasFace(side))
            return data
          }
      is Wall -> {
        val sideTop = isWallUpHit(data, hit, face)
        // 上下面の中央4分の1は、腕ではなく中央支柱へのクリックとして扱う。
        val post =
            max(abs(radial.x), abs(radial.z)) <= 0.25 &&
                (face == BlockFace.UP || face == BlockFace.DOWN)
        if (sideTop || post) data.isUp = !data.isUp
        else
            data.setHeight(
                side,
                Wall.Height.entries[(data.getHeight(side).ordinal + 1) % Wall.Height.entries.size],
            )
        return data
      }
    }
    val family = families.find(data.material.name) ?: return data
    val initial = solidMask(data)
    val upper =
        when (data) {
          is Slab -> data.type != Slab.Type.TOP
          is Stairs -> data.half == Bisected.Half.BOTTOM
          else -> local.y >= 0.5
        }
    val mask =
        if (data is Stairs) {
          val facing = faces.indexOf(data.facing)
          val canonical = ClickGeometry.canonical(local, facing)
          val canonicalMask = ClickGeometry.maskToCanonical(initial, facing)
          ClickGeometry.maskFromCanonical(
              SolidGeometry.toggle(
                  canonicalMask,
                  canonical.x,
                  canonical.z,
                  upper,
                  family.stairs != null,
              ),
              facing,
          )
        } else SolidGeometry.toggle(initial, local.x, local.z, upper, family.stairs != null)
    return blockDataForMask(data, family, mask)
  }

  /** 最上部の側面ピクセルは、突き出したアーム上でない限り上面に属する。 */
  private fun isWallUpHit(data: Wall, hit: Vector, face: BlockFace?): Boolean {
    if (face !in faces || hit.y < 15.0 / 16.0) return false
    val armHit =
        when (face) {
          BlockFace.NORTH ->
              data.getHeight(BlockFace.NORTH) != Wall.Height.NONE && hit.z < 5.0 / 16.0
          BlockFace.EAST ->
              data.getHeight(BlockFace.EAST) != Wall.Height.NONE && hit.x > 11.0 / 16.0
          BlockFace.SOUTH ->
              data.getHeight(BlockFace.SOUTH) != Wall.Height.NONE && hit.z > 11.0 / 16.0
          BlockFace.WEST -> data.getHeight(BlockFace.WEST) != Wall.Height.NONE && hit.x < 5.0 / 16.0
          else -> false
        }
    return !armHit
  }
}
