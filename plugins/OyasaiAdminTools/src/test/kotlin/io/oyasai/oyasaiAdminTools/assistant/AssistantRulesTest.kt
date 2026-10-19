package io.oyasai.oyasaiAdminTools.assistant

import java.lang.reflect.Proxy
import kotlin.test.*
import org.bukkit.command.*
import org.bukkit.plugin.Plugin

class AssistantRulesTest {
  private fun serverCommand(name: String) =
      object : Command(name) {
        override fun execute(sender: CommandSender, label: String, args: Array<out String>) = true
      }

  private fun commands(known: () -> Map<String, Command>): CommandMap =
      Proxy.newProxyInstance(CommandMap::class.java.classLoader, arrayOf(CommandMap::class.java)) {
          _,
          method,
          args ->
        when (method.name) {
          "getCommand" -> known()[args!![0]]
          "getKnownCommands" -> known()
          else -> null
        }
      } as CommandMap

  @Test
  fun serverNamespacesHaveStablePriorityButOtherAmbiguityIsRejected() {
    val owners = listOf("minecraft", "bukkit", "paper", "spigot", "purpur")
    for (name in listOf("plugins", "version", "tps", "mspt")) {
      val command = serverCommand(name)
      owners.forEachIndexed { index, preferred ->
        val known =
            owners.drop(index).reversed().associate { "$it:$name" to command } +
                mapOf(name to command, "other:$name" to command)
        val commands = commands { known }
        assertEquals("$preferred:$name", AssistantRules.normalize("/$name", commands)?.text)
        assertEquals("$preferred:$name", AssistantRules.normalize("/purpur:$name", commands)?.text)
        assertFalse(AssistantRules().isBlacklisted("$preferred:$name"))
      }
      assertNull(
          AssistantRules.normalize(
              name,
              commands {
                mapOf(name to command, "alpha:$name" to command, "beta:$name" to command)
              },
          )
      )
      assertNull(AssistantRules.normalize(name, commands { mapOf(name to command) }))
      assertEquals(
          "alpha:$name",
          AssistantRules.normalize(
                  name,
                  commands { mapOf(name to command, "alpha:$name" to command) },
              )
              ?.text,
      )
    }
  }

  @Test
  fun serverBlacklistWinsForEverySelectedNamespace() {
    val owners = listOf("minecraft", "bukkit", "paper", "spigot", "purpur")
    val rules = AssistantRules()
    for (text in
        listOf(
            "stop",
            "reload",
            "restart",
            "spigot reload",
            "paper reload",
            "purpur reload",
            "op steve",
            "deop steve",
            "execute run list",
            "function a",
            "schedule function a 1t",
            "return run stop",
            "whitelist off",
            "save-off",
        )) {
      val name = text.substringBefore(' ')
      val command = serverCommand(name)
      owners.forEachIndexed { index, preferred ->
        val known =
            owners.drop(index).reversed().associate { "$it:$name" to command } + (name to command)
        val normalized = assertNotNull(AssistantRules.normalize("/$text", commands { known }))
        assertEquals("$preferred:$text", normalized.text)
        assertTrue(rules.isBlacklisted(normalized.text), normalized.text)
        assertFalse(rules.isAllowed(normalized.text, listOf(normalized.text)), normalized.text)
      }
    }
  }

  private fun command(name: String, owner: String): PluginCommand {
    val plugin =
        Proxy.newProxyInstance(Plugin::class.java.classLoader, arrayOf(Plugin::class.java)) {
            _,
            method,
            _ ->
          if (method.name == "getName") owner else null
        } as Plugin
    return PluginCommand::class
        .java
        .getDeclaredConstructor(String::class.java, Plugin::class.java)
        .apply { isAccessible = true }
        .newInstance(name, plugin)
  }

