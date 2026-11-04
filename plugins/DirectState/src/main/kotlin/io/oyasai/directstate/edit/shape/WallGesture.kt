package io.oyasai.directstate.edit.shape

/** ホールド棒の移動量を、壁の腕の高さと中央支柱の状態へ変換する。 */
internal object WallGesture {
  /** ドラッグ後の腕の高さと中央支柱の有無。 */
  data class Result(val height: Int, val post: Boolean)

  /**
   * ホールド棒で壁の中央支柱または腕をドラッグしたときに使う。 高さ: none=0、low=1、tall=2。移動量はブロック単位で、±0.25に達すると確定する。
   * 支柱は上下でON/OFF。腕は外へ引くとlow、上でtall、下でlow、内へ押すとnoneになる。 内向き判定を先に行うため、斜め内側へ動かしても必ずnoneになる。
   */
  fun edit(
      initialHeight: Int,
      initialPost: Boolean,
      targetPost: Boolean,
      horizontal: Double,
      vertical: Double,
  ): Result {
    // 支柱を掴んだまま1/4ブロック上下へ動かすと、腕に触れず支柱だけをON/OFFにする。
    if (targetPost)
        return Result(
            initialHeight,
            when {
              vertical >= 0.25 -> true
              vertical <= -0.25 -> false
              else -> initialPost
            },
        )
    // 条件は優先順。内向きに引いた場合は、同時に上下へ動いても腕の削除を優先する。
    val height =
        when {
          horizontal <= -0.25 -> 0 // 内向き: Wall.Height.NONE
          vertical >= 0.25 -> 2 // 上向き: Wall.Height.TALL
          vertical <= -0.25 -> 1 // 下向き: Wall.Height.LOW
          horizontal >= 0.25 -> maxOf(initialHeight, 1) // 外向き: NONEだけLOWへ変える
          else -> initialHeight // 閾値未満: 開始時の状態を保つ
        }
    return Result(height, initialPost)
  }
}
