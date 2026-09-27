package icu.oyasai.games.roulette.service;

import icu.oyasai.games.roulette.gui.RouletteGui;
import icu.oyasai.games.roulette.gui.RouletteGuiHolder;
import icu.oyasai.games.roulette.model.RouletteMode;
import icu.oyasai.games.roulette.model.RouletteSession;
import net.kyori.adventure.text.Component;
import net.kyori.adventure.text.event.ClickEvent;
import net.kyori.adventure.text.format.NamedTextColor;
import net.kyori.adventure.text.format.TextDecoration;
import org.bukkit.Bukkit;
import org.bukkit.Material;
import org.bukkit.Sound;
import org.bukkit.entity.Player;
import org.bukkit.inventory.ItemStack;
import org.bukkit.plugin.Plugin;
import org.bukkit.scheduler.BukkitRunnable;

import java.util.List;
import java.util.UUID;

/**
 * サーバー側で決定された抽選結果を、
 * 一定間隔ごとにサーバー全体チャットへ1行ずつ順次配信し、
 * 同時にプレイヤーのGUI画面にも1つずつアニメーション描画する実況タスクです。
 */
public class RouletteTask extends BukkitRunnable {
    private final Plugin plugin;
    private final RouletteManager manager;
    private final UUID playerUuid;
    private final String playerName;
    private final RouletteSession session;
    private final List<Material> results;

    private int currentIndex = 0;
    private boolean headerSent = false;

    public RouletteTask(Plugin plugin,
                        RouletteManager manager,
                        UUID playerUuid,
                        String playerName,
                        RouletteSession session,
                        List<Material> results) {
        this.plugin = plugin;
        this.manager = manager;
        this.playerUuid = playerUuid;
        this.playerName = playerName;
        this.session = session;
        this.results = results;
    }

    @Override
    public void run() {
        // 1. 初回呼び出し：開始ヘッダーメッセージの送信
        if (!headerSent) {
            broadcastHeader();
            headerSent = true;
            playPlayerSound(Sound.BLOCK_NOTE_BLOCK_PLING, 1.0f, 1.2f);
            return;
        }

        // 2. 各回の抽選結果を1行ずつ送信＆GUIスロットへ反映
        if (currentIndex < results.size()) {
            int roundNumber = currentIndex + 1;
            Material selectedMaterial = results.get(currentIndex);
            broadcastResult(roundNumber, selectedMaterial);

            // プレイヤーがGUIを開いている場合は該当スロットに当選ブロックを表示
            Player player = Bukkit.getPlayer(playerUuid);
            if (player != null && player.isOnline()) {
                if (player.getOpenInventory().getTopInventory().getHolder() instanceof RouletteGuiHolder) {
                    RouletteGui.revealResult(player.getOpenInventory().getTopInventory(), currentIndex, session.getSelectedCount(), selectedMaterial);
                }
            }

            // 効果音（1回ごとに少しピッチを上げる）
            float pitch = 1.0f + (0.1f * currentIndex);
            playPlayerSound(Sound.ENTITY_EXPERIENCE_ORB_PICKUP, 0.8f, pitch);

            currentIndex++;
            return;
        }

        // 3. 全回数終了：フッターメッセージの送信とタスク終了
        broadcastFooter();
        playPlayerSound(Sound.ENTITY_PLAYER_LEVELUP, 1.0f, 1.0f);

        // プレイヤーがGUIを開いている場合は完了画面（星アイコン・もう一度回すボタン）へ更新
        Player player = Bukkit.getPlayer(playerUuid);
        if (player != null && player.isOnline()) {
            if (player.getOpenInventory().getTopInventory().getHolder() instanceof RouletteGuiHolder) {
                RouletteGui.renderFinished(player.getOpenInventory().getTopInventory(), session, results);
            }
        }

        manager.onRouletteComplete(playerUuid);
        cancel();
    }

    private void sendMessageOrBroadcast(Component component) {
        if (session.isBroadcastToAll()) {
            Bukkit.broadcast(component);
        } else {
            Player player = Bukkit.getPlayer(playerUuid);
            if (player != null && player.isOnline()) {
                player.sendMessage(component);
            }
        }
    }

    private void broadcastHeader() {
        Component separator = Component.text("--------------------------------------------------", NamedTextColor.DARK_GRAY);
        Component prefix = Component.text("[おやさいルーレット] ", NamedTextColor.GOLD, TextDecoration.BOLD);
        Component announce;
        if (session.isBroadcastToAll()) {
            announce = prefix.append(Component.text("プレイヤー「", NamedTextColor.WHITE))
                    .append(Component.text(playerName, NamedTextColor.AQUA, TextDecoration.BOLD))
                    .append(Component.text("」が抽選を開始！", NamedTextColor.WHITE));
        } else {
            announce = prefix.append(Component.text("（非公開モード） 抽選を開始！", NamedTextColor.GRAY, TextDecoration.BOLD));
        }

        Component details = Component.text("抽選モード：", NamedTextColor.GRAY)
                .append(Component.text(session.getSelectedMode().getDisplayName(), NamedTextColor.YELLOW, TextDecoration.BOLD))
                .append(Component.text("  /  抽選回数：", NamedTextColor.GRAY))
                .append(Component.text(session.getSelectedCount() + "回", NamedTextColor.AQUA, TextDecoration.BOLD))
                .append(Component.text("  /  設定：", NamedTextColor.GRAY))
                .append(Component.text(session.isBroadcastToAll() ? "全体公開" : "自分のみ", session.isBroadcastToAll() ? NamedTextColor.GREEN : NamedTextColor.AQUA, TextDecoration.BOLD));

        sendMessageOrBroadcast(separator);
        sendMessageOrBroadcast(announce);
        sendMessageOrBroadcast(details);
        sendMessageOrBroadcast(Component.empty());
    }

    private void broadcastResult(int round, Material material) {
        Component prefix = Component.text(round + "回目の結果： ", NamedTextColor.WHITE, TextDecoration.BOLD);
        Component blockName = Component.translatable(material.translationKey(), NamedTextColor.GREEN, TextDecoration.BOLD);
        String englishName = RouletteGui.formatEnglishName(material);
        Component englishComponent = Component.text(" (" + englishName + ")", NamedTextColor.AQUA);

        ItemStack itemStack = new ItemStack(material);
        String copyText = material.getKey().asString();
        Component itemDisplay = blockName.append(englishComponent)
                .hoverEvent(itemStack.asHoverEvent())
                .clickEvent(ClickEvent.copyToClipboard(copyText));

        sendMessageOrBroadcast(prefix.append(itemDisplay));
    }

    private void broadcastFooter() {
        Component footer = Component.text("[おやさいルーレット] ", NamedTextColor.GOLD, TextDecoration.BOLD)
                .append(Component.text("抽選終了！", NamedTextColor.YELLOW, TextDecoration.BOLD))
                .append(Component.text(" (※アイテム名をクリックでIDをコピーできます)", NamedTextColor.GRAY));
        Component separator = Component.text("--------------------------------------------------", NamedTextColor.DARK_GRAY);

        sendMessageOrBroadcast(Component.empty());
        sendMessageOrBroadcast(footer);
        sendMessageOrBroadcast(separator);
    }

    private void playPlayerSound(Sound sound, float volume, float pitch) {
        Player player = Bukkit.getPlayer(playerUuid);
        if (player != null && player.isOnline()) {
            player.playSound(player.getLocation(), sound, volume, pitch);
        }
    }
}
