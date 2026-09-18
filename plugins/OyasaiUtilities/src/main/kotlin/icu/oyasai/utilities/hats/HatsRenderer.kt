package icu.oyasai.utilities.hats

import icu.oyasai.utilities.OyasaiUtilities
import java.util.UUID
import java.util.concurrent.ConcurrentHashMap
import javax.imageio.ImageIO
import kotlin.math.PI
import kotlin.math.abs
import kotlin.math.cos
import kotlin.math.sin
import kotlin.random.Random
import org.bukkit.Bukkit
import org.bukkit.Color
import org.bukkit.Location
import org.bukkit.NamespacedKey
import org.bukkit.Particle
import org.bukkit.Particle.DustOptions
import org.bukkit.World
import org.bukkit.entity.Item
import org.bukkit.entity.Player
import org.bukkit.inventory.ItemStack
import org.bukkit.persistence.PersistentDataType
import org.bukkit.util.Vector

internal object HatsRenderer {
  private val particleAliases =
      mapOf(
          "REDSTONE" to "DUST",
          "SPELL_WITCH" to "WITCH",
          "FIREWORKS_SPARK" to "FIREWORK",
          "ITEMSTACK" to "ITEM",
          "BARRIER" to "BLOCK_MARKER",
      )
  private val particleCache = mutableMapOf<String, Particle?>()
  private val warnedUnknownParticles = ConcurrentHashMap.newKeySet<String>()
  private val warnedUnsupportedDataTypes = ConcurrentHashMap.newKeySet<Class<*>>()
  private val thiefDropKey by lazy { NamespacedKey(OyasaiUtilities.plugin, "hats_thief_drop") }
  private val zeroOffset = Vector()

  // アニメーションインデックス: (UUID, HatID) -> (FrameIndex -> AnimationStep)
  private val animationIndices =
      ConcurrentHashMap<Pair<UUID, String>, ConcurrentHashMap<Int, Int>>()

  class PixelPoint(val position: Vector, val color: Color)

  private val creeperPixels by lazy { loadPixels("Hats/types/creeper_face.png") }
  private val angelWingsPixels by lazy { loadPixels("Hats/types/angel_wings.png") }
  private val wingsPixels by lazy { loadPixels("Hats/types/wings.png") }

  private fun loadPixels(resourcePath: String, scale: Double = 0.2): List<PixelPoint> {
    val stream =
        OyasaiUtilities::class.java.classLoader.getResourceAsStream(resourcePath)
            ?: return emptyList()
    val image = ImageIO.read(stream) ?: return emptyList()
    val width = image.width
    val height = image.height
    val centerX = width / 2.0 - 0.5
    val centerY = height / 2.0 - 0.5
    val list = mutableListOf<PixelPoint>()
    for (y in 0 until height) {
      for (x in 0 until width) {
        val rgb = image.getRGB(x, y)
        val r = (rgb shr 16) and 0xFF
        val g = (rgb shr 8) and 0xFF
        val b = rgb and 0xFF
        if (r == 255 && g == 0 && b == 255) continue // マゼンタ除外
        if ((rgb ushr 24) == 0) continue // 透明除外
        val xx = (x - centerX) * -1.0 * scale
        val yy = (y - centerY) * -1.0 * scale
        list += PixelPoint(Vector(xx, yy, 0.0), Color.fromRGB(r, g, b))
      }
    }
    return list
  }

  fun cleanup(uuid: UUID) {
    animationIndices.keys.removeIf { it.first == uuid }
  }

