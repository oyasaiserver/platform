package icu.oyasai.games.pvp

import java.math.BigDecimal
import java.math.RoundingMode
import java.util.Locale

internal enum class Goal(val teams: Boolean, val kills: Boolean) {
  TeamDeathMatch(true, true),
  TeamLives(true, false),
  TeamPlayerLives(true, false),
  PlayerDeathMatch(false, true),
  PlayerLives(false, false),
}

internal fun resolveName(input: String, names: Collection<String>): String? {
  val query = input.lowercase(Locale.ROOT)
  if (query.isBlank()) return null
  names
      .firstOrNull { it.equals(input, true) }
      ?.let {
        return it
      }
  val aliases =
      names.filter { it.lowercase(Locale.ROOT).removeSuffix("_v2").removeSuffix("_new") == query }
  if (aliases.isNotEmpty()) return aliases.singleOrNull()
  for (match in
      listOf<(String) -> Boolean>(
          { it.endsWith(query) },
          { it.startsWith(query) },
          { it.contains(query) },
      )) {
    val found = names.filter { match(it.lowercase(Locale.ROOT)) }
    if (found.isNotEmpty()) return found.singleOrNull()
  }
  return null
}

internal fun resolveBetArena(input: String, targets: Map<String, Collection<String>>): String? =
    targets.filterValues { resolveName(input, it) != null }.keys.singleOrNull()

internal fun betPayout(
    amount: Double,
    winningTotal: Double,
    total: Double,
    factor: Double,
): Double {
  require(listOf(amount, winningTotal, total, factor).all { it.isFinite() && it >= 0 })
  require(winningTotal > 0 && amount <= winningTotal && winningTotal <= total)
  return BigDecimal.valueOf(amount)
      .multiply(BigDecimal.valueOf(total))
      .multiply(BigDecimal.valueOf(factor))
      .divide(BigDecimal.valueOf(winningTotal), 2, RoundingMode.HALF_UP)
      .toDouble()
}

internal fun autoClass(value: String, team: String): String {
  val entries = value.split(';').map { it.trim() }
  return entries
      .firstOrNull { it.substringBefore(':').equals(team, true) && ':' in it }
      ?.substringAfter(':') ?: entries.firstOrNull { ':' !in it }.orEmpty()
}

internal fun readyToStart(
    teams: Boolean,
    members: List<Pair<String, Boolean>>,
    kitsSelected: Boolean,
    minimum: Int,
    auto: Boolean,
    eachPlayer: Boolean,
    eachTeam: Boolean,
    ratio: Double,
): Boolean {
  require(minimum >= 2 && ratio.isFinite() && ratio in 0.0..1.0)
  if (members.size < minimum || !kitsSelected) return false
  if (teams && members.map { it.first }.toSet().size < 2) return false
  if (auto) return true
  if (eachPlayer && members.any { !it.second }) return false
  if (
      teams &&
          eachTeam &&
          members.groupBy { it.first }.values.any { group -> group.none { it.second } }
  )
      return false
  return members.count { it.second }.toDouble() / members.size >= ratio
}

internal data class Fighter(
    val id: String,
    val team: String,
    var lives: Int,
    var kills: Int = 0,
    var deaths: Int = 0,
    var active: Boolean = true,
)

internal class MatchRules(val goal: Goal, val limit: Int, val suicideScore: Boolean = false) {
  val fighters = linkedMapOf<String, Fighter>()
  val teamLives = linkedMapOf<String, Int>()
  val teamKills = linkedMapOf<String, Int>()

  fun add(id: String, team: String) {
    fighters[id] = Fighter(id, team, limit.coerceAtLeast(1))
    teamLives.putIfAbsent(team, limit.coerceAtLeast(1))
    teamKills.putIfAbsent(team, 0)
  }

  fun death(id: String, killer: String?) {
    val victim = fighters.getValue(id)
    if (!victim.active) return
    victim.deaths++
    val attacker =
        fighters[killer]?.takeIf {
          it.active && it.id != id && (!goal.teams || it.team != victim.team)
        }
    attacker?.let {
      it.kills++
      teamKills[it.team] = teamKills.getValue(it.team) + 1
    }
    if (goal.kills) {
      if (attacker == null && suicideScore) {
        if (goal.teams)
            teamKills.keys
                .filter { it != victim.team }
                .forEach { teamKills[it] = teamKills.getValue(it) + 1 }
        else fighters.values.filter { it.active && it !== victim }.forEach { it.kills++ }
      }
    } else if (goal == Goal.TeamLives) {
      teamLives[victim.team] = teamLives.getValue(victim.team) - 1
      if (teamLives.getValue(victim.team) <= 0)
          fighters.values.filter { it.team == victim.team }.forEach { it.active = false }
    } else {
      victim.lives--
      if (victim.lives <= 0) victim.active = false
    }
  }

  fun sides(): Set<String> =
      fighters.values.filter { it.active }.map { if (goal.teams) it.team else it.id }.toSet()

  fun winners(timed: Boolean = false): Set<String>? {
    val sides = sides()
    if (sides.size <= 1) return sides
    val scores =
        sides.associateWith { side ->
          val members =
              fighters.values.filter { if (goal.teams) it.team == side else it.id == side }
          when {
            goal.kills -> if (goal.teams) teamKills.getValue(side) else members.sumOf { it.kills }
            goal == Goal.TeamLives -> teamLives.getValue(side)
            else -> members.filter { it.active }.sumOf { it.lives }
          }
        }
    if (goal.kills && scores.values.any { it >= limit.coerceAtLeast(1) })
        return scores.filterValues { it >= limit.coerceAtLeast(1) }.keys
    if (!timed) return null
    val best = scores.values.maxOrNull() ?: return emptySet()
    val winners = scores.filterValues { it == best }.keys
    return if (winners.size == sides.size) emptySet() else winners
  }
}
