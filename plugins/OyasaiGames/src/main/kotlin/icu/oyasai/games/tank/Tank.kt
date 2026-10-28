package icu.oyasai.games.tank

import io.papermc.paper.entity.TeleportFlag
import kotlin.math.cos
import kotlin.math.sin
import org.bukkit.Location
import org.bukkit.Material
import org.bukkit.World
import org.bukkit.block.BlockFace
import org.bukkit.entity.BlockDisplay
import org.bukkit.entity.Display
import org.bukkit.entity.ItemDisplay
import org.bukkit.entity.Player
import org.bukkit.event.player.PlayerTeleportEvent
import org.bukkit.util.BoundingBox
import org.bukkit.util.Transformation
import org.bukkit.util.Vector
import org.joml.Quaternionf
import org.joml.Vector3f

/** 見た目の 1 パーツ。HULL は車体の原点、TURRET と BARREL は砲塔の回転中心からの相対位置で置く。 */
private enum class Group {
  HULL,
  TURRET,
  BARREL,
}

private class Part(val group: Group, val center: Vector3f, val size: Vector3f, val block: Material)

/** 砲弾が車体の箱に当たった位置。distance は射線上の距離、face は当たった面。 */
class TankHit(val distance: Double, val face: ArmorFace, val localDir: Vector)

/**
 * 戦車 1 台。バニラのブロック表示（BlockDisplay）だけで見た目を作り、運転手は透明な ItemDisplay（[seat]）に乗せる。 大きさは [spec] の実寸（1 ブロック
 * = 1 m）。車体の位置と向きは毎 tick 自前で計算して表示を動かす（クライアント側の補間は teleportDuration と
 * interpolationDuration）。[driver] が null のときは動かない標的。
 */
class Tank(val world: World, spawn: Location, val driver: Player?, val spec: TankSpec) {
  companion object {
    private const val INTERPOLATION = 2
  }

  // 形は諸元の全長・全幅・全高から割合で作る。 ponytail: 車種ごとの細かい形（傾斜、キューポラ、防盾）はまだない。
  private val hullHeight = (spec.height * 0.55).toFloat()
  private val trackHeight = (spec.height * 0.32).toFloat()
  private val trackWidth = (spec.width * 0.2).toFloat()
  private val turretHeight = (spec.height - hullHeight - 0.15).toFloat()
  private val turretLength = (spec.length * 0.4).toFloat()
  private val pivot = Vector3f(0f, hullHeight, (spec.length * 0.03).toFloat())
  private val muzzleLength = (turretLength / 2 + spec.gunLength).toFloat()
  private val seatY = hullHeight.toDouble()

  /** 衝突は軸に平行な正方形で近似する。 ponytail: 細長い車体が斜めのとき壁に少しめり込む。 */
  private val collisionHalf = (spec.width + spec.length) / 4.0

  private val parts: List<Part> = run {
    val hullColor =
        if (spec.key == "heavy") Material.YELLOW_TERRACOTTA else Material.GREEN_TERRACOTTA
    val dark = Material.GRAY_CONCRETE
    val w = spec.width.toFloat()
    val l = spec.length.toFloat()
    val bodyBottom = trackHeight * 0.6f
    val barrel = (spec.caliberMm / 1000.0 * 2.2).toFloat()
    listOf(
        Part(
            Group.HULL,
            Vector3f(0f, (bodyBottom + hullHeight) / 2, 0f),
            Vector3f(w, hullHeight - bodyBottom, l * 0.95f),
            hullColor,
        ),
        Part(
            Group.HULL,
            Vector3f(-(w - trackWidth) / 2, trackHeight / 2, 0f),
            Vector3f(trackWidth, trackHeight, l),
            Material.BLACK_CONCRETE,
        ),
        Part(
            Group.HULL,
            Vector3f((w - trackWidth) / 2, trackHeight / 2, 0f),
            Vector3f(trackWidth, trackHeight, l),
            Material.BLACK_CONCRETE,
        ),
        Part(
            Group.TURRET,
            Vector3f(0f, turretHeight / 2, 0f),
            Vector3f(w * 0.6f, turretHeight, turretLength),
            hullColor,
        ),
        Part(
            Group.BARREL,
            Vector3f(0f, turretHeight * 0.45f, turretLength / 2 + spec.gunLength.toFloat() / 2),
            Vector3f(barrel, barrel, spec.gunLength.toFloat()),
            dark,
        ),
    )
  }

