package icu.oyasai.games.tntrun

import icu.oyasai.games.OyasaiGamesPlugin
import icu.oyasai.games.pvp.PlayerStore
import icu.oyasai.games.pvp.PvpEconomy
import icu.oyasai.games.pvp.saveYaml
import java.io.File
import java.util.UUID
import java.util.logging.Level
import net.milkbowl.vault.economy.Economy
import org.bukkit.*
import org.bukkit.attribute.Attribute
import org.bukkit.block.Sign
import org.bukkit.boss.BarColor
import org.bukkit.boss.BarStyle
import org.bukkit.boss.BossBar
import org.bukkit.command.*
import org.bukkit.configuration.file.YamlConfiguration
import org.bukkit.entity.Player
import org.bukkit.entity.Projectile
import org.bukkit.event.*
import org.bukkit.event.block.*
import org.bukkit.event.entity.*
import org.bukkit.event.inventory.*
import org.bukkit.event.player.*
import org.bukkit.event.server.PluginEnableEvent
import org.bukkit.inventory.Inventory
import org.bukkit.inventory.InventoryHolder
import org.bukkit.inventory.ItemStack
import org.bukkit.scheduler.BukkitTask
import org.bukkit.scoreboard.Scoreboard

internal class RunMatch(val config: RunArena, folder: File) {
  var rules = RunRules(config.minimum, config.countdown, config.limit)
  var id = UUID.randomUUID()
  val terrain = RunTerrain(File(folder, "terrain/${config.name}.yml"), config)
  val members = linkedMapOf<UUID, RunMember>()
  val votes = hashSetOf<UUID>()
  val places = linkedMapOf<Int, MutableList<String>>()
  var regenUntil = 0L
  var bar: BossBar? = null
}

internal class RunMember(val player: Player, val match: RunMatch, val board: Scoreboard) {
  var spectator = false
}

internal class RunShopHolder : InventoryHolder {
  lateinit var contents: Inventory
  val offers = linkedMapOf<Int, String>()

  override fun getInventory() = contents
}

class TntrunModule(private val plugin: OyasaiGamesPlugin) : Listener, TabExecutor {
  private val folder = File(plugin.dataFolder, "tntrun")
  private val store = PlayerStore(File(folder, "players"))
  private val arenas = linkedMapOf<String, RunMatch>()
  private val players = linkedMapOf<UUID, RunMember>()
  private val parties = RunParties()
  private val restoringPlayers = hashSetOf<UUID>()
  private lateinit var data: RunData
  private var global = YamlConfiguration()
  private var signs = YamlConfiguration()
  private var titles = YamlConfiguration()
  private var bars = YamlConfiguration()
  private var shop = YamlConfiguration()
  private var bank: PvpEconomy? = null
  private var provider: Economy? = null
  private var task: BukkitTask? = null
  private var enabled = false
  private var tick = 0L
  private var internalTeleport = false
  private val recovery =
      object : Listener {
        @EventHandler
        fun joined(e: PlayerJoinEvent) {
          recover(e.player)
        }

        @EventHandler
        fun respawn(e: PlayerRespawnEvent) {
          Bukkit.getScheduler().runTask(plugin, Runnable { recover(e.player) })
        }
      }

  private fun legacyEnabled() =
      plugin.server.pluginManager.plugins.any {
        it.isEnabled && it.name.equals("TNTRun_reloaded", true)
      }

  fun enable() {
    bank = null
    provider = null
    HandlerList.unregisterAll(recovery)
    plugin.server.pluginManager.registerEvents(recovery, plugin)
    // Do not interfere with an active external game, including during hot reload.
    if (legacyEnabled()) {
      plugin.logger.warning("TNTRun_reloaded is enabled; tntrun module will not start")
      return
    }
    // Recovery remains available with the module switched off.
    if (
        !folder.exists() &&
            plugin.config.getBoolean("games.tntrun.enabled", true) &&
            !legacyEnabled()
    )
        importTntrun(folder, File(plugin.dataFolder.parentFile, "TNTRun_reloaded"), plugin.logger)
    if (folder.exists()) {
      data = RunData(folder)
      if (plugin.server.pluginManager.isPluginEnabled("Vault")) {
        provider = Bukkit.getServicesManager().getRegistration(Economy::class.java)?.provider
        bank = provider?.let { PvpEconomy(folder, it) }
      }
      File(folder, "purchases")
          .listFiles()
          ?.filter { it.extension == "yml" }
          ?.forEach { file ->
            runCatching { recoverPurchase(file, data, bank ?: error("Economy unavailable")) }
                .onFailure {
                  plugin.logger.warning(
                      "TNTRun purchase recovery requires administrator reconciliation"
                  )
                }
          }
      bank?.retry()
      results().forEach { file ->
        runCatching { deliverResult(file, folder, data, bank) }
            .onFailure { plugin.logger.warning("TNTRun result recovery is pending") }
      }
    }
    File(folder, "terrain")
        .listFiles()
        ?.filter { it.extension == "yml" }
        ?.forEach { file ->
          runCatching {
                restoreTerrainFile(
                    file,
                    { world, cell, blockData ->
                      val w =
                          Bukkit.getWorld(world) ?: error("Terrain recovery world is unavailable")
                      w.getBlockAt(cell.x, cell.y, cell.z)
                          .setBlockData(Bukkit.createBlockData(blockData), false)
                    },
                    { Bukkit.getWorld(it)!!.save() },
                )
              }
              .onFailure { plugin.logger.warning("TNTRun terrain recovery remains pending") }
        }
    Bukkit.getOnlinePlayers().forEach { recover(it) }
    if (!plugin.config.getBoolean("games.tntrun.enabled", true)) return
    if (legacyEnabled()) {
      plugin.logger.warning("TNTRun_reloaded is enabled; tntrun module will not start")
      return
    }
    folder.mkdirs()
    if (!::data.isInitialized) data = RunData(folder)
    global = readYaml(File(folder, "config.yml"))
    signs = readYaml(File(folder, "signs.yml"))
    titles = readYaml(File(folder, "configtitles.yml"))
    bars = readYaml(File(folder, "configbars.yml"))
    shop = readYaml(File(folder, "shop.yml"))
    require(global.getString("gamemode", "SURVIVAL") in listOf("SURVIVAL", "ADVENTURE"))
    require(!global.getBoolean("freedoublejumps.enabled"))
    require(global.getString("database", "file") == "file")
    require(global.getInt("onstart.delay") == 0)
    logUnread("config.yml", global, ::globalKey)
    logUnread("kits.yml", readYaml(File(folder, "kits.yml"))) { false }
    logUnread("shop.yml", shop) {
      it.matches(Regex("[^.]+\\.(name|cost|material|amount|permission|lore|items\\.1\\.amount)"))
    }
    logUnread("messages.yml", readYaml(File(folder, "messages.yml"))) { false }
    logUnread("configbars.yml", bars) { it in setOf("waiting", "starting", "playing") }
    logUnread("configtitles.yml", titles) {
      it in
          setOf("join", "subjoin", "starting", "substarting", "start", "substart", "win", "subwin")
    }
    logUnread("signs.yml", signs) { it.matches(Regex("arenas\\.[^.]+\\.[^.]+\\.(world|x|y|z)")) }
    logUnread("lobby.yml", readYaml(File(folder, "lobby.yml"))) {
      it in setOf("lobby.world", "lobby.vector", "lobby.yaw", "lobby.pitch") ||
          it.matches(Regex("lobby\\.vector\\.(x|y|z|==)"))
    }
    logUnread("players.yml", readYaml(File(folder, "players.yml"))) {
      it.matches(Regex("[^.]+\\.doublejumps"))
    }
    logUnread("stats.yml", readYaml(File(folder, "stats.yml"))) {
      it.matches(Regex("stats\\.[^.]+\\.(played|wins)"))
    }
    File(folder, "arenas")
        .listFiles()
        ?.filter { it.extension == "yml" }
        ?.sortedBy { it.name }
        ?.forEach { file ->
          try {
            val yaml = readYaml(file)
            logUnread("arena", yaml, ::supportedArenaKey)
            val c = RunArena(file.nameWithoutExtension, yaml)
            check(arenas.keys.none { it.equals(c.name, true) }) { "Ambiguous arena names" }
            check(
                arenas.values.none {
                  it.config.world == c.world && it.config.bounds.overlaps(c.bounds)
                }
            ) {
              "Overlapping arena bounds"
            }
            val a = RunMatch(c, folder)
            a.terrain.restore()
            c.location()
            if (c.enabled) arenas[c.name] = a
          } catch (e: Exception) {
            plugin.logger.warning(
                "TNTRun arena rejected (${e.javaClass.simpleName}); check its configuration or terrain recovery"
            )
          }
        }
    plugin.getCommand("tntrun")!!.let {
      it.setExecutor(this)
      it.tabCompleter = this
    }
    plugin.server.pluginManager.registerEvents(this, plugin)
    enabled = true
    task =
        Bukkit.getScheduler()
            .runTaskTimer(
                plugin,
                Runnable {
                  tick++
                  arenas.values.toList().forEach { a -> isolated(a) { tick(a) } }
                },
                1L,
                1L,
            )
    plugin.logger.info("TNTRun loaded ${arenas.size} arenas and ${signEntries().size} join signs")
  }

