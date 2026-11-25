package io.oyasai.particles.model

import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith
import kotlin.test.assertFalse
import kotlin.test.assertTrue

class AreaShapeTest {

  @Test
  fun `box normalizes coordinates and checks containment`() {
    val box = AreaShape.Box.of(10, 70, -5, 5, 64, -10)
    assertEquals(5, box.minX)
    assertEquals(10, box.maxX)
    assertEquals(64, box.minY)
    assertEquals(70, box.maxY)
    assertEquals(-10, box.minZ)
    assertEquals(-5, box.maxZ)

    assertTrue(box.contains(5.0, 64.0, -10.0))
    assertTrue(box.contains(10.9, 70.9, -4.1))
    assertFalse(box.contains(4.9, 65.0, -8.0))
    assertFalse(box.contains(11.1, 65.0, -8.0))
    assertEquals(7, box.maxSide())
    assertEquals(6L * 7L * 6L, box.volume())
  }

  @Test
  fun `box volume throws on long overflow`() {
    val huge =
        AreaShape.Box(-10_000_000, -10_000_000, -10_000_000, 10_000_000, 10_000_000, 10_000_000)
    assertFailsWith<ArithmeticException> { huge.volume() }
  }

  @Test
  fun `box protection points cover corners and center`() {
    val box = AreaShape.Box.of(0, 60, 0, 20, 80, 20)
    val points = box.sampleProtectionPoints(step = 10)
    assertTrue(points.contains(Triple(0, 60, 0)))
    assertTrue(points.contains(Triple(20, 80, 20)))
    assertTrue(points.contains(Triple(10, 70, 10)))
  }

  @Test
  fun `cylinder checks horizontal radius and height`() {
    val cyl = AreaShape.Cylinder.of(centerX = 0.5, centerZ = 0.5, y1 = 64, y2 = 70, radius = 5.0)
    assertTrue(cyl.contains(0.5, 65.0, 0.5))
    assertTrue(cyl.contains(5.4, 65.0, 0.5))
    assertFalse(cyl.contains(6.0, 65.0, 0.5))
    assertFalse(cyl.contains(0.5, 63.9, 0.5))
    assertFalse(cyl.contains(0.5, 71.1, 0.5))
    assertEquals(7, cyl.height())

    val points = cyl.sampleProtectionPoints(step = 4)
    assertTrue(points.any { it.second == 64 })
    assertTrue(points.any { it.second == 70 })
  }
}
