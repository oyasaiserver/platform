package io.oyasai.survival.pull;

import java.util.HashMap;
import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;
import org.bukkit.Material;
import org.bukkit.inventory.Inventory;
import org.bukkit.inventory.ItemStack;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

final class InventoryTestSupport {
    static ItemStack item(Material type, int amount, String tag) {
        ItemStack item = mock(ItemStack.class);
        AtomicInteger n = new AtomicInteger(amount);
        when(item.getType()).thenReturn(type);
        when(item.getAmount()).thenAnswer(c -> n.get());
        when(item.getMaxStackSize()).thenReturn(64);
        doAnswer(c -> { n.set(c.getArgument(0)); return null; }).when(item).setAmount(anyInt());
        when(item.clone()).thenAnswer(c -> {
            var copy = item(type, n.get(), tag);
            var meta = item.getItemMeta();
            when(copy.getItemMeta()).thenReturn(meta);
            return copy;
        });
        when(item.toString()).thenReturn(tag);
        when(item.serializeAsBytes()).thenAnswer(c -> (type.name() + ":" + tag + ":" + n.get())
                .getBytes(java.nio.charset.StandardCharsets.UTF_8));
        when(item.isSimilar(any())).thenAnswer(c -> {
            ItemStack other = c.getArgument(0);
            return other != null && other.getType() == type
                    && (tag.equals(other.toString()) || tag.equals("plain") && !other.hasItemMeta());
        });
        return item;
    }

    static Inventory inventory(ItemStack... slots) {
        Inventory inv = mock(Inventory.class);
        when(inv.getSize()).thenReturn(slots.length);
        when(inv.getMaxStackSize()).thenReturn(64);
        when(inv.getItem(anyInt())).thenAnswer(c -> slots[(int) c.getArgument(0)]);
        doAnswer(c -> { slots[(int) c.getArgument(0)] = c.getArgument(1); return null; }).when(inv).setItem(anyInt(), any());
        doAnswer(c -> { java.util.Arrays.fill(slots, null); return null; }).when(inv).clear();
        when(inv.addItem(any(ItemStack.class))).thenAnswer(c -> {
            ItemStack offer = c.getArgument(0);
            int left = offer.getAmount();
            for (boolean empty : new boolean[] {false, true}) {
                for (int i = 0; i < slots.length && left > 0; i++) {
                    if (empty ? slots[i] != null : slots[i] == null || !slots[i].isSimilar(offer)) continue;
                    int current = slots[i] == null ? 0 : slots[i].getAmount();
                    int move = Math.min(64 - current, left);
                    if (move == 0) continue;
                    if (slots[i] == null) slots[i] = offer.clone();
                    slots[i].setAmount(current + move);
                    left -= move;
                }
            }
            var remaining = new HashMap<Integer, ItemStack>();
            offer.setAmount(left); // Bukkit 実装が引数を変更しても残余値で計算する。
            if (left > 0) remaining.put(0, offer);
            return remaining;
        });
        return inv;
    }

    static WarehouseContainers.Store store(Inventory inventory) {
        var store = new WarehouseContainers.Store();
        var part = mock(WarehouseContainers.Part.class);
        when(part.inventory()).thenReturn(inventory);
        when(part.position()).thenReturn(new SurvivalPull.Position(0, 64, 0));
        store.parts.add(part);
        return store;
    }

    static int total(List<WarehouseContainers.Store> stores) {
        int n = 0;
        for (var store : stores) for (var part : store.parts) {
            Inventory inv = part.inventory();
            if (inv == null) continue;
            for (int i = 0; i < inv.getSize(); i++) if (inv.getItem(i) != null) n += inv.getItem(i).getAmount();
        }
        return n;
    }

}
