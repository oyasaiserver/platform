package icu.oyasai.games.kimodameshi

import icu.oyasai.games.OyasaiGamesPlugin
import java.util.UUID
import org.bukkit.Bukkit
import org.bukkit.GameMode
import org.bukkit.Location
import org.bukkit.Material
import org.bukkit.block.Chest
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.configuration.file.YamlConfiguration
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.player.PlayerJoinEvent
import org.bukkit.event.player.PlayerQuitEvent
import org.bukkit.inventory.ItemStack

/** 元 KimodameshiSystem.sk の状態遷移。旧ゲーム中状態は移行しない。 */
class KimodameshiModule(val plugin: OyasaiGamesPlugin) : Listener, CommandExecutor {
  private lateinit var store: KimodameshiStore
  private lateinit var mechanics: KimodameshiMechanics
  val teams = linkedMapOf<UUID, String>()
  val discovery = linkedMapOf<UUID, Double>()
  val kills = linkedMapOf<UUID, Double>()
  val missions = mutableListOf<ItemStack>()
  private val joined = linkedMapOf<String, MutableList<UUID>>()
  private val participants = linkedSetOf<UUID>()
  private val recovery = linkedMapOf<UUID, YamlConfiguration>()
  private val restoring = mutableSetOf<UUID>()
  private var state = "waiting"
  private var timer = 0
  private var pending = 0
  private var failed = false
  private var ticks = 0L
  private var enabled = false

  fun enable() {
    store = KimodameshiStore(java.io.File(plugin.dataFolder, "kimodameshi.db"))
    store.importLegacy(
        java.io.File(plugin.dataFolder.parentFile, "Skript/variables.csv"),
        plugin.logger,
    )
    store.recoveries().forEach { (id, text) ->
      recovery[id] = YamlConfiguration().apply { loadFromString(text) }
    }
    mechanics = KimodameshiMechanics(this)
    enabled = true
    joined["normal"] = mutableListOf()
    joined["hunter"] = mutableListOf()
    joined["spectator"] = mutableListOf()
    loadRuntime()
    // 元 on load と同じく準備・終了の待機中は再開せず、退避を復元へ回す。
    if (state == "preparing" || state == "ending") state = "waiting"
    if (!active())
        recovery.forEach { (id, data) ->
          if (!data.getBoolean("pending")) {
            data.set("pending", true)
            data.set("earned", 0)
            data.set("reward", 0)
            persist(id)
          }
        }
    for (name in COMMANDS) plugin.getCommand(name)!!.setExecutor(this)
    plugin.server.pluginManager.registerEvents(this, plugin)
    mechanics.enable()
    console("minecraft:team add mg_name_hidden")
    console("minecraft:team modify mg_name_hidden nametagVisibility never")
    console("minecraft:team modify mg_name_hidden seeFriendlyInvisibles false")
    console("scoreboard objectives remove minigame_left")
    console("scoreboard objectives add minigame_left dummy \"§6残り探索者\"")
    later(2) {
      if (active()) {
        updateScoreboard()
        players().filter { team(it) == "runner" }.forEach { nameHidden(it) }
      } else {
        hideScoreboard()
        Bukkit.getOnlinePlayers().forEach { finalize(it) }
      }
    }
    Bukkit.getScheduler().runTaskTimer(plugin, Runnable { tick() }, 1, 1)
    plugin.logger.info("肝試しを有効化しました。")
  }

  fun disable() {
    // 待機中・退出中のプレイヤーもSQLite退避を残す。次回有効化後に復元。
    enabled = false
    if (::store.isInitialized) {
      if (::mechanics.isInitialized) persistRuntime()
      store.close()
    }
  }

