package com.github.sahyuya.oyasaiMusic.economy

import io.oyasai.economy.api.*
import java.lang.reflect.Proxy
import java.util.UUID
import java.util.concurrent.CompletableFuture
import kotlin.test.*

class EconomyServiceTest {
  @Test
  fun `points wait for commit and keep the exact Long amount`() {
    val saved = CompletableFuture<EconomyResult>()
    val calls = mutableListOf<List<Any?>>()
    val api =
        Proxy.newProxyInstance(
            OyasaiEconomyApi::class.java.classLoader,
            arrayOf(OyasaiEconomyApi::class.java),
        ) { _, method, args ->
          assertEquals("deposit", method.name)
          calls += args.toList()
          EconomyOperation(true, saved)
        } as OyasaiEconomyApi
    val uuid = UUID.randomUUID()
    val amount = 9_007_199_254_740_993L
    val result = completePayout(api, uuid, "token", amount, false)
    assertFalse(result.isDone)
    assertEquals(listOf("token", uuid, amount, false), calls.single())
    saved.complete(EconomyResult.Success(amount, amount))
    assertEquals(PayoutResult.Success, result.join())
  }

  @Test
  fun `failed persistence is not reported as a completed reward`() {
    val api =
        Proxy.newProxyInstance(
            OyasaiEconomyApi::class.java.classLoader,
            arrayOf(OyasaiEconomyApi::class.java),
        ) { _, method, _ ->
          assertEquals("withdraw", method.name)
          EconomyOperation(true, CompletableFuture.completedFuture(EconomyResult.Failed("保存失敗")))
        } as OyasaiEconomyApi
    assertIs<PayoutResult.Failed>(completePayout(api, UUID.randomUUID(), "token", 10, true).join())
  }

  @Test
  fun `invalid rewards fail and zero needs no provider`() {
    assertIs<PayoutResult.Failed>(
        completePayout(null, UUID.randomUUID(), "token", -1, false).join()
    )
    assertEquals(
        PayoutResult.Success,
        completePayout(null, UUID.randomUUID(), "token", 0, false).join(),
    )
    assertIs<PayoutResult.Unavailable>(
        completePayout(null, UUID.randomUUID(), "token", 1, false).join()
    )
  }
}
