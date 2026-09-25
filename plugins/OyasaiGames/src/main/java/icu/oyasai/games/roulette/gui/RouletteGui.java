package icu.oyasai.games.roulette.gui;

import icu.oyasai.games.roulette.model.RouletteMode;
import icu.oyasai.games.roulette.model.RouletteSession;
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
 * ルーレット設定GUIの画面構築とアイテム描画を行うクラスです。
 */
public class RouletteGui {
    public static final int INVENTORY_SIZE = 27;

    // スロット配置の定数定義
    public static final int SLOT_MODE_ALL = 10;
    public static final int SLOT_MODE_FULL = 11;
    public static final int SLOT_MODE_NON_FULL = 12;

    public static final int SLOT_COUNT_1 = 14;
    public static final int SLOT_COUNT_3 = 15;
    public static final int SLOT_COUNT_5 = 16;

    public static final int SLOT_CANCEL = 18;
    public static final int SLOT_VISIBILITY = 20;
    public static final int SLOT_INFO = 22;
    public static final int SLOT_START = 26;

    /**
     * プレイヤーにルーレットGUIを開きます。
     */
    public static void open(Player player, RouletteSession session) {
        RouletteGuiHolder holder = new RouletteGuiHolder(session);
        Component title = Component.text("おやさいルーレット", NamedTextColor.DARK_GREEN, TextDecoration.BOLD);
        Inventory inv = Bukkit.createInventory(holder, INVENTORY_SIZE, title);
        holder.setInventory(inv);

        render(inv, session);
        player.openInventory(inv);
    }

    /**
     * 現在のセッション状態に合わせてGUI内のアイテムを描画・更新します。
     */
    public static void render(Inventory inv, RouletteSession session) {
        if (inv.getHolder() instanceof RouletteGuiHolder holder) {
            holder.setState(RouletteGuiHolder.State.SELECTING);
        }

        // 1. 背景の装飾（灰色の板ガラス）
        ItemStack filler = createFillerItem();
        for (int i = 0; i < INVENTORY_SIZE; i++) {
            inv.setItem(i, filler);
        }

        RouletteMode currentMode = session.getSelectedMode();
        int currentCount = session.getSelectedCount();

        // 2. モード選択ボタン（表示順厳守：全建築用 ➜ フルブロック ➜ それ以外）
        inv.setItem(SLOT_MODE_ALL, createModeItem(RouletteMode.ALL, currentMode == RouletteMode.ALL));
        inv.setItem(SLOT_MODE_FULL, createModeItem(RouletteMode.FULL_BLOCK, currentMode == RouletteMode.FULL_BLOCK));
        inv.setItem(SLOT_MODE_NON_FULL, createModeItem(RouletteMode.NON_FULL_BLOCK, currentMode == RouletteMode.NON_FULL_BLOCK));

        // 3. 回数選択ボタン（1回, 3回, 5回）
        inv.setItem(SLOT_COUNT_1, createCountItem(1, currentCount == 1));
        inv.setItem(SLOT_COUNT_3, createCountItem(3, currentCount == 3));
        inv.setItem(SLOT_COUNT_5, createCountItem(5, currentCount == 5));

        // 4. 下段操作ボタン
        inv.setItem(SLOT_CANCEL, createCancelButton());
        inv.setItem(SLOT_VISIBILITY, createVisibilityButton(session.isBroadcastToAll()));
        inv.setItem(SLOT_INFO, createInfoItem(session));
        inv.setItem(SLOT_START, createStartButton());
    }

    /**
     * 指定された抽選回数と枠番号に対応するインベントリのスロット番号を返します。
     */
    public static int getResultSlot(int totalCount, int roundIndex) {
        return switch (totalCount) {
            case 1 -> 13;
            case 3 -> switch (roundIndex) {
                case 0 -> 11;
                case 1 -> 13;
                case 2 -> 15;
                default -> 13;
            };
            case 5 -> switch (roundIndex) {
                case 0 -> 11;
                case 1 -> 12;
                case 2 -> 13;
                case 3 -> 14;
                case 4 -> 15;
                default -> 13;
            };
            default -> 13;
        };
    }

