package io.oyasai.survival.harvest;

import java.util.ArrayDeque;
import java.util.HashSet;
import org.bukkit.GameMode;
import org.bukkit.Material;
import org.bukkit.Tag;
import org.bukkit.block.Block;
import org.bukkit.block.BlockFace;
import org.bukkit.block.data.Ageable;
import org.bukkit.entity.Player;
import org.bukkit.event.Event;
import org.bukkit.event.EventHandler;
import org.bukkit.event.EventPriority;
import org.bukkit.event.Listener;
import org.bukkit.event.block.Action;
import org.bukkit.event.block.BlockBreakEvent;
import org.bukkit.event.block.BlockPlaceEvent;
import org.bukkit.event.entity.EntityInteractEvent;
import org.bukkit.event.player.PlayerInteractEvent;
import org.bukkit.inventory.EquipmentSlot;
import io.oyasai.survival.SurvivalFeature;
import org.bukkit.plugin.java.JavaPlugin;

public final class SurvivalHarvest extends SurvivalFeature implements Listener {
    public SurvivalHarvest(JavaPlugin owner) { super(owner, "harvest", "SurvivalHarvest"); }

    @Override
    public void onEnable() {
        registerEvents(this);
        getLogger().info("Enabled SurvivalHarvest");
    }

    // Farmland is never trampled, by players or mobs.
    @EventHandler(priority = EventPriority.HIGHEST)
    public void onTrample(PlayerInteractEvent event) {
        if (event.getAction() == Action.PHYSICAL && event.getClickedBlock() != null
                && event.getClickedBlock().getType() == Material.FARMLAND) {
            event.setCancelled(true);
        }
    }

    @EventHandler(priority = EventPriority.HIGHEST)
    public void onTrample(EntityInteractEvent event) {
        if (event.getBlock().getType() == Material.FARMLAND) {
            event.setCancelled(true);
        }
    }

    @EventHandler(priority = EventPriority.HIGHEST)
    public void onInteract(PlayerInteractEvent event) {
        Player player = event.getPlayer();
        if (event.getAction() != Action.RIGHT_CLICK_BLOCK
                || event.getHand() != EquipmentSlot.HAND) {
            return;
        }
        // Vanilla can deny block use alone; explicit cancellation denies item use too.
        if (event.useItemInHand() == Event.Result.DENY) {
            return;
        }
        Block block = event.getClickedBlock();
        if (block == null) {
            return;
        }
        Material type = block.getType();
        boolean cane = type == Material.SUGAR_CANE;
        if (cane) {
            block = caneBase(block);
        } else {
            switch (type) {
                case WHEAT, CARROTS, POTATOES, BEETROOTS, NETHER_WART -> { }
                default -> { return; }
            }
            if (!(block.getBlockData() instanceof Ageable crop)
                    || crop.getAge() != crop.getMaximumAge()) {
                return;
            }
        }
        if (!player.isSneaking()) {
            harvest(block, cane, player, event);
            return;
        }
        // Sugar cane spreads between the bottom blocks of neighbouring stalks.
        var queue = new ArrayDeque<Block>();
        var visited = new HashSet<Block>();
        queue.add(block);
        visited.add(block);
        while (!queue.isEmpty()) {
            Block current = queue.remove();
            harvest(current, cane, player, event);
            for (BlockFace face : new BlockFace[] {
                    BlockFace.NORTH, BlockFace.SOUTH, BlockFace.EAST, BlockFace.WEST}) {
                Block next = current.getRelative(face);
                if (next.getType() != type) {
                    continue;
                }
                if (cane) {
                    next = caneBase(next);
                }
                if (visited.size() < 128 && visited.add(next)) {
                    queue.add(next);
                }
            }
        }
    }

    private void harvest(Block block, boolean cane, Player player, PlayerInteractEvent event) {
        if (cane) {
            harvestCane(block, player, event);
        } else {
            harvest(block, player, event);
        }
    }

    private static Block caneBase(Block cane) {
        Block base = cane;
        while (base.getRelative(BlockFace.DOWN).getType() == Material.SUGAR_CANE) {
            base = base.getRelative(BlockFace.DOWN);
        }
        return base;
    }

