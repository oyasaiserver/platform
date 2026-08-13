package com.ququla89.headhunt.manager

import com.ququla89.headhunt.model.GameMode
import com.ququla89.headhunt.model.GameState
import com.ququla89.headhunt.model.TeamMode
import java.util.UUID

sealed interface FindOutcome {
  data object GameNotRunning : FindOutcome

  data object InvalidTreasure : FindOutcome

  data object NotInTeam : FindOutcome

  data object AlreadyFoundBySelf : FindOutcome

  data class AlreadyFoundByTeammate(
      val finderId: UUID,
  ) : FindOutcome

  data class Found(
      val complete: Boolean,
      val winnerId: UUID?,
      val winnerTeamName: String?,
  ) : FindOutcome
}

sealed interface StartError {
  data object AlreadyRunning : StartError

  data object NoTreasures : StartError

  data object NotEnoughTeams : StartError
}

class GameManager(
    private val treasureCatalog: TreasureCatalog,
    private val teamManager: TeamManager,
) {
  var state: GameState = GameState.IDLE
    private set

  var mode: GameMode? = null
    private set

  var teamMode: TeamMode = TeamMode.SHARED
    private set

  private val setModePlayers: MutableSet<UUID> = mutableSetOf()

  // playerId -> found treasure ids. Used for SOLO mode and TEAM/INDIVIDUAL mode.
  private val soloFound: MutableMap<UUID, MutableSet<UUID>> = mutableMapOf()

  // teamName -> (treasureId -> finder playerId). Used for TEAM/SHARED mode.
  private val teamFound: MutableMap<String, MutableMap<UUID, UUID>> = mutableMapOf()

  private val activeTeams: MutableMap<String, Set<UUID>> = linkedMapOf()
  private val activeTeamByPlayer: MutableMap<UUID, String> = mutableMapOf()

  val isRunning: Boolean
    get() = state == GameState.RUNNING

  val activeTeamCount: Int
    get() = activeTeams.size

  val activeParticipantCount: Int
    get() = activeTeamByPlayer.size

  fun setSetMode(
      playerId: UUID,
      enabled: Boolean,
  ) {
    if (enabled) {
      setModePlayers.add(playerId)
    } else {
      setModePlayers.remove(playerId)
    }
  }

  fun isSetModeEnabled(playerId: UUID): Boolean = playerId in setModePlayers

  fun start(
      mode: GameMode,
      teamMode: TeamMode,
  ): StartError? {
    if (state == GameState.RUNNING) return StartError.AlreadyRunning
    if (treasureCatalog.size == 0) return StartError.NoTreasures

    val populatedTeams = teamManager.all().filter { it.members.isNotEmpty() }
    if (mode == GameMode.TEAM && populatedTeams.size < 2) return StartError.NotEnoughTeams

    setModePlayers.clear()
    this.mode = mode
    this.teamMode = teamMode
    soloFound.clear()
    teamFound.clear()
    activeTeams.clear()
    activeTeamByPlayer.clear()
    if (mode == GameMode.TEAM) {
      for (team in populatedTeams) {
        val members = team.members.toSet()
        activeTeams[team.name] = members
        for (member in members) {
          activeTeamByPlayer[member] = team.name
        }
      }
    }
    state = GameState.RUNNING
    return null
  }

  fun stop() {
    state = GameState.IDLE
    mode = null
    soloFound.clear()
    teamFound.clear()
    activeTeams.clear()
    activeTeamByPlayer.clear()
  }

  fun resetProgress() {
    soloFound.clear()
    teamFound.clear()
  }

  fun canDeleteAll(): Boolean = state != GameState.RUNNING

  fun findsOf(playerId: UUID): Set<UUID> = soloFound[playerId] ?: emptySet()

  fun findsOfTeam(teamName: String): Set<UUID> = teamFound[teamName]?.keys ?: emptySet()

  fun onTreasureFound(
      playerId: UUID,
      treasureId: UUID,
  ): FindOutcome {
    if (state != GameState.RUNNING) return FindOutcome.GameNotRunning
    if (!treasureCatalog.contains(treasureId)) return FindOutcome.InvalidTreasure
    val currentMode = mode ?: return FindOutcome.GameNotRunning
    val total = treasureCatalog.size

    return when (currentMode) {
      GameMode.SOLO -> {
        findSolo(playerId, treasureId, total)
      }

      GameMode.TEAM -> {
        when (teamMode) {
          TeamMode.INDIVIDUAL -> findIndividual(playerId, treasureId, total)
          TeamMode.SHARED -> findShared(playerId, treasureId, total)
        }
      }
    }
  }

  private fun findSolo(
      playerId: UUID,
      treasureId: UUID,
      total: Int,
  ): FindOutcome {
    val set = soloFound.getOrPut(playerId) { mutableSetOf() }
    if (treasureId in set) return FindOutcome.AlreadyFoundBySelf
    set.add(treasureId)
    val complete = set.size >= total
    if (complete) state = GameState.IDLE
    return FindOutcome.Found(complete, if (complete) playerId else null, null)
  }

  private fun findIndividual(
      playerId: UUID,
      treasureId: UUID,
      total: Int,
  ): FindOutcome {
    val teamName = activeTeamByPlayer[playerId] ?: return FindOutcome.NotInTeam
    val set = soloFound.getOrPut(playerId) { mutableSetOf() }
    if (treasureId in set) return FindOutcome.AlreadyFoundBySelf
    set.add(treasureId)

    val members = activeTeams.getValue(teamName)
    val complete = members.all { memberId -> (soloFound[memberId]?.size ?: 0) >= total }
    if (complete) state = GameState.IDLE
    return FindOutcome.Found(
        complete,
        if (complete) playerId else null,
        if (complete) teamName else null,
    )
  }

  private fun findShared(
      playerId: UUID,
      treasureId: UUID,
      total: Int,
  ): FindOutcome {
    val teamName = activeTeamByPlayer[playerId] ?: return FindOutcome.NotInTeam
    val map = teamFound.getOrPut(teamName) { mutableMapOf() }
    val existingFinder = map[treasureId]
    if (existingFinder != null) return FindOutcome.AlreadyFoundByTeammate(existingFinder)
    map[treasureId] = playerId
    val complete = map.size >= total
    if (complete) state = GameState.IDLE
    return FindOutcome.Found(
        complete,
        if (complete) playerId else null,
        if (complete) teamName else null,
    )
  }
}
