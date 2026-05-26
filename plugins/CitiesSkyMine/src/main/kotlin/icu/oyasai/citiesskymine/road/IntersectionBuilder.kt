package icu.oyasai.citiesskymine.road

import com.sk89q.worldedit.EditSession
import com.sk89q.worldedit.bukkit.BukkitAdapter
import com.sk89q.worldedit.math.BlockVector3
import kotlin.math.*
import org.bukkit.Location
import org.bukkit.World

object IntersectionBuilder {

  /**
   * 交差点を 1 つの EditSession で生成する。
   *
   * アルゴリズム:
   * 1. 各腕: センターを始点として RoadBuilder.buildInto でそのまま生成
   * 2. 中央ディスク（半径 = totalHW）: 道路素材で上書き → 白線の重複/途切れを解消
   * 3. コーナーフィレット（隣り合う腕の間ギャップ）: 歩道素材で丸め
   */
  fun buildInto(
      editSession: EditSession,
      world: World,
      center: Location,
      session: IntersectionSession,
      settings: RoadSettings,
  ) {
    val cx = center.blockX.toDouble()
    val cy = center.blockY.toDouble()
    val cz = center.blockZ.toDouble()

    val cHW = (settings.centerLineWidth + 1) / 2
    val totalHW = cHW + settings.laneWidth + settings.outerLineWidth + settings.sidewalkWidth

    val firstHeading = Math.toRadians(90.0 + session.rotationDeg)
    val armAngles = (0 until session.arms).map { i -> firstHeading + i * 2.0 * PI / session.arms }

    // ── Step 1: 各腕を RoadBuilder ロジックで生成 ──────────────────────
    for (theta in armAngles) {
      val endX = cx + session.armLength * cos(theta)
      val endZ = cz + session.armLength * sin(theta)
      // 始点はセンター。computePath は 2 点 → 直線パス
      val wp1 = Location(world, cx, cy, cz)
      val wp2 = Location(world, endX, cy, endZ)
      val path = RoadGeometry.computePath(listOf(wp1, wp2), settings)
      if (path.isNotEmpty()) RoadBuilder.buildInto(editSession, path, settings)
    }

    val roadBlock = BukkitAdapter.adapt(settings.roadMaterial.createBlockData())
    val sidewalkBlock = BukkitAdapter.adapt(settings.sidewalkMaterial.createBlockData())
    val icx = center.blockX
    val icy = center.blockY
    val icz = center.blockZ

    // ── Step 2: 中央ディスク（r < totalHW）を道路素材で上書き ──────────
    // 腕由来の白線・中央線が中心で交差・重複するのをまとめてクリーン化する
    for (dx in -totalHW..totalHW) {
      for (dz in -totalHW..totalHW) {
        if (sqrt((dx * dx + dz * dz).toDouble()) < totalHW) {
          editSession.setBlock(BlockVector3.at(icx + dx, icy, icz + dz), roadBlock)
        }
      }
    }

    // ── Step 3: コーナーフィレット（腕間ギャップを歩道素材で丸める） ──
    if (session.cornerRadius > 0) {
      val maxR = totalHW + session.cornerRadius
      for (dx in -maxR..maxR) {
        for (dz in -maxR..maxR) {
          val r = sqrt((dx * dx + dz * dz).toDouble())
          if (r >= totalHW && r < maxR) {
            val angle = atan2(dz.toDouble(), dx.toDouble())
            if (isInAdjacentArmGap(angle, armAngles)) {
              editSession.setBlock(BlockVector3.at(icx + dx, icy, icz + dz), sidewalkBlock)
            }
          }
        }
      }
    }
  }

  // ──────────────────────────────────────────────────
  // コーナー判定
  // ──────────────────────────────────────────────────

  /** blockAngle が隣り合う 2 本の腕の「小さなギャップ（< π）」内にあるか判定。 T 字路の開放側（ギャップ = π）などは埋めない。 */
  private fun isInAdjacentArmGap(blockAngle: Double, armAngles: List<Double>): Boolean {
    val sorted = armAngles.map { norm2PI(it) }.sorted()
    val n = sorted.size
    val norm = norm2PI(blockAngle)

    for (i in sorted.indices) {
      val a1 = sorted[i]
      val a2r = sorted[(i + 1) % n]
      val a2 = if (a2r <= a1) a2r + 2 * PI else a2r
      val adj = if (norm < a1 - 1e-9) norm + 2 * PI else norm

      if (adj > a1 && adj < a2) return (a2 - a1) < PI
    }
    return false
  }

  private fun norm2PI(a: Double): Double {
    var r = a % (2 * PI)
    if (r < 0) r += 2 * PI
    return r
  }
}
