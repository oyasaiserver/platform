@file:Suppress("DEPRECATION")

package me.realized.tm.api

import io.oyasai.oyasaitoken.api.OyasaiTokenApi
import io.oyasai.oyasaitoken.api.OyasaiTokenCommitApi
import java.util.UUID
import java.util.concurrent.CompletableFuture
import me.realized.tokenmanager.api.TokenManager
import org.bukkit.Bukkit
import org.bukkit.entity.Player

open class TMAPI {
  companion object {
    @JvmStatic
    fun addTokens(player: Player, amount: Int) {
      tokenManager()?.addTokens(player, amount.toLong())
    }

    @JvmStatic
    fun addTokens(uuid: UUID, amount: Int) {
      oyasaiToken()?.addTokens(uuid, amount.toLong())
          ?: tokenManager()
              ?.addTokens(Bukkit.getOfflinePlayer(uuid).name ?: uuid.toString(), amount.toLong())
    }

    /** Completes after OyasaiToken commits this add operation, or false when it is unavailable. */
    @JvmStatic
    fun addTokensWithCommit(uuid: UUID, amount: Int): CompletableFuture<Boolean> {
      return oyasaiTokenCommit()?.addTokensWithCommit(uuid, amount.toLong())
          ?: CompletableFuture.completedFuture(false)
    }

    @JvmStatic
    fun removeTokens(player: Player, amount: Int): Boolean {
      return tokenManager()?.removeTokens(player, amount.toLong()) ?: false
    }

    @JvmStatic
    fun removeTokens(uuid: UUID, amount: Int): Boolean {
      oyasaiToken()?.let {
        return it.removeTokens(uuid, amount.toLong())
      }
      val manager = tokenManager() ?: return false
      val player = Bukkit.getPlayer(uuid)
      if (player != null) {
        return manager.removeTokens(player, amount.toLong())
      }
      return false
    }

    @JvmStatic
    fun setTokens(player: Player, amount: Int) {
      tokenManager()?.setTokens(player, amount.toLong())
    }

    @JvmStatic
    fun setTokens(uuid: UUID, amount: Int) {
      oyasaiToken()?.setTokens(uuid, amount.toLong())
          ?: tokenManager()
              ?.setTokens(Bukkit.getOfflinePlayer(uuid).name ?: uuid.toString(), amount.toLong())
    }

    @JvmStatic
    fun getTokens(player: Player): Long {
      return tokenManager()?.getTokens(player)?.orElse(0L) ?: 0L
    }

    @JvmStatic
    fun getTokens(uuid: UUID): Long {
      return oyasaiToken()?.getBalance(uuid)
          ?: tokenManager()?.getTokens(Bukkit.getPlayer(uuid) ?: return 0L)?.orElse(0L)
          ?: 0L
    }

    private fun tokenManager(): TokenManager? {
      return Bukkit.getServer().servicesManager.getRegistration(TokenManager::class.java)?.provider
          ?: Bukkit.getPluginManager().getPlugin("TokenManager") as? TokenManager
    }

    private fun oyasaiToken(): OyasaiTokenApi? {
      return Bukkit.getServer()
          .servicesManager
          .getRegistration(OyasaiTokenApi::class.java)
          ?.provider ?: Bukkit.getPluginManager().getPlugin("TokenManager") as? OyasaiTokenApi
    }

    private fun oyasaiTokenCommit(): OyasaiTokenCommitApi? {
      return Bukkit.getServer()
          .servicesManager
          .getRegistration(OyasaiTokenCommitApi::class.java)
          ?.provider ?: Bukkit.getPluginManager().getPlugin("TokenManager") as? OyasaiTokenCommitApi
    }
  }
}
