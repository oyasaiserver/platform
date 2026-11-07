package io.oyasai.survival.pull;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.HashMap;
import java.util.HashSet;
import java.util.LinkedHashMap;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.UUID;
import org.bukkit.Chunk;
import org.bukkit.Location;
import org.bukkit.Material;
import org.bukkit.World;
import org.bukkit.block.Container;
import org.bukkit.inventory.Inventory;
import org.bukkit.inventory.ItemStack;
import org.bukkit.scheduler.BukkitTask;

/** Main-thread authoritative slot index. Only loading and explicit repairs read whole containers. */
final class WarehouseIndex {
    private final SurvivalPull plugin;
    private final WarehouseManager manager;
    private final Map<UUID, State> states = new LinkedHashMap<>();
    private final Map<Chunk, Integer> tickets = new HashMap<>();
    private BukkitTask task;
    private long version;

    private static final class Entry {
        final WarehouseContainers.Part part;
        final SurvivalPull.Position key;
        final int maxSize;
        final Slot[] slots;
        Entry(WarehouseContainers.Part part, SurvivalPull.Position key, Inventory inventory) {
            this.part = part; this.key = key; maxSize = inventory.getMaxStackSize();
            slots = new Slot[inventory.getSize()];
            for (int i = 0; i < slots.length; i++) slots[i] = new Slot(this, i);
        }
    }
    private static final class Slot {
        final Entry entry;
        final int number;
        ItemStack item;
        ItemVariant variant;
        Slot(Entry entry, int number) { this.entry = entry; this.number = number; }
        int amount() { return item == null ? 0 : item.getAmount(); }
    }
    private static final class State {
        final Warehouse warehouse;
        final Map<SurvivalPull.Position, Entry> entries = new LinkedHashMap<>();
        final Map<ItemVariant.Id, LinkedHashSet<Slot>> variants = new HashMap<>();
        final Map<ItemVariant.Id, Long> totals = new HashMap<>();
        final Set<Slot> empty = new LinkedHashSet<>();
        final Set<Chunk> chunks = new HashSet<>();
        final Map<SurvivalPull.Position, Integer> editing = new HashMap<>();
        WarehouseContainers.Reader reader;
        WarehouseSnapshot snapshot;
        boolean ready;
        State(Warehouse wh) { warehouse = wh; }
    }
    WarehouseIndex(SurvivalPull plugin, WarehouseManager manager) { this.plugin = plugin; this.manager = manager; }
    void start() {
        manager.warehouses.keySet().forEach(this::rebuild);
        task = plugin.getServer().getScheduler().runTaskTimer(plugin.owner(), this::tick, 1, 1);
    }
    void stop() {
        if (task != null) task.cancel();
        tickets.keySet().forEach(c -> c.removePluginChunkTicket(plugin.owner()));
        tickets.clear(); states.clear();
    }
    private void retain(State state, World world, int x, int z) {
        Chunk chunk = world.getChunkAt(x, z);
        if (!state.chunks.add(chunk)) return;
        hold(chunk);
    }
    void hold(Chunk chunk) { if (tickets.merge(chunk, 1, Integer::sum) == 1) chunk.addPluginChunkTicket(plugin.owner()); }
    void release(Chunk chunk) {
        Integer count = tickets.get(chunk); if (count == null) return;
        if (count == 1) { tickets.remove(chunk); chunk.removePluginChunkTicket(plugin.owner()); }
        else tickets.put(chunk, count - 1);
    }
    void rebuild(UUID id) {
        State old = states.get(id);
        Warehouse wh = manager.warehouses.get(id);
        State next = null;
        if (wh != null) {
            var world = plugin.getServer().getWorld(wh.world());
            // 1つの倉庫のワールドが無いだけで、プラグイン全体を止めない。
            if (world == null) plugin.getLogger().warning("倉庫のワールドがありません（索引を作りません）: " + wh.name());
            else next = new State(wh);
        }
        if (next != null) {
            var world = plugin.getServer().getWorld(wh.world());
            for (int x = wh.minX() >> 4; x <= (wh.maxX() >> 4); x++)
                for (int z = wh.minZ() >> 4; z <= (wh.maxZ() >> 4); z++) retain(next, world, x, z);
            for (var player : plugin.getServer().getOnlinePlayers()) {
                var inventory = player.getOpenInventory().getTopInventory();
                boolean inside = WarehouseContainers.locations(inventory).stream().anyMatch(l -> {
                    if (!world.equals(l.getWorld())) return false;
                    var block = l.getBlock().getState(false);
                    return WarehouseContainers.eligible(block) && WarehouseContainers.linkedBlocks((Container) block).stream()
                            .anyMatch(p -> wh.contains(p.x(), p.y(), p.z()));
                });
                if (inside) player.closeInventory();
            }
            next.reader = new WarehouseContainers.Reader(world, wh);
        }
        if (old != null) old.chunks.forEach(this::release);
        if (next == null) states.remove(id); else { states.put(id, next); changed(next); }
    }
    void tick() {
        int budget = plugin.snapshotBudget();
        long started = System.nanoTime();
        try {
            for (var state : states.values()) {
                if (state.ready) continue;
                while (budget > 0) {
                    var p = state.reader.next();
                    if (p == null) { state.ready = true; state.reader = null; break; }
                    read(state, p); budget--;
                }
                if (budget == 0) break;
            }
        } finally { plugin.work().recordMain(started); plugin.logSlow("索引初期読込", started); }
    }
    boolean ready(Warehouse wh) { var s = states.get(wh.id()); return s != null && s.ready; }
    private void changed(State s) { s.snapshot = null; version++; }
    private void remove(State s, SurvivalPull.Position p) {
        Entry old = s.entries.remove(p);
        if (old == null) return;
        for (Slot slot : old.slots) { detach(s, slot); }
        changed(s);
    }
    private void detach(State s, Slot slot) {
        if (slot.item == null) { s.empty.remove(slot); return; }
        var id = slot.variant.id();
        var slots = s.variants.get(id); slots.remove(slot);
        if (slots.isEmpty()) s.variants.remove(id);
        long total = s.totals.get(id) - slot.amount();
        if (total == 0) s.totals.remove(id); else s.totals.put(id, total);
    }
    private void set(State s, Slot slot, ItemStack item) {
        update(s, slot, item);
        // A double chest can straddle two registered regions; both views must change together.
        for (var other : states.values()) {
            if (other == s || !other.warehouse.world().equals(s.warehouse.world())) continue;
            var entry = other.entries.get(slot.entry.part.position());
            if (entry != null && slot.number < entry.slots.length) update(other, entry.slots[slot.number], item);
        }
    }
    private void update(State s, Slot slot, ItemStack item) {
        // Newly allocated slots have not been attached yet.
        if (slot.item != null || s.empty.contains(slot)) detach(s, slot);
        var variant = item != null && slot.item != null && item.isSimilar(slot.item) ? slot.variant : null;
        slot.item = item == null || item.isEmpty() || item.getAmount() <= 0 ? null : item.clone();
        slot.variant = slot.item == null ? null : variant == null ? ItemVariant.capture(slot.item) : variant;
        if (slot.item == null) s.empty.add(slot);
        else {
            s.variants.computeIfAbsent(slot.variant.id(), ignored -> new LinkedHashSet<>()).add(slot);
            s.totals.merge(slot.variant.id(), (long) slot.amount(), Long::sum);
        }
        changed(s);
    }
    private void read(State s, SurvivalPull.Position p) {
        remove(s, p);
        var world = plugin.getServer().getWorld(s.warehouse.world());
        retain(s, world, p.x() >> 4, p.z() >> 4);
        var current = world.getBlockAt(p.x(), p.y(), p.z()).getState(false);
        if (!WarehouseContainers.eligible(current)) return;
        var c = (Container) current;
        if (!s.warehouse.contains(p.x(), p.y(), p.z()) && WarehouseContainers.linkedBlocks(c).stream()
                .noneMatch(q -> s.warehouse.contains(q.x(), q.y(), q.z()))) return;
        var inventory = SurvivalPull.containerInventory(c);
        var entry = new Entry(WarehouseContainers.part(c), SurvivalPull.containerKey(c), inventory);
        s.entries.put(p, entry);
        for (var slot : entry.slots) set(s, slot, inventory.getItem(slot.number));
        changed(s);
    }
    void refresh(Location location) {
        var p = WarehouseContainers.position(location);
        var current = location.getBlock().getState(false);
        var positions = new LinkedHashSet<SurvivalPull.Position>(); positions.add(p);
        if (WarehouseContainers.eligible(current)) positions.addAll(WarehouseContainers.linkedBlocks((Container) current));
        for (var s : states.values()) {
            if (!s.warehouse.world().equals(location.getWorld().getUID())) continue;
            if (!s.entries.containsKey(p) && positions.stream().noneMatch(q -> s.warehouse.contains(q.x(), q.y(), q.z()))) continue;
            for (var q : positions) read(s, q);
        }
    }
    Warehouse warehouse(Location location) {
        var direct = manager.at(location);
        if (direct != null) return direct;
        var p = WarehouseContainers.position(location);
        for (var s : states.values()) if (s.warehouse.world().equals(location.getWorld().getUID()) && s.entries.containsKey(p))
            return manager.warehouses.get(s.warehouse.id());
        var current = location.getBlock().getState(false);
        if (!(current instanceof org.bukkit.block.Chest chest)) return null;
        for (var q : WarehouseContainers.linkedBlocks(chest)) {
            var wh = manager.at(new Location(location.getWorld(), q.x(), q.y(), q.z()));
            if (wh != null) return wh;
        }
        return null;
    }
    void remove(Location l) {
        for (var s : states.values()) if (s.warehouse.world().equals(l.getWorld().getUID())) remove(s, WarehouseContainers.position(l));
    }
    void editing(Inventory inventory, boolean open) {
        for (var l : WarehouseContainers.locations(inventory)) {
            var p = WarehouseContainers.position(l);
            if (open) {
                var wh = warehouse(l);
                var state = wh == null ? null : states.get(wh.id());
                if (state != null) state.editing.merge(p, 1, Integer::sum);
            } else {
                boolean finished = false;
                for (var state : states.values()) {
                    if (!state.warehouse.world().equals(l.getWorld().getUID()) || !state.editing.containsKey(p)) continue;
                    int left = state.editing.get(p) - 1;
                    if (left > 0) state.editing.put(p, left);
                    else { state.editing.remove(p); finished = true; }
                }
                if (finished) refresh(l);
            }
        }
    }
    WarehouseSnapshot snapshot(Warehouse wh) {
        if (wh == null) return WarehouseSnapshot.empty();
        var s = states.get(wh.id());
        if (s == null || !s.ready) return WarehouseSnapshot.empty();
        if (s.snapshot != null) return s.snapshot;
        var stock = new ArrayList<SurvivalPull.Stock>();
        for (var group : s.variants.entrySet()) {
            var sources = new LinkedHashMap<SurvivalPull.Position, SurvivalPull.Source>();
            for (var slot : group.getValue()) {
                var entry = slot.entry;
                sources.merge(entry.key, new SurvivalPull.Source(entry.part.type(), entry.part.position(), slot.amount()),
                        (a, b) -> new SurvivalPull.Source(a.type(), a.position(), a.amount() + b.amount()));
            }
            stock.add(new SurvivalPull.Stock(group.getValue().getFirst().variant, s.totals.get(group.getKey()),
                    sources.values().stream().sorted(Comparator.comparingInt(SurvivalPull.Source::amount).reversed()).toList()));
        }
        stock.sort(Comparator.comparingLong(SurvivalPull.Stock::amount).reversed()
                .thenComparing(row -> row.material().name()).thenComparing(SurvivalPull.Stock::key));
        int slots = s.entries.values().stream().mapToInt(e -> e.slots.length).sum();
        int containers = (int) s.entries.values().stream().map(e -> e.key).distinct().count();
        // Approximation of index references and detached stack data, not a JVM heap measurement.
        long bytes = slots * 96L + s.entries.size() * 192L + s.variants.size() * 256L;
        bytes += s.variants.values().stream().map(slotsOfVariant -> slotsOfVariant.getFirst().variant)
                .filter(v -> v.base64() != null).mapToLong(v -> 2L * v.base64().length()).sum();
        return s.snapshot = new WarehouseSnapshot(version, stock,
                new WarehouseContainers.Capacity(containers, slots, slots - s.empty.size()), s.entries.size(), bytes);
    }
    private Inventory checked(State state, Slot slot) {
        if (state.editing.containsKey(slot.entry.part.position())) return null;
        var inv = slot.entry.part.inventory();
        if (inv != null && !inv.getViewers().isEmpty()) return null;
        var actual = inv == null || slot.number >= inv.getSize() ? null : inv.getItem(slot.number);
        boolean empty = actual == null || actual.isEmpty() || actual.getAmount() <= 0;
        if (inv != null && slot.number < inv.getSize() && (slot.item == null ? empty
                : !empty && actual.isSimilar(slot.item) && actual.getAmount() == slot.amount())) return inv;
        var p = slot.entry.part.position();
        refresh(new Location(slot.entry.part.world(), p.x(), p.y(), p.z()));
        plugin.getLogger().warning("倉庫索引の不一致を修復: " + state.warehouse.name() + " " + slot.entry.part.position());
        return null;
    }
    SurvivalPull.Result take(Warehouse wh, Inventory destination, Material material, String key, int amount) {
        long started = System.nanoTime();
        try {
            if (wh == null || !ready(wh) || amount <= 0) return new SurvivalPull.Result(0, List.of(), false);
            var s = states.get(wh.id()); var id = new ItemVariant.Id(material, key);
            var candidates = new ArrayList<>(s.variants.getOrDefault(id, new LinkedHashSet<>()));
            candidates.sort(Comparator.comparingInt(Slot::amount));
            var used = new LinkedHashMap<SurvivalPull.Position, SurvivalPull.Source>();
            int moved = 0;
            for (var slot : candidates) {
                if (s.entries.get(slot.entry.part.position()) != slot.entry) continue;
                var source = checked(s, slot); if (source == null || source.equals(destination)) continue;
                int n = Math.min(amount - moved, slot.amount());
                var offered = slot.item.clone(); offered.setAmount(n);
                // Remove first and restore addItem's remainder to the same source slot.
                var rest = slot.item.clone(); rest.setAmount(slot.amount() - n);
                source.setItem(slot.number, rest.getAmount() == 0 ? null : rest);
                int left;
                try { left = destination.addItem(offered).values().stream().mapToInt(ItemStack::getAmount).sum(); }
                catch (RuntimeException error) { source.setItem(slot.number, slot.item.clone()); throw error; }
                rest.setAmount(rest.getAmount() + left);
                source.setItem(slot.number, rest.getAmount() == 0 ? null : rest);
                set(s, slot, rest);
                int added = n - left; moved += added;
                if (added > 0) used.merge(slot.entry.key, new SurvivalPull.Source(slot.entry.part.type(), slot.entry.part.position(), added),
                        (a, b) -> new SurvivalPull.Source(a.type(), a.position(), a.amount() + b.amount()));
                if (moved == amount) break;
            }
            return new SurvivalPull.Result(moved, used.values().stream().sorted(Comparator.comparingInt(SurvivalPull.Source::amount).reversed()).toList(), !candidates.isEmpty());
        } finally { plugin.work().recordMain(started); }
    }
    int store(Warehouse wh, Inventory source, int sourceSlot) {
        if (!ready(wh) || WarehouseContainers.locations(source).stream().anyMatch(l -> warehouse(l) != null)) return 0;
        var item = source.getItem(sourceSlot);
        if (item == null || item.isEmpty() || item.getAmount() <= 0 || wh.excluded().contains(item.getType())) return 0;
        var meta = item.getItemMeta();
        if (meta != null && meta.hasCustomName()) return 0;
        var s = states.get(wh.id());
        var id = ItemVariant.capture(item).id();
        var candidates = new ArrayList<>(s.variants.getOrDefault(id, new LinkedHashSet<>()));
        candidates.removeIf(slot -> slot.amount() >= Math.min(slot.item.getMaxStackSize(), slot.entry.maxSize));
        // 空き枠は全部写さず先頭から少しだけ使う（6144容器で全部写すと1回の格納で150ms止まった）。
        boolean shulker = item.getType().name().endsWith("SHULKER_BOX");
        s.empty.stream().filter(slot -> !shulker || !slot.entry.part.type().name().endsWith("SHULKER_BOX"))
                .limit(8).forEach(candidates::add);
        int moved = 0;
        for (var slot : candidates) {
            if (s.entries.get(slot.entry.part.position()) != slot.entry) continue;
            if (item.getType().name().endsWith("SHULKER_BOX") && slot.entry.part.type().name().endsWith("SHULKER_BOX")) continue;
            var destination = checked(s, slot); if (destination == null || destination == source) continue;
            int n = Math.min(item.getAmount(), Math.min(item.getMaxStackSize(), slot.entry.maxSize) - slot.amount());
            if (n <= 0 || slot.item != null && !slot.item.isSimilar(item)) continue;
            var merged = item.clone(); merged.setAmount(slot.amount() + n);
            destination.setItem(slot.number, merged);
            var rest = item.clone(); rest.setAmount(item.getAmount() - n);
            source.setItem(sourceSlot, rest.getAmount() == 0 ? null : rest);
            set(s, slot, merged); moved += n; item = rest;
            if (item.getAmount() == 0) break;
        }
        return moved;
    }
}
