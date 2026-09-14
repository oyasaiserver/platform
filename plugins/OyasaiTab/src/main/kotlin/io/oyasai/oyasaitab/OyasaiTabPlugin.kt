package io.oyasai.oyasaitab

import com.baakun.dynamicprofile.model.Calculator
import com.earth2me.essentials.Essentials
import com.github.srain3.sociallikes.datas.Data
import io.oyasai.oyasaitoken.api.OyasaiTokenApi
import java.nio.charset.StandardCharsets
import java.text.DecimalFormat
import java.text.DecimalFormatSymbols
import java.util.Locale
import java.util.UUID
import java.util.zip.CRC32
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.serializer.legacy.LegacyComponentSerializer
import net.luckperms.api.LuckPerms
import net.milkbowl.vault.economy.Economy
import org.bukkit.Bukkit
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.HandlerList
import org.bukkit.event.Listener
import org.bukkit.event.player.PlayerQuitEvent
import org.bukkit.plugin.Plugin
import org.bukkit.plugin.java.JavaPlugin
import org.bukkit.scheduler.BukkitTask
import org.bukkit.scoreboard.Criteria
import org.bukkit.scoreboard.DisplaySlot
import org.bukkit.scoreboard.RenderType
import org.bukkit.scoreboard.Scoreboard
import org.bukkit.scoreboard.Team

class OyasaiTabPlugin : JavaPlugin() {
  private var runtime: OyasaiTabRuntime? = null

  override fun onEnable() {
    saveDefaultConfig()
    runtime = OyasaiTabRuntime.create(this).start()
  }

  override fun onDisable() {
    runtime?.stop()
    runtime = null
  }
}

private interface OyasaiTabRuntime {
  fun start(): OyasaiTabRuntime

  fun stop()

  companion object {
    fun create(plugin: JavaPlugin): OyasaiTabRuntime {
      val config = OyasaiTabConfig.load(plugin)
      val missingPlugins =
          listOfNotNull(
              "SocialLikes3".takeIf { Bukkit.getPluginManager().getPlugin(it) == null },
              "DynamicProfile".takeIf { Bukkit.getPluginManager().getPlugin(it) == null },
              "Essentials".takeIf { Bukkit.getPluginManager().getPlugin(it) == null },
              "LuckPerms".takeIf { Bukkit.getPluginManager().getPlugin(it) == null },
              "TokenManager".takeIf { Bukkit.getPluginManager().getPlugin(it) == null },
              "Vault".takeIf { Bukkit.getPluginManager().getPlugin(it) == null },
          )
      if (missingPlugins.isNotEmpty()) {
        plugin.logger.info(
            "OyasaiTab display disabled: missing plugins ${missingPlugins.joinToString()}; cross-server snapshots stay enabled."
        )
        return SnapshotOnlyOyasaiTabRuntime(plugin, config)
      }

      val scoreboard = Bukkit.getScoreboardManager().mainScoreboard
      val economy = Bukkit.getServicesManager().getRegistration(Economy::class.java)?.provider
      val tokenApi =
          Bukkit.getServicesManager().getRegistration(OyasaiTokenApi::class.java)?.provider
      val luckPerms = Bukkit.getServicesManager().getRegistration(LuckPerms::class.java)?.provider
      val essentials = EssentialsAfkLookup.from(Bukkit.getPluginManager().getPlugin("Essentials"))
      val missingServices =
          listOfNotNull(
              "Vault Economy".takeIf { economy == null },
              "OyasaiTokenApi".takeIf { tokenApi == null },
              "LuckPerms API".takeIf { luckPerms == null },
              "Essentials API".takeIf { essentials == null },
          )
      if (economy == null || tokenApi == null || luckPerms == null || essentials == null) {
        plugin.logger.info(
            "OyasaiTab display disabled: missing services ${missingServices.joinToString()}; cross-server snapshots stay enabled."
        )
        return SnapshotOnlyOyasaiTabRuntime(plugin, config)
      }

      return FullOyasaiTabRuntime(
          plugin = plugin,
          scoreboard = scoreboard,
          economy = economy,
          tokenApi = tokenApi,
          luckPerms = luckPerms,
          config = config,
          isAfk = essentials::isAfk,
      )
    }
  }
}

