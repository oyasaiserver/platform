package icu.oyasai.utilities.debugonbe.model

/** DebugOnBE のプレイヤーごとの変換設定。 */
data class TogoSettings(
    /** null は対応済みの全形状、空集合は対象なしを表す。 */
    val enabledShapes: Set<BlockShape>? = null,
    val maxBlocks: Int = TogoSettingsLimits.DEFAULT_MAX_BLOCKS,
    val radius: Int = TogoSettingsLimits.DEFAULT_RADIUS,
    val durationSeconds: Int = TogoSettingsLimits.DEFAULT_DURATION_SECONDS,
) {
  init {
    require(maxBlocks in TogoSettingsLimits.MIN_MAX_BLOCKS..TogoSettingsLimits.MAX_MAX_BLOCKS) {
      "maxBlocks must be between ${TogoSettingsLimits.MIN_MAX_BLOCKS} and ${TogoSettingsLimits.MAX_MAX_BLOCKS}"
    }
    require(radius in TogoSettingsLimits.MIN_RADIUS..TogoSettingsLimits.MAX_RADIUS) {
      "radius must be between ${TogoSettingsLimits.MIN_RADIUS} and ${TogoSettingsLimits.MAX_RADIUS}"
    }
    require(
        durationSeconds in
            TogoSettingsLimits.MIN_DURATION_SECONDS..TogoSettingsLimits.MAX_DURATION_SECONDS
    ) {
      "durationSeconds must be between ${TogoSettingsLimits.MIN_DURATION_SECONDS} and ${TogoSettingsLimits.MAX_DURATION_SECONDS}"
    }
  }
}

/** GUI とコマンドの両方で共有する DebugOnBE の数値上限。 */
object TogoSettingsLimits {
  const val MIN_MAX_BLOCKS = 1
  const val MAX_MAX_BLOCKS = 256
  const val DEFAULT_MAX_BLOCKS = 35

  const val MIN_RADIUS = 1
  const val MAX_RADIUS = 32
  const val DEFAULT_RADIUS = 10

  const val MIN_DURATION_SECONDS = 1
  const val MAX_DURATION_SECONDS = 300
  const val DEFAULT_DURATION_SECONDS = 60
}
