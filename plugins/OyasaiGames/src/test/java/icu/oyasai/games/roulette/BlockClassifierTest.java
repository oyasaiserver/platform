package icu.oyasai.games.roulette;

import icu.oyasai.games.roulette.config.ConfigProvider;
import icu.oyasai.games.roulette.service.BlockClassifier;
import org.bukkit.Material;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.util.Collections;
import java.util.HashSet;
import java.util.Set;
import java.util.logging.Logger;

import static org.junit.jupiter.api.Assertions.*;

public class BlockClassifierTest {

    private BlockClassifier classifier;
    private Set<Material> excluded;

    @BeforeEach
    public void setup() {
        Logger logger = Logger.getLogger("BlockClassifierTest");
        this.excluded = new HashSet<>();
        excluded.add(Material.BEDROCK);
        excluded.add(Material.BARRIER);
        excluded.add(Material.COMMAND_BLOCK);

        // Bukkit サーバー環境に依存しないダミー設定プロバイダを使用
        ConfigProvider dummyConfig = new ConfigProvider() {
            @Override
            public int getCooldownSeconds() {
                return 30;
            }

            @Override
            public long getChatIntervalTicks() {
                return 16L;
            }

            @Override
            public Set<Material> getExcludedMaterials() {
                return excluded;
            }

            @Override
            public Set<Material> getForceFullBlocks() {
                return Collections.emptySet();
            }

            @Override
            public Set<Material> getForceNonFullBlocks() {
                return Collections.emptySet();
            }
        };

        this.classifier = new BlockClassifier(logger, dummyConfig);
    }

    @Test
    @DisplayName("非設置アイテム（武器・食料・素材）が建築アイテムから除外されること")
    public void testNonBuildingItemsExcluded() {
        assertFalse(classifier.isBuildingItem(Material.DIAMOND_SWORD, excluded));
        assertFalse(classifier.isBuildingItem(Material.APPLE, excluded));
        assertFalse(classifier.isBuildingItem(Material.STICK, excluded));
        assertFalse(classifier.isBuildingItem(Material.WATER_BUCKET, excluded));
        assertFalse(classifier.isBuildingItem(Material.AIR, excluded));
        assertFalse(classifier.isBuildingItem(Material.BEDROCK, excluded));
    }

    @Test
    @DisplayName("代表的なフルブロックが正しく判定されること")
    public void testFullBlocks() {
        // 石、土、原木、石レンガ、金ブロック
        assertTrue(classifier.isFullBlock(Material.STONE, Collections.emptySet(), Collections.emptySet()));
        assertTrue(classifier.isFullBlock(Material.DIRT, Collections.emptySet(), Collections.emptySet()));
        assertTrue(classifier.isFullBlock(Material.OAK_LOG, Collections.emptySet(), Collections.emptySet()));
        assertTrue(classifier.isFullBlock(Material.STONE_BRICKS, Collections.emptySet(), Collections.emptySet()));
        assertTrue(classifier.isFullBlock(Material.GOLD_BLOCK, Collections.emptySet(), Collections.emptySet()));
        
        // ガラス系（要件で明示された対象例）
        assertTrue(classifier.isFullBlock(Material.GLASS, Collections.emptySet(), Collections.emptySet()));
        assertTrue(classifier.isFullBlock(Material.RED_STAINED_GLASS, Collections.emptySet(), Collections.emptySet()));
    }

    @Test
    @DisplayName("非フルブロック（階段、ハーフ、フェンス、板、ドア、家具、装飾等）が正しく除外されること")
    public void testNonFullBlocks() {
        // 階段・ハーフ・フェンス・板ガラス
        assertFalse(classifier.isFullBlock(Material.OAK_STAIRS, Collections.emptySet(), Collections.emptySet()));
        assertFalse(classifier.isFullBlock(Material.STONE_SLAB, Collections.emptySet(), Collections.emptySet()));
        assertFalse(classifier.isFullBlock(Material.OAK_FENCE, Collections.emptySet(), Collections.emptySet()));
        assertFalse(classifier.isFullBlock(Material.GLASS_PANE, Collections.emptySet(), Collections.emptySet()));
        assertFalse(classifier.isFullBlock(Material.OAK_DOOR, Collections.emptySet(), Collections.emptySet()));
        assertFalse(classifier.isFullBlock(Material.OAK_TRAPDOOR, Collections.emptySet(), Collections.emptySet()));

        // 装飾
        assertFalse(classifier.isFullBlock(Material.TORCH, Collections.emptySet(), Collections.emptySet()));
        assertFalse(classifier.isFullBlock(Material.LANTERN, Collections.emptySet(), Collections.emptySet()));
        assertFalse(classifier.isFullBlock(Material.WHITE_CARPET, Collections.emptySet(), Collections.emptySet()));

        // 機能・収納ブロック（要件で原則対象外と指定）
        assertFalse(classifier.isFullBlock(Material.CHEST, Collections.emptySet(), Collections.emptySet()));
        assertFalse(classifier.isFullBlock(Material.FURNACE, Collections.emptySet(), Collections.emptySet()));
        assertFalse(classifier.isFullBlock(Material.CRAFTING_TABLE, Collections.emptySet(), Collections.emptySet()));
        assertFalse(classifier.isFullBlock(Material.BARREL, Collections.emptySet(), Collections.emptySet()));
    }
}
