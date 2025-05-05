package com.github.oyasaiserver.vertex.services.nexus

import arrow.core.getOrElse
import arrow.core.toOption
import com.github.oyasaiserver.vertex.Vertex.Companion.plugin
import com.github.oyasaiserver.vertex.database.DatabaseManager.mongo
import com.github.oyasaiserver.vertex.database.collection.PlayerData
import com.github.oyasaiserver.vertex.services.Service
import com.github.oyasaiserver.vertex.util.launchAsync
import com.mongodb.client.model.Filters.eq
import com.mongodb.client.model.FindOneAndUpdateOptions
import com.mongodb.client.model.ReturnDocument
import kotlinx.coroutines.flow.firstOrNull
import org.bson.conversions.Bson
import org.bukkit.event.EventHandler
import org.bukkit.event.EventPriority
import org.bukkit.event.player.PlayerJoinEvent
import kotlin.uuid.Uuid
import kotlin.uuid.toKotlinUuid

object Nexus : Service() {
    override fun onEnable() {
        plugin.server.onlinePlayers
            .map { it.uniqueId.toKotlinUuid() }
            .launchAsync { it.forEach { getOrInsertPlayerData(it) } }
    }

    @EventHandler(priority = EventPriority.LOWEST)
    fun onPlayerJoin(event: PlayerJoinEvent) {
        event.player.uniqueId
            .toKotlinUuid()
            .launchAsync { getOrInsertPlayerData(it) }
    }

    suspend fun updatePlayerData(
        uuid: Uuid,
        update: List<Bson>,
    ) = mongo
        .getCollection<PlayerData>()
        .findOneAndUpdate(
            eq(PlayerData::uuid.name, uuid),
            update,
            FindOneAndUpdateOptions().returnDocument(ReturnDocument.AFTER),
        ).toOption()
        .getOrElse { getOrInsertPlayerData(uuid) }

    suspend fun getOrInsertPlayerData(uuid: Uuid): PlayerData {
        val collection = mongo.getCollection<PlayerData>()
        return collection.find(eq(PlayerData::uuid.name, uuid)).firstOrNull().toOption().getOrElse {
            PlayerData(uuid).also { collection.insertOne(it) }
        }
    }
}
