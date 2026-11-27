package io.oyasai.directstate.edit.hand

import org.bukkit.block.data.*
import org.bukkit.block.data.type.*

/** 成長・点灯・通電・水量の共通フォールバック。 */
internal object CommonStateEditor {
  /** ブロック固有操作がない場合に、共通プロパティを一つでも編集できるか調べる。 */
  fun supports(data: BlockData): Boolean {
    val name = data.material.name
    return when {
      data is Ageable && name != "BAMBOO" && !name.contains("CAVE_VINES") -> true
      data is Lightable && !HandMaterials.isGenericExcluded(name) -> true
      data is Powerable && !HandMaterials.isGenericExcluded(name) -> true
      data is Levelled && HandMaterials.isLevelMaterial(name) -> true
      else -> false
    }
  }

  /** age・lit・powered等から優先順位どおり一つだけ変更し、変更できたか返す。 */
  fun edit(data: BlockData, reverse: Boolean = false): Boolean {
    val name = data.material.name
    when {
      data is Ageable && name != "BAMBOO" && !name.contains("CAVE_VINES") -> {
        data.age = next(data.age, data.maximumAge, reverse = reverse)
      }
      data is Lightable && !HandMaterials.isGenericExcluded(name) -> {
        data.isLit = !data.isLit
      }
      data is Powerable && !HandMaterials.isGenericExcluded(name) -> {
        data.isPowered = !data.isPowered
      }
      data is Levelled && HandMaterials.isLevelMaterial(name) -> {
        data.level = next(data.level, data.maximumLevel, data.minimumLevel, reverse)
      }
      else -> return false
    }
    return true
  }

  /** minimumからmaximumまで進め、端を超えたら反対端へ折り返す。 */
  private fun next(value: Int, maximum: Int, minimum: Int = 0, reverse: Boolean = false) =
      if (reverse) {
        if (value <= minimum) maximum else value - 1
      } else {
        if (value >= maximum) minimum else value + 1
      }
}
