package io.oyasai.toolbox

import io.oyasai.OyasaiVehicles
import java.time.format.DateTimeFormatter
import java.util.Locale
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.TextComponent
import net.kyori.adventure.text.event.ClickEvent
import net.kyori.adventure.text.event.HoverEvent
import net.kyori.adventure.text.format.TextColor
import net.kyori.adventure.text.serializer.legacy.LegacyComponentSerializer
import org.bukkit.Bukkit
import org.bukkit.Color
import org.bukkit.Location
import org.bukkit.Material
import org.bukkit.entity.Entity
import org.bukkit.entity.Player
import org.bukkit.inventory.ItemFlag
import org.bukkit.inventory.ItemStack
import org.bukkit.inventory.meta.ItemMeta
import org.bukkit.plugin.java.JavaPlugin
import org.bukkit.util.BoundingBox
import org.bukkit.util.Transformation
import org.bukkit.util.Vector
import org.joml.Quaternionf
import org.joml.Vector3f

private const val DONATION_URL = "https://wiki.oyasai.io/d/%b4%f3%c9%d5%a4%ce%a4%aa%b4%ea%a4%a4"
private const val NETWORK_MODE_COUNT = 4
private val legacyItemTextSerializer = LegacyComponentSerializer.legacySection()
private val compassYawByDirection =
    mapOf(
        "e" to -90.0,
        "n" to -180.0,
        "s" to 0.0,
        "w" to 90.0,
        "ne" to -135.0,
        "nw" to 135.0,
        "se" to -45.0,
        "sw" to 45.0,
        "ene" to -112.5,
        "ese" to -67.5,
        "nne" to -157.5,
        "nnw" to 157.5,
        "sse" to -22.5,
        "ssw" to 22.5,
        "wnw" to 112.5,
        "wsw" to 67.5)

private fun isLegacyColorCode(code: Char): Boolean =
    code.lowercaseChar() in "0123456789abcdefklmnorx"

var toolboxPlugin: JavaPlugin? = null

fun requireToolboxPlugin(): JavaPlugin =
    requireNotNull(toolboxPlugin) { "Plugin is not initialized" }

data class NetworkModeSetting(var mode: Int = 0) {
  fun nextMode() {
    mode = (mode + 1) % NETWORK_MODE_COUNT
  }

  fun currentModeLabel(): String =
      when (mode) {
        0 -> "Ultra"
        1 -> "High"
        2 -> "Medium"
        3 -> "Low"
        else -> "Unknown"
      }

  fun currentModeIndex(): Int = mode
}

object UnderBlockPattern {
  private val list = mutableMapOf<Material, Double>()

  fun loadConfig(): Int {
    list.clear()
    val yml = CustomYaml("UnderBlockIsSpeed.yml")
    yml.getKeys(false).forEach { key ->
      Material.getMaterial(key.uppercase(Locale.ROOT))?.let { list[it] = yml.getDouble(key, 1.0) }
    }
    return list.size
  }

  fun getMaterialToDouble(material: Material): Double = (list[material] ?: 1.0).coerceAtLeast(0.0)
}

fun translateColors(text: String, char: Char = '&'): String {
  val builder = StringBuilder(text.length)
  var index = 0
  while (index < text.length) {
    val current = text[index]
    if (current == char && index + 1 < text.length && isLegacyColorCode(text[index + 1])) {
      builder.append('§')
      builder.append(text[index + 1].lowercaseChar())
      index += 2
    } else {
      builder.append(current)
      index++
    }
  }
  return builder.toString()
}

fun stripColors(text: String): String {
  val builder = StringBuilder(text.length)
  var index = 0
  while (index < text.length) {
    if (text[index] == '§' && index + 1 < text.length && isLegacyColorCode(text[index + 1])) {
      index += 2
    } else {
      builder.append(text[index])
      index++
    }
  }
  return builder.toString()
}

fun buildTextComponent(message: String, color: Color = Color.WHITE): TextComponent =
    Component.text(message).color(TextColor.color(color.red, color.green, color.blue))

fun legacyTextComponent(text: String): Component =
    legacyItemTextSerializer.deserialize(translateColors(text))

fun legacyTextString(component: Component?): String? =
    component?.let(legacyItemTextSerializer::serialize)

val toolboxDateFormat: DateTimeFormatter = DateTimeFormatter.ofPattern("yyyy/MM/dd HH時mm分")
val toolboxTimeFormat: DateTimeFormatter = DateTimeFormatter.ofPattern("HH:mm:ss:SSS")

var ItemMeta.legacyDisplayName: String?
  get() = legacyTextString(customName())
  set(value) {
    customName(value?.let(::legacyTextComponent))
  }

var ItemMeta.legacyLore: MutableList<String>?
  get() = lore()?.map(legacyItemTextSerializer::serialize)?.toMutableList()
  set(value) {
    lore(value?.map(::legacyTextComponent))
  }

