package io.oyasai.directstate.edit.shape

/** Slab・Stairs・Full Blockを8分割した占有bitで表す。 0～3は下半分、4～7は上半分で、各段は北西、北東、南東、南西の順。 */
internal object SolidGeometry {
  /** MinecraftのSlab・Stairs・Full Blockとして実際に作れる形だけを列挙する。 */
  val masks =
      (listOf(0x0f, 0xf0, 0xff) +
              StairGeometry.states.flatMap { listOf(0x0f or (it.mask shl 4), 0xf0 or it.mask) })
          .distinct()

  /** シンプル棒の左クリック（削除）・右クリック（追加）で使う。 変化が最少かつ打点に近い形を選び、ShapeEditorがSlab・Stairs・Full Blockへ変換する。 */
  fun edit(
      initial: Int,
      add: Boolean,
      x: Double,
      y: Double,
      z: Double,
      stairs: Boolean = true,
  ): Int {
    // legalは変換先としてMinecraftのBlockDataで表現できる形だけを持つ。
    val legal = if (stairs) masks else listOf(0x0f, 0xf0, 0xff)
    // candidatesは現在形状を含み、追加または削除の向きにだけ変化する形。
    val candidates =
        legal.filter {
          it != initial && (if (add) it and initial == initial else it and initial == it)
        }
    return candidates.minWithOrNull(
        compareBy<Int> {
              // xorで異なるbit数、つまり追加・削除する1/4部分が最少の形を優先する。
              Integer.bitCount(it xor initial)
            }
            .thenBy { mask ->
              // 同数なら、変化する各部分の中心と打点との平方距離の合計で選ぶ。
              // 平方根は大小関係を変えないため計算しない。
              (0..7)
                  .filter { (mask xor initial) and (1 shl it) != 0 }
                  .sumOf { part ->
                    val center = ClickGeometry.partCenter(part)
                    val dx = center.x - x
                    val dy = center.y - y
                    val dz = center.z - z
                    dx * dx + dy * dy + dz * dz
                  }
            }
    ) ?: initial
  }

  /** 素手デバッグ棒の右クリックで、指した部分を反転する。 結果はMinecraftで表現できるSlab・Stairs・Full Blockのいずれかになる。 */
  fun toggle(initial: Int, x: Double, z: Double, upper: Boolean, stairs: Boolean = true): Int {
    val east = x >= 0.5
    val south = z >= 0.5
    val quarter =
        when {
          !east && !south -> 0
          east && !south -> 1
          east && south -> 2
          else -> 3
        }
    val selectedPart = quarter + if (upper) 4 else 0
    val occupied = initial and (1 shl selectedPart) != 0
    val bit = 1 shl selectedPart
    // legalは変換先としてMinecraftのBlockDataで表現できる形だけを持つ。
    val legal = if (stairs) masks else listOf(0x0f, 0xf0, 0xff)
    // クリックした部分自体が変化することを要求する。単なる最近傍形状検索では、
    // 同距離の別の角を選ぶことがあり、北向きの組み合わせが非対称になっていた。
    val candidates =
        legal.filter { candidate ->
          candidate != initial &&
              (candidate and bit != 0) != occupied &&
              (if (occupied) candidate and initial == candidate
              else candidate and initial == initial)
        }
    return candidates.minWithOrNull(
        compareBy<Int> { Integer.bitCount(it xor initial) }
            .thenBy { candidate ->
              // クリック箇所以外にも変化が必要なら、その変化も打点に近い形を選ぶ。
              (0..7)
                  .filter { (candidate xor initial) and (1 shl it) != 0 && it != selectedPart }
                  .sumOf { changed ->
                    val center = ClickGeometry.partCenter(changed)
                    val dx = center.x - x
                    val dz = center.z - z
                    dx * dx + dz * dz
                  }
            }
    ) ?: initial
  }
}
