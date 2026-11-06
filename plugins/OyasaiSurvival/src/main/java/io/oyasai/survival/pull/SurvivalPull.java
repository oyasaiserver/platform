package io.oyasai.survival.pull;

import java.util.ArrayList;
import java.util.List;
import java.util.Locale;
import org.bukkit.Location;
import org.bukkit.Material;
import org.bukkit.Particle;
import org.bukkit.block.Chest;
import org.bukkit.block.Container;
import org.bukkit.block.data.type.Chest.Type;
import org.bukkit.command.Command;
import org.bukkit.command.CommandSender;
import org.bukkit.entity.Player;
import org.bukkit.inventory.Inventory;
import io.oyasai.survival.SurvivalFeature;
import org.bukkit.plugin.java.JavaPlugin;

public final class SurvivalPull extends SurvivalFeature {
    public SurvivalPull(JavaPlugin owner) { super(owner, "pull", "SurvivalPull", "pull", "wh", "pullbench"); }

    static final int MAX_AMOUNT = 2304;
    private int radius;
    private WorkPipeline work;
    private PullGui gui;
    private WarehouseManager warehouses;
    private ClientCommunication client;
    private WarehouseIndex index;
    private WarehouseLock lock;
    private PullBench bench;

    @Override
    public void onEnable() {
        saveDefaultConfig();
        loadRadius();
        work = new WorkPipeline(this);
        warehouses = new WarehouseManager(this);
        try {
            warehouses.load();
        } catch (Exception error) {
            getLogger().severe("倉庫データを読み込めないため停止します: " + error);
            throw new IllegalStateException("SurvivalPull startup failed", error);
        }
        index = new WarehouseIndex(this, warehouses);
        try { index.start(); }
        catch (RuntimeException error) {
            getLogger().severe("倉庫の索引を初期化できないため停止します: " + error);
            throw new IllegalStateException("SurvivalPull startup failed", error);
        }
        lock = new WarehouseLock(this, index);
        registerEvents(lock);
        bench = new PullBench(this, warehouses);
        try { bench.load(); }
        catch (Exception error) { getLogger().severe("bench データを読み込めません: " + error); }
        getCommand("pullbench").setExecutor((sender, command, label, args) -> bench.command(sender, args));
        getCommand("pullbench").setTabCompleter((sender, command, label, args) -> List.of());
        getCommand("wh").setExecutor((sender, command, label, args) -> warehouses.command(sender, args));
        getCommand("wh").setTabCompleter((sender, command, label, args) -> warehouses.complete(args));
        registerEvents(warehouses);
        registerEvents(warehouses.input());
        client = new ClientCommunication(this);
        getServer().getMessenger().registerOutgoingPluginChannel(owner(), ClientCommunication.CHANNEL);
        getServer().getMessenger().registerIncomingPluginChannel(owner(), ClientCommunication.CHANNEL, client);
        registerEvents(client);
        gui = new PullGui(this, ItemNames.load(getResource("ja_jp_names.json")));
        registerEvents(gui);
        getLogger().info("Enabled SurvivalPull");
    }

    @Override
    public void onDisable() {
        if (bench != null) bench.stop();
        if (work != null) work.stop();
        if (lock != null) lock.stop();
        if (index != null) index.stop();
        if (gui != null) gui.closeAll();
        if (warehouses != null) warehouses.input().stop();
        getServer().getMessenger().unregisterIncomingPluginChannel(owner());
        getServer().getMessenger().unregisterOutgoingPluginChannel(owner());
    }

    WorkPipeline work() { return work; }
    WarehouseIndex index() { return index; }
    int snapshotBudget() { return Math.max(1, getConfig().getInt("performance.snapshot-containers-per-tick", 16)); }
    void logSlow(String stage, long started) {
        double elapsed = (System.nanoTime() - started) / 1_000_000.0;
        if (elapsed > getConfig().getDouble("performance.log-slow-ms", 20))
            getLogger().warning("メインスレッド " + stage + " (1 tick): " + String.format(java.util.Locale.ROOT, "%.2f ms", elapsed));
    }

    record ListResult(String scope, List<Stock> stock, List<Stock> filtered) { }

    void requestList(Player player, ItemNames names, String query, java.util.function.Consumer<ListResult> done) {
        requestList(player, names, query, java.util.function.Function.identity(), done);
    }

