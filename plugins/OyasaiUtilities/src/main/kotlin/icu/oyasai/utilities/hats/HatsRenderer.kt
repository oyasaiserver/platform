package icu.oyasai.utilities.hats

import kotlin.math.PI
import kotlin.math.cos
import kotlin.math.sin
import kotlin.random.Random
import org.bukkit.Color
import org.bukkit.Location
import org.bukkit.Particle
import org.bukkit.Particle.DustOptions
import org.bukkit.World
import org.bukkit.entity.Player
import org.bukkit.inventory.ItemStack
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

  fun render(player: Player, hat: HatDefinition, tick: Int) {
    val world = player.world
    val layers = offsets(hat, tick)
    val base = player.location.clone()
    when (hat.location) {
      HatAnchor.FEET -> Unit
      HatAnchor.CHEST -> base.add(0.0, 1.0, 0.0)
      HatAnchor.HEAD -> base.add(0.0, player.eyeHeight, 0.0)
    }
    val yaw = Math.toRadians(-player.location.yaw.toDouble())
    val pitch = Math.toRadians(player.location.pitch.toDouble())
    layers.forEachIndexed { index, points ->
      val spec = hat.particles.getOrElse(index) { hat.particles.first() }
      val particle = resolve(spec.name) ?: return@forEachIndexed
      for (point in points) {
        val local = point.clone().multiply(hat.scale).add(hat.offset)
        when (hat.tracking) {
          HatTracking.HEAD -> {
            local.rotateAroundX(pitch)
            local.rotateAroundY(yaw)
          }
          HatTracking.BODY -> local.rotateAroundY(yaw)
          HatTracking.NONE ->
              if (hat.type != HatType.TRAIL) {
                local.rotateAroundY(yaw)
              }
        }
        val loc = base.clone().add(local)
        if (hat.randomOffset.lengthSquared() > 0) {
          loc.add(
              (Random.nextDouble() * 2 - 1) * hat.randomOffset.x,
              (Random.nextDouble() * 2 - 1) * hat.randomOffset.y,
              (Random.nextDouble() * 2 - 1) * hat.randomOffset.z,
          )
        }
        repeat(hat.count) { spawn(world, loc, particle, spec) }
      }
    }
  }

  private fun offsets(hat: HatDefinition, tick: Int): List<List<Vector>> {
    val spin = if (hat.animated) tick * 0.12 else 0.0
    val spun = { points: List<Vector> ->
      if (spin == 0.0) points else points.map { it.clone().rotateAroundY(spin) }
    }
    return when (hat.type) {
      HatType.HALO -> listOf(spun(ring(12, 0.8)))
      HatType.CAPE -> listOf(cape())
      HatType.CRYSTAL -> listOf(crystal())
      HatType.CREEPER_HAT -> listOf(creeper())
      HatType.ANGEL_WINGS -> listOf(wings(spread = 0.7, lift = 0.5))
      HatType.ARCH -> arch().map { spun(it) }
      HatType.TRAIL -> listOf(listOf(Vector()))
      HatType.TORNADO -> listOf(spun(tornado()))
      HatType.SPHERE -> listOf(spun(sphere(0.7)))
      HatType.HOOP -> listOf(spun(hoop(0.7)))
      HatType.WINGS -> listOf(wings(spread = 0.55, lift = 0.35))
      HatType.UNSUPPORTED -> emptyList()
    }
  }

  private fun ring(count: Int, radius: Double): List<Vector> {
    val step = 2.0 * PI / count
    return (0 until count).map { i ->
      val angle = i * step
      Vector(radius * cos(angle), 0.0, radius * sin(angle))
    }
  }

  private fun cape(): List<Vector> {
    val xs = doubleArrayOf(-0.32, -0.16, 0.0, 0.16, 0.32)
    val points = mutableListOf<Vector>()
    for (x in xs.indices) {
      for (y in 0 until 6) {
        points += Vector(xs[x] - x * 0.02, -y * 0.18, -0.28 - y * 0.1)
      }
    }
    return points
  }

  private fun crystal(): List<Vector> {
    val points = mutableListOf<Vector>()
    for (y in listOf(0.7, 1.0, 1.3, 1.6, 1.9)) points += Vector(0.0, y, 0.0)
    for (y in listOf(1.0, 1.3, 1.6)) {
      points += Vector(0.2, y, 0.0)
      points += Vector(-0.2, y, 0.0)
      points += Vector(0.0, y, 0.2)
      points += Vector(0.0, y, -0.2)
    }
    points += Vector(0.4, 1.3, 0.0)
    points += Vector(-0.4, 1.3, 0.0)
    points += Vector(0.0, 1.3, 0.4)
    points += Vector(0.0, 1.3, -0.4)
    return points
  }

  private fun creeper(): List<Vector> {
    val pixels =
        listOf(
            1 to 6,
            2 to 6,
            5 to 6,
            6 to 6,
            1 to 5,
            2 to 5,
            5 to 5,
            6 to 5,
            3 to 3,
            4 to 3,
            2 to 2,
            3 to 2,
            4 to 2,
            5 to 2,
            2 to 1,
            5 to 1,
        )
    val scale = 0.12
    return pixels.map { (x, y) -> Vector((x - 3.5) * scale, (y - 3.5) * scale, 0.35) }
  }

  private fun wings(spread: Double, lift: Double): List<Vector> {
    val points = mutableListOf<Vector>()
    for (side in listOf(-1.0, 1.0)) {
      for (i in 0 until 10) {
        val t = i / 9.0
        points +=
            Vector(
                side * (0.2 + spread * t),
                0.25 + sin(t * PI) * lift,
                -0.2 - 0.2 * t,
            )
      }
    }
    return points
  }

  private fun arch(): List<List<Vector>> {
    val zs = listOf(0.6, 0.3, 0.0, -0.3, -0.6)
    val count = 16
    return zs.map { z ->
      (0 until count).map { i ->
        val angle = PI * i / (count - 1)
        Vector(2.3 * cos(angle), 2.3 * sin(angle), z)
      }
    }
  }

  private fun tornado(): List<Vector> {
    return (0 until 16).map { i ->
      val t = i / 16.0
      val radius = 0.15 + t * 0.45
      val angle = t * 4.0 * PI
      Vector(radius * cos(angle), t * 1.4, radius * sin(angle))
    }
  }

  private fun sphere(radius: Double): List<Vector> {
    val points = mutableListOf<Vector>()
    val rings = 6
    val slices = 8
    for (r in 0..rings) {
      val v = PI * r / rings
      val y = radius * cos(v)
      val ringR = radius * sin(v)
      for (s in 0 until slices) {
        val u = 2.0 * PI * s / slices
        points += Vector(ringR * cos(u), y, ringR * sin(u))
      }
    }
    return points
  }

  private fun hoop(radius: Double): List<Vector> {
    val count = 14
    val step = 2.0 * PI / count
    return (0 until count).map { i ->
      val angle = i * step
      Vector(radius * cos(angle), radius * sin(angle), 0.0)
    }
  }

  private fun resolve(name: String): Particle? {
    val key = name.uppercase()
    if (particleCache.containsKey(key)) return particleCache[key]
    val mapped = particleAliases[key] ?: key
    val particle =
        Particle.entries.firstOrNull { it.name.equals(mapped, ignoreCase = true) }
            ?: Particle.entries.firstOrNull { it.name.equals(key, ignoreCase = true) }
    particleCache[key] = particle
    return particle
  }

  private fun spawn(
      world: World,
      loc: Location,
      particle: Particle,
      spec: HatParticleSpec,
  ) {
    val color =
        when {
          spec.randomColor -> Color.fromRGB(Random.nextInt(0xFFFFFF + 1))
          spec.color != null -> spec.color
          else -> Color.WHITE
        }
    val dataType = particle.dataType
    when {
      DustOptions::class.java.isAssignableFrom(dataType) ->
          world.spawnParticle(particle, loc, 1, 0.0, 0.0, 0.0, 0.0, DustOptions(color, spec.size))
      ItemStack::class.java.isAssignableFrom(dataType) -> {
        val material = spec.items.randomOrNull() ?: return
        world.spawnParticle(particle, loc, 1, 0.0, 0.0, 0.0, 0.05, ItemStack(material))
      }
      else -> world.spawnParticle(particle, loc, 1, 0.0, 0.0, 0.0, 0.0)
    }
  }
}
