package io.oyasai.survival.pull;

import java.nio.charset.StandardCharsets;
import java.util.List;
import java.util.Set;
import java.util.UUID;
import com.google.gson.JsonParser;
import org.bukkit.Material;
import org.bukkit.Server;
import org.bukkit.entity.Player;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class ClientCommunicationTest extends ItemStackTestSupport {
    @ParameterizedTest
    @ValueSource(strings = {"{}", "[]", "null", "{t:'list'}", "{\"t\":\"list\"} {}", "{\"t\":4}",
            "{\"t\":\"open\"}", "{\"t\":\"pull\",\"id\":\"stone\",\"n\":0}",
            "{\"t\":\"pull\",\"id\":\"stone\",\"n\":2305}", "{\"t\":\"pull\",\"id\":\"stone\",\"n\":1.5}",
            "{\"t\":\"pull\",\"id\":\"stone\",\"n\":\"1\"}", "{\"t\":\"pull\",\"id\":[],\"n\":1}",
            "{\"t\":\"pull\",\"id\":\"air\",\"n\":1}", "{\"t\":\"pull\",\"id\":\"water\",\"n\":1}",
            "{\"t\":\"pull\",\"id\":\"not_an_item\",\"n\":1}", "{\"t\":\"pull\",\"id\":\"stone\",\"n\":9999999999999}"})
    void rejectsInvalidMessages(String json) {
        try (var materials = mockStatic(Material.class, CALLS_REAL_METHODS)) {
            materials.when(() -> Material.matchMaterial(anyString())).thenReturn(mock(Material.class));
            assertThrows(IllegalArgumentException.class, () -> ClientCommunication.parse(json.getBytes(StandardCharsets.UTF_8)));
        }
    }

    @Test
    void acceptsListAndPullBoundsAndAllWithoutFramingBytes() {
        assertEquals("list", ClientCommunication.parse("{\"t\":\"list\"}".getBytes(StandardCharsets.UTF_8)).type());
        // Paper の Material.isItem() はサーバーレジストリを参照するため境界テストではそこだけ差し替える。
        try (var materials = mockStatic(Material.class, CALLS_REAL_METHODS)) {
            Material item = mock(Material.class);
            when(item.isItem()).thenReturn(true);
            materials.when(() -> Material.matchMaterial("minecraft:diamond")).thenReturn(item);
            for (int n : new int[] {-1, 1, 2304}) {
                var request = ClientCommunication.parse(("{\"t\":\"pull\",\"id\":\"minecraft:diamond\",\"n\":" + n + "}").getBytes(StandardCharsets.UTF_8));
                assertSame(item, request.material());
                assertEquals("", request.key());
                assertEquals(n == -1 ? Integer.MAX_VALUE : n, request.amount());
            }
        }
        assertThrows(IllegalArgumentException.class, () -> ClientCommunication.parse(new byte[] {(byte) 0xc3, 0x28}));
    }

    @ParameterizedTest
    @ValueSource(strings = {"null", "123", "[]", "{}", "\"short\"", "\"0123456789ABCDEf\"", "\"0123456789abcdef0\""})
    void rejectsMalformedIndividualKeys(String key) {
        try (var materials = mockStatic(Material.class, CALLS_REAL_METHODS)) {
            Material item = mock(Material.class);
            when(item.isItem()).thenReturn(true);
            materials.when(() -> Material.matchMaterial("stone")).thenReturn(item);
            byte[] message = ("{\"t\":\"pull\",\"id\":\"stone\",\"n\":1,\"k\":" + key + "}").getBytes(StandardCharsets.UTF_8);
            assertThrows(IllegalArgumentException.class, () -> ClientCommunication.parse(message));
        }
    }

    @Test
    void oldClientEmptyKeyAndIndividualPullSelectAndEchoExactlyTheRequestedVariant() {
        SurvivalPull plugin = mock(SurvivalPull.class);
        Server server = mock(Server.class);
        when(plugin.getServer()).thenReturn(server);
        Player player = mock(Player.class);
        when(player.getUniqueId()).thenReturn(UUID.randomUUID());
        Material material = mock(Material.class);
        when(material.isItem()).thenReturn(true);
        when(material.name()).thenReturn("STONE");
        when(material.getMaxStackSize()).thenReturn(64);
        when(material.getKey()).thenReturn(org.bukkit.NamespacedKey.minecraft("stone"));
        var source = InventoryTestSupport.inventory(InventoryTestSupport.item(material, 12, "plain"),
                InventoryTestSupport.item(material, 7, "enchanted"), InventoryTestSupport.item(material, 4, "named"));
        var target = InventoryTestSupport.inventory(null, null, null);
        var container = mock(org.bukkit.block.Barrel.class);
        when(container.getInventory()).thenReturn(source);
        when(container.getType()).thenReturn(Material.BARREL);
        var containers = List.<org.bukkit.block.Container>of(container);
        when(plugin.scopeName(player)).thenReturn("test");
        when(plugin.stock(player)).thenAnswer(c -> IndexTestSupport.summarize(containers));
        when(plugin.pull(eq(player), eq(material), anyString(), anyInt())).thenAnswer(c ->
                IndexTestSupport.collect(containers, target, material, c.getArgument(2), c.getArgument(3)));
        String individualKey = ItemVariant.key(source.getItem(1));
        AsyncTestSupport.immediateLists(plugin);
        var client = new ClientCommunication(plugin);
        try (var materials = mockStatic(Material.class, CALLS_REAL_METHODS)) {
            materials.when(() -> Material.matchMaterial("stone")).thenReturn(material);
            String[] keys = {null, "", individualKey};
            int[] amounts = {5, 0, 0};
            for (int i = 0; i < keys.length; i++) {
                when(server.getCurrentTick()).thenReturn(i);
                String key = keys[i] == null ? "" : ",\"k\":\"" + keys[i] + "\"";
                client.onPluginMessageReceived(ClientCommunication.CHANNEL, player,
                        ("{\"t\":\"pull\",\"id\":\"stone\",\"n\":" + amounts[i] + key + "}").getBytes(StandardCharsets.UTF_8));
            }
        }
        var data = org.mockito.ArgumentCaptor.forClass(byte[].class);
        verify(player, times(6)).sendPluginMessage(eq(plugin.owner()), eq(ClientCommunication.CHANNEL), data.capture());
        int[] moved = {5, 7, 7};
        for (int i = 0; i < 3; i++) {
            var reply = JsonParser.parseString(new String(data.getAllValues().get(i * 2), StandardCharsets.UTF_8)).getAsJsonObject();
            assertEquals("pulled", reply.get("t").getAsString());
            assertEquals(i == 2 ? individualKey : "", reply.get("k").getAsString());
            assertEquals(moved[i], reply.get("n").getAsInt());
        }
        assertNull(source.getItem(0));
        assertNull(source.getItem(1));
        assertEquals(4, source.getItem(2).getAmount());
        assertEquals(23, InventoryTestSupport.total(List.of(InventoryTestSupport.store(source), InventoryTestSupport.store(target))));
    }

    @Test
    void rateLimitIsPerPlayerPerTickAndPullSendsActualCountThenFreshList() {
        SurvivalPull plugin = mock(SurvivalPull.class);
        Server server = mock(Server.class);
        when(plugin.getServer()).thenReturn(server);
        Player player = mock(Player.class);
        when(player.getUniqueId()).thenReturn(UUID.randomUUID());
        when(player.getListeningPluginChannels()).thenReturn(Set.of(ClientCommunication.CHANNEL));
        when(plugin.scopeName(player)).thenReturn("倉庫: テスト");
        when(plugin.stock(player)).thenAnswer(c -> IndexTestSupport.summarize(List.of()));
        when(server.getCurrentTick()).thenReturn(12);
        AsyncTestSupport.immediateLists(plugin);
        ClientCommunication client = new ClientCommunication(plugin);
        byte[] request = "{\"t\":\"list\"}".getBytes(StandardCharsets.UTF_8);
        client.onPluginMessageReceived(ClientCommunication.CHANNEL, player, request);
        client.onPluginMessageReceived(ClientCommunication.CHANNEL, player, request);
        var data = org.mockito.ArgumentCaptor.forClass(byte[].class);
        verify(player).sendPluginMessage(eq(plugin.owner()), eq(ClientCommunication.CHANNEL), data.capture());
        var json = JsonParser.parseString(new String(data.getValue(), StandardCharsets.UTF_8)).getAsJsonObject();
        assertEquals("倉庫: テスト", json.get("scope").getAsString());
        assertTrue(json.getAsJsonArray("items").isEmpty());
        when(server.getCurrentTick()).thenReturn(13);
        client.onPluginMessageReceived(ClientCommunication.CHANNEL, player, request);
        verify(player, times(2)).sendPluginMessage(eq(plugin.owner()), eq(ClientCommunication.CHANNEL), any(byte[].class));
    }

    @Test
    void pullRepliesWithActualAmountThenUpdatedListAndTopThreeSources() {
        SurvivalPull plugin = mock(SurvivalPull.class);
        Server server = mock(Server.class); when(plugin.getServer()).thenReturn(server);
        Player player = mock(Player.class); when(player.getUniqueId()).thenReturn(UUID.randomUUID());
        Material material = mock(Material.class);
        when(material.isItem()).thenReturn(true); when(material.name()).thenReturn("DIAMOND");
        when(material.getKey()).thenReturn(org.bukkit.NamespacedKey.minecraft("diamond"));
        var containers = new java.util.ArrayList<org.bukkit.block.Container>();
        for (int i = 0; i < 4; i++) {
            var container = mock(org.bukkit.block.Barrel.class);
            when(container.getType()).thenReturn(Material.BARREL); when(container.getX()).thenReturn(i);
            when(container.getY()).thenReturn(64);
            var inv = InventoryTestSupport.inventory(InventoryTestSupport.item(material, (i + 1) * 10, "plain"));
            when(container.getInventory()).thenReturn(inv); containers.add(container);
        }
        when(plugin.scopeName(player)).thenReturn("倉庫: 通信");
        when(plugin.stock(player)).thenAnswer(c -> IndexTestSupport.summarize(containers));
        when(plugin.pull(player, material, "", 64)).thenAnswer(c -> {
            var target = InventoryTestSupport.inventory(InventoryTestSupport.item(material, 60, "plain"));
            return IndexTestSupport.collect(containers, target, material, 64);
        });
        try (var materials = mockStatic(Material.class, CALLS_REAL_METHODS)) {
            materials.when(() -> Material.matchMaterial("minecraft:diamond")).thenReturn(material);
            AsyncTestSupport.immediateLists(plugin);
            new ClientCommunication(plugin).onPluginMessageReceived(ClientCommunication.CHANNEL, player,
                    "{\"t\":\"pull\",\"id\":\"minecraft:diamond\",\"n\":64}".getBytes(StandardCharsets.UTF_8));
        }
        var data = org.mockito.ArgumentCaptor.forClass(byte[].class);
        verify(player, times(2)).sendPluginMessage(eq(plugin.owner()), eq(ClientCommunication.CHANNEL), data.capture());
        var pulled = JsonParser.parseString(new String(data.getAllValues().get(0), StandardCharsets.UTF_8)).getAsJsonObject();
        assertEquals("pulled", pulled.get("t").getAsString()); assertEquals(4, pulled.get("n").getAsInt());
        assertEquals("minecraft:diamond", pulled.get("id").getAsString());
        assertEquals("", pulled.get("k").getAsString());
        var list = JsonParser.parseString(new String(data.getAllValues().get(1), StandardCharsets.UTF_8)).getAsJsonObject();
        assertEquals("list", list.get("t").getAsString()); assertEquals("倉庫: 通信", list.get("scope").getAsString());
        var entry = list.getAsJsonArray("items").get(0).getAsJsonObject();
        assertEquals(96, entry.get("n").getAsInt());
        assertEquals("", entry.get("k").getAsString());
        assertFalse(entry.has("item"));
        var sources = entry.getAsJsonArray("src"); assertEquals(3, sources.size());
        assertEquals(3, sources.get(0).getAsJsonArray().get(0).getAsInt());
        assertEquals(40, sources.get(0).getAsJsonArray().get(3).getAsInt());
        assertEquals(30, sources.get(1).getAsJsonArray().get(3).getAsInt());
    }

    @Test
    void noWarehouseRepliesWithEmptyListAndZeroPulledWithoutReadingBlocks() throws Exception {
        var plugin = mock(SurvivalPull.class, CALLS_REAL_METHODS);
        doReturn(new org.bukkit.configuration.file.YamlConfiguration()).when(plugin).getConfig();
        var server = mock(Server.class); doReturn(server).when(plugin).getServer();
        var player = mock(Player.class); when(player.getUniqueId()).thenReturn(UUID.randomUUID());
        var world = mock(org.bukkit.World.class); when(player.getWorld()).thenReturn(world);
        var command = mock(org.bukkit.command.Command.class);
        doNothing().when(plugin).reloadConfig(); when(player.isOp()).thenReturn(true);
        plugin.getConfig().set("radius", 16);
        plugin.onCommand(player, command, "pull", new String[] {"reload"});
        AsyncTestSupport.immediateLists(plugin);
        var client = new ClientCommunication(plugin);
        client.onPluginMessageReceived(ClientCommunication.CHANNEL, player,
                "{\"t\":\"list\"}".getBytes(StandardCharsets.UTF_8));
        when(server.getCurrentTick()).thenReturn(1);
        var material = mock(Material.class); when(material.isItem()).thenReturn(true);
        when(material.getKey()).thenReturn(org.bukkit.NamespacedKey.minecraft("stone"));
        try (var materials = mockStatic(Material.class, CALLS_REAL_METHODS)) {
            materials.when(() -> Material.matchMaterial("minecraft:stone")).thenReturn(material);
            client.onPluginMessageReceived(ClientCommunication.CHANNEL, player,
                    "{\"t\":\"pull\",\"id\":\"minecraft:stone\",\"n\":5}".getBytes(StandardCharsets.UTF_8));
        }
        var bytes = org.mockito.ArgumentCaptor.forClass(byte[].class);
        verify(player, times(3)).sendPluginMessage(eq(plugin.owner()), eq(ClientCommunication.CHANNEL), bytes.capture());
        var replies = bytes.getAllValues().stream().map(b -> JsonParser.parseString(
                new String(b, StandardCharsets.UTF_8)).getAsJsonObject()).toList();
        for (int index : new int[] {0, 2}) {
            assertEquals("list", replies.get(index).get("t").getAsString());
            assertEquals("16マス以内に使える倉庫がありません", replies.get(index).get("scope").getAsString());
            assertTrue(replies.get(index).getAsJsonArray("items").isEmpty());
        }
        assertEquals("pulled", replies.get(1).get("t").getAsString());
        assertEquals(0, replies.get(1).get("n").getAsInt());
        verifyNoInteractions(world);
    }

    @Test
    void pullCommandUsesModOnlyWhenSubscribedAndGuiAlwaysOpensChest() throws Exception {
        SurvivalPull plugin = mock(SurvivalPull.class, CALLS_REAL_METHODS);
        Player player = mock(Player.class);
        PullTestSupport.nearbyWarehouse(plugin, player);
        var gui = mock(PullGui.class);
        var client = new ClientCommunication(plugin);
        for (var value : java.util.Map.of("gui", gui, "client", client).entrySet()) {
            var field = SurvivalPull.class.getDeclaredField(value.getKey()); field.setAccessible(true); field.set(plugin, value.getValue());
        }
        var command = mock(org.bukkit.command.Command.class);
        when(player.getListeningPluginChannels()).thenReturn(Set.of());
        plugin.onCommand(player, command, "pull", new String[0]);
        verify(gui).openList(player);
        when(player.getListeningPluginChannels()).thenReturn(Set.of(ClientCommunication.CHANNEL));
        plugin.onCommand(player, command, "pull", new String[0]);
        verify(gui).openList(player);
        var bytes = org.mockito.ArgumentCaptor.forClass(byte[].class);
        verify(player).sendPluginMessage(eq(plugin.owner()), eq(ClientCommunication.CHANNEL), bytes.capture());
        assertEquals("{\"t\":\"open\"}", new String(bytes.getValue(), StandardCharsets.UTF_8));
        plugin.onCommand(player, command, "pull", new String[] {"gui"});
        verify(gui, times(2)).openList(player);
    }
}