    <T> void requestList(Player player, ItemNames names, String query,
                         java.util.function.Function<ListResult, T> prepare, java.util.function.Consumer<T> done) {
        var operation = work.latest(player.getUniqueId());
        var wh = warehouses == null ? null : warehouses.near(player, radius);
        String title = scopeName(player);
        var world = player.getWorld();
        Runnable ready = () -> {
            var snapshot = index.snapshot(wh);
            operation.think(() -> {
                var stock = snapshot.summarize();
                return prepare.apply(new ListResult(title, stock, names == null ? stock : names.filter(stock, query)));
            }, result -> {
                if (player.isOnline() && player.getWorld() == world && scopeName(player).equals(title)) done.accept(result);
                operation.cancel();
            });
        };
        if (wh == null || index.ready(wh)) { ready.run(); return; }
        operation.read(() -> {
            if (!player.isOnline() || player.getWorld() != world || !scopeName(player).equals(title)) {
                operation.cancel(); return false;
            }
            return index.ready(wh);
        }, ready);
    }

    <T> void prepareList(Player player, java.util.function.Supplier<T> compute, java.util.function.Consumer<T> done) {
        var operation = work.latest(player.getUniqueId());
        operation.think(compute, result -> {
            if (player.isOnline()) done.accept(result);
            operation.cancel();
        });
    }

    int radius() { return radius; }

    private void loadRadius() {
        radius = effectiveRadius(getConfig().getInt("radius", 16),
                getConfig().getInt("max-radius", 32));
    }

    static int effectiveRadius(int requested, int maximum) {
        return Math.max(0, Math.min(requested, maximum));
    }

    static int parseAmount(String argument, int stackSize) {
        int amount = argument == null ? stackSize : Integer.parseInt(argument);
        if (amount < 1 || amount > MAX_AMOUNT) {
            throw new IllegalArgumentException("amount");
        }
        return amount;
    }

    @Override
    public boolean onCommand(CommandSender sender, Command command, String label, String[] args) {
        if (args.length == 1 && args[0].equalsIgnoreCase("reload")) {
            if (!sender.isOp()) {
                sender.sendMessage("設定を再読込する権限がありません。");
                return true;
            }
            reloadConfig();
            loadRadius();
            sender.sendMessage("設定を再読込しました。探索半径: " + radius);
            return true;
        }
        if (!(sender instanceof Player player)) {
            sender.sendMessage("プレイヤーから実行してください。");
            return true;
        }
        if (!(args.length == 1 && args[0].equalsIgnoreCase("reload"))
                && (warehouses == null || warehouses.near(player, radius) == null)) {
            sender.sendMessage(noWarehouse() + "。");
            return true;
        }
        if (args.length == 0) {
            if (client.hasMod(player)) client.open(player);
            else gui.openList(player);
            return true;
        }
        if (args.length == 1 && args[0].equalsIgnoreCase("gui")) {
            gui.openList(player);
            return true;
        }
        if (args.length > 2) {
            sender.sendMessage("使い方: /pull [gui|<item|hand> [amount]|reload]");
            return true;
        }
        Material material = args[0].equalsIgnoreCase("hand")
                ? player.getInventory().getItemInMainHand().getType()
                : Material.matchMaterial(args[0].toLowerCase(Locale.ROOT));
        if (material == null || material.isAir() || !material.isItem()) {
            sender.sendMessage("アイテム名が無効か、メインハンドにアイテムがありません。");
            return true;
        }
        int amount;
        try {
            amount = parseAmount(args.length == 2 ? args[1] : null, material.getMaxStackSize());
        } catch (IllegalArgumentException exception) {
            sender.sendMessage("amount は1〜" + MAX_AMOUNT + "の整数で指定してください。");
            return true;
        }
        pull(player, material, amount);
        return true;
    }

    String scopeName(Player player) {
        Warehouse wh = warehouses == null ? null : warehouses.near(player, radius);
        return wh == null ? noWarehouse() : "倉庫: " + wh.name();
    }

    // All entry points select the same nearest member warehouse.
    private String noWarehouse() { return radius + "マス以内に使える倉庫がありません"; }

    List<Stock> stock(Player player) { return index == null || warehouses == null ? List.of() : index.snapshot(warehouses.near(player, radius)).summarize(); }

    Result pull(Player player, Material material, int amount) {
        return pull(player, material, "", amount);
    }

