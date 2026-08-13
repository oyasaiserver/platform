package icu.oyasai.utilities.debugonbe.model

/**
 * ある BlockShape に対する全ブロック状態の配置データ。
 *
 * @param shape 対象形状タイプ
 * @param states ブロック状態キー → 防具立てリスト のマップ キー例:
 *   "east=false,north=false,south=false,waterlogged=false,west=false"
 */
data class ShapePlacementData(
    val shape: BlockShape,
    val states: MutableMap<String, MutableList<ArmorStandPlacement>> = mutableMapOf(),
) {

  /** 指定状態に防具立て配置を追加する */
  fun addPlacement(stateKey: String, placement: ArmorStandPlacement) {
    states.getOrPut(stateKey) { mutableListOf() }.add(placement)
  }

  /** 指定状態の配置リストをクリアする */
  fun clearState(stateKey: String) {
    states[stateKey]?.clear()
  }

  /** 指定状態の配置リストを取得する (なければ空リスト) */
  fun getState(stateKey: String): List<ArmorStandPlacement> = states[stateKey] ?: emptyList()

  /** 設定済みの状態キー一覧を返す */
  fun definedStateKeys(): Set<String> = states.keys
}
