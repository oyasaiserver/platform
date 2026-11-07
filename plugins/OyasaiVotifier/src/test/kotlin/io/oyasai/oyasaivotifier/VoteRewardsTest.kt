package io.oyasai.oyasaivotifier

import com.google.gson.JsonParser
import com.vexsoftware.votifier.model.Vote
import io.oyasai.economy.api.EconomyOperation
import io.oyasai.economy.api.EconomyResult
import io.oyasai.economy.api.OyasaiEconomyApi
import java.lang.reflect.Proxy
import java.nio.file.Files
import java.util.UUID
import java.util.concurrent.CompletableFuture
import java.util.logging.Handler
import java.util.logging.Level
import java.util.logging.LogRecord
import java.util.logging.Logger
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertTrue
import org.bukkit.OfflinePlayer

class VoteRewardsTest {
  @Test
  fun `unknown voter skips individual economy deposit without warning while executing global commands and advancing party progress`() {
    val folder = Files.createTempDirectory("votifier-rewards-").toFile()
    try {
      val economy = FakeEconomy()
      val commands = mutableListOf<String>()
      val broadcasts = mutableListOf<String>()
      val warnings = mutableListOf<String>()
      val logger = testLogger(warnings)
      val rewards =
          VoteRewards(
              dataFolder = folder,
              logger = logger,
              config = testConfig(),
              nextInt = { 0 },
              economy = { economy },
              resolveOnlinePlayer = { null },
              resolveCachedOfflinePlayer = { null },
              resolveOfflinePlayerByUuid = { uuid ->
                fakeOfflinePlayer(uuid, null, played = false)
              },
              onlinePlayers = { emptyList() },
              broadcast = broadcasts::add,
              dispatchConsoleCommand = commands::add,
          )

      rewards.deliver(Vote("MinecraftJP", "sa", "127.0.0.1", "1"))

      assertTrue(economy.deposits.isEmpty())
      assertEquals(listOf("oyasaieconomy:token giveall 3"), commands)
      assertEquals(1, rewards.progress())
      assertEquals(1, broadcasts.size)
      assertTrue(warnings.isEmpty())
    } finally {
      folder.deleteRecursively()
    }
  }

  @Test
  fun `known voter with only yen account receives yen and skips missing token account without warning`() {
    val folder = Files.createTempDirectory("votifier-rewards-partial-").toFile()
    try {
      val uuid = UUID.randomUUID()
      val economy = FakeEconomy(balances = mutableMapOf(("yen" to uuid) to 10_000L))
      val commands = mutableListOf<String>()
      val warnings = mutableListOf<String>()
      val logger = testLogger(warnings)
      val cachedPlayer = fakeOfflinePlayer(uuid, "KnownVoter", played = true)
      val rewards =
          VoteRewards(
              dataFolder = folder,
              logger = logger,
              config =
                  testConfig(
                      individualCommands =
                          listOf("oyasaieconomy:token giveall 3", "say thank you %player%")
                  ),
              nextInt = { 0 },
              economy = { economy },
              resolveOnlinePlayer = { null },
              resolveCachedOfflinePlayer = { name -> cachedPlayer.takeIf { name == "KnownVoter" } },
              resolveOfflinePlayerByUuid = { error("UUID lookup should not be used for v1 vote") },
              onlinePlayers = { emptyList() },
              broadcast = {},
              dispatchConsoleCommand = commands::add,
          )

      rewards.deliver(Vote("MinecraftJP", "KnownVoter", "127.0.0.1", "1"))

      assertEquals(listOf(Triple("yen", uuid, 30_000L)), economy.deposits)
      assertEquals(
          listOf("oyasaieconomy:token giveall 3", "say thank you KnownVoter"),
          commands,
      )
      assertTrue(warnings.isEmpty())
    } finally {
      folder.deleteRecursively()
    }
  }

  @Test
  fun `v2 vote with unplayed uuid does not grant economy rewards when account does not exist`() {
    val folder = Files.createTempDirectory("votifier-rewards-v2-").toFile()
    try {
      val uuid = UUID.randomUUID()
      val economy = FakeEconomy()
      val warnings = mutableListOf<String>()
      val logger = testLogger(warnings)
      val rewards =
          VoteRewards(
              dataFolder = folder,
              logger = logger,
              config = testConfig(),
              nextInt = { 0 },
              economy = { economy },
              resolveOnlinePlayer = { null },
              resolveCachedOfflinePlayer = { null },
              resolveOfflinePlayerByUuid = { id ->
                fakeOfflinePlayer(id, "GhostUser", played = false)
              },
              onlinePlayers = { emptyList() },
              broadcast = {},
              dispatchConsoleCommand = {},
          )
      val vote =
          Vote(
              JsonParser.parseString(
                      """{"serviceName":"MinePortal","username":"GhostUser","address":"127.0.0.1","timestamp":1,"uuid":"$uuid"}"""
                  )
                  .asJsonObject
          )

      rewards.deliver(vote)

      assertTrue(economy.deposits.isEmpty())
      assertTrue(warnings.isEmpty())
    } finally {
      folder.deleteRecursively()
    }
  }

