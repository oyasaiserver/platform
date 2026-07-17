package com.ququla89.headhunt.manager

import com.ququla89.headhunt.model.GameMode
import com.ququla89.headhunt.model.GameState
import com.ququla89.headhunt.model.TeamMode
import java.util.UUID

sealed interface FindOutcome {
    data object GameNotRunning : FindOutcome
    data object NotInTeam : FindOutcome
    data object AlreadyFoundBySelf : FindOutcome
    data class AlreadyFoundByTeammate(val finderId: UUID) : FindOutcome
    data class Found(val complete: Boolean, val winnerId: UUID?, val winnerTeamName: String?) : FindOutcome
}

sealed interface StartError {
    data object AlreadyRunning : StartError
    data object NoTreasures : StartError
    data object NotEnoughTeams : StartError
}

class GameManager(
    private val treasureManager: TreasureManager,
    private val teamManager: TeamManager,
) {
    var state: GameState = GameState.IDLE
        private set
    var mode: GameMode? = null
        private set
    var teamMode: TeamMode = TeamMode.SHARED
        private set
    var setModeEnabled: Boolean = false

    // playerId -> found treasure ids. Used for SOLO mode and TEAM/INDIVIDUAL mode.
    private val soloFound: MutableMap<UUID, MutableSet<UUID>> = mutableMapOf()

    // teamName -> (treasureId -> finder playerId). Used for TEAM/SHARED mode.
    private val teamFound: MutableMap<String, MutableMap<UUID, UUID>> = mutableMapOf()

    val isRunning: Boolean
        get() = state == GameState.RUNNING

    fun start(mode: GameMode, teamMode: TeamMode): StartError? {
        if (state == GameState.RUNNING) return StartError.AlreadyRunning
        if (treasureManager.size == 0) return StartError.NoTreasures
        if (mode == GameMode.TEAM && teamManager.all().size < 2) return StartError.NotEnoughTeams

        setModeEnabled = false
        this.mode = mode
        this.teamMode = teamMode
        soloFound.clear()
        teamFound.clear()
        state = GameState.RUNNING
        return null
    }

    fun stop() {
        state = GameState.IDLE
    }

    fun resetProgress() {
        soloFound.clear()
        teamFound.clear()
    }

    fun canDeleteAll(): Boolean = state != GameState.RUNNING

    fun findsOf(playerId: UUID): Set<UUID> = soloFound[playerId] ?: emptySet()

    fun findsOfTeam(teamName: String): Set<UUID> = teamFound[teamName]?.keys ?: emptySet()

    fun onTreasureFound(playerId: UUID, treasureId: UUID): FindOutcome {
        if (state != GameState.RUNNING) return FindOutcome.GameNotRunning
        val currentMode = mode ?: return FindOutcome.GameNotRunning
        val total = treasureManager.size

        return when (currentMode) {
            GameMode.SOLO -> findSolo(playerId, treasureId, total)
            GameMode.TEAM -> when (teamMode) {
                TeamMode.INDIVIDUAL -> findSolo(playerId, treasureId, total)
                TeamMode.SHARED -> findShared(playerId, treasureId, total)
            }
        }
    }

    private fun findSolo(playerId: UUID, treasureId: UUID, total: Int): FindOutcome {
        val set = soloFound.getOrPut(playerId) { mutableSetOf() }
        if (treasureId in set) return FindOutcome.AlreadyFoundBySelf
        set.add(treasureId)
        val complete = set.size >= total
        if (complete) state = GameState.IDLE
        val teamName = teamManager.teamOf(playerId)?.name
        return FindOutcome.Found(complete, if (complete) playerId else null, if (complete) teamName else null)
    }

    private fun findShared(playerId: UUID, treasureId: UUID, total: Int): FindOutcome {
        val team = teamManager.teamOf(playerId) ?: return FindOutcome.NotInTeam
        val map = teamFound.getOrPut(team.name) { mutableMapOf() }
        val existingFinder = map[treasureId]
        if (existingFinder != null) return FindOutcome.AlreadyFoundByTeammate(existingFinder)
        map[treasureId] = playerId
        val complete = map.size >= total
        if (complete) state = GameState.IDLE
        return FindOutcome.Found(complete, if (complete) playerId else null, if (complete) team.name else null)
    }
}