  var x = spawn.x
  var y = spawn.y
  var z = spawn.z
  var hullYaw = TankRules.wrapYaw(spawn.yaw.toDouble())
  var turretYaw = hullYaw
  var gunPitch = 0.0
  var speed = 0.0
  var hp = TankRules.MAX_HP
  var reload = 0
  var ammo = spec.ammo

  /** 機銃を撃ち続ける最後の tick（右クリックを押している間は約 4 tick ごとに延びる）と、発射数の端数。 */
  var mgUntil = 0
  var mgCarry = 0.0

  private val seat: ItemDisplay =
      world.spawn(Location(world, x, y + seatY, z), ItemDisplay::class.java) { prepare(it) }
  private val displays: List<Pair<Part, BlockDisplay>> =
      parts.map { part ->
        part to
            world.spawn(Location(world, x, y, z), BlockDisplay::class.java) {
              it.block = part.block.createBlockData()
              it.viewRange = 2.0f
              prepare(it)
            }
      }

  init {
    render()
  }

  private fun prepare(display: Display) {
    display.isPersistent = false
    display.teleportDuration = INTERPOLATION
    display.interpolationDuration = INTERPOLATION
    display.interpolationDelay = 0
  }

  /** 運転手を座席へ乗せる。乗れなければ false。 */
  fun mount(): Boolean = driver == null || seat.addPassenger(driver)

  fun isSeated(): Boolean = driver == null || (driver.isOnline && seat.passengers.contains(driver))

  /** 移動と旋回と砲塔の追従。入力は [driver] の現在の WASD、砲塔は視線へ実車の旋回速度で向かう。 */
  fun tick() {
    if (reload > 0) reload--
    if (driver != null) {
      val input = driver.currentInput
      speed = TankRules.nextSpeed(spec, speed, input.isForward, input.isBackward)
      hullYaw = TankRules.nextYaw(spec, hullYaw, input.isLeft, input.isRight)
      turretYaw = TankRules.traverse(spec, turretYaw, driver.location.yaw.toDouble())
      gunPitch = TankRules.clampGunPitch(spec, driver.location.pitch.toDouble())
    }
    move()
    render()
  }

  private fun blocked(px: Double, py: Double, pz: Double): Boolean =
      world.hasCollisionsIn(
          BoundingBox(
              px - collisionHalf,
              py + 0.01,
              pz - collisionHalf,
              px + collisionHalf,
              py + 1.0,
              pz + collisionHalf,
          )
      )

  private fun move() {
    val nx = x + TankRules.forwardX(hullYaw) * speed
    val nz = z + TankRules.forwardZ(hullYaw) * speed
    when {
      speed == 0.0 -> Unit
      !blocked(nx, y, nz) -> {
        x = nx
        z = nz
      }
      !blocked(nx, y + 1.0, nz) -> {
        x = nx
        y += 1.0
        z = nz
      }
      !blocked(nx, y, z) -> x = nx
      !blocked(x, y, nz) -> z = nz
      else -> speed = 0.0
    }
    // 落下は 0.1 ずつ最大 5 回。段差を越えるとき以外は地面にめり込まない。
    repeat(5) { if (!blocked(x, y - 0.1, z)) y -= 0.1 }
  }

  private fun rotation(yaw: Double, pitch: Double): Quaternionf =
      Quaternionf().rotationYXZ(Math.toRadians(-yaw).toFloat(), Math.toRadians(pitch).toFloat(), 0f)

