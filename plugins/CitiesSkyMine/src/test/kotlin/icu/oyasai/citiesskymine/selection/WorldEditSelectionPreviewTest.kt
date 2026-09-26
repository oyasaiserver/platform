package icu.oyasai.citiesskymine.selection

import kotlin.test.Test
import kotlin.test.assertFalse
import kotlin.test.assertTrue

class WorldEditSelectionPreviewTest {
  @Test
  fun volumeLimitIncludesBoundaryWithoutOverflow() {
    assertFalse(exceedsVolumeLimit(250, 160, 250, 10_000_000))
    assertTrue(exceedsVolumeLimit(250, 160, 251, 10_000_000))
    assertTrue(exceedsVolumeLimit(4_294_967_296, 4_294_967_296, 2, 10_000_000))
  }
}
