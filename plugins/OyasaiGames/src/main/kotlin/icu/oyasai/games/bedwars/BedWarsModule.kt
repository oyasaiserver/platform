package icu.oyasai.games.bedwars

import icu.oyasai.games.OyasaiGamesPlugin
import icu.oyasai.games.pvp.*
import java.io.File
import java.util.UUID
import java.util.logging.Level
import org.bukkit.*
import org.bukkit.attribute.Attribute
import org.bukkit.block.Container
import org.bukkit.block.data.type.Bed
import org.bukkit.command.*
import org.bukkit.configuration.file.YamlConfiguration
import org.bukkit.entity.*
import org.bukkit.event.*
import org.bukkit.event.block.*
import org.bukkit.event.entity.*
import org.bukkit.event.inventory.*
import org.bukkit.event.player.*
import org.bukkit.event.server.PluginEnableEvent
import org.bukkit.inventory.*
import org.bukkit.persistence.PersistentDataType
import org.bukkit.potion.PotionEffect
import org.bukkit.potion.PotionEffectType
import org.bukkit.scheduler.BukkitTask

internal enum class BwPhase {
  WAITING,
  COUNTDOWN,
  RUNNING,
  ENDING,
  FAILED,
}

internal class BwMember(
    val player: Player,
    val match: BwMatch,
    val team: String,
    var spectator: Boolean,
) {
  var respawnAt = 0.0
  var protectedUntil = 0L
  var attacker: UUID? = null
  var attackedAt = 0L
  var deaths = 0
  var recovering = false
}

internal class BwMatch(val config: BwArena, folder: File) {
  var id = UUID.randomUUID().toString()
  var dirty = true
  var phase = BwPhase.WAITING
  var elapsed = 0.0
  var countdown = config.countdown.toDouble()
  var ending = 0.0
  var rules = BwRules()
  val members = linkedMapOf<UUID, BwMember>()
  val roster = linkedMapOf<UUID, String>()
  val placed = hashSetOf<String>()
  val upgrades = linkedMapOf<String, MutableMap<String, Int>>()
  val traps = linkedMapOf<String, MutableList<BedWarsShopEntry>>()
  val chests = linkedMapOf<String, Inventory>()
  val entities = hashSetOf<UUID>()
  val generatorNext = DoubleArray(config.generators.size)
  val generatorLevel = DoubleArray(config.generators.size) { config.generators[it].startLevel }
  val displays = linkedMapOf<Int, TextDisplay>()
  val tickets = mutableListOf<Pair<Int, Int>>()
  var specials: BedWarsSpecials? = null
  var shop: BedWarsShop? = null
  val terrain =
      PvpTerrain(
          folder,
          ArenaConfig(
              config.name,
              YamlConfiguration().also {
                it.set("mods", listOf("BlockRestore"))
                it.set("modules.blockrestore.restoreblocks", true)
                it.set("modules.blockrestore.restorecontainers", true)
              },
              Goal.TeamLives,
              emptyMap(),
              listOf(
                  Region(
                      "arena",
                      config.world,
                      listOf(
                          kotlin.math.floor(config.pos1.x).toInt(),
                          kotlin.math.floor(config.pos1.y).toInt(),
                          kotlin.math.floor(config.pos1.z).toInt(),
                          kotlin.math.floor(config.pos2.x).toInt(),
                          kotlin.math.floor(config.pos2.y).toInt(),
                          kotlin.math.floor(config.pos2.z).toInt(),
                      ),
                      "BATTLE",
                      emptySet(),
                      emptySet(),
                  )
              ),
          ),
      )
}

/** Paper API only. Persistent player/terrain/payment journals are shared with PvP. */
class BedWarsModule(private val plugin: OyasaiGamesPlugin) : Listener, TabExecutor {
  private val folder = File(plugin.dataFolder, "bedwars")
  private val store = PlayerStore(File(folder, "players"))
  private val matches = linkedMapOf<String, BwMatch>()
  private val members = linkedMapOf<UUID, BwMember>()
  private val rejoin = linkedMapOf<UUID, Triple<String, String, String>>()
  private lateinit var files: BedWarsFiles
  private var enabled = false
  private var task: BukkitTask? = null
  private var recoveryTask: BukkitTask? = null
  private var economy: PvpEconomy? = null
  private var explosion: BedWarsExplosion? = null
  private val chatPlayers = java.util.concurrent.ConcurrentHashMap.newKeySet<UUID>()
  private lateinit var stats: BedWarsStats
  private lateinit var display: BedWarsDisplay
  private lateinit var party: BedWarsParty
  private val shoutUntil = mutableMapOf<UUID, Long>()
  private val catalogs = linkedMapOf<String, BedWarsShopCatalog>()
  private val entityKey = NamespacedKey(plugin, "bedwars_match")
  private val ownerKey = NamespacedKey(plugin, "bedwars_owner")
  private val restoreListener =
      object : Listener {
        @EventHandler
        fun join(e: PlayerJoinEvent) {
          recover(e.player)
        }

        @EventHandler
        fun respawn(e: PlayerRespawnEvent) {
          Bukkit.getScheduler()
              .runTask(
                  plugin,
                  Runnable {
                    members[e.player.uniqueId]?.let { p ->
                      guarded(p.match) {
                        if (p.match.phase == BwPhase.RUNNING && enabled) afterDeath(p)
                        else leave(p, false)
                      }
                    } ?: recover(e.player)
                  },
              )
        }
      }

  fun enable() {
    HandlerList.unregisterAll(restoreListener)
    plugin.server.pluginManager.registerEvents(restoreListener, plugin)
    Bukkit.getOnlinePlayers().forEach { recover(it) }
    recoveryTask?.cancel()
    recoveryTask =
        Bukkit.getScheduler()
            .runTaskTimer(
                plugin,
                Runnable {
                  members.values
                      .toList()
                      .filter { !enabled || it.match.phase == BwPhase.FAILED }
                      .forEach { p ->
                        runCatching { leave(p, false) }
                            .onFailure {
                              plugin.logger.severe(
                                  "BedWars recovery still pending (${it.javaClass.simpleName})"
                              )
                            }
                      }
                  matches.values
                      .toList()
                      .filter {
                        (!enabled || it.phase == BwPhase.FAILED) && it.members.isEmpty() && it.dirty
                      }
                      .forEach { match ->
                        val phase = match.phase
                        runCatching { reset(match) }
                            .onFailure {
                              plugin.logger.severe(
                                  "BedWars terrain recovery pending (${it.javaClass.simpleName})"
                              )
                            }
                        match.phase = if (enabled) phase else BwPhase.FAILED
                      }
                },
                20L,
                20L,
            )
    check(members.isEmpty()) { "BedWars inventory recovery is pending; cannot restart the module" }
    check(matches.values.none { it.dirty }) {
      "BedWars terrain recovery is pending; cannot restart the module"
    }
    matches.clear()
    catalogs.clear()
    economy = null
    if (!plugin.config.getBoolean("games.bedwars.enabled", false)) {
      if (folder.isDirectory && !externalEnabled()) {
        files = BedWarsFiles(folder, plugin.logger)
        files.loadArenas().forEach { config ->
          runCatching {
                val match = BwMatch(config, folder)
                match.terrain.restore()
                cleanupEntities(match)
              }
              .onFailure {
                plugin.logger.severe(
                    "BedWars disabled arena recovery pending (${it.javaClass.simpleName})"
                )
              }
        }
      }
      return
    }
    if (externalEnabled()) {
      plugin.logger.warning("External BedWars is enabled; OyasaiGames bedwars will not start")
      return
    }
    importLegacy(
        folder,
        File(plugin.dataFolder.parentFile, "BedWars"),
        File(plugin.dataFolder.parentFile, "SBA"),
        plugin.logger,
    )
    folder.mkdirs()
    files = BedWarsFiles(folder, plugin.logger)
    party =
        BedWarsParty(
            files.sba.getBoolean("party.enabled", false),
            files.sba.getInt("party.invite-expiration-time", 60),
            files.sba.getBoolean("party.leader-autojoin-autoleave", true),
        )
    stats = BedWarsStats(folder)
    stats.importLegacy(folder)
    BedWarsSettings.report(files)
    display = BedWarsDisplay(plugin, { p, name -> commandJoin(p, name) }, { p -> commandRejoin(p) })
    plugin.server.pluginManager.registerEvents(display, plugin)
    if (plugin.server.pluginManager.isPluginEnabled("Vault")) {
      Bukkit.getServicesManager()
          .getRegistration(net.milkbowl.vault.economy.Economy::class.java)
          ?.provider
          ?.let { economy = PvpEconomy(folder, it).also { bank -> bank.retry() } }
    }
    for (arena in files.loadArenas()) {
      try {
        val match = BwMatch(arena, folder)
        match.terrain.restore()
        cleanupEntities(match)
        match.dirty = false
        for (store in arena.stores) catalog(store.shop)
        matches[arena.name] = match
      } catch (e: Exception) {
        plugin.logger.warning(
            "BedWars arena could not initialize (${e.javaClass.simpleName}); recovery retained"
        )
      }
    }
    if (files.config.getBoolean("vault.enable") && rewardConfigured())
        check(economy != null) { "BedWars rewards require a Vault economy provider" }
    plugin.server.pluginManager.registerEvents(this, plugin)
    for (name in listOf("bw", "bwparty", "shout")) plugin.getCommand(name)!!.let {
      it.setExecutor(this)
      it.tabCompleter = this
    }
    explosion =
        BedWarsExplosion(
                plugin,
                files.sba,
                { entity, player ->
                  members[player.uniqueId]?.let {
                    combatReady(it) &&
                        entity.persistentDataContainer.get(entityKey, PersistentDataType.STRING) ==
                            it.match.id &&
                        it.protectedUntil <= System.currentTimeMillis()
                  } == true
                },
                { player -> members[player.uniqueId]?.let { combatReady(it) } == true },
            )
            .also { plugin.server.pluginManager.registerEvents(it, plugin) }
    enabled = true
    task =
        Bukkit.getScheduler()
            .runTaskTimer(
                plugin,
                Runnable {
                  matches.values.toList().forEach { match -> guarded(match) { tick(match) } }
                },
                5L,
                5L,
            )
    plugin.logger.info("BedWars loaded ${matches.size} arenas")
  }

