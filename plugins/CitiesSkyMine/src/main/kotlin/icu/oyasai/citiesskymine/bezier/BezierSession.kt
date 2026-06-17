package icu.oyasai.citiesskymine.bezier

import org.bukkit.Location
import org.bukkit.scheduler.BukkitTask

data class BezierSession(
    val controlPoints: MutableList<Location> = mutableListOf(),
    var previewTask: BukkitTask? = null,
    var segments: Int = 64,
)
