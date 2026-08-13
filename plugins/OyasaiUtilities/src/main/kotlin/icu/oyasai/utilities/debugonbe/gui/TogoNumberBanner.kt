package icu.oyasai.utilities.debugonbe.gui

import org.bukkit.DyeColor
import org.bukkit.Material
import org.bukkit.block.banner.Pattern
import org.bukkit.block.banner.PatternType
import org.bukkit.inventory.ItemStack
import org.bukkit.inventory.meta.BannerMeta

/** 数値設定GUIで使う0〜9の数字旗。DynamicProfileの送金画面と同じ方式で数字を表示する。 */
object TogoNumberBanner {
  private val bannerList by lazy { createBanners() }

  fun getBannerChar(c: Char): ItemStack? = bannerList[c]?.clone()

  private fun createBanners(): Map<Char, ItemStack> {
    val patterns =
        mapOf(
            '0' to
                listOf(
                    Pattern(DyeColor.WHITE, PatternType.STRIPE_BOTTOM),
                    Pattern(DyeColor.WHITE, PatternType.STRIPE_LEFT),
                    Pattern(DyeColor.WHITE, PatternType.STRIPE_TOP),
                    Pattern(DyeColor.WHITE, PatternType.STRIPE_RIGHT),
                    Pattern(DyeColor.WHITE, PatternType.STRIPE_DOWNLEFT),
                    Pattern(DyeColor.BLACK, PatternType.BORDER),
                ),
            '1' to
                listOf(
                    Pattern(DyeColor.WHITE, PatternType.STRIPE_CENTER),
                    Pattern(DyeColor.WHITE, PatternType.SQUARE_TOP_LEFT),
                    Pattern(DyeColor.BLACK, PatternType.CURLY_BORDER),
                    Pattern(DyeColor.WHITE, PatternType.STRIPE_BOTTOM),
                    Pattern(DyeColor.BLACK, PatternType.BORDER),
                ),
            '2' to
                listOf(
                    Pattern(DyeColor.WHITE, PatternType.STRIPE_TOP),
                    Pattern(DyeColor.BLACK, PatternType.RHOMBUS),
                    Pattern(DyeColor.WHITE, PatternType.STRIPE_BOTTOM),
                    Pattern(DyeColor.WHITE, PatternType.STRIPE_DOWNLEFT),
                    Pattern(DyeColor.BLACK, PatternType.BORDER),
                ),
            '3' to
                listOf(
                    Pattern(DyeColor.WHITE, PatternType.STRIPE_BOTTOM),
                    Pattern(DyeColor.WHITE, PatternType.STRIPE_MIDDLE),
                    Pattern(DyeColor.WHITE, PatternType.STRIPE_TOP),
                    Pattern(DyeColor.BLACK, PatternType.CURLY_BORDER),
                    Pattern(DyeColor.WHITE, PatternType.STRIPE_RIGHT),
                    Pattern(DyeColor.BLACK, PatternType.BORDER),
                ),
            '4' to
                listOf(
                    Pattern(DyeColor.WHITE, PatternType.STRIPE_LEFT),
                    Pattern(DyeColor.BLACK, PatternType.HALF_HORIZONTAL),
                    Pattern(DyeColor.WHITE, PatternType.STRIPE_RIGHT),
                    Pattern(DyeColor.WHITE, PatternType.STRIPE_MIDDLE),
                    Pattern(DyeColor.BLACK, PatternType.BORDER),
                ),
            '5' to
                listOf(
                    Pattern(DyeColor.WHITE, PatternType.STRIPE_BOTTOM),
                    Pattern(DyeColor.BLACK, PatternType.RHOMBUS),
                    Pattern(DyeColor.WHITE, PatternType.STRIPE_TOP),
                    Pattern(DyeColor.WHITE, PatternType.STRIPE_DOWNRIGHT),
                    Pattern(DyeColor.BLACK, PatternType.BORDER),
                ),
            '6' to
                listOf(
                    Pattern(DyeColor.WHITE, PatternType.STRIPE_BOTTOM),
                    Pattern(DyeColor.WHITE, PatternType.STRIPE_RIGHT),
                    Pattern(DyeColor.BLACK, PatternType.HALF_HORIZONTAL),
                    Pattern(DyeColor.WHITE, PatternType.STRIPE_MIDDLE),
                    Pattern(DyeColor.WHITE, PatternType.STRIPE_TOP),
                    Pattern(DyeColor.WHITE, PatternType.STRIPE_LEFT),
                    Pattern(DyeColor.BLACK, PatternType.BORDER),
                ),
            '7' to
                listOf(
                    Pattern(DyeColor.WHITE, PatternType.STRIPE_DOWNLEFT),
                    Pattern(DyeColor.WHITE, PatternType.STRIPE_TOP),
                    Pattern(DyeColor.BLACK, PatternType.BORDER),
                ),
            '8' to
                listOf(
                    Pattern(DyeColor.WHITE, PatternType.STRIPE_TOP),
                    Pattern(DyeColor.WHITE, PatternType.STRIPE_LEFT),
                    Pattern(DyeColor.WHITE, PatternType.STRIPE_MIDDLE),
                    Pattern(DyeColor.WHITE, PatternType.STRIPE_BOTTOM),
                    Pattern(DyeColor.WHITE, PatternType.STRIPE_RIGHT),
                    Pattern(DyeColor.BLACK, PatternType.BORDER),
                ),
            '9' to
                listOf(
                    Pattern(DyeColor.WHITE, PatternType.STRIPE_LEFT),
                    Pattern(DyeColor.BLACK, PatternType.HALF_HORIZONTAL),
                    Pattern(DyeColor.WHITE, PatternType.STRIPE_MIDDLE),
                    Pattern(DyeColor.WHITE, PatternType.STRIPE_TOP),
                    Pattern(DyeColor.WHITE, PatternType.STRIPE_RIGHT),
                    Pattern(DyeColor.WHITE, PatternType.STRIPE_BOTTOM),
                    Pattern(DyeColor.BLACK, PatternType.BORDER),
                ),
        )

    return patterns.mapValues { (_, patternList) ->
      ItemStack(Material.BLACK_BANNER).also { item ->
        val meta = item.itemMeta as BannerMeta
        patternList.forEach(meta::addPattern)
        item.itemMeta = meta
      }
    }
  }
}