private class FullOyasaiTabRuntime(
    private val plugin: JavaPlugin,
    private val scoreboard: Scoreboard,
    private val economy: Economy,
    private val tokenApi: OyasaiTokenApi,
    private val luckPerms: LuckPerms,
    private val config: OyasaiTabConfig,
    private val isAfk: (Player) -> Boolean,
) : OyasaiTabRuntime, Listener {
  private val legacy = LegacyComponentSerializer.legacyAmpersand()
  private val network = PaperTabSnapshotBridge(plugin, config)
  private var task: BukkitTask? = null

  override fun start(): OyasaiTabRuntime {
    network.start()
    ensurePingObjective()
    cleanupEmptyOwnTeams()
    Bukkit.getPluginManager().registerEvents(this, plugin)
    task = Bukkit.getScheduler().runTaskTimer(plugin, Runnable { updateAll() }, 20L, 20L)
    updateAll()
    plugin.logger.info("OyasaiTab enabled.")
    return this
  }

  override fun stop() {
    task?.cancel()
    task = null
    network.stop()
    HandlerList.unregisterAll(this)
    scoreboard.getObjective(PING_OBJECTIVE)?.let {
      if (it.displaySlot == DisplaySlot.PLAYER_LIST) scoreboard.clearSlot(DisplaySlot.PLAYER_LIST)
      it.unregister()
    }
    scoreboard.teams.filter { ownsTeam(it.name) }.forEach { it.unregister() }
  }

  @EventHandler
  fun onQuit(event: PlayerQuitEvent) {
    removeOwnTeamEntry(event.player.name)
    scoreboard.getObjective(PING_OBJECTIVE)?.getScore(event.player.name)?.resetScore()
  }

  private fun updateAll() {
    val players = Bukkit.getOnlinePlayers().toList()
    val profiles = players.associateWith { profile(it) }
    val orders =
        TabOrder.calculate(
            profiles.map { (player, profile) ->
              TabOrder.Entry(player.uniqueId, player.name, profile.group, profile.afk)
            },
            config.sortGroups,
        )
    val allLikes = Data.userLikesInt.values.sum()
    val buildings = Data.getBuildingInt()
    val online = players.size
    val tps = TablistFormatter.formatTps(Bukkit.getTPS().firstOrNull() ?: 0.0)
    val version = Bukkit.getMinecraftVersion()

    players.forEach { player ->
      val profile = profiles.getValue(player)
      player.sendPlayerListHeaderAndFooter(
          legacy.deserialize(TablistFormatter.headerLegacy(version, profile.likes)),
          legacy.deserialize(
              TablistFormatter.footerLegacy(
                  money = profile.money,
                  tokens = profile.tokens,
                  online = online,
                  tps = tps,
                  allLikes = allLikes,
                  buildings = buildings,
              )
          ),
      )
      player.playerListName(
          legacy.deserialize(
              TablistFormatter.playerNameLegacy(
                  groupColor = profile.groupColor,
                  suffix = profile.suffix,
                  likes = profile.likes,
                  playerName = TablistFormatter.playerDisplayNameLegacy(player.name, profile.afk),
              )
          )
      )
      player.setPlayerListOrder(orders[player.uniqueId] ?: 1)
      updateNameTag(player, profile)
      updatePing(player)
    }
    network.send(players)
  }

  private fun profile(player: Player): PlayerProfile {
    val user = luckPerms.userManager.getUser(player.uniqueId)
    val group = user?.primaryGroup?.lowercase(Locale.US).orEmpty()
    return PlayerProfile(
        group = group,
        groupColor = config.groupColors[group].orEmpty(),
        suffix = user?.cachedData?.metaData?.suffix.orEmpty(),
        likes = Data.userLikesInt[player.uniqueId] ?: 0,
        money = economy.getBalance(player),
        tokens = tokenApi.getBalance(player.uniqueId),
        afk = isAfk(player),
        level = "Lv.${Calculator.getLevel(player)}",
    )
  }

  private fun updateNameTag(player: Player, profile: PlayerProfile) {
    val prefix =
        TablistFormatter.nameTagPrefixLegacy(
            template = config.tagPrefixes[profile.group] ?: config.tagPrefixes["default"].orEmpty(),
            suffix = profile.suffix,
            level = profile.level,
        )
    val suffix = config.tagSuffixes[profile.group].orEmpty()
    val teamName = ownTeamName(profile.group, prefix, suffix)
    val currentTeam = scoreboard.getEntryTeam(player.name)

    if (currentTeam != null && !ownsTeam(currentTeam.name)) return

    val team = scoreboard.getTeam(teamName) ?: scoreboard.registerNewTeam(teamName)
    team.prefix(legacy.deserialize(prefix))
    team.suffix(legacy.deserialize(suffix))
    if (currentTeam != null && currentTeam.name != teamName) {
      currentTeam.removeEntry(player.name)
      unregisterIfEmptyOwnTeam(currentTeam)
    }
    if (!team.hasEntry(player.name)) team.addEntry(player.name)
  }

  private fun updatePing(player: Player) {
    ensurePingObjective().getScore(player.name).score = player.ping
  }

  private fun ensurePingObjective() =
      (scoreboard.getObjective(PING_OBJECTIVE)
              ?: scoreboard.registerNewObjective(
                  PING_OBJECTIVE,
                  Criteria.DUMMY,
                  Component.text("TAB"),
                  RenderType.INTEGER,
              ))
          .also {
            it.displayName(Component.text("TAB"))
            it.setRenderType(RenderType.INTEGER)
            it.displaySlot = DisplaySlot.PLAYER_LIST
          }

  private fun removeOwnTeamEntry(entry: String) {
    val team = scoreboard.getEntryTeam(entry)?.takeIf { ownsTeam(it.name) } ?: return
    team.removeEntry(entry)
    unregisterIfEmptyOwnTeam(team)
  }

  private fun cleanupEmptyOwnTeams() {
    scoreboard.teams
        .filter { ownsTeam(it.name) && it.entries.isEmpty() }
        .forEach { it.unregister() }
  }

  private fun unregisterIfEmptyOwnTeam(team: Team) {
    if (ownsTeam(team.name) && team.entries.isEmpty()) team.unregister()
  }

  private fun ownTeamName(group: String, prefix: String, suffix: String): String {
    val crc = CRC32()
    crc.update("$group|$prefix|$suffix".toByteArray(StandardCharsets.UTF_8))
    val hash = crc.value.toString(36).padStart(6, '0').takeLast(6)
    return "${config.teamPrefix}$hash"
  }

  private fun ownsTeam(name: String): Boolean = name.startsWith(config.teamPrefix)

  companion object {
    private const val PING_OBJECTIVE = "oyasaitab_ping"
  }
}

