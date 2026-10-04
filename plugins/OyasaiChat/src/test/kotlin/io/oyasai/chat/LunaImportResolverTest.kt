package io.oyasai.chat

import io.oyasai.chat.paper.japanize.*
import java.lang.reflect.Proxy
import java.util.UUID
import java.util.concurrent.CompletableFuture
import kotlin.test.*
import net.luckperms.api.model.user.UserManager
import org.junit.jupiter.api.Test

class LunaImportResolverTest {
  private fun mockLuckPerms(lookup: (String) -> CompletableFuture<UUID?>): LuckPermsNameLookup {
    val manager =
        Proxy.newProxyInstance(
            UserManager::class.java.classLoader,
            arrayOf(UserManager::class.java),
        ) { _, method, args ->
          check(method.name == "lookupUniqueId")
          lookup(args!![0] as String)
        } as UserManager
    return LuckPermsNameLookup(manager)
  }

  @Test
  fun `uses cache then mocked LuckPerms then Bukkit and reports both values`() {
    val cacheId = UUID.randomUUID()
    val lpId = UUID.randomUUID()
    val bukkitId = UUID.randomUUID()
    val lpCalls = mutableListOf<String>()
    val bukkitCalls = mutableListOf<String>()
    val data =
        LunaImport.parseData(
            mapOf(
                "Cached" to false,
                "LP" to false,
                "Bukkit" to false,
                "MissingOn" to true,
                "MissingOff" to false,
                "Default" to true,
            ),
            mapOf(cacheId.toString() to "Cached"),
            emptyMap(),
        )
    val resolver =
        LunaImportResolver(
            mockLuckPerms { name ->
              lpCalls += name
              CompletableFuture.completedFuture(
                  if (name == "lp" || name == "default") lpId else null
              )
            },
            { name ->
              bukkitCalls += name
              CompletableFuture.completedFuture(if (name == "bukkit") bukkitId else null)
            },
        )
    val result = resolver.resolve(data, true).join()
    assertEquals(mapOf(cacheId to false, lpId to false, bukkitId to false), result.players)
    assertFalse("cached" in lpCalls)
    assertFalse("lp" in bukkitCalls)
    assertEquals(2, result.skippedDefault)
    assertEquals(
        listOf(
            "UUIDCACHE: on=0, off=1",
            "LUCKPERMS: on=1, off=1",
            "BUKKIT_CACHE: on=0, off=1",
            "UNRESOLVED: on=1, off=1",
        ),
        result.report(),
    )
    assertEquals(result, resolver.resolve(data, true).join())
  }

  @Test
  fun `optional or failing LuckPerms falls back to cached Bukkit only`() {
    val id = UUID.randomUUID()
    val data = LunaImport.parseData(mapOf("Player" to true), emptyMap(), emptyMap())
    val lookups =
        listOf(
            null,
            mockLuckPerms { CompletableFuture.failedFuture(IllegalStateException("unavailable")) },
            mockLuckPerms { throw IllegalArgumentException("invalid name") },
        )
    lookups.forEach { lp ->
      val result =
          LunaImportResolver(lp, { CompletableFuture.completedFuture(id) })
              .resolve(data, false)
              .join()
      assertEquals(mapOf(id to true), result.players)
      assertEquals("BUKKIT_CACHE: on=1, off=0", result.report()[2])
      assertEquals(0, result.skippedDefault)
    }
    assertTrue(
        LunaImportResolver(null, { CompletableFuture.completedFuture(id) })
            .resolve(data, true)
            .join()
            .players
            .isEmpty()
    )
  }

  @Test
  fun `bounds pending LuckPerms queries without blocking resolution caller`() {
    val pending = ArrayDeque<CompletableFuture<UUID?>>()
    var active = 0
    var maximum = 0
    val resolver =
        LunaImportResolver(
            mockLuckPerms {
              active++
              maximum = maxOf(maximum, active)
              CompletableFuture<UUID?>().also { pending.addLast(it) }
            },
            { error("LuckPerms resolved every entry") },
            concurrency = 8,
        )
    val data =
        LunaImport.parseData((1..40).associate { "player$it" to false }, emptyMap(), emptyMap())
    val result = resolver.resolve(data, true)
    assertFalse(result.isDone)
    assertEquals(8, pending.size)
    while (pending.isNotEmpty()) {
      val next = pending.removeFirst()
      active--
      next.complete(UUID.randomUUID())
    }
    assertEquals(8, maximum)
    assertEquals(40, result.join().players.size)
  }

  @Test
  fun `empty import completes and conflicting case folded preferences are rejected`() {
    val resolver = LunaImportResolver(null, { error("No names to look up") })
    assertTrue(
        resolver
            .resolve(LunaImport.parseData(emptyMap(), emptyMap(), emptyMap()), true)
            .join()
            .players
            .isEmpty()
    )
    assertFailsWith<IllegalArgumentException> {
      LunaImport.parseData(mapOf("Player" to true, "PLAYER" to false), emptyMap(), emptyMap())
    }
  }
}
