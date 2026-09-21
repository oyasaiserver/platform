package io.oyasai.oyasaivotifier

import kotlin.random.Random
import org.bukkit.configuration.file.FileConfiguration
import org.bukkit.plugin.java.JavaPlugin

data class VotifierConfig(
    val host: String,
    val port: Int,
    val timeoutSeconds: Int,
    val v1Enabled: Boolean,
    val tokens: Map<String, String>,
    val individual: RewardTable,
    val party: PartyReward,
) {
  companion object {
    fun load(plugin: JavaPlugin): VotifierConfig {
      plugin.reloadConfig()
      return load(plugin.config)
    }

    internal fun load(config: FileConfiguration): VotifierConfig {
      require(
          config.contains("rewards.individual", true) && config.contains("rewards.party", true)
      ) {
        "This config.yml uses the legacy NuVotifier schema; configure rewards.individual and rewards.party before enabling OyasaiVotifier"
      }
      return VotifierConfig(
          host = config.getString("listener.host", "0.0.0.0")!!,
          port = config.getInt("listener.port", 8192).also { require(it in 1..65535) },
          timeoutSeconds = config.getInt("listener.socket-timeout-seconds", 10).coerceIn(1, 60),
          v1Enabled = config.getBoolean("protocol-v1.enabled", true),
          tokens =
              config
                  .getConfigurationSection("tokens")
                  ?.getKeys(false)
                  ?.associateWith { key -> config.getString("tokens.$key")!! }
                  ?.also { tokens ->
                    require(
                        tokens.isNotEmpty() && tokens.values.none { it.startsWith("REPLACE_WITH_") }
                    ) {
                      "Set the real NuVotifier v2 token(s) before enabling OyasaiVotifier"
                    }
                  } ?: error("Configure at least one NuVotifier v2 token"),
          individual = config.rewardTable("rewards.individual"),
          party =
              PartyReward(
                  votesNeeded =
                      config.getInt("rewards.party.votes-needed").also { require(it > 0) },
                  rewards = config.rewardTable("rewards.party.rewards"),
                  globalCommands = config.getStringList("rewards.party.commands"),
              ),
      )
    }

    private fun FileConfiguration.rewardTable(path: String): RewardTable =
        RewardTable(
            getMapList(path).mapIndexed { index, values ->
              fun number(name: String): Number =
                  values[name] as? Number ?: error("$path[$index].$name must be a number")
              WeightedReward(
                  weight = number("weight").toInt().also { require(it > 0) },
                  reward =
                      Reward(
                          money = number("money").toDouble().also { require(it >= 0) },
                          tokens = number("tokens").toLong().also { require(it >= 0) },
                          commands =
                              (values["commands"] as? List<*>)?.map { command ->
                                command as? String
                                    ?: error("$path[$index].commands must contain only strings")
                              } ?: emptyList(),
                      ),
              )
            }
        )
  }
}

data class Reward(val money: Double, val tokens: Long, val commands: List<String>)

data class WeightedReward(val weight: Int, val reward: Reward)

data class RewardTable(val entries: List<WeightedReward>) {
  private val totalWeight =
      entries.sumOf { it.weight.toLong() }.also { require(it in 1..Int.MAX_VALUE) }.toInt()

  init {
    require(entries.isNotEmpty()) { "Configure at least one weighted reward" }
    require(entries.all { it.weight > 0 }) { "Reward weights must be positive" }
  }

  fun pick(nextInt: (Int) -> Int = Random.Default::nextInt): Reward {
    val ticket = nextInt(totalWeight)
    require(ticket in 0..<totalWeight) { "Random reward ticket is out of range" }
    var ceiling = 0
    for (entry in entries) {
      ceiling += entry.weight
      if (ticket < ceiling) return entry.reward
    }
    error("Reward ticket could not be selected")
  }
}

data class PartyReward(
    val votesNeeded: Int,
    val rewards: RewardTable,
    val globalCommands: List<String>,
)
