package io.oyasai.toolbox

import org.bukkit.util.Vector

enum class ControlKey(val vec: Vector) {
  WA(Vector(1.0, 0.0, 1.0)),
  WD(Vector(-1.0, 0.0, 1.0)),
  W(Vector(0.0, 0.0, 1.0)),
  SA(Vector(1.0, 0.0, -1.0)),
  SD(Vector(-1.0, 0.0, -1.0)),
  S(Vector(0.0, 0.0, -1.0)),
  A(Vector(1.0, 0.0, 0.0)),
  D(Vector(-1.0, 0.0, 0.0)),
  NONE(Vector(0.0, 0.0, 0.0))
}
