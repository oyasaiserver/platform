package io.oyasai.survival.harvest;

import java.util.List;
import java.util.HashMap;
import org.bukkit.block.BlockFace;
import org.bukkit.Location;
import org.bukkit.Material;
import org.bukkit.Server;
import org.bukkit.World;
import org.bukkit.block.Block;
import org.bukkit.block.data.Ageable;
import org.bukkit.entity.Player;
import org.bukkit.event.Event;
import org.bukkit.event.block.Action;
import org.bukkit.event.block.BlockBreakEvent;
import org.bukkit.event.player.PlayerInteractEvent;
import org.bukkit.inventory.EquipmentSlot;
import org.bukkit.inventory.ItemStack;
import org.bukkit.inventory.PlayerInventory;
import org.bukkit.plugin.PluginManager;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.EnumSource;

import org.mockito.ArgumentCaptor;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

class SurvivalHarvestTest {
    private final SurvivalHarvest plugin = mock(SurvivalHarvest.class);
    private final PlayerInteractEvent event = mock(PlayerInteractEvent.class);
    private final Player player = mock(Player.class);
    private final Block block = mock(Block.class);
    private final Ageable crop = mock(Ageable.class);
    private final PluginManager manager = mock(PluginManager.class);
    private final World world = mock(World.class);
    private final ItemStack tool = mock(ItemStack.class);
    private final ItemStack drop = mock(ItemStack.class);
    private final Location location = new Location(world, 0, 64, 0);

    @BeforeEach
    void setUp() {
        Server server = mock(Server.class);
        PlayerInventory inventory = mock(PlayerInventory.class);
        when(plugin.getServer()).thenReturn(server);
        when(server.getPluginManager()).thenReturn(manager);
        when(event.getPlayer()).thenReturn(player);
        when(event.getAction()).thenReturn(Action.RIGHT_CLICK_BLOCK);
        when(event.getHand()).thenReturn(EquipmentSlot.HAND);
        when(event.useItemInHand()).thenReturn(Event.Result.DEFAULT);
        when(event.getClickedBlock()).thenReturn(block);
        when(block.getType()).thenReturn(Material.WHEAT);
        when(block.getBlockData()).thenReturn(crop);
        when(crop.getAge()).thenReturn(7);
        when(crop.getMaximumAge()).thenReturn(7);
        when(player.getInventory()).thenReturn(inventory);
        when(inventory.getItemInMainHand()).thenReturn(tool);
        when(block.getDrops(tool, player)).thenReturn(List.of(drop));
        when(block.getWorld()).thenReturn(world);
        when(block.getLocation()).thenReturn(location);
        doCallRealMethod().when(plugin).onInteract(event);
    }

    @ParameterizedTest
    @EnumSource(value = Material.class, names = {
            "WHEAT", "CARROTS", "POTATOES", "BEETROOTS", "NETHER_WART"})
    void harvestsEverySupportedCrop(Material type) {
        when(block.getType()).thenReturn(type);
        // A vanilla no-op block interaction must still allow harvesting.
        when(event.useInteractedBlock()).thenReturn(Event.Result.DENY);
        plugin.onInteract(event);
        var order = inOrder(manager, block, event, crop, world);
        order.verify(manager).callEvent(any(BlockBreakEvent.class));
        order.verify(block).getDrops(tool, player);
        order.verify(event).setCancelled(true);
        order.verify(crop).setAge(0);
        order.verify(block).setBlockData(crop);
        order.verify(world).dropItemNaturally(location, drop);
        verify(player.getInventory(), never()).setItemInMainHand(any());
        verify(block, never()).getRelative(any(BlockFace.class));
    }

    @Test
    void cancelledBreakDoesNothing() {
        doAnswer(invocation -> {
            ((BlockBreakEvent) invocation.getArgument(0)).setCancelled(true);
            return null;
        }).when(manager).callEvent(any(BlockBreakEvent.class));
        plugin.onInteract(event);
        verify(block, never()).getDrops(any(), any());
        verify(block, never()).setBlockData(any());
        verify(event, never()).setCancelled(anyBoolean());
        verifyNoInteractions(world);
    }

