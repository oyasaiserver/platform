package io.oyasai.survival.pull;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.StandardOpenOption;
import java.time.Instant;
import java.time.ZoneOffset;
import java.time.format.DateTimeFormatter;
import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Locale;
import java.util.Random;
import java.util.Set;
import java.util.UUID;
import net.kyori.adventure.text.Component;
import org.bukkit.Chunk;
import org.bukkit.Material;
import org.bukkit.World;
import org.bukkit.block.BlockFace;
import org.bukkit.block.Container;
import org.bukkit.block.data.type.Chest;
import org.bukkit.command.CommandSender;
import org.bukkit.command.ConsoleCommandSender;
import org.bukkit.configuration.file.YamlConfiguration;
import org.bukkit.enchantments.Enchantment;
import org.bukkit.inventory.Inventory;
import org.bukkit.inventory.ItemStack;

/** Console-only fixture and driver. All measured algorithms are the production implementations. */
final class PullBench {
    static final UUID OWNER = UUID.fromString("b57c829c-a9a4-45d8-a372-9889eb124e92");
    private static final UUID ID = UUID.fromString("c371ed0c-f923-4771-8183-2ea44e7672bc");
    static final String HEADER = "utc,version,scenario,iteration,containers,slots,used_slots,main_ms_total,main_ms_max_tick,ticks,async_ms,result_count,json_bytes,heap_used_mb_before,heap_used_mb_after";
    private static final List<String> SCENARIOS = List.of("cold-load", "list", "search", "store", "take");
    private static final DateTimeFormatter FILE_TIME = DateTimeFormatter.ofPattern("uuuuMMdd'T'HHmmss.SSSSSSSSS'Z'").withZone(ZoneOffset.UTC);
    private static final List<Material> MATERIALS = java.util.Arrays.stream((
            "COAL IRON_INGOT GOLD_INGOT COPPER_INGOT DIAMOND EMERALD LAPIS_LAZULI QUARTZ "
            + "OAK_LOG SPRUCE_LOG BIRCH_LOG JUNGLE_LOG ACACIA_LOG DARK_OAK_LOG OAK_PLANKS SPRUCE_PLANKS "
            + "STONE COBBLESTONE DEEPSLATE GRANITE DIORITE ANDESITE DIRT SAND "
            + "WHEAT CARROT POTATO BEETROOT SUGAR_CANE BAMBOO CACTUS OAK_SAPLING "
            + "APPLE BREAD COOKED_BEEF COOKED_PORKCHOP COOKIE GOLDEN_APPLE BAKED_POTATO MELON_SLICE "
            + "ROTTEN_FLESH BONE STRING GUNPOWDER ENDER_PEARL BLAZE_ROD SLIME_BALL LEATHER "
            + "IRON_SWORD DIAMOND_PICKAXE IRON_AXE IRON_SHOVEL IRON_HOE BOW SHIELD FISHING_ROD "
            + "REDSTONE REPEATER COMPARATOR PISTON OBSERVER LEVER RAIL HOPPER "
            + "WHITE_WOOL RED_WOOL TORCH LANTERN WHITE_CANDLE PAINTING ITEM_FRAME FLOWER_POT "
            + "PAPER BOOK MAP SADDLE NAME_TAG EXPERIENCE_BOTTLE EGG SNOWBALL").split(" "))
            .map(Material::valueOf).toList();

    record Sample(Material material, boolean full, int amountRoll, int variant) {
        ItemStack item() {
            var item = new ItemStack(material);
            int max = item.getMaxStackSize();
            item.setAmount(full ? max : 1 + Math.floorMod(amountRoll, max));
            if (variant >= 0) {
                var meta = item.getItemMeta();
                meta.customName(Component.text("benchの剣-" + variant));
                meta.addEnchant(Enchantment.UNBREAKING, 1 + variant % 3, true);
                item.setItemMeta(meta);
            }
            return item;
        }
    }

    static Sample[] samples(long seed, int size, boolean input) {
        var random = new Random(seed);
        var result = new Sample[size];
        for (int i = 0; i < size; i++) {
            double roll = random.nextDouble();
            if (!input && roll >= .62) continue;
            boolean individual = input ? i == 0 || i > 1 && roll < .10 : roll < .02;
            Material material = individual ? Material.DIAMOND_SWORD : MATERIALS.get(random.nextInt(MATERIALS.size()));
            result[i] = new Sample(material, random.nextBoolean(), random.nextInt(Integer.MAX_VALUE),
                    individual ? random.nextInt(16) : -1);
        }
        return result;
    }

