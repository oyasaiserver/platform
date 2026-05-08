package com.github.sahyuya.oyasaiMenu.loader

import com.github.sahyuya.oyasaiMenu.OyasaiMenu
import com.github.sahyuya.oyasaiMenu.model.PointShopCategory
import com.github.sahyuya.oyasaiMenu.model.PointShopItem
import org.bukkit.Material
import org.bukkit.configuration.file.YamlConfiguration
import java.io.File

/**
 * PointShopLoader
 *
 * menus/shop/pointshop.yml を読み込む。
 *
 * カスタムヘッド指定:
 *   icon: CUSTOM_HEAD
 *   texture: "<64文字テクスチャハッシュ>"
 *
 * AIR を icon に指定するとスロットを空欄にできる。
 */
class PointShopLoader(private val plugin: OyasaiMenu) {

    private val categories: MutableMap<String, PointShopCategory> = mutableMapOf()

    fun loadAll() {
        categories.clear()

        val file = File(plugin.dataFolder, "menus/shop/pointshop.yml").also {
            it.parentFile.mkdirs()
            if (!it.exists()) {
                plugin.saveResource("menus/shop/pointshop.yml", false)
                plugin.logger.info("menus/shop/pointshop.yml を初期配置しました。")
            }
        }

        val yaml   = YamlConfiguration.loadConfiguration(file)
        var loaded = 0

        yaml.getKeys(false).forEach { catId ->
            val catSec      = yaml.getConfigurationSection(catId) ?: return@forEach
            val displayName = catSec.getString("name", "&7$catId") ?: "&7$catId"
            val itemsSec    = catSec.getConfigurationSection("items") ?: return@forEach
            val items       = mutableMapOf<String, PointShopItem>()

            itemsSec.getKeys(false).forEach { key ->
                val sec      = itemsSec.getConfigurationSection(key) ?: return@forEach
                val iconName = sec.getString("icon", "CHEST")?.uppercase() ?: "CHEST"
                val customTexture: String? = sec.getString("texture")

                val icon: Material = when {
                    iconName == "CUSTOM_HEAD" -> Material.PLAYER_HEAD
                    iconName == "AIR"         -> Material.AIR
                    else -> runCatching { Material.valueOf(iconName) }.getOrElse {
                        plugin.logger.warning("不明なマテリアル: $iconName (pointshop $catId.$key)")
                        Material.CHEST
                    }
                }

                val cost = sec.getLong("cost", 0L)
                items[key] = PointShopItem(
                    key             = key,
                    icon            = icon,
                    name            = sec.getString("name", "") ?: "",
                    lore            = sec.getStringList("lore"),
                    cost            = cost,
                    message         = sec.getString("message", "&a${cost}P 使用しました") ?: "",
                    commands        = sec.getStringList("commands"),
                    closeOnPurchase = sec.getBoolean("close-on-purchase", false),
                    customTexture   = customTexture
                )
                loaded++
            }

            if (items.isNotEmpty()) {
                categories[catId] = PointShopCategory(id = catId, displayName = displayName, items = items)
            }
        }
        plugin.logger.info("ポイントショップ: ${categories.size} カテゴリ / $loaded アイテム")
    }

    fun getCategory(id: String): PointShopCategory? = categories[id]
    fun getAllCategories(): Map<String, PointShopCategory> = categories.toMap()
    fun reload() = loadAll()
}