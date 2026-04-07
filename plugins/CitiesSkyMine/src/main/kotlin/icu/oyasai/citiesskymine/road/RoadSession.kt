package icu.oyasai.citiesskymine.road

import com.sk89q.worldedit.EditSession
import org.bukkit.Location
import org.bukkit.scheduler.BukkitTask

class RoadSession {
  val waypoints = mutableListOf<Location>()
  val settings = RoadSettings()
  var lastEditSession: EditSession? = null
  var lastSmoothSession: EditSession? = null

  // プレビュー常時表示用
  var previewTask: BukkitTask? = null
  var cachedPath: List<PathPoint> = emptyList()
  var previewDirty: Boolean = true
}
