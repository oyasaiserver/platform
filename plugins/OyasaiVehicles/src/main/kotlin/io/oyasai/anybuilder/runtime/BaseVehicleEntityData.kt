package io.oyasai.anybuilder.runtime

import org.bukkit.entity.ArmorStand
import org.bukkit.entity.Display
import org.bukkit.entity.Player

interface VehicleEntityData {
  val bodyArmorStands: MutableList<ArmorStand>
  val seatArmorStands: MutableMap<Pair<Int, ArmorStand>, *>
  val displayList: MutableSet<Display>
  var exit: Boolean
  val summoner: Player?

  fun exitTask()

  fun getCarPlayers(): List<Player> =
      seatArmorStands.keys.flatMap { it.second.passengers }.filterIsInstance<Player>()
}

interface VehicleBaseData {
  val name: String

  fun isEmpty(): Boolean
}
