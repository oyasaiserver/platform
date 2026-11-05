package io.oyasai.survival.pull;

import java.nio.file.Path;
import java.util.List;
import java.util.UUID;
import org.bukkit.Material;
import org.bukkit.block.Chest;
import org.bukkit.block.BlockFace;
import org.bukkit.entity.Player;
import org.bukkit.event.inventory.InventoryCloseEvent;
import org.bukkit.inventory.DoubleChestInventory;
import org.bukkit.inventory.ItemStack;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.io.TempDir;
import static io.oyasai.survival.pull.InventoryTestSupport.*;
import static io.oyasai.survival.pull.WarehouseIndexTest.*;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class WarehouseInputTest extends ItemStackTestSupport {
    @TempDir Path directory;
    IndexTestSupport f;
    Player player;
    @BeforeEach void setup() {
        f=new IndexTestSupport();when(f.plugin.getDataFolder()).thenReturn(directory.toFile());
        player=mock(Player.class);when(player.isOnline()).thenReturn(true);when(player.getUniqueId()).thenReturn(f.wh.owner());when(player.getWorld()).thenReturn(f.world);
        f.plugin.getConfig().set("warehouse.stacks-per-tick",1);
    }
    @Test void linkedCloseUsesBoundedDepositsAndLeavesExclusionsNamedAndOverflowWithExactTotal() {
        var storage=inventory(null,null);f.add(1,storage);f.load();
        var named=item(Material.GOLD_INGOT,3,"named");var meta=mock(org.bukkit.inventory.meta.ItemMeta.class);when(meta.hasCustomName()).thenReturn(true);when(named.getItemMeta()).thenReturn(meta);
        var input=inventory(item(Material.STONE,10,"plain"),named,item(Material.DIRT,6,"plain"),item(Material.DIAMOND,100,"plain"));f.add(40,input);
        var link=new Warehouse.Link(List.of(new SurvivalPull.Position(40,64,1)),Material.BARREL);f.wh.links().add(link);f.wh.excluded().add(Material.DIRT);
        var close=mock(InventoryCloseEvent.class);when(close.getPlayer()).thenReturn(player);when(close.getInventory()).thenReturn(input);
        f.manager.input().onClose(close);f.manager.input().onClose(close);assertTrue(f.manager.input().busy(f.wh));
        f.step();assertNull(input.getItem(0));assertEquals(10,sum(storage));assertTrue(f.manager.input().busy(f.wh));
        for(int i=0;i<5;i++)f.step();assertFalse(f.manager.input().busy(f.wh));
        assertEquals(119,sum(storage,input));assertEquals(36,input.getItem(3).getAmount());assertEquals(6,input.getItem(2).getAmount());assertSame(named,input.getItem(1));
        assertIndex(f,storage);verify(player).sendMessage(contains("74個を格納"));
    }
    @Test void linkedDoubleChestCloseDepositsBothHalvesExactlyOnce() {
        var storage=inventory(null,null);f.add(1,storage);f.load();
        var a=inventory(item(Material.STONE,10,"plain"));var b=inventory(item(Material.STONE,20,"plain"));
        var left=f.add(Chest.class,Material.CHEST,40,64,1,a);var right=f.add(Chest.class,Material.CHEST,41,64,1,b);
        chestData(left,org.bukkit.block.data.type.Chest.Type.LEFT,BlockFace.NORTH);chestData(right,org.bukkit.block.data.type.Chest.Type.RIGHT,BlockFace.NORTH);
        f.wh.links().add(new Warehouse.Link(List.of(new SurvivalPull.Position(40,64,1),new SurvivalPull.Position(41,64,1)),Material.CHEST));
        var combined=mock(DoubleChestInventory.class);when(combined.getLeftSide()).thenReturn(a);when(combined.getRightSide()).thenReturn(b);
        var close=mock(InventoryCloseEvent.class);when(close.getPlayer()).thenReturn(player);when(close.getInventory()).thenReturn(combined);
        f.manager.input().onClose(close);for(int i=0;i<4;i++)f.step();
        assertEquals(30,sum(storage,a,b));assertNull(a.getItem(0));assertNull(b.getItem(0));assertEquals(30,sum(storage));assertIndex(f,storage);
    }
    @Test void strangerCannotStartAndCancelledJobKeepsUnmovedItemsAndUnloadDoesNotLoadInputChunk() {
        var storage=inventory(null,null);f.add(1,storage);f.load();var input=inventory(item(Material.STONE,10,"plain"),item(Material.DIRT,20,"plain"));f.add(40,input);
        var link=new Warehouse.Link(List.of(new SurvivalPull.Position(40,64,1)),Material.BARREL);f.wh.links().add(link);
        var close=mock(InventoryCloseEvent.class);when(close.getPlayer()).thenReturn(player);when(close.getInventory()).thenReturn(input);
        when(player.getUniqueId()).thenReturn(UUID.randomUUID());f.manager.input().onClose(close);assertFalse(f.manager.input().busy(f.wh));
        when(player.getUniqueId()).thenReturn(f.wh.owner());f.manager.input().onClose(close);f.step();f.manager.input().stop();f.step();
        assertEquals(10,sum(storage));assertEquals(20,input.getItem(1).getAmount());assertEquals(30,sum(input,storage));
        when(f.world.isChunkLoaded(2,0)).thenReturn(false);clearInvocations(f.world);f.manager.input().start(player,f.wh,link);f.step();
        verify(f.world,never()).getChunkAt(2,0);assertEquals(20,input.getItem(1).getAmount());assertFalse(f.manager.input().busy(f.wh));
    }
    @Test void jobContinuesUsingWarehouseWorldAfterPlayerTeleports() {
        var storage=inventory((ItemStack)null);f.add(1,storage);f.load();var input=inventory(item(Material.STONE,10,"plain"));f.add(40,input);
        var link=new Warehouse.Link(List.of(new SurvivalPull.Position(40,64,1)),Material.BARREL);f.wh.links().add(link);
        f.manager.input().start(player,f.wh,link);var elsewhere=mock(org.bukkit.World.class);when(player.getWorld()).thenReturn(elsewhere);f.step();
        assertEquals(10,sum(storage));verifyNoInteractions(elsewhere);
    }
}
