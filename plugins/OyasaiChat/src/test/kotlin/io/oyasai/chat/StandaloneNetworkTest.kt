package io.oyasai.chat

import io.oyasai.chat.common.model.ChannelDefinition
import io.oyasai.chat.common.model.NetworkSettings
import io.oyasai.chat.paper.network.PaperNetworkMode
import java.lang.reflect.Proxy
import kotlin.test.*
import org.bukkit.Server
import org.bukkit.configuration.file.YamlConfiguration
import org.junit.jupiter.api.Test

class StandaloneNetworkTest {
  @Suppress("DEPRECATION")
  private fun server(velocity: Boolean): Server {
    val configuration =
        YamlConfiguration().apply {
          set("proxies.velocity.enabled", velocity)
          set("proxies.bungee-cord.online-mode", true)
        }
    val spigot =
        object : Server.Spigot() {
          override fun getPaperConfig(): YamlConfiguration = configuration
        }
    return Proxy.newProxyInstance(Server::class.java.classLoader, arrayOf(Server::class.java)) {
        _,
        method,
        _ ->
      check(method.name == "spigot")
      spigot
    } as Server
  }

  @Test
  fun `reads Velocity flag through Bukkit API and ignores other proxy settings`() {
    assertFalse(PaperNetworkMode.velocityEnabled(server(false)))
    assertTrue(PaperNetworkMode.velocityEnabled(server(true)))
  }

  @Test
  fun `standalone Global has no network delivery branch even before identity is confirmed`() {
    val network = NetworkSettings("main", mapOf("gameplay" to setOf("main")))
    network.deliveryEnabled = PaperNetworkMode.velocityEnabled(server(false))
    val global = ChannelDefinition("global", "Global", networkGroup = "gameplay")
    assertFalse(network.identity.confirmed)
    repeat(3) { assertNull(network.groupFor(global)) }
  }

  @Test
  fun `Velocity retains network delivery branch and requires identity confirmation`() {
    val network = NetworkSettings("main", mapOf("gameplay" to setOf("main")))
    network.deliveryEnabled = PaperNetworkMode.velocityEnabled(server(true))
    assertEquals(
        "gameplay",
        network.groupFor(ChannelDefinition("global", "Global", networkGroup = "gameplay")),
    )
    assertFalse(network.identity.confirmed)
  }
}
