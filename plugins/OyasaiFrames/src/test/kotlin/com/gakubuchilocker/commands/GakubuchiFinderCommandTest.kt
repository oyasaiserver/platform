package com.gakubuchilocker.commands

import com.gakubuchilocker.GakubuchiLockerPlugin
import icu.oyasai.frames.FrameStore
import icu.oyasai.frames.OyasaiFrames
import java.lang.reflect.Proxy
import java.nio.file.Path
import java.util.UUID
import java.util.logging.Logger
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertSame
import kotlin.test.assertTrue
import org.bukkit.Bukkit
import org.bukkit.Location
import org.bukkit.Server
import org.bukkit.World
import org.bukkit.command.CommandSender
import org.bukkit.command.PluginCommand
import org.bukkit.entity.Entity
import org.bukkit.entity.ItemFrame
import org.bukkit.entity.Player
import org.bukkit.event.Listener
import org.bukkit.event.player.PlayerQuitEvent
import org.bukkit.event.server.PluginDisableEvent
import org.bukkit.plugin.Plugin
import org.bukkit.plugin.PluginDescriptionFile
import org.bukkit.plugin.PluginLogger
import org.bukkit.plugin.PluginManager
import org.bukkit.plugin.java.JavaPlugin
import org.bukkit.scheduler.BukkitScheduler
import org.bukkit.scheduler.BukkitTask
import org.junit.jupiter.api.io.TempDir
import sun.misc.Unsafe

class GakubuchiFinderCommandTest {
  @TempDir lateinit var root: Path

  @Test
  fun `repeat command and alias replace only that players task and quit releases it`() {
    Fixture(root).use { f ->
      val first = f.player()
      val second = f.player(UUID.randomUUID())
      f.execute(first)
      f.execute(second)
      f.execute(first, "gfinder")
      assertEquals(listOf(1, 0, 0), f.tasks.map { it.cancellations })
      f.quit(first)
      f.quit(first)
      assertEquals(listOf(1, 0, 1), f.tasks.map { it.cancellations })
      f.quit(second)
      assertEquals(listOf(1, 1, 1), f.tasks.map { it.cancellations })
    }
  }

  @Test
  fun `rendering is capped at fifty frames and natural completion releases registration`() {
    Fixture(root).use { f ->
      val player = f.player()
      f.execute(player)
      repeat(21) { f.tasks.single().tick() }
      assertEquals(1000, player.particles.size)
      assertEquals((0 until 50).map { it + 0.5 }.toSet(), player.particles.map { it.x }.toSet())
      assertEquals(1, f.tasks.single().cancellations)
      f.quit(player)
      f.handler.cleanup()
      assertEquals(1, f.tasks.single().cancellations)
    }
  }

  @Test
  fun `empty search cancels previous rendering without scheduling another task`() {
    Fixture(root).use { f ->
      val player = f.player()
      f.execute(player)
      player.nearby = emptyList()
      f.execute(player)
      assertEquals(1, f.tasks.size)
      assertEquals(1, f.tasks.single().cancellations)
      f.quit(player)
      assertEquals(1, f.tasks.single().cancellations)
    }
  }

  @Test
  fun `offline player stops rendering and releases registration`() {
    Fixture(root).use { f ->
      val player = f.player()
      f.execute(player)
      player.online = false
      f.tasks.single().tick()
      assertTrue(player.particles.isEmpty())
      assertEquals(1, f.tasks.single().cancellations)
      f.quit(player)
      assertEquals(1, f.tasks.single().cancellations)
    }
  }

  @Test
  fun `visibility lock and ownership filters run before the fifty frame limit`() {
    val specs =
        List(60) { FrameSpec(owner = UUID(2, 2)) } +
            listOf(FrameSpec(visible = true), FrameSpec(locked = false)) +
            List(60) { FrameSpec() }
    Fixture(root, specs).use { f ->
      val player = f.player()
      player.op = false
      f.execute(player)
      f.tasks.single().tick()
      assertEquals(50, player.particles.size)
      assertEquals((62 until 112).map { it + 0.5 }, player.particles.map { it.x })
    }
  }

