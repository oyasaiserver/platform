package icu.oyasai.games.bedwars

import java.util.UUID
import kotlin.test.*

class BedWarsPartyTest {
  private val leader = UUID(0, 1)
  private val member = UUID(0, 2)
  private val other = UUID(0, 3)

  @Test
  fun `invitation expires exactly at configured boundary`() {
    var time = 1000L
    val party = BedWarsParty(expirationSeconds = 2, clockMillis = { time })
    party.invite(leader, member)
    time = 2999L
    assertEquals(0, party.expire())
    time = 3000L
    assertFailsWith<IllegalStateException> { party.accept(member, leader) }
    assertNull(party.view(member))
    party.invite(leader, member)
    assertEquals(listOf(leader, member), party.accept(member, leader).members)
  }

  @Test
  fun `only leaders invite kick or dissolve and membership is exclusive`() {
    val party = BedWarsParty()
    party.invite(leader, member)
    party.accept(member, leader)
    assertFailsWith<IllegalStateException> { party.invite(member, other) }
    assertFailsWith<IllegalStateException> { party.invite(other, member) }
    assertFailsWith<IllegalStateException> { party.kick(member, leader) }
    assertFailsWith<IllegalStateException> { party.disband(member) }
    assertFailsWith<IllegalStateException> { party.accept(member, leader) }
    party.kick(leader, member)
    assertNull(party.view(member))
    assertEquals(listOf(leader), party.view(leader)!!.members)
  }

  @Test
  fun `leader leaves clears members and pending invitations`() {
    val party = BedWarsParty()
    party.invite(leader, member)
    party.accept(member, leader)
    party.invite(leader, other)
    assertEquals(listOf(leader, member), party.leave(leader))
    assertNull(party.view(leader))
    assertNull(party.view(member))
    assertFailsWith<IllegalStateException> { party.accept(other, leader) }
  }

  @Test
  fun `automatic joins and leaves apply only to configured leaders`() {
    val party = BedWarsParty()
    party.invite(leader, member)
    party.accept(member, leader)
    assertEquals(listOf(member), party.autoMembers(leader))
    assertTrue(party.autoMembers(member).isEmpty())
    party.leave(member)
    assertTrue(party.autoMembers(leader).isEmpty())
    val disabledAuto = BedWarsParty(leaderAutojoinAutoleave = false)
    disabledAuto.invite(leader, member)
    disabledAuto.accept(member, leader)
    assertTrue(disabledAuto.autoMembers(leader).isEmpty())
    val disabled = BedWarsParty(enabled = false)
    assertFailsWith<IllegalStateException> { disabled.invite(leader, member) }
    assertFailsWith<IllegalArgumentException> { BedWarsParty(expirationSeconds = 0) }
  }
}
