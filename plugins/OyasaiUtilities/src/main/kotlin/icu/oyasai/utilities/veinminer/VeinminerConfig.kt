package icu.oyasai.utilities.veinminer

import icu.oyasai.utilities.OyasaiUtilities
import icu.oyasai.utilities.YamlConfig
import org.bukkit.Material

private const val DEFAULT_MAX_CHAIN = 64
private const val DEFAULT_COOLDOWN_TICKS = 20

internal fun intAtLeast(
    value: Int?,
    minimum: Int,
    fallback: Int,
    onFallback: () -> Unit,
): Int = if (value != null && value >= minimum) value else fallback.also { onFallback() }

internal fun buildMaterialGroups(
    groups: Map<String, List<String>>,
    warn: (String) -> Unit,
): Map<Material, String> = buildMap {
  for ((group, names) in groups) {
    for (name in names) {
      val material = Material.getMaterial(name.uppercase())
      if (material == null) {
        warn("グループ '$group' のブロック名 '$name' は不明です。無視します。")
        continue
      }

      val existingGroup = this[material]
      if (existingGroup == null) {
        this[material] = group
      } else if (existingGroup != group) {
        warn(
            "ブロック '${material.name.lowercase()}' は複数グループ ('$existingGroup', '$group') にあります。" +
                "先に見つかった '$existingGroup' を使用します。"
        )
      }
    }
  }
}

object VeinminerConfig : YamlConfig("Veinminer/config.yml", true) {
  var maxChain = DEFAULT_MAX_CHAIN
    private set

  var cooldownTicks = DEFAULT_COOLDOWN_TICKS
    private set

  var requireSneak = true
    private set

  private var materialGroups: Map<Material, String> = emptyMap()
    private set

  fun reloadConfig() {
    saveDefault()
    reload()

    maxChain = readIntAtLeast("max_chain", 1, DEFAULT_MAX_CHAIN)
    cooldownTicks = readIntAtLeast("cooldown_ticks", 0, DEFAULT_COOLDOWN_TICKS)
    requireSneak = getBoolean("require_sneak", true)
    val groups =
        getConfigurationSection("groups")
            ?.getValues(false)
            ?.mapValues { (_, value) -> (value as? List<*>)?.filterIsInstance<String>().orEmpty() }
            .orEmpty()
    materialGroups = buildMaterialGroups(groups, ::warn)
    if (materialGroups.isEmpty()) {
      warn("'groups' に有効なブロックがありません。連鎖採掘は発動しません。")
    }
  }

  internal fun groupOf(material: Material): String? = materialGroups[material]

  private fun readIntAtLeast(key: String, minimum: Int, fallback: Int): Int {
    val configuredValue = get(key)
    val value = if (isInt(key)) getInt(key) else null
    return intAtLeast(value, minimum, fallback) { warnFallback(key, configuredValue, fallback) }
  }

  private fun warnFallback(key: String, configuredValue: Any?, fallback: Any) {
    warn("'$key' の値 '$configuredValue' は不正です。'$fallback' を使用します。")
  }

  private fun warn(message: String) =
      OyasaiUtilities.plugin.logger.warning("Veinminer/config.yml: $message")
}
