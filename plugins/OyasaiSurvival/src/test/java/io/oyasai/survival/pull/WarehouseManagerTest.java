package io.oyasai.survival.pull;

import java.nio.file.Path;
import java.util.UUID;
import org.bukkit.Location;
import org.bukkit.Material;
import org.bukkit.World;
import org.bukkit.configuration.file.YamlConfiguration;
import org.bukkit.entity.Player;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.io.TempDir;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class WarehouseManagerTest {
    @TempDir Path directory;
    private final SurvivalPull plugin = mock(SurvivalPull.class);
    private final World world = mock(World.class);
    private final UUID owner = UUID.randomUUID();
    private WarehouseManager manager;

    @BeforeEach
    void setup() {
        when(world.getUID()).thenReturn(UUID.randomUUID());
        when(plugin.getDataFolder()).thenReturn(directory.toFile());
        when(plugin.getConfig()).thenReturn(new YamlConfiguration());
        manager = new WarehouseManager(plugin);
    }

    Warehouse warehouse(String name, int x) {
        return Warehouse.create(name, owner, new Location(world, x, 60, 0), new Location(world, x + 5, 70, 5));
    }

    @Test
    void rejectsOverlapsVolumeAndOwnerLimitBeforeRegistration() {
        Warehouse first = warehouse("a", 0);
        manager.validateNew(first);
        manager.warehouses.put(first.id(), first);
        assertThrows(IllegalArgumentException.class, () -> manager.validateNew(warehouse("b", 5)));
        assertThrows(IllegalArgumentException.class, () -> manager.validateNew(warehouse("A", 10)));
        plugin.getConfig().set("warehouse.max-volume", 5);
        assertThrows(IllegalArgumentException.class, () -> manager.validateNew(warehouse("b", 10)));
        plugin.getConfig().set("warehouse.max-volume", 131072);
        plugin.getConfig().set("warehouse.max-per-player", 1);
        assertThrows(IllegalArgumentException.class, () -> manager.validateNew(warehouse("b", 10)));
    }

    @Test
    void persistenceRoundTripsUuidsUnicodeNamesAndMembership() throws Exception {
        Warehouse wh = warehouse("日本語.倉庫", -12);
        wh.members().add(UUID.randomUUID());
        manager.warehouses.put(wh.id(), wh);
        manager.save();
        var loaded = new WarehouseManager(plugin);
        loaded.load();
        assertEquals(manager.warehouses, loaded.warehouses);
        manager.warehouses.clear(); manager.save();
        loaded = new WarehouseManager(plugin); loaded.load();
        assertTrue(loaded.warehouses.isEmpty());
    }

    @Test
    void scopeRequiresMembershipAndCurrentLocationEvenForOp() {
        Warehouse wh = warehouse("a", 0);
        manager.warehouses.put(wh.id(), wh);
        Player player = mock(Player.class);
        when(player.getUniqueId()).thenReturn(owner);
        when(player.getLocation()).thenReturn(new Location(world, 0, 60, 0));
        assertSame(wh, manager.scope(player));
        when(player.getLocation()).thenReturn(new Location(world, 6, 60, 0));
        assertNull(manager.scope(player));
        when(player.getLocation()).thenReturn(new Location(world, 0, 60, 0));
        when(player.getUniqueId()).thenReturn(UUID.randomUUID());
        when(player.isOp()).thenReturn(true);
        assertNull(manager.scope(player));
        wh.members().add(player.getUniqueId());
        assertSame(wh, manager.scope(player));
    }

    @Test
    void onlyOwnerOrOpCanDeleteOrChangeMembers() throws Exception {
        Warehouse wh = warehouse("a", 0);
        manager.warehouses.put(wh.id(), wh);
        Player stranger = mock(Player.class);
        when(stranger.getUniqueId()).thenReturn(UUID.randomUUID());
        manager.command(stranger, new String[] {"delete", "a"});
        assertTrue(manager.warehouses.containsKey(wh.id()));
        manager.command(stranger, new String[] {"member", "add", "a", "someone"});
        assertTrue(wh.members().isEmpty());
        verify(stranger, times(2)).sendMessage("持ち主または op だけが変更できます。");
        when(stranger.isOp()).thenReturn(true);
        manager.command(stranger, new String[] {"delete", "a"});
        assertTrue(manager.warehouses.isEmpty());
        var loaded = new WarehouseManager(plugin); loaded.load();
        assertTrue(loaded.warehouses.isEmpty());
    }

    Player player(UUID id) {
        Player player = mock(Player.class);
        when(player.getUniqueId()).thenReturn(id);
        when(player.getLocation()).thenReturn(new Location(world, 1, 64, 1));
        return player;
    }

    void select(Player player, int x1, int x2) {
        var block = mock(org.bukkit.block.Block.class);
        when(player.getTargetBlockExact(5)).thenReturn(block);
        when(block.getLocation()).thenReturn(new Location(world, x1, 60, 0));
        manager.command(player, new String[] {"pos1"});
        when(block.getLocation()).thenReturn(new Location(world, x2, 70, 5));
        manager.command(player, new String[] {"pos2"});
    }

    @Test
    void resizeAndRenamePreserveIdentityMembersExclusionsAndPersist() throws Exception {
        Warehouse old = warehouse("旧", 0);
        UUID member = UUID.randomUUID(); old.members().add(member); old.excluded().add(Material.DIRT);
        manager.warehouses.put(old.id(), old);
        plugin.getConfig().set("warehouse.max-per-player", 1);
        Player player = player(owner);
        select(player, 1, 4);
        manager.command(player, new String[] {"resize", "旧"});
        var resized = manager.warehouses.get(old.id());
        assertEquals(1, resized.minX()); assertEquals(4, resized.maxX());
        assertFalse(resized.contains(0, 64, 0)); assertEquals(old.owner(), resized.owner());
        manager.command(player, new String[] {"rename", "旧", "新"});
        var renamed = manager.warehouses.get(old.id());
        assertEquals("新", renamed.name()); assertTrue(renamed.isMember(member));
        assertEquals(old.excluded(), renamed.excluded()); assertEquals(1, manager.warehouses.size());
        Material dirt = spy(Material.DIRT); doReturn(true).when(dirt).isItem(); doReturn(false).when(dirt).isAir();
        try (var materials = mockStatic(Material.class, CALLS_REAL_METHODS)) {
            materials.when(() -> Material.getMaterial("DIRT")).thenReturn(dirt);
            var loaded = new WarehouseManager(plugin); loaded.load();
            assertEquals(manager.warehouses, loaded.warehouses);
        }
    }

    @Test
    void resizeAndRenameRejectPermissionsOverlapVolumeDuplicateAndMissingSelection() {
        Warehouse old = warehouse("a", 0), other = warehouse("b", 10);
        manager.warehouses.put(old.id(), old); manager.warehouses.put(other.id(), other);
        Player member = player(UUID.randomUUID()); old.members().add(member.getUniqueId());
        select(member, 1, 4);
        manager.command(member, new String[] {"resize", "a"});
        manager.command(member, new String[] {"rename", "a", "x"});
        assertSame(old, manager.warehouses.get(old.id()));
        verify(member, times(2)).sendMessage("持ち主または op だけが変更できます。");
        Player player = player(owner);
        manager.command(player, new String[] {"resize", "a"});
        verify(player).sendMessage("先に /wh pos1 と /wh pos2 を指定してください。");
        select(player, 1, 12);
        manager.command(player, new String[] {"resize", "a"});
        verify(player).sendMessage("既存の倉庫と範囲が重なっています。");
        select(player, 1, 4); plugin.getConfig().set("warehouse.max-volume", 1);
        manager.command(player, new String[] {"resize", "a"});
        verify(player).sendMessage("倉庫の体積が上限を超えています。");
        manager.command(player, new String[] {"rename", "a", "B"});
        manager.command(player, new String[] {"rename", "a", "x".repeat(33)});
        verify(player).sendMessage("その倉庫名は使用済みです。");
        assertSame(old, manager.warehouses.get(old.id()));
        when(member.isOp()).thenReturn(true);
        manager.command(member, new String[] {"rename", "a", "op"});
        assertEquals("op", manager.warehouses.get(old.id()).name());
    }

    @Test
    void membersCanExcludeByHandAndItemRemoveAndListWhileStrangersCannot() throws Exception {
        var wh = warehouse("a", 0); manager.warehouses.put(wh.id(), wh);
        var member = player(UUID.randomUUID()); wh.members().add(member.getUniqueId());
        var inventory = mock(org.bukkit.inventory.PlayerInventory.class); when(member.getInventory()).thenReturn(inventory);
        var stack = mock(org.bukkit.inventory.ItemStack.class); when(inventory.getItemInMainHand()).thenReturn(stack);
        Material dirt = spy(Material.DIRT); doReturn(true).when(dirt).isItem(); doReturn(false).when(dirt).isAir();
        when(stack.getType()).thenReturn(dirt);
        try (var materials = mockStatic(Material.class, CALLS_REAL_METHODS)) {
            materials.when(() -> Material.matchMaterial("minecraft:dirt")).thenReturn(dirt);
            materials.when(() -> Material.getMaterial("DIRT")).thenReturn(dirt);
            manager.command(member, new String[] {"exclude", "add", "hand"});
            assertTrue(wh.excluded().contains(Material.DIRT));
            var loaded = new WarehouseManager(plugin); loaded.load();
            assertEquals(wh.excluded(), loaded.warehouses.get(wh.id()).excluded());
            manager.command(member, new String[] {"exclude", "list"});
            verify(member, times(2)).sendMessage("除外の種類: DIRT");
            manager.command(player(UUID.randomUUID()), new String[] {"exclude", "remove", "minecraft:dirt"});
            assertTrue(wh.excluded().contains(Material.DIRT));
            manager.command(member, new String[] {"exclude", "remove", "minecraft:dirt"});
            assertTrue(wh.excluded().isEmpty());
            manager.command(member, new String[] {"exclude", "add", "invalid_item"});
            assertTrue(wh.excluded().isEmpty());
            Material air = spy(Material.AIR); doReturn(true).when(air).isAir();
            when(stack.getType()).thenReturn(air);
            manager.command(member, new String[] {"exclude", "add", "hand"});
            assertTrue(wh.excluded().isEmpty());
        }
    }

    @Test
    void completionsIncludeCommandsWarehouseNamesAndNamespacedItems() {
        var wh = warehouse("Home", 0); manager.warehouses.put(wh.id(), wh);
        assertTrue(manager.complete(new String[] {""}).containsAll(java.util.List.of("resize", "rename", "exclude")));
        assertEquals(java.util.List.of("Home"), manager.complete(new String[] {"resize", "ho"}));
        assertEquals(java.util.List.of("Home"), manager.complete(new String[] {"rename", ""}));
        assertEquals(java.util.List.of("add", "list", "remove"), manager.complete(new String[] {"exclude", ""}));
        Material dirt = spy(Material.DIRT); doReturn(true).when(dirt).isItem(); doReturn(false).when(dirt).isAir();
        try (var materials = mockStatic(Material.class, CALLS_REAL_METHODS)) {
            materials.when(Material::values).thenReturn(new Material[] {dirt});
            assertEquals(java.util.List.of("dirt"), manager.complete(new String[] {"exclude", "add", "di"}));
            assertEquals(java.util.List.of("minecraft:dirt"), manager.complete(new String[] {"exclude", "remove", "minecraft:d"}));
            assertEquals(java.util.List.of("hand"), manager.complete(new String[] {"exclude", "add", "ha"}));
        }
    }

    @Test
    void coordinateSelectionAcceptsAbsoluteAndRelativeBlockCoordinatesAndReportsSize() {
        Player player = player(owner);
        when(player.getLocation()).thenReturn(new Location(world, -1.2, 64.9, 2.8));
        manager.command(player, new String[] {"pos1", "-5", "60", "2"});
        manager.command(player, new String[] {"pos2", "~5", "~", "~-2"});
        manager.command(player, new String[] {"create", "地下"});
        var wh = manager.warehouses.values().iterator().next();
        assertEquals(-5, wh.minX()); assertEquals(3, wh.maxX());
        assertEquals(60, wh.minY()); assertEquals(64, wh.maxY());
        assertEquals(0, wh.minZ()); assertEquals(2, wh.maxZ());
        verify(player).sendMessage("pos1 を (-5, 60, 2) にしました");
        verify(player).sendMessage("pos2 を (3, 64, 0) にしました");
        verify(player).sendMessage("範囲の大きさ: 9×5×3 / 体積: 135ブロック");
    }

    @Test
    void invalidCoordinatesDoNotReplaceSelectionAndOmittedCoordinatesKeepTargetOrFeet() {
        Player player = player(owner);
        select(player, 0, 5);
        for (String value : java.util.List.of("1.5", "~x", "2147483648", "~2147483647"))
            manager.command(player, new String[] {"pos1", value, "64", "0"});
        manager.command(player, new String[] {"pos2", "1", "2"});
        manager.command(player, new String[] {"create", "unchanged"});
        assertEquals(0, manager.warehouses.values().iterator().next().minX());
        when(player.getTargetBlockExact(5)).thenReturn(null);
        manager.command(player, new String[] {"pos1"});
        verify(player).sendMessage("pos1 を (1, 64, 1) にしました");
    }
}
