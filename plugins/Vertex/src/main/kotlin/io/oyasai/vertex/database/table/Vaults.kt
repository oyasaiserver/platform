package io.oyasai.vertex.database.table

import org.jetbrains.exposed.dao.id.UUIDTable

object Vaults : UUIDTable("vaults", "player_uuid") {
    val money = integer("money")
    val points = integer("points")
}
