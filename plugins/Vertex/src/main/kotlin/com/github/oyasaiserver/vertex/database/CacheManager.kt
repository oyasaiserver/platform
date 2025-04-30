package com.github.oyasaiserver.vertex.database

import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.inventory.ItemStack
import org.bukkit.inventory.meta.SkullMeta
import kotlin.uuid.Uuid
import kotlin.uuid.toJavaUuid

object CacheManager {
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
