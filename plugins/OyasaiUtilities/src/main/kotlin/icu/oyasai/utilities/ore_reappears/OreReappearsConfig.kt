package icu.oyasai.utilities.ore_reappears

import icu.oyasai.utilities.YamlConfig
import org.bukkit.Material

/** 鉱石再出現のコンフィグ設定 */
object OreReappearsConfig : YamlConfig("OreReappears/config.yml", true) {
  /** リペアを適応するワールド名を取得する */
  fun getReappearWorldNames(): List<String> {
    return this.getStringList("EnableWorldName")
  }

  /** リペアする対象のblockのマテリアルと時間を取得する */
  fun getReappearBlockNames(): Map<Material, Pair<Int, Long>> {
    val mList = mutableMapOf<Material, Pair<Int, Long>>()
    val list = this.getStringList("EnableBlockNameAndTickAndMoney")
    list.forEach { blockName ->
      val split = blockName.split(" ")
      if (split.size < 3) return@forEach
      val m = Material.getMaterial(split[0].uppercase()) ?: return@forEach
      val tick = split[1].toIntOrNull() ?: 100
      val money =
          requireNotNull(split[2].toLongOrNull()?.takeIf { it >= 0 }) {
            "鉱石の報酬は0以上の整数で指定してください: $blockName"
          }
      mList[m] = Pair(tick, money)
    }
    return mList
  }
}
