package io.oyasai.survival.pull;

import org.bukkit.entity.Player;
import static org.mockito.Mockito.*;

final class PullTestSupport {
    static Warehouse nearbyWarehouse(SurvivalPull plugin, Player player) throws Exception {
        var manager = mock(WarehouseManager.class);
        var warehouse = mock(Warehouse.class);
        when(manager.near(eq(player), anyInt())).thenReturn(warehouse);
        var field = SurvivalPull.class.getDeclaredField("warehouses");
        field.setAccessible(true);
        field.set(plugin, manager);
        return warehouse;
    }
}
