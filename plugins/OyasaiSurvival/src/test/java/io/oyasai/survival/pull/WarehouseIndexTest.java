package io.oyasai.survival.pull;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Random;
import java.util.concurrent.CompletableFuture;
import org.bukkit.Location;
import org.bukkit.Material;
import org.bukkit.block.Chest;
import org.bukkit.block.ShulkerBox;
import org.bukkit.block.data.type.Chest.Type;
import org.bukkit.block.BlockFace;
import org.bukkit.entity.Player;
import org.bukkit.inventory.Inventory;
import org.bukkit.inventory.ItemStack;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.EnumSource;
import static io.oyasai.survival.pull.InventoryTestSupport.*;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class WarehouseIndexTest extends ItemStackTestSupport {
    @Test
    void fillsPartialStacksBeforeAnyEmptySlotAndTakesSmallestStackFirst() {
        var f = new IndexTestSupport();
        var a = inventory(null, item(Material.STONE, 60, "plain"), item(Material.STONE, 7, "plain"));
        var b = inventory(item(Material.STONE, 30, "plain"), null);
        f.add(1, a); f.add(2, b); f.load();
        var input = inventory(item(Material.STONE, 10, "plain"));
        assertEquals(10, f.index.store(f.wh, input, 0));
        assertNull(a.getItem(0)); assertEquals(64, a.getItem(1).getAmount()); assertEquals(13, a.getItem(2).getAmount());
        var carried = inventory((ItemStack) null);
        assertEquals(15, f.index.take(f.wh, carried, Material.STONE, "", 15).amount());
        assertNull(a.getItem(2)); assertEquals(28, b.getItem(0).getAmount()); assertEquals(64, a.getItem(1).getAmount());
        assertEquals(107, sum(a, b, input, carried));
        assertIndex(f, a, b);
    }
    @Test
    void randomizedDepositsAndWithdrawalsKeepEveryVariantAndTotalAndMatchFreshRead() {
        var f = new IndexTestSupport();
        var a = inventory(new ItemStack[18]); var b = inventory(new ItemStack[18]);
        f.add(1, a); f.add(2, b); f.load();
        var pocket = inventory(new ItemStack[12]); var random = new Random(3000);
        long created = 0;
        for (int n = 0; n < 2000; n++) {
            int slot = random.nextInt(12);
            if (random.nextBoolean()) {
                if (pocket.getItem(slot) == null) {
                    int amount = 1 + random.nextInt(64); created += amount;
                    pocket.setItem(slot, item(random.nextBoolean() ? Material.STONE : Material.DIRT, amount, random.nextBoolean() ? "plain" : "enchanted"));
                }
                f.index.store(f.wh, pocket, slot);
            } else {
                Material material = random.nextBoolean() ? Material.STONE : Material.DIRT;
                String key = random.nextBoolean() ? "" : ItemVariant.key(item(material, 1, "enchanted"));
                f.index.take(f.wh, pocket, material, key, 1 + random.nextInt(100));
            }
            assertEquals(created, sum(a, b, pocket), "operation " + n);
            if (n % 50 == 0) assertIndex(f, a, b);
        }
        verify(f.plugin.getLogger(),never()).warning(anyString());
        var before = sourceCounts(f.index.snapshot(f.wh));
        f.index.rebuild(f.wh.id()); while (!f.index.ready(f.wh)) f.index.tick();
        assertEquals(before, sourceCounts(f.index.snapshot(f.wh)));
        assertIndex(f, a, b);
    }
    @Test
    void mismatchRepairsOnlyAffectedContainerAndWarnsOnceWithoutLosingOrInventingItems() {
        var f = new IndexTestSupport(); var a = inventory(item(Material.STONE, 20, "plain"), null);
        var b = inventory(item(Material.DIRT, 9, "plain")); f.add(1, a); f.add(2, b); f.load();
        a.setItem(0, item(Material.STONE, 3, "plain"));
        var carried = inventory((ItemStack) null); clearInvocations(a, b);
        assertEquals(0, f.index.take(f.wh, carried, Material.STONE, "", 20).amount());
        verifyNoInteractions(b); verify(f.plugin.getLogger()).warning(contains("不一致を修復"));
        assertEquals(3, counts(f.index.snapshot(f.wh)).get(new ItemVariant.Id(Material.STONE, "")));
        assertEquals(3, f.index.take(f.wh, carried, Material.STONE, "", 20).amount());
        assertEquals(12, sum(a, b, carried)); assertIndex(f, a, b);
    }
    @Test
    void staleEmptySlotIsRepairedAndNeverOverwritten() {
        var f = new IndexTestSupport(); var a = inventory((ItemStack) null); f.add(1, a); f.load();
        a.setItem(0, item(Material.DIAMOND, 7, "enchanted"));
        var input = inventory(item(Material.STONE, 10, "plain"));
        assertEquals(0, f.index.store(f.wh, input, 0));
        assertEquals(7, a.getItem(0).getAmount()); assertEquals(10, input.getItem(0).getAmount());
        assertIndex(f, a); verify(f.plugin.getLogger()).warning(contains("不一致を修復"));
    }
    @Test
    void addItemRemainderAndMutableArgumentReturnToOriginalSlotWithMetadata() {
        var f = new IndexTestSupport(); var a = inventory(item(Material.STONE, 20, "enchanted")); f.add(1, a); f.load();
        var target = inventory(item(Material.STONE, 60, "enchanted"));
        String key = ItemVariant.key(a.getItem(0));
        assertEquals(4, f.index.take(f.wh, target, Material.STONE, key, 12).amount());
        assertEquals(16, a.getItem(0).getAmount()); assertEquals("enchanted", a.getItem(0).toString());
        assertEquals(80, sum(a, target)); assertIndex(f, a);
        assertEquals(0, f.index.take(f.wh, target, Material.STONE, key, Integer.MAX_VALUE).amount());
        assertEquals(80, sum(a, target));
    }
    @Test
    void failedDestinationRestoresSourceBeforePropagatingError() {
        var f = new IndexTestSupport(); var a = inventory(item(Material.STONE, 20, "plain")); f.add(1, a); f.load();
        var target = mock(Inventory.class); when(target.addItem(any(ItemStack.class))).thenThrow(new IllegalStateException("rejected"));
        assertThrows(IllegalStateException.class, () -> f.index.take(f.wh, target, Material.STONE, "", 12));
        assertEquals(20, sum(a)); assertIndex(f, a);
    }
    @Test
    void shulkerItemsCannotEnterShulkerAndNamedAndExcludedItemsStayInInput() {
        var f = new IndexTestSupport(); var box = inventory((ItemStack) null); var barrel = inventory((ItemStack) null);
        f.add(ShulkerBox.class, Material.SHULKER_BOX, 1, 64, 1, box); f.add(2, barrel); f.load();
        var named = item(Material.STONE, 3, "named"); var meta = mock(org.bukkit.inventory.meta.ItemMeta.class);
        when(meta.hasCustomName()).thenReturn(true); when(named.getItemMeta()).thenReturn(meta);
        var input = inventory(item(Material.SHULKER_BOX, 1, "plain"), named, item(Material.DIRT, 8, "plain"));
        f.wh.excluded().add(Material.DIRT);
        assertEquals(1, f.index.store(f.wh, input, 0)); assertNull(box.getItem(0)); assertEquals(Material.SHULKER_BOX, barrel.getItem(0).getType());
        assertEquals(0, f.index.store(f.wh, input, 1)); assertEquals(0, f.index.store(f.wh, input, 2));
        assertEquals(12, sum(input, box, barrel)); assertIndex(f, box, barrel);
    }
    @Test
    void buildIsBoundedAndNeverMovesItemsAndSnapshotsAreVersionedDetachedAndReadNoInventory() throws Exception {
        var f = new IndexTestSupport(); var inventories = new ArrayList<Inventory>();
        for (int i = 0; i < 10; i++) { var inv = inventory(item(Material.STONE, i + 1, "plain")); inventories.add(inv); f.add(i, inv); }
        when(f.plugin.snapshotBudget()).thenReturn(2); f.index.start();
        f.index.tick(); assertFalse(f.index.ready(f.wh));
        long reads = inventories.stream().flatMap(inv -> mockingDetails(inv).getInvocations().stream()).filter(i -> i.getMethod().getName().equals("getItem")).count();
        assertEquals(2, reads);
        while (!f.index.ready(f.wh)) f.index.tick();
        assertEquals(55, sum(inventories.toArray(Inventory[]::new)));
        var first = f.index.snapshot(f.wh); clearInvocations(inventories.toArray()); clearInvocations(f.world);
        assertSame(first, f.index.snapshot(f.wh));
        CompletableFuture.runAsync(() -> {
            assertEquals(55, first.stock().getFirst().amount()); ClientCommunication.listBytes("test", first.stock());
        }).get();
        inventories.forEach(inv -> verifyNoInteractions(inv)); verifyNoInteractions(f.world);
        assertThrows(UnsupportedOperationException.class, () -> first.stock().clear());
        var input = inventory(item(Material.STONE, 10, "plain")); f.index.store(f.wh, input, 0);
        var second = f.index.snapshot(f.wh); assertTrue(second.version() > first.version());
        assertEquals(55, first.stock().getFirst().amount()); assertEquals(65, second.stock().getFirst().amount());
    }
    @ParameterizedTest
    @EnumSource(value = BlockFace.class, names = {"NORTH", "SOUTH", "EAST", "WEST"})
    void doubleChestIncludesBothHalvesAcrossWarehouseBoundaryAndCountsOneContainer(BlockFace face) {
        var f = new IndexTestSupport(); f.manager.warehouses.clear();
        f.wh = Warehouse.create("test", java.util.UUID.randomUUID(), new Location(f.world,15,64,15),new Location(f.world,15,64,15));
        f.manager.warehouses.put(f.wh.id(), f.wh);
        var a = inventory(item(Material.STONE, 20, "plain")); var b = inventory(item(Material.STONE, 4, "plain"));
        var left = f.add(Chest.class, Material.CHEST, 15,64,15,a);
        var right = f.add(Chest.class, Material.CHEST,15-face.getModZ(),64,15+face.getModX(),b);
        chestData(left, Type.LEFT, face); chestData(right, Type.RIGHT, face); f.load();
        assertEquals(1, f.index.snapshot(f.wh).capacity().containers()); assertEquals(2, f.index.snapshot(f.wh).parts());
        var carried = inventory((ItemStack) null);
        var result = f.index.take(f.wh, carried,Material.STONE,"",10);
        assertNull(b.getItem(0)); assertEquals(14,a.getItem(0).getAmount()); assertEquals(1,result.containers());
        assertEquals(24,sum(a,b,carried));
        verify(f.chunk(15 >> 4,15 >> 4)).addPluginChunkTicket(f.plugin.owner());
        verify(f.chunk(right.getX() >> 4,right.getZ() >> 4)).addPluginChunkTicket(f.plugin.owner());
    }
    @Test
    void chunkTicketsRetainSharedChunksUntilLastWarehouseAndRemoveOnResizeDeleteDisable() {
        var f = new IndexTestSupport(); f.load();
        var c0=f.chunk(0,0);var c1=f.chunk(1,0); verify(c0).addPluginChunkTicket(f.plugin.owner());verify(c1).addPluginChunkTicket(f.plugin.owner());
        var second = Warehouse.create("second", f.wh.owner(),new Location(f.world,0,80,0),new Location(f.world,2,81,2));
        f.manager.warehouses.put(second.id(),second); f.index.rebuild(second.id()); verify(c0,times(1)).addPluginChunkTicket(f.plugin.owner());
        f.wh=f.wh.resized(new Location(f.world,32,60,0),new Location(f.world,33,70,1));
        f.manager.warehouses.put(f.wh.id(),f.wh);f.index.rebuild(f.wh.id());
        verify(c1).removePluginChunkTicket(f.plugin.owner());verify(c0,never()).removePluginChunkTicket(f.plugin.owner());verify(f.chunk(2,0)).addPluginChunkTicket(f.plugin.owner());
        f.manager.warehouses.remove(second.id());f.index.rebuild(second.id());verify(c0).removePluginChunkTicket(f.plugin.owner());
        f.index.stop();verify(f.chunk(2,0)).removePluginChunkTicket(f.plugin.owner());
    }
    @Test
    void noSweepOrChunkLifecyclePollingAfterInitialBuild() {
        var f=new IndexTestSupport();var inv=inventory(item(Material.STONE,5,"plain"));f.add(1,inv);f.load();
        clearInvocations(inv,f.world); for(int i=0;i<100;i++)f.index.tick(); verifyNoInteractions(inv,f.world);
    }
    @Test
    void emergencyEditBlocksTransfersUntilCloseThenRefreshesOnlyThatContainer() {
        var f=new IndexTestSupport();var a=inventory(item(Material.STONE,20,"plain"));var b=inventory(item(Material.DIRT,4,"plain"));
        f.add(1,a);f.add(2,b);f.load();f.index.editing(a,true);
        var carried=inventory((ItemStack)null);assertEquals(0,f.index.take(f.wh,carried,Material.STONE,"",10).amount());
        a.setItem(0,item(Material.STONE,6,"plain"));clearInvocations(b);f.index.editing(a,false);verifyNoInteractions(b);
        assertEquals(6,f.index.take(f.wh,carried,Material.STONE,"",10).amount());assertEquals(10,sum(a,b,carried));assertIndex(f,a,b);
    }
    @Test
    void actualListAndInfoReadOnlyIndexAndOnlyOpReceivesDiagnostics() throws Exception {
        var f=new IndexTestSupport();var inv=inventory(item(Material.STONE,12,"plain"));f.add(1,inv);f.load();
        var player=mock(Player.class);when(player.getUniqueId()).thenReturn(f.wh.owner());when(player.isOnline()).thenReturn(true);
        when(player.getWorld()).thenReturn(f.world);when(player.getLocation()).thenReturn(new Location(f.world,1,64,1));
        for(var entry:Map.of("warehouses",f.manager,"index",f.index,"work",f.plugin.work()).entrySet()) {
            var field=SurvivalPull.class.getDeclaredField(entry.getKey());field.setAccessible(true);field.set(f.plugin,entry.getValue());
        }
        doCallRealMethod().when(f.plugin).scopeName(any());
        doCallRealMethod().when(f.plugin).requestList(any(),any(),anyString(),any(java.util.function.Function.class),any(java.util.function.Consumer.class));
        var workers=new ArrayList<Runnable>();when(f.scheduler.runTaskAsynchronously(eq(f.plugin.owner()),any(Runnable.class))).thenAnswer(c->{workers.add(c.getArgument(1));return mock(org.bukkit.scheduler.BukkitTask.class);});
        clearInvocations(inv,f.world); var results=new ArrayList<SurvivalPull.ListResult>();
        f.plugin.requestList(player,null,"",java.util.function.Function.identity(),results::add); workers.removeFirst().run();f.flush();
        assertEquals(12,results.getFirst().stock().getFirst().amount());
        f.manager.command(player,new String[]{"info"});verify(player).sendMessage(contains("種類数 1"));verify(player,never()).sendMessage(startsWith("索引:"));
        when(player.isOp()).thenReturn(true);f.manager.command(player,new String[]{"info"});verify(player).sendMessage(startsWith("索引:"));
        verifyNoInteractions(inv); verify(f.world,never()).getChunkAt(anyInt(),anyInt()); verify(f.world,never()).getBlockAt(anyInt(),anyInt(),anyInt());
    }
    @Test
    void doubleChestSharedByAdjacentWarehousesUpdatesBothViewsWithoutReadingUnchangedSlots() {
        var f=new IndexTestSupport();f.manager.warehouses.clear();
        f.wh=Warehouse.create("left",java.util.UUID.randomUUID(),new Location(f.world,15,64,1),new Location(f.world,15,64,1));
        var other=Warehouse.create("right",java.util.UUID.randomUUID(),new Location(f.world,16,64,1),new Location(f.world,16,64,1));
        f.manager.warehouses.put(f.wh.id(),f.wh);f.manager.warehouses.put(other.id(),other);
        var a=inventory(item(Material.STONE,20,"plain"));var b=inventory(item(Material.STONE,10,"plain"));
        var left=f.add(Chest.class,Material.CHEST,15,64,1,a);var right=f.add(Chest.class,Material.CHEST,16,64,1,b);
        chestData(left,Type.LEFT,BlockFace.NORTH);chestData(right,Type.RIGHT,BlockFace.NORTH);f.load();while(!f.index.ready(other))f.index.tick();
        var carried=inventory((ItemStack)null);assertEquals(12,f.index.take(f.wh,carried,Material.STONE,"",12).amount());
        assertEquals(18,f.index.snapshot(other).stock().getFirst().amount());
        assertEquals(12,f.index.store(other,carried,0));assertEquals(30,f.index.snapshot(f.wh).stock().getFirst().amount());
        assertEquals(30,sum(a,b,carried));
    }
    @Test
    void disappearedEmptyContainerIsRepairedAndProtectedSourceCannotBeUsedAsInput() {
        var f=new IndexTestSupport();var a=inventory((ItemStack)null);f.add(1,a);f.load();
        var input=inventory(item(Material.STONE,10,"plain"));var air=mock(org.bukkit.block.BlockState.class);
        when(f.world.getBlockAt(1,64,1).getState(false)).thenReturn(air);
        assertEquals(0,f.index.store(f.wh,input,0));assertEquals(0,f.index.snapshot(f.wh).capacity().slots());
        verify(f.plugin.getLogger()).warning(contains("不一致を修復"));assertEquals(10,sum(input));
        f.add(2,input);f.index.refresh(new Location(f.world,2,64,1));
        assertEquals(0,f.index.store(f.wh,input,0));assertEquals(10,sum(input));assertEquals(10,f.index.snapshot(f.wh).stock().getFirst().amount());
    }
    @Test
    void multipleEmergencyViewersKeepContainerSuspendedUntilLastCloseAndRebuildClosesExistingView() {
        var f=new IndexTestSupport();var a=inventory(item(Material.STONE,20,"plain"));f.add(1,a);f.load();
        f.index.editing(a,true);f.index.editing(a,true);f.index.editing(a,false);
        var carried=inventory((ItemStack)null);assertEquals(0,f.index.take(f.wh,carried,Material.STONE,"",1).amount());
        f.index.editing(a,false);assertEquals(1,f.index.take(f.wh,carried,Material.STONE,"",1).amount());
        var player=mock(Player.class);var view=mock(org.bukkit.inventory.InventoryView.class);when(view.getTopInventory()).thenReturn(a);when(player.getOpenInventory()).thenReturn(view);
        doReturn(List.of(player)).when(f.server).getOnlinePlayers();f.index.rebuild(f.wh.id());verify(player).closeInventory();
    }
    static void chestData(Chest c,Type type,BlockFace facing) {
        var data=mock(org.bukkit.block.data.type.Chest.class);when(data.getType()).thenReturn(type);when(data.getFacing()).thenReturn(facing);when(c.getBlockData()).thenReturn(data);
    }
    static long sum(Inventory... inventories) {
        long total=0;for(var inv:inventories)for(int i=0;i<inv.getSize();i++){var item=inv.getItem(i);if(item!=null)total+=item.getAmount();}return total;
    }
    static Map<ItemVariant.Id,Long> counts(WarehouseSnapshot snapshot) {
        var result=new java.util.HashMap<ItemVariant.Id,Long>();snapshot.stock().forEach(s->result.put(s.variant().id(),s.amount()));return result;
    }
    static Map<ItemVariant.Id,Map<SurvivalPull.Position,Long>> sourceCounts(WarehouseSnapshot snapshot) {
        var result=new java.util.HashMap<ItemVariant.Id,Map<SurvivalPull.Position,Long>>();
        for(var row:snapshot.stock()) {
            var sources=new java.util.HashMap<SurvivalPull.Position,Long>();
            row.sources().forEach(source->sources.merge(source.position(),(long)source.amount(),Long::sum));
            result.put(row.variant().id(),sources);
        }
        return result;
    }
    static void assertIndex(IndexTestSupport f,Inventory... inventories) {
        var actual=new java.util.HashMap<ItemVariant.Id,Long>();int used=0;
        for(var inv:inventories)for(int i=0;i<inv.getSize();i++){var item=inv.getItem(i);if(item!=null){actual.merge(ItemVariant.capture(item).id(),(long)item.getAmount(),Long::sum);used++;}}
        var snapshot=f.index.snapshot(f.wh);assertEquals(actual,counts(snapshot));assertEquals(used,snapshot.capacity().used());
    }
}
