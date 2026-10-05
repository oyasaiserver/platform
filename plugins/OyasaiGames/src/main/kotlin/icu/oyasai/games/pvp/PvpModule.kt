package icu.oyasai.games.pvp

import icu.oyasai.games.OyasaiGamesPlugin
import java.io.File
import java.util.UUID
import java.util.logging.Level
import org.bukkit.Bukkit
import org.bukkit.Color
import org.bukkit.GameMode
import org.bukkit.Material
import org.bukkit.attribute.Attribute
import org.bukkit.block.Sign
import org.bukkit.command.Command
import org.bukkit.command.CommandSender
import org.bukkit.command.TabExecutor
import org.bukkit.configuration.file.YamlConfiguration
import org.bukkit.entity.Player
import org.bukkit.entity.Projectile
import org.bukkit.event.EventHandler
import org.bukkit.event.EventPriority
import org.bukkit.event.HandlerList
import org.bukkit.event.Listener
import org.bukkit.event.block.*
import org.bukkit.event.entity.*
import org.bukkit.event.inventory.InventoryClickEvent
import org.bukkit.event.inventory.InventoryDragEvent
import org.bukkit.event.player.*
import org.bukkit.inventory.ItemStack
import org.bukkit.potion.PotionEffect
import org.bukkit.potion.PotionEffectType
import org.bukkit.scheduler.BukkitTask
import org.bukkit.scoreboard.Scoreboard

internal class Participant(
    val player: Player,
    val arena: ArenaMatch,
    val team: String,
    var spectator: Boolean,
    val board: Scoreboard,
) {
  var ready = false
  var kit: String? = null
  var nextKit: String? = null
  var protectedUntil = 0L
  var pendingDeath = false
  var switches = 0
  var charge: String? = null
  var lastAttacker: Player? = null
  var lastHit = 0L
}

internal data class Bet(val target: String, val amount: Double, val charge: String)

internal class ArenaMatch(val config: ArenaConfig, folder: File) {
  var rules =
      MatchRules(
          config.goal,
          config.limit,
          if (config.goal.teams) config.bool("goal.teamdm.suicideScore")
          else config.bool("uses.suicidepunish"),
      )
  val members = linkedMapOf<UUID, Participant>()
  val played = hashSetOf<UUID>()
  val terrain = PvpTerrain(folder, config)
  var phase = "waiting"
  var countdown = 0
  var elapsed = 0
  var initialPlayers = 0
  var after = false
  val bets = linkedMapOf<UUID, Bet>()
  var winners = emptySet<String>()
  val matchFile = File(folder, "matches/${config.name}.yml")
  val spawnedEntities = hashSetOf<UUID>()
}

class PvpModule(private val plugin: OyasaiGamesPlugin) : Listener, TabExecutor {
  private val folder = File(plugin.dataFolder, "pvp")
  private val store = PlayerStore(File(folder, "players"))
  private val arenas = linkedMapOf<String, ArenaMatch>()
  private val players = linkedMapOf<UUID, Participant>()
  private var task: BukkitTask? = null
  private var economy: PvpEconomy? = null
  private var enabled = false
  private val statsFile = File(folder, "stats.yml")
  private var stats = YamlConfiguration()
  private var global = YamlConfiguration()

  private val recoveryListener =
      object : Listener {
        @EventHandler
        fun joined(e: PlayerJoinEvent) {
          recover(e.player)
        }

        @EventHandler
        fun respawned(e: PlayerRespawnEvent) {
          if (players.containsKey(e.player.uniqueId)) return
          Bukkit.getScheduler().runTask(plugin, Runnable { recover(e.player) })
        }
      }

  fun enable() {
    HandlerList.unregisterAll(recoveryListener)
    plugin.server.pluginManager.registerEvents(recoveryListener, plugin)
    Bukkit.getOnlinePlayers().forEach { recover(it) }
    if (!plugin.config.getBoolean("games.pvp.enabled", true)) return
    if (
        plugin.server.pluginManager.plugins.any { it.name.equals("pvparena", true) && it.isEnabled }
    ) {
      plugin.logger.warning("PvPArena is enabled; OyasaiGames PvP will not start")
      return
    }
    importLegacy(folder, File(plugin.dataFolder.parentFile, "pvparena"), plugin.logger)
    folder.mkdirs()
    if (plugin.server.pluginManager.isPluginEnabled("Vault")) {
      val provider =
          Bukkit.getServicesManager()
              .getRegistration(net.milkbowl.vault.economy.Economy::class.java)
              ?.provider
      if (provider != null) economy = PvpEconomy(folder, provider).also { it.retry() }
    }
    if (statsFile.exists()) stats.load(statsFile)
    reload()
    plugin.server.pluginManager.registerEvents(this, plugin)
    plugin.getCommand("pa")!!.let {
      it.setExecutor(this)
      it.tabCompleter = this
    }
    enabled = true
    Bukkit.getOnlinePlayers().forEach { recover(it) }
    task =
        Bukkit.getScheduler()
            .runTaskTimer(
                plugin,
                Runnable {
                  arenas.values.toList().forEach { arena -> isolated(arena) { tick(arena) } }
                },
                20L,
                20L,
            )
  }

  fun disable() {
    task?.cancel()
    task = null
    arenas.values.toList().forEach { arena -> isolated(arena) { abort(arena) } }
    Bukkit.getOnlinePlayers().forEach { recover(it) }
    HandlerList.unregisterAll(this)
    // The recovery listener stays registered while the plugin is enabled, even if PvP is disabled.
    enabled = false
  }

  private fun reload() {
    check(players.isEmpty()) { "試合・観戦を終了してから reload してください" }
    if (File(folder, "config.yml").exists()) global.load(File(folder, "config.yml"))
    val unsupportedGlobal =
        global.getKeys(true).filter { !global.isConfigurationSection(it) && it != "whitelist" }
    if (unsupportedGlobal.isNotEmpty())
        plugin.logger.warning("PvP global unsupported keys: ${unsupportedGlobal.joinToString()}")
    arenas.clear()
    File(folder, "arenas")
        .listFiles()
        ?.filter { it.extension == "yml" }
        ?.sortedBy { it.name }
        ?.forEach { file ->
          try {
            val config = ArenaConfig.load(file)
            val match = ArenaMatch(config, folder)
            match.terrain.restore()
            if (match.matchFile.exists()) {
              restoreSchematic(folder, config)
              check(match.matchFile.delete())
            }
            logUnsupported(config)
            arenas[config.name] = match
          } catch (e: Exception) {
            plugin.logger.log(Level.WARNING, "PvP arena ${file.name} could not be loaded", e)
          }
        }
    plugin.logger.info("PvP loaded ${arenas.size} arenas")
  }

