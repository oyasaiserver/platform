package io.oyasaiserver.anybuilder.runtime

import org.bukkit.entity.ArmorStand
import org.bukkit.entity.Display
import org.bukkit.entity.Player
import java.util.UUID

interface VehicleEntityData {
    val bodyArmorStands: MutableList<ArmorStand>
    val seatArmorStands: MutableMap<Pair<Int, ArmorStand>, *>
    val displayList: MutableSet<Display>
    var exit: Boolean
    var owner: UUID?
    val summoner: Player?
    fun exitTask()
    fun getCarPlayers(): List<Player> = seatArmorStands.keys
        .flatMap { it.second.passengers }
        .filterIsInstance<Player>()
}

interface VehicleBaseData {
    val name: String
    fun isEmpty(): Boolean
}
