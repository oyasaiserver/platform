package icu.oyasai.citiesskymine.road

import kotlin.math.*
import org.bukkit.Location

/** 道路中心線上のサンプル点。 heading: +X軸(East)から時計回りのラジアン（+Z = South 方向で増加） */
data class PathPoint(val x: Double, val y: Double, val z: Double, val heading: Double)

object RoadGeometry {

  private const val STEP = 0.4 // サンプリング間隔（ブロック）

  /** 通過点列からカーブ付き道路中心線のサンプル点列を計算する。 各中間点に「緩和曲線（クロソイド）→円弧→緩和曲線」を自動挿入する。 */
  fun computePath(waypoints: List<Location>, settings: RoadSettings): List<PathPoint> {
    if (waypoints.size < 2) return emptyList()
    if (waypoints.size == 2) {
      val a = waypoints[0]
      val b = waypoints[1]
      return sampleLine(a.x, a.y, a.z, b.x, b.y, b.z)
    }

    val result = mutableListOf<PathPoint>()
    var prevX = waypoints[0].x
    var prevY = waypoints[0].y
    var prevZ = waypoints[0].z

    for (i in 1 until waypoints.size - 1) {
      val A = waypoints[i - 1]
      val B = waypoints[i]
      val C = waypoints[i + 1]

      val hIn = atan2(B.z - A.z, B.x - A.x)
      val hOut = atan2(C.z - B.z, C.x - B.x)
      val alpha = normalizeAngle(hOut - hIn) // 偏向角（正=右折）

      // 偏向角が小さければ直線通過
      if (abs(alpha) < Math.toRadians(1.0)) continue

      val R = settings.radius
      val Ls = settings.transitionLength.coerceAtMost(R * abs(alpha) * 0.49) // フィット確認
      val thetaS = Ls / (2.0 * R) // 緩和曲線が担う角度
      val alphaArc = abs(alpha) - 2.0 * thetaS // 円弧が担う角度（負なら円弧なし）

      // B点から曲線開始点までの距離（タンジェント長）
      val p = Ls * Ls / (24.0 * R) // タンジェントシフト
      val T =
          if (alphaArc >= 0) {
            (R + p) * tan(abs(alpha) / 2.0) + Ls / 2.0
          } else {
            R * tan(abs(alpha) / 2.0)
          }

      val lenAB = hypot(B.x - A.x, B.z - A.z)
      val lenBC = hypot(C.x - B.x, C.z - B.z)
      val tIn = min(T, lenAB * 0.45)
      val tOut = min(T, lenBC * 0.45)

      // 曲線開始点 (B から A 方向へ tIn)
      val dInX = (A.x - B.x) / lenAB
      val dInZ = (A.z - B.z) / lenAB
      val csX = B.x + dInX * tIn
      val csZ = B.z + dInZ * tIn
      val csY = interpolateY(waypoints, csX, csZ)

      // prevXYZ → 曲線開始点への直線区間
      val prevStraightY = interpolateY(waypoints, prevX, prevZ)
      result.addAll(sampleLine(prevX, prevStraightY, prevZ, csX, csY, csZ))

      // 曲線区間（緩和曲線 + 円弧 + 緩和曲線）
      val curvePoints =
          sampleCurveElement(
              startX = csX,
              startY = csY,
              startZ = csZ,
              startHeading = hIn,
              alpha = alpha,
              R = R,
              Ls = Ls,
              waypoints = waypoints,
          )
      result.addAll(curvePoints)

      if (curvePoints.isNotEmpty()) {
        val last = curvePoints.last()
        prevX = last.x
        prevY = last.y
        prevZ = last.z
      } else {
        prevX = csX
        prevY = csY
        prevZ = csZ
      }
    }

    // 最後の直線区間
    val last = waypoints.last()
    val lastY = interpolateY(waypoints, last.x, last.z)
    result.addAll(sampleLine(prevX, prevY, prevZ, last.x, lastY, last.z))

    return result
  }

