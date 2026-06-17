package icu.oyasai.citiesskymine.cloud

import kotlin.math.exp
import kotlin.math.floor
import kotlin.math.max
import org.bukkit.Location
import org.bukkit.Material

data class CloudOptions(
    val size: Int = 128,
    val height: Int = 48,
    val density: Double = 0.72,
    val yOffset: Int = 100,
    val seed: Int? = null,
    val resolvedSeed: Int? = null,
    val scale: Double = 0.038,
    val octaves: Int = 5,
    val lacunarity: Double = 2.0,
    val gain: Double = 0.55,
    val warpAmp: Double = 12.0,
    val yCenter: Double = 0.50,
    val ySigma: Double = 0.38,
) {
  val effectiveSeed: Int
    get() = resolvedSeed ?: seed ?: 42
}

data class CloudBuildPlan(val placements: List<CloudPlacement>)

data class CloudPlacement(val x: Int, val y: Int, val z: Int, val material: Material)

object CloudGenerator {

  fun estimateBlockCount(options: CloudOptions): Long {
    val step = max(1, maxOf(options.size, options.height) / 32)
    var sampled = 0L
    var filled = 0L
    var y = 0
    while (y < options.height) {
      var z = 0
      while (z < options.size) {
        var x = 0
        while (x < options.size) {
          sampled++
          if (isCloud(density(x, y, z, options))) filled++
          x += step
        }
        z += step
      }
      y += step
    }
    val total = options.size.toLong() * options.height.toLong() * options.size.toLong()
    return if (sampled == 0L) 0L else (filled * total) / sampled
  }

  fun buildPlan(origin: Location, options: CloudOptions): CloudBuildPlan {
    val placements = ArrayList<CloudPlacement>()
    val baseX = origin.blockX
    val baseY = origin.blockY
    val baseZ = origin.blockZ
    val offset = -(options.size / 2)

    for (y in 0 until options.height) {
      val hp =
          exp(
              -0.5 *
                  square(
                      (y - options.height * options.yCenter) /
                          max(options.height * options.ySigma, 0.1)
                  )
          )
      if (hp < 0.05) continue

      for (z in 0 until options.size) {
        for (x in 0 until options.size) {
          if (!isCloud(density(x, y, z, options, hp))) continue
          placements +=
              CloudPlacement(baseX + offset + x, baseY + y, baseZ + offset + z, Material.COBWEB)
        }
      }
    }
    return CloudBuildPlan(placements)
  }

  private fun isCloud(density: Double): Boolean = density >= 0.25

  private fun density(x: Int, y: Int, z: Int, options: CloudOptions): Double {
    val hp =
        exp(
            -0.5 *
                square(
                    (y - options.height * options.yCenter) /
                        max(options.height * options.ySigma, 0.1)
                )
        )
    return density(x, y, z, options, hp)
  }

  private fun density(
      x: Int,
      y: Int,
      z: Int,
      options: CloudOptions,
      heightProfile: Double,
  ): Double {
    val seed = options.effectiveSeed
    val wx =
        fbm(
            x + 1.7,
            y + 9.2,
            z + 3.1,
            3,
            options.lacunarity,
            options.gain,
            options.scale * 0.8,
            seed * 1.3,
        ) * options.warpAmp
    val wz =
        fbm(
            x + 8.3,
            y + 2.8,
            z + 7.6,
            3,
            options.lacunarity,
            options.gain,
            options.scale * 0.8,
            seed * 2.7 + 100.0,
        ) * options.warpAmp
    val raw =
        fbm(
            x + wx,
            y * 0.4,
            z + wz,
            options.octaves,
            options.lacunarity,
            options.gain,
            options.scale,
            seed * 0.9,
        )
    val d = (raw + 1.0) * 0.5 * heightProfile
    val threshold = 1.0 - options.density
    return ((d - threshold) / max(options.density, 0.01)).coerceIn(0.0, 1.0)
  }

  private fun fbm(
      x: Double,
      y: Double,
      z: Double,
      octaves: Int,
      lacunarity: Double,
      gain: Double,
      scale: Double,
      base: Double,
  ): Double {
    var value = 0.0
    var amp = 1.0
    var freq = scale
    var maxValue = 0.0
    repeat(octaves) {
      value +=
          valueNoise3(x * freq + base * 3.7, y * freq + base * 1.3, z * freq + base * 2.9) * amp
      maxValue += amp
      amp *= gain
      freq *= lacunarity
    }
    return if (maxValue <= 1.0e-9) 0.0 else value / maxValue
  }

  private fun valueNoise3(x: Double, y: Double, z: Double): Double {
    val xi = floor(x).toInt()
    val yi = floor(y).toInt()
    val zi = floor(z).toInt()
    val fx = x - xi
    val fy = y - yi
    val fz = z - zi
    val sx = smooth(fx)
    val sy = smooth(fy)
    val sz = smooth(fz)

    fun h(dx: Int, dy: Int, dz: Int): Double = hash01(xi + dx, yi + dy, zi + dz) * 2.0 - 1.0

    val x00 = lerp(h(0, 0, 0), h(1, 0, 0), sx)
    val x10 = lerp(h(0, 1, 0), h(1, 1, 0), sx)
    val x01 = lerp(h(0, 0, 1), h(1, 0, 1), sx)
    val x11 = lerp(h(0, 1, 1), h(1, 1, 1), sx)
    val y0 = lerp(x00, x10, sy)
    val y1 = lerp(x01, x11, sy)
    return lerp(y0, y1, sz)
  }

  private fun hash01(x: Int, y: Int, z: Int): Double {
    var n = x * 73856093 xor (y * 19349663) xor (z * 83492791)
    n = n xor (n ushr 13)
    n *= 1274126177
    n = n xor (n ushr 16)
    return (n.toLong() and 0xFFFFFFFFL).toDouble() / 4294967295.0
  }

  private fun smooth(v: Double): Double = v * v * (3.0 - 2.0 * v)

  private fun lerp(a: Double, b: Double, t: Double): Double = a + (b - a) * t

  private fun square(v: Double): Double = v * v
}