    /**
     * スタートボタンが押された直後の「抽選中画面」を描画します。
     */
    public static void renderRolling(Inventory inv, RouletteSession session) {
        if (inv.getHolder() instanceof RouletteGuiHolder holder) {
            holder.setState(RouletteGuiHolder.State.ROLLING);
        }

        ItemStack filler = createFillerItem();
        for (int i = 0; i < INVENTORY_SIZE; i++) {
            inv.setItem(i, filler);
        }

        int count = session.getSelectedCount();
        for (int i = 0; i < count; i++) {
            int slot = getResultSlot(count, i);
            inv.setItem(slot, createRollingSlotItem(i + 1));
        }

        // 下段中央に「抽選中...」ステータス
        ItemStack statusItem = new ItemStack(Material.CLOCK);
        ItemMeta meta = statusItem.getItemMeta();
        if (meta != null) {
            meta.displayName(Component.text("抽選中...", NamedTextColor.GOLD, TextDecoration.BOLD).decoration(TextDecoration.ITALIC, false));
            List<Component> lore = new ArrayList<>();
            lore.add(Component.text("アイテムを1つずつ抽選しています！", NamedTextColor.YELLOW).decoration(TextDecoration.ITALIC, false));
            meta.lore(lore);
            statusItem.setItemMeta(meta);
        }
        inv.setItem(SLOT_INFO, statusItem);

        // 左下に閉じるボタン（バリア）
        inv.setItem(SLOT_CANCEL, createBarrierButton(
                Component.text("閉じる", NamedTextColor.RED, TextDecoration.BOLD).decoration(TextDecoration.ITALIC, false),
                List.of(Component.text("画面を閉じても抽選は最後まで継続されます。", NamedTextColor.GRAY).decoration(TextDecoration.ITALIC, false))
        ));
    }

    /**
     * 各回の抽選結果が出たときに、該当スロットのアイテムを本物のブロックに差し替えます。
     * エンチャントの輝きは付与せず、本来のブロックテクスチャを鮮明に表示します。
     */
    public static void revealResult(Inventory inv, int roundIndex, int totalCount, Material material) {
        int slot = getResultSlot(totalCount, roundIndex);
        ItemStack item = new ItemStack(material);
        ItemMeta meta = item.getItemMeta();
        if (meta != null) {
            Component displayName = Component.text((roundIndex + 1) + "回目の結果: ", NamedTextColor.GOLD, TextDecoration.BOLD)
                    .append(Component.translatable(material.translationKey(), NamedTextColor.GREEN, TextDecoration.BOLD))
                    .decoration(TextDecoration.ITALIC, false);
            meta.displayName(displayName);

            List<Component> lore = new ArrayList<>();
            String englishName = formatEnglishName(material);
            lore.add(Component.text("英語名: " + englishName, NamedTextColor.AQUA).decoration(TextDecoration.ITALIC, false));
            lore.add(Component.text("ID: " + material.getKey().asString(), NamedTextColor.DARK_GRAY).decoration(TextDecoration.ITALIC, false));
            meta.lore(lore);

            item.setItemMeta(meta);
        }
        inv.setItem(slot, item);
    }

    /**
     * 全回の抽選が完了した画面を描画します。
     */
    public static void renderFinished(Inventory inv, RouletteSession session, List<Material> results) {
        if (inv.getHolder() instanceof RouletteGuiHolder holder) {
            holder.setState(RouletteGuiHolder.State.FINISHED);
        }

        int count = session.getSelectedCount();
        for (int i = 0; i < count && i < results.size(); i++) {
            revealResult(inv, i, count, results.get(i));
        }

        // 下段中央に「抽選完了！」（ネザースター）
        ItemStack doneItem = new ItemStack(Material.NETHER_STAR);
        ItemMeta meta = doneItem.getItemMeta();
        if (meta != null) {
            meta.displayName(Component.text("★ 抽選完了！ ★", NamedTextColor.GREEN, TextDecoration.BOLD).decoration(TextDecoration.ITALIC, false));
            List<Component> lore = new ArrayList<>();
            lore.add(Component.text("すべてのブロックが決定しました！", NamedTextColor.YELLOW).decoration(TextDecoration.ITALIC, false));
            lore.add(Component.text("チャット欄のアイテム名クリックでIDコピーも可能です。", NamedTextColor.GRAY).decoration(TextDecoration.ITALIC, false));
            meta.lore(lore);
            doneItem.setItemMeta(meta);
        }
        inv.setItem(SLOT_INFO, doneItem);

        // 右下に「もう一度設定・抽選する」ボタン（レッドストーントーチ）
        ItemStack retryItem = new ItemStack(Material.REDSTONE_TORCH);
        ItemMeta retryMeta = retryItem.getItemMeta();
        if (retryMeta != null) {
            retryMeta.displayName(Component.text("↺ もう一度回す", NamedTextColor.GOLD, TextDecoration.BOLD).decoration(TextDecoration.ITALIC, false));
            List<Component> lore = new ArrayList<>();
            lore.add(Component.text("クリックすると設定画面に戻ります。", NamedTextColor.YELLOW).decoration(TextDecoration.ITALIC, false));
            retryMeta.lore(lore);
            retryItem.setItemMeta(retryMeta);
        }
        inv.setItem(SLOT_START, retryItem);

        // 左下に閉じるボタン（バリア）
        inv.setItem(SLOT_CANCEL, createBarrierButton(
                Component.text("閉じる", NamedTextColor.RED, TextDecoration.BOLD).decoration(TextDecoration.ITALIC, false),
                List.of(Component.text("GUI画面を閉じます。", NamedTextColor.GRAY).decoration(TextDecoration.ITALIC, false))
        ));
    }

