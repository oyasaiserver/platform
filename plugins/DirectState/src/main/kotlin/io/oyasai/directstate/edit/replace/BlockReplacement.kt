package io.oyasai.directstate.edit.replace

import io.oyasai.directstate.edit.BlockEdit
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.block.Block
import org.bukkit.block.BlockFace
import org.bukkit.block.data.Bisected
import org.bukkit.block.data.BlockData
import org.bukkit.block.data.type.Bed
import org.bukkit.block.data.type.Door

/** 素材置換の候補決定とBlockData変換をまとめる。 イベント層と材質ファミリー計算の間に置き、BukkitのBlock操作をTypeReplacementへ漏らさない。 */
internal class BlockReplacement(private val types: TypeReplacement) {
  /** changesは適用するブロック群、targetは画面に表示する最終材質。 */
  data class Plan(val changes: List<BlockEdit>, val target: Material)

  /** 通常Replaceへのフォールバックを含め、実際に適用できる変更一式を作る。 */
  fun plan(block: Block, sampled: Material, mode: TypeReplaceMode): Plan? {
    // variantNameは、手持ち材質を対象ブロックと同じ形へ変換できた場合だけ値を持つ。
    val variantName =
        when (mode) {
          TypeReplaceMode.OFF -> null
          TypeReplaceMode.STRICT -> types.resolve(block.type.name, sampled.name)
          TypeReplaceMode.COMPATIBLE -> types.resolveCompatible(block.type.name, sampled.name)
        }
    val matchingVariant = if (variantName == null) null else Material.matchMaterial(variantName)
    val target = matchingVariant ?: sampled
    val appliedMode = if (matchingVariant == null) TypeReplaceMode.OFF else mode
    if (block.type == target) return null

    val changes = mutableListOf(BlockEdit(block, convert(block.blockData, target, appliedMode)))
    val other = counterpart(block)
    if (matchingVariant != null && other != null && other.type == block.type) {
      changes += BlockEdit(other, convert(other.blockData, target, appliedMode))
    }
    return Plan(changes, target)
  }

  /** 元ブロックの受理可能な状態だけを、新しい材質へ引き継ぐ。 */
  fun convert(
      source: BlockData,
      target: Material,
      mode: TypeReplaceMode = TypeReplaceMode.STRICT,
  ): BlockData {
    /** Bukkitが指定BlockData文字列を受理できるか、例外を外へ出さずに確認する。 */
    fun acceptsState(state: String): Boolean {
      return try {
        Bukkit.createBlockData(state)
        true
      } catch (_: IllegalArgumentException) {
        false
      }
    }
    val state =
        if (mode == TypeReplaceMode.COMPATIBLE) {
          TypeReplacement.transferCompatible(
              source.asString,
              target.key.toString(),
              types.kind(source.material.name),
              types.kind(target.name),
              ::acceptsState,
          )
        } else {
          TypeReplacement.transfer(source.asString, target.key.toString(), ::acceptsState)
        }
    val converted = Bukkit.createBlockData(state)
    if (
        target.name in setOf("PUMPKIN_STEM", "MELON_STEM") &&
            converted is org.bukkit.block.data.Ageable
    ) {
      converted.age = converted.maximumAge
    }
    return converted
  }

  /** ドアやベッドの、同時に変更すべきもう片方。正しい組でなければ返さない。 */
  fun counterpart(block: Block): Block? {
    val data = block.blockData
    val other =
        when (data) {
          is Door ->
              block.getRelative(
                  if (data.half == Bisected.Half.BOTTOM) BlockFace.UP else BlockFace.DOWN
              )
          is Bed ->
              block.getRelative(
                  if (data.part == Bed.Part.FOOT) data.facing else data.facing.oppositeFace
              )
          else -> return null
        }
    val otherData = other.blockData
    val isOtherHalf =
        when {
          data is Door && otherData is Door -> otherData.half != data.half
          data is Bed && otherData is Bed -> otherData.part != data.part
          else -> false
        }
    return if (isOtherHalf) other else null
  }
}
