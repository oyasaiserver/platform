package io.oyasai.oyasaiAdminTools.assistant

import com.mojang.brigadier.builder.LiteralArgumentBuilder
import com.mojang.brigadier.tree.CommandNode
import com.mojang.brigadier.tree.LiteralCommandNode
import io.papermc.paper.command.brigadier.ShadowBrigNode
import java.lang.reflect.Proxy
import kotlin.test.*
import org.bukkit.command.CommandMap
import org.bukkit.craftbukkit.command.VanillaCommandWrapper

class AssistantBrigadierRulesTest {
  private fun node(name: String): CommandNode<Any> {
    val handlerIdentity = Any()
    return LiteralArgumentBuilder.literal<Any>(name).executes { handlerIdentity.hashCode() }.build()
  }

  private fun copy(name: String, source: CommandNode<Any>): CommandNode<Any> =
      LiteralArgumentBuilder.literal<Any>(name)
          .requires(source.requirement)
          .executes(source.command)
          .build()
          .also { root -> source.children.forEach { root.addChild(it) } }

  private fun commands(
      roots: Map<String, CommandNode<Any>>,
      aliases: Map<String, List<String>> = emptyMap(),
      shadow: Boolean = false,
  ): CommandMap =
      Proxy.newProxyInstance(CommandMap::class.java.classLoader, arrayOf(CommandMap::class.java)) {
          _,
          method,
          args ->
        fun wrapper(name: String) =
            roots[name]?.let {
              VanillaCommandWrapper(
                  name,
                  if (shadow) ShadowBrigNode(it) else it,
                  aliases[name].orEmpty(),
              )
            }
        when (method.name) {
          "getCommand" -> wrapper(args!![0] as String)
          "getKnownCommands" -> roots.keys.associateWith { wrapper(it)!! }
          else -> null
        }
      } as CommandMap

  @Test
  fun freshWrappersAndCopiedRootsNormalizeAliasesAndRetainCanonicalRegistration() {
    val plugins = node("plugins")
    val roots =
        mutableMapOf(
            "plugins" to plugins,
            "bukkit:plugins" to copy("bukkit:plugins", plugins),
            "pl" to copy("pl", plugins),
            "bukkit:pl" to copy("bukkit:pl", plugins),
        )
    val commands =
        commands(
            roots,
            mapOf(
                "plugins" to listOf("pl", "bukkit:pl"),
                "bukkit:plugins" to listOf("pl", "bukkit:pl"),
            ),
        )
    val first = assertNotNull(AssistantRules.normalize("/plugins", commands))
    assertEquals("bukkit:plugins", first.text)
    val fresh = assertNotNull(AssistantRules.normalize(first.text, commands))
    assertNotSame(first.registered, fresh.registered)
    assertSame(first.registration, fresh.registration)
    assertEquals(first.text, AssistantRules.normalize("/pl", commands)?.text)
    assertEquals(first.text, AssistantRules.normalize("/bukkit:pl", commands)?.text)
    roots["bukkit:plugins"] = copy("bukkit:plugins", plugins)
    assertNotSame(first.registration, AssistantRules.normalize(first.text, commands)?.registration)
  }

  @Test
  fun differentExecutionPermissionOrArgumentsAreNotTreatedAsCopies() {
    val original = node("plugins")
    for (other in
        listOf(
            node("plugins"),
            copy("plugins", original).also { it.addChild(node("unexpected")) },
            LiteralArgumentBuilder.literal<Any>("plugins")
                .requires { false }
                .executes(original.command)
                .build(),
        )) {
      assertNull(
          AssistantRules.normalize(
              "/plugins",
              commands(mapOf("plugins" to original, "bukkit:plugins" to other)),
          )
      )
    }
    val equivalent = copy("plugins", original)
    assertNull(
        AssistantRules.normalize(
            "/plugins",
            commands(
                mapOf(
                    "plugins" to original,
                    "alpha:plugins" to equivalent,
                    "beta:plugins" to equivalent,
                )
            ),
        )
    )
  }

  @Test
  fun copiedServerWrappersStillObeyNamespacePriorityAndBlacklist() {
    val owners = listOf("minecraft", "bukkit", "paper", "spigot", "purpur")
    for (name in listOf("plugins", "version", "tps", "mspt", "reload", "restart", "stop")) {
      val original = node(name)
      owners.forEachIndexed { index, preferred ->
        val roots =
            owners.drop(index).associate { "$it:$name" to copy("$it:$name", original) } +
                (name to original)
        val normalized = assertNotNull(AssistantRules.normalize("/$name", commands(roots)))
        assertEquals("$preferred:$name", normalized.text)
        assertEquals(
            name in listOf("reload", "restart", "stop"),
            AssistantRules().isBlacklisted(normalized.text),
            normalized.text,
        )
      }
    }
  }

  @Test
  fun redirectsAreRejectedAndCopiedReloadAliasesCannotBypassBlacklist() {
    val stop = node("stop")
    val redirect = LiteralArgumentBuilder.literal<Any>("danger").redirect(stop).build()
    assertNull(
        AssistantRules.normalize(
            "/danger",
            commands(
                mapOf(
                    "danger" to redirect,
                    "minecraft:danger" to copy("minecraft:danger", redirect),
                )
            ),
        )
    )
    val reload = node("reload")
    val roots =
        mapOf(
            "reload" to reload,
            "bukkit:reload" to copy("bukkit:reload", reload),
            "rl" to copy("rl", reload),
        )
    val normalized =
        assertNotNull(
            AssistantRules.normalize(
                "/rl",
                commands(roots, mapOf("reload" to listOf("rl"), "bukkit:reload" to listOf("rl"))),
            )
        )
    assertEquals("bukkit:reload", normalized.text)
    assertTrue(AssistantRules().isBlacklisted(normalized.text))
  }

  @Test
  fun vanillaApiMirrorsUseTheirActualNodesForNormalizationAndRevalidation() {
    val original = node("stop")
    val roots = mapOf("stop" to original, "minecraft:stop" to copy("minecraft:stop", original))
    val commands = commands(roots, shadow = true)
    val normalized = assertNotNull(AssistantRules.normalize("/stop", commands))
    assertEquals("minecraft:stop", normalized.text)
    assertTrue(AssistantRules().isBlacklisted(normalized.text))
    assertSame(
        normalized.registration,
        AssistantRules.normalize(normalized.text, commands)?.registration,
    )
    val opaque =
        object :
            LiteralCommandNode<Any>(
                "minecraft:stop",
                original.command,
                original.requirement,
                null,
                null,
                false,
            ) {
          override fun getChildren(): MutableCollection<CommandNode<Any>> =
              throw UnsupportedOperationException("Opaque node")
        }
    assertNull(
        AssistantRules.normalize(
            "/stop",
            commands(mapOf("stop" to original, "minecraft:stop" to opaque)),
        )
    )
  }
}
