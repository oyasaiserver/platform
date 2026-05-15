package com.github.sahyuya.oyasaiMenu.manager

import com.github.sahyuya.oyasaiMenu.OyasaiMenu
import net.kyori.adventure.text.serializer.plain.PlainTextComponentSerializer
import org.bukkit.Color
import org.bukkit.configuration.file.YamlConfiguration
import org.bukkit.inventory.ItemStack
import org.bukkit.inventory.meta.BookMeta
import org.bukkit.inventory.meta.Damageable
import org.bukkit.inventory.meta.EnchantmentStorageMeta
import org.bukkit.inventory.meta.ItemMeta
import org.bukkit.inventory.meta.PotionMeta
import java.io.File
import java.util.Base64

/**
 * SellWhitelistManager
 *
 * ■ カスタムアイテム判定の修正
 *   - WRITTEN_BOOK (記入済みの本) は hasDisplayName() が false でも
 *     BookMeta の title/author で識別されるため「カスタムアイテム」として扱う
 *   - より厳密なコンポーネント比較を実装:
 *     type / custom_name / enchantments / stored_enchantments /
 *     book_title+author / potion_type を比較
 *
 * ■ hasCustomContent() ヘルパー
 *   SellEngine から呼び出してカスタムアイテムかどうかを判定する
 */
class SellWhitelistManager(private val plugin: OyasaiMenu) {

    data class WhitelistEntry(
        val id: String,
        val displayName: String,
        val materialName: String,
        val sellPrice: Double,
        val itemDataB64: String
    )

    private val entries: MutableList<WhitelistEntry> = mutableListOf()
    private val plain = PlainTextComponentSerializer.plainText()

    private val file: File get() = File(plugin.dataFolder, "sell-whitelist.yml")

    // ============================
    // ロード
    // ============================

    fun loadAll() {
        entries.clear()
        if (!file.exists()) {
            file.parentFile.mkdirs()
            file.writeText("""# sell-whitelist.yml
# カスタム名付きアイテム・特殊アイテムの売却を許可するホワイトリスト。
# /menuedit whitelist add hand <売値> でインゲームから追加できます。
entries: []
""", Charsets.UTF_8)
        }

        val yaml = YamlConfiguration.loadConfiguration(file)
        @Suppress("UNCHECKED_CAST")
        (yaml.getList("entries") ?: emptyList<Any>())
            .filterIsInstance<Map<*, *>>()
            .forEach { map ->
                val id          = map["id"]?.toString()           ?: return@forEach
                val displayName = map["display_name"]?.toString() ?: ""
                val material    = map["material"]?.toString()     ?: ""
                val sellPrice   = (map["sell_price"] as? Number)?.toDouble() ?: return@forEach
                val itemData    = map["item_data"]?.toString()    ?: return@forEach
                entries.add(WhitelistEntry(id, displayName, material, sellPrice, itemData))
            }
        plugin.logger.info("売却ホワイトリスト: ${entries.size} 件")
    }

    fun reload() = loadAll()

    // ============================
    // カスタムアイテム判定
    // ============================

    /**
     * このアイテムがホワイトリスト照合が必要な「カスタムアイテム」かどうかを返す。
     * バニラ名かつショップ登録済みならショップ価格で売れるため不要。
     *
     * 以下のいずれかを満たす場合はカスタムアイテムとして扱う:
     *   - hasDisplayName() == true (カスタム名あり)
     *   - WRITTEN_BOOK (記入済みの本: BookMetaのtitle/authorで識別)
     *   - カスタムモデルデータあり
     */
    fun hasCustomContent(item: ItemStack): Boolean {
        if (item.type.isAir) return false
        val meta = item.itemMeta ?: return false
        if (meta.hasDisplayName()) return true
        if (meta is BookMeta) {
            // 記入済みの本 (WRITTEN_BOOK) は title または pages があればカスタム扱い
            if (meta.hasTitle() || meta.pageCount > 0) return true
        }
        if (meta.customModelDataSnapshot() != null) return true
        return false
    }

