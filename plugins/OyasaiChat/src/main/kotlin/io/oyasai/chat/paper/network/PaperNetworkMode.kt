package io.oyasai.chat.paper.network

import org.bukkit.Server

object PaperNetworkMode {
  // The typed isProxyEnabled API also includes BungeeCord; read Velocity's exact flag.
  @Suppress("DEPRECATION")
  fun velocityEnabled(server: Server): Boolean =
      server.spigot().paperConfig.getBoolean("proxies.velocity.enabled", false)
}
