package icu.oyasai.citiesskymine.debugstick

import java.lang.reflect.Method
import java.util.LinkedHashMap
import org.bukkit.Bukkit
import org.bukkit.block.data.BlockData

class BlockDataPropertyAccess {

  fun properties(blockData: BlockData): List<DebugBlockProperty> {
    val parsed = parse(blockData.getAsString())
    return propertiesFromNms(blockData, parsed) ?: propertiesFromString(blockData, parsed)
  }

  fun withPropertyValue(blockData: BlockData, propertyName: String, value: String): BlockData? {
    val parsed = parse(blockData.getAsString())
    if (!parsed.properties.containsKey(propertyName)) {
      return null
    }

    val changed = LinkedHashMap(parsed.properties)
    changed[propertyName] = value
    return runCatching { Bukkit.createBlockData(format(parsed.blockId, changed)) }.getOrNull()
  }

  private fun propertiesFromNms(
      blockData: BlockData,
      parsed: ParsedBlockData,
  ): List<DebugBlockProperty>? {
    val state = invoke(blockData, "getState") ?: return null
    val rawProperties = invoke(state, "getProperties") as? Iterable<*> ?: return null
    val result =
        rawProperties.mapNotNull { rawProperty ->
          val property = rawProperty ?: return@mapNotNull null
          val name = invoke(property, "getName") as? String ?: return@mapNotNull null
          val possibleValues =
              invoke(property, "getPossibleValues") as? Iterable<*> ?: return@mapNotNull null
          val currentValue = invoke(state, "getValue", property)
          val values =
              possibleValues.mapNotNull { rawValue ->
                rawValue?.let { propertyValueName(property, it) }
              }
          val current =
              currentValue?.let { propertyValueName(property, it) }
                  ?: parsed.properties[name]
                  ?: return@mapNotNull null

          DebugBlockProperty(name, values.distinct(), current)
        }

    return result.ifEmpty { null }
  }

  private fun propertiesFromString(
      blockData: BlockData,
      parsed: ParsedBlockData,
  ): List<DebugBlockProperty> =
      parsed.properties.map { (name, current) ->
        DebugBlockProperty(
            name = name,
            values = fallbackValues(blockData, parsed, name, current),
            currentValue = current,
        )
      }

  private fun fallbackValues(
      blockData: BlockData,
      parsed: ParsedBlockData,
      propertyName: String,
      currentValue: String,
  ): List<String> {
    val candidates = linkedSetOf<String>()
    when {
      currentValue == "true" || currentValue == "false" -> {
        candidates += listOf("true", "false")
      }
      currentValue.toIntOrNull() != null -> {
        candidates += (0..32).map { it.toString() }
      }
      else -> {
        candidates += commonValueCandidates(propertyName)
      }
    }
    candidates += currentValue

    val valid =
        candidates.filter { candidate ->
          withPropertyValue(blockData, propertyName, candidate)?.let { changed ->
            parse(changed.getAsString()).properties[propertyName] == candidate
          } == true
        }

    return sortValues(valid.distinct())
  }

  private fun commonValueCandidates(propertyName: String): List<String> {
    val values = linkedSetOf<String>()
    values +=
        listOf(
            "north",
            "east",
            "south",
            "west",
            "up",
            "down",
            "x",
            "y",
            "z",
            "top",
            "bottom",
            "upper",
            "lower",
            "left",
            "right",
            "single",
            "none",
            "side",
            "low",
            "tall",
            "floor",
            "wall",
            "ceiling",
            "single_wall",
            "double_wall",
            "head",
            "foot",
            "straight",
            "inner_left",
            "inner_right",
            "outer_left",
            "outer_right",
            "north_south",
            "east_west",
            "ascending_east",
            "ascending_west",
            "ascending_north",
            "ascending_south",
            "south_east",
            "south_west",
            "north_west",
            "north_east",
            "compare",
            "subtract",
            "save",
            "load",
            "corner",
            "data",
            "normal",
            "sticky",
            "small",
            "large",
            "tip_merge",
            "tip",
            "frustum",
            "middle",
            "base",
            "inactive",
            "active",
            "cooldown",
            "unstable",
            "partial",
            "full",
        )
    if (propertyName == "orientation") {
      for (vertical in listOf("up", "down")) {
        for (horizontal in listOf("north", "east", "south", "west")) {
          values += "${vertical}_$horizontal"
        }
      }
    }
    return values.toList()
  }

