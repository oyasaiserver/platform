package icu.oyasai.games

import org.bukkit.configuration.ConfigurationSection

internal fun ConfigurationSection.wholeMoney(path: String, default: Long = 0): Long {
  val value = get(path) ?: return default
  require(value is Int || value is Long) { "$path は整数で指定してください" }
  return (value as Number).toLong().also { require(it >= 0) { "$path は0以上で指定してください" } }
}
