package io.oyasai.vertex

import io.oyasai.lib.minecraft.Service
import io.oyasai.vertex.services.sentry.SentryService
import io.oyasai.vertex.services.sociallikes.SocialLikesService
import org.bukkit.plugin.java.JavaPlugin

class Vertex : JavaPlugin() {
  override fun onLoad() {
    services.forEach { it.onLoad() }
  }

  override fun onEnable() {
    services.forEach {
      server.pluginManager.registerEvents(it, this)
      it.onEnable()
    }
  }

  override fun onDisable() {
    services.forEach { it.onDisable() }
  }

  companion object {
    val plugin by lazy { getPlugin(Vertex::class.java) }
    val services = listOf<Service>(SentryService, SocialLikesService)
  }
}
