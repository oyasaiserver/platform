package icu.oyasai.utilities.teleport

import icu.oyasai.utilities.Main
import java.io.File
import java.util.UUID
import java.util.logging.Level
import org.bukkit.Bukkit
import org.bukkit.Location
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.command.PluginCommand
import org.bukkit.command.TabCompleter
import org.bukkit.configuration.file.YamlConfiguration
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.EventPriority
import org.bukkit.event.HandlerList
import org.bukkit.event.Listener
import org.bukkit.event.player.PlayerJoinEvent
import org.bukkit.event.player.PlayerQuitEvent
import org.bukkit.event.player.PlayerTeleportEvent
import org.bukkit.scheduler.BukkitTask

/** Owns travel data and jail policy; Essentials is only an optional compatibility adapter. */
class TeleportFeature(private val plugin: Main) : Listener, CommandExecutor, TabCompleter {
  lateinit var store: TeleportStore
    private set

  lateinit var locations: TeleportLocations
    private set

  private lateinit var settings: YamlConfiguration
  private val replaced = mutableMapOf<String, Command>()
  private val authorized = mutableMapOf<UUID, Location>()
  private val requests = TpaRequests()
  private var task: BukkitTask? = null
  private var active = false
  private var bridge: TravelBridge = object : TravelBridge {}

  fun enable() {
    val essentials = File(plugin.dataFolder.parentFile, "Essentials")
    store = TeleportStore(requireNotNull(plugin.database), File(essentials, "userdata"))
    locations = TeleportLocations(plugin.dataFolder, essentials)
    if (plugin.server.pluginManager.isPluginEnabled("Essentials")) {
      bridge =
          EssentialsTravelBridge(
              requireNotNull(plugin.server.pluginManager.getPlugin("Essentials"))
          )
    }
    val file = File(plugin.dataFolder, "Teleport/config.yml")
    settings =
        YamlConfiguration().apply {
          if (file.exists()) load(file)
          else {
            set("teleport-safety", true)
            set("teleport-to-center", true)
            set("world-teleport-permissions", true)
            set("world-home-permissions", false)
            set("per-warp-permission", false)
            set("spawn-if-no-home", true)
            set("jail-online-time", false)
            set("tpa-accept-cancellation", 120)
            set("teleport-back-when-freed-from-jail", true)
            set("sethome-multiple.default", 3)
            set("sethome-multiple.vip", 5)
            set("sethome-multiple.staff", 10)
            file.parentFile.mkdirs()
            save(file)
          }
        }
    (TeleportRules.aliases + mapOf("spawn" to emptyList())).forEach { (name, aliases) ->
      val own = requireNotNull(plugin.getCommand(name))
      if (name != "spawn") {
        own.setExecutor(this)
        own.tabCompleter = this
      }
      (listOf(name) + aliases).forEach { label ->
        val old = plugin.server.commandMap.knownCommands[label]
        if (
            old != null &&
                old != own &&
                ((old is PluginCommand && old.plugin.name == "Essentials") ||
                    old.javaClass.name.startsWith("org.bukkit.command.defaults.") ||
                    old.javaClass.name.endsWith(".VanillaCommandWrapper") ||
                    old === plugin.server.commandMap.knownCommands["minecraft:$label"])
        ) {
          replaced[label] = old
          plugin.server.commandMap.knownCommands[label] = own
        }
      }
    }
    plugin.server.pluginManager.registerEvents(this, plugin)
    active = true
    Bukkit.getOnlinePlayers().forEach(::loadPlayer)
    task =
        plugin.server.scheduler.runTaskTimer(
            plugin,
            Runnable {
              Bukkit.getOnlinePlayers().forEach { expireJail(it) }
              pruneRequests()
            },
            20,
            20,
        )
  }

  fun disable() {
    active = false
    task?.cancel()
    HandlerList.unregisterAll(this)
    requests.clear()
    authorized.clear()
    replaced.forEach { (label, old) ->
      if ((plugin.server.commandMap.knownCommands[label] as? PluginCommand)?.plugin == plugin)
          plugin.server.commandMap.knownCommands[label] = old
    }
    replaced.clear()
  }

