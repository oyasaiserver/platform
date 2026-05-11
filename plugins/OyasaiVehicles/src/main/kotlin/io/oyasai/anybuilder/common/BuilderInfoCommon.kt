package io.oyasaiserver.anybuilder.common

import org.bukkit.util.Vector
import java.util.Locale

object BuilderInfoCommon {
    fun formatNumber(value: Double): String {
        return String.format(Locale.ROOT, "%.3f", value)
            .trimEnd('0')
            .trimEnd('.')
    }

    fun formatVector(vec: Vector): String {
        return "x=${formatNumber(vec.x)}, y=${formatNumber(vec.y)}, z=${formatNumber(vec.z)}"
    }
}
