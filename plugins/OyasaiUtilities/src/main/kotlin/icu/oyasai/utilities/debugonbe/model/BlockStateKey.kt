package icu.oyasai.utilities.debugonbe.model

import org.bukkit.block.data.BlockData

/**
 * ブロック状態を正規化されたキー文字列として扱うユーティリティ。
 *
 * 例: "east=true,north=false,south=true,west=false,waterlogged=false" → キーはアルファベット順にソートされ、形状ごとの
 * stateKeys のみを使用する。
 */
object BlockStateKey {

  /**
   * BlockData と BlockShape から正規化されたキー文字列を生成する。
   *
   * BlockData#getAsString() は "minecraft:oak_fence[east=true,west=false,...]" 形式なので、 [...]
   * 内を解析してシェイプに必要なキーのみ取り出す。
   */
  fun of(blockData: BlockData, shape: BlockShape): String {
    val raw = blockData.asString // "minecraft:oak_fence[east=true,...]"
    val bracketStart = raw.indexOf('[')
    val bracketEnd = raw.indexOf(']')

    // ブロック状態がない場合（二枚重ねハーフ）は空文字を返す
    if (bracketStart < 0 || bracketEnd < 0) return ""

    val stateStr = raw.substring(bracketStart + 1, bracketEnd)
    val stateMap =
        stateStr
            .split(',')
            .map { it.split('=') }
            .filter { it.size == 2 }
            .associate { (k, v) -> k to v }

    // シェイプに関係するキーのみをアルファベット順で結合
    return shape.stateKeys
        .filter { key -> stateMap.containsKey(key) }
        .sorted()
        .joinToString(",") { key -> "$key=${stateMap[key]}" }
  }

  /** 全状態の「デフォルト」キー文字列（すべてのキーを false/none などの初期値で生成）。 実際の値は使わず、キー名の一覧だけを返す（UI表示用）。 */
  fun keysOf(shape: BlockShape): List<String> = shape.stateKeys.sorted()
}