  private fun error(sender: CommandSender, text: String): Boolean {
    sender.sendMessage("§c$text")
    return true
  }

  private fun permission(sender: CommandSender, node: String) {
    require(sender.hasPermission(node)) { "権限がありません: $node" }
  }

  private fun online(sender: CommandSender, name: String): Player {
    val target =
        runCatching { UUID.fromString(name) }.getOrNull()?.let(Bukkit::getPlayer)
            ?: Bukkit.getPlayerExact(name)
            ?: Bukkit.getPlayer(name)
    require(
        target != null &&
            (sender !is Player ||
                sender.canSee(target) ||
                sender.hasPermission("essentials.vanish.interact"))
    ) {
      "プレイヤーが見つかりません: $name"
    }
    return target
  }

  // Offline operations only consult known Bukkit profiles; no all-user migration or network lookup.
  @Suppress("DEPRECATION")
  private fun profile(name: String): UUID =
      runCatching { UUID.fromString(name) }.getOrNull()
          ?: Bukkit.getPlayerExact(name)?.uniqueId
          ?: Bukkit.getOfflinePlayerIfCached(name)?.uniqueId
          ?: throw IllegalArgumentException("既知のプレイヤーが見つかりません: $name (UUIDも指定できます)")

  private fun worldPermission(
      sender: CommandSender,
      from: Location,
      to: Location,
      home: Boolean = false,
  ) {
    val enabled =
        settings.getBoolean(if (home) "world-home-permissions" else "world-teleport-permissions")
    if (
        enabled &&
            !TeleportRules.worldAllowed(from.world.name, to.world.name, sender::hasPermission)
    )
        permission(sender, "essentials.worlds.${to.world.name}")
  }

  fun isJailed(player: Player): Boolean = store.get(player.uniqueId).jailed

  fun jailLocation(player: Player): Location? =
      store.get(player.uniqueId).jail?.let { locations.jails[it.lowercase()]?.resolve() }

  fun homeForRespawn(player: Player): Location? {
    val homes = store.get(player.uniqueId).homes
    return homes["home"]?.resolve()
        ?: homes.values
            .firstOrNull {
              it.worldUuid == player.world.uid.toString() || it.worldName == player.world.name
            }
            ?.resolve()
        ?: homes.values.firstOrNull()?.resolve()
  }

  /**
   * Async chunk load, then all safety/world access and teleport initiation on the server thread.
   */
  fun teleport(player: Player, destination: Location): Boolean {
    if (isJailed(player)) {
      error(player, "入獄中は移動できません")
      return false
    }
    if (
        !listOf(
                destination.x,
                destination.y,
                destination.z,
                destination.yaw.toDouble(),
                destination.pitch.toDouble(),
            )
            .all { it.isFinite() }
    ) {
      error(player, "移動先の座標が不正です")
      return false
    }
    val world = destination.world ?: return false
    if (!world.worldBorder.isInside(destination)) {
      error(player, "移動先がワールドの境界外です")
      return false
    }
    val chunkX = destination.blockX shr 4
    val chunkZ = destination.blockZ shr 4
    // Radius 3 can cross any neighboring edge; the fallback searches at most 48 blocks east.
    val chunks =
        (-1..3).flatMap { dx ->
          (-1..1).map { dz -> world.getChunkAtAsync(chunkX + dx, chunkZ + dz) }
        }
    java.util.concurrent.CompletableFuture.allOf(*chunks.toTypedArray()).whenComplete { _, failure
      ->
      plugin.server.scheduler.runTask(
          plugin,
          Runnable {
            if (!active || !player.isOnline) return@Runnable
            if (failure != null) {
              error(player, "移動先の読み込みに失敗しました")
              return@Runnable
            }
            if (isJailed(player)) {
              error(player, "入獄中は移動できません")
              return@Runnable
            }
            val safe =
                TeleportSafety.destination(
                    player,
                    destination,
                    settings.getBoolean("teleport-safety", true),
                    settings.getBoolean("teleport-to-center", true),
                )
            if (safe == null) error(player, "安全な移動先が見つかりません")
            else
                player.teleportAsync(safe, PlayerTeleportEvent.TeleportCause.COMMAND).thenAccept {
                    success ->
                  if (!success) plugin.logger.fine("Travel cancelled for ${player.uniqueId}")
                }
          },
      )
    }
    return true
  }

