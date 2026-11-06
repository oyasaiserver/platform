package io.oyasai.survival;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.io.TempDir;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;
import static org.junit.jupiter.api.Assertions.*;

class LegacyDataMigrationTest {
    @TempDir Path plugins;

    @ParameterizedTest
    @CsvSource({"SurvivalHarvest,harvest", "SurvivalPull,pull",
            "SurvivalSpawnLimit,spawnlimit", "SurvivalEnderKeep,enderkeep"})
    void copiesAllDataAndRetainsOriginals(String legacyName, String folder) throws Exception {
        Path source = plugins.resolve(legacyName);
        Files.createDirectories(source.resolve("nested/empty"));
        Files.writeString(source.resolve("config.yml"), "custom: true\n");
        byte[] contents = {0, 1, -1, 42};
        Files.write(source.resolve("nested/player.dat"), contents);
        Path target = plugins.resolve("OyasaiSurvival").resolve(folder);

        assertTrue(LegacyDataMigration.copy(source, target));
        assertEquals("custom: true\n", Files.readString(target.resolve("config.yml")));
        assertArrayEquals(contents, Files.readAllBytes(target.resolve("nested/player.dat")));
        assertTrue(Files.isDirectory(target.resolve("nested/empty")));
        assertArrayEquals(contents, Files.readAllBytes(source.resolve("nested/player.dat")));
        assertEquals("custom: true\n", Files.readString(source.resolve("config.yml")));

        Files.writeString(target.resolve("config.yml"), "custom: updated\n");
        Files.writeString(source.resolve("extra.yml"), "must not be recopied");
        assertFalse(LegacyDataMigration.copy(source, target));
        assertEquals("custom: updated\n", Files.readString(target.resolve("config.yml")));
        assertFalse(Files.exists(target.resolve("extra.yml")));
    }

    @Test void missingSourceDoesNotCreateTarget() throws Exception {
        Path target = plugins.resolve("OyasaiSurvival/pull");
        assertFalse(LegacyDataMigration.copy(plugins.resolve("SurvivalPull"), target));
        assertFalse(Files.exists(target));
    }

    @Test void existingEmptyTargetIsNotMigrated() throws Exception {
        Path source = Files.createDirectory(plugins.resolve("SurvivalPull"));
        Files.writeString(source.resolve("config.yml"), "old");
        Path target = Files.createDirectories(plugins.resolve("OyasaiSurvival/pull"));
        assertFalse(LegacyDataMigration.copy(source, target));
        assertFalse(Files.exists(target.resolve("config.yml")));
    }

    @Test void failedCopyNeverPublishesPartialDataAndCanBeRetried() throws Exception {
        Path source = Files.createDirectory(plugins.resolve("SurvivalEnderKeep"));
        Files.writeString(source.resolve("player.dat"), "original");
        Path link = Files.createSymbolicLink(source.resolve("link"), source.resolve("player.dat"));
        Path target = plugins.resolve("OyasaiSurvival/enderkeep");

        assertThrows(IOException.class, () -> LegacyDataMigration.copy(source, target));
        assertFalse(Files.exists(target));
        assertEquals("original", Files.readString(source.resolve("player.dat")));
        assertTrue(Files.isSymbolicLink(link));
        try (var remaining = Files.list(target.getParent())) {
            assertEquals(0, remaining.count());
        }
        Files.delete(link);
        assertTrue(LegacyDataMigration.copy(source, target));
        assertEquals("original", Files.readString(target.resolve("player.dat")));
    }
}
