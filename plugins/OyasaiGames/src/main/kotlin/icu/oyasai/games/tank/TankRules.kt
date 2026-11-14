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
    /** 履帯 1 本の幅（m）。被弾・衝突の箱に使う。 */
    val trackWidth: Double,
    /** 砲塔の外形の幅・長さ（m）。被弾の箱に使う。 */
    val turretWidth: Double,
    val turretLength: Double,
    val turretArmor: Armor,
    /** 貫通したときに減る耐久（ゲーム上の値）。 */
    val damage: Double,
)

/**
 * 被弾・衝突の箱。中心 [x]・[y]・[z] は、車体の箱と履帯の箱は車体の原点（地面の中心、前が +z）から、砲塔の箱（[turret]）は砲塔の回転中心から測る（m）。
 * 砲塔の箱は砲塔の向きに、それ以外は車体の向きに回す。
 */
class HitBox(
    val label: String,
    val x: Double,
    val y: Double,
    val z: Double,
    val width: Double,
    val height: Double,
    val length: Double,
    val armor: Armor,
    val turret: Boolean = false,
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
  /** 弧が目に見えるよう、実物の 10 倍にしたゲーム上の値（1 tick あたりの速度の変化）。 */
  const val GRAVITY = 10 * 9.81 / 400.0
  const val MG_RANGE = 400.0
  /** 最高速のときの転輪の毎分回転数の既定。パンターの転輪（直径 860 mm）が 46 km/h で回る速さ。 */
  const val WHEEL_RPM = 280.0

  /** 速さ [speed]（ブロック/tick）のときに、転輪と軸が 1 tick に回る角度（ラジアン）。最高速で [rpm]、速さに比例。 */
  fun spinStep(spec: TankSpec, speed: Double, rpm: Double): Float =
      (speed / maxSpeed(spec) * rpm * 2 * Math.PI / 1200).toFloat()

  /** クロスヘアの先を探す距離。これより遠くを狙うと、この距離の点へ向けて撃つ。 */
  const val AIM_RANGE = 400.0
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
              turretTraverseDegPerSec = 24.0, // 推定（中型と同程度の旋回として）
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
              trackWidth = 0.41,
              turretWidth = 1.9, // 推定
              turretLength = 2.0, // 推定
              turretArmor =
                  Armor(front = 38.0, frontSlope = 0.0, side = 25.0, rear = 25.0, top = 13.0),
              damage = 34.0,
          ),
          TankSpec(
              key = "medium",
              label = "中型",
              model = "V号戦車パンターG型",
              length = 6.88,
              width = 3.27,
              height = 2.99,
              gunLength = 5.25,
              tonnes = 44.8,
              horsepower = 690.0, // 700 PS
              maxSpeedKmh = 46.0,
              hullTurnDegPerSec = 18.0, // 推定
              turretTraverseDegPerSec = 24.0, // 推定
              gunName = "7.5cm KwK 42 L/70",
              caliberMm = 75.0,
              muzzleVelocity = 925.0, // Pzgr. 39/42
              // 資料は 30 度傾斜板に対する値（100m 138mm、1000m 111mm）。垂直板へは cos30 で割って換算。
              pen100m = 159.0,
              pen1000m = 128.0,
              reloadSeconds = 6.0, // 推定
              ammo = 79,
              gunElevation = 20.0, // 推定
              gunDepression = 8.0, // 推定
              mgName = "MG 34",
              mgRoundsPerMinute = 850.0,
              // 上部前面 80mm・傾斜 55 度、側面 50mm、後面 40mm、上面 16mm。
              armor = Armor(front = 80.0, frontSlope = 55.0, side = 50.0, rear = 40.0, top = 16.0),
              trackWidth = 0.66,
              turretWidth = 2.2, // 推定
              turretLength = 2.5, // 推定
              turretArmor =
                  Armor(front = 110.0, frontSlope = 11.0, side = 45.0, rear = 45.0, top = 16.0),
              damage = 40.0, // ゲーム上の値
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
              trackWidth = 0.725,
              turretWidth = 2.6, // 推定
              turretLength = 2.8, // 推定
              turretArmor =
                  Armor(front = 100.0, frontSlope = 0.0, side = 80.0, rear = 80.0, top = 25.0),
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
              trackWidth = 0.40,
              turretWidth = 1.9, // 推定
              turretLength = 2.1, // 推定
              turretArmor =
                  Armor(front = 57.0, frontSlope = 15.0, side = 30.0, rear = 30.0, top = 10.0),
              damage = 34.0,
          ),
          TankSpec(
              key = "chiha",
              label = "中戦車（日）",
              model = "九七式中戦車 チハ（新砲塔）",
              length = 5.52,
              width = 2.33,
              height = 2.38,
              gunLength = 2.25,
              tonnes = 15.8,
              horsepower = 170.0,
              maxSpeedKmh = 38.0,
              hullTurnDegPerSec = 25.0, // 推定
              turretTraverseDegPerSec = 15.0, // 推定
              gunName = "一式四十七粍戦車砲",
              caliberMm = 47.0,
              muzzleVelocity = 810.0,
              pen100m = 70.0, // 推定
              pen1000m = 50.0, // 推定
              reloadSeconds = 3.5, // 推定
              ammo = 104,
              gunElevation = 20.0, // 推定
              gunDepression = 15.0, // 推定
              mgName = "九七式車載重機関銃",
              mgRoundsPerMinute = 500.0,
              armor = Armor(front = 25.0, frontSlope = 0.0, side = 25.0, rear = 20.0, top = 10.0),
              trackWidth = 0.3, // 推定
              turretWidth = 1.6, // 推定
              turretLength = 2.0, // 推定
              turretArmor =
                  Armor(front = 33.0, frontSlope = 0.0, side = 25.0, rear = 25.0, top = 10.0),
              damage = 28.0,
          ),
          // 戦後の 2 車種の複合装甲は公開値がないので、正面は均質鋼板換算の推定。
          TankSpec(
              key = "type90",
              label = "主力（日）",
              model = "90式戦車",
              length = 7.5, // 車体長、推定
              width = 3.33,
              height = 2.34,
              gunLength = 5.28,
              tonnes = 50.2,
              horsepower = 1500.0,
              maxSpeedKmh = 70.0,
              hullTurnDegPerSec = 40.0, // 推定
              turretTraverseDegPerSec = 40.0, // 推定
              gunName = "120mm L44",
              caliberMm = 120.0,
              muzzleVelocity = 1650.0,
              pen100m = 500.0, // 推定
              pen1000m = 470.0, // 推定
              reloadSeconds = 4.0, // 自動装填、推定
              ammo = 40,
              gunElevation = 10.0, // 推定
              gunDepression = 10.0, // 推定
              mgName = "74式車載7.62mm機関銃",
              mgRoundsPerMinute = 700.0,
              armor =
                  Armor(
                      front = 500.0,
                      frontSlope = 0.0,
                      side = 35.0,
                      rear = 25.0,
                      top = 25.0,
                  ), // 推定
              trackWidth = 0.6, // 推定
              turretWidth = 3.0, // 推定
              turretLength = 3.4, // 推定
              turretArmor =
                  Armor(
                      front = 550.0,
                      frontSlope = 0.0,
                      side = 60.0,
                      rear = 30.0,
                      top = 30.0,
                  ), // 推定
              damage = 70.0,
          ),
          TankSpec(
              key = "type10",
              label = "主力（日・新）",
              model = "10式戦車",
              length = 7.4, // 車体長、推定
              width = 3.24,
              height = 2.30,
              gunLength = 5.28,
              tonnes = 44.0,
              horsepower = 1200.0,
              maxSpeedKmh = 70.0,
              hullTurnDegPerSec = 45.0, // 推定
              turretTraverseDegPerSec = 45.0, // 推定
              gunName = "120mm L44",
              caliberMm = 120.0,
              muzzleVelocity = 1780.0, // 推定
              pen100m = 560.0, // 推定
              pen1000m = 530.0, // 推定
              reloadSeconds = 4.0, // 自動装填、推定
              ammo = 36, // 推定
              gunElevation = 10.0, // 推定
              gunDepression = 10.0, // 推定
              mgName = "74式車載7.62mm機関銃",
              mgRoundsPerMinute = 700.0,
              armor =
                  Armor(
                      front = 550.0,
                      frontSlope = 0.0,
                      side = 40.0,
                      rear = 25.0,
                      top = 25.0,
                  ), // 推定
              trackWidth = 0.55, // 推定
              turretWidth = 3.0, // 推定
              turretLength = 3.6, // 推定
              turretArmor =
                  Armor(
                      front = 600.0,
                      frontSlope = 0.0,
                      side = 60.0,
                      rear = 30.0,
                      top = 30.0,
                  ), // 推定
              damage = 70.0,
          ),
          TankSpec(
              key = "hago",
              label = "軽戦車（日）",
              model = "九五式軽戦車 ハ号",
              length = 4.38,
              width = 2.06,
              height = 2.13,
              gunLength = 1.7,
              tonnes = 7.4,
              horsepower = 120.0,
              maxSpeedKmh = 40.0,
              hullTurnDegPerSec = 30.0, // 推定
              turretTraverseDegPerSec = 15.0, // 手動、推定
              gunName = "九四式三十七粍戦車砲",
              caliberMm = 37.0,
              muzzleVelocity = 575.0,
              pen100m = 40.0, // 推定
              pen1000m = 25.0, // 推定
              reloadSeconds = 3.0, // 推定
              ammo = 119,
              gunElevation = 20.0, // 推定
              gunDepression = 15.0, // 推定
              mgName = "九七式車載重機関銃",
              mgRoundsPerMinute = 500.0,
              armor = Armor(front = 12.0, frontSlope = 0.0, side = 12.0, rear = 10.0, top = 9.0),
              trackWidth = 0.25, // 推定
              turretWidth = 1.2, // 推定
              turretLength = 1.5, // 推定
              turretArmor =
                  Armor(front = 12.0, frontSlope = 0.0, side = 12.0, rear = 12.0, top = 9.0),
              damage = 20.0,
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

  /** 着弾の爆発の強さ（バニラの爆発の power、TNT は 4）。口径に比例し、75mm で 2。ゲーム上の値。 */
  fun splashPower(caliberMm: Double): Float = (caliberMm / 37.5).toFloat()

  /** 距離（m）での貫通力。100m と 1000m の値を直線でつなぎ、100m より近いと 100m の値。 */
  fun penetration(spec: TankSpec, distance: Double): Double {
    val d = max(distance, 100.0)
    return max(0.0, spec.pen100m + (spec.pen1000m - spec.pen100m) * (d - 100.0) / 900.0)
  }

  /** 面の法線（車体の向き基準。前が +z）。前面は frontSlope だけ上へ傾ける。向きの符号は [impactCos] で消える。 */
  /**
   * 車体 1・履帯 左右 2・砲塔 1 の箱。[deck] は車体の上面（砲塔の回転中心）の高さ。車体は上面まで、履帯は上面の 7 割の高さまで（ゲーム上の値）。
   * 履帯の装甲は車体の側面と同じにする。
   */
  fun hitBoxes(spec: TankSpec, deck: Double): List<HitBox> {
    val track = spec.trackWidth
    val trackHeight = deck * 0.7
    val trackArmor = Armor(spec.armor.side, 0.0, spec.armor.side, spec.armor.side, spec.armor.top)
    val turretHeight = maxOf(spec.height - deck, 0.5)
    fun trackBox(side: Double) =
        HitBox(
            "履帯",
            side * (spec.width - track) / 2,
            trackHeight / 2,
            0.0,
            track,
            trackHeight,
            spec.length,
            trackArmor,
        )
    return listOf(
        HitBox("車体", 0.0, deck / 2, 0.0, spec.width - 2 * track, deck, spec.length, spec.armor),
        trackBox(-1.0),
        trackBox(1.0),
        HitBox(
            "砲塔",
            0.0,
            turretHeight / 2,
            0.0,
            spec.turretWidth,
            turretHeight,
            spec.turretLength,
            spec.turretArmor,
            turret = true,
        ),
    )
  }

  /**
   * 縦軸まわりに [yaw]（ラジアン、Bukkit の rotateAroundY(-yaw) と同じ向き）だけ回した長方形（中心 [cx]・[cz]、半幅 [halfWidth]、半長
   * [halfLength]）と、 軸に平行な長方形が重なるか。分離軸判定で、軸は両方の辺の向きの 4 本。接しているだけなら重ならない。
   */
  fun overlapsXZ(
      cx: Double,
      cz: Double,
      halfWidth: Double,
      halfLength: Double,
      yaw: Double,
      minX: Double,
      minZ: Double,
      maxX: Double,
      maxZ: Double,
  ): Boolean {
    val c = cos(yaw)
    val s = sin(yaw)
    val bx = (minX + maxX) / 2
    val bz = (minZ + maxZ) / 2
    val bhx = (maxX - minX) / 2
    val bhz = (maxZ - minZ) / 2
    for ((ax, az) in listOf(1.0 to 0.0, 0.0 to 1.0, c to s, -s to c)) {
      val rect = halfWidth * abs(c * ax + s * az) + halfLength * abs(-s * ax + c * az)
      val block = bhx * abs(ax) + bhz * abs(az)
      if (abs((cx - bx) * ax + (cz - bz) * az) >= rect + block - 1.0e-9) return false
    }
    return true
  }

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
