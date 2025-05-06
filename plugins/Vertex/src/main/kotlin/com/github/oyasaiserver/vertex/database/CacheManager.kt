package com.github.oyasaiserver.vertex.database

import com.github.oyasaiserver.vertex.database.entity.Building
import com.github.oyasaiserver.vertex.database.entity.Like
import com.github.oyasaiserver.vertex.database.table.Buildings
import com.github.oyasaiserver.vertex.database.table.Likes
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.inventory.ItemStack
import org.bukkit.inventory.meta.SkullMeta
import org.jetbrains.exposed.sql.transactions.transaction
import kotlin.uuid.Uuid
import kotlin.uuid.toJavaUuid

object CacheManager {
    val recievedLikesCache =
        Cache<Uuid, Int> {
            transaction {
                Building
                    .find { Buildings.playerUuid eq it.toJavaUuid() }
                    .map { it.id }
                    .let { Like.find { Likes.buildingId inList it }.toList().size }
            }
        }

    val usernames = Cache<Uuid, String> { Bukkit.getOfflinePlayer(it.toJavaUuid()).name ?: "" }

    val playerhead =
        Cache<Uuid, ItemStack> {
            ItemStack(Material.PLAYER_HEAD).apply {
                itemMeta =
                    (itemMeta as SkullMeta).apply {
                        owningPlayer = Bukkit.getPlayer(it.toJavaUuid())
                    }
            }
        }
}
