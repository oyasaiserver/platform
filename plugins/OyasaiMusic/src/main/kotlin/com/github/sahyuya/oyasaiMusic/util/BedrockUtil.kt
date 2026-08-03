package com.github.sahyuya.oyasaiMusic.util

import org.bukkit.entity.Player

/**
 * 統合版(Bedrock/Geyser)プレイヤーの検知。
 * UI/UX設計書 1章の指示通り、Floodgate APIには依存せず、
 * 名前の接頭辞（デフォルト "."）のみで判定する。
 */
object BedrockUtil {
    fun isBedrock(player: Player, prefix: String): Boolean =
        prefix.isNotEmpty() && player.name.startsWith(prefix)
}
