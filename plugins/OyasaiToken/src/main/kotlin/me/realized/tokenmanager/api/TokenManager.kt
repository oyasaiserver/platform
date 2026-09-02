package me.realized.tokenmanager.api

import java.util.OptionalLong
import org.bukkit.entity.Player

interface TokenManager {
  fun getTokens(player: Player): OptionalLong

  fun setTokens(player: Player, tokens: Long)

  fun addTokens(player: Player, tokens: Long): Boolean

  fun removeTokens(player: Player, tokens: Long): Boolean

  fun setTokens(playerName: String, tokens: Long)

  fun addTokens(playerName: String, tokens: Long, silent: Boolean)

  fun addTokens(playerName: String, tokens: Long)

  fun removeTokens(playerName: String, tokens: Long, silent: Boolean)

  fun removeTokens(playerName: String, tokens: Long)

  fun reload(): Boolean
}
