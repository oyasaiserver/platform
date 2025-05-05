package com.github.oyasaiserver.vertex.database.table

import org.jetbrains.exposed.dao.id.IntIdTable
import org.jetbrains.exposed.sql.ReferenceOption
import org.jetbrains.exposed.sql.kotlin.datetime.CurrentDateTime
import org.jetbrains.exposed.sql.kotlin.datetime.datetime

object Likes : IntIdTable("likes") {
    val buildingId = reference("building_id", id, onDelete = ReferenceOption.CASCADE).index()
    val playerUuid = uuid("player_uuid").index()
    val timestamp = datetime("timestamp").defaultExpression(CurrentDateTime)
}