  fun render(player: Player, hat: HatDefinition) {
    val world = player.world

    // 1. 特殊挙動: TRAIL (thief, rocket, magic_aura)
    if (hat.type == HatType.TRAIL) {
      renderTrail(player, hat)
      return
    }

    // 2. 特殊描画: PixelEffect (creeper, angel_wings, wings)
    if (
        hat.type == HatType.CREEPER_HAT ||
            hat.type == HatType.ANGEL_WINGS ||
            hat.type == HatType.WINGS
    ) {
      renderPixelEffect(player, hat)
      return
    }

    // 3. 幾何学フレームエフェクト (halo, cape, crystal, arch, hoop, tornado, sphere)
    val frames = getFrames(hat.type)
    if (frames.isEmpty()) return

    val location = if (hat.tracking == HatTracking.HEAD) player.eyeLocation else player.location
    val yaw = Math.toRadians(location.yaw.toDouble())
    val cos = cos(yaw)
    val sin = sin(yaw)

    val offset = hat.offset
    val offsetX = offset.x * cos - offset.z * sin
    val offsetZ = offset.x * sin + offset.z * cos

    val angle = hat.angle
    val angleXRad = Math.toRadians(angle.x)
    val angleYRad = Math.toRadians(angle.y)
    val angleZRad = Math.toRadians(angle.z)

    val isAnimated = hat.animated && supportsAnimation(hat.type)
    val animMap =
        if (isAnimated) {
          animationIndices.getOrPut(player.uniqueId to hat.id) { ConcurrentHashMap() }
        } else null

    frames.forEachIndexed { frameIndex, frame ->
      val spec = hat.particles.getOrElse(frameIndex) { hat.particles.first() }
      val particle = resolve(spec.name) ?: return@forEachIndexed

      if (isAnimated && animMap != null) {
        val size = frame.size
        if (size > 0) {
          val idx = (animMap[frameIndex] ?: 0) % size
          val target = frame[idx]
          var v = target.clone().multiply(hat.scale)
          v = getAngleVector(v, angleXRad, angleYRad, angleZRad)
          val spawnLoc =
              location
                  .clone()
                  .add(offsetX, 0.0, offsetZ)
                  .add(getTrackingPosition(hat, v, location, cos, sin))
          spawn(world, spawnLoc, particle, spec, hat.count, hat.randomOffset, speed = hat.speed)
          animMap[frameIndex] = (idx + 1) % size
        }
      } else {
        for (target in frame) {
          var v = target.clone().multiply(hat.scale)
          v = getAngleVector(v, angleXRad, angleYRad, angleZRad)
          val spawnLoc =
              location
                  .clone()
                  .add(offsetX, 0.0, offsetZ)
                  .add(getTrackingPosition(hat, v, location, cos, sin))
          spawn(world, spawnLoc, particle, spec, hat.count, hat.randomOffset, speed = hat.speed)
        }
      }
    }
  }

  private fun renderPixelEffect(player: Player, hat: HatDefinition) {
    val pixels =
        when (hat.type) {
          HatType.CREEPER_HAT -> creeperPixels
          HatType.ANGEL_WINGS -> angelWingsPixels
          HatType.WINGS -> wingsPixels
          else -> return
        }
    val spec = hat.particles.firstOrNull() ?: return
    val particle = resolve(spec.name) ?: return
    val world = player.world

    val location = if (hat.tracking == HatTracking.HEAD) player.eyeLocation else player.location
    val yaw = Math.toRadians(location.yaw.toDouble())
    val cos = cos(yaw)
    val sin = sin(yaw)

    val offset = hat.offset
    val offsetX = offset.x * cos - offset.z * sin
    val offsetZ = offset.x * sin + offset.z * cos

    val angle = hat.angle
    val angleXRad = Math.toRadians(angle.x)
    val angleYRad = Math.toRadians(angle.y)
    val angleZRad = Math.toRadians(angle.z)

    for (pixel in pixels) {
      var v = pixel.position.clone().multiply(hat.scale)
      v = getAngleVector(v, angleXRad, angleYRad, angleZRad)
      val spawnLoc =
          location
              .clone()
              .add(offsetX, 0.0, offsetZ)
              .add(getTrackingPosition(hat, v, location, cos, sin))
      val isWhite = pixel.color.red > 245 && pixel.color.green > 245 && pixel.color.blue > 245
      val finalColor = if (isWhite && spec.color != null) spec.color else pixel.color
      spawn(
          world,
          spawnLoc,
          particle,
          spec,
          hat.count,
          colorOverride = finalColor,
          speed = hat.speed,
      )
    }
  }

