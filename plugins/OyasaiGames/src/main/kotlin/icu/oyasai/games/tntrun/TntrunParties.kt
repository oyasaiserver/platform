package icu.oyasai.games.tntrun

import java.util.UUID

internal class RunParties {
  private val groups = linkedMapOf<UUID, MutableSet<UUID>>()
  private val invites = hashMapOf<UUID, MutableSet<UUID>>()
  private val blocked = hashMapOf<UUID, MutableSet<UUID>>()

  fun leader(id: UUID) = groups.entries.firstOrNull { id in it.value }?.key

  fun members(id: UUID) = groups[id]?.toSet() ?: setOf(id)

  fun create(id: UUID) {
    check(leader(id) == null)
    groups[id] = linkedSetOf(id)
  }

  fun invite(leader: UUID, target: UUID) {
    check(
        leader in groups &&
            leader != target &&
            leader(target) == null &&
            target !in blocked[leader].orEmpty()
    )
    invites.getOrPut(leader) { hashSetOf() }.add(target)
  }

  fun accept(id: UUID, leader: UUID) {
    check(
        leader(id) == null &&
            leader in groups &&
            id in invites[leader].orEmpty() &&
            id !in blocked[leader].orEmpty()
    )
    invites[leader]!!.remove(id)
    groups[leader]!!.add(id)
  }

  fun decline(id: UUID, leader: UUID) {
    invites[leader]?.remove(id)
  }

  fun leave(id: UUID) {
    val leader = leader(id) ?: return
    if (leader == id) {
      groups.remove(id)
      invites.remove(id)
      blocked.remove(id)
    } else groups[leader]?.remove(id)
    invites.values.forEach { it.remove(id) }
  }

  fun kick(leader: UUID, target: UUID) {
    check(leader in groups && leader != target && target in groups[leader].orEmpty())
    groups[leader]!!.remove(target)
    invites[leader]?.remove(target)
    blocked.getOrPut(leader) { hashSetOf() }.add(target)
  }

  fun unkick(leader: UUID, target: UUID) {
    check(leader in groups)
    blocked[leader]?.remove(target)
  }

  fun clear() {
    groups.clear()
    invites.clear()
    blocked.clear()
  }
}
