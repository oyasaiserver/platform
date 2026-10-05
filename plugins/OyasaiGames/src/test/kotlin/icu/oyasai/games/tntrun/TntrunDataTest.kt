package icu.oyasai.games.tntrun

import icu.oyasai.games.pvp.PvpEconomy
import icu.oyasai.games.pvp.saveYaml
import java.io.File
import java.lang.reflect.Proxy
import java.util.UUID
import kotlin.test.*
import net.milkbowl.vault.economy.Economy
import net.milkbowl.vault.economy.EconomyResponse
import org.bukkit.OfflinePlayer
import org.bukkit.configuration.file.YamlConfiguration
import org.bukkit.entity.Player
import org.junit.jupiter.api.io.TempDir

class TntrunDataTest {
  @Test
  fun `reentrant recovery never restores twice and failures release the gate`() {
    val id = UUID.randomUUID()
    val inProgress = hashSetOf<UUID>()
    var calls = 0
    guardedRecovery(inProgress, id) {
      calls++
      guardedRecovery(inProgress, id) { fail("recursive restore") }
    }
    assertEquals(1, calls)
    assertTrue(inProgress.isEmpty())
    assertFails { guardedRecovery(inProgress, id) { error("simulated cancelled teleport") } }
    assertTrue(inProgress.isEmpty())
    guardedRecovery(inProgress, id) { calls++ }
    assertEquals(2, calls)
  }

  @Test
  fun `invalid paid jump records fail closed rather than reset balance`(@TempDir dir: File) {
    val corrupt =
        File(dir, "records.yml").also {
          it.writeText("players: {fictional: {jumps: -1, played: 0, wins: 0}}")
        }
    assertFails { RunData(dir) }
    assertTrue(corrupt.readText().contains("jumps: -1"))
  }

  private val id = UUID.randomUUID()

  private fun player() =
      Proxy.newProxyInstance(Player::class.java.classLoader, arrayOf(Player::class.java)) { _, m, _
        ->
        when (m.name) {
          "getUniqueId" -> id
          else -> null
        }
      } as Player

  private fun offline() =
      Proxy.newProxyInstance(
          OfflinePlayer::class.java.classLoader,
          arrayOf(OfflinePlayer::class.java),
      ) { _, m, _ ->
        when (m.name) {
          "getUniqueId" -> id
          else -> null
        }
      } as OfflinePlayer

  private fun bank(dir: File, action: (String, Double) -> Unit) =
      PvpEconomy(
          dir,
          Proxy.newProxyInstance(Economy::class.java.classLoader, arrayOf(Economy::class.java)) {
              _,
              m,
              args ->
            if (m.name in setOf("withdrawPlayer", "depositPlayer")) {
              val amount = args!![1] as Double
              action(m.name, amount)
              EconomyResponse(amount, 1000.0, EconomyResponse.ResponseType.SUCCESS, "")
            } else null
          } as Economy,
      ) {
        offline()
      }

  @Test
  fun `legacy stats root and player jumps prefer UUID over exact legacy names`(@TempDir dir: File) {
    File(dir, "players.yml").writeText("$id: {doublejumps: 2}\nFictional: {doublejumps: 6}\n")
    File(dir, "stats.yml")
        .writeText("stats:\n  $id: {played: 9, wins: 3}\n  Fictional: {played: 1, wins: 0}\n")
    val data = RunData(dir)
    data.enlist(id, "Fictional")
    assertEquals(2, data.jumps(id))
    assertEquals("9 games / 3 wins", data.stats(id))
    data.enlist(id, "Fictional")
    assertEquals(2, data.jumps(id))
  }

  @Test
  fun `legacy names must match exactly and import is not repeated`(@TempDir dir: File) {
    File(dir, "players.yml")
        .writeText("Fictional: {doublejumps: 6}\nFictional2: {doublejumps: 3}\n")
    val data = RunData(dir)
    data.enlist(id, "fictional")
    assertEquals(6, data.jumps(id))
    data.setJumps(id, 1)
    data.enlist(id, "Fictional")
    assertEquals(1, RunData(dir).jumps(id))
    val other = UUID.randomUUID()
    data.enlist(other, "Fict")
    assertEquals(0, data.jumps(other))
  }

