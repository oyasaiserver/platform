package com.github.sahyuya.oyasaiMenu.loader

import com.github.sahyuya.oyasaiMenu.OyasaiMenu
import com.github.sahyuya.oyasaiMenu.model.*
import org.bukkit.Material
import org.bukkit.configuration.ConfigurationSection
import org.bukkit.configuration.file.YamlConfiguration
import java.io.File

/**
 * MenuLoader
 *
 * 変更点:
 *   - テンプレート機能 (templates.yml / extends キー) を完全削除
 *       templates.yml は不要になったため安全に削除可能
 *   - root.yml をスキャン対象から除外
 *       root メニューは MenuEngine の rootFallback で処理するため不要
 *       root.yml ファイルは安全に削除可能
 *   - icon: CUSTOM_HEAD → Material.PLAYER_HEAD + customTexture 保持
 *   - icon: AIR → Material.AIR として保持 (MenuEngine 側でスキップ)
 */
class MenuLoader(private val plugin: OyasaiMenu) {

    private val menus: MutableMap<String, MenuDefinition> = mutableMapOf()

    fun loadAll() {
        menus.clear()

        val menusDir = File(plugin.dataFolder, "menus")
        if (!menusDir.exists()) {
            menusDir.mkdirs()
            plugin.logger.info("menus/ を作成しました。")
        }
        scanDirectory(menusDir, "", setOf("custom_items.yml", "shops.yml", "pointshop.yml"))
        plugin.logger.info("${menus.size} 個のメニューをロードしました。")
    }

    fun getMenu(id: String): MenuDefinition? = menus[id]
    fun getMenuCount(): Int = menus.size

    private fun scanDirectory(dir: File, prefix: String, skipFiles: Set<String> = emptySet()) {
        dir.listFiles()?.sortedBy { it.name }?.forEach { file ->
            if (file.isDirectory) {
                if (file.name == "popup") return@forEach
                scanDirectory(file, "$prefix${file.name}/", skipFiles)
            } else if (file.extension == "yml" && file.name !in skipFiles) {
                val menuId = "$prefix${file.nameWithoutExtension}"
                runCatching { menus[menuId] = loadMenuFile(file, menuId) }
                    .onFailure { plugin.logger.warning("メニューロード失敗: $menuId → ${it.message}") }
            }
        }
    }

    private fun loadMenuFile(file: File, menuId: String): MenuDefinition {
        val yaml    = YamlConfiguration.loadConfiguration(file)
        val menuSec = yaml.getConfigurationSection("menu")
            ?: throw IllegalArgumentException("'menu:' セクションがありません: ${file.name}")

        val title   = menuSec.getString("title", "&8メニュー")!!
        val rawSize = menuSec.getInt("size", 54).coerceIn(9, 54)
        val size    = ((rawSize + 8) / 9) * 9

        val items = buildMap<String, MenuItemDefinition> {
            yaml.getConfigurationSection("items")?.getKeys(false)?.forEach { key ->
                yaml.getConfigurationSection("items.$key")?.let { sec ->
                    put(key, parseItemDefinition(sec))
                }
            }
        }
        return MenuDefinition(id = menuId, title = title, size = size, items = items)
    }

    private fun parseItemDefinition(section: ConfigurationSection): MenuItemDefinition {
        val slot     = section.getInt("slot", 0)
        val iconName = section.getString("icon", "STONE")?.uppercase() ?: "STONE"
        val customTexture: String? = section.getString("texture")

        val icon: Material = when {
            iconName == "CUSTOM_HEAD" -> Material.PLAYER_HEAD
            iconName == "AIR"         -> Material.AIR
            else -> runCatching { Material.valueOf(iconName) }.getOrElse { Material.STONE }
        }

        val name       = section.getString("name", "") ?: ""
        val lore       = section.getStringList("lore")
        val permission = section.getString("permission")
        val actions    = if (section.contains("actions")) parseActions(section, "actions") else emptyList()

        return MenuItemDefinition(
            slot          = slot,
            icon          = icon,
            name          = name,
            lore          = lore,
            actions       = actions,
            permission    = permission,
            customTexture = customTexture
        )
    }

    @Suppress("UNCHECKED_CAST")
    fun parseActions(section: ConfigurationSection, key: String): List<MenuAction> =
        (section.getList(key) ?: return emptyList())
            .filterIsInstance<Map<String, Any>>()
            .map { parseActionMap(it) }

    @Suppress("UNCHECKED_CAST")
    private fun parseActionMap(map: Map<String, Any>): MenuAction {
        val typeName = map["type"]?.toString()?.uppercase()?.replace("-", "_") ?: "UNKNOWN"
        val type = runCatching { ActionType.valueOf(typeName) }.getOrElse {
            plugin.logger.warning("不明なアクションタイプ: ${map["type"]}")
            ActionType.UNKNOWN
        }
        val params  = map.filterKeys { it !in setOf("type", "success", "fail") }
        val success = (map["success"] as? List<Map<String, Any>>)?.map { parseActionMap(it) } ?: emptyList()
        val fail    = (map["fail"]    as? List<Map<String, Any>>)?.map { parseActionMap(it) } ?: emptyList()
        return MenuAction(type = type, params = params, success = success, fail = fail)
    }
}