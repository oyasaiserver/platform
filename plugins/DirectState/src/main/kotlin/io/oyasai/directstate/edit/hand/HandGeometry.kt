package io.oyasai.directstate.edit.hand

import kotlin.math.abs
import org.bukkit.block.BlockFace
import org.bukkit.block.Orientation
import org.bukkit.block.data.Directional
import org.bukkit.block.data.MultipleFacing
import org.bukkit.block.data.Orientable
import org.bukkit.block.data.Rotatable
import org.bukkit.block.data.type.SculkSensor
import org.bukkit.block.data.type.Speleothem
import org.bukkit.util.Vector

/** 一回のクリックが持つ位置と面。 positionはブロック内部の0.0～1.0、各判定の引数はMinecraftテクスチャ上の16px基準。 */
internal data class BlockClick(val position: Vector, val face: BlockFace?) {
  val isVertical = HandGeometry.isVerticalFace(face)

  /** クリック面上で、中心からradiusPixels以内の正方形に入るか調べる。 */
  fun isFaceCenter(radiusPixels: Int) =
      HandGeometry.tangentDistance(position, face)?.let { it <= radiusPixels / 16.0 } ?: false

  /** クリックした面の端からinsetPixels以内に入るか調べる。 */
  fun isFaceEdge(insetPixels: Int) =
      HandGeometry.tangentDistance(position, face)?.let { it >= insetPixels / 16.0 } ?: false

  /** 指定面を基準に、端からinsetPixels以内に入るか調べる。 */
  fun isFaceEdge(face: BlockFace, insetPixels: Int) =
      HandGeometry.tangentDistance(position, face)?.let { it >= insetPixels / 16.0 } ?: false

  /** 上面の四辺からmarginPixels以上内側に入るか調べる。 */
  fun isInsideTop(marginPixels: Int) =
      face == BlockFace.UP &&
          position.x in (marginPixels / 16.0)..((16 - marginPixels) / 16.0) &&
          position.z in (marginPixels / 16.0)..((16 - marginPixels) / 16.0)

  /** 打点に最も近い面を選び、allowedに含まれなければnullを返す。 */
  fun selectedFace(allowed: Set<BlockFace>) =
      HandGeometry.selectPositionFace(position, face, allowed)

  /** クリック面の端が接する隣の面を返す。中央ならクリック面のまま。 */
  fun relativeFace() = HandGeometry.relativeFace(position, face)

  /** ブロックの正面を基準に、クリック面を前後・左右・上下へ分類する。 */
  fun part(facing: BlockFace) = HandGeometry.localPart(face, facing)

  /** 本棚の正面を、左上から右下へ0～5のスロット番号に変える。 */
  fun bookshelfSlot(facing: BlockFace): Int? {
    if (facing !in HandGeometry.horizontalFaces) return null
    // facing方向から見た左向きベクトル。どの方角でも列番号を左から数えるために使う。
    val left = facing.direction.clone().crossProduct(Vector(0, 1, 0))
    val horizontal = position.clone().subtract(HandGeometry.centerHit).dot(left)
    val column = ((0.5 - horizontal) * 3).toInt().coerceIn(0, 2)
    val row = if (position.y >= 0.5) 0 else 1
    return row * 3 + column
  }
}

/** BlockDataに依存しない、素手クリックの位置・向き計算。 */
internal object HandGeometry {
  val horizontalFaces = listOf(BlockFace.NORTH, BlockFace.EAST, BlockFace.SOUTH, BlockFace.WEST)

  /** 6基本面。 */
  internal val sixFaces =
      setOf(
          BlockFace.DOWN,
          BlockFace.UP,
          BlockFace.NORTH,
          BlockFace.EAST,
          BlockFace.SOUTH,
          BlockFace.WEST,
      )

  internal val centerHit = Vector(0.5, 0.5, 0.5)

  /** 上面または下面へのクリックか調べる。 */
  fun isVerticalFace(face: BlockFace?): Boolean = face == BlockFace.UP || face == BlockFace.DOWN

  /** 吊り下げ看板の側面上部2pxを、吊り下げ方式切替のクリック領域にする。 */
  fun isHangingSignUpperSideHit(hit: Vector, face: BlockFace?): Boolean =
      face in horizontalFaces && hit.y >= 14.0 / 16.0