  @Test
  fun `played and won decisions are replay safe`(@TempDir dir: File) {
    val data = RunData(dir)
    val match = UUID.randomUUID()
    data.enlist(id, "Fictional")
    data.played(match, setOf(id))
    data.played(match, setOf(id))
    data.won(match, id)
    RunData(dir).won(match, id)
    assertEquals("1 games / 1 wins", RunData(dir).stats(id))
  }

  @Test
  fun `award replay updates original XP snapshot once`(@TempDir dir: File) {
    val file = File(dir, "snapshot.yml")
    saveYaml(
        file,
        YamlConfiguration().apply {
          set("level", 0)
          set("exp", 0.0)
          set("total-exp", 0)
          set("inventory", listOf("fictional-original-item"))
        },
    )
    rewardXp(file, "example-match", 1000)
    rewardXp(file, "example-match", 1000)
    val y = readYaml(file)
    assertEquals(26, y.getInt("level"))
    assertEquals(1000, y.getInt("total-exp"))
    assertEquals(listOf("fictional-original-item"), y.getStringList("inventory"))
    assertFails { rewardXp(File(dir, "missing.yml"), "match", 1) }
  }

  @Test
  fun `pending result across XP-save failure window deposits and counts once`(@TempDir dir: File) {
    val data = RunData(dir)
    data.enlist(id, "Fictional")
    val match = UUID.randomUUID().toString()
    val snapshot = File(dir, "players/$id.yml")
    saveYaml(
        snapshot,
        YamlConfiguration().apply {
          set("level", 0)
          set("exp", 0.0)
          set("total-exp", 0)
        },
    )
    rewardXp(snapshot, match, 50) // Simulate crash before result xp-applied is saved.
    val result = File(dir, "result.yml")
    saveYaml(
        result,
        YamlConfiguration().apply {
          set("match", match)
          set("winner", id.toString())
          set("xp", 50)
          set("money", 25.0)
          set("stats", true)
        },
    )
    val deposits = mutableListOf<Double>()
    val bank = bank(dir) { method, amount -> if (method == "depositPlayer") deposits.add(amount) }
    deliverResult(result, dir, data, bank)
    deliverResult(result, dir, RunData(dir), bank)
    bank.retry()
    assertEquals(listOf(25.0), deposits)
    assertEquals(50, readYaml(snapshot).getInt("total-exp"))
    assertEquals("0 games / 1 wins", RunData(dir).stats(id))
    assertTrue(readYaml(result).getBoolean("delivered"))
  }

  @Test
  fun `purchase recovery consumes debit then replaces jump balance once`(@TempDir dir: File) {
    val data = RunData(dir)
    data.enlist(id, "Fictional")
    data.setJumps(id, 2)
    val calls = mutableListOf<String>()
    val bank = bank(dir) { m, _ -> calls.add(m) }
    val key = UUID.randomUUID().toString()
    val purchase = File(dir, "purchase.yml")
    val yaml =
        YamlConfiguration().apply {
          set("key", key)
          set("player", id.toString())
          set("after", 3)
        }
    saveYaml(purchase, yaml)
    bank.charge(player(), 10.0, key)
    recoverPurchase(purchase, data, bank)
    // Crash can leave the intent after the receipt was written; replay is replacement, not
    // increment.
    saveYaml(purchase, yaml)
    recoverPurchase(purchase, RunData(dir), bank)
    bank.retry()
    assertEquals(3, RunData(dir).jumps(id))
    assertEquals(listOf("withdrawPlayer"), calls)
    assertFalse(purchase.exists())
  }

  @Test
  fun `uncertain purchase never grants jumps or repeats withdrawal`(@TempDir dir: File) {
    val data = RunData(dir)
    data.enlist(id, "Fictional")
    val key = UUID.randomUUID().toString()
    val purchase = File(dir, "purchase.yml")
    saveYaml(
        purchase,
        YamlConfiguration().apply {
          set("key", key)
          set("player", id.toString())
          set("after", 1)
        },
    )
    val crashBank = bank(dir) { _, _ -> error("simulated provider disconnect") }
    assertFails { crashBank.charge(player(), 10.0, key) }
    val calls = mutableListOf<String>()
    val recovered = bank(dir) { m, _ -> calls.add(m) }
    assertFails { recoverPurchase(purchase, data, recovered) }
    recovered.retry()
    assertTrue(calls.isEmpty())
    assertEquals(0, data.jumps(id))
    assertTrue(purchase.exists())
    assertTrue(recovered.hasUncertain(id))
  }
}