  /** 最後に表示へ送った位置。止まっている間は teleport しない（乗員の位置同期で画面が揺れる）。 */
  private var sentX = Double.NaN
  private var sentY = Double.NaN
  private var sentZ = Double.NaN

  private fun render() {
    val hullRot = rotation(hullYaw, 0.0)
    val pivotWorld = Vector3f(pivot).rotate(hullRot)
    val moved = x != sentX || y != sentY || z != sentZ
    if (moved) {
      seat.teleport(
          Location(world, x, y + seatY, z),
          PlayerTeleportEvent.TeleportCause.PLUGIN,
          TeleportFlag.EntityState.RETAIN_PASSENGERS,
      )
    }
    for ((part, display) in displays) {
      val rot =
          when (part.group) {
            Group.HULL -> hullRot
            Group.TURRET -> rotation(turretYaw, 0.0)
            Group.BARREL -> rotation(turretYaw, gunPitch)
          }
      // 表示の原点はブロックの角。中心を基準にした位置へずらしてから回す。
      val local = Vector3f(part.center).sub(Vector3f(part.size).mul(0.5f)).rotate(rot)
      val translation = if (part.group == Group.HULL) local else local.add(pivotWorld)
      val next = Transformation(translation, rot, Vector3f(part.size), Quaternionf())
      // interpolationDelay は値が同じでも毎回クライアントへ送られ、補間をやり直させる。
      // 毎 tick 送ると止まっている間も直前の向きとの間で揺れ続けるので、変わった tick だけ送る。
      if (next != display.transformation) {
        display.transformation = next
        display.interpolationDelay = 0
      }
      if (moved) display.teleport(Location(world, x, y, z))
    }
    sentX = x
    sentY = y
    sentZ = z
  }

  /** 砲身の向き（単位ベクトル）。 */
  fun gunDirection(): Vector {
    val yaw = Math.toRadians(turretYaw)
    val pitch = Math.toRadians(gunPitch)
    return Vector(-sin(yaw) * cos(pitch), -sin(pitch), cos(yaw) * cos(pitch))
  }

  /** 砲塔の回転中心から砲身方向へ [forward] m、右へ [right] m の位置（同軸機銃は砲の右）。 */
  fun gunPoint(forward: Double, right: Double = 0.0): Vector {
    val center = Vector3f(pivot).rotate(rotation(hullYaw, 0.0))
    val yaw = Math.toRadians(turretYaw)
    val rightDir = Vector(-cos(yaw), 0.0, -sin(yaw))
    return Vector(x + center.x, y + center.y + turretHeight * 0.45, z + center.z)
        .add(gunDirection().multiply(forward))
        .add(rightDir.multiply(right))
  }

  fun muzzle(): Vector = gunPoint(muzzleLength.toDouble())

  fun coaxialMuzzle(): Vector = gunPoint(turretLength / 2.0 + 0.2, 0.35)

  /** 射線（ワールド座標）が車体の箱に当たるか。箱は車体の向きに合わせて回す（前が local +z）。 */
  fun hitTest(start: Vector, dir: Vector, maxDistance: Double): TankHit? {
    val yaw = Math.toRadians(hullYaw)
    val localStart = start.clone().subtract(Vector(x, y, z)).rotateAroundY(yaw)
    val localDir = dir.clone().rotateAroundY(yaw)
    val box =
        BoundingBox(
            -spec.width / 2,
            0.0,
            -spec.length / 2,
            spec.width / 2,
            spec.height,
            spec.length / 2,
        )
    val result = box.rayTrace(localStart, localDir, maxDistance) ?: return null
    val face =
        when (result.hitBlockFace) {
          BlockFace.SOUTH -> ArmorFace.FRONT
          BlockFace.NORTH -> ArmorFace.REAR
          BlockFace.UP,
          BlockFace.DOWN -> ArmorFace.TOP
          else -> ArmorFace.SIDE
        }
    return TankHit(result.hitPosition.distance(localStart), face, localDir)
  }

  fun remove() {
    seat.remove()
    displays.forEach { it.second.remove() }
  }
}
