package com.github.sahyuya.oyasaiMenu.model

import org.bukkit.Material
import org.bukkit.enchantments.Enchantment

// ============================================================
// ショップ定義モデル
// shops.yml の形式: "material buy_price sell_price" に完全互換
// ============================================================

/**
 * shops.yml の1カテゴリ (blocks / ores / redstone など) を表す。
 *
 * YAML 構造:
 *   blocks:
 *     name: '&1ブロック'
 *     rows: 6           # InventoryShop互換フィールド (読み込むが使わない)
 *     command: 'blocks'  # オプション: ショートカットコマンド名
 *     items:
 *       - oak_log 5 1   # material buyPrice sellPrice
 *       - ''            # 旧プラグインのページ区切り (無視して自動ページング)
 */
data class ShopCategory(
    /** YAML のトップレベルキー (例: "blocks", "ores") */
    val id: String,
    /** GUIタイトルに表示する名前 (カラーコード対応) */
    val displayName: String,
    /** ショートカットコマンド名 (null なら id を使用) */
    val command: String?,
    /** このカテゴリの全商品リスト (空文字行は除外済み) */
    val items: List<ShopItem>
) {
    /**
     * 1ページに表示するアイテム数は45スロット固定
     * (インベントリ6行 - 下段1行 = 5行 × 9列)
     */
    val itemsPerPage: Int = 45

    /** 総ページ数 */
    val pageCount: Int
        get() = maxOf(1, (items.size + itemsPerPage - 1) / itemsPerPage)

    /** 指定ページのアイテムリストを返す (0-indexed) */
    fun getPage(page: Int): List<ShopItem> {
        val start = page * itemsPerPage
        val end = minOf(start + itemsPerPage, items.size)
        return if (start >= items.size) emptyList() else items.subList(start, end)
    }
}

/**
 * shops.yml の1行 "material buyPrice sellPrice" を表す。
 *
 * @param material   Bukkit の Material (解決できない場合は null)
 * @param materialId YAML に書かれた元の文字列 (デバッグ・表示用)
 * @param buyPrice   購入価格。0 以下なら購入不可
 * @param sellPrice  売却価格。0 以下なら売却不可
 */
data class ShopItem(
    val material: Material?,
    val materialId: String,
    val buyPrice: Double,
    val sellPrice: Double,
    /** カスタムアイテム ($キー参照) の表示名。null のときはバニラ名を使う */
    val customName: String? = null,
    /** カスタムアイテムの Lore。空リストのときは Lore なし */
    val customLore: List<String> = emptyList(),
    /** カスタムアイテムに付与するエンチャントマップ (Enchantment → レベル) */
    val enchantments: Map<Enchantment, Int> = emptyMap()
) {
    val canBuy: Boolean get() = material != null && buyPrice > 0
    val canSell: Boolean get() = material != null && sellPrice > 0
}

// ============================================================
// プレイヤーごとのショップ状態
// ============================================================

/** 購入・売却数量のサイクル定義 */
enum class ShopQuantity(val amount: Int, val label: String) {
    ONE(1,   "&f1個"),
    FOUR(4,  "&a4個"),
    SIXTEEN(16, "&b16個"),
    SIXTY_FOUR(64, "&e64個");

    fun next(): ShopQuantity = entries[(ordinal + 1) % entries.size]
}

/**
 * プレイヤーがショップを開いているときの状態。
 * プレイヤーUUID をキーとして ShopEngine 内で管理する。
 */
data class PlayerShopState(
    val categoryId: String,
    val page: Int = 0,
    val quantity: ShopQuantity = ShopQuantity.ONE,
    /** 一括売却モードかどうか */
    val isSellMode: Boolean = false
)