package io.oyasai.economy

import io.oyasai.economy.api.*
import java.lang.reflect.Proxy
import java.nio.file.Files
import java.util.UUID
import java.util.concurrent.ConcurrentLinkedQueue
import java.util.logging.Logger
import kotlin.test.*
import org.bukkit.Bukkit
import org.bukkit.Server
import org.bukkit.command.ConsoleCommandSender
import org.bukkit.entity.Player
import org.bukkit.event.Cancellable
import org.bukkit.event.Event
import org.bukkit.event.player.PlayerJoinEvent
import org.bukkit.plugin.PluginManager
import org.bukkit.plugin.java.JavaPlugin
import org.bukkit.scheduler.BukkitScheduler
import org.bukkit.scheduler.BukkitTask
import org.junit.jupiter.params.ParameterizedTest
import org.junit.jupiter.params.provider.ValueSource
import sun.misc.Unsafe

/**
 * Real commands, API, ledger and SQLite; mocked Bukkit does not prove Paper classloading or
 * rendering.
 */
class PluginIntegrationTest {
  @ParameterizedTest
  @ValueSource(strings = ["yen", "token", "gem"])
  fun commandsPermissionsAndConfirmation(currency: String) = fixture { f ->
    val ledger = f.db.ledgers.getValue(currency)
    val command = EconomyCommand(f.plugin, currency, ledger.policy.root)
    fun run(sender: org.bukkit.command.CommandSender, vararg args: String) {
      command.execute(sender, command.name, args)
    }
    f.permissions = setOf("essentials.eco", "token.admin", "token.use")
    run(f.alice, "give", "Bob", "5")
    assertEquals(ledger.policy.initial, ledger.balance(f.b))
    assertTrue(f.messages.last().contains("oyasaieconomy.$currency.admin"))
    f.permissions =
        setOf(
            "oyasaieconomy.$currency.balance",
            "oyasaieconomy.$currency.pay",
            "oyasaieconomy.$currency.top",
        )
    run(f.alice, "balance")
    run(f.alice, "balance", "Bob")
    assertTrue(f.messages.last().contains("balance.others"))
    run(f.console, "set", "Alice", "100")
    run(f.console, "set", "Bob", "100")
    for (invalid in listOf("0", "1.5", "-1", "1e3")) run(f.alice, "pay", "Bob", invalid)
    assertEquals(100, ledger.balance(f.a))
    run(f.alice, "pay", "Alice", "1")
    assertEquals(100, ledger.balance(f.a))
    run(f.alice, "pay", "bob", "5")
    f.flush()
    assertEquals(95, ledger.balance(f.a))
    assertEquals(105, ledger.balance(f.b))
    assertEquals(
        1,
        f.db.queryLong(
            "SELECT COUNT(*) FROM notification_outbox WHERE currency='$currency' AND delivered_at IS NULL"
        ),
    )
    for (old in listOf("send", "add", "remove", "addall")) run(f.console, old, "Bob", "1")
    assertEquals(105, ledger.balance(f.b))
    f.permissions = setOf("oyasaieconomy.$currency.admin")
    run(f.alice, "giveall", "3")
    assertEquals(95, ledger.balance(f.a))
    run(f.alice, "giveall", "4", "confirm")
    assertEquals(95, ledger.balance(f.a))
    run(f.alice, "giveall", "3")
    run(f.alice, "giveall", "3", "confirm")
    assertEquals(98, ledger.balance(f.a))
    assertEquals(105, ledger.balance(f.b)) // Bob is offline.
    run(f.console, "giveall", "2")
    assertEquals(100, ledger.balance(f.a))
    run(f.console, "reset", "Alice", "-s")
    assertEquals(ledger.policy.initial, ledger.balance(f.a))
    f.flush()
    assertTrue(f.db.invariant())
  }

