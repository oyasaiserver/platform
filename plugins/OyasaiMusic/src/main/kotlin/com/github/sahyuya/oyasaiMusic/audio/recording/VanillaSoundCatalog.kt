package com.github.sahyuya.oyasaiMusic.audio

import org.bukkit.plugin.java.JavaPlugin
import java.io.File
import java.util.Random
import java.util.concurrent.ConcurrentHashMap

/**
 * データフォルダ内の sound-catalog.yml（JSON互換YAML）をサウンド定義として扱う。
 * Paperの廃止予定になった Sound.values()/Sound#getKey() には依存しない。
 */
object VanillaSoundCatalog {

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

    private val primaryGroups = listOf("ambient", "block", "enchant", "entity", "event", "item", "music", "ui")
    @Volatile private var definitions: List<SoundDefinition> = emptyList()
    @Volatile private var byEvent: Map<String, SoundDefinition> = emptyMap()
    @Volatile private var byId: Map<String, SoundDefinition> = emptyMap()

    /** 初回起動時にJAR内の定義をデータフォルダへ展開し、そのファイルを読み込む。 */
    fun initialize(plugin: JavaPlugin): Int {
        val file = File(plugin.dataFolder, "sound-catalog.yml")
        if (!file.exists()) plugin.saveResource("sound-catalog.yml", false)
        return reload(file)
    }

    /** `/oyasaimusic reload` からも呼び出す、編集済みカタログの再読込。 */
    fun reload(plugin: JavaPlugin): Int = reload(File(plugin.dataFolder, "sound-catalog.yml"))

    @Synchronized
    private fun reload(file: File): Int {
        require(file.isFile) { "sound-catalog.yml が見つかりません: ${file.absolutePath}" }
        val loaded = parseDefinitions(file.readText(Charsets.UTF_8))
        require(loaded.isNotEmpty()) { "sound-catalog.yml からSoundEventを読み取れませんでした: ${file.absolutePath}" }
        definitions = loaded
        byEvent = loaded.associateBy { it.eventKey }
        byId = loaded.mapNotNull { definition -> definition.idPrefix?.let { it to definition } }.toMap()
        return loaded.size
    }

    fun eventKeys(): List<String> = definitions.map { it.eventKey }
    fun find(eventKey: String): SoundDefinition? = byEvent[eventKey.removePrefix("minecraft:").lowercase()]
    fun resolveSignLine(line: String?): SoundSelection? {
        val parts = line?.trim()?.split(':', limit = 2) ?: return null
        if (parts.size != 2) return null
        return byId[parts[0]]?.selectionForPattern(parts[1].toIntOrNull() ?: return null)
    }

    /** JSON互換YAMLの sounds 配列を直接読む。Bukkitのドット区切りパス解釈を回避する。 */
    private fun parseDefinitions(text: String): List<SoundDefinition> {
        val eventPattern = Regex("\\\"([a-z0-9_.]+)\\\"\\s*:\\s*\\{\\s*\\\"sounds\\\"\\s*:\\s*\\[")
        val patternsByEvent = linkedMapOf<String, List<Pattern>>()
        eventPattern.findAll(text).forEach { match ->
            val arrayStart = match.range.last
            val arrayEnd = closingIndex(text, arrayStart, '[', ']') ?: return@forEach
            val entries = splitTopLevel(text.substring(arrayStart + 1, arrayEnd))
            if (entries.isNotEmpty()) {
                patternsByEvent[match.groupValues[1]] = entries.mapIndexed { index, entry ->
                    val weight = Regex("\\\"weight\\\"\\s*:\\s*(\\d+)").find(entry)?.groupValues?.get(1)?.toIntOrNull()?.coerceAtLeast(1) ?: 1
                    Pattern(index + 1, weight)
                }
            }
        }

        val indexed = patternsByEvent.keys.mapNotNull { eventKey ->
            val parts = eventKey.split('.')
            val group = parts.firstOrNull() ?: return@mapNotNull null
            if (group !in primaryGroups || parts.size < 2) return@mapNotNull null
            EventParts(eventKey, group, parts.drop(1))
        }
        val idByEvent = HashMap<String, String>()
        primaryGroups.forEachIndexed { groupIndex, group ->
            val numbered = indexed.filter { it.group == group }
                .filterNot { group == "ui" && it.tail.firstOrNull() == "button" }
            val families = numbered.map { it.tail.first() }.distinct().sorted()
            numbered.groupBy { it.tail.first() }.forEach { (family, familyEvents) ->
                val familyIndex = families.indexOf(family) + 1
                val actions = familyEvents.map { it.tail.drop(1).joinToString(".") }.distinct().sorted()
                familyEvents.forEach { entry ->
                    val actionIndex = actions.indexOf(entry.tail.drop(1).joinToString(".")) + 1
                    idByEvent[entry.eventKey] = "${groupIndex + 1}.$familyIndex.$actionIndex"
                }
            }
        }
        return patternsByEvent.entries.sortedBy { it.key }.map { (eventKey, patterns) ->
            SoundDefinition(eventKey, idByEvent[eventKey], patterns)
        }
    }

    private fun closingIndex(text: String, start: Int, open: Char, close: Char): Int? {
        var depth = 0
        var quoted = false
        var escaped = false
        for (index in start until text.length) {
            val char = text[index]
            if (quoted) {
                if (escaped) escaped = false else if (char == '\\') escaped = true else if (char == '"') quoted = false
                continue
            }
            when (char) {
                '"' -> quoted = true
                open -> depth++
                close -> if (--depth == 0) return index
            }
        }
        return null
    }

    private fun splitTopLevel(text: String): List<String> {
        val entries = mutableListOf<String>()
        var start = 0
        var depth = 0
        var quoted = false
        var escaped = false
        text.forEachIndexed { index, char ->
            if (quoted) {
                if (escaped) escaped = false else if (char == '\\') escaped = true else if (char == '"') quoted = false
            } else when (char) {
                '"' -> quoted = true
                '{', '[' -> depth++
                '}', ']' -> depth--
                ',' -> if (depth == 0) {
                    text.substring(start, index).trim().takeIf { it.isNotEmpty() }?.let(entries::add)
                    start = index + 1
                }
            }
        }
        text.substring(start).trim().takeIf { it.isNotEmpty() }?.let(entries::add)
        return entries
    }
}
