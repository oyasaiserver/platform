package io.oyasai.survival.pull;

import java.util.HashSet;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;
import java.util.UUID;
import java.util.concurrent.CancellationException;
import java.util.function.BooleanSupplier;
import java.util.function.Consumer;
import java.util.function.Supplier;
import org.bukkit.scheduler.BukkitScheduler;
import org.bukkit.scheduler.BukkitTask;

/** Tracks all stages, including callbacks queued by async workers during unload. */
final class WorkPipeline {
    private static final ThreadLocal<BooleanSupplier> CANCELLED = new ThreadLocal<>();
    private final SurvivalPull plugin;
    private final BukkitScheduler scheduler;
    private final Set<Operation> operations = new HashSet<>();
    private final Map<UUID, Operation> latest = new HashMap<>();
    private volatile Measurement measurement;
    private boolean stopped;

    /** Optional observation only; measured work follows the same pipeline. */
    static final class Measurement {
        private final Map<Integer, Long> mainTicks = new HashMap<>();
        private long asyncNanos;
        synchronized void main(int tick, long nanos) { mainTicks.merge(tick, nanos, Long::sum); }
        synchronized void async(long nanos) { asyncNanos += nanos; }
        synchronized long mainTotal() { return mainTicks.values().stream().mapToLong(Long::longValue).sum(); }
        synchronized long maxTick() { return mainTicks.values().stream().mapToLong(Long::longValue).max().orElse(0); }
        synchronized long asyncTotal() { return asyncNanos; }
    }

    Measurement beginMeasurement() {
        if (measurement != null) throw new IllegalStateException("計測中です。");
        return measurement = new Measurement();
    }
    void endMeasurement() { measurement = null; }
    void recordMain(long started) {
        var current = measurement;
        if (current != null) current.main(plugin.getServer().getCurrentTick(), System.nanoTime() - started);
    }

    WorkPipeline(SurvivalPull plugin) {
        this.plugin = plugin;
        scheduler = plugin.getServer().getScheduler();
    }

    static void checkCancelled() {
        var check = CANCELLED.get();
        if (Thread.currentThread().isInterrupted() || check != null && check.getAsBoolean()) throw new CancellationException();
    }

    final class Operation {
        private final Set<BukkitTask> tasks = new HashSet<>();
        private volatile boolean cancelled;
        private Consumer<RuntimeException> failure = error -> plugin.getLogger().severe("処理を中断しました: " + error);

        boolean active() { return !cancelled; }
        void onFailure(Consumer<RuntimeException> handler) { failure = handler; }
        void fail(RuntimeException error) {
            if (active()) { cancel(); failure.accept(error); }
        }
        void cancel() {
            synchronized (WorkPipeline.this) {
                cancelled = true;
                tasks.forEach(BukkitTask::cancel);
                tasks.clear();
                operations.remove(this);
                latest.values().removeIf(value -> value == this);
            }
        }
        void read(BooleanSupplier tick, Runnable ready) {
            synchronized (WorkPipeline.this) {
                if (!active() || stopped) return;
                final BukkitTask[] timer = new BukkitTask[1];
                timer[0] = scheduler.runTaskTimer(plugin.owner(), () -> {
                    if (!active()) return;
                    long started = System.nanoTime();
                    try {
                        if (tick.getAsBoolean()) {
                            timer[0].cancel();
                            ready.run();
                        }
                    } catch (RuntimeException error) { fail(error); }
                    finally { recordMain(started); plugin.logSlow("読む", started); }
                }, 1L, 1L);
                tasks.add(timer[0]);
            }
        }
        <T> void think(Supplier<T> compute, Consumer<T> apply) {
            synchronized (WorkPipeline.this) {
                if (!active() || stopped) return;
                tasks.add(scheduler.runTaskAsynchronously(plugin.owner(), () -> {
                    CANCELLED.set(() -> !active());
                    try {
                        checkCancelled();
                        T result;
                        var current = measurement;
                        long started = System.nanoTime();
                        try { result = compute.get(); }
                        finally { if (current != null) current.async(System.nanoTime() - started); }
                        main(() -> apply.accept(result));
                    } catch (CancellationException ignored) {
                        // Cancellation leaves already completed transfers untouched.
                    } catch (RuntimeException error) { main(() -> fail(error)); }
                    finally { CANCELLED.remove(); }
                }));
            }
        }
        void main(Runnable action) {
            synchronized (WorkPipeline.this) {
                if (!active() || stopped) return;
                tasks.add(scheduler.runTask(plugin.owner(), () -> {
                    if (!active()) return;
                    long started = System.nanoTime();
                    try { action.run(); } catch (RuntimeException error) { fail(error); }
                    finally { recordMain(started); }
                }));
            }
        }
        void move(BooleanSupplier tick) {
            synchronized (WorkPipeline.this) {
                if (!active() || stopped) return;
                tasks.add(scheduler.runTaskTimer(plugin.owner(), () -> {
                    if (!active()) return;
                    long started = System.nanoTime();
                    try { if (tick.getAsBoolean()) cancel(); }
                    catch (RuntimeException error) { fail(error); }
                    finally { recordMain(started); plugin.logSlow("動かす", started); }
                }, 1L, 1L));
            }
        }
    }

    synchronized Operation start() {
        var operation = new Operation();
        if (stopped) operation.cancelled = true;
        else operations.add(operation);
        return operation;
    }
    synchronized Operation latest(UUID player) {
        forget(player);
        var operation = start();
        if (operation.active()) latest.put(player, operation);
        return operation;
    }
    synchronized void forget(UUID player) {
        var operation = latest.remove(player);
        if (operation != null) operation.cancel();
    }
    synchronized void stop() {
        stopped = true;
        for (var operation : Set.copyOf(operations)) operation.cancel();
        latest.clear();
    }
}
