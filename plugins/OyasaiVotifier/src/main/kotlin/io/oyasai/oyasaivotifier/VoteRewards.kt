package io.oyasai.oyasaivotifier

import com.vexsoftware.votifier.model.Vote
import io.oyasai.oyasaitoken.api.Delivery
import io.oyasai.oyasaitoken.api.OyasaiTokenService
import io.oyasai.oyasaitoken.api.TokenRequest
import io.oyasai.oyasaitoken.api.TokenResult
import java.io.File
import net.milkbowl.vault.economy.Economy
import org.bukkit.Bukkit
import org.bukkit.OfflinePlayer
import org.bukkit.configuration.file.YamlConfiguration
import org.bukkit.plugin.java.JavaPlugin

internal class VoteRewards(private val plugin: JavaPlugin, private val config: VotifierConfig) {
  private val stateFile = File(plugin.dataFolder, "party-progress.yml")
  private val state = YamlConfiguration.loadConfiguration(stateFile)
  private var progress = state.getInt("votes", 0).coerceAtLeast(0)

  fun deliver(vote: Vote) {
    val player =
        vote.playerUuid()?.let(Bukkit::getOfflinePlayer) ?: Bukkit.getOfflinePlayer(vote.username)
    deliver(player, vote, config.individual, progress)
    val party = config.party
    if (party.votesNeeded == 0) return
    progress++
    if (progress < party.votesNeeded) {
      save()
      return
    }
    progress = 0
    save()
    Bukkit.broadcastMessage("§a投票パーティーが始まりました！オンラインの全員に報酬を配布します。")
    Bukkit.getOnlinePlayers().forEach { recipient ->
      deliver(recipient, vote, party.reward, party.votesNeeded)
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
    if (player == null || !player.matches(USERNAME)) {
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
    val USERNAME = Regex("[A-Za-z0-9_]{1,16}")
    val SERVICE = Regex("[A-Za-z0-9_-]{1,64}")
  }
}

private val Vote.username: String
  get() = getUsername() ?: ""
private val Vote.serviceName: String
  get() = getServiceName() ?: ""
