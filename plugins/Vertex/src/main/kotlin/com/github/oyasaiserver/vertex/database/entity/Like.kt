package com.github.oyasaiserver.vertex.database.entity

import com.github.oyasaiserver.vertex.database.table.Likes
import org.jetbrains.exposed.dao.IntEntity
import org.jetbrains.exposed.dao.IntEntityClass
import org.jetbrains.exposed.dao.id.EntityID

class Like(
    id: EntityID<Int>,
) : IntEntity(id) {
    var buildingId by Likes.buildingId
    var playerUuid by Likes.playerUuid
    var timestamp by Likes.timestamp

    companion object : IntEntityClass<Like>(Likes)
}
