package io.oyasai.survival.pull;

import java.util.HashSet;
import java.util.Set;
import java.util.UUID;
import java.util.List;
import java.util.LinkedHashSet;
import org.bukkit.Location;
import org.bukkit.Material;
import java.util.EnumSet;

record Warehouse(UUID id, String name, UUID world, UUID owner, Set<UUID> members,
                 int minX, int minY, int minZ, int maxX, int maxY, int maxZ, Set<Material> excluded, Set<Link> links) {
    record Link(List<SurvivalPull.Position> blocks, Material type) {
        Link { blocks = List.copyOf(blocks); }
    }
    static Warehouse create(String name, UUID owner, Location a, Location b) {
        if (!a.getWorld().equals(b.getWorld())) throw new IllegalArgumentException("2角は同じワールドで指定してください。");
        return new Warehouse(UUID.randomUUID(), name, a.getWorld().getUID(), owner, new HashSet<>(),
                Math.min(a.getBlockX(), b.getBlockX()), Math.min(a.getBlockY(), b.getBlockY()), Math.min(a.getBlockZ(), b.getBlockZ()),
                Math.max(a.getBlockX(), b.getBlockX()), Math.max(a.getBlockY(), b.getBlockY()), Math.max(a.getBlockZ(), b.getBlockZ()), EnumSet.noneOf(Material.class), new LinkedHashSet<>());
    }

    Warehouse renamed(String name) {
        return new Warehouse(id, name, world, owner, members, minX, minY, minZ, maxX, maxY, maxZ, excluded, links);
    }

    Warehouse resized(Location a, Location b) {
        Warehouse bounds = create(name, owner, a, b);
        if (!links.isEmpty() && !world.equals(bounds.world))
            throw new IllegalArgumentException("別ワールドへ範囲変更する前にリンクを外してください。");
        return new Warehouse(id, name, bounds.world, owner, members, bounds.minX, bounds.minY, bounds.minZ,
                bounds.maxX, bounds.maxY, bounds.maxZ, excluded, links);
    }

    long volume() {
        try {
            return Math.multiplyExact(Math.multiplyExact((long) maxX - minX + 1, (long) maxY - minY + 1), (long) maxZ - minZ + 1);
        } catch (ArithmeticException tooLarge) {
            return Long.MAX_VALUE;
        }
    }

    // members にこの UUID が入っていれば、全員をメンバーとして扱う（/wh member add <名前> *）。
    static final UUID EVERYONE = new UUID(0, 0);

    boolean isMember(UUID player) { return owner.equals(player) || members.contains(player) || members.contains(EVERYONE); }

    boolean contains(Location location) {
        return world.equals(location.getWorld().getUID()) && contains(location.getBlockX(), location.getBlockY(), location.getBlockZ());
    }

    boolean contains(int x, int y, int z) {
        return x >= minX && x <= maxX && y >= minY && y <= maxY && z >= minZ && z <= maxZ;
    }

    boolean overlaps(Warehouse other) {
        return world.equals(other.world) && minX <= other.maxX && maxX >= other.minX
                && minY <= other.maxY && maxY >= other.minY && minZ <= other.maxZ && maxZ >= other.minZ;
    }
}