  private fun externalEnabled() =
      plugin.server.pluginManager.plugins.any {
        it.isEnabled &&
            (it.name.equals("BedWars", true) || it.name.equals("ScreamingBedWars", true))
      }

  fun disable() {
    enabled = false
    task?.cancel()
    task = null
    matches.values.toList().forEach { match ->
      runCatching { abort(match) }
          .onFailure {
            plugin.logger.severe("BedWars shutdown recovery pending (${it.javaClass.simpleName})")
          }
    }
    members.values.toList().forEach { p ->
      if (p.player.isOnline) p.player.kickPlayer("BedWars の持ち物復元が未完了です。再接続してください。")
    }
    explosion?.close()
    explosion = null
    if (::display.isInitialized) display.close()
    HandlerList.unregisterAll(this)
    // Login recovery remains available while the plugin itself is running.
  }

  private fun guarded(match: BwMatch, action: () -> Unit) {
    try {
      action()
    } catch (e: Exception) {
      plugin.logger.log(
          Level.SEVERE,
          "BedWars operation failed; arena stopped and journals retained (${e.javaClass.simpleName})",
      )
      match.phase = BwPhase.FAILED
      Bukkit.getScheduler()
          .runTask(
              plugin,
              Runnable {
                runCatching { abort(match) }
                    .onFailure {
                      plugin.logger.severe("BedWars recovery deferred (${it.javaClass.simpleName})")
                    }
                match.phase = BwPhase.FAILED
              },
          )
    }
  }

  private fun recover(player: Player) {
    if (members.containsKey(player.uniqueId) || !store.pending(player)) return
    try {
      store.restore(player)
    } catch (e: Exception) {
      plugin.logger.severe(
          "BedWars player recovery failed; journal retained (${e.javaClass.simpleName})"
      )
      if (player.isOnline) player.kickPlayer("持ち物の復元が未完了です。管理者に連絡してください。")
    }
  }

