package com.github.sahyuya.oyasaiMenu.loader

import com.github.sahyuya.oyasaiMenu.OyasaiMenu
import com.github.sahyuya.oyasaiMenu.model.ShopCategory
import com.github.sahyuya.oyasaiMenu.model.ShopItem
import org.bukkit.Material
import org.bukkit.NamespacedKey
import org.bukkit.Registry
import org.bukkit.configuration.file.YamlConfiguration
import org.bukkit.enchantments.Enchantment
import java.io.File

/**
 * ShopLoader
 *
 * 追加:
 *   - addItem(categoryId, materialLine, buy, sell): shops.yml に1行追記
 *   - removeItem(categoryId, index): 指定 index の行を削除
 */
class ShopLoader(private val plugin: OyasaiMenu) {

    private val categories:   MutableMap<String, ShopCategory> = mutableMapOf()
    private val sellPriceMap: MutableMap<Material, Double>     = mutableMapOf()

    private data class CustomItemDef(
        val material: Material,
        val name: String,
        val lore: List<String>,
        val enchantments: Map<Enchantment, Int>
    )
    private val customItems: MutableMap<String, CustomItemDef> = mutableMapOf()

    private val legacyEnchantNames: Map<String, String> = mapOf(
        "DIG_SPEED"                   to "efficiency",
        "DURABILITY"                  to "unbreaking",
        "UNBREAKING"                  to "unbreaking",
        "FORTUNE"                     to "fortune",
        "SILK_TOUCH"                  to "silk_touch",
        "MENDING"                     to "mending",
        "LURE"                        to "lure",
        "LUCK"                        to "luck_of_the_sea",
        "LUCK_OF_THE_SEA"             to "luck_of_the_sea",
        "DEPTH_STRIDER"               to "depth_strider",
        "AQUA_AFFINITY"               to "aqua_affinity",
        "RESPIRATION"                 to "respiration",
        "PROTECTION_ENVIRONMENTAL"    to "protection",
        "PROTECTION_FIRE"             to "fire_protection",
        "PROTECTION_FALL"             to "feather_falling",
        "PROTECTION_EXPLOSIONS"       to "blast_protection",
        "PROTECTION_PROJECTILE"       to "projectile_protection",
        "THORNS"                      to "thorns",
        "DAMAGE_ALL"                  to "sharpness",
        "DAMAGE_UNDEAD"               to "smite",
        "DAMAGE_ARTHROPODS"           to "bane_of_arthropods",
        "KNOCKBACK"                   to "knockback",
        "FIRE_ASPECT"                 to "fire_aspect",
        "LOOTING"                     to "looting",
        "SWEEPING_EDGE"               to "sweeping_edge",
        "ARROW_DAMAGE"                to "power",
        "ARROW_KNOCKBACK"             to "punch",
        "ARROW_FIRE"                  to "flame",
        "ARROW_INFINITE"              to "infinity",
        "SWIFT_SNEAK"                 to "swift_sneak",
        "SOUL_SPEED"                  to "soul_speed",
        "FROST_WALKER"                to "frost_walker",
    )

    // ============================
    // ロード
    // ============================

    fun loadAll() {
        categories.clear()
        sellPriceMap.clear()
        loadCustomItems()

        val file   = shopsFile()
        val yaml   = YamlConfiguration.loadConfiguration(file)
        var loaded = 0; var skipped = 0

        yaml.getKeys(false).forEach { catId ->
            val sec   = yaml.getConfigurationSection(catId) ?: return@forEach
            val items = mutableListOf<ShopItem>()

            sec.getStringList("items").forEach { line ->
                val t = line.trim()
                when {
                    t.isEmpty() || t.startsWith("#") -> { skipped++; return@forEach }
                    t.startsWith("\$") -> {
                        parseCustomItemLine(t, catId)?.also {
                            items.add(it)
                            if (it.canSell && it.material != null) sellPriceMap[it.material] = it.sellPrice
                            loaded++
                        } ?: run { skipped++ }
                    }
                    else -> {
                        parseItemLine(t, catId)?.also {
                            items.add(it)
                            if (it.canSell && it.material != null) sellPriceMap[it.material] = it.sellPrice
                            loaded++
                        } ?: run { skipped++ }
                    }
                }
            }

            categories[catId] = ShopCategory(
                id          = catId,
                displayName = sec.getString("name", "&7$catId") ?: "&7$catId",
                command     = sec.getString("command"),
                items       = items
            )
        }
        plugin.logger.info("ショップ: ${categories.size} カテゴリ / $loaded アイテム ($skipped スキップ)")
    }

    fun getCategory(id: String): ShopCategory? = categories[id]
    fun getAllCategories(): Map<String, ShopCategory> = categories.toMap()
    fun getSellPrice(material: Material): Double? = sellPriceMap[material]
    fun reload() = loadAll()

    // ============================
    // インゲーム編集 API
    // ============================

    /**
     * 指定カテゴリの items リストに1行追記して shops.yml を上書き保存する。
     * @return 保存した File。カテゴリが見つからなければ null。
     */
    fun addItem(categoryId: String, materialLine: String, buyPrice: Double, sellPrice: Double): File? {
        val file = shopsFile()
        val yaml = YamlConfiguration.loadConfiguration(file)
        if (!yaml.contains(categoryId)) return null

        val current = yaml.getStringList("$categoryId.items").toMutableList()
        current.add("$materialLine $buyPrice $sellPrice")
        yaml.set("$categoryId.items", current)

        runCatching { yaml.save(file) }
            .onFailure { plugin.logger.warning("shops.yml 保存失敗: ${it.message}") }
        return file
    }

