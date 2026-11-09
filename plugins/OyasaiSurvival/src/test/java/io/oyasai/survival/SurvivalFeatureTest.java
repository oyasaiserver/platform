package io.oyasai.survival;

import java.nio.file.Files;
import java.nio.file.Path;
import java.util.logging.Logger;
import org.bukkit.Server;
import org.bukkit.command.PluginCommand;
import org.bukkit.event.Listener;
import org.bukkit.plugin.PluginManager;
import org.bukkit.plugin.java.JavaPlugin;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.io.TempDir;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class SurvivalFeatureTest {
    @TempDir Path plugins;
    private final JavaPlugin owner = mock(JavaPlugin.class);
    private final Server server = mock(Server.class);
    private final PluginManager manager = mock(PluginManager.class);
    private final PluginCommand command = mock(PluginCommand.class);

    @BeforeEach void setup() {
        when(owner.getDataFolder()).thenReturn(plugins.resolve("OyasaiSurvival").toFile());
        when(owner.getServer()).thenReturn(server);
        when(owner.getLogger()).thenReturn(mock(Logger.class));
        when(owner.isEnabled()).thenReturn(true);
        when(server.getPluginManager()).thenReturn(manager);
        when(owner.getCommand("pull")).thenReturn(command);
        when(owner.getResource(anyString())).thenAnswer(call ->
                getClass().getResourceAsStream("/" + call.getArgument(0)));
    }

    @Test void startupFailureCleansUpAndOtherFeaturesStillRun() {
        var broken = new TestFeature(owner, "pull", "SurvivalPull", "pull");
        broken.failEnable = true;
        var healthy = new TestFeature(owner, "harvest", "SurvivalHarvest");

        assertDoesNotThrow(broken::start);
        assertDoesNotThrow(healthy::start);
        assertFalse(broken.isEnabled());
        assertEquals(1, broken.stops);
        assertTrue(healthy.isEnabled());
        verify(manager, never()).disablePlugin(any());
        verify(manager).registerEvents(healthy.listener, owner);
        var executors = org.mockito.ArgumentCaptor.forClass(org.bukkit.command.CommandExecutor.class);
        verify(command, times(2)).setExecutor(executors.capture());
        assertSame(broken, executors.getAllValues().getFirst());
        assertNotSame(broken, executors.getValue());
        healthy.stop();
        broken.stop();
        assertEquals(1, healthy.stops);
        assertEquals(1, broken.stops);
    }

    @Test void shutdownFailureDoesNotPreventOtherFeatureShutdown() {
        var broken = new TestFeature(owner, "harvest", "SurvivalHarvest");
        var healthy = new TestFeature(owner, "spawnlimit", "SurvivalSpawnLimit");
        broken.failDisable = true;
        broken.start();
        healthy.start();
        assertDoesNotThrow(broken::stop);
        assertDoesNotThrow(healthy::stop);
        assertFalse(broken.isEnabled());
        assertFalse(healthy.isEnabled());
        assertEquals(1, healthy.stops);
    }

    @Test void migrationFailureDisablesOnlyThatFeature() throws Exception {
        Files.writeString(plugins.resolve("SurvivalPull"), "not a directory");
        var broken = new TestFeature(owner, "pull", "SurvivalPull", "pull");
        var healthy = new TestFeature(owner, "harvest", "SurvivalHarvest");
        broken.start();
        healthy.start();
        assertFalse(broken.isEnabled());
        assertTrue(healthy.isEnabled());
        assertEquals(0, broken.starts);
        assertFalse(Files.exists(plugins.resolve("OyasaiSurvival/pull")));
        healthy.stop();
    }

    @Test void migratedConfigIsPreservedAndDefaultsAndSavesStayInFeatureFolder() throws Exception {
        Path source = Files.createDirectory(plugins.resolve("SurvivalPull"));
        Files.writeString(source.resolve("config.yml"), "radius: 7\n");
        var pull = new TestFeature(owner, "pull", "SurvivalPull");
        pull.start();
        pull.saveDefaultConfig();
        assertEquals(7, pull.getConfig().getInt("radius"));
        assertEquals(32, pull.getConfig().getInt("max-radius"));
        pull.getConfig().set("radius", 9);
        pull.saveConfig();
        pull.reloadConfig();
        assertEquals(9, pull.getConfig().getInt("radius"));
        assertEquals("radius: 7\n", Files.readString(source.resolve("config.yml")));
        assertFalse(Files.exists(plugins.resolve("OyasaiSurvival/config.yml")));
        pull.stop();
    }

    @Test void missingConfigIsCopiedFromFeatureResources() {
        var feature = new TestFeature(owner, "enderkeep", "SurvivalEnderKeep");
        feature.saveDefaultConfig();
        assertEquals(300, feature.getConfig().getLong("save-interval-seconds"));
        assertTrue(Files.exists(plugins.resolve("OyasaiSurvival/enderkeep/config.yml")));
    }

    private static final class TestFeature extends SurvivalFeature {
        final Listener listener = new Listener() {};
        boolean failEnable, failDisable;
        int starts, stops;

        TestFeature(JavaPlugin owner, String folder, String legacyName, String... commands) {
            super(owner, folder, legacyName, commands);
        }

        @Override public void onEnable() {
            starts++;
            registerEvents(listener);
            if (failEnable) throw new IllegalStateException("startup failure");
        }

        @Override public void onDisable() {
            stops++;
            if (failDisable) throw new IllegalStateException("shutdown failure");
        }
    }
}
