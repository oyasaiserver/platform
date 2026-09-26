package icu.oyasai.games.gui;

import net.kyori.adventure.text.Component;
import net.kyori.adventure.text.format.NamedTextColor;
import net.kyori.adventure.text.format.TextDecoration;
import org.bukkit.Bukkit;
import org.bukkit.Material;
import org.bukkit.enchantments.Enchantment;
import org.bukkit.entity.Player;
import org.bukkit.inventory.Inventory;
import org.bukkit.inventory.ItemFlag;
import org.bukkit.inventory.ItemStack;
import org.bukkit.inventory.meta.ItemMeta;

import java.util.ArrayList;
import java.util.List;

/**
 * /games コマンドで開く「おやさいゲームズ」メインハブメニューです。
 */
public class GamesHubGui {
    public static final int INVENTORY_SIZE = 27;

    public static final int SLOT_ROULETTE = 11;
    public static final int SLOT_ABOUT = 13;
    public static final int SLOT_COMING_SOON = 15;
    public static final int SLOT_CLOSE = 22;

    public static void open(Player player) {
        GamesHubHolder holder = new GamesHubHolder();
        Component title = Component.text("🥬 おやさいゲームズ", NamedTextColor.DARK_GREEN, TextDecoration.BOLD);
        Inventory inv = Bukkit.createInventory(holder, INVENTORY_SIZE, title);
        holder.setInventory(inv);

        render(inv);
        player.openInventory(inv);
    }

    public static void render(Inventory inv) {
        // 背景の装飾ガラス
        ItemStack filler = new ItemStack(Material.GRAY_STAINED_GLASS_PANE);
        ItemMeta fillerMeta = filler.getItemMeta();
        if (fillerMeta != null) {
            fillerMeta.displayName(Component.empty());
            filler.setItemMeta(fillerMeta);
        }
        for (int i = 0; i < INVENTORY_SIZE; i++) {
            inv.setItem(i, filler);
        }

        // スロット 11: ルーレット
        ItemStack rouletteItem = new ItemStack(Material.TARGET);
        ItemMeta rMeta = rouletteItem.getItemMeta();
        if (rMeta != null) {
            rMeta.displayName(Component.text("🎯 建築アイテムルーレット", NamedTextColor.GOLD, TextDecoration.BOLD).decoration(TextDecoration.ITALIC, false));
            List<Component> lore = new ArrayList<>();
            lore.add(Component.text("建築に使うブロックをランダムに抽選します！", NamedTextColor.YELLOW).decoration(TextDecoration.ITALIC, false));
            lore.add(Component.empty());
            lore.add(Component.text("・全建築アイテム / フルブロック / 装飾ブロック", NamedTextColor.GRAY).decoration(TextDecoration.ITALIC, false));
            lore.add(Component.text("・1回 / 3回 / 5回 抽選対応", NamedTextColor.GRAY).decoration(TextDecoration.ITALIC, false));
            lore.add(Component.text("・全体公開 / 自分のみ（非公開）切替可能", NamedTextColor.GRAY).decoration(TextDecoration.ITALIC, false));
            lore.add(Component.empty());
            lore.add(Component.text("▶ クリックしてルーレットを開く！", NamedTextColor.GREEN, TextDecoration.BOLD).decoration(TextDecoration.ITALIC, false));
            rMeta.lore(lore);
            rMeta.addEnchant(Enchantment.UNBREAKING, 1, true);
            rMeta.addItemFlags(ItemFlag.HIDE_ENCHANTS, ItemFlag.HIDE_ATTRIBUTES);
            rouletteItem.setItemMeta(rMeta);
        }
        inv.setItem(SLOT_ROULETTE, rouletteItem);

        // スロット 13: おやさいゲームズについて
        ItemStack aboutItem = new ItemStack(Material.BOOK);
        ItemMeta aMeta = aboutItem.getItemMeta();
        if (aMeta != null) {
            aMeta.displayName(Component.text("📖 おやさいゲームズとは？", NamedTextColor.AQUA, TextDecoration.BOLD).decoration(TextDecoration.ITALIC, false));
            List<Component> lore = new ArrayList<>();
            lore.add(Component.text("おやさい鯖のみんなで作るミニゲーム統合ハブです。", NamedTextColor.WHITE).decoration(TextDecoration.ITALIC, false));
            lore.add(Component.empty());
            lore.add(Component.text("「こんなゲームが欲しい！」「一緒に遊びたい！」", NamedTextColor.GRAY).decoration(TextDecoration.ITALIC, false));
            lore.add(Component.text("という声から生まれたミニゲームがここに集まります。", NamedTextColor.GRAY).decoration(TextDecoration.ITALIC, false));
            aMeta.lore(lore);
            aboutItem.setItemMeta(aMeta);
        }
        inv.setItem(SLOT_ABOUT, aboutItem);

        // スロット 15: Coming Soon...
        ItemStack comingSoonItem = new ItemStack(Material.CLOCK);
        ItemMeta cMeta = comingSoonItem.getItemMeta();
        if (cMeta != null) {
            cMeta.displayName(Component.text("⏳ 次のゲーム準備中...", NamedTextColor.LIGHT_PURPLE, TextDecoration.BOLD).decoration(TextDecoration.ITALIC, false));
            List<Component> lore = new ArrayList<>();
            lore.add(Component.text("今後のアップデートで新しいミニゲームが追加予定！", NamedTextColor.GRAY).decoration(TextDecoration.ITALIC, false));
            lore.add(Component.empty());
            lore.add(Component.text("お楽しみに！", NamedTextColor.YELLOW).decoration(TextDecoration.ITALIC, false));
            cMeta.lore(lore);
            comingSoonItem.setItemMeta(cMeta);
        }
        inv.setItem(SLOT_COMING_SOON, comingSoonItem);

        // スロット 22: 閉じる
        ItemStack closeItem = new ItemStack(Material.BARRIER);
        ItemMeta closeMeta = closeItem.getItemMeta();
        if (closeMeta != null) {
            closeMeta.displayName(Component.text("閉じる", NamedTextColor.RED, TextDecoration.BOLD).decoration(TextDecoration.ITALIC, false));
            closeItem.setItemMeta(closeMeta);
        }
        inv.setItem(SLOT_CLOSE, closeItem);
    }
}
