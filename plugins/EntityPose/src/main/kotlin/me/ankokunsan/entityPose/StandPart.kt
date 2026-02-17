package me.ankokunsan.entityPose

enum class StandPart(val display: String) {
  KAKUDO("角度変更"),
  HEAD_X("頭_X軸側"),
  HEAD_Y("頭_Y軸側"),
  HEAD_Z("頭_Z軸側"),
  BODY_X("上半身_X軸側"),
  BODY_Y("上半身_Y軸側"),
  BODY_Z("上半身_Z軸側"),
  LEFT_ARM_X("左腕_X軸側"),
  LEFT_ARM_Y("左腕_Y軸側"),
  LEFT_ARM_Z("左腕_Z軸側"),
  RIGHT_ARM_X("右腕_X軸側"),
  RIGHT_ARM_Y("右腕_Y軸側"),
  RIGHT_ARM_Z("右腕_Z軸側"),
  LEFT_LEG_X("左足_X軸側"),
  LEFT_LEG_Y("左足_Y軸側"),
  LEFT_LEG_Z("左足_Z軸側"),
  RIGHT_LEG_X("右足_X軸側"),
  RIGHT_LEG_Y("右足_Y軸側"),
  RIGHT_LEG_Z("右足_Z軸側"),
  ALL("全体"),
  ZAHYO("座標の動かす量を変更"),
  X("X座標"),
  Y("Y座標"),
  Z("Z座標");

  fun next(): StandPart {
    val values = StandPart.entries
    val nextIndex = (this.ordinal + 1) % values.size
    return values[nextIndex]
  }

  fun prev(): StandPart =
      StandPart.entries[(ordinal - 1 + StandPart.entries.size) % StandPart.entries.size]
}
