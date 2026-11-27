package icu.oyasai.utilities.sit

import java.util.UUID
import org.bukkit.NamespacedKey
import org.bukkit.entity.Entity
import org.bukkit.entity.Interaction
import org.bukkit.entity.Player
import org.bukkit.persistence.PersistentDataType

internal enum class PlayerSitMode {
  RANK,
  ALL;

  companion object {
    fun parse(value: String): PlayerSitMode? = entries.firstOrNull { it.name.equals(value, true) }
  }
}

internal object PlayerSitRules {
  data class Ride(val carrierId: UUID, val seat: Interaction)

  fun interactionHeight(riderScale: Double, carrierScale: Double): Float =
      (maxOf(0.0, 0.6 * riderScale - 0.18 * carrierScale) + 0.08).toFloat()

  fun playerPassengers(passengers: List<Entity>, seatKey: NamespacedKey): List<UUID>? =
      passengers.map { passenger ->
        when (passenger) {
          is Player -> passenger.uniqueId
          is Interaction -> {
            if (!passenger.persistentDataContainer.has(seatKey, PersistentDataType.BYTE))
                return null
            val rider = passenger.passengers.singleOrNull() as? Player ?: return null
            rider.uniqueId
          }
          else -> return null
        }
      }

  val rankOrder =
      listOf(
          "white",
          "blue",
          "takumi",
          "builder",
          "jokyu",
          "chukyu",
          "default",
          "mod",
          "admini",
          "admin",
          "dev",
      )

  fun canRide(riderGroup: String, targetGroup: String): Boolean {
    fun index(group: String) = rankOrder.indexOf(group).takeIf { it >= 0 } ?: Int.MAX_VALUE
    return index(riderGroup) < index(targetGroup)
  }

  // Detach only this rider and riders above them, never their carrier or unrelated stacks.
  // Return top-first edges after removing all tracking, so event callbacks cannot re-enter them.
  fun detach(rides: MutableMap<UUID, Ride>, id: UUID): List<Ride> {
    val affected = mutableListOf<UUID>()
    val visited = mutableSetOf<UUID>()
    fun collect(current: UUID) {
      if (!visited.add(current)) return
      affected.add(current)
      rides.filterValues { it.carrierId == current }.keys.forEach { collect(it) }
    }
    collect(id)
    return affected.asReversed().mapNotNull { rides.remove(it) }
  }

  // Walk the actual passenger graph, including passengers mounted by other plugins.
  // Null means an unavailable entity or a non-player passenger; branching is also rejected.
  fun top(rider: UUID, target: UUID, passengers: (UUID) -> List<UUID>?): UUID? {
    val visited = mutableSetOf(rider)
    var current = target
    while (visited.add(current)) {
      val next = passengers(current) ?: return null
      if (next.isEmpty()) return current
      if (next.size != 1) return null
      current = next.single()
    }
    return null
  }
}
