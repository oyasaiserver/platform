package icu.oyasai.citiesskymine.selection

import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertTrue

class WorldEditSelectionPreviewTest {
  @Test
  fun clipsLineToOriginalGridNearPlayer() {
    assertTrue(clippedLineIndices(0.0, 10.0, 20.0, 2.0).isEmpty())
    assertEquals(27L..33L, clippedLineIndices(0.0, 20.0, 10.0, 1.0))
    assertEquals(1L..5L, clippedLineIndices(0.0, 20.0, 1.0, 0.7))
    assertTrue(clippedLineIndices(0.0, 10_000_000.0, 5_000_000.0, 99.0).count() <= 2 * 99 * 3 + 3)
  }

  @Test
  fun volumeLimitIncludesBoundaryWithoutOverflow() {
    assertFalse(exceedsVolumeLimit(250, 160, 250, 10_000_000))
    assertTrue(exceedsVolumeLimit(250, 160, 251, 10_000_000))
    assertTrue(exceedsVolumeLimit(4_294_967_296, 4_294_967_296, 2, 10_000_000))
  }
}