  fun disable() {
    enabled = false
    task?.cancel()
    task = null
    arenas.values.toList().forEach { a ->
      a.rules.end()
      a.members.values.toList().forEach { safelyLeave(it) }
      runCatching { a.terrain.restore() }
          .onFailure { plugin.logger.warning("TNTRun terrain recovery remains pending") }
      a.bar?.removeAll()
    }
    arenas.clear()
    parties.clear()
    HandlerList.unregisterAll(this)
  }

  private fun logUnread(name: String, y: YamlConfiguration, supported: (String) -> Boolean) {
    val unknown = unreadKeys(y, supported)
    if (unknown.isNotEmpty())
        plugin.logger.warning("TNTRun $name unsupported keys: ${unknown.joinToString()}")
  }

  private fun isolated(a: RunMatch, action: () -> Unit) {
    if (a.rules.phase == Phase.FAILED) return
    try {
      action()
    } catch (e: Exception) {
      a.rules.fail()
      plugin.logger.log(
          Level.SEVERE,
          "TNTRun arena stopped after failure; recovery journals retained",
          e,
      )
      a.members.values.toList().forEach { safelyLeave(it) }
      a.bar?.removeAll()
      runCatching { a.terrain.restore() }
    }
  }

  private fun results() =
      File(folder, "results").listFiles()?.filter {
        it.extension == "yml" && !readYaml(it).getBoolean("delivered")
      } ?: emptyList()

  private fun recover(player: Player) {
    if (players.containsKey(player.uniqueId) || !store.pending(player)) return
    if (legacyEnabled()) {
      if (player.isOnline) player.kickPlayer("TNTRun の復元データがあります。外製 TNTRun を停止してから管理者が復元してください。")
      return
    }
    guardedRecovery(restoringPlayers, player.uniqueId) {
      try {
        if (::data.isInitialized)
            results()
                .filter { readYaml(it).getString("winner") == player.uniqueId.toString() }
                .forEach { deliverResult(it, folder, data, bank) }
        if (store.restore(player)) player.sendMessage("TNTRun の持ち物と状態を復元しました。")
      } catch (e: Exception) {
        plugin.logger.warning("TNTRun player recovery failed; snapshot retained")
        if (player.isOnline) player.kickPlayer("TNTRun の復元が未完了です。管理者に連絡してください。")
      }
    }
  }

