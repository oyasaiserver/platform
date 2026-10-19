package io.oyasai.oyasaiAdminTools.assistant

import java.util.UUID
import java.util.concurrent.CopyOnWriteArrayList
import java.util.concurrent.atomic.AtomicInteger
import kotlin.test.*
import net.kyori.adventure.util.TriState
import org.bukkit.command.CommandSender
import org.bukkit.entity.Player

class AssistantCommandSenderTest {
  private val operatorId = UUID.nameUUIDFromBytes("operator".toByteArray())

  private fun sender(
      online: Boolean = true,
      permissions: Set<String> = setOf(AssistantFeature.PERMISSION, "essentials.fly"),
      ceiling: List<String> = emptyList(),
  ): Pair<AssistantCommandSender, () -> Player> {
    var current =
        AssistantSenderFakes.player(
            "operator",
            operatorId,
            online = online,
            permissions = permissions,
        )
    val server = AssistantSenderFakes.server({ listOf(current) })
    return AssistantCommandSender(
        server,
        operatorId,
        AssistantFeature.PERMISSION,
        "operator",
        ceiling,
    ) to { current }
  }

  @Test
  fun borrowsTheOnlineOperatorsPermissionsAndIsNeverAnOperator() {
    val (sut, _) = sender()
    assertFalse(sut.isOp())
    sut.setOp(true)
    assertFalse(sut.isOp(), "setOp must not make the AI sender an operator")
    assertTrue(sut.hasPermission("essentials.fly"))
    assertTrue(sut.hasPermission("essentials.fly", silent = false))
    assertEquals("Assistant(operator)", sut.getName())
    val displayName: net.kyori.adventure.text.Component = sut.name()
    assertEquals(
        "Assistant(operator)",
        net.kyori.adventure.text.serializer.plain.PlainTextComponentSerializer.plainText()
            .serialize(displayName),
    )
    @Suppress("USELESS_IS_CHECK")
    assertFalse(
        (sut as Any) is org.bukkit.command.ConsoleCommandSender,
        "the AI sender is not the console",
    )
    @Suppress("USELESS_IS_CHECK")
    assertFalse(
        (sut as Any) is org.bukkit.command.RemoteConsoleCommandSender,
        "nor the RCON console",
    )
    @Suppress("USELESS_IS_CHECK") assertFalse((sut as Any) is Player)
    assertTrue(sut.messages().isEmpty(), "silent checks show nothing")
  }

  @Test
  fun deniesPermissionsTheOperatorDoesNotHave() {
    val (sut, _) = sender(permissions = setOf(AssistantFeature.PERMISSION))
    assertFalse(sut.hasPermission("essentials.fly"))
    assertTrue(sut.messages().isEmpty(), "a silent check shows nothing")
    // Non-silent checks explain the denial to the AI, not to the operator.
    assertFalse(sut.hasPermission("essentials.fly", silent = false))
    assertEquals(listOf("権限がありません。"), sut.messages())
  }

  @Test
  fun anOperatorWhoIsNotOpDoesNotGetBukkitOperatorNodes() {
    val (sut, operator) = sender(permissions = setOf(AssistantFeature.PERMISSION))
    for (node in listOf("bukkit.command.op", "bukkit.command.deop", "minecraft.command.op", "op")) {
      // The operator does not hold them and is never treated as op.
      assertFalse(sut.hasPermission(node), node)
      assertFalse(sut.isOp())
      assertFalse(operator().isOp(), "the operator itself is not op either")
      assertNotEquals(TriState.TRUE, sut.permissionValue(node), "$node is not granted")
    }
    // The AI sender's effective permissions are the operator's, filtered by the ceiling; nothing
    // is added.
    assertEquals(
        operator().effectivePermissions.map { it.permission to it.value },
        sut.effectivePermissions.map { it.permission to it.value },
    )
  }

  @Test
  fun deniesEveryKnownNodeAndRefusesDispatchOnceTheOperatorIsOffline() {
    val players = CopyOnWriteArrayList<Player>()
    var dispatchCount = AtomicInteger()
    val online =
        AssistantSenderFakes.player(
            "operator",
            operatorId,
            permissions = setOf(AssistantFeature.PERMISSION, "essentials.fly"),
        )
    players += online
    val server =
        AssistantSenderFakes.server({ players.toList() }) { _, _ ->
          dispatchCount.incrementAndGet()
          true
        }
    val sut =
        AssistantCommandSender(
            server,
            operatorId,
            AssistantFeature.PERMISSION,
            "operator",
            emptyList(),
        )
    assertTrue(sut.hasPermission("essentials.fly"))
    players.clear()
    assertFalse(sut.hasPermission("essentials.fly"))
    assertFalse(sut.isPermissionSet("essentials.fly"))
    assertFailsWith<IllegalStateException> { sut.dispatch("essentials:fly") }
    assertEquals(0, dispatchCount.get(), "nothing may run once the operator is gone")

    val still = AssistantSenderFakes.player("operator", operatorId, online = false)
    players += still
    assertFalse(
        sut.hasPermission("essentials.fly"),
        "an online=false player is offline for the sender",
    )
  }