  private fun loadRuntime() {
    val text = store.runtime() ?: return
    val data = YamlConfiguration().apply { loadFromString(text) }
    state = data.getString("state", "waiting")!!
    timer = data.getInt("timer")
    pending = data.getInt("preparation_pending")
    failed = data.getBoolean("preparation_failed")
    for (role in joined.keys) joined
        .getValue(role)
        .addAll(data.getStringList("joined.$role").map(UUID::fromString))
    participants.addAll(data.getStringList("participants").map(UUID::fromString))
    data.getConfigurationSection("team")?.getKeys(false)?.forEach {
      teams[UUID.fromString(it)] = data.getString("team.$it")!!
    }
    data.getConfigurationSection("discovery")?.getKeys(false)?.forEach {
      discovery[UUID.fromString(it)] = data.getDouble("discovery.$it")
    }
    data.getConfigurationSection("kills")?.getKeys(false)?.forEach {
      kills[UUID.fromString(it)] = data.getDouble("kills.$it")
    }
    for (index in data.getConfigurationSection("missions")?.getKeys(false).orEmpty()) data
        .getItemStack("missions.$index")
        ?.let { missions.add(it) }
    mechanics.loadRuntime(data)
  }

  private fun persistRuntime() {
    val data = YamlConfiguration()
    data.set("state", state)
    data.set("timer", timer)
    data.set("preparation_pending", pending)
    data.set("preparation_failed", failed)
    joined.forEach { (role, ids) -> data.set("joined.$role", ids.map(UUID::toString)) }
    data.set("participants", participants.map(UUID::toString))
    teams.forEach { (id, role) -> data.set("team.$id", role) }
    discovery.forEach { (id, points) -> data.set("discovery.$id", points) }
    kills.forEach { (id, points) -> data.set("kills.$id", points) }
    missions.forEachIndexed { i, item -> data.set("missions.$i", item) }
    mechanics.saveRuntime(data)
    store.saveRuntime(data.saveToString())
  }

  fun later(ticks: Long, action: () -> Unit) {
    Bukkit.getScheduler().runTaskLater(plugin, Runnable { if (enabled) action() }, ticks)
  }

  fun active() = state == "grace" || state == "playing"

  fun participant(p: Player) = p.uniqueId in participants

  fun team(p: Player) = teams[p.uniqueId]?.lowercase()

  fun location(x: Double, y: Double, z: Double) = Location(Bukkit.getWorld("flat"), x, y, z)

  private fun lobby() = location(1234.0, 4.0, -3035.0)

  private fun start() = location(1325.0, 26.0, -3059.0)

  private fun console(command: String) {
    Bukkit.dispatchCommand(Bukkit.getConsoleSender(), command)
  }

  private fun broadcast(message: String) {
    Bukkit.broadcastMessage(message)
  }

  private fun players() = participants.mapNotNull { Bukkit.getPlayer(it) }

  private fun nameHidden(p: Player) {
    console("minecraft:team join mg_name_hidden ${p.name}")
  }

  private fun nameShown(p: Player) {
    console("minecraft:team leave @a[name=${p.name},team=mg_name_hidden]")
  }

  private fun updateScoreboard() {
    console(
        "scoreboard players set \"§f生存中\" minigame_left ${players().count { team(it) == "runner" }}"
    )
    console("scoreboard objectives setdisplay sidebar minigame_left")
  }

  private fun hideScoreboard() {
    console("scoreboard objectives setdisplay sidebar")
    console("scoreboard players reset \"§f生存中\" minigame_left")
  }

  private fun control(x: Int, on: Boolean) {
    if (Bukkit.getWorld("flat") == null) return
    val first = location(x.toDouble(), 4.0, -3028.0).block
    val second = location(x + 1.0, 4.0, -3028.0).block
    first.type = Material.AIR
    second.type = Material.AIR
    later(1) { (if (on) first else second).type = Material.REDSTONE_BLOCK }
  }

  fun clearItems(p: Player) {
    p.inventory.clear()
  }

  private fun giveItem(p: Player, item: ItemStack) {
    p.inventory.addItem(item).values.forEach { p.world.dropItemNaturally(p.location, it) }
  }

  private fun persist(id: UUID) {
    recovery[id]?.let { store.saveRecovery(id, it.saveToString()) }
  }

  private fun snapshot(p: Player): Boolean {
    val id = p.uniqueId
    store.setName(id, p.name)
    if (recovery.containsKey(id)) return false
    p.closeInventory()
    val data = YamlConfiguration()
    data.set("gamemode", p.gameMode.name)
    data.set("health", p.health)
    data.set("food", p.foodLevel)
    data.set("experience", totalExperience(p.level, p.exp))
    p.inventory.contents.forEachIndexed { slot, item ->
      if (item != null && item.type != Material.AIR) data.set("slot.$slot", item.clone())
    }
    recovery[id] = data
    persist(id)
    return true
  }

