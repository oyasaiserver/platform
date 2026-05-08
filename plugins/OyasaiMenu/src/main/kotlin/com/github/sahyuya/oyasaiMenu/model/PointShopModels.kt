package com.github.sahyuya.oyasaiMenu.model

import org.bukkit.Material

data class PointShopCategory(
    val id: String,
    val displayName: String,
    val items: Map<String, PointShopItem>
) {
    val itemsPerPage: Int = 45
    val itemList: List<PointShopItem> = items.entries
        .sortedBy { it.key.toIntOrNull() ?: Int.MAX_VALUE }
        .map { it.value }
    val pageCount: Int get() = maxOf(1, (itemList.size + itemsPerPage - 1) / itemsPerPage)

    fun getPage(page: Int): List<PointShopItem> {
        val start = page * itemsPerPage
        val end   = minOf(start + itemsPerPage, itemList.size)
        return if (start >= itemList.size) emptyList() else itemList.subList(start, end)
    }
}

data class PointShopItem(
    val key: String,
    val icon: Material,
    val name: String,
    val lore: List<String>,
    val cost: Long,
    val message: String,
    val commands: List<String>,
    val closeOnPurchase: Boolean = false,
    val customTexture: String? = null
)

data class PlayerPointShopState(
    val categoryId: String,
    val page: Int = 0
)