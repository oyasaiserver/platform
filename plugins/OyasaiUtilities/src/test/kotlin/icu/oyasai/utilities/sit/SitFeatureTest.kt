package icu.oyasai.utilities.sit

import kotlin.test.Test
import kotlin.test.assertEquals
import org.bukkit.Location
import org.bukkit.util.BoundingBox

class SitFeatureTest {
  @Test
  fun `foot support spans scaled feet and extends just below them`() {
    val feet = Location(null, 10.0, 64.5, -3.0)
    assertEquals(BoundingBox(9.4, 64.45, -3.6, 10.6, 64.5, -2.4), footSupportBox(feet, 2.0))
  }
}