  private fun renderTrail(player: Player, hat: HatDefinition) {
    val spec = hat.particles.firstOrNull() ?: return

    // Thief!: 実際にアイテムを落とし、1秒後に消去
    if (spec.items.isNotEmpty()) {
      if (hat.mode == HatMode.SPRINTING && !player.isSprinting) return
      val o = 0.3
      val rx = (Random.nextDouble() * 2.0 - 1.0) * o
      val ry = (Random.nextDouble() * 2.0 - 1.0) * o
      val rz = (Random.nextDouble() * 2.0 - 1.0) * o
      val loc = player.location.clone().add(rx, ry, rz)
      val mat = spec.items.randomOrNull() ?: return
      val dropped = player.world.dropItem(loc, ItemStack(mat))
      dropped.velocity = Vector()
      dropped.persistentDataContainer.set(thiefDropKey, PersistentDataType.BYTE, 1.toByte())
      dropped.pickupDelay = 36000
      Bukkit.getScheduler()
          .runTaskLater(
              OyasaiUtilities.plugin,
              Runnable { if (dropped.isValid) dropped.remove() },
              20L,
          )
      return
    }

    // Rocket, Magic Aura など
    val particle = resolve(spec.name) ?: return
    val o = 0.3
    val rx = (Random.nextDouble() * 2.0 - 1.0) * o
    val ry = (Random.nextDouble() * 2.0 - 1.0) * o
    val rz = (Random.nextDouble() * 2.0 - 1.0) * o
    val baseHeight =
        when (hat.location) {
          HatAnchor.HEAD -> 2.3
          HatAnchor.CHEST -> 1.3
          HatAnchor.FEET -> 0.0
        }
    val loc =
        player.location
            .clone()
            .add(rx, ry, rz)
            .add(hat.offset.x, baseHeight + hat.offset.y, hat.offset.z)
    spawn(player.world, loc, particle, spec, hat.count, hat.randomOffset, speed = hat.speed)
  }

  fun isThiefDrop(item: Item): Boolean =
      item.persistentDataContainer.has(thiefDropKey, PersistentDataType.BYTE)

  private fun supportsAnimation(type: HatType): Boolean =
      when (type) {
        HatType.HALO,
        HatType.ARCH,
        HatType.HOOP,
        HatType.TORNADO,
        HatType.SPHERE -> true
        else -> false
      }

  private fun getFrames(type: HatType): List<List<Vector>> =
      when (type) {
        HatType.HALO -> haloFrames
        HatType.CAPE -> capeFrames
        HatType.CRYSTAL -> crystalFrames
        HatType.ARCH -> archFrames
        HatType.HOOP -> hoopFrames
        HatType.TORNADO -> tornadoFrames
        HatType.SPHERE -> sphereFrames
        else -> emptyList()
      }

  // --- オリジナル幾何学フレーム定義 ---

  private val haloFrames by lazy {
    val radius = 0.8
    listOf(
        (0 until 12).map { i ->
          val angle = Math.toRadians(i * 30.0)
          Vector(radius * cos(angle), 0.0, radius * sin(angle))
        }
    )
  }

  private val capeFrames by lazy {
    val xpoints = doubleArrayOf(-0.32, -0.16, 0.0, 0.16, 0.32)
    val points = mutableListOf<Vector>()
    for (x in 0 until 5) {
      for (y in 0 until 6) {
        points += Vector(xpoints[x] - x * 0.02, (-y) * 0.18, -0.28 - y * 0.1)
      }
    }
    listOf(points)
  }

