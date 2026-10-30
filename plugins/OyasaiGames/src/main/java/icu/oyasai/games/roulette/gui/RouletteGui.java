package icu.oyasai.games.roulette.gui;

import icu.oyasai.games.roulette.model.RouletteMode;
import icu.oyasai.games.roulette.model.RouletteSession;
import icu.oyasai.games.roulette.service.RouletteManager;
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
    public static final int INVENTORY_SIZE = 36;

    // スロット配置の定数定義
    public static final int SLOT_MODE_ALL = 10;
    public static final int SLOT_MODE_FULL = 13;
    public static final int SLOT_MODE_NON_FULL = 14;

    // 各モードの回数選択（クリックで増減）。全建築用は単独、フルブロックとそれ以外は分けて引くモード用
    public static final int SLOT_COUNT_ALL = 19;
    public static final int SLOT_COUNT_FULL = 22;
    public static final int SLOT_COUNT_NON_FULL = 23;

    public static final int SLOT_CANCEL = 27;
    public static final int SLOT_VISIBILITY = 29;
    public static final int SLOT_RECEIVE_CHAT = 30;
    public static final int SLOT_STATUS = 31;
    public static final int SLOT_INFO = 34;
    public static final int SLOT_START = 35;

    /**
     * プレイヤーにルーレットGUIを開きます。
     */
    public static void open(Player player, RouletteSession session) {
        RouletteGuiHolder holder = new RouletteGuiHolder(session);
        Component title = Component.text("おやさいルーレット", NamedTextColor.DARK_GREEN, TextDecoration.BOLD);
        Inventory inv = Bukkit.createInventory(holder, INVENTORY_SIZE, title);
        holder.setInventory(inv);

        render(inv, player, session);
        player.openInventory(inv);
    }

    /**
     * 現在のセッション状態に合わせてGUI内のアイテムを描画・更新します。
     */
    public static void render(Inventory inv, RouletteSession session) {
        Player player = Bukkit.getPlayer(session.getPlayerUuid());
        render(inv, player, session);
    }

    /**
     * プレイヤーおよび現在のセッション状態に合わせてGUI内のアイテムを描画・更新します。
     */
    public static void render(Inventory inv, Player player, RouletteSession session) {
        if (inv.getHolder() instanceof RouletteGuiHolder holder) {
            holder.setState(RouletteGuiHolder.State.SELECTING);
        }

        // 1. 背景の装飾（灰色の板ガラス）
        ItemStack filler = createFillerItem();
        for (int i = 0; i < INVENTORY_SIZE; i++) {
            inv.setItem(i, filler);
        }

        boolean hasSpecial = session.hasSpecialAccess();
        boolean split = session.isSplitMode();

        // 2. モード選択ボタン（表示順厳守：全建築用 ➜ フルブロック ➜ それ以外）
        //    フルブロックとそれ以外は「分けて引くモード」の間、両方とも選択中として表示する
        inv.setItem(SLOT_MODE_ALL, createModeItem(RouletteMode.ALL, !split, hasSpecial));
        inv.setItem(SLOT_MODE_FULL, createModeItem(RouletteMode.FULL_BLOCK, split, hasSpecial));
        inv.setItem(SLOT_MODE_NON_FULL, createModeItem(RouletteMode.NON_FULL_BLOCK, split, hasSpecial));

        // 3. 回数ボタン。選んでいないモード側のボタンは押せない
        inv.setItem(SLOT_COUNT_ALL, split
                ? createDisabledItem("全建築用アイテムを選ぶと使えます")
                : createCountItem(RouletteMode.ALL, session.getSelectedCount(), session));
        inv.setItem(SLOT_COUNT_FULL, split
                ? createCountItem(RouletteMode.FULL_BLOCK, session.getFullBlockCount(), session)
                : createDisabledItem("フルブロックを選ぶと使えます"));
        inv.setItem(SLOT_COUNT_NON_FULL, split
                ? createCountItem(RouletteMode.NON_FULL_BLOCK, session.getNonFullBlockCount(), session)
                : createDisabledItem("装飾を選ぶと使えます"));

        // 他人の結果受信設定の取得
        boolean isReceiveChat = true;
        if (player != null && icu.oyasai.games.OyasaiGamesPlugin.getInstance() != null) {
            RouletteManager rm = icu.oyasai.games.OyasaiGamesPlugin.getInstance().getRouletteManager();
            if (rm != null) {
                isReceiveChat = rm.isChatReceiveEnabled(player);
            }
        }

        // 5. 下段操作ボタン
        inv.setItem(SLOT_CANCEL, createCancelButton());
        inv.setItem(SLOT_VISIBILITY, createVisibilityButton(session.isBroadcastToAll()));
        inv.setItem(SLOT_RECEIVE_CHAT, createReceiveChatItem(isReceiveChat));
        inv.setItem(SLOT_INFO, createInfoItem(session, isReceiveChat));
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
            default -> getGridResultSlot(totalCount, roundIndex);
        };
    }

    /**
     * 1・3・5回以外の回数用の配置です。
     * 9回までは中段（9〜17）に中央寄せで1列、10回以上は上段から9個ずつ並べます。
     */
    private static int getGridResultSlot(int totalCount, int roundIndex) {
        if (totalCount <= 9) {
            return 9 + (9 - totalCount) / 2 + roundIndex;
        }
        return roundIndex;
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

        int count = session.getTotalCount();
        for (int i = 0; i < count; i++) {
            int slot = getResultSlot(count, i);
            inv.setItem(slot, createRollingSlotItem(i + 1));
        }

        // 下段中央に「抽選中...」ステータス
        ItemStack statusItem = new ItemStack(Material.CLOCK);
        ItemMeta meta = statusItem.getItemMeta();
        if (meta != null) {
            meta.displayName(boldLine("抽選中...", NamedTextColor.GOLD));
            List<Component> lore = new ArrayList<>();
            lore.add(line("アイテムを1つずつ抽選しています！", NamedTextColor.YELLOW));
            meta.lore(lore);
            statusItem.setItemMeta(meta);
        }
        inv.setItem(SLOT_STATUS, statusItem);

        // 左下に閉じるボタン（バリア）
        inv.setItem(SLOT_CANCEL, createBarrierButton(
                boldLine("閉じる", NamedTextColor.RED),
                List.of(line("画面を閉じても抽選は最後まで継続されます。", NamedTextColor.GRAY))
        ));
    }

    /**
     * 各回の抽選結果が出たときに、該当スロットのアイテムを本物のブロックに差し替えます。
     * エンチャントの輝きは付与せず、本来のブロックテクスチャを鮮明に表示します。
     */
    public static void revealResult(Inventory inv, int roundIndex, int totalCount, Material material, RouletteMode source) {
        int slot = getResultSlot(totalCount, roundIndex);
        ItemStack item = new ItemStack(material);
        ItemMeta meta = item.getItemMeta();
        if (meta != null) {
            Component displayName = Component.text((roundIndex + 1) + "回目の結果: ", NamedTextColor.GOLD, TextDecoration.BOLD)
                    .append(Component.translatable(material.translationKey(), NamedTextColor.GREEN, TextDecoration.BOLD))
                    .decoration(TextDecoration.ITALIC, false);
            meta.displayName(displayName);

            List<Component> lore = new ArrayList<>();
            if (source != null && source != RouletteMode.ALL) {
                lore.add(line("抽選元: " + source.getDisplayName(), NamedTextColor.YELLOW));
            }
            String englishName = formatEnglishName(material);
            lore.add(line("英語名: " + englishName, NamedTextColor.AQUA));
            lore.add(line("ID: " + material.getKey().asString(), NamedTextColor.DARK_GRAY));
            meta.lore(lore);

            item.setItemMeta(meta);
        }
        inv.setItem(slot, item);
    }

    /**
     * 全回の抽選が完了した画面を描画します。
     */
    public static void renderFinished(Inventory inv, List<Material> results, List<RouletteMode> sources) {
        if (inv.getHolder() instanceof RouletteGuiHolder holder) {
            holder.setState(RouletteGuiHolder.State.FINISHED);
        }

        int count = results.size();
        for (int i = 0; i < count; i++) {
            revealResult(inv, i, count, results.get(i), sources.get(i));
        }

        // 下段中央に「抽選完了！」（ネザースター）
        ItemStack doneItem = new ItemStack(Material.NETHER_STAR);
        ItemMeta meta = doneItem.getItemMeta();
        if (meta != null) {
            meta.displayName(boldLine("★ 抽選完了！ ★", NamedTextColor.GREEN));
            List<Component> lore = new ArrayList<>();
            lore.add(line("すべてのブロックが決定しました！", NamedTextColor.YELLOW));
            lore.add(line("チャット欄のアイテム名クリックでIDコピーも可能です。", NamedTextColor.GRAY));
            meta.lore(lore);
            doneItem.setItemMeta(meta);
        }
        inv.setItem(SLOT_STATUS, doneItem);

        // 右下に「もう一度設定・抽選する」ボタン（レッドストーントーチ）
        ItemStack retryItem = new ItemStack(Material.REDSTONE_TORCH);
        ItemMeta retryMeta = retryItem.getItemMeta();
        if (retryMeta != null) {
            retryMeta.displayName(boldLine("↺ もう一度回す", NamedTextColor.GOLD));
            List<Component> lore = new ArrayList<>();
            lore.add(line("クリックすると設定画面に戻ります。", NamedTextColor.YELLOW));
            retryMeta.lore(lore);
            retryItem.setItemMeta(retryMeta);
        }
        inv.setItem(SLOT_START, retryItem);

        // 左下に閉じるボタン（バリア）
        inv.setItem(SLOT_CANCEL, createBarrierButton(
                boldLine("閉じる", NamedTextColor.RED),
                List.of(line("GUI画面を閉じます。", NamedTextColor.GRAY))
        ));
    }

    private static ItemStack createModeItem(RouletteMode mode, boolean isSelected, boolean hasSpecialAccess) {
        ItemStack item = new ItemStack(mode.getIconMaterial());
        ItemMeta meta = item.getItemMeta();
        if (meta != null) {
            NamedTextColor titleColor = isSelected ? NamedTextColor.GREEN : NamedTextColor.WHITE;
            TextDecoration bold = TextDecoration.BOLD;
            String prefix = isSelected ? "✔ 【選択中】" : "";
            meta.displayName(Component.text(prefix + mode.getDisplayName(), titleColor, bold).decoration(TextDecoration.ITALIC, false));

            List<Component> lore = new ArrayList<>();
            lore.add(line(mode.getDescription(), NamedTextColor.GRAY));
            lore.add(Component.empty());

            // 匠特典 / ロック中の表示
            if (hasSpecialAccess) {
                lore.add(line("✨ 匠特典: コマンドブロック等の特殊アイテム解放中！", NamedTextColor.GOLD));
            } else {
                lore.add(line("🔒 匠限定ブロック（コマブロ等）: ロック中", NamedTextColor.DARK_GRAY));
            }

            if (isSelected) {
                setGlow(meta, true);
            } else {
                lore.add(Component.empty());
                lore.add(line("▶ クリックして選択", NamedTextColor.YELLOW));
                setGlow(meta, false);
            }

            meta.addItemFlags(ItemFlag.HIDE_ATTRIBUTES);
            meta.lore(lore);
            item.setItemMeta(meta);
        }
        return item;
    }

    /**
     * 各モードの回数ボタンです。
     * 左クリックで1回増え（上限の次は0に戻る）、右クリックで1回減ります。重なり数は回数と同じです。
     */
    private static ItemStack createCountItem(RouletteMode mode, int count, RouletteSession session) {
        ItemStack item = new ItemStack(Material.RABBIT_FOOT, Math.max(1, count));
        ItemMeta meta = item.getItemMeta();
        if (meta != null) {
            NamedTextColor color = count > 0 ? NamedTextColor.GREEN : NamedTextColor.GRAY;
            meta.displayName(Component.text(mode.getDisplayName() + "： " + count + " 回", color, TextDecoration.BOLD).decoration(TextDecoration.ITALIC, false));

            List<Component> lore = new ArrayList<>();
            if (mode != RouletteMode.ALL) {
                lore.add(line("合計: " + session.getTotalCount() + " / " + RouletteSession.MAX_TOTAL_COUNT + " 回", NamedTextColor.GRAY));
                lore.add(line("フルブロックと装飾で合計" + RouletteSession.MAX_TOTAL_COUNT + "個まで", NamedTextColor.GRAY));
                lore.add(Component.empty());
            }
            lore.add(line("▶ 左クリック: 1回増やす", NamedTextColor.YELLOW));
            lore.add(line("▶ 右クリック: 1回減らす", NamedTextColor.YELLOW));

            if (count > 0) {
                setGlow(meta, true);
            } else {
                setGlow(meta, false);
            }
            meta.addItemFlags(ItemFlag.HIDE_ATTRIBUTES);
            meta.lore(lore);
            item.setItemMeta(meta);
        }
        return item;
    }

    /**
     * 今のモードでは使えないボタンの表示です。
     */
    private static ItemStack createDisabledItem(String hint) {
        ItemStack item = new ItemStack(Material.GRAY_DYE);
        ItemMeta meta = item.getItemMeta();
        if (meta != null) {
            meta.displayName(boldLine("今は使えません", NamedTextColor.DARK_GRAY));
            meta.lore(List.of(line(hint, NamedTextColor.GRAY)));
            item.setItemMeta(meta);
        }
        return item;
    }

    private static ItemStack createInfoItem(RouletteSession session, boolean isReceiveChat) {
        ItemStack item = new ItemStack(Material.BOOK);
        ItemMeta meta = item.getItemMeta();
        if (meta != null) {
            meta.displayName(boldLine("現在の設定内容", NamedTextColor.GOLD));

            List<Component> lore = new ArrayList<>();
            if (session.isSplitMode()) {
                lore.add(Component.text("・対象モード：", NamedTextColor.GRAY)
                        .append(Component.text("フルブロック／装飾を分けて抽選", NamedTextColor.YELLOW, TextDecoration.BOLD))
                        .decoration(TextDecoration.ITALIC, false));
                lore.add(Component.text("・フルブロック　：", NamedTextColor.GRAY)
                        .append(Component.text(session.getFullBlockCount() + " 回", NamedTextColor.AQUA, TextDecoration.BOLD))
                        .decoration(TextDecoration.ITALIC, false));
                lore.add(Component.text("・装飾　　　　　：", NamedTextColor.GRAY)
                        .append(Component.text(session.getNonFullBlockCount() + " 回", NamedTextColor.AQUA, TextDecoration.BOLD))
                        .decoration(TextDecoration.ITALIC, false));
                lore.add(Component.text("・合計　　　　　：", NamedTextColor.GRAY)
                        .append(Component.text(session.getTotalCount() + " 回", NamedTextColor.AQUA, TextDecoration.BOLD))
                        .decoration(TextDecoration.ITALIC, false));
            } else {
                lore.add(Component.text("・対象モード：", NamedTextColor.GRAY)
                        .append(Component.text(session.getSelectedMode().getDisplayName(), NamedTextColor.YELLOW, TextDecoration.BOLD))
                        .decoration(TextDecoration.ITALIC, false));
                lore.add(Component.text("・抽選回数　：", NamedTextColor.GRAY)
                        .append(Component.text(session.getTotalCount() + " 回", NamedTextColor.AQUA, TextDecoration.BOLD))
                        .decoration(TextDecoration.ITALIC, false));
            }
            lore.add(Component.text("・公開設定　：", NamedTextColor.GRAY)
                    .append(Component.text(session.isBroadcastToAll() ? "全体公開" : "自分のみ（非公開）", session.isBroadcastToAll() ? NamedTextColor.GREEN : NamedTextColor.AQUA, TextDecoration.BOLD))
                    .decoration(TextDecoration.ITALIC, false));
            lore.add(Component.text("・他人の結果受信：", NamedTextColor.GRAY)
                    .append(Component.text(isReceiveChat ? "受信する (ON)" : "非表示 (OFF)", isReceiveChat ? NamedTextColor.GREEN : NamedTextColor.RED, TextDecoration.BOLD))
                    .decoration(TextDecoration.ITALIC, false));

            // 匠特典 / ロック中ステータス
            if (session.hasSpecialAccess()) {
                lore.add(Component.text("・特殊ブロック：", NamedTextColor.GRAY)
                        .append(Component.text("✨ 匠特典: コマンドブロック等の特殊アイテム解放中！", NamedTextColor.YELLOW, TextDecoration.BOLD))
                        .decoration(TextDecoration.ITALIC, false));
            } else {
                lore.add(Component.text("・特殊ブロック：", NamedTextColor.GRAY)
                        .append(Component.text("🔒 匠限定ブロック: ロック中", NamedTextColor.RED))
                        .decoration(TextDecoration.ITALIC, false));
            }

            lore.add(Component.empty());
            lore.add(line("右下のトーチをクリックすると抽選を開始します！", NamedTextColor.YELLOW));

            meta.lore(lore);
            item.setItemMeta(meta);
        }
        return item;
    }

    public static ItemStack createReceiveChatItem(boolean isReceive) {
        ItemStack item = new ItemStack(Material.BELL);
        ItemMeta meta = item.getItemMeta();
        if (meta != null) {
            if (isReceive) {
                Component name = boldLine("🔔 他人の結果受信: 【ON】", NamedTextColor.GREEN);
                meta.displayName(name);
                List<Component> lore = new ArrayList<>();
                lore.add(line("他プレイヤーのルーレット結果を", NamedTextColor.GRAY));
                lore.add(line("チャットで受信します。", NamedTextColor.GRAY));
                lore.add(Component.empty());
                lore.add(line("現在の設定: ", NamedTextColor.GRAY)
                        .append(boldLine("受信する (ON)", NamedTextColor.GREEN)));
                lore.add(line("▶ クリックして「受信OFF (非表示)」に切り替え", NamedTextColor.YELLOW));
                lore.add(Component.empty());
                lore.add(line("※自分が回したルーレットの結果は常に表示されます", NamedTextColor.DARK_GRAY));
                meta.lore(lore);
                setGlow(meta, true);
            } else {
                Component name = boldLine("🔕 他人の結果受信: 【OFF】", NamedTextColor.RED);
                meta.displayName(name);
                List<Component> lore = new ArrayList<>();
                lore.add(line("他プレイヤーのルーレット結果を", NamedTextColor.GRAY));
                lore.add(line("チャットに流さないようにミュートします。", NamedTextColor.GRAY));
                lore.add(Component.empty());
                lore.add(line("現在の設定: ", NamedTextColor.GRAY)
                        .append(boldLine("非表示 (OFF)", NamedTextColor.RED)));
                lore.add(line("▶ クリックして「受信ON (表示)」に切り替え", NamedTextColor.YELLOW));
                lore.add(Component.empty());
                lore.add(line("※自分が回したルーレットの結果は常に表示されます", NamedTextColor.DARK_GRAY));
                meta.lore(lore);
                setGlow(meta, false);
            }
            meta.addItemFlags(ItemFlag.HIDE_ATTRIBUTES);
            item.setItemMeta(meta);
        }
        return item;
    }

    private static ItemStack createCancelButton() {
        return createBarrierButton(
                boldLine("キャンセル / 閉じる", NamedTextColor.RED),
                List.of(line("何も抽選せずにGUIを閉じます。", NamedTextColor.GRAY))
        );
    }

    private static ItemStack createVisibilityButton(boolean isBroadcastToAll) {
        Material mat = isBroadcastToAll ? Material.ENDER_EYE : Material.ENDER_PEARL;
        ItemStack item = new ItemStack(mat);
        ItemMeta meta = item.getItemMeta();
        if (meta != null) {
            if (isBroadcastToAll) {
                meta.displayName(boldLine("公開設定: 【全体公開】", NamedTextColor.GREEN));
                List<Component> lore = new ArrayList<>();
                lore.add(line("抽選結果をサーバー全員のチャットに流します。", NamedTextColor.YELLOW));
                lore.add(Component.empty());
                lore.add(line("▶ クリックで「自分のみ（非公開）」に切り替え", NamedTextColor.AQUA));
                meta.lore(lore);
                setGlow(meta, true);
            } else {
                meta.displayName(boldLine("公開設定: 【自分のみ（非公開）】", NamedTextColor.AQUA));
                List<Component> lore = new ArrayList<>();
                lore.add(line("抽選結果はあなたにだけ表示されます。", NamedTextColor.YELLOW));
                lore.add(Component.empty());
                lore.add(line("▶ クリックで「全体公開」に切り替え", NamedTextColor.GREEN));
                meta.lore(lore);
                setGlow(meta, false);
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
            meta.displayName(boldLine("▶ ルーレットを回す！", NamedTextColor.GREEN));

            List<Component> lore = new ArrayList<>();
            lore.add(line("設定した内容で抽選を開始します。", NamedTextColor.GRAY));
            lore.add(Component.empty());
            lore.add(line("※画面を開いたまま当選ブロックが表示されます", NamedTextColor.YELLOW));

            meta.lore(lore);
            item.setItemMeta(meta);
        }
        return item;
    }

    private static ItemStack createRollingSlotItem(int round) {
        ItemStack item = new ItemStack(Material.LIGHT_GRAY_STAINED_GLASS_PANE);
        ItemMeta meta = item.getItemMeta();
        if (meta != null) {
            meta.displayName(line(round + "枠目: 抽選待機中...", NamedTextColor.GRAY));
            item.setItemMeta(meta);
        }
        return item;
    }

    /**
     * 斜体にならない通常の説明行を作ります（アイテムの名前・説明文は既定で斜体になるため）。
     */
    private static Component line(String text, NamedTextColor color) {
        return Component.text(text, color).decoration(TextDecoration.ITALIC, false);
    }

    /**
     * 斜体にならない太字の行を作ります。
     */
    private static Component boldLine(String text, NamedTextColor color) {
        return Component.text(text, color, TextDecoration.BOLD).decoration(TextDecoration.ITALIC, false);
    }

    /**
     * アイテムにエンチャントの光沢を付け外しします（光らせる場合もエンチャント名は隠します）。
     */
    private static void setGlow(ItemMeta meta, boolean glow) {
        meta.setEnchantmentGlintOverride(glow);
        if (glow) {
            meta.addEnchant(Enchantment.UNBREAKING, 1, true);
            meta.addItemFlags(ItemFlag.HIDE_ENCHANTS);
        }
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
