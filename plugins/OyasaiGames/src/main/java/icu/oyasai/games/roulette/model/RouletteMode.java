package icu.oyasai.games.roulette.model;

import org.bukkit.Material;

/**
 * 抽選モードを定義する列挙型（Enum）です。
 * 
 * GUI上の表示順序は要件に従い、以下の順番で固定します。
 * 1. 全建築用アイテム (ALL)
 * 2. フルブロックのみ (FULL_BLOCK)
 * 3. フルブロック以外 (NON_FULL_BLOCK)
 */
public enum RouletteMode {
    ALL(
        1,
        "全建築用アイテム",
        Material.COBBLESTONE,
        "設置可能なすべてのブロック・アイテムが対象です。"
    ),
    FULL_BLOCK(
        2,
        "フルブロックのみ",
        Material.BRICKS,
        "完全な立方体（石、土、木、ガラス等）のみが対象です。"
    ),
    NON_FULL_BLOCK(
        3,
        "フルブロック以外",
        Material.PEONY,
        "階段、ハーフ、フェンス、装飾などのブロックが対象です。"
    );

    private final int id;
    private final String displayName;
    private final Material iconMaterial;
    private final String description;

    RouletteMode(int id, String displayName, Material iconMaterial, String description) {
        this.id = id;
        this.displayName = displayName;
        this.iconMaterial = iconMaterial;
        this.description = description;
    }

    public int getId() {
        return id;
    }

    public String getDisplayName() {
        return displayName;
    }

    public Material getIconMaterial() {
        return iconMaterial;
    }

    public String getDescription() {
        return description;
    }
}
