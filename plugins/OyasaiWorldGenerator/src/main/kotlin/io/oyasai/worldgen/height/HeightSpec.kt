package io.oyasai.worldgen.height

data class HeightSpec(val minY: Int, val height: Int, val logicalHeight: Int) {
  val maxHeight: Int
    get() = minY + height
}
