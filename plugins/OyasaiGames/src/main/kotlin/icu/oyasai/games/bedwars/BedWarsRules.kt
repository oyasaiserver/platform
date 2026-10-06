package icu.oyasai.games.bedwars

import java.util.Locale
import kotlin.math.floor

// Keep reading final-kill configuration, but do not pay it to match observed legacy behaviour.
internal fun bedWarsRewardAmount(type: String, configured: Double): Double =
    if (type == "final-kill") 0.0 else configured

internal data class BwFighter(
    val id: String,
    val team: String,
    var active: Boolean = true,
    var respawning: Boolean = false,
    var kills: Int = 0,
    var deaths: Int = 0,
    var finalKills: Int = 0,
)

internal class BwRules {
  val fighters = linkedMapOf<String, BwFighter>()
  val beds = linkedMapOf<String, Boolean>()

  fun add(id: String, team: String) {
    require(id !in fighters) { "Player already participating" }
    fighters[id] = BwFighter(id, team)
    beds.putIfAbsent(team, true)
  }

  fun bed(team: String): Boolean = beds[team] == true

  fun destroyBed(team: String, attackerTeam: String): Boolean {
    if (team == attackerTeam || !bed(team)) return false
    beds[team] = false
    return true
  }

  // Null means that this death was already processed or the victim was eliminated.
  fun die(id: String, killer: String? = null): Boolean? {
    val victim = fighters[id] ?: return null
    if (!victim.active || victim.respawning) return null
    val final = !bed(victim.team)
    victim.deaths++
    victim.active = !final
    victim.respawning = !final
    fighters[killer]
        ?.takeIf { it.active && !it.respawning && it.team != victim.team }
        ?.let {
          it.kills++
          if (final) it.finalKills++
        }
    return final
  }

  fun respawn(id: String): Boolean {
    val player = fighters[id] ?: return false
    if (!player.active || !player.respawning) return false
    player.respawning = false
    return true
  }

  fun rejoin(id: String, team: String): Boolean {
    val player = fighters[id] ?: return false
    if (player.active || player.team != team || !bed(team)) return false
    player.active = true
    player.respawning = false
    return true
  }

  fun eliminate(id: String) {
    fighters[id]?.let {
      it.active = false
      it.respawning = false
    }
  }

  fun aliveTeams(): Set<String> =
      fighters.values.filter { it.active }.mapTo(linkedSetOf()) { it.team }

  fun winner(): String? = aliveTeams().singleOrNull()

  fun canFinish(): Boolean = aliveTeams().size <= 1
}

internal fun chooseTeam(capacities: Map<String, Int>, members: Map<*, String>): String? {
  require(capacities.values.all { it > 0 })
  val counts = members.values.groupingBy { it }.eachCount()
  return capacities.keys
      .filter { (counts[it] ?: 0) < capacities.getValue(it) }
      .minByOrNull { counts[it] ?: 0 }
}

internal fun resolveBwName(input: String, names: Collection<String>): String? =
    names.filter { it.lowercase(Locale.ROOT) == input.lowercase(Locale.ROOT) }.singleOrNull()

internal fun generatorIntervalTicks(baseSeconds: Double, level: Double = 1.0): Long {
  require(baseSeconds.isFinite() && baseSeconds > 0 && level.isFinite() && level > 0)
  // The observed legacy generator scheduler truncates configured seconds before ticking.
  val ticks = floor(baseSeconds) * 20.0
  require(ticks.isFinite() && ticks < Long.MAX_VALUE.toDouble())
  return ticks.toLong().coerceAtLeast(1)
}

internal fun timedGeneratorLevel(type: String, elapsed: Int, schedule: Map<String, Int>): Int {
  require(elapsed >= 0)
  val prefix = type.replaceFirstChar { it.uppercaseChar() } + "-"
  return schedule.entries
      .filter { it.key.startsWith(prefix) && it.value <= elapsed }
      .maxOfOrNull {
        when (it.key.removePrefix(prefix)) {
          "II" -> 2
          "III" -> 3
          "IV" -> 4
          else -> 1
        }
      } ?: 1
}

internal fun generatorAmount(level: Double, roll: Double): Int {
  require(level.isFinite() && level in 0.0..64.0 && roll.isFinite() && roll >= 0 && roll < 1)
  val whole = level.toInt()
  return whole + if (roll < level - whole) 1 else 0
}

internal fun gameStartMaterials(enabled: Boolean, configured: List<String>): List<String> =
    if (!enabled) emptyList()
    else
        configured.ifEmpty {
          listOf(
              "WOODEN_SWORD",
              "LEATHER_HELMET",
              "LEATHER_CHESTPLATE",
              "LEATHER_LEGGINGS",
              "LEATHER_BOOTS",
          )
        }