  private val crystalFrames by lazy {
    val list =
        mutableListOf(
            Vector(0.0, 0.7, 0.0),
            Vector(0.0, 1.0, 0.0),
            Vector(0.0, 1.3, 0.0),
            Vector(0.0, 1.6, 0.0),
            Vector(0.0, 1.9, 0.0),
            Vector(0.2, 1.0, 0.0),
            Vector(0.2, 1.3, 0.0),
            Vector(0.2, 1.6, 0.0),
            Vector(0.4, 1.3, 0.0),
            Vector(-0.2, 1.0, 0.0),
            Vector(-0.2, 1.3, 0.0),
            Vector(-0.2, 1.6, 0.0),
            Vector(-0.4, 1.3, 0.0),
            Vector(0.0, 1.0, 0.2),
            Vector(0.0, 1.3, 0.2),
            Vector(0.0, 1.6, 0.2),
            Vector(0.0, 1.3, 0.4),
            Vector(0.0, 1.0, -0.2),
            Vector(0.0, 1.3, -0.2),
            Vector(0.0, 1.6, -0.2),
            Vector(0.0, 1.3, -0.4),
        )
    listOf(list)
  }

  private val archFrames by lazy {
    val l1 = mutableListOf<Vector>()
    val l2 = mutableListOf<Vector>()
    val l3 = mutableListOf<Vector>()
    val l4 = mutableListOf<Vector>()
    val l5 = mutableListOf<Vector>()
    val count = 50.0
    val distance = 360.0 / count
    val radius = 2.3
    var i = 0.0
    while (i < 180.0 + distance) {
      val angle = Math.toRadians(i)
      val x = radius * cos(angle)
      val y = radius * sin(angle)
      l1 += Vector(x, y, 0.6)
      l2 += Vector(x, y, 0.3)
      l3 += Vector(x, y, 0.0)
      l4 += Vector(x, y, -0.3)
      l5 += Vector(x, y, -0.6)
      i += distance
    }
    listOf(l1, l2, l3, l4, l5)
  }

  private val hoopFrames by lazy {
    val points = 30.0
    val dist = 360.0 / points
    val radius = 0.8
    val frame1 = mutableListOf<Vector>()
    val frame2 = mutableListOf<Vector>()
    var i = 0.0
    while (i < 360.0) {
      val angle = Math.toRadians(i)
      val x = radius * cos(angle)
      val z = radius * sin(angle)
      frame1 += Vector(x, 0.0, z)
      frame2 += Vector(-x, 0.0, -z)
      i += dist
    }
    listOf(frame1, frame2)
  }

  private val tornadoFrames by lazy {
    val points = 16.0
    val dist = 360.0 / points
    val frame1 = mutableListOf<Vector>()
    val frame2 = mutableListOf<Vector>()
    var i = 0.0
    while (i < 360.0) {
      val angle = Math.toRadians(i)
      val x = 0.5 * cos(angle)
      val z = 0.5 * sin(angle)
      frame1 += Vector(x, 0.0, z)
      i += dist
    }
    i = 0.0
    while (i < 360.0) {
      val angle = Math.toRadians(i + 50.0)
      val x = 0.25 * cos(angle)
      val z = 0.25 * sin(angle)
      frame2 += Vector(x, -0.1, z)
      i += dist
    }
    listOf(frame1, frame2)
  }

  private val sphereFrames by lazy {
    var phi = 0.0
    val radius = 1.5
    val angle = PI / 10.0
    val frames = mutableListOf<List<Vector>>()
    while (phi < PI) {
      val frame = mutableListOf<Vector>()
      phi += angle
      var a = 0.0
      while (a <= PI * 2.0) {
        val x = radius * cos(a) * sin(phi)
        val y = radius * cos(phi) + 1.5
        val z = radius * sin(a) * sin(phi)
        frame += Vector(x, y, z)
        a += PI / 20.0
      }
      frames += frame
    }
    frames
  }

  // --- 座標変換・回転計算 (MathUtil / Effect 準拠) ---

  private fun rotateXAxis(v: Vector, a: Double): Vector {
    val y = cos(a) * v.y - sin(a) * v.z
    val z = sin(a) * v.y + cos(a) * v.z
    return v.setY(y).setZ(z)
  }

  private fun rotateYAxis(v: Vector, b: Double): Vector {
    val x = cos(b) * v.x + sin(b) * v.z
    val z = -sin(b) * v.x + cos(b) * v.z
    return v.setX(x).setZ(z)
  }

  private fun rotateZAxis(v: Vector, c: Double): Vector {
    val x = cos(c) * v.x - sin(c) * v.y
    val y = sin(c) * v.x + cos(c) * v.y
    return v.setX(x).setY(y)
  }

