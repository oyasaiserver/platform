package io.oyasai.oyasaivotifier

import com.vexsoftware.votifier.model.Vote
import io.oyasai.economy.api.OyasaiEconomyApi
import java.io.File
import java.util.UUID
import java.util.logging.Logger
import kotlin.random.Random
import org.bukkit.Bukkit
import org.bukkit.OfflinePlayer
import org.bukkit.configuration.file.YamlConfiguration
import org.bukkit.entity.Player
import org.bukkit.plugin.java.JavaPlugin

internal class VoteRewards(
    private val dataFolder: File,
    private val logger: Logger,
    private val config: VotifierConfig,
    private val nextInt: (Int) -> Int = Random.Default::nextInt,
    private val economy: () -> OyasaiEconomyApi? = {
      Bukkit.getServicesManager().getRegistration(OyasaiEconomyApi::class.java)?.provider
    },
    private val resolveOnlinePlayer: (String) -> Player? = Bukkit::getPlayerExact,
    private val resolveCachedOfflinePlayer: (String) -> OfflinePlayer? =
        Bukkit::getOfflinePlayerIfCached,
    private val resolveOfflinePlayerByUuid: (UUID) -> OfflinePlayer = Bukkit::getOfflinePlayer,
    private val onlinePlayers: () -> Collection<Player> = Bukkit::getOnlinePlayers,
    private val broadcast: (String) -> Unit = { Bukkit.broadcastMessage(it) },
    private val dispatchConsoleCommand: (String) -> Unit = {
      Bukkit.dispatchCommand(Bukkit.getConsoleSender(), it)
    },
) {
  constructor(
      plugin: JavaPlugin,
      config: VotifierConfig,
      nextInt: (Int) -> Int = Random.Default::nextInt,
  ) : this(plugin.dataFolder, plugin.logger, config, nextInt)

  private val stateFile = File(dataFolder, "party-progress.yml")
  private val state = YamlConfiguration.loadConfiguration(stateFile)
  private var progress = state.getInt("votes", 0).coerceAtLeast(0)

  fun deliver(vote: Vote) {
    if (!vote.username.matches(MINECRAFT_USERNAME)) {
      logger.warning("Skipped vote rewards for unsafe username '${vote.username}'")
      return
    }
    val player = resolveVoter(vote)
    deliver(player, vote, config.individual.pick(nextInt), progress)
    val party = config.party
    val partyVote = recordPartyVote(progress, party.votesNeeded)
    progress = partyVote.nextProgress
    save()
    config.messages
        .voteBroadcastChat(vote.username, partyVote.recordedProgress, party.votesNeeded)
        ?.let(broadcast)
    config.messages
        .voteBroadcastActionBar(vote.username, partyVote.recordedProgress, party.votesNeeded)
        ?.let { message -> onlinePlayers().forEach { it.sendActionBar(message) } }
    resolveOnlinePlayer(vote.username)?.let { online ->
      config.messages.voteThankYou()?.let(online::sendMessage)
    }
    if (!partyVote.reached) return
    config.messages.partyStart(party.votesNeeded).forEach(broadcast)
    onlinePlayers().forEach { recipient ->
      deliver(recipient, vote, party.rewards.pick(nextInt), party.votesNeeded)
    }
    party.globalCommands.forEach { command ->
      globalCommand(vote, party.votesNeeded, command)?.let(::runCommand)
    }
  }

  fun progress(): Int = progress

  private fun resolveVoter(vote: Vote): OfflinePlayer? {
    resolveOnlinePlayer(vote.username)?.let {
      return it
    }
    vote.playerUuid()?.let { uuid ->
      val player = resolveOfflinePlayerByUuid(uuid)
      if (player.isOnline || player.hasPlayedBefore() || hasEconomyAccount(uuid)) return player
    }
    return resolveCachedOfflinePlayer(vote.username)?.takeIf {
      it.isOnline || it.hasPlayedBefore() || hasEconomyAccount(it.uniqueId)
    }
  }

  private fun hasEconomyAccount(uuid: UUID): Boolean {
    val provider = economy() ?: return false
    return provider.currencies().any { currency -> provider.balance(currency, uuid) != null }
  }

  private fun deliver(player: OfflinePlayer?, vote: Vote, reward: Reward, votes: Int) {
    if (player != null) {
      if (reward.money > 0) grant(player, "yen", reward.money)
      if (reward.tokens > 0) grant(player, "token", reward.tokens)
    }
    reward.commands.forEach { command ->
      command(player?.name, vote, votes, command)?.let(::runCommand)
    }
  }

  private fun grant(player: OfflinePlayer, currency: String, amount: Long) {
    val provider = economy()
    if (provider == null) {
      logger.warning("経済APIを利用できません: ${player.uniqueId}")
      return
    }
    if (provider.balance(currency, player.uniqueId) == null) return
    provider.deposit(currency, player.uniqueId, amount).completion.thenAccept { result ->
      if (result !is io.oyasai.economy.api.EconomyResult.Success)
          logger.warning("投票報酬を保存できません: ${player.uniqueId} $currency $result")
    }
  }

  private fun command(player: String?, vote: Vote, votes: Int, template: String): String? {
    if ("%player%" in template) {
      if (player == null || !player.matches(MINECRAFT_USERNAME)) {
        logger.warning("Skipped vote command for unsafe username '$player'")
        return null
      }
    }
    return commandTemplate(vote, votes, template, "vote", player)
  }

  private fun runCommand(command: String) {
    if (command.isBlank()) return
    dispatchConsoleCommand(command)
  }

  private fun globalCommand(vote: Vote, votes: Int, template: String): String? {
    if ("%player%" in template) {
      logger.warning("Skipped party command containing %player%; use commands-per-player instead")
      return null
    }
    return commandTemplate(vote, votes, template, "party")
  }

  private fun commandTemplate(
      vote: Vote,
      votes: Int,
      template: String,
      kind: String,
      player: String? = null,
  ): String? {
    if ("%service%" in template && !vote.serviceName.matches(SERVICE)) {
      logger.warning("Skipped $kind command for unsafe service '${vote.serviceName}'")
      return null
    }
    return template
        .removePrefix("/")
        .let { if (player == null) it else it.replace("%player%", player) }
        .replace("%service%", vote.serviceName)
        .replace("%votes%", votes.toString())
  }

  private fun save() {
    state.set("votes", progress)
    state.save(stateFile)
  }

  private companion object {
    val SERVICE = Regex("[A-Za-z0-9_-]{1,64}")
  }
}

internal data class PartyVoteProgress(val recordedProgress: Int, val nextProgress: Int) {
  val reached: Boolean
    get() = nextProgress == 0
}

internal fun recordPartyVote(progress: Int, votesNeeded: Int): PartyVoteProgress {
  require(progress >= 0)
  require(votesNeeded > 0)
  val recorded = progress + 1
  return PartyVoteProgress(recorded, if (recorded >= votesNeeded) 0 else recorded)
}

internal val MINECRAFT_USERNAME = Regex("[A-Za-z0-9_]{1,16}")

private val Vote.username: String
  get() = getUsername() ?: ""
private val Vote.serviceName: String
  get() = getServiceName() ?: ""
