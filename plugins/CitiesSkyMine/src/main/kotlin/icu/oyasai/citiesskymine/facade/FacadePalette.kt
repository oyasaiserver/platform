package icu.oyasai.citiesskymine.facade

import org.bukkit.Material

data class FacadeMaterials(
    val wall: Material,
    val pilaster: Material,
    val trim: Material,
    val glass: Material,
    val roofDark: Material,
    val roofLight: Material,
    val rail: Material,
    val ground: Material,
)

enum class FacadePalette(val id: String) {
    CREAM("cream"),
    GREY("grey"),
    BROWN("brown"),
    RED("red");

    fun mats(): FacadeMaterials = when (this) {
        CREAM -> FacadeMaterials(
            wall      = Material.SMOOTH_SANDSTONE,
            pilaster  = Material.SANDSTONE,
            trim      = Material.CUT_SANDSTONE,
            glass     = Material.GLASS,
            roofDark  = Material.GRAY_CONCRETE,
            roofLight = Material.LIGHT_GRAY_CONCRETE,
            rail      = Material.IRON_BARS,
            ground    = Material.CHISELED_SANDSTONE,
        )
        GREY -> FacadeMaterials(
            wall      = Material.SMOOTH_QUARTZ,
            pilaster  = Material.QUARTZ_BRICKS,
            trim      = Material.CHISELED_QUARTZ_BLOCK,
            glass     = Material.GLASS,
            roofDark  = Material.DARK_PRISMARINE,
            roofLight = Material.PRISMARINE_BRICKS,
            rail      = Material.IRON_BARS,
            ground    = Material.STONE_BRICKS,
        )
        BROWN -> FacadeMaterials(
            wall      = Material.SMOOTH_RED_SANDSTONE,
            pilaster  = Material.RED_SANDSTONE,
            trim      = Material.CUT_RED_SANDSTONE,
            glass     = Material.GLASS,
            roofDark  = Material.GRAY_CONCRETE,
            roofLight = Material.LIGHT_GRAY_CONCRETE,
            rail      = Material.IRON_BARS,
            ground    = Material.CHISELED_RED_SANDSTONE,
        )
        RED -> FacadeMaterials(
            wall      = Material.RED_TERRACOTTA,
            pilaster  = Material.BROWN_TERRACOTTA,
            trim      = Material.ORANGE_TERRACOTTA,
            glass     = Material.GLASS,
            roofDark  = Material.GRAY_CONCRETE,
            roofLight = Material.LIGHT_GRAY_CONCRETE,
            rail      = Material.IRON_BARS,
            ground    = Material.TERRACOTTA,
        )
    }

    companion object {
        fun from(s: String): FacadePalette =
            values().firstOrNull { it.id == s.lowercase() } ?: CREAM
    }
}
