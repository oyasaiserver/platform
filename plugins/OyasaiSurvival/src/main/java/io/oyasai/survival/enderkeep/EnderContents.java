package io.oyasai.survival.enderkeep;

import org.bukkit.block.ShulkerBox;
import org.bukkit.inventory.ItemStack;
import org.bukkit.inventory.meta.BlockStateMeta;
import org.bukkit.inventory.meta.BundleMeta;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Random;
import java.util.UUID;

final class EnderContents {
    static final int KEEP = 5;

    private EnderContents() {}

    static boolean shouldRestore(UUID savedWorld, UUID currentWorld) {
        return savedWorld != null && !savedWorld.equals(currentWorld);
    }

    // With more than KEEP filled slots, draw KEEP of them; drawn items stay in their slots.
    static ItemStack[] forRestore(ItemStack[] saved, Random random) {
        List<Integer> filled = new ArrayList<>();
        for (int i = 0; i < saved.length; i++) {
            if (saved[i] != null && !saved[i].isEmpty()) filled.add(i);
        }
        Collections.shuffle(filled, random);
        ItemStack[] result = new ItemStack[saved.length];
        for (int i : filled.subList(0, Math.min(KEEP, filled.size()))) {
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
