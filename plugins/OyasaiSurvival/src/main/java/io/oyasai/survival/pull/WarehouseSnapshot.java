package io.oyasai.survival.pull;

import java.util.List;

/** Detached, immutable index values; no World, Inventory or mutable stack is exposed. */
record WarehouseSnapshot(long version, List<SurvivalPull.Stock> stock, WarehouseContainers.Capacity capacity,
                         int parts, long estimatedBytes) {
    WarehouseSnapshot { stock = List.copyOf(stock); }
    List<SurvivalPull.Stock> summarize() { return stock; }
    static WarehouseSnapshot empty() {
        return new WarehouseSnapshot(0, List.of(), new WarehouseContainers.Capacity(0, 0, 0), 0, 0);
    }
}
