package icu.oyasai.games.tank

import kotlin.math.abs
import kotlin.math.cos
import kotlin.math.max
import kotlin.math.min
import kotlin.math.sign
import kotlin.math.sin
import kotlin.math.sqrt

/** 装甲の厚さ（mm）。frontSlope は車体前面の傾き（垂直から、度）。 */
class Armor(
    val front: Double,
    val frontSlope: Double,
    val side: Double,
    val rear: Double,
    val top: Double,
)

/**
 * 実車の諸元。寸法は m、速度は km/h、弾速は m/s、貫通力は垂直の均質圧延鋼板（RHA）に対する mm。 出典は docs/Projects/oyasai-games/PROJECT.md
 * の戦車の節。「推定」と書いた値は資料で確かめられなかったもの。
 */
class TankSpec(
    val key: String,
    val label: String,
    val model: String,
    val length: Double,
    val width: Double,
    val height: Double,
    val gunLength: Double,
    val tonnes: Double,
    val horsepower: Double,
    val maxSpeedKmh: Double,
    /** 超信地旋回・信地旋回の速さ（度/秒）。推定。 */
    val hullTurnDegPerSec: Double,
    val turretTraverseDegPerSec: Double,
    val gunName: String,
    val caliberMm: Double,
    val muzzleVelocity: Double,
    val pen100m: Double,
    val pen1000m: Double,
    val reloadSeconds: Double,
    val ammo: Int,
    val gunElevation: Double,
    val gunDepression: Double,
    val mgName: String,
    val mgRoundsPerMinute: Double,
    val armor: Armor,
    /** 貫通したときに減る耐久（ゲーム上の値）。 */
    val damage: Double,
)

enum class ArmorFace(val label: String) {
  FRONT("正面"),
  SIDE("側面"),
  REAR("背面"),
  TOP("上面"),
}

/** 1 ブロック = 1 m、1 秒 = 20 tick で換算する。角度は Minecraft の yaw / pitch（yaw は右回りに増え、pitch は下向きが正）。 */
object TankRules {
  const val MAX_HP = 100.0
  const val SHELL_LIFE_TICKS = 200
  const val GRAVITY = 9.81 / 400.0
  const val MG_RANGE = 400.0
  const val MG_DAMAGE = 4.0
  /** これより浅い角度（面の法線から 70 度超）で当たると跳弾する。ゲーム上の値。 */
  const val RICOCHET_COS = 0.342

  val SPECS: List<TankSpec> =
      listOf(
          TankSpec(
              key = "light",
              label = "小型",
              model = "M24 チャーフィー",
              length = 5.03,
              width = 3.0,
              height = 2.77,
              gunLength = 2.92,
              tonnes = 18.37,
              horsepower = 220.0,
              maxSpeedKmh = 56.0,
              hullTurnDegPerSec = 30.0,
              turretTraverseDegPerSec = 24.0, // 推定（シャーマンと同じ油圧旋回として）
              gunName = "75mm M6",
              caliberMm = 75.0,
              muzzleVelocity = 618.0,
              pen100m = 88.0,
              pen1000m = 73.0,
              reloadSeconds = 3.0,
              ammo = 48,
              gunElevation = 15.0, // 推定
              gunDepression = 10.0, // 推定
              mgName = "M1919A4",
              mgRoundsPerMinute = 450.0,
              armor = Armor(front = 25.0, frontSlope = 60.0, side = 25.0, rear = 19.0, top = 13.0),
              damage = 34.0,
          ),
          TankSpec(
              key = "medium",
              label = "中型",
              model = "M4A3(75)W シャーマン",
              length = 5.84,
              width = 2.62,
              height = 2.74,
              gunLength = 3.0,
              tonnes = 30.3,
              horsepower = 450.0,
              maxSpeedKmh = 42.0,
              hullTurnDegPerSec = 20.0,
              turretTraverseDegPerSec = 24.0,
              gunName = "75mm M3",
              caliberMm = 75.0,
              muzzleVelocity = 618.0,
              pen100m = 88.0,
              pen1000m = 73.0,
              reloadSeconds = 3.0,
              ammo = 104,
              gunElevation = 25.0,
              gunDepression = 10.0,
              mgName = "M1919A4",
              mgRoundsPerMinute = 450.0,
              armor = Armor(front = 63.5, frontSlope = 47.0, side = 38.1, rear = 38.1, top = 19.0),
              damage = 34.0,
          ),
          TankSpec(
              key = "heavy",
              label = "大型",
              model = "ティーガーI",
              length = 6.316,
              width = 3.56,
              height = 3.0,
              gunLength = 4.93,
              tonnes = 57.0,
              horsepower = 690.0,
              maxSpeedKmh = 45.4,
              hullTurnDegPerSec = 15.0,
              turretTraverseDegPerSec = 19.0, // 機関 2000 rpm での高速旋回
              gunName = "8.8cm KwK 36",
              caliberMm = 88.0,
              muzzleVelocity = 773.0,
              // 資料は 30 度傾斜板に対する値（100m 132mm、1000m 99mm）。垂直板へは cos30 で割って換算。
              pen100m = 152.0,
              pen1000m = 114.0,
              reloadSeconds = 6.0,
              ammo = 92,
              gunElevation = 15.0, // 推定
              gunDepression = 8.0, // 推定
              mgName = "MG 34",
              mgRoundsPerMinute = 850.0,
              armor = Armor(front = 100.0, frontSlope = 0.0, side = 80.0, rear = 80.0, top = 25.0),
              damage = 50.0,
          ),
          TankSpec(
              key = "pz3",
              label = "中型（独）",
              model = "III号戦車 N型",
              length = 5.56,
              width = 2.9,
              height = 2.5,
              gunLength = 1.76,
              tonnes = 23.0,
              horsepower = 296.0, // 300 PS
              maxSpeedKmh = 40.0,
              hullTurnDegPerSec = 20.0,
              turretTraverseDegPerSec = 15.0, // 推定
              gunName = "7.5cm KwK 37 L/24",
              caliberMm = 75.0,
              muzzleVelocity = 385.0,
              // Pzgr. 39/1（垂直板への計算値）。成形炸薬弾 Gr.38 Hl/B なら距離によらず 87mm だが、ほかの車種に合わせ徹甲弾にする。
              pen100m = 54.0,
              pen1000m = 46.0,
              reloadSeconds = 4.5, // 毎分 12〜15 発
              ammo = 64, // 推定
              gunElevation = 20.0, // 推定
              gunDepression = 10.0, // 推定
              mgName = "MG 34",
              mgRoundsPerMinute = 850.0,
              // J〜M 型の車体（正面 50mm ＋ 20mm の増加装甲）。傾斜は推定。
              armor = Armor(front = 70.0, frontSlope = 9.0, side = 30.0, rear = 50.0, top = 16.0),
              damage = 34.0,
          ),
      )