  /** クリック面を選び、選択可能な面だけ接続を反転する。 */
  fun toggleMultipleFacing(data: MultipleFacing, face: BlockFace?) {
    selectClickedFace(face, data.allowedFaces)?.let { data.setFace(it, !data.hasFace(it)) }
  }

  /** 基本面以外の入力では許可された水平面を選ぶ。選択面がallowed外ならnull。 */
  internal fun selectClickedFace(face: BlockFace?, allowed: Set<BlockFace>): BlockFace? {
    val selected =
        when (face) {
          BlockFace.NORTH,
          BlockFace.EAST,
          BlockFace.SOUTH,
          BlockFace.WEST,
          BlockFace.UP,
          BlockFace.DOWN -> face
          else -> horizontalFaces.firstOrNull { allowed.contains(it) } ?: BlockFace.NORTH
        }
    return if (selected in allowed) selected else null
  }

  /** hit (ブロック内0..1) 中心相対の優勢軸面。正確な同点 (中央probe含む) はnull。 成長面・苔カーペット・本棚slotの位置対応で共有する。 */
  internal fun dominantFace(hit: Vector): BlockFace? {
    val distanceX = abs(hit.x - 0.5)
    val distanceY = abs(hit.y - 0.5)
    val distanceZ = abs(hit.z - 0.5)
    // 中心から一軸だけが最も離れている場合に選ぶ。同距離なら面を決めない。
    return when {
      distanceX > distanceY && distanceX > distanceZ ->
          if (hit.x > 0.5) BlockFace.EAST else BlockFace.WEST
      distanceY > distanceX && distanceY > distanceZ ->
          if (hit.y > 0.5) BlockFace.UP else BlockFace.DOWN
      distanceZ > distanceX && distanceZ > distanceY ->
          if (hit.z > 0.5) BlockFace.SOUTH else BlockFace.NORTH
      else -> null
    }
  }

  /** 位置優先の面選択。優勢軸面 → クリック面 → 許可された水平面の順で探す。 いずれもallowed外ならnull (呼び出し側は汎用へ譲るか未対応にする)。 */
  internal fun selectPositionFace(
      hit: Vector,
      face: BlockFace?,
      allowed: Set<BlockFace>,
  ): BlockFace? {
    dominantFace(hit)?.let { if (it in allowed) return it }
    return selectClickedFace(face, allowed)
  }

  /** クリックした面の中心からの相対位置を、面またはその隣接面へ変換する。 面の法線方向は候補にせず、クリック面上の2軸だけで判定する。 中央・同距離はクリック面自身に戻す。 */
  internal fun relativeFace(hit: Vector, face: BlockFace?): BlockFace? {
    val clicked = face?.takeIf { it in sixFaces } ?: return null
    val dx = hit.x - 0.5
    val dy = hit.y - 0.5
    val dz = hit.z - 0.5
    /** 二方向の中心からの距離を比べ、より端に近い側の面を返す。 */
    fun choose(
        first: Double,
        firstFace: BlockFace,
        second: Double,
        secondFace: BlockFace,
    ): BlockFace =
        when {
          // 見えている面の中心に向けたレイでも、浮動小数点の丸めにより
          // 正確に.5へ着地するとは限らない。
          first <= 0.08 && second <= 0.08 -> clicked
          first > second -> firstFace
          second > first -> secondFace
          else -> clicked
        }
    return when (clicked) {
      BlockFace.NORTH,
      BlockFace.SOUTH ->
          choose(
              abs(dx),
              if (dx > 0) BlockFace.EAST else BlockFace.WEST,
              abs(dy),
              if (dy > 0) BlockFace.UP else BlockFace.DOWN,
          )
      BlockFace.EAST,
      BlockFace.WEST ->
          choose(
              abs(dz),
              if (dz > 0) BlockFace.SOUTH else BlockFace.NORTH,
              abs(dy),
              if (dy > 0) BlockFace.UP else BlockFace.DOWN,
          )
      BlockFace.UP,
      BlockFace.DOWN ->
          choose(
              abs(dx),
              if (dx > 0) BlockFace.EAST else BlockFace.WEST,
              abs(dz),
              if (dz > 0) BlockFace.SOUTH else BlockFace.NORTH,
          )
      else -> face
    }
  }

