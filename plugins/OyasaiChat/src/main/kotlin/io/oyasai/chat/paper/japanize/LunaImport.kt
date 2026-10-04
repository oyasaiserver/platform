package io.oyasai.chat.paper.japanize

import java.io.File
import java.util.UUID
import org.bukkit.configuration.file.YamlConfiguration
import org.yaml.snakeyaml.Yaml
import org.yaml.snakeyaml.nodes.MappingNode
import org.yaml.snakeyaml.nodes.ScalarNode
import org.yaml.snakeyaml.nodes.Tag

/** Flat YAML data only. Never resolves names via HTTP or fabricates offline UUIDs. */
data class LunaImportPlan(
    val players: Map<UUID, Boolean>,
    val dictionary: Map<String, String>,
    val unresolved: Int,
    val invalidPlayers: Int = 0,
    val invalidDictionary: Int = 0,
    val invalidCache: Int = 0,
)

data class LunaImportData(
    val preferences: Map<String, Boolean>,
    val names: Map<String, UUID>,
    val dictionary: Map<String, String>,
    val invalidPlayers: Int = 0,
    val invalidDictionary: Int = 0,
    val invalidCache: Int = 0,
)

object LunaImport {
  fun flatYaml(file: File): Map<String, Any?> {
    require(file.isFile) { "Missing import file: ${file.name}" }
    // Bukkit loads mappings through MemorySection.set(), which rejects empty keys
    // before we can count invalid entries. Read the flat mapping directly instead.
    // Compose syntax nodes only: never construct YAML-tagged Java objects.
    val root = file.reader(Charsets.UTF_8).use { Yaml().compose(it) } ?: return emptyMap()
    require(root is MappingNode) { "${file.name} must contain a flat mapping" }
    return buildMap {
      root.value.forEach { entry ->
        val key = entry.keyNode
        require(key is ScalarNode) { "${file.name} keys must be scalars" }
        // Preserve literal names such as 00123 or On, rather than implicit YAML
        // numeric/boolean conversion. An empty scalar is retained for counting.
        require(!containsKey(key.value)) { "${file.name} contains duplicate keys" }
        val value = entry.valueNode
        val decoded =
            if (value is ScalarNode)
                when (value.tag) {
                  Tag.STR -> value.value
                  Tag.BOOL ->
                      value.value.lowercase(java.util.Locale.ROOT) in setOf("true", "yes", "on")
                  Tag.NULL -> null
                  else -> value // Invalid field type; parseData rejects it after checking the key.
                }
            else value
        put(key.value, decoded)
      }
    }
  }

  fun parse(
      preferences: Map<String, Any?>,
      cache: Map<String, Any?>,
      dictionary: Map<String, Any?>,
  ): LunaImportPlan {
    val data = parseData(preferences, cache, dictionary)
    val players =
        buildMap<UUID, Boolean> {
          data.preferences.forEach { (name, value) -> data.names[name]?.let { put(it, value) } }
        }
    return LunaImportPlan(
        players,
        data.dictionary,
        data.preferences.keys.count { it !in data.names },
        data.invalidPlayers,
        data.invalidDictionary,
        data.invalidCache,
    )
  }

  fun parseData(
      preferences: Map<String, Any?>,
      cache: Map<String, Any?>,
      dictionary: Map<String, Any?>,
  ): LunaImportData {
    var invalidPlayers = 0
    var invalidCache = 0
    val names = mutableMapOf<String, UUID>()
    val ambiguous = mutableSetOf<String>()
    cache.forEach { (key, value) ->
      require(value is String) {
        "uuidcache must be a flat name/UUID mapping; confirm its format before import"
      }
      val keyUuid = runCatching { UUID.fromString(key) }.getOrNull()
      val valueUuid = runCatching { UUID.fromString(value) }.getOrNull()
      require((keyUuid == null) != (valueUuid == null)) {
        "uuidcache entry must pair one player name and UUID"
      }
      val name = (if (keyUuid == null) key else value).lowercase(java.util.Locale.ROOT)
      if (!validPlayerName(name)) {
        invalidCache++
        return@forEach
      }
      val uuid = keyUuid ?: valueUuid!!
      if (names.put(name, uuid)?.let { it != uuid } == true) ambiguous += name
    }
    ambiguous.forEach(names::remove)
    val settings =
        buildMap<String, Boolean> {
          preferences.forEach { (name, value) ->
            val normalized = name.lowercase(java.util.Locale.ROOT)
            if (!validPlayerName(normalized)) {
              invalidPlayers++
              return@forEach
            }
            require(value is Boolean) { "japanize.yml values must be true/false" }
            require(!containsKey(normalized) || get(normalized) == value) {
              "Conflicting preferences for the same player name"
            }
            put(normalized, value)
          }
        }
    val (words, invalidDictionary) = parseDictionary(dictionary)
    return LunaImportData(settings, names, words, invalidPlayers, invalidDictionary, invalidCache)
  }

  private fun validPlayerName(name: String): Boolean =
      name.isNotBlank() &&
          name.length <= 64 &&
          name.none {
            it.isWhitespace() ||
                it.isISOControl() ||
                Character.getType(it) == Character.FORMAT.toInt()
          }

  private fun validDictionaryPath(key: String): Boolean = key.isNotBlank() && '\u0000' !in key

  private fun parseDictionary(dictionary: Map<String, Any?>): Pair<Map<String, String>, Int> {
    var invalid = 0
    val words =
        buildMap<String, String> {
          dictionary.forEach { (key, value) ->
            if (!validDictionaryPath(key)) {
              invalid++
              return@forEach
            }
            require(value is String) { "dictionary.yml values must be strings" }
            put(key, value)
          }
        }
    return words to invalid
  }

  fun load(directory: File): LunaImportPlan =
      parse(
          flatYaml(File(directory, "japanize.yml")),
          flatYaml(File(directory, "uuidcache.yml")),
          flatYaml(File(directory, "dictionary.yml")),
      )

  fun loadData(directory: File): LunaImportData =
      parseData(
          flatYaml(File(directory, "japanize.yml")),
          flatYaml(File(directory, "uuidcache.yml")),
          flatYaml(File(directory, "dictionary.yml")),
      )

  fun dictionary(file: File): Map<String, String> =
      if (!file.exists()) emptyMap() else parseDictionary(flatYaml(file)).first

  fun saveDictionary(file: File, entries: Map<String, String>) {
    // All dynamic YAML paths are checked before any writes, including direct callers.
    require(entries.keys.all(::validDictionaryPath)) {
      "Dictionary contains an empty or invalid YAML path"
    }
    file.parentFile.mkdirs()
    val yaml = YamlConfiguration()
    yaml.options().pathSeparator('\u0000')
    entries.forEach { (key, value) -> yaml.set(key, value) }
    val temporary = File.createTempFile("dictionary-", ".tmp", file.parentFile)
    try {
      yaml.save(temporary)
      try {
        java.nio.file.Files.move(
            temporary.toPath(),
            file.toPath(),
            java.nio.file.StandardCopyOption.ATOMIC_MOVE,
            java.nio.file.StandardCopyOption.REPLACE_EXISTING,
        )
      } catch (_: java.nio.file.AtomicMoveNotSupportedException) {
        java.nio.file.Files.move(
            temporary.toPath(),
            file.toPath(),
            java.nio.file.StandardCopyOption.REPLACE_EXISTING,
        )
      }
    } finally {
      temporary.delete()
    }
  }
}