  @Test
  fun `plugin disable cancels all tasks and ignores other plugins`() {
    Fixture(root).use { f ->
      val first = f.player()
      val second = f.player(UUID.randomUUID())
      f.execute(first)
      f.execute(second)
      val other = proxy(Plugin::class.java) { name, _ -> error("Plugin.$name") }
      f.handler.onPluginDisable(PluginDisableEvent(other))
      assertEquals(listOf(0, 0), f.tasks.map { it.cancellations })
      f.handler.onPluginDisable(PluginDisableEvent(f.plugin))
      f.handler.onPluginDisable(PluginDisableEvent(f.plugin))
      f.quit(first)
      f.quit(second)
      assertEquals(listOf(1, 1), f.tasks.map { it.cancellations })
    }
  }

  @Test
  fun `feature disable explicitly cleans all tasks and tolerates partial startup`() {
    Fixture(root).use { f ->
      val first = f.player()
      val second = f.player(UUID.randomUUID())
      f.execute(first)
      f.execute(second)
      f.feature.onDisable()
      f.handler.cleanup()
      f.quit(first)
      f.quit(second)
      assertEquals(listOf(1, 1), f.tasks.map { it.cancellations })
      GakubuchiLockerPlugin(f.plugin).onDisable()
    }
  }

  @Test
  fun `permission and player checks reject senders without scheduling or disturbing tasks`() {
    Fixture(root).use { f ->
      val player = f.player()
      f.execute(player)
      player.allowed = false
      f.execute(player)
      val console =
          proxy(CommandSender::class.java) { name, _ ->
            check(name == "sendMessage")
            null
          }
      assertTrue(f.handler.onCommand(console, f.command, "gfinder", emptyArray()))
      assertEquals(1, f.tasks.size)
      assertEquals(0, f.tasks.single().cancellations)
    }
  }

  private data class FrameSpec(
      val owner: UUID = UUID(1, 1),
      val visible: Boolean = false,
      val locked: Boolean = true,
  )

  private class Scheduled(val id: Int, val runnable: Runnable, val owner: Plugin) {
    var cancellations = 0
    val task =
        proxy(BukkitTask::class.java) { name, _ ->
          when (name) {
            "getTaskId" -> id
            "getOwner" -> owner
            "isSync" -> true
            "isCancelled" -> cancellations > 0
            "cancel" -> {
              cancel()
              null
            }
            else -> error("BukkitTask.$name")
          }
        }

    fun cancel() {
      cancellations++
    }

    fun tick() {
      if (cancellations == 0) runnable.run()
    }
  }

  private class PlayerState(val id: UUID, frames: List<Entity>) {
    var nearby = frames
    var online = true
    var op = true
    var allowed = true
    val particles = mutableListOf<Location>()
    val player =
        proxy(Player::class.java) { name, args ->
          when (name) {
            "getUniqueId" -> id
            "hasPermission" -> {
              assertEquals("gakubuchilocker.use", args!![0])
              allowed
            }
            "isOnline" -> online
            "isOp" -> op
            "getNearbyEntities" -> {
              assertEquals(listOf(32.0, 32.0, 32.0), args!!.toList())
              nearby
            }
            "sendMessage" -> null
            "spawnParticle" -> {
              particles += args!![1] as Location
              null
            }
            else -> error("Player.$name")
          }
        }
  }

