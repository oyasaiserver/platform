package icu.oyasai.utilities.veinminer

import icu.oyasai.utilities.OyasaiUtilities
import icu.oyasai.utilities.YamlConfig

private const val DEFAULT_MAX_CHAIN = 64
private const val DEFAULT_COOLDOWN_TICKS = 20

internal enum class ChainScope(val configValue: String) {
  FAMILY("family"),
  ALL_ORES("all_ores"),
}

internal fun intAtLeast(
    value: Int?,
    minimum: Int,
    fallback: Int,
    onFallback: () -> Unit,
): Int = if (value != null && value >= minimum) value else fallback.also { onFallback() }

internal fun parseChainScope(value: String?, onFallback: () -> Unit): ChainScope =
    ChainScope.entries.firstOrNull { it.configValue == value }
        ?: ChainScope.FAMILY.also { onFallback() }

object VeinminerConfig : YamlConfig("Veinminer/config.yml", true) {
  var maxChain = DEFAULT_MAX_CHAIN
    private set

  var cooldownTicks = DEFAULT_COOLDOWN_TICKS
    private set

  var requireSneak = true
    private set

  internal var chainScope = ChainScope.FAMILY
    private set

  fun reloadConfig() {
    saveDefault()
    reload()

    maxChain = readIntAtLeast("max_chain", 1, DEFAULT_MAX_CHAIN)
    cooldownTicks = readIntAtLeast("cooldown_ticks", 0, DEFAULT_COOLDOWN_TICKS)
    requireSneak = getBoolean("require_sneak", true)
    val configuredScope = getString("chain_scope")
    chainScope =
        parseChainScope(configuredScope) {
          warnFallback("chain_scope", configuredScope, ChainScope.FAMILY.configValue)
        }
  }

  private fun readIntAtLeast(key: String, minimum: Int, fallback: Int): Int {
    val configuredValue = get(key)
    val value = if (isInt(key)) getInt(key) else null
    return intAtLeast(value, minimum, fallback) { warnFallback(key, configuredValue, fallback) }
  }

  private fun warnFallback(key: String, configuredValue: Any?, fallback: Any) {
    OyasaiUtilities.plugin.logger.warning(
        "Veinminer/config.yml: '$key' の値 '$configuredValue' は不正です。'$fallback' を使用します。"
    )
  }
}