  private fun rotateVector(v: Vector, location: Location): Vector {
    val yaw = Math.toRadians(location.yaw.toDouble())
    val pitch = Math.toRadians(location.pitch.toDouble())
    var res = rotateXAxis(v, pitch)
    res = rotateYAxis(res, -yaw)
    return res
  }

  private fun getAngleVector(
      target: Vector,
      angleXRad: Double,
      angleYRad: Double,
      angleZRad: Double,
  ): Vector {
    var t = target
    if (abs(angleZRad) > 0.0) t = rotateXAxis(t, angleZRad)
    if (abs(angleYRad) > 0.0) t = rotateYAxis(t, angleYRad)
    if (abs(angleXRad) > 0.0) t = rotateZAxis(t, -angleXRad)
    return t
  }

  private fun getTrackingPosition(
      hat: HatDefinition,
      target: Vector,
      location: Location,
      cos: Double,
      sin: Double,
  ): Vector {
    val baseHeight =
        when (hat.location) {
          HatAnchor.HEAD -> 2.3
          HatAnchor.CHEST -> 1.3
          HatAnchor.FEET -> 0.0
        }
    val offsetY = baseHeight + hat.offset.y
    return when (hat.tracking) {
      HatTracking.NONE -> Vector(target.x, target.y + offsetY, target.z)
      HatTracking.BODY -> {
        val tx = target.x
        val tz = target.z
        val x = tx * cos - tz * sin
        val y = target.y + offsetY
        val z = tx * sin + tz * cos
        Vector(x, y, z)
      }
      HatTracking.HEAD -> {
        val v = Vector(target.x, target.y + offsetY, target.z)
        rotateVector(v, location)
      }
    }
  }

  private fun resolve(name: String): Particle? {
    if (name.equals("EMPTY_SPACE", ignoreCase = true) || name.equals("NONE", ignoreCase = true))
        return null
    val key = name.uppercase()
    if (particleCache.containsKey(key)) return particleCache[key]
    val mapped = particleAliases[key] ?: key
    val particle =
        Particle.entries.firstOrNull { it.name.equals(mapped, ignoreCase = true) }
            ?: Particle.entries.firstOrNull { it.name.equals(key, ignoreCase = true) }
    particleCache[key] = particle
    if (particle == null && warnedUnknownParticles.add(key)) {
      OyasaiUtilities.plugin.logger.warning("Unknown particle '$name'; skipping it.")
    }
    return particle
  }

  private fun spawn(
      world: World,
      loc: Location,
      particle: Particle,
      spec: HatParticleSpec,
      count: Int,
      randomOffset: Vector = zeroOffset,
      colorOverride: Color? = null,
      speed: Double = 0.0,
  ) {
    val color =
        when {
          spec.randomColor -> Color.fromRGB(Random.nextInt(0xFFFFFF + 1))
          colorOverride != null -> colorOverride
          spec.color != null -> spec.color
          else -> Color.WHITE
        }
    val dataType = particle.dataType
    when {
      dataType == DustOptions::class.java ->
          world.spawnParticle(
              particle,
              loc,
              count,
              randomOffset.x,
              randomOffset.y,
              randomOffset.z,
              speed,
              DustOptions(color, spec.size),
          )
      dataType == ItemStack::class.java -> {
        val material = spec.items.randomOrNull() ?: return
        world.spawnParticle(
            particle,
            loc,
            count,
            randomOffset.x,
            randomOffset.y,
            randomOffset.z,
            speed,
            ItemStack(material),
        )
      }
      Void::class.java.isAssignableFrom(dataType) ->
          world.spawnParticle(
              particle,
              loc,
              count,
              randomOffset.x,
              randomOffset.y,
              randomOffset.z,
              speed,
          )
      else ->
          if (warnedUnsupportedDataTypes.add(dataType)) {
            OyasaiUtilities.plugin.logger.warning(
                "Unsupported particle data type '${dataType.name}' for ${particle.name}; skipping it."
            )
          }
    }
  }
}
