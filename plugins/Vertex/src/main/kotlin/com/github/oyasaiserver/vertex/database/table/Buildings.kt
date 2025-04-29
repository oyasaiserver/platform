package com.github.oyasaiserver.vertex.database.table

import com.github.oyasaiserver.vertex.database.codec.kotlinUuid
import org.jetbrains.exposed.dao.id.IntIdTable
import org.jetbrains.exposed.sql.kotlin.datetime.CurrentDateTime
import org.jetbrains.exposed.sql.kotlin.datetime.datetime
import kotlin.uuid.ExperimentalUuidApi

@OptIn(ExperimentalUuidApi::class)
object Buildings : IntIdTable("buildings") {
    val name = text("name")
    val playerUuid = kotlinUuid("player_uuid")
    val worldUuid = kotlinUuid("world_uuid")
    val x = integer("x")
    val y = integer("y")
    val z = integer("z")
    val createdAt = datetime("created_at").defaultExpression(CurrentDateTime)

    init {
        uniqueIndex(playerUuid)
    }
}
