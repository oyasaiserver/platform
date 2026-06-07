package icu.oyasai.citiesskymine.guimaker

import icu.oyasai.citiesskymine.Main
import java.io.File
import java.io.InputStreamReader
import java.nio.charset.StandardCharsets
import org.bukkit.Material
import org.bukkit.configuration.file.YamlConfiguration

data class UiSkinData(
    val positions: Map<String, Int> = emptyMap(),
    val icons: Map<Int, Material> = emptyMap(),
    val enabledLabels: Set<String>? = null,
)

data class UiScreenCatalog(
    val restoreSlots: List<Int>,
    val screenDefs: Map<String, Map<Int, Pair<String, Material>>>,
    val defaultGlassByScreen: Map<String, Material>,
    val fallbackGlass: Material = Material.GRAY_STAINED_GLASS_PANE,
) {
  fun screenDefaultGlass(screenName: String): Material =
      defaultGlassByScreen[screenName] ?: fallbackGlass

  fun legacyEnabledAdditions(screenName: String): Set<String> = buildSet {
    screenDefs[screenName]
        ?.filter { (slot, pair) ->
          slot == 0 || pair.first == GuiMakerUiSkinDefinitions.ITEM_PREVIEW_LABEL
        }
        ?.values
        ?.map { it.first }
        ?.let { addAll(it) }
  }
}

object GuiMakerUiSkinDefinitions {
  const val UI_SKIN_SCHEMA_VERSION = 3
  const val ITEM_PREVIEW_LABEL = "アイテムプレビュー"
  private const val CONFIG_RESOURCE = "gui-maker-ui-screens.yml"

  fun load(plugin: Main): UiScreenCatalog {
    val file = File(plugin.dataFolder, CONFIG_RESOURCE)
    if (!file.exists()) {
      runCatching { plugin.saveResource(CONFIG_RESOURCE, false) }
          .onFailure {
            plugin.logger.warning("[GuiMaker] UI screen config copy failed: ${it.message}")
          }
    }

    val yaml =
        when {
          file.exists() -> YamlConfiguration.loadConfiguration(file)
          else -> loadBundledConfig(plugin)
        }

    val catalog = parseCatalog(yaml)
    if (catalog.screenDefs.isEmpty()) {
      plugin.logger.warning("[GuiMaker] UI screen config has no screens: ${file.absolutePath}")
    }
    return catalog
  }

  private fun loadBundledConfig(plugin: Main): YamlConfiguration {
    val yaml = YamlConfiguration()
    plugin.getResource(CONFIG_RESOURCE)?.use { stream ->
      InputStreamReader(stream, StandardCharsets.UTF_8).use { reader -> yaml.load(reader) }
    }
    return yaml
  }

  private fun parseCatalog(yaml: YamlConfiguration): UiScreenCatalog {
    val restoreSlots = yaml.getIntegerList("restore-slots").ifEmpty { listOf(47, 48, 50, 51) }
    val fallbackGlass = material(yaml.getString("fallback-glass"), Material.GRAY_STAINED_GLASS_PANE)
    val screenDefs = linkedMapOf<String, Map<Int, Pair<String, Material>>>()
    val defaultGlassByScreen = mutableMapOf<String, Material>()
    val screens =
        yaml.getConfigurationSection("screens")
            ?: return UiScreenCatalog(restoreSlots, emptyMap(), emptyMap())

    for (screenName in screens.getKeys(false)) {
      val screen = screens.getConfigurationSection(screenName) ?: continue
      defaultGlassByScreen[screenName] = material(screen.getString("default-glass"), fallbackGlass)
      val slots = screen.getConfigurationSection("slots") ?: continue
      val defs =
          slots
              .getKeys(false)
              .mapNotNull { key ->
                val slot = key.toIntOrNull() ?: return@mapNotNull null
                val section = slots.getConfigurationSection(key) ?: return@mapNotNull null
                val label =
                    section.getString("label")?.takeIf { it.isNotBlank() } ?: return@mapNotNull null
                val icon = material(section.getString("material"), Material.STONE)
                slot to (label to icon)
              }
              .sortedBy { it.first }
              .toMap()
      screenDefs[screenName] = defs
    }
    return UiScreenCatalog(restoreSlots, screenDefs, defaultGlassByScreen, fallbackGlass)
  }

