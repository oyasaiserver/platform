package io.oyasai.oyasaivotifier

import com.vexsoftware.votifier.model.Vote
import com.vexsoftware.votifier.model.VotifierEvent
import java.io.File
import java.util.concurrent.atomic.AtomicLong
import java.util.logging.Level
import org.bukkit.Bukkit
import org.bukkit.command.Command
import org.bukkit.command.CommandSender
import org.bukkit.plugin.java.JavaPlugin

class OyasaiVotifierPlugin : JavaPlugin() {
  private var configModel: VotifierConfig? = null
  private var rewards: VoteRewards? = null
  private var server: VoteServer? = null
  private var unavailableReason: String? = null
  private val v1Votes = AtomicLong()
  private val v2Votes = AtomicLong()

  override fun onEnable() {
    try {
      migrateLegacyData(dataFolder, logger::info)
      saveDefaultConfig()
      val loadedConfig = VotifierConfig.load(this)
      val keys =
          VoteKeys.loadOrCreate(dataFolder.resolve("rsa"), System::getenv) { source ->
            logger.info("OyasaiVotifier RSA keys source: $source")
          }
      configModel = loadedConfig
      rewards = VoteRewards(this, loadedConfig)
      val startedServer = VoteServer(logger, loadedConfig, keys, ::receive)
      server = startedServer
      startedServer.start()
      logger.info(
          "OyasaiVotifier listening on ${loadedConfig.host}:${loadedConfig.port}; v1=${loadedConfig.v1Enabled}"
      )
    } catch (error: Exception) {
      server?.close()
      server = null
      configModel = null
      rewards = null
      unavailableReason = error.message ?: error.javaClass.simpleName
      logger.severe(
          """
          ============================================================
          OyasaiVotifier is enabled, but is NOT accepting votes.
          The TCP listener and reward processing are disabled.
          Reason: $unavailableReason
          Fix the configuration or RSA keys, then restart the server.
          ============================================================
          """
              .trimIndent()
      )
      logger.log(Level.SEVERE, "OyasaiVotifier startup failed", error)
    }
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
    rewards?.deliver(vote)
  }

  private fun disabledReason(): String? =
      unavailableReason
          ?: if (server == null || configModel == null || rewards == null)
              "Vote service is unavailable"
          else null

  override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<out String>,
  ): Boolean =
      when (command.name.lowercase()) {
        "testvote" -> {
          disabledReason()?.let { reason ->
            sender.sendMessage("§cVotifier is not accepting votes: $reason")
            return true
          }
          if (args.isEmpty()) return false
          val protocol =
              when (args.getOrElse(2) { "v2" }.lowercase()) {
                "v1" -> VoteProtocol.V1
                "v2" -> VoteProtocol.V2
                else -> return false
              }
          receive(
              Vote(
                  args.getOrElse(1) { "testvote" },
                  args[0],
                  "127.0.0.1",
                  System.currentTimeMillis().toString(),
              ),
              protocol,
          )
          sender.sendMessage("§aTest $protocol vote accepted for ${args[0]}.")
          true
        }
        "votifierstats" -> {
          disabledReason()?.let { reason ->
            sender.sendMessage("§cVotifier is not accepting votes: $reason")
            return true
          }
          val activeConfig = checkNotNull(configModel)
          val activeRewards = checkNotNull(rewards)
          sender.sendMessage(
              "§aOyasaiVotifier accepted: v1=${v1Votes.get()}, v2=${v2Votes.get()}, party=${activeRewards.progress()}/${activeConfig.party.votesNeeded}"
          )
          true
        }
        else -> false
      }
}

internal fun migrateLegacyData(dataFolder: File, log: (String) -> Unit = {}) {
  val legacyDataFolder = dataFolder.parentFile?.resolve("Votifier") ?: return
  val legacyProgress = legacyDataFolder.resolve("party-progress.yml")
  val progress = dataFolder.resolve("party-progress.yml")
  if (!progress.exists() && legacyProgress.isFile) {
    dataFolder.mkdirs()
    legacyProgress.copyTo(progress)
    log("Migrated legacy Votifier party progress to OyasaiVotifier data folder")
  }
}
