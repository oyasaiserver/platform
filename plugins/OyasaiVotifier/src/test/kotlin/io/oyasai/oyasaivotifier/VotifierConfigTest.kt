package io.oyasai.oyasaivotifier

import java.io.InputStreamReader
import java.nio.file.Files
import java.security.KeyPairGenerator
import java.util.Base64
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith
import kotlin.test.assertFalse
import kotlin.test.assertTrue
import org.bukkit.configuration.file.YamlConfiguration

class VotifierConfigTest {
  @Test
  fun `legacy schema is rejected even when packaged defaults contain rewards`() {
    val config =
        YamlConfiguration().apply {
          loadFromString(
              """
              host: 0.0.0.0
              port: 8192
              tokens: {}
              """
                  .trimIndent()
          )
          setDefaults(
              YamlConfiguration.loadConfiguration(
                  InputStreamReader(checkNotNull(javaClass.getResourceAsStream("/config.yml")))
              )
          )
        }

    assertTrue(config.isConfigurationSection("rewards.party"))
    assertFalse(config.contains("rewards.party", true))
    val error = assertFailsWith<IllegalArgumentException> { VotifierConfig.load(config) }
    assertTrue(error.message!!.contains("legacy NuVotifier schema"))
  }

  @Test
  fun `weighted rewards select each configured range`() {
    val rewards =
        RewardTable(
            listOf(
                WeightedReward(50, Reward(30_000.0, 15, emptyList())),
                WeightedReward(40, Reward(20_000.0, 10, emptyList())),
                WeightedReward(10, Reward(50_000.0, 20, emptyList())),
            )
        )

    assertEquals(30_000.0, rewards.pick { 49 }.money)
    assertEquals(20_000.0, rewards.pick { 50 }.money)
    assertEquals(20_000.0, rewards.pick { 89 }.money)
    assertEquals(50_000.0, rewards.pick { 90 }.money)
  }

  @Test
  fun `environment token overrides the config placeholder`() {
    val parsed =
        VotifierConfig.load(packagedConfig()) { key ->
          if (key == "VOTIFIER_TOKEN") "secret" else null
        }

    assertEquals("secret", parsed.tokens.getValue("default"))
  }

  @Test
  fun `packaged config rejects its token placeholder without an environment token`() {
    val error =
        assertFailsWith<IllegalArgumentException> { VotifierConfig.load(packagedConfig()) { null } }
    assertTrue(error.message!!.contains("Set the real NuVotifier v2 token"))

    val config = packagedConfig().apply { set("tokens.default", "secret") }

    val parsed = VotifierConfig.load(config)

    assertEquals(60, parsed.party.votesNeeded)
    assertEquals(30_000.0, parsed.individual.pick { 0 }.money)
    assertEquals(20_000.0, parsed.individual.pick { 50 }.money)
    assertEquals(50_000.0, parsed.individual.pick { 90 }.money)
    assertEquals(
        "§8(§6zVoteParty§8) §cMR0203§6さんが投票しました！§7(§b6§7/§a60§7)",
        parsed.messages.voteBroadcastChat("MR0203", 6, 60),
    )
    assertEquals(
        "§6累計投票数が§c60§6に達しました！",
        parsed.messages.partyStart(60).first(),
    )
  }

  @Test
  fun `RSA keys load from environment without writing files`() {
    val pair = KeyPairGenerator.getInstance("RSA").apply { initialize(2048) }.generateKeyPair()
    val directory = Files.createTempDirectory("oyasai-votifier").toFile()
    val keys =
        VoteKeys.loadOrCreate(
            directory,
            environment = { key ->
              when (key) {
                "VOTIFIER_RSA_PUBLIC_KEY" -> Base64.getEncoder().encodeToString(pair.public.encoded)
                "VOTIFIER_RSA_PRIVATE_KEY" ->
                    Base64.getEncoder().encodeToString(pair.private.encoded)
                else -> null
              }
            },
        )

    assertTrue(keys.public.encoded.contentEquals(pair.public.encoded))
    assertTrue(keys.private.encoded.contentEquals(pair.private.encoded))
    assertFalse(directory.resolve("public.key").exists())
    assertFalse(directory.resolve("private.key").exists())
    directory.deleteRecursively()
  }

  @Test
  fun `RSA environment keys require both values`() {
    val error =
        assertFailsWith<IllegalArgumentException> {
          VoteKeys.loadOrCreate(
              Files.createTempDirectory("oyasai-votifier").toFile(),
              environment = { key -> if (key == "VOTIFIER_RSA_PUBLIC_KEY") "public" else null },
          )
        }

    assertTrue(error.message!!.contains("VOTIFIER_RSA_PUBLIC_KEY"))
  }

  private fun packagedConfig(): YamlConfiguration =
      YamlConfiguration.loadConfiguration(
          InputStreamReader(checkNotNull(javaClass.getResourceAsStream("/config.yml")))
      )
}
