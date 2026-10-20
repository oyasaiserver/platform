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
import org.bukkit.plugin.PluginManager
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
    var synchronous = 0
    var executeResult: (Int) -> Boolean = { true }
    val messages = ConcurrentLinkedQueue<net.kyori.adventure.text.Component>()
    var maskIntact = true
    var emptySelection = true
    var restored = 0
    val locks =
        AssistantSelectionLock(
            1_000_000,
            10,
            {
              object : AssistantSelectionLock.Mask {
                override fun validate(player: Player, maxBlocks: Long) {
                  require(emptySelection)
                }

                override fun lock(player: Player, maxBlocks: Long): String {
                  validate(player, maxBlocks)
                  return "fixed"
                }

                override fun intact(player: Player) = maskIntact

                override fun execute(player: Player, command: String): Boolean {
                  synchronous++
                  return player.performCommand(command)
                }

                override fun restore() {
                  restored++
                }
              }
            },
        )
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
              "getServer" -> plugin.server
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
                executeResult(executed)
              }
              "sendMessage" -> {
                (args[0] as? net.kyori.adventure.text.Component)?.let(messages::add)
                null
              }
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
      val known = mutableMapOf<String, Command>("plugins" to command, "bukkit:plugins" to command)
      val fawe =
          factory.fake<org.bukkit.plugin.Plugin> { name, _ ->
            when (name) {
              "getName" -> "FastAsyncWorldEdit"
              else -> error(name)
            }
          }
      class FaweCommand(name: String) :
          Command(name), org.bukkit.command.PluginIdentifiableCommand {
        override fun getPlugin() = fawe

        override fun execute(sender: CommandSender, label: String, args: Array<out String>) = true
      }
      for (name in listOf("/set", "/gmask", "/mask", "/regen")) {
        val registered = FaweCommand(name)
        known[name] = registered
        known["fastasyncworldedit:$name"] = registered
      }
      val commands =
          factory.fake<CommandMap> { name, args ->
            when (name) {
              "getCommand" -> known[args[0]]
              "getKnownCommands" -> known
              else -> error(name)
            }
          }
      val messenger = factory.fake<Messenger> { _, _ -> null }
      val pluginManager =
          factory.fake<PluginManager> { name, _ ->
            check(name == "isPluginEnabled")
            false
          }
      val server =
          factory.fake<Server> { name, _ ->
            when (name) {
              "getScheduler" -> scheduler
              "getPluginManager" -> pluginManager
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
      feature = AssistantFeature(plugin, locks)
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
  fun selectionUsesSharedPermissionRateLimitAndAuditWithoutConfirmation() {
    Fixture().use { f ->
      f.permitted = false
      f.send("get_selection")
      assertTrue(f.responses.isEmpty())
      assertTrue(f.audit.any { "denied:message" in it })
      f.permitted = true
      repeat(30) {
        f.send("get_selection")
        f.drainUntil { f.responses.isNotEmpty() }
        assertContains(
            JsonParser.parseString(f.responses.remove()).asJsonObject["result"].asString,
            "FAWE が使えません",
        )
      }
      f.send("get_selection")
      assertEquals(
          "rate limit",
          JsonParser.parseString(f.responses.remove()).asJsonObject["error"].asString,
      )
      assertEquals(30, f.audit.count { "tool:get_selection" in it })
      assertTrue(f.timers.isEmpty())
      assertEquals(0, f.executed)
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
  fun batchRejectsAllBeforeAnyExecutionAndUsesOnlyOneConfirmation() {
    Fixture().use { f ->
      f.send("run_commands", """{"commands":"plugins\nunknown","summary":"まとめる"}""")
      f.drainUntil { f.responses.isNotEmpty() }
      assertContains(
          JsonParser.parseString(f.responses.remove()).asJsonObject["result"].asString,
          "拒否",
      )
      assertEquals(0, f.executed)
      assertTrue(f.messages.isEmpty())
      f.send("run_commands", """{"commands":"plugins\nplugins","summary":"まとめる"}""")
      f.drainUntil { f.timers.isNotEmpty() }
      val card =
          net.kyori.adventure.text.serializer.plain.PlainTextComponentSerializer.plainText()
              .serialize(f.messages.single())
      assertContains(card, "[実行]")
      assertContains(card, "[やめる]")
      assertFalse(card.contains("[次から確認しない]"))
      assertFalse(card.contains("[入力欄へ]"))
      f.decision().complete(1)
      f.drainUntil { f.responses.isNotEmpty() }
      assertEquals(2, f.executed)
      assertEquals(1, f.audit.count { "event=propose" in it })
      assertContains(
          JsonParser.parseString(f.responses.remove()).asJsonObject["result"].asString,
          "minecraft_get_chat",
      )
    }
  }

  @Test
  fun batchStopsOnFailurePermissionLossAndLockLoss() {
    for (reason in listOf("failure", "permission", "lock")) Fixture().use { f ->
      if (reason == "lock") f.locks.lock(f.player)
      f.executeResult = {
        if (reason == "permission") f.permitted = false
        if (reason == "lock") f.maskIntact = false
        reason != "failure"
      }
      f.send("run_commands", """{"commands":"plugins\nplugins\nplugins","summary":"まとめる"}""")
      f.drainUntil { f.timers.isNotEmpty() }
      f.decision().complete(1)
      f.drainUntil { f.responses.isNotEmpty() }
      assertEquals(1, f.executed, reason)
      assertContains(
          JsonParser.parseString(f.responses.remove()).asJsonObject["result"].asString,
          "停止",
      )
    }
  }

  @Test
  fun allowedBatchNeedsNoConfirmationAndKeepsAllTwentyResultsWithinProtocolLimit() {
    Fixture().use { f ->
      val command = "bukkit:plugins " + "x".repeat(241)
      assertEquals(256, command.length)
      val store = AssistantAllowStore(f.db, AssistantRules())
      store.add(command, "operator", f.id)
      f.send(
          "run_commands",
          com.google.gson
              .Gson()
              .toJson(
                  mapOf("commands" to List(20) { command }.joinToString("\n"), "summary" to "まとめる")
              ),
      )
      f.drainUntil { f.responses.isNotEmpty() }
      val result = JsonParser.parseString(f.responses.remove()).asJsonObject["result"].asString
      assertEquals(20, f.executed)
      assertTrue(f.timers.isEmpty())
      assertContains(result, "20. /$command")
      assertContains(result, "全20個")
      assertTrue(result.length <= 8000)
    }
  }

  @Test
  fun automaticBatchStopsWhenSharedAllowanceIsRemoved() {
    Fixture().use { f ->
      val store = AssistantAllowStore(f.db, AssistantRules())
      store.add("bukkit:plugins", "operator", f.id)
      val entry = store.list().single { it.scope == "=bukkit:plugins" }
      f.executeResult = {
        store.remove(entry.id)
        true
      }
      f.send("run_commands", """{"commands":"plugins\nplugins","summary":"まとめる"}""")
      f.drainUntil { f.responses.isNotEmpty() }
      assertEquals(1, f.executed)
      assertContains(
          JsonParser.parseString(f.responses.remove()).asJsonObject["result"].asString,
          "停止",
      )
      assertTrue(f.timers.isEmpty())
    }
  }

  @Test
  fun lockedFaweEditsAreAutomaticButVanillaAndUnsafeFaweStillNeedConfirmation() {
    Fixture().use { f ->
      f.locks.lock(f.player)
      f.send("run_commands", """{"commands":"//set stone\n//set glass","summary":"建築"}""")
      f.drainUntil { f.responses.isNotEmpty() }
      assertEquals(2, f.executed)
      assertEquals(2, f.synchronous)
      assertTrue(f.timers.isEmpty())
      f.responses.clear()
      f.send("run_command", """{"command":"//regen","summary":"再生成"}""")
      f.drainUntil { f.timers.isNotEmpty() }
      assertTrue(f.responses.isEmpty())
      f.decision().complete(0)
      f.drainUntil { f.responses.isNotEmpty() }
      f.responses.clear()
      f.timers.clear()
      f.send("run_command", """{"command":"plugins","summary":"通常操作"}""")
      f.drainUntil { f.timers.isNotEmpty() }
      f.decision().complete(0)
      f.drainUntil { f.responses.isNotEmpty() }
      assertEquals(2, f.executed)
    }
  }

  @Test
  fun lockedMaskChangesRevalidateAndRefreshInsteadOfRemovingTheMask() {
    Fixture().use { f ->
      f.locks.lock(f.player)
      f.emptySelection = false
      f.send("run_commands", """{"commands":"//set stone\n//gmask","summary":"更新"}""")
      f.drainUntil { f.responses.isNotEmpty() }
      assertEquals(0, f.executed)
      assertContains(
          JsonParser.parseString(f.responses.remove()).asJsonObject["result"].asString,
          "拒否",
      )
      f.emptySelection = true
      for (command in listOf("//gmask", "//mask stone", "//gmask #region")) {
        f.send("run_command", """{"command":"$command","summary":"更新"}""")
        f.drainUntil { f.responses.isNotEmpty() }
        assertContains(
            JsonParser.parseString(f.responses.remove()).asJsonObject["result"].asString,
            "fixed",
        )
        assertTrue(f.locks.active(f.player))
      }
      assertTrue(f.timers.isEmpty())
      assertEquals(0, f.executed)
    }
  }

  @Test
  fun inputTransferConsumesProposalAndOnlyOffersSuggestCommandAfterValidation() {
    Fixture().use { f ->
      f.send("run_command", """{"command":"plugins","summary":"入力へ"}""")
      f.drainUntil { f.timers.isNotEmpty() }
      assertContains(
          net.kyori.adventure.text.serializer.plain.PlainTextComponentSerializer.plainText()
              .serialize(f.messages.single()),
          "[入力欄へ]",
      )
      val decision = f.decision()
      decision.complete(3)
      f.drainUntil { f.responses.isNotEmpty() }
      assertFalse(decision.complete(1))
      assertEquals(0, f.executed)
      assertEquals(
          net.kyori.adventure.text.event.ClickEvent.Action.SUGGEST_COMMAND,
          f.messages.last().clickEvent()!!.action(),
      )
      assertEquals(
          "/bukkit:plugins",
          (f.messages.last().clickEvent()!!.payload()
                  as net.kyori.adventure.text.event.ClickEvent.Payload.Text)
              .value(),
      )
      assertContains(
          JsonParser.parseString(f.responses.remove()).asJsonObject["result"].asString,
          "minecraft_get_chat",
      )
    }
  }

  @Test
  fun quittingRestoresSelectionMask() {
    Fixture().use { f ->
      f.locks.lock(f.player)
      f.feature.onQuit(
          org.bukkit.event.player.PlayerQuitEvent(
              f.player,
              net.kyori.adventure.text.Component.empty(),
          )
      )
      assertEquals(1, f.restored)
      assertFalse(f.locks.active(f.player))
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