    private final SurvivalPull plugin;
    private final WarehouseManager manager;
    private final Set<Chunk> tickets = new HashSet<>();
    private Warehouse warehouse;
    private long seed;
    private boolean busy;
    private WorkPipeline.Operation operation;
    private ItemNames names;

    PullBench(SurvivalPull plugin, WarehouseManager manager) { this.plugin = plugin; this.manager = manager; }

    void load() throws Exception {
        Path file = stateFile();
        if (!Files.exists(file)) return;
        var yaml = new YamlConfiguration(); yaml.load(file.toFile());
        var registered = manager.warehouses.get(ID);
        if (registered != null && !registered.owner().equals(OWNER)) throw new IOException("bench 倉庫が保存データと一致しません。");
        warehouse = fixture(UUID.fromString(yaml.getString("world")), yaml.getInt("x"), yaml.getInt("y"), yaml.getInt("z"),
                yaml.getInt("sx", 8), yaml.getInt("sy", 6), yaml.getInt("sz", 8));
        seed = yaml.getLong("seed");
        retainChunks();
    }

    void stop() {
        if (operation != null) operation.cancel();
        plugin.work().endMeasurement();
        tickets.forEach(chunk -> plugin.index().release(chunk)); tickets.clear();
        busy = false;
    }

    boolean command(CommandSender sender, String[] args) {
        if (!plugin.getConfig().getBoolean("debug.bench", false)) { sender.sendMessage("無効です"); return true; }
        if (!(sender instanceof ConsoleCommandSender) && !(sender instanceof org.bukkit.command.RemoteConsoleCommandSender)) { sender.sendMessage("コンソールから実行してください。"); return true; }
        try {
            if (busy || warehouse != null && manager.input().busy(warehouse)) throw new IllegalArgumentException("bench は処理中です。");
            if (args.length == 0) throw new IllegalArgumentException(usage());
            switch (args[0]) {
                case "setup" -> setup(args);
                case "reset" -> { requireLength(args, 1); requireWarehouse(); reset(); }
                case "clear" -> {
                    requireLength(args, 1);
                    if (warehouse == null) throw new IllegalArgumentException("先に setup してください。");
                    clear();
                }
                case "run" -> {
                    if (args.length < 2 || args.length > 3) throw new IllegalArgumentException(usage());
                    requireWarehouse();
                    int repeat = args.length >= 3 ? Integer.parseInt(args[2]) : 5;
                    if (repeat < 1) throw new IllegalArgumentException("repeat は1以上の整数です。");
                    if (!args[1].equals("all") && !SCENARIOS.contains(args[1])) throw new IllegalArgumentException(usage());
                    run(sender, args[1], repeat);
                    return true;
                }
                default -> throw new IllegalArgumentException(usage());
            }
            say(sender, "pullbench " + args[0] + " 完了 (seed=" + seed + ")");
        } catch (Exception error) { say(sender, "pullbench: " + error.getMessage()); }
        return true;
    }

    private static void requireLength(String[] args, int length) {
        if (args.length != length) throw new IllegalArgumentException(usage());
    }
    private static String usage() {
        return "/pullbench setup <world> <x> <y> <z> [seed [sx sy sz]] | run <cold-load|list|search|store|take|all> [repeat] | reset | clear";
    }
    private Path stateFile() { return plugin.getDataFolder().toPath().resolve("bench.yml"); }
    private World world() {
        World world = plugin.getServer().getWorld(warehouse.world());
        if (world == null) throw new IllegalArgumentException("bench のワールドがロードされていません。");
        return world;
    }
    private void requireWarehouse() {
        if (warehouse == null) throw new IllegalArgumentException("先に setup してください。");
        if (!warehouse.equals(manager.warehouses.get(ID))) throw new IllegalArgumentException("bench の登録が変更されています。clear 後に setup してください。");
        world();
    }

    private static Warehouse fixture(UUID world, int x, int y, int z, int sx, int sy, int sz) {
        var link = new Warehouse.Link(List.of(new SurvivalPull.Position(x, y + sy + 1, z),
                new SurvivalPull.Position(x + 1, y + sy + 1, z)), Material.CHEST);
        return new Warehouse(ID, "bench", world, OWNER, new HashSet<>(Set.of(Warehouse.EVERYONE)),
                x, y, z, x + sx - 1, y + sy - 1, z + sz - 1, new HashSet<>(), new java.util.LinkedHashSet<>(Set.of(link)));
    }
    private int barrelCount() { return (int) warehouse.volume(); }

