package io.oyasai.survival.spawnlimit;

import java.util.List;
import java.util.logging.Logger;
import org.bukkit.Server;
import org.bukkit.World;
import org.bukkit.command.Command;
import org.bukkit.command.CommandSender;
import org.bukkit.configuration.file.YamlConfiguration;
import org.bukkit.entity.SpawnCategory;
import org.bukkit.event.world.WorldLoadEvent;
import org.bukkit.plugin.PluginManager;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class SurvivalSpawnLimitTest {
    private final SurvivalSpawnLimit plugin = mock(SurvivalSpawnLimit.class, CALLS_REAL_METHODS);
    private final Server server = mock(Server.class);
    private final World first = mock(World.class);
    private final World second = mock(World.class);
    private final CommandSender sender = mock(CommandSender.class);
    private final Command command = mock(Command.class);
    private final YamlConfiguration config = new YamlConfiguration();

    @BeforeEach
    void setUp() {
        doReturn(server).when(plugin).getServer();
        doReturn(config).when(plugin).getConfig();
        doReturn(Logger.getAnonymousLogger()).when(plugin).getLogger();
        doNothing().when(plugin).saveConfig();
        doNothing().when(plugin).saveDefaultConfig();
        doNothing().when(plugin).registerEvents(any());
        when(server.getWorlds()).thenReturn(List.of(first, second));
        when(server.getPluginManager()).thenReturn(mock(PluginManager.class));
        when(sender.hasPermission("survivalspawnlimit.admin")).thenReturn(true);
    }

    @ParameterizedTest
    @CsvSource({"monster,300,MONSTER", "animal,0,ANIMAL", "ambient,2147483647,AMBIENT",
            "water_animal,5,WATER_ANIMAL", "water_ambient,6,WATER_AMBIENT",
            "water_underground_creature,7,WATER_UNDERGROUND_CREATURE", "axolotl,8,AXOLOTL"})
    void appliesAndSavesValidLimits(String name, int limit, SpawnCategory category) {
        assertTrue(plugin.onCommand(sender, command, "sl", new String[]{name, "" + limit}));
        verify(first).setSpawnLimit(category, limit);
        verify(second).setSpawnLimit(category, limit);
        assertEquals(limit, config.getInt(name));
        verify(plugin).saveConfig();
    }

    @Test
    void rejectsInvalidInputWithoutMutatingWorldsOrConfig() {
        for (String[] args : List.of(new String[]{"monster"}, new String[]{"monster", "1", "extra"},
                new String[]{"misc", "1"}, new String[]{"MONSTER", "1"},
                new String[]{"unknown", "1"}, new String[]{"monster", "-1"},
                new String[]{"monster", "2147483648"}, new String[]{"monster", "1.5"},
                new String[]{"monster", "abc"})) {
            assertFalse(plugin.onCommand(sender, command, "spawnlimit", args));
        }
        verifyNoInteractions(first, second);
        assertTrue(config.getKeys(false).isEmpty());
        verify(plugin, never()).saveConfig();
    }

    @Test
    void appliesOnlyValidSavedCategoriesAtStartupAndWorldLoad() {
        config.set("monster", 300);
        config.set("animal", 0);
        config.set("ambient", -1);
        config.set("axolotl", "5");
        config.set("water_animal", 1.5);
        config.set("water_ambient", 2147483648L);
        config.set("misc", 1);
        plugin.onEnable();
        World loaded = mock(World.class);
        plugin.onWorldLoad(new WorldLoadEvent(loaded));
        for (World world : List.of(first, second, loaded)) {
            verify(world).setSpawnLimit(SpawnCategory.MONSTER, 300);
            verify(world).setSpawnLimit(SpawnCategory.ANIMAL, 0);
            verifyNoMoreInteractions(world);
        }
    }

    @Test
    void displaysActualValuesForEveryWorldAndCategory() {
        when(first.getName()).thenReturn("world");
        when(second.getName()).thenReturn("world_nether");
        when(first.getSpawnLimit(SpawnCategory.MONSTER)).thenReturn(300);
        assertTrue(plugin.onCommand(sender, command, "sl", new String[0]));
        verify(sender).sendMessage("[world]");
        verify(sender).sendMessage("[world_nether]");
        verify(sender).sendMessage("monster: 300");
        for (World world : List.of(first, second)) {
            for (SpawnCategory category : SpawnCategory.values()) {
                if (category != SpawnCategory.MISC) {
                    verify(world).getSpawnLimit(category);
                }
            }
            verify(world, never()).getSpawnLimit(SpawnCategory.MISC);
        }
    }

    @Test
    void completesCategoriesAndChecksPermission() {
        assertEquals(7, plugin.onTabComplete(sender, command, "sl", new String[]{""}).size());
        assertEquals(List.of("monster"), plugin.onTabComplete(sender, command, "sl", new String[]{"mo"}));
        assertTrue(plugin.onTabComplete(sender, command, "sl", new String[]{"monster", ""}).isEmpty());
        when(sender.hasPermission("survivalspawnlimit.admin")).thenReturn(false);
        assertTrue(plugin.onTabComplete(sender, command, "sl", new String[]{""}).isEmpty());
        assertTrue(plugin.onCommand(sender, command, "sl", new String[]{"monster", "300"}));
        verifyNoInteractions(first, second);
        verify(plugin, never()).saveConfig();
    }
    @ParameterizedTest
    @CsvSource({"view,2", "view,32", "simulation,2", "simulation,32", "sim,10"})
    void appliesAndSavesDistances(String name, int distance) {
        when(command.getName()).thenReturn("distance");
        assertTrue(plugin.onCommand(sender, command, "distance", new String[]{name, "" + distance}));
        for (World world : List.of(first, second)) {
            if (name.equals("view")) {
                verify(world).setViewDistance(distance);
            } else {
                verify(world).setSimulationDistance(distance);
            }
            verifyNoMoreInteractions(world);
        }
        assertEquals(distance, config.getInt("distance." + (name.equals("sim") ? "simulation" : name)));
        verify(plugin).saveConfig();
    }

    @Test
    void rejectsInvalidDistancesWithoutChanges() {
        when(command.getName()).thenReturn("distance");
        for (String[] args : List.of(new String[]{"view"}, new String[]{"view", "10", "extra"},
                new String[]{"other", "10"}, new String[]{"view", "1"}, new String[]{"view", "33"},
                new String[]{"simulation", "1"}, new String[]{"simulation", "33"},
                new String[]{"sim", "-1"}, new String[]{"view", "2147483648"},
                new String[]{"view", "1.5"}, new String[]{"view", "abc"})) {
            assertFalse(plugin.onCommand(sender, command, "distance", args));
        }
        verifyNoInteractions(first, second);
        assertTrue(config.getKeys(false).isEmpty());
        verify(plugin, never()).saveConfig();
    }

    @Test
    void restoresDistancesAtStartupAndWorldLoad() {
        config.set("distance.view", 12);
        config.set("distance.simulation", 8);
        plugin.onEnable();
        World loaded = mock(World.class);
        plugin.onWorldLoad(new WorldLoadEvent(loaded));
        for (World world : List.of(first, second, loaded)) {
            verify(world).setViewDistance(12);
            verify(world).setSimulationDistance(8);
            verifyNoMoreInteractions(world);
        }
    }

    @Test
    void ignoresInvalidSavedDistances() {
        for (Object value : List.of(1, 33, "10", 1.5, 2147483648L)) {
            config.set("distance.view", value);
            config.set("distance.simulation", value);
            plugin.onEnable();
            plugin.onWorldLoad(new WorldLoadEvent(first));
        }
        verifyNoInteractions(first, second);
    }

    @Test
    void displaysActualDistancesForEveryWorld() {
        when(command.getName()).thenReturn("distance");
        when(first.getName()).thenReturn("world");
        when(second.getName()).thenReturn("world_nether");
        when(first.getViewDistance()).thenReturn(12);
        when(first.getSimulationDistance()).thenReturn(8);
        when(second.getViewDistance()).thenReturn(6);
        when(second.getSimulationDistance()).thenReturn(4);
        assertTrue(plugin.onCommand(sender, command, "distance", new String[0]));
        verify(sender).sendMessage("[world] view: 12, simulation: 8");
        verify(sender).sendMessage("[world_nether] view: 6, simulation: 4");
        verify(plugin, never()).saveConfig();
    }

    @Test
    void completesDistancesAndChecksPermission() {
        when(command.getName()).thenReturn("distance");
        assertEquals(List.of("view", "simulation"),
                plugin.onTabComplete(sender, command, "distance", new String[]{""}));
        assertEquals(List.of("simulation"),
                plugin.onTabComplete(sender, command, "distance", new String[]{"s"}));
        assertTrue(plugin.onTabComplete(sender, command, "distance", new String[]{"view", ""}).isEmpty());
        when(sender.hasPermission("survivalspawnlimit.admin")).thenReturn(false);
        assertTrue(plugin.onTabComplete(sender, command, "distance", new String[]{""}).isEmpty());
        assertTrue(plugin.onCommand(sender, command, "distance", new String[]{"view", "10"}));
        verifyNoInteractions(first, second);
        verify(plugin, never()).saveConfig();
    }

}
