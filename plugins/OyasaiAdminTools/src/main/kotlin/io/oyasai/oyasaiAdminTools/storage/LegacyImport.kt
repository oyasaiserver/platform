package io.oyasai.oyasaiAdminTools.storage

import com.google.gson.reflect.TypeToken
import io.oyasai.oyasaiAdminTools.bulletin.announcement.models.Announcement
import io.oyasai.oyasaiAdminTools.bulletin.survey.models.Survey
import io.oyasai.oyasaiAdminTools.bulletin.survey.models.SurveyResult
import io.oyasai.oyasaiAdminTools.utils.JsonUtils
import io.oyasai.oyasaiAdminTools.worldborder.WorldBorderData
import java.io.File
import org.bukkit.configuration.file.YamlConfiguration

internal data class LegacyCount(
    val survey: String,
    val uuid: String,
    val responses: Int,
    val rewards: Int,
)

internal data class LegacyBulletin(
    val announcements: List<Announcement>,
    val surveys: List<Survey>,
    val counts: List<LegacyCount>,
    val results: List<Pair<String, SurveyResult>>,
)

private inline fun <reified T> readList(file: File): List<T> {
  if (!file.exists()) return emptyList()
  val data: List<T>? =
      JsonUtils.gson.fromJson(file.readText(), object : TypeToken<List<T>>() {}.type)
  requireNotNull(data) { "Null JSON in ${file.name}" }
  return data
}

internal fun readLegacyBulletin(folder: File): LegacyBulletin {
  val announcements = readList<Announcement>(File(folder, "announcements.json"))
  val surveys = readList<Survey>(File(folder, "surveys.json"))
  val counts =
      surveys.flatMap { survey ->
        val responded = survey.respondedPlayers.orEmpty()
        val rewarded = survey.rewardedPlayers.orEmpty()
        (responded.keys + rewarded.keys).distinct().map { uuid ->
          LegacyCount(survey.id, uuid, responded[uuid] ?: 0, rewarded[uuid] ?: 0)
        }
      }
  val resultsFolder = File(folder, "surveys")
  val resultFiles =
      if (resultsFolder.exists())
          requireNotNull(resultsFolder.listFiles()) { "Cannot read ${resultsFolder.name}" }
      else emptyArray()
  val results =
      resultFiles
          .filter { it.isFile && it.name.startsWith("results_") && it.extension == "json" }
          .sortedBy { it.name }
          .flatMap { file ->
            val surveyId = file.name.removePrefix("results_").removeSuffix(".json")
            readList<SurveyResult>(file).map { surveyId to it }
          }
  return LegacyBulletin(announcements, surveys, counts, results)
}

internal data class LegacyBorders(
    val borders: Map<String, WorldBorderData>,
    val settings: Map<String, Any?>,
)

internal fun readLegacyBorders(folder: File, fallback: File): LegacyBorders {
  val own = File(folder, "worldborder.yml")
  val file = if (own.exists()) own else fallback
  if (!file.exists()) return LegacyBorders(emptyMap(), emptyMap())
  val yaml = YamlConfiguration().apply { load(file) }
  val borders = linkedMapOf<String, WorldBorderData>()
  require(!yaml.contains("worlds") || yaml.getConfigurationSection("worlds") != null) {
    "Invalid world border section in ${file.name}"
  }
  yaml.getConfigurationSection("worlds")?.let { worlds ->
    for (rawName in worlds.getKeys(false)) {
      val section =
          worlds.getConfigurationSection(rawName)
              ?: error("Invalid world border section in ${file.name}")
      val radius = section.getInt("radius", 0)
      val xRadius = if (section.contains("radiusX")) section.getInt("radiusX") else radius
      val zRadius = if (section.contains("radiusZ")) section.getInt("radiusZ") else radius
      borders[rawName.replace("<", ".")] =
          WorldBorderData(
              section.getDouble("x", 0.0),
              section.getDouble("z", 0.0),
              xRadius,
              zRadius,
              if (section.contains("shape-round")) section.getBoolean("shape-round") else null,
          )
    }
  }
  val keys =
      listOf(
          "message",
          "round-border",
          "whoosh-effect",
          "portal-redirection",
          "knock-back-dist",
          "timer-delay-ticks",
          "deny-enderpearl",
      )
  return LegacyBorders(borders, keys.filter(yaml::contains).associateWith(yaml::get))
}