    private void setup(String[] args) throws IOException {
        if (args.length != 5 && args.length != 6 && args.length != 9) throw new IllegalArgumentException(usage());
        // 大きさ（樽の数）。省略時は本番の地下倉庫と同じ 8×6×8。
        int sx = args.length == 9 ? Integer.parseInt(args[6]) : 8, sy = args.length == 9 ? Integer.parseInt(args[7]) : 6,
                sz = args.length == 9 ? Integer.parseInt(args[8]) : 8;
        if (sx < 2 || sy < 1 || sz < 1 || (long) sx * sy * sz > 65536) throw new IllegalArgumentException("大きさは 2×1×1〜65536 個です。");
        if (warehouse != null || manager.warehouses.containsKey(ID)) throw new IllegalArgumentException("先に clear してください。");
        World world = plugin.getServer().getWorld(args[1]);
        if (world == null) throw new IllegalArgumentException("ワールドがありません。");
        int x = Integer.parseInt(args[2]), y = Integer.parseInt(args[3]), z = Integer.parseInt(args[4]);
        if (x < -29_999_984 || x > 29_999_976 || z < -29_999_984 || z > 29_999_976
                || y < world.getMinHeight() || (long) y + sy + 1 >= world.getMaxHeight()) throw new IllegalArgumentException("設置範囲がワールドの境界外です。");
        long requestedSeed = args.length >= 6 ? Long.parseLong(args[5]) : 0L;
        var wh = fixture(world.getUID(), x, y, z, sx, sy, sz);
        var link = wh.links().iterator().next();
        manager.validateNew(wh);
        for (var other : manager.warehouses.values()) {
            if (!other.world().equals(wh.world())) continue;
            if (link.blocks().stream().anyMatch(p -> other.contains(p.x(), p.y(), p.z()))
                    || other.links().stream().flatMap(l -> l.blocks().stream()).anyMatch(p -> wh.contains(p.x(), p.y(), p.z()) || link.blocks().contains(p)))
                throw new IllegalArgumentException("既存倉庫の投入口または範囲と重なっています。");
        }
        warehouse = fixture(world.getUID(), x, y, z, sx, sy, sz); seed = requestedSeed;
        // Save the footprint before replacing blocks so an interrupted setup can still be cleared.
        try {
            retainChunks();
            Files.createDirectories(plugin.getDataFolder().toPath());
            var state = new YamlConfiguration();
            state.set("seed", seed); state.set("world", world.getUID().toString());
            state.set("x", x); state.set("y", y); state.set("z", z); state.set("sx", sx); state.set("sy", sy); state.set("sz", sz); state.save(stateFile().toFile());
            manager.warehouses.put(ID, wh); manager.save();
        } catch (IOException | RuntimeException error) {
            manager.warehouses.remove(ID); warehouse = null;
            tickets.forEach(chunk -> plugin.index().release(chunk)); tickets.clear();
            try { Files.deleteIfExists(stateFile()); } catch (IOException cleanup) { error.addSuppressed(cleanup); }
            throw error;
        }
        for (var p : barrelPositions()) world.getBlockAt(p.x(), p.y(), p.z()).setType(Material.BARREL, false);
        for (int i = 0; i < 2; i++) {
            var p = link.blocks().get(i);
            var block = world.getBlockAt(p.x(), p.y(), p.z());
            block.setType(Material.CHEST, false);
            var data = (Chest) block.getBlockData();
            data.setFacing(BlockFace.NORTH); data.setType(i == 0 ? Chest.Type.LEFT : Chest.Type.RIGHT);
            block.setBlockData(data, false);
        }
        reset();
    }

    private void retainChunks() {
        World world = world();
        for (var p : link().blocks()) {
            Chunk chunk = world.getChunkAt(p.x() >> 4, p.z() >> 4);
            if (tickets.add(chunk)) plugin.index().hold(chunk);
        }
        for (int x = warehouse.minX() >> 4; x <= (warehouse.maxX() >> 4); x++)
            for (int z = warehouse.minZ() >> 4; z <= (warehouse.maxZ() >> 4); z++) {
                Chunk chunk = world.getChunkAt(x, z);
                if (!tickets.contains(chunk)) { plugin.index().hold(chunk); tickets.add(chunk); }
            }
    }
    private List<SurvivalPull.Position> barrelPositions() {
        var positions = new ArrayList<SurvivalPull.Position>(barrelCount());
        for (int x = warehouse.minX(); x <= warehouse.maxX(); x++)
            for (int y = warehouse.minY(); y <= warehouse.maxY(); y++)
                for (int z = warehouse.minZ(); z <= warehouse.maxZ(); z++) positions.add(new SurvivalPull.Position(x, y, z));
        return positions;
    }
    private Inventory inventory(SurvivalPull.Position p, Material type) {
        var block = world().getBlockAt(p.x(), p.y(), p.z());
        if (block.getType() != type || !(block.getState(false) instanceof Container container))
            throw new IllegalArgumentException("bench の容器が壊れています: " + p + "。clear 後に setup してください。");
        return SurvivalPull.containerInventory(container);
    }
    private List<Inventory> barrels() { return barrelPositions().stream().map(p -> inventory(p, Material.BARREL)).toList(); }
    private Warehouse.Link link() { return warehouse.links().iterator().next(); }
    private List<Inventory> inputs() { return link().blocks().stream().map(p -> inventory(p, Material.CHEST)).toList(); }

