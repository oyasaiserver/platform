package io.oyasai.survival.pull;

import java.util.UUID;
import org.bukkit.Location;
import org.bukkit.World;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class WarehouseTest {
    @Test
    void boundsAreInclusiveAndMembershipAndWorldAreRequired() {
        World world = mock(World.class);
        UUID worldId = UUID.randomUUID(), owner = UUID.randomUUID(), member = UUID.randomUUID();
        when(world.getUID()).thenReturn(worldId);
        Warehouse wh = Warehouse.create("倉庫", owner, new Location(world, 10, 70, 10), new Location(world, -2, 60, -2));
        wh.members().add(member);
        assertEquals(13 * 11 * 13, wh.volume());
        assertTrue(wh.contains(new Location(world, -2, 60, -2)));
        assertTrue(wh.contains(new Location(world, 10.9, 70.9, 10.9)));
        assertFalse(wh.contains(new Location(world, 11, 70, 10)));
        assertTrue(wh.isMember(owner));
        assertTrue(wh.isMember(member));
        assertFalse(wh.isMember(UUID.randomUUID()));
        when(world.getUID()).thenReturn(UUID.randomUUID());
        assertFalse(wh.contains(new Location(world, 0, 64, 0)));
    }

    @Test
    void overlapIncludesTouchingBlocksButNotAdjacentBlocksOrOtherWorlds() {
        World world = mock(World.class);
        when(world.getUID()).thenReturn(UUID.randomUUID());
        UUID owner = UUID.randomUUID();
        Warehouse a = Warehouse.create("a", owner, new Location(world, 0, 0, 0), new Location(world, 2, 2, 2));
        Warehouse b = Warehouse.create("b", owner, new Location(world, 2, 2, 2), new Location(world, 3, 3, 3));
        Warehouse c = Warehouse.create("c", owner, new Location(world, 3, 0, 0), new Location(world, 4, 2, 2));
        assertTrue(a.overlaps(b));
        assertFalse(a.overlaps(c));
        when(world.getUID()).thenReturn(UUID.randomUUID());
        assertFalse(a.overlaps(Warehouse.create("d", owner, new Location(world, 0, 0, 0), new Location(world, 2, 2, 2))));
    }

    @Test
    void everyoneMarkerMakesAnyPlayerAMember() {
        UUID owner = UUID.randomUUID(), stranger = UUID.randomUUID();
        var members = new java.util.HashSet<UUID>();
        var wh = new Warehouse(UUID.randomUUID(), "w", UUID.randomUUID(), owner, members, 0, 0, 0, 1, 1, 1,
                java.util.EnumSet.noneOf(org.bukkit.Material.class), new java.util.LinkedHashSet<>());
        assertFalse(wh.isMember(stranger));
        members.add(Warehouse.EVERYONE);
        assertTrue(wh.isMember(stranger));
        assertTrue(wh.isMember(owner));
    }
}
