package icu.oyasai.games.pvp

import java.io.File
import kotlin.test.*
import org.junit.jupiter.api.io.TempDir

class PvpRulesTest {
  @Test
  fun `unqualified bets select only one matching arena`() {
    val targets = mapOf("first" to listOf("red", "blue"), "second" to listOf("alpha", "beta"))
    assertEquals("first", resolveBetArena("RED", targets))
    assertEquals("second", resolveBetArena("alp", targets))
    assertNull(resolveBetArena("missing", targets))
    assertNull(resolveBetArena("red", targets + ("third" to listOf("red"))))
  }

  @Test
  fun `spawn protection includes radius boundary and excludes other worlds`() {
    val spawn = Point("arena", 0.0, 0.0, 0.0)
    assertTrue(spawn.near(Point("arena", 3.0, 4.0, 0.0), 5))
    assertFalse(spawn.near(Point("arena", 3.0, 4.0, 1.0), 5))
    assertFalse(spawn.near(Point("other", 0.0, 0.0, 0.0), 5))
    assertFalse(spawn.near(spawn, 0))
  }

  @Test
  fun `names are case insensitive and ambiguous shortcuts cannot join`() {
    val names = listOf("Duel_v2", "Duel_side", "Battle")
    assertEquals("Duel_v2", resolveName("DUEL_V2", names))
    assertEquals("Duel_v2", resolveName("duel", names))
    assertNull(resolveName("du", names))
    assertNull(resolveName("duel", listOf("Duel_v2", "Duel_new")))
    assertEquals("Duel", resolveName("duel", listOf("Duel", "Duel_v2")))
    assertEquals("Duel_v2", resolveName("v2", names))
    assertEquals("Battle", resolveName("batt", names))
    assertNull(resolveName("", names))
  }

  @Test
  fun `each goal ends for the correct side and deaths are idempotent after elimination`() {
    for (goal in Goal.entries) {
      val rules = MatchRules(goal, 1)
      rules.add("alpha", "red")
      rules.add("beta", "blue")
      rules.death("beta", "alpha")
      assertEquals(setOf(if (goal.teams) "red" else "alpha"), rules.winners())
      if (!goal.kills) {
        rules.death("beta", "alpha")
        assertEquals(1, rules.fighters.getValue("beta").deaths)
      }
    }
  }

  @Test
  fun `team lives are shared and individual team lives eliminate only one player`() {
    val shared = MatchRules(Goal.TeamLives, 2)
    val individual = MatchRules(Goal.TeamPlayerLives, 1)
    for (rules in listOf(shared, individual)) {
      rules.add("one", "red")
      rules.add("two", "red")
      rules.add("three", "blue")
      rules.death("one", null)
      assertNull(rules.winners())
    }
    assertFalse(individual.fighters.getValue("one").active)
    assertTrue(individual.fighters.getValue("two").active)
    shared.death("two", null)
    assertEquals(setOf("blue"), shared.winners())
  }

  @Test
  fun `zero lives means elimination on first death and friendly kills do not score`() {
    val rules = MatchRules(Goal.TeamPlayerLives, 0)
    rules.add("one", "red")
    rules.add("two", "blue")
    rules.death("one", null)
    assertEquals(setOf("blue"), rules.winners())
    val kills = MatchRules(Goal.TeamDeathMatch, 3)
    kills.add("one", "red")
    kills.add("two", "red")
    kills.add("three", "blue")
    kills.death("two", "one")
    assertEquals(0, kills.fighters.getValue("one").kills)
    assertNull(kills.winners())
  }

  @Test
  fun `timed match scores and ties preserve all winners`() {
    val rules = MatchRules(Goal.PlayerDeathMatch, 20)
    rules.add("one", "free")
    rules.add("two", "free")
    assertEquals(emptySet(), rules.winners(true))
    rules.death("two", "one")
    assertEquals(setOf("one"), rules.winners(true))
  }

