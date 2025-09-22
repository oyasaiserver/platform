package com.baakun.dynamicprofile.gui

import com.baakun.dynamicprofile.util.Tools.allFlag
import org.bukkit.DyeColor
import org.bukkit.Material
import org.bukkit.block.banner.Pattern
import org.bukkit.block.banner.PatternType
import org.bukkit.inventory.ItemStack
import org.bukkit.inventory.meta.BannerMeta

/** 数字の旗アイテムを取得する */
object NumberBanner {
  private val bannerList = mutableMapOf<Char, ItemStack>()

  /** 0～9の[Char]を入れると旗アイテムを返す。存在しない場合nullを返す */
  fun getBannerChar(c: Char): ItemStack? {
    return bannerList[c]?.clone()
  }

  /** 数字の旗アイテムを作成してキャッシュする */
  fun createBanner() {
    bannerList.clear()

    val numPatternList =
      mapOf(
        Pair(
          '0',
          listOf(
            Pattern(DyeColor.WHITE, PatternType.STRIPE_BOTTOM),
            Pattern(DyeColor.WHITE, PatternType.STRIPE_LEFT),
            Pattern(DyeColor.WHITE, PatternType.STRIPE_TOP),
            Pattern(DyeColor.WHITE, PatternType.STRIPE_RIGHT),
            Pattern(DyeColor.WHITE, PatternType.STRIPE_DOWNLEFT),
            Pattern(DyeColor.BLACK, PatternType.BORDER),
          ),
        ),
        Pair(
          '1',
          listOf(
            Pattern(DyeColor.WHITE, PatternType.STRIPE_CENTER),
            Pattern(DyeColor.WHITE, PatternType.SQUARE_TOP_LEFT),
            Pattern(DyeColor.BLACK, PatternType.CURLY_BORDER),
            Pattern(DyeColor.WHITE, PatternType.STRIPE_BOTTOM),
            Pattern(DyeColor.BLACK, PatternType.BORDER),
          ),
        ),
        Pair(
          '2',
          listOf(
            Pattern(DyeColor.WHITE, PatternType.STRIPE_TOP),
            Pattern(DyeColor.BLACK, PatternType.RHOMBUS),
            Pattern(DyeColor.WHITE, PatternType.STRIPE_BOTTOM),
            Pattern(DyeColor.WHITE, PatternType.STRIPE_DOWNLEFT),
            Pattern(DyeColor.BLACK, PatternType.BORDER),
          ),
        ),
        Pair(
          '3',
          listOf(
            Pattern(DyeColor.WHITE, PatternType.STRIPE_BOTTOM),
            Pattern(DyeColor.WHITE, PatternType.STRIPE_MIDDLE),
            Pattern(DyeColor.WHITE, PatternType.STRIPE_TOP),
            Pattern(DyeColor.BLACK, PatternType.CURLY_BORDER),
            Pattern(DyeColor.WHITE, PatternType.STRIPE_RIGHT),
            Pattern(DyeColor.BLACK, PatternType.BORDER),
          ),
        ),
        Pair(
          '4',
          listOf(
            Pattern(DyeColor.WHITE, PatternType.STRIPE_LEFT),
            Pattern(DyeColor.BLACK, PatternType.HALF_HORIZONTAL),
            Pattern(DyeColor.WHITE, PatternType.STRIPE_RIGHT),
            Pattern(DyeColor.WHITE, PatternType.STRIPE_MIDDLE),
            Pattern(DyeColor.BLACK, PatternType.BORDER),
          ),
        ),
        Pair(
          '5',
          listOf(
            Pattern(DyeColor.WHITE, PatternType.STRIPE_BOTTOM),
            Pattern(DyeColor.BLACK, PatternType.RHOMBUS),
            Pattern(DyeColor.WHITE, PatternType.STRIPE_TOP),
            Pattern(DyeColor.WHITE, PatternType.STRIPE_DOWNRIGHT),
            Pattern(DyeColor.BLACK, PatternType.BORDER),
          ),
        ),
        Pair(
          '6',
          listOf(
            Pattern(DyeColor.WHITE, PatternType.STRIPE_BOTTOM),
            Pattern(DyeColor.WHITE, PatternType.STRIPE_RIGHT),
            Pattern(DyeColor.BLACK, PatternType.HALF_HORIZONTAL),
            Pattern(DyeColor.WHITE, PatternType.STRIPE_MIDDLE),
            Pattern(DyeColor.WHITE, PatternType.STRIPE_TOP),
            Pattern(DyeColor.WHITE, PatternType.STRIPE_LEFT),
            Pattern(DyeColor.BLACK, PatternType.BORDER),
          ),
        ),
        Pair(
          '7',
          listOf(
            Pattern(DyeColor.WHITE, PatternType.STRIPE_DOWNLEFT),
            Pattern(DyeColor.WHITE, PatternType.STRIPE_TOP),
            Pattern(DyeColor.BLACK, PatternType.BORDER),
          ),
        ),
        Pair(
          '8',
          listOf(
            Pattern(DyeColor.WHITE, PatternType.STRIPE_TOP),
            Pattern(DyeColor.WHITE, PatternType.STRIPE_LEFT),
            Pattern(DyeColor.WHITE, PatternType.STRIPE_MIDDLE),
            Pattern(DyeColor.WHITE, PatternType.STRIPE_BOTTOM),
            Pattern(DyeColor.WHITE, PatternType.STRIPE_RIGHT),
            Pattern(DyeColor.BLACK, PatternType.BORDER),
          ),
        ),
        Pair(
          '9',
          listOf(
            Pattern(DyeColor.WHITE, PatternType.STRIPE_LEFT),
            Pattern(DyeColor.BLACK, PatternType.HALF_HORIZONTAL),
            Pattern(DyeColor.WHITE, PatternType.STRIPE_MIDDLE),
            Pattern(DyeColor.WHITE, PatternType.STRIPE_TOP),
            Pattern(DyeColor.WHITE, PatternType.STRIPE_RIGHT),
            Pattern(DyeColor.WHITE, PatternType.STRIPE_BOTTOM),
            Pattern(DyeColor.BLACK, PatternType.BORDER),
          ),
        ),
      )
    numPatternList.forEach { (c, list) ->
      val item = ItemStack(Material.BLACK_BANNER)
      val bannerMeta = item.itemMeta as BannerMeta
      list.forEach { p -> bannerMeta.addPattern(p) }
      item.itemMeta = bannerMeta
      item.allFlag()
      bannerList[c] = item
    }
  }
}
