package com.github.sahyuya.oyasaiMenu.loader

import com.github.sahyuya.oyasaiMenu.OyasaiMenu
import com.github.sahyuya.oyasaiMenu.model.*
import org.bukkit.Material
import org.bukkit.configuration.ConfigurationSection
import org.bukkit.configuration.file.YamlConfiguration
import java.io.File

/**
 * PopupMenuLoader
 *
 * 変更点:
 *   - fallback_lore: 権限を持たないプレイヤー向けの説明文リスト
 *   - fallback_icon: AIR を指定すると強制的に空欄にする
 *     (null = ガラス埋め、AIR = 完全に空、CUSTOM_HEAD = カスタムヘッド、その他 = そのマテリアル)
 *   - fallback_texture: fallback_icon が CUSTOM_HEAD のときのテクスチャハッシュ
 *   - fallback_actions: 権限不足プレイヤーがクリックした際のアクション
 *   - required_permission: 特定パーミッションを持つプレイヤーのみ表示
 */
class PopupMenuLoader(private val plugin: OyasaiMenu) {

    private val popups: MutableMap<String, PopupMenuDef> = mutableMapOf()

    fun loadAll() {
        popups.clear()
        val dir = File(plugin.dataFolder, "menus/popup").also { it.mkdirs() }

        listOf(
            "channel", "sellmenu", "shopindex", "sociallikes",
            "carbuilder", "utility", "macromenu", "links", "vtpbiome"
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

            val itemSpec = parseItemSpec(sec.getConfigurationSection("item"), id, key)
            val iconName = sec.getString("icon", itemSpec?.material?.name ?: "STONE")?.uppercase() ?: "STONE"
            val texture  = sec.getString("texture")
            val icon: Material = when {
                iconName == "CUSTOM_HEAD" -> Material.PLAYER_HEAD
                iconName == "AIR"         -> Material.AIR
                else -> runCatching { Material.valueOf(iconName) }.getOrDefault(Material.STONE)
            }

            val enchanted          = sec.getBoolean("enchanted", false)
            val name               = sec.getString("name", "") ?: ""
            val lore               = sec.getStringList("lore")
            val opOnly             = sec.getBoolean("op_only", false)
            val requiredPermission = sec.getString("required_permission")

            // fallback_icon の解決
            val fallbackIconName = sec.getString("fallback_icon")?.uppercase()
            val fallbackIcon: Material? = when {
                fallbackIconName == null       -> null
                fallbackIconName == "AIR"      -> Material.AIR
                fallbackIconName == "CUSTOM_HEAD" -> Material.PLAYER_HEAD
                else -> runCatching { Material.valueOf(fallbackIconName) }.getOrElse {
                    plugin.logger.warning("Popup $id '$key': 不明な fallback_icon '$fallbackIconName'")
                    null
                }
            }
            val fallbackTexture = sec.getString("fallback_texture")
            val fallbackName    = sec.getString("fallback_name", " ") ?: " "
            val fallbackLore    = sec.getStringList("fallback_lore")
            val fallbackItemSpec = parseItemSpec(sec.getConfigurationSection("fallback_item"), id, key)

            val actions = mutableListOf<PopupAction>()
            @Suppress("UNCHECKED_CAST")
            (sec.getList("actions") ?: emptyList<Any>())
                .filterIsInstance<Map<String, Any>>()
                .forEach { parseAction(it)?.let { a -> actions.add(a) } }

            val fallbackActions = mutableListOf<PopupAction>()
            @Suppress("UNCHECKED_CAST")
            (sec.getList("fallback_actions") ?: emptyList<Any>())
                .filterIsInstance<Map<String, Any>>()
                .forEach { parseAction(it)?.let { a -> fallbackActions.add(a) } }

            items.add(PopupItem(
                key                = key,
                slot               = slot,
                icon               = icon,
                itemSpec           = itemSpec,
                customTexture      = texture,
                name               = name,
                lore               = lore,
                enchanted          = enchanted,
                actions            = actions,
                opOnly             = opOnly,
                requiredPermission = requiredPermission,
                fallbackIcon       = fallbackIcon,
                fallbackItemSpec   = fallbackItemSpec,
                fallbackTexture    = fallbackTexture,
                fallbackName       = fallbackName,
                fallbackLore       = fallbackLore,
                fallbackActions    = fallbackActions
            ))
        }

        return PopupMenuDef(id = id, title = title, glass = glass, navActive = navActive, items = items)
    }

    private fun parseItemSpec(sec: ConfigurationSection?, popupId: String, itemKey: String): PopupItemSpec? {
        if (sec == null) return null
        val id = sec.getString("id") ?: sec.getString("material") ?: run {
            plugin.logger.warning("Popup $popupId '$itemKey': item.id が未指定です。")
            return null
        }
        val materialName = id.removePrefix("minecraft:").uppercase()
        val material = runCatching { Material.valueOf(materialName) }.getOrElse {
            plugin.logger.warning("Popup $popupId '$itemKey': 不明な item.id '$id'")
            return null
        }
        val blockState = linkedMapOf<String, String>()
        val components = sec.getConfigurationSection("components")
        val blockStateSec = components?.getConfigurationSection("minecraft:block_state")
            ?: components?.getConfigurationSection("block_state")
            ?: sec.getConfigurationSection("block_state")
        blockStateSec?.getKeys(false)?.forEach { stateKey ->
            blockState[stateKey] = blockStateSec.getString(stateKey) ?: return@forEach
        }
        return PopupItemSpec(
            material = material,
            amount = sec.getInt("count", sec.getInt("amount", 1)).coerceIn(1, 64),
            blockState = blockState
        )
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