  /** Crafter orientationの前後・上下・側面を、クリックされた世界面から求める。 */
  internal enum class CrafterPart {
    FRONT,
    BACK,
    SIDE,
    TOP,
    BOTTOM,
  }

  /** Crafterが向く正面を返す。 */
  internal fun crafterFacing(orientation: Orientation): BlockFace =
      BlockFace.valueOf(orientation.name.substringBefore('_'))

  /** Crafterの上面を返す。横倒し時は世界のUPとは限らない。 */
  internal fun crafterTop(orientation: Orientation): BlockFace =
      BlockFace.valueOf(orientation.name.substringAfter('_'))

  /** クリック面をCrafter自身の前後・左右・上下へ分類する。 */
  internal fun crafterPart(face: BlockFace?, orientation: Orientation): CrafterPart? {
    if (face == null) return null
    val facing = crafterFacing(orientation)
    val top = crafterTop(orientation)
    return when (face) {
      facing -> CrafterPart.FRONT
      facing.oppositeFace -> CrafterPart.BACK
      top -> CrafterPart.TOP
      top.oppositeFace -> CrafterPart.BOTTOM
      else -> CrafterPart.SIDE
    }
  }

  /** orientationの上面2頂点と、そこからつながる側面・正面の上側頂点をtriggeredの打点とする。 */
  internal fun isCrafterTriggerVertex(
      hit: Vector,
      face: BlockFace?,
      orientation: Orientation,
  ): Boolean {
    val clicked = face ?: return false
    val offset = hit.clone().subtract(centerHit)
    val facing = crafterFacing(orientation)
    val top = crafterTop(orientation)
    val side =
        sixFaces.firstOrNull {
          it != facing && it != facing.oppositeFace && it != top && it != top.oppositeFace
        } ?: return false
    val towardBack = offset.dot(facing.oppositeFace.direction)
    return when (clicked) {
      // 正面側は上端の2頂点だけ。上面のtrigger用2頂点と接続する範囲。
      facing.oppositeFace ->
          offset.dot(top.direction) >= 0.25 && abs(offset.dot(side.direction)) >= 0.25
      top -> towardBack >= 0.25 && abs(offset.dot(side.direction)) >= 0.25
      side,
      side.oppositeFace -> towardBack >= 0.25 && offset.dot(top.direction) >= 0.25
      else -> false
    }
  }

  /** Chorusは軸の反対側とは独立して、クリックした接続面だけをtoggleする。 */
  internal fun toggleChorusFace(
      data: MultipleFacing,
      face: BlockFace?,
      hit: Vector = centerHit,
  ) {
    // 内側クリックではhitBlockFaceが手前側になる場合があるため、打点の面を優先する。
    val selected = selectPositionFace(hit, face, data.allowedFaces) ?: return
    data.setFace(selected, !data.hasFace(selected))
  }

  /** SculkSensor系のphase toggle (ACTIVE→INACTIVE、それ以外→ACTIVE)。powerは触らない。 */
  internal fun toggleSensorPhase(data: SculkSensor) {
    data.sculkSensorPhase =
        if (data.sculkSensorPhase == SculkSensor.Phase.ACTIVE) SculkSensor.Phase.INACTIVE
        else SculkSensor.Phase.ACTIVE
  }

  internal val facingOrder =
      listOf(
          BlockFace.DOWN,
          BlockFace.UP,
          BlockFace.NORTH,
          BlockFace.EAST,
          BlockFace.SOUTH,
          BlockFace.WEST,
          BlockFace.NORTH_EAST,
          BlockFace.NORTH_WEST,
          BlockFace.SOUTH_EAST,
          BlockFace.SOUTH_WEST,
      )

  /** Directionalが許可する向きだけを、固定順で次へ進める。 */
  internal fun cycleFacing(data: Directional) {
    val faces =
        data.faces.toList().sortedBy { facingOrder.indexOf(it).takeIf { it >= 0 } ?: Int.MAX_VALUE }
    if (faces.isEmpty()) return
    data.facing = faces[(faces.indexOf(data.facing) + 1) % faces.size]
  }

  /** Orientableが許可する軸だけを、固定順で次へ進める。 */
  internal fun cycleAxis(data: Orientable) {
    val axes = data.axes.toList().sortedBy { it.ordinal }
    if (axes.isNotEmpty()) data.axis = axes[(axes.indexOf(data.axis) + 1) % axes.size]
  }

