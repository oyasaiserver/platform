package io.oyasai.survival.pull;

import java.nio.file.Files;
import java.util.Arrays;
import java.util.List;
import org.bukkit.command.ConsoleCommandSender;
import org.bukkit.configuration.file.YamlConfiguration;
import org.bukkit.entity.Player;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.io.TempDir;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class PullBenchTest {
    @Test
    void setupRecipeIsDeterministicWithBroadPlainAndIndividualMixture() {
        var first = PullBench.samples(42, 384 * 27, false);
        assertArrayEquals(first, PullBench.samples(42, 384 * 27, false));
        assertFalse(Arrays.equals(first, PullBench.samples(43, 384 * 27, false)));
        long plain = Arrays.stream(first).filter(s -> s != null && s.variant() < 0).count();
        long individual = Arrays.stream(first).filter(s -> s != null && s.variant() >= 0).count();
        assertTrue(plain > first.length * .58 && plain < first.length * .62);
        assertTrue(individual > first.length * .015 && individual < first.length * .025);
        assertEquals(80, Arrays.stream(first).filter(s -> s != null && s.variant() < 0)
                .map(PullBench.Sample::material).distinct().count());
        assertEquals(54, Arrays.stream(PullBench.samples(42, 54, true)).filter(s -> s != null).count());
    }

    @Test
    void disabledCommandOnlySaysDisabledWithoutTouchingWarehouseOrWorld() {
        var plugin = mock(SurvivalPull.class);
        when(plugin.getConfig()).thenReturn(new YamlConfiguration());
        var manager = mock(WarehouseManager.class);
        var bench = new PullBench(plugin, manager);
        for (var sender : List.of(mock(ConsoleCommandSender.class), mock(Player.class))) {
            assertTrue(bench.command(sender, new String[] {"setup", "world", "0", "64", "0"}));
            verify(sender).sendMessage("無効です");
            verifyNoMoreInteractions(sender);
        }
        verifyNoInteractions(manager);
        verify(plugin, never()).getServer();
    }

    @Test
    void enabledCommandRejectsPlayers() {
        var plugin = mock(SurvivalPull.class);
        var config = new YamlConfiguration(); config.set("debug.bench", true);
        when(plugin.getConfig()).thenReturn(config);
        var player = mock(Player.class);
        new PullBench(plugin, mock(WarehouseManager.class)).command(player, new String[] {"clear"});
        verify(player).sendMessage("コンソールから実行してください。");
        verify(plugin, never()).getServer();
    }

    @Test
    void csvAppendsOneRowWithExactColumnsAndStableUnits(@TempDir java.nio.file.Path directory) throws Exception {
        var timing = new WorkPipeline.Measurement();
        timing.main(10, 1_000_000); timing.main(10, 2_000_000); timing.main(11, 4_000_000);
        timing.async(5_000_000);
        var row = PullBench.csv("2.5.1", "list", 1,
                new WarehouseContainers.Capacity(384, 10368, 6428), timing, 8, 96, 12345, 1048576, 2097152);
        var file = directory.resolve("list.csv");
        PullBench.append(file, row); PullBench.append(file, row);
        var lines = Files.readAllLines(file);
        assertEquals(3, lines.size());
        assertEquals("utc,version,scenario,iteration,containers,slots,used_slots,main_ms_total,main_ms_max_tick,ticks,async_ms,result_count,json_bytes,heap_used_mb_before,heap_used_mb_after", lines.getFirst());
        var values = lines.get(1).split(",");
        assertEquals(15, values.length);
        assertDoesNotThrow(() -> java.time.Instant.parse(values[0]));
        assertEquals("2.5.1", values[1]); assertEquals("list", values[2]);
        assertEquals(7, Double.parseDouble(values[7]));
        assertEquals(4, Double.parseDouble(values[8]));
        assertEquals("8", values[9]); assertEquals(5, Double.parseDouble(values[10]));
        assertEquals("96", values[11]); assertEquals("12345", values[12]);
        assertEquals(1, Double.parseDouble(values[13])); assertEquals(2, Double.parseDouble(values[14]));
    }
}
