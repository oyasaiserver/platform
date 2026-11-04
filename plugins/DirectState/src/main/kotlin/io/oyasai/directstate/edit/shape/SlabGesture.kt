package io.oyasai.directstate.edit.shape

/** ホールド棒の上下ドラッグを、Slabの上下・二段状態へ変換する。 */
internal object SlabGesture {
  /** Slabが占めるブロックの半分。 */
  enum class Type {
    BOTTOM,
    TOP,
    DOUBLE,
  }

  /** 最初に掴んだ面の向き。 */
  enum class Surface {
    UP,
    DOWN,
    SIDE,
  }

  /** ホールド棒でSlabを上下へドラッグし、1/4ブロック以上なら上下・二段状態を変える。 */
  fun edit(initial: Type, surface: Surface, vertical: Double): Type {
    if (kotlin.math.abs(vertical) < 0.25) return initial
    return when (surface) {
      Surface.SIDE -> if (vertical > 0) Type.TOP else Type.BOTTOM
      Surface.UP ->
          when (initial) {
            Type.BOTTOM if vertical > 0 -> Type.DOUBLE
            Type.DOUBLE if vertical < 0 -> Type.BOTTOM
            else -> initial
          }
      Surface.DOWN ->
          when (initial) {
            Type.TOP if vertical < 0 -> Type.DOUBLE
            Type.DOUBLE if vertical > 0 -> Type.TOP
            else -> initial
          }
    }
  }
}
