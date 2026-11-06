package io.oyasai.survival.pull;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import java.util.concurrent.CopyOnWriteArrayList;
import java.util.concurrent.CountDownLatch;
import java.util.concurrent.Executors;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicBoolean;
import java.util.logging.Logger;
import org.bukkit.Server;
import org.bukkit.configuration.file.YamlConfiguration;
import org.bukkit.scheduler.BukkitScheduler;
import org.bukkit.scheduler.BukkitTask;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class WorkPipelineTest extends ItemStackTestSupport {
    final SurvivalPull plugin = mock(SurvivalPull.class);
    final BukkitScheduler scheduler = mock(BukkitScheduler.class);
    final List<Runnable> workers = new CopyOnWriteArrayList<>();
    final List<Runnable> main = new CopyOnWriteArrayList<>();
    final List<Runnable> ticks = new ArrayList<>();
    final List<BukkitTask> handles = new ArrayList<>();
    final WorkPipeline work;

    WorkPipelineTest() {
        Server server = mock(Server.class);
        when(plugin.getServer()).thenReturn(server); when(server.getScheduler()).thenReturn(scheduler);
        when(plugin.getConfig()).thenReturn(new YamlConfiguration());
        when(plugin.getLogger()).thenReturn(mock(Logger.class));
        doCallRealMethod().when(plugin).logSlow(anyString(), anyLong());
        when(scheduler.runTaskAsynchronously(eq(plugin.owner()), any(Runnable.class))).thenAnswer(c -> {
            workers.add(c.getArgument(1)); return handle();
        });
        when(scheduler.runTask(eq(plugin.owner()), any(Runnable.class))).thenAnswer(c -> {
            main.add(c.getArgument(1)); return handle();
        });
        when(scheduler.runTaskTimer(eq(plugin.owner()), any(Runnable.class), eq(1L), eq(1L))).thenAnswer(c -> {
            ticks.add(c.getArgument(1)); return handle();
        });
        work = new WorkPipeline(plugin);
    }
    BukkitTask handle() { var task = mock(BukkitTask.class); handles.add(task); return task; }

    @Test
    void measurementIncludesReadMoveCallbacksAndAsyncButExcludesQueueWait() {
        var measurement = work.beginMeasurement();
        var operation = work.start();
        operation.read(() -> true, () -> operation.think(() -> 1,
                result -> operation.move(() -> true)));
        ticks.getFirst().run();
        assertTrue(measurement.mainTotal() > 0);
        assertEquals(0, measurement.asyncTotal());
        workers.removeFirst().run();
        assertTrue(measurement.asyncTotal() > 0);
        main.removeFirst().run();
        when(plugin.getServer().getCurrentTick()).thenReturn(1);
        ticks.getLast().run();
        assertTrue(measurement.maxTick() > 0);
        assertTrue(measurement.mainTotal() > measurement.maxTick());
        work.endMeasurement();
        long total = measurement.mainTotal();
        var later = work.start(); later.main(() -> { }); main.removeFirst().run();
        assertEquals(total, measurement.mainTotal());
    }

    @Test
    void latestRequestDiscardsQueuedOldResultAndSkipsSupersededComputation() {
        UUID player = UUID.randomUUID();
        var applied = new ArrayList<String>();
        var first = work.latest(player);
        first.think(() -> "old", applied::add);
        workers.removeFirst().run();
        var second = work.latest(player);
        second.think(() -> "new", applied::add);
        workers.removeFirst().run();
        main.removeFirst().run();
        assertTrue(applied.isEmpty());
        main.removeFirst().run();
        assertEquals(List.of("new"), applied);
        var stale = work.latest(player);
        AtomicBoolean computed = new AtomicBoolean();
        stale.think(() -> { computed.set(true); return "stale"; }, applied::add);
        work.latest(player);
        workers.removeFirst().run();
        assertFalse(computed.get()); assertTrue(main.isEmpty());
    }

    @Test
    void stopDuringWorkerPreventsSchedulingAnyCallbackAndCooperativelyStopsWork() throws Exception {
        var operation = work.start();
        var entered = new CountDownLatch(1); var release = new CountDownLatch(1);
        var passedCancellation = new AtomicBoolean();
        operation.think(() -> {
            entered.countDown();
            try { assertTrue(release.await(5, TimeUnit.SECONDS)); }
            catch (InterruptedException error) { throw new AssertionError(error); }
            WorkPipeline.checkCancelled();
            passedCancellation.set(true);
            return 1;
        }, result -> fail("unloaded plugin callback"));
        try (var executor = Executors.newSingleThreadExecutor()) {
            var future = executor.submit(workers.removeFirst());
            try { assertTrue(entered.await(5, TimeUnit.SECONDS)); work.stop(); }
            finally { release.countDown(); }
            future.get(5, TimeUnit.SECONDS);
        }
        assertFalse(passedCancellation.get()); assertTrue(main.isEmpty());
        handles.forEach(task -> verify(task).cancel());
        assertFalse(work.start().active());
    }

    @Test
    void stopCancelsReadMoveAndQueuedCallbacksWithoutFurtherMutation() {
        var operation = work.start();
        operation.read(() -> { fail("cancelled snapshot"); return true; }, () -> fail("plan"));
        AtomicBoolean moved = new AtomicBoolean();
        operation.move(() -> { moved.set(true); return false; });
        operation.main(() -> fail("queued callback"));
        work.stop();
        ticks.forEach(Runnable::run); main.forEach(Runnable::run);
        assertFalse(moved.get()); assertTrue(workers.isEmpty());
        handles.forEach(task -> verify(task).cancel());
    }

    @Test
    void readAndMoveTicksLogWarningsAtConfiguredThresholdAndErrorsCancelTheOperation() {
        plugin.getConfig().set("performance.log-slow-ms", -1);
        var operation = work.start();
        operation.read(() -> false, () -> fail("unfinished reader"));
        operation.move(() -> false);
        ticks.forEach(Runnable::run);
        verify(plugin.getLogger()).warning(contains("読む (1 tick)"));
        verify(plugin.getLogger()).warning(contains("動かす (1 tick)"));
        var broken = work.start();
        broken.read(() -> { throw new IllegalStateException("broken"); }, () -> fail("broken reader"));
        ticks.getLast().run();
        assertFalse(broken.active());
        verify(plugin.getLogger()).severe(contains("broken"));
    }
    @Test
    void listPipelineAggregatesAndBuildsJsonOffThreadAndOnlyDeliversNewestResult() throws Exception {
        var workField = SurvivalPull.class.getDeclaredField("work");
        workField.setAccessible(true); workField.set(plugin, work);
        var player = mock(org.bukkit.entity.Player.class);
        var world = mock(org.bukkit.World.class);
        var location = new org.bukkit.Location(world, 0, 64, 0);
        when(player.getUniqueId()).thenReturn(UUID.randomUUID()); when(player.isOnline()).thenReturn(true);
        when(player.getWorld()).thenReturn(world); when(player.getLocation()).thenReturn(location);
        when(plugin.scopeName(player)).thenReturn("test"); when(plugin.snapshotBudget()).thenReturn(64);
        doCallRealMethod().when(plugin).requestList(any(), any(), anyString(), any(java.util.function.Function.class), any(java.util.function.Consumer.class));
        var warehouse = PullTestSupport.nearbyWarehouse(plugin, player);
        var index = mock(WarehouseIndex.class); when(index.ready(warehouse)).thenReturn(true);
        var indexField = SurvivalPull.class.getDeclaredField("index"); indexField.setAccessible(true); indexField.set(plugin, index);
        var first = new WarehouseSnapshot(1, List.of(new SurvivalPull.Stock(org.bukkit.Material.STONE, 10, List.of())), new WarehouseContainers.Capacity(1, 1, 1), 1, 1);
        var second = new WarehouseSnapshot(2, List.of(new SurvivalPull.Stock(org.bukkit.Material.DIRT, 20, List.of())), new WarehouseContainers.Capacity(1, 1, 1), 1, 1);
        when(index.snapshot(warehouse)).thenReturn(first, second);
        var delivered = new ArrayList<byte[]>();
        try (var executor = Executors.newSingleThreadExecutor()) {
            for (int request = 0; request < 2; request++) {
                plugin.requestList(player, null, "", result -> ClientCommunication.listBytes(result.scope(), result.stock()), delivered::add);
                for (int i = 0; i < 10 && workers.isEmpty(); i++) ticks.getLast().run();
                assertEquals(1, workers.size());
                clearInvocations(player, world, index);
                Runnable worker = workers.removeFirst();
                executor.submit(() -> {
                    try (var bukkit = mockStatic(org.bukkit.Bukkit.class)) {
                        worker.run(); bukkit.verifyNoInteractions();
                    }
                }).get(5, TimeUnit.SECONDS);
                verifyNoInteractions(player, world, index);
            }
            assertTrue(delivered.isEmpty());
            main.removeFirst().run(); assertTrue(delivered.isEmpty());
            main.removeFirst().run(); assertEquals(1, delivered.size());
            String json = new String(delivered.getFirst(), java.nio.charset.StandardCharsets.UTF_8);
            assertTrue(json.contains("minecraft:dirt")); assertTrue(json.contains("20"));
            assertFalse(json.contains("minecraft:stone"));
        }
    }

    @Test
    void disableStopsPipelineBeforeClosingInventoriesAndRejectsNewWork() throws Exception {
        var gui = mock(PullGui.class);
        for (var entry : java.util.Map.of("work", work, "gui", gui).entrySet()) {
            var field = SurvivalPull.class.getDeclaredField(entry.getKey());
            field.setAccessible(true); field.set(plugin, entry.getValue());
        }
        when(plugin.getServer().getMessenger()).thenReturn(mock(org.bukkit.plugin.messaging.Messenger.class));
        doCallRealMethod().when(plugin).onDisable();
        doAnswer(c -> { assertFalse(work.start().active()); return null; }).when(gui).closeAll();
        work.start().think(() -> "planned", result -> fail("disabled callback"));
        plugin.onDisable();
        workers.forEach(Runnable::run);
        assertTrue(main.isEmpty()); verify(gui).closeAll();
        handles.forEach(task -> verify(task).cancel());
    }
}
