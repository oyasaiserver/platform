package io.oyasai.survival.pull;

import java.lang.reflect.Method;
import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.HashSet;
import java.util.List;
import java.util.Locale;
import java.util.Set;
import java.util.UUID;
import org.bukkit.Chunk;
import org.bukkit.Location;
import org.bukkit.Material;
import org.bukkit.Server;
import org.bukkit.World;
import org.bukkit.block.Barrel;
import org.bukkit.block.Block;
import org.bukkit.block.BlockFace;
import org.bukkit.block.BlockState;
import org.bukkit.block.Chest;
import org.bukkit.block.Container;
import org.bukkit.block.Lockable;
import org.bukkit.block.ShulkerBox;
import org.bukkit.block.TileState;
import org.bukkit.entity.Player;
import org.bukkit.event.Event;
import org.bukkit.event.block.Action;
import org.bukkit.event.player.PlayerInteractEvent;
import org.bukkit.inventory.DoubleChestInventory;
import org.bukkit.inventory.EquipmentSlot;
import org.bukkit.inventory.Inventory;
import org.bukkit.persistence.PersistentDataType;
import org.bukkit.plugin.Plugin;

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

    private enum LwcStatus { UNPROTECTED, OWNED, DENIED }

    static boolean canWarehouseControl(Server server, Player actor, UUID warehouseOwner, Container container) {
        if (container == null) return false;
        World world = container.getWorld();
        for (var p : linkedBlocks(container)) {
            Block block = world == null ? null : world.getBlockAt(p.x(), p.y(), p.z());
            BlockState state = block != null ? block.getState(false) : null;
            if (state == null && p.x() == container.getX() && p.y() == container.getY() && p.z() == container.getZ()) {
                state = container;
            }
            if (state instanceof Lockable lockable && lockable.isLocked()) return false;
            if (state instanceof TileState tileState) {
                var pdc = tileState.getPersistentDataContainer();
                if (pdc != null && pdc.getKeys() != null) {
                    for (var key : pdc.getKeys()) {
                        String k = key.getKey().toLowerCase(Locale.ROOT);
                        if (k.contains("cdisplay")) return false;
                        if (k.contains("owner") && pdc.has(key, PersistentDataType.STRING)) {
                            String val = pdc.get(key, PersistentDataType.STRING);
                            if (val != null && warehouseOwner != null && !val.equalsIgnoreCase(warehouseOwner.toString())) {
                                return false;
                            }
                        }
                    }
                }
            }
            LwcStatus lwc = checkLwc(server, actor, warehouseOwner, block);
            if (lwc == LwcStatus.DENIED) return false;
            if (actor != null && lwc == LwcStatus.UNPROTECTED && server != null && server.getPluginManager() != null && block != null) {
                var item = actor.getInventory() == null ? null : actor.getInventory().getItemInMainHand();
                var interact = new PlayerInteractEvent(actor, Action.RIGHT_CLICK_BLOCK, item, block, BlockFace.UP, EquipmentSlot.HAND);
                server.getPluginManager().callEvent(interact);
                if (interact.useInteractedBlock() == Event.Result.DENY) return false;
            }
        }
        return true;
    }

    private static LwcStatus checkLwc(Server server, Player actor, UUID warehouseOwner, Block block) {
        if (server == null || server.getPluginManager() == null || block == null) return LwcStatus.UNPROTECTED;
        Plugin lwcPlugin = server.getPluginManager().getPlugin("LWC");
        if (lwcPlugin == null) lwcPlugin = server.getPluginManager().getPlugin("OyasaiLWC");
        if (lwcPlugin == null) return LwcStatus.UNPROTECTED;
        try {
            Method internalProt = null;
            for (Method m : lwcPlugin.getClass().getDeclaredMethods()) {
                if (m.getParameterCount() == 1 && m.getParameterTypes()[0] == Block.class
                        && m.getName().startsWith("protection")) {
                    internalProt = m;
                    break;
                }
            }
            if (internalProt != null) {
                internalProt.setAccessible(true);
                Object prot = internalProt.invoke(lwcPlugin, block);
                if (prot == null) return LwcStatus.UNPROTECTED;
                int type = (int) prot.getClass().getMethod("getType").invoke(prot);
                if (type == 6) return LwcStatus.DENIED;
                UUID protOwner = (UUID) prot.getClass().getMethod("getOwner").invoke(prot);
                if (warehouseOwner != null && !warehouseOwner.equals(protOwner)) return LwcStatus.DENIED;
                if (actor != null && !actor.isOp() && !actor.getUniqueId().equals(protOwner)
                        && (warehouseOwner == null || !warehouseOwner.equals(protOwner))) {
                    return LwcStatus.DENIED;
                }
                return LwcStatus.OWNED;
            }
            Method getLwc = lwcPlugin.getClass().getMethod("getLWC");
            Object lwc = getLwc.invoke(lwcPlugin);
            if (lwc == null) return LwcStatus.UNPROTECTED;
            if (actor != null) {
                Method canAccess = lwc.getClass().getMethod("canAccessProtection", Player.class, Block.class);
                if (!(boolean) canAccess.invoke(lwc, actor, block)) return LwcStatus.DENIED;
            }
            Method findProt = lwc.getClass().getMethod("findProtection", Block.class);
            Object prot = findProt.invoke(lwc, block);
            if (prot == null) return LwcStatus.UNPROTECTED;
            try {
                Method getOwner = prot.getClass().getMethod("getOwner");
                Object ownerVal = getOwner.invoke(prot);
                if (ownerVal != null && warehouseOwner != null
                        && !ownerVal.toString().equalsIgnoreCase(warehouseOwner.toString())) {
                    return LwcStatus.DENIED;
                }
            } catch (NoSuchMethodException ignored) {
                if (actor == null && warehouseOwner != null) {
                    Player ownerPlayer = server.getPlayer(warehouseOwner);
                    if (ownerPlayer != null) {
                        Method canAccess = lwc.getClass().getMethod("canAccessProtection", Player.class, Block.class);
                        if (!(boolean) canAccess.invoke(lwc, ownerPlayer, block)) return LwcStatus.DENIED;
                    }
                }
            }
            return LwcStatus.OWNED;
        } catch (ReflectiveOperationException | RuntimeException error) {
            return LwcStatus.DENIED;
        }
    }

    static void validateRegionContainers(Server server, Player actor, Warehouse wh) {
        World world = server == null ? null : server.getWorld(wh.world());
        if (world == null && actor != null && actor.getWorld() != null && wh.world().equals(actor.getWorld().getUID())) {
            world = actor.getWorld();
        }
        if (world == null) return;
        boolean sawTileEntities = false;
        for (int cx = wh.minX() >> 4; cx <= (wh.maxX() >> 4); cx++) {
            for (int cz = wh.minZ() >> 4; cz <= (wh.maxZ() >> 4); cz++) {
                Chunk chunk = world.getChunkAt(cx, cz);
                if (chunk == null) continue;
                BlockState[] states = chunk.getTileEntities(false);
                if (states == null || states.length == 0) continue;
                sawTileEntities = true;
                for (BlockState state : states) {
                    if (!eligible(state)) continue;
                    Container container = (Container) state;
                    boolean inside = wh.contains(state.getX(), state.getY(), state.getZ())
                            || linkedBlocks(container).stream().anyMatch(p -> wh.contains(p.x(), p.y(), p.z()));
                    if (inside && !canWarehouseControl(server, actor, wh.owner(), container)) {
                        throw new IllegalArgumentException("他人が保護している容器を含む範囲は登録できません。");
                    }
                }
            }
        }
        if (!sawTileEntities && wh.volume() <= 512) {
            for (int x = wh.minX(); x <= wh.maxX(); x++) {
                for (int y = wh.minY(); y <= wh.maxY(); y++) {
                    for (int z = wh.minZ(); z <= wh.maxZ(); z++) {
                        Block block = world.getBlockAt(x, y, z);
                        if (block == null) continue;
                        BlockState state = block.getState(false);
                        if (eligible(state) && !canWarehouseControl(server, actor, wh.owner(), (Container) state)) {
                            throw new IllegalArgumentException("他人が保護している容器を含む範囲は登録できません。");
                        }
                    }
                }
            }
        }
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
