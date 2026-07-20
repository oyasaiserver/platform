package icu.oyasai.utilities.debugonbe.model

/** DebugOnBE のプレイヤーごとの変換設定。 */
data class TogoSettings(
    /** null は対応済みの全形状、空集合は対象なしを表す。 */
    val enabledShapes: Set<BlockShape>? = null,
    val maxBlocks: Int =
        TogoSettingsLimits.DEFAULT_MAX_BLOCKS.coerceAtMost(TogoSettingsLimits.MAX_MAX_BLOCKS),
    val radius: Int = TogoSettingsLimits.DEFAULT_RADIUS.coerceAtMost(TogoSettingsLimits.MAX_RADIUS),
    val durationSeconds: Int =
        TogoSettingsLimits.DEFAULT_DURATION_SECONDS.coerceAtMost(
            TogoSettingsLimits.MAX_DURATION_SECONDS
        ),
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
  const val HARD_MAX_MAX_BLOCKS = 256
  const val DEFAULT_MAX_MAX_BLOCKS = HARD_MAX_MAX_BLOCKS
  var MAX_MAX_BLOCKS = HARD_MAX_MAX_BLOCKS
    private set

  const val DEFAULT_MAX_BLOCKS = 35

  const val MIN_RADIUS = 1
  const val HARD_MAX_RADIUS = 32
  var MAX_RADIUS = HARD_MAX_RADIUS
    private set

  const val DEFAULT_RADIUS = 10

  const val MIN_DURATION_SECONDS = 1
  const val HARD_MAX_DURATION_SECONDS = 300
  var MAX_DURATION_SECONDS = HARD_MAX_DURATION_SECONDS
    private set

  const val DEFAULT_DURATION_SECONDS = 60

  /** ファイルから読み込んだ全体上限を反映する。安全のためハード上限を超えない。 */
  fun applyGlobalLimits(maxBlocks: Int, radius: Int, durationSeconds: Int) {
    MAX_MAX_BLOCKS = maxBlocks.coerceIn(MIN_MAX_BLOCKS, HARD_MAX_MAX_BLOCKS)
    MAX_RADIUS = radius.coerceIn(MIN_RADIUS, HARD_MAX_RADIUS)
    MAX_DURATION_SECONDS = durationSeconds.coerceIn(MIN_DURATION_SECONDS, HARD_MAX_DURATION_SECONDS)
  }
}
