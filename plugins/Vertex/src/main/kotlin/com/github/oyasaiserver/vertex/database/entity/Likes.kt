package com.github.oyasaiserver.vertex.database.entity

import org.jetbrains.exposed.dao.id.IntIdTable
import org.jetbrains.exposed.sql.ReferenceOption
import org.jetbrains.exposed.sql.kotlin.datetime.CurrentDateTime
import org.jetbrains.exposed.sql.kotlin.datetime.datetime

object Likes : IntIdTable("likes") {
    val buildingId =
        reference(
            "building_id",
            Buildings,
            onDelete = ReferenceOption.CASCADE,
            onUpdate = ReferenceOption.CASCADE,
        )
    val playerUuid = uuid("player_uuid")
    val timestamp = datetime("timestamp").defaultExpression(CurrentDateTime)

    init {
        uniqueIndex(buildingId, playerUuid)
    }
}
