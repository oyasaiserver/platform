package icu.oyasai.games.roulette.service;

import icu.oyasai.games.roulette.config.ConfigProvider;
import org.bukkit.Material;
import org.bukkit.block.data.BlockData;
import org.bukkit.block.data.type.Door;
import org.bukkit.block.data.type.Fence;
import org.bukkit.block.data.type.Gate;
import org.bukkit.block.data.type.GlassPane;
import org.bukkit.block.data.type.Slab;
import org.bukkit.block.data.type.Stairs;
import org.bukkit.block.data.type.TrapDoor;
import org.bukkit.block.data.type.Wall;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Set;
import java.util.logging.Logger;

/**
 * サーバー内の全マテリアルを走査し、
 * 1. 全建築用アイテム
 * 2. フルブロックのみ
 * 3. フルブロック以外
 * の3つのリストに事前分類してキャッシュするクラスです。
 * 
 * 起動時に一度だけ分類を行うため、抽選時のサーバー負荷はほぼゼロです。
 */
public class BlockClassifier {
    private final Logger logger;
    private final ConfigProvider configProvider;

    private List<Material> allBuildingItems = Collections.emptyList();
    private List<Material> fullBlocks = Collections.emptyList();
    private List<Material> nonFullBlocks = Collections.emptyList();

    public BlockClassifier(Logger logger, ConfigProvider configProvider) {
        this.logger = logger;
        this.configProvider = configProvider;
    }

    /**
     * 全マテリアルの走査と分類を実行します。
     * サーバー起動時（onEnable）から呼び出されます。
     */
    public void initialize() {
        Set<Material> excluded = configProvider.getExcludedMaterials();
        Set<Material> forceFull = configProvider.getForceFullBlocks();
        Set<Material> forceNonFull = configProvider.getForceNonFullBlocks();

        List<Material> allList = new ArrayList<>();
        List<Material> fullList = new ArrayList<>();
        List<Material> nonFullList = new ArrayList<>();

        for (Material mat : Material.values()) {
            try {
                if (!isBuildingItem(mat, excluded)) {
                    continue;
                }

                allList.add(mat);

                if (isFullBlock(mat, forceFull, forceNonFull)) {
                    fullList.add(mat);
                } else {
                    nonFullList.add(mat);
                }
            } catch (Throwable ignored) {
            }
        }

        this.allBuildingItems = Collections.unmodifiableList(allList);
        this.fullBlocks = Collections.unmodifiableList(fullList);
        this.nonFullBlocks = Collections.unmodifiableList(nonFullList);

        logger.info("[Roulette] 建築アイテムの分類が完了しました:");
        logger.info(" - 全建築用アイテム: " + allBuildingItems.size() + " 種類");
        logger.info(" - フルブロック: " + fullBlocks.size() + " 種類");
        logger.info(" - フルブロック以外: " + nonFullBlocks.size() + " 種類");
    }

    /**
     * 「建築用アイテム」であるかを判定します。
     * 条件：ブロックとして設置可能、アイテムとして所持可能、空気ではない、除外リストに含まれない。
     */
    public boolean isBuildingItem(Material mat, Set<Material> excluded) {
        if (mat == null) {
            return false;
        }
        if (mat.isLegacy()) {
            return false;
        }
        String name = mat.name();
        if (name.equals("AIR") || name.equals("CAVE_AIR") || name.equals("VOID_AIR")) {
            return false;
        }
        if (excluded != null && excluded.contains(mat)) {
            return false;
        }
        try {
            if (mat.isAir() || !mat.isBlock() || !mat.isItem()) {
                return false;
            }
        } catch (Throwable t) {
            // Paper RegistryAccess 未初期化環境（単体テスト等）用フォールバック
            return false;
        }
        return true;
    }

    /**
     * 「フルブロック（見た目が完全な立方体のブロック）」であるかを判定します。
     */
    public boolean isFullBlock(Material mat, Set<Material> forceFull, Set<Material> forceNonFull) {
        if (forceFull != null && forceFull.contains(mat)) {
            return true;
        }
        if (forceNonFull != null && forceNonFull.contains(mat)) {
            return false;
        }

        // 1. 特殊形状・機能・作業ブロックの除外（チェスト、かまど、作業台等）
        if (isInteractiveOrFunctional(mat)) {
            return false;
        }

        // 2. 階段、ハーフ、フェンス、ドア、装飾等の非立方体ブロックの除外
        if (isNonCubeShape(mat)) {
            return false;
        }

        // 3. ガラス系は完全立方体なので特別に許可（isOccludingがfalseになるため）
        if (isGlassFullBlock(mat)) {
            return true;
        }

        // 4. 氷・スライム等の半透明立方体ブロック
        if (isTranslucentFullBlock(mat)) {
            return true;
        }

        // 5. 通常の完全遮蔽立方体（石、土、原木、石レンガ、金ブロック、コンクリート、羊毛等）
        try {
            return mat.isOccluding();
        } catch (Throwable t) {
            // 単体テスト環境等で RegistryAccess が初期化されていない場合は名前でフォールバック
            String name = mat.name();
            return name.equals("STONE") || name.equals("DIRT") || name.endsWith("_LOG")
                    || name.endsWith("_BRICKS") || name.endsWith("_BLOCK");
        }
    }