    Result pull(Player player, Material material, String key, int amount) {
        Warehouse wh = warehouses == null ? null : warehouses.near(player, radius);
        String name = scopeName(player);
        Result result = index == null ? new Result(0, List.of(), false) : index.take(wh, player.getInventory(), material, key, amount);
        if (wh != null && index != null && !index.ready(wh)) {
            player.sendMessage("倉庫の索引を読み込み中です。少し待ってから使ってください。");
            return result;
        }
        if (result.amount() > 0) {
            player.sendMessage("[" + name + "] " + material.name() + " を " + result.amount() + "個、"
                    + result.containers() + "個の容器から集めました。");
            showSources(player, result, getConfig().getInt("show-max-lines", 5),
                    getConfig().getBoolean("highlight", true), key);
        } else if (result.found()) {
            player.sendMessage("[" + name + "] 対象アイテムはありますが、インベントリに空きがありません。");
        } else {
            player.sendMessage("[" + name + "] 容器に対象アイテムが見つかりませんでした。");
        }
        return result;
    }

    @Override
    public List<String> onTabComplete(CommandSender sender, Command command, String alias, String[] args) {
        if (args.length != 1) {
            return List.of();
        }
        String prefix = args[0].toLowerCase(Locale.ROOT);
        var suggestions = new ArrayList<String>();
        if ("gui".startsWith(prefix)) suggestions.add("gui");
        if ("hand".startsWith(prefix)) suggestions.add("hand");
        if (sender.isOp() && "reload".startsWith(prefix)) {
            suggestions.add("reload");
        }
        boolean namespaced = prefix.startsWith("minecraft:");
        for (Material material : Material.values()) {
            if (material.isLegacy() || material.isAir() || !material.isItem()) continue;
            String name = (namespaced ? "minecraft:" : "") + material.name().toLowerCase(Locale.ROOT);
            if (name.startsWith(prefix)) suggestions.add(name);
        }
        suggestions.sort(String::compareTo);
        return suggestions;
    }

    record Result(int amount, List<Source> sources, boolean found) {
        int containers() { return sources.size(); }
    }
    record Position(int x, int y, int z) { }
    record Source(Material type, Position position, int amount) { }
    record Stock(ItemVariant variant, long amount, List<Source> sources) {
        Stock { sources = List.copyOf(sources); }
        Stock(Material material, long amount, List<Source> sources) { this(ItemVariant.plain(material), amount, sources); }
        Material material() { return variant.material(); }
        String key() { return variant.key(); }
    }

    static void showSources(Player player, Result result, int maxLines, boolean highlight) {
        showSources(player, result, maxLines, highlight, "");
    }

    static void showSources(Player player, Result result, int maxLines, boolean highlight, String key) {
        int shown = Math.min(Math.max(0, maxLines), result.sources().size());
        for (int i = 0; i < shown; i++) {
            Source source = result.sources().get(i);
            Position position = source.position();
            player.sendMessage("- " + containerName(source.type()) + " (" + position.x() + ", "
                    + position.y() + ", " + position.z() + "): " + source.amount() + "個 [k=\"" + key + "\"]");
            if (highlight) {
                player.spawnParticle(Particle.END_ROD,
                        new Location(player.getWorld(), position.x() + 0.5,
                                position.y() + 0.5, position.z() + 0.5),
                        4, 0.2, 0.2, 0.2, 0.01);
            }
        }
        int remaining = result.containers() - shown;
        if (remaining > 0) player.sendMessage("ほか " + remaining + "個の容器");
    }

    static String containerName(Material type) {
        if (type.name().endsWith("SHULKER_BOX")) return "シュルカーボックス";
        return switch (type) {
            case CHEST -> "チェスト";
            case TRAPPED_CHEST -> "トラップチェスト";
            case BARREL -> "樽";
            case HOPPER -> "ホッパー";
            default -> "容器";
        };
    }

    static Inventory containerInventory(Container container) {
        // 各半分だけを読むことで範囲外・未ロード側へアクセスしない。
        return container instanceof Chest chest ? chest.getBlockInventory() : container.getInventory();
    }

    static Position containerKey(Container container) {
        int x = container.getX();
        int z = container.getZ();
        if (container instanceof Chest
                && container.getBlockData() instanceof org.bukkit.block.data.type.Chest data
                && data.getType() == Type.RIGHT) {
            x += data.getFacing().getModZ();
            z -= data.getFacing().getModX();
        }
        return new Position(x, container.getY(), z);
    }
}
