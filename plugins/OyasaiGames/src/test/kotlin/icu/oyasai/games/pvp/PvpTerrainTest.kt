package icu.oyasai.games.pvp

import java.io.File
import java.lang.reflect.Proxy
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import org.bukkit.Bukkit
import org.bukkit.Location
import org.bukkit.Server
import org.bukkit.World
import org.bukkit.block.Block
import org.bukkit.block.BlockState
import org.bukkit.block.data.BlockData
import org.bukkit.configuration.file.YamlConfiguration
import org.junit.jupiter.api.io.TempDir

class PvpTerrainTest {
  private inline fun <reified T> proxy(crossinline call: (String, Array<out Any?>) -> Any?): T =
      Proxy.newProxyInstance(T::class.java.classLoader, arrayOf(T::class.java)) { _, method, args ->
        call(method.name, args ?: emptyArray())
      } as T

  @Test
  fun `a second match restores only its own changed blocks`(@TempDir folder: File) {
    val restored = mutableListOf<Int>()
    val data =
        proxy<BlockData> { name, _ -> if (name == "getAsString") "minecraft:stone" else null }
    lateinit var world: World
    fun block(x: Int): Block {
      val state = proxy<BlockState> { name, _ -> if (name == "getBlockData") data else null }
      return proxy { name, _ ->
        when (name) {
          "getWorld" -> world
          "getX" -> x
          "getY",
          "getZ" -> 0
          "getLocation" -> Location(world, x.toDouble(), 0.0, 0.0)
          "getState" -> state
          "setBlockData" -> {
            restored.add(x)
            null
          }
          else -> null
        }
      }
    }
    world = proxy { name, args ->
      when (name) {
        "getName" -> "arena"
        "getBlockAt" -> block((args[0] as? Location)?.blockX ?: args[0] as Int)
        else -> null
      }
    }
    val server =
        proxy<Server> { name, _ ->
          when (name) {
            "getWorld" -> world
            "createBlockData" -> data
            else -> null
          }
        }
    val field = Bukkit::class.java.getDeclaredField("server").also { it.isAccessible = true }
    val previous = field.get(null)
    field.set(null, server)
    try {
      val yaml =
          YamlConfiguration().also {
            it.set("mods", listOf("BlockRestore"))
            it.set("modules.blockrestore.restoreblocks", true)
          }
      val config =
          ArenaConfig(
              "example",
              yaml,
              Goal.PlayerLives,
              emptyMap(),
              listOf(
                  Region(
                      "battle",
                      "arena",
                      listOf(0, 0, 0, 10, 1, 1),
                      "BATTLE",
                      emptySet(),
                      emptySet(),
                  )
              ),
          )
      val terrain = PvpTerrain(folder, config)
      terrain.beforeChange(block(1))
      terrain.beforeChange(block(2))
      terrain.restore()
      assertEquals(listOf(1, 2), restored)
      assertFalse(File(folder, "terrain/example.yml").exists())
      restored.clear()
      terrain.beforeChange(block(3))
      terrain.restore()
      assertEquals(listOf(3), restored, "previous match entries must never be restored again")
      assertFalse(File(folder, "terrain/example.yml").exists())
    } finally {
      field.set(null, previous)
    }
  }
}
