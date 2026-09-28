package io.oyasai.signshop

import java.nio.file.Files
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith
import kotlin.test.assertNull
import kotlin.test.assertTrue
import net.milkbowl.vault.economy.EconomyResponse

class SignShopTest {
  @Test
  fun vaultMoneyResponse() {
    fun result(amount: Double, type: EconomyResponse.ResponseType) =
        moneyResult(EconomyResponse(amount, 0.0, type, ""), 10)

    assertEquals(MoneyResult.FAILED, result(10.0, EconomyResponse.ResponseType.FAILURE))
    assertEquals(MoneyResult.FAILED, result(0.0, EconomyResponse.ResponseType.FAILURE))
    assertEquals(MoneyResult.OK, result(10.0, EconomyResponse.ResponseType.SUCCESS))
    assertEquals(MoneyResult.UNKNOWN, result(9.0, EconomyResponse.ResponseType.SUCCESS))
    assertEquals(MoneyResult.UNKNOWN, result(10.0, EconomyResponse.ResponseType.NOT_IMPLEMENTED))
  }

  @Test
  fun price() {
    assertEquals(1200, priceYen(" ¥1,200 "))
    assertEquals(0, priceYen("￥0"))
    assertEquals(2, priceYen("1.5"))
    listOf("-1", "1狐火", "", "0.1", "1,00", "NaN", "10,000,000,000,001").forEach {
      assertNull(priceYen(it), it)
    }
  }

  private class Journal : TradeJournal {
    var status = ""
    var halt = false

    override fun begin() = 1L

    override fun finish(id: Long, status: String, detail: String, halt: String?) {
      this.status = status
      this.halt = halt != null
    }

    override fun halt(id: Long, reason: String) {
      halt = true
    }
  }

  private class Funds : TradeFunds {
    val balances = mutableMapOf("buyer" to 100L, "owner" to 100L)
    var calls = 0
    var failAt = -1

    override fun withdraw(account: String, yen: Long): MoneyResult = move(account, -yen)

    override fun deposit(account: String, yen: Long): MoneyResult = move(account, yen)

    private fun move(account: String, amount: Long): MoneyResult {
      calls++
      if (calls == failAt) return MoneyResult.FAILED
      balances[account] = balances.getValue(account) + amount
      return MoneyResult.OK
    }
  }

  @Test
  fun compensationAtEachPhase() {
    for (kind in KINDS) {
      val count = if (kind in listOf("iBuy", "iSell")) 1 else 2
      for (failure in 1..count + 1) {
        val journal = Journal()
        val funds = Funds()
        if (failure <= count) funds.failAt = failure
        var stock = 0
        var itemDelta = 0
        val result =
            Trade(journal, funds) {
                  stock++
                  itemDelta++
                  itemDelta--
                  StockResult.RESTORED
                }
                .execute(kind, "buyer", "owner", 10)
        assertEquals(TradeResult.FAILED, result, "$kind / $failure")
        assertEquals(mapOf("buyer" to 100L, "owner" to 100L), funds.balances)
        assertEquals(if (failure <= count) 0 else 1, stock)
        assertEquals(0, itemDelta)
        assertTrue(journal.status in setOf("failed", "compensated"))
      }
    }
  }

  @Test
  fun failedCompensationHaltsOnlyItsShop() {
    val journal = Journal()
    val funds = Funds()
    funds.failAt = 3
    val result = Trade(journal, funds) { StockResult.RESTORED }.execute("Buy", "buyer", "owner", 10)
    assertEquals(TradeResult.HALTED, result)
    assertTrue(journal.halt)
    assertEquals("compensation_failed", journal.status)
    val other = Journal()
    assertEquals(
        TradeResult.SUCCESS,
        Trade(other, Funds()) { StockResult.OK }.execute("Buy", "buyer", "owner", 10),
    )
  }

  @Test
  fun freeShopSkipsEconomy() {
    val funds = Funds()
    val journal = Journal()
    assertEquals(
        TradeResult.SUCCESS,
        Trade(journal, funds) { StockResult.OK }.execute("Buy", "buyer", "owner", 0),
    )
    assertEquals(0, funds.calls)
  }

