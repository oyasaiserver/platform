package io.oyasai.particles.storage

import io.oyasai.particles.model.AmbientSoundPreset
import io.oyasai.particles.model.AreaIdValidator
import io.oyasai.particles.model.AreaShape
import io.oyasai.particles.model.HistoryAction
import io.oyasai.particles.model.HistoryEntry
import io.oyasai.particles.model.ParticleArea
import io.oyasai.particles.model.ParticleEffectConfig
import io.oyasai.particles.model.ParticlePreset
import io.oyasai.particles.model.PseudoWeather
import io.oyasai.particles.model.TimePreset
import java.io.File
import java.nio.file.Files
import java.nio.file.StandardCopyOption
import java.util.UUID
import java.util.logging.Level
import java.util.logging.Logger
import org.bukkit.configuration.ConfigurationSection
import org.bukkit.configuration.file.YamlConfiguration

class YamlAreaRepository(
    private val dataFolder: File,
    private val logger: Logger? = null,
) : AreaRepository {

  private val areasFile: File
    get() = File(dataFolder, "areas.yml")

  private val historyFile: File
    get() = File(dataFolder, "history.yml")

  private val preferencesFile: File
    get() = File(dataFolder, "preferences.yml")

  override fun load(): PersistedState {
    if (!dataFolder.exists()) {
      dataFolder.mkdirs()
    }
    val areas = loadAreas()
    val (history, nextId) = loadHistory()
    val disabled = loadDisabledPlayers()
    return PersistedState(areas, history, disabled, nextId)
  }

  override fun saveAreas(areas: List<ParticleArea>) {
    val yaml = YamlConfiguration()
    for (area in areas) {
      if (!AreaIdValidator.isValid(area.id)) continue
      val section = yaml.createSection("areas.${area.id}")
      writeArea(section, area)
    }
    atomicWrite(areasFile, yaml.saveToString())
  }

  override fun saveHistory(history: List<HistoryEntry>, nextHistoryId: Long) {
    val yaml = YamlConfiguration()
    yaml.set("next-id", nextHistoryId)
    for (entry in history) {
      val section = yaml.createSection("entries.${entry.id}")
      section.set("timestamp", entry.timestamp)
      section.set("actor-uuid", entry.actorUuid.toString())
      section.set("actor-name", entry.actorName)
      section.set("action", entry.action.name)
      section.set("area-id", entry.areaId)
      section.set("area-name", entry.areaName)
      if (entry.before != null) {
        writeArea(section.createSection("before"), entry.before)
      }
      if (entry.after != null) {
        writeArea(section.createSection("after"), entry.after)
      }
    }
    atomicWrite(historyFile, yaml.saveToString())
  }

  override fun savePreferences(disabledPlayers: Set<UUID>) {
    val yaml = YamlConfiguration()
    yaml.set("disabled-players", disabledPlayers.map { it.toString() }.sorted())
    atomicWrite(preferencesFile, yaml.saveToString())
  }

  private fun loadAreas(): List<ParticleArea> {
    if (!areasFile.exists()) return emptyList()
    val yaml = YamlConfiguration.loadConfiguration(areasFile)
    val root = yaml.getConfigurationSection("areas") ?: return emptyList()
    val list = mutableListOf<ParticleArea>()
    for (key in root.getKeys(false)) {
      if (!AreaIdValidator.isValid(key)) {
        logger?.warning("不正なエリアキーをスキップしました: $key")
        continue
      }
      val section = root.getConfigurationSection(key) ?: continue
      val parsed = readArea(key, section)
      if (parsed != null) {
        list.add(parsed)
      }
    }
    return list
  }

  private fun loadHistory(): Pair<List<HistoryEntry>, Long> {
    if (!historyFile.exists()) return emptyList<HistoryEntry>() to 1L
    val yaml = YamlConfiguration.loadConfiguration(historyFile)
    var maxId = 0L
    val root = yaml.getConfigurationSection("entries")
    val list = mutableListOf<HistoryEntry>()
    if (root != null) {
      for (key in root.getKeys(false)) {
        val id = key.toLongOrNull() ?: continue
        if (id > maxId) maxId = id
        val section = root.getConfigurationSection(key) ?: continue
        val actorUuid =
            runCatching { UUID.fromString(section.getString("actor-uuid")) }.getOrNull() ?: continue
        val areaId = AreaIdValidator.sanitizeOrNull(section.getString("area-id")) ?: continue
        val before = section.getConfigurationSection("before")?.let { readArea(areaId, it) }
        val after = section.getConfigurationSection("after")?.let { readArea(areaId, it) }
        list.add(
            HistoryEntry(
                id = id,
                timestamp = section.getLong("timestamp"),
                actorUuid = actorUuid,
                actorName = section.getString("actor-name") ?: "Unknown",
                action = HistoryAction.fromKey(section.getString("action")),
                areaId = areaId,
                areaName = section.getString("area-name") ?: areaId,
                before = before,
                after = after,
            )
        )
      }
    }
    list.sortBy { it.id }
    val nextId = maxOf(yaml.getLong("next-id", 1L), maxId + 1L)
    return list to nextId
  }

  private fun loadDisabledPlayers(): Set<UUID> {
    if (!preferencesFile.exists()) return emptySet()
    val yaml = YamlConfiguration.loadConfiguration(preferencesFile)
    return yaml
        .getStringList("disabled-players")
        .mapNotNull { runCatching { UUID.fromString(it) }.getOrNull() }
        .toSet()
  }

  private fun writeArea(section: ConfigurationSection, area: ParticleArea) {
    section.set("id", area.id)
    section.set("name", area.name)
    section.set("world", area.worldName)
    section.set("owner-uuid", area.ownerUuid.toString())
    section.set("owner-name", area.ownerName)
    section.set("created-from-item", area.createdFromItem)
    section.set("created-at", area.createdAt)
    section.set("updated-at", area.updatedAt)

    val shapeSection = section.createSection("shape")
    when (val shape = area.shape) {
      is AreaShape.Box -> {
        shapeSection.set("type", "BOX")
        shapeSection.set("min-x", shape.minX)
        shapeSection.set("min-y", shape.minY)
        shapeSection.set("min-z", shape.minZ)
        shapeSection.set("max-x", shape.maxX)
        shapeSection.set("max-y", shape.maxY)
        shapeSection.set("max-z", shape.maxZ)
      }
      is AreaShape.Cylinder -> {
        shapeSection.set("type", "CYLINDER")
        shapeSection.set("center-x", shape.centerX)
        shapeSection.set("center-z", shape.centerZ)
        shapeSection.set("min-y", shape.minY)
        shapeSection.set("max-y", shape.maxY)
        shapeSection.set("radius", shape.radius)
      }
    }

    val effectSection = section.createSection("effect")
    effectSection.set("particle", area.effect.particle.name)
    effectSection.set("weather", area.effect.weather.name)
    effectSection.set("time", area.effect.time.name)
    effectSection.set("sound", area.effect.sound.name)
    effectSection.set("density", area.effect.density)
    effectSection.set("item-material", area.effect.itemMaterialKey)
    if (area.effect.itemDisplayName != null) {
      effectSection.set("item-display-name", area.effect.itemDisplayName)
    }
  }

  private fun readArea(fallbackId: String, section: ConfigurationSection): ParticleArea? {
    val id = AreaIdValidator.sanitizeOrNull(section.getString("id") ?: fallbackId) ?: return null
    val worldName = section.getString("world")?.takeIf { it.isNotBlank() } ?: return null
    val ownerUuid =
        runCatching { UUID.fromString(section.getString("owner-uuid")) }.getOrNull() ?: return null
    val shapeSection = section.getConfigurationSection("shape") ?: return null
    val shape =
        when (shapeSection.getString("type")?.uppercase()) {
          "CYLINDER" ->
              AreaShape.Cylinder.of(
                  centerX = shapeSection.getDouble("center-x"),
                  centerZ = shapeSection.getDouble("center-z"),
                  y1 = shapeSection.getInt("min-y"),
                  y2 = shapeSection.getInt("max-y"),
                  radius = shapeSection.getDouble("radius", 5.0),
              )
          else ->
              AreaShape.Box.of(
                  x1 = shapeSection.getInt("min-x"),
                  y1 = shapeSection.getInt("min-y"),
                  z1 = shapeSection.getInt("min-z"),
                  x2 = shapeSection.getInt("max-x"),
                  y2 = shapeSection.getInt("max-y"),
                  z2 = shapeSection.getInt("max-z"),
              )
        }
    val effectSection = section.getConfigurationSection("effect")
    val effect =
        ParticleEffectConfig(
                particle = ParticlePreset.fromKey(effectSection?.getString("particle")),
                weather = PseudoWeather.fromKey(effectSection?.getString("weather")),
                time = TimePreset.fromKey(effectSection?.getString("time")),
                sound = AmbientSoundPreset.fromKey(effectSection?.getString("sound")),
                density = effectSection?.getInt("density", 2) ?: 2,
                itemMaterialKey = effectSection?.getString("item-material") ?: "PINK_DYE",
                itemDisplayName = effectSection?.getString("item-display-name"),
            )
            .normalized()

    return ParticleArea(
        id = id,
        name = section.getString("name") ?: id,
        worldName = worldName,
        ownerUuid = ownerUuid,
        ownerName = section.getString("owner-name") ?: "Unknown",
        shape = shape,
        effect = effect,
        createdFromItem = section.getBoolean("created-from-item", false),
        createdAt = section.getLong("created-at", System.currentTimeMillis()),
        updatedAt = section.getLong("updated-at", System.currentTimeMillis()),
    )
  }

  private fun atomicWrite(target: File, content: String) {
    try {
      dataFolder.mkdirs()
      val temp = File(dataFolder, "${target.name}.tmp")
      temp.writeText(content, Charsets.UTF_8)
      try {
        Files.move(
            temp.toPath(),
            target.toPath(),
            StandardCopyOption.REPLACE_EXISTING,
            StandardCopyOption.ATOMIC_MOVE,
        )
      } catch (_: Exception) {
        Files.move(temp.toPath(), target.toPath(), StandardCopyOption.REPLACE_EXISTING)
      }
    } catch (e: Exception) {
      logger?.log(Level.SEVERE, "ファイルの保存に失敗しました: ${target.name}", e)
    }
  }
}