  /** 世界面を現在の向き基準のローカル部位へ正規化した結果。 */
  internal enum class LocalPart {
    FRONT,
    BACK,
    SIDE,
    TOP,
    BOTTOM,
  }

  /** 世界のクリック面を、ブロック正面から見た部位へ変換する。 */
  internal fun localPart(clicked: BlockFace?, facing: BlockFace): LocalPart? {
    if (clicked == null) return null
    if (clicked == facing) return LocalPart.FRONT
    if (clicked == facing.oppositeFace) return LocalPart.BACK
    if (clicked == BlockFace.UP) return LocalPart.TOP
    if (clicked == BlockFace.DOWN) return LocalPart.BOTTOM
    return LocalPart.SIDE
  }

  /** Thickness cycle順 (enum ordinal非依存の明示順。薄→厚)。未知値は先頭に倒す。 */
  internal val dripstoneThicknessOrder =
      listOf(
          Speleothem.Thickness.TIP_MERGE,
          Speleothem.Thickness.TIP,
          Speleothem.Thickness.FRUSTUM,
          Speleothem.Thickness.MIDDLE,
          Speleothem.Thickness.BASE,
      )
  private val compassFaces =
      listOf(
          BlockFace.NORTH,
          BlockFace.NORTH_NORTH_EAST,
          BlockFace.NORTH_EAST,
          BlockFace.EAST_NORTH_EAST,
          BlockFace.EAST,
          BlockFace.EAST_SOUTH_EAST,
          BlockFace.SOUTH_EAST,
          BlockFace.SOUTH_SOUTH_EAST,
          BlockFace.SOUTH,
          BlockFace.SOUTH_SOUTH_WEST,
          BlockFace.SOUTH_WEST,
          BlockFace.WEST_SOUTH_WEST,
          BlockFace.WEST,
          BlockFace.WEST_NORTH_WEST,
          BlockFace.NORTH_WEST,
          BlockFace.NORTH_NORTH_WEST,
      )

  /** Rotatableの16段階回転を一段進める。 */
  internal fun cycleRotation(data: Rotatable) {
    val current = compassFaces.indexOf(data.rotation)
    data.rotation = compassFaces[(current + 1).mod(compassFaces.size)]
  }

  /** ピストンヘッドの根元面中央をクリックしたか調べる。 */
  internal fun isPistonHeadRootHit(
      hit: Vector,
      face: BlockFace?,
      facing: BlockFace,
  ): Boolean {
    if (face != facing.oppositeFace) return false
    return tangentDistance(hit, facing)?.let { it <= 0.25 } ?: false
  }

  /** ピストンの先端面、または側面の先端寄りをクリックしたか調べる。 */
  internal fun isPistonExtendedHit(hit: Vector, face: BlockFace?, facing: BlockFace): Boolean {
    if (face == facing) return true
    if (face !in horizontalFaces || face == facing.oppositeFace) return false
    // 側面では、Y上部ではなくfacing方向のヘッド寄りだけを対象にする。
    // 中央から先端側の約1/4に絞り、中央・反対側はfacing回転へ回す。
    val offset = hit.clone().subtract(centerHit)
    return offset.dot(facing.direction) > 0.25
  }

  /** クリック面上で中心から最も離れた軸の距離を返す。基本面以外はnull。 */
  internal fun tangentDistance(hit: Vector, face: BlockFace?): Double? {
    val x = abs(hit.x - 0.5)
    val y = abs(hit.y - 0.5)
    val z = abs(hit.z - 0.5)
    return when (face) {
      BlockFace.NORTH,
      BlockFace.SOUTH -> maxOf(x, y)
      BlockFace.EAST,
      BlockFace.WEST -> maxOf(z, y)
      BlockFace.UP,
      BlockFace.DOWN -> maxOf(x, z)
      else -> null
    }
  }

  /** レッドストーンワイヤーのpower領域。中心から3px未満を中央とする。 */
  internal fun isRedstonePowerCenterHit(hit: Vector, face: BlockFace?): Boolean {
    if (face != BlockFace.UP) return false
    return maxOf(abs(hit.x - 0.5), abs(hit.z - 0.5)) < 3.0 / 16.0
  }
}
