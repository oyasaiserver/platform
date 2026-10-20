package io.oyasai.oyasaiAdminTools.assistant

import com.google.gson.JsonParser
import io.oyasai.oyasaiAdminTools.OyasaiAdminTools
import io.oyasai.oyasaiAdminTools.storage.AdminDb
import java.lang.reflect.Proxy
import java.nio.file.Files
import java.util.UUID
import java.util.concurrent.ConcurrentLinkedQueue
import java.util.logging.Handler
import java.util.logging.LogRecord
import java.util.logging.Logger
import kotlin.test.*
import kotlinx.coroutines.CompletableDeferred
import org.bukkit.Server
import org.bukkit.command.Command
import org.bukkit.command.CommandMap
import org.bukkit.command.CommandSender
import org.bukkit.configuration.file.YamlConfiguration
import org.bukkit.entity.Player
import org.bukkit.plugin.PluginDescriptionFile
import org.bukkit.plugin.PluginLogger
import org.bukkit.plugin.java.JavaPlugin
import org.bukkit.plugin.messaging.Messenger
import org.bukkit.scheduler.BukkitScheduler
import org.bukkit.scheduler.BukkitTask
import sun.misc.Unsafe

class AssistantFeatureTest {
  private inline fun <reified T> fake(crossinline action: (String, Array<out Any?>) -> Any?): T =
      Proxy.newProxyInstance(T::class.java.classLoader, arrayOf(T::class.java)) { _, method, args ->
        action(method.name, args ?: emptyArray())
      } as T

  private class Fixture : AutoCloseable {
    val root = Files.createTempDirectory("assistant-feature")
    val responses = ConcurrentLinkedQueue<String>()
    val audit = ConcurrentLinkedQueue<String>()
    val main = ConcurrentLinkedQueue<Runnable>()
    val timers = ConcurrentLinkedQueue<Runnable>()
    val id = UUID.randomUUID()
    var permitted = true
    var executed = 0
    val config =
        YamlConfiguration().apply {
          set("assistant.enabled", true)
          set("assistant.player-commands", listOf("plugins"))
        }
    val db = AdminDb(root.resolve("test.db").toFile(), Logger.getAnonymousLogger()).apply { open() }
    val plugin: OyasaiAdminTools
    val feature: AssistantFeature
    val player: Player

    init {
      val factory = AssistantFeatureTest()
      player =
          factory.fake<Player> { name, args ->
            when (name) {
              "getUniqueId" -> id
              "getName" -> "operator"
              "hasPermission" -> permitted
              "isOnline" -> true
              "sendPluginMessage" -> {
                responses.add((args[2] as ByteArray).toString(Charsets.UTF_8))
                null
              }
              "performCommand" -> {
                executed++
                true
              }
              "sendMessage" -> null
              else -> error("Player.$name")
            }
          }
      val task = factory.fake<BukkitTask> { _, _ -> null }
      val scheduler =
          factory.fake<BukkitScheduler> { name, args ->
            when (name) {
              "runTask" -> {
                main.add(args[1] as Runnable)
                task
              }
              "runTaskLater" -> {
                timers.add(args[1] as Runnable)
                task
              }
              else -> error("Scheduler.$name")
            }
          }
      val command =
          object : Command("plugins") {
            override fun execute(sender: CommandSender, label: String, args: Array<out String>) =
                true
          }
      val known = mapOf("plugins" to command, "bukkit:plugins" to command)
      val commands =
          factory.fake<CommandMap> { name, args ->
            when (name) {
              "getCommand" -> known[args[0]]
              "getKnownCommands" -> known
              else -> error(name)
            }
          }
      val messenger = factory.fake<Messenger> { _, _ -> null }
      val server =
          factory.fake<Server> { name, _ ->
            when (name) {
              "getScheduler" -> scheduler
              "getPlayer" -> player
              "getCommandMap" -> commands
              "getMessenger" -> messenger
              "getLogger" -> Logger.getAnonymousLogger()
              else -> error("Server.$name")
            }
          }
      // JavaPlugin's constructor requires a server classloader. Allocate only the test fixture and
      // supply the exact server members used by the feature; no server lifecycle is simulated.
      val unsafe =
          Unsafe::class.java.getDeclaredField("theUnsafe").apply { isAccessible = true }.get(null)
              as Unsafe
      plugin = unsafe.allocateInstance(OyasaiAdminTools::class.java) as OyasaiAdminTools
      fun field(name: String, value: Any) {
        JavaPlugin::class
            .java
            .getDeclaredField(name)
            .apply { isAccessible = true }
            .set(plugin, value)
      }
      field("server", server)
      field("dataFolder", root.toFile())
      field("newConfig", config)
      field("isEnabled", true)
      field(
          "description",
          PluginDescriptionFile("OyasaiAdminTools", "test", OyasaiAdminTools::class.java.name),
      )
      val logger =
          PluginLogger(plugin).apply {
            useParentHandlers = false
            addHandler(
                object : Handler() {
                  override fun publish(record: LogRecord) {
                    audit.add(record.message)
                  }

                  override fun flush() {}

                  override fun close() {}
                }
            )
          }
      field("logger", logger)
      feature = AssistantFeature(plugin)
      AssistantFeature::class
          .java
          .getDeclaredField("allows")
          .apply { isAccessible = true }
          .set(feature, AssistantAllowStore(db, AssistantRules()))
    }

    fun send(tool: String, args: String = "{}", id: String = "test") {
      feature.onPluginMessageReceived(
          AssistantFeature.CHANNEL,
          player,
          """{"v":1,"id":"$id","tool":"$tool","args":$args}""".toByteArray(),
      )
    }

