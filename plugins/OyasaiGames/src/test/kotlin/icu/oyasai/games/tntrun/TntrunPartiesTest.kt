package icu.oyasai.games.tntrun

import java.util.UUID
import kotlin.test.*

class TntrunPartiesTest {
  @Test
  fun `membership needs an invitation and cannot belong to two parties`() {
    val p = RunParties()
    val a = UUID.randomUUID()
    val b = UUID.randomUUID()
    val c = UUID.randomUUID()
    p.create(a)
    p.create(c)
    assertFails { p.accept(b, a) }
    p.invite(a, b)
    p.accept(b, a)
    assertEquals(a, p.leader(b))
    assertEquals(setOf(a, b), p.members(a))
    assertFails { p.invite(c, b) }
    assertFails { p.create(b) }
    p.leave(a)
    assertNull(p.leader(b))
  }

  @Test
  fun `kick removes pending invitation until explicitly unkicked`() {
    val p = RunParties()
    val a = UUID.randomUUID()
    val b = UUID.randomUUID()
    p.create(a)
    p.invite(a, b)
    p.accept(b, a)
    p.kick(a, b)
    assertFails { p.invite(a, b) }
    assertFails { p.accept(b, a) }
    p.unkick(a, b)
    p.invite(a, b)
    p.decline(b, a)
    assertFails { p.accept(b, a) }
    p.invite(a, b)
    p.accept(b, a)
    p.leave(b)
    assertEquals(setOf(a), p.members(a))
    p.clear()
    assertNull(p.leader(a))
  }
}
