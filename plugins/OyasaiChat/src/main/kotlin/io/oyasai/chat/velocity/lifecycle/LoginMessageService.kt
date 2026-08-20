package io.oyasai.chat.velocity.lifecycle

import com.velocitypowered.api.event.PostOrder
import com.velocitypowered.api.event.Subscribe
import com.velocitypowered.api.event.connection.DisconnectEvent
import com.velocitypowered.api.event.player.ServerPostConnectEvent
import com.velocitypowered.api.proxy.Player
import com.velocitypowered.api.proxy.ProxyServer
import io.oyasai.chat.velocity.config.VelocityRoutingConfig
import java.util.UUID
import java.util.concurrent.ConcurrentHashMap
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.format.NamedTextColor
import net.kyori.adventure.text.minimessage.MiniMessage
import net.kyori.adventure.text.minimessage.tag.resolver.Placeholder
import org.slf4j.Logger

// プレイヤーの接続・切断通知の各バックエンド配信。
private enum class LoginMessageKind {
  JOIN,
  QUIT,
}

private enum class BackendSuffixKind {
  FROM,
  TO,
}

private data class BackendSuffix(val kind: BackendSuffixKind, val backendId: String)

private data class LoginMessageDelivery(
    val kind: LoginMessageKind,
    val targetBackends: Set<String>,
    val suffix: BackendSuffix? = null,
)

private data class ActiveConnection(val player: Player, val backendId: String)

class LoginMessageService(
    private val proxy: ProxyServer,
    @Volatile private var config: VelocityRoutingConfig,
    private val logger: Logger,
) {
  private val mini = MiniMessage.builder().strict(true).build()
  private val activeConnections = ConcurrentHashMap<UUID, ActiveConnection>()

  fun reload(config: VelocityRoutingConfig) {
    this.config = config
  }

  @Subscribe(order = PostOrder.LAST)
  fun onServerConnect(event: ServerPostConnectEvent) {
    val destination = event.player.currentServer.orElse(null)?.serverInfo?.name ?: return
    val existing = activeConnections[event.player.uniqueId]
    val replacingConnection = existing != null && existing.player !== event.player
    activeConnections[event.player.uniqueId] = ActiveConnection(event.player, destination)
    if (replacingConnection) return

    val previous = event.previousServer?.serverInfo?.name ?: existing?.backendId
    planConnected(previous, destination).forEach { deliver(event.player.username, it) }
  }

  @Subscribe(order = PostOrder.LAST)
  fun onDisconnect(event: DisconnectEvent) {
    val active = activeConnections[event.player.uniqueId] ?: return
    if (active.player !== event.player) return
    activeConnections.remove(event.player.uniqueId, active)
    planDisconnected(active.backendId).forEach { deliver(event.player.username, it) }
  }

  private fun deliver(playerName: String, delivery: LoginMessageDelivery) {
    val component = render(playerName, delivery)
    val deliveredPlayers = mutableSetOf<UUID>()
    delivery.targetBackends.forEach { backendId ->
      val backend =
          proxy.getServer(backendId).orElse(null)
              ?: run {
                logger.warn("Cannot deliver login message to unregistered backend '{}'.", backendId)
                return@forEach
              }
      backend.playersConnected.forEach { recipient ->
        if (deliveredPlayers.add(recipient.uniqueId)) recipient.sendMessage(component)
      }
    }
  }

  private fun planConnected(
      previousBackend: String?,
      currentBackend: String,
  ): List<LoginMessageDelivery> {
    val managedBackends = config.managedBackends()
    if (previousBackend == currentBackend) return emptyList()
    if (previousBackend == null) {
      return if (currentBackend in managedBackends) {
        listOf(LoginMessageDelivery(LoginMessageKind.JOIN, managedBackends))
      } else {
        emptyList()
      }
    }
    return buildList {
      if (previousBackend in managedBackends) {
        add(
            LoginMessageDelivery(
                LoginMessageKind.QUIT,
                setOf(previousBackend),
                BackendSuffix(BackendSuffixKind.TO, currentBackend),
            )
        )
      }
      if (currentBackend in managedBackends) {
        add(
            LoginMessageDelivery(
                LoginMessageKind.JOIN,
                setOf(currentBackend),
                BackendSuffix(BackendSuffixKind.FROM, previousBackend),
            )
        )
      }
    }
  }

  private fun planDisconnected(currentBackend: String?): List<LoginMessageDelivery> =
      if (currentBackend in config.managedBackends()) {
        listOf(LoginMessageDelivery(LoginMessageKind.QUIT, config.managedBackends()))
      } else {
        emptyList()
      }

  private fun render(playerName: String, delivery: LoginMessageDelivery): Component {
    val base =
        Component.translatable(
            when (delivery.kind) {
              LoginMessageKind.JOIN -> "multiplayer.player.joined"
              LoginMessageKind.QUIT -> "multiplayer.player.left"
            },
            NamedTextColor.YELLOW,
            Component.text(playerName),
        )
    val suffix = delivery.suffix ?: return base
    val suffixFormat =
        when (suffix.kind) {
          BackendSuffixKind.FROM -> config.loginMessages.fromSuffixFormat
          BackendSuffixKind.TO -> config.loginMessages.toSuffixFormat
        }
    return base.append(
        mini.deserialize(
            suffixFormat,
            Placeholder.component(
                "backend",
                Component.text(config.loginMessages.displayName(suffix.backendId)),
            ),
        )
    )
  }
}