    // Cuts everything above the bottom block, top first, so a protected block stops the cut
    // without leaving cane floating.
    private void harvestCane(Block base, Player player, PlayerInteractEvent event) {
        var cut = new ArrayDeque<Block>();
        for (Block up = base.getRelative(BlockFace.UP); up.getType() == Material.SUGAR_CANE;
                up = up.getRelative(BlockFace.UP)) {
            cut.push(up);
        }
        var tool = player.getInventory().getItemInMainHand();
        for (Block block : cut) {
            BlockBreakEvent harvest = new BlockBreakEvent(block, player);
            getServer().getPluginManager().callEvent(harvest);
            if (harvest.isCancelled()) {
                return;
            }
            var drops = block.getDrops(tool, player);
            event.setCancelled(true);
            block.setType(Material.AIR, false);
            for (var drop : drops) {
                block.getWorld().dropItemNaturally(block.getLocation(), drop);
            }
        }
    }

    private void harvest(Block block, Player player, PlayerInteractEvent event) {
        if (!(block.getBlockData() instanceof Ageable crop)
                || crop.getAge() != crop.getMaximumAge()) {
            return;
        }
        BlockBreakEvent harvest = new BlockBreakEvent(block, player);
        getServer().getPluginManager().callEvent(harvest);
        if (harvest.isCancelled()) {
            return;
        }
        var drops = block.getDrops(player.getInventory().getItemInMainHand(), player);
        event.setCancelled(true);
        crop.setAge(0);
        block.setBlockData(crop);
        for (var drop : drops) {
            block.getWorld().dropItemNaturally(block.getLocation(), drop);
        }
    }

    @EventHandler(priority = EventPriority.MONITOR, ignoreCancelled = true)
    public void onBreak(BlockBreakEvent event) {
        Block block = event.getBlock();
        Material sapling = switch (block.getType()) {
            case OAK_LOG -> Material.OAK_SAPLING;
            case BIRCH_LOG -> Material.BIRCH_SAPLING;
            case SPRUCE_LOG -> Material.SPRUCE_SAPLING;
            case JUNGLE_LOG -> Material.JUNGLE_SAPLING;
            case ACACIA_LOG -> Material.ACACIA_SAPLING;
            case DARK_OAK_LOG -> Material.DARK_OAK_SAPLING;
            case MANGROVE_LOG -> Material.MANGROVE_PROPAGULE;
            case CHERRY_LOG -> Material.CHERRY_SAPLING;
            case PALE_OAK_LOG -> Material.PALE_OAK_SAPLING;
            case CRIMSON_STEM -> Material.CRIMSON_FUNGUS;
            case WARPED_STEM -> Material.WARPED_FUNGUS;
            default -> null;
        };
        if (sapling == null || !canPlantOn(block.getRelative(BlockFace.DOWN), sapling)) {
            return;
        }
        Player player = event.getPlayer();
        getServer().getScheduler().runTaskLater(owner(), () -> {
            Block soil = block.getRelative(BlockFace.DOWN);
            if (!player.isOnline() || block.getType() != Material.AIR || !canPlantOn(soil, sapling)) {
                return;
            }
            var inventory = player.getInventory();
            var contents = inventory.getContents();
            for (int slot = 0; slot < contents.length; slot++) {
                var item = contents[slot];
                if (item == null || item.getType() != sapling || item.getAmount() < 1) {
                    continue;
                }
                var replaced = block.getState();
                block.setType(sapling, false);
                var place = new BlockPlaceEvent(block, replaced, soil, item.clone(), player,
                        true, slot == 40 ? EquipmentSlot.OFF_HAND : EquipmentSlot.HAND);
                boolean planted = false;
                try {
                    getServer().getPluginManager().callEvent(place);
                    if (!place.isCancelled() && place.canBuild()) {
                        if (player.getGameMode() != GameMode.CREATIVE) {
                            item.setAmount(item.getAmount() - 1);
                            inventory.setItem(slot, item.getAmount() == 0 ? null : item);
                        }
                        planted = true;
                    }
                } finally {
                    if (!planted) {
                        replaced.update(true, false);
                    }
                }
                return;
            }
        }, 1L);
    }

    private boolean canPlantOn(Block soil, Material sapling) {
        if (sapling == Material.CRIMSON_FUNGUS || sapling == Material.WARPED_FUNGUS) {
            return Tag.NYLIUM.isTagged(soil.getType());
        }
        return Tag.DIRT.isTagged(soil.getType())
                || soil.getType() == Material.MOSS_BLOCK || soil.getType() == Material.PALE_MOSS_BLOCK;
    }
}