  private fun testConfig(
      individualCommands: List<String> = listOf("oyasaieconomy:token giveall 3")
  ): VotifierConfig =
      VotifierConfig(
          host = "127.0.0.1",
          port = 0,
          timeoutSeconds = 1,
          v1Enabled = true,
          tokens = mapOf("default" to "secret"),
          individual =
              RewardTable(listOf(WeightedReward(1, Reward(30_000L, 15L, individualCommands)))),
          party =
              PartyReward(
                  votesNeeded = 60,
                  rewards =
                      RewardTable(listOf(WeightedReward(1, Reward(10_000L, 20L, emptyList())))),
                  globalCommands = emptyList(),
              ),
          messages =
              VoteMessages(
                  prefix = "&8(&6zVoteParty&8) ",
                  voteBroadcastChat =
                      "&c%player%&6さんが投票しました！&7(&b%zvoteparty_votes_recorded%&7/&a%zvoteparty_votes_required_total%&7)",
                  voteBroadcastActionBar = "",
                  voteThankYou = "&7投票ありがとうございます！",
                  partyStart = emptyList(),
              ),
      )

  private fun testLogger(warnings: MutableList<String>): Logger =
      Logger.getAnonymousLogger().apply {
        useParentHandlers = false
        level = Level.ALL
        addHandler(
            object : Handler() {
              override fun publish(record: LogRecord) {
                if (record.level.intValue() >= Level.WARNING.intValue()) {
                  warnings += record.message
                }
              }

              override fun flush() = Unit

              override fun close() = Unit
            }
        )
      }

  private fun fakeOfflinePlayer(uuid: UUID, name: String?, played: Boolean): OfflinePlayer =
      Proxy.newProxyInstance(
          OfflinePlayer::class.java.classLoader,
          arrayOf(OfflinePlayer::class.java),
      ) { _, method, _ ->
        when (method.name) {
          "getUniqueId" -> uuid
          "getName" -> name
          "isOnline" -> false
          "hasPlayedBefore" -> played
          "equals" -> false
          "hashCode" -> uuid.hashCode()
          "toString" -> "FakeOfflinePlayer($uuid, $name)"
          else -> null
        }
      } as OfflinePlayer

  private class FakeEconomy(
      private val balances: MutableMap<Pair<String, UUID>, Long> = mutableMapOf()
  ) : OyasaiEconomyApi {
    val deposits = mutableListOf<Triple<String, UUID, Long>>()

    override fun currencies(): Set<String> = setOf("yen", "token")

    override fun balance(currency: String, uuid: UUID): Long? = balances[currency to uuid]

    override fun format(currency: String, amount: Long): String = "$amount $currency"

    override fun deposit(
        currency: String,
        uuid: UUID,
        amount: Long,
        notify: Boolean,
    ): EconomyOperation {
      val current =
          balances[currency to uuid]
              ?: return EconomyOperation(
                  false,
                  CompletableFuture.completedFuture(EconomyResult.Failed("口座が見つかりません")),
              )
      val next = current + amount
      balances[currency to uuid] = next
      deposits += Triple(currency, uuid, amount)
      return EconomyOperation(
          true,
          CompletableFuture.completedFuture(EconomyResult.Success(next, amount)),
      )
    }

    override fun withdraw(
        currency: String,
        uuid: UUID,
        amount: Long,
        notify: Boolean,
    ): EconomyOperation = throw UnsupportedOperationException()

    override fun set(
        currency: String,
        uuid: UUID,
        amount: Long,
        notify: Boolean,
    ): EconomyOperation = throw UnsupportedOperationException()

    override fun reset(currency: String, uuid: UUID, notify: Boolean): EconomyOperation =
        throw UnsupportedOperationException()

    override fun transfer(
        currency: String,
        from: UUID,
        to: UUID,
        amount: Long,
        notify: Boolean,
    ): EconomyOperation = throw UnsupportedOperationException()
  }
}