  private fun logUnsupported(config: ArenaConfig) {
    val unsupported =
        config.yaml.getKeys(true).filter { key ->
          !config.yaml.isConfigurationSection(key) && !supportedKey(key)
        }
    if (unsupported.isNotEmpty())
        plugin.logger.warning("PvP ${config.name}: unsupported keys: ${unsupported.joinToString()}")
    val unknownMods =
        config.mods -
            setOf(
                "StandardLounge",
                "StandardSpectate",
                "QuickLounge",
                "BattlefieldJoin",
                "BetterGears",
                "BetterClasses",
                "Vault",
                "Vaultre",
                "ChestFiller",
                "AfterMatch",
                "Announcements",
                "Projectiles",
                "BlockRestore",
                "WorldEdit",
                "NCModule",
            )
    if (unknownMods.isNotEmpty())
        plugin.logger.warning(
            "PvP ${config.name}: unsupported modules: ${unknownMods.joinToString()}"
        )
  }

  private fun isolated(arena: ArenaMatch, action: () -> Unit) {
    try {
      action()
    } catch (e: Exception) {
      plugin.logger.log(
          Level.SEVERE,
          "PvP ${arena.config.name}: operation failed; recovery journals retained",
          e,
      )
      arena.phase = "failed"
      arena.members.values.toList().forEach { runCatching { leave(it.player) } }
    }
  }

  private fun recover(player: Player) {
    if (!store.pending(player)) return
    try {
      if (store.restore(player)) player.sendMessage("PvP の持ち物と状態を復元しました。")
    } catch (e: Exception) {
      plugin.logger.log(Level.SEVERE, "PvP inventory recovery failed; journal retained", e)
      player.sendMessage("PvP の復元が未完了です。管理者に連絡してください。")
      // Prevent play with a partial state that would be replaced on the next recovery.
      if (player.isOnline) player.kickPlayer("PvP の復元が未完了です。管理者に連絡してください。")
    }
  }

