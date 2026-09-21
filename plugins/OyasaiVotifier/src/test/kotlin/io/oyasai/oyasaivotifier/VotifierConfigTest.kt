package io.oyasai.oyasaivotifier

import java.io.InputStreamReader
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
  fun `packaged config rejects its token placeholder and parses after setting a real token`() {
    val error = assertFailsWith<IllegalArgumentException> { VotifierConfig.load(packagedConfig()) }
    assertTrue(error.message!!.contains("Set the real NuVotifier v2 token"))

    val config = packagedConfig().apply { set("tokens.default", "secret") }

    val parsed = VotifierConfig.load(config)

    assertEquals(60, parsed.party.votesNeeded)
    assertEquals(30_000.0, parsed.individual.pick { 0 }.money)
    assertEquals(20_000.0, parsed.individual.pick { 50 }.money)
    assertEquals(50_000.0, parsed.individual.pick { 90 }.money)
  }

  private fun packagedConfig(): YamlConfiguration =
      YamlConfiguration.loadConfiguration(
          InputStreamReader(checkNotNull(javaClass.getResourceAsStream("/config.yml")))
      )
}
