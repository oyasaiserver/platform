package io.oyasai.oyasaiAdminTools.staff

import java.lang.reflect.Proxy
import kotlin.test.*
import org.bukkit.command.*
import org.bukkit.plugin.Plugin

class StaffCommandRegistrationTest {
  private fun command(name: String, owner: String): PluginCommand {
    val plugin =
        Proxy.newProxyInstance(Plugin::class.java.classLoader, arrayOf(Plugin::class.java)) {
            proxy,
            method,
            args ->
          when (method.name) {
            "getName" -> owner
            "equals" -> proxy === args?.get(0)
            "hashCode" -> System.identityHashCode(proxy)
            "toString" -> owner
            else -> null
          }
        } as Plugin
    return PluginCommand::class
        .java
        .getDeclaredConstructor(String::class.java, Plugin::class.java)
        .apply { isAccessible = true }
        .newInstance(name, plugin)
  }

  @Test
  fun claimsCollidingAliasEvenWhenBukkitRemovedItAndRestoresEssentials() {
    val own = command("vanish", "OyasaiAdminTools").apply { aliases = emptyList() }
    val old = command("vanish", "Essentials")
    val commands =
        mutableMapOf<String, Command>("vanish" to old, "v" to old, "essentials:vanish" to old)
    val registration =
        StaffCommandRegistration(own, listOf("vanish") + StaffRules.aliases.getValue("vanish"))
    registration.claim(commands)
    assertSame(own, commands["vanish"])
    assertSame(own, commands["v"])
    assertSame(old, commands["essentials:vanish"])
    registration.restore(commands)
    assertSame(old, commands["vanish"])
    assertSame(old, commands["v"])
  }

  @Test
  fun neverTakesOtherPluginsAndDoesNotClobberNewOwnerOnDisable() {
    val own = command("vanish", "OyasaiAdminTools")
    val other = command("vanish", "AnotherPlugin")
    val commands = mutableMapOf<String, Command>("v" to other)
    val registration = StaffCommandRegistration(own, listOf("vanish", "v"))
    registration.claim(commands)
    assertSame(own, commands["vanish"])
    assertSame(other, commands["v"])
    commands["vanish"] = other
    registration.restore(commands)
    assertSame(other, commands["vanish"])
    assertSame(other, commands["v"])
    val empty = mutableMapOf<String, Command>()
    registration.claim(empty)
    registration.restore(empty)
    assertTrue(empty.isEmpty())
  }
}
