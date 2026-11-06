package io.oyasai.survival.pull;

import java.nio.file.Path;
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
import org.bukkit.block.BlockFace;
import org.bukkit.block.BlockState;
import org.bukkit.block.Chest;
import org.bukkit.block.Container;
import org.bukkit.configuration.file.YamlConfiguration;
import org.bukkit.entity.Player;
import org.bukkit.event.inventory.InventoryCloseEvent;
import org.bukkit.inventory.Inventory;
import org.bukkit.scheduler.BukkitScheduler;
import org.bukkit.scheduler.BukkitTask;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.io.TempDir;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.EnumSource;
import static io.oyasai.survival.pull.InventoryTestSupport.*;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class WarehouseLinkTest extends ItemStackTestSupport {
    @TempDir Path directory;
    final SurvivalPull plugin = mock(SurvivalPull.class);
    final World world = mock(World.class);
    final Player player = mock(Player.class);
    final Map<SurvivalPull.Position, Block> blocks = new HashMap<>();
    final List<Runnable> ticks = new ArrayList<>();
    final BukkitTask task = mock(BukkitTask.class);
    AsyncTestSupport async;
    WarehouseManager manager;
    Warehouse wh;

    @BeforeEach
    void setup() {
        when(world.getUID()).thenReturn(UUID.randomUUID());
        when(world.getMinHeight()).thenReturn(-64); when(world.getMaxHeight()).thenReturn(320);
        when(world.isChunkLoaded(anyInt(), anyInt())).thenReturn(true);
        when(world.getBlockAt(anyInt(), anyInt(), anyInt())).thenAnswer(c -> blocks.computeIfAbsent(
                new SurvivalPull.Position(c.getArgument(0), c.getArgument(1), c.getArgument(2)), p -> {
                    var block = mock(Block.class);
                    when(block.getLocation()).thenReturn(new Location(world, p.x(), p.y(), p.z()));
                    when(block.getState(false)).thenReturn(mock(BlockState.class));
                    return block;
                }));
        Chunk chunk = mock(Chunk.class); when(chunk.getTileEntities(false)).thenReturn(new BlockState[0]);
        when(world.getChunkAt(anyInt(), anyInt())).thenReturn(chunk);
        when(plugin.getDataFolder()).thenReturn(directory.toFile());
        when(plugin.getConfig()).thenReturn(new YamlConfiguration());
        when(plugin.getLogger()).thenReturn(mock(Logger.class));
        Server server = mock(Server.class); BukkitScheduler scheduler = mock(BukkitScheduler.class);
        when(plugin.getServer()).thenReturn(server); when(server.getScheduler()).thenReturn(scheduler);
        when(scheduler.runTaskTimer(eq(plugin.owner()), any(Runnable.class), eq(1L), eq(1L))).thenAnswer(c -> {
            ticks.add(c.getArgument(1)); return task;
        });
        async = new AsyncTestSupport(plugin, scheduler);
        when(player.getUniqueId()).thenReturn(UUID.randomUUID()); when(player.isOnline()).thenReturn(true);
        when(player.getWorld()).thenReturn(world); when(player.getLocation()).thenReturn(new Location(world, 1, 64, 1));
        when(plugin.index()).thenReturn(mock(WarehouseIndex.class));
        when(plugin.index().ready(any())).thenReturn(true);
        when(plugin.index().snapshot(any())).thenReturn(WarehouseSnapshot.empty());
        manager = new WarehouseManager(plugin);
        wh = Warehouse.create("Home", player.getUniqueId(), new Location(world, 0, 60, 0), new Location(world, 5, 70, 5));
        manager.warehouses.put(wh.id(), wh);
    }

    <T extends Container> T container(Class<T> type, Material material, int x, int y, int z, Inventory inventory) {
        T c = mock(type);
        when(c.getWorld()).thenReturn(world); when(c.getX()).thenReturn(x); when(c.getY()).thenReturn(y); when(c.getZ()).thenReturn(z);
        when(c.getLocation()).thenReturn(new Location(world, x, y, z)); when(c.getType()).thenReturn(material);
        when(c.getInventory()).thenReturn(inventory);
        if (c instanceof Chest chest) when(chest.getBlockInventory()).thenReturn(inventory);
        when(world.getBlockAt(x, y, z).getState(false)).thenReturn(c);
        when(inventory.getLocation()).thenReturn(new Location(world, x, y, z));
        return c;
    }

    Barrel barrel(int x, int y, int z) { return container(Barrel.class, Material.BARREL, x, y, z, inventory((org.bukkit.inventory.ItemStack) null)); }
    void look(Container container) {
        var block = world.getBlockAt(container.getX(), container.getY(), container.getZ());
        when(player.getTargetBlockExact(5)).thenReturn(block);
    }
    void command(String... args) { manager.command(player, args); }
    int savedLinks() throws Exception {
        var yaml = YamlConfiguration.loadConfiguration(directory.resolve("warehouses.yml").toFile());
        return yaml.getMapList("warehouses." + wh.id() + ".links").size();
    }
    InventoryCloseEvent close(Inventory inventory) {
        var event = mock(InventoryCloseEvent.class);
        when(event.getPlayer()).thenReturn(player); when(event.getInventory()).thenReturn(inventory);
        return event;
    }

    @Test
    void linkChecksWorldInsideAndPerAxisDistanceFromBoundary() throws Exception {
        look(barrel(5, 64, 5)); command("link", "Home");
        verify(player).sendMessage("投入口は倉庫の外に置いてください");
        for (int[] p : List.of(new int[] {70, 64, 0}, new int[] {0, 135, 0}, new int[] {0, 64, -65})) {
            look(barrel(p[0], p[1], p[2])); command("link", "Home");
        }
        verify(player, times(3)).sendMessage("リンクできる距離を超えています。");
        World other = mock(World.class); when(other.getUID()).thenReturn(UUID.randomUUID());
        var foreign = mock(Block.class); when(foreign.getLocation()).thenReturn(new Location(other, 6, 64, 0));
        when(player.getTargetBlockExact(5)).thenReturn(foreign); command("link", "Home");
        verify(player).sendMessage("倉庫と同じワールドの容器を指定してください。");
        // 各軸で64なら、対角線の長さによらずリンク可能。
        look(barrel(69, 134, -64)); command("link", "Home");
        assertEquals(1, savedLinks());
        plugin.getConfig().set("warehouse.link-distance", 1);
        look(barrel(7, 64, 0)); command("link", "Home");
        assertEquals(1, savedLinks());
        look(barrel(6, 64, 0)); command("link", "Home");
        assertEquals(2, savedLinks());
    }

    @Test
    void onlyMembersCanLinkAndUnlinkEvenIfOpAndLimitsAndDuplicateAreEnforced() throws Exception {
        var input = barrel(10, 64, 0); look(input);
        UUID owner = player.getUniqueId(); when(player.getUniqueId()).thenReturn(UUID.randomUUID()); when(player.isOp()).thenReturn(true);
        command("link", "Home");
        verify(player).sendMessage("倉庫のメンバーだけがリンクを変更できます。");
        wh.members().add(player.getUniqueId()); command("link", "Home");
        assertEquals(1, savedLinks());
        command("link", "Home"); assertEquals(1, savedLinks());
        var other = Warehouse.create("Other", owner, new Location(world, 20, 60, 0), new Location(world, 25, 70, 5));
        other.members().add(player.getUniqueId()); manager.warehouses.put(other.id(), other);
        command("link", "Other");
        verify(player, times(2)).sendMessage("その容器はすでにリンクされています。");
        plugin.getConfig().set("warehouse.max-links", 1);
        look(barrel(11, 64, 0)); command("link", "Home");
        verify(player).sendMessage("リンクされた投入口の上限です。"); assertEquals(1, savedLinks());
        look(input); when(player.getUniqueId()).thenReturn(UUID.randomUUID()); command("unlink");
        assertEquals(1, savedLinks());
        when(player.getUniqueId()).thenReturn(owner); command("unlink"); assertEquals(0, savedLinks());
    }

    @ParameterizedTest
    @EnumSource(value = BlockFace.class, names = {"NORTH", "SOUTH", "EAST", "WEST"})
    void doubleChestIsOneLinkFromEitherHalfAndRoundTrips(BlockFace facing) throws Exception {
        int x = 10, z = 10, rx = x - facing.getModZ(), rz = z + facing.getModX();
        var left = container(Chest.class, Material.TRAPPED_CHEST, x, 64, z, inventory((org.bukkit.inventory.ItemStack) null));
        var right = container(Chest.class, Material.TRAPPED_CHEST, rx, 64, rz, inventory((org.bukkit.inventory.ItemStack) null));
        for (var chest : List.of(left, right)) {
            var data = mock(org.bukkit.block.data.type.Chest.class);
            when(data.getType()).thenReturn(chest == left ? org.bukkit.block.data.type.Chest.Type.LEFT : org.bukkit.block.data.type.Chest.Type.RIGHT);
            when(data.getFacing()).thenReturn(facing); when(chest.getBlockData()).thenReturn(data);
        }
        look(right); command("link", "Home"); look(left); command("link", "Home");
        assertEquals(1, savedLinks()); verify(player).sendMessage("その容器はすでにリンクされています。");
        var loaded = new WarehouseManager(plugin); loaded.load(); assertEquals(manager.warehouses, loaded.warehouses);
        command("info");
        verify(player).sendMessage(contains("(" + x + ", 64, " + z + ")"));
        look(right); command("unlink"); assertEquals(0, savedLinks());
    }

    @Test
    void invalidTargetsAndDefaultFourLinkLimitAreRejected() throws Exception {
        command("link", "Home");
        verify(player).sendMessage("5マス以内のチェスト・トラップチェスト・樽を見てください。");
        look(container(org.bukkit.block.ShulkerBox.class, Material.SHULKER_BOX, 10, 64, 0, inventory((org.bukkit.inventory.ItemStack) null)));
        command("link", "Home");
        assertFalse(directory.resolve("warehouses.yml").toFile().exists());
        for (int x = 10; x < 15; x++) { look(barrel(x, 64, 0)); command("link", "Home"); }
        assertEquals(4, savedLinks()); verify(player).sendMessage("リンクされた投入口の上限です。");
        assertTrue(manager.complete(new String[] {""}).containsAll(List.of("link", "unlink")));
        assertEquals(List.of("Home"), manager.complete(new String[] {"link", "ho"}));
    }

    @Test
    void infoPrunesBrokenOrChangedLinksButDoesNotLoadUnloadedChunks() throws Exception {
        var a = barrel(32, 64, 0); var b = barrel(33, 64, 0);
        look(a); command("link", "Home"); look(b); command("link", "Home");
        when(world.isChunkLoaded(2, 0)).thenReturn(false);
        clearInvocations(world); command("info"); assertEquals(2, savedLinks());
        verify(world, never()).getBlockAt(32, 64, 0); verify(world, never()).getChunkAt(2, 0);
        when(world.isChunkLoaded(2, 0)).thenReturn(true);
        when(world.getBlockAt(32, 64, 0).getState(false)).thenReturn(mock(BlockState.class));
        container(Chest.class, Material.CHEST, 33, 64, 0, inventory((org.bukkit.inventory.ItemStack) null));
        command("info"); assertEquals(0, savedLinks());
        verify(player, times(2)).sendMessage(contains("壊れたリンクを削除しました"));
    }

    @Test
    void closingBrokenLinkRemovesItWithoutStartingJob() throws Exception {
        var a = barrel(10, 64, 0); look(a); command("link", "Home");
        when(world.getBlockAt(10, 64, 0).getState(false)).thenReturn(mock(BlockState.class));
        manager.input().onClose(close(a.getInventory()));
        assertEquals(0, savedLinks()); assertTrue(ticks.isEmpty());
        verify(player).sendMessage(contains("壊れたリンクを削除しました"));
    }

    @Test
    void linksSurviveRenameResizeAndSaveFailureRollsBackChanges() throws Exception {
        look(barrel(10, 64, 0)); command("link", "Home");
        command("pos1", "0", "60", "0"); command("pos2", "4", "70", "5");
        command("resize", "Home"); command("rename", "Home", "New");
        var loaded = new WarehouseManager(plugin); loaded.load(); assertEquals(manager.warehouses, loaded.warehouses);
        assertEquals(1, savedLinks());
        when(plugin.getDataFolder()).thenReturn(directory.resolve("warehouses.yml/blocked").toFile());
        command("unlink");
        assertNotNull(manager.linkedAt(new Location(world, 10, 64, 0)));
        look(barrel(11, 64, 0)); command("link", "New");
        assertNull(manager.linkedAt(new Location(world, 11, 64, 0)));
        verify(player, times(2)).sendMessage("保存に失敗したため、変更を取り消しました。");
    }

    @Test
    void cannotMoveLinkedWarehouseToAnotherWorldOrRegisterChestStraddlingBoundary() throws Exception {
        var left = container(Chest.class, Material.CHEST, 5, 64, 0, inventory((org.bukkit.inventory.ItemStack) null));
        var right = container(Chest.class, Material.CHEST, 6, 64, 0, inventory((org.bukkit.inventory.ItemStack) null));
        for (var chest : List.of(left, right)) {
            var data = mock(org.bukkit.block.data.type.Chest.class);
            when(data.getType()).thenReturn(chest == left ? org.bukkit.block.data.type.Chest.Type.LEFT : org.bukkit.block.data.type.Chest.Type.RIGHT);
            when(data.getFacing()).thenReturn(BlockFace.NORTH); when(chest.getBlockData()).thenReturn(data);
        }
        look(right); command("link", "Home");
        verify(player).sendMessage("投入口は倉庫の外に置いてください");
        look(barrel(10, 64, 0)); command("link", "Home");
        World other = mock(World.class); when(other.getUID()).thenReturn(UUID.randomUUID());
        assertThrows(IllegalArgumentException.class, () -> wh.resized(new Location(other, 0, 60, 0), new Location(other, 5, 70, 5)));
        assertEquals(1, savedLinks());
    }

    @Test
    void malformedOrDuplicateSavedLinksFailLoadingAndOldFilesWithoutLinksStillLoad() throws Exception {
        look(barrel(10, 64, 0)); command("link", "Home");
        var file = directory.resolve("warehouses.yml").toFile();
        var yaml = YamlConfiguration.loadConfiguration(file);
        String path = "warehouses." + wh.id() + ".links";
        Object valid = yaml.get(path);
        for (Object invalid : List.of("invalid", List.of(Map.of("type", "BARREL", "blocks", List.of(Map.of("x", "bad", "y", 64, "z", 0)))),
                List.of(Map.of("type", "STONE", "blocks", List.of())), List.of(((List<?>) valid).getFirst(), ((List<?>) valid).getFirst()))) {
            yaml.set(path, invalid); yaml.save(file);
            assertThrows(java.io.IOException.class, () -> new WarehouseManager(plugin).load());
        }
        yaml.set(path, null); yaml.save(file);
        var loaded = new WarehouseManager(plugin); loaded.load();
        assertTrue(loaded.warehouses.get(wh.id()).links().isEmpty());
    }

}
