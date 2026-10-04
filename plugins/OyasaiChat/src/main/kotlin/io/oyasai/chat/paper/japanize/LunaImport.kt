package io.oyasai.chat.paper.japanize

import java.io.File
import java.util.UUID
import org.bukkit.configuration.file.YamlConfiguration

/** Flat YAML data only. Never resolves names via HTTP or fabricates offline UUIDs. */
data class LunaImportPlan(
    val players: Map<UUID, Boolean>,
    val dictionary: Map<String, String>,
    val unresolved: Int,
)

data class LunaImportData(
    val preferences: Map<String, Boolean>,
    val names: Map<String, UUID>,
    val dictionary: Map<String, String>,
)

object LunaImport {
  fun flatYaml(file: File): Map<String, Any?> {
    require(file.isFile) { "Missing import file: ${file.name}" }
    val yaml = YamlConfiguration()
    // Dictionary keys such as ./spawn are literal, not Bukkit dotted paths.
    yaml.options().pathSeparator('\u0000')
    yaml.load(file)
    return yaml.getValues(false)
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
    )
  }

  fun parseData(
      preferences: Map<String, Any?>,
      cache: Map<String, Any?>,
      dictionary: Map<String, Any?>,
  ): LunaImportData {
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
      require(name.isNotBlank() && name.length <= 64 && name.none { it.isISOControl() }) {
        "Invalid cached player name"
      }
      val uuid = keyUuid ?: valueUuid!!
      if (names.put(name, uuid)?.let { it != uuid } == true) ambiguous += name
    }
    ambiguous.forEach(names::remove)
    val settings =
        buildMap<String, Boolean> {
          preferences.forEach { (name, value) ->
            require(value is Boolean) { "japanize.yml values must be true/false" }
            val normalized = name.lowercase(java.util.Locale.ROOT)
            require(
                normalized.isNotBlank() &&
                    normalized.length <= 64 &&
                    normalized.none { it.isWhitespace() || it.isISOControl() }
            ) {
              "Invalid player name"
            }
            require(!containsKey(normalized) || get(normalized) == value) {
              "Conflicting preferences for the same player name"
            }
            put(normalized, value)
          }
        }
    val words =
        dictionary.mapValues { (key, value) ->
          require(key.isNotBlank() && value is String) {
            "dictionary.yml must contain nonempty string keys and string values"
          }
          value
        }
    return LunaImportData(settings, names, words)
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
      if (!file.exists()) emptyMap()
      else
          flatYaml(file).mapValues { (_, value) ->
            require(value is String) { "Imported dictionary values must be strings" }
            value
          }

  fun saveDictionary(file: File, entries: Map<String, String>) {
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
