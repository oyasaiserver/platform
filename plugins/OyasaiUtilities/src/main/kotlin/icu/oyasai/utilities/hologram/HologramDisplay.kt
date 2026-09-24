package icu.oyasai.utilities.hologram

import icu.oyasai.utilities.OyasaiUtilities
import org.bukkit.Color
import org.bukkit.Location
import org.bukkit.NamespacedKey
import org.bukkit.World
import org.bukkit.entity.Display
import org.bukkit.entity.TextDisplay
import org.bukkit.persistence.PersistentDataType

/** DH の行間既定。行 i の位置は location.y − i * これ。 */
const val LINE_HEIGHT = 0.3

/**
 * DH 2.10.1 `v26_2.TextHologramRenderer.offsetPosition` は subtractY(0.5)。 アーマースタンドは
 * small+marker（`withArmorStandProperties(true, true)` = bit 1 と 16）。 marker の当たり判定は高さ
 * 0（`ArmorStand.MARKER_DIMENSIONS` = fixed(0,0)）で、 名札付け位置 `EntityAttachment.NAME_TAG` は
 * `AT_HEIGHT`（高さそのもの = 0）。 クライアントはそこへ +0.5 して描くので、文字の上端が行位置に来る。 TextDisplay は下端が原点。1行は 10px ×
 * 0.025。縦中央を名札の中央（行位置 − 半分）に置くため、この分だけ下げる。
 */
const val TEXT_HEIGHT = 10.0 * 0.025

private const val LINE_WIDTH = 10_000

fun lineY(holoY: Double, index: Int): Double = holoY - index * LINE_HEIGHT - TEXT_HEIGHT

object HologramDisplay {
  val markerKey by lazy { NamespacedKey(OyasaiUtilities.plugin, "hologram") }

  fun location(world: World, holo: Hologram, index: Int): Location =
      Location(world, holo.x, lineY(holo.y, index), holo.z)

  fun spawn(world: World, at: Location, holo: Hologram, line: String): TextDisplay =
      world.spawn(at, TextDisplay::class.java) { display -> style(display, holo, line) }

  fun style(display: TextDisplay, holo: Hologram, line: String) {
    display.text(hologramComponent(line))
    display.billboard = Display.Billboard.CENTER
    display.isDefaultBackground = false
    display.backgroundColor = Color.fromARGB(0)
    display.brightness = Display.Brightness(15, 15)
    display.isSeeThrough = holo.seeThrough
    holo.viewRange?.let { display.viewRange = it }
    display.lineWidth = LINE_WIDTH
    display.isPersistent = false
    display.persistentDataContainer.set(markerKey, PersistentDataType.STRING, holo.name)
  }
}
