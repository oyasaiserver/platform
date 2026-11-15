package icu.oyasai.games.tank

import io.papermc.paper.entity.TeleportFlag
import kotlin.math.abs
import kotlin.math.cos
import kotlin.math.floor
import kotlin.math.sin
import org.bukkit.Bukkit
import org.bukkit.Location
import org.bukkit.Material
import org.bukkit.World
import org.bukkit.block.BlockFace
import org.bukkit.entity.BlockDisplay
import org.bukkit.entity.Display
import org.bukkit.entity.ItemDisplay
import org.bukkit.entity.Player
import org.bukkit.event.player.PlayerTeleportEvent
import org.bukkit.inventory.ItemStack
import org.bukkit.util.BoundingBox
import org.bukkit.util.Vector
import org.joml.Matrix4f
import org.joml.Quaternionf
import org.joml.Vector3f

/** 砲弾が車体の箱に当たった位置。distance は射線上の距離、face は当たった面。 */
/** 被弾。[localDir] は当たった箱（[box]）の向きから見た弾の向き。 */
class TankHit(val distance: Double, val box: HitBox, val face: ArmorFace, val localDir: Vector)

/**
 * 戦車 1 台。バニラの表示エンティティ（BlockDisplay・ItemDisplay）だけで見た目を作る。透明な ItemDisplay（[seat]）を土台にして、
 * 運転手と見た目の表示をすべてその乗客にする（BDEngine と同じ作り）。動かすのは土台だけで、乗客はクライアント側で付いてくる。 大きさは [spec] の実寸（1 ブロック = 1
 * m）。向きは毎 tick 自前で計算して各表示の変換行列にする（補間は teleportDuration と interpolationDuration）。 [driver] が null
 * のときは動かない標的。
 */
