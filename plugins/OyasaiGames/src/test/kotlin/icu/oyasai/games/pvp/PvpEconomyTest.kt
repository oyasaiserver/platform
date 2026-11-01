package icu.oyasai.games.pvp

import io.oyasai.economy.api.EconomyOperation
import io.oyasai.economy.api.EconomyResult
import io.oyasai.economy.api.OyasaiEconomyApi
import java.io.File
import java.lang.reflect.Proxy
import java.util.UUID
import java.util.concurrent.CompletableFuture
import kotlin.test.*
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
      if (method == "deposit") {
        calls++
        assertFails { bank.pay(id, 2L) }
        assertFails { bank.payOnce("nested-event", id, 2L) }
      }
    }
    bank = PvpEconomy(folder, economy)
    bank.pay(id, 5L)
    bank.retry()
    assertEquals(1, calls)
    val y = YamlConfiguration().also { it.load(File(folder, "payments.yml")) }
    assertEquals(1, y.getConfigurationSection("credits")!!.getKeys(false).size)
  }

  @Test
  fun `stable reward key prevents double payment across result replay`(@TempDir folder: File) {
    val deposits = mutableListOf<Long>()
    val economy = provider { method, amount -> if (method == "deposit") deposits.add(amount) }
    val key = UUID.randomUUID().toString()
    val bank = PvpEconomy(folder, economy)
    bank.pay(id, 12L, key)
    PvpEconomy(folder, economy).pay(id, 12L, key)
    bank.retry()
    assertEquals(listOf(12L), deposits)
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

  private fun provider(action: (String, Long) -> Unit): OyasaiEconomyApi =
      Proxy.newProxyInstance(
          OyasaiEconomyApi::class.java.classLoader,
          arrayOf(OyasaiEconomyApi::class.java),
      ) { _, method, args ->
        if (method.name in setOf("withdraw", "deposit")) {
          action(method.name, args!![2] as Long)
          EconomyOperation(
              true,
              CompletableFuture.completedFuture(EconomyResult.Success(1000, args[2] as Long)),
          )
        } else null
      } as OyasaiEconomyApi

  @Test
  fun `settlement and refunds are idempotent after process restart`(@TempDir folder: File) {
    val deposits = mutableListOf<Long>()
    val economy = provider { method, amount -> if (method == "deposit") deposits.add(amount) }
    val bank = PvpEconomy(folder, economy)
    val key = bank.charge(player(), 25L)
    bank.settle(key, 35L)
    bank.refund(key)
    bank.settle(key, 35L)
    PvpEconomy(folder, economy).retry()
    assertEquals(listOf(35L), deposits)
  }

  @Test
  fun `restart refunds an unfinished bet once and keeps consumed fees`(@TempDir folder: File) {
    val deposits = mutableListOf<Long>()
    val economy = provider { method, amount -> if (method == "deposit") deposits.add(amount) }
    val bank = PvpEconomy(folder, economy)
    bank.charge(player(), 25L)
    bank.consume(bank.charge(player(), 3L))
    PvpEconomy(folder, economy).retry()
    PvpEconomy(folder, economy).retry()
    assertEquals(listOf(25L), deposits)
  }

  @Test
  fun `uncertain transaction is never replayed automatically`(@TempDir folder: File) {
    val crash = provider { method, _ -> if (method == "deposit") error("simulated crash") }
    val bank = PvpEconomy(folder, crash)
    val key = bank.charge(player(), 25L)
    assertFails { bank.settle(key, 30L) }
    val deposits = mutableListOf<Long>()
    val recovered =
        PvpEconomy(
            folder,
            provider { method, amount -> if (method == "deposit") deposits.add(amount) },
        )
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
            provider { method, _ -> if (method == "withdraw") error("simulated crash") },
        )
    assertFails { bank.charge(player(), 25L) }
    val calls = mutableListOf<String>()
    PvpEconomy(folder, provider { method, _ -> calls.add(method) }).retry()
    assertTrue(calls.isEmpty())
    assertFailsWith<IllegalArgumentException> { bank.charge(player(), -1) }
  }

  @Test
  fun `the same reward event is paid only once after caller retries and restart`(
      @TempDir folder: File
  ) {
    val calls = mutableListOf<Long>()
    val bank = provider { method, amount -> if (method == "deposit") calls.add(amount) }
    val payments = PvpEconomy(folder, bank)
    payments.payOnce("fictional-match:win", id, 20L)
    payments.payOnce("fictional-match:win", id, 20L)
    PvpEconomy(folder, bank).payOnce("fictional-match:win", id, 20L)
    assertEquals(listOf(20L), calls)
    assertFails { payments.payOnce("fictional-match:win", id, 30L) }
  }

  @Test
  fun `uncertain reward events remain blocked when explicitly submitted again`(
      @TempDir folder: File
  ) {
    val crash = PvpEconomy(folder, provider { _, _ -> error("simulated unknown Vault response") })
    assertFails { crash.payOnce("fictional-kill", id, 5L) }
    val calls = mutableListOf<Long>()
    val recovered = PvpEconomy(folder, provider { _, amount -> calls.add(amount) })
    recovered.payOnce("fictional-kill", id, 5L)
    recovered.retry()
    assertTrue(calls.isEmpty())
  }
}
