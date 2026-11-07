package io.oyasai.survival.pull;

import java.util.List;
import java.util.Map;
import org.bukkit.Material;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class ItemNamesTest {
    private final ItemNames names = ItemNames.load(getClass().getResourceAsStream("/pull/ja_jp_names.json"));

    private Material material(String english, String key) {
        Material material = mock(Material.class);
        when(material.name()).thenReturn(english);
        when(material.getItemTranslationKey()).thenReturn(key);
        return material;
    }

    @ParameterizedTest
    @ValueSource(strings = {"ダイヤ", "だいや", "ﾀﾞｲﾔ", "DIAMOND", "sword", "diamond_sword", "Diamond Sword", "  ダイヤ  ", ""})
    void matchesJapaneseKanaAndEnglishSubstrings(String query) {
        Material sword = material("DIAMOND_SWORD", "item.minecraft.diamond_sword");
        assertEquals("ダイヤモンドの剣", names.name(sword));
        assertTrue(names.matches(sword, query));
        assertFalse(names.matches(sword, "鉄"));
    }

    @Test
    void looksUpBlockKeysAndKeepsStockOrderWhenFiltering() {
        Material stone = material("STONE", "block.minecraft.stone");
        Material chest = material("CHEST", null);
        when(chest.isBlock()).thenReturn(true);
        when(chest.getBlockTranslationKey()).thenReturn("block.minecraft.chest");
        assertEquals("石", names.name(stone));
        assertEquals("チェスト", names.name(chest));
        assertTrue(names.matches(stone, "石"));
        assertTrue(names.matches(chest, "ちぇすと"));
        var large = new SurvivalPull.Stock(chest, 100, List.of());
        var small = new SurvivalPull.Stock(stone, 10, List.of());
        assertEquals(List.of(large, small), names.filter(List.of(large, small), ""));
        assertEquals(List.of(small), names.filter(List.of(large, small), "stone"));
    }

    @Test
    void missingTranslationsUseEnglishAndMissingResourceFailsClearly() {
        assertEquals("new item", new ItemNames(Map.of()).name(material("NEW_ITEM", "item.minecraft.new_item")));
        assertEquals("new item", new ItemNames(Map.of()).name(material("NEW_ITEM", null)));
        assertThrows(IllegalStateException.class, () -> ItemNames.load(null));
    }
}