  @Test
  fun unknownMoneyLeavesPendingAndHalts() {
    val journal = Journal()
    val funds =
        object : TradeFunds {
          override fun withdraw(account: String, yen: Long) = MoneyResult.UNKNOWN

          override fun deposit(account: String, yen: Long) = MoneyResult.OK
        }
    assertEquals(
        TradeResult.HALTED,
        Trade(journal, funds) { StockResult.OK }.execute("Buy", "buyer", "owner", 10),
    )
    assertTrue(journal.halt)
    assertEquals("", journal.status)
  }

  private val sample =
      """
      DataVersion: 8
      extra: retained
      sellers:
        sample/shop:
          owner: 00000000-0000-0000-0000-000000000001
          sign: 1/2/3/world
          shopworld: world
          containables: [2/2/3/world]
          activatables: []
          items: ['YAML:Zm9v']
          unknown: retained
      deferred_sellers:
        later/shop: {owner: example, items: []}
      invalid_sellers: {}
      """
          .trimIndent()

  @Test
  fun importIsAtomicAndOnlyOnce() {
    val dir = Files.createTempDirectory("signshop-test")
    val source = dir.resolve("sellers.yml")
    Files.writeString(source, sample)
    val originalSha =
        java.security.MessageDigest.getInstance("SHA-256")
            .digest(Files.readAllBytes(source))
            .toList()
    val db = dir.resolve("shops.db")
    ShopStore(db, source).use { store ->
      assertEquals(2, store.shops.size)
      assertEquals("retained", store.shops["sellers" to "sample/shop"]?.record?.get("unknown"))
    }
    assertEquals(
        originalSha,
        java.security.MessageDigest.getInstance("SHA-256")
            .digest(Files.readAllBytes(source))
            .toList(),
    )
    Files.writeString(source, "broken: [")
    ShopStore(db, source).use { assertEquals(2, it.shops.size) }
    val bad = Files.createTempDirectory("signshop-bad")
    Files.writeString(bad.resolve("sellers.yml"), "sellers: {a: {}, a: {}}")
    assertFailsWith<Exception> {
      ShopStore(bad.resolve("shops.db"), bad.resolve("sellers.yml")).close()
    }
    val malformed = Files.createTempDirectory("signshop-malformed")
    Files.writeString(malformed.resolve("sellers.yml"), "sellers: [broken]")
    assertFailsWith<Exception> {
      ShopStore(malformed.resolve("shops.db"), malformed.resolve("sellers.yml")).close()
    }
    assertFailsWith<Exception> { ShopYaml.read("a: &item value\nb: *item\n") }
    assertFailsWith<Exception> { ShopYaml.read("a: !!str value\n") }
  }

  @Test
  fun productionCopyIfProvided() {
    val path = System.getenv("SIGN_SHOP_REAL_YAML") ?: return
    val source = java.nio.file.Path.of(path)
    val dir = Files.createTempDirectory(source.parent, "roundtrip-")
    try {
      ShopStore(dir.resolve("shops.db"), source).use { store ->
        val root = ShopYaml.read(Files.readString(source))
        for (section in SECTIONS) {
          val expected = root[section] as Map<*, *>
          val actual = store.shops.values.filter { it.section == section }
          assertEquals(expected.keys, actual.map { it.key }.toSet())
          actual.forEach { assertEquals(expected[it.key], it.record) }
        }
      }
      val python = System.getenv("SIGN_SHOP_EXPORT_PYTHON") ?: return
      val tool = java.nio.file.Path.of("tools/export_sqlite_to_sellers.py").toAbsolutePath()
      val process =
          ProcessBuilder(
                  python,
                  tool.toString(),
                  "--input",
                  dir.resolve("shops.db").toString(),
                  "--output",
                  dir.resolve("export.yml").toString(),
              )
              .directory(java.nio.file.Path.of(".").toFile())
              .redirectErrorStream(true)
              .start()
      val output = process.inputStream.bufferedReader().readText()
      assertEquals(0, process.waitFor(), output)
      assertEquals(
          ShopYaml.read(Files.readString(source)),
          ShopYaml.read(Files.readString(dir.resolve("export.yml"))),
      )
    } finally {
      Files.list(dir).use { files -> files.forEach { Files.deleteIfExists(it) } }
      Files.deleteIfExists(dir)
    }
  }
}
