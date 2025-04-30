package com.github.oyasaiserver.vertex.database.entity

import com.github.oyasaiserver.vertex.database.table.Buildings
import org.jetbrains.exposed.dao.IntEntity
import org.jetbrains.exposed.dao.IntEntityClass
import org.jetbrains.exposed.dao.id.EntityID
import kotlin.uuid.ExperimentalUuidApi

@OptIn(ExperimentalUuidApi::class)
class Building(
    id: EntityID<Int>,
) : IntEntity(id) {
    var name by Buildings.name
    var playerUuid by Buildings.playerUuid
    var createdAt by Buildings.createdAt
    var worldUuid by Buildings.worldUuid
    var x by Buildings.x
    var y by Buildings.y
    var z by Buildings.z

    companion object : IntEntityClass<Building>(Buildings)
}
