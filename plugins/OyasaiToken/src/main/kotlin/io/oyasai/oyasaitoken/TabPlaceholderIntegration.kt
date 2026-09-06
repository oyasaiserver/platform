package io.oyasai.oyasaitoken

import java.util.Locale
import me.neznamy.tab.api.TabAPI
import me.neznamy.tab.api.TabPlayer
import me.neznamy.tab.api.event.EventHandler
import me.neznamy.tab.api.event.player.PlayerLoadEvent
import me.neznamy.tab.api.event.plugin.TabLoadEvent
import me.neznamy.tab.api.placeholder.PlayerPlaceholder
import me.realized.tokenmanager.api.event.TMTokenBalanceChangeEvent
import org.bukkit.Bukkit
import org.bukkit.event.EventHandler as BukkitEventHandler
import org.bukkit.event.Listener

/** Publishes the token balance solely to TAB's native placeholder API. */
internal class TabPlaceholderIntegration(private val plugin: OyasaiTokenPlugin) : Listener {
  private var placeholder: PlayerPlaceholder? = null

  private val tabLoadHandler = EventHandler<TabLoadEvent> { registerPlaceholder() }
  private val playerLoadHandler =
      EventHandler<PlayerLoadEvent> { event -> runOnPrimaryThread { updatePlayer(event.player) } }

  fun enable() {
    val tabApi = TabAPI.getInstance()
    val eventBus = tabApi.eventBus
    if (eventBus == null) {
      plugin.logger.warning(
          "TAB EventBus is unavailable; TAB token placeholder was not registered."
      )
      return
    }
    eventBus.register(TabLoadEvent::class.java, tabLoadHandler)
    eventBus.register(PlayerLoadEvent::class.java, playerLoadHandler)
    registerPlaceholder()
  }

  fun disable() {
    runCatching {
      val tabApi = TabAPI.getInstance()
      tabApi.eventBus?.unregister(tabLoadHandler)
      tabApi.eventBus?.unregister(playerLoadHandler)
      tabApi.placeholderManager.unregisterPlaceholder(PLACEHOLDER_IDENTIFIER)
    }
  }

  @BukkitEventHandler
  fun onBalanceChange(event: TMTokenBalanceChangeEvent) {
    updatePlayer(event.getPlayerUuid(), event.getNewBalance())
  }

  private fun registerPlaceholder() {
    runOnPrimaryThread {
      runCatching {
            val tabApi = TabAPI.getInstance()
            tabApi.placeholderManager.unregisterPlaceholder(PLACEHOLDER_IDENTIFIER)
            placeholder =
                tabApi.placeholderManager.registerPlayerPlaceholder(PLACEHOLDER_IDENTIFIER, -1) {
                    player ->
                  formatTokens(plugin.getBalance(player.uniqueId))
                }
            tabApi.onlinePlayers.forEach(::updatePlayer)
            plugin.logger.info("Registered TAB placeholder $PLACEHOLDER_IDENTIFIER.")
          }
          .onFailure { throwable ->
            plugin.logger.warning(
                "Failed to register TAB placeholder $PLACEHOLDER_IDENTIFIER: ${throwable.message}"
            )
          }
    }
  }

  private fun updatePlayer(uuid: java.util.UUID, balance: Long) {
    val tabPlayer = TabAPI.getInstance().getPlayer(uuid) ?: return
    updatePlayer(tabPlayer, balance)
  }

  private fun updatePlayer(tabPlayer: TabPlayer) {
    updatePlayer(tabPlayer, plugin.getBalance(tabPlayer.uniqueId))
  }

  private fun updatePlayer(tabPlayer: TabPlayer, balance: Long) {
    if (!tabPlayer.isLoaded) return
    placeholder?.updateValue(tabPlayer, formatTokens(balance))
  }

  private fun runOnPrimaryThread(action: () -> Unit) {
    if (Bukkit.isPrimaryThread()) {
      action()
    } else {
      Bukkit.getScheduler().runTask(plugin, Runnable(action))
    }
  }

  private fun formatTokens(balance: Long): String = String.format(Locale.ROOT, "%,d", balance)

  private companion object {
    const val PLACEHOLDER_IDENTIFIER = "%tm_tokens_commas%"
  }
}