  override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<out String>,
  ): Boolean {
    if (!enabled) {
      sender.sendMessage("PvP は無効です。")
      return true
    }
    try {
      execute(sender, args.toList())
    } catch (e: Exception) {
      sender.sendMessage("PvP: ${e.message ?: "処理に失敗しました"}")
    }
    return true
  }

  private fun execute(sender: CommandSender, original: List<String>) {
    val action = original.firstOrNull()?.lowercase() ?: "help"
    if (action == "list") {
      sender.sendMessage(
          arenas.values.joinToString("\n") {
            "${it.config.name}: ${if(it.config.bool("general.enabled", true)) it.phase else "disabled"} (${it.members.values.count { p -> !p.spectator }})"
          }
      )
      return
    }
    if (action == "reload") {
      check(sender.hasPermission("oyasaigames.pvp.admin")) { "権限がありません" }
      reload()
      sender.sendMessage("PvP を再読み込みしました。")
      return
    }
    if (action == "help") {
      sender.sendMessage(
          "/pa <arena> [team] | leave | ready | class <kit> | <arena> spectate | bet <target> <amount> | stats | list"
      )
      return
    }
    if (original.size > 1 && original[1].equals("reload", true)) {
      check(sender.hasPermission("oyasaigames.pvp.admin"))
      reload()
      sender.sendMessage("PvP を再読み込みしました。")
      return
    }
    val player = sender as? Player ?: error("プレイヤー専用です")
    check(player.hasPermission("oyasaigames.pvp.use")) { "権限がありません" }
    val participant = players[player.uniqueId]
    val named = resolveName(original[0], arenas.keys)?.let { arenas[it] }
    val args = if (named != null) original.drop(1) else original
    val arena =
        named
            ?: participant?.arena
            ?: if (action == "bet") {
              val target = original.getOrNull(1).orEmpty()
              resolveBetArena(
                      target,
                      arenas.values
                          .filter {
                            it.phase == "running" && it.config.bool("modules.vault.bet.enabled")
                          }
                          .associate { it.config.name to betTargets(it).keys },
                  )
                  ?.let { arenas[it] }
            } else null
    when (args.firstOrNull()?.lowercase() ?: "join") {
      "leave" -> leave(player)
      "stats" ->
          player.sendMessage(
              "PvP: ${stats.getInt("${player.uniqueId}.kills")} kills / ${stats.getInt("${player.uniqueId}.deaths")} deaths / ${stats.getInt("${player.uniqueId}.wins")} wins"
          )
      "enable",
      "disable" -> {
        check(player.hasPermission("oyasaigames.pvp.admin")) { "権限がありません" }
        check(arena != null) { "アリーナを指定してください" }
        abort(arena)
        arena.config.yaml.set("general.enabled", args[0].equals("enable", true))
        saveYaml(File(folder, "arenas/${arena.config.name}.yml"), arena.config.yaml)
      }
      "spectate",
      "spec" -> {
        check(arena != null)
        join(player, arena, true, null)
      }
      "ready" -> {
        check(participant != null)
        ready(participant)
      }
      "class",
      "-ac",
      "arenaclass" -> {
        check(participant != null)
        chooseClass(participant, args.getOrNull(1) ?: error("クラス名を指定してください"))
      }
      "bet" -> {
        check(arena != null) { "観戦するかアリーナを指定してください" }
        bet(
            player,
            arena,
            args.getOrNull(1) ?: error("対象を指定してください"),
            args.getOrNull(2)?.toDoubleOrNull() ?: error("金額を指定してください"),
        )
      }
      else -> {
        check(named != null) { "アリーナ名が見つからないか曖昧です" }
        join(
            player,
            named,
            false,
            args.firstOrNull()?.takeUnless { it.equals("join", true) } ?: args.getOrNull(1),
        )
      }
    }
  }

  override fun onTabComplete(
      sender: CommandSender,
      command: Command,
      alias: String,
      args: Array<out String>,
  ): List<String> {
    val p = (sender as? Player)?.let { players[it.uniqueId] }
    val choices =
        if (args.size <= 1)
            arenas.keys + listOf("leave", "ready", "class", "bet", "stats", "list", "reload")
        else if (args[0].equals("class", true)) p?.arena?.config?.classes ?: emptySet()
        else listOf("spectate", "join", "bet", "enable", "disable")
    return choices.filter { it.startsWith(args.lastOrNull() ?: "", true) }
  }

  private fun join(player: Player, arena: ArenaMatch, spectator: Boolean, requestedTeam: String?) {
    check(players[player.uniqueId] == null) { "先に /pa leave を実行してください" }
    check(!player.isDead && !player.isInsideVehicle) { "今は参加できません" }
    recover(player)
    check(!store.pending(player)) { "復元が未完了です" }
    val c = arena.config
    check(c.bool("general.enabled", true) && arena.phase !in setOf("ending", "failed")) {
      "アリーナは無効です"
    }
    if (!spectator) {
      check(
          arena.phase != "running" ||
              c.bool("join.allowDuringMatch") &&
                  (!c.has("BattlefieldJoin") ||
                      (c.int("modules.battlefieldjoin.joinDuration", 30) <= 0 ||
                          arena.elapsed <= c.int("modules.battlefieldjoin.joinDuration", 30) ||
                          c.bool("join.allowRejoin") && player.uniqueId in arena.played))
      ) {
        "途中参加できません"
      }
      check(c.bool("join.allowRejoin") || player.uniqueId !in arena.played) { "この試合には再参加できません" }
      val maximum = c.int("ready.maxPlayers")
      check(maximum == 0 || arena.members.values.count { !it.spectator } < maximum) { "満員です" }
    } else check(c.has("StandardSpectate")) { "観戦できません" }
    val team =
        if (!c.goal.teams) "free"
        else
            requestedTeam?.let { resolveName(it, c.teams) ?: error("チーム名が不正です") }
                ?: c.teams.minBy { t ->
                  arena.members.values.count { !it.spectator && it.team == t }
                }
    check(
        spectator ||
            c.int("ready.maxTeam") == 0 ||
            arena.members.values.count { !it.spectator && it.team == team } < c.int("ready.maxTeam")
    ) {
      "チームが満員です"
    }
    val direct = c.has("BattlefieldJoin") && !c.has("StandardLounge") && !c.has("QuickLounge")
    val location =
        if (spectator) c.spawns["spectator"] ?: error("観戦地点がありません")
        else c.spawn(team, if (arena.phase == "running" || direct) "fight" else "lounge")
    val target = location.location()
    val fee =
        if (!spectator && (c.has("Vault") || c.has("Vaultre")))
            c.number("modules.vault.conditions.entryFee")
        else 0.0
    if (
        fee > 0 ||
            (c.has("Vault") || c.has("Vaultre")) &&
                listOf("kill", "win", "death").any { c.number("modules.vault.reward.$it") > 0 }
    )
        check(economy != null) { "Vault economy が必要です" }
    // Validate kits before touching the original inventory.
    val auto = c.text("ready.autoClass", "none")
    val kit = resolveName(autoClass(auto, team), c.classes)
    kit?.let { validateKit(c, it) }
    store.capture(player)
    val member = Participant(player, arena, team, spectator, player.scoreboard)
    arena.members[player.uniqueId] = member
    players[player.uniqueId] = member
    try {
      member.charge = economy?.charge(player, fee)
      check(player.teleport(target)) { "テレポートできませんでした" }
      player.inventory.clear()
      player.setItemOnCursor(null)
      player.activePotionEffects.forEach { player.removePotionEffect(it.type) }
      player.allowFlight = false
      player.isFlying = false
      player.fireTicks = 0
      player.fallDistance = 0f
      player.gameMode =
          if (spectator) GameMode.SPECTATOR
          else GameMode.valueOf(c.text("general.gamemode", "SURVIVAL"))
      if (kit != null && !spectator) chooseClass(member, kit)
      resetHealth(member)
      if (arena.phase == "running" && !spectator) {
        arena.rules.add(player.uniqueId.toString(), team)
        arena.played.add(player.uniqueId)
        economy?.consume(member.charge)
      }
      if ((c.has("QuickLounge") || direct) && !spectator) {
        check(member.kit != null) { "QuickLounge の autoClass がありません" }
        member.ready = true
      }
      player.sendMessage(
          if (spectator) "観戦を開始しました。/pa leave で戻ります。"
          else c.text("msg.lounge", "/pa class <kit> と /pa ready で準備してください")
      )
      announce(arena, "join", "${player.name} joined ${c.name}")
      tryCountdown(arena)
    } catch (e: Exception) {
      leave(player)
      economy?.refund(member.charge)
      throw e
    }
  }

  private fun validateKit(c: ArenaConfig, kit: String) {
    for (part in listOf("items", "armor", "offhand")) PvpItems.list(
        c.yaml.getList("classitems.$kit.$part") ?: emptyList<Any>()
    )
  }

  private fun chooseClass(p: Participant, input: String) {
    check(!p.spectator) { "観戦中です" }
    val c = p.arena.config
    val kit = resolveName(input, c.classes) ?: error("クラスが見つからないか曖昧です")
    check(p.arena.phase != "running" || c.bool("uses.ingameClassSwitch")) { "試合中は変更できません" }
    if (c.has("BetterClasses")) {
      val path = "modules.betterclasses.$kit"
      check(p.player.level >= c.int("$path.neededEXPLevel")) { "経験値が不足しています" }
      val globalMax = c.int("$path.maxGlobalPlayers", -1)
      val teamMax = c.int("$path.maxTeamPlayers", -1)
      check(globalMax < 0 || p.arena.members.values.count { it !== p && it.kit == kit } < globalMax)
      check(
          teamMax < 0 ||
              p.arena.members.values.count { it !== p && it.team == p.team && it.kit == kit } <
                  teamMax
      )
      val switches = c.int("modules.betterclasses.maxPlayerSwitches", -1)
      check(switches < 0 || p.switches < switches) { "クラス変更上限です" }
    }
    validateKit(c, kit)
    p.switches++
    if (p.arena.phase == "running" && c.bool("general.classSwitchAfterRespawn")) {
      p.nextKit = kit
      p.player.sendMessage("次のリスポーンからクラス: $kit")
      return
    }
    p.kit = kit
    equip(p)
    p.player.sendMessage("クラス: $kit")
  }

  private fun equip(p: Participant, respawn: Boolean = false) {
    if (respawn && p.nextKit != null) {
      p.kit = p.nextKit
      p.nextKit = null
    }
    val c = p.arena.config
    val kit = p.kit ?: error("クラス未選択です")
    val player = p.player
    player.inventory.clear()
    val chest =
        c.yaml.getString("classchests.$kit")?.let {
          Point.parse(it).location().block.state as? org.bukkit.block.Container
              ?: error("Class chest is unavailable")
        }
    val chestContents = chest?.inventory?.contents
    val items =
        chestContents?.dropLast(5)
            ?: PvpItems.list(c.yaml.getList("classitems.$kit.items") ?: emptyList<Any>())
    val armorItems =
        chestContents?.takeLast(4)?.filterNotNull()
            ?: PvpItems.list(c.yaml.getList("classitems.$kit.armor") ?: emptyList<Any>())
    val offhand =
        chestContents?.get(chestContents.size - 5)
            ?: PvpItems.list(c.yaml.getList("classitems.$kit.offhand") ?: emptyList<Any>())
                .firstOrNull()
    items.take(36).forEachIndexed { i, item -> player.inventory.setItem(i, item?.clone()) }
    armorItems.forEach { item ->
      val slot = PvpItems.armorSlot(item.type) ?: return@forEach
      var armor = item.clone()
      if (
          c.has("BetterGears") &&
              c.bool("modules.bettergears.${listOf("foot", "leg", "chest", "head")[slot]}", true)
      ) {
        val path = "modules.bettergears.colors.${p.team}"
        val color =
            if (c.yaml.contains(path))
                Color.fromRGB(c.int("$path.RED"), c.int("$path.GREEN"), c.int("$path.BLUE"))
            else if (!c.goal.teams)
                Color.fromRGB((0..255).random(), (0..255).random(), (0..255).random())
            else if (p.team.equals("red", true)) Color.RED else Color.BLUE
        if (armor.itemMeta is org.bukkit.inventory.meta.LeatherArmorMeta)
            armor = PvpItems.color(armor, color)
        else if (!c.bool("modules.bettergears.onlyifleather", true)) {
          val replacement =
              ItemStack(
                  Material.valueOf(
                      "LEATHER_${listOf("BOOTS", "LEGGINGS", "CHESTPLATE", "HELMET")[slot]}"
                  )
              )
          val meta = armor.itemMeta
          replacement.itemMeta = meta
          armor = PvpItems.color(replacement, color)
        }
      }
      player.inventory.setItem(36 + slot, armor)
    }
    if (c.bool("uses.woolHead"))
        player.inventory.setHelmet(
            ItemStack(Material.valueOf("${c.text("teams.${p.team}", "WHITE")}_WOOL"))
        )
    player.inventory.setItemInOffHand(offhand ?: ItemStack(Material.AIR))
    player.activePotionEffects.forEach { player.removePotionEffect(it.type) }
    if (c.has("BetterClasses"))
        c.yaml.getConfigurationSection("modules.betterclasses.$kit.permEffects")?.let { effects ->
          for (name in effects.getKeys(false)) {
            val effect =
                PotionEffectType.getByName(if (name == "SLOW") "SLOWNESS" else name)
                    ?: error("Unknown class effect")
            player.addPotionEffect(
                PotionEffect(
                    effect,
                    PotionEffect.INFINITE_DURATION,
                    (effects.getInt(name) - 1).coerceAtLeast(0),
                )
            )
          }
        }
  }

  private fun resetHealth(p: Participant) {
    val c = p.arena.config
    val player = p.player
    if (c.number("player.maxhealth", -1.0) > 0)
        player.getAttribute(Attribute.MAX_HEALTH)!!.baseValue = c.number("player.maxhealth")
    val maximum = player.getAttribute(Attribute.MAX_HEALTH)!!.value
    player.health =
        c.number("player.health", -1.0).takeIf { it > 0 }?.coerceAtMost(maximum) ?: maximum
    player.isCollidable = c.bool("player.collision", true)
    player.foodLevel = c.int("player.foodLevel", 20)
    player.saturation = c.number("player.saturation", 20.0).toFloat()
    player.exhaustion = c.number("player.exhaustion").toFloat()
    player.fireTicks = 0
    player.fallDistance = 0f
    p.lastAttacker = null
    p.lastHit = 0
    p.protectedUntil = System.currentTimeMillis() + c.int("time.teleportProtect", 3) * 1000L
  }

  private fun ready(p: Participant) {
    check(!p.spectator && p.arena.phase in setOf("waiting", "countdown"))
    check(p.kit != null) { "先にクラスを選んでください" }
    p.ready = true
    p.player.sendMessage("準備完了です。")
    tryCountdown(p.arena)
  }

  private fun canStart(arena: ArenaMatch): Boolean {
    val members = arena.members.values.filter { !it.spectator }
    val c = arena.config
    return readyToStart(
        c.goal.teams,
        members.map { it.team to it.ready },
        members.all { it.kit != null },
        c.int("ready.minPlayers", 2),
        c.has("QuickLounge") || c.has("BattlefieldJoin") && !c.has("StandardLounge"),
        c.bool("ready.checkEachPlayer"),
        c.bool("ready.checkEachTeam", true),
        c.number("ready.neededRatio", 0.5),
    )
  }

  private fun tryCountdown(arena: ArenaMatch) {
    if (arena.phase == "waiting" && canStart(arena)) {
      arena.phase = "countdown"
      arena.countdown = arena.config.int("time.startCountDown", 10)
      announce(
          arena,
          "start",
          arena.config
              .text("msg.starting", "${arena.config.name} starting")
              .replace("%1%", arena.config.name),
      )
    }
  }

  private fun tick(arena: ArenaMatch) {
    when (arena.phase) {
      "waiting" -> tryCountdown(arena)
      "countdown" -> {
        if (!canStart(arena)) {
          arena.phase = "waiting"
          return
        }
        if (arena.countdown-- <= 0) start(arena)
        else broadcast(arena, "開始まで ${arena.countdown + 1} 秒")
      }
      "running" -> {
        arena.elapsed++
        if (arena.config.has("AfterMatch") && !arena.after) {
          val setting = arena.config.text("modules.aftermatch.aftermatch").split(':')
          if (setting.size == 2 && setting[0] == "time" && arena.elapsed >= setting[1].toInt()) {
            arena.after = true
            val location =
                arena.config.spawns["after"]?.location() ?: error("AfterMatch spawn is missing")
            arena.members.values
                .filter { !it.spectator }
                .forEach { p ->
                  arena.rules.fighters[p.player.uniqueId.toString()]?.lives = 1
                  check(p.player.teleport(location))
                  resetHealth(p)
                }
          }
        }
        val duration = arena.config.int("general.timer.end")
        arena.rules.winners(duration > 0 && arena.elapsed >= duration)?.let { finish(arena, it) }
        scoreboard(arena)
      }
      "ending" -> if (arena.countdown-- <= 0) reset(arena)
    }
  }

  private fun start(arena: ArenaMatch) {
    val c = arena.config
    if (c.has("WorldEdit") && c.bool("modules.worldedit.autoload")) {
      check(
          Bukkit.getPluginManager().isPluginEnabled("WorldEdit") ||
              Bukkit.getPluginManager().isPluginEnabled("FastAsyncWorldEdit")
      ) {
        "WorldEdit is unavailable"
      }
      validateSchematics(folder, c)
    }
    saveYaml(arena.matchFile, YamlConfiguration().also { it.set("active", true) })
    arena.terrain.begin()
    arena.terrain.fillChests()
    arena.phase = "running"
    arena.elapsed = 0
    arena.rules =
        MatchRules(
            c.goal,
            c.limit,
            if (c.goal.teams) c.bool("goal.teamdm.suicideScore") else c.bool("uses.suicidepunish"),
        )
    val spawnIndices = mutableMapOf<String, Int>()
    arena.members.values
        .filter { !it.spectator }
        .forEach { p ->
          arena.rules.add(p.player.uniqueId.toString(), p.team)
          arena.played.add(p.player.uniqueId)
          economy?.consume(p.charge)
          val index = spawnIndices.getOrDefault(p.team, 0)
          spawnIndices[p.team] = index + 1
          check(
              p.player.teleport(
                  c.spawn(p.team, "fight", if (c.bool("general.quickspawn", true)) null else index)
                      .location()
              )
          )
          equip(p)
          resetHealth(p)
        }
    arena.initialPlayers = arena.rules.fighters.size
    scoreboard(arena)
  }

  private fun death(p: Participant, attacker: Player?, eliminate: Boolean = false) {
    val arena = p.arena
    if (p.spectator || p.pendingDeath || arena.phase != "running") return
    p.pendingDeath = true
    arena.rules.death(p.player.uniqueId.toString(), attacker?.uniqueId?.toString())
    if (arena.after || eliminate) arena.rules.fighters[p.player.uniqueId.toString()]?.active = false
    increment(p.player.uniqueId, "deaths")
    val killer =
        attacker
            ?.let { players[it.uniqueId] }
            ?.takeIf {
              it.arena === arena && it !== p && (!arena.config.goal.teams || it.team != p.team)
            }
    if (killer != null) {
      increment(killer.player.uniqueId, "kills")
      reward(killer, "kill")
      PvpItems.list(arena.config.yaml.getList("player.itemsonkill") ?: emptyList<Any>()).forEach {
        killer.player.inventory.addItem(it)
      }
    }
    reward(p, "death")
    broadcast(
        arena,
        "${p.player.name}: ${arena.rules.fighters.getValue(p.player.uniqueId.toString()).deaths} deaths",
    )
    arena.rules.winners()?.let { finish(arena, it) }
    Bukkit.getScheduler()
        .runTask(
            plugin,
            Runnable {
              isolated(arena) {
                p.pendingDeath = false
                if (players[p.player.uniqueId] !== p) {
                  recover(p.player)
                  return@isolated
                }
                if (p.player.isDead) return@isolated
                val eliminated = arena.rules.fighters[p.player.uniqueId.toString()]?.active != true
                if (eliminated && arena.phase == "running") {
                  p.spectator = true
                  p.player.inventory.clear()
                  p.player.gameMode = GameMode.SPECTATOR
                  arena.config.spawns["spectator"]?.let { check(p.player.teleport(it.location())) }
                } else if (arena.phase == "running") {
                  check(p.player.teleport(arena.config.spawn(p.team, "fight").location()))
                  equip(p, true)
                  resetHealth(p)
                } else resetHealth(p)
                arena.rules.winners()?.let { if (arena.phase == "running") finish(arena, it) }
              }
            },
        )
  }

  private fun increment(id: UUID, field: String) {
    val path = "$id.$field"
    stats.set(path, stats.getInt(path) + 1)
    saveYaml(statsFile, stats)
  }

  private fun reward(p: Participant, type: String) {
    val arena = p.arena
    val c = arena.config
    if (!c.has("Vault") && !c.has("Vaultre")) return
    if (
        type == "win" &&
            (arena.members.values.count {
              arena.rules.fighters.containsKey(it.player.uniqueId.toString())
            } < c.int("modules.vault.conditions.minPlayers", 2) ||
                arena.elapsed < c.int("modules.vault.conditions.minPlayTime"))
    )
        return
    economy?.pay(p.player.uniqueId, c.number("modules.vault.reward.$type"))
  }

  private fun finish(arena: ArenaMatch, winners: Set<String>) {
    if (arena.phase != "running") return
    arena.winners = winners
    arena.phase = "ending"
    arena.countdown = arena.config.int("time.endCountDown", 5)
    val winnersText =
        winners.joinToString { side ->
          if (arena.config.goal.teams) side
          else Bukkit.getPlayer(UUID.fromString(side))?.name ?: "player"
        }
    broadcast(arena, "勝者: ${winnersText.ifEmpty { "引き分け" }}")
    announce(arena, "winner", "${arena.config.name}: $winnersText")
    for (p in arena.members.values) {
      val fighter = arena.rules.fighters[p.player.uniqueId.toString()] ?: continue
      broadcast(arena, "${p.player.name}: ${fighter.kills} kills / ${fighter.deaths} deaths")
      if ((if (arena.config.goal.teams) p.team else p.player.uniqueId.toString()) in winners) {
        increment(p.player.uniqueId, "wins")
        reward(p, "win")
      }
    }
    val total = arena.bets.values.sumOf { it.amount }
    val winningTotal = arena.bets.values.filter { it.target in winners }.sumOf { it.amount }
    for ((id, entry) in arena.bets) {
      val payout =
          if (winners.isEmpty()) entry.amount
          else if (entry.target in winners && winningTotal > 0)
              betPayout(
                  entry.amount,
                  winningTotal,
                  total,
                  arena.config.number("modules.vault.bet.winFactor", 1.0),
              )
          else 0.0
      economy?.settle(entry.charge, payout)
    }
    arena.bets.clear()
  }

  private fun betTargets(arena: ArenaMatch): Map<String, String> =
      if (arena.config.goal.teams) arena.rules.sides().associateWith { it }
      else
          arena.rules.fighters.values
              .filter { it.active }
              .mapNotNull { fighter ->
                Bukkit.getPlayer(UUID.fromString(fighter.id))?.name?.let { it to fighter.id }
              }
              .toMap()

  private fun bet(player: Player, arena: ArenaMatch, input: String, amount: Double) {
    val c = arena.config
    check(c.has("Vault") || c.has("Vaultre"))
    check(c.bool("modules.vault.bet.enabled")) { "賭けは無効です" }
    check(arena.phase == "running" && arena.elapsed <= c.int("modules.vault.bet.time", 60)) {
      "賭け受付時間外です"
    }
    check(arena.rules.fighters[player.uniqueId.toString()] == null) { "参加者は賭けられません" }
    require(amount.isFinite() && amount > 0 && amount >= c.number("modules.vault.bet.minAmount")) {
      "金額が不正です"
    }
    val max = c.number("modules.vault.bet.maxAmount")
    require(max == 0.0 || amount <= max) { "賭け上限を超えています" }
    val names = betTargets(arena)
    val target = resolveName(input, names.keys)?.let { names[it] } ?: error("賭け対象が不正です")
    val economy = economy ?: error("Vault が必要です")
    economy.requireProvider()
    val previous = arena.bets[player.uniqueId]
    val charge = economy.charge(player, amount) ?: error("Invalid charge")
    arena.bets[player.uniqueId] = Bet(target, amount, charge)
    previous?.let { economy.refund(it.charge) }
    player.sendMessage("賭けを受け付けました。")
  }

  private fun leave(player: Player, returnKind: String = "exit") {
    val p =
        players[player.uniqueId]
            ?: run {
              recover(player)
              return
            }
    val arena = p.arena
    // Remove membership only after recovery succeeds. Failed recovery keeps event
    // protections and blocks further participation until an administrator fixes it.
    val destination =
        arena.config
            .text("tp.$returnKind", "old")
            .takeUnless { it == "old" }
            ?.let { (arena.config.spawns[it] ?: error("Return spawn is missing")).location() }
    if (!store.restore(player, destination)) return
    player.scoreboard = p.board
    if (arena.phase in setOf("waiting", "countdown")) economy?.refund(p.charge)
    players.remove(player.uniqueId)
    arena.members.remove(player.uniqueId)
    arena.rules.fighters[player.uniqueId.toString()]?.active = false
    if (arena.phase == "countdown" && !canStart(arena)) arena.phase = "waiting"
    if (arena.phase == "running") arena.rules.winners()?.let { finish(arena, it) }
  }

  private fun reset(arena: ArenaMatch) {
    arena.members.values.toList().forEach { p ->
      val kind =
          if (
              (if (arena.config.goal.teams) p.team else p.player.uniqueId.toString()) in
                  arena.winners
          )
              "win"
          else "lose"
      leave(p.player, kind)
    }
    // A death screen defers recovery until respawn; keep ending and retry next tick.
    if (arena.members.isNotEmpty()) return
    arena.spawnedEntities.forEach { Bukkit.getEntity(it)?.remove() }
    arena.spawnedEntities.clear()
    arena.terrain.restore()
    if (arena.matchFile.exists()) {
      restoreSchematic(folder, arena.config)
      check(arena.matchFile.delete())
    }
    arena.rules = MatchRules(arena.config.goal, arena.config.limit)
    arena.played.clear()
    arena.phase = "waiting"
    arena.after = false
  }

  private fun abort(arena: ArenaMatch) {
    arena.phase = "ending"
    arena.bets.values.forEach { economy?.refund(it.charge) }
    arena.bets.clear()
    arena.members.values.forEach { economy?.refund(it.charge) }
    reset(arena)
  }

  private fun broadcast(arena: ArenaMatch, message: String) =
      arena.members.values.forEach { it.player.sendMessage(message) }

  private fun announce(arena: ArenaMatch, event: String, message: String) {
    if (arena.config.has("Announcements") && arena.config.bool("modules.announcements.$event"))
        Bukkit.broadcastMessage(message)
  }

  private fun scoreboard(arena: ArenaMatch) {
    if (!arena.config.has("NCModule")) return
    val board = Bukkit.getScoreboardManager().newScoreboard
    val objective = board.registerNewObjective("pvp", "dummy", "PvP K / D")
    objective.displaySlot = org.bukkit.scoreboard.DisplaySlot.SIDEBAR
    arena.rules.fighters.values.forEach { f ->
      val name = Bukkit.getPlayer(UUID.fromString(f.id))?.name ?: "offline"
      objective.getScore("$name ${f.kills}/${f.deaths} L:${f.lives}").score = f.kills
    }
    arena.members.values.forEach { it.player.scoreboard = board }
  }

  @EventHandler
  fun onQuit(e: PlayerQuitEvent) {
    val member = players[e.player.uniqueId]
    runCatching { leave(e.player) }
        .onFailure {
          plugin.logger.log(Level.SEVERE, "PvP quit recovery failed; journal retained", it)
        }
    if (member != null && players.remove(e.player.uniqueId) != null) {
      member.arena.members.remove(e.player.uniqueId)
      member.arena.rules.fighters[e.player.uniqueId.toString()]?.active = false
      isolated(member.arena) {
        if (member.arena.phase == "running")
            member.arena.rules.winners()?.let { finish(member.arena, it) }
      }
    }
  }

  @EventHandler(priority = EventPriority.HIGHEST, ignoreCancelled = true)
  fun onDamage(e: EntityDamageEvent) {
    val victim = e.entity as? Player ?: return
    val p = players[victim.uniqueId]
    val attacker =
        (e as? EntityDamageByEntityEvent)?.damager.let {
          if (it is Player) it else (it as? Projectile)?.shooter as? Player
        }
    val a = attacker?.let { players[it.uniqueId] }
    if (p == null) {
      if (a != null) e.isCancelled = true
      return
    }
    val c = p.arena.config
    if (
        p.spectator ||
            p.pendingDeath ||
            p.arena.phase != "running" ||
            System.currentTimeMillis() < p.protectedUntil ||
            c.regions.any { it.contains(victim.location) && "NODAMAGE" in it.flags } ||
            attacker != null &&
                c.spawns
                    .filterKeys { it.startsWith(if (c.goal.teams) "${p.team}_fight" else "fight") }
                    .values
                    .any {
                      it.near(
                          Point(
                              victim.world.name,
                              victim.location.x,
                              victim.location.y,
                              victim.location.z,
                          ),
                          c.int("protection.spawn"),
                      )
                    } ||
            attacker != null &&
                (a?.arena !== p.arena ||
                    a.spectator ||
                    c.goal.teams && a.team == p.team && !c.bool("perms.teamkill"))
    ) {
      e.isCancelled = true
      return
    }
    if (attacker != null) {
      p.lastAttacker = attacker
      p.lastHit = System.currentTimeMillis()
    }
    if (e.finalDamage >= victim.health && c.bool("player.preventDeath", true)) {
      if (
          victim.inventory.itemInMainHand.type == Material.TOTEM_OF_UNDYING ||
              victim.inventory.itemInOffHand.type == Material.TOTEM_OF_UNDYING
      )
          return
      e.isCancelled = true
      isolated(p.arena) {
        death(
            p,
            attacker ?: p.lastAttacker?.takeIf { System.currentTimeMillis() - p.lastHit < 10_000 },
        )
      }
    }
  }

  @EventHandler(ignoreCancelled = true)
  fun onProjectile(e: ProjectileHitEvent) {
    val victim = e.hitEntity as? Player ?: return
    val attacker = e.entity.shooter as? Player ?: return
    val p = players[victim.uniqueId] ?: return
    val a = players[attacker.uniqueId] ?: return
    val c = p.arena.config
    if (
        a.arena !== p.arena ||
            p.spectator ||
            a.spectator ||
            p.arena.phase != "running" ||
            !c.has("Projectiles") ||
            c.goal.teams && a.team == p.team && !c.bool("perms.teamkill")
    )
        return
    val key =
        when (e.entity.type) {
          org.bukkit.entity.EntityType.SNOWBALL -> "snowball"
          org.bukkit.entity.EntityType.EGG -> "egg"
          org.bukkit.entity.EntityType.FISHING_BOBBER -> "fishHook"
          org.bukkit.entity.EntityType.ENDER_PEARL -> "enderPearl"
          else -> return
        }
    if (c.bool("modules.projectiles.$key")) {
      victim.damage(0.05, e.entity)
      victim.velocity = e.entity.velocity.multiply(0.3)
    }
  }

  @EventHandler(priority = EventPriority.HIGHEST)
  fun onActualDeath(e: PlayerDeathEvent) {
    val p = players[e.entity.uniqueId] ?: return
    e.drops.clear()
    e.droppedExp = 0
    e.keepInventory = true
    e.keepLevel = true
    isolated(p.arena) { death(p, e.entity.killer) }
  }

  @EventHandler
  fun onRespawn(e: PlayerRespawnEvent) {
    val p = players[e.player.uniqueId]
    if (p != null)
        e.respawnLocation =
            (if (p.spectator) p.arena.config.spawns["spectator"]
                else p.arena.config.spawn(p.team, "fight"))
                ?.location() ?: e.respawnLocation
    Bukkit.getScheduler()
        .runTask(
            plugin,
            Runnable {
              if (p == null) recover(e.player)
              else
                  isolated(p.arena) {
                    val eliminated =
                        p.arena.rules.fighters[e.player.uniqueId.toString()]?.active == false
                    if (eliminated) {
                      p.spectator = true
                      e.player.gameMode = GameMode.SPECTATOR
                      e.player.inventory.clear()
                    } else if (p.arena.phase == "running") {
                      equip(p, true)
                      resetHealth(p)
                    } else leave(e.player)
                  }
            },
        )
  }

  @EventHandler(ignoreCancelled = true)
  fun onMove(e: PlayerMoveEvent) {
    val p = players[e.player.uniqueId] ?: return
    if (p.spectator || p.arena.phase != "running" || p.pendingDeath) return
    if (
        p.arena.config.bool("general.leavedeath") &&
            p.arena.config.regions.any { it.type == "BATTLE" } &&
            p.arena.config.regions.none { it.type == "BATTLE" && it.contains(e.to) }
    ) {
      isolated(p.arena) {
        death(p, p.lastAttacker?.takeIf { System.currentTimeMillis() - p.lastHit < 10_000 })
      }
      return
    }
    if (p.arena.config.regions.any { it.contains(e.to) && "LOSE" in it.flags }) {
      isolated(p.arena) {
        death(p, p.lastAttacker?.takeIf { System.currentTimeMillis() - p.lastHit < 10_000 }, true)
      }
    } else if (p.arena.config.regions.any { it.contains(e.to) && "DEATH" in it.flags })
        isolated(p.arena) { death(p, e.player.killer) }
  }

  @EventHandler(priority = EventPriority.HIGHEST, ignoreCancelled = true)
  fun onInteract(e: PlayerInteractEvent) {
    val p = players[e.player.uniqueId] ?: return
    val block = e.clickedBlock ?: return
    if (!p.spectator && p.arena.phase in setOf("waiting", "countdown")) {
      if (block.type.name == p.arena.config.text("ready.block", "IRON_BLOCK")) {
        e.isCancelled = true
        runCatching { ready(p) }.onFailure { e.player.sendMessage(it.message ?: "準備できません") }
        return
      }
      val sign = block.state as? Sign
      if (sign != null) {
        val kit =
            (0..3)
                .map { org.bukkit.ChatColor.stripColor(sign.getLine(it)).orEmpty() }
                .firstNotNullOfOrNull {
                  resolveName(it.trim().removeSurrounding("[", "]"), p.arena.config.classes)
                }
        if (kit != null) {
          e.isCancelled = true
          runCatching { chooseClass(p, kit) }
              .onFailure { e.player.sendMessage(it.message ?: "選択できません") }
          return
        }
      }
    }
    if (
        p.spectator ||
            p.arena.phase != "running" ||
            (block.state is org.bukkit.block.Container &&
                (protected(block.location, "INVENTORY") ||
                    p.arena.config.regions.none { it.contains(block.location) }))
    )
        e.isCancelled = true
  }

  private fun protected(location: org.bukkit.Location, protection: String): Boolean =
      arenas.values.any { arena ->
        arena.config.bool("protection.enabled", true) &&
            arena.config.regions.any { it.contains(location) && protection in it.protections }
      }

  @EventHandler(priority = EventPriority.HIGHEST, ignoreCancelled = true)
  fun onBreak(e: BlockBreakEvent) {
    val p = players[e.player.uniqueId]
    if (
        p != null && (p.spectator || p.arena.phase != "running") ||
            protected(e.block.location, "BREAK") ||
            p?.arena
                ?.config
                ?.yaml
                ?.getStringList("block.blacklist.break")
                ?.contains(e.block.type.name) == true
    ) {
      e.isCancelled = true
      return
    }
    try {
      arenas.values.filter { it.phase == "running" }.forEach { it.terrain.beforeChange(e.block) }
    } catch (ex: Exception) {
      e.isCancelled = true
      plugin.logger.log(Level.SEVERE, "Terrain journal failed", ex)
    }
  }

  @EventHandler(priority = EventPriority.HIGHEST, ignoreCancelled = true)
  fun onPlace(e: BlockPlaceEvent) {
    val p = players[e.player.uniqueId]
    if (
        p != null && (p.spectator || p.arena.phase != "running") ||
            protected(e.block.location, "PLACE")
    ) {
      e.isCancelled = true
      return
    }
    try {
      arenas.values
          .filter { it.phase == "running" }
          .forEach { it.terrain.beforeReplaced(e.blockReplacedState) }
    } catch (ex: Exception) {
      e.isCancelled = true
      plugin.logger.log(Level.SEVERE, "Terrain journal failed", ex)
    }
  }

  @EventHandler(priority = EventPriority.HIGHEST, ignoreCancelled = true)
  fun onExplosion(e: EntityExplodeEvent) {
    e.blockList().removeIf { protected(it.location, "TNTBREAK") }
    try {
      e.blockList().forEach { block ->
        arenas.values.filter { it.phase == "running" }.forEach { it.terrain.beforeChange(block) }
      }
    } catch (ex: Exception) {
      e.isCancelled = true
      plugin.logger.log(Level.SEVERE, "Terrain journal failed", ex)
    }
  }

  @EventHandler(priority = EventPriority.HIGHEST, ignoreCancelled = true)
  fun onBlockExplosion(e: BlockExplodeEvent) {
    e.blockList().removeIf { protected(it.location, "TNTBREAK") }
    try {
      e.blockList().forEach { block ->
        arenas.values.filter { it.phase == "running" }.forEach { it.terrain.beforeChange(block) }
      }
    } catch (ex: Exception) {
      e.isCancelled = true
      plugin.logger.log(Level.SEVERE, "Terrain journal failed", ex)
    }
  }

  @EventHandler(ignoreCancelled = true)
  fun onDrop(e: PlayerDropItemEvent) {
    val p = players[e.player.uniqueId]
    if (
        p != null && (p.spectator || p.arena.phase != "running") ||
            protected(e.player.location, "DROP")
    )
        e.isCancelled = true
  }

  @EventHandler(ignoreCancelled = true)
  fun onPickup(e: EntityPickupItemEvent) {
    val p = players[e.entity.uniqueId]
    if (
        p != null && (p.spectator || p.arena.phase != "running") ||
            protected(e.entity.location, "PICKUP")
    )
        e.isCancelled = true
  }

  @EventHandler(ignoreCancelled = true)
  fun onClick(e: InventoryClickEvent) {
    val p = players[e.whoClicked.uniqueId] ?: return
    if (
        p.spectator ||
            p.arena.phase != "running" ||
            e.view.topInventory.location?.let { location ->
              protected(location, "INVENTORY") ||
                  p.arena.config.regions.none { it.contains(location) }
            } == true ||
            e.slotType == org.bukkit.event.inventory.InventoryType.SlotType.ARMOR &&
                p.arena.config.bool("uses.woolHead")
    )
        e.isCancelled = true
  }

  @EventHandler(ignoreCancelled = true)
  fun onDrag(e: InventoryDragEvent) {
    val p = players[e.whoClicked.uniqueId] ?: return
    if (
        p.spectator ||
            p.arena.phase != "running" ||
            e.view.topInventory.location?.let { location ->
              protected(location, "INVENTORY") ||
                  p.arena.config.regions.none { it.contains(location) }
            } == true
    )
        e.isCancelled = true
  }

  @EventHandler(ignoreCancelled = true)
  fun onCommand(e: PlayerCommandPreprocessEvent) {
    val p = players[e.player.uniqueId] ?: return
    val name = e.message.substringBefore(' ').removePrefix("/").substringAfter(':').lowercase()
    if (
        name !in setOf("pa", "pvparena", "ogpa") &&
            name !in p.arena.config.yaml.getStringList("cmds.whitelist") &&
            name !in global.getStringList("whitelist")
    )
        e.isCancelled = true
  }

  @EventHandler(ignoreCancelled = true)
  fun onFood(e: FoodLevelChangeEvent) {
    val p = players[e.entity.uniqueId] ?: return
    if (p.spectator || p.arena.phase != "running" || !p.arena.config.bool("player.hunger", true))
        e.isCancelled = true
  }

  @EventHandler(ignoreCancelled = true)
  fun onIgnite(e: BlockIgniteEvent) {
    if (protected(e.block.location, "FIRE")) e.isCancelled = true
  }

  @EventHandler(ignoreCancelled = true)
  fun onBurn(e: BlockBurnEvent) {
    if (protected(e.block.location, "FIRE")) e.isCancelled = true
    else
        runCatching {
              arenas.values
                  .filter { it.phase == "running" }
                  .forEach { it.terrain.beforeChange(e.block) }
            }
            .onFailure { e.isCancelled = true }
  }

  @EventHandler(ignoreCancelled = true)
  fun onSpread(e: BlockSpreadEvent) {
    if (protected(e.block.location, "NATURE")) e.isCancelled = true
  }

  @EventHandler(ignoreCancelled = true)
  fun onGrow(e: BlockGrowEvent) {
    if (protected(e.block.location, "NATURE")) e.isCancelled = true
  }

  @EventHandler(ignoreCancelled = true)
  fun onEntitySpawn(e: EntitySpawnEvent) {
    if (e.entity is Player) return
    arenas.values
        .filter {
          it.phase == "running" && it.config.regions.any { region -> region.contains(e.location) }
        }
        .forEach { it.spawnedEntities.add(e.entity.uniqueId) }
  }

  @EventHandler(ignoreCancelled = true)
  fun onCraft(e: org.bukkit.event.inventory.CraftItemEvent) {
    if (protected(e.whoClicked.location, "CRAFT")) e.isCancelled = true
  }

  @EventHandler(ignoreCancelled = true)
  fun onHanging(e: org.bukkit.event.hanging.HangingBreakEvent) {
    if (protected(e.entity.location, "PAINTING")) e.isCancelled = true
  }

  @EventHandler(ignoreCancelled = true)
  fun onHangingPlace(e: org.bukkit.event.hanging.HangingPlaceEvent) {
    if (protected(e.entity.location, "PAINTING")) e.isCancelled = true
  }

  @EventHandler(ignoreCancelled = true)
  fun onFlow(e: BlockFromToEvent) {
    if (protected(e.toBlock.location, "NATURE")) e.isCancelled = true
  }

  @EventHandler(ignoreCancelled = true)
  fun onDecay(e: LeavesDecayEvent) {
    if (protected(e.block.location, "NATURE")) e.isCancelled = true
  }

  @EventHandler(ignoreCancelled = true)
  fun onFade(e: BlockFadeEvent) {
    if (protected(e.block.location, "NATURE")) e.isCancelled = true
  }

  @EventHandler(ignoreCancelled = true)
  fun onSpawn(e: CreatureSpawnEvent) {
    if (protected(e.location, "MOBS")) e.isCancelled = true
  }

  @EventHandler(ignoreCancelled = true)
  fun onPiston(e: BlockPistonExtendEvent) {
    if (
        e.blocks.any {
          protected(it.location, "PISTON") ||
              protected(it.getRelative(e.direction).location, "PISTON")
        }
    )
        e.isCancelled = true
  }

  @EventHandler(ignoreCancelled = true)
  fun onPistonRetract(e: BlockPistonRetractEvent) {
    if (e.blocks.any { protected(it.location, "PISTON") }) e.isCancelled = true
  }

  @EventHandler(ignoreCancelled = true)
  fun onTeleport(e: PlayerTeleportEvent) {
    if (e.cause == PlayerTeleportEvent.TeleportCause.PLUGIN) return
    val p = players[e.player.uniqueId]
    if (p != null && (p.spectator || p.arena.phase != "running" || protected(e.from, "TELEPORT")))
        e.isCancelled = true
  }
}