  private fun prepare(p: Player, role: String) {
    if (!p.isOnline || !snapshot(p)) {
      failed = true
      pending--
      return
    }
    clearItems(p)
    p.gameMode = if (role == "spectator") GameMode.SPECTATOR else GameMode.ADVENTURE
    later(1) {
      if (state != "preparing") return@later
      if (!p.isOnline) {
        failed = true
        pending--
        return@later
      }
      clearItems(p)
      console("effect clear ${p.name}")
      p.foodLevel = 20 // Skript food level 10（満腹度は0..10）。
      when (role) {
        "hunter" -> {
          hunterAttributes(p)
          console("attribute ${p.name} minecraft:entity_interaction_range base reset")
          console("attribute ${p.name} minecraft:block_interaction_range base reset")
          p.performCommand("ch 3")
          p.performCommand("leave g")
          val chest = location(1248.0, 7.0, -3026.0).block.state as Chest
          p.inventory.setHelmet(chest.inventory.getItem(0)?.clone())
          p.inventory.setChestplate(chest.inventory.getItem(1)?.clone())
          for (slot in 2..26) chest.inventory.getItem(slot)?.let { giveItem(p, it.clone()) }
          p.sendMessage("§cあなたは鬼です。30秒後に出発します。")
        }
        "runner" -> {
          runnerAttributes(p)
          console("attribute ${p.name} minecraft:block_interaction_range base reset")
          p.performCommand("ch 2")
          p.performCommand("leave g")
          val chest = location(1247.0, 7.0, -3026.0).block.state as Chest
          chest.inventory.contents.filterNotNull().forEach { giveItem(p, it.clone()) }
          p.teleport(start())
          p.sendMessage("§aあなたは探索者です。15分間で可能な限りミッションをこなして下さい。")
        }
        else -> {
          p.teleport(start())
          p.sendMessage("§eあなたは観戦者です。")
        }
      }
      pending--
    }
  }

  private fun hunterAttributes(p: Player) {
    console("attribute ${p.name} minecraft:movement_speed base set 0.06")
    console("effect give ${p.name} minecraft:invisibility infinite 1 true")
  }

  private fun runnerAttributes(p: Player) {
    console("attribute ${p.name} minecraft:movement_speed base set 0.09")
    console("attribute ${p.name} minecraft:entity_interaction_range base set 0")
    console("effect give ${p.name} minecraft:weakness infinite 1 true")
    nameHidden(p)
  }

  private fun finalize(p: Player) {
    val id = p.uniqueId
    val data = recovery[id] ?: return
    if (!data.getBoolean("pending") || !p.isOnline || !restoring.add(id)) return
    console("effect clear ${p.name}")
    clearItems(p)
    p.gameMode = GameMode.valueOf(data.getString("gamemode")!!)
    later(1) {
      restoring.remove(id)
      if (!p.isOnline) return@later
      clearItems(p)
      for (slot in 0..40) p.inventory.setItem(slot, data.getItemStack("slot.$slot"))
      p.health = data.getDouble("health")
      p.foodLevel = data.getInt("food")
      setTotalExperience(p, data.getInt("experience"))
      for (attribute in
          listOf("movement_speed", "entity_interaction_range", "block_interaction_range")) console(
          "attribute ${p.name} minecraft:$attribute base reset"
      )
      nameShown(p)
      p.performCommand("ch g")
      p.performCommand("leave 2")
      p.performCommand("leave 3")
      if (Bukkit.getWorld("flat") != null) p.teleport(lobby())
      val earned = data.getDouble("earned")
      val reward = data.getDouble("reward")
      // 元スクリプトにも実アイテム配布はない。表示と一度限りの完了処理を保持。
      if (reward > 0 && !data.getBoolean("reward_given")) {
        data.set("reward_given", true)
        persist(id)
      }
      p.sendMessage("§e==============================")
      p.sendMessage("§b 今回の獲得イベントポイント: ${number(earned)}")
      if (reward > 0) p.sendMessage("§a 獲得報酬 (狐火): ${number(reward)} 個")
      p.sendMessage("§6 現在の総イベントポイント: ${number(store.points(id))}")
      p.sendMessage("§e==============================")
      recovery.remove(id)
      store.deleteRecovery(id)
      teams.remove(id)
      participants.remove(id)
      mechanics.clear(id)
      persistRuntime()
    }
  }

