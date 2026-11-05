package io.oyasai.survival.harvest;

import org.bukkit.Bukkit;
import org.bukkit.GameMode;
import org.bukkit.Material;
import org.bukkit.NamespacedKey;
import org.bukkit.Server;
import org.bukkit.Tag;
import org.bukkit.block.Block;
import org.bukkit.block.BlockFace;
import org.bukkit.block.BlockState;
import org.bukkit.entity.Player;
import org.bukkit.event.EventHandler;
import org.bukkit.event.EventPriority;
import org.bukkit.event.block.BlockBreakEvent;
import org.bukkit.event.block.BlockPlaceEvent;
import org.bukkit.inventory.ItemStack;
import org.bukkit.inventory.PlayerInventory;
import org.bukkit.plugin.PluginManager;
import org.bukkit.scheduler.BukkitScheduler;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;
import org.mockito.ArgumentCaptor;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class ReplantTest {
    private final SurvivalHarvest plugin = mock(SurvivalHarvest.class);
    private final Server server = mock(Server.class);
    private final PluginManager manager = mock(PluginManager.class);
    private final BukkitScheduler scheduler = mock(BukkitScheduler.class);
    private final Block block = mock(Block.class);
    private final Block soil = mock(Block.class);
    private final BlockState replaced = mock(BlockState.class);
    private final Player player = mock(Player.class);
    private final PlayerInventory inventory = mock(PlayerInventory.class);
    private final ItemStack item = mock(ItemStack.class);

    @BeforeAll
    static void initializeTagsWithoutServer() {
        try (var bukkit = mockStatic(Bukkit.class)) {
            bukkit.when(() -> Bukkit.getTag(anyString(), any(NamespacedKey.class), eq(Material.class)))
                    .thenAnswer(invocation -> {
                        NamespacedKey key = invocation.getArgument(1);
                        @SuppressWarnings("unchecked")
                        Tag<Material> tag = mock(Tag.class);
                        when(tag.isTagged(any(Material.class))).thenAnswer(call -> {
                            Material material = call.getArgument(0);
                            return key.getKey().equals("dirt") && material == Material.DIRT
                                    || key.getKey().equals("nylium")
                                    && (material == Material.CRIMSON_NYLIUM || material == Material.WARPED_NYLIUM);
                        });
                        return tag;
                    });
            assertTrue(Tag.DIRT.isTagged(Material.DIRT));
        }
    }

    @BeforeEach
    void setUp() {
        when(plugin.getServer()).thenReturn(server);
        when(server.getPluginManager()).thenReturn(manager);
        when(server.getScheduler()).thenReturn(scheduler);
        when(block.getType()).thenReturn(Material.OAK_LOG);
        when(block.getRelative(BlockFace.DOWN)).thenReturn(soil);
        when(soil.getType()).thenReturn(Material.DIRT);
        when(block.getState()).thenReturn(replaced);
        when(player.isOnline()).thenReturn(true);
        when(player.getGameMode()).thenReturn(GameMode.SURVIVAL);
        when(player.getInventory()).thenReturn(inventory);
        when(inventory.getContents()).thenReturn(new ItemStack[] {item});
        when(item.getType()).thenReturn(Material.OAK_SAPLING);
        when(item.getAmount()).thenReturn(2);
        when(item.clone()).thenReturn(item);
        doCallRealMethod().when(plugin).onBreak(any());
    }

    private void breakLog() {
        plugin.onBreak(new BlockBreakEvent(block, player));
    }

    private void nextTick() {
        var task = ArgumentCaptor.forClass(Runnable.class);
        verify(scheduler).runTaskLater(eq(plugin.owner()), task.capture(), eq(1L));
        when(block.getType()).thenReturn(Material.AIR);
        task.getValue().run();
    }

    @ParameterizedTest
    @CsvSource({"OAK_LOG,OAK_SAPLING", "BIRCH_LOG,BIRCH_SAPLING", "SPRUCE_LOG,SPRUCE_SAPLING",
            "JUNGLE_LOG,JUNGLE_SAPLING", "ACACIA_LOG,ACACIA_SAPLING", "DARK_OAK_LOG,DARK_OAK_SAPLING",
            "MANGROVE_LOG,MANGROVE_PROPAGULE", "CHERRY_LOG,CHERRY_SAPLING", "PALE_OAK_LOG,PALE_OAK_SAPLING",
            "CRIMSON_STEM,CRIMSON_FUNGUS", "WARPED_STEM,WARPED_FUNGUS"})
    void plantsMatchingSaplingAndConsumesOne(Material log, Material sapling) {
        when(block.getType()).thenReturn(log);
        when(item.getType()).thenReturn(sapling);
        if (log == Material.CRIMSON_STEM || log == Material.WARPED_STEM) {
            when(soil.getType()).thenReturn(Material.CRIMSON_NYLIUM);
        }
        breakLog();
        verify(block, never()).setType(any(), anyBoolean());
        nextTick();
        var order = inOrder(block, manager, item, inventory);
        order.verify(block).setType(sapling, false);
        order.verify(manager).callEvent(any(BlockPlaceEvent.class));
        order.verify(item).setAmount(1);
        order.verify(inventory).setItem(0, item);
        verify(replaced, never()).update(anyBoolean(), anyBoolean());
    }

    @Test
    void removesLastItemFromSlot() {
        when(item.getAmount()).thenReturn(1, 1, 0);
        breakLog();
        nextTick();
        verify(item).setAmount(0);
        verify(inventory).setItem(0, null);
    }

    @Test
    void creativeRequiresItemButDoesNotConsumeIt() {
        when(player.getGameMode()).thenReturn(GameMode.CREATIVE);
        breakLog();
        nextTick();
        verify(block).setType(Material.OAK_SAPLING, false);
        verify(item, never()).setAmount(anyInt());
        verify(inventory, never()).setItem(anyInt(), any());
    }

    @Test
    void doesNotPlantWithoutMatchingItem() {
        when(inventory.getContents()).thenReturn(new ItemStack[] {null, item});
        when(item.getType()).thenReturn(Material.BIRCH_SAPLING);
        breakLog();
        nextTick();
        verify(block, never()).setType(any(), anyBoolean());
        verifyNoInteractions(manager);
    }

    @Test
    void doesNotPlantOnStoneOrFungusOnDirtOrStrippedLog() {
        when(soil.getType()).thenReturn(Material.STONE);
        breakLog();
        when(soil.getType()).thenReturn(Material.DIRT);
        when(block.getType()).thenReturn(Material.CRIMSON_STEM);
        breakLog();
        when(block.getType()).thenReturn(Material.STRIPPED_OAK_LOG);
        breakLog();
        verifyNoInteractions(scheduler, manager);
    }

    @Test
    void rechecksSoilAfterDelay() {
        breakLog();
        when(soil.getType()).thenReturn(Material.STONE);
        nextTick();
        verify(block, never()).setType(any(), anyBoolean());
        verifyNoInteractions(manager);
    }

    @Test
    void doesNotOverwriteOccupiedBlock() {
        breakLog();
        var task = ArgumentCaptor.forClass(Runnable.class);
        verify(scheduler).runTaskLater(eq(plugin.owner()), task.capture(), eq(1L));
        when(block.getType()).thenReturn(Material.STONE);
        task.getValue().run();
        verify(block, never()).setType(any(), anyBoolean());
        verifyNoInteractions(manager);
    }

    @ParameterizedTest
    @CsvSource({"true", "false"})
    void deniedPlacementRestoresAirAndDoesNotConsume(boolean cancel) {
        doAnswer(invocation -> {
            BlockPlaceEvent place = invocation.getArgument(0);
            assertSame(replaced, place.getBlockReplacedState());
            assertSame(soil, place.getBlockAgainst());
            if (cancel) place.setCancelled(true);
            else place.setBuild(false);
            return null;
        }).when(manager).callEvent(any(BlockPlaceEvent.class));
        breakLog();
        nextTick();
        verify(replaced).update(true, false);
        verify(item, never()).setAmount(anyInt());
        verify(inventory, never()).setItem(anyInt(), any());
    }

    @Test
    void listensOnlyToUncancelledBreaksAtMonitor() throws Exception {
        EventHandler handler = SurvivalHarvest.class.getMethod("onBreak", BlockBreakEvent.class)
                .getAnnotation(EventHandler.class);
        assertEquals(EventPriority.MONITOR, handler.priority());
        assertTrue(handler.ignoreCancelled());
    }
}
