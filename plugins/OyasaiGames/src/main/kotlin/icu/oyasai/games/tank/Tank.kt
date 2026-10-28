package icu.oyasai.games.tank

import io.papermc.paper.entity.TeleportFlag
import kotlin.math.cos
import kotlin.math.sin
import org.bukkit.Location
import org.bukkit.Material
import org.bukkit.World
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

/** 見た目の 1 パーツ。HULL は車体の原点、TURRET と BARREL は [Tank.PIVOT] からの相対位置で置く。 */
private enum class Group {
  HULL,
  TURRET,
  BARREL,
}

private class Part(val group: Group, val center: Vector3f, val size: Vector3f, val block: Material)

/**
 * 戦車 1 台。バニラのブロック表示（BlockDisplay）だけで見た目を作り、 運転手は透明な ItemDisplay（[seat]）に乗せる。 車体の位置と向きは毎 tick
 * 自前で計算して表示を動かす（クライアント側の補間は teleportDuration と interpolationDuration）。 [driver] が null のときは動かない標的。
 */
class Tank(val world: World, spawn: Location, val driver: Player?) {
  companion object {
    /** 砲塔の回転中心（車体の原点から）。 */
    val PIVOT = Vector3f(0f, 1.15f, -0.1f)
    const val MUZZLE_LENGTH = 2.8f
    /** 当たり判定と衝突は軸に平行な箱で近似する。 ponytail: 車体の向きに合わせた回転箱は、実機で違和感が出てから。 */
    const val HALF_WIDTH = 1.3
    const val HIT_HEIGHT = 1.7
    const val SEAT_Y = 1.0
    private const val INTERPOLATION = 2

    private val PARTS =
        listOf(
            Part(
                Group.HULL,
                Vector3f(0f, 0.55f, 0f),
                Vector3f(2.0f, 0.7f, 3.4f),
                Material.GRAY_CONCRETE,
            ),
            Part(
                Group.HULL,
                Vector3f(-1.25f, 0.4f, 0f),
                Vector3f(0.6f, 0.8f, 3.6f),
                Material.BLACK_CONCRETE,
            ),
            Part(
                Group.HULL,
                Vector3f(1.25f, 0.4f, 0f),
                Vector3f(0.6f, 0.8f, 3.6f),
                Material.BLACK_CONCRETE,
            ),
            Part(
                Group.TURRET,
                Vector3f(0f, 0f, 0f),
                Vector3f(1.5f, 0.5f, 1.7f),
                Material.GREEN_CONCRETE,
            ),
            Part(
                Group.BARREL,
                Vector3f(0f, 0f, 1.55f),
                Vector3f(0.22f, 0.22f, 2.6f),
                Material.BLACK_CONCRETE,
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

  private val seat: ItemDisplay =
      world.spawn(Location(world, x, y + SEAT_Y, z), ItemDisplay::class.java) { prepare(it) }
  private val parts: List<Pair<Part, BlockDisplay>> =
      PARTS.map { part ->
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

  fun box(): BoundingBox =
      BoundingBox(x - HALF_WIDTH, y, z - HALF_WIDTH, x + HALF_WIDTH, y + HIT_HEIGHT, z + HALF_WIDTH)

  /** 移動と旋回と砲塔の追従。入力は [driver] の現在の WASD。 */
  fun tick() {
    if (reload > 0) reload--
    if (driver != null) {
      val input = driver.currentInput
      speed = TankRules.nextSpeed(speed, input.isForward, input.isBackward)
      hullYaw = TankRules.nextYaw(hullYaw, input.isLeft, input.isRight)
      turretYaw = TankRules.wrapYaw(driver.location.yaw.toDouble())
      gunPitch = TankRules.clampGunPitch(driver.location.pitch.toDouble())
    }
    move()
    render()
  }

  private fun blocked(px: Double, py: Double, pz: Double): Boolean =
      world.hasCollisionsIn(
          BoundingBox(
              px - HALF_WIDTH,
              py + 0.01,
              pz - HALF_WIDTH,
              px + HALF_WIDTH,
              py + 1.0,
              pz + HALF_WIDTH,
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
    val pivot = Vector3f(PIVOT).rotate(hullRot)
    val moved = x != sentX || y != sentY || z != sentZ
    if (moved) {
      seat.teleport(
          Location(world, x, y + SEAT_Y, z),
          PlayerTeleportEvent.TeleportCause.PLUGIN,
          TeleportFlag.EntityState.RETAIN_PASSENGERS,
      )
    }
    for ((part, display) in parts) {
      val rot =
          when (part.group) {
            Group.HULL -> hullRot
            Group.TURRET -> rotation(turretYaw, 0.0)
            Group.BARREL -> rotation(turretYaw, gunPitch)
          }
      // 表示の原点はブロックの角。中心を基準にした位置へずらしてから回す。
      val local = Vector3f(part.center).sub(Vector3f(part.size).mul(0.5f)).rotate(rot)
      val translation = if (part.group == Group.HULL) local else local.add(pivot)
      display.transformation = Transformation(translation, rot, Vector3f(part.size), Quaternionf())
      display.interpolationDelay = 0
      if (moved) display.teleport(Location(world, x, y, z))
    }
    sentX = x
    sentY = y
    sentZ = z
  }

  /** 砲口の位置と砲弾の向き。 */
  fun muzzle(): Pair<Vector, Vector> {
    val pivot = Vector3f(PIVOT).rotate(rotation(hullYaw, 0.0))
    val yaw = Math.toRadians(turretYaw)
    val pitch = Math.toRadians(gunPitch)
    val dir = Vector(-sin(yaw) * cos(pitch), -sin(pitch), cos(yaw) * cos(pitch))
    val origin =
        Vector(x + pivot.x, y + pivot.y, z + pivot.z)
            .add(dir.clone().multiply(MUZZLE_LENGTH.toDouble()))
    return origin to dir
  }

  fun remove() {
    seat.remove()
    parts.forEach { it.second.remove() }
  }
}
