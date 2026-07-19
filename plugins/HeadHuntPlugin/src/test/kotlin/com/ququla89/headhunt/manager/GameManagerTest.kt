package com.ququla89.headhunt.manager

import com.ququla89.headhunt.model.GameMode
import com.ququla89.headhunt.model.TeamMode
import java.util.UUID
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertIs
import kotlin.test.assertNull
import kotlin.test.assertTrue

class GameManagerTest {
  private val treasureOne = UUID.randomUUID()
  private val treasureTwo = UUID.randomUUID()

  @Test
  fun `solo mode rejects unknown treasures and completes once`() {
    val manager = createManager()
    val player = UUID.randomUUID()

    assertNull(manager.start(GameMode.SOLO, TeamMode.SHARED))
    assertIs<FindOutcome.InvalidTreasure>(manager.onTreasureFound(player, UUID.randomUUID()))
    assertFalse(assertIs<FindOutcome.Found>(manager.onTreasureFound(player, treasureOne)).complete)
    assertIs<FindOutcome.AlreadyFoundBySelf>(manager.onTreasureFound(player, treasureOne))
    assertTrue(assertIs<FindOutcome.Found>(manager.onTreasureFound(player, treasureTwo)).complete)
    assertFalse(manager.isRunning)
  }

  @Test
  fun `shared mode uses the team snapshot and rejects nonparticipants`() {
    val teams = TeamManager()
    val alpha = UUID.randomUUID()
    val beta = UUID.randomUUID()
    teams.create("alpha")
    teams.create("beta")
    teams.addMember("alpha", alpha)
    teams.addMember("beta", beta)
    val manager = createManager(teams)

    assertNull(manager.start(GameMode.TEAM, TeamMode.SHARED))
    assertEquals(2, manager.activeTeamCount)
    assertEquals(2, manager.activeParticipantCount)
    assertIs<FindOutcome.NotInTeam>(manager.onTreasureFound(UUID.randomUUID(), treasureOne))
    assertFalse(assertIs<FindOutcome.Found>(manager.onTreasureFound(alpha, treasureOne)).complete)
    assertTrue(assertIs<FindOutcome.Found>(manager.onTreasureFound(alpha, treasureTwo)).complete)
  }

  @Test
  fun `individual mode waits for every snapshotted team member`() {
    val teams = TeamManager()
    val alphaOne = UUID.randomUUID()
    val alphaTwo = UUID.randomUUID()
    val beta = UUID.randomUUID()
    teams.create("alpha")
    teams.create("beta")
    teams.addMember("alpha", alphaOne)
    teams.addMember("alpha", alphaTwo)
    teams.addMember("beta", beta)
    val manager = createManager(teams)

    assertNull(manager.start(GameMode.TEAM, TeamMode.INDIVIDUAL))
    manager.onTreasureFound(alphaOne, treasureOne)
    val firstPlayerComplete =
        assertIs<FindOutcome.Found>(manager.onTreasureFound(alphaOne, treasureTwo))
    assertFalse(firstPlayerComplete.complete)
    manager.onTreasureFound(alphaTwo, treasureOne)
    val teamComplete = assertIs<FindOutcome.Found>(manager.onTreasureFound(alphaTwo, treasureTwo))
    assertTrue(teamComplete.complete)
    assertEquals("alpha", teamComplete.winnerTeamName)
  }

  @Test
  fun `individual mode rejects a player outside the snapshot`() {
    val teams = populatedTeams()
    val manager = createManager(teams)

    assertNull(manager.start(GameMode.TEAM, TeamMode.INDIVIDUAL))
    assertIs<FindOutcome.NotInTeam>(manager.onTreasureFound(UUID.randomUUID(), treasureOne))
  }

  @Test
  fun `team mode requires two populated teams`() {
    val teams = TeamManager()
    teams.create("empty")
    teams.create("populated")
    teams.addMember("populated", UUID.randomUUID())
    val manager = createManager(teams)

    assertIs<StartError.NotEnoughTeams>(manager.start(GameMode.TEAM, TeamMode.SHARED))
  }

  @Test
  fun `starting a game disables every player set mode`() {
    val manager = createManager()
    val first = UUID.randomUUID()
    val second = UUID.randomUUID()
    manager.setSetMode(first, true)
    manager.setSetMode(second, true)

    assertNull(manager.start(GameMode.SOLO, TeamMode.SHARED))
    assertFalse(manager.isSetModeEnabled(first))
    assertFalse(manager.isSetModeEnabled(second))
  }

  private fun createManager(teamManager: TeamManager = TeamManager()): GameManager =
      GameManager(FakeTreasureCatalog(setOf(treasureOne, treasureTwo)), teamManager)

  private fun populatedTeams(): TeamManager =
      TeamManager().apply {
        create("alpha")
        create("beta")
        addMember("alpha", UUID.randomUUID())
        addMember("beta", UUID.randomUUID())
      }

  private class FakeTreasureCatalog(
      private val ids: Set<UUID>,
  ) : TreasureCatalog {
    override val size: Int = ids.size

    override fun contains(id: UUID): Boolean = id in ids
  }
}