    /**
     * 指定カテゴリの items リストから index 番目 (0-indexed, 空行除く) の行を削除する。
     * @return 削除したアイテム文字列の先頭トークン (materialId など)。失敗なら null。
     */
    fun removeItem(categoryId: String, index: Int): String? {
        val file = shopsFile()
        val yaml = YamlConfiguration.loadConfiguration(file)
        if (!yaml.contains(categoryId)) return null

        val rawList     = yaml.getStringList("$categoryId.items").toMutableList()
        val realIndices = rawList.indices.filter { rawList[it].trim().isNotEmpty() && !rawList[it].trim().startsWith("#") }
        val realIndex   = realIndices.getOrNull(index) ?: return null

        val removed = rawList[realIndex]
        rawList.removeAt(realIndex)
        yaml.set("$categoryId.items", rawList)

        runCatching { yaml.save(file) }
            .onFailure { plugin.logger.warning("shops.yml 保存失敗: ${it.message}") }
        return removed.trim().split("\\s+".toRegex()).firstOrNull()
    }

    // ============================
    // ファイルアクセス
    // ============================

    private fun shopsFile(): File = File(plugin.dataFolder, "menus/shop/shops.yml").also {
        it.parentFile.mkdirs()
        if (!it.exists()) {
            plugin.saveResource("menus/shop/shops.yml", false)
            plugin.logger.info("menus/shop/shops.yml を初期配置しました。")
        }
    }

    // ============================
    // カスタムアイテム読み込み
    // ============================

    private fun loadCustomItems() {
        customItems.clear()
        val file = File(plugin.dataFolder, "items/custom_items.yml").also {
            it.parentFile.mkdirs()
            if (!it.exists()) {
                plugin.saveResource("items/custom_items.yml", false)
                plugin.logger.info("items/custom_items.yml を初期配置しました。")
            }
        }
        val yaml = YamlConfiguration.loadConfiguration(file)
        yaml.getKeys(false).forEach { key ->
            val sec     = yaml.getConfigurationSection(key) ?: return@forEach
            val matName = (sec.getString("id") ?: sec.getString("material") ?: "STONE").uppercase()
            val mat     = runCatching { Material.valueOf(matName) }.getOrElse {
                plugin.logger.warning("custom_items.yml: 不明なマテリアル '$matName' (key: $key)"); Material.STONE
            }
            val enchantMap = mutableMapOf<Enchantment, Int>()
            sec.getConfigurationSection("enchantments")?.getKeys(false)?.forEach { enchKey ->
                val level   = sec.getInt("enchantments.$enchKey", 1)
                val enchant = resolveEnchantment(enchKey)
                if (enchant != null) enchantMap[enchant] = level
                else plugin.logger.warning("custom_items.yml: 不明なエンチャント '$enchKey' (key: $key)")
            }
            customItems[key] = CustomItemDef(
                material     = mat,
                name         = sec.getString("name", "") ?: "",
                lore         = sec.getStringList("lore"),
                enchantments = enchantMap
            )
        }
        plugin.logger.info("カスタムアイテム: ${customItems.size} 件をロード")
    }

    private fun resolveEnchantment(name: String): Enchantment? {
        val key = legacyEnchantNames[name.uppercase()] ?: name.lowercase()
        return runCatching { Registry.ENCHANTMENT.get(NamespacedKey.minecraft(key)) }.getOrElse {
            @Suppress("DEPRECATION")
            Enchantment.getByName(name.uppercase())
        }
    }

    // ============================
    // パース
    // ============================

    private fun parseCustomItemLine(line: String, catId: String): ShopItem? {
        val parts = line.split("\\s+".toRegex())
        if (parts.size < 3) { plugin.logger.warning("カスタムアイテム フォーマットエラー ($catId): '$line'"); return null }
        val key       = parts[0].removePrefix("\$")
        val buyPrice  = parts[1].toDoubleOrNull() ?: return null
        val sellPrice = parts[2].toDoubleOrNull() ?: return null
        val def = customItems[key] ?: run {
            plugin.logger.warning("カスタムアイテム未定義: $key ($catId) — items/custom_items.yml に追加してください"); return null
        }
        return ShopItem(material = def.material, materialId = key, buyPrice = buyPrice, sellPrice = sellPrice,
            customName = def.name.takeIf { it.isNotEmpty() }, customLore = def.lore, enchantments = def.enchantments)
    }

    private fun parseItemLine(line: String, catId: String): ShopItem? {
        val parts = line.split("\\s+".toRegex())
        if (parts.size < 3) { plugin.logger.warning("フォーマットエラー ($catId): '$line'"); return null }
        val buyPrice  = parts[1].toDoubleOrNull() ?: return null
        val sellPrice = parts[2].toDoubleOrNull() ?: return null
        val material  = runCatching { Material.valueOf(parts[0].uppercase()) }.getOrElse {
            plugin.logger.warning("不明なマテリアル: ${parts[0]} ($catId)"); null
        }
        return ShopItem(material = material, materialId = parts[0].lowercase(), buyPrice = buyPrice, sellPrice = sellPrice)
    }
}