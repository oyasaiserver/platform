package icu.oyasai.games.roulette.service;

import icu.oyasai.games.roulette.config.ConfigProvider;
import icu.oyasai.games.roulette.model.RouletteMode;
import icu.oyasai.games.roulette.model.RouletteSession;
import net.kyori.adventure.text.Component;
import net.kyori.adventure.text.format.NamedTextColor;
import org.bukkit.Material;
import org.bukkit.entity.Player;
import org.bukkit.plugin.Plugin;
import org.bukkit.scheduler.BukkitTask;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.UUID;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ThreadLocalRandom;
import java.util.logging.Logger;

/**
 * ルーレットシステム全体の進行、セッション、クールダウン、
 * およびサーバー側での安全かつ公平な抽選処理を統括するマネージャークラスです。
 */
public class RouletteManager {
    private final Plugin plugin;
    private final Logger logger;
    private final ConfigProvider configProvider;
    private final BlockClassifier classifier;

    // プレイヤーごとのGUI操作状態（セッション）
    private final Map<UUID, RouletteSession> sessions = new ConcurrentHashMap<>();

    // プレイヤーごとのクールダウン管理（最終実行完了時刻のミリ秒）
    private final Map<UUID, Long> cooldowns = new ConcurrentHashMap<>();

    // 現在抽選アナウンス中のプレイヤー（二重実行防止）
    private final Set<UUID> runningPlayers = ConcurrentHashMap.newKeySet();

    // 実行中タスクのトラッキング（安全なキャンセル・メモリ解放用）
    private final Map<UUID, BukkitTask> activeTasks = new ConcurrentHashMap<>();

    public RouletteManager(Plugin plugin, ConfigProvider configProvider, BlockClassifier classifier) {
        this.plugin = plugin;
        this.logger = plugin.getLogger();
        this.configProvider = configProvider;
        this.classifier = classifier;
    }

    /**
     * プレイヤーのセッションを取得します。存在しない場合は新規作成します。
     */
    public RouletteSession getOrCreateSession(UUID uuid) {
        return sessions.computeIfAbsent(uuid, RouletteSession::new);
    }

    /**
     * プレイヤーのセッションを削除します。
     */
    public void removeSession(UUID uuid) {
        sessions.remove(uuid);
    }

    /**
     * プレイヤーのクールダウン残り秒数を取得します（0以下の場合はクールダウンなし）。
     */
    public long getRemainingCooldownSeconds(UUID uuid) {
        Long lastTime = cooldowns.get(uuid);
        if (lastTime == null) {
            return 0;
        }
        long cooldownMillis = configProvider.getCooldownSeconds() * 1000L;
        long elapsed = System.currentTimeMillis() - lastTime;
        if (elapsed >= cooldownMillis) {
            cooldowns.remove(uuid); // 期限切れのエントリを自動削除（メモリリーク防止）
            return 0;
        }
        return (cooldownMillis - elapsed + 999) / 1000;
    }

    /**
     * プレイヤーが現在抽選タスクを実行中であるかを判定します。
     */
    public boolean isRunning(UUID uuid) {
        return runningPlayers.contains(uuid);
    }

    /**
     * サーバー側で安全に検証を行い、公平なランダム抽選を実行してチャットタスクを開始します。
     */
    public boolean startRoulette(Player player, RouletteSession session) {
        UUID uuid = player.getUniqueId();

        // 1. 二重実行チェック
        if (runningPlayers.contains(uuid)) {
            player.sendMessage(Component.text("現在、あなたの抽選タスクが実行中です。完了をお待ちください。", NamedTextColor.RED));
            return false;
        }

        // 2. クールダウンチェック
        long remaining = getRemainingCooldownSeconds(uuid);
        if (remaining > 0) {
            player.sendMessage(Component.text("クールダウン中です。あと " + remaining + " 秒お待ちください。", NamedTextColor.RED));
            return false;
        }

        // 3. サーバー側バリデーション（モードと回数の検証）
        RouletteMode mode = session.getSelectedMode();
        int count = session.getSelectedCount();

        if (mode == null) {
            player.sendMessage(Component.text("無効な抽選モードです。", NamedTextColor.RED));
            return false;
        }
        if (count != 1 && count != 3 && count != 5) {
            player.sendMessage(Component.text("抽選回数は 1回、3回、5回 のいずれかのみ指定可能です。", NamedTextColor.RED));
            return false;
        }

        // 4. 抽選対象リストの選定
        List<Material> pool = switch (mode) {
            case ALL -> classifier.getAllBuildingItems();
            case FULL_BLOCK -> classifier.getFullBlocks();
            case NON_FULL_BLOCK -> classifier.getNonFullBlocks();
        };

        if (pool == null || pool.isEmpty()) {
            player.sendMessage(Component.text("エラー: 抽選対象のブロックが登録されていません。", NamedTextColor.RED));
            logger.severe("抽選プールが空です: モード=" + mode);
            return false;
        }

        // 5. サーバー側で乱数を生成して公平に抽選（同一アイテムの重複当選を許可）
        List<Material> results = new ArrayList<>(count);
        ThreadLocalRandom random = ThreadLocalRandom.current();
        int poolSize = pool.size();

        for (int i = 0; i < count; i++) {
            int randomIndex = random.nextInt(poolSize);
            results.add(pool.get(randomIndex));
        }

        // 6. 実行状態に設定し、タスクをスケジュール実行
        runningPlayers.add(uuid);

        long intervalTicks = configProvider.getChatIntervalTicks();
        RouletteTask task = new RouletteTask(
                plugin,
                this,
                uuid,
                player.getName(),
                session,
                results
        );

        // 1tick後に開始し、設定された間隔（約0.8秒）ごとに1行ずつ送信
        BukkitTask bukkitTask = task.runTaskTimer(plugin, 1L, intervalTicks);
        activeTasks.put(uuid, bukkitTask);
        return true;
    }

    /**
     * 抽選タスク完了時のコールバック処理です。
     */
    public void onRouletteComplete(UUID uuid) {
        runningPlayers.remove(uuid);
        activeTasks.remove(uuid);
        cooldowns.put(uuid, System.currentTimeMillis());
    }

    /**
     * プレイヤーがログアウトした際のクリーンアップ処理です。
     * 不要になったセッションを解放し、実行中のタスクがあれば安全に停止します。
     */
    public void onPlayerQuit(UUID uuid) {
        removeSession(uuid);
        cancelTask(uuid);
    }

    /**
     * 指定プレイヤーの実行中タスクを安全にキャンセルします。
     */
    public void cancelTask(UUID uuid) {
        runningPlayers.remove(uuid);
        BukkitTask task = activeTasks.remove(uuid);
        if (task != null) {
            try {
                task.cancel();
            } catch (Exception ignored) {
            }
        }
    }

    /**
     * プラグイン無効化時に全タスク、セッション、状態を完全にクリーンアップします。
     */
    public void shutdown() {
        for (BukkitTask task : activeTasks.values()) {
            try {
                task.cancel();
            } catch (Exception ignored) {
            }
        }
        activeTasks.clear();
        sessions.clear();
        cooldowns.clear();
        runningPlayers.clear();
    }
}
