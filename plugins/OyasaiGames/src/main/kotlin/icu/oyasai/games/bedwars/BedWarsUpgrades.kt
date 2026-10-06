package icu.oyasai.games.bedwars

import org.bukkit.configuration.ConfigurationSection

internal fun upgradePrice(
    kind: String,
    level: Int,
    base: BedWarsPrice?,
    settings: ConfigurationSection,
): BedWarsPrice? {
  require(level >= 0)
  val name =
      when (kind) {
        "protection" -> "Prot"
        "sharpness" -> "Sharpness"
        "efficiency" -> "Efficiency"
        else -> return base
      }
  val limit =
      settings.getInt(
          "upgrades.limit.${kind.replaceFirstChar { it.uppercaseChar() }}",
          when (kind) {
            "sharpness" -> 1
            "efficiency" -> 2
            else -> 4
          },
      )
  if (level >= limit) return null
  val roman = listOf("I", "II", "III", "IV").getOrNull(level) ?: return null
  val amount = settings.getInt("upgrades.prices.$name-$roman", base?.amount ?: 0)
  return if (amount > 0) BedWarsPrice(base?.resource ?: "diamond", amount) else null
}

internal fun forgeAvailable(current: Int, increment: Double, maximum: Double): Boolean {
  require(current >= 0 && increment.isFinite() && maximum.isFinite())
  return increment == .2 && 1.0 + (current + 1) * increment <= maximum + .00001
}

internal fun withinSplitterCube(dx: Double, dy: Double, dz: Double): Boolean =
    listOf(dx, dy, dz).all { it.isFinite() && kotlin.math.abs(it) <= 3.0 }
