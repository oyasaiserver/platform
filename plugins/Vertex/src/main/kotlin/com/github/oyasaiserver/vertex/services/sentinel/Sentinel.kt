package com.github.oyasaiserver.vertex.services.sentinel

import arrow.core.firstOrNone
import arrow.core.getOrElse
import com.github.oyasaiserver.vertex.Vertex.Companion.plugin
import com.github.oyasaiserver.vertex.database.entity.Vault
import com.github.oyasaiserver.vertex.database.table.Vaults
import com.github.oyasaiserver.vertex.services.Service
import com.github.oyasaiserver.vertex.util.launchAsync
import org.bukkit.event.EventHandler
import org.bukkit.event.EventPriority
import org.bukkit.event.player.PlayerJoinEvent
import org.jetbrains.exposed.sql.transactions.transaction
import kotlin.uuid.Uuid
import kotlin.uuid.toJavaUuid
import kotlin.uuid.toKotlinUuid

object Sentinel : Service() {
    override fun onEnable() {
        plugin.server.onlinePlayers
            .map { it.uniqueId.toKotlinUuid() }
            .launchAsync { it.forEach { getOrInitializeVault(it) } }
    }

    @EventHandler(priority = EventPriority.LOWEST)
    fun onPlayerJoin(event: PlayerJoinEvent) {
        event.player.uniqueId
            .toKotlinUuid()
            .launchAsync { getOrInitializeVault(it) }
    }

    fun getOrInitializeVault(uuid: Uuid): Vault =
        transaction {
            Vault
                .find { Vaults.id eq uuid.toJavaUuid() }
                .firstOrNone()
                .getOrElse {
                    Vault.new(id = uuid.toJavaUuid()) {
                        money = 0
                        points = 0
                    }
                }
        }
}
