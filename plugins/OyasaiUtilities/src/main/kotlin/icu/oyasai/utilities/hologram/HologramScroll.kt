package icu.oyasai.utilities.hologram

import org.bukkit.Location
import org.bukkit.entity.TextDisplay

/** 上下に空行を挟む。最後の要素は下端から入る行。 */
fun endRollWindow(lines: List<String>, window: Int, step: Int): List<String> {
  require(window in 1..20)
  val start = Math.floorMod(step, lines.size + window) - window
  return List(window + 1) { lines.getOrNull(start + it) ?: "" }
}

class HologramScroll(private val holo: Hologram) {
  private val lines = if (holo.vertical) verticalHologramLines(holo.lines) else holo.lines
  private var step = 0
  private var elapsed = 0
  private var proximityTicks = 0
  private var nearby = false
  var playing = false

  fun render(entities: List<TextDisplay>) {
    val window = endRollWindow(lines, holo.windowLines, step)
    val fraction = elapsed.toFloat() / holo.scrollSpeed
    for ((slot, entity) in entities.withIndex()) {
      if (elapsed == 0) entity.text(hologramComponent(window[slot]))
      HologramDisplay.transform(entity, holo.scale, (LINE_HEIGHT * holo.scale * fraction).toFloat())
      // 上端の退場行・下端の入場行をフェードさせて窓の境界を保つ。
      val opacity =
          when (slot) {
            0 -> 1f - fraction
            holo.windowLines -> fraction
            else -> 1f
          }
      entity.textOpacity = (opacity * 255).toInt().toByte()
    }
  }

  fun tick(entities: List<TextDisplay>) {
    val world = entities.firstOrNull()?.world ?: return
    if (holo.playMode == PlayMode.PROXIMITY && proximityTicks++ % 20 == 0) {
      val at = Location(world, holo.x, holo.y, holo.z)
      nearby =
          world.players.any {
            it.location.distanceSquared(at) <= holo.proximityRange * holo.proximityRange
          }
    }
    if (holo.playMode == PlayMode.PROXIMITY && !nearby) return
    if (holo.playMode == PlayMode.MANUAL && !playing) return
    if (lines.isEmpty()) return
    elapsed++
    if (elapsed >= holo.scrollSpeed) {
      elapsed = 0
      step = (step + 1) % (lines.size + holo.windowLines)
    }
    render(entities)
  }
}
