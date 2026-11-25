package icu.oyasai.utilities.creative_management

import java.lang.reflect.Proxy
import java.util.UUID
import kotlin.test.*
import org.bukkit.plugin.Plugin

class ZombiesCompatibilityTest {
  class Tasks {
    val ids = mutableSetOf<String>()

    fun operationIds(): Set<String> = ids.toSet()
  }

  class Coordinator {
    val tasks = Tasks()
  }

  class Game {
    val members = mutableSetOf<UUID>()
    private val pendingOfflineRestores = mutableMapOf<UUID, Any>()
    val gameModeSwitchCoordinator = Coordinator()
    var shutdowns = 0

    fun shutdown() {
      shutdowns++
      members.clear()
      pendingOfflineRestores.clear()
      gameModeSwitchCoordinator.tasks.ids.clear()
    }

    fun getArena(id: UUID): Any? = if (id in members) this else null

    fun awaitingReconnect(id: UUID) {
      pendingOfflineRestores[id] = Any()
    }
  }

  class Zombies(private val arenaManager: Game, private val delegate: Plugin) : Plugin by delegate

  @Test
  fun `membership offline recovery and delayed mode changes all retain protection`() {
    var enabled = true
    val proxy =
        Proxy.newProxyInstance(Plugin::class.java.classLoader, arrayOf(Plugin::class.java)) {
            _,
            method,
            _ ->
          when (method.name) {
            "isEnabled" -> enabled
            else -> error("Unexpected plugin access: ${method.name}")
          }
        } as Plugin
    val game = Game()
    val access = ZombiesAccess(Zombies(game, proxy))
    val id = UUID.randomUUID()
    assertFalse(access.busy(id))
    game.members.add(id)
    assertTrue(
        access.busy(id),
        "waiting lobby, spectators and disconnected members remain protected",
    )
    game.members.remove(id)
    game.gameModeSwitchCoordinator.tasks.ids.add("game-mode-switch:$id")
    assertTrue(access.busy(id), "do not restore before the native delayed callback")
    game.gameModeSwitchCoordinator.tasks.ids.clear()
    assertFalse(access.busy(id))
    game.awaitingReconnect(id)
    assertTrue(access.busy(id))
    access.stopBeforeDisable()
    assertEquals(1, game.shutdowns)
    assertFalse(access.busy(id), "native cleanup completed before plugin disable")
    enabled = false
    access.stopBeforeDisable()
    assertEquals(1, game.shutdowns, "never call native shutdown after its scheduler is disabled")
    assertFalse(access.busy(id), "after native shutdown the durable outer snapshot can recover")
  }

  @Test
  fun `changed Zombies internals are rejected instead of guessing membership`() {
    val unsupported =
        Proxy.newProxyInstance(Plugin::class.java.classLoader, arrayOf(Plugin::class.java)) {
            _,
            _,
            _ ->
          null
        } as Plugin
    assertFails { ZombiesAccess(unsupported) }
  }
}
