package icu.oyasai.games.bedwars

import icu.oyasai.games.pvp.saveYaml
import java.io.File
import java.util.UUID
import org.bukkit.configuration.file.YamlConfiguration

internal enum class BedWarsStat(val key: String) {
  KILLS("kills"),
  DEATHS("deaths"),
  FINAL_KILLS("finalKills"),
  BEDS("destroyedBeds"),
  WINS("wins"),
  LOSSES("loses"),
  GAMES("games"),
  SCORE("score"),
}

internal data class BedWarsStanding(val id: UUID, val name: String, val value: Long)

/** Each event and its counters are committed together, using the PvP atomic durable writer. */
internal class BedWarsStats(folder: File) {
  private val file = File(folder, "statistics.yml")

  private fun load() = YamlConfiguration().also { if (file.exists()) it.load(file) }

  fun record(
      id: UUID,
      eventKey: String,
      changes: Map<BedWarsStat, Int>,
      name: String? = null,
  ): Boolean {
    require(eventKey.isNotBlank())
    val yaml = load()
    // Encode caller keys so dots and other YAML path characters cannot change the structure.
    val event =
        java.util.Base64.getUrlEncoder()
            .withoutPadding()
            .encodeToString(eventKey.toByteArray(Charsets.UTF_8))
    val path = "events.$id.$event"
    if (yaml.getBoolean(path)) return false
    changes.forEach { (stat, amount) ->
      require(amount >= 0 || stat == BedWarsStat.SCORE)
      val counter = "data.$id.${stat.key}"
      yaml.set(counter, Math.addExact(yaml.getLong(counter), amount.toLong()))
    }
    if (name != null) yaml.set("data.$id.name", name)
    yaml.set(path, true)
    saveYaml(file, yaml)
    return true
  }

  fun get(id: UUID): Map<BedWarsStat, Long> {
    val yaml = load()
    return BedWarsStat.entries.associateWith { yaml.getLong("data.$id.${it.key}") }
  }

  fun leaderboard(stat: BedWarsStat = BedWarsStat.SCORE, limit: Int = 10): List<BedWarsStanding> {
    require(limit in 1..100)
    val yaml = load()
    return yaml
        .getConfigurationSection("data")
        ?.getKeys(false)
        .orEmpty()
        .mapNotNull { key ->
          val id = runCatching { UUID.fromString(key) }.getOrNull() ?: return@mapNotNull null
          BedWarsStanding(
              id,
              yaml.getString("data.$key.name") ?: id.toString().take(8),
              yaml.getLong("data.$key.${stat.key}"),
          )
        }
        .sortedWith(compareByDescending<BedWarsStanding> { it.value }.thenBy { it.id.toString() })
        .take(limit)
  }

  /**
   * Legacy schema confirmed against the public 0.2.44 statistics serializer. Source is not
   * modified.
   */
  fun importLegacy(bedWarsFolder: File): Int {
    if (file.exists()) return 0
    val source = File(bedWarsFolder, "database/bw_stats_players.yml")
    if (!source.isFile) return 0
    val legacy = YamlConfiguration().also { it.load(source) }
    val yaml = YamlConfiguration()
    var count = 0
    legacy.getConfigurationSection("data")?.getKeys(false).orEmpty().forEach { key ->
      val id = runCatching { UUID.fromString(key) }.getOrNull() ?: return@forEach
      val section = legacy.getConfigurationSection("data.$key") ?: return@forEach
      val stats =
          BedWarsStat.entries.filter { it != BedWarsStat.FINAL_KILLS && it != BedWarsStat.GAMES }
      if (stats.any { section.contains(it.key) && section.get(it.key) !is Number }) return@forEach
      if (stats.any { it != BedWarsStat.SCORE && section.getLong(it.key) < 0 }) return@forEach
      stats.forEach { yaml.set("data.$id.${it.key}", section.getLong(it.key)) }
      yaml.set("data.$id.name", section.getString("name"))
      yaml.set("data.$id.games", Math.addExact(section.getLong("wins"), section.getLong("loses")))
      count++
    }
    yaml.set("legacy-imported", true)
    saveYaml(file, yaml)
    return count
  }
}
