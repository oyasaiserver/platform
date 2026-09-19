package io.oyasai.oyasaivotifier

import com.vexsoftware.votifier.model.Vote
import com.vexsoftware.votifier.model.VotifierEvent
import java.util.concurrent.atomic.AtomicLong
import org.bukkit.Bukkit
import org.bukkit.command.Command
import org.bukkit.command.CommandSender
import org.bukkit.plugin.java.JavaPlugin

class OyasaiVotifierPlugin : JavaPlugin() {
  private lateinit var configModel: VotifierConfig
  private lateinit var rewards: VoteRewards
  private var server: VoteServer? = null
  private val v1Votes = AtomicLong()
  private val v2Votes = AtomicLong()

  override fun onEnable() {
    saveDefaultConfig()
    configModel = VotifierConfig.load(this)
    rewards = VoteRewards(this, configModel)
    val keys = VoteKeys.loadOrCreate(dataFolder.resolve("rsa"))
    server = VoteServer(this, configModel, keys, ::receive).also { it.start() }
    logger.info(
        "Votifier listening on ${configModel.host}:${configModel.port}; v1=${configModel.v1Enabled}"
    )
  }

  override fun onDisable() {
    server?.close()
    server = null
  }

  private fun receive(vote: Vote, protocol: VoteProtocol) {
    when (protocol) {
      VoteProtocol.V1 -> v1Votes.incrementAndGet()
      VoteProtocol.V2 -> v2Votes.incrementAndGet()
    }
    Bukkit.getScheduler().runTask(this, Runnable { publishAndReward(vote) })
  }

  private fun publishAndReward(vote: Vote) {
    Bukkit.getPluginManager().callEvent(VotifierEvent(vote))
    // Do not listen to our own event: this one direct call prevents double rewards.
    rewards.deliver(vote)
  }

  override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<out String>,
  ): Boolean =
      when (command.name.lowercase()) {
        "testvote" -> {
          if (args.isEmpty()) return false
          publishAndReward(
              Vote(
                  args.getOrElse(1) { "testvote" },
                  args[0],
                  "127.0.0.1",
                  System.currentTimeMillis().toString(),
              )
          )
          sender.sendMessage("§aTest vote accepted for ${args[0]}.")
          true
        }
        "votifierstats" -> {
          sender.sendMessage(
              "§aVotifier accepted: v1=${v1Votes.get()}, v2=${v2Votes.get()}, party=${rewards.progress()}/${configModel.party.votesNeeded}"
          )
          true
        }
        else -> false
      }
}
