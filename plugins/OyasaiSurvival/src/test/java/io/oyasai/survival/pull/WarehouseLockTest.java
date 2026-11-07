package io.oyasai.survival.pull;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import org.bukkit.Material;
import org.bukkit.block.Block;
import org.bukkit.block.BlockFace;
import org.bukkit.block.Chest;
import org.bukkit.block.BlockState;
import org.bukkit.entity.Player;
import org.bukkit.event.block.BlockBreakEvent;
import org.bukkit.event.block.BlockBurnEvent;
import org.bukkit.event.block.BlockExplodeEvent;
import org.bukkit.event.block.BlockPistonExtendEvent;
import org.bukkit.event.block.BlockPistonRetractEvent;
import org.bukkit.event.block.BlockPlaceEvent;
import org.bukkit.event.entity.EntityExplodeEvent;
import org.bukkit.event.inventory.InventoryCloseEvent;
import org.bukkit.event.inventory.InventoryMoveItemEvent;
import org.bukkit.event.inventory.InventoryOpenEvent;
import org.bukkit.event.inventory.InventoryPickupItemEvent;
import org.bukkit.inventory.Inventory;
import org.bukkit.inventory.ItemStack;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;
import static io.oyasai.survival.pull.InventoryTestSupport.*;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class WarehouseLockTest extends ItemStackTestSupport {
    IndexTestSupport f;
    WarehouseLock lock;
    Inventory inv;
    Block block;
    Player player;
    @BeforeEach
    void setup() {
        f=new IndexTestSupport();inv=inventory(item(Material.STONE,10,"plain"));var c=f.add(1,inv);f.load();
        block=f.world.getBlockAt(1,64,1);lock=new WarehouseLock(f.plugin,f.index);player=mock(Player.class);
        when(player.getUniqueId()).thenReturn(UUID.randomUUID());
    }
    @ParameterizedTest
    @CsvSource({"false,false,true","false,true,true","true,false,true","true,true,false"})
    void openingRequiresBothOpAndSneaking(boolean op,boolean sneak,boolean cancel) {
        when(player.isOp()).thenReturn(op);when(player.isSneaking()).thenReturn(sneak);
        var event=mock(InventoryOpenEvent.class);when(event.getPlayer()).thenReturn(player);when(event.getInventory()).thenReturn(inv);
        lock.onOpen(event);
        if(cancel){verify(event).setCancelled(true);verify(player).sendMessage("倉庫は /pull で使います");}
        else verify(event,never()).setCancelled(anyBoolean());
    }
    @Test
    void emergencyOpenSuspendsPluginTransfersAndCloseRereadsTheContainer() {
        when(player.isOp()).thenReturn(true);when(player.isSneaking()).thenReturn(true);
        var open=mock(InventoryOpenEvent.class);when(open.getPlayer()).thenReturn(player);when(open.getInventory()).thenReturn(inv);
        lock.onOpen(open);lock.opened(open);
        var carried=inventory((ItemStack)null);assertEquals(0,f.index.take(f.wh,carried,Material.STONE,"",10).amount());
        inv.setItem(0,item(Material.STONE,6,"plain"));
        var close=mock(InventoryCloseEvent.class);when(close.getPlayer()).thenReturn(player);lock.onClose(close);
        assertEquals(6,f.index.snapshot(f.wh).stock().getFirst().amount());
        assertEquals(6,f.index.take(f.wh,carried,Material.STONE,"",10).amount());
    }
    @Test
    void hopperDropperAndMinecartMovesInEitherDirectionAndPickupAreCancelled() {
        var external=inventory((ItemStack)null);
        for(var pair:List.of(List.of(inv,external),List.of(external,inv))) {
            var move=mock(InventoryMoveItemEvent.class);when(move.getSource()).thenReturn(pair.get(0));when(move.getDestination()).thenReturn(pair.get(1));
            lock.onMove(move);verify(move).setCancelled(true);
        }
        var pickup=mock(InventoryPickupItemEvent.class);when(pickup.getInventory()).thenReturn(inv);lock.onPickup(pickup);verify(pickup).setCancelled(true);
    }
    @ParameterizedTest
    @CsvSource({"false,false,true","false,true,false","true,false,false"})
    void breakingRequiresOwnerOrOpEvenForMember(boolean op,boolean owner,boolean cancel) {
        when(player.isOp()).thenReturn(op);if(owner)when(player.getUniqueId()).thenReturn(f.wh.owner());
        f.wh.members().add(player.getUniqueId());
        var event=mock(BlockBreakEvent.class);when(event.getBlock()).thenReturn(block);when(event.getPlayer()).thenReturn(player);
        lock.onBreak(event);if(cancel)verify(event).setCancelled(true);else verify(event,never()).setCancelled(anyBoolean());
    }
    @Test
    void allowedBreakRemovesIndexAndLeavesVanillaDropsUntouched() {
        when(player.getUniqueId()).thenReturn(f.wh.owner());
        var event=mock(BlockBreakEvent.class);when(event.getBlock()).thenReturn(block);when(event.getPlayer()).thenReturn(player);
        lock.onBreak(event);lock.broken(event);assertTrue(f.index.snapshot(f.wh).stock().isEmpty());
        verify(event,never()).setDropItems(anyBoolean());verify(inv,never()).clear();
        when(block.getState(false)).thenReturn(mock(BlockState.class));f.flush();assertEquals(0,f.index.snapshot(f.wh).capacity().slots());
    }
    @Test
    void bothExplosionEventsRemoveOnlyWarehouseContainersFromTheirBlockLists() {
        var outside=f.world.getBlockAt(60,64,1);
        var entity=mock(EntityExplodeEvent.class);var blocks=new ArrayList<>(List.of(block,outside));when(entity.blockList()).thenReturn(blocks);
        lock.onExplode(entity);assertEquals(List.of(outside),blocks);
        var explosion=mock(BlockExplodeEvent.class);var other=new ArrayList<>(List.of(block,outside));when(explosion.blockList()).thenReturn(other);
        lock.onExplode(explosion);assertEquals(List.of(outside),other);
    }
    @Test
    void pistonsAndBurnCannotMoveOrDestroyContainers() {
        var extend=mock(BlockPistonExtendEvent.class);when(extend.getBlocks()).thenReturn(List.of(block));lock.onExtend(extend);verify(extend).setCancelled(true);
        var retract=mock(BlockPistonRetractEvent.class);when(retract.getBlocks()).thenReturn(List.of(block));lock.onRetract(retract);verify(retract).setCancelled(true);
        var burn=mock(BlockBurnEvent.class);when(burn.getBlock()).thenReturn(block);lock.onBurn(burn);verify(burn).setCancelled(true);
    }
    @Test
    void placementAddsCapacityAndDoubleChestMergeAndSplitKeepOtherHalf() {
        var newInv=inventory(null,null);f.add(2,newInv);
        var event=mock(BlockPlaceEvent.class);when(event.getBlockPlaced()).thenAnswer(c->f.world.getBlockAt(2,64,1));
        lock.onPlace(event);f.flush();assertEquals(3,f.index.snapshot(f.wh).capacity().slots());assertEquals(2,f.index.snapshot(f.wh).capacity().free());
        var a=inventory(item(Material.DIRT,4,"plain"));var b=inventory(item(Material.DIRT,2,"plain"));
        var left=f.add(Chest.class,Material.CHEST,3,64,1,a);var right=f.add(Chest.class,Material.CHEST,4,64,1,b);
        WarehouseIndexTest.chestData(left,org.bukkit.block.data.type.Chest.Type.LEFT,BlockFace.NORTH);
        WarehouseIndexTest.chestData(right,org.bukkit.block.data.type.Chest.Type.RIGHT,BlockFace.NORTH);
        var placed=mock(BlockPlaceEvent.class);when(placed.getBlockPlaced()).thenAnswer(c->f.world.getBlockAt(4,64,1));lock.onPlace(placed);f.flush();
        assertEquals(3,f.index.snapshot(f.wh).capacity().containers());
        var broken=mock(BlockBreakEvent.class);when(broken.getBlock()).thenAnswer(c->f.world.getBlockAt(4,64,1));when(broken.getPlayer()).thenReturn(player);lock.broken(broken);
        var air=mock(BlockState.class);when(f.world.getBlockAt(4,64,1).getState(false)).thenReturn(air);
        WarehouseIndexTest.chestData(left,org.bukkit.block.data.type.Chest.Type.SINGLE,BlockFace.NORTH);f.flush();
        assertEquals(14,f.index.snapshot(f.wh).stock().stream().mapToLong(SurvivalPull.Stock::amount).sum());
        assertEquals(4,f.index.snapshot(f.wh).capacity().slots());
    }
    @Test
    void outsideHalfIsLockedBeforeInitialIndexBuildAndLinkedOutsideInputStaysOpen() {
        var left=f.add(Chest.class,Material.CHEST,31,64,2,inventory((ItemStack)null));
        var rightInv=inventory((ItemStack)null);var right=f.add(Chest.class,Material.CHEST,32,64,2,rightInv);
        WarehouseIndexTest.chestData(left,org.bukkit.block.data.type.Chest.Type.LEFT,BlockFace.NORTH);
        WarehouseIndexTest.chestData(right,org.bukkit.block.data.type.Chest.Type.RIGHT,BlockFace.NORTH);
        var open=mock(InventoryOpenEvent.class);when(open.getPlayer()).thenReturn(player);when(open.getInventory()).thenReturn(rightInv);
        lock.onOpen(open);verify(open).setCancelled(true);
        var input=inventory((ItemStack)null);f.add(40,input);f.wh.links().add(new Warehouse.Link(List.of(new SurvivalPull.Position(40,64,1)),Material.BARREL));
        var linked=mock(InventoryOpenEvent.class);when(linked.getInventory()).thenReturn(input);when(linked.getPlayer()).thenReturn(player);
        lock.onOpen(linked);verify(linked,never()).setCancelled(anyBoolean());
        var move=mock(InventoryMoveItemEvent.class);when(move.getSource()).thenReturn(input);var external=inventory((ItemStack)null);when(move.getDestination()).thenReturn(external);lock.onMove(move);
        verify(move,never()).setCancelled(anyBoolean());
    }
}
