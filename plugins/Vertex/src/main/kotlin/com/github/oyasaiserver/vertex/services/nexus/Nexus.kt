package com.github.oyasaiserver.vertex.services.nexus

import arrow.core.getOrElse
import arrow.core.toOption
import com.github.oyasaiserver.vertex.database.DatabaseManager.mongo
import com.github.oyasaiserver.vertex.database.collection.PlayerData
import com.github.oyasaiserver.vertex.util.launchAsync
import com.mongodb.client.model.Filters.eq
import kotlinx.coroutines.flow.firstOrNull
import org.bukkit.event.EventHandler
import org.bukkit.event.EventPriority
import org.bukkit.event.Listener
import org.bukkit.event.player.PlayerJoinEvent
import kotlin.uuid.Uuid
import kotlin.uuid.toKotlinUuid

object Nexus : Listener {
    @EventHandler(priority = EventPriority.HIGHEST)
    fun onPlayerJoin(event: PlayerJoinEvent) {
        event.player.uniqueId
            .toKotlinUuid()
            .launchAsync { getOrInsertPlayerData(it) }
    }

    suspend fun getOrInsertPlayerData(uuid: Uuid): PlayerData {
        val collection = mongo.getCollection<PlayerData>()
        return collection.find(eq(PlayerData::uuid.name, uuid)).firstOrNull().toOption().getOrElse {
            PlayerData(uuid).also { collection.insertOne(it) }
        }
    }
}
