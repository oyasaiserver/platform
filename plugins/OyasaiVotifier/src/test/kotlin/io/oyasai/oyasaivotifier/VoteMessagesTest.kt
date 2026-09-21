package io.oyasai.oyasaivotifier

import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith

class VoteMessagesTest {
  private val messages =
      VoteMessages(
          "&8(&6zVoteParty&8) ",
          "&c%player%&6さんが投票しました！&7(&b%zvoteparty_votes_recorded%&7/&a%zvoteparty_votes_required_total%&7)",
          "",
          "",
          emptyList(),
      )

  @Test
  fun `each vote announces its recorded progress and the next vote starts after a party reset`() {
    val first = recordPartyVote(0, 2)
    val party = recordPartyVote(first.nextProgress, 2)
    val afterParty = recordPartyVote(party.nextProgress, 2)

    assertEquals(
        listOf(
            "§8(§6zVoteParty§8) §cMR0203§6さんが投票しました！§7(§b1§7/§a2§7)",
            "§8(§6zVoteParty§8) §cMR0203§6さんが投票しました！§7(§b2§7/§a2§7)",
            "§8(§6zVoteParty§8) §cMR0203§6さんが投票しました！§7(§b1§7/§a2§7)",
        ),
        listOf(first, party, afterParty).map {
          messages.voteBroadcastChat("MR0203", it.recordedProgress, 2)
        },
    )
    assertEquals(0, party.nextProgress)
    assertEquals(1, afterParty.nextProgress)
  }

  @Test
  fun `message placeholders reject unsafe usernames`() {
    assertFailsWith<IllegalArgumentException> { messages.voteBroadcastChat("MR0203§c", 1, 60) }
  }
}