  @ParameterizedTest
  @ValueSource(strings = ["yen", "token", "gem"])
  fun apiCommitCancellationAndOfflineDelivery(currency: String) = fixture { f ->
    val api: OyasaiEconomyApi = f.plugin
    assertNull(api.balance(currency, UUID(1, 1)))
    assertFalse(api.deposit(currency, UUID(1, 1), 1).accepted)
    val operation = api.deposit(currency, f.a, 10)
    assertTrue(operation.accepted)
    assertIs<EconomyResult.Success>(operation.completion.join())
    assertIs<EconomyResult.Success>(api.deposit(currency, f.a, 0).completion.join())
    assertFalse(api.transfer(currency, f.a, f.a, 1).accepted)
    f.cancel = true
    val before = api.balance(currency, f.a)
    assertFalse(api.withdraw(currency, f.a, 1).accepted)
    assertFalse(api.transfer(currency, f.a, f.b, 1).accepted)
    assertEquals(before, api.balance(currency, f.a))
    f.cancel = false
    assertIs<EconomyResult.Success>(api.transfer(currency, f.a, f.b, 2, true).completion.join())
    f.flush()
    assertTrue(f.bobMessages.isEmpty())
    f.bobOnline = true
    f.plugin.onJoin(PlayerJoinEvent(f.bob, null as net.kyori.adventure.text.Component?))
    f.plugin.onJoin(PlayerJoinEvent(f.bob, null as net.kyori.adventure.text.Component?))
    f.flush()
    assertEquals(1, f.bobMessages.size)
    assertTrue(f.bobMessages.single().contains("Aliceさんから"))
    assertEquals(
        0,
        f.db.queryLong("SELECT COUNT(*) FROM notification_outbox WHERE delivered_at IS NULL"),
    )
    f.plugin.onJoin(PlayerJoinEvent(f.bob, null as net.kyori.adventure.text.Component?))
    f.flush()
    assertEquals(1, f.bobMessages.size)
    assertTrue(f.events.any { it is EconomyBalanceChangeEvent && it.currency == currency })
    assertTrue(f.events.any { it is EconomyTransferEvent && it.currency == currency })
  }

  @Test
  fun commandRemovalDoesNotRequireMutableIterators() = fixture { f ->
    val backing =
        object : HashMap<String, org.bukkit.command.Command>() {
          override val entries:
              MutableSet<MutableMap.MutableEntry<String, org.bukkit.command.Command>>
            get() = java.util.Collections.unmodifiableSet(super.entries)
        }
    val map = org.bukkit.command.SimpleCommandMap(f.server, backing)
    f.commandMap = map
    val command = EconomyCommand(f.plugin, "yen", "eco")
    map.register("oyasaieconomy", command)
    fun field(name: String, value: Any) {
      OyasaiEconomyPlugin::class
          .java
          .getDeclaredField(name)
          .apply { isAccessible = true }
          .set(f.plugin, value)
    }
    field("commands", mutableListOf<org.bukkit.command.Command>(command))
    field("permissions", mutableListOf<org.bukkit.permissions.Permission>())
    OyasaiEconomyPlugin::class
        .java
        .getDeclaredMethod("unregisterCommands")
        .apply { isAccessible = true }
        .invoke(f.plugin)
    assertFalse(backing.containsValue(command))
  }

  private fun fixture(block: (Fixture) -> Unit) {
    val serverField = Bukkit::class.java.getDeclaredField("server").apply { isAccessible = true }
    val previous = serverField.get(null)
    val f = Fixture()
    serverField.set(null, f.server)
    try {
      block(f)
    } finally {
      f.db.close()
      serverField.set(null, previous)
      f.directory.toFile().deleteRecursively()
    }
  }