  @Test
  fun deniesEverythingOnceTheOperatorLostTheAssistantPermission() {
    val (sut, _) = sender(permissions = setOf("essentials.fly"))
    assertFalse(sut.hasPermission("essentials.fly"))
    assertFalse(sut.hasPermission(AssistantFeature.PERMISSION))
    assertFailsWith<IllegalStateException> { sut.dispatch("essentials:fly") }
  }

  @Test
  fun theDefaultCeilingLeavesAOperatorPermissionUnchangedIncludingExplicitGrants() {
    val operator =
        AssistantSenderFakes.player(
            "operator",
            operatorId,
            permissions = setOf(AssistantFeature.PERMISSION, "essentials.fly"),
        )
    val sut =
        AssistantCommandSender(
            AssistantSenderFakes.server({ listOf(operator) }),
            operatorId,
            AssistantFeature.PERMISSION,
            "operator",
            listOf(AssistantCommandSender.PERMISSIONS_ALL),
        )
    assertTrue(sut.isPermissionSet("essentials.fly"))
    assertTrue(sut.hasPermission("essentials.fly"))
    assertFalse(
        sut.hasPermission("essentials.gamemode"),
        "still limited to what the operator holds",
    )
    assertTrue(sut.messages().isEmpty(), "granted checks show nothing")
  }

  @Test
  fun anExplicitCeilingNarrowsTheOperatorPermissionsButNeverWidensThem() {
    // The ceiling lists a node the operator does not have: the borrow limit still applies first.
    val (narrowed, _) = sender(ceiling = listOf("essentials.fly", "essentials.gamemode"))
    assertTrue(narrowed.hasPermission("essentials.fly"))
    assertFalse(narrowed.hasPermission("essentials.gamemode"), "not held by the operator")
    assertFalse(narrowed.hasPermission(AssistantFeature.PERMISSION), "outside the ceiling")
    // A node the operator holds but the ceiling excludes is reported as set-and-denied, so a
    // default "true" can never fall through.
    assertTrue(narrowed.isPermissionSet(AssistantFeature.PERMISSION))
    assertFalse(narrowed.hasPermission(AssistantFeature.PERMISSION))
    assertFalse(narrowed.hasPermission("essentials.gamemode", silent = false))
    assertEquals(listOf("権限がありません。"), narrowed.messages())
  }

  @Test
  fun ceilingKeywordsMustBeAloneAndNoneDeniesAll() {
    val (none, _) = sender(ceiling = listOf(AssistantCommandSender.PERMISSIONS_NONE))
    assertFalse(none.hasPermission("essentials.fly"))
    assertFailsWith<IllegalArgumentException> {
      AssistantCommandSender(
          AssistantSenderFakes.server({ emptyList() }),
          operatorId,
          AssistantFeature.PERMISSION,
          "operator",
          listOf(AssistantCommandSender.PERMISSIONS_ALL, "essentials.fly"),
      )
    }
    assertFailsWith<IllegalArgumentException> {
      AssistantCommandSender.validate(listOf("essentials.fly", " "))
    }
  }

  @Test
  fun collectsTextForTheAiAndNotifiesSubscribers() {
    val (sut, _) = sender()
    val seen = mutableListOf<String>()
    val stop = sut.subscribe { seen += it }
    sut.sendMessage("first")
    sut.sendMessage(arrayOf("second", "third"))
    sut.sendMessage(net.kyori.adventure.text.Component.text("fourth"))
    @Suppress("DEPRECATION") val bungee = net.md_5.bungee.api.chat.TextComponent("fifth")
    sut.spigot().sendMessage(bungee)
    // Bungee serializes plain text with a leading "\u00a7f"; the AI text keeps the plain words.
    stop()
    sut.sendMessage("sixth")
    assertEquals(listOf("first", "second", "third", "fourth", "fifth", "sixth"), sut.messages())
    assertEquals(listOf("first", "second", "third", "fourth", "fifth"), seen)
    assertEquals(0, sut.droppedMessages())
  }

  @Test
  fun dispatchGoesThroughTheServerWithThisSender() {
    val received = mutableListOf<Pair<CommandSender, String>>()
    val operator = AssistantSenderFakes.player("operator", operatorId)
    val server =
        AssistantSenderFakes.server({ listOf(operator) }) { who, command ->
          received += who to command
          true
        }
    val sut =
        AssistantCommandSender(
            server,
            operatorId,
            AssistantFeature.PERMISSION,
            "operator",
            emptyList(),
        )
    assertTrue(sut.dispatch("bukkit:plugins"))
    assertEquals(1, received.size)
    assertSame(
        sut,
        received.single().first,
        "the command must run with the AI sender, not the player",
    )
    assertEquals("bukkit:plugins", received.single().second)
  }
}