    @Test
    void ignoresOtherInteractionsAndImmatureOrUnsupportedBlocks() {
        when(event.getHand()).thenReturn(EquipmentSlot.OFF_HAND);
        plugin.onInteract(event);
        when(event.getHand()).thenReturn(EquipmentSlot.HAND);
        when(event.getAction()).thenReturn(Action.LEFT_CLICK_BLOCK);
        plugin.onInteract(event);
        when(event.getAction()).thenReturn(Action.RIGHT_CLICK_BLOCK);
        when(event.useItemInHand()).thenReturn(Event.Result.DENY);
        plugin.onInteract(event);
        when(event.useItemInHand()).thenReturn(Event.Result.DEFAULT);
        when(crop.getAge()).thenReturn(6);
        plugin.onInteract(event);
        when(crop.getAge()).thenReturn(7);
        when(block.getType()).thenReturn(Material.COCOA);
        plugin.onInteract(event);
        verifyNoInteractions(manager, world);
        verify(block, never()).setBlockData(any());
        verify(event, never()).setCancelled(anyBoolean());
    }

    private Block cropAt(java.util.Map<String, Block> field, int x, int z, int age) {
        Block cell = mock(Block.class);
        Ageable data = mock(Ageable.class);
        when(cell.getType()).thenReturn(Material.WHEAT);
        when(cell.getBlockData()).thenReturn(data);
        when(data.getAge()).thenReturn(age);
        when(data.getMaximumAge()).thenReturn(7);
        when(cell.getDrops(tool, player)).thenReturn(List.of(drop));
        when(cell.getWorld()).thenReturn(world);
        when(cell.getLocation()).thenReturn(new Location(world, x, 64, z));
        Block air = mock(Block.class);
        when(air.getType()).thenReturn(Material.AIR);
        when(cell.getRelative(any(BlockFace.class))).thenAnswer(invocation -> {
            BlockFace face = invocation.getArgument(0);
            return field.getOrDefault((x + face.getModX()) + "," + (z + face.getModZ()), air);
        });
        field.put(x + "," + z, cell);
        return cell;
    }

    @Test
    void bulkTraversesImmatureAndCancelledCellsAndCycles() {
        var field = new HashMap<String, Block>();
        Block start = cropAt(field, 0, 0, 7);
        Block immature = cropAt(field, 1, 0, 2);
        Block cancelled = cropAt(field, 2, 0, 7);
        Block beyond = cropAt(field, 3, 0, 7);
        Block north = cropAt(field, 0, -1, 7);
        Block cycle = cropAt(field, 1, -1, 7);
        Block different = cropAt(field, 0, 1, 7);
        when(different.getType()).thenReturn(Material.CARROTS);
        when(event.getClickedBlock()).thenReturn(start);
        when(player.isSneaking()).thenReturn(true);
        doAnswer(invocation -> {
            BlockBreakEvent harvest = invocation.getArgument(0);
            if (harvest.getBlock() == cancelled) harvest.setCancelled(true);
            return null;
        }).when(manager).callEvent(any(BlockBreakEvent.class));

        plugin.onInteract(event);

        for (Block cell : List.of(start, beyond, north, cycle)) {
            verify(cell).setBlockData(any());
        }
        for (Block cell : List.of(immature, cancelled, different)) {
            verify(cell, never()).setBlockData(any());
        }
        var breaks = ArgumentCaptor.forClass(BlockBreakEvent.class);
        verify(manager, times(5)).callEvent(breaks.capture());
        assertEquals(List.of(start, north, cycle, cancelled, beyond),
                breaks.getAllValues().stream().map(BlockBreakEvent::getBlock).toList());
        for (Block cell : field.values()) {
            verify(cell, never()).getRelative(BlockFace.UP);
            verify(cell, never()).getRelative(BlockFace.DOWN);
        }
        verify(world, times(4)).dropItemNaturally(any(), eq(drop));
    }

    @Test
    void bulkVisitsAtMost128IncludingImmatureCells() {
        var field = new HashMap<String, Block>();
        for (int x = 0; x < 130; x++) cropAt(field, x, 0, x == 1 ? 1 : 7);
        when(event.getClickedBlock()).thenReturn(field.get("0,0"));
        when(player.isSneaking()).thenReturn(true);

        plugin.onInteract(event);

        verify(manager, times(127)).callEvent(any(BlockBreakEvent.class));
        verify(field.get("127,0")).setBlockData(any());
        verify(field.get("128,0"), never()).getBlockData();
        verify(field.get("129,0"), never()).getBlockData();
    }

    @Test
    void sneakingOnImmatureCropDoesNotStartBulkHarvest() {
        when(player.isSneaking()).thenReturn(true);
        when(crop.getAge()).thenReturn(1);
        plugin.onInteract(event);
        verifyNoInteractions(manager, world);
        verify(block, never()).getRelative(any(BlockFace.class));
    }

