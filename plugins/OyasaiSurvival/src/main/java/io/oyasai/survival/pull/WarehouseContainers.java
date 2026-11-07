package io.oyasai.survival.pull;

import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import org.bukkit.Location;
import org.bukkit.Material;
import org.bukkit.World;
import org.bukkit.block.Barrel;
import org.bukkit.block.Chest;
import org.bukkit.block.Container;
import org.bukkit.block.ShulkerBox;
import org.bukkit.inventory.DoubleChestInventory;
import org.bukkit.inventory.Inventory;

final class WarehouseContainers {
    static final Comparator<SurvivalPull.Position> POSITIONS = Comparator.comparingInt(SurvivalPull.Position::x)
            .thenComparingInt(SurvivalPull.Position::y).thenComparingInt(SurvivalPull.Position::z);

    record Part(World world, SurvivalPull.Position position, Material type) {
        Container current() {
            var state = world.getBlockAt(position.x(), position.y(), position.z()).getState(false);
            return eligible(state) && state.getType() == type ? (Container) state : null;
        }
        Inventory inventory() {
            var container = current();
            return container == null ? null : SurvivalPull.containerInventory(container);
        }
    }
    static final class Store {
        final List<Part> parts = new ArrayList<>();
        SurvivalPull.Position position() { return parts.stream().map(Part::position).min(POSITIONS).orElseThrow(); }
    }
    record Capacity(int containers, int slots, int used) {
        int free() { return slots - used; }
    }
    static boolean eligible(Object state) { return state instanceof Chest || state instanceof Barrel || state instanceof ShulkerBox; }
    static boolean linkable(Object state) { return state instanceof Chest || state instanceof Barrel; }
    static SurvivalPull.Position position(Location l) { return new SurvivalPull.Position(l.getBlockX(), l.getBlockY(), l.getBlockZ()); }
    static Part part(Container c) { return new Part(c.getWorld(), new SurvivalPull.Position(c.getX(), c.getY(), c.getZ()), c.getType()); }

    static List<SurvivalPull.Position> linkedBlocks(Container container) {
        var p = new SurvivalPull.Position(container.getX(), container.getY(), container.getZ());
        if (!(container instanceof Chest) || !(container.getBlockData() instanceof org.bukkit.block.data.type.Chest data)
                || data.getType() == org.bukkit.block.data.type.Chest.Type.SINGLE) return List.of(p);
        int direction = data.getType() == org.bukkit.block.data.type.Chest.Type.LEFT ? -1 : 1;
        var other = new SurvivalPull.Position(p.x() + direction * data.getFacing().getModZ(), p.y(),
                p.z() - direction * data.getFacing().getModX());
        return java.util.stream.Stream.of(p, other).sorted(POSITIONS).toList();
    }
    static Store linked(World world, Warehouse.Link link) {
        var store = new Store();
        for (var p : link.blocks()) {
            if (!world.isChunkLoaded(p.x() >> 4, p.z() >> 4)) return null;
            var state = world.getBlockAt(p.x(), p.y(), p.z()).getState(false);
            if (!linkable(state) || state.getType() != link.type()
                    || !linkedBlocks((Container) state).equals(link.blocks())) return null;
            store.parts.add(new Part(world, p, link.type()));
        }
        return store;
    }
    static List<Location> locations(Inventory inventory) {
        if (inventory instanceof DoubleChestInventory chest) {
            var locations = new ArrayList<Location>();
            locations.addAll(locations(chest.getLeftSide())); locations.addAll(locations(chest.getRightSide()));
            return locations;
        }
        var location = inventory.getLocation();
        return location == null ? List.of() : List.of(location);
    }

    /** Discovers chunks once; callers budget the actual container reads per tick. */
    static final class Reader {
        private final World world;
        private final Warehouse warehouse;
        private final ArrayDeque<SurvivalPull.Position> pending = new ArrayDeque<>();
        private final Set<SurvivalPull.Position> seen = new HashSet<>();
        private int cx, cz;
        Reader(World world, Warehouse warehouse) {
            this.world = world; this.warehouse = warehouse;
            cx = warehouse.minX() >> 4; cz = warehouse.minZ() >> 4;
        }
        SurvivalPull.Position next() {
            while (pending.isEmpty() && cx <= (warehouse.maxX() >> 4)) {
                for (var state : world.getChunkAt(cx, cz).getTileEntities(false)) {
                    if (eligible(state) && warehouse.contains(state.getX(), state.getY(), state.getZ()))
                        include((Container) state);
                }
                if (++cz > (warehouse.maxZ() >> 4)) { cz = warehouse.minZ() >> 4; cx++; }
            }
            return pending.pollFirst();
        }
        void include(Container c) {
            for (var p : linkedBlocks(c)) if (seen.add(p)) pending.add(p);
        }
    }
}
