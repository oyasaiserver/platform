package io.oyasai.survival.pull;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import java.util.logging.Logger;
import org.bukkit.Chunk;
import org.bukkit.Location;
import org.bukkit.Material;
import org.bukkit.Server;
import org.bukkit.World;
import org.bukkit.block.Barrel;
import org.bukkit.block.Block;
import org.bukkit.block.BlockState;
import org.bukkit.block.Chest;
import org.bukkit.block.Container;
import org.bukkit.configuration.file.YamlConfiguration;
import org.bukkit.inventory.Inventory;
import org.bukkit.scheduler.BukkitScheduler;
import org.bukkit.scheduler.BukkitTask;
import static org.mockito.Mockito.*;

final class IndexTestSupport {
    final SurvivalPull plugin = mock(SurvivalPull.class);
    final World world = mock(World.class);
    final Server server = mock(Server.class);
    final BukkitScheduler scheduler = mock(BukkitScheduler.class);
    final Map<SurvivalPull.Position, Block> blocks = new HashMap<>();
    final Map<String, Chunk> chunks = new HashMap<>();
    final Map<String, List<BlockState>> tiles = new HashMap<>();
    final List<Runnable> main = new ArrayList<>();
    final List<Runnable> timers = new ArrayList<>();
    final List<Runnable> workers = new ArrayList<>();
    int tick;
    final WarehouseManager manager;
    final WarehouseIndex index;
    Warehouse wh;
    IndexTestSupport() {
        when(plugin.getServer()).thenReturn(server); when(server.getScheduler()).thenReturn(scheduler);
        when(plugin.getConfig()).thenReturn(new YamlConfiguration()); when(plugin.getLogger()).thenReturn(mock(Logger.class));
        when(world.getUID()).thenReturn(UUID.randomUUID()); when(server.getWorld(world.getUID())).thenReturn(world);
        when(plugin.snapshotBudget()).thenReturn(64); var pipeline = new WorkPipeline(plugin); when(plugin.work()).thenReturn(pipeline);
        when(world.isChunkLoaded(anyInt(), anyInt())).thenReturn(true);
        when(world.getBlockAt(anyInt(), anyInt(), anyInt())).thenAnswer(c -> block(new SurvivalPull.Position(c.getArgument(0), c.getArgument(1), c.getArgument(2))));
        when(world.getBlockAt(any(Location.class))).thenAnswer(c -> { Location l=c.getArgument(0); return block(WarehouseContainers.position(l)); });
        when(world.getChunkAt(anyInt(), anyInt())).thenAnswer(c -> chunk(c.getArgument(0), c.getArgument(1)));
        when(server.getCurrentTick()).thenAnswer(c -> tick);
        when(scheduler.runTask(eq(plugin.owner()), any(Runnable.class))).thenAnswer(c -> {
            Runnable action=c.getArgument(1); var task=mock(BukkitTask.class);var cancelled=new java.util.concurrent.atomic.AtomicBoolean();
            doAnswer(v->{cancelled.set(true);return null;}).when(task).cancel();
            main.add(()->{if(!cancelled.get())action.run();});return task;
        });
        when(scheduler.runTaskAsynchronously(eq(plugin.owner()), any(Runnable.class))).thenAnswer(c -> {workers.add(c.getArgument(1));return mock(BukkitTask.class);});
        when(scheduler.runTaskTimer(eq(plugin.owner()), any(Runnable.class), anyLong(), anyLong())).thenAnswer(c -> {
            Runnable action=c.getArgument(1);var task=mock(BukkitTask.class);var cancelled=new java.util.concurrent.atomic.AtomicBoolean();
            doAnswer(v->{cancelled.set(true);return null;}).when(task).cancel();
            timers.add(()->{if(!cancelled.get())action.run();});return task;
        });
        manager = new WarehouseManager(plugin);
        wh = Warehouse.create("test", UUID.randomUUID(), new Location(world, 0, 60, 0), new Location(world, 31, 70, 15));
        manager.warehouses.put(wh.id(), wh);
        index = new WarehouseIndex(plugin, manager); when(plugin.index()).thenReturn(index);
    }
    Block block(SurvivalPull.Position p) {
        return blocks.computeIfAbsent(p, q -> {
            var b = mock(Block.class); when(b.getWorld()).thenReturn(world);
            when(b.getLocation()).thenReturn(new Location(world, q.x(), q.y(), q.z()));
            when(b.getState(false)).thenReturn(mock(BlockState.class)); return b;
        });
    }
    Chunk chunk(int x, int z) {
        String key = x + ":" + z;
        return chunks.computeIfAbsent(key, q -> {
            var chunk = mock(Chunk.class); when(chunk.getX()).thenReturn(x); when(chunk.getZ()).thenReturn(z);
            when(chunk.getTileEntities(false)).thenAnswer(c -> tiles.getOrDefault(key, List.of()).toArray(BlockState[]::new)); return chunk;
        });
    }
    Container add(int x, Inventory inv) { return add(Barrel.class, Material.BARREL, x, 64, 1, inv); }
    <T extends Container> T add(Class<T> type, Material material, int x, int y, int z, Inventory inv) {
        T c = mock(type);
        when(c.getX()).thenReturn(x); when(c.getY()).thenReturn(y); when(c.getZ()).thenReturn(z);
        when(c.getWorld()).thenReturn(world); when(c.getType()).thenReturn(material);
        when(c.getLocation()).thenReturn(new Location(world, x, y, z)); when(c.getInventory()).thenReturn(inv);
        if (c instanceof Chest chest) when(chest.getBlockInventory()).thenReturn(inv);
        when(inv.getLocation()).thenReturn(new Location(world, x, y, z));
        register(c); return c;
    }
    void register(Container c) {
        when(c.getWorld()).thenReturn(world);
        var p = new SurvivalPull.Position(c.getX(), c.getY(), c.getZ());
        when(c.getLocation()).thenReturn(new Location(world, p.x(), p.y(), p.z()));
        var block = block(p); when(block.getState(false)).thenReturn(c); var material=c.getType(); when(block.getType()).thenReturn(material);
        tiles.computeIfAbsent((p.x() >> 4) + ":" + (p.z() >> 4), ignored -> new ArrayList<>()).add(c);
    }
    void load() { index.start(); for (int i = 0; i < 10000 && !index.ready(wh); i++) index.tick(); }
    void flush() { while (!main.isEmpty()) main.removeFirst().run(); }
    void step() {
        tick++; List.copyOf(timers).forEach(Runnable::run);
        while(!workers.isEmpty())workers.removeFirst().run();flush();
    }
    static List<SurvivalPull.Stock> summarize(List<Container> containers) {
        var f = fixture(containers); return f.index.snapshot(f.wh).stock();
    }
    static SurvivalPull.Result collect(List<Container> containers, Inventory destination, Material material, int amount) {
        return collect(containers, destination, material, "", amount);
    }
    static SurvivalPull.Result collect(List<Container> containers, Inventory destination, Material material, String key, int amount) {
        var f = fixture(containers); return f.index.take(f.wh, destination, material, key, amount);
    }
    private static IndexTestSupport fixture(List<Container> containers) {
        var f = new IndexTestSupport();
        if (!containers.isEmpty()) {
            int minX = containers.stream().mapToInt(Container::getX).min().orElse(0), maxX = containers.stream().mapToInt(Container::getX).max().orElse(0);
            int minY = containers.stream().mapToInt(Container::getY).min().orElse(0), maxY = containers.stream().mapToInt(Container::getY).max().orElse(0);
            int minZ = containers.stream().mapToInt(Container::getZ).min().orElse(0), maxZ = containers.stream().mapToInt(Container::getZ).max().orElse(0);
            f.manager.warehouses.clear(); f.wh = Warehouse.create("test", UUID.randomUUID(), new Location(f.world,minX,minY,minZ),new Location(f.world,maxX,maxY,maxZ));
            f.manager.warehouses.put(f.wh.id(), f.wh);
        }
        containers.forEach(f::register); f.load(); return f;
    }
}