  private fun material(name: String?, fallback: Material): Material =
      name?.uppercase()?.let { runCatching { Material.valueOf(it) }.getOrNull() } ?: fallback
}

class GuiMakerUiSkinStore(private val plugin: Main, private val catalog: UiScreenCatalog) {
  private val cache: MutableMap<String, UiSkinData> = mutableMapOf()

  private fun file(screenName: String) = File(plugin.dataFolder, "ui-skin/$screenName.yml")

  fun load(screenName: String): UiSkinData {
    cache[screenName]?.let {
      return it
    }
    val file = file(screenName)
    if (!file.exists()) return UiSkinData().also { cache[screenName] = it }
    val result =
        runCatching {
              val yaml = YamlConfiguration.loadConfiguration(file)
              val schema = yaml.getInt("schema", 1)
              val positions = mutableMapOf<String, Int>()
              yaml.getConfigurationSection("positions")?.getKeys(false)?.forEach { key ->
                val path = "positions.$key"
                val section = yaml.getConfigurationSection(path)
                if (section != null && section.contains("label") && section.contains("slot")) {
                  val label = section.getString("label") ?: return@forEach
                  positions[label] = section.getInt("slot")
                } else if (section != null) {
                  val childKey = section.getKeys(false).singleOrNull()
                  val value = childKey?.let { section.get(it) }
                  if (childKey != null && value is Number)
                      positions["$key.$childKey"] = value.toInt()
                } else {
                  val value = yaml.get(path)
                  if (value is Number) positions[key] = value.toInt()
                }
              }
              val icons =
                  yaml
                      .getConfigurationSection("icons")
                      ?.getKeys(false)
                      ?.mapNotNull { key ->
                        val slot = key.toIntOrNull() ?: return@mapNotNull null
                        val mat =
                            yaml.getString("icons.$key")?.uppercase()?.let {
                              runCatching { Material.valueOf(it) }.getOrNull()
                            } ?: return@mapNotNull null
                        slot to mat
                      }
                      ?.toMap()
                      ?: yaml
                          .getKeys(false)
                          .mapNotNull { key ->
                            val slot = key.toIntOrNull() ?: return@mapNotNull null
                            val mat =
                                yaml.getString(key)?.uppercase()?.let {
                                  runCatching { Material.valueOf(it) }.getOrNull()
                                } ?: return@mapNotNull null
                            slot to mat
                          }
                          .toMap()
              val allLabels =
                  catalog.screenDefs[screenName]?.values?.map { it.first }?.toSet().orEmpty()
              val loadedEnabledLabels =
                  when {
                    yaml.contains("enabled") ->
                        yaml.getStringList("enabled").filter { it in allLabels }.toSet()
                    yaml.contains("hidden") -> allLabels - yaml.getStringList("hidden").toSet()
                    else -> null
                  }
              val enabledLabels =
                  if (
                      loadedEnabledLabels != null &&
                          schema < GuiMakerUiSkinDefinitions.UI_SKIN_SCHEMA_VERSION
                  ) {
                    loadedEnabledLabels + catalog.legacyEnabledAdditions(screenName)
                  } else {
                    loadedEnabledLabels
                  }
              UiSkinData(positions, icons, enabledLabels)
            }
            .getOrElse { UiSkinData() }
    cache[screenName] = result
    return result
  }

  fun save(screenName: String, data: UiSkinData) {
    val file = file(screenName).also { it.parentFile.mkdirs() }
    val yaml = YamlConfiguration()
    yaml.set("schema", GuiMakerUiSkinDefinitions.UI_SKIN_SCHEMA_VERSION)
    data.positions.entries.sortedWith(compareBy({ it.value }, { it.key })).forEachIndexed {
        index,
        (label, slot) ->
      yaml.set("positions.$index.label", label)
      yaml.set("positions.$index.slot", slot)
    }
    data.icons.toSortedMap().forEach { (slot, mat) -> yaml.set("icons.$slot", mat.name) }
    data.enabledLabels?.let { enabled -> yaml.set("enabled", enabled.sorted()) }
    yaml.save(file)
    cache[screenName] = data
  }
}