    private void reset() {
        var barrels = barrels(); var inputs = inputs();
        Sample[] samples = samples(seed, barrelCount() * 27, false);
        int cursor = 0;
        for (var inventory : barrels) for (int slot = 0; slot < inventory.getSize(); slot++) {
            Sample sample = samples[cursor++]; inventory.setItem(slot, sample == null ? null : sample.item());
        }
        inputs.forEach(Inventory::clear);
        plugin.index().rebuild(ID);
    }
    private void fillInput() {
        var samples = samples(seed ^ 0x53544f5245L, 54, true);
        int cursor = 0;
        for (var inventory : inputs()) {
            for (int slot = 0; slot < inventory.getSize(); slot++) inventory.setItem(slot, samples[cursor++].item());
        }
    }
    private void clear() throws IOException {
        var positions = new ArrayList<>(barrelPositions());
        positions.addAll(link().blocks());
        World world = world();
        for (var p : positions) {
            var block = world.getBlockAt(p.x(), p.y(), p.z());
            if (block.getState(false) instanceof Container container) SurvivalPull.containerInventory(container).clear();
            block.setType(Material.AIR, false);
        }
        manager.warehouses.remove(ID);
        manager.save(); plugin.index().rebuild(ID);
        Files.deleteIfExists(stateFile());
        tickets.forEach(chunk -> plugin.index().release(chunk)); tickets.clear();
        warehouse = null;
    }

    private record Trial(String scenario, int iteration, int repeat) { }
    private record Output(long count, int bytes) { }

