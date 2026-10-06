package icu.oyasai.utilities.teleport

import java.lang.reflect.Proxy
import kotlin.test.*
import org.bukkit.GameMode
import org.bukkit.Location
import org.bukkit.Material
import org.bukkit.World
import org.bukkit.WorldBorder
import org.bukkit.block.Block
import org.bukkit.entity.Player

class TeleportSafetyTest {
  private inline fun <reified T> proxy(crossinline call: (String, Array<out Any?>) -> Any?): T =
      Proxy.newProxyInstance(T::class.java.classLoader, arrayOf(T::class.java)) { self, method, args
        ->
        when (method.name) {
          "equals" -> self === args?.firstOrNull()
          "hashCode" -> System.identityHashCode(self)
          "toString" -> T::class.java.simpleName
          else -> call(method.name, args ?: emptyArray())
        }
      } as T

  private fun world(inside: Boolean = true, reads: MutableList<Int> = mutableListOf()): World {
    val border =
        proxy<WorldBorder> { name, _ ->
          when (name) {
            "isInside" -> inside
            else -> error("Unexpected border $name")
          }
        }
    return proxy { name, args ->
      when (name) {
        "getWorldBorder" -> border
        "getMinHeight" -> -64
        "getMaxHeight" -> 320
        "getBlockAt" -> {
          val y = args[1] as Int
          reads.add(y)
          proxy<Block> { method, _ ->
            when (method) {
              "getType" -> if (y == 63) Material.MAGMA_BLOCK else Material.AIR
              else -> error(method)
            }
          }
        }
        else -> error("Unexpected world $name")
      }
    }
  }

  private fun player(
      world: World,
      mode: GameMode = GameMode.SURVIVAL,
      flight: Boolean = false,
  ): Player = proxy { name, _ ->
    when (name) {
      "getWorld" -> world
      "getGameMode" -> mode
      "getAllowFlight" -> flight
      else -> error(name)
    }
  }

  @Test
  fun `sethome checks exact feet block without rounded search`() {
    val reads = mutableListOf<Int>()
    val world = world(reads = reads)
    assertFalse(TeleportSafety.canSetHome(player(world), Location(world, 0.5, 64.9, 0.5)))
    assertEquals(listOf(63, 64, 65), reads)
  }

  @Test
  fun `sethome rejects border and nonfinite coordinates without inspecting blocks`() {
    val reads = mutableListOf<Int>()
    val world = world(inside = false, reads = reads)
    assertFalse(TeleportSafety.canSetHome(player(world), Location(world, 0.5, 64.0, 0.5)))
    assertFalse(TeleportSafety.canSetHome(player(world), Location(world, Double.NaN, 64.0, 0.5)))
    assertTrue(reads.isEmpty())
  }

  @Test
  fun `creative and spectator sethome exemption requires flight and same world`() {
    val world = world()
    val loc = Location(world, 0.5, 64.0, 0.5)
    assertTrue(TeleportSafety.canSetHome(player(world, GameMode.CREATIVE, true), loc))
    assertTrue(TeleportSafety.canSetHome(player(world, GameMode.SPECTATOR, true), loc))
    assertFalse(TeleportSafety.canSetHome(player(world, GameMode.CREATIVE, false), loc))
    assertFalse(TeleportSafety.canSetHome(player(world(), GameMode.CREATIVE, true), loc))
  }
}
