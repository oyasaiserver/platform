package io.oyasai.directstate.update

import org.bukkit.block.BlockFace
import org.bukkit.util.Vector

/** 強制配置で使う、クリック面・設置面・向きの純粋な計算。 */
internal object PlacementGeometry {
  /** ブロックの6基本面。 */
  enum class Face {
    NORTH,
    EAST,
    SOUTH,
    WEST,
    UP,
    DOWN,
  }

  /** 壁付け・床置き・天井付けの区別。 */
  enum class Mount {
    WALL,
    FLOOR,
    CEILING,
  }

  /** 設置方法と、配置後に正面となる向き。 */
  data class Attachment(val mount: Mount, val facing: Face)

  /** 強制配置でDirectionalの設置面を決める。クリック面の裏側を最優先する。 */
  fun surface(clickedFace: Face, allowed: Set<Face>, playerFacing: Face): Face? {
    val support =
        when (clickedFace) {
          Face.NORTH -> Face.SOUTH
          Face.SOUTH -> Face.NORTH
          Face.EAST -> Face.WEST
          Face.WEST -> Face.EAST
          Face.UP -> Face.DOWN
          Face.DOWN -> Face.UP
        }
    return support.takeIf { it in allowed }
        ?: playerFacing.takeIf { it in allowed }
        ?: allowed.firstOrNull()
  }

  /** 強制配置で看板等の床・天井・壁への付き方と正面方向を決める。 */
  fun attachment(clickedFace: Face, playerFacing: Face): Attachment =
      when (clickedFace) {
        Face.UP -> Attachment(Mount.FLOOR, playerFacing)
        Face.DOWN -> Attachment(Mount.CEILING, playerFacing)
        else -> Attachment(Mount.WALL, clickedFace)
      }

  /**
   * 看板の正面を、プレイヤーの視線の水平成分に最も近い8方位へ向ける。 強制配置で天井から吊るすHanging Signのrotation設定に使う。 Bukkitの [BlockFace]
   * は斜め方位も表現できるが、通常のプレイヤー向きは 4方位へ丸められるため、吊り下げ看板の回転にはこちらを使う。
   */
  fun hangingSignRotation(lookDirection: Vector, playerFacing: BlockFace): BlockFace {
    val x = lookDirection.x
    val z = lookDirection.z
    // 水平成分が実質0なら角度を決められないため、通常の4方位を背面向きに使う。
    if (x * x + z * z < 1.0e-12) return playerFacing.oppositeFace
    // atan2を北=0の角度にし、45度で割る。+0.5して切り捨てることで最近傍の8方位へ丸める。
    val octant = kotlin.math.floor(kotlin.math.atan2(x, -z) / (Math.PI / 4.0) + 0.5).toInt().mod(8)
    return listOf(
            BlockFace.NORTH,
            BlockFace.NORTH_EAST,
            BlockFace.EAST,
            BlockFace.SOUTH_EAST,
            BlockFace.SOUTH,
            BlockFace.SOUTH_WEST,
            BlockFace.WEST,
            BlockFace.NORTH_WEST,
        )[octant]
        .oppositeFace
  }

  /** 強制配置で、クリック位置へ置くか隣へ置くかを決める。 */
  fun replaceClicked(replaceable: Boolean, sameMaterial: Boolean): Boolean =
      replaceable && !sameMaterial
}
