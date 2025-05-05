package com.github.oyasaiserver.vertex.database.table

import org.jetbrains.exposed.dao.id.IntIdTable
import org.jetbrains.exposed.sql.kotlin.datetime.CurrentDateTime
import org.jetbrains.exposed.sql.kotlin.datetime.datetime

object Buildings : IntIdTable("buildings") {
    val name = text("name")
    val playerUuid = uuid("player_uuid").index()
    val worldUuid = uuid("world_uuid")
    val x = integer("x")
    val y = integer("y")
    val z = integer("z")
    val createdAt = datetime("created_at").defaultExpression(CurrentDateTime)
}
