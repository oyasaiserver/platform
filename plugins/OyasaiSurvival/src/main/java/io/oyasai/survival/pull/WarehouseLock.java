package io.oyasai.survival.pull;

import java.util.HashMap;
import java.util.Map;
import java.util.UUID;
import org.bukkit.Location;
import org.bukkit.block.Block;
import org.bukkit.block.Container;
import org.bukkit.entity.Player;
import org.bukkit.event.EventHandler;
import org.bukkit.event.EventPriority;
import org.bukkit.event.Listener;
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

/** Enforces exclusive plugin access, with an explicit op emergency session. */
final class WarehouseLock implements Listener {
    private final SurvivalPull plugin;
    private final WarehouseIndex index;
    private final Map<UUID, Inventory> emergency = new HashMap<>();
    WarehouseLock(SurvivalPull plugin, WarehouseIndex index) { this.plugin = plugin; this.index = index; }
    Warehouse protectedAt(Location l) {
        if (!WarehouseContainers.eligible(l.getBlock().getState(false))) return null;
        return index.warehouse(l);
    }
    private boolean locked(Block b) { return protectedAt(b.getLocation()) != null; }
    private boolean locked(Inventory inv) { return WarehouseContainers.locations(inv).stream().anyMatch(l -> protectedAt(l) != null); }
    @EventHandler(priority = EventPriority.HIGHEST, ignoreCancelled = true)
    public void onOpen(InventoryOpenEvent e) {
        if (!locked(e.getInventory())) return;
        if (e.getPlayer() instanceof Player p && p.isOp() && p.isSneaking()) return;
        e.setCancelled(true); e.getPlayer().sendMessage("倉庫は /pull で使います");
    }
    @EventHandler(priority = EventPriority.MONITOR, ignoreCancelled = true)
    public void opened(InventoryOpenEvent e) {
        if (!locked(e.getInventory())) return;
        emergency.put(e.getPlayer().getUniqueId(), e.getInventory()); index.editing(e.getInventory(), true);
    }
    @EventHandler(priority = EventPriority.MONITOR)
    public void onClose(InventoryCloseEvent e) {
        var inv = emergency.remove(e.getPlayer().getUniqueId());
        if (inv != null) index.editing(inv, false);
    }
    @EventHandler(priority = EventPriority.HIGHEST, ignoreCancelled = true)
    public void onMove(InventoryMoveItemEvent e) {
        if (locked(e.getSource()) || locked(e.getDestination())) e.setCancelled(true);
    }
    @EventHandler(priority = EventPriority.HIGHEST, ignoreCancelled = true)
    public void onPickup(InventoryPickupItemEvent e) { if (locked(e.getInventory())) e.setCancelled(true); }
    @EventHandler(priority = EventPriority.HIGHEST, ignoreCancelled = true)
    public void onBreak(BlockBreakEvent e) {
        var wh = protectedAt(e.getBlock().getLocation());
        if (wh != null && !e.getPlayer().isOp() && !wh.owner().equals(e.getPlayer().getUniqueId())) e.setCancelled(true);
    }
    @EventHandler(priority = EventPriority.MONITOR, ignoreCancelled = true)
    public void broken(BlockBreakEvent e) {
        if (!locked(e.getBlock())) return;
        var locations = WarehouseContainers.linkedBlocks((Container) e.getBlock().getState(false)).stream()
                .map(p -> new Location(e.getBlock().getWorld(), p.x(), p.y(), p.z())).toList();
        index.remove(e.getBlock().getLocation());
        plugin.getServer().getScheduler().runTask(plugin.owner(), () -> locations.forEach(index::refresh));
    }
    @EventHandler(priority = EventPriority.MONITOR, ignoreCancelled = true)
    public void onPlace(BlockPlaceEvent e) {
        if (!WarehouseContainers.eligible(e.getBlockPlaced().getState(false))) return;
        var l = e.getBlockPlaced().getLocation();
        plugin.getServer().getScheduler().runTask(plugin.owner(), () -> index.refresh(l));
    }
    @EventHandler(priority = EventPriority.HIGHEST, ignoreCancelled = true)
    public void onExplode(EntityExplodeEvent e) { e.blockList().removeIf(this::locked); }
    @EventHandler(priority = EventPriority.HIGHEST, ignoreCancelled = true)
    public void onExplode(BlockExplodeEvent e) { e.blockList().removeIf(this::locked); }
    @EventHandler(priority = EventPriority.HIGHEST, ignoreCancelled = true)
    public void onExtend(BlockPistonExtendEvent e) { if (e.getBlocks().stream().anyMatch(this::locked)) e.setCancelled(true); }
    @EventHandler(priority = EventPriority.HIGHEST, ignoreCancelled = true)
    public void onRetract(BlockPistonRetractEvent e) { if (e.getBlocks().stream().anyMatch(this::locked)) e.setCancelled(true); }
    @EventHandler(priority = EventPriority.HIGHEST, ignoreCancelled = true)
    public void onBurn(BlockBurnEvent e) { if (locked(e.getBlock())) e.setCancelled(true); }
    void stop() {
        for (var player : plugin.getServer().getOnlinePlayers()) if (emergency.containsKey(player.getUniqueId())) player.closeInventory();
        emergency.clear();
    }
}
