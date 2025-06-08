package io.oyasai.vertex.database.entity

import io.oyasai.vertex.database.table.Vaults
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass
import org.jetbrains.exposed.dao.id.EntityID
import java.util.UUID

class Vault(
    playerUuid: EntityID<UUID>,
) : UUIDEntity(playerUuid) {
    var money by Vaults.money
    var points by Vaults.points

    companion object : UUIDEntityClass<Vault>(Vaults)
}
