package icu.oyasai.utilities.teleport

import java.time.Instant
import java.util.TimeZone
import java.util.UUID
import kotlin.test.*
import org.bukkit.plugin.PluginDescriptionFile

class TeleportRulesTest {
  private val location = SavedLocation("world-id", "world", 1.0, 64.0, 2.0)

  @Test
  fun `matching jail with duration updates sentence while no jail name releases`() {
    assertEquals(
        TeleportRules.JailAction.ENTER,
        TeleportRules.jailAction(false, null, "cell", "1h"),
    )
    assertEquals(
        TeleportRules.JailAction.RELEASE,
        TeleportRules.jailAction(true, "cell", null, null),
    )
    assertEquals(
        TeleportRules.JailAction.UPDATE,
        TeleportRules.jailAction(true, "cell", "CELL", "1h"),
    )
    assertFailsWith<IllegalArgumentException> {
      TeleportRules.jailAction(true, "cell", "other", "1h")
    }
    assertFailsWith<IllegalArgumentException> { TeleportRules.jailAction(true, "cell", "cell", "") }
  }

  @Test
  fun `jail duration follows calendar months years full units bare seconds and ten year maximum`() {
    val now = Instant.parse("2024-01-31T00:00:00Z").toEpochMilli()
    val utc = TimeZone.getTimeZone("UTC")
    fun parse(value: String) = TeleportRules.parseJailDuration(value, now, timeZone = utc)
    assertEquals(Instant.parse("2024-02-29T00:00:00Z").toEpochMilli(), parse("1 month"))
    assertEquals(Instant.parse("2025-01-31T00:00:00Z").toEpochMilli(), parse("1 year"))
    assertEquals(
        now + (7 * 86400 + 2 * 86400 + 3 * 3600 + 4 * 60 + 5) * 1000L,
        parse("1 week, 2 days, 3 hours, 4 minutes, 5 seconds"),
    )
    assertEquals(now + 30_000, parse("30"))
    assertEquals(now, parse("0s"))
    assertEquals(Instant.parse("2034-01-31T00:00:00Z").toEpochMilli(), parse("50 years"))
    assertEquals(
        31 * 86400_000L,
        TeleportRules.parseJailDuration("1 month", now, emptyEpoch = true, timeZone = utc),
    )
    assertFailsWith<IllegalArgumentException> { parse("") }
    assertFailsWith<IllegalArgumentException> { parse("nonsense") }
  }

  @Test
  fun `approved aliases and essentials permissions own every teleport command`() {
    val expected =
        linkedMapOf(
            "home" to listOf("homes"),
            "sethome" to emptyList(),
            "delhome" to listOf("remhome"),
            "warp" to listOf("warps"),
            "tp" to listOf("tp2p"),
            "tphere" to listOf("s"),
            "tpa" to listOf("tpask"),
            "tpaccept" to listOf("tpyes"),
            "tpdeny" to listOf("tpno"),
            "tpacancel" to emptyList(),
            "tpahere" to emptyList(),
            "togglejail" to listOf("jail", "unjail"),
        )
    assertEquals(expected, TeleportRules.aliases)
    val descriptor =
        javaClass.getResourceAsStream("/plugin.yml")!!.use { PluginDescriptionFile(it) }
    expected.forEach { (command, aliases) ->
      assertEquals(aliases, descriptor.commands.getValue(command)["aliases"] ?: emptyList<String>())
      assertEquals("essentials.$command", descriptor.commands.getValue(command)["permission"])
      assertEquals("essentials.$command", TeleportRules.permission(command))
    }
  }

  @Test
  fun `world permissions are required only across worlds and home tier picks highest allowed limit`() {
    assertTrue(TeleportRules.worldAllowed("world", "world") { false })
    assertFalse(TeleportRules.worldAllowed("world", "jail") { false })
    assertTrue(
        TeleportRules.worldAllowed("world", "resource") { it == "essentials.worlds.resource" }
    )
    val tiers = mapOf("default" to 3, "vip" to 5, "staff" to 10)
    assertEquals(1, TeleportRules.homeLimit({ false }, tiers))
    assertEquals(3, TeleportRules.homeLimit({ it == "essentials.sethome.multiple" }, tiers))
    assertEquals(
        5,
        TeleportRules.homeLimit(
            { it in setOf("essentials.sethome.multiple", "essentials.sethome.multiple.vip") },
            tiers,
        ),
    )
    assertEquals(Int.MAX_VALUE, TeleportRules.homeLimit({ it.endsWith(".unlimited") }, tiers))
  }

  @Test
  fun `jailed teleport requires exactly the authorized own destination`() {
    assertTrue(TeleportRules.jailAllowsTeleport(false, location, null))
    assertFalse(TeleportRules.jailAllowsTeleport(true, location, null))
    assertTrue(TeleportRules.jailAllowsTeleport(true, location, location.copy()))
    assertTrue(TeleportRules.jailAllowsTeleport(true, location.copy(yaw = 90f), location))
    assertFalse(TeleportRules.jailAllowsTeleport(true, location.copy(x = 2.0), location))
    assertFalse(
        TeleportRules.jailAllowsTeleport(true, location.copy(worldUuid = "other"), location)
    )
  }

  @Test
  fun `requests expire after 120 seconds and duplicate sender recipient is refused`() {
    val sender = UUID.randomUUID()
    val recipient = UUID.randomUUID()
    val requests = TpaRequests()
    val original = TpaRequest(sender, recipient, false, location, 1_000L)
    requests.add(original)
    assertEquals(listOf(original), requests.pending(recipient, now = 120_999L))
    assertTrue(requests.pending(recipient, now = 121_000L).isEmpty())
    requests.add(original)
    val replacement = original.copy(here = true, time = 2_000L)
    assertFailsWith<IllegalArgumentException> { requests.add(replacement) }
    assertEquals(listOf(original), requests.pending(recipient, sender, 2_000L))
    assertFalse(requests.remove(replacement))
    assertEquals(listOf(original), requests.cancel(sender))
    assertTrue(requests.pending(recipient, now = 2_000L).isEmpty())
  }

  @Test
  fun `zero timeout disables expiry and outgoing requests are available for cancellation`() {
    val request = TpaRequest(UUID.randomUUID(), UUID.randomUUID(), false, location, 0L)
    val requests = TpaRequests(0)
    requests.add(request)
    assertEquals(listOf(request), requests.pending(request.recipient, now = Long.MAX_VALUE))
    assertEquals(listOf(request), requests.outgoing(request.sender, Long.MAX_VALUE))
    requests.clear()
    assertTrue(requests.outgoing(request.sender).isEmpty())
  }

  @Test
  fun `pending requests select newest and leaving clears incoming and outgoing`() {
    val recipient = UUID.randomUUID()
    val first = TpaRequest(UUID.randomUUID(), recipient, false, location, 1_000L)
    val last = TpaRequest(UUID.randomUUID(), recipient, false, location, 2_000L)
    val outgoing = last.copy(sender = recipient, recipient = UUID.randomUUID())
    val requests = TpaRequests()
    listOf(first, last, outgoing).forEach(requests::add)
    assertEquals(listOf(last, first), requests.pending(recipient, now = 3_000L))
    requests.clear(recipient)
    assertTrue(requests.pending(recipient, now = 3_000L).isEmpty())
    assertTrue(requests.pending(outgoing.recipient, now = 3_000L).isEmpty())
  }
}
