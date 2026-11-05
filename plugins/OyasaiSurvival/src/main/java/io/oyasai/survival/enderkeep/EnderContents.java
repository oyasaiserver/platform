package io.oyasai.survival.enderkeep;

import org.bukkit.block.ShulkerBox;
import org.bukkit.inventory.ItemStack;
import org.bukkit.inventory.meta.BlockStateMeta;
import org.bukkit.inventory.meta.BundleMeta;
import java.util.List;
import java.util.UUID;

final class EnderContents {
    private EnderContents() {}

    static boolean shouldRestore(UUID savedWorld, UUID currentWorld) {
        return savedWorld != null && !savedWorld.equals(currentWorld);
    }

    static ItemStack[] forRestore(ItemStack[] saved) {
        ItemStack[] result = new ItemStack[saved.length];
        for (int i = 0; i < saved.length; i++) {
            if (saved[i] == null) continue;
            ItemStack item = saved[i].clone();
            var meta = item.getItemMeta();
            if (meta instanceof BlockStateMeta blockMeta && blockMeta.getBlockState() instanceof ShulkerBox box) {
                box.getInventory().clear();
                blockMeta.setBlockState(box);
                item.setItemMeta(blockMeta);
            } else if (meta instanceof BundleMeta bundleMeta) {
                bundleMeta.setItems(List.of());
                item.setItemMeta(bundleMeta);
            }
            result[i] = item;
        }
        return result;
    }
}
