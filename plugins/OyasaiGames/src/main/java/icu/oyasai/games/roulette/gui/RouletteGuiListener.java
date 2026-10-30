package icu.oyasai.games.roulette.gui;

import icu.oyasai.games.roulette.model.RouletteMode;
import icu.oyasai.games.roulette.model.RouletteSession;
import icu.oyasai.games.roulette.service.RouletteManager;
import net.kyori.adventure.text.Component;
import net.kyori.adventure.text.format.NamedTextColor;
import net.kyori.adventure.text.format.TextDecoration;
import org.bukkit.Sound;
import org.bukkit.entity.Player;
import org.bukkit.event.EventHandler;
import org.bukkit.event.EventPriority;
import org.bukkit.event.Listener;
import org.bukkit.event.inventory.InventoryClickEvent;
import org.bukkit.event.inventory.InventoryDragEvent;
import org.bukkit.inventory.Inventory;

/**
 * ルーレットGUI内のクリック操作やアイテム移動を監視・制御するリスナークラスです。
 * 
 * プレイヤーがアイテムを持ち出そうとする行為を完全にキャンセルし、
 * 各ボタンがクリックされた際の画面更新や抽選開始を安全に実行します。
 */
public class RouletteGuiListener implements Listener {
    private final RouletteManager manager;

    public RouletteGuiListener(RouletteManager manager) {
        this.manager = manager;
    }

    @EventHandler(priority = EventPriority.HIGH)
    public void onInventoryClick(InventoryClickEvent event) {
        // 対象のインベントリがおやさいルーレットGUIか判定
        if (!(event.getView().getTopInventory().getHolder() instanceof RouletteGuiHolder holder)) {
            return;
        }

        // GUI内のすべての通常操作（取り出し・移動・シフトクリック・数字キー入れ替え等）をキャンセル
        event.setCancelled(true);

        if (!(event.getWhoClicked() instanceof Player player)) {
            return;
        }

        // プレイヤー自身のインベントリ（下段）をクリックした場合は何もしない
        if (event.getClickedInventory() != event.getView().getTopInventory()) {
            return;
        }

        int slot = event.getSlot();
        Inventory inv = event.getView().getTopInventory();

        switch (holder.getState()) {
            case ROLLING -> handleRollingClick(player, slot);
            case FINISHED -> handleFinishedClick(player, holder, inv, slot);
            case SELECTING -> handleSelectingClick(player, holder, inv, slot, event.isRightClick());
        }
    }

    /**
     * 抽選演出中：キャンセル（閉じる）ボタンのみ許可します。
     */
    private void handleRollingClick(Player player, int slot) {
        if (slot == RouletteGui.SLOT_CANCEL) {
            closeGui(player);
        }
    }

    /**
     * 抽選完了：閉じるボタンまたは「もう一度設定・抽選する」ボタンを処理します。
     */
    private void handleFinishedClick(Player player, RouletteGuiHolder holder, Inventory inv, int slot) {
        if (slot == RouletteGui.SLOT_CANCEL) {
            closeGui(player);
        } else if (slot == RouletteGui.SLOT_START) {
            holder.setState(RouletteGuiHolder.State.SELECTING);
            player.playSound(player.getLocation(), Sound.UI_BUTTON_CLICK, 0.8f, 1.0f);
            RouletteGui.render(inv, player, holder.getSession());
        }
    }

    /**
     * 設定画面のボタンを処理します。
     */
    private void handleSelectingClick(Player player, RouletteGuiHolder holder, Inventory inv, int slot, boolean rightClick) {
        RouletteSession session = holder.getSession();

        switch (slot) {
            case RouletteGui.SLOT_MODE_ALL -> {
                session.setSelectedMode(RouletteMode.ALL);
                refresh(player, inv, session);
            }
            // フルブロック／装飾はどちらを押しても「分けて引くモード」に切り替わる
            case RouletteGui.SLOT_MODE_FULL, RouletteGui.SLOT_MODE_NON_FULL -> {
                if (!session.isSplitMode()) {
                    session.setSelectedMode(RouletteMode.FULL_BLOCK);
                }
                refresh(player, inv, session);
            }
            case RouletteGui.SLOT_COUNT_ALL -> changeCount(player, inv, session, RouletteMode.ALL, rightClick);
            case RouletteGui.SLOT_COUNT_FULL -> changeCount(player, inv, session, RouletteMode.FULL_BLOCK, rightClick);
            case RouletteGui.SLOT_COUNT_NON_FULL -> changeCount(player, inv, session, RouletteMode.NON_FULL_BLOCK, rightClick);
            case RouletteGui.SLOT_CANCEL -> closeGui(player);
            case RouletteGui.SLOT_VISIBILITY -> {
                session.toggleBroadcast();
                refresh(player, inv, session);
            }
            case RouletteGui.SLOT_RECEIVE_CHAT -> toggleReceiveChat(player, inv, session);
            case RouletteGui.SLOT_INFO -> player.playSound(player.getLocation(), Sound.ITEM_BOOK_PAGE_TURN, 0.7f, 1.0f);
            case RouletteGui.SLOT_START -> startRoulette(player, holder, inv, session);
            default -> {
                // その他の装飾枠
            }
        }
    }