private class SnapshotOnlyOyasaiTabRuntime(
    private val plugin: JavaPlugin,
    config: OyasaiTabConfig,
) : OyasaiTabRuntime {
  private val network = PaperTabSnapshotBridge(plugin, config)
  private var task: BukkitTask? = null

  override fun start(): OyasaiTabRuntime {
    network.start()
    task =
        Bukkit.getScheduler()
            .runTaskTimer(
                plugin,
                Runnable { network.send(Bukkit.getOnlinePlayers().toList()) },
                20L,
                20L,
            )
    network.send(Bukkit.getOnlinePlayers().toList())
    plugin.logger.info("OyasaiTab cross-server snapshots enabled.")
    return this
  }

  override fun stop() {
    task?.cancel()
    task = null
    network.stop()
  }
}

private class PaperTabSnapshotBridge(
    private val plugin: JavaPlugin,
    private val config: OyasaiTabConfig,
) {
  private val legacy = LegacyComponentSerializer.legacySection()

  fun start() {
    Bukkit.getMessenger().registerOutgoingPluginChannel(plugin, OYASAI_TAB_CHANNEL)
  }

  fun stop() {
    Bukkit.getMessenger().unregisterOutgoingPluginChannel(plugin, OYASAI_TAB_CHANNEL)
  }

  fun send(players: List<Player>) {
    val carrier = players.firstOrNull() ?: return
    val snapshot =
        OyasaiTabSnapshot(
            config.backendId,
            players.map { player ->
              OyasaiTabPlayerSnapshot(
                  uuid = player.uniqueId,
                  displayNameLegacy = legacy.serialize(player.playerListName()),
                  serverName = config.backendId,
                  ping = player.ping,
              )
            },
        )
    carrier.sendPluginMessage(plugin, OYASAI_TAB_CHANNEL, OyasaiTabSnapshotCodec.encode(snapshot))
  }
}

private data class PlayerProfile(
    val group: String,
    val groupColor: String,
    val suffix: String,
    val likes: Int,
    val money: Double,
    val tokens: Long,
    val afk: Boolean,
    val level: String,
)

