package io.oyasai.economy

import java.util.Locale
import org.bukkit.configuration.ConfigurationSection

internal data class CurrencyPolicy(
    val id: String,
    val displayName: String,
    val prefix: String,
    val suffix: String,
    val initial: Long,
    val maximum: Long,
    val transferMinimum: Long,
    val transferMaximum: Long,
    val root: String,
    val shortcuts: Map<String, List<String>> = emptyMap(),
    val enabled: Boolean = true,
) {
  init {
    require(id.matches(Regex("[a-z][a-z0-9_]*"))) { "通貨IDが不正です: $id" }
    require(initial in 0..maximum && transferMinimum >= 1 && transferMaximum >= transferMinimum)
    require(root.matches(Regex("[a-z][a-z0-9_-]*")) && root != "economy")
    require(shortcuts.keys.all { it in setOf("balance", "pay", "top") })
    require(
        shortcuts.values.flatten().all { it.matches(Regex("[a-z][a-z0-9_-]*")) && it != "economy" }
    )
  }

  fun format(amount: Long) = prefix + String.format(Locale.ROOT, "%,d", amount) + suffix

  fun parse(input: String): Long? {
    val withUnit = input.removePrefix(prefix)
    val unit =
        listOf(suffix, displayName)
            .filter { it.isNotEmpty() }
            .distinct()
            .sortedByDescending { it.length }
            .firstOrNull { withUnit.endsWith(it) }
    val text = if (unit == null) withUnit else withUnit.removeSuffix(unit)
    if (!text.matches(Regex("(?:[0-9]+|[0-9]{1,3}(?:,[0-9]{3})+)"))) return null
    return text.replace(",", "").toLongOrNull()
  }

  companion object {
    fun load(config: ConfigurationSection): List<CurrencyPolicy> {
      val section =
          requireNotNull(config.getConfigurationSection("currencies")) { "currencies が必要です" }
      val policies =
          section.getKeys(false).map { id ->
            val c = section.getConfigurationSection(id)!!
            val shortcuts = c.getConfigurationSection("shortcuts")
            CurrencyPolicy(
                id,
                c.getString("display-name")!!,
                c.getString("prefix", "")!!,
                c.getString("suffix", "")!!,
                c.whole("initial"),
                c.whole("maximum"),
                c.whole("transfer-minimum"),
                c.whole("transfer-maximum"),
                c.getString("root")!!,
                shortcuts?.getKeys(false)?.associateWith { shortcuts.getStringList(it) }.orEmpty(),
                c.getBoolean("enabled", true),
            )
          }
      require(policies.isNotEmpty())
      val commands = policies.flatMap { listOf(it.root) + it.shortcuts.values.flatten() }
      require(commands.distinct().size == commands.size) { "コマンド名が重複しています" }
      return policies
    }
  }
}

internal fun ConfigurationSection.whole(path: String): Long {
  val value = get(path)
  require(value is Int || value is Long) {
    "$path は整数で指定してください (${value?.javaClass?.simpleName ?: "未設定"})"
  }
  return (value as Number).toLong()
}