    private void run(CommandSender sender, String scenario, int repeat) {
        if (names == null) names = ItemNames.load(plugin.getResource("ja_jp_names.json"));
        var trials = new ArrayDeque<Trial>();
        for (String name : scenario.equals("all") ? SCENARIOS : List.of(scenario)) trials.add(new Trial(name, 1, repeat));
        busy = true; next(sender, trials, FILE_TIME.format(Instant.now()));
    }
    private void failed(CommandSender sender, Exception error) {
        plugin.work().endMeasurement();
        if (operation != null) operation.cancel();
        busy = false; say(sender, "pullbench 中断: " + error);
    }
    private void next(CommandSender sender, ArrayDeque<Trial> trials, String timestamp) {
        if (trials.isEmpty()) { busy = false; return; }
        Trial trial = trials.removeFirst();
        if (trial.iteration < trial.repeat) trials.addFirst(new Trial(trial.scenario, trial.iteration + 1, trial.repeat));
        try {
            requireWarehouse();
            if (trial.scenario.equals("store") || trial.scenario.equals("take")) reset();
            if (trial.scenario.equals("store")) fillInput();
            operation = plugin.work().start(); operation.onFailure(error -> failed(sender, error));
            operation.read(() -> plugin.index().ready(warehouse), () -> {
                operation.cancel();
                plugin.getServer().getScheduler().runTask(plugin.owner(), () -> {
                    try { measure(sender, trial, trials, timestamp); }
                    catch (Exception error) { failed(sender, error); }
                });
            });
        } catch (Exception error) { failed(sender, error); }
    }
    private void measure(CommandSender sender, Trial trial, ArrayDeque<Trial> trials, String timestamp) {
        var prepared = plugin.index().snapshot(warehouse);
        long before = heapUsed(); int startedTick = plugin.getServer().getCurrentTick();
        var timing = plugin.work().beginMeasurement();
        operation = plugin.work().start(); operation.onFailure(error -> failed(sender, error));
        java.util.function.Consumer<Output> done = output -> {
            operation.cancel();
            plugin.getServer().getScheduler().runTask(plugin.owner(), () -> {
                plugin.work().endMeasurement();
                try {
                    Path file = plugin.getDataFolder().toPath().resolve("bench").resolve(timestamp + "-" + trial.scenario + ".csv");
                    int ticks = Math.max(1, plugin.getServer().getCurrentTick() - startedTick);
                    append(file, csv(plugin.getPluginMeta().getVersion(), trial.scenario, trial.iteration, prepared.capacity(),
                            timing, ticks, output.count, output.bytes, before, heapUsed()));
                    say(sender, String.format(Locale.ROOT, "pullbench %s #%d main=%.3fms max/tick=%.3fms ticks=%d results=%d -> %s",
                            trial.scenario, trial.iteration, timing.mainTotal() / 1e6, timing.maxTick() / 1e6, ticks, output.count, file));
                    next(sender, trials, timestamp);
                } catch (Exception error) { failed(sender, error); }
            });
        };
        switch (trial.scenario) {
            case "cold-load" -> {
                operation.main(() -> {
                    plugin.index().rebuild(ID);
                    operation.read(() -> plugin.index().ready(warehouse), () -> done.accept(new Output(plugin.index().snapshot(warehouse).parts(), 0)));
                });
            }
            case "list", "search" -> operation.main(() -> {
                var snapshot = plugin.index().snapshot(warehouse);
                operation.think(() -> list(snapshot, trial.scenario.equals("search")), done);
            });
            case "store" -> {
                var job = new WarehouseInput.Job(plugin, warehouse, link());
                operation.move(() -> {
                    if (!job.step()) return false;
                    done.accept(new Output(job.moved, 0)); return true;
                });
            }
            case "take" -> {
                var entry = prepared.stock().stream().filter(row -> row.key().isEmpty()
                        && row.amount() >= row.material().getMaxStackSize()).findFirst().orElseThrow();
                var destination = plugin.getServer().createInventory(null, 9);
                final int[] count = {0}; final long[] moved = {0};
                // Time only the shared GUI take path; returning its stack is fixture preparation.
                plugin.work().endMeasurement();
                operation.move(() -> {
                    long started = System.nanoTime();
                    var result = plugin.index().take(warehouse, destination, entry.material(), entry.key(), entry.material().getMaxStackSize());
                    timing.main(plugin.getServer().getCurrentTick(), System.nanoTime() - started);
                    if (result.amount() != entry.material().getMaxStackSize()) throw new IllegalStateException("1スタックを取り出せませんでした。");
                    moved[0] += result.amount();
                    for (int i = 0; i < destination.getSize(); i++) plugin.index().store(warehouse, destination, i);
                    if (++count[0] < 100) return false;
                    done.accept(new Output(moved[0], 0)); return true;
                });
            }
            default -> throw new IllegalArgumentException(trial.scenario);
        }
    }

    private Output list(WarehouseSnapshot snapshot, boolean search) {
        var stock = snapshot.summarize();
        if (!search) return new Output(stock.size(), ClientCommunication.listBytes("倉庫: bench", stock).length);
        long count = 0; int bytes = 0;
        for (String query : List.of("ダイヤ", "の", "minecraft:stone")) {
            var filtered = names.filter(stock, query);
            count += filtered.size(); bytes += ClientCommunication.listBytes("倉庫: bench", filtered).length;
        }
        return new Output(count, bytes);
    }

    private static long heapUsed() { var runtime = Runtime.getRuntime(); return runtime.totalMemory() - runtime.freeMemory(); }

    static String csv(String version, String scenario, int iteration, WarehouseContainers.Capacity capacity,
                      WorkPipeline.Measurement timing, int ticks, long results, int bytes, long before, long after) {
        return String.format(Locale.ROOT, "%s,%s,%s,%d,%d,%d,%d,%.6f,%.6f,%d,%.6f,%d,%d,%.6f,%.6f",
                Instant.now(), version, scenario, iteration, capacity.containers(), capacity.slots(), capacity.used(),
                timing.mainTotal() / 1e6, timing.maxTick() / 1e6, ticks, timing.asyncTotal() / 1e6,
                results, bytes, before / 1048576.0, after / 1048576.0);
    }
    static void append(Path file, String row) throws IOException {
        Files.createDirectories(file.getParent());
        if (!Files.exists(file)) Files.writeString(file, HEADER + "\n", StandardOpenOption.CREATE_NEW);
        Files.writeString(file, row + "\n", StandardOpenOption.APPEND);
    }

    /** RCON から実行したときも、結果を鯖のログ（server.out）に残す。 */
    private void say(CommandSender sender, String message) {
        sender.sendMessage(message);
        if (!(sender instanceof ConsoleCommandSender)) plugin.getServer().getConsoleSender().sendMessage(message);
    }
}