  private fun jailMove(player: Player, destination: Location, after: (Boolean) -> Unit = {}) {
    // Synchronous teleport scopes the exemption to this exact event, not a delayed unrelated
    // teleport.
    authorized[player.uniqueId] = destination.clone()
    try {
      after(player.teleport(destination, PlayerTeleportEvent.TeleportCause.COMMAND))
    } finally {
      authorized.remove(player.uniqueId)
    }
  }

  @EventHandler(priority = EventPriority.HIGHEST, ignoreCancelled = false)
  fun onTeleport(event: PlayerTeleportEvent) {
    val jailed =
        try {
          isJailed(event.player)
        } catch (failure: Exception) {
          event.isCancelled = true
          plugin.logger.log(
              Level.SEVERE,
              "Teleport: cannot read jail state; movement denied",
              failure,
          )
          return
        }
    if (!jailed) return
    val permit = authorized[event.player.uniqueId]
    val jail = jailLocation(event.player)
    if (
        TeleportRules.jailAllowsTeleport(
            true,
            SavedLocation.from(event.to),
            permit?.let(SavedLocation::from),
        )
    )
        return
    // Jail YAML defines a point, not a region. Only that point can be a permitted destination.
    if (
        TeleportRules.jailAllowsTeleport(
            true,
            SavedLocation.from(event.to),
            jail?.let(SavedLocation::from),
        )
    )
        return
    event.isCancelled = true
    event.player.sendMessage("§c入獄中は牢屋の外へ移動できません")
  }

  @EventHandler(priority = EventPriority.LOWEST)
  fun onJoin(event: PlayerJoinEvent) {
    loadPlayer(event.player)
  }

  private fun loadPlayer(player: Player) {
    try {
      store.get(player.uniqueId)
      store.flush()
      // Imported state is now authoritative here. Prevent Essentials' old jail listener and timer
      // from redirecting a later release. Do not erase unrelated mute/nickname/fly data.
      clearLegacyJail(player)
      expireJail(player)
      if (isJailed(player))
          plugin.server.scheduler.runTask(
              plugin,
              Runnable {
                if (player.isOnline && isJailed(player))
                    jailLocation(player)?.let { jailMove(player, it) }
              },
          )
    } catch (failure: Exception) {
      plugin.logger.log(Level.SEVERE, "Teleport: failed to import ${player.uniqueId}", failure)
      // Fail closed; a broken import must not let an imprisoned player escape.
      player.kick(net.kyori.adventure.text.Component.text("移動データの読み込みに失敗しました。運営へ連絡してください。"))
    }
  }

  private fun clearLegacyJail(player: Player) {
    bridge.clearJail(player)
  }

  @EventHandler
  fun onQuit(event: PlayerQuitEvent) {
    requests.clear(event.player.uniqueId)
    store.forget(event.player.uniqueId)
  }

  private fun expireJail(player: Player) {
    val state = store.get(player.uniqueId)
    val expired =
        state.jailTimeout > 0 &&
            state.jailTimeout <= System.currentTimeMillis() &&
            (state.onlineJailUntilTicks <= 0 ||
                player.getStatistic(org.bukkit.Statistic.PLAY_ONE_MINUTE).toLong() >=
                    state.onlineJailUntilTicks)
    if (state.jailed && expired) release(player.uniqueId)
  }

