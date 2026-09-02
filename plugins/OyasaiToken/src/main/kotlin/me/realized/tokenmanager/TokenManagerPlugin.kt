package me.realized.tokenmanager

import me.realized.tokenmanager.api.TokenManager
import org.bukkit.Bukkit
import org.bukkit.plugin.java.JavaPlugin

abstract class TokenManagerPlugin : JavaPlugin(), TokenManager {
  protected fun registerCompatInstance() {
    instance = this
  }

  protected fun unregisterCompatInstance() {
    if (instance === this) {
      instance = null
    }
  }

  fun doSync(runnable: Runnable) {
    if (Bukkit.isPrimaryThread()) {
      runnable.run()
    } else {
      Bukkit.getScheduler().runTask(this, runnable)
    }
  }

  fun doAsync(runnable: Runnable) {
    Bukkit.getScheduler().runTaskAsynchronously(this, runnable)
  }

  companion object {
    @Volatile private var instance: TokenManagerPlugin? = null

    @JvmStatic fun getInstance(): TokenManagerPlugin? = instance
  }
}