    // ============================
    // 価格照会
    // ============================

    /**
     * アイテムがホワイトリストに一致する場合の売却価格を返す。
     * 耐久値は無視して比較する。
     */
    fun getPrice(item: ItemStack): Double? {
        val normalized = normalizeForComparison(item)
        return entries.firstOrNull { entry ->
            runCatching {
                val templateRaw = Base64.getDecoder().decode(entry.itemDataB64)
                val template = normalizeForComparison(ItemStack.deserializeBytes(templateRaw))
                matchesComponents(template, normalized)
            }.getOrElse { false }
        }?.sellPrice
    }

    // ============================
    // 編集 API
    // ============================

    fun addEntry(item: ItemStack, sellPrice: Double): String? {
        if (item.type.isAir) return "AIR はホワイトリストに追加できません。"
        if (sellPrice <= 0)  return "売値は 1 以上で指定してください。"

        val normalized = normalizeForComparison(item)

        val alreadyExists = entries.any { entry ->
            runCatching {
                val bytes = Base64.getDecoder().decode(entry.itemDataB64)
                matchesComponents(normalizeForComparison(ItemStack.deserializeBytes(bytes)), normalized)
            }.getOrElse { false }
        }
        if (alreadyExists) return "同じコンポーネントのアイテムは既に登録済みです。"

        val meta        = item.itemMeta
        val displayName = resolveDisplayName(item, meta)

        val itemDataB64 = runCatching {
            Base64.getEncoder().encodeToString(normalized.serializeAsBytes())
        }.getOrElse { return "アイテムのシリアライズに失敗しました: ${it.message}" }

        val baseId = "${item.type.name.lowercase()}_wl"
        val newId  = generateUniqueId(baseId, entries.map { it.id }.toSet())

        entries.add(WhitelistEntry(
            id           = newId,
            displayName  = displayName,
            materialName = item.type.name,
            sellPrice    = sellPrice,
            itemDataB64  = itemDataB64
        ))
        saveToFile()
        return null
    }

    fun removeEntry(index: Int): String? {
        val zeroIdx = index - 1
        if (zeroIdx !in entries.indices) return null
        val removed = entries.removeAt(zeroIdx)
        saveToFile()
        return removed.displayName
    }

    fun getEntries(): List<WhitelistEntry> = entries.toList()

    // ============================
    // 保存
    // ============================

    private fun saveToFile() {
        val yaml = YamlConfiguration()
        yaml.set("entries", entries.map { e ->
            linkedMapOf(
                "id"           to e.id,
                "display_name" to e.displayName,
                "material"     to e.materialName,
                "sell_price"   to e.sellPrice,
                "item_data"    to e.itemDataB64
            )
        })
        runCatching { yaml.save(file) }
            .onFailure { plugin.logger.warning("sell-whitelist.yml 保存失敗: ${it.message}") }
    }

    // ============================
    // コンポーネント比較 (厳密化)
    // ============================

    /**
     * 比較用正規化: 耐久値0・個数1・loreクリア
     * ただしカスタム名・エンチャント・本コンテンツは保持する
     */
    private fun normalizeForComparison(item: ItemStack): ItemStack {
        val copy = item.clone()
        copy.amount = 1
        val meta = copy.itemMeta ?: return copy
        if (meta is Damageable) meta.damage = 0
        // lore は比較しない (説明文は同一性に影響させない)
        meta.lore(emptyList())
        copy.itemMeta = meta
        return copy
    }

