package io.oyasai.directstate.edit.hand

import io.oyasai.directstate.edit.shape.ShapeEditor
import org.bukkit.Material
import org.bukkit.Sound
import org.bukkit.block.BlockFace
import org.bukkit.block.data.BlockData
import org.bukkit.util.Vector

/** 素手編集の入口。形状→ブロック固有操作→共通状態→材質切替の順に評価 */
internal class HandEditor(private val shapeEditor: ShapeEditor) {
  /** 計算後の状態と、必要なら変更先の材質・再生音をまとめて呼び出し側へ返す。 */
  data class Result(val data: BlockData, val material: Material? = null, val sound: Sound? = null)

  /** trueのブロックだけイベント層がクリックを消費する。editと同じ四段階を確認する。 */
  fun supports(data: BlockData): Boolean =
      shapeEditor.supports(data) ||
          BlockStateEditor.supports(data) ||
          CommonStateEditor.supports(data) ||
          HandMaterials.switchMaterialName(data.material.name) != null

  /** 各Editorを優先順に試し、最初に成立した編集結果だけを返す。 */
  fun edit(original: BlockData, hit: Vector, face: BlockFace?): Result? {
    if (shapeEditor.supports(original)) return Result(shapeEditor.toggle(original, hit, face))
    val data = original.clone()
    val blockEdit = BlockStateEditor.edit(data, face, hit)
    if (blockEdit != null) return blockEdit
    if (CommonStateEditor.edit(data)) return Result(data)
    val material = HandMaterials.switchMaterial(original.material.name) ?: return null
    return Result(data, material)
  }
}
