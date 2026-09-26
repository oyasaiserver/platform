package icu.oyasai.games.roulette.gui;

import icu.oyasai.games.roulette.model.RouletteMode;
import icu.oyasai.games.roulette.model.RouletteSession;
import icu.oyasai.games.roulette.service.RouletteManager;
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
        RouletteSession session = holder.getSession();
        Inventory inv = event.getView().getTopInventory();
        RouletteGuiHolder.State state = holder.getState();

        if (state == RouletteGuiHolder.State.ROLLING) {
            // 抽選演出中：キャンセル（閉じる）ボタンのみ許可
            if (slot == RouletteGui.SLOT_CANCEL) {
                player.playSound(player.getLocation(), Sound.UI_BUTTON_CLICK, 0.8f, 0.8f);
                player.closeInventory();
            }
            return;
        }

        if (state == RouletteGuiHolder.State.FINISHED) {
            // 抽選完了：閉じるボタンまたは「もう一度設定・抽選する」ボタンを処理
            if (slot == RouletteGui.SLOT_CANCEL) {
                player.playSound(player.getLocation(), Sound.UI_BUTTON_CLICK, 0.8f, 0.8f);
                player.closeInventory();
            } else if (slot == RouletteGui.SLOT_START) {
                holder.setState(RouletteGuiHolder.State.SELECTING);
                player.playSound(player.getLocation(), Sound.UI_BUTTON_CLICK, 0.8f, 1.0f);
                RouletteGui.render(inv, session);
            }
            return;
        }

        // state == SELECTING（設定画面）
        switch (slot) {
            // モード選択
            case RouletteGui.SLOT_MODE_ALL -> {
                session.setSelectedMode(RouletteMode.ALL);
                playButtonSound(player);
                RouletteGui.render(inv, session);
            }
            case RouletteGui.SLOT_MODE_FULL -> {
                session.setSelectedMode(RouletteMode.FULL_BLOCK);
                playButtonSound(player);
                RouletteGui.render(inv, session);
            }
            case RouletteGui.SLOT_MODE_NON_FULL -> {
                session.setSelectedMode(RouletteMode.NON_FULL_BLOCK);
                playButtonSound(player);
                RouletteGui.render(inv, session);
            }

            // 回数選択
            case RouletteGui.SLOT_COUNT_1 -> {
                session.setSelectedCount(1);
                playButtonSound(player);
                RouletteGui.render(inv, session);
            }
            case RouletteGui.SLOT_COUNT_3 -> {
                session.setSelectedCount(3);
                playButtonSound(player);
                RouletteGui.render(inv, session);
            }
            case RouletteGui.SLOT_COUNT_5 -> {
                session.setSelectedCount(5);
                playButtonSound(player);
                RouletteGui.render(inv, session);
            }

            // キャンセルボタン
            case RouletteGui.SLOT_CANCEL -> {
                player.playSound(player.getLocation(), Sound.UI_BUTTON_CLICK, 0.8f, 0.8f);
                player.closeInventory();
            }

            // 公開/非公開切り替えボタン
            case RouletteGui.SLOT_VISIBILITY -> {
                session.toggleBroadcast();
                playButtonSound(player);
                RouletteGui.render(inv, session);
            }

            // 抽選開始ボタン
            case RouletteGui.SLOT_START -> {
                long remaining = manager.getRemainingCooldownSeconds(player.getUniqueId());
                if (remaining > 0) {
                    player.sendMessage(net.kyori.adventure.text.Component.text("クールダウン中です。あと " + remaining + " 秒お待ちください。", net.kyori.adventure.text.format.NamedTextColor.RED));
                    player.playSound(player.getLocation(), Sound.ENTITY_VILLAGER_NO, 1.0f, 1.0f);
                    return;
                }

                if (manager.isRunning(player.getUniqueId())) {
                    player.sendMessage(net.kyori.adventure.text.Component.text("現在、あなたの抽選タスクが実行中です。完了をお待ちください。", net.kyori.adventure.text.format.NamedTextColor.RED));
                    player.playSound(player.getLocation(), Sound.ENTITY_VILLAGER_NO, 1.0f, 1.0f);
                    return;
                }

                // 抽選画面レイアウトへ即時移行（画面を開いたまま維持）
                RouletteGui.renderRolling(inv, session);
                player.playSound(player.getLocation(), Sound.UI_BUTTON_CLICK, 0.8f, 1.2f);

                // バックグラウンド実況タスク開始
                boolean started = manager.startRoulette(player, session);
                if (!started) {
                    holder.setState(RouletteGuiHolder.State.SELECTING);
                    RouletteGui.render(inv, session);
                }
            }

            // その他の装飾枠
            default -> {
            }
        }
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

    private void playButtonSound(Player player) {
        player.playSound(player.getLocation(), Sound.UI_BUTTON_CLICK, 0.7f, 1.2f);
    }
}