    // Column at (x, z): ground, then `height` sugar cane, then air. Index 0 is the bottom cane.
    private List<Block> caneAt(java.util.Map<String, Block> field, int x, int z, int height) {
        var column = new java.util.ArrayList<Block>();
        Block ground = mock(Block.class);
        when(ground.getType()).thenReturn(Material.GRASS_BLOCK);
        Block air = mock(Block.class);
        when(air.getType()).thenReturn(Material.AIR);
        for (int y = 0; y < height; y++) {
            Block cane = mock(Block.class);
            when(cane.getType()).thenReturn(Material.SUGAR_CANE);
            when(cane.getDrops(tool, player)).thenReturn(List.of(drop));
            when(cane.getWorld()).thenReturn(world);
            when(cane.getLocation()).thenReturn(new Location(world, x, 64 + y, z));
            column.add(cane);
        }
        for (int y = 0; y < height; y++) {
            Block below = y == 0 ? ground : column.get(y - 1);
            Block above = y == height - 1 ? air : column.get(y + 1);
            Block cane = column.get(y);
            int level = y;
            when(cane.getRelative(any(BlockFace.class))).thenAnswer(invocation -> {
                BlockFace face = invocation.getArgument(0);
                if (face == BlockFace.UP) return above;
                if (face == BlockFace.DOWN) return below;
                Block side = field.get((x + face.getModX()) + "," + level + "," + (z + face.getModZ()));
                return side == null ? air : side;
            });
            field.put(x + "," + y + "," + z, cane);
        }
        return column;
    }

    @Test
    void sugarCaneKeepsBottomAndCutsTopFirst() {
        var column = caneAt(new HashMap<>(), 0, 0, 3);
        when(event.getClickedBlock()).thenReturn(column.get(1));

        plugin.onInteract(event);

        var order = inOrder(column.get(2), column.get(1));
        order.verify(column.get(2)).setType(Material.AIR, false);
        order.verify(column.get(1)).setType(Material.AIR, false);
        verify(column.get(0), never()).setType(any(), anyBoolean());
        verify(world, times(2)).dropItemNaturally(any(), eq(drop));
        verify(event, atLeastOnce()).setCancelled(true);
    }

    @Test
    void sugarCaneStopsAtProtectedBlockAndIgnoresSingleBlock() {
        var column = caneAt(new HashMap<>(), 0, 0, 3);
        when(event.getClickedBlock()).thenReturn(column.get(2));
        doAnswer(invocation -> {
            BlockBreakEvent harvest = invocation.getArgument(0);
            if (harvest.getBlock() == column.get(2)) harvest.setCancelled(true);
            return null;
        }).when(manager).callEvent(any(BlockBreakEvent.class));
        plugin.onInteract(event);
        verify(column.get(1), never()).setType(any(), anyBoolean());

        var single = caneAt(new HashMap<>(), 5, 5, 1);
        when(event.getClickedBlock()).thenReturn(single.get(0));
        plugin.onInteract(event);
        verify(single.get(0), never()).setType(any(), anyBoolean());
        verify(event, never()).setCancelled(anyBoolean());
        verifyNoInteractions(world);
    }

    @Test
    void sneakingCutsNeighbouringSugarCane() {
        var field = new HashMap<String, Block>();
        var left = caneAt(field, 0, 0, 3);
        var right = caneAt(field, 1, 0, 2);
        when(event.getClickedBlock()).thenReturn(left.get(2));
        when(player.isSneaking()).thenReturn(true);

        plugin.onInteract(event);

        verify(left.get(1)).setType(Material.AIR, false);
        verify(left.get(2)).setType(Material.AIR, false);
        verify(right.get(1)).setType(Material.AIR, false);
        verify(left.get(0), never()).setType(any(), anyBoolean());
        verify(right.get(0), never()).setType(any(), anyBoolean());
    }

    @Test
    void cancelsFarmlandTrampleOnly() {
        doCallRealMethod().when(plugin).onTrample(event);
        when(event.getAction()).thenReturn(Action.PHYSICAL);
        when(block.getType()).thenReturn(Material.STONE_PRESSURE_PLATE);
        plugin.onTrample(event);
        verify(event, never()).setCancelled(true);
        when(block.getType()).thenReturn(Material.FARMLAND);
        plugin.onTrample(event);
        verify(event).setCancelled(true);

        var mob = mock(org.bukkit.event.entity.EntityInteractEvent.class);
        doCallRealMethod().when(plugin).onTrample(mob);
        when(mob.getBlock()).thenReturn(block);
        plugin.onTrample(mob);
        verify(mob).setCancelled(true);
    }
}
