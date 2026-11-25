package icu.oyasai.utilities.creative_management

import icu.oyasai.utilities.api.MinigameInventoryProtection
import java.lang.reflect.Proxy
import java.util.UUID
import kotlin.test.*
import org.bukkit.GameMode
import org.bukkit.entity.Player
import org.bukkit.event.player.PlayerGameModeChangeEvent
import org.bukkit.event.player.PlayerJoinEvent
import org.bukkit.event.player.PlayerQuitEvent

class InventoryEventTest {
  @Test
  fun `protected joins mode changes and quits never access normal inventory or effects`() {
    val id = UUID.randomUUID()
    val player =
        Proxy.newProxyInstance(Player::class.java.classLoader, arrayOf(Player::class.java)) {
            _,
            method,
            _ ->
          when (method.name) {
            "getUniqueId" -> id
            else -> error("Protected player must not be accessed: ${method.name}")
          }
        } as Player
    InventoryEvent.protection =
        object : MinigameInventoryProtection {
          override fun acquire(playerId: UUID, owner: String) = error("unexpected acquire")

          override fun checkAvailable(playerId: UUID, owner: String) = error("unexpected check")

          override fun release(player: Player, owner: String) = error("unexpected release")

          override fun isProtected(playerId: UUID) = playerId == id
        }
    InventoryEvent.joinPlayer(PlayerJoinEvent(player, null as String?))
    val change = PlayerGameModeChangeEvent(player, GameMode.CREATIVE)
    InventoryEvent.gameModeChange(change)
    InventoryEvent.onGMChangeRemoveEffects(change)
    InventoryEvent.onQuit(PlayerQuitEvent(player, null as String?))
  }
}
