package io.oyasai.survival.enderkeep;

import org.bukkit.block.ShulkerBox;
import org.bukkit.inventory.Inventory;
import org.bukkit.inventory.ItemStack;
import org.bukkit.inventory.meta.BlockStateMeta;
import org.bukkit.inventory.meta.BundleMeta;
import org.junit.jupiter.api.Test;
import java.util.List;
import java.util.UUID;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class EnderContentsTest {
    @Test void restoresOnlyForADifferentSavedWorld() {
        UUID old = UUID.randomUUID(), current = UUID.randomUUID();
        assertFalse(EnderContents.shouldRestore(null, current));
        assertFalse(EnderContents.shouldRestore(current, current));
        assertTrue(EnderContents.shouldRestore(old, current));
    }

    @Test void emptiesShulkerCopyWithoutTouchingSavedItem() {
        ItemStack original = mock(ItemStack.class), copy = mock(ItemStack.class);
        BlockStateMeta meta = mock(BlockStateMeta.class);
        ShulkerBox box = mock(ShulkerBox.class);
        Inventory inventory = mock(Inventory.class);
        when(original.clone()).thenReturn(copy);
        when(copy.getItemMeta()).thenReturn(meta);
        when(meta.getBlockState()).thenReturn(box);
        when(box.getInventory()).thenReturn(inventory);
        ItemStack[] result = EnderContents.forRestore(new ItemStack[]{original, null});
        assertSame(copy, result[0]);
        assertNull(result[1]);
        verify(inventory).clear();
        verify(meta).setBlockState(box);
        verify(copy).setItemMeta(meta);
        verify(original, never()).setItemMeta(any());
    }

    @Test void emptiesBundleCopyAndPreservesOtherItems() {
        ItemStack bundle = mock(ItemStack.class), copy = mock(ItemStack.class);
        BundleMeta meta = mock(BundleMeta.class);
        when(bundle.clone()).thenReturn(copy);
        when(copy.getItemMeta()).thenReturn(meta);
        ItemStack other = mock(ItemStack.class), otherCopy = mock(ItemStack.class);
        when(other.clone()).thenReturn(otherCopy);
        ItemStack[] result = EnderContents.forRestore(new ItemStack[]{bundle, other});
        assertArrayEquals(new ItemStack[]{copy, otherCopy}, result);
        verify(meta).setItems(List.of());
        verify(copy).setItemMeta(meta);
        verify(bundle, never()).setItemMeta(any());
        verify(otherCopy, never()).setItemMeta(any());
    }
}
