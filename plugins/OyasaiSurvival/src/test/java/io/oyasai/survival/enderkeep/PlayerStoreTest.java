package io.oyasai.survival.enderkeep;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.io.TempDir;
import java.nio.file.Files;
import java.nio.file.Path;
import java.io.IOException;
import java.util.UUID;
import static org.junit.jupiter.api.Assertions.*;

class PlayerStoreTest {
    @TempDir Path directory;

    @Test void roundTripsAndAtomicallyReplacesSnapshot() throws Exception {
        PlayerStore store = new PlayerStore(directory);
        UUID player = UUID.randomUUID(), world = UUID.randomUUID();
        assertNull(store.read(player));
        store.write(player, new PlayerStore.Snapshot(world, 3, new byte[]{1, 2, 3}));
        assertEquals(world, store.read(player).world());
        assertEquals(3, store.read(player).count());
        assertArrayEquals(new byte[]{1, 2, 3}, store.read(player).items());
        UUID next = UUID.randomUUID();
        store.write(player, new PlayerStore.Snapshot(next, 0, new byte[]{4}));
        assertEquals(next, store.read(player).world());
        try (var files = Files.list(directory)) { assertEquals(1, files.count()); }
    }

    @Test void rejectsCorruptionAndRetainsOriginalFile() throws Exception {
        PlayerStore store = new PlayerStore(directory);
        UUID player = UUID.randomUUID();
        store.write(player, new PlayerStore.Snapshot(UUID.randomUUID(), 0, new byte[]{1}));
        Path file = directory.resolve(player + ".dat");
        byte[] bytes = Files.readAllBytes(file);
        bytes[10] ^= 1;
        Files.write(file, bytes);
        assertThrows(IOException.class, () -> store.read(player));
        assertArrayEquals(bytes, Files.readAllBytes(file));
        Files.write(file, new byte[]{1, 2});
        assertThrows(IOException.class, () -> store.read(player));
        assertTrue(Files.exists(file));
    }
}
