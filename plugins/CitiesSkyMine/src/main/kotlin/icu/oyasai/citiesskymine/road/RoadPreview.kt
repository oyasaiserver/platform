package icu.oyasai.citiesskymine.road

import kotlin.math.cos
import kotlin.math.sin
import org.bukkit.Color
import org.bukkit.Particle
import org.bukkit.entity.Player

object RoadPreview {

  /**
   * 現在フレームのパーティクルを一度だけ描画する（スケジューリングなし）。 Main の常時タスクから毎 10 tick 呼び出される。
   *
   * 白 = 道路中心線 灰 = 車道端（外縁白線の外側） 水色 = 歩道外縁
   */
  fun showOnce(player: Player, path: List<PathPoint>, settings: RoadSettings) {
    val world = player.world
    val cHW = (settings.centerLineWidth + 1) / 2
    val roadEdge = (cHW + settings.laneWidth).toDouble()
    val sidewalkEdge =
        (cHW + settings.laneWidth + settings.outerLineWidth + settings.sidewalkWidth).toDouble()

    // 3点に1点だけ描画してパーティクル数を抑える
    for ((i, pt) in path.withIndex()) {
      if (i % 3 != 0) continue
      val cx = pt.x
      val cy = pt.y + 0.1
      val cz = pt.z
      val perpX = -sin(pt.heading)
      val perpZ = cos(pt.heading)

      // 中心線（白）
      spawnDust(player, cx, cy, cz, Color.WHITE)

      // 車道端（灰）
      spawnDust(player, cx + roadEdge * perpX, cy, cz + roadEdge * perpZ, Color.SILVER)
      spawnDust(player, cx - roadEdge * perpX, cy, cz - roadEdge * perpZ, Color.SILVER)

      // 歩道外縁（水色）
      spawnDust(player, cx + sidewalkEdge * perpX, cy, cz + sidewalkEdge * perpZ, Color.AQUA)
      spawnDust(player, cx - sidewalkEdge * perpX, cy, cz - sidewalkEdge * perpZ, Color.AQUA)
    }
  }

  private fun spawnDust(player: Player, x: Double, y: Double, z: Double, color: Color) {
    player.spawnParticle(
        Particle.DUST, x, y, z, 1, 0.0, 0.0, 0.0, 0.0, Particle.DustOptions(color, 1.0f))
  }
}
