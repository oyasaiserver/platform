package io.oyasai.anybuilder.common

import java.util.Locale
import org.bukkit.util.Vector

object BuilderInfoCommon {
  fun formatNumber(value: Double): String {
    return String.format(Locale.ROOT, "%.3f", value).trimEnd('0').trimEnd('.')
  }

  fun formatVector(vec: Vector): String {
    return "x=${formatNumber(vec.x)}, y=${formatNumber(vec.y)}, z=${formatNumber(vec.z)}"
  }
}