  override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<out String>,
  ): Boolean {
    if (!enabled) {
      sender.sendMessage("TNTRun は無効です。")
      return true
    }
    try {
      val action = args.firstOrNull()?.lowercase() ?: "list"
      if (action == "list") {
        sender.sendMessage(
            arenas.values
                .joinToString("\n") {
                  "${it.config.name}: ${it.rules.phase} ${it.rules.active.size}/${it.config.maximum}"
                }
                .ifEmpty { "アリーナがありません。" }
        )
        return true
      }
      val player = sender as? Player ?: error("プレイヤー専用です")
      when (action) {
        "join" ->
            joinGroup(
                player,
                arenas[arenaName(args.getOrNull(1).orEmpty(), arenas.keys)]
                    ?: error("アリーナ名を指定してください"),
            )
        "leave" -> players[player.uniqueId]?.let { safelyLeave(it) } ?: recover(player)
        "stats" -> {
          data.enlist(player.uniqueId, player.name)
          player.sendMessage("TNTRun: ${data.stats(player.uniqueId)}")
        }
        "party" -> partyCommand(player, args.drop(1))
        "vote" -> vote(players[player.uniqueId] ?: error("参加していません"))
        "shop" -> openShop(players[player.uniqueId] ?: error("参加していません"))
        else -> player.sendMessage("/tntrun join <arena> | leave | stats | list | vote | shop")
      }
    } catch (e: Exception) {
      sender.sendMessage("TNTRun: ${e.message ?: "処理に失敗しました"}")
    }
    return true
  }

  override fun onTabComplete(
      sender: CommandSender,
      command: Command,
      alias: String,
      args: Array<out String>,
  ): List<String> =
      (if (args.size == 2 && args[0].equals("join", true)) arenas.keys
          else if (args.size <= 1) listOf("join", "leave", "stats", "list", "vote", "shop", "party")
          else emptyList())
          .filter { it.startsWith(args.lastOrNull().orEmpty(), true) }

  private fun teleport(player: Player, location: Location) {
    internalTeleport = true
    try {
      check(player.teleport(location)) { "テレポートできませんでした" }
    } finally {
      internalTeleport = false
    }
  }

  private fun join(player: Player, a: RunMatch) {
    check(player.hasPermission("tntrun.join")) { "権限がありません" }
    check(player.uniqueId !in players && !player.isDead && !player.isInsideVehicle) { "今は参加できません" }
    check(a.rules.phase in listOf(Phase.WAITING, Phase.COUNTDOWN)) { "この試合には参加できません" }
    check(a.rules.active.size < a.config.maximum) { "満員です" }
    check(!bankHasUncertainty(player.uniqueId)) { "取引の照合が必要です" }
    if (a.config.yaml.getDouble("reward.money") > 0) check(bank != null) { "Vault economy が必要です" }
    recover(player)
    check(player.isOnline && !store.pending(player))
    val location = a.config.location()
    data.enlist(player.uniqueId, player.name)
    store.capture(player)
    val p = RunMember(player, a, player.scoreboard)
    players[player.uniqueId] = p
    a.members[player.uniqueId] = p
    a.rules.active.add(player.uniqueId)
    try {
      teleport(player, location)
      check(
          enabled &&
              players[player.uniqueId] === p &&
              arenas[a.config.name] === a &&
              !legacyEnabled()
      ) {
        "TNTRun participation was interrupted"
      }
      player.inventory.clear()
      player.setItemOnCursor(null)
      player.activePotionEffects.forEach { player.removePotionEffect(it.type) }
      player.isFlying = false
      player.allowFlight = false
      player.fireTicks = 0
      player.fallDistance = 0f
      player.gameMode = GameMode.valueOf(global.getString("gamemode", "SURVIVAL")!!)
      if (global.getBoolean("onjoin.fillhunger", true)) player.foodLevel = 20
      if (global.getBoolean("onjoin.fillhealth"))
          player.health = player.getAttribute(Attribute.MAX_HEALTH)!!.value
      player.isCollidable = !global.getBoolean("disablecollisions")
      waitingItems(player)
      title(player, "join", mapOf("PLAYER" to player.name))
      player.sendMessage("TNTRun に参加しました。/tntrun leave で退出します。")
    } catch (e: Exception) {
      safelyLeave(p, false)
      throw e
    }
  }

  private fun joinGroup(player: Player, a: RunMatch) {
    val leader = parties.leader(player.uniqueId)
    if (!global.getBoolean("parties.enabled", true) || leader == null) {
      join(player, a)
      return
    }
    check(leader == player.uniqueId) { "パーティーのリーダーから参加してください" }
    val group =
        parties.members(leader).map { Bukkit.getPlayer(it) ?: error("パーティーにオフラインのメンバーがいます") }
    check(a.rules.active.size + group.size <= a.config.maximum) { "パーティー全員が入れる空きがありません" }
    check(group.all { it.uniqueId !in players && it.hasPermission("tntrun.join") })
    val joined = mutableListOf<RunMember>()
    try {
      group.forEach {
        join(it, a)
        joined.add(players[it.uniqueId]!!)
      }
    } catch (e: Exception) {
      joined.forEach { safelyLeave(it, false) }
      throw e
    }
  }

  private fun partyCommand(player: Player, args: List<String>) {
    check(global.getBoolean("parties.enabled", true) && player.hasPermission("tntrun.party"))
    val action = args.firstOrNull()?.lowercase() ?: "info"
    val target =
        args.getOrNull(1)?.let {
          Bukkit.getOnlinePlayers().filter { p -> p.name.equals(it, true) }.singleOrNull()
        }
    val id = player.uniqueId
    when (action) {
      "create" -> parties.create(id)
      "leave" -> parties.leave(id)
      "info" -> {
        player.sendMessage(
            parties.members(parties.leader(id) ?: id).joinToString {
              Bukkit.getPlayer(it)?.name ?: "offline"
            }
        )
        return
      }
      "invite" -> {
        check(target != null)
        parties.invite(id, target.uniqueId)
        target.sendMessage("${player.name} のパーティー: /tntrun party accept ${player.name} または decline")
      }
      "accept" -> {
        check(target != null)
        parties.accept(id, target.uniqueId)
      }
      "decline" -> {
        check(target != null)
        parties.decline(id, target.uniqueId)
      }
      "kick" -> {
        check(target != null)
        parties.kick(id, target.uniqueId)
      }
      "unkick" -> {
        check(target != null)
        parties.unkick(id, target.uniqueId)
      }
      else -> error("/tntrun party create|invite|accept|decline|kick|unkick|leave|info")
    }
    player.sendMessage("TNTRun パーティーを更新しました。")
  }

  private fun bankHasUncertainty(id: UUID) =
      bank?.hasUncertain(id) == true ||
          File(folder, "purchases").listFiles()?.any {
            it.extension == "yml" && readYaml(it).getString("player") == id.toString()
          } == true

  private fun waitingItems(player: Player) {
    for (key in listOf("vote", "info", "shop", "stats", "leave")) giveItem(player, key)
  }

  private fun giveItem(player: Player, key: String) {
    if (!global.getBoolean("items.$key.use", true)) return
    val defaults =
        mapOf(
            "vote" to Material.DIAMOND,
            "info" to Material.EMERALD,
            "shop" to Material.NETHER_STAR,
            "stats" to Material.REDSTONE,
            "leave" to Material.GREEN_BED,
            "tracker" to Material.COMPASS,
        )
    val slots =
        mapOf("vote" to 0, "info" to 1, "shop" to 2, "stats" to 3, "leave" to 8, "tracker" to 5)
    val material =
        global.getString("items.$key.material")?.let(Material::matchMaterial) ?: defaults[key]!!
    val item = ItemStack(material)
    item.itemMeta =
        item.itemMeta.also { it.setDisplayName(colour(global.getString("items.$key.name", key)!!)) }
    player.inventory.setItem(global.getInt("items.$key.slot", slots[key]!!).coerceIn(0, 8), item)
  }

  private fun vote(p: RunMember) {
    check(!p.spectator && p.match.rules.phase in listOf(Phase.WAITING, Phase.COUNTDOWN)) {
      "今は投票できません"
    }
    p.match.votes.add(p.player.uniqueId)
    p.player.sendMessage(
        "開始投票 ${p.match.votes.size}/${votesRequired(p.match.config.minimum,p.match.config.votePercent)}"
    )
  }

  private fun tick(a: RunMatch) {
    if (a.rules.phase == Phase.REGENERATING) {
      if (tick >= a.regenUntil) {
        a.terrain.restore()
        a.rules = RunRules(a.config.minimum, a.config.countdown, a.config.limit)
        a.id = UUID.randomUUID()
        a.places.clear()
        a.votes.clear()
      }
      if (tick % 20 == 0L) updateSigns()
      return
    }
    if (a.rules.phase == Phase.RUNNING) {
      // Collect all losses before deciding a winner. Same-tick final falls are a draw.
      val fallen =
          a.rules.active
              .mapNotNull { a.members[it] }
              .filter {
                !it.player.isOnline ||
                    it.player.isDead ||
                    it.player.world.name != a.config.world ||
                    !a.config.bounds.contains(it.player.location.toVector().cell()) ||
                    lostAt(it.player.location.y, a.config.loseY)
              }
      a.rules.remove(fallen.map { it.player.uniqueId })
      fallen.forEach { eliminate(it) }
      if (a.rules.active.size <= 1) {
        finish(a, a.rules.active.singleOrNull()?.let { a.members[it] })
        return
      }
      if (a.rules.timedOut) {
        finish(a, null)
        return
      }
      for (id in a.rules.active) {
        val player = a.members[id]!!.player
        val l = player.location
        a.terrain.step(l.x, l.y, l.z, tick)
        player.allowFlight =
            a.config.yaml.getBoolean("allowDoublejumps", true) &&
                data.jumps(id) > 0 &&
                player.isOnGround
      }
      a.terrain.destroy(tick) { block ->
        sound(block.location, "blockbreak")
        if (global.getBoolean("special.FancyBlockBreak", true) && !block.type.isAir)
            block.world.spawnParticle(
                Particle.BLOCK,
                block.location.add(0.5, 0.5, 0.5),
                5,
                0.2,
                0.2,
                0.2,
                block.blockData,
            )
      }
    } else if (a.rules.active.isNotEmpty()) {
      a.members.values
          .filter { !it.spectator }
          .forEach {
            val p = it.player
            if (
                p.world.name != a.config.world ||
                    !a.config.bounds.contains(p.location.toVector().cell()) ||
                    lostAt(p.location.y, a.config.loseY)
            )
                teleport(p, a.config.location())
          }
    }
    if (tick % 20 == 0L) {
      val force = a.votes.size >= votesRequired(a.config.minimum, a.config.votePercent)
      if (
          a.rules.phase == Phase.COUNTDOWN &&
              global.getBoolean("anticamping.enabled", true) &&
              a.rules.remaining == maxOf(5, global.getInt("anticamping.teleporttime", 5))
      )
          a.members.values.forEach { teleport(it.player, a.config.location()) }
      if (a.rules.second(force)) start(a)
      display(a)
      updateSigns()
    }
  }

  private fun start(a: RunMatch) {
    a.terrain.begin()
    if (
        a.config.yaml.getBoolean("stats.enabled", true) &&
            a.rules.started >= a.config.yaml.getInt("stats.minPlayers")
    )
        data.played(a.id, a.rules.active.toSet())
    a.members.values.forEach { p ->
      p.player.inventory.clear()
      p.player.level = 0
      p.player.exp = 0f
      title(p.player, "start")
      sound(p.player.location, "arenastart")
    }
  }

  private fun eliminate(p: RunMember) {
    if (p.spectator) return
    p.spectator = true
    val a = p.match
    a.places.getOrPut(a.rules.active.size + 1) { mutableListOf() }.add(p.player.name)
    p.player.closeInventory()
    p.player.inventory.clear()
    p.player.gameMode = GameMode.SPECTATOR
    teleport(p.player, a.config.location(true))
    p.player.sendMessage("脱落しました。/tntrun leave で退出できます。")
  }

  private fun finish(a: RunMatch, winner: RunMember?) {
    if (a.rules.phase != Phase.RUNNING) return
    a.rules.end() // Stop removals and settlement entry immediately.
    a.regenUntil = tick + a.config.regeneration
    if (winner != null) {
      val c = a.config.yaml
      val eligible = a.rules.started >= c.getInt("reward.minPlayers")
      val result =
          YamlConfiguration().also {
            it.set("match", a.id.toString())
            it.set("winner", winner.player.uniqueId.toString())
            it.set("money", if (eligible) c.getDouble("reward.money") else 0.0)
            it.set("xp", if (eligible) c.getInt("reward.xp") else 0)
            it.set(
                "stats",
                c.getBoolean("stats.enabled", true) &&
                    a.rules.started >= c.getInt("stats.minPlayers"),
            )
          }
      val file = File(folder, "results/${a.id}.yml")
      saveYaml(file, result)
      deliverResult(file, folder, data, bank)
      title(winner.player, "win")
      if (global.getBoolean("fireworksonwin", false)) {
        val firework =
            winner.player.world.spawn(
                winner.player.location,
                org.bukkit.entity.Firework::class.java,
            )
        firework.addScoreboardTag("oyasaigames.tntrun.firework")
        firework.fireworkMeta =
            firework.fireworkMeta.also {
              it.addEffect(
                  FireworkEffect.builder()
                      .withColor(Color.LIME)
                      .with(FireworkEffect.Type.BALL)
                      .build()
              )
              it.power = 1
            }
      }
      val podium =
          (listOf("1. ${winner.player.name}") +
                  a.places
                      .filterKeys { it <= c.getInt("displayfinalpositions", 3) }
                      .toSortedMap()
                      .map { "${it.key}. ${it.value.joinToString(", ")}" })
              .joinToString(" / ")
      val message = "TNTRun ${a.config.name}: $podium"
      val audience =
          if (global.getInt("broadcastwinlevel", 2) >= 2) Bukkit.getOnlinePlayers()
          else a.members.values.map { it.player }
      if (global.getInt("broadcastwinlevel", 2) > 0) audience.forEach { it.sendMessage(message) }
      // Mark command effects before dispatch: a crash can omit a message, never repeat it.
      result.set("delivered", true)
      result.set("xp-applied", true)
      result.set("announced", true)
      saveYaml(file, result)
      global
          .getStringList("commandsonwin")
          .filter { it.isNotBlank() && it != "null" }
          .forEach {
            Bukkit.dispatchCommand(
                Bukkit.getConsoleSender(),
                it.replace("{PLAYER}", winner.player.name),
            )
          }
    }
    a.members.values.toList().forEach { safelyLeave(it) }
    a.rules.active.clear()
    a.bar?.removeAll()
  }

  private fun leave(p: RunMember, useLobby: Boolean = true) {
    if (players[p.player.uniqueId] !== p) {
      recover(p.player)
      return
    }
    val a = p.match
    if (a.rules.phase == Phase.RUNNING && !p.spectator && p.player.uniqueId in a.rules.active)
        a.places.getOrPut(a.rules.active.size) { mutableListOf() }.add(p.player.name)
    a.rules.remove(listOf(p.player.uniqueId))
    a.votes.remove(p.player.uniqueId)
    a.members.remove(p.player.uniqueId)
    players.remove(p.player.uniqueId)
    a.bar?.removePlayer(p.player)
    p.player.scoreboard = p.board
    if (useLobby && a.config.yaml.getString("teleportto") == "LOBBY") {
      val lobby = readYaml(File(folder, "lobby.yml"))
      val world =
          lobby.getString("lobby.world")?.let(Bukkit::getWorld)
              ?: error("Lobby world is unavailable")
      val v = vector(lobby, "lobby.vector")
      val y = readYaml(store.file(p.player))
      y.set(
          "location",
          Location(
              world,
              v.x,
              v.y,
              v.z,
              lobby.getDouble("lobby.yaw").toFloat(),
              lobby.getDouble("lobby.pitch").toFloat(),
          ),
      )
      saveYaml(store.file(p.player), y)
    }
    recover(p.player)
  }

  private fun safelyLeave(p: RunMember, useLobby: Boolean = true) {
    runCatching { leave(p, useLobby) }
        .onFailure {
          plugin.logger.warning("TNTRun leave recovery is pending")
          if (p.player.isOnline) p.player.kickPlayer("TNTRun の復元が未完了です。管理者に連絡してください。")
        }
  }

  private fun openShop(p: RunMember) {
    check(!p.spectator && p.match.rules.phase in listOf(Phase.WAITING, Phase.COUNTDOWN)) {
      "待機中だけ購入できます"
    }
    check(
        global.getBoolean("shop.enabled", true) &&
            p.match.config.yaml.getBoolean("shop.enabled", true)
    ) {
      "ショップは無効です"
    }
    val holder = RunShopHolder()
    val size = global.getInt("shop.size", 27)
    require(size in 9..54 && size % 9 == 0)
    holder.contents =
        Bukkit.createInventory(holder, size, colour(global.getString("shop.name", "TNTRun SHOP")!!))
    shop.getKeys(false).forEachIndexed { slot, key ->
      if (slot < size - 1) {
        validateOffer(key)
        val item = ItemStack(Material.FEATHER)
        item.itemMeta =
            item.itemMeta.also {
              it.setDisplayName(colour(shop.getString("$key.name", key)!!))
              it.lore = shop.getStringList("$key.lore").map(::colour)
            }
        holder.contents.setItem(slot, item)
        holder.offers[slot] = key
      }
    }
    val balance = ItemStack(Material.GOLD_INGOT)
    balance.itemMeta =
        balance.itemMeta.also {
          it.setDisplayName(
              "${provider?.getBalance(p.player) ?: 0.0}${global.getString("currency.suffix"," coins")}"
          )
        }
    holder.contents.setItem(size - 1, balance)
    p.player.openInventory(holder.contents)
  }

  private fun validateOffer(key: String) {
    require(shop.getString("$key.material") == "FEATHER") {
      "Only the deployed double jump offer is supported"
    }
    require(shop.getDouble("$key.cost").isFinite() && shop.getDouble("$key.cost") >= 0)
    require(shop.getInt("$key.amount", 1) in 1..10)
  }

  private fun buy(p: RunMember, key: String) {
    check(!p.spectator && p.match.rules.phase in listOf(Phase.WAITING, Phase.COUNTDOWN))
    check(!bankHasUncertainty(p.player.uniqueId))
    check(
        global.getBoolean("shop.enabled", true) &&
            p.match.config.yaml.getBoolean("shop.enabled", true)
    )
    val permission = shop.getString("$key.permission").orEmpty()
    check(
        shopPermission(
            p.player.hasPermission("tntrun.shop"),
            permission.isNotEmpty() && p.player.hasPermission(permission),
        )
    ) {
      "商品を購入する権限がありません"
    }
    validateOffer(key)
    check(shop.getInt("$key.items.1.amount", 1) > 0) { "この商品は在庫切れです" }
    val id = p.player.uniqueId
    val amount = shop.getInt("$key.amount", 1)
    check(
        canBuyJumps(data.jumps(id), amount, global.getInt("shop.doublejump.maxdoublejumps", 10))
    ) {
      "ダブルジャンプの上限です"
    }
    val economy = bank ?: error("Vault economy が必要です")
    val cost = shop.getDouble("$key.cost")
    val keyId = UUID.randomUUID().toString()
    val after = data.jumps(id) + amount
    if (cost == 0.0) {
      data.purchased(id, keyId, after)
      return
    }
    val file = File(folder, "purchases/$keyId.yml")
    saveYaml(
        file,
        YamlConfiguration().also {
          it.set("key", keyId)
          it.set("player", id.toString())
          it.set("after", after)
        },
    )
    try {
      economy.charge(p.player, cost, keyId)
    } catch (e: Exception) {
      if (economy.debitState(keyId) == null) java.nio.file.Files.delete(file.toPath())
      throw e
    }
    recoverPurchase(file, data, economy)
    sound(p.player.location, "itemselect")
    p.player.sendMessage("ダブルジャンプを購入しました。残り ${data.jumps(id)} 回")
  }

  private fun display(a: RunMatch) {
    val phase = a.rules.phase
    if (phase !in listOf(Phase.WAITING, Phase.COUNTDOWN, Phase.RUNNING)) return
    val seconds =
        if (phase == Phase.RUNNING) maxOf(0, a.config.limit - a.rules.elapsed)
        else a.rules.remaining
    val vars =
        mapOf(
            "COUNT" to a.rules.active.size.toString(),
            "SECONDS" to seconds.toString(),
            "ARENA" to a.config.name,
            "PS" to a.rules.active.size.toString(),
            "MPS" to a.config.maximum.toString(),
            "LOST" to a.members.values.count { it.spectator }.toString(),
            "LIMIT" to seconds.toString(),
        )
    if (global.getBoolean("special.UseBossBar", true)) {
      if (a.bar == null) {
        val color = global.getString("special.BossBarColor", "RANDOM")!!
        a.bar =
            Bukkit.createBossBar(
                "TNTRun",
                if (color == "RANDOM") BarColor.entries.random() else BarColor.valueOf(color),
                BarStyle.SOLID,
            )
      }
      val key =
          when (phase) {
            Phase.WAITING -> "waiting"
            Phase.COUNTDOWN -> "starting"
            else -> "playing"
          }
      a.bar!!.setTitle(expand(bars.getString(key, "TNTRun {COUNT} / {SECONDS}")!!, vars))
      a.bar!!.progress =
          when (phase) {
            Phase.WAITING -> a.rules.active.size.toDouble() / a.config.minimum
            Phase.COUNTDOWN -> seconds.toDouble() / maxOf(1, a.config.countdown)
            else -> if (a.config.limit == 0) 1.0 else seconds.toDouble() / a.config.limit
          }.coerceIn(0.0, 1.0)
      a.members.values.forEach { a.bar!!.addPlayer(it.player) }
    }
    a.members.values.forEach { p ->
      if (!p.spectator) {
        if (
            phase == Phase.COUNTDOWN && global.getBoolean("usexpbar.countdown", true) ||
                phase == Phase.RUNNING && global.getBoolean("usexpbar.timelimit", true)
        )
            p.player.level = seconds
        if (
            phase == Phase.COUNTDOWN &&
                (seconds <= a.config.yaml.getInt("startVisibleCountdown", 10) || seconds % 10 == 0)
        )
            title(p.player, "starting", vars + mapOf("COUNT" to seconds.toString()))
      }
      if (global.getBoolean("special.UseScoreboard", true) && !p.spectator) {
        val board = Bukkit.getScoreboardManager().newScoreboard
        val objective =
            board.registerNewObjective(
                "tntrun",
                "dummy",
                colour(global.getString("scoreboard.header", "TNTRUN")!!),
            )
        objective.displaySlot = org.bukkit.scoreboard.DisplaySlot.SIDEBAR
        val lines =
            global.getStringList(
                "scoreboard.${if(phase == Phase.RUNNING) "playing" else "waiting"}"
            )
        lines.take(15).forEachIndexed { i, line ->
          objective
              .getScore(
                  expand(line, vars + mapOf("COUNT" to seconds.toString())) + ChatColor.entries[i]
              )
              .score = lines.size - i
        }
        p.player.scoreboard = board
      } else if (p.spectator && global.getBoolean("scoreboard.removefromspectators", true))
          p.player.scoreboard = p.board
    }
  }

  private fun title(player: Player, key: String, vars: Map<String, String> = emptyMap()) {
    if (!global.getBoolean("special.UseTitle", true)) return
    player.sendTitle(
        expand(titles.getString(key, "")!!, vars),
        expand(titles.getString("sub$key", "")!!, vars),
        10,
        40,
        10,
    )
  }

  private fun colour(value: String) = ChatColor.translateAlternateColorCodes('&', value)

  private fun expand(value: String, vars: Map<String, String>): String {
    var text = value
    vars.forEach { (key, v) -> text = text.replace("{$key}", v) }
    return colour(text)
  }

  private fun sound(location: Location, key: String) {
    if (!global.getBoolean("sounds.$key.enabled", true)) return
    val default =
        when (key) {
          "blockbreak" -> "BLOCK_SAND_BREAK"
          "itemselect" -> "UI_BUTTON_CLICK"
          else -> "ENTITY_PLAYER_LEVELUP"
        }
    val sound = Sound.valueOf(global.getString("sounds.$key.sound", default)!!)
    location.world.playSound(
        location,
        sound,
        global.getDouble("sounds.$key.volume", 1.0).toFloat(),
        global.getDouble("sounds.$key.pitch", 1.0).toFloat(),
    )
  }

  private fun signEntries(): List<Pair<String, Location>> =
      signs.getConfigurationSection("arenas")?.getKeys(false)?.flatMap { name ->
        signs.getConfigurationSection("arenas.$name")!!.getKeys(false).mapNotNull { key ->
          val path = "arenas.$name.$key"
          val world =
              signs.getString("$path.world")?.let(Bukkit::getWorld) ?: return@mapNotNull null
          name to
              Location(
                  world,
                  signs.getDouble("$path.x"),
                  signs.getDouble("$path.y"),
                  signs.getDouble("$path.z"),
              )
        }
      } ?: emptyList()

  private fun updateSigns() {
    for ((name, loc) in signEntries()) {
      val a = arenas[arenaName(name, arenas.keys)]
      val sign = loc.block.state as? Sign ?: continue
      val status =
          when (a?.rules?.phase) {
            Phase.WAITING,
            Phase.COUNTDOWN -> "waiting"
            Phase.RUNNING -> "ingame"
            Phase.REGENERATING -> "regenerating"
            else -> "disabled"
          }
      val vars =
          mapOf(
              "PS" to (a?.rules?.active?.size ?: 0).toString(),
              "MPS" to (a?.config?.maximum ?: 0).toString(),
          )
      sign.setLine(0, colour(global.getString("signs.prefix", "&6TNTRun")!!))
      sign.setLine(1, colour(global.getString("signs.arena", "&0")!!) + name)
      sign.setLine(2, expand(global.getString("signs.status.$status", status)!!, vars))
      sign.setLine(3, colour(global.getString("signs.join", "[Join]")!!))
      sign.update(true, false)
    }
  }

  private fun matchAt(l: Location) =
      arenas.values.firstOrNull {
        it.config.world == l.world?.name && it.config.bounds.contains(l.toVector().cell())
      }

  @EventHandler
  fun foreignEnabled(e: PluginEnableEvent) {
    if (e.plugin.name.equals("TNTRun_reloaded", true)) {
      plugin.logger.warning("TNTRun_reloaded enabled; stopping tntrun")
      disable()
    }
  }

  @EventHandler(priority = EventPriority.HIGHEST)
  fun click(e: PlayerInteractEvent) {
    if (e.hand != org.bukkit.inventory.EquipmentSlot.HAND) return
    if (e.action == Action.RIGHT_CLICK_BLOCK) {
      val block = e.clickedBlock ?: return
      val entry = signEntries().firstOrNull { it.second.block == block }
      if (entry != null) {
        e.isCancelled = true
        try {
          joinGroup(e.player, arenas[arenaName(entry.first, arenas.keys)] ?: error("このアリーナは無効です"))
        } catch (ex: Exception) {
          e.player.sendMessage("TNTRun: ${ex.message}")
        }
        return
      }
    }
    val p = players[e.player.uniqueId]
    if (p == null) {
      if (e.clickedBlock?.let { matchAt(it.location) } != null) e.isCancelled = true
      return
    }
    e.isCancelled = true
    if (e.action != Action.RIGHT_CLICK_AIR && e.action != Action.RIGHT_CLICK_BLOCK) return
    val slot = e.player.inventory.heldItemSlot
    val key =
        listOf("vote", "info", "shop", "stats", "leave").firstOrNull {
          global.getBoolean("items.$it.use", true) &&
              slot ==
                  global.getInt(
                      "items.$it.slot",
                      mapOf("vote" to 0, "info" to 1, "shop" to 2, "stats" to 3, "leave" to 8)[
                          it]!!,
                  )
        } ?: return
    try {
      when (key) {
        "leave" -> safelyLeave(p)
        "vote" -> vote(p)
        "shop" -> openShop(p)
        "stats" -> e.player.sendMessage("TNTRun: ${data.stats(e.player.uniqueId)}")
        else ->
            e.player.sendMessage(
                "${p.match.config.name}: ${p.match.rules.active.size}/${p.match.config.maximum}"
            )
      }
    } catch (ex: Exception) {
      e.player.sendMessage("TNTRun: ${ex.message}")
    }
  }

  @EventHandler(priority = EventPriority.HIGHEST)
  fun inventory(e: InventoryClickEvent) {
    val p = players[e.whoClicked.uniqueId] ?: return
    e.isCancelled = true
    val holder = e.view.topInventory.holder as? RunShopHolder ?: return
    if (e.clickedInventory != e.view.topInventory || !e.isLeftClick || e.isShiftClick) return
    val key = holder.offers[e.rawSlot] ?: return
    try {
      buy(p, key)
      openShop(p)
    } catch (ex: Exception) {
      p.player.sendMessage("TNTRun: ${ex.message}")
      if (bankHasUncertainty(p.player.uniqueId)) isolated(p.match) { throw ex }
    }
  }

  @EventHandler(priority = EventPriority.HIGHEST)
  fun interactEntity(e: PlayerInteractEntityEvent) {
    if (e.player.uniqueId in players) e.isCancelled = true
  }

  @EventHandler(priority = EventPriority.HIGHEST)
  fun damageEntity(e: EntityDamageByEntityEvent) {
    val source = e.damager.let { if (it is Projectile) it.shooter else it } as? Player
    if (source?.uniqueId in players && e.entity !is Player) e.isCancelled = true
  }

  @EventHandler(priority = EventPriority.HIGHEST)
  fun bucket(e: PlayerBucketEmptyEvent) {
    if (e.player.uniqueId in players || matchAt(e.block.location) != null) e.isCancelled = true
  }

  @EventHandler(priority = EventPriority.HIGHEST)
  fun bucketFill(e: PlayerBucketFillEvent) {
    if (e.player.uniqueId in players || matchAt(e.block.location) != null) e.isCancelled = true
  }

  @EventHandler
  fun grow(e: BlockGrowEvent) {
    if (matchAt(e.block.location) != null) e.isCancelled = true
  }

  @EventHandler
  fun spread(e: BlockSpreadEvent) {
    if (matchAt(e.block.location) != null) e.isCancelled = true
  }

  @EventHandler
  fun physics(e: BlockPhysicsEvent) {
    if (
        matchAt(e.block.location)?.rules?.phase in
            listOf(Phase.RUNNING, Phase.REGENERATING, Phase.FAILED)
    )
        e.isCancelled = true
  }

  @EventHandler(priority = EventPriority.HIGHEST)
  fun hunger(e: FoodLevelChangeEvent) {
    if (e.entity.uniqueId in players) e.isCancelled = true
  }

  @EventHandler
  fun drag(e: InventoryDragEvent) {
    if (e.whoClicked.uniqueId in players) e.isCancelled = true
  }

  @EventHandler
  fun drop(e: PlayerDropItemEvent) {
    if (e.player.uniqueId in players || matchAt(e.itemDrop.location) != null) e.isCancelled = true
  }

  @EventHandler
  fun pickup(e: EntityPickupItemEvent) {
    if (e.entity.uniqueId in players || matchAt(e.item.location) != null) e.isCancelled = true
  }

  @EventHandler
  fun swap(e: PlayerSwapHandItemsEvent) {
    if (e.player.uniqueId in players) e.isCancelled = true
  }

  @EventHandler
  fun quit(e: PlayerQuitEvent) {
    players[e.player.uniqueId]?.let { safelyLeave(it) }
    parties.leave(e.player.uniqueId)
  }

  @EventHandler
  fun death(e: PlayerDeathEvent) {
    if (store.pending(e.entity)) {
      e.drops.clear()
      e.droppedExp = 0
      e.keepInventory = true
      e.keepLevel = true
      players[e.entity.uniqueId]?.let { safelyLeave(it) }
    }
  }

  @EventHandler(priority = EventPriority.HIGHEST, ignoreCancelled = true)
  fun damage(e: EntityDamageEvent) {
    if (
        e is EntityDamageByEntityEvent &&
            e.damager is org.bukkit.entity.Firework &&
            "oyasaigames.tntrun.firework" in e.damager.scoreboardTags
    ) {
      e.isCancelled = true
      return
    }
    val target = e.entity as? Player ?: return
    val p = players[target.uniqueId]
    val source =
        (e as? EntityDamageByEntityEvent)?.damager.let { if (it is Projectile) it.shooter else it }
            as? Player
    val attacker = source?.let { players[it.uniqueId] }
    if (p == null) {
      if (attacker != null) e.isCancelled = true
      return
    }
    if (
        e.cause == EntityDamageEvent.DamageCause.FALL ||
            p.spectator ||
            p.match.rules.phase != Phase.RUNNING ||
            p.match.config.yaml.getString("damageenabled", "NO") == "NO"
    ) {
      e.isCancelled = true
      return
    }
    if (
        e is EntityDamageByEntityEvent &&
            (attacker == null || attacker.match !== p.match || attacker.spectator)
    ) {
      e.isCancelled = true
      return
    }
    if (
        source != null &&
            source.inventory.itemInMainHand.type.isAir &&
            !p.match.config.yaml.getBoolean("punchDamage", true)
    ) {
      e.isCancelled = true
      return
    }
    if (e.finalDamage >= target.health) {
      e.isCancelled = true
      isolated(p.match) {
        p.match.rules.remove(listOf(target.uniqueId))
        eliminate(p)
      }
    }
  }

  @EventHandler(priority = EventPriority.HIGHEST)
  fun flight(e: PlayerToggleFlightEvent) {
    val p = players[e.player.uniqueId] ?: return
    e.isCancelled = true
    e.player.isFlying = false
    if (
        p.spectator ||
            p.match.rules.phase != Phase.RUNNING ||
            !p.match.config.yaml.getBoolean("allowDoublejumps", true)
    )
        return
    val id = e.player.uniqueId
    if (data.jumps(id) <= 0) return
    isolated(p.match) {
      data.setJumps(id, data.jumps(id) - 1)
      e.player.allowFlight = false
      e.player.velocity =
          e.player.location.direction
              .multiply(global.getDouble("doublejumps.multiplier", 1.5))
              .setY(global.getDouble("doublejumps.height", 0.7))
    }
  }

  @EventHandler(priority = EventPriority.HIGHEST)
  fun teleportEvent(e: PlayerTeleportEvent) {
    if (e.player.uniqueId in players && !internalTeleport) {
      val p = players[e.player.uniqueId]!!
      if (
          p.spectator &&
              e.cause == PlayerTeleportEvent.TeleportCause.SPECTATE &&
              matchAt(e.to) === p.match
      )
          return
      e.isCancelled = true
    }
  }

  @EventHandler(priority = EventPriority.HIGHEST)
  fun command(e: PlayerCommandPreprocessEvent) {
    if (e.player.uniqueId !in players) return
    val command = e.message.trim().substringBefore(' ').removePrefix("/").lowercase()
    if (command.substringAfter(':') !in listOf("tntrun", "tr")) {
      e.isCancelled = true
      e.player.sendMessage("先に /tntrun leave で退出してください。")
    }
  }

  @EventHandler(priority = EventPriority.HIGHEST)
  fun breakBlock(e: BlockBreakEvent) {
    if (e.player.uniqueId in players || matchAt(e.block.location) != null) e.isCancelled = true
  }

  @EventHandler(priority = EventPriority.HIGHEST)
  fun placeBlock(e: BlockPlaceEvent) {
    if (e.player.uniqueId in players || matchAt(e.block.location) != null) e.isCancelled = true
  }

  @EventHandler(priority = EventPriority.HIGHEST)
  fun entityBlock(e: EntityChangeBlockEvent) {
    if (matchAt(e.block.location) != null) e.isCancelled = true
  }

  @EventHandler
  fun explode(e: EntityExplodeEvent) {
    e.blockList().removeIf { matchAt(it.location) != null }
  }

  @EventHandler
  fun blockExplode(e: BlockExplodeEvent) {
    e.blockList().removeIf { matchAt(it.location) != null }
  }

  @EventHandler
  fun flow(e: BlockFromToEvent) {
    if (matchAt(e.block.location) != null || matchAt(e.toBlock.location) != null)
        e.isCancelled = true
  }

  @EventHandler
  fun burn(e: BlockBurnEvent) {
    if (matchAt(e.block.location) != null) e.isCancelled = true
  }

  @EventHandler
  fun fade(e: BlockFadeEvent) {
    if (matchAt(e.block.location) != null) e.isCancelled = true
  }

  @EventHandler
  fun form(e: BlockFormEvent) {
    if (matchAt(e.block.location) != null) e.isCancelled = true
  }

  @EventHandler
  fun piston(e: BlockPistonExtendEvent) {
    if (
        e.blocks.any {
          matchAt(it.location) != null || matchAt(it.getRelative(e.direction).location) != null
        }
    )
        e.isCancelled = true
  }

  @EventHandler
  fun pistonBack(e: BlockPistonRetractEvent) {
    if (
        e.blocks.any {
          matchAt(it.location) != null || matchAt(it.getRelative(e.direction).location) != null
        }
    )
        e.isCancelled = true
  }
}

