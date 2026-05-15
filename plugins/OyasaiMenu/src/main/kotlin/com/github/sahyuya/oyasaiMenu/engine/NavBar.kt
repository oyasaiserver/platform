package com.github.sahyuya.oyasaiMenu.engine

import com.github.sahyuya.oyasaiMenu.OyasaiMenu
import com.github.sahyuya.oyasaiMenu.manager.EconomyManager
import com.github.sahyuya.oyasaiMenu.manager.TokenCurrencyManager
import com.github.sahyuya.oyasaiMenu.util.GuiUtil.comp
import me.clip.placeholderapi.PlaceholderAPI
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.NamespacedKey
import org.bukkit.Registry
import org.bukkit.entity.Player
import org.bukkit.inventory.Inventory
import org.bukkit.inventory.ItemFlag
import org.bukkit.inventory.ItemStack
import org.bukkit.inventory.meta.SkullMeta

object NavBar {

    data class NavEntry(
        val slot: Int,
        val material: Material,
        val name: String,
        val popupId: String,
        val lore: List<String> = emptyList()
    )

    val entries = listOf(
        NavEntry(46, Material.RED_CONCRETE_POWDER,    "&cチャンネルメニュー", "channel",
            listOf("&7チャットチャンネルを切り替えます", "&7メンバー確認もここから")),
        NavEntry(47, Material.ORANGE_CONCRETE_POWDER, "&6一括売却",           "sellmenu",
            listOf("&7アイテムを一括で売却します", "&7ショップでも買取可のアイテムのみ換金")),
        NavEntry(48, Material.YELLOW_CONCRETE_POWDER, "&eサーバーショップ",   "shopindex",
            listOf("&7ブロック・鉱石・ツール等を", "&7購入・売却できます")),
        NavEntry(49, Material.LIME_CONCRETE_POWDER,   "&aSocialLikes",        "sociallikes",
            listOf("&7建築を投稿・閲覧したり", "&7空き地へテレポートできます")),
        NavEntry(50, Material.CYAN_CONCRETE_POWDER,   "&bCarBuilder",         "carbuilder",
            listOf("&7ユーザー車両建造プラグイン", "&7スポーン、カスタム、車両設定など")),
        NavEntry(51, Material.BLUE_CONCRETE_POWDER,   "&9ユーティリティ",     "utility",
            listOf("&7ワープ・各種コマンドの", "&7ショートカット集です")),
        NavEntry(52, Material.PURPLE_CONCRETE_POWDER, "&5マクロ",             "macromenu",
            listOf("&7コマンドを登録・実行できる", "&7マクロ機能を管理します")),
        NavEntry(53, Material.PINK_CONCRETE_POWDER,   "&dリンク集",           "links",
            listOf("&7Wiki・Discord・WebMAP など", "&7各種リンクを表示します"))
    )

    /**
     * インベントリの下1列 (45〜53) にナビバーを描画する。
     * @param activeSlot 強調するスロット (46〜53)。-1 = 強調なし
     */
    fun apply(inv: Inventory, player: Player, plugin: OyasaiMenu, activeSlot: Int = -1) {
        inv.setItem(45, buildPlayerHead(player, plugin))

        @Suppress("DEPRECATION")
        val unbreaking = runCatching {
            Registry.ENCHANTMENT.get(NamespacedKey.minecraft("unbreaking"))
        }.getOrNull()

        entries.forEach { entry ->
            val item = ItemStack(entry.material)
            val meta = item.itemMeta!!
            meta.displayName(comp(entry.name))

            if (entry.slot == activeSlot) {
                if (unbreaking != null) {
                    meta.addEnchant(unbreaking, 1, true)
                    meta.addItemFlags(ItemFlag.HIDE_ENCHANTS)
                }
                val activeLore = buildList {
                    add(comp("&a▶ 現在のメニュー"))
                    if (entry.lore.isNotEmpty()) {
                        add(comp(""))
                        entry.lore.forEach { add(comp(it)) }
                    }
                }
                meta.lore(activeLore)
            } else {
                if (entry.lore.isNotEmpty()) {
                    meta.lore(entry.lore.map { comp(it) })
                }
            }

            item.itemMeta = meta
            inv.setItem(entry.slot, item)
        }
    }

    /** スロット45用プレイヤーヘッド */
    fun buildPlayerHead(player: Player, plugin: OyasaiMenu): ItemStack {
        val skull = ItemStack(Material.PLAYER_HEAD)
        val meta  = skull.itemMeta as SkullMeta
        meta.owningPlayer = player
        meta.displayName(comp("&f${player.name}"))

        // PlaceholderAPI 経由で %dp_level% を取得
        val dpLevel = if (Bukkit.getPluginManager().isPluginEnabled("PlaceholderAPI")) {
            runCatching { PlaceholderAPI.setPlaceholders(player, "%dp_level%") }.getOrElse { "---" }
        } else "---"

        meta.lore(listOf(
            comp("&7オンライン: &e${Bukkit.getOnlinePlayers().size}&f人"),
            comp("&7TPS: &a${String.format("%.1f", Bukkit.getTPS()[0])}"),
            comp("&7DP: &b$dpLevel"),
            comp("&7所持金: &6${if (EconomyManager.isAvailable) EconomyManager.format(EconomyManager.getBalance(player)) else "---"}"),
            comp("&7ポイント: &3${if (TokenCurrencyManager.isAvailable) "${TokenCurrencyManager.format(TokenCurrencyManager.getTokens(player))}&fP" else "---"}"),
            comp(""),
            comp("&eクリックで更新")
        ))
        skull.itemMeta = meta
        return skull
    }

    /** スロット 0〜44 の空きを指定ガラスで埋める (既存アイテムは上書きしない) */
    fun fillGlass(inv: Inventory, glass: Material) {
        val item = ItemStack(glass)
        val meta = item.itemMeta!!
        meta.displayName(comp(" "))
        item.itemMeta = meta
        for (i in 0..44) { if (inv.getItem(i) == null) inv.setItem(i, item) }
    }
}