  private class Fixture(root: Path, specs: List<FrameSpec> = List(60) { FrameSpec() }) :
      AutoCloseable {
    val tasks = mutableListOf<Scheduled>()
    private val listeners = mutableListOf<Listener>()
    private val scheduler =
        proxy(BukkitScheduler::class.java) { name, args ->
          when (name) {
            "runTaskTimer" -> {
              assertEquals(0L, args!![2])
              assertEquals(10L, args[3])
              Scheduled(tasks.size + 1, args[1] as Runnable, args[0] as Plugin)
                  .also { tasks += it }
                  .task
            }
            "cancelTask" -> {
              tasks.single { it.id == args!![0] }.cancel()
              null
            }
            else -> error("BukkitScheduler.$name")
          }
        }
    private val manager =
        proxy(PluginManager::class.java) { name, args ->
          check(name == "registerEvents")
          listeners += args!![0] as Listener
          null
        }
    val plugin: OyasaiFrames
    val command: PluginCommand
    val feature: GakubuchiLockerPlugin
    val handler: GakubuchiFinderCommand
    private val serverField =
        Bukkit::class.java.getDeclaredField("server").apply { isAccessible = true }
    private val previousServer = serverField.get(null)
    private val frames: List<ItemFrame>

    init {
      // JavaPlugin needs a server classloader; supply only the members used by this test fixture.
      val unsafe =
          Unsafe::class.java.getDeclaredField("theUnsafe").apply { isAccessible = true }.get(null)
              as Unsafe
      plugin = unsafe.allocateInstance(OyasaiFrames::class.java) as OyasaiFrames
      command =
          PluginCommand::class
              .java
              .getDeclaredConstructor(String::class.java, Plugin::class.java)
              .apply { isAccessible = true }
              .newInstance("gakubuchifinder", plugin)
      val server =
          proxy(Server::class.java) { name, args ->
            when (name) {
              "getScheduler" -> scheduler
              "getPluginManager" -> manager
              "getLogger" -> Logger.getAnonymousLogger()
              "isPrimaryThread" -> true
              "getPluginCommand" -> if (args!![0] == "gakubuchifinder") command else null
              else -> error("Server.$name")
            }
          }
      fun field(name: String, value: Any) {
        JavaPlugin::class
            .java
            .getDeclaredField(name)
            .apply { isAccessible = true }
            .set(plugin, value)
      }
      field("server", server)
      field("dataFolder", root.toFile())
      field(
          "description",
          PluginDescriptionFile("OyasaiFrames", "6.0.0", OyasaiFrames::class.java.name),
      )
      field("logger", PluginLogger(plugin).apply { useParentHandlers = false })
      val world = proxy(World::class.java) { name, _ -> error("World.$name") }
      val ids = List(specs.size) { UUID.randomUUID() }
      FrameStore(root.resolve("frames.db").toFile()).use { store ->
        specs.forEachIndexed { index, spec ->
          if (spec.locked) store.lock(ids[index], spec.owner, UUID(0, 1), "world", index, 64, 0)
        }
      }
      frames =
          specs.mapIndexed { index, spec ->
            proxy(ItemFrame::class.java) { name, _ ->
              when (name) {
                "getUniqueId" -> ids[index]
                "isVisible" -> spec.visible
                "isValid" -> true
                "getLocation" -> Location(world, index.toDouble(), 64.0, 0.0)
                else -> error("ItemFrame.$name")
              }
            }
          }
      feature = GakubuchiLockerPlugin(plugin)
      feature.onEnable()
      handler = listeners.filterIsInstance<GakubuchiFinderCommand>().single()
      assertSame(handler, command.executor)
      assertSame(handler, command.tabCompleter)
      serverField.set(null, server)
    }

    fun player(id: UUID = UUID(1, 1)) = PlayerState(id, frames)

    fun execute(player: PlayerState, label: String = "gakubuchifinder") {
      assertTrue(handler.onCommand(player.player, command, label, emptyArray()))
      tasks.forEach { assertSame(plugin, it.owner) }
    }

    @Suppress("DEPRECATION")
    fun quit(player: PlayerState) {
      handler.onPlayerQuit(PlayerQuitEvent(player.player, ""))
    }

    override fun close() {
      try {
        feature.onDisable()
      } finally {
        serverField.set(null, previousServer)
      }
    }
  }

  companion object {
    private fun <T> proxy(type: Class<T>, call: (String, Array<Any?>?) -> Any?): T =
        type.cast(
            Proxy.newProxyInstance(type.classLoader, arrayOf(type)) { self, method, args ->
              when (method.name) {
                "equals" -> self === args!![0]
                "hashCode" -> System.identityHashCode(self)
                "toString" -> type.simpleName
                else -> call(method.name, args)
              }
            }
        )
  }
}