private data class OyasaiTabConfig(
    val backendId: String,
    val groupColors: Map<String, String>,
    val sortGroups: List<String>,
    val tagPrefixes: Map<String, String>,
    val tagSuffixes: Map<String, String>,
    val teamPrefix: String,
) {
  companion object {
    fun load(plugin: JavaPlugin): OyasaiTabConfig =
        OyasaiTabConfig(
            backendId =
                System.getenv("OYASAI_SERVER_ID")?.trim()?.takeIf(String::isNotEmpty)
                    ?: plugin.config.getString("network.backend-id", "main")
                    ?: "main",
            groupColors = plugin.config.lowercaseStringMap("tablist.group-colors"),
            sortGroups =
                plugin.config.getStringList("tablist.sort-groups").map { it.lowercase(Locale.US) },
            tagPrefixes = plugin.config.lowercaseStringMap("nametag.group-prefixes"),
            tagSuffixes = plugin.config.lowercaseStringMap("nametag.group-suffixes"),
            teamPrefix =
                plugin.config.getString("nametag.team-prefix", "oyasaitab_") ?: "oyasaitab_",
        )
  }
}

private fun org.bukkit.configuration.file.FileConfiguration.lowercaseStringMap(
    path: String
): Map<String, String> {
  val section = getConfigurationSection(path) ?: return emptyMap()
  return section.getKeys(false).associate {
    it.lowercase(Locale.US) to section.getString(it, "").orEmpty()
  }
}

object TablistFormatter {
  private val symbols = DecimalFormatSymbols(Locale.US)
  private val moneyFormat = DecimalFormat("#,##0.##", symbols)
  private val tpsFormat = DecimalFormat("#.##", symbols)
  private val tokenFormat = DecimalFormat("#,##0", symbols)

  fun headerLegacy(version: String, receivedLikes: Int): String =
      listOf(
              "&8&m=============================",
              "&7&l&o&nOYASAI&f&l&oSERVER &7&l&o$version",
              "&bLikes&7：&6$receivedLikes",
          )
          .joinToString("\n")

  fun playerDisplayNameLegacy(playerName: String, afk: Boolean): String =
      if (afk) "&7$playerName &o[AFK]" else playerName

  fun footerLegacy(
      money: Double,
      tokens: Long,
      online: Int,
      tps: String,
      allLikes: Int,
      buildings: Int,
  ): String =
      listOf(
              "",
              "&7&o¥&r&2${moneyFormat.format(money)} &f|&r &3${tokenFormat.format(tokens)}&7&oP",
              "",
              "&a$online&f &7players online &f| &f$tps &7TPS",
              "&7Total &6$allLikes &7Likes &f| &2$buildings &7SLIDs",
              "&8&m==============================",
          )
          .joinToString("\n")

  fun playerNameLegacy(groupColor: String, suffix: String, likes: Int, playerName: String): String {
    val groupMark = if (groupColor.isBlank()) "" else "$groupColor*"
    return "&r$groupMark$suffix&f&7<&6$likes&7>&f $playerName"
  }

  fun nameTagPrefixLegacy(template: String, suffix: String, level: String): String =
      template.replace("%dp_level%", level).replace("%luckperms-suffix%", suffix)

  fun formatTps(tps: Double): String = tpsFormat.format(tps.coerceAtMost(20.0))
}

object TabOrder {
  data class Entry(val uuid: UUID, val name: String, val group: String, val afk: Boolean)

  fun calculate(
      entries: Collection<Entry>,
      sortGroups: List<String>,
      baseOrder: Int = LOCAL_TAB_ORDER_BASE,
  ): Map<UUID, Int> {
    val groupRanks =
        sortGroups.mapIndexed { index, group -> group.lowercase(Locale.US) to index }.toMap()
    return entries
        .sortedWith(
            compareBy<Entry> { if (it.afk) 1 else 0 }
                .thenBy { groupRanks[it.group.lowercase(Locale.US)] ?: Int.MAX_VALUE }
                .thenBy(String.CASE_INSENSITIVE_ORDER) { it.name }
                .thenBy { it.name }
        )
        .mapIndexed { index, entry -> entry.uuid to baseOrder + entries.size - index - 1 }
        .toMap()
  }
}

private class EssentialsAfkLookup(private val essentials: Essentials) {
  fun isAfk(player: Player): Boolean = essentials.getUser(player)?.isAfk ?: false

  companion object {
    fun from(plugin: Plugin?): EssentialsAfkLookup? =
        (plugin as? Essentials)?.let(::EssentialsAfkLookup)
  }
}
