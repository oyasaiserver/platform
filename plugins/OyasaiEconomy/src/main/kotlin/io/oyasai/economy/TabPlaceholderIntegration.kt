package io.oyasai.economy

import java.util.Locale
import me.neznamy.tab.api.TabAPI
import me.neznamy.tab.api.event.EventHandler
import me.neznamy.tab.api.event.plugin.TabLoadEvent

/** TAB refreshes the same placeholders for every configured currency. */
internal class TabPlaceholderIntegration(private val plugin: OyasaiEconomyPlugin) {
  private val identifiers = mutableListOf<String>()
  private val load = EventHandler<TabLoadEvent> { register() }

  fun enable() {
    TabAPI.getInstance().eventBus?.register(TabLoadEvent::class.java, load)
    register()
  }

  private fun register() {
    val manager = TabAPI.getInstance().placeholderManager
    plugin.database.ledgers.keys.forEach { currency ->
      listOf(false, true).forEach { commas ->
        val id = "%economy_${currency}_balance${if (commas) "_commas" else ""}%"
        manager.unregisterPlaceholder(id)
        manager.registerPlayerPlaceholder(id, 1000) { player ->
          plugin.balance(currency, player.uniqueId)?.let {
            if (commas) String.format(Locale.ROOT, "%,d", it) else it.toString()
          } ?: ""
        }
        if (id !in identifiers) identifiers += id
      }
    }
  }

  fun disable() {
    runCatching {
      TabAPI.getInstance().eventBus?.unregister(load)
      identifiers.forEach { TabAPI.getInstance().placeholderManager.unregisterPlaceholder(it) }
    }
    identifiers.clear()
  }
}