  @EventHandler
  fun onQuit(event: PlayerQuitEvent) {
    val p = event.player
    if (participant(p) && active() && team(p) == "runner") {
      teams[p.uniqueId] = "spectator"
      broadcast("§c${p.name} は途中退出のため脱落しました。")
      persistRuntime()
      later(1) { checkRunnerCount() }
    }
  }

  @EventHandler
  fun onJoin(event: PlayerJoinEvent) {
    val p = event.player
    store.setName(p.uniqueId, p.name)
    later(2) {
      val data = recovery[p.uniqueId] ?: return@later
      if (data.getBoolean("pending")) {
        finalize(p)
        return@later
      }
      if (active() && participant(p)) {
        val role = team(p)
        p.gameMode = if (role == "spectator") GameMode.SPECTATOR else GameMode.ADVENTURE
        later(1) {
          if (!p.isOnline) return@later
          if (role == "spectator") {
            clearItems(p)
            p.teleport(start())
            p.sendMessage("§eゲーム中に戻ったため、観戦者として復帰しました。")
          } else {
            if (role == "hunter") {
              hunterAttributes(p)
              if (state == "playing") p.teleport(start())
            } else if (role == "runner") {
              runnerAttributes(p)
              p.teleport(start())
            }
            p.sendMessage("§e進行中のゲームへ復帰しました。")
          }
          updateScoreboard()
        }
      } else {
        data.set("pending", true)
        data.set("earned", 0)
        data.set("reward", 0)
        persist(p.uniqueId)
        finalize(p)
      }
    }
  }

  private fun validate(): String {
    if (Bukkit.getWorld("flat") == null) return "ゲームワールド 'flat' が見つかりません。"
    joined.values.forEach { ids -> ids.removeIf { Bukkit.getPlayer(it) == null } }
    val total = joined.getValue("normal").size + joined.getValue("hunter").size
    if (total < 3) return "開始にはオンラインの参加者が最低3人必要です。"
    if (total > 10) return "参加者が定員10人を超えています。"
    joined.values.flatten().forEach { id ->
      if (id in recovery) return "${Bukkit.getPlayer(id)?.name} に前回ゲームの未復元データが残っています。"
    }
    if (location(1247.0, 7.0, -3026.0).block.type != Material.CHEST) return "探索者用アイテムチェストが見つかりません。"
    if (location(1248.0, 7.0, -3026.0).block.type != Material.CHEST) return "鬼用アイテムチェストが見つかりません。"
    return "ok"
  }

  private fun startGame(sender: CommandSender) {
    if (state != "waiting") {
      sender.sendMessage("§c現在の状態は $state です。開始処理は実行できません。")
      return
    }
    state = "preparing"
    val validation = validate()
    if (validation != "ok") {
      state = "waiting"
      sender.sendMessage("§c[開始失敗] $validation")
      return
    }
    val total = joined.getValue("normal").size + joined.getValue("hunter").size
    val limit = hunterLimit(total)
    val mode = if (limit == 2) "small" else "large"
    mechanics.loadMissions(mode)
    if (missions.isEmpty()) {
      state = "waiting"
      sender.sendMessage("§c[開始失敗] ミッション用の名付き地図が1枚も読み込めませんでした。")
      return
    }
    participants.clear()
    val candidates = joined.getValue("hunter").shuffled() + joined.getValue("normal").shuffled()
    candidates.forEachIndexed { i, id ->
      participants.add(id)
      teams[id] = if (i < limit) "hunter" else "runner"
    }
    joined.getValue("spectator").forEach {
      participants.add(it)
      teams[it] = "spectator"
    }
    control(1240, mode == "small")
    failed = false
    pending = participants.size
    players().forEach { prepare(it, team(it)!!) }
  }

