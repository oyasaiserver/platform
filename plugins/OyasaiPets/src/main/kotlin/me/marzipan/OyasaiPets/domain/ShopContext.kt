@file:Suppress("DEPRECATION")

package me.marzipan.OyasaiPets

import net.kyori.adventure.text.format.NamedTextColor.*
import org.bukkit.*
import org.bukkit.command.*
import org.bukkit.entity.*
import org.bukkit.inventory.*

/** ショップ購入時のコンテキスト情報 ショップMOBからGUIを開く際に使用 */
data class ShopContext(val type: EntityType, val variant: String?, val cost: Int)
