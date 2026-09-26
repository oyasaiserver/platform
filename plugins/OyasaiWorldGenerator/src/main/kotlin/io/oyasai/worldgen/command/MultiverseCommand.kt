package io.oyasai.worldgen.command

import io.oyasai.worldgen.config.OwgConfig
import io.oyasai.worldgen.world.NormalWorld
import io.oyasai.worldgen.world.NormalWorlds
import io.oyasai.worldgen.world.WorldLifecycle
import java.util.Locale
import org.bukkit.Bukkit
import org.bukkit.Difficulty
import org.bukkit.Location
import org.bukkit.NamespacedKey
import org.bukkit.Registry
import org.bukkit.World
import org.bukkit.command.CommandSender
import org.bukkit.entity.Player

class MultiverseCommand(
    private val registry: NormalWorlds,
    private val lifecycle: WorldLifecycle,
) {
  private val commands =
      mapOf(
          "list" to "multiverse.core.list.worlds",
          "info" to "multiverse.core.info",
          "create" to "multiverse.core.create",
          "import" to "multiverse.core.import",
          "load" to "multiverse.core.load",
          "unload" to "multiverse.core.unload",
          "setspawn" to "multiverse.core.spawn.set",
          "modify" to "multiverse.core.modify",
          "entity-spawn-config" to "multiverse.core.entityspawnconfig.modify",
          "gamerule" to "multiverse.core.gamerule.set",
      )
  private val kinds = listOf("normal", "flat", "void", "nether", "the_end")
  private val properties =
      listOf("difficulty", "pvp", "allow-flight", "alias", "keep-spawn-in-memory", "auto-load")
  private val categories =
      listOf(
          "monster",
          "animal",
          "water_animal",
          "water_ambient",
          "water_underground_creature",
          "ambient",
          "axolotl",
          "misc",
      )
  private val booleans = listOf("true", "false")

  fun suggest(sender: CommandSender, name: String, args: Array<String>): Collection<String> {
    val height = lifecycle.configSnapshot()
    val loaded = registry.entries().filter { Bukkit.getWorld(it.name) != null }
    val loadedNames =
        loaded.flatMap { entry ->
          listOf(entry.name, entry.alias).filter(String::isNotEmpty).map { it to entry.name }
        } + height.worlds.keys.filter { Bukkit.getWorld(it) != null }.map { it to it }
    val choices =
        if (name.equals("mvtp", true)) {
          when (args.size) {
            0,
            1 ->
                Bukkit.getOnlinePlayers()
                    .filter {
                      it != sender &&
                          loadedNames.any { (_, world) ->
                            sender.hasPermission("multiverse.teleport.other.w.$world")
                          }
                    }
                    .map { it.name } +
                    loadedNames
                        .filter { (_, world) ->
                          sender.hasPermission("multiverse.teleport.self.w.$world")
                        }
                        .map { it.first }
            2 ->
                if (Bukkit.getPlayerExact(args[0]) != null)
                    loadedNames
                        .filter { (_, world) ->
                          sender.hasPermission("multiverse.teleport.other.w.$world")
                        }
                        .map { it.first }
                else emptyList()
            else -> emptyList()
          }
        } else {
          val sub = args.firstOrNull()?.lowercase(Locale.ROOT).orEmpty()
          if (args.size <= 1) commands.filterValues(sender::hasPermission).keys.toList()
          else if (!sender.hasPermission(commands[sub] ?: return emptyList())) emptyList()
          else
              when (sub) {
                "info" ->
                    if (args.size == 2) registry.entries().map { it.name } + height.worlds.keys
                    else emptyList()
                "load" ->
                    if (args.size == 2)
                        registry
                            .entries()
                            .filter { Bukkit.getWorld(it.name) == null }
                            .map { it.name }
                    else emptyList()
                "unload" -> if (args.size == 2) loaded.map { it.name } else emptyList()
                "create" -> if (args.size == 3) kinds else emptyList()
                "import" ->
                    if (args.size == 3) listOf("normal", "nether", "the_end") else emptyList()
                "modify" ->
                    when (args.size) {
                      2 -> registry.entries().map { it.name }
                      3 -> listOf("set")
                      4 -> if (args[2].equals("set", true)) properties else emptyList()
                      5 ->
                          when (args[3].lowercase(Locale.ROOT)) {
                            "difficulty" ->
                                Difficulty.entries.map { it.name.lowercase(Locale.ROOT) }
                            "pvp",
                            "allow-flight",
                            "keep-spawn-in-memory",
                            "auto-load" -> booleans
                            else -> emptyList()
                          }
                      else -> emptyList()
                    }
                "entity-spawn-config" ->
                    when (args.size) {
                      2 -> listOf("modify")
                      3 ->
                          if (args[1].equals("modify", true)) registry.entries().map { it.name }
                          else emptyList()
                      4 -> if (args[1].equals("modify", true)) categories else emptyList()
                      5 -> listOf("set")
                      6 -> listOf("spawn")
                      7 -> booleans
                      else -> emptyList()
                    }
                "gamerule" ->
                    when (args.size) {
                      2 -> listOf("set")
                      3 ->
                          if (args[1].equals("set", true))
                              Bukkit.getWorlds()
                                  .firstOrNull()
                                  ?.gameRules
                                  ?.map { "minecraft:$it" }
                                  .orEmpty()
                          else emptyList()
                      4 ->
                          if (
                              runCatching {
                                    NamespacedKey.fromString(args[2])
                                        ?.let(Registry.GAME_RULE::get)
                                        ?.type == Boolean::class.javaObjectType
                                  }
                                  .getOrDefault(false)
                          )
                              booleans
                          else emptyList()
                      5 -> loaded.map { it.name }
                      else -> emptyList()
                    }
                else -> emptyList()
              }
        }
    return choices.filter { it.startsWith(args.lastOrNull().orEmpty(), true) }.distinct()
  }

  fun execute(sender: CommandSender, name: String, args: Array<out String>): Boolean {
    if (name.equals("mvtp", true)) return teleport(sender, args)
    val sub = args.firstOrNull()?.lowercase(Locale.ROOT).orEmpty()
    val node = commands[sub]
    if (node == null) {
      sender.sendMessage("[MV] 使い方: /mv <${commands.keys.joinToString("|")}>")
      return true
    }
    if (!sender.hasPermission(node)) {
      sender.sendMessage("[MV] 権限がありません: $node")
      return true
    }
    when (sub) {
      "list" -> {
        if (args.size != 1) sender.sendMessage("[MV] 使い方: /mv list")
        else
            sender.sendMessage(
                "[MV] ワールド: " +
                    (registry.entries().map { it.name } +
                            lifecycle.configSnapshot().worlds.keys.map { "$it (OWG)" })
                        .joinToString(", ")
            )
      }
      "info" -> {
        if (args.size != 2) return usage(sender, "/mv info <ワールド>")
        val height = lifecycle.configSnapshot().worlds[args[1]]
        val entry = registry.find(args[1])
        sender.sendMessage(
            when {
              height != null ->
                  "[MV] ${height.name}: 高さ用、範囲=${height.heightSpec.minY}..${height.heightSpec.maxHeight - 1}、種類=${height.kind.id}、読み込み済み=${Bukkit.getWorld(height.name) != null}"
              entry != null ->
                  "[MV] ${entry.name}: 種類=${entry.kind}、環境=${entry.environment}、難易度=${entry.difficulty}、PVP=${entry.pvp}、飛行=${entry.allowFlight}、別名=${entry.alias}、自動読込=${entry.autoLoad}、読み込み済み=${Bukkit.getWorld(entry.name) != null}"
              else -> "[MV] ワールドが見つかりません: ${args[1]}"
            }
        )
      }
      "create",
      "import" -> createOrImport(sender, args, sub == "create")
      "load",
      "unload" -> {
        if (args.size != 2) return usage(sender, "/mv $sub <ワールド>")
        if (args[1] in lifecycle.configSnapshot().configuredWorldNames) {
          sender.sendMessage("[MV] 高さ用ワールドは /owg $sub を使ってください")
          return true
        }
        val entry = registry.find(args[1])
        if (entry == null) sender.sendMessage("[MV] ワールドが見つかりません: ${args[1]}")
        else if (sub == "load")
            sender.sendMessage(
                if (registry.load(entry)) "[MV] ${entry.name} を読み込みました"
                else "[MV] ${entry.name} を読み込めませんでした。フォルダとログを確認してください"
            )
        else {
          val world = Bukkit.getWorld(entry.name)
          sender.sendMessage(
              when {
                world == null -> "[MV] ${entry.name} は読み込まれていません"
                Bukkit.unloadWorld(world, true) -> "[MV] ${entry.name} を保存してアンロードしました"
                else -> "[MV] ${entry.name} をアンロードできませんでした。プレイヤーが残っていないか確認してください"
              }
          )
        }
      }
      "setspawn" -> {
        if (args.size != 1) return usage(sender, "/mv setspawn")
        val player = sender as? Player
        val entry = player?.let { registry.find(it.world.name) }
        if (player == null || entry == null) sender.sendMessage("[MV] 登録ワールド内のプレイヤーから実行してください")
        else {
          entry.spawn = locationValues(player.location)
          player.world.setSpawnLocation(player.location)
          registry.save()
          sender.sendMessage("[MV] ${entry.name} のスポーン地点を保存しました")
        }
      }
      "modify" -> modify(sender, args)
      "entity-spawn-config" -> entitySpawn(sender, args)
      "gamerule" -> gamerule(sender, args)
    }
    return true
  }

  private fun teleport(sender: CommandSender, args: Array<out String>): Boolean {
    if (args.size !in 1..2) return usage(sender, "/mvtp [プレイヤー] <ワールド>")
    val player = if (args.size == 1) sender as? Player else Bukkit.getPlayerExact(args[0])
    if (player == null) {
      sender.sendMessage("[MV] プレイヤーが見つかりません")
      return true
    }
    val height = lifecycle.configSnapshot().worlds[args.last()]
    val entry = if (height == null) registry.find(args.last()) else null
    val worldName = height?.name ?: entry?.name
    val world = worldName?.let(Bukkit::getWorld)
    if (world == null) {
      sender.sendMessage("[MV] 読み込み済みワールドが見つかりません: ${args.last()}")
      return true
    }
    val scope = if (sender == player) "self" else "other"
    val node = "multiverse.teleport.$scope.w.$worldName"
    if (!sender.hasPermission(node)) {
      sender.sendMessage("[MV] 権限がありません: $node")
      return true
    }
    if (height != null) {
      val moved = lifecycle.teleport(player, worldName)
      if (sender != player)
          sender.sendMessage(if (moved) "[MV] $worldName に移動しました" else "[MV] 移動に失敗しました")
      return true
    }
    val spawn =
        entry!!.spawn?.let {
          Location(world, it[0], it[1], it[2], it[3].toFloat(), it[4].toFloat())
        } ?: world.spawnLocation
    sender.sendMessage(
        if (player.teleport(spawn)) "[MV] ${entry.name} に移動しました" else "[MV] 移動に失敗しました"
    )
    return true
  }

  private fun createOrImport(sender: CommandSender, args: Array<out String>, create: Boolean) {
    val sub = if (create) "create" else "import"
    if (args.size != 3) {
      usage(
          sender,
          "/mv $sub <名前> <${if (create) kinds.joinToString("|") else "normal|nether|the_end"}>",
      )
      return
    }
    val name = args[1]
    val kind = args[2].lowercase(Locale.ROOT)
    if (kind !in (if (create) kinds else listOf("normal", "nether", "the_end"))) {
      sender.sendMessage(
          "[MV] 種類は ${if (create) kinds.joinToString(" / ") else "normal / nether / the_end"} のどれかです"
      )
      return
    }
    if (!OwgConfig.isSafeWorldName(name) || name == "." || name == "..") {
      sender.sendMessage("[MV] 名前には英数字、_、-、. のみ使えます")
      return
    }
    if (
        lifecycle.configSnapshot().configuredWorldNames.any { it.equals(name, true) } ||
            registry.find(name) != null ||
            Bukkit.getWorld(name) != null
    ) {
      sender.sendMessage("[MV] その名前のワールドは既にあります")
      return
    }
    val key =
        runCatching { NamespacedKey.fromString("minecraft:${name.lowercase(Locale.ROOT)}") }
            .getOrNull()
    if (key == null || registry.entries().any { it.key == key } || Bukkit.getWorld(key) != null) {
      sender.sendMessage("[MV] その名前のワールドキーは既に使われているか、不正です")
      return
    }
    val folder = registry.folder(key)
    if (folder == null) {
      sender.sendMessage("[MV] 既定ワールドの保存先を確認できません")
      return
    }
    if (folder.exists() == create) {
      sender.sendMessage(if (create) "[MV] 同じワールドキーのフォルダが既にあります" else "[MV] 取り込むワールドのフォルダがありません")
      return
    }
    val environment =
        when (kind) {
          "nether" -> World.Environment.NETHER
          "the_end" -> World.Environment.THE_END
          else -> World.Environment.NORMAL
        }
    val entry = NormalWorld(name, key, environment, kind = kind)
    registry.add(entry)
    if (registry.load(entry, create)) {
      sender.sendMessage("[MV] $name を${if (create) "作成し" else "取り込み"}ました（$kind）")
    } else {
      if (!folder.exists()) registry.remove(name)
      sender.sendMessage("[MV] ワールドを開けませんでした。ログを確認してください")
    }
  }

  private fun modify(sender: CommandSender, args: Array<out String>) {
    if (args.size != 5 || !args[2].equals("set", true)) {
      usage(sender, "/mv modify <ワールド> set <項目> <値>")
      return
    }
    val entry = registry.find(args[1]) ?: return sender.sendMessage("[MV] ワールドが見つかりません: ${args[1]}")
    val property = args[3].lowercase(Locale.ROOT)
    val value = args[4]
    val bool = value.toBooleanStrictOrNull()
    val changed =
        when (property) {
          "difficulty" ->
              Difficulty.entries
                  .firstOrNull { it.name.equals(value, true) }
                  ?.let {
                    entry.difficulty = it
                    true
                  }
          "pvp" ->
              bool?.let {
                entry.pvp = it
                true
              }
          "allow-flight" ->
              bool?.let {
                entry.allowFlight = it
                true
              }
          "alias" -> {
            if (
                registry.entries().any {
                  it != entry && (it.name.equals(value, true) || it.alias.equals(value, true))
                }
            ) {
              sender.sendMessage("[MV] その別名は別のワールドで使われています")
              return
            }
            entry.alias = value.takeUnless { it.equals(entry.name, true) }.orEmpty()
            true
          }
          "keep-spawn-in-memory" ->
              bool?.let {
                entry.keepSpawnInMemory = it
                true
              }
          "auto-load" ->
              bool?.let {
                entry.autoLoad = it
                true
              }
          else -> {
            if (property in IGNORED_PROPERTIES)
                sender.sendMessage("[MV] $property: 対象外のため変更しませんでした")
            else sender.sendMessage("[MV] 不明な項目です: $property")
            return
          }
        }
    if (changed != true) {
      sender.sendMessage("[MV] 値が不正です: $value")
      return
    }
    registry.save()
    Bukkit.getWorld(entry.name)?.let { registry.apply(entry, it) }
    sender.sendMessage("[MV] ${entry.name} の $property を $value に保存しました")
  }

  private fun entitySpawn(sender: CommandSender, args: Array<out String>) {
    if (
        args.size != 7 ||
            !args[1].equals("modify", true) ||
            !args[4].equals("set", true) ||
            !args[5].equals("spawn", true)
    ) {
      usage(sender, "/mv entity-spawn-config modify <ワールド> <カテゴリ> set spawn <true|false>")
      return
    }
    val entry = registry.find(args[2]) ?: return sender.sendMessage("[MV] ワールドが見つかりません: ${args[2]}")
    val value =
        args[6].toBooleanStrictOrNull()
            ?: return sender.sendMessage("[MV] true または false を指定してください")
    when (args[3].lowercase(Locale.ROOT)) {
      "monster" -> entry.monsterSpawn = value
      "animal" -> entry.animalSpawn = value
      in categories -> return sender.sendMessage("[MV] ${args[3]}: 対象外のため変更しませんでした")
      else -> return sender.sendMessage("[MV] 不明なカテゴリです: ${args[3]}")
    }
    registry.save()
    Bukkit.getWorld(entry.name)?.let { registry.apply(entry, it) }
    sender.sendMessage("[MV] ${entry.name} の ${args[3]} の湧き設定を $value に保存しました")
  }

  private fun gamerule(sender: CommandSender, args: Array<out String>) {
    if (args.size != 5 || !args[1].equals("set", true)) {
      usage(sender, "/mv gamerule set <ルール> <値> <ワールド>")
      return
    }
    val entry = registry.find(args[4]) ?: return sender.sendMessage("[MV] ワールドが見つかりません: ${args[4]}")
    val world =
        Bukkit.getWorld(entry.name) ?: return sender.sendMessage("[MV] ${entry.name} は読み込まれていません")
    val rule = args[2]
    if (!world.isGameRule(rule)) return sender.sendMessage("[MV] 不明なゲームルールです: ${args[2]}")
    if (!world.setGameRuleValue(rule, args[3])) sender.sendMessage("[MV] 値が不正です: ${args[3]}")
    else sender.sendMessage("[MV] ${entry.name} の ${args[2]} を ${args[3]} に設定しました")
  }

  private fun usage(sender: CommandSender, command: String): Boolean {
    sender.sendMessage("[MV] 使い方: $command")
    return true
  }

  private fun locationValues(location: Location) =
      listOf(location.x, location.y, location.z, location.yaw.toDouble(), location.pitch.toDouble())

  companion object {
    private val IGNORED_PROPERTIES =
        setOf(
            "gamemode",
            "hunger",
            "auto-heal",
            "player-limit",
            "hidden",
            "portal-form",
            "scale",
            "adjust-spawn",
            "allow-weather",
            "allow-advancement-grant",
            "bed-respawn",
            "anchor-respawn",
            "generator",
            "environment",
            "spawn-location",
            "monster",
            "animal",
            "monster-spawn",
            "animal-spawn",
        )
  }
}