  @Test
  fun resolvesAliasesOwnersAndRejectsFormattedAliasesAndUnknownCommands() {
    val co = command("co", "CoreProtect")
    val vanilla =
        object : Command("list") {
          override fun execute(sender: CommandSender, label: String, args: Array<out String>) = true
        }
    val known =
        mapOf(
            "coreprotect:co" to co,
            "core" to co,
            "co" to co,
            "list" to vanilla,
            "minecraft:list" to vanilla,
            "danger" to FormattedCommandAlias("danger", arrayOf("minecraft:stop")),
        )
    val commands =
        Proxy.newProxyInstance(
            CommandMap::class.java.classLoader,
            arrayOf(CommandMap::class.java),
        ) { _, method, args ->
          when (method.name) {
            "getCommand" -> known[args!![0]]
            "getKnownCommands" -> known
            else -> null
          }
        } as CommandMap
    assertEquals(
        "coreprotect:co lookup u:steve",
        AssistantRules.normalize(" /CORE \t  LOOKUP U:Steve ", commands)?.text,
    )
    assertSame(co, AssistantRules.normalize("coreprotect:co lookup", commands)?.registered)
    assertEquals("minecraft:list", AssistantRules.normalize("/list", commands)?.text)
    listOf(
            "danger",
            "missing",
            "co\nlookup",
            "co\rlookup",
            "co §alookup",
            "co\u0000lookup",
            "co " + "x".repeat(254),
        )
        .forEach { assertNull(AssistantRules.normalize(it, commands), it) }
  }

  @Test
  fun blacklistAlwaysWinsAndScopesHaveWordBoundaries() {
    val rules = AssistantRules(listOf("^minecraft:kill\\b"))
    val denied =
        listOf(
            "minecraft:stop",
            "bukkit:reload",
            "minecraft:reload",
            "paper:restart",
            "purpur:purpur reload",
            "plugmanx:plugman unload test",
            "plugmanx:plugman listx",
            "minecraft:op steve",
            "minecraft:deop steve",
            "luckperms:luckperms user steve permission set test true",
            "luckperms:luckperms group admin parent add owner",
            "luckperms:luckperms editor",
            "dynamicprofile:syokaku promote steve good:)",
            "dynamicprofile:syokaku demote steve good",
            "minecraft:execute as steve run list",
            "oyasaiadmintools:sudo steve list",
            "minecraft:function a",
            "minecraft:schedule function a 1t",
            "minecraft:return run stop",
            "fastasyncworldedit:cs a",
            "fastasyncworldedit:/cs a",
            "fastasyncworldedit:.s a",
            "fastasyncworldedit:/.s a",
            "fastasyncworldedit:/macro a",
            "oyasaiadmintools:socialspy",
            "minecraft:tp @a steve",
            "minecraft:kill @e[distance=..1]",
            "minecraft:tp steve @r",
            "oyasaitoken:token addall 1",
            "minecraft:whitelist off",
            "minecraft:save-off",
            "coreprotect:co purge t:1d",
            "coreprotect:core purge t:1d",
            "coreprotect:coreprotect restore r:10",
            "coreprotect:co rb r:10",
            "coreprotect:co rollback u:",
            "fastasyncworldedit:/delchunks",
            "fastasyncworldedit:/schematic delete a",
            "fastasyncworldedit:/schem d a",
            "oyasaiadmintools:assistant allow list",
            "minecraft:kill steve",
        )
    denied.forEach { text ->
      assertTrue(rules.isBlacklisted(text), text)
      assertFalse(rules.isAllowed(text, listOf(text, text.substringBefore(' '))), text)
    }
    listOf(
            "plugmanx:plugman info test",
            "plugmanx:plugman list",
            "luckperms:luckperms info",
            "luckperms:luckperms listgroups",
            "luckperms:luckperms listtracks",
            "luckperms:luckperms user steve info",
            "luckperms:luckperms user steve permission info",
            "luckperms:luckperms user steve permission check x",
            "luckperms:luckperms user steve parent info",
            "luckperms:luckperms user steve meta info",
            "luckperms:luckperms group admin info",
            "coreprotect:co rollback u:steve r:10",
            "dynamicprofile:syokaku promote good_player",
            "minecraft:list",
        )
        .forEach { assertFalse(rules.isBlacklisted(it), it) }
    assertEquals("coreprotect:co lookup", AssistantRules.scope("coreprotect:co lookup u:steve"))
    assertNull(AssistantRules.scope("minecraft:list"))
    assertNull(AssistantRules.scope("minecraft:tp 1 2 3"))
    assertNull(AssistantRules.scope("custom:cbmenu demo_car size 2"))
    assertTrue(
        rules.isAllowed("coreprotect:co lookup u:anyone r:100", listOf("coreprotect:co lookup"))
    )
    assertFalse(rules.isAllowed("coreprotect:co lookupx u:steve", listOf("coreprotect:co lookup")))
    assertFalse(rules.isAllowed("coreprotect:co rollback u:steve", listOf("coreprotect:co lookup")))
  }
}