  fun spec(key: String?): TankSpec? = SPECS.firstOrNull { it.key == (key ?: "medium") }

  fun maxSpeed(spec: TankSpec): Double = spec.maxSpeedKmh / 3.6 / 20.0

  /** 後退の最高速は前進の 1/4（推定）。 */
  fun maxReverse(spec: TankSpec): Double = maxSpeed(spec) / 4.0

  /** 加速度は出力重量比に比例させる（0.1 m/s² × hp/t、ゲーム上の近似）。 */
  fun accel(spec: TankSpec): Double = 0.1 * spec.horsepower / spec.tonnes / 400.0

  fun forwardX(yaw: Double): Double = -sin(Math.toRadians(yaw))

  fun forwardZ(yaw: Double): Double = cos(Math.toRadians(yaw))

  fun wrapYaw(yaw: Double): Double = ((yaw + 180.0) % 360.0 + 360.0) % 360.0 - 180.0

  fun nextSpeed(spec: TankSpec, speed: Double, forward: Boolean, backward: Boolean): Double {
    val accel = accel(spec)
    val brake = accel * 3.0
    val coast = accel * 0.5
    return when {
      forward && !backward ->
          if (speed < 0.0) min(0.0, speed + brake) else min(maxSpeed(spec), speed + accel)
      backward && !forward ->
          if (speed > 0.0) max(0.0, speed - brake) else max(-maxReverse(spec), speed - accel)
      abs(speed) <= coast -> 0.0
      else -> speed - sign(speed) * coast
    }
  }

  fun nextYaw(spec: TankSpec, yaw: Double, left: Boolean, right: Boolean): Double {
    val step = spec.hullTurnDegPerSec / 20.0
    return when {
      right && !left -> wrapYaw(yaw + step)
      left && !right -> wrapYaw(yaw - step)
      else -> yaw
    }
  }

  /** 砲塔を [target] へ、1 tick に旋回できる分だけ近い向きから回す。 */
  fun traverse(spec: TankSpec, current: Double, target: Double): Double {
    val diff = wrapYaw(target - current)
    val step = spec.turretTraverseDegPerSec / 20.0
    return wrapYaw(current + diff.coerceIn(-step, step))
  }

  fun clampGunPitch(spec: TankSpec, pitch: Double): Double =
      pitch.coerceIn(-spec.gunElevation, spec.gunDepression)

  /** 距離（m）での貫通力。100m と 1000m の値を直線でつなぎ、100m より近いと 100m の値。 */
  fun penetration(spec: TankSpec, distance: Double): Double {
    val d = max(distance, 100.0)
    return max(0.0, spec.pen100m + (spec.pen1000m - spec.pen100m) * (d - 100.0) / 900.0)
  }

  /** 面の法線（車体の向き基準。前が +z）。前面は frontSlope だけ上へ傾ける。向きの符号は [impactCos] で消える。 */
  fun normal(armor: Armor, face: ArmorFace): DoubleArray {
    val slope = Math.toRadians(armor.frontSlope)
    return when (face) {
      ArmorFace.FRONT -> doubleArrayOf(0.0, sin(slope), cos(slope))
      ArmorFace.REAR -> doubleArrayOf(0.0, 0.0, -1.0)
      ArmorFace.SIDE -> doubleArrayOf(1.0, 0.0, 0.0)
      ArmorFace.TOP -> doubleArrayOf(0.0, 1.0, 0.0)
    }
  }

  fun thickness(armor: Armor, face: ArmorFace): Double =
      when (face) {
        ArmorFace.FRONT -> armor.front
        ArmorFace.SIDE -> armor.side
        ArmorFace.REAR -> armor.rear
        ArmorFace.TOP -> armor.top
      }

  /** 砲弾の向き（車体の向き基準）と面の法線のなす角の cos。 */
  fun impactCos(dx: Double, dy: Double, dz: Double, normal: DoubleArray): Double {
    val length = sqrt(dx * dx + dy * dy + dz * dz)
    if (length < 1.0e-9) return 1.0
    return abs(dx * normal[0] + dy * normal[1] + dz * normal[2]) / length
  }
}
