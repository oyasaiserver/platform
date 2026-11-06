package io.oyasai.survival.pull;

import org.bukkit.Material;
import org.bukkit.inventory.ItemStack;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.mockito.MockedConstruction;
import static org.mockito.Mockito.*;

/** Supplies default stacks without a running Paper item registry. */
abstract class ItemStackTestSupport {
    private MockedConstruction<ItemStack> plainStacks;

    @BeforeEach
    void mockPlainStacks() {
        plainStacks = mockConstruction(ItemStack.class, (item, context) ->
                when(item.getType()).thenReturn((Material) context.arguments().getFirst()));
    }

    @AfterEach
    void closePlainStacks() { plainStacks.close(); }
}
