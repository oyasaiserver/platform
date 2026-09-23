package icu.oyasai.utilities.hologram

import icu.oyasai.utilities.OyasaiUtilities
import org.bukkit.Color
import org.bukkit.Location
import org.bukkit.NamespacedKey
import org.bukkit.World
import org.bukkit.entity.Display
import org.bukkit.entity.TextDisplay
import org.bukkit.persistence.PersistentDataType

/** DH の location は最上行。行は 0.3 ずつ下へ積む。TextDisplay は下端基準なので行数×この値だけ下げる。 見た目の実測でこの値だけ変える。 */
const val LINE_HEIGHT = 0.3

private const val LINE_WIDTH = 10_000

object HologramDisplay {
  val markerKey by lazy { NamespacedKey(OyasaiUtilities.plugin, "hologram") }

  fun location(world: World, holo: Hologram): Location =
      Location(world, holo.x, holo.y - holo.lines.size * LINE_HEIGHT, holo.z)

  fun spawn(world: World, at: Location, holo: Hologram): TextDisplay =
      world.spawn(at, TextDisplay::class.java) { display -> style(display, holo) }

  fun style(display: TextDisplay, holo: Hologram) {
    display.text(hologramComponent(holo.lines))
    display.billboard = Display.Billboard.CENTER
    display.isDefaultBackground = false
    display.backgroundColor = Color.fromARGB(0)
    display.brightness = Display.Brightness(15, 15)
    display.isSeeThrough = true
    display.lineWidth = LINE_WIDTH
    display.isPersistent = false
    display.persistentDataContainer.set(markerKey, PersistentDataType.STRING, holo.name)
  }
}