  private class Fixture {
    val directory = Files.createTempDirectory("economy-plugin-test")
    val a = UUID(0, 1)
    val b = UUID(0, 2)
    var permissions = emptySet<String>()
    var bobOnline = false
    var cancel = false
    val messages = mutableListOf<String>()
    val bobMessages = mutableListOf<String>()
    val events = mutableListOf<Event>()
    private val tasks = ConcurrentLinkedQueue<Runnable>()
    private val unsafe =
        Unsafe::class.java.getDeclaredField("theUnsafe").apply { isAccessible = true }.get(null)
            as Unsafe
    val plugin = unsafe.allocateInstance(OyasaiEconomyPlugin::class.java) as OyasaiEconomyPlugin
    val db =
        EconomyDatabase(
            directory.resolve("economy.db").toString(),
            testPolicies(),
            onNotifications = { pending ->
              tasks += Runnable {
                val method =
                    OyasaiEconomyPlugin::class
                        .java
                        .getDeclaredMethod("deliver", PendingNotification::class.java)
                        .apply { isAccessible = true }
                pending.forEach { method.invoke(plugin, it) }
              }
            },
        )
    val alice = person(a, "Alice", messages)
    val bob = person(b, "Bob", bobMessages)
    val console =
        proxy(ConsoleCommandSender::class.java) { method, args ->
          when (method) {
            "hasPermission",
            "isOp" -> true
            "sendMessage" -> {
              (args?.firstOrNull() as? String)?.let(messages::add)
              null
            }
            else -> null
          }
        }
    private val manager =
        proxy(PluginManager::class.java) { method, args ->
          if (method == "callEvent") {
            val event = args!![0] as Event
            events += event
            if (cancel && event is Cancellable) event.isCancelled = true
          }
          null
        }
    private val scheduler =
        proxy(BukkitScheduler::class.java) { method, args ->
          if (method == "runTask") {
            tasks += args!![1] as Runnable
            proxy(BukkitTask::class.java) { _, _ -> null }
          } else null
        }
    var commandMap: org.bukkit.command.SimpleCommandMap? = null
    val server =
        proxy(Server::class.java) { method, args ->
          when (method) {
            "getCommandMap" -> commandMap
            "getPluginManager" -> manager
            "getScheduler" -> scheduler
            "isPrimaryThread" -> true
            "getOnlinePlayers" -> if (bobOnline) listOf(alice, bob) else listOf(alice)
            "getPlayer" ->
                when (args?.firstOrNull()) {
                  a -> alice
                  b -> bob.takeIf { bobOnline }
                  else -> null
                }
            "getOfflinePlayer" -> error("名前解決はオフライン検索を使ってはいけません")
            else -> null
          }
        }

    init {
      fun field(owner: Class<*>, name: String, value: Any) {
        owner.getDeclaredField(name).apply { isAccessible = true }.set(plugin, value)
      }
      field(JavaPlugin::class.java, "server", server)
      field(JavaPlugin::class.java, "isEnabled", true)
      field(JavaPlugin::class.java, "logger", Logger.getLogger("EconomyTest"))
      field(OyasaiEconomyPlugin::class.java, "delivering", mutableSetOf<Long>())
      plugin.database = db
      db.ledgers.values.forEach {
        it.join(a, "Alice")
        it.join(b, "Bob")
      }
    }

    fun flush() {
      repeat(4) {
        assertTrue(db.drain())
        while (true) (tasks.poll() ?: break).run()
      }
    }

    private fun person(uuid: UUID, name: String, output: MutableList<String>) =
        proxy(Player::class.java) { method, args ->
          when (method) {
            "getUniqueId" -> uuid
            "getName" -> name
            "isOnline" -> uuid == a || bobOnline
            "hasPermission" -> args?.firstOrNull() in permissions
            "sendMessage" -> {
              (args?.firstOrNull() as? String)?.let(output::add)
              null
            }
            else -> null
          }
        }
  }

  companion object {
    private fun <T> proxy(type: Class<T>, call: (String, Array<out Any?>?) -> Any?): T =
        type.cast(
            Proxy.newProxyInstance(type.classLoader, arrayOf(type)) { _, method, args ->
              call(method.name, args)
            }
        )
  }
}
