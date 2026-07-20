@file:Suppress("DEPRECATION")

package me.marzipan.OyasaiPets

import net.kyori.adventure.text.format.NamedTextColor.*
import net.kyori.adventure.text.serializer.legacy.LegacyComponentSerializer
import net.kyori.adventure.text.serializer.plain.PlainTextComponentSerializer
import org.bukkit.*
import org.bukkit.command.*
import org.bukkit.entity.*
import org.bukkit.inventory.*

// ===== ファイル共通ユーティリティ =====
/** PlainTextComponentSerializer のシングルトンキャッシュ（毎回生成しない） */
internal val PLAIN_TEXT: PlainTextComponentSerializer = PlainTextComponentSerializer.plainText()
/** LegacyComponentSerializer (ampersand) のシングルトンキャッシュ */
internal val LEGACY_AMP: LegacyComponentSerializer = LegacyComponentSerializer.legacyAmpersand()
