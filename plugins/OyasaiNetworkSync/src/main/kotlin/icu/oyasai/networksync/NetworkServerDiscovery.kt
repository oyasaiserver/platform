package icu.oyasai.networksync

import com.velocitypowered.api.proxy.ProxyServer
import com.velocitypowered.api.proxy.server.RegisteredServer

class NetworkServerDiscovery(
    private val proxy: ProxyServer,
    private val config: NetworkSyncConfig,
) {
  fun managedServers(): List<RegisteredServer> = proxy.allServers.filter { isManagedServer(it) }

  fun ventureChatServers(): List<RegisteredServer> =
      managedServers().filterNot(::isDirectChatServer)

  fun directChatServers(): List<RegisteredServer> = managedServers().filter(::isDirectChatServer)

  fun isManagedServer(serverName: String): Boolean =
      proxy.getServer(serverName).map(::isManagedServer).orElse(false)

  fun isVentureChatServer(serverName: String): Boolean =
      proxy.getServer(serverName).map(::isVentureChatServer).orElse(false)

  fun isDirectChatServer(serverName: String): Boolean =
      proxy.getServer(serverName).map(::isDirectChatServer).orElse(false)

  private fun isManagedServer(server: RegisteredServer): Boolean =
      server.serverInfo.address.hostString.startsWith(config.serverHostPrefix, ignoreCase = true)

  private fun isVentureChatServer(server: RegisteredServer): Boolean =
      isManagedServer(server) && !isDirectChatServer(server)

  private fun isDirectChatServer(server: RegisteredServer): Boolean =
      config.directChatHostSuffixes.any {
        server.serverInfo.address.hostString.endsWith(it, ignoreCase = true)
      }
}
