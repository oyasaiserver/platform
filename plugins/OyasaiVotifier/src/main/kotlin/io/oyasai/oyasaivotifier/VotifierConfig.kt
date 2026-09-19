package io.oyasai.oyasaivotifier

import org.bukkit.configuration.file.FileConfiguration
import org.bukkit.plugin.java.JavaPlugin

data class VotifierConfig(
    val host: String,
    val port: Int,
    val timeoutSeconds: Int,
    val v1Enabled: Boolean,
    val tokens: Map<String, String>,
    val individual: Reward,
    val party: PartyReward,
) {
  companion object {
    fun load(plugin: JavaPlugin): VotifierConfig {
      plugin.reloadConfig()
      return plugin.config.let { config ->
        require(
            config.isConfigurationSection("rewards.individual") &&
                config.isConfigurationSection("rewards.party")
        ) {
          "This config.yml uses the legacy NuVotifier schema; configure rewards.individual and rewards.party before enabling OyasaiVotifier"
        }
        VotifierConfig(
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
                          tokens.isNotEmpty() &&
                              tokens.values.none { it.startsWith("REPLACE_WITH_") }
                      ) {
                        "Set the real NuVotifier v2 token(s) before enabling OyasaiVotifier"
                      }
                    } ?: error("Configure at least one NuVotifier v2 token"),
            individual = config.reward("rewards.individual", "commands"),
            party =
                PartyReward(
                    votesNeeded = config.getInt("rewards.party.votes-needed", 0).coerceAtLeast(0),
                    reward = config.reward("rewards.party", "commands-per-player"),
                    globalCommands = config.getStringList("rewards.party.commands"),
                ),
        )
      }
    }

    private fun FileConfiguration.reward(path: String, commandsPath: String) =
        Reward(
            money = getDouble("$path.money", 0.0).also { require(it >= 0) },
            tokens = getLong("$path.tokens", 0L).also { require(it >= 0) },
            commands = getStringList("$path.$commandsPath"),
        )
  }
}

data class Reward(val money: Double, val tokens: Long, val commands: List<String>)

data class PartyReward(val votesNeeded: Int, val reward: Reward, val globalCommands: List<String>)