    /**
     * 厳密なコンポーネント比較。
     *
     * 比較対象:
     *   - マテリアルタイプ
     *   - カスタム名 (displayName)
     *   - エンチャント (種類とレベル)
     *   - stored_enchantments (エンチャント本)
     *   - book title + author (記入済みの本)
     *   - カスタムモデルデータ
     *
     * 比較しない:
     *   - 耐久値 (damage): 使用済みでも売れるよう無視
     *   - lore: 説明文の違いは同一性に影響しない
     *   - 個数
     */
    private fun matchesComponents(a: ItemStack, b: ItemStack): Boolean {
        if (a.type != b.type) return false

        val ameta = a.itemMeta
        val bmeta = b.itemMeta

        if (ameta == null && bmeta == null) return true
        if (ameta == null || bmeta == null) return false

        // カスタム名
        val aHasName = ameta.hasDisplayName()
        val bHasName = bmeta.hasDisplayName()
        if (aHasName != bHasName) return false
        if (aHasName && bHasName) {
            if (plain.serialize(ameta.displayName()!!) != plain.serialize(bmeta.displayName()!!)) return false
        }

        // エンチャント
        if (ameta.enchants != bmeta.enchants) return false

        // Stored enchantments (エンチャント本)
        val aStored = ameta as? EnchantmentStorageMeta
        val bStored = bmeta as? EnchantmentStorageMeta
        if ((aStored == null) != (bStored == null)) return false
        if (aStored != null && bStored != null) {
            if (aStored.storedEnchants != bStored.storedEnchants) return false
        }

        // 本のコンテンツ比較 (WRITTEN_BOOK / WRITABLE_BOOK)
        val aBook = ameta as? BookMeta
        val bBook = bmeta as? BookMeta
        if ((aBook == null) != (bBook == null)) return false
        if (aBook != null && bBook != null) {
            val aTitle = if (aBook.hasTitle()) aBook.title?.trim() else null
            val bTitle = if (bBook.hasTitle()) bBook.title?.trim() else null
            if (aTitle != bTitle) return false
            val aAuthor = if (aBook.hasAuthor()) aBook.author?.trim() else null
            val bAuthor = if (bBook.hasAuthor()) bBook.author?.trim() else null
            if (aAuthor != bAuthor) return false
            // ページ数も比較 (内容が全く同じ本のみ一致)
            if (aBook.pageCount != bBook.pageCount) return false
        }

        // カスタムモデルデータ
        if (ameta.customModelDataSnapshot() != bmeta.customModelDataSnapshot()) return false

        // ポーション効果 (ポーション系)
        val aPotion = ameta as? PotionMeta
        val bPotion = bmeta as? PotionMeta
        if ((aPotion == null) != (bPotion == null)) return false
        if (aPotion != null && bPotion != null) {
            if (aPotion.basePotionType != bPotion.basePotionType) return false
            if (aPotion.customEffects != bPotion.customEffects) return false
        }

        return true
    }

    // ============================
    // ユーティリティ
    // ============================

    /** アイテムの表示名を取得する (BookMeta の title も考慮) */
    private fun resolveDisplayName(item: ItemStack, meta: ItemMeta?): String {
        if (meta == null) return item.type.name.lowercase()
        if (meta.hasDisplayName()) return plain.serialize(meta.displayName()!!)
        if (meta is BookMeta && meta.hasTitle()) return meta.title ?: item.type.name.lowercase()
        return item.type.name.lowercase()
    }

    private data class CustomModelDataSnapshot(
        val floats: List<Float>,
        val flags: List<Boolean>,
        val strings: List<String>,
        val colors: List<Color>
    )

    @Suppress("UnstableApiUsage")
    private fun ItemMeta.customModelDataSnapshot(): CustomModelDataSnapshot? {
        if (!hasCustomModelDataComponent()) return null
        val component = customModelDataComponent
        return CustomModelDataSnapshot(
            floats = component.floats.toList(),
            flags = component.flags.toList(),
            strings = component.strings.toList(),
            colors = component.colors.toList()
        )
    }

    private fun generateUniqueId(baseId: String, existing: Set<String>): String {
        if (!existing.contains(baseId)) return baseId
        var counter = 2
        while (existing.contains("${baseId}_$counter")) counter++
        return "${baseId}_$counter"
    }
}
