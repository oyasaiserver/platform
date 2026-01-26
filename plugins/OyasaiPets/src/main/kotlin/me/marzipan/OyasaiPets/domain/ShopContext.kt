package me.marzipan.OyasaiPets.domain

import org.bukkit.entity.EntityType

/**
 * ショップ購入時のコンテキスト情報
 * ショップMOBからGUIを開く際に使用
 */
data class ShopContext(
    val type: EntityType,
    val variant: String?,
    val cost: Int
)

