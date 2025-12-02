package icu.oyasai.utilities.tpath

import java.util.UUID
import java.util.concurrent.ConcurrentHashMap
import java.util.concurrent.ConcurrentLinkedDeque
import org.bukkit.Location
import org.bukkit.entity.Player

object TeleportManager {
  private val back = ConcurrentHashMap<UUID, ConcurrentLinkedDeque<Location>>()
  private val forward = ConcurrentHashMap<UUID, ConcurrentLinkedDeque<Location>>()
  private val ignoreNext = ConcurrentHashMap.newKeySet<UUID>()

  fun record(player: Player, loc: Location) {
    val b = back.computeIfAbsent(player.uniqueId) { ConcurrentLinkedDeque() }
    b.addFirst(loc)

    forward[player.uniqueId]?.clear()
  }

  // back/forwardによるTPを無視
  fun pushIgnore(player: Player) {
    ignoreNext.add(player.uniqueId)
  }

  fun shouldIgnore(player: Player): Boolean {
    return ignoreNext.remove(player.uniqueId)
  }

  fun getBack(player: Player): Location? {
    val b = back[player.uniqueId] ?: return null
    if (b.isEmpty()) return null
    val current = player.location
    forward.computeIfAbsent(player.uniqueId) { ConcurrentLinkedDeque() }.addFirst(current)
    return b.removeFirst()
  }

  fun getForward(player: Player): Location? {
    val f = forward[player.uniqueId] ?: return null
    if (f.isEmpty()) return null
    val current = player.location
    back.computeIfAbsent(player.uniqueId) { ConcurrentLinkedDeque() }.addFirst(current)
    return f.removeFirst()
  }

  fun clear(player: Player) {
    back.remove(player.uniqueId)
    forward.remove(player.uniqueId)
    ignoreNext.remove(player.uniqueId)
  }
}