  private fun release(id: UUID) {
    val state = store.get(id)
    state.jailed = false
    state.jail = null
    state.jailTimeout = 0
    state.onlineJailUntilTicks = 0
    val back = state.returnLocation?.resolve()
    state.returnLocation = null
    store.save(id)
    Bukkit.getPlayer(id)?.let { player ->
      clearLegacyJail(player)
      if (settings.getBoolean("teleport-back-when-freed-from-jail", true))
          jailMove(
              player,
              back
                  ?: icu.oyasai.utilities.spawn.SpawnFeature.spawnLocation()
                  ?: Bukkit.getWorlds().first().spawnLocation,
          )
      player.sendMessage("§a釈放されました")
    }
  }

  override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<out String>,
  ): Boolean {
    try {
      permission(sender, "essentials.${command.name}")
      if (sender is Player && isJailed(sender)) return error(sender, "入獄中はこのコマンドを使用できません")
      when (command.name) {
        "home",
        "sethome",
        "delhome" -> homes(sender, command.name, args)
        "warp" -> warp(sender, args)
        "tp" -> directTp(sender, args)
        "tphere" -> {
          val player = sender as? Player ?: throw IllegalArgumentException("プレイヤー専用です")
          val target =
              online(
                  sender,
                  args.firstOrNull() ?: throw IllegalArgumentException("/tphere <player>"),
              )
          acceptance(player, target)
          worldPermission(sender, target.location, player.location)
          teleport(target, player.location)
        }
        "tpa",
        "tpahere" -> request(sender, command.name == "tpahere", args)
        "tpaccept",
        "tpdeny",
        "tpacancel" -> response(sender, command.name, args)
        "togglejail" -> toggleJail(sender, args)
      }
    } catch (failure: IllegalArgumentException) {
      error(sender, failure.message ?: "引数が不正です")
    } catch (failure: Exception) {
      plugin.logger.log(Level.SEVERE, "Travel command failed", failure)
      error(sender, "移動データの処理に失敗しました")
    }
    return true
  }

  private fun homes(sender: CommandSender, command: String, args: Array<out String>) {
    val player = sender as? Player
    val parts = args.firstOrNull()?.split(':', limit = 2) ?: emptyList()
    val other = parts.size == 2 || (args.size >= 2 && command != "home")
    val owner =
        if (other) {
          permission(sender, "essentials.$command.others")
          profile(parts[0])
        } else player?.uniqueId ?: throw IllegalArgumentException("他人:ホーム名を指定してください")
    val state = store.get(owner)
    var name =
        (if (parts.size == 2) parts[1] else if (other) args[1] else parts.firstOrNull() ?: "")
            .lowercase()
    when (command) {
      "home" -> {
        require(player != null) { "プレイヤー専用です" }
        if (name == "bed") {
          permission(sender, "essentials.home.bed")
          val bed =
              Bukkit.getPlayer(owner)?.respawnLocation
                  ?: throw IllegalArgumentException("有効なベッドがありません")
          teleport(player, bed)
          return
        }
        if (name.isEmpty() || !state.homes.containsKey(name)) {
          if (state.homes.isEmpty()) {
            if (owner == player.uniqueId && settings.getBoolean("spawn-if-no-home")) {
              teleport(
                  player,
                  if (player.hasPermission("essentials.home.bed"))
                      player.respawnLocation ?: player.world.spawnLocation
                  else player.world.spawnLocation,
              )
              return
            }
            throw IllegalArgumentException("ホームがありません")
          }
          if (owner == player.uniqueId && state.homes.size == 1) name = state.homes.keys.first()
          else {
            sender.sendMessage("§6ホーム: ${state.homes.keys.joinToString(", ")}")
            return
          }
        }
        val loc = state.homes[name]?.resolve() ?: throw IllegalArgumentException("ホームのワールドが見つかりません")
        worldPermission(sender, player.location, loc, true)
        teleport(player, loc)
      }
      "sethome" -> {
        require(player != null) { "プレイヤー専用です" }
        if (name.isEmpty()) name = "home"
        val limit = homeLimit(sender)
        if (limit == 1) name = "home"
        require(
            name != "bed" && name.toIntOrNull() == null && name.isNotBlank() && !name.contains('.')
        ) {
          "ホーム名が不正です"
        }
        require(state.homes.containsKey(name) || state.homes.size < limit) { "ホームの上限は $limit 個です" }
        require(TeleportSafety.canSetHome(player, player.location)) { "安全な場所でホームを設定してください" }
        state.homes[name] = SavedLocation.from(player.location)
        store.save(owner)
        sender.sendMessage("§aホーム '$name' を設定しました")
      }
      else -> {
        require(name.isNotEmpty() && name != "bed") { "/delhome <名前>" }
        if (name == "*") state.homes.clear()
        else require(state.homes.remove(name) != null) { "ホームがありません: $name" }
        store.save(owner)
        sender.sendMessage("§aホームを削除しました")
      }
    }
  }

  private fun homeLimit(sender: CommandSender): Int {
    val groups = settings.getConfigurationSection("sethome-multiple")
    val limits =
        groups?.getKeys(false)?.associateWith { groups.getInt(it) } ?: mapOf("default" to 3)
    return TeleportRules.homeLimit(sender::hasPermission, limits).coerceAtLeast(1)
  }

  private fun warp(sender: CommandSender, args: Array<out String>) {
    if (args.isEmpty() || args[0].toIntOrNull() != null) {
      permission(sender, "essentials.warp.list")
      sender.sendMessage(
          "§6ワープ: ${locations.warps.keys.filter { !settings.getBoolean("per-warp-permission") || sender.hasPermission("essentials.warps.$it") }.joinToString(", ")}"
      )
      return
    }
    val target =
        if (args.size >= 2) {
          require(
              sender.hasPermission("essentials.warp.otherplayers") ||
                  sender.hasPermission("essentials.warp.others")
          ) {
            "他人をワープさせる権限がありません"
          }
          online(sender, args[1])
        } else sender as? Player ?: throw IllegalArgumentException("/warp <name> <player>")
    val name = args[0].lowercase()
    if (settings.getBoolean("per-warp-permission")) permission(sender, "essentials.warps.$name")
    val loc =
        locations.warps[name]?.resolve() ?: throw IllegalArgumentException("ワープが見つかりません: $name")
    teleport(target, loc)
  }

  private fun acceptance(sender: Player, target: Player) {
    require(!isJailed(target)) { "対象は入獄中です" }
    require(plugin.tpSwitchFeature.accepts(target, sender)) { "${target.name} はテレポートを受け入れていません" }
  }

  private fun directTp(sender: CommandSender, args: Array<out String>) {
    require(args.isNotEmpty()) { "/tp <player> | <from> <to> | [player] <x> <y> <z>" }
    val actor = sender as? Player
    if (args.size == 3 || args.size == 4) {
      permission(sender, "essentials.tp.position")
      val target =
          if (args.size == 4) {
            permission(sender, "essentials.tp.others")
            online(sender, args[0])
          } else actor ?: throw IllegalArgumentException("対象を指定してください")
      val offset = if (args.size == 4) 1 else 0
      val base = target.location
      fun coord(token: String, relative: Double): Double {
        val value =
            if (token.startsWith("~"))
                relative + (token.substring(1).takeIf { it.isNotEmpty() }?.toDouble() ?: 0.0)
            else token.toDouble()
        require(value.isFinite() && kotlin.math.abs(value) <= 30000000) { "座標が範囲外です" }
        return value
      }
      if (actor != null && target != actor) acceptance(actor, target)
      teleport(
          target,
          Location(
              target.world,
              coord(args[offset], base.x),
              coord(args[offset + 1], base.y),
              coord(args[offset + 2], base.z),
              base.yaw,
              base.pitch,
          ),
      )
      return
    }
    val target: Player
    val destination: Player
    if (args.size == 1) {
      target = actor ?: throw IllegalArgumentException("対象を指定してください")
      destination = online(sender, args[0])
    } else {
      permission(sender, "essentials.tp.others")
      target = online(sender, args[0])
      destination = online(sender, args[1])
    }
    if (actor != null) {
      acceptance(actor, destination)
      if (target != actor) acceptance(actor, target)
    }
    worldPermission(sender, target.location, destination.location)
    teleport(target, destination.location)
  }

  private fun pruneRequests() {
    requests.expirationMillis = settings.getLong("tpa-accept-cancellation", 120) * 1000
    requests.expire()
  }

  private fun request(sender: CommandSender, here: Boolean, args: Array<out String>) {
    val player = sender as? Player ?: throw IllegalArgumentException("プレイヤー専用です")
    val target = online(sender, args.firstOrNull() ?: throw IllegalArgumentException("対象を指定してください"))
    require(player != target) { "自分へ申請できません" }
    permission(target, "essentials.tpaccept")
    acceptance(player, target)
    worldPermission(
        sender,
        if (here) target.location else player.location,
        if (here) player.location else target.location,
    )
    pruneRequests()
    requests.add(
        TpaRequest(
            player.uniqueId,
            target.uniqueId,
            here,
            SavedLocation.from(player.location),
            System.currentTimeMillis(),
        )
    )
    target.sendMessage(
        "§6${player.name} が${if (here) "自分の場所への" else "あなたへの"}テレポートを申請しました。/tpaccept または /tpdeny (${settings.getLong("tpa-accept-cancellation")}秒)"
    )
    player.sendMessage("§a申請を送りました。/tpacancel で取り消せます")
  }

  private fun response(sender: CommandSender, command: String, args: Array<out String>) {
    val player = sender as? Player ?: throw IllegalArgumentException("プレイヤー専用です")
    pruneRequests()
    val name = args.firstOrNull()
    val all = name == "*" || name.equals("all", true)
    val selected =
        if (command == "tpacancel")
            requests.outgoing(player.uniqueId).filter {
              name == null || all || Bukkit.getPlayer(it.recipient)?.name.equals(name, true)
            }
        else
            requests
                .pending(player.uniqueId)
                .filter {
                  name == null || all || Bukkit.getPlayer(it.sender)?.name.equals(name, true)
                }
                .let { if (name == null) it.take(1) else it }
    require(selected.isNotEmpty()) { "有効な申請がありません" }
    selected.forEach { request ->
      if (command == "tpaccept") {
        val requester =
            Bukkit.getPlayer(request.sender) ?: throw IllegalArgumentException("申請者がオフラインです")
        permission(requester, if (request.here) "essentials.tpahere" else "essentials.tpa")
        acceptance(requester, player)
        val mover = if (request.here) player else requester
        val loc =
            if (request.here)
                request.location.resolve() ?: throw IllegalArgumentException("申請先のワールドがありません")
            else player.location
        if (settings.getBoolean("world-teleport-permissions") && player.world != requester.world)
            permission(
                player,
                "essentials.worlds.${if (request.here) player.world.name else requester.world.name}",
            )
        requests.remove(request)
        teleport(mover, loc)
        requester.sendMessage("§a${player.name} が申請を承認しました")
      } else {
        requests.remove(request)
        Bukkit.getPlayer(if (command == "tpacancel") request.recipient else request.sender)
            ?.sendMessage("§6${player.name} が申請を取り消し／拒否しました")
      }
    }
    player.sendMessage("§a申請を処理しました")
  }

  private fun notifyJail(message: String) {
    Bukkit.getOnlinePlayers()
        .filter { it.hasPermission("essentials.jail.notify") }
        .forEach { it.sendMessage(message) }
  }

  private fun toggleJail(sender: CommandSender, args: Array<out String>) {
    val id =
        profile(
            args.firstOrNull()
                ?: throw IllegalArgumentException("/togglejail <player> [jail] [duration]")
        )
    val state = store.get(id)
    val durationText = args.drop(2).joinToString(" ")
    when (TeleportRules.jailAction(state.jailed, state.jail, args.getOrNull(1), durationText)) {
      TeleportRules.JailAction.RELEASE -> {
        release(id)
        sender.sendMessage("§a釈放しました")
        return
      }
      TeleportRules.JailAction.UPDATE -> {
        state.jailTimeout = TeleportRules.parseJailDuration(durationText)
        state.onlineJailUntilTicks =
            if (settings.getBoolean("jail-online-time"))
                Bukkit.getOfflinePlayer(id)
                    .getStatistic(org.bukkit.Statistic.PLAY_ONE_MINUTE)
                    .toLong() +
                    TeleportRules.parseJailDuration(durationText, emptyEpoch = true) / 50
            else 0
        store.save(id)
        sender.sendMessage("§a入獄期限を更新しました")
        notifyJail("§6${sender.name} が ${Bukkit.getOfflinePlayer(id).name ?: id} の入獄期限を更新しました")
        plugin.logger.info(
            "Jail: $id sentence updated by ${sender.name}, timeout=${state.jailTimeout}"
        )
        return
      }
      TeleportRules.JailAction.ENTER -> Unit
    }
    val target = Bukkit.getPlayer(id)
    if (target == null) permission(sender, "essentials.togglejail.offline")
    require(
        if (target != null) !target.hasPermission("essentials.jail.exempt")
        else !bridge.offlineExempt(id) && !Bukkit.getOfflinePlayer(id).isOp
    ) {
      "対象は入獄免除されています"
    }
    val jail =
        (args.getOrNull(1)
                ?: locations.jails.keys.singleOrNull()
                ?: throw IllegalArgumentException("牢屋を指定してください"))
            .lowercase()
    val loc = locations.jails[jail]?.resolve() ?: throw IllegalArgumentException("牢屋の地点が見つかりません")
    val timeout = if (args.size > 2) TeleportRules.parseJailDuration(durationText) else 0
    fun apply() {
      state.jailed = true
      state.jail = jail
      state.jailTimeout = timeout
      state.onlineJailUntilTicks =
          if (settings.getBoolean("jail-online-time") && timeout > 0)
              Bukkit.getOfflinePlayer(id)
                  .getStatistic(org.bukkit.Statistic.PLAY_ONE_MINUTE)
                  .toLong() + TeleportRules.parseJailDuration(durationText, emptyEpoch = true) / 50
          else 0
      requests.clear(id)
      store.save(id)
      sender.sendMessage("§a入獄しました: $jail")
      target?.sendMessage("§c入獄しました: $jail")
      notifyJail("§6${sender.name} が ${Bukkit.getOfflinePlayer(id).name ?: id} を $jail に入れました")
      plugin.logger.info("Jail: $id -> $jail by ${sender.name}, timeout=$timeout")
    }
    if (target == null) apply()
    else {
      val previous = SavedLocation.from(target.location)
      // Enforce confinement during entry as well: another listener must not reroute entry outside.
      state.jailed = true
      state.jail = jail
      try {
        jailMove(target, loc) { success ->
          if (success) {
            state.returnLocation = previous
            apply()
          } else {
            state.jailed = false
            state.jail = null
            error(sender, "牢屋への移動が取り消されました")
          }
        }
      } catch (failure: Exception) {
        state.jailed = false
        state.jail = null
        throw failure
      }
    }
  }

  override fun onTabComplete(
      sender: CommandSender,
      command: Command,
      alias: String,
      args: Array<out String>,
  ): List<String> {
    if (!active || args.isEmpty()) return emptyList()
    val options =
        when (command.name) {
          "warp" ->
              if (args.size == 1) locations.warps.keys.toList()
              else Bukkit.getOnlinePlayers().map { it.name }
          "home",
          "delhome" ->
              if (sender is Player && args.size == 1)
                  store.get(sender.uniqueId).homes.keys.toList() +
                      if (sender.hasPermission("essentials.home.bed")) listOf("bed")
                      else emptyList()
              else emptyList()
          "togglejail" ->
              if (args.size == 2) locations.jails.keys.toList()
              else Bukkit.getOnlinePlayers().map { it.name }
          "sethome" -> emptyList()
          else ->
              Bukkit.getOnlinePlayers()
                  .filter { sender !is Player || sender.canSee(it) }
                  .map { it.name }
        }
    return options.filter { it.startsWith(args.last(), true) }
  }
}