    private static ItemStack createModeItem(RouletteMode mode, boolean isSelected) {
        ItemStack item = new ItemStack(mode.getIconMaterial());
        ItemMeta meta = item.getItemMeta();
        if (meta != null) {
            NamedTextColor titleColor = isSelected ? NamedTextColor.GREEN : NamedTextColor.WHITE;
            TextDecoration bold = TextDecoration.BOLD;
            meta.displayName(Component.text(mode.getDisplayName(), titleColor, bold).decoration(TextDecoration.ITALIC, false));

            List<Component> lore = new ArrayList<>();
            lore.add(Component.text(mode.getDescription(), NamedTextColor.GRAY).decoration(TextDecoration.ITALIC, false));
            lore.add(Component.empty());

            if (isSelected) {
                lore.add(Component.text("✔ 現在選択中", NamedTextColor.GREEN, TextDecoration.BOLD).decoration(TextDecoration.ITALIC, false));
                meta.addEnchant(Enchantment.UNBREAKING, 1, true);
                meta.addItemFlags(ItemFlag.HIDE_ENCHANTS);
            } else {
                lore.add(Component.text("▶ クリックして選択", NamedTextColor.YELLOW).decoration(TextDecoration.ITALIC, false));
            }

            meta.addItemFlags(ItemFlag.HIDE_ATTRIBUTES);
            meta.lore(lore);
            item.setItemMeta(meta);
        }
        return item;
    }

    private static ItemStack createCountItem(int count, boolean isSelected) {
        Material mat = switch (count) {
            case 1 -> Material.IRON_SHOVEL;
            case 3 -> Material.GOLDEN_AXE;
            case 5 -> Material.DIAMOND_PICKAXE;
            default -> Material.PAPER;
        };

        ItemStack item = new ItemStack(mat, count);
        ItemMeta meta = item.getItemMeta();
        if (meta != null) {
            NamedTextColor titleColor = isSelected ? NamedTextColor.AQUA : NamedTextColor.WHITE;
            meta.displayName(Component.text(count + " 回 抽選", titleColor, TextDecoration.BOLD).decoration(TextDecoration.ITALIC, false));

            List<Component> lore = new ArrayList<>();
            lore.add(Component.text(count + "個のブロックをランダムに抽選します。", NamedTextColor.GRAY).decoration(TextDecoration.ITALIC, false));
            lore.add(Component.empty());

            if (isSelected) {
                lore.add(Component.text("✔ 現在選択中", NamedTextColor.GREEN, TextDecoration.BOLD).decoration(TextDecoration.ITALIC, false));
                meta.addEnchant(Enchantment.UNBREAKING, 1, true);
                meta.addItemFlags(ItemFlag.HIDE_ENCHANTS);
            } else {
                lore.add(Component.text("▶ クリックして選択", NamedTextColor.YELLOW).decoration(TextDecoration.ITALIC, false));
            }

            meta.addItemFlags(ItemFlag.HIDE_ATTRIBUTES);
            meta.lore(lore);
            item.setItemMeta(meta);
        }
        return item;
    }

    private static ItemStack createInfoItem(RouletteSession session) {
        ItemStack item = new ItemStack(Material.BOOK);
        ItemMeta meta = item.getItemMeta();
        if (meta != null) {
            meta.displayName(Component.text("現在の設定内容", NamedTextColor.GOLD, TextDecoration.BOLD).decoration(TextDecoration.ITALIC, false));

            List<Component> lore = new ArrayList<>();
            lore.add(Component.text("・対象モード：", NamedTextColor.GRAY)
                    .append(Component.text(session.getSelectedMode().getDisplayName(), NamedTextColor.YELLOW, TextDecoration.BOLD))
                    .decoration(TextDecoration.ITALIC, false));
            lore.add(Component.text("・抽選回数　：", NamedTextColor.GRAY)
                    .append(Component.text(session.getSelectedCount() + " 回", NamedTextColor.AQUA, TextDecoration.BOLD))
                    .decoration(TextDecoration.ITALIC, false));
            lore.add(Component.text("・公開設定　：", NamedTextColor.GRAY)
                    .append(Component.text(session.isBroadcastToAll() ? "全体公開" : "自分のみ（非公開）", session.isBroadcastToAll() ? NamedTextColor.GREEN : NamedTextColor.AQUA, TextDecoration.BOLD))
                    .decoration(TextDecoration.ITALIC, false));
            lore.add(Component.empty());
            lore.add(Component.text("右下のトーチをクリックすると抽選を開始します！", NamedTextColor.YELLOW).decoration(TextDecoration.ITALIC, false));

            meta.lore(lore);
            item.setItemMeta(meta);
        }
        return item;
    }

