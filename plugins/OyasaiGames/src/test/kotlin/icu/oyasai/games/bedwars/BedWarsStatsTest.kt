package icu.oyasai.games.bedwars

import java.io.File
import java.util.UUID
import kotlin.test.*
import org.junit.jupiter.api.io.TempDir

class BedWarsStatsTest {
  @Test
  fun `event counters remain idempotent after restart and keys cannot inject paths`(
      @TempDir folder: File
  ) {
    val id = UUID.randomUUID()
    val stats = BedWarsStats(folder)
    assertTrue(stats.record(id, "match.kill.1", mapOf(BedWarsStat.KILLS to 1), "Fictional"))
    assertFalse(BedWarsStats(folder).record(id, "match.kill.1", mapOf(BedWarsStat.KILLS to 1)))
    assertTrue(stats.record(id, "match.kill.2", mapOf(BedWarsStat.KILLS to 1)))
    assertEquals(2L, stats.get(id)[BedWarsStat.KILLS])
  }

  @Test
  fun `legacy keys import once with losses and beds and ranking`(@TempDir folder: File) {
    val source = File(folder, "legacy/database/bw_stats_players.yml")
    source.parentFile.mkdirs()
    val first = UUID.randomUUID()
    val second = UUID.randomUUID()
    source.writeText(
        """
      data:
        $first:
          name: FictionalOne
          kills: 5
          deaths: 2
          destroyedBeds: 3
          loses: 4
          wins: 6
          score: 99
        $second:
          name: FictionalTwo
          score: 12
        invalid:
          score: 30
    """
            .trimIndent()
    )
    val original = source.readText()
    val stats = BedWarsStats(File(folder, "own"))
    assertEquals(2, stats.importLegacy(File(folder, "legacy")))
    assertEquals(0, stats.importLegacy(File(folder, "legacy")))
    assertEquals(3L, stats.get(first)[BedWarsStat.BEDS])
    assertEquals(4L, stats.get(first)[BedWarsStat.LOSSES])
    assertEquals(10L, stats.get(first)[BedWarsStat.GAMES])
    assertEquals(0L, stats.get(first)[BedWarsStat.FINAL_KILLS])
    assertEquals(listOf(first, second), stats.leaderboard().map { it.id })
    assertEquals(original, source.readText())
  }

  @Test
  fun `failed validation leaves both counter and event unchanged`(@TempDir folder: File) {
    val id = UUID.randomUUID()
    val stats = BedWarsStats(folder)
    assertFailsWith<IllegalArgumentException> {
      stats.record(id, "bad", mapOf(BedWarsStat.KILLS to -1))
    }
    assertTrue(stats.record(id, "bad", mapOf(BedWarsStat.KILLS to 1)))
    assertEquals(1L, stats.get(id)[BedWarsStat.KILLS])
  }

  @Test
  fun `tied leaderboard and limits are deterministic`(@TempDir folder: File) {
    val first = UUID(0, 1)
    val second = UUID(0, 2)
    val stats = BedWarsStats(folder)
    stats.record(second, "win", mapOf(BedWarsStat.WINS to 1))
    stats.record(first, "win", mapOf(BedWarsStat.WINS to 1))
    assertEquals(listOf(first, second), stats.leaderboard(BedWarsStat.WINS).map { it.id })
    assertEquals(listOf(first), stats.leaderboard(BedWarsStat.WINS, 1).map { it.id })
    assertFailsWith<IllegalArgumentException> { stats.leaderboard(limit = 0) }
    assertFailsWith<IllegalArgumentException> { stats.leaderboard(limit = 101) }
  }
}