internal class Tank(
    val world: World,
    spawn: Location,
    val driver: Player?,
    val spec: TankSpec,
    private val model: TankModel,
) {
  companion object {
    private const val INTERPOLATION = 2
    private const val TAU = 6.2831855f
  }

  private val pivot = model.pivot
  private val seatY = model.seatY

  /** 被弾の箱。壁・地形の衝突には砲塔以外を使う。 */
  private val boxes = TankRules.hitBoxes(spec, pivot.y.toDouble())

  var x = spawn.x
  var y = spawn.y
  var z = spawn.z
  var hullYaw = TankRules.wrapYaw(spawn.yaw.toDouble())
  /** 砲塔の向き（車体に対する角度）。砲塔は車体に載っているので、車体が回ると一緒に回る。 */
  var turretRelative = 0.0
  val turretYaw: Double
    get() = TankRules.wrapYaw(hullYaw + turretRelative)

  var gunPitch = 0.0
  var speed = 0.0
  var hp = TankRules.MAX_HP
  var reload = 0
  var ammo = spec.ammo

  /** 機銃を撃ち続ける最後の tick（右クリックを押している間は約 4 tick ごとに延びる）と、発射数の端数。 */
  /** エンジン音の回転数（0.1〜1）。 */
  var rpm = 0.1

  var mgUntil = 0
  /** 転輪と軸の回転角（ラジアン）。すべて同じ角度で回る。 */
  private var spin = 0f
  var mgCarry = 0.0

  private val seat: ItemDisplay =
      world.spawn(Location(world, x, y + seatY, z), ItemDisplay::class.java) { prepare(it) }
  private val displays: List<Pair<ModelPart, Display>> =
      model.parts.map { part ->
        val at = Location(world, x, y + seatY, z)
        val display =
            if (part.block != null && part.axle == null)
                world.spawn(at, BlockDisplay::class.java) {
                  it.block = Bukkit.createBlockData(part.block)
                  prepare(it)
                }
            else
                world.spawn(at, ItemDisplay::class.java) {
                  // 回る部品はブロックのアイテムで出す。ItemDisplay は箱の中心が原点なので、回しても補間で軸から外れない。
                  it.setItemStack(part.item ?: blockItem(part.block!!))
                  prepare(it)
                }
        seat.addPassenger(display)
        part to display
      }

  /** 各表示へ最後に送った変換。変わった tick だけ送る（下の render のコメント）。 */
  private val sent = arrayOfNulls<Matrix4f>(model.parts.size)

  init {
    render()
  }

  private fun prepare(display: Display) {
    display.isPersistent = false
    display.viewRange = 2.0f
    display.teleportDuration = INTERPOLATION
    display.interpolationDuration = INTERPOLATION
    display.interpolationDelay = 0
  }

  private fun blockItem(block: String): ItemStack =
      ItemStack(Material.matchMaterial(block.substringBefore('[')) ?: error("unknown block $block"))

  /** 運転手を座席へ乗せる。乗れなければ false。 */
  fun mount(): Boolean = driver == null || seat.addPassenger(driver)

  fun isSeated(): Boolean = driver == null || (driver.isOnline && seat.passengers.contains(driver))

  /** 移動と旋回と砲塔の追従。入力は [driver] の現在の WASD、砲塔は視線へ実車の旋回速度で向かう。 */
  fun tick(wheelRpm: Double) {
    if (reload > 0) reload--
    if (driver != null) {
      val input = driver.currentInput
      speed = TankRules.nextSpeed(spec, speed, input.isForward, input.isBackward)
      // 回ると壁にめり込むなら回らない。
      val turned = TankRules.nextYaw(spec, hullYaw, input.isLeft, input.isRight)
      if (!blocked(x, y, z, turned)) hullYaw = turned
      // 車体が回った後で、視線との差を車体に対する角度で詰める（第二次大戦の戦車に砲の安定化装置はない）。
      val aim = TankRules.wrapYaw(driver.location.yaw.toDouble() - hullYaw)
      turretRelative = TankRules.traverse(spec, turretRelative, aim)
      gunPitch = TankRules.clampGunPitch(spec, driver.location.pitch.toDouble())
    }
    move()
    spin = (spin + TankRules.spinStep(spec, speed, wheelRpm)) % TAU
    render()
  }

  /** 車体と履帯の箱を向き [yaw] に回して (px, py, pz) に置いたとき、ブロックの当たり判定と重なるか。 */
  private fun blocked(px: Double, py: Double, pz: Double, yaw: Double = hullYaw): Boolean {
    val angle = Math.toRadians(yaw)
    return boxes.any { box ->
      if (box.turret) return@any false
      val center = Vector(box.x, 0.0, box.z).rotateAroundY(-angle).add(Vector(px, 0.0, pz))
      val halfWidth = box.width / 2
      val halfLength = box.length / 2
      val reachX = abs(cos(angle)) * halfWidth + abs(sin(angle)) * halfLength
      val reachZ = abs(sin(angle)) * halfWidth + abs(cos(angle)) * halfLength
      val bottom = py + maxOf(box.y - box.height / 2, 0.01)
      val top = py + box.y + box.height / 2
      (floor(center.x - reachX).toInt()..floor(center.x + reachX).toInt()).any { bx ->
        (floor(bottom).toInt()..floor(top).toInt()).any { by ->
          (floor(center.z - reachZ).toInt()..floor(center.z + reachZ).toInt()).any { bz ->
            world.getBlockAt(bx, by, bz).collisionShape.boundingBoxes.any { shape ->
              shape.minY + by < top &&
                  shape.maxY + by > bottom &&
                  TankRules.overlapsXZ(
                      center.x,
                      center.z,
                      halfWidth,
                      halfLength,
                      angle,
                      shape.minX + bx,
                      shape.minZ + bz,
                      shape.maxX + bx,
                      shape.maxZ + bz,
                  )
            }
          }
        }
      }
    }
  }

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

  /** 最後に土台を送った位置。止まっている間は teleport しない（乗員の位置同期で画面が揺れる）。 */
  private var sentX = Double.NaN
  private var sentY = Double.NaN
  private var sentZ = Double.NaN

  private fun render() {
    val hullRot = rotation(hullYaw, 0.0)
    val turretRot = rotation(turretYaw, 0.0)
    val pivotWorld = Vector3f(model.pivot).rotate(hullRot)
    val gunRootWorld = Vector3f(model.gunRoot).rotate(turretRot).add(pivotWorld)
    // 表示は土台（座席の高さ）に乗っているので、車体の原点は土台から seatY 下。
    val down = (-seatY).toFloat()
    val groups =
        mapOf(
            Group.HULL to Matrix4f().translation(0f, down, 0f).rotate(hullRot),
            Group.TURRET to
                Matrix4f()
                    .translation(pivotWorld.x, pivotWorld.y + down, pivotWorld.z)
                    .rotate(turretRot),
            Group.BARREL to
                Matrix4f()
                    .translation(gunRootWorld.x, gunRootWorld.y + down, gunRootWorld.z)
                    .rotate(rotation(turretYaw, gunPitch)),
        )
    if (x != sentX || y != sentY || z != sentZ) {
      seat.teleport(
          Location(world, x, y + seatY, z),
          PlayerTeleportEvent.TeleportCause.PLUGIN,
          TeleportFlag.EntityState.RETAIN_PASSENGERS,
      )
    }
    displays.forEachIndexed { index, (part, display) ->
      val next = Matrix4f(groups.getValue(part.group))
      part.axle?.let { next.translate(it).rotateX(spin).translate(-it.x, -it.y, -it.z) }
      next.mul(part.local)
      if (part.axle != null) next.translate(0.5f, 0.5f, 0.5f)
      // interpolationDelay は値が同じでも毎回クライアントへ送られ、補間をやり直させる。
      // 毎 tick 送ると止まっている間も直前の向きとの間で揺れ続けるので、変わった tick だけ送る。
      if (next != sent[index]) {
        display.setTransformationMatrix(next)
        display.interpolationDelay = 0
        sent[index] = next
      }
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

  /** 砲身の付け根から砲身方向へ [forward] m、右へ [right] m の位置（同軸機銃は砲の右）。 */
  fun gunPoint(forward: Double, right: Double = 0.0): Vector {
    val center =
        Vector3f(pivot)
            .rotate(rotation(hullYaw, 0.0))
            .add(Vector3f(model.gunRoot).rotate(rotation(turretYaw, 0.0)))
    val yaw = Math.toRadians(turretYaw)
    val rightDir = Vector(-cos(yaw), 0.0, -sin(yaw))
    return Vector(x + center.x, y + center.y, z + center.z)
        .add(gunDirection().multiply(forward))
        .add(rightDir.multiply(right))
  }

  fun muzzle(): Vector = gunPoint(model.gunLength.toDouble())

  fun coaxialMuzzle(): Vector =
      gunPoint(model.coaxRoot.z.toDouble() - model.gunRoot.z, -model.coaxRoot.x.toDouble())

  /** 射線（ワールド座標）が当たる最も近い箱。各箱はその向き（車体か砲塔）に回し、前が local +z。 */
  fun hitTest(start: Vector, dir: Vector, maxDistance: Double): TankHit? {
    val hullAngle = Math.toRadians(hullYaw)
    val turretBase =
        Vector(pivot.x.toDouble(), pivot.y.toDouble(), pivot.z.toDouble()).rotateAroundY(-hullAngle)
    return boxes
        .mapNotNull { box ->
          val angle = Math.toRadians(if (box.turret) turretYaw else hullYaw)
          val center =
              Vector(box.x, box.y, box.z)
                  .rotateAroundY(-angle)
                  .add(Vector(x, y, z))
                  .add(if (box.turret) turretBase else Vector())
          val localStart = start.clone().subtract(center).rotateAroundY(angle)
          val localDir = dir.clone().rotateAroundY(angle)
          val bounds =
              BoundingBox(
                  -box.width / 2,
                  -box.height / 2,
                  -box.length / 2,
                  box.width / 2,
                  box.height / 2,
                  box.length / 2,
              )
          val result = bounds.rayTrace(localStart, localDir, maxDistance) ?: return@mapNotNull null
          val face =
              when (result.hitBlockFace) {
                BlockFace.SOUTH -> ArmorFace.FRONT
                BlockFace.NORTH -> ArmorFace.REAR
                BlockFace.UP,
                BlockFace.DOWN -> ArmorFace.TOP
                else -> ArmorFace.SIDE
              }
          TankHit(result.hitPosition.distance(localStart), box, face, localDir)
        }
        .minByOrNull { it.distance }
  }

  fun remove() {
    seat.remove()
    displays.forEach { it.second.remove() }
  }
}
