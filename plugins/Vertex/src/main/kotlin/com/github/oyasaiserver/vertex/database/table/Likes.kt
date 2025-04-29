package com.github.oyasaiserver.vertex.database.table

import com.github.oyasaiserver.vertex.database.codec.kotlinUuid
import org.jetbrains.exposed.dao.id.IntIdTable
import org.jetbrains.exposed.sql.ReferenceOption
import org.jetbrains.exposed.sql.kotlin.datetime.CurrentDateTime
import org.jetbrains.exposed.sql.kotlin.datetime.datetime
import kotlin.uuid.ExperimentalUuidApi

@OptIn(ExperimentalUuidApi::class)
object Likes : IntIdTable("likes") {
    val buildingId =
        reference(
            "building_id",
            id,
            onDelete = ReferenceOption.CASCADE,
            onUpdate = ReferenceOption.CASCADE,
        )
    val playerUuid = kotlinUuid("player_uuid")
    val timestamp = datetime("timestamp").defaultExpression(CurrentDateTime)

    init {
        uniqueIndex(buildingId, playerUuid)
    }
}