    /**
     * 回数ボタンの処理です（左クリックで増加、右クリックで減少）。
     * いま選んでいるモードの側のボタンだけ押せます。
     */
    private void changeCount(Player player, Inventory inv, RouletteSession session, RouletteMode target, boolean rightClick) {
        boolean usable = (target == RouletteMode.ALL) != session.isSplitMode();
        if (!usable) {
            playDeniedSound(player);
            return;
        }
        if (rightClick) {
            session.decreaseCount(target);
        } else {
            session.cycleCount(target);
        }
        refresh(player, inv, session);
    }

    /**
     * 他人の結果をチャットで受け取るかどうかを切り替えます。
     */
    private void toggleReceiveChat(Player player, Inventory inv, RouletteSession session) {
        boolean newReceive = manager.toggleChatReceive(player);
        player.playSound(player.getLocation(), Sound.UI_BUTTON_CLICK, 0.8f, newReceive ? 1.4f : 0.8f);
        String statusText = newReceive ? "受信する (ON)" : "受信しない (OFF)";
        NamedTextColor statusColor = newReceive ? NamedTextColor.GREEN : NamedTextColor.RED;
        player.sendMessage(
                Component.text("[おやさいルーレット] 他人のルーレット結果のチャット通知を ", NamedTextColor.GOLD)
                        .append(Component.text(statusText, statusColor, TextDecoration.BOLD))
                        .append(Component.text(" に切り替えました！", NamedTextColor.GOLD))
        );
        RouletteGui.render(inv, player, session);
    }

    /**
     * 抽選開始ボタンの処理です。回数・クールダウン・二重実行を確認してから抽選を始めます。
     */
    private void startRoulette(Player player, RouletteGuiHolder holder, Inventory inv, RouletteSession session) {
        if (session.getTotalCount() < 1) {
            deny(player, "抽選回数を1回以上選んでください。", 0.7f);
            return;
        }

        long remaining = manager.getRemainingCooldownSeconds(player.getUniqueId());
        if (remaining > 0) {
            deny(player, "クールダウン中です。あと " + remaining + " 秒お待ちください。", 1.0f);
            return;
        }

        if (manager.isRunning(player.getUniqueId())) {
            deny(player, "現在、あなたの抽選タスクが実行中です。完了をお待ちください。", 1.0f);
            return;
        }

        // 抽選画面レイアウトへ即時移行（画面を開いたまま維持）
        RouletteGui.renderRolling(inv, session);
        player.playSound(player.getLocation(), Sound.UI_BUTTON_CLICK, 0.8f, 1.2f);

        // バックグラウンド実況タスク開始
        boolean started = manager.startRoulette(player, session);
        if (!started) {
            holder.setState(RouletteGuiHolder.State.SELECTING);
            RouletteGui.render(inv, player, session);
        }
    }

    /**
     * 押せない理由を赤字で伝えて、拒否音を鳴らします。
     */
    private void deny(Player player, String message, float volume) {
        player.sendMessage(Component.text(message, NamedTextColor.RED));
        player.playSound(player.getLocation(), Sound.ENTITY_VILLAGER_NO, volume, 1.0f);
    }

    private void closeGui(Player player) {
        player.playSound(player.getLocation(), Sound.UI_BUTTON_CLICK, 0.8f, 0.8f);
        player.closeInventory();
    }

    /**
     * ボタン音を鳴らして、設定画面を描き直します。
     */
    private void refresh(Player player, Inventory inv, RouletteSession session) {
        playButtonSound(player);
        RouletteGui.render(inv, player, session);
    }
    @EventHandler(priority = EventPriority.HIGH)
    public void onInventoryDrag(InventoryDragEvent event) {
        if (event.getView().getTopInventory().getHolder() instanceof RouletteGuiHolder) {
            event.setCancelled(true);
        }
    }

    @EventHandler
    public void onPlayerQuit(org.bukkit.event.player.PlayerQuitEvent event) {
        manager.onPlayerQuit(event.getPlayer().getUniqueId());
    }

    private void playDeniedSound(Player player) {
        player.playSound(player.getLocation(), Sound.ENTITY_VILLAGER_NO, 0.7f, 1.0f);
    }

    private void playButtonSound(Player player) {
        player.playSound(player.getLocation(), Sound.UI_BUTTON_CLICK, 0.7f, 1.2f);
    }
}
