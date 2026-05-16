package icu.oyasai.citiesskymine.menu

import icu.oyasai.citiesskymine.Main
import java.io.File
import org.bukkit.Material
import org.bukkit.configuration.ConfigurationSection
import org.bukkit.configuration.file.YamlConfiguration

// =============================================================================
// CsmMenuLoader
// =============================================================================
// OyasaiMenu の loader/MenuLoader.kt をフォーク。
//
// 変更点 (OyasaiMenu との差分):
//   - 依存を OyasaiMenu プラグインから CitiesSkyMine の Main に変更
//   - 読み込み先: plugins/CitiesSkyMine/menus/  (OyasaiMenu は plugins/OyasaiMenu/menus/)
//   - YAML フォーマットは OyasaiMenu と互換性を保つ (将来の統合を想定)
//   - ActionType → CsmActionType に変更
//   - MenuDefinition → CsmMenuDef, MenuItemDefinition → CsmItemDef に変更
//   - テンプレート機能・root.yml 除外・popup/ 除外は引き継がず (CitiesSkyMine では不要)
// =============================================================================
class CsmMenuLoader(private val plugin: Main) {

  private val menus: MutableMap<String, CsmMenuDef> = mutableMapOf()

  fun loadAll() {
    menus.clear()
    val menusDir = File(plugin.dataFolder, "menus")
    if (!menusDir.exists()) menusDir.mkdirs()
    scanDirectory(menusDir, "")
    plugin.logger.info("[CsmMenu] ${menus.size} 個のメニューをロードしました。")
  }

  fun getMenu(id: String): CsmMenuDef? = menus[id]

  fun getMenuIds(): List<String> = menus.keys.sorted()

  private fun scanDirectory(dir: File, prefix: String) {
    dir.listFiles()
        ?.sortedBy { it.name }
        ?.forEach { file ->
          if (file.isDirectory) {
            scanDirectory(file, "$prefix${file.name}/")
          } else if (file.extension == "yml") {
            val menuId = "$prefix${file.nameWithoutExtension}"
            runCatching { menus[menuId] = loadMenuFile(file, menuId) }
                .onFailure { plugin.logger.warning("[CsmMenu] ロード失敗: $menuId → ${it.message}") }
          }
        }
  }

  private fun loadMenuFile(file: File, menuId: String): CsmMenuDef {
    val yaml = YamlConfiguration.loadConfiguration(file)
    val title = yaml.getString("menu.title", "&8メニュー") ?: "&8メニュー"
    val rawSize = yaml.getInt("menu.size", 54).coerceIn(9, 54)
    val size = ((rawSize + 8) / 9) * 9
    val items =
        buildMap<String, CsmItemDef> {
          yaml.getConfigurationSection("items")?.getKeys(false)?.forEach { key ->
            yaml.getConfigurationSection("items.$key")?.let { sec -> put(key, parseItemDef(sec)) }
          }
        }
    return CsmMenuDef(id = menuId, title = title, size = size, items = items)
  }

  private fun parseItemDef(section: ConfigurationSection): CsmItemDef {
    val slot = section.getInt("slot", 0)
    val iconName = section.getString("icon", "STONE")?.uppercase() ?: "STONE"
    val icon =
        if (iconName == "AIR") Material.AIR
        else runCatching { Material.valueOf(iconName) }.getOrElse { Material.STONE }
    val name = section.getString("name", "") ?: ""
    val lore = section.getStringList("lore")
    val permission = section.getString("permission")
    val actions = parseActions(section)
    return CsmItemDef(
        slot = slot,
        icon = icon,
        name = name,
        lore = lore,
        actions = actions,
        permission = permission)
  }

  @Suppress("UNCHECKED_CAST")
  private fun parseActions(section: ConfigurationSection): List<CsmMenuAction> =
      (section.getList("actions") ?: return emptyList()).filterIsInstance<Map<String, Any>>().map {
          map ->
        val typeName = map["type"]?.toString()?.uppercase()?.replace("-", "_") ?: "UNKNOWN"
        val type =
            runCatching { CsmActionType.valueOf(typeName) }
                .getOrElse {
                  plugin.logger.warning("[CsmMenu] 不明なアクションタイプ: ${map["type"]}")
                  CsmActionType.UNKNOWN
                }
        val params = map.filterKeys { it != "type" }.mapValues { it.value.toString() }
        CsmMenuAction(type = type, params = params)
      }
}
