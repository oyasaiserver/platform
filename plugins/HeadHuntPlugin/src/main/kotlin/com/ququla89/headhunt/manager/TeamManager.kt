package com.ququla89.headhunt.manager

import com.ququla89.headhunt.model.Team
import java.util.UUID

class TeamManager {
    private val teams: MutableMap<String, Team> = linkedMapOf()

    fun all(): Collection<Team> = teams.values

    fun find(name: String): Team? = teams[name]

    fun teamOf(playerId: UUID): Team? = teams.values.firstOrNull { playerId in it.members }

    fun create(name: String): Boolean {
        if (teams.containsKey(name)) return false
        teams[name] = Team(name)
        return true
    }

    fun delete(name: String): Boolean = teams.remove(name) != null

    fun addMember(name: String, playerId: UUID): Boolean {
        val team = teams[name] ?: return false
        team.members.add(playerId)
        return true
    }

    fun removeMember(playerId: UUID): Boolean {
        val team = teamOf(playerId) ?: return false
        team.members.remove(playerId)
        return true
    }
}