internal fun globalKey(key: String): Boolean =
    key in
        setOf(
            "onjoin.fillhunger",
            "onjoin.fillhealth",
            "onstart.delay",
            "disablecollisions",
            "usexpbar.countdown",
            "usexpbar.timelimit",
            "gamemode",
            "currency.prefix",
            "currency.suffix",
            "anticamping.enabled",
            "anticamping.teleporttime",
            "special.UseBossBar",
            "special.BossBarColor",
            "special.UseTitle",
            "special.UseScoreboard",
            "special.FancyBlockBreak",
            "shop.enabled",
            "shop.name",
            "shop.size",
            "shop.doublejump.maxdoublejumps",
            "commandsonwin",
            "broadcastwinlevel",
            "scoreboard.removefromspectators",
            "scoreboard.header",
            "scoreboard.waiting",
            "scoreboard.playing",
            "database",
            "signs.prefix",
            "signs.arena",
            "signs.join",
            "signs.status.disabled",
            "signs.status.ingame",
            "signs.status.regenerating",
            "signs.status.waiting",
            "doublejumps.multiplier",
            "doublejumps.height",
            "parties.enabled",
            "fireworksonwin",
        ) ||
        key.matches(
            Regex("sounds\\.(arenastart|itemselect|blockbreak)\\.(enabled|sound|volume|pitch)")
        ) ||
        key.matches(Regex("items\\.(vote|info|shop|stats|leave)\\.(use|slot|material|name)"))
