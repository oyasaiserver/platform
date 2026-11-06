package io.oyasai.survival.pull;

import com.google.gson.JsonParser;
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.util.Base64;
import java.util.HexFormat;
import java.util.List;
import java.util.Map;
import java.util.concurrent.CompletableFuture;
import org.bukkit.Material;
import org.bukkit.block.Barrel;
import org.bukkit.enchantments.Enchantment;
import org.bukkit.inventory.ItemStack;
import org.bukkit.inventory.meta.EnchantmentStorageMeta;
import org.junit.jupiter.api.Test;
import static io.oyasai.survival.pull.InventoryTestSupport.*;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class ItemVariantTest extends ItemStackTestSupport {
    @Test
    void snapshotSeparatesPlainAndDifferentContentsButCombinesIdenticalContents() throws Exception {
        var source = store(inventory(item(Material.STONE, 12, "plain"),
                item(Material.STONE, 3, "enchanted"), item(Material.STONE, 7, "enchanted"),
                item(Material.STONE, 4, "named")));
        var fixture = new IndexTestSupport(); fixture.add(1, source.parts.getFirst().inventory()); fixture.load();
        var snapshot = fixture.index.snapshot(fixture.wh);
        var variant = snapshot.stock().get(1).variant();
        byte[] bytes = "STONE:enchanted:1".getBytes(StandardCharsets.UTF_8);
        String expectedKey = HexFormat.of().formatHex(MessageDigest.getInstance("SHA-256").digest(bytes)).substring(0, 16);
        assertEquals(expectedKey, variant.key());
        assertEquals(Base64.getEncoder().encodeToString(bytes), variant.base64());
        assertEquals(1, variant.icon().getAmount());
        clearInvocations(source.parts.getFirst().inventory());
        var stock = CompletableFuture.supplyAsync(snapshot::summarize).get();
        assertEquals(List.of(12L, 10L, 4L), stock.stream().map(SurvivalPull.Stock::amount).toList());
        assertEquals("", stock.getFirst().key());
        assertEquals(expectedKey, stock.get(1).key());
        assertEquals(26, stock.stream().mapToLong(SurvivalPull.Stock::amount).sum());
        var json = CompletableFuture.supplyAsync(() -> ClientCommunication.listBytes("test", stock)).get();
        var rows = JsonParser.parseString(new String(json, StandardCharsets.UTF_8)).getAsJsonObject().getAsJsonArray("items");
        assertFalse(rows.get(0).getAsJsonObject().has("item"));
        assertEquals(expectedKey, rows.get(1).getAsJsonObject().get("k").getAsString());
        assertArrayEquals(bytes, Base64.getDecoder().decode(rows.get(1).getAsJsonObject().get("item").getAsString()));
        assertNotEquals(stock.get(1).key(), stock.get(2).key());
    }

    @Test
    void keySelectsOnlyMatchingContentsAndEmptyKeyOnlyPlainWithConservation() {
        var original = inventory(item(Material.STONE, 12, "plain"), item(Material.STONE, 3, "enchanted"),
                item(Material.STONE, 7, "enchanted"), item(Material.STONE, 4, "named"));
        var container = mock(Barrel.class);
        when(container.getInventory()).thenReturn(original);
        when(container.getType()).thenReturn(Material.BARREL);
        var carried = inventory(item(Material.STONE, 60, "enchanted"), null, null);
        String key = ItemVariant.key(original.getItem(1));
        var selected = IndexTestSupport.collect(List.of(container), carried, Material.STONE, key, 8);
        assertEquals(8, selected.amount());
        assertEquals(12, original.getItem(0).getAmount());
        assertNull(original.getItem(1));
        assertEquals(2, original.getItem(2).getAmount());
        assertEquals(4, original.getItem(3).getAmount());
        assertEquals(86, total(List.of(store(original), store(carried))));
        assertEquals(12, IndexTestSupport.collect(List.of(container), carried, Material.STONE, "", 64).amount());
        assertNull(original.getItem(0));
        assertEquals(2, original.getItem(2).getAmount());
        assertEquals(4, original.getItem(3).getAmount());
        assertEquals(86, total(List.of(store(original), store(carried))));
        assertFalse(IndexTestSupport.collect(List.of(container), carried, Material.STONE, "", 64).found());
        assertFalse(IndexTestSupport.collect(List.of(container), carried, Material.STONE, "0123456789abcdef", 64).found());
    }

    @Test
    void keyedPullWithFullInventoryLeavesContentsAndCountUntouched() {
        var original = inventory(item(Material.STONE, 7, "enchanted"));
        var container = mock(Barrel.class);
        when(container.getInventory()).thenReturn(original);
        var result = IndexTestSupport.collect(List.of(container), inventory(item(Material.STONE, 64, "other")),
                Material.STONE, ItemVariant.key(original.getItem(0)), 7);
        assertTrue(result.found());
        assertEquals(0, result.amount());
        assertEquals(7, original.getItem(0).getAmount());
    }

    @Test
    void itemAndHandCommandsOnlyCollectPlainEvenWhenHoldingAnIndividual() throws Exception {
        var material = mock(Material.class);
        when(material.name()).thenReturn("STONE");
        when(material.isItem()).thenReturn(true);
        when(material.getMaxStackSize()).thenReturn(64);
        var named = item(material, 7, "named");
        var original = inventory(item(material, 12, "plain"), named);
        var container = mock(Barrel.class);
        when(container.getInventory()).thenReturn(original);
        when(container.getType()).thenReturn(Material.BARREL);
        var carried = inventory((ItemStack) null);
        var playerInventory = mock(org.bukkit.inventory.PlayerInventory.class);
        when(playerInventory.getItemInMainHand()).thenReturn(named);
        when(playerInventory.addItem(any(ItemStack.class))).thenAnswer(c -> carried.addItem((ItemStack) c.getArgument(0)));
        var player = mock(org.bukkit.entity.Player.class);
        when(player.getInventory()).thenReturn(playerInventory);
        var plugin = mock(SurvivalPull.class, CALLS_REAL_METHODS);
        doReturn(new org.bukkit.configuration.file.YamlConfiguration()).when(plugin).getConfig();
        PullTestSupport.nearbyWarehouse(plugin, player);
        var index = mock(WarehouseIndex.class);
        var field = SurvivalPull.class.getDeclaredField("index"); field.setAccessible(true); field.set(plugin, index);
        when(index.ready(any())).thenReturn(true);
        when(index.take(any(), eq(playerInventory), any(), anyString(), anyInt())).thenAnswer(c ->
                IndexTestSupport.collect(List.of(container), playerInventory, c.getArgument(2), c.getArgument(3), c.getArgument(4)));
        try (var materials = mockStatic(Material.class, CALLS_REAL_METHODS)) {
            materials.when(() -> Material.matchMaterial("stone")).thenReturn(material);
            plugin.onCommand(player, mock(org.bukkit.command.Command.class), "pull", new String[] {"stone", "5"});
            plugin.onCommand(player, mock(org.bukkit.command.Command.class), "pull", new String[] {"hand"});
        }
        assertNull(original.getItem(0));
        assertEquals(7, original.getItem(1).getAmount());
        assertEquals(12, carried.getItem(0).getAmount());
        verify(player).sendMessage("- 樽 (0, 0, 0): 5個 [k=\"\"]");
        String key = ItemVariant.key(named);
        SurvivalPull.showSources(player, new SurvivalPull.Result(1,
                List.of(new SurvivalPull.Source(Material.BARREL, new SurvivalPull.Position(1, 2, 3), 1)), true), 1, false, key);
        verify(player).sendMessage("- 樽 (1, 2, 3): 1個 [k=\"" + key + "\"]");
    }

    @Test
    void capturedCustomNameAndAppliedAndStoredEnchantmentsAreSearchableOffThread() throws Exception {
        try (var registries = mockStatic(io.papermc.paper.registry.RegistryAccess.class)) {
            var access = mock(io.papermc.paper.registry.RegistryAccess.class, call ->
                    call.getMethod().getReturnType() == org.bukkit.Registry.class ? mock(org.bukkit.Registry.class) : null);
            registries.when(io.papermc.paper.registry.RegistryAccess::registryAccess).thenReturn(access);
            var applied = mock(Enchantment.class);
            when(applied.translationKey()).thenReturn("enchantment.minecraft.sharpness");
            var stored = mock(Enchantment.class);
            when(stored.translationKey()).thenReturn("enchantment.minecraft.mending");
            var meta = mock(EnchantmentStorageMeta.class);
            when(meta.hasCustomName()).thenReturn(true);
            when(meta.customName()).thenReturn(net.kyori.adventure.text.Component.text("勇者の本"));
            when(meta.getEnchants()).thenReturn(Map.of(applied, 5));
            when(meta.getStoredEnchants()).thenReturn(Map.of(stored, 1));
            var book = item(Material.ENCHANTED_BOOK, 2, "book");
            when(book.getItemMeta()).thenReturn(meta);
            var fixture = new IndexTestSupport(); fixture.add(1, inventory(book)); fixture.load();
            var snapshot = fixture.index.snapshot(fixture.wh);
            var names = ItemNames.load(getClass().getResourceAsStream("/pull/ja_jp_names.json"));
            clearInvocations(meta, applied, stored);
            CompletableFuture.runAsync(() -> {
                var stock = snapshot.summarize();
                for (String query : List.of("勇者", "ダメージ増加", "だめーじ", "修繕"))
                    assertEquals(stock, names.filter(stock, query), query);
                assertTrue(names.filter(stock, "シルクタッチ").isEmpty());
            }).get();
            verifyNoInteractions(meta, applied, stored);
        }
    }
}