  private fun tick() {
    if (!enabled) return
    ticks++
    if (state == "preparing" && pending <= 0) {
      if (participants.any { Bukkit.getPlayer(it) == null }) failed = true
      if (failed) {
        broadcast("§c[開始中断] 参加者の初期化または接続確認に失敗したため、安全に中断します。")
        endGame("preparation_failed", false)
      } else {
        timer = 900
        state = "grace"
        players().filter { team(it) == "runner" }.forEach { giveMission(it, "none") }
        updateScoreboard()
        control(1242, true)
        broadcast("§a[ゲームスタート]")
      }
    }
    if (ticks % 20L == 0L && active()) {
      if (timer > 0) {
        timer--
        if (state == "grace" && timer <= 870) {
          state = "playing"
          broadcast("§c【警告】鬼が放出されました！")
          Bukkit.getOnlinePlayers().forEach {
            it.playSound(it.location, "entity.wither.spawn", 1f, 1f)
          }
          players().filter { team(it) == "hunter" }.forEach { it.teleport(start()) }
        }
      } else endGame("time", true)
    }
    if (ticks % 20L == 0L || state == "preparing") persistRuntime()
  }

  fun checkRunnerCount() {
    if (!active()) return
    updateScoreboard()
    if (players().none { team(it) == "runner" }) endGame("runners_eliminated", true)
  }

  fun giveMission(p: Player, last: String) {
    mechanics.giveMission(p, last)
  }

  private fun endGame(reason: String, award: Boolean) {
    if (state == "waiting" || state == "ending") return
    state = "ending"
    timer = 0
    hideScoreboard()
    when (reason) {
      "time" -> broadcast("§b時間切れ！探索者の任務達成です！")
      "runners_eliminated" -> broadcast("§c探索者が全滅しました！鬼の勝利です！")
      "forced" -> broadcast("§c【管理者】ゲームを強制終了します。")
    }
    control(1242, false)
    control(1240, false)
    participants.forEach { id ->
      val earned = if (award) (discovery[id] ?: 0.0) + (kills[id] ?: 0.0) else 0.0
      if (earned > 0) store.setPoints(id, store.points(id) + earned)
      if (id !in recovery) {
        teams.remove(id)
        mechanics.clear(id)
      }
      recovery[id]?.let { data ->
        data.set("pending", true)
        data.set("earned", earned)
        data.set("reward", earned * 2)
        data.set("award", award)
        persist(id)
      }
      discovery.remove(id)
      kills.remove(id)
    }
    Bukkit.getOnlinePlayers().forEach { finalize(it) }
    joined.values.forEach { it.clear() }
    participants.clear()
    missions.clear()
    pending = 0
    failed = false
    state = "waiting"
    broadcast("§eゲームが終了しました。再予約が可能です。")
    persistRuntime()
  }