    private static ItemStack createCancelButton() {
        return createBarrierButton(
                Component.text("キャンセル / 閉じる", NamedTextColor.RED, TextDecoration.BOLD).decoration(TextDecoration.ITALIC, false),
                List.of(Component.text("何も抽選せずにGUIを閉じます。", NamedTextColor.GRAY).decoration(TextDecoration.ITALIC, false))
        );
    }

    private static ItemStack createVisibilityButton(boolean isBroadcastToAll) {
        Material mat = isBroadcastToAll ? Material.ENDER_EYE : Material.ENDER_PEARL;
        ItemStack item = new ItemStack(mat);
        ItemMeta meta = item.getItemMeta();
        if (meta != null) {
            if (isBroadcastToAll) {
                meta.displayName(Component.text("公開設定: 【全体公開】", NamedTextColor.GREEN, TextDecoration.BOLD).decoration(TextDecoration.ITALIC, false));
                List<Component> lore = new ArrayList<>();
                lore.add(Component.text("抽選結果をサーバー全員のチャットに流します。", NamedTextColor.YELLOW).decoration(TextDecoration.ITALIC, false));
                lore.add(Component.empty());
                lore.add(Component.text("▶ クリックで「自分のみ（非公開）」に切り替え", NamedTextColor.AQUA).decoration(TextDecoration.ITALIC, false));
                meta.lore(lore);
            } else {
                meta.displayName(Component.text("公開設定: 【自分のみ（非公開）】", NamedTextColor.AQUA, TextDecoration.BOLD).decoration(TextDecoration.ITALIC, false));
                List<Component> lore = new ArrayList<>();
                lore.add(Component.text("抽選結果はあなたにだけ表示されます。", NamedTextColor.YELLOW).decoration(TextDecoration.ITALIC, false));
                lore.add(Component.empty());
                lore.add(Component.text("▶ クリックで「全体公開」に切り替え", NamedTextColor.GREEN).decoration(TextDecoration.ITALIC, false));
                meta.lore(lore);
            }
            meta.addItemFlags(ItemFlag.HIDE_ATTRIBUTES);
            item.setItemMeta(meta);
        }
        return item;
    }

    private static ItemStack createStartButton() {
        ItemStack item = new ItemStack(Material.REDSTONE_TORCH);
        ItemMeta meta = item.getItemMeta();
        if (meta != null) {
            meta.displayName(Component.text("▶ ルーレットを回す！", NamedTextColor.GREEN, TextDecoration.BOLD).decoration(TextDecoration.ITALIC, false));

            List<Component> lore = new ArrayList<>();
            lore.add(Component.text("設定した内容で抽選を開始します。", NamedTextColor.GRAY).decoration(TextDecoration.ITALIC, false));
            lore.add(Component.empty());
            lore.add(Component.text("※画面を開いたまま当選ブロックが表示されます", NamedTextColor.YELLOW).decoration(TextDecoration.ITALIC, false));

            meta.lore(lore);
            item.setItemMeta(meta);
        }
        return item;
    }

    private static ItemStack createRollingSlotItem(int round) {
        ItemStack item = new ItemStack(Material.LIGHT_GRAY_STAINED_GLASS_PANE);
        ItemMeta meta = item.getItemMeta();
        if (meta != null) {
            meta.displayName(Component.text(round + "枠目: 抽選待機中...", NamedTextColor.GRAY).decoration(TextDecoration.ITALIC, false));
            item.setItemMeta(meta);
        }
        return item;
    }

    public static ItemStack createFillerItem() {
        ItemStack item = new ItemStack(Material.GRAY_STAINED_GLASS_PANE);
        ItemMeta meta = item.getItemMeta();
        if (meta != null) {
            meta.displayName(Component.empty());
            item.setItemMeta(meta);
        }
        return item;
    }

    public static ItemStack createBarrierButton(Component name, List<Component> lore) {
        ItemStack item = new ItemStack(Material.BARRIER);
        ItemMeta meta = item.getItemMeta();
        if (meta != null) {
            meta.displayName(name);
            if (lore != null) {
                meta.lore(lore);
            }
            item.setItemMeta(meta);
        }
        return item;
    }

    public static String formatEnglishName(Material material) {
        String[] words = material.name().split("_");
        StringBuilder sb = new StringBuilder();
        for (String word : words) {
            if (word.isEmpty()) continue;
            sb.append(Character.toUpperCase(word.charAt(0)))
              .append(word.substring(1).toLowerCase())
              .append(" ");
        }
        return sb.toString().trim();
    }
}
