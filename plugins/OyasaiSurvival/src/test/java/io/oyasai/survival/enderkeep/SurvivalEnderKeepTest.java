package io.oyasai.survival.enderkeep;

import org.bukkit.entity.Player;
import org.bukkit.event.player.AsyncPlayerPreLoginEvent;
import org.bukkit.event.player.PlayerJoinEvent;
import org.bukkit.event.player.PlayerQuitEvent;
import org.bukkit.inventory.Inventory;
import org.bukkit.inventory.ItemStack;
import org.junit.jupiter.api.*;
import org.junit.jupiter.api.io.TempDir;
import java.nio.file.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.logging.Logger;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class SurvivalEnderKeepTest {
    @TempDir Path directory;
    private final UUID playerId = UUID.randomUUID(), currentWorld = UUID.randomUUID();
    private final ExecutorService files = Executors.newSingleThreadExecutor();
    private SurvivalEnderKeep plugin;
    private PlayerStore store;
    private Player player;
    private Inventory chest;

    @BeforeEach void setup() throws Exception {
        plugin = mock(SurvivalEnderKeep.class, CALLS_REAL_METHODS);
        Logger logger = Logger.getAnonymousLogger();
        logger.setLevel(java.util.logging.Level.OFF);
        doReturn(logger).when(plugin).getLogger();
        store = new PlayerStore(directory);
        field("files", files);
        field("prepared", new ConcurrentHashMap<>());
        field("ready", new HashSet<>());
        field("store", store);
        field("world", currentWorld);
        player = mock(Player.class);
        chest = mock(Inventory.class);
        when(player.getUniqueId()).thenReturn(playerId);
        when(player.getEnderChest()).thenReturn(chest);
        when(chest.getSize()).thenReturn(27);
    }

    @AfterEach void finish() throws Exception {
        files.shutdown();
        assertTrue(files.awaitTermination(5, TimeUnit.SECONDS));
    }

    @Test void restoresOnceAndImmediatelyPersistsNewWorldWithOriginalPayload() throws Exception {
        byte[] payload = {1, 2, 3};
        store.write(playerId, new PlayerStore.Snapshot(UUID.randomUUID(), 7, payload));
        ItemStack[] items = new ItemStack[27];
        try (var api = mockStatic(ItemStack.class)) {
            api.when(() -> ItemStack.deserializeItemsFromBytes(payload)).thenReturn(items);
            login();
            files.submit(() -> {}).get();
            assertEquals(currentWorld, store.read(playerId).world());
            assertArrayEquals(payload, store.read(playerId).items());
            login();
            verify(chest, times(1)).setContents(any(ItemStack[].class));
            verify(player, times(1)).sendMessage(anyString());
        }
    }

    @Test void firstLoginDoesNotRestoreAndLogoutSavesCurrentContents() throws Exception {
        ItemStack[] contents = new ItemStack[27];
        byte[] payload = {4, 5};
        when(chest.getContents()).thenReturn(contents);
        try (var api = mockStatic(ItemStack.class)) {
            api.when(() -> ItemStack.serializeItemsAsBytes(contents)).thenReturn(payload);
            login();
            verify(chest, never()).setContents(any());
            assertNull(store.read(playerId));
            plugin.quit(new PlayerQuitEvent(player, (net.kyori.adventure.text.Component) null));
            files.submit(() -> {}).get();
            assertEquals(currentWorld, store.read(playerId).world());
            assertArrayEquals(payload, store.read(playerId).items());
        }
    }

    @Test void unreadableFileIsNotOverwrittenOnLogout() throws Exception {
        byte[] broken = {9, 8, 7};
        Path path = directory.resolve(playerId + ".dat");
        Files.write(path, broken);
        login();
        plugin.quit(new PlayerQuitEvent(player, (net.kyori.adventure.text.Component) null));
        files.submit(() -> {}).get();
        verify(chest, never()).setContents(any());
        verify(chest, never()).getContents();
        assertArrayEquals(broken, Files.readAllBytes(path));
    }

    @Test void invalidItemPayloadIsNotOverwrittenEvenInSameWorld() throws Exception {
        byte[] payload = {6};
        store.write(playerId, new PlayerStore.Snapshot(currentWorld, 0, payload));
        try (var api = mockStatic(ItemStack.class)) {
            api.when(() -> ItemStack.deserializeItemsFromBytes(payload)).thenThrow(new IllegalArgumentException("broken NBT"));
            login();
            plugin.quit(new PlayerQuitEvent(player, (net.kyori.adventure.text.Component) null));
            files.submit(() -> {}).get();
            verify(chest, never()).getContents();
            assertArrayEquals(payload, store.read(playerId).items());
        }
    }

    @Test void shutdownSavesOnlinePlayersAndWaitsForDiskWrite() throws Exception {
        ItemStack[] contents = new ItemStack[27];
        byte[] payload = {7, 8};
        when(chest.getContents()).thenReturn(contents);
        try (var api = mockStatic(ItemStack.class);
             var bukkit = mockStatic(org.bukkit.Bukkit.class)) {
            api.when(() -> ItemStack.serializeItemsAsBytes(contents)).thenReturn(payload);
            bukkit.when(org.bukkit.Bukkit::getOnlinePlayers).thenReturn(List.of(player));
            login();
            plugin.onDisable();
            assertEquals(currentWorld, store.read(playerId).world());
            assertArrayEquals(payload, store.read(playerId).items());
            assertTrue(files.isTerminated());
        }
    }

    private void login() {
        var event = mock(AsyncPlayerPreLoginEvent.class);
        when(event.getUniqueId()).thenReturn(playerId);
        when(event.getLoginResult()).thenReturn(AsyncPlayerPreLoginEvent.Result.ALLOWED);
        plugin.prepare(event);
        plugin.join(new PlayerJoinEvent(player, (net.kyori.adventure.text.Component) null));
    }

    private void field(String name, Object value) throws Exception {
        var field = SurvivalEnderKeep.class.getDeclaredField(name);
        field.setAccessible(true);
        field.set(plugin, value);
    }
}
