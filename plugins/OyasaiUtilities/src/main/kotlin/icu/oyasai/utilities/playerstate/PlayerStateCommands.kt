package icu.oyasai.utilities.playerstate

import org.bukkit.Bukkit
import org.bukkit.GameMode
import org.bukkit.Material
import org.bukkit.OfflinePlayer
import org.bukkit.World
import org.bukkit.command.Command
import org.bukkit.command.CommandSender
import org.bukkit.command.TabExecutor
import org.bukkit.entity.Player
import org.bukkit.event.entity.EntityRegainHealthEvent
import org.bukkit.event.player.PlayerTeleportEvent.TeleportCause

class PlayerStateCommands(private val feature: PlayerStateFeature) : TabExecutor {
  private val settings
    get() = feature.settings

  private val store
    get() = feature.store

  override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<out String>,
  ): Boolean {
    try {
      permission(sender, "essentials.${command.name}")
      val invoked = label.lowercase().substringAfter(':')
      when (command.name) {
        "gamemode" -> gamemode(sender, invoked, args)
        "fly" -> fly(sender, args)
        "speed" -> speed(sender, invoked, args)
        "jump" -> {
          val player = self(sender)
          if (
              args.firstOrNull()?.contains("lock") == true &&
                  player.hasPermission("essentials.jump.lock")
          )
              player.sendMessage("§6左クリックジャンプ: ${if (feature.toggleJump(player)) "有効" else "無効"}")
          else jump(player)
        }
        "time" -> time(sender, invoked, args)
        "weather" -> weather(sender, invoked, args)
        "ptime" -> ptime(sender, args)
        "heal" -> heal(sender, args)
        "afk" -> afk(sender, args)
        "nick" -> nick(sender, args)
        "realname" -> {
          require(args.isNotEmpty()) { "/realname <nickname>" }
          online(sender).forEach(feature::applyNick)
          val found =
              online(sender).filter {
                PlayerStateRules.plain(it.displayName).contains(args[0], true)
              }
          require(found.isNotEmpty()) { "プレイヤーが見つかりません。" }
          found.forEach { sender.sendMessage("§6${it.displayName}§6 の本名は ${it.name} です。") }
        }
      }
    } catch (e: IllegalArgumentException) {
      sender.sendMessage("§c${e.message}")
    } catch (e: Exception) {
      feature.plugin.logger.log(
          java.util.logging.Level.SEVERE,
          "PlayerState: /${command.name} failed",
          e,
      )
      sender.sendMessage("§cプレイヤー状態の操作に失敗しました。サーバーログを確認してください。")
    }
    return true
  }

  private fun permission(sender: CommandSender, node: String) {
    require(sender !is Player || sender.hasPermission(node)) { "この操作を行う権限がありません ($node)。" }
  }

  private fun self(sender: CommandSender) =
      sender as? Player ?: throw IllegalArgumentException("プレイヤーを指定してください。")

  private fun online(sender: CommandSender) =
      Bukkit.getOnlinePlayers().filter {
        sender !is Player || sender.canSee(it) || sender.hasPermission("essentials.vanish.interact")
      }

  private fun targets(sender: CommandSender, name: String): List<Player> {
    val players = online(sender)
    val result =
        when (name) {
          "*",
          "**" -> players
          "@s",
          "@p" -> listOf(self(sender))
          else -> {
            val exact =
                players.firstOrNull {
                  it.name.equals(name, true) || it.uniqueId.toString().equals(name, true)
                }
            if (exact != null) listOf(exact)
            else
                players
                    .filter { it.name.startsWith(name, true) }
                    .ifEmpty {
                      players.filter { PlayerStateRules.plain(it.displayName).contains(name, true) }
                    }
          }
        }
    require(result.isNotEmpty()) { "プレイヤーが見つかりません。" }
    return result
  }

  private fun gamemode(sender: CommandSender, label: String, args: Array<out String>) {
    val player = sender as? Player
    val mode: GameMode?
    val targets: List<Player>
    if (player == null) {
      require(args.isNotEmpty()) { "/gamemode <mode> <player>" }
      mode = PlayerStateRules.mode(if (args.size == 1) label else args[0])
      targets = targets(sender, if (args.size == 1) args[0] else args[1])
      require(mode != null) { "他人のゲームモードには toggle を指定できません。" }
    } else if (
        args.size > 1 &&
            args[1].trim().length > 2 &&
            player.hasPermission("essentials.gamemode.others")
    ) {
      mode = PlayerStateRules.mode(args[0])
      targets = targets(sender, args[1])
      require(mode != null) { "他人のゲームモードには toggle を指定できません。" }
    } else {
      val parsed = runCatching { PlayerStateRules.mode(args.firstOrNull() ?: label) }
      if (
          parsed.isFailure &&
              args.isNotEmpty() &&
              player.hasPermission("essentials.gamemode.others")
      ) {
        mode = PlayerStateRules.mode(label)
        targets = targets(sender, args[0])
        require(mode != null) { "他人のゲームモードには toggle を指定できません。" }
      } else {
        mode =
            parsed.getOrThrow()
                ?: when (player.gameMode) {
                  GameMode.SURVIVAL -> GameMode.CREATIVE
                  GameMode.CREATIVE -> GameMode.ADVENTURE
                  else -> GameMode.SURVIVAL
                }
        targets = listOf(player)
      }
    }
    val finalMode = requireNotNull(mode)
    if (player != null)
        require(PlayerStateRules.canChangeMode(player::hasPermission, finalMode)) {
          "${finalMode.name.lowercase()} に変更する権限がありません。"
        }
    targets.forEach {
      it.gameMode = finalMode
      sender.sendMessage("§6${it.name} のゲームモードを ${finalMode.name.lowercase()} に変更しました。")
    }
  }

  private fun fly(sender: CommandSender, args: Array<out String>) {
    val player = sender as? Player
    val toggle = PlayerStateRules.toggle(args.firstOrNull())
    val other =
        player == null ||
            (player.hasPermission("essentials.fly.others") &&
                ((args.size == 1 && toggle == null) || args.size == 2))
    val targets =
        if (other) {
          require(args.isNotEmpty() && args[0].trim().length >= 2) { "/fly <player> [on|off]" }
          targets(sender, args[0])
        } else listOf(self(sender))
    val value =
        if (other) PlayerStateRules.toggle(args.getOrNull(1))
        else if (args.size == 1) toggle else null
    targets.forEach { target ->
      val enabled = value ?: !target.allowFlight
      if (feature.bridge.allowFly(sender, target, enabled)) {
        val saved = store.get(target.uniqueId)
        saved.flyMode = enabled
        saved.flying = enabled && target.isFlying
        store.save(target.uniqueId)
        feature.bridge.syncFly(target, enabled)
        target.fallDistance = 0f
        if (!enabled) target.isFlying = false
        target.allowFlight = enabled
        target.sendMessage("§6飛行モードを${if (enabled) "有効" else "無効"}にしました。")
        if (target != sender) sender.sendMessage("§6${target.name} の飛行モード: $enabled")
      }
    }
  }

  private fun speed(sender: CommandSender, label: String, args: Array<out String>) {
    val player = sender as? Player
    require(args.isNotEmpty()) { "/speed [fly|walk] <speed> [player]" }
    fun flyType(s: String): Boolean =
        when {
          s.contains("fly") || s.equals("f", true) -> true
          s.contains("walk") || s.contains("run") || s.lowercase() in listOf("w", "r") -> false
          else -> throw IllegalArgumentException("fly または walk を指定してください。")
        }
    val requested =
        if (args.size == 1) label.contains("fly") || self(sender).isFlying else flyType(args[0])
    val fly =
        if (player != null) PlayerStateRules.speedType(requested, player::hasPermission)
        else requested
    val n = (if (args.size == 1) args[0] else args[1]).toFloat()
    val targets =
        if (player == null || (args.size > 2 && player.hasPermission("essentials.speed.others"))) {
          require(args.size > 2 && args[2].trim().length >= 2) {
            "/speed <fly|walk> <speed> <player>"
          }
          targets(sender, args[2])
        } else listOf(player)
    val real =
        PlayerStateRules.speed(
            n,
            fly,
            player == null || player.hasPermission("essentials.speed.bypass"),
            if (fly) settings.maxFly else settings.maxWalk,
        )
    targets.forEach { target ->
      if (fly) target.flySpeed = real else target.walkSpeed = real
      feature.saveFlight(target)
      sender.sendMessage(
          "§6${target.name} の${if (fly) "飛行" else "歩行"}速度: ${n.coerceIn(0.0001f, 10f)}"
      )
    }
  }

  fun jump(player: Player) {
    try {
      val transparent =
          Material.values()
              .filter { it.isBlock && (it.isTransparent || it == Material.WATER) }
              .toSet()
      val block = player.getTargetBlock(transparent, 300)
      val destination =
          block.location.add(0.5, 1.0, 0.5).apply {
            yaw = player.location.yaw
            pitch = player.location.pitch
          }
      require(player.world.worldBorder.isInside(destination)) { "ジャンプ先がワールド境界の外です。" }
      // Paper's collision checks replace Essentials' shared teleport safety provider.
      require(
          !block.isPassable &&
              destination.block.isPassable &&
              destination.clone().add(0.0, 1.0, 0.0).block.isPassable &&
              block.type !in PlayerStateFeature.dangerous
      ) {
        "安全なジャンプ先が見つかりません。"
      }
      player.teleportAsync(destination, TeleportCause.COMMAND)
    } catch (e: IllegalArgumentException) {
      player.sendMessage("§c${e.message}")
    }
  }

  private fun worlds(sender: CommandSender, selector: String?): List<World> =
      when {
        selector == null -> if (sender is Player) listOf(sender.world) else Bukkit.getWorlds()
        selector.equals("all", true) || selector == "*" -> Bukkit.getWorlds()
        else -> listOf(requireNotNull(Bukkit.getWorld(selector)) { "ワールドが見つかりません。" })
      }

  private fun time(sender: CommandSender, label: String, args: Array<out String>) {
    if (args.isEmpty() && label !in listOf("day", "night")) {
      worlds(sender, null).forEach { sender.sendMessage("§6${it.name}: ${it.time} ticks") }
      return
    }
    val sub = args.size > 1 && args[0].lowercase() in listOf("set", "add")
    val add = sub && args[0].equals("add", true)
    val n =
        PlayerStateRules.ticks(
            if (args.isEmpty()) label else args[if (sub) 1 else 0],
            bareTicks = true,
        )
    val worlds = worlds(sender, args.getOrNull(if (sub) 2 else 1))
    permission(sender, "essentials.time.set")
    worlds.forEach {
      if (
          settings.bool("world-time-permissions") &&
              sender is Player &&
              !sender.hasPermission("essentials.time.world.all")
      )
          permission(
              sender,
              "essentials.time.world.${it.name.lowercase().replace(Regex("\\s+"), "_")}",
          )
    }
    worlds.forEach { world ->
      val personal =
          world.players
              .filter { it.playerTimeOffset != 0L && it.isPlayerTimeRelative }
              .associateWith { it.playerTime }
      var current = world.time
      if (!add) current -= current % 24000
      world.time = current + (if (add) 0 else 24000) + n
      personal.forEach { (player, visible) -> player.setPlayerTime(visible - world.time, true) }
      sender.sendMessage("§6${world.name} の時刻${if (add) "に加算" else "を設定"}: $n ticks")
    }
  }

  private fun weather(sender: CommandSender, label: String, args: Array<out String>) {
    val world: World
    val storm: Boolean
    val duration: String?
    if (sender is Player) {
      world = sender.world
      require(args.isNotEmpty() || label in listOf("sun", "rain")) {
        "/weather <storm|sun> [seconds]"
      }
      storm = if (args.isEmpty()) label == "rain" else args[0].equals("storm", true)
      duration = args.getOrNull(1)
    } else {
      require(args.size >= 2) { "/weather <world> <storm|sun> [seconds]" }
      world = requireNotNull(Bukkit.getWorld(args[0])) { "ワールドが見つかりません。" }
      storm = args[1].equals("storm", true)
      duration = args.getOrNull(2)
    }
    val ticks = duration?.toInt()?.let { Math.multiplyExact(it, 20) }
    world.setStorm(storm)
    if (ticks != null) world.weatherDuration = ticks
    sender.sendMessage(
        "§6${world.name} の天気: ${if (storm) "雨" else "晴れ"}${duration?.let { " ($it 秒)" } ?: ""}"
    )
  }

  private fun ptime(sender: CommandSender, args: Array<out String>) {
    if (args.isEmpty() || args[0].lowercase() in listOf("get", "list", "show", "display")) {
      val targets =
          if (args.size > 1) targets(sender, args[1])
          else if (sender is Player) listOf(sender)
          else {
            require(args.isEmpty()) { "プレイヤーを指定してください。" }
            online(sender)
          }
      targets.forEach {
        sender.sendMessage(
            "§6${it.name}: ${it.playerTime % 24000} ticks (${if (it.playerTimeOffset == 0L) "通常" else if (it.isPlayerTimeRelative) "相対" else "固定"})"
        )
      }
      return
    }
    if (args.size > 1 && !args[1].equals("@s", true)) permission(sender, "essentials.ptime.others")
    val fixed = args[0].startsWith("@")
    val text = args[0].removePrefix("@")
    val reset = text in listOf("reset", "normal", "default")
    val ticks = if (reset) 0 else PlayerStateRules.ticks(text)
    val targets = if (args.size > 1) targets(sender, args[1]) else listOf(self(sender))
    targets.forEach { player ->
      if (reset) player.resetPlayerTime()
      else {
        var time = player.playerTime
        time -= time % 24000
        time += 24000 + ticks
        if (!fixed) time -= player.world.time
        player.setPlayerTime(time, !fixed)
      }
      sender.sendMessage("§6${player.name} の個人時刻: ${if (reset) "通常" else "$ticks ticks"}")
    }
  }

  private fun heal(sender: CommandSender, args: Array<out String>) {
    if (sender is Player && !sender.hasPermission("essentials.heal.cooldown.bypass")) {
      val now = System.currentTimeMillis()
      require(
          now - (store.get(sender.uniqueId).lastHeal) >= settings.int("heal-cooldown") * 1000L
      ) {
        "回復コマンドのクールダウン中です。"
      }
      store.get(sender.uniqueId).lastHeal = now
      store.save(sender.uniqueId)
    }
    val targets =
        if (
            sender !is Player ||
                (args.isNotEmpty() && sender.hasPermission("essentials.heal.others"))
        ) {
          require(args.isNotEmpty()) { "/heal <player>" }
          targets(sender, args[0])
        } else listOf(sender)
    targets.forEach { player ->
      require(player.health > 0) { "死亡中のプレイヤーは回復できません。" }
      val event =
          EntityRegainHealthEvent(
              player,
              player.maxHealth - player.health,
              EntityRegainHealthEvent.RegainReason.CUSTOM,
          )
      Bukkit.getPluginManager().callEvent(event)
      if (!event.isCancelled) {
        player.health = (player.health + event.amount).coerceAtMost(player.maxHealth)
        player.foodLevel = 20
        player.fireTicks = 0
        player.remainingAir = player.maximumAir
        if (settings.bool("remove-effects-on-heal"))
            player.activePotionEffects.forEach { player.removePotionEffect(it.type) }
        player.sendMessage("§6回復しました。")
        if (sender != player) sender.sendMessage("§6${player.name} を回復しました。")
      }
    }
  }

  private fun afk(sender: CommandSender, args: Array<out String>) {
    var message = args.joinToString(" ").ifEmpty { null }
    val target =
        if (sender !is Player) {
          require(args.isNotEmpty()) { "/afk <player> [message]" }
          message = args.drop(1).joinToString(" ").ifEmpty { null }
          targets(sender, args[0]).first()
        } else if (args.isNotEmpty() && sender.hasPermission("essentials.afk.others")) {
          val other = runCatching { targets(sender, args[0]).first() }.getOrNull()
          if (other != null) message = args.drop(1).joinToString(" ").ifEmpty { null }
          other ?: sender
        } else sender
    if (message != null && sender is Player) permission(sender, "essentials.afk.message")
    feature.setAfk(target, !feature.isAfk(target), message)
  }

  private fun nick(sender: CommandSender, args: Array<out String>) {
    require(args.isNotEmpty()) { "/nick [player] <nickname|off>" }
    val other =
        sender !is Player || (args.size > 1 && sender.hasPermission("essentials.nick.others"))
    val target: OfflinePlayer
    val input: String
    if (other) {
      require(args.size > 1) { "/nick <player> <nickname|off>" }
      target =
          runCatching { targets(sender, args[0]).first() }.getOrNull()
              ?: Bukkit.getOfflinePlayerIfCached(args[0])
              ?: throw IllegalArgumentException("参加履歴のあるプレイヤーを指定してください。")
      input = args[1]
    } else {
      target = self(sender)
      input = args[0]
    }
    val formatted =
        if (sender is Player)
            PlayerStateRules.formatNick(input, sender::hasPermission) { node ->
              sender.effectivePermissions.firstOrNull { it.permission.equals(node, true) }?.value
            }
        else PlayerStateRules.formatNick(input, { true }, { null })
    if (sender is Player) {
      require(
          sender.hasPermission("essentials.nick.allowunsafe") ||
              settings.nickRegex.matches(formatted)
      ) {
        "使用できない文字が含まれています。"
      }
      if (
          sender.hasPermission("essentials.nick.changecolors") &&
              !sender.hasPermission("essentials.nick.changecolors.bypass")
      )
          require(PlayerStateRules.plain(formatted) == sender.name || input.equals("off", true)) {
            "名前の色だけを変更できます。"
          }
      if (!sender.hasPermission("essentials.nick.blacklist.bypass"))
          require(settings.nickBlacklist.none { it.containsMatchIn(formatted) }) {
            "このニックネームは禁止されています。"
          }
    }
    val length =
        if (settings.bool("ignore-colors-in-max-nick-length"))
            PlayerStateRules.plain(formatted).length
        else PlayerStateRules.unformat(formatted).length
    require(
        length <= settings.int("max-nick-length") && PlayerStateRules.plain(formatted).isNotEmpty()
    ) {
      "ニックネームの長さが不正です。"
    }
    val nickname = if (formatted.equals("off", true)) null else formatted
    if (nickname != null && !nickname.equals(target.name, true)) {
      val plain = PlayerStateRules.plain(nickname)
      require(
          Bukkit.getOnlinePlayers().none {
            it.uniqueId != target.uniqueId &&
                (it.name.equals(plain, true) ||
                    PlayerStateRules.plain(store.get(it.uniqueId).nickname ?: "")
                        .equals(plain, true))
          } &&
              Bukkit.getOfflinePlayerIfCached(plain)?.let { it.uniqueId == target.uniqueId } !=
                  false
      ) {
        "その名前は既に使用されています。"
      }
    }
    val online = target.player
    if (online != null && !feature.bridge.allowNick(sender, online, nickname)) return
    val saved = store.get(target.uniqueId)
    saved.nickname = nickname
    saved.lastName = target.name ?: saved.lastName
    store.save(target.uniqueId)
    if (online != null) {
      feature.bridge.syncNick(online, nickname)
      feature.applyNick(online)
    }
    sender.sendMessage("§6${target.name} のニックネーム: ${nickname ?: "解除"}")
  }

  override fun onTabComplete(
      sender: CommandSender,
      command: Command,
      alias: String,
      args: Array<out String>,
  ): List<String> {
    if (!sender.hasPermission("essentials.${command.name}") || args.isEmpty()) return emptyList()
    val players = online(sender).map { it.name }
    val other = sender !is Player || sender.hasPermission("essentials.${command.name}.others")
    val options =
        when (command.name) {
          "gamemode" ->
              if (
                  args.size == 1 &&
                      runCatching { PlayerStateRules.mode(alias.substringAfter(':')) }.isSuccess &&
                      other
              )
                  players
              else if (args.size == 1)
                  listOf("creative", "survival", "adventure", "spectator", "toggle")
              else if (args.size == 2 && other) players else emptyList()
          "fly" ->
              if (args.size == 1 && other) players
              else if (args.size <= 2) listOf("enable", "disable") else emptyList()
          "speed" ->
              when (args.size) {
                1 -> listOf("fly", "walk", "1", "1.5", "1.75", "2")
                2 -> listOf("1", "1.5", "1.75", "2")
                3 -> if (other) players else emptyList()
                else -> emptyList()
              }
          "jump" ->
              if (args.size == 1 && sender.hasPermission("essentials.jump.lock"))
                  listOf("lock", "unlock")
              else emptyList()
          "time" ->
              when {
                args.size == 1 && sender.hasPermission("essentials.time.set") ->
                    listOf("set", "add")
                args.size == 2 -> PlayerStateRules.timeNames.keys.toList()
                args.size == 3 -> Bukkit.getWorlds().map { it.name } + "*"
                else -> emptyList()
              }
          "weather" ->
              if (sender !is Player && args.size == 1) Bukkit.getWorlds().map { it.name }
              else if (args.size == (if (sender is Player) 1 else 2)) listOf("storm", "sun")
              else listOf("60", "300", "600")
          "ptime" ->
              if (args.size == 1) listOf("get", "reset") + PlayerStateRules.timeNames.keys
              else if (
                  args.size == 2 && (other || args[0] in listOf("get", "list", "show", "display"))
              )
                  players
              else emptyList()
          "heal",
          "afk",
          "nick" -> if (args.size == 1 && other) players else emptyList()
          else -> emptyList()
        }
    return options.filter { it.startsWith(args.last(), true) }
  }
}
