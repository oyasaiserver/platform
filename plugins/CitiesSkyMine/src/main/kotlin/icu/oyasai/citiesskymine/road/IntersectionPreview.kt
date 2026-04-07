package icu.oyasai.citiesskymine.road

import kotlin.math.PI
import kotlin.math.cos
import kotlin.math.max
import kotlin.math.sin
import org.bukkit.Color
import org.bukkit.Location
import org.bukkit.Particle
import org.bukkit.entity.Player

object IntersectionPreview {

  /**
   * 交差点のプレビューパーティクルを 1 フレーム描画する。
   *
   * 白 = 中心線（道路軸・センターサークル） 灰 = 車道外縁 水色 = 歩道外縁
   */
  fun showOnce(
      player: Player,
      center: Location,
      session: IntersectionSession,
      settings: RoadSettings
  ) {
    val cHW = (settings.centerLineWidth + 1) / 2
    val lW = settings.laneWidth
    val olW = settings.outerLineWidth
    val swW = settings.sidewalkWidth
    val totalHW = (cHW + lW + olW + swW).toDouble()
    val roadEdge = (cHW + lW).toDouble()

    val firstHeading = Math.toRadians(90.0 + session.rotationDeg)
    val armAngles = (0 until session.arms).map { i -> firstHeading + i * 2.0 * PI / session.arms }
    val y = center.y + 0.1

    // ── 中央サークル（白・灰・水色） ──
    val steps = max(24, (2 * PI * totalHW).toInt())
    for (i in 0 until steps) {
      val angle = i * 2.0 * PI / steps
      val cosA = cos(angle)
      val sinA = sin(angle)
      // 中心線円
      dust(player, center.x + cHW * cosA, y, center.z + cHW * sinA, Color.WHITE)
      // 車道外縁円
      dust(player, center.x + roadEdge * cosA, y, center.z + roadEdge * sinA, Color.SILVER)
      // 歩道外縁円
      dust(player, center.x + totalHW * cosA, y, center.z + totalHW * sinA, Color.AQUA)
    }

    // ── 各腕の輪郭線 ──
    for (theta in armAngles) {
      val cosT = cos(theta)
      val sinT = sin(theta)
      val perpX = -sinT
      val perpZ = cosT

      // 腕の先端（終端断面）
      val tipX = center.x + session.armLength * cosT
      val tipZ = center.z + session.armLength * sinT
      // 先端に横断パーティクル（右→左）
      val tipSteps = (totalHW * 2).toInt() + 1
      for (s in 0..tipSteps) {
        val off = -totalHW + s
        dust(player, tipX + off * perpX, y, tipZ + off * perpZ, Color.SILVER)
      }

      // 腕の側面ライン（2ブロックおき）
      var l = totalHW
      while (l < session.armLength) {
        val cx = center.x + l * cosT
        val cz = center.z + l * sinT
        // 中心軸（白）
        dust(player, cx, y, cz, Color.WHITE)
        // 車道外縁（灰）
        dust(player, cx + roadEdge * perpX, y, cz + roadEdge * perpZ, Color.SILVER)
        dust(player, cx - roadEdge * perpX, y, cz - roadEdge * perpZ, Color.SILVER)
        // 歩道外縁（水色）
        dust(player, cx + totalHW * perpX, y, cz + totalHW * perpZ, Color.AQUA)
        dust(player, cx - totalHW * perpX, y, cz - totalHW * perpZ, Color.AQUA)
        l += 2.0
      }
    }
  }

  private fun dust(player: Player, x: Double, y: Double, z: Double, color: Color) {
    player.spawnParticle(
        Particle.DUST, x, y, z, 1, 0.0, 0.0, 0.0, 0.0, Particle.DustOptions(color, 1.0f))
  }
}