  private fun sortValues(values: List<String>): List<String> {
    if (values.all { it.toIntOrNull() != null }) {
      return values.sortedBy { it.toInt() }
    }
    return values
  }

  private fun propertyValueName(property: Any, value: Any): String? =
      invoke(property, "getName", value) as? String ?: value.toString().lowercase()

  private fun invoke(target: Any, name: String, vararg args: Any?): Any? {
    for (method in target.javaClass.methods.matching(name, args)) {
      val result =
          runCatching {
                method.isAccessible = true
                method.invoke(target, *args)
              }
              .getOrNull()
      if (result != null) {
        return result
      }
    }

    for (method in target.javaClass.declaredMethods.matching(name, args)) {
      val result =
          runCatching {
                method.isAccessible = true
                method.invoke(target, *args)
              }
              .getOrNull()
      if (result != null) {
        return result
      }
    }
    return null
  }

  private fun Array<Method>.matching(name: String, args: Array<out Any?>): List<Method> =
      filter { method ->
        method.name == name &&
            method.parameterCount == args.size &&
            method.parameterTypes.zip(args).all { (type, arg) -> accepts(type, arg) }
      }

  private fun accepts(type: Class<*>, arg: Any?): Boolean {
    if (arg == null) {
      return !type.isPrimitive
    }
    val effectiveType = primitiveWrappers[type] ?: type
    return effectiveType.isAssignableFrom(arg.javaClass)
  }

  private fun parse(raw: String): ParsedBlockData {
    val start = raw.indexOf('[')
    if (start < 0) {
      return ParsedBlockData(raw, linkedMapOf())
    }

    val end = raw.lastIndexOf(']')
    if (end <= start) {
      return ParsedBlockData(raw, linkedMapOf())
    }

    val blockId = raw.substring(0, start)
    val states = raw.substring(start + 1, end)
    val properties = linkedMapOf<String, String>()
    if (states.isNotBlank()) {
      for (part in states.split(',')) {
        val index = part.indexOf('=')
        if (index > 0 && index < part.length - 1) {
          properties[part.substring(0, index)] = part.substring(index + 1)
        }
      }
    }
    return ParsedBlockData(blockId, properties)
  }

  private fun format(blockId: String, properties: Map<String, String>): String {
    if (properties.isEmpty()) {
      return blockId
    }
    return buildString {
      append(blockId)
      append('[')
      append(properties.entries.joinToString(",") { (name, value) -> "$name=$value" })
      append(']')
    }
  }

  private data class ParsedBlockData(
      val blockId: String,
      val properties: LinkedHashMap<String, String>,
  )

  companion object {
    private val primitiveWrappers =
        mapOf<Class<*>, Class<*>>(
            java.lang.Boolean.TYPE to java.lang.Boolean::class.java,
            java.lang.Byte.TYPE to java.lang.Byte::class.java,
            java.lang.Short.TYPE to java.lang.Short::class.java,
            java.lang.Integer.TYPE to java.lang.Integer::class.java,
            java.lang.Long.TYPE to java.lang.Long::class.java,
            java.lang.Float.TYPE to java.lang.Float::class.java,
            java.lang.Double.TYPE to java.lang.Double::class.java,
            java.lang.Character.TYPE to java.lang.Character::class.java,
        )
  }
}

data class DebugBlockProperty(val name: String, val values: List<String>, val currentValue: String)