  @Test
  fun `bets use the pooled payout formula rounded to cents and reject non finite money`() {
    assertEquals(42.0, betPayout(10.0, 20.0, 60.0, 1.4))
    assertEquals(3.33, betPayout(1.0, 3.0, 10.0, 1.0))
    for (value in listOf(Double.NaN, Double.POSITIVE_INFINITY, -1.0)) assertFailsWith<
        IllegalArgumentException
    > {
      betPayout(value, 3.0, 10.0, 1.0)
    }
    assertFailsWith<IllegalArgumentException> { betPayout(1.0, 0.0, 10.0, 1.0) }
  }

  @Test
  fun `auto classes support documented per team syntax`() {
    assertEquals("Archer", autoClass("red:Archer;blue:Guard", "red"))
    assertEquals("Guard", autoClass("red:Archer;blue:Guard", "blue"))
    assertEquals("Example", autoClass("Example", "free"))
  }

  @Test
  fun `suicide scoring awards other sides rather than reducing the victim score`() {
    val team = MatchRules(Goal.TeamDeathMatch, 1, true)
    team.add("one", "red")
    team.add("two", "blue")
    team.death("one", null)
    assertEquals(setOf("blue"), team.winners())
    val individual = MatchRules(Goal.PlayerDeathMatch, 1, true)
    individual.add("one", "free")
    individual.add("two", "free")
    individual.death("one", null)
    assertEquals(setOf("two"), individual.winners())
  }

  @Test
  fun `ready ratio checks classes teams and automatic lounge separately`() {
    fun check(
        members: List<Pair<String, Boolean>>,
        kits: Boolean = true,
        auto: Boolean = false,
        each: Boolean = false,
    ) = readyToStart(true, members, kits, 2, auto, each, true, 0.5)
    assertFalse(check(listOf("red" to true)))
    assertFalse(check(listOf("red" to true, "red" to true)))
    assertFalse(check(listOf("red" to true, "blue" to false)))
    assertTrue(check(listOf("red" to true, "blue" to true, "red" to false)))
    assertFalse(check(listOf("red" to true, "blue" to true, "red" to false), each = true))
    assertFalse(check(listOf("red" to true, "blue" to true), kits = false))
    assertTrue(check(listOf("red" to false, "blue" to false), auto = true))
  }

  @Test
  fun `metadata conversion preserves modifiers names lore and custom data without changing input`() {
    val modifiers = listOf(mapOf("amount" to 1.5, "operation" to 0, "key" to "example:fictional"))
    val input =
        mapOf(
            "attribute-modifiers" to mapOf("GENERIC_ATTACK_DAMAGE" to modifiers),
            "enchants" to mapOf("DAMAGE_ALL" to 2),
            "display-name" to "fictional",
            "PublicBukkitValues" to mapOf("example:key" to "value"),
        )
    val result = normalizeMetadata(input)
    assertEquals(mapOf("minecraft:attack_damage" to modifiers), result["attribute-modifiers"])
    assertEquals(mapOf("minecraft:sharpness" to 2), result["enchants"])
    assertEquals(input["display-name"], result["display-name"])
    assertEquals(input["PublicBukkitValues"], result["PublicBukkitValues"])
    assertEquals(mapOf("DAMAGE_ALL" to 2), input["enchants"])
  }

  @Test
  fun `legacy item identifiers become current registry keys`() {
    assertEquals("minecraft:power", enchantKey("ARROW_DAMAGE"))
    assertEquals("minecraft:sharpness", enchantKey("minecraft:sharpness"))
    assertEquals("minecraft:attack_speed", attributeKey("GENERIC_ATTACK_SPEED"))
    assertEquals("minecraft:jump_strength", attributeKey("minecraft:jump_strength"))
  }

  @Test
  fun `durable writer replaces file and leaves previous version on failure`(@TempDir folder: File) {
    val file = File(folder, "journal")
    durableWrite(file, "original".toByteArray())
    durableWrite(file, "replacement".toByteArray())
    assertEquals("replacement", file.readText())
    assertFalse(File(folder, "journal.tmp").exists())
    File(folder, "journal.tmp").mkdir()
    assertFails { durableWrite(file, "lost".toByteArray()) }
    assertEquals("replacement", file.readText())
  }
}
