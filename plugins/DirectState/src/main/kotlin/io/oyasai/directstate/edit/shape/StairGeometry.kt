package io.oyasai.directstate.edit.shape

/** 階段を四隅の占有bitで表す。下位から北西、北東、南東、南西。 */
internal object StairGeometry {
  /** facingとshapeの番号、および四隅の占有bit。 */
  data class State(val facing: Int, val shape: Int, val mask: Int)

  // 形状: straight、inner-left、inner-right、outer-left、outer-right。
  val states =
      (0..3).flatMap { f ->
        val l = f
        val r = (f + 1) % 4
        val front = (1 shl l) or (1 shl r)
        listOf(
            State(f, 0, front),
            State(f, 1, front or (1 shl ((l + 3) % 4))),
            State(f, 2, front or (1 shl ((r + 1) % 4))),
            State(f, 3, 1 shl l),
            State(f, 4, 1 shl r),
        )
      }

  /**
   * ホールド棒で階段を横へドラッグしたときに使う。 外向きのドラッグは階段の角を1～2か所足し、内向きなら取り除く。
   * 例えばnorth向きのstraightを南西へ1段階広げるとinner-left、南東ならinner-rightになる。
   */
  fun resize(initial: State, steps: Int, x: Double, z: Double): State {
    var current = initial
    // 階段として表現できるのは四隅のうち1～3か所なので、一度のドラッグは最大2段階。
    repeat(kotlin.math.abs(steps).coerceAtMost(2)) {
      val growing = steps > 0
      // 1bitだけ多い/少ない形に絞り、既存部分を動かさずクリック側の角だけを変える。
      val candidates =
          states.filter {
            Integer.bitCount(it.mask) ==
                Integer.bitCount(current.mask) + (if (growing) 1 else -1) &&
                (if (growing) it.mask and current.mask == current.mask
                else it.mask and current.mask == it.mask)
          }
      current =
          candidates.minByOrNull {
            // xorで変化した唯一のbitを取り出し、その番号が示す四隅の中心を求める。
            val changedPart = Integer.numberOfTrailingZeros(it.mask xor current.mask)
            val center = ClickGeometry.partCenter(changedPart)
            val dx = center.x - x
            val dz = center.z - z
            // 打点に最も近い角を変える。距離が同じなら0.001の差で元の向きを残す。
            dx * dx + dz * dz + if (it.facing == initial.facing) 0.0 else 0.001
          } ?: current
    }
    return current
  }
}
