package io.oyasai.directstate.edit

import org.bukkit.Location
import org.bukkit.block.BlockState
import org.bukkit.block.data.BlockData

/** 任意依存のCoreProtectクラスをメインプラグインのフィールド型から除外する。 */
internal interface BlockChangeLog {
  /** 変更前後のBlockStateが揃っている通常の記録。 */
  fun record(user: String, before: BlockState, after: BlockState)

  /** 変更後がBlockDataしか残っていない連続編集の記録。 */
  fun record(user: String, before: BlockState, location: Location, after: BlockData)
}
