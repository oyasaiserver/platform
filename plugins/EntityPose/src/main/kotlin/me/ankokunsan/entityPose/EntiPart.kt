package me.ankokunsan.entityPose

enum class EntiPart(val display: String) {
  ALL("全体"),
  HEAD("頭"),
  SITTING("座る"),
  X("X座標"),
  Y("Y座標"),
  Z("Z座標"),
  HAN("反転");

  fun next(): EntiPart {
    val values = EntiPart.entries
    val nextIndex = (this.ordinal + 1) % values.size
    return values[nextIndex]
  }

  fun prev(): EntiPart =
      EntiPart.entries[(ordinal - 1 + EntiPart.entries.size) % EntiPart.entries.size]
}
