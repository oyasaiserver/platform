package me.marzipan.OyasaiPets

import kotlin.test.Test
import kotlin.test.assertEquals
import org.bukkit.configuration.file.YamlConfiguration

/** BigWolfConfig の読み込み・既定値・一覧・変更の振る舞いを1つの指紋に固定する。 */
class BigWolfConfigTest {
  private val keys =
      BigWolfConfig.asEntryList().map { it.first } +
          listOf("skillBookCostLv1", "skillBookCostLv2", "skillBookCostLv3", "unknownKey")

  private fun fingerprint(): String {
    val out = StringBuilder()
    // 既定値（キーの集合と値。順序は問わない）
    val defaults = YamlConfiguration()
    BigWolfConfig.applyDefaultsTo(defaults)
    out.appendLine(
        defaults.defaults!!
            .getValues(true)
            .filterValues { it !is org.bukkit.configuration.ConfigurationSection }
            .toSortedMap()
    )
    // 全パスに別々の値を入れて読み込む（Lv2 だけ旧キー costLv2 からの引き継ぎを確かめる）
    val yaml = YamlConfiguration()
    var n = 1
    for ((path, value) in defaults.defaults!!.getValues(true).toSortedMap()) {
      if (path.startsWith("skillbook.") && path.endsWith("Lv2") && path != "skillbook.costLv2")
          continue
      when (value) {
        is Int -> yaml.set(path, 1000 + n++)
        is Double -> yaml.set(path, n++ + 0.25)
        is Boolean -> yaml.set(path, !value)
      }
    }
    BigWolfConfig.loadFrom(yaml)
    out.appendLine(BigWolfConfig.asEntryList())
    out.appendLine(
        listOf(
            BigWolfConfig.itemShopPetFoodCost,
            BigWolfConfig.itemShopPetBrushCost,
            BigWolfConfig.itemShopPetTreatCost,
            BigWolfConfig.itemShopHealPotionCost,
            BigWolfConfig.itemShopParticleCost,
            BigWolfConfig.itemShopToyCost,
        )
    )
    out.appendLine(keys.map { it to BigWolfConfig.getField(it) })
    // 変更: 不正値・正しい値
    for (key in keys) {
      val current = BigWolfConfig.getField(key)
      val good =
          when (current) {
            is Int -> "7"
            is Double -> "0.5"
            is Boolean -> "TRUE"
            else -> "1"
          }
      out.appendLine(
          "$key bad=${BigWolfConfig.setField(key, "x")} good=${BigWolfConfig.setField(key, good)}"
      )
    }
    out.appendLine(BigWolfConfig.asEntryList())
    return out.toString()
  }

  @Test
  fun behaviorIsUnchanged() {
    // 期待値は表形式化の前（2026-09-24）の実装から取った出力
    val actual = fingerprint()
    val expected = javaClass.getResource("/bigwolf-config-fingerprint.txt")!!.readText()
    if (expected != actual)
        java.io.File("build/bigwolf-config-fingerprint.actual.txt").writeText(actual)
    assertEquals(expected, actual)
  }
}