internal fun supportedKey(key: String): Boolean =
    key in
        setOf(
            "general.enabled",
            "general.goal",
            "general.gamemode",
            "general.quickspawn",
            "general.timer.end",
            "general.classSwitchAfterRespawn",
            "general.leavedeath",
            "goal.teamdm.tdlives",
            "goal.teamdm.suicideScore",
            "goal.playerdm.pdlives",
            "goal.teamlives.tlives",
            "goal.teamplayerlives.plives",
            "goal.playerlives.plives",
            "mods",
            "ready.autoClass",
            "ready.block",
            "ready.minPlayers",
            "ready.maxPlayers",
            "ready.maxTeam",
            "ready.checkEachPlayer",
            "ready.checkEachTeam",
            "ready.neededRatio",
            "time.startCountDown",
            "time.endCountDown",
            "time.teleportProtect",
            "join.allowDuringMatch",
            "join.allowRejoin",
            "uses.ingameClassSwitch",
            "uses.woolHead",
            "uses.suicidepunish",
            "perms.teamkill",
            "player.health",
            "player.maxhealth",
            "player.foodLevel",
            "player.saturation",
            "player.exhaustion",
            "player.preventDeath",
            "player.hunger",
            "player.itemsonkill",
            "player.collision",
            "protection.enabled",
            "protection.spawn",
            "block.blacklist.break",
            "cmds.whitelist",
            "tp.exit",
            "tp.win",
            "tp.lose",
            "modules.battlefieldjoin.joinDuration",
            "modules.aftermatch.aftermatch",
            "modules.bettergears.head",
            "modules.bettergears.chest",
            "modules.bettergears.leg",
            "modules.bettergears.foot",
            "modules.bettergears.onlyifleather",
            "modules.betterclasses.maxPlayerSwitches",
            "modules.chestfiller.clear",
            "modules.chestfiller.containerList",
            "modules.chestfiller.items",
            "modules.chestfiller.maxItems",
            "modules.chestfiller.minItems",
            "modules.chestfiller.sourceLocation",
            "modules.projectiles.egg",
            "modules.projectiles.snowball",
            "modules.projectiles.fishHook",
            "modules.projectiles.enderPearl",
            "modules.blockrestore.hard",
            "modules.blockrestore.restoreblocks",
            "modules.blockrestore.restorecontainers",
            "modules.worldedit.autoload",
            "modules.worldedit.regions",
            "modules.worldedit.replaceair",
            "modules.vault.conditions.entryFee",
            "modules.vault.conditions.minPlayers",
            "modules.vault.conditions.minPlayTime",
            "modules.vault.bet.enabled",
            "modules.vault.bet.time",
            "modules.vault.bet.minAmount",
            "modules.vault.bet.maxAmount",
            "modules.vault.bet.winFactor",
            "modules.vault.reward.death",
            "modules.vault.reward.kill",
            "modules.vault.reward.win",
            "modules.announcements.start",
            "modules.announcements.join",
            "modules.announcements.winner",
            "msg.lounge",
            "msg.starting",
        ) ||
        listOf(
                "spawns.",
                "teams.",
                "classitems.",
                "classchests.",
                "arenaregion.",
                "modules.bettergears.colors.",
            )
            .any { key.startsWith(it) } ||
        key.matches(
            Regex(
                "modules\\.betterclasses\\.[^.]+\\.(maxGlobalPlayers|maxTeamPlayers|neededEXPLevel|permEffects\\.[^.]+)"
            )
        )