  override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<out String>,
  ): Boolean {
    val result = handleCommand(sender, command, args)
    persistRuntime()
    return result
  }

  private fun handleCommand(
      sender: CommandSender,
      command: Command,
      args: Array<out String>,
  ): Boolean {
    val cmd = command.name.lowercase()
    if (cmd in ADMIN && !sender.hasPermission("op")) {
      sender.sendMessage("§cYou don't have the required permission to use this command")
      return true
    }
    if (cmd in PLAYER && sender !is Player) {
      sender.sendMessage("§cThis command can only be used by players")
      return true
    }
    fun requiredPlayer(index: Int): Player? {
      val name = args.getOrNull(index) ?: return null
      Bukkit.getPlayerExact(name)?.let {
        return it
      }
      val matches = Bukkit.getOnlinePlayers().filter { it.name.startsWith(name, ignoreCase = true) }
      if (matches.size == 1) return matches.single()
      sender.sendMessage(
          if (matches.isEmpty()) "§cThere is no player online whose name starts with '$name'"
          else "§cThere are several players online whose names start with '$name'"
      )
      return null
    }
    when (cmd) {
      "joingame" -> {
        if (args.isEmpty()) return false
        val p = sender as Player
        if (state != "waiting") {
          p.sendMessage("§c現在は参加予約できません。")
          return true
        }
        if (p.uniqueId in recovery) {
          p.sendMessage("§c前回ゲームの復元処理が完了していません。再接続するか管理者に連絡してください。")
          return true
        }
        joined.values.forEach { it.remove(p.uniqueId) }
        if (joined.getValue("normal").size + joined.getValue("hunter").size >= 10) {
          joined.getValue("spectator").add(p.uniqueId)
          p.sendMessage("§e定員(10名)に達しているため、観戦者として予約しました。")
        } else {
          val hunter = args.joinToString(" ").equals("hunter", ignoreCase = true)
          joined.getValue(if (hunter) "hunter" else "normal").add(p.uniqueId)
          p.sendMessage(if (hunter) "§b[予約] 鬼を希望して予約しました！" else "§b[予約] 通常参加として予約しました！")
        }
      }
      "leavegame" -> {
        if (state != "waiting") {
          sender.sendMessage("§c現在は予約を取り消せません。")
          return true
        }
        joined.values.forEach { it.remove((sender as Player).uniqueId) }
        sender.sendMessage("§a参加予約を取り消しました。")
      }
      "startgame" -> startGame(sender)
      "givemission" -> {
        if (args.size != 1) return false
        giveMission(requiredPlayer(0) ?: return true, "none")
      }
      "checkmission" -> {
        if (sender is Player) {
          sender.sendMessage("§cThis command can only be used by the console")
          return true
        }
        if (args.size < 4) return false
        val coordinates = args.take(3).map { it.toDoubleOrNull() ?: return false }
        mechanics.checkMission(
            coordinates[0],
            coordinates[1],
            coordinates[2],
            args.drop(3).joinToString(" "),
        )
      }
      "setteam" -> {
        if (args.size < 2) return false
        val p = requiredPlayer(0) ?: return true
        val role = args.drop(1).joinToString(" ")
        teams[p.uniqueId] = role
        sender.sendMessage("§a${p.name} をチーム [$role] に設定しました。")
      }
      "clearteams" -> {
        if (state != "waiting")
            sender.sendMessage("§cゲーム中は /clearteams を使用できません。/stopgame で安全に復元してください。")
        else {
          teams.clear()
          sender.sendMessage("§c全プレイヤーのチーム情報をリセットしました。")
        }
      }
      "points" -> {
        val p = sender as Player
        if (args.isNotEmpty() && !p.isOp) {
          p.sendMessage("§c他人のポイントを確認する権限がありません。")
          return true
        }
        val t = if (args.isEmpty()) p else requiredPlayer(0) ?: return true
        p.sendMessage("§e=== ${t.name} のポイント情報 ===")
        p.sendMessage("§b発見ポイント (現在のゲーム): ${number(discovery[t.uniqueId] ?: 0.0)}")
        p.sendMessage("§cキルポイント (現在のゲーム): ${number(kills[t.uniqueId] ?: 0.0)}")
        p.sendMessage("§6イベント累計ポイント: ${number(store.points(t.uniqueId))}")
      }
      "eventstats" -> eventStats(sender)
      "editpoints" -> {
        if (args.size != 4) return false
        val t = requiredPlayer(1) ?: return true
        val amount = args[3].toDoubleOrNull() ?: return false
        val id = t.uniqueId
        store.setName(id, t.name)
        val type = args[2]
        val old =
            when (type.lowercase()) {
              "discovery" -> discovery[id] ?: 0.0
              "kill" -> kills[id] ?: 0.0
              "event" -> store.points(id)
              else -> {
                sender.sendMessage("§cポイントの種類は discovery, kill, event のいずれかを指定してください。")
                return true
              }
            }
        val next =
            when (args[0].lowercase()) {
              "add" -> old + amount
              "remove" -> old - amount
              "set" -> amount
              else -> {
                sender.sendMessage("§c操作は add, remove, set のいずれかを指定してください。")
                return true
              }
            }
        when (type.lowercase()) {
          "discovery" -> discovery[id] = next
          "kill" -> kills[id] = next
          "event" -> store.setPoints(id, next)
        }
        sender.sendMessage(
            when (args[0].lowercase()) {
              "add" -> "§a${t.name} の $type ポイントに ${number(amount)} を追加しました。"
              "remove" -> "§a${t.name} の $type ポイントから ${number(amount)} を引きました。"
              else -> "§a${t.name} の $type ポイントを ${number(amount)} に設定しました。"
            }
        )
      }
      "stopgame" ->
          when (state) {
            "preparing",
            "grace",
            "playing" -> endGame("forced", true)
            "ending" -> sender.sendMessage("§e現在、終了・復元処理中です。")
            else -> sender.sendMessage("§c現在ゲームは進行していません。")
          }
      "recovergameplayer" -> {
        if (args.size != 1) return false
        val p = requiredPlayer(0) ?: return true
        val data = recovery[p.uniqueId]
        if (data == null) {
          sender.sendMessage("§e${p.name} に未復元のスナップショットはありません。")
          return true
        }
        if (!data.getBoolean("pending")) {
          data.set("pending", true)
          data.set("earned", 0)
          data.set("reward", 0)
          data.set("award", false)
          persist(p.uniqueId)
        }
        finalize(p)
        sender.sendMessage("§a${p.name} の復元処理を実行しました。")
      }
    }
    return true
  }

  private fun eventStats(sender: CommandSender) {
    val points = store.allPoints().filterValues { it > 0 }
    if (points.isEmpty()) {
      sender.sendMessage("§eイベントポイントを持っているプレイヤーはいません。")
      return
    }
    sender.sendMessage("§e========== イベントポイント全統計 ==========")
    points.forEach { (id, value) ->
      val name = store.name(id) ?: id.toString()
      sender.sendMessage(
          "§f$name §8| §6累計: ${number(value)} §8| §b発見: ${number(discovery[id] ?: 0.0)} §8| §cキル: ${number(kills[id] ?: 0.0)}"
      )
    }
    sender.sendMessage("§e------------------------------------------")
    sender.sendMessage(
        "§fポイント保持者: §a${points.size}人 §8| §f全員の累計合計: §6${number(points.values.sum())}pt"
    )
    sender.sendMessage("§7※ 発見・キルは現在進行中のゲーム分です。")
    sender.sendMessage("§e==========================================")
  }

  companion object {
    val COMMANDS =
        listOf(
            "joingame",
            "leavegame",
            "startgame",
            "givemission",
            "checkmission",
            "setteam",
            "clearteams",
            "points",
            "eventstats",
            "editpoints",
            "stopgame",
            "recovergameplayer",
        )
    private val ADMIN =
        setOf(
            "givemission",
            "setteam",
            "clearteams",
            "eventstats",
            "editpoints",
            "stopgame",
            "recovergameplayer",
        )
    private val PLAYER = setOf("joingame", "leavegame", "points")

    fun hunterLimit(total: Int) = if (total <= 6) 2 else 4

    fun number(value: Double) =
        if (value == value.toLong().toDouble()) value.toLong().toString() else value.toString()

    // Skript PlayerUtils の total experience と同じ。giveExp は修繕を発火するため使わない。
    fun levelExperience(level: Int) =
        when {
          level <= 15 -> 2 * level + 7
          level <= 30 -> 5 * level - 38
          else -> 9 * level - 158
        }

    fun totalExperience(level: Int, progress: Float): Int {
      val base =
          when {
            level <= 15 -> level * level + 6 * level
            level <= 30 -> (2.5 * level * level - 40.5 * level + 360).toInt()
            else -> (4.5 * level * level - 162.5 * level + 2220).toInt()
          }
      return (base + levelExperience(level) * progress.toDouble()).toInt()
    }

    fun experienceState(total: Int): Pair<Int, Float> {
      var remaining = total.coerceAtLeast(0)
      var level = 0
      while (remaining >= levelExperience(level)) {
        remaining -= levelExperience(level)
        level++
      }
      return level to remaining.toFloat() / levelExperience(level)
    }

    fun setTotalExperience(p: Player, total: Int) {
      val (level, progress) = experienceState(total)
      p.level = level
      p.exp = progress
    }
  }
}
