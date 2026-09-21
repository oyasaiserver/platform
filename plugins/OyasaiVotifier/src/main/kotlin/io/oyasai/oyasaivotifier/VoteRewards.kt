package io.oyasai.oyasaivotifier

import com.vexsoftware.votifier.model.Vote
import io.oyasai.oyasaitoken.api.Delivery
import io.oyasai.oyasaitoken.api.OyasaiTokenService
import io.oyasai.oyasaitoken.api.TokenRequest
import io.oyasai.oyasaitoken.api.TokenResult
import java.io.File
import kotlin.random.Random
import net.milkbowl.vault.economy.Economy
import org.bukkit.Bukkit
import org.bukkit.OfflinePlayer
import org.bukkit.configuration.file.YamlConfiguration
import org.bukkit.plugin.java.JavaPlugin

internal class VoteRewards(
    private val plugin: JavaPlugin,
    private val config: VotifierConfig,
    private val nextInt: (Int) -> Int = Random.Default::nextInt,
) {
  private val stateFile = File(plugin.dataFolder, "party-progress.yml")
  private val state = YamlConfiguration.loadConfiguration(stateFile)
  private var progress = state.getInt("votes", 0).coerceAtLeast(0)

  fun deliver(vote: Vote) {
    if (!vote.username.matches(MINECRAFT_USERNAME)) {
      plugin.logger.warning("Skipped vote rewards for unsafe username '${vote.username}'")
      return
    }
    val player =
        vote.playerUuid()?.let(Bukkit::getOfflinePlayer) ?: Bukkit.getOfflinePlayer(vote.username)
    deliver(player, vote, config.individual.pick(nextInt), progress)
    val party = config.party
    val partyVote = recordPartyVote(progress, party.votesNeeded)
    progress = partyVote.nextProgress
    save()
    config.messages
        .voteBroadcastChat(vote.username, partyVote.recordedProgress, party.votesNeeded)
        ?.let(Bukkit::broadcastMessage)
    config.messages
        .voteBroadcastActionBar(vote.username, partyVote.recordedProgress, party.votesNeeded)
        ?.let { message -> Bukkit.getOnlinePlayers().forEach { it.sendActionBar(message) } }
    Bukkit.getPlayerExact(vote.username)?.let { player ->
      config.messages.voteThankYou()?.let(player::sendMessage)
    }
    if (!partyVote.reached) return
    config.messages.partyStart(party.votesNeeded).forEach(Bukkit::broadcastMessage)
    Bukkit.getOnlinePlayers().forEach { recipient ->
      deliver(recipient, vote, party.rewards.pick(nextInt), party.votesNeeded)
    }
    party.globalCommands.forEach { command ->
      globalCommand(vote, party.votesNeeded, command)?.let(::runCommand)
    }
  }

  fun progress(): Int = progress

  private fun deliver(player: OfflinePlayer, vote: Vote, reward: Reward, votes: Int) {
    if (reward.money > 0) {
      val response = economy()?.depositPlayer(player, reward.money)
      if (response == null || !response.transactionSuccess())
          plugin.logger.warning("Could not grant vote money to ${player.name}")
    }
    if (reward.tokens > 0) grantTokens(player, reward.tokens)
    reward.commands.forEach { command ->
      command(player.name, vote, votes, command)?.let(::runCommand)
    }
  }

  private fun grantTokens(player: OfflinePlayer, amount: Long) {
    val token =
        Bukkit.getServicesManager().getRegistration(OyasaiTokenService::class.java)?.provider
    if (token == null) {
      plugin.logger.warning(
          "Could not grant vote tokens to ${player.name}: OyasaiTokenService is unavailable"
      )
      return
    }
    token.grant(TokenRequest(player.uniqueId, amount, player.name, Delivery.Silent)).thenAccept {
        result ->
      if (result !is TokenResult.Success)
          plugin.logger.warning("Could not grant vote tokens to ${player.name}: $result")
    }
  }

  private fun command(player: String?, vote: Vote, votes: Int, template: String): String? {
    if (player == null || !player.matches(MINECRAFT_USERNAME)) {
      plugin.logger.warning("Skipped vote command for unsafe username '$player'")
      return null
    }
    if ("%service%" in template && !vote.serviceName.matches(SERVICE)) {
      plugin.logger.warning("Skipped vote command for unsafe service '${vote.serviceName}'")
      return null
    }
    return template
        .removePrefix("/")
        .replace("%player%", player)
        .replace("%service%", vote.serviceName)
        .replace("%votes%", votes.toString())
  }

  private fun runCommand(command: String) {
    if (command.isBlank()) return
    Bukkit.dispatchCommand(Bukkit.getConsoleSender(), command)
  }

  private fun globalCommand(vote: Vote, votes: Int, template: String): String? {
    if ("%player%" in template) {
      plugin.logger.warning(
          "Skipped party command containing %player%; use commands-per-player instead"
      )
      return null
    }
    if ("%service%" in template && !vote.serviceName.matches(SERVICE)) {
      plugin.logger.warning("Skipped party command for unsafe service '${vote.serviceName}'")
      return null
    }
    return template
        .removePrefix("/")
        .replace("%service%", vote.serviceName)
        .replace("%votes%", votes.toString())
  }

  private fun economy(): Economy? =
      Bukkit.getServicesManager().getRegistration(Economy::class.java)?.provider

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
