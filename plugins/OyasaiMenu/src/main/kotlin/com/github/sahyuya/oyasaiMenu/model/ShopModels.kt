package com.github.sahyuya.oyasaiMenu.model

import org.bukkit.Material
import org.bukkit.enchantments.Enchantment

data class ShopCategory(
    val id: String,
    val displayName: String,
    val command: String?,
    val items: List<ShopItem>
) {
    val itemsPerPage: Int = 45
    val pageCount: Int get() = maxOf(1, (items.size + itemsPerPage - 1) / itemsPerPage)
    fun getPage(page: Int): List<ShopItem> {
        val start = page * itemsPerPage
        val end = minOf(start + itemsPerPage, items.size)
        return if (start >= items.size) emptyList() else items.subList(start, end)
    }
}

data class ShopItem(
    val material: Material?,
    val materialId: String,
    val buyPrice: Double,
    val sellPrice: Double,
    val customName: String? = null,
    val customLore: List<String> = emptyList(),
    val enchantments: Map<Enchantment, Int> = emptyMap()
) {
    val canBuy: Boolean get() = material != null && buyPrice > 0
    val canSell: Boolean get() = material != null && sellPrice > 0
}

enum class ShopQuantity(val amount: Int, val label: String) {
    ONE(1,   "&f1個"),
    FOUR(4,  "&a4個"),
    SIXTEEN(16, "&b16個"),
    SIXTY_FOUR(64, "&e64個");

    fun next(): ShopQuantity = entries[(ordinal + 1) % entries.size]
}

data class PlayerShopState(
    val categoryId: String,
    val page: Int = 0,
    val quantity: ShopQuantity = ShopQuantity.ONE,
    val isInverted: Boolean = false
)
