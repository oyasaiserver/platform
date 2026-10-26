package com.github.sahyuya.oyasaiMenu.loader

import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertNull
import kotlin.test.assertTrue
import org.bukkit.configuration.file.YamlConfiguration

class PointShopLoaderTest {
  @Test
  fun acceptsZeroAndPositiveCostsWithEnabledByDefault() {
    for (cost in listOf(0L, 20L)) {
      val sec = YamlConfiguration().apply { set("cost", cost) }
      assertEquals(cost, parsePointShopCost(sec) { error(it) })
      sec.set("enabled", true)
      assertEquals(cost, parsePointShopCost(sec) { error(it) })
    }
  }

  @Test
  fun warnsAndSkipsMissingNegativeOrInvalidCosts() {
    for (cost in listOf(null, -1L, "invalid", 1.5)) {
      val warnings = mutableListOf<String>()
      val sec = YamlConfiguration().apply { set("cost", cost) }
      assertNull(parsePointShopCost(sec) { warnings += it })
      assertEquals(1, warnings.size)
    }
  }

  @Test
  fun skipsDisabledItemsBeforeCheckingCost() {
    for (cost in listOf(null, 0L, 20L, -1L)) {
      val warnings = mutableListOf<String>()
      val sec =
          YamlConfiguration().apply {
            set("cost", cost)
            set("enabled", false)
          }
      assertNull(parsePointShopCost(sec) { warnings += it })
      assertTrue(warnings.isEmpty())
    }
  }
}
