package io.oyasai.survival.pull;

import java.util.List;
import java.util.UUID;
import org.bukkit.Chunk;
import org.bukkit.Location;
import org.bukkit.Material;
import org.bukkit.World;
import org.bukkit.block.BlockState;
import org.bukkit.block.Container;
import org.bukkit.configuration.file.YamlConfiguration;
import org.bukkit.entity.Player;
import org.bukkit.inventory.Inventory;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class PullScopeTest extends ItemStackTestSupport {

    @Test
    void commandsWithoutWarehouseDoNothingExceptReload() throws Exception {
        var plugin = mock(SurvivalPull.class, CALLS_REAL_METHODS);
        var config = new YamlConfiguration(); config.set("radius", 16);
        doReturn(config).when(plugin).getConfig();
        doNothing().when(plugin).reloadConfig();
        var player = mock(Player.class); when(player.isOp()).thenReturn(true);
        var command = mock(org.bukkit.command.Command.class);
        plugin.onCommand(player, command, "pull", new String[] {"reload"});
        verify(plugin).reloadConfig();
        clearInvocations(player);
        for (String[] args : List.of(new String[0], new String[] {"gui"},
                new String[] {"stone", "5"}, new String[] {"hand"}))
            plugin.onCommand(player, command, "pull", args);
        verify(player, times(4)).sendMessage("16マス以内に使える倉庫がありません。");
        verifyNoMoreInteractions(player);
    }

    @Test
    void choosesNearestMemberWarehouseWithinEveryAxis() throws Exception {
        var plugin = mock(SurvivalPull.class, CALLS_REAL_METHODS);
        doReturn(new YamlConfiguration()).when(plugin).getConfig();
        var manager = new WarehouseManager(plugin);
        var world = mock(World.class); when(world.getUID()).thenReturn(UUID.randomUUID());
        var player = mock(Player.class); var owner = UUID.randomUUID();
        when(player.getLocation()).thenReturn(new Location(world, -0.1, 64, -0.1));
        when(player.getUniqueId()).thenReturn(owner);
        var far = Warehouse.create("far", owner, new Location(world, 10, 64, 10), new Location(world, 11, 65, 11));
        var near = Warehouse.create("near", owner, new Location(world, -17, 48, -17), new Location(world, -17, 48, -17));
        var stranger = Warehouse.create("stranger", UUID.randomUUID(), new Location(world, -1, 64, -1), new Location(world, 0, 65, 0));
        for (var wh : List.of(far, near, stranger)) manager.warehouses.put(wh.id(), wh);
        assertSame(far, manager.near(player, 16));
        manager.warehouses.remove(far.id());
        assertSame(near, manager.near(player, 16));
        assertNull(manager.near(player, 15));
        when(player.getLocation()).thenReturn(new Location(world, -0.1, 64, -0.1));
        assertNull(manager.near(player, 0));
    }

    private void chunk(World world, int x, BlockState... states) {
        Chunk c = mock(Chunk.class);
        when(world.isChunkLoaded(x, 0)).thenReturn(true);
        when(world.getChunkAt(x, 0)).thenReturn(c);
        when(c.getTileEntities(false)).thenReturn(states);
    }

    private <T extends Container> T container(Class<T> type, int x, int y, int z) {
        T c = mock(type);
        when(c.getX()).thenReturn(x); when(c.getY()).thenReturn(y); when(c.getZ()).thenReturn(z);
        when(c.getType()).thenReturn(Material.BARREL);
        when(c.getInventory()).thenReturn(mock(Inventory.class));
        return c;
    }
}