    /**
     * 作業台、かまど、チェスト等の機能・収納ブロックであるかを判定します。
     */
    private boolean isInteractiveOrFunctional(Material mat) {
        String name = mat.name();

        // 収納系
        if (name.contains("CHEST") || name.equals("BARREL") || name.contains("SHULKER_BOX")
                || name.equals("HOPPER") || name.equals("DISPENSER") || name.equals("DROPPER")
                || name.equals("DECORATED_POT")) {
            return true;
        }

        // かまど・調理系
        if (name.equals("FURNACE") || name.equals("BLAST_FURNACE") || name.equals("SMOKER")
                || name.equals("CAMPFIRE") || name.equals("SOUL_CAMPFIRE")) {
            return true;
        }

        // 作業・クラフト台系
        if (name.equals("CRAFTING_TABLE") || name.contains("ANVIL") || name.equals("SMITHING_TABLE")
                || name.equals("STONECUTTER") || name.equals("GRINDSTONE") || name.equals("LOOM")
                || name.equals("CARTOGRAPHY_TABLE") || name.equals("FLETCHING_TABLE")
                || name.equals("CRAFTER")) {
            return true;
        }

        // 特殊機能系
        if (name.equals("BREWING_STAND") || name.equals("ENCHANTING_TABLE") || name.equals("BEACON")
                || name.equals("LECTERN") || name.equals("RESPAWN_ANCHOR") || name.equals("LODESTONE")
                || name.equals("JUKEBOX") || name.equals("NOTE_BLOCK") || name.equals("TARGET")
                || name.equals("BELL") || name.equals("DAYLIGHT_DETECTOR")
                || name.equals("LIGHTNING_ROD") || name.equals("CONDUIT")) {
            return true;
        }

        return false;
    }

    /**
     * 階段、ハーフブロック、フェンス、板、ドア、装飾等の非立方体形状であるかを判定します。
     */
    private boolean isNonCubeShape(Material mat) {
        String name = mat.name();

        // BlockDataによる型チェック（安全なクラス判定）
        try {
            BlockData data = mat.createBlockData();
            if (data instanceof Stairs
                    || data instanceof Slab
                    || data instanceof Fence
                    || data instanceof Gate
                    || data instanceof Wall
                    || data instanceof Door
                    || data instanceof TrapDoor
                    || data instanceof GlassPane) {
                return true;
            }
        } catch (Exception ignored) {
        }

        // 名前パターンによる除外判定
        if (name.endsWith("_STAIRS") || name.endsWith("_SLAB")
                || name.endsWith("_FENCE") || name.endsWith("_FENCE_GATE") || name.endsWith("_WALL")
                || name.endsWith("_DOOR") || name.endsWith("_TRAPDOOR")
                || name.endsWith("_PANE") || name.equals("IRON_BARS") || name.equals("CHAIN")) {
            return true;
        }

        // カーペット、ベッド、看板、旗、頭部
        if (name.endsWith("_CARPET") || name.endsWith("_BED")
                || name.contains("SIGN") || name.endsWith("_BANNER")
                || name.endsWith("_HEAD") || name.endsWith("_SKULL")) {
            return true;
        }

        // スイッチ、感圧板、ボタン
        if (name.endsWith("_BUTTON") || name.endsWith("_PRESSURE_PLATE") || name.equals("LEVER")
                || name.equals("TRIPWIRE_HOOK") || name.equals("TRIPWIRE")) {
            return true;
        }

        // 照明・装飾（松明、ランタン、ろうそく、ケーキ）
        if (name.contains("TORCH") || name.endsWith("_LANTERN") || name.equals("LANTERN")
                || name.contains("CANDLE") || name.contains("CAKE") || name.equals("END_ROD")
                || name.equals("AMETHYST_CLUSTER") || name.endsWith("_AMETHYST_BUD")) {
            return true;
        }

        // 植物・農作物・装飾花
        if (name.endsWith("_SAPLING") || name.endsWith("_CORAL") || name.endsWith("_CORAL_FAN")
                || name.endsWith("_FLOWER") || name.equals("FLOWER_POT") || name.contains("POTTED_")
                || name.equals("GRASS") || name.equals("TALL_GRASS") || name.equals("FERN") || name.equals("LARGE_FERN")
                || name.equals("VINE") || name.endsWith("_VINES") || name.endsWith("_VINES_PLANT")
                || name.equals("SUGAR_CANE") || name.equals("BAMBOO") || name.equals("BAMBOO_SAPLING")
                || name.equals("CACTUS") || name.equals("LILY_PAD") || name.equals("SEAGRASS")
                || name.equals("TALL_SEAGRASS") || name.equals("KELP") || name.equals("KELP_PLANT")
                || name.equals("SEA_PICKLE") || name.equals("HANGING_ROOTS") || name.equals("BIG_DRIPLEAF")
                || name.equals("SMALL_DRIPLEAF") || name.equals("SPORE_BLOSSOM") || name.equals("COBWEB")
                || name.equals("SCAFFOLDING")) {
            return true;
        }

        return false;
    }

    /**
     * ガラス系の完全立方体ブロック（着色ガラス、遮光ガラス、通常ガラス）を判定します。
     * ※GlassPane（板ガラス）は除外されます。
     */
    private boolean isGlassFullBlock(Material mat) {
        String name = mat.name();
        if (name.endsWith("_PANE")) {
            return false;
        }
        return name.equals("GLASS") || name.equals("TINTED_GLASS") || name.endsWith("_STAINED_GLASS");
    }

    /**
     * 氷やスライムなど、半透明だが完全な立方体のブロックを判定します。
     */
    private boolean isTranslucentFullBlock(Material mat) {
        String name = mat.name();
        return name.equals("ICE") || name.equals("PACKED_ICE") || name.equals("BLUE_ICE")
                || name.equals("FROSTED_ICE") || name.equals("SLIME_BLOCK") || name.equals("HONEY_BLOCK");
    }

    public List<Material> getAllBuildingItems() {
        return allBuildingItems;
    }

    public List<Material> getFullBlocks() {
        return fullBlocks;
    }

    public List<Material> getNonFullBlocks() {
        return nonFullBlocks;
    }
}
