package io.oyasai.survival.pull;

import java.nio.file.Files;
import java.nio.file.Path;
import java.util.UUID;
import org.bukkit.Location;
import org.bukkit.Material;
import org.bukkit.entity.Player;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.io.TempDir;
import static io.oyasai.survival.pull.InventoryTestSupport.*;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class WarehouseMigrationTest extends ItemStackTestSupport {
    @TempDir Path directory;
    @Test void oldYamlRetainsRegistrationMembersExclusionsAndLinksAndLoadsContentsWithoutMovingThem() throws Exception {
        var f=new IndexTestSupport();when(f.plugin.getDataFolder()).thenReturn(directory.toFile());
        var bytes=getClass().getResourceAsStream("/warehouses-2.7.yml").readAllBytes();Files.write(directory.resolve("warehouses.yml"),bytes);
        var dirt=spy(Material.DIRT);doReturn(true).when(dirt).isItem();doReturn(false).when(dirt).isAir();
        f.manager.warehouses.clear();
        try(var materials=mockStatic(Material.class,CALLS_REAL_METHODS)) {
            materials.when(()->Material.getMaterial("DIRT")).thenReturn(dirt);f.manager.load();
        }
        f.wh=f.manager.warehouses.values().iterator().next();
        when(f.world.getUID()).thenReturn(f.wh.world());when(f.server.getWorld(f.wh.world())).thenReturn(f.world);
        assertEquals("旧倉庫",f.wh.name());assertEquals(UUID.fromString("30000000-0000-0000-0000-000000000003"),f.wh.owner());
        assertTrue(f.wh.members().contains(UUID.fromString("40000000-0000-0000-0000-000000000004")));assertTrue(f.wh.members().contains(Warehouse.EVERYONE));
        assertTrue(f.wh.excluded().contains(Material.DIRT));assertEquals(2,f.wh.links().iterator().next().blocks().size());
        var inventory=inventory(item(Material.STONE,3,"plain"),item(Material.DIRT,4,"plain"));f.add(1,inventory);f.load();
        assertEquals(7,f.index.snapshot(f.wh).stock().stream().mapToLong(SurvivalPull.Stock::amount).sum());
        verify(inventory,never()).setItem(anyInt(),any());verify(inventory,never()).clear();
        assertArrayEquals(bytes,Files.readAllBytes(directory.resolve("warehouses.yml")));
    }
    @Test void createResizeDeleteCommandsAttachAndDetachTicketsWithoutRebuildingForRenameOrLinks() {
        var f=new IndexTestSupport();when(f.plugin.getDataFolder()).thenReturn(directory.toFile());f.manager.warehouses.clear();f.index.start();
        var p=mock(Player.class);when(p.getUniqueId()).thenReturn(UUID.randomUUID());when(p.getLocation()).thenReturn(new Location(f.world,0,64,0));
        f.manager.command(p,new String[]{"pos1","0","64","0"});f.manager.command(p,new String[]{"pos2","1","64","1"});
        f.manager.command(p,new String[]{"create","new"});var wh=f.manager.warehouses.values().iterator().next();while(!f.index.ready(wh))f.index.tick();
        verify(f.chunk(0,0)).addPluginChunkTicket(f.plugin.owner());
        f.manager.command(p,new String[]{"rename","new","renamed"});verify(f.chunk(0,0),times(1)).addPluginChunkTicket(f.plugin.owner());
        f.manager.command(p,new String[]{"pos1","32","64","0"});f.manager.command(p,new String[]{"pos2","33","64","1"});
        f.manager.command(p,new String[]{"resize","renamed"});verify(f.chunk(0,0)).removePluginChunkTicket(f.plugin.owner());verify(f.chunk(2,0)).addPluginChunkTicket(f.plugin.owner());
        f.manager.command(p,new String[]{"delete","renamed"});verify(f.chunk(2,0)).removePluginChunkTicket(f.plugin.owner());
    }
}
