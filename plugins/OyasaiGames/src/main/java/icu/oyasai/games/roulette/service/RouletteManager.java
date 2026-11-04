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
import java.util.LinkedHashMap;
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
    public static final String PERMISSION_SPECIAL_BLOCKS = "oyasaigames.roulette.special";

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

    // 他人のルーレット結果のチャット受信設定キー
    private final org.bukkit.NamespacedKey chatReceiveKey;

    public RouletteManager(Plugin plugin, ConfigProvider configProvider, BlockClassifier classifier) {
        this.plugin = plugin;
        this.logger = plugin.getLogger();
        this.configProvider = configProvider;
        this.classifier = classifier;
        this.chatReceiveKey = new org.bukkit.NamespacedKey(plugin, "roulette_chat_receive");
    }

    /**
     * 他人のルーレット結果をチャットで受信するかどうか判定します（デフォルト: true）。
     */
    public boolean isChatReceiveEnabled(Player player) {
        if (player == null) {
            return true;
        }
        Byte value = player.getPersistentDataContainer().get(chatReceiveKey, org.bukkit.persistence.PersistentDataType.BYTE);
        return value == null || value == 1;
    }

    /**
     * 他人のルーレット結果のチャット受信設定を保存します。
     */
    public void setChatReceiveEnabled(Player player, boolean enabled) {
        if (player == null) {
            return;
        }
        player.getPersistentDataContainer().set(
                chatReceiveKey,
                org.bukkit.persistence.PersistentDataType.BYTE,
                (byte) (enabled ? 1 : 0)
        );
    }

    /**
     * 他人のルーレット結果のチャット受信設定を反転切り替えします。
     */
    public boolean toggleChatReceive(Player player) {
        boolean next = !isChatReceiveEnabled(player);
        setChatReceiveEnabled(player, next);
        return next;
    }

    /**
     * プレイヤーが匠ランクなどの特殊ブロック（コマンドブロック等）解放権限を持っているか判定します。
     */
    public boolean hasSpecialAccess(Player player) {
        if (player == null) {
            return false;
        }
        return player.hasPermission(PERMISSION_SPECIAL_BLOCKS)
                || player.hasPermission("citiesskymine.role.takumi")
                || player.hasPermission("group.takumi")
                || player.isOp();
    }

    /**
     * プレイヤーのセッションを取得し、最新の権限状態を反映します。
     */
    public RouletteSession getOrCreateSession(Player player) {
        RouletteSession session = sessions.computeIfAbsent(player.getUniqueId(), RouletteSession::new);
        session.setSpecialAccess(hasSpecialAccess(player));
        return session;
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
        Map<RouletteMode, Integer> plan = buildPlan(player, session);
        if (plan == null) {
            return false;
        }

        // 匠ランク判定（特殊ブロックの解放有無）
        boolean special = hasSpecialAccess(player);
        session.setSpecialAccess(special);

        // 4. 抽選対象リストの選定（一般プレイヤーにはコマンドブロック等を除外、匠には解放）
        Map<RouletteMode, List<Material>> pools = selectPools(player, plan, special);
        if (pools == null) {
            return false;
        }

        // 5. サーバー側で乱数を生成して公平に抽選（同一アイテムの重複当選を許可）
        Draw draw = draw(plan, pools);
        List<Material> results = draw.results();
        List<RouletteMode> sources = draw.sources();
        // 6. 実行状態に設定し、タスクをスケジュール実行
        runningPlayers.add(uuid);

        long intervalTicks = configProvider.getChatIntervalTicks();
        RouletteTask task = new RouletteTask(
                plugin,
                this,
                uuid,
                player.getName(),
                session,
                results,
                sources
        );

        // 1tick後に開始し、設定された間隔（約0.8秒）ごとに1行ずつ送信
        BukkitTask bukkitTask = task.runTaskTimer(plugin, 1L, intervalTicks);
        activeTasks.put(uuid, bukkitTask);
        return true;
    }

    /**
     * 抽選結果と、それぞれがどのモードの抽選対象から出たかの組です。
     */
    private record Draw(List<Material> results, List<RouletteMode> sources) {
    }

    /**
     * セッションの選択内容を検証し、モードごとの抽選回数を返します。
     * 全建築用は1種類、分けて引くモード（フルブロック・装飾）は最大2種類です。
     * 不正な内容のときはプレイヤーにメッセージを送り、null を返します。
     */
    private Map<RouletteMode, Integer> buildPlan(Player player, RouletteSession session) {
        if (session.getSelectedMode() == null) {
            player.sendMessage(Component.text("無効な抽選モードです。", NamedTextColor.RED));
            return null;
        }

        Map<RouletteMode, Integer> plan = new LinkedHashMap<>();
        if (session.isSplitMode()) {
            int fullCount = session.getFullBlockCount();
            int nonFullCount = session.getNonFullBlockCount();
            if (fullCount < 0 || fullCount > RouletteSession.MAX_COUNT_PER_MODE
                    || nonFullCount < 0 || nonFullCount > RouletteSession.MAX_COUNT_PER_MODE) {
                player.sendMessage(Component.text("抽選回数は 1種類につき 0〜" + RouletteSession.MAX_COUNT_PER_MODE + "回 で指定してください。", NamedTextColor.RED));
                return null;
            }
            int total = fullCount + nonFullCount;
            if (total < 1) {
                player.sendMessage(Component.text("抽選回数を1回以上選んでください。", NamedTextColor.RED));
                return null;
            }
            if (total > RouletteSession.MAX_TOTAL_COUNT) {
                player.sendMessage(Component.text("合計の抽選回数は " + RouletteSession.MAX_TOTAL_COUNT + "回 までです。", NamedTextColor.RED));
                return null;
            }
            if (fullCount > 0) {
                plan.put(RouletteMode.FULL_BLOCK, fullCount);
            }
            if (nonFullCount > 0) {
                plan.put(RouletteMode.NON_FULL_BLOCK, nonFullCount);
            }
        } else {
            int count = session.getSelectedCount();
            if (count < 1 || count > RouletteSession.MAX_COUNT_ALL) {
                player.sendMessage(Component.text("抽選回数は 1〜" + RouletteSession.MAX_COUNT_ALL + "回 で指定してください。", NamedTextColor.RED));
                return null;
            }
            plan.put(RouletteMode.ALL, count);
        }
        return plan;
    }

    /**
     * 抽選するモードごとの対象ブロックのリストを取り出します。
     * 対象が空のモードがあるときはプレイヤーにメッセージを送り、null を返します。
     */
    private Map<RouletteMode, List<Material>> selectPools(Player player, Map<RouletteMode, Integer> plan, boolean special) {
        Map<RouletteMode, List<Material>> pools = new LinkedHashMap<>();
        for (RouletteMode mode : plan.keySet()) {
            List<Material> pool = switch (mode) {
                case ALL -> classifier.getAllBuildingItems(special);
                case FULL_BLOCK -> classifier.getFullBlocks(special);
                case NON_FULL_BLOCK -> classifier.getNonFullBlocks(special);
            };
            if (pool == null || pool.isEmpty()) {
                player.sendMessage(Component.text("エラー: 抽選対象のブロックが登録されていません。", NamedTextColor.RED));
                logger.severe("抽選プールが空です: モード=" + mode + " (special=" + special + ")");
                return null;
            }
            pools.put(mode, pool);
        }
        return pools;
    }

    /**
     * モードごとの回数だけ、対象のブロックから無作為に選びます。
     */
    private Draw draw(Map<RouletteMode, Integer> plan, Map<RouletteMode, List<Material>> pools) {
        List<Material> results = new ArrayList<>();
        List<RouletteMode> sources = new ArrayList<>();
        ThreadLocalRandom random = ThreadLocalRandom.current();

        for (Map.Entry<RouletteMode, Integer> entry : plan.entrySet()) {
            List<Material> pool = pools.get(entry.getKey());
            for (int i = 0; i < entry.getValue(); i++) {
                results.add(pool.get(random.nextInt(pool.size())));
                sources.add(entry.getKey());
            }
        }
        return new Draw(results, sources);
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
        if (runningPlayers.contains(uuid)) {
            cooldowns.put(uuid, System.currentTimeMillis());
        }
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