  // ────────────────────────────────────────────────
  // 直線サンプリング
  // ────────────────────────────────────────────────
  private fun sampleLine(
      x1: Double,
      y1: Double,
      z1: Double,
      x2: Double,
      y2: Double,
      z2: Double,
  ): List<PathPoint> {
    val dx = x2 - x1
    val dz = z2 - z1
    val len = hypot(dx, dz)
    if (len < 0.001) return emptyList()
    val heading = atan2(dz, dx)
    val count = ceil(len / STEP).toInt()
    return (0..count).map { i ->
      val t = (i * STEP / len).coerceIn(0.0, 1.0)
      PathPoint(x1 + dx * t, y1 + (y2 - y1) * t, z1 + dz * t, heading)
    }
  }

  // ────────────────────────────────────────────────
  // 曲線サンプリング（数値積分）
  // クロソイド入り → 円弧 → クロソイド出し
  // ────────────────────────────────────────────────
  private fun sampleCurveElement(
      startX: Double,
      startY: Double,
      startZ: Double,
      startHeading: Double,
      alpha: Double,
      R: Double,
      Ls: Double,
      waypoints: List<Location>,
  ): List<PathPoint> {
    val sign = if (alpha >= 0) 1.0 else -1.0
    val thetaS = Ls / (2.0 * R)
    val alphaArc = abs(alpha) - 2.0 * thetaS

    val points = mutableListOf<PathPoint>()
    var x = startX
    var z = startZ
    var h = startHeading

    fun addPoint() {
      val y = interpolateY(waypoints, x, z)
      points.add(PathPoint(x, y, z, h))
    }

    // ─── 入り緩和曲線（曲率 0 → 1/R）───
    var l = 0.0
    while (l < Ls) {
      val kappa = l / (R * Ls)
      x += cos(h) * STEP
      z += sin(h) * STEP
      h += sign * kappa * STEP
      l += STEP
      addPoint()
    }

    // ─── 円弧（曲率 1/R）───
    if (alphaArc > 0) {
      val arcLen = R * alphaArc
      l = 0.0
      while (l < arcLen) {
        x += cos(h) * STEP
        z += sin(h) * STEP
        h += sign * (1.0 / R) * STEP
        l += STEP
        addPoint()
      }
    }

    // ─── 出し緩和曲線（曲率 1/R → 0）───
    l = 0.0
    while (l < Ls) {
      val remaining = Ls - l
      val kappa = remaining / (R * Ls)
      x += cos(h) * STEP
      z += sin(h) * STEP
      h += sign * kappa * STEP
      l += STEP
      addPoint()
    }

    return points
  }

  // ────────────────────────────────────────────────
  // Y補間：最近傍ウェイポイント区間への射影で Y を線形補間
  // ────────────────────────────────────────────────
  private fun interpolateY(waypoints: List<Location>, px: Double, pz: Double): Double {
    var bestDist = Double.MAX_VALUE
    var bestY = waypoints[0].y
    for (i in 0 until waypoints.size - 1) {
      val w0 = waypoints[i]
      val w1 = waypoints[i + 1]
      val t = projectOnSegment(px, pz, w0.x, w0.z, w1.x, w1.z)
      val nx = w0.x + (w1.x - w0.x) * t
      val nz = w0.z + (w1.z - w0.z) * t
      val dist = hypot(px - nx, pz - nz)
      if (dist < bestDist) {
        bestDist = dist
        bestY = w0.y + (w1.y - w0.y) * t
      }
    }
    return bestY
  }

  private fun projectOnSegment(
      px: Double,
      pz: Double,
      ax: Double,
      az: Double,
      bx: Double,
      bz: Double,
  ): Double {
    val dx = bx - ax
    val dz = bz - az
    val lenSq = dx * dx + dz * dz
    if (lenSq < 0.0001) return 0.0
    return (((px - ax) * dx + (pz - az) * dz) / lenSq).coerceIn(0.0, 1.0)
  }

  private fun normalizeAngle(a: Double): Double {
    var r = a % (2 * PI)
    if (r > PI) r -= 2 * PI
    if (r < -PI) r += 2 * PI
    return r
  }
}