fun decorateItemStack(itemStack: ItemStack, title: String?, lore: List<String>): ItemStack {
  val meta = itemStack.itemMeta ?: return itemStack
  meta.customName(legacyTextComponent(title ?: ""))
  meta.lore(lore.map(::legacyTextComponent))
  itemStack.itemMeta = meta
  return itemStack
}

fun hideItemStackMeta(itemStack: ItemStack): ItemStack {
  val meta = itemStack.itemMeta ?: return itemStack
  meta.addItemFlags(*ItemFlag.entries.toTypedArray())
  itemStack.itemMeta = meta
  return itemStack
}

fun sendDonationLink(player: Player) {
  player.sendMessage(translateColors("[OyasaiVehicles] &6寄付をしていただくと、&a寄付者向け機能&6がアンロックされます。"))
  val text1 = buildTextComponent("寄付ページはこちらから: ", Color.ORANGE)
  val text2 =
      buildTextComponent(DONATION_URL, Color.AQUA)
          .clickEvent(ClickEvent.openUrl(DONATION_URL))
          .hoverEvent(HoverEvent.showText(buildTextComponent("クリックでリンクを開く")))
  player.sendMessage(text1.append(text2))
}

fun parseYawFromCompassDirections(str: String): Double {
  return compassYawByDirection[str.lowercase(Locale.ROOT)] ?: str.toDoubleOrNull() ?: 0.0
}

fun copyTransformationValues(transformation: Transformation): Transformation =
    Transformation(
        Vector3f(transformation.translation),
        Quaternionf(transformation.leftRotation),
        Vector3f(transformation.scale),
        Quaternionf(transformation.rightRotation))

private fun <T : Entity> findNearbyEntitiesInWorld(
    entities: Iterable<T>,
    loc: Location,
    x: Double,
    y: Double,
    z: Double
): List<T> {
  val worldId = loc.world?.uid ?: return emptyList()
  val aabb = BoundingBox.of(loc, x, y, z)
  return entities.filter { entity ->
    entity.world.uid == worldId &&
        aabb.contains(entity.location.x, entity.location.y, entity.location.z)
  }
}

fun findNearbyPlayers(loc: Location, x: Double, y: Double, z: Double): List<Player> =
    findNearbyEntitiesInWorld(Bukkit.getOnlinePlayers(), loc, x, y, z)

fun findNearbyEntities(
    searchEntityList: List<Entity>,
    loc: Location,
    x: Double,
    y: Double,
    z: Double
): List<Entity> {
  return findNearbyEntitiesInWorld(searchEntityList, loc, x, y, z)
}

fun rayTraceEntityHit(
    start: Location,
    direction: Vector,
    maxDistance: Double,
    raySize: Double,
    searchEntityList: List<Entity>
): Boolean {
  if (maxDistance < 0.0) return false
  val worldId = start.world?.uid ?: return false
  val startPos = start.toVector()
  return searchEntityList.any { entity ->
    entity.world.uid == worldId &&
        entity.boundingBox.expand(raySize).rayTrace(startPos, direction, maxDistance) != null
  }
}

object Tools {
  var pl: JavaPlugin?
    get() = toolboxPlugin
    set(value) {
      toolboxPlugin = value
    }

  fun setPlugin(plugin: OyasaiVehicles) {
    pl = plugin
  }

  fun color(text: String, char: Char = '&'): String = translateColors(text, char)

  fun String.unColor(): String = stripColors(this)

  fun buildText(message: String, color: Color = Color.WHITE): TextComponent =
      buildTextComponent(message, color)

  val ldtFormat: DateTimeFormatter
    get() = toolboxDateFormat

  val timeFormat: DateTimeFormatter
    get() = toolboxTimeFormat

  fun ItemStack.addText(title: String?, lore: List<String>): ItemStack =
      decorateItemStack(this, title, lore)

  fun ItemStack.allHide(): ItemStack = hideItemStackMeta(this)

  fun getYawFromCardinalDirections(str: String): Double = parseYawFromCompassDirections(str)

  fun Transformation.copy(): Transformation = copyTransformationValues(this)

  fun getNearbyPlayers(loc: Location, x: Double, y: Double, z: Double): List<Player> =
      findNearbyPlayers(loc, x, y, z)

  fun getNearbyEntities(
      searchEntityList: List<Entity>,
      loc: Location,
      x: Double,
      y: Double,
      z: Double
  ): List<Entity> = findNearbyEntities(searchEntityList, loc, x, y, z)

  fun rayTraceEntities(
      start: Location,
      direction: Vector,
      maxDistance: Double,
      raySize: Double,
      searchEntityList: List<Entity>
  ): Boolean = rayTraceEntityHit(start, direction, maxDistance, raySize, searchEntityList)

  fun sendDonateLink(player: Player) {
    sendDonationLink(player)
  }
}
