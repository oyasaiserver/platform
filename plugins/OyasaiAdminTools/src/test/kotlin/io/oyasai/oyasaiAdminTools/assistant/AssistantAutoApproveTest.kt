package io.oyasai.oyasaiAdminTools.assistant

import java.util.UUID
import kotlin.test.*
import org.bukkit.configuration.file.YamlConfiguration

class AssistantAutoApproveTest {
  private val id = UUID.randomUUID()

  private fun settings(rows: Any) = YamlConfiguration().apply { set("auto-approve", rows) }

  private fun row(arguments: Any = "", vararg extra: Pair<String, Any>) =
      mapOf("command" to "oyasaiutilities:tp", "arguments" to arguments) + extra

  @Test
  fun bundledDefaultsAllowOnlyTheImplementedSelfCoordinateForm() {
    val config =
        YamlConfiguration().apply {
          loadFromString(
              checkNotNull(javaClass.getResourceAsStream("/config.yml")).bufferedReader().use {
                it.readText()
              }
          )
        }
    val approvals =
        AssistantAutoApprove(config.getConfigurationSection("assistant"), warn = { fail(it) })
    assertEquals(1, approvals.entries.size)
    assertNotNull(approvals.match("oyasaiutilities:tp 0 64 -20.5", id, "world"))
    assertNull(approvals.match("oyasaiutilities:tp 1 2 3 90 0", id, "world"))
    assertNull(approvals.match("oyasaiutilities:tp alice 1 2 3", id, "world"))
    for (name in listOf("gamemode", "fly")) assertNull(
        approvals.match("oyasaiutilities:$name", id, "world")
    )
  }

  @Test
  fun numbersMatchWholeArgumentsButNeverPlayersOrExtraArguments() {
    val number = AssistantAutoApprove.NUMBER
    val approvals =
        AssistantAutoApprove(
            settings(
                listOf(
                    row("$number $number $number"),
                    row("$number $number $number $number $number"),
                )
            ),
            warn = { fail(it) },
        )
    for (args in listOf("0 64 -20", "+1.5 -2.25 0", "1 2 3 90 -45")) assertNotNull(
        approvals.match("oyasaiutilities:tp $args", id, "world"),
        args,
    )
    for (args in
        listOf(
            "alice 1 2 3",
            "1 2 3 alice",
            "alice bob",
            "1 2",
            "1 2 3 4",
            "1e2 0 0",
            "~ ~ ~",
            "1 2 3\n",
            "1 2 3 extra",
        )) assertNull(approvals.match("oyasaiutilities:tp $args", id, "world"), args)
    assertNull(approvals.match("minecraft:tp 1 2 3", id, "world"))
  }

  @Test
  fun omittedArgumentsAreExactAndValidPatternsHaveLimitedSyntax() {
    val approvals =
        AssistantAutoApprove(
            settings(
                listOf(
                    mapOf("command" to "oyasaiutilities:tp"),
                    row("(?:on|off)"),
                    row("[a-z0-9_-]{1,16}"),
                )
            ),
            warn = { fail(it) },
        )
    assertEquals(1, approvals.match("oyasaiutilities:tp", id, "world")?.number)
    assertEquals(2, approvals.match("oyasaiutilities:tp on", id, "world")?.number)
    assertEquals(3, approvals.match("oyasaiutilities:tp alice_1", id, "world")?.number)
    assertNull(approvals.match("oyasaiutilities:tp on extra", id, "world"))
  }

  @Test
  fun unsafeOrMalformedConfigurationWarnsAndNeverBecomesAnUnrestrictedApproval() {
    val invalid =
        listOf(
            row(".*"),
            row(".+"),
            row("(a+)+"),
            row("[a-z]+[a-z]+"),
            row("(?:a|aa)+"),
            row("(?:a|a)"),
            row("(?=a)a"),
            row("(a)\\1"),
            row("[^ ]+"),
            row("[a-z]{1,999}"),
            row("a\nb"),
            row("a".repeat(513)),
            row(42),
            row("", "per-minute" to 0),
            row("", "per-minute" to 1.5),
            row("", "worlds" to "world"),
            row("", "worlds" to emptyList<String>()),
            row("", "worlds" to listOf("world", 1)),
            row("", "argument" to "[0-9]+"),
            mapOf("command" to "tp"),
            mapOf("command" to "OyasaiUtilities:tp"),
        )
    val warnings = mutableListOf<String>()
    val approvals = AssistantAutoApprove(settings(invalid), warn = warnings::add)
    assertTrue(approvals.entries.isEmpty())
    assertEquals(invalid.size, warnings.size)
    assertNull(approvals.match("oyasaiutilities:tp anything", id, "world"))
    assertTrue(AssistantAutoApprove(settings("bad"), warn = warnings::add).entries.isEmpty())
  }

  @Test
  fun worldAndRollingRateLimitArePerOperatorAndPreviewDoesNotConsume() {
    var time = 0L
    val approvals =
        AssistantAutoApprove(
            settings(
                listOf(
                    row(
                        "[0-9]+",
                        "per-minute" to 1,
                        "worlds" to listOf("world"),
                    )
                )
            ),
            warn = { fail(it) },
            now = { time },
        )
    assertNull(approvals.match("oyasaiutilities:tp 1", id, "other", true))
    repeat(3) { assertNotNull(approvals.match("oyasaiutilities:tp 1", id, "world")) }
    assertNotNull(approvals.match("oyasaiutilities:tp 1", id, "world", true))
    assertNull(approvals.match("oyasaiutilities:tp 1", id, "world", true))
    assertNotNull(approvals.match("oyasaiutilities:tp 1", UUID.randomUUID(), "world", true))
    time = 59_999_999_999L
    assertNull(approvals.match("oyasaiutilities:tp 1", id, "world"))
    time++
    assertNotNull(approvals.match("oyasaiutilities:tp 1", id, "world", true))
  }

  @Test
  fun invalidRowsKeepOriginalAuditNumbers() {
    val approvals = AssistantAutoApprove(settings(listOf(row(".*"), row("[0-9]+"))), warn = {})
    assertEquals(2, approvals.match("oyasaiutilities:tp 1", id, "world")?.number)
  }
}
