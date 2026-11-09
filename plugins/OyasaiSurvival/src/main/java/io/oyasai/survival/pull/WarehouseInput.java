package io.oyasai.survival.pull;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import org.bukkit.entity.Player;
import org.bukkit.event.EventHandler;
import org.bukkit.event.Listener;
import org.bukkit.event.inventory.InventoryCloseEvent;

/** Linked inputs remain ordinary player-accessible containers. Closing one starts a bounded deposit. */
final class WarehouseInput implements Listener {
    private final SurvivalPull plugin;
    private final WarehouseManager manager;
    private final Map<UUID, WorkPipeline.Operation> running = new HashMap<>();
    WarehouseInput(SurvivalPull plugin, WarehouseManager manager) { this.plugin = plugin; this.manager = manager; }
    boolean busy(Warehouse wh) { return running.containsKey(wh.id()); }
    void stop() { List.copyOf(running.values()).forEach(WorkPipeline.Operation::cancel); running.clear(); }
    @EventHandler
    public void onClose(InventoryCloseEvent event) {
        if (!(event.getPlayer() instanceof Player player)) return;
        for (var l : WarehouseContainers.locations(event.getInventory())) {
            var wh = manager.linkedAt(l);
            if (wh == null) continue;
            if (!wh.isMember(player.getUniqueId())) return;
            if (busy(wh)) { player.sendMessage("この倉庫は処理中です。投入品は残ります。終了後に開閉してください。"); return; }
            try { manager.pruneLinks(player, wh, l.getWorld()); }
            catch (java.io.IOException error) {
                plugin.getLogger().severe("リンクを保存できないため投入を中断: " + error);
                player.sendMessage("リンクの保存に失敗したため、投入を中断しました。"); return;
            }
            var link = wh.links().stream().filter(v -> v.blocks().contains(WarehouseContainers.position(l))).findFirst().orElse(null);
            if (link != null) start(player, wh, link);
            return;
        }
    }
    void start(Player player, Warehouse wh, Warehouse.Link link) {
        if (busy(wh)) return;
        var op = plugin.work().start(); if (!op.active()) return;
        running.put(wh.id(), op);
        op.onFailure(error -> {
            running.remove(wh.id()); plugin.getLogger().severe("倉庫投入を中断: " + error);
            player.sendMessage("倉庫への投入を中断しました。残りは投入口にあります。");
        });
        var job = new Job(plugin, wh, link);
        op.move(() -> {
            if (!player.isOnline() || !wh.isMember(player.getUniqueId()) || !wh.links().contains(link)) {
                running.remove(wh.id()); return true;
            }
            if (!plugin.index().ready(wh)) return false;
            if (!job.step()) return false;
            running.remove(wh.id()); player.sendMessage(job.moved + "個を格納しました。除外品・名前付き・入りきらない物は投入口に残ります。");
            return true;
        });
    }
    static final class Job {
        private final SurvivalPull plugin;
        private final Warehouse wh;
        private final Warehouse.Link link;
        private int part, slot;
        long moved;
        Job(SurvivalPull plugin, Warehouse wh, Warehouse.Link link) { this.plugin = plugin; this.wh = wh; this.link = link; }
        boolean step() {
            if (!plugin.index().ready(wh)) return false;
            var world = plugin.getServer().getWorld(wh.world());
            var source = world == null ? null : WarehouseContainers.linked(world, link);
            if (source == null) return true;
            for (int n = 0; n < Math.max(1, plugin.getConfig().getInt("warehouse.stacks-per-tick", 32)) && part < source.parts.size(); n++) {
                var inventory = source.parts.get(part).inventory();
                if (inventory == null) return true;
                if (slot < inventory.getSize()) moved += plugin.index().store(wh, inventory, slot++);
                if (slot == inventory.getSize()) { part++; slot = 0; }
            }
            return part == source.parts.size();
        }
    }

}