    fun drainUntil(condition: () -> Boolean) {
      val deadline = System.nanoTime() + 5_000_000_000L
      while (!condition()) {
        main.poll()?.run() ?: Thread.sleep(2)
        check(System.nanoTime() < deadline) { "Timed out waiting for feature" }
      }
      while (main.isNotEmpty()) main.poll()?.run()
    }

    fun decision(): CompletableDeferred<Int> {
      val pending =
          AssistantFeature::class
              .java
              .getDeclaredField("pending")
              .apply { isAccessible = true }
              .get(feature) as Map<*, *>
      val proposal = pending[id]!!
      @Suppress("UNCHECKED_CAST")
      return proposal.javaClass
          .getDeclaredField("decision")
          .apply { isAccessible = true }
          .get(proposal) as CompletableDeferred<Int>
    }

    override fun close() {
      feature.close()
      db.close()
      root.toFile().deleteRecursively()
    }
  }

  @Test
  fun unauthorizedAndDisabledMessagesAreDroppedAndAudited() {
    Fixture().use { f ->
      f.permitted = false
      f.send("record_memory", """{"summary":"must not write"}""")
      f.permitted = true
      f.config.set("assistant.enabled", false)
      f.send("get_context")
      assertEquals(2, f.audit.count { "denied:message" in it })
      assertTrue(f.responses.isEmpty())
      assertFalse(Files.exists(f.root.resolve("assistant-memory")))
    }
  }

  @Test
  fun invalidMessagesAreRejectedWithoutRunningTools() {
    Fixture().use { f ->
      for (message in
          listOf(
              ByteArray(32769),
              "{".toByteArray(),
              """{"v":1,"id":"unknown","tool":"unknown","args":{}}""".toByteArray(),
          )) {
        f.feature.onPluginMessageReceived(AssistantFeature.CHANNEL, f.player, message)
      }
      assertEquals(3, f.audit.count { "denied:message" in it })
      assertEquals(0, f.executed)
      assertTrue(JsonParser.parseString(f.responses.single()).asJsonObject.has("error"))
    }
  }

  @Test
  fun quitRefusesPendingCallAndPreventsLaterExecution() {
    Fixture().use { f ->
      f.send("run_command", """{"command":"plugins","summary":"一覧を見る"}""")
      f.drainUntil { f.timers.isNotEmpty() }
      val decision = f.decision()
      f.feature.onQuit(
          org.bukkit.event.player.PlayerQuitEvent(
              f.player,
              net.kyori.adventure.text.Component.empty(),
          )
      )
      assertEquals(
          "拒否: 本人が実行しませんでした",
          JsonParser.parseString(f.responses.single()).asJsonObject["result"].asString,
      )
      assertFalse(decision.complete(1))
      assertEquals(0, f.executed)
    }
  }

  @Test
  fun confirmationDefersResponseRejectsSecondCallAndReturnsExecutionResult() {
    Fixture().use { f ->
      f.send("run_command", """{"command":"plugins","summary":"一覧を見る"}""")
      f.drainUntil { f.timers.isNotEmpty() }
      assertTrue(f.responses.isEmpty())
      f.send("get_context", id = "second")
      assertEquals(
          "busy",
          JsonParser.parseString(f.responses.remove()).asJsonObject["error"].asString,
      )
      f.decision().complete(1)
      f.drainUntil { f.responses.isNotEmpty() }
      assertEquals(1, f.executed)
      val response = JsonParser.parseString(f.responses.remove()).asJsonObject
      assertEquals("test", response["id"].asString)
      assertTrue(response.has("result"))
    }
  }

  @Test
  fun expiryAndCancelReturnRefusalWithoutExecution() {
    for (expired in listOf(false, true)) Fixture().use { f ->
      f.send("run_command", """{"command":"plugins","summary":"一覧を見る"}""")
      f.drainUntil { f.timers.isNotEmpty() }
      if (expired) f.timers.remove().run() else f.decision().complete(0)
      f.drainUntil { f.responses.isNotEmpty() }
      assertEquals(0, f.executed)
      assertEquals(
          "拒否: 本人が実行しませんでした",
          JsonParser.parseString(f.responses.remove()).asJsonObject["result"].asString,
      )
    }
  }

  @Test
  fun recordMemoryAppendsOnceAndResetsOnlyAfterSuccessfulAppend() {
    Fixture().use { f ->
      f.send("run_command", """{"command":"plugins","summary":"一覧を見る"}""")
      f.drainUntil { f.timers.isNotEmpty() }
      f.decision().complete(1)
      f.drainUntil { f.responses.isNotEmpty() }
      f.responses.clear()
      f.send("record_memory", """{"summary":"${"あ".repeat(2001)}"}""")
      f.drainUntil { f.responses.isNotEmpty() }
      assertTrue(JsonParser.parseString(f.responses.remove()).asJsonObject.has("error"))
      assertFalse(Files.exists(f.root.resolve("assistant-memory")))
      f.send("record_memory", """{"summary":"一覧を確認"}""")
      f.drainUntil { f.responses.isNotEmpty() }
      val path = Files.list(f.root.resolve("assistant-memory")).use { it.findFirst().get() }
      val text = Files.readString(path)
      assertEquals(1, text.lineSequence().count { it.startsWith("- ") })
      assertContains(text, "operator")
      assertContains(text, "bukkit:plugins")
      f.responses.clear()
      f.send("record_memory", """{"summary":"次の記録"}""")
      f.drainUntil { f.responses.isNotEmpty() }
      assertEquals(2, Files.readAllLines(path).count { it.startsWith("- ") })
      assertFalse(Files.readAllLines(path).last().contains("bukkit:plugins"))
    }
  }
}