  override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<out String>,
  ): Boolean {
    if (!enabled) {
      sender.sendMessage("BedWars は無効です。")
      return true
    }
    try {
      check(sender.hasPermission("oyasaigames.bedwars.use")) { "権限がありません" }
      if (command.name == "bwparty") {
        partyCommand(sender as? Player ?: error("プレイヤー専用です"), args)
        return true
      }
      if (command.name == "shout") {
        shout(sender as? Player ?: error("プレイヤー専用です"), args.joinToString(" "))
        return true
      }
      when (args.firstOrNull()?.lowercase()) {
        "list" ->
            matches.values.forEach {
              sender.sendMessage(
                  "${it.config.name}: ${it.phase} ${it.members.size}/${it.config.maxPlayers}"
              )
            }
        "stats" -> {
          val player = sender as? Player ?: error("プレイヤー専用です")
          sender.sendMessage(stats.get(player.uniqueId).toString())
        }
        "leaderboard" ->
            stats.leaderboard(BedWarsStat.SCORE, 10).forEachIndexed { index, row ->
              sender.sendMessage("${index + 1}. ${row.name}: ${row.value}")
            }
        else -> {
          val player = sender as? Player ?: error("プレイヤー専用です")
          when (args.firstOrNull()?.lowercase()) {
            "join" ->
                if (args.size > 1) commandJoin(player, args[1])
                else display.openModes(player, views())
            "leave" -> commandLeave(player)
            "rejoin" -> commandRejoin(player)
            "gui" ->
                if (args.size > 1) display.openMode(player, args[1], views())
                else display.openModes(player, views())
            "shop" -> openShop(player, false)
            "upgrades" -> openShop(player, true)
            else -> {
              player.sendMessage("/bw join <arena> | leave | rejoin | list | stats | leaderboard")
              display.openModes(player, views())
            }
          }
        }
      }
    } catch (e: Exception) {
      sender.sendMessage("BedWars: ${e.message ?: e.javaClass.simpleName}")
    }
    return true
  }

  override fun onTabComplete(
      sender: CommandSender,
      command: Command,
      alias: String,
      args: Array<out String>,
  ): List<String> =
      (if (args.size == 1) listOf("join", "leave", "rejoin", "list", "stats", "leaderboard", "gui")
          else if (args[0].equals("join", true)) matches.keys.toList()
          else if (args[0].equals("gui", true)) listOf("solo", "double", "triples", "squads")
          else emptyList())
          .filter { it.startsWith(args.lastOrNull().orEmpty(), true) }

  private fun views(): List<ArenaView> {
    check(files.sba.getBoolean("games-inventory.enabled", true)) { "参加 GUI は無効です" }
    return matches.values.map {
      ArenaView(
          it.config.name,
          it.config.teams.maxOf { t -> t.maxPlayers },
          it.members.values.count { p -> !p.spectator },
          it.config.maxPlayers,
          it.phase in setOf(BwPhase.WAITING, BwPhase.COUNTDOWN),
      )
    }
  }

  private fun matchName(name: String) =
      matches.values.singleOrNull { it.config.name.equals(name, true) }
          ?: error("アリーナ名が見つからないか曖昧です")

  private fun commandJoin(player: Player, name: String) {
    val match = matchName(name)
    val followers =
        party.autoMembers(player.uniqueId).map {
          Bukkit.getPlayer(it) ?: error("パーティーメンバーがオフラインです")
        }
    val group = listOf(player) + followers
    group.forEach { who ->
      check(
          who.uniqueId !in members &&
              !who.isDead &&
              !who.isInsideVehicle &&
              who.itemOnCursor.type.isAir
      ) {
        "パーティーメンバーが参加できません"
      }
      recover(who)
      check(!store.pending(who))
      requireExclusiveSnapshot(File(folder, "players"), "${who.uniqueId}.yml")
    }
    if (match.phase != BwPhase.RUNNING)
        check(
            group.size <= match.config.maxPlayers - match.members.values.count { !it.spectator }
        ) {
          "パーティー全員分の空きがありません"
        }
    val joined = mutableListOf<BwMember>()
    try {
      group.forEach {
        join(it, match, null)
        members[it.uniqueId]?.let(joined::add)
      }
    } catch (error: Exception) {
      joined.asReversed().forEach { runCatching { leave(it, false) } }
      throw error
    }
  }

  private fun commandLeave(player: Player) {
    val group = listOf(player.uniqueId) + party.autoMembers(player.uniqueId)
    group.forEach { id ->
      members[id]?.let { guarded(it.match) { leave(it) } } ?: Bukkit.getPlayer(id)?.let(::recover)
    }
  }

  private fun partyCommand(player: Player, args: Array<out String>) {
    fun target() =
        Bukkit.getPlayerExact(args.getOrNull(1) ?: error("プレイヤー名を指定してください"))
            ?: error("オンラインのプレイヤーを指定してください")
    when (args.firstOrNull()?.lowercase()) {
      "invite" -> {
        val who = target()
        party.invite(player.uniqueId, who.uniqueId)
        who.sendMessage("${player.name} から BedWars パーティー招待。/bwparty accept ${player.name}")
      }
      "accept" -> {
        party.accept(player.uniqueId, target().uniqueId)
        player.sendMessage("パーティーに参加しました。")
      }
      "leave" -> {
        party.leave(player.uniqueId)
        player.sendMessage("パーティーから退出しました。")
      }
      "kick" -> party.kick(player.uniqueId, target().uniqueId)
      "disband" -> party.disband(player.uniqueId)
      else ->
          player.sendMessage(
              "/bwparty invite <player> | accept <leader> | leave | kick <player> | disband"
          )
    }
  }

  private fun shout(player: Player, message: String) {
    val p = members[player.uniqueId] ?: error("試合に参加してください")
    val now = System.currentTimeMillis()
    check(now >= (shoutUntil[player.uniqueId] ?: 0L)) { "しばらく待ってから発言してください" }
    shoutUntil[player.uniqueId] = now + files.sba.getInt("shout.time-out", 60) * 1000L
    broadcast(p.match, "[ALL] ${player.name}: $message")
  }

  private fun commandRejoin(player: Player) {
    val previous = rejoin[player.uniqueId] ?: error("再参加できる試合がありません")
    val match = matches[previous.first] ?: error("試合がありません")
    check(
        match.id == previous.second &&
            match.phase == BwPhase.RUNNING &&
            match.rules.bed(previous.third)
    ) {
      "この試合には再参加できません"
    }
    join(player, match, previous.third)
  }

  private fun join(player: Player, match: BwMatch, returningTeam: String?) {
    check(
        enabled && members[player.uniqueId] == null && !player.isDead && !player.isInsideVehicle
    ) {
      "今は参加できません"
    }
    recover(player)
    check(!store.pending(player)) { "復元が未完了です" }
    check(match.phase in setOf(BwPhase.WAITING, BwPhase.COUNTDOWN, BwPhase.RUNNING)) {
      "このアリーナは利用できません"
    }
    val spectate = match.phase == BwPhase.RUNNING && returningTeam == null
    check(!spectate || setting(match, "allow-spectator-join", true)) { "試合中です" }
    val team =
        if (spectate) ""
        else
            returningTeam
                ?: chooseTeam(
                    match.config.teams.associate { it.name to it.maxPlayers },
                    match.members.filterValues { !it.spectator }.mapValues { it.value.team },
                )
                ?: error("満員です")
    if (!spectate)
        check(
            match.members.values.count { !it.spectator && it.team == team } <
                match.config.teams.single { it.name == team }.maxPlayers
        ) {
          "チームは満員です"
        }
    val target =
        if (spectate) match.config.spec.location()
        else if (match.phase == BwPhase.RUNNING)
            match.config.teams.single { it.name == team }.spawn.location()
        else match.config.lobby.location()
    store.capture(player)
    val p = BwMember(player, match, team, spectate)
    members[player.uniqueId] = p
    match.members[player.uniqueId] = p
    chatPlayers.add(player.uniqueId)
    try {
      player.inventory.clear()
      player.setItemOnCursor(null)
      clearEffects(player)
      player.gameMode = if (spectate) GameMode.SPECTATOR else GameMode.ADVENTURE
      resetHealth(player)
      check(player.teleport(target)) { "テレポートできませんでした" }
      if (spectate) equipSpectator(p)
      if (returningTeam != null) {
        check(match.rules.rejoin(player.uniqueId.toString(), team))
        p.deaths = match.rules.fighters.getValue(player.uniqueId.toString()).deaths
        equip(p)
      }
      player.sendMessage("${match.config.name} に参加しました。/bw leave で戻ります。")
    } catch (e: Exception) {
      runCatching { leave(p) }
      throw e
    }
  }

  private fun setting(match: BwMatch, key: String, default: Boolean = false): Boolean {
    val override = match.config.yaml.getString("constant.$key", "inherit")
    return if (override == "inherit") files.config.getBoolean(key, default)
    else override.equals("true", true)
  }

  private fun resetHealth(player: Player) {
    player.getAttribute(Attribute.MAX_HEALTH)!!.baseValue = 20.0
    player.health = 20.0
    player.foodLevel = 20
    player.saturation = 10f
    player.fireTicks = 0
    player.fallDistance = 0f
    player.allowFlight = false
  }

  private fun clearEffects(player: Player) {
    player.activePotionEffects.forEach { player.removePotionEffect(it.type) }
  }

  private fun equip(p: BwMember) {
    val player = p.player
    player.inventory.clear()
    clearEffects(player)
    resetHealth(player)
    player.gameMode = GameMode.SURVIVAL
    for (material in
        gameStartMaterials(
            setting(p.match, "game-start-items", true),
            files.config.getStringList("gived-game-start-items"),
        )) {
      val item = ItemStack(Material.matchMaterial(material) ?: error("Invalid game start item"))
      val meta = item.itemMeta
      if (meta is org.bukkit.inventory.meta.LeatherArmorMeta) {
        meta.setColor(
            org.bukkit.DyeColor.valueOf(p.match.config.teams.single { it.name == p.team }.color)
                .color
        )
        item.itemMeta = meta
      }
      when {
        material.endsWith("HELMET") -> player.inventory.setHelmet(item)
        material.endsWith("CHESTPLATE") -> player.inventory.setChestplate(item)
        material.endsWith("LEGGINGS") -> player.inventory.setLeggings(item)
        material.endsWith("BOOTS") -> player.inventory.setBoots(item)
        else -> player.inventory.addItem(item)
      }
    }
    p.protectedUntil =
        System.currentTimeMillis() +
            if (files.config.getBoolean("respawn.protection-enabled", true))
                files.config.getInt("respawn.protection-time", 3) * 1000L
            else 0L
    applyUpgrades(p)
  }

  private fun tick(match: BwMatch) {
    when (match.phase) {
      BwPhase.WAITING,
      BwPhase.COUNTDOWN -> {
        if (
            match.members.values.count { !it.spectator } < match.config.minPlayers ||
                match.members.values.filter { !it.spectator }.map { it.team }.toSet().size < 2
        ) {
          match.phase = BwPhase.WAITING
          match.countdown = match.config.countdown.toDouble()
        } else {
          match.phase = BwPhase.COUNTDOWN
          match.countdown -= .25
          if (match.countdown <= 0) start(match)
        }
      }
      BwPhase.RUNNING -> {
        match.elapsed += .25
        for (p in match.members.values.toList()) {
          if (p.respawnAt > 0 && match.elapsed >= p.respawnAt && !p.player.isDead) afterDeath(p)
          if (!p.spectator && p.respawnAt == 0.0) {
            val target =
                match.members.values
                    .filter { !it.spectator && it.respawnAt == 0.0 && it.team != p.team }
                    .minByOrNull { it.player.location.distanceSquared(p.player.location) }
            if (target != null && setting(match, "compass-enabled", true))
                p.player.compassTarget = target.player.location
            if (
                match.upgrades[p.team]?.get("healpool") == 1 &&
                    p.player.location.distanceSquared(team(match, p.team).bed.location()) <=
                        files.sba.getDouble("upgrades.trap-detection-range", 7.0).let { it * it }
            )
                p.player.addPotionEffect(PotionEffect(PotionEffectType.REGENERATION, 30, 1))
          }
        }
        generate(match)
        traps(match)
        match.specials?.tick()
        if (match.rules.canFinish()) finish(match, match.rules.winner())
        else if (match.elapsed >= match.config.gameTime) finish(match, null)
      }
      BwPhase.ENDING -> {
        match.ending -= .25
        if (match.ending <= 0) reset(match)
      }
      BwPhase.FAILED -> Unit
    }
    if ((match.elapsed * 4).toInt() % 4 == 0 || match.phase != BwPhase.RUNNING) show(match)
  }

  private fun start(match: BwMatch) {
    match.dirty = true
    Bukkit.getOnlinePlayers()
        .filter { it.openInventory.topInventory.location?.let(match.config::contains) == true }
        .forEach { it.closeInventory() }
    match.terrain.begin()
    match.id = UUID.randomUUID().toString()
    match.elapsed = 0.0
    match.rules = BwRules()
    match.roster.clear()
    match.members.values
        .filter { !it.spectator }
        .forEach { p ->
          match.rules.add(p.player.uniqueId.toString(), p.team)
          match.roster[p.player.uniqueId] = p.team
        }
    // Capture both halves before touching an unused bed; physics stays disabled.
    if (setting(match, "remove-unused-target-blocks", true))
        match.config.teams
            .filter { t -> t.name !in match.roster.values }
            .forEach { removeBed(match, it) }
    match.phase = BwPhase.RUNNING
    match.generatorNext.indices.forEach { i ->
      match.generatorNext[i] =
          if (files.config.getBoolean("spawn-resources-on-game-start")) 0.0
          else resourceInterval(match, i)
    }
    match.members.values
        .filter { !it.spectator }
        .forEach { p ->
          check(p.player.teleport(team(match, p.team).spawn.location()))
          equip(p)
          stats.record(
              p.player.uniqueId,
              "${match.id}:start:${p.player.uniqueId}",
              mapOf(BedWarsStat.GAMES to 1),
              p.player.name,
          )
        }
    acquireTickets(match)
    spawnStores(match)
    createDisplays(match)
    broadcast(match, "試合開始！相手のベッドを破壊してください。")
  }

  private fun death(p: BwMember, killerId: UUID?) {
    val match = p.match
    if (match.phase != BwPhase.RUNNING || p.spectator || p.respawnAt > 0) return
    val killer =
        killerId
            ?.let { members[it] }
            ?.takeIf {
              it.match === match && !it.spectator && it.team != p.team && it.respawnAt == 0.0
            }
    val final =
        match.rules.die(p.player.uniqueId.toString(), killer?.player?.uniqueId?.toString())
            ?: return
    p.deaths++
    val deathLocation = p.player.location.clone()
    val event = "${match.id}:death:${p.player.uniqueId}:${p.deaths}"
    p.respawnAt =
        match.elapsed +
            if (files.config.getBoolean("respawn-cooldown.enabled", true))
                files.config.getInt("respawn-cooldown.time", 5).coerceAtLeast(1).toDouble()
            else .25
    p.spectator = final
    stats.record(p.player.uniqueId, event, mapOf(BedWarsStat.DEATHS to 1), p.player.name)
    if (killer != null) {
      if (files.sba.getBoolean("give-killer-resources", true)) giveResources(p, killer)
      stats.record(
          killer.player.uniqueId,
          event + ":kill",
          mapOf(
              BedWarsStat.KILLS to 1,
              BedWarsStat.FINAL_KILLS to if (final) 1 else 0,
              BedWarsStat.SCORE to
                  files.config.getInt(
                      "statistics.scores.${if (final) "final-kill" else "kill"}",
                      if (final) 15 else 10,
                  ),
          ),
          killer.player.name,
      )
      reward(killer.player.uniqueId, event, if (final) "final-kill" else "kill")
    }
    p.player.closeInventory()
    p.player.inventory.clear()
    p.player.setItemOnCursor(null)
    if (!p.player.isDead) {
      resetHealth(p.player)
      p.player.gameMode = GameMode.SPECTATOR
      check(p.player.teleport(match.config.spec.location()))
      if (final) equipSpectator(p)
    }
    if (final && files.sba.getBoolean("final-kill-lightning", true))
        deathLocation.world!!.strikeLightningEffect(deathLocation)
    broadcast(match, if (final) "${p.player.name}: FINAL KILL" else "${p.player.name}: リスポーン待機")
    if (match.rules.canFinish()) finish(match, match.rules.winner())
  }

  private fun afterDeath(p: BwMember) {
    if (p.match.phase != BwPhase.RUNNING || p.player.isDead) return
    if (p.spectator) {
      p.respawnAt = 0.0
      p.player.gameMode = GameMode.SPECTATOR
      p.player.teleport(p.match.config.spec.location())
      equipSpectator(p)
      return
    }
    if (p.respawnAt == 0.0 || p.match.elapsed < p.respawnAt) return
    p.match.rules.respawn(p.player.uniqueId.toString())
    p.respawnAt = 0.0
    p.attacker = null
    check(p.player.teleport(team(p.match, p.team).spawn.location()))
    equip(p)
  }

  private fun giveResources(victim: BwMember, killer: BwMember) {
    val allowed = files.sba.getStringList("running-generator-drops").toSet()
    victim.player.inventory.storageContents
        .filterNotNull()
        .filter { it.type.name in allowed }
        .forEach { item ->
          killer.player.inventory.addItem(item.clone()).values.forEach {
            drop(killer.match, killer.player.location, it)
          }
        }
  }

  private fun rewardConfigured() =
      listOf("kill", "win", "final-kill", "bed-destroy").any {
        bedWarsRewardAmount(it, files.config.getDouble("vault.reward.$it")) > 0
      }

  private fun reward(id: UUID, event: String, type: String) {
    val amount = bedWarsRewardAmount(type, files.config.getDouble("vault.reward.$type"))
    if (files.config.getBoolean("vault.enable")) economy?.payOnce("$event:$type:$id", id, amount)
  }

  private fun finish(match: BwMatch, winner: String?) {
    if (match.phase != BwPhase.RUNNING) return
    match.phase = BwPhase.ENDING
    match.ending = match.config.postGameWaiting.toDouble()
    for ((id, team) in match.roster) {
      val win = team == winner && match.rules.fighters[id.toString()]?.active == true
      stats.record(
          id,
          "${match.id}:finish:$id",
          mapOf(
              (if (win) BedWarsStat.WINS else BedWarsStat.LOSSES) to 1,
              BedWarsStat.SCORE to
                  files.config.getInt(
                      "statistics.scores.${if (win) "win" else "lose"}",
                      if (win) 70 else 0,
                  ),
          ),
      )
      if (win) reward(id, "${match.id}:finish", "win")
    }
    broadcast(match, winner?.let { "勝者: $it" } ?: "引き分け")
  }

  private fun leave(p: BwMember, remember: Boolean = true) {
    val match = p.match
    p.recovering = true
    try {
      if (
          !store.restore(
              p.player,
              mainLobbyPoint(files.config, match.phase == BwPhase.ENDING)?.location(),
          )
      )
          return
      match.members.remove(p.player.uniqueId)
      members.remove(p.player.uniqueId)
      chatPlayers.remove(p.player.uniqueId)
      explosion?.forget(p.player.uniqueId)
      runCatching { display.restore(p.player) }
      if (remember && match.phase == BwPhase.RUNNING && !p.spectator)
          rejoin[p.player.uniqueId] = Triple(match.config.name, match.id, p.team)
      match.rules.eliminate(p.player.uniqueId.toString())
      if (match.phase == BwPhase.RUNNING && match.rules.canFinish())
          finish(match, match.rules.winner())
    } finally {
      p.recovering = false
    }
  }

  private fun reset(match: BwMatch) {
    match.members.values.toList().forEach { p ->
      runCatching { leave(p, false) }
          .onFailure {
            plugin.logger.severe("BedWars member recovery deferred (${it.javaClass.simpleName})")
          }
    }
    if (match.members.isNotEmpty()) return // Real death screens defer until respawn.
    match.shop?.close()
    match.shop = null
    match.specials?.clear()
    match.specials = null
    match.chests.values.forEach { it.clear() }
    match.chests.clear()
    cleanupEntities(match)
    match.terrain.restore()
    releaseTickets(match)
    match.placed.clear()
    match.upgrades.clear()
    match.traps.clear()
    match.roster.clear()
    match.displays.clear()
    match.generatorLevel.indices.forEach {
      match.generatorLevel[it] = match.config.generators[it].startLevel
    }
    match.phase = BwPhase.WAITING
    match.id = UUID.randomUUID().toString()
    match.elapsed = 0.0
    match.countdown = match.config.countdown.toDouble()
    match.rules = BwRules()
    match.dirty = false
  }

  private fun abort(match: BwMatch) {
    match.phase = BwPhase.ENDING
    match.ending = 0.0
    reset(match)
  }

  private fun team(match: BwMatch, name: String) = match.config.teams.single { it.name == name }

  private fun broadcast(match: BwMatch, message: String) {
    match.members.values.forEach { it.player.sendMessage(message) }
  }

  private fun key(block: org.bukkit.block.Block) = "${block.x},${block.y},${block.z}"

  private fun own(match: BwMatch, entity: Entity, owner: Player? = null) {
    entity.isPersistent = false
    entity.persistentDataContainer.set(entityKey, PersistentDataType.STRING, match.id)
    if (owner != null)
        entity.persistentDataContainer.set(
            ownerKey,
            PersistentDataType.STRING,
            owner.uniqueId.toString(),
        )
    match.entities.add(entity.uniqueId)
  }

  private val splitterKey = NamespacedKey(plugin, "bedwars_splitter")

  private fun drop(
      match: BwMatch,
      location: Location,
      item: ItemStack,
      splittable: Boolean = false,
  ) {
    val entity = location.world!!.dropItem(location, item)
    entity.velocity = org.bukkit.util.Vector(0, 0, 0)
    own(match, entity)
    if (
        splittable &&
            item.type.name in files.sba.getStringList("generator-splitter.allowed-materials")
    )
        entity.persistentDataContainer.set(splitterKey, PersistentDataType.BYTE, 1.toByte())
  }

  private fun cleanupEntities(match: BwMatch) {
    // Tagged resources/NPCs must never survive a crashed match and leak into normal play.
    Bukkit.getWorld(match.config.world)
        ?.entities
        ?.filter {
          it.persistentDataContainer.has(entityKey, PersistentDataType.STRING) &&
              (it.uniqueId in match.entities || match.config.contains(it.location))
        }
        ?.forEach { it.remove() }
    match.entities.forEach { Bukkit.getEntity(it)?.remove() }
    match.entities.clear()
  }

  private fun acquireTickets(match: BwMatch) {
    val world = Bukkit.getWorld(match.config.world) ?: error("Arena world unavailable")
    if (!files.config.getBoolean("use-chunk-tickets-if-available", true)) return
    val x1 =
        minOf(
            kotlin.math.floor(match.config.pos1.x).toInt(),
            kotlin.math.floor(match.config.pos2.x).toInt(),
        ) shr 4
    val x2 =
        maxOf(
            kotlin.math.floor(match.config.pos1.x).toInt(),
            kotlin.math.floor(match.config.pos2.x).toInt(),
        ) shr 4
    val z1 =
        minOf(
            kotlin.math.floor(match.config.pos1.z).toInt(),
            kotlin.math.floor(match.config.pos2.z).toInt(),
        ) shr 4
    val z2 =
        maxOf(
            kotlin.math.floor(match.config.pos1.z).toInt(),
            kotlin.math.floor(match.config.pos2.z).toInt(),
        ) shr 4
    require((x2 - x1 + 1).toLong() * (z2 - z1 + 1) <= 1024) { "Arena too large for chunk tickets" }
    for (x in x1..x2) for (z in z1..z2) {
      world.addPluginChunkTicket(x, z, plugin)
      match.tickets.add(x to z)
    }
  }

  private fun releaseTickets(match: BwMatch) {
    Bukkit.getWorld(match.config.world)?.let { world ->
      match.tickets.forEach { world.removePluginChunkTicket(it.first, it.second, plugin) }
    }
    match.tickets.clear()
  }

  private fun removeBed(match: BwMatch, team: BwTeam) {
    val block = team.bed.location().block
    val data = block.blockData as? Bed ?: error("Configured target is not a bed")
    val other =
        block.getRelative(if (data.part == Bed.Part.FOOT) data.facing else data.facing.oppositeFace)
    match.terrain.beforeChange(block)
    match.terrain.beforeChange(other)
    block.setType(Material.AIR, false)
    other.setType(Material.AIR, false)
  }

  private fun resourceInterval(match: BwMatch, index: Int): Double {
    val generator = match.config.generators[index]
    return generatorIntervalTicks(
        files.config.getDouble(
            "resources.${generator.type}.interval",
            when (generator.type) {
              "iron" -> 2.5
              "gold" -> 8.0
              "diamond" -> 30.0
              else -> 60.0
            },
        ),
        match.generatorLevel[index],
    ) / 20.0
  }

  private fun generate(match: BwMatch) {
    val schedule =
        files.sba
            .getConfigurationSection("upgrades.time")
            ?.getKeys(false)
            ?.associateWith { files.sba.getInt("upgrades.time.$it") }
            .orEmpty()
    for ((index, generator) in match.config.generators.withIndex()) {
      val tier =
          if (files.sba.getBoolean("upgrades.timer-upgrades-enabled", true))
              timedGeneratorLevel(generator.type, match.elapsed.toInt(), schedule)
          else 1
      val forgeTeam =
          generator.team
              ?: match.config.teams
                  .minByOrNull { t ->
                    t.spawn.location().distanceSquared(generator.point.location())
                  }
                  ?.name
      val forge =
          if (generator.type in setOf("iron", "gold"))
              (match.upgrades[forgeTeam]?.get("forge") ?: 0) * .2
          else 0.0
      val nextLevel =
          generator.startLevel +
              (tier - 1) * files.sba.getDouble("upgrades.multiplier", .25) +
              forge
      if (nextLevel != match.generatorLevel[index]) {
        match.generatorLevel[index] = nextLevel
        if (files.sba.getBoolean("upgrades.show-upgrade-message", true))
            broadcast(match, "${generator.type} generator upgraded")
      }
      if (match.elapsed >= match.generatorNext[index]) {
        val location = generator.point.location()
        val material = BedWarsShop.resource(generator.type)
        val nearby =
            location.world!!
                .getNearbyEntities(location, 2.0, 2.0, 2.0)
                .filterIsInstance<Item>()
                .filter {
                  it.itemStack.type == material &&
                      it.persistentDataContainer.get(entityKey, PersistentDataType.STRING) ==
                          match.id
                }
                .sumOf { it.itemStack.amount }
        val roman = listOf("I", "II", "III", "IV")[tier.coerceIn(1, 4) - 1]
        val key =
            generator.type.replaceFirstChar { it.uppercaseChar() } +
                if (generator.type in setOf("diamond", "emerald")) "-$roman" else ""
        val cap =
            if (generator.maxSpawnedResources >= 0) generator.maxSpawnedResources
            else files.sba.getInt("upgrades.limit.$key", -1)
        val amount = generatorAmount(nextLevel, kotlin.random.Random.nextDouble()).coerceAtMost(64)
        val spawn = if (cap >= 0) minOf(amount, (cap - nearby).coerceAtLeast(0)) else amount
        if (spawn > 0) drop(match, location, ItemStack(material, spawn), true)
        match.generatorNext[index] = match.elapsed + resourceInterval(match, index)
      }
      match.displays[index]?.text =
          "${generator.type} ${tier}: ${kotlin.math.ceil((match.generatorNext[index] - match.elapsed).coerceAtLeast(0.0)).toInt()}s"
    }
  }

  private fun createDisplays(match: BwMatch) {
    if (!files.sba.getBoolean("floating-generator.enabled", true)) return
    for ((index, generator) in match.config.generators.withIndex()) {
      if (!generator.hologramEnabled) continue
      val mapping =
          files.sba.getString(
              "floating-generator.mapping.${BedWarsShop.resource(generator.type).name}"
          ) ?: continue
      val material = Material.matchMaterial(mapping) ?: error("Invalid floating resource mapping")
      val point =
          generator.point
              .location()
              .add(0.0, files.sba.getDouble("floating-generator.height", 2.5), 0.0)
      val floating = point.world!!.spawn(point, ItemDisplay::class.java)
      floating.setItemStack(ItemStack(material))
      floating.billboard = Display.Billboard.CENTER
      own(match, floating)
      val text = point.world!!.spawn(point.clone().subtract(0.0, .5, 0.0), TextDisplay::class.java)
      text.billboard = Display.Billboard.CENTER
      text.text = generator.type
      own(match, text)
      match.displays[index] = text
    }
  }

  private fun spawnStores(match: BwMatch) {
    val specials =
        BedWarsSpecials(
            plugin,
            { id ->
              members[id]
                  ?.takeIf { it.match === match && !it.spectator }
                  ?.let { team(match, it.team).color }
            },
            { player ->
              members[player.uniqueId]
                  ?.let { member ->
                    match.members.values
                        .filter { !it.spectator && it.team != member.team && it.respawnAt == 0.0 }
                        .map { it.player }
                  }
                  .orEmpty()
            },
            { player, loc, material -> placeSpecial(player, loc, material) },
            { player ->
              members[player.uniqueId]?.let { it.match === match && combatReady(it) } == true
            },
            files.config.getConfigurationSection("specials"),
            { entity, owner -> own(match, entity, Bukkit.getPlayer(owner)) },
            { _, loc -> match.config.contains(loc) && !protectedArea(match, loc) },
            { error -> guarded(match) { throw error } },
        )
    match.specials = specials
    plugin.server.pluginManager.registerEvents(specials, plugin)
    match.shop =
        BedWarsShop(plugin, specials, File(folder, "SBA/quickbuy")).also {
          plugin.server.pluginManager.registerEvents(it, plugin)
        }
    for (store in match.config.stores) {
      val villager =
          store.point.location().world!!.spawn(store.point.location(), Villager::class.java)
      villager.setAI(false)
      villager.isInvulnerable = true
      villager.isSilent = true
      villager.isCollidable = false
      val npc =
          files.sba.getBoolean("npc.enabled", true) &&
              files.sba.getBoolean("replace-stores-with-npc", true)
      val label = if (store.shop == "upgradeShop.yml") "upgrade-shop" else "normal-shop"
      villager.customName =
          if (npc)
              files.sba.getStringList("shop.$label.entity-name").joinToString(" ").ifBlank {
                if (store.shop == "upgradeShop.yml") "TEAM UPGRADES" else "ITEM SHOP"
              }
          else store.name
      villager.isCustomNameVisible = true
      villager.persistentDataContainer.set(
          NamespacedKey(plugin, "bedwars_shop"),
          PersistentDataType.STRING,
          store.shop,
      )
      own(match, villager)
    }
  }

  private fun catalog(name: String) =
      catalogs.getOrPut(name) {
        check(name.matches(Regex("[A-Za-z0-9_-]+\\.yml")))
        val source = File(folder, name)
        check(source.isFile) { "Shop file is unavailable" }
        BedWarsShopCatalog.load(source) { plugin.logger.warning(it) }
      }

  private fun openShop(
      player: Player,
      upgrades: Boolean,
      name: String = if (upgrades) "upgradeShop.yml" else "shop.yml",
  ) {
    val p = members[player.uniqueId] ?: error("試合に参加してください")
    check(combatReady(p)) { "今は購入できません" }
    p.match.shop!!.open(
        player,
        catalog(name),
        team(p.match, p.team).color,
        { members[player.uniqueId] === p && combatReady(p) },
        { _, entry -> buyUpgrade(p, entry) },
        { _, _ -> applyUpgrades(p) },
        upgrades,
        quote = { _, entry -> quote(p, entry, upgrades) },
        replaceSword = files.sba.getBoolean("replace-sword-on-upgrade", true),
    )
  }

  private fun equipSpectator(p: BwMember) {
    p.player.inventory.clear()
    for (name in listOf("teleporter", "tracker")) {
      if (!files.sba.getBoolean("spectator.$name.enabled", true)) continue
      val material =
          Material.matchMaterial(
              files.sba.getString(
                  "spectator.$name.material",
                  if (name == "teleporter") "REPEATER" else "COMPASS",
              )!!
          ) ?: error("Invalid spectator material")
      val item = ItemStack(material)
      item.editMeta { meta ->
        meta.setDisplayName(files.sba.getString("spectator.$name.name", "Players"))
        meta.persistentDataContainer.set(
            NamespacedKey(plugin, "bedwars_viewer"),
            PersistentDataType.STRING,
            name,
        )
      }
      p.player.inventory.setItem(
          files.sba
              .getInt("spectator.$name.slot", if (name == "teleporter") 0 else 4)
              .coerceIn(0, 8),
          item,
      )
    }
  }

  private fun combatReady(p: BwMember) =
      p.match.phase == BwPhase.RUNNING &&
          !p.spectator &&
          p.respawnAt == 0.0 &&
          !p.recovering &&
          !p.player.isDead

  private fun quote(p: BwMember, entry: BedWarsShopEntry, upgrades: Boolean): BedWarsPrice? {
    if (!upgrades) return entry.price
    val kind = entry.property
    val current = p.match.upgrades[p.team]?.get(kind) ?: 0
    return upgradePrice(kind, current, entry.price, files.sba)
  }

  private fun buyUpgrade(p: BwMember, entry: BedWarsShopEntry): Boolean {
    if (!combatReady(p)) return false
    val kind = entry.property
    val levels = p.match.upgrades.getOrPut(p.team) { linkedMapOf() }
    val current = levels[kind] ?: 0
    when (kind) {
      "protection",
      "sharpness",
      "efficiency" -> {
        val label = kind.replaceFirstChar { it.uppercaseChar() }
        if (
            current >=
                files.sba.getInt(
                    "upgrades.limit.$label",
                    if (kind == "sharpness") 1 else if (kind == "efficiency") 2 else 4,
                )
        )
            return false
        levels[kind] = current + 1
        p.match.members.values
            .filter { it.team == p.team && combatReady(it) }
            .forEach { applyUpgrades(it) }
      }
      "forge" -> {
        val property = entry.properties.firstOrNull().orEmpty()
        val increment = (property["add-levels"] as? Number)?.toDouble() ?: .2
        val max = (property["max-level"] as? Number)?.toDouble() ?: 2.0
        if (!forgeAvailable(current, increment, max)) return false
        levels[kind] = current + 1
      }
      "healpool" -> {
        if (current > 0) return false
        levels[kind] = 1
      }
      "blindtrap",
      "minertrap",
      "trap" -> {
        if (kind == "trap") trapEffects(entry) // Validate before queuing/debit commit.
        p.match.traps.getOrPut(p.team) { mutableListOf() }.add(entry)
      }
      else -> return false
    }
    return true
  }

  private fun applyUpgrades(p: BwMember) {
    val levels = p.match.upgrades[p.team].orEmpty()
    for (item in p.player.inventory.contents.filterNotNull()) {
      val type = item.type.name
      val mapping =
          when {
            type.endsWith("SWORD") -> "sharpness" to org.bukkit.enchantments.Enchantment.SHARPNESS
            type.endsWith("PICKAXE") ->
                "efficiency" to org.bukkit.enchantments.Enchantment.EFFICIENCY
            type.endsWith("HELMET") ||
                type.endsWith("CHESTPLATE") ||
                type.endsWith("LEGGINGS") ||
                type.endsWith("BOOTS") ->
                "protection" to org.bukkit.enchantments.Enchantment.PROTECTION
            else -> null
          }
      if (mapping != null && (levels[mapping.first] ?: 0) > 0)
          item.addUnsafeEnchantment(mapping.second, levels.getValue(mapping.first))
    }
  }

  private fun trapEffects(entry: BedWarsShopEntry): List<PotionEffect> {
    val raw = entry.properties.firstOrNull()?.get("effects") as? List<*> ?: emptyList<Any>()
    return raw.map { effect ->
      val data = effect as? Map<*, *> ?: error("Invalid trap effect")
      val type =
          Registry.EFFECT.get(NamespacedKey.minecraft(data["type"].toString()))
              ?: error("Invalid trap potion")
      PotionEffect(
          type,
          (data["duration"] as? Number)?.toInt() ?: error("Trap duration missing"),
          ((data["level"] as? Number)?.toInt() ?: 1) - 1,
      )
    }
  }

  private fun traps(match: BwMatch) {
    val range = files.sba.getDouble("upgrades.trap-detection-range", 7.0)
    for ((teamName, queue) in match.traps) {
      val trap = queue.firstOrNull() ?: continue
      val intruder =
          match.members.values.firstOrNull {
            combatReady(it) &&
                it.team != teamName &&
                it.player.location.distanceSquared(team(match, teamName).bed.location()) <=
                    range * range
          } ?: continue
      val effects =
          when (trap.property) {
            "blindtrap" -> listOf(PotionEffect(PotionEffectType.BLINDNESS, 60, 2))
            "minertrap" -> listOf(PotionEffect(PotionEffectType.MINING_FATIGUE, 200, 2))
            else -> trapEffects(trap)
          }
      val targetTeam = trap.properties.firstOrNull()?.get("target") == "team"
      if (targetTeam)
          match.members.values
              .filter { it.team == teamName && combatReady(it) }
              .forEach { it.player.addPotionEffects(effects) }
      else intruder.player.addPotionEffects(effects)
      queue.removeAt(0)
      match.members.values
          .filter { it.team == teamName }
          .forEach {
            it.player.sendMessage("罠が作動しました！")
            it.player.playSound(it.player.location, Sound.ENTITY_ENDER_DRAGON_GROWL, 1f, 1f)
          }
    }
  }

  private fun protectedArea(match: BwMatch, location: Location): Boolean {
    val generatorRadius = files.sba.getDouble("automatic-protection.spawner-diameter", 5.0) / 2
    val teamRadius = files.sba.getDouble("automatic-protection.team-spawn-diameter", 3.0) / 2
    val storeRadius = files.sba.getDouble("automatic-protection.store-diameter", 3.0) / 2
    return match.config.generators.any {
      it.point.location().distanceSquared(location) <= generatorRadius * generatorRadius
    } ||
        match.config.teams.any {
          it.spawn.location().distanceSquared(location) <= teamRadius * teamRadius
        } ||
        match.config.stores.any {
          it.point.location().distanceSquared(location) <= storeRadius * storeRadius
        }
  }

  private fun placeSpecial(player: Player, location: Location, material: Material): Boolean {
    val p = members[player.uniqueId] ?: return false
    if (
        !combatReady(p) ||
            !p.match.config.contains(location) ||
            protectedArea(p.match, location) ||
            (material != Material.AIR && !location.block.type.isAir)
    )
        return false
    if (material == Material.AIR && key(location.block) !in p.match.placed) return false
    p.match.terrain.beforeChange(location.block)
    location.block.setType(material, false)
    p.match.placed.add(key(location.block))
    return true
  }

  private fun show(match: BwMatch) {
    val active = match.phase == BwPhase.RUNNING
    if (
        !files.sba.getBoolean(
            if (active) "game-scoreboard.enabled" else "lobby-scoreboard.enabled",
            true,
        )
    )
        return
    display.tabHealth = files.sba.getBoolean("show-health-in-tablist", true)
    display.nameHealth = files.sba.getBoolean("show-health-under-player-name", true)
    val lines =
        mutableListOf(
            "Map: ${match.config.name}",
            "Players: ${match.members.values.count { !it.spectator }}/${match.config.maxPlayers}",
        )
    if (active) {
      lines.add("Time: ${match.elapsed.toInt()}s")
      match.config.teams.forEach { t ->
        lines.add(
            "${if (match.rules.bed(t.name)) "✓" else "✗"} ${t.name}: ${match.rules.fighters.values.count { it.team == t.name && it.active }}"
        )
      }
    } else
        lines.add(
            if (match.phase == BwPhase.COUNTDOWN)
                "Start: ${kotlin.math.ceil(match.countdown).toInt()}s"
            else match.phase.name
        )
    match.members.values.forEach { display.show(it.player, "BEDWARS", lines) }
  }

  @EventHandler(ignoreCancelled = true)
  fun chat(event: io.papermc.paper.event.player.AsyncChatEvent) {
    if (event.player.uniqueId !in chatPlayers) return
    event.isCancelled = true
    val message =
        net.kyori.adventure.text.serializer.plain.PlainTextComponentSerializer.plainText()
            .serialize(event.message())
    Bukkit.getScheduler()
        .runTask(
            plugin,
            Runnable {
              val p = members[event.player.uniqueId] ?: return@Runnable
              val lobby = p.match.phase in setOf(BwPhase.WAITING, BwPhase.COUNTDOWN)
              val all =
                  message.startsWith(
                      files.sba.getString("chat-format.game-chat.all-chat-prefix", "@a")!!
                  )
              val path =
                  if (lobby) "chat-format.lobby-chat.format"
                  else if (p.spectator) "chat-format.game-chat.format-spectator"
                  else if (all) "chat-format.game-chat.all-chat-format"
                  else "chat-format.game-chat.format"
              val chatEnabled =
                  files.sba.getBoolean(
                      if (lobby) "chat-format.lobby-chat.enabled"
                      else "chat-format.game-chat.enabled",
                      true,
                  )
              val template =
                  if (chatEnabled) files.sba.getString(path, "%player% > %message%")!!
                  else "%player% > %message%"
              val text =
                  template
                      .replace("%player%", p.player.name)
                      .replace("%team%", p.team)
                      .replace("%color%", if (p.spectator) "§7" else teamColor(p.match, p.team))
                      .replace(
                          "%message%",
                          if (all)
                              message.removePrefix(
                                  files.sba.getString(
                                      "chat-format.game-chat.all-chat-prefix",
                                      "@a",
                                  )!!
                              )
                          else message,
                      )
              p.match.members.values
                  .filter {
                    lobby ||
                        all ||
                        if (p.spectator) it.spectator else !it.spectator && it.team == p.team
                  }
                  .forEach { it.player.sendMessage(text) }
            },
        )
  }

  private fun teamColor(match: BwMatch, name: String): String =
      when (team(match, name).color) {
        "RED" -> "§c"
        "LIGHT_BLUE" -> "§9"
        "BLUE" -> "§1"
        "YELLOW" -> "§e"
        "LIME" -> "§a"
        "GREEN" -> "§2"
        "CYAN" -> "§b"
        "WHITE" -> "§f"
        "PINK" -> "§d"
        "LIGHT_GRAY" -> "§7"
        "GRAY" -> "§8"
        "ORANGE" -> "§6"
        "PURPLE" -> "§5"
        else -> "§f"
      }

  @EventHandler
  fun pluginEnabled(event: PluginEnableEvent) {
    if (enabled && externalEnabled()) {
      plugin.logger.warning("External BedWars enabled; internal module stopped")
      disable()
    }
  }

  @EventHandler
  fun quit(event: PlayerQuitEvent) {
    val p = members[event.player.uniqueId] ?: return
    commandLeave(event.player)
    // A disconnected death screen cannot block everyone else's terrain recovery.
    if (members.remove(event.player.uniqueId) != null) {
      chatPlayers.remove(event.player.uniqueId)
      explosion?.forget(event.player.uniqueId)
      p.match.members.remove(event.player.uniqueId)
      p.match.rules.eliminate(event.player.uniqueId.toString())
      if (!p.spectator && p.match.phase == BwPhase.RUNNING)
          rejoin[event.player.uniqueId] = Triple(p.match.config.name, p.match.id, p.team)
    }
  }

  @EventHandler(priority = EventPriority.HIGHEST, ignoreCancelled = true)
  fun damage(event: EntityDamageEvent) {
    val victim = event.entity as? Player
    val p = victim?.let { members[it.uniqueId] }
    val damager = (event as? EntityDamageByEntityEvent)?.damager
    val attackId =
        when (damager) {
          is Player -> damager.uniqueId
          is Projectile ->
              (damager.shooter as? Player)?.uniqueId
                  ?: damager.persistentDataContainer
                      .get(ownerKey, PersistentDataType.STRING)
                      ?.let(UUID::fromString)
          else ->
              damager
                  ?.persistentDataContainer
                  ?.get(ownerKey, PersistentDataType.STRING)
                  ?.let(UUID::fromString)
        }
    val attacker = attackId?.let { members[it] }
    if (p == null) {
      if (
          event.entity is IronGolem &&
              event.entity.persistentDataContainer.has(entityKey, PersistentDataType.STRING)
      ) {
        val owner =
            event.entity.persistentDataContainer.get(ownerKey, PersistentDataType.STRING)?.let {
              members[UUID.fromString(it)]
            }
        if (
            attacker == null ||
                owner == null ||
                attacker.match !== owner.match ||
                attacker.team == owner.team ||
                !combatReady(attacker)
        )
            event.isCancelled = true
      } else if (
          attacker != null ||
              event.entity.persistentDataContainer.has(entityKey, PersistentDataType.STRING)
      )
          event.isCancelled = true
      return
    }
    if (
        !combatReady(p) ||
            p.protectedUntil > System.currentTimeMillis() ||
            damager != null &&
                (attacker == null ||
                    attacker.match !== p.match ||
                    !combatReady(attacker) ||
                    attacker !== p && attacker.team == p.team && !setting(p.match, "friendlyfire"))
    ) {
      event.isCancelled = true
      return
    }
    if (
        attacker === p &&
            (damager is Fireball &&
                !files.config.getBoolean("specials.throwable-fireball.damage-thrower", true) ||
                damager is TNTPrimed &&
                    !files.config.getBoolean("specials.auto-igniteable-tnt.damage-placer", true))
    ) {
      event.isCancelled = true
      return
    }
    if (attacker != null) {
      p.attacker = attacker.player.uniqueId
      p.attackedAt = System.currentTimeMillis()
    }
    if (event.finalDamage >= victim.health || event.cause == EntityDamageEvent.DamageCause.VOID) {
      event.isCancelled = true
      guarded(p.match) {
        death(
            p,
            attackId ?: p.attacker?.takeIf { System.currentTimeMillis() - p.attackedAt <= 10_000 },
        )
      }
    }
  }

  @EventHandler(priority = EventPriority.HIGHEST)
  fun realDeath(event: PlayerDeathEvent) {
    val p = members[event.entity.uniqueId] ?: return
    event.drops.clear()
    event.droppedExp = 0
    event.keepInventory = true
    event.keepLevel = true
    event.deathMessage(null)
    guarded(p.match) { death(p, event.entity.killer?.uniqueId) }
  }

  @EventHandler(ignoreCancelled = true)
  fun food(event: FoodLevelChangeEvent) {
    if (event.entity.uniqueId in members && files.config.getBoolean("disable-hunger", true))
        event.isCancelled = true
  }

  @EventHandler(ignoreCancelled = true)
  fun durability(event: PlayerItemDamageEvent) {
    if (event.player.uniqueId in members && files.sba.getBoolean("disable-item-damage", true))
        event.isCancelled = true
  }

  @EventHandler(priority = EventPriority.HIGHEST, ignoreCancelled = true)
  fun move(event: PlayerMoveEvent) {
    val p = members[event.player.uniqueId] ?: return
    if (p.recovering || event is PlayerTeleportEvent) return
    if (p.match.phase == BwPhase.RUNNING && !p.match.config.contains(event.to)) {
      if (p.spectator || p.respawnAt > 0) event.to = p.match.config.spec.location()
      else
          guarded(p.match) {
            death(p, p.attacker?.takeIf { System.currentTimeMillis() - p.attackedAt <= 10_000 })
          }
    }
  }

  @EventHandler(priority = EventPriority.HIGHEST, ignoreCancelled = true)
  fun teleport(event: PlayerTeleportEvent) {
    val p = members[event.player.uniqueId] ?: return
    if (p.recovering || event.cause == PlayerTeleportEvent.TeleportCause.PLUGIN) return
    if (!combatReady(p) || !p.match.config.contains(event.to)) event.isCancelled = true
  }

  @EventHandler(priority = EventPriority.HIGHEST, ignoreCancelled = true)
  fun command(event: PlayerCommandPreprocessEvent) {
    val p = members[event.player.uniqueId] ?: return
    val name = event.message.substringBefore(' ').removePrefix("/").substringAfter(':').lowercase()
    if (name !in setOf("bw", "bedwars", "bwparty", "party", "shout")) event.isCancelled = true
    else if (name == "shout") {
      event.isCancelled = true
      val message = event.message.substringAfter(' ', "")
      runCatching { shout(event.player, message) }
          .onFailure { event.player.sendMessage(it.message ?: "発言できません") }
    }
  }

  @EventHandler(priority = EventPriority.LOWEST, ignoreCancelled = true)
  fun place(event: BlockPlaceEvent) {
    val p = members[event.player.uniqueId]
    val match = p?.match ?: arenaAt(event.block.location) ?: return
    if (
        p == null ||
            !combatReady(p) ||
            !match.config.contains(event.block.location) ||
            protectedArea(match, event.block.location)
    ) {
      event.isCancelled = true
      return
    }
    guarded(match) { match.terrain.beforeReplaced(event.blockReplacedState) }
    if (match.phase != BwPhase.RUNNING) event.isCancelled = true
  }

  @EventHandler(priority = EventPriority.MONITOR, ignoreCancelled = true)
  fun placed(event: BlockPlaceEvent) {
    val p = members[event.player.uniqueId] ?: return
    if (combatReady(p)) p.match.placed.add(key(event.block))
  }

  @EventHandler(priority = EventPriority.HIGHEST, ignoreCancelled = true)
  fun breakBlock(event: BlockBreakEvent) {
    val p = members[event.player.uniqueId]
    val match = p?.match ?: arenaAt(event.block.location) ?: return
    if (p == null || !combatReady(p) || !match.config.contains(event.block.location)) {
      event.isCancelled = true
      return
    }
    val bed =
        match.config.teams.firstOrNull { t ->
          val original = t.bed.location().block
          original == event.block ||
              (original.blockData as? Bed)?.let { data ->
                original.getRelative(
                    if (data.part == Bed.Part.FOOT) data.facing else data.facing.oppositeFace
                ) == event.block
              } == true
        }
    if (bed != null) {
      event.isCancelled = true
      guarded(match) {
        if (match.rules.destroyBed(bed.name, p.team)) {
          removeBed(match, bed)
          val eventId = "${match.id}:bed:${bed.name}"
          stats.record(
              p.player.uniqueId,
              eventId,
              mapOf(
                  BedWarsStat.BEDS to 1,
                  BedWarsStat.SCORE to files.config.getInt("statistics.scores.bed-destroy", 30),
              ),
              p.player.name,
          )
          reward(p.player.uniqueId, eventId, "bed-destroy")
          broadcast(match, "${bed.name} のベッドが破壊されました。")
        }
      }
      return
    }
    val listed = event.block.type.name in files.config.getStringList("breakable.blocks")
    val allowedMap =
        files.config.getBoolean("breakable.enabled") &&
            if (files.config.getBoolean("breakable.asblacklist")) !listed else listed
    if (
        key(event.block) !in match.placed && !allowedMap ||
            protectedArea(match, event.block.location)
    ) {
      event.isCancelled = true
      return
    }
    guarded(match) {
      match.terrain.beforeChange(event.block)
      match.placed.remove(key(event.block))
    }
    if (match.phase != BwPhase.RUNNING) event.isCancelled = true
  }

  private fun arenaAt(location: Location) =
      matches.values.firstOrNull {
        it.config.contains(location) &&
            (it.phase != BwPhase.WAITING ||
                files.config.getBoolean("preventArenaFromGriefing", true))
      }

  @EventHandler(priority = EventPriority.HIGHEST, ignoreCancelled = true)
  fun explode(event: EntityExplodeEvent) {
    val match = arenaAt(event.location) ?: return
    if (
        match.phase != BwPhase.RUNNING ||
            !event.entity.persistentDataContainer.has(entityKey, PersistentDataType.STRING)
    ) {
      event.isCancelled = true
      return
    }
    val exceptions = files.config.getStringList("destroy-placed-blocks-by-explosion-except").toSet()
    event.blockList().removeIf {
      !files.config.getBoolean("destroy-placed-blocks-by-explosion", true) ||
          key(it) !in match.placed ||
          it.type.name in exceptions ||
          protectedArea(match, it.location)
    }
    event.yield = 0f
    guarded(match) {
      event.blockList().forEach {
        match.terrain.beforeChange(it)
        match.placed.remove(key(it))
      }
    }
    if (match.phase != BwPhase.RUNNING) event.isCancelled = true
  }

  @EventHandler(ignoreCancelled = true)
  fun blockExplosion(event: BlockExplodeEvent) {
    if (arenaAt(event.block.location) != null) event.isCancelled = true
  }

  @EventHandler(priority = EventPriority.HIGHEST, ignoreCancelled = true)
  fun pickup(event: EntityPickupItemEvent) {
    val p = members[event.entity.uniqueId]
    val tagged = event.item.persistentDataContainer.get(entityKey, PersistentDataType.STRING)
    if (p == null) {
      if (tagged != null) event.isCancelled = true
      return
    }
    if (!combatReady(p) || tagged != p.match.id) {
      event.isCancelled = true
      return
    }
    if (files.config.getBoolean("reset-full-spawner-countdown-after-picking", true)) {
      p.match.config.generators.forEachIndexed { i, g ->
        if (
            g.point.location().distanceSquared(event.item.location) <= 4 &&
                event.item.itemStack.type == BedWarsShop.resource(g.type)
        )
            p.match.generatorNext[i] = p.match.elapsed + resourceInterval(p.match, i)
      }
    }
  }

  @EventHandler(priority = EventPriority.MONITOR, ignoreCancelled = true)
  fun splitPickup(event: EntityPickupItemEvent) {
    val player = event.entity as? Player ?: return
    val p = members[player.uniqueId] ?: return
    if (
        !combatReady(p) ||
            !event.item.persistentDataContainer.has(splitterKey, PersistentDataType.BYTE)
    )
        return
    event.item.persistentDataContainer.remove(splitterKey)
    val picked = event.item.itemStack.clone().also { it.amount -= event.remaining }
    if (picked.amount <= 0) return
    val near =
        p.match.members.values.filter {
          it !== p &&
              combatReady(it) &&
              it.team == p.team &&
              withinSplitterCube(
                  it.player.location.x - player.location.x,
                  it.player.location.y - player.location.y,
                  it.player.location.z - player.location.z,
              )
        }
    Bukkit.getScheduler()
        .runTask(
            plugin,
            Runnable {
              if (members[player.uniqueId] !== p || !combatReady(p)) return@Runnable
              near
                  .filter { members[it.player.uniqueId] === it && combatReady(it) }
                  .forEach { member ->
                    member.player.inventory.addItem(picked.clone()).values.forEach {
                      drop(p.match, member.player.location, it)
                    }
                  }
            },
        )
  }

  @EventHandler(ignoreCancelled = true)
  fun dropItem(event: PlayerDropItemEvent) {
    val p = members[event.player.uniqueId] ?: return
    if (
        !combatReady(p) ||
            files.sba.getBoolean("block-item-drops", true) &&
                event.itemDrop.itemStack.type.name !in files.sba.getStringList("allowed-item-drops")
    )
        event.isCancelled = true
    else own(p.match, event.itemDrop)
  }

  @EventHandler(priority = EventPriority.HIGHEST, ignoreCancelled = true)
  fun interact(event: PlayerInteractEvent) {
    val p = members[event.player.uniqueId]
    val block = event.clickedBlock
    if (p == null) {
      if (
          block != null &&
              event.action == org.bukkit.event.block.Action.RIGHT_CLICK_BLOCK &&
              block.state is org.bukkit.block.Sign
      ) {
        val signsFile = File(folder, "sign.yml")
        if (signsFile.isFile) {
          val yaml = YamlConfiguration().also { it.load(signsFile) }
          yaml
              .getMapList("sign")
              .firstOrNull { (it["location"] as? Location)?.block == block }
              ?.get("name")
              ?.toString()
              ?.let { name ->
                event.isCancelled = true
                runCatching { commandJoin(event.player, name) }
                    .onFailure { event.player.sendMessage("BedWars: ${it.message}") }
              }
        }
      }
      if (block != null && arenaAt(block.location) != null) event.isCancelled = true
      return
    }
    if (p.recovering) return
    if (!combatReady(p)) {
      event.isCancelled = true
      if (
          p.spectator &&
              event.item
                  ?.itemMeta
                  ?.persistentDataContainer
                  ?.has(NamespacedKey(plugin, "bedwars_viewer"), PersistentDataType.STRING) == true
      ) {
        display.openSpectators(
            event.player,
            p.match.members.values.filter { combatReady(it) }.map { it.player },
        ) { spectator, target ->
          val active = members[target.uniqueId]
          if (
              members[spectator.uniqueId] === p &&
                  p.spectator &&
                  active != null &&
                  active.match === p.match &&
                  combatReady(active)
          )
              spectator.teleport(target.location)
        }
      }
      return
    }
    if (
        block?.type == Material.ENDER_CHEST &&
            files.config.getBoolean("specials.teamchest.turn-all-enderchests-to-teamchests", true)
    ) {
      event.isCancelled = true
      if (!p.match.config.contains(block.location)) return
      val chest =
          p.match.chests.getOrPut(p.team) {
            Bukkit.createInventory(null, 27, "${p.team} Team chest")
          }
      event.player.openInventory(chest)
    } else if (block?.state is Container) {
      if (!p.match.config.contains(block.location)) event.isCancelled = true
      else guarded(p.match) { p.match.terrain.beforeChange(block) }
    } else if (block != null && p.match.config.contains(block.location))
        guarded(p.match) { p.match.terrain.beforeChange(block) }
  }

  @EventHandler(ignoreCancelled = true)
  fun entityInteract(event: PlayerInteractEntityEvent) {
    val p = members[event.player.uniqueId]
    if (p == null) {
      if (event.rightClicked.persistentDataContainer.has(entityKey, PersistentDataType.STRING))
          event.isCancelled = true
      return
    }
    val store =
        event.rightClicked.persistentDataContainer.get(
            NamespacedKey(plugin, "bedwars_shop"),
            PersistentDataType.STRING,
        )
    if (store != null) {
      event.isCancelled = true
      if (
          !combatReady(p) ||
              event.rightClicked.persistentDataContainer.get(
                  entityKey,
                  PersistentDataType.STRING,
              ) != p.match.id
      )
          return
      guarded(p.match) {
        check(
            event.rightClicked.persistentDataContainer.get(entityKey, PersistentDataType.STRING) ==
                p.match.id
        )
        openShop(event.player, store == "upgradeShop.yml", store)
      }
    } else event.isCancelled = true
  }

  @EventHandler(ignoreCancelled = true)
  fun openInventory(event: InventoryOpenEvent) {
    val location = event.inventory.location
    if (location == null) {
      val p = members[event.player.uniqueId] ?: return
      val inventory = event.inventory
      if (
          inventory.type != InventoryType.CRAFTING &&
              !BedWarsShop.isMenu(inventory) &&
              !display.isMenu(inventory) &&
              p.match.chests.values.none { it === inventory }
      )
          event.isCancelled = true
      return
    }
    val match = arenaAt(location)
    val p = members[event.player.uniqueId]
    if (p != null && (match == null || match !== p.match)) {
      event.isCancelled = true
      return
    }
    if (match == null) return
    if (p == null || p.match !== match || !combatReady(p) || event.inventory.holder is Entity)
        event.isCancelled = true
    else if (location.block.state is Container)
        guarded(match) { match.terrain.beforeChange(location.block) }
  }

  @EventHandler(ignoreCancelled = true)
  fun armorStand(event: PlayerArmorStandManipulateEvent) {
    if (event.player.uniqueId in members || arenaAt(event.rightClicked.location) != null)
        event.isCancelled = true
  }

  @EventHandler(ignoreCancelled = true)
  fun hanging(event: org.bukkit.event.hanging.HangingBreakEvent) {
    if (arenaAt(event.entity.location) != null) event.isCancelled = true
  }

  @EventHandler(ignoreCancelled = true)
  fun fade(event: BlockFadeEvent) {
    if (arenaAt(event.block.location) != null) event.isCancelled = true
  }

  @EventHandler(ignoreCancelled = true)
  fun spread(event: BlockSpreadEvent) {
    if (arenaAt(event.block.location) != null) event.isCancelled = true
  }

  @EventHandler(priority = EventPriority.HIGHEST, ignoreCancelled = true)
  fun click(event: InventoryClickEvent) {
    val p = members[event.whoClicked.uniqueId]
    if (p == null) {
      if (event.view.topInventory.location?.let { arenaAt(it) } != null) event.isCancelled = true
      return
    }
    if (!combatReady(p)) {
      event.isCancelled = true
      return
    }
    if (
        event.slotType == InventoryType.SlotType.ARMOR &&
            files.sba.getBoolean("disable-armor-inventory-movement", true)
    )
        event.isCancelled = true
    if (
        event.view.topInventory.type in setOf(InventoryType.CRAFTING, InventoryType.WORKBENCH) &&
            event.slotType == InventoryType.SlotType.RESULT &&
            !setting(p.match, "allow-crafting")
    )
        event.isCancelled = true
    val top = event.view.topInventory
    val chest =
        top.type in
            setOf(
                InventoryType.CHEST,
                InventoryType.BARREL,
                InventoryType.ENDER_CHEST,
                InventoryType.SHULKER_BOX,
            )
    if (chest && files.sba.getBoolean("block-players-putting-certain-items-onto-chest", true)) {
      val source = if (event.isShiftClick) event.currentItem else event.cursor
      if (
          source?.type?.name?.let {
            it.endsWith("SWORD") ||
                it.endsWith("HELMET") ||
                it.endsWith("CHESTPLATE") ||
                it.endsWith("LEGGINGS") ||
                it.endsWith("BOOTS") ||
                it.endsWith("PICKAXE") ||
                it.endsWith("AXE") ||
                it == "COMPASS"
          } == true
      )
          event.isCancelled = true
      if (event.hotbarButton >= 0 && event.clickedInventory === top) event.isCancelled = true
    }
  }

  @EventHandler(ignoreCancelled = true)
  fun drag(event: InventoryDragEvent) {
    val p = members[event.whoClicked.uniqueId]
    if (p == null) {
      if (event.view.topInventory.location?.let { arenaAt(it) } != null) event.isCancelled = true
      return
    }
    if (!combatReady(p) || event.rawSlots.any { it < event.view.topInventory.size })
        event.isCancelled = true
  }

  @EventHandler(ignoreCancelled = true)
  fun launch(event: ProjectileLaunchEvent) {
    val player = (event.entity.shooter as? Player) ?: return
    val p = members[player.uniqueId] ?: return
    if (!combatReady(p)) {
      event.isCancelled = true
      return
    }
    own(p.match, event.entity, player)
  }

  @EventHandler
  fun egg(event: PlayerEggThrowEvent) {
    if (event.player.uniqueId in members) event.isHatching = false
  }

  @EventHandler
  fun mobDeath(event: EntityDeathEvent) {
    if (event.entity.persistentDataContainer.has(entityKey, PersistentDataType.STRING)) {
      event.drops.clear()
      event.droppedExp = 0
    }
  }

  @EventHandler(ignoreCancelled = true)
  fun arrowPickup(event: PlayerPickupArrowEvent) {
    val tagged =
        event.arrow.persistentDataContainer.get(entityKey, PersistentDataType.STRING) ?: return
    val p = members[event.player.uniqueId]
    if (p == null || !combatReady(p) || p.match.id != tagged) event.isCancelled = true
  }

  @EventHandler(ignoreCancelled = true)
  fun splash(event: PotionSplashEvent) {
    val tagged =
        event.potion.persistentDataContainer.get(entityKey, PersistentDataType.STRING) ?: return
    event.affectedEntities.forEach { target ->
      if (members[target.uniqueId]?.match?.id != tagged) event.setIntensity(target, 0.0)
    }
  }

  @EventHandler(ignoreCancelled = true)
  fun swap(event: PlayerSwapHandItemsEvent) {
    if (members[event.player.uniqueId]?.let { !combatReady(it) } == true) event.isCancelled = true
  }

  @EventHandler(ignoreCancelled = true)
  fun itemMerge(event: ItemMergeEvent) {
    if (
        event.entity.persistentDataContainer.has(entityKey, PersistentDataType.STRING) &&
            files.config.getBoolean("spawner-disable-merge", true)
    )
        event.isCancelled = true
  }

  @EventHandler(ignoreCancelled = true)
  fun hopper(event: InventoryPickupItemEvent) {
    if (event.item.persistentDataContainer.has(entityKey, PersistentDataType.STRING))
        event.isCancelled = true
  }

  @EventHandler(ignoreCancelled = true)
  fun inventoryMove(event: InventoryMoveItemEvent) {
    if (
        event.source.location?.let { arenaAt(it) } != null ||
            event.destination.location?.let { arenaAt(it) } != null
    )
        event.isCancelled = true
  }

  @EventHandler(ignoreCancelled = true)
  fun bucketEmpty(event: PlayerBucketEmptyEvent) {
    val p = members[event.player.uniqueId]
    if (p == null) {
      if (arenaAt(event.block.location) != null) event.isCancelled = true
      return
    }
    if (!combatReady(p) || !p.match.config.contains(event.block.location)) event.isCancelled = true
    else
        guarded(p.match) {
          p.match.terrain.beforeChange(event.block)
          p.match.placed.add(key(event.block))
        }
  }

  @EventHandler(ignoreCancelled = true)
  fun bucketFill(event: PlayerBucketFillEvent) {
    val p = members[event.player.uniqueId]
    if (p == null) {
      if (arenaAt(event.block.location) != null) event.isCancelled = true
      return
    }
    if (!combatReady(p) || key(event.block) !in p.match.placed) event.isCancelled = true
    else guarded(p.match) { p.match.terrain.beforeChange(event.block) }
  }

  @EventHandler(ignoreCancelled = true)
  fun flow(event: BlockFromToEvent) {
    val match = arenaAt(event.toBlock.location) ?: arenaAt(event.block.location) ?: return
    if (!match.config.contains(event.toBlock.location)) {
      event.isCancelled = true
      return
    }
    guarded(match) {
      match.terrain.beforeChange(event.toBlock)
      match.placed.add(key(event.toBlock))
    }
  }

  @EventHandler(ignoreCancelled = true)
  fun piston(event: BlockPistonExtendEvent) {
    if (arenaAt(event.block.location) != null || event.blocks.any { arenaAt(it.location) != null })
        event.isCancelled = true
  }

  @EventHandler(ignoreCancelled = true)
  fun pistonBack(event: BlockPistonRetractEvent) {
    if (arenaAt(event.block.location) != null || event.blocks.any { arenaAt(it.location) != null })
        event.isCancelled = true
  }

  @EventHandler(ignoreCancelled = true)
  fun burn(event: BlockBurnEvent) {
    if (arenaAt(event.block.location) != null) event.isCancelled = true
  }

  @EventHandler(ignoreCancelled = true)
  fun ignite(event: BlockIgniteEvent) {
    if (arenaAt(event.block.location) != null) event.isCancelled = true
  }

  @EventHandler(ignoreCancelled = true)
  fun grow(event: BlockGrowEvent) {
    if (arenaAt(event.block.location) != null) event.isCancelled = true
  }

  @EventHandler(ignoreCancelled = true)
  fun form(event: BlockFormEvent) {
    if (arenaAt(event.block.location) != null) event.isCancelled = true
  }

  @EventHandler(ignoreCancelled = true)
  fun entityBlock(event: EntityChangeBlockEvent) {
    if (arenaAt(event.block.location) != null) event.isCancelled = true
  }
}
