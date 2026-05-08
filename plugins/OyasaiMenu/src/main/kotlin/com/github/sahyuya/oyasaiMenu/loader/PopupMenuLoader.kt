package com.github.sahyuya.oyasaiMenu.loader

import com.github.sahyuya.oyasaiMenu.OyasaiMenu
import com.github.sahyuya.oyasaiMenu.model.*
import org.bukkit.Material
import org.bukkit.configuration.file.YamlConfiguration
import java.io.File

/**
 * PopupMenuLoader
 *
 * 変更点:
 *   - fallback_icon / fallback_name: op_only=true の非OP向け表示を指定可能
 *   - op_only / op_player_cmd / op_console_cmd / suggest_command 対応
 *   - icon: AIR / CUSTOM_HEAD 対応
 *
 * YAML 例:
 *   staff_channel:
 *     slot: 1
 *     icon: COMMAND_BLOCK
 *     op_only: true
 *     fallback_icon: GRAY_STAINED_GLASS_PANE  # 非OPに表示するアイコン
 *     fallback_name: " "                       # 非OPに表示する名前 (省略可)
 */
class PopupMenuLoader(private val plugin: OyasaiMenu) {

    private val popups: MutableMap<String, PopupMenuDef> = mutableMapOf()

    fun loadAll() {
        popups.clear()
        val dir = File(plugin.dataFolder, "menus/popup").also { it.mkdirs() }

        listOf(
            "channel",
            "sellmenu",
            "shopindex",
            "sociallikes",
            "carbuilder",
            "utility",
            "macromenu",
            "links",
            "vtpbiome"
        ).forEach { name ->
            val f = File(dir, "$name.yml")
            if (!f.exists()) {
                runCatching { plugin.saveResource("menus/popup/$name.yml", false) }
                    .onFailure { plugin.logger.warning("menus/popup/$name.yml の展開失敗。手動で配置してください。") }
            }
        }

        dir.listFiles()?.filter { it.extension == "yml" }?.forEach { file ->
            val id = file.nameWithoutExtension
            runCatching { popups[id] = loadFile(file, id) }
                .onFailure { plugin.logger.warning("Popup ロード失敗: $id → ${it.message}") }
        }
        plugin.logger.info("Popup メニュー: ${popups.size} 件ロード")
    }

    fun getPopup(id: String): PopupMenuDef? = popups[id]
    fun reload() = loadAll()

    private fun loadFile(file: File, id: String): PopupMenuDef {
        val yaml = YamlConfiguration.loadConfiguration(file)

        val title     = yaml.getString("title", "&7$id") ?: "&7$id"
        val glassName = yaml.getString("glass", "GRAY_STAINED_GLASS_PANE") ?: "GRAY_STAINED_GLASS_PANE"
        val glass     = runCatching { Material.valueOf(glassName.uppercase()) }.getOrDefault(Material.GRAY_STAINED_GLASS_PANE)
        val navActive = yaml.getInt("nav_active", -1)

        val items = mutableListOf<PopupItem>()
        val itemsSec = yaml.getConfigurationSection("items")
        itemsSec?.getKeys(false)?.forEach { key ->
            val sec = itemsSec.getConfigurationSection(key) ?: return@forEach
            val slot = sec.getInt("slot", 0)
            if (slot in 45..53) {
                plugin.logger.warning("Popup $id: '$key' スロット $slot はナビバー専用。スキップします。")
                return@forEach
            }

            val iconName = sec.getString("icon", "STONE")?.uppercase() ?: "STONE"
            val texture  = sec.getString("texture")
            val icon: Material = when {
                iconName == "CUSTOM_HEAD" -> Material.PLAYER_HEAD
                iconName == "AIR"         -> Material.AIR
                else -> runCatching { Material.valueOf(iconName) }.getOrDefault(Material.STONE)
            }

            val enchanted    = sec.getBoolean("enchanted", false)
            val name         = sec.getString("name", "") ?: ""
            val lore         = sec.getStringList("lore")
            val opOnly       = sec.getBoolean("op_only", false)

            val fallbackIconName = sec.getString("fallback_icon")?.uppercase()
            val fallbackIcon: Material? = fallbackIconName?.let {
                runCatching { Material.valueOf(it) }.getOrElse {
                    plugin.logger.warning("Popup $id '$key': 不明な fallback_icon '$it'"); null
                }
            }
            val fallbackName = sec.getString("fallback_name", " ") ?: " "

            val actions = mutableListOf<PopupAction>()
            @Suppress("UNCHECKED_CAST")
            (sec.getList("actions") ?: emptyList<Any>())
                .filterIsInstance<Map<String, Any>>()
                .forEach { parseAction(it)?.let { a -> actions.add(a) } }

            items.add(PopupItem(
                key          = key,
                slot         = slot,
                icon         = icon,
                customTexture = texture,
                name         = name,
                lore         = lore,
                enchanted    = enchanted,
                actions      = actions,
                opOnly       = opOnly,
                fallbackIcon = fallbackIcon,
                fallbackName = fallbackName
            ))
        }

        return PopupMenuDef(id = id, title = title, glass = glass, navActive = navActive, items = items)
    }

    private fun parseAction(map: Map<String, Any>): PopupAction? = when {
        map.containsKey("player_cmd")      -> PopupAction(PopupActionType.PLAYER_CMD,      map["player_cmd"].toString())
        map.containsKey("console_cmd")     -> PopupAction(PopupActionType.CONSOLE_CMD,     map["console_cmd"].toString())
        map.containsKey("op_player_cmd")   -> PopupAction(PopupActionType.OP_PLAYER_CMD,   map["op_player_cmd"].toString())
        map.containsKey("url")             -> PopupAction(PopupActionType.URL,             map["url"].toString())
        map.containsKey("chat_paste")      -> PopupAction(PopupActionType.CHAT_PASTE,      map["chat_paste"].toString())
        map.containsKey("suggest_command") -> PopupAction(PopupActionType.SUGGEST_COMMAND, map["suggest_command"].toString())
        map.containsKey("open_popup")      -> PopupAction(PopupActionType.OPEN_POPUP,      map["open_popup"].toString())
        map.containsKey("open_shop")       -> PopupAction(PopupActionType.OPEN_SHOP,       map["open_shop"].toString())
        map.containsKey("open_sell")       -> PopupAction(PopupActionType.OPEN_SELL,       "")
        map.containsKey("open_macro")      -> PopupAction(PopupActionType.OPEN_MACRO,      "")
        map.containsKey("open_point_shop") -> PopupAction(PopupActionType.OPEN_POINT_SHOP, map["open_point_shop"].toString())
        map.containsKey("open_menu")       -> PopupAction(PopupActionType.OPEN_MENU,       map["open_menu"].toString())
        map.containsKey("close")           -> PopupAction(PopupActionType.CLOSE,           "")
        else -> null
    }
}