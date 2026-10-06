package icu.oyasai.games.weapons

import kotlin.test.*
import org.junit.jupiter.api.Test

class WeaponDevicesTest {
  @Test
  fun `device formats validate limits and flags`() {
    assertEquals("46", DeviceInfo.parse("landmine", "46,MINECART").before)
    assertEquals("1b", DeviceInfo.parse("remote", "3-1B-Example").before)
    assertEquals(12.0, DeviceInfo.parse("itembomb", "3,12,159,159~14").speed)
    assertEquals(
        listOf(true, false, true, false, true),
        DeviceInfo.parse("trap", "true-false-true-false-true").flags,
    )
    assertFails { DeviceInfo.parse("remote", "0-X-Example") }
    assertFails { DeviceInfo.parse("trap", "true-yes-false-true-false") }
  }

  @Test
  fun `pending and unloaded devices still count against limits`() {
    assertTrue(DeviceInfo.canDeploy(0, 1, 2))
    assertFalse(DeviceInfo.canDeploy(1, 1, 2))
    assertFalse(DeviceInfo.canDeploy(2, 0, 2))
    assertFalse(DeviceInfo.canDeploy(Int.MAX_VALUE, 1, Int.MAX_VALUE))
    assertFalse(DeviceInfo.canDeploy(0, 0, 0))
  }

  @Test
  fun `shops require exact marker and bounded unique id`() {
    assertEquals(17, DeviceInfo.signId("[CS]17"))
    assertNull(DeviceInfo.signId("[CS]0"))
    assertNull(DeviceInfo.signId("[CS]1000"))
    assertNull(DeviceInfo.signId("prefix[CS]17"))
    assertEquals("266" to 3, DeviceInfo.price("266-3"))
    assertEquals("351~9" to 2, DeviceInfo.price("351~9-2"))
    assertNull(DeviceInfo.price("266-0"))
    assertNull(DeviceInfo.price("266-invalid"))
  }

  @Test
  fun `shield only accepts front hemisphere`() {
    assertTrue(DeviceInfo.blocksFromFront(1.0, 0.0, 3.0, 0.0))
    assertFalse(DeviceInfo.blocksFromFront(1.0, 0.0, -3.0, 0.0))
    assertTrue(DeviceInfo.blocksFromFront(0.0, 1.0, 1.0, 2.0))
  }
}
