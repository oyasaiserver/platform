package icu.oyasai.games.dice

import org.bukkit.Material

enum class DiceType(
    val idPrefix: String,
    val baseName: String,
    val description: String,
    val maxEyes: Int,
    val material: Material,
) {
  D2("d2", "コイントス", "表・裏 (1〜2) を判定するコイントス", 2, Material.BAMBOO_TRAPDOOR),
  D4("d4", "4面ダイス", "1から4までの目が出る四面体ダイス", 4, Material.CHISELED_SANDSTONE),
  D6("d6", "通常のサイコロ", "1から6の目が出る基本的なサイコロ", 6, Material.LODESTONE),
  D8("d8", "8面ダイス", "1から8までの目が出る八面体ダイス", 8, Material.DIAMOND_BLOCK),
  D10("d10", "10面ダイス", "1から10までの目が出る十面体ダイス", 10, Material.CHISELED_COPPER),
  D12("d12", "12面ダイス", "1から12までの目が出る十二面体ダイス", 12, Material.EMERALD_BLOCK),
  D20("d20", "20面ダイス", "1から20までの目が出るTRPGの王道ダイス", 20, Material.AMETHYST_BLOCK),
  D100("d100", "100面ダイス", "1から100までの目が出るパーセンテージダイス", 100, Material.CRYING_OBSIDIAN),
}

data class DiceMode(
    val type: DiceType,
    val diceCount: Int = 1,
) {
  val id: String
    get() = "${diceCount}${type.idPrefix}"

  val maxEyes: Int
    get() = type.maxEyes

  val material: Material
    get() = type.material

  val displayName: String
    get() =
        if (diceCount == 1) {
          when (type) {
            DiceType.D2 -> "コイントス (1D2)"
            DiceType.D6 -> "通常のサイコロ (1D6)"
            else -> "${type.baseName} (1D${type.maxEyes})"
          }
        } else {
          when (type) {
            DiceType.D2 -> "${diceCount}枚コイントス (${diceCount}D2)"
            DiceType.D6 -> "${diceCount}個サイコロ (${diceCount}D6)"
            else -> "${diceCount}個${type.baseName} (${diceCount}D${type.maxEyes})"
          }
        }

  val description: String
    get() =
        if (diceCount == 1) {
          type.description
        } else {
          "${type.baseName}を${diceCount}個同時に投げて合計を算出 (${diceCount}〜${maxEyes * diceCount})"
        }

  /** 同じダイス種別で個数（1〜10個）を切り替えたモードを取得 */
  fun withCount(count: Int): DiceMode {
    val clamped = count.coerceIn(1, 10)
    if (this.diceCount == clamped) return this
    return copy(diceCount = clamped)
  }

  companion object {
    @JvmField val D2 = DiceMode(DiceType.D2, 1)
    @JvmField val D4 = DiceMode(DiceType.D4, 1)
    @JvmField val ONE_D6 = DiceMode(DiceType.D6, 1)
    @JvmField val D8 = DiceMode(DiceType.D8, 1)
    @JvmField val D10 = DiceMode(DiceType.D10, 1)
    @JvmField val D12 = DiceMode(DiceType.D12, 1)
    @JvmField val D20 = DiceMode(DiceType.D20, 1)
    @JvmField val D100 = DiceMode(DiceType.D100, 1)

    @JvmField val BASE_MODES = listOf(D2, D4, ONE_D6, D8, D10, D12, D20, D100)

    val allIds: List<String> by lazy {
      DiceType.entries.flatMap { t -> (1..10).map { c -> "${c}${t.idPrefix}" } }
    }

    @JvmStatic
    fun fromId(id: String?): DiceMode {
      if (id == null) return ONE_D6
      val clean = id.trim().lowercase()

      if (clean == "dice" || clean == "saikoro") return ONE_D6
      if (clean == "coin" || clean == "cointoss" || clean == "flip") return D2

      when (clean) {
        "d2" -> return D2
        "d4" -> return D4
        "d6" -> return ONE_D6
        "d8" -> return D8
        "d10" -> return D10
        "d12" -> return D12
        "d20" -> return D20
        "d100" -> return D100
      }

      val regex = """^([1-9]|10)?d?(\d+)$""".toRegex()
      val match = regex.find(clean)
      if (match != null) {
        val count = match.groupValues[1].toIntOrNull() ?: 1
        val eyes = match.groupValues[2].toIntOrNull() ?: 6
        val type = DiceType.entries.find { it.maxEyes == eyes } ?: DiceType.D6
        return DiceMode(type, count.coerceIn(1, 10))
      }

      return ONE_D6
    }
  }
}
