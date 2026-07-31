package com.github.sahyuya.oyasaiMusic.audio

import com.google.gson.JsonObject
import com.google.gson.JsonParser
import java.io.File
import java.util.Random
import java.util.concurrent.ConcurrentHashMap
import org.bukkit.plugin.java.JavaPlugin

/**
 * データフォルダ内の sound-catalog.json をサウンド定義として扱う。 Paperの廃止予定になった Sound.values()/Sound#getKey() には依存しない。
 */
object VanillaSoundCatalog {

  private const val CATALOG_FILE_NAME = "sound-catalog.json"

  private data class EventParts(val eventKey: String, val group: String, val tail: List<String>)

  data class Pattern(val number: Int, val weight: Int)

  data class SoundSelection(val eventKey: String, val seed: Long)

  data class SoundDefinition(
      val eventKey: String,
      val idPrefix: String?,
      private val patterns: List<Pattern>,
  ) {
    private val seedCache = ConcurrentHashMap<Int, Long>()

    fun availablePatterns(): List<Int> = patterns.map { it.number }

    fun selectionForPattern(pattern: Int): SoundSelection? {
      if (patterns.none { it.number == pattern }) return null
      return SoundSelection(eventKey, seedCache.computeIfAbsent(pattern) { seedForPattern(it) })
    }

    private fun seedForPattern(pattern: Int): Long {
      val totalWeight = patterns.sumOf { it.weight }.coerceAtLeast(1)
      for (seed in 0L..1_000_000L) {
        var remaining = Random(seed).nextInt(totalWeight)
        for (candidate in patterns) {
          remaining -= candidate.weight
          if (remaining < 0) {
            if (candidate.number == pattern) return seed
            break
          }
        }
      }
      return pattern.toLong()
    }
  }

  private val primaryGroups =
      listOf("ambient", "block", "enchant", "entity", "event", "item", "music", "ui")
  @Volatile private var definitions: List<SoundDefinition> = emptyList()
  @Volatile private var byEvent: Map<String, SoundDefinition> = emptyMap()
  @Volatile private var byId: Map<String, SoundDefinition> = emptyMap()

  /** 初回起動時にJAR内のJSON定義をデータフォルダへ展開し、そのファイルを読み込む。 */
  fun initialize(plugin: JavaPlugin): Int {
    val file = File(plugin.dataFolder, CATALOG_FILE_NAME)
    if (!file.exists()) plugin.saveResource(CATALOG_FILE_NAME, false)
    return reload(file)
  }

  /** `/oyasaimusic reload` からも呼び出す、編集済みカタログの再読込。 */
  fun reload(plugin: JavaPlugin): Int = reload(File(plugin.dataFolder, CATALOG_FILE_NAME))

  @Synchronized
  private fun reload(file: File): Int {
    require(file.isFile) { "$CATALOG_FILE_NAME が見つかりません: ${file.absolutePath}" }
    val loaded = parseDefinitions(file.readText(Charsets.UTF_8))
    require(loaded.isNotEmpty()) {
      "$CATALOG_FILE_NAME からSoundEventを読み取れませんでした: ${file.absolutePath}"
    }
    definitions = loaded
    byEvent = loaded.associateBy { it.eventKey }
    byId = loaded.mapNotNull { definition -> definition.idPrefix?.let { it to definition } }.toMap()
    return loaded.size
  }

  fun eventKeys(): List<String> = definitions.map { it.eventKey }

  fun find(eventKey: String): SoundDefinition? =
      byEvent[eventKey.removePrefix("minecraft:").lowercase()]

  fun resolveSignLine(line: String?): SoundSelection? {
    val parts = line?.trim()?.split(':', limit = 2) ?: return null
    if (parts.size != 2) return null
    return byId[parts[0]]?.selectionForPattern(parts[1].toIntOrNull() ?: return null)
  }

  /** JSONの sounds 配列を解析する。イベント名に含まれるドットはJSONキーとしてそのまま扱う。 */
  private fun parseDefinitions(text: String): List<SoundDefinition> {
    val patternsByEvent = linkedMapOf<String, List<Pattern>>()
    val root = JsonParser.parseString(text).asJsonObject
    root.entrySet().forEach { (rawEventKey, value) ->
      val definition = value.takeIf { it.isJsonObject }?.asJsonObject ?: return@forEach
      val sounds = definition.getAsJsonArray("sounds") ?: return@forEach
      val patterns =
          sounds.mapIndexed { index, sound -> Pattern(index + 1, sound.weight().coerceAtLeast(1)) }
      if (patterns.isNotEmpty()) {
        patternsByEvent[rawEventKey.removePrefix("minecraft:").lowercase()] = patterns
      }
    }

    val indexed =
        patternsByEvent.keys.mapNotNull { eventKey ->
          val parts = eventKey.split('.')
          val group = parts.firstOrNull() ?: return@mapNotNull null
          if (group !in primaryGroups || parts.size < 2) return@mapNotNull null
          EventParts(eventKey, group, parts.drop(1))
        }
    val idByEvent = HashMap<String, String>()
    primaryGroups.forEachIndexed { groupIndex, group ->
      val numbered =
          indexed
              .filter { it.group == group }
              .filterNot { group == "ui" && it.tail.firstOrNull() == "button" }
      val families = numbered.map { it.tail.first() }.distinct().sorted()
      numbered
          .groupBy { it.tail.first() }
          .forEach { (family, familyEvents) ->
            val familyIndex = families.indexOf(family) + 1
            val actions = familyEvents.map { it.tail.drop(1).joinToString(".") }.distinct().sorted()
            familyEvents.forEach { entry ->
              val actionIndex = actions.indexOf(entry.tail.drop(1).joinToString(".")) + 1
              idByEvent[entry.eventKey] = "${groupIndex + 1}.$familyIndex.$actionIndex"
            }
          }
    }
    return patternsByEvent.entries
        .sortedBy { it.key }
        .map { (eventKey, patterns) -> SoundDefinition(eventKey, idByEvent[eventKey], patterns) }
  }

  private fun com.google.gson.JsonElement.weight(): Int {
    val sound = takeIf { it.isJsonObject }?.asJsonObject ?: return 1
    return sound.intOrNull("weight") ?: 1
  }

  private fun JsonObject.intOrNull(member: String): Int? =
      get(member)?.takeIf { it.isJsonPrimitive && it.asJsonPrimitive.isNumber }?.asInt
}
