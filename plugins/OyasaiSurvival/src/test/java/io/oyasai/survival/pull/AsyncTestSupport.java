package io.oyasai.survival.pull;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Consumer;
import java.util.function.Function;
import java.util.function.Supplier;
import org.bukkit.entity.Player;
import org.bukkit.scheduler.BukkitScheduler;
import org.bukkit.scheduler.BukkitTask;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

final class AsyncTestSupport {
    final List<Runnable> queued = new ArrayList<>();
    AsyncTestSupport(SurvivalPull plugin, BukkitScheduler scheduler) {
        var pipeline = new WorkPipeline(plugin);
        when(plugin.work()).thenReturn(pipeline);
        when(plugin.snapshotBudget()).thenAnswer(c -> Math.max(1,
                plugin.getConfig().getInt("performance.snapshot-containers-per-tick", 64)));
        when(scheduler.runTaskAsynchronously(eq(plugin.owner()), any(Runnable.class))).thenAnswer(c -> {
            queued.add(c.getArgument(1)); return mock(BukkitTask.class);
        });
        when(scheduler.runTask(eq(plugin.owner()), any(Runnable.class))).thenAnswer(c -> {
            queued.add(c.getArgument(1)); return mock(BukkitTask.class);
        });
    }
    void flush() { while (!queued.isEmpty()) queued.removeFirst().run(); }
    void finishRead(List<Runnable> timers) {
        for (int i = 0; i < 30; i++) { timers.getFirst().run(); flush(); }
    }
    void readUntilMove(List<Runnable> timers) {
        for (int i = 0; i < 100 && timers.size() == 1; i++) { timers.getFirst().run(); flush(); }
        assertEquals(2, timers.size(), "read and move timers");
    }

    // GUI/transport tests exercise their callbacks; scheduler ordering is tested separately.
    @SuppressWarnings("unchecked")
    static void immediateLists(SurvivalPull plugin) {
        doAnswer(c -> {
            Player player = c.getArgument(0); ItemNames names = c.getArgument(1); String query = c.getArgument(2);
            var stock = plugin.stock(player);
            ((Consumer<SurvivalPull.ListResult>) c.getArgument(3)).accept(new SurvivalPull.ListResult(
                    plugin.scopeName(player), stock, names == null ? stock : names.filter(stock, query)));
            return null;
        }).when(plugin).requestList(any(), any(), anyString(), any(Consumer.class));
        doAnswer(c -> {
            Player player = c.getArgument(0);
            var stock = plugin.stock(player);
            Object result = ((Function<SurvivalPull.ListResult, ?>) c.getArgument(3))
                    .apply(new SurvivalPull.ListResult(plugin.scopeName(player), stock, stock));
            ((Consumer<Object>) c.getArgument(4)).accept(result);
            return null;
        }).when(plugin).requestList(any(), any(), anyString(), any(Function.class), any(Consumer.class));
        doAnswer(c -> {
            Object value = ((Supplier<?>) c.getArgument(1)).get();
            ((Consumer<Object>) c.getArgument(2)).accept(value);
            return null;
        }).when(plugin).prepareList(any(), any(), any());
    }
}
