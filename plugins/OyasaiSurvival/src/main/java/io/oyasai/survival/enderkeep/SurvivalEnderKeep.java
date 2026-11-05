package io.oyasai.survival.enderkeep;

import org.bukkit.Bukkit;
import org.bukkit.command.Command;
import org.bukkit.command.CommandSender;
import org.bukkit.entity.Player;
import org.bukkit.event.EventHandler;
import org.bukkit.event.EventPriority;
import org.bukkit.event.Listener;
import org.bukkit.event.player.AsyncPlayerPreLoginEvent;
import org.bukkit.event.player.PlayerJoinEvent;
import org.bukkit.event.player.PlayerQuitEvent;
import org.bukkit.inventory.ItemStack;
import io.oyasai.survival.SurvivalFeature;
import org.bukkit.plugin.java.JavaPlugin;
import java.util.*;
import java.util.concurrent.*;
import java.util.logging.Level;

public final class SurvivalEnderKeep extends SurvivalFeature implements Listener {
    public SurvivalEnderKeep(JavaPlugin owner) { super(owner, "enderkeep", "SurvivalEnderKeep", "enderkeep"); }

    private final ExecutorService files = Executors.newSingleThreadExecutor();
    private final Map<UUID, Optional<PlayerStore.Snapshot>> prepared = new ConcurrentHashMap<>();
    private final Set<UUID> ready = new HashSet<>();
    private org.bukkit.scheduler.BukkitTask saveTask;
    private PlayerStore store;
    private UUID world;

    @Override public void onEnable() {
        saveDefaultConfig();
        world = Bukkit.getWorlds().getFirst().getUID();
        store = new PlayerStore(getDataFolder().toPath());
        registerEvents(this);
        long seconds = getConfig().getLong("save-interval-seconds", 300);
        if (seconds <= 0 || seconds > Long.MAX_VALUE / 20) {
            getLogger().warning("Invalid save-interval-seconds; using 300");
            seconds = 300;
        }
        saveTask = Bukkit.getScheduler().runTaskTimer(owner(), this::saveOnline, seconds * 20, seconds * 20);
        getLogger().info("Enabled SurvivalEnderKeep (world=" + world + ")");
    }

    @EventHandler(priority = EventPriority.MONITOR)
    public void prepare(AsyncPlayerPreLoginEvent event) {
        UUID id = event.getUniqueId();
        prepared.remove(id);
        if (event.getLoginResult() != AsyncPlayerPreLoginEvent.Result.ALLOWED) return;
        try {
            // Queue reads behind pending logout saves, including rapid reconnects.
            var snapshot = files.submit(() -> store.read(id)).get();
            prepared.put(id, Optional.ofNullable(snapshot));
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
            warn(id, "load interrupted; restore/save skipped", e);
        } catch (ExecutionException | RejectedExecutionException e) {
            warn(id, "cannot load; restore/save skipped, file retained", e);
        }
    }

    @EventHandler(priority = EventPriority.LOWEST)
    public void join(PlayerJoinEvent event) {
        Player player = event.getPlayer();
        UUID id = player.getUniqueId();
        var loaded = prepared.remove(id);
        if (loaded == null) {
            getLogger().warning(id + ": no readable snapshot; restore/save skipped");
            return;
        }
        try {
            var snapshot = loaded.orElse(null);
            // Validate even same-world data so a broken payload is never overwritten.
            ItemStack[] saved = snapshot == null ? null : ItemStack.deserializeItemsFromBytes(snapshot.items());
            if (saved != null && saved.length != player.getEnderChest().getSize()) {
                throw new IllegalArgumentException("Unexpected ender chest size: " + saved.length);
            }
            if (snapshot != null && EnderContents.shouldRestore(snapshot.world(), world)) {
                player.getEnderChest().setContents(EnderContents.forRestore(saved, ThreadLocalRandom.current()));
                // Keep the original payload for this immediate world-marker update.
                enqueue(id, new PlayerStore.Snapshot(world, snapshot.count(), snapshot.items()));
                player.sendMessage("前のワールドのエンダーチェストの中身を引き継ぎました（6個以上入っていた場合は抽選で5個。シュルカーボックスとバンドルの中身は空になります）");
            }
            ready.add(id);
        } catch (RuntimeException e) {
            warn(id, "cannot restore; restore/save skipped, file retained", e);
        }
    }

    @EventHandler(priority = EventPriority.MONITOR)
    public void quit(PlayerQuitEvent event) {
        save(event.getPlayer());
        ready.remove(event.getPlayer().getUniqueId());
        prepared.remove(event.getPlayer().getUniqueId());
    }

    private void saveOnline() { Bukkit.getOnlinePlayers().forEach(this::save); }

    private void save(Player player) {
        UUID id = player.getUniqueId();
        if (!ready.contains(id)) return;
        try {
            ItemStack[] items = player.getEnderChest().getContents();
            int count = Arrays.stream(items).filter(Objects::nonNull).filter(item -> !item.isEmpty())
                    .mapToInt(ItemStack::getAmount).sum();
            enqueue(id, new PlayerStore.Snapshot(world, count, ItemStack.serializeItemsAsBytes(items)));
        } catch (RuntimeException e) {
            warn(id, "cannot serialize; previous file retained", e);
        }
    }

    private void enqueue(UUID id, PlayerStore.Snapshot snapshot) {
        files.execute(() -> {
            try { store.write(id, snapshot); }
            catch (Exception e) { warn(id, "cannot save; previous file retained", e); }
        });
    }

    @Override public void onDisable() {
        if (saveTask != null) saveTask.cancel();
        if (store == null) { files.shutdown(); return; }
        saveOnline();
        files.shutdown();
        try {
            if (!files.awaitTermination(30, TimeUnit.SECONDS)) {
                getLogger().severe("Save queue did not finish within 30 seconds; some saves remain pending");
            }
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
            getLogger().severe("Interrupted while waiting for ender chest saves");
        }
    }

    @Override public boolean onCommand(CommandSender sender, Command command, String label, String[] args) {
        if (!sender.hasPermission("survivalenderkeep.admin")) {
            sender.sendMessage("権限がありません。");
            return true;
        }
        if (args.length != 2 || !args[0].equalsIgnoreCase("info")) return false;
        var target = Bukkit.getOfflinePlayerIfCached(args[1]);
        if (target == null) {
            sender.sendMessage("そのプレイヤーはサーバーに記録されていません。");
            return true;
        }
        UUID id = target.getUniqueId();
        files.execute(() -> {
            String message;
            try {
                var snapshot = store.read(id);
                message = snapshot == null ? args[1] + ": 保存なし" : args[1] + ": 保存あり / ワールド "
                        + snapshot.world() + " / アイテム数 " + snapshot.count();
            } catch (Exception e) {
                warn(id, "cannot read info; file retained", e);
                message = args[1] + ": 保存ファイルを読み込めません（ログを確認してください）。";
            }
            String reply = message;
            if (isEnabled()) Bukkit.getScheduler().runTask(owner(), () -> sender.sendMessage(reply));
        });
        return true;
    }

    @Override public List<String> onTabComplete(CommandSender sender, Command command, String alias, String[] args) {
        if (!sender.hasPermission("survivalenderkeep.admin")) return List.of();
        if (args.length == 1 && "info".startsWith(args[0].toLowerCase(Locale.ROOT))) return List.of("info");
        return args.length == 2 && args[0].equalsIgnoreCase("info") ? null : List.of();
    }

    private void warn(UUID id, String message, Exception exception) {
        getLogger().log(Level.WARNING, id + ": " + message, exception);
    }
}
