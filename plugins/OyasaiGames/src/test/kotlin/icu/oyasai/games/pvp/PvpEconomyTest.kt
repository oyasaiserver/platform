package icu.oyasai.games.pvp

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

class PvpEconomyTest {
  @Test
  fun `provider callback cannot overwrite ledger with a nested transaction`(@TempDir folder: File) {
    lateinit var bank: PvpEconomy
    var calls = 0
    val economy = provider { method, _ ->
      if (method == "depositPlayer") {
        calls++
        assertFails { bank.pay(id, 2.0) }
        assertFails { bank.payOnce("nested-event", id, 2.0) }
      }
    }
    bank = PvpEconomy(folder, economy) { offline() }
    bank.pay(id, 5.0)
    bank.retry()
    assertEquals(1, calls)
    val y = YamlConfiguration().also { it.load(File(folder, "payments.yml")) }
    assertEquals(1, y.getConfigurationSection("credits")!!.getKeys(false).size)
  }

  @Test
  fun `stable reward key prevents double payment across result replay`(@TempDir folder: File) {
    val deposits = mutableListOf<Double>()
    val economy = provider { method, amount -> if (method == "depositPlayer") deposits.add(amount) }
    val key = UUID.randomUUID().toString()
    val bank = PvpEconomy(folder, economy) { offline() }
    bank.pay(id, 12.0, key)
    PvpEconomy(folder, economy) { offline() }.pay(id, 12.0, key)
    bank.retry()
    assertEquals(listOf(12.0), deposits)
  }

  private val id = UUID.randomUUID()

  private fun player(): Player =
      Proxy.newProxyInstance(Player::class.java.classLoader, arrayOf(Player::class.java)) {
          _,
          method,
          _ ->
        when (method.name) {
          "getUniqueId" -> id
          "toString" -> "fictional-player"
          else -> null
        }
      } as Player

  private fun offline(): OfflinePlayer =
      Proxy.newProxyInstance(
          OfflinePlayer::class.java.classLoader,
          arrayOf(OfflinePlayer::class.java),
      ) { _, method, _ ->
        when (method.name) {
          "getUniqueId" -> id
          "toString" -> "fictional-offline-player"
          else -> null
        }
      } as OfflinePlayer

  private fun provider(action: (String, Double) -> Unit): Economy =
      Proxy.newProxyInstance(Economy::class.java.classLoader, arrayOf(Economy::class.java)) {
          _,
          method,
          args ->
        if (method.name in setOf("withdrawPlayer", "depositPlayer")) {
          action(method.name, args!![1] as Double)
          EconomyResponse(args[1] as Double, 1000.0, EconomyResponse.ResponseType.SUCCESS, "")
        } else null
      } as Economy

  @Test
  fun `settlement and refunds are idempotent after process restart`(@TempDir folder: File) {
    val deposits = mutableListOf<Double>()
    val economy = provider { method, amount -> if (method == "depositPlayer") deposits.add(amount) }
    val bank = PvpEconomy(folder, economy) { offline() }
    val key = bank.charge(player(), 25.0)
    bank.settle(key, 35.0)
    bank.refund(key)
    bank.settle(key, 35.0)
    PvpEconomy(folder, economy) { offline() }.retry()
    assertEquals(listOf(35.0), deposits)
  }

  @Test
  fun `restart refunds an unfinished bet once and keeps consumed fees`(@TempDir folder: File) {
    val deposits = mutableListOf<Double>()
    val economy = provider { method, amount -> if (method == "depositPlayer") deposits.add(amount) }
    val bank = PvpEconomy(folder, economy) { offline() }
    bank.charge(player(), 25.0)
    bank.consume(bank.charge(player(), 3.0))
    PvpEconomy(folder, economy) { offline() }.retry()
    PvpEconomy(folder, economy) { offline() }.retry()
    assertEquals(listOf(25.0), deposits)
  }

  @Test
  fun `uncertain transaction is never replayed automatically`(@TempDir folder: File) {
    val crash = provider { method, _ -> if (method == "depositPlayer") error("simulated crash") }
    val bank = PvpEconomy(folder, crash) { offline() }
    val key = bank.charge(player(), 25.0)
    assertFails { bank.settle(key, 30.0) }
    val deposits = mutableListOf<Double>()
    val recovered =
        PvpEconomy(
            folder,
            provider { method, amount -> if (method == "depositPlayer") deposits.add(amount) },
        ) {
          offline()
        }
    recovered.retry()
    assertTrue(deposits.isEmpty())
    val y = YamlConfiguration().also { it.load(File(folder, "payments.yml")) }
    assertEquals("uncertain", y.getString("credits.$key.state"))
  }

  @Test
  fun `withdrawal failure never charges again at restart`(@TempDir folder: File) {
    val bank =
        PvpEconomy(
            folder,
            provider { method, _ -> if (method == "withdrawPlayer") error("simulated crash") },
        ) {
          offline()
        }
    assertFails { bank.charge(player(), 25.0) }
    val calls = mutableListOf<String>()
    PvpEconomy(folder, provider { method, _ -> calls.add(method) }) { offline() }.retry()
    assertTrue(calls.isEmpty())
    assertFailsWith<IllegalArgumentException> { bank.charge(player(), Double.NaN) }
  }

  @Test
  fun `the same reward event is paid only once after caller retries and restart`(
      @TempDir folder: File
  ) {
    val calls = mutableListOf<Double>()
    val bank = provider { method, amount -> if (method == "depositPlayer") calls.add(amount) }
    val payments = PvpEconomy(folder, bank) { offline() }
    payments.payOnce("fictional-match:win", id, 20.0)
    payments.payOnce("fictional-match:win", id, 20.0)
    PvpEconomy(folder, bank) { offline() }.payOnce("fictional-match:win", id, 20.0)
    assertEquals(listOf(20.0), calls)
    assertFails { payments.payOnce("fictional-match:win", id, 30.0) }
  }

  @Test
  fun `uncertain reward events remain blocked when explicitly submitted again`(
      @TempDir folder: File
  ) {
    val crash =
        PvpEconomy(folder, provider { _, _ -> error("simulated unknown Vault response") }) {
          offline()
        }
    assertFails { crash.payOnce("fictional-kill", id, 5.0) }
    val calls = mutableListOf<Double>()
    val recovered = PvpEconomy(folder, provider { _, amount -> calls.add(amount) }) { offline() }
    recovered.payOnce("fictional-kill", id, 5.0)
    recovered.retry()
    assertTrue(calls.isEmpty())
  }
}
