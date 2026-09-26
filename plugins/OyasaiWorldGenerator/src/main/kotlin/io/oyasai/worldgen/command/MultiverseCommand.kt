package io.oyasai.worldgen.command

import io.oyasai.worldgen.config.OwgConfig
import io.oyasai.worldgen.world.NormalWorld
import io.oyasai.worldgen.world.NormalWorlds
import java.util.Locale
import org.bukkit.Bukkit
import org.bukkit.Difficulty
import org.bukkit.Location
import org.bukkit.NamespacedKey
import org.bukkit.World
import org.bukkit.WorldCreator
import org.bukkit.command.CommandSender
import org.bukkit.entity.Player

class MultiverseCommand(
    private val registry: NormalWorlds,
    private val heightConfig: () -> OwgConfig,
) {
  fun suggest(sender: CommandSender, name: String, args: Array<String>): Collection<String> {
    val choices =
        if (name.equals("mvtp", true)) {
          if (args.size == 1)
              registry.entries().flatMap { listOf(it.name, it.alias).filter(String::isNotEmpty) }
          else if (args.size == 2)
              registry.entries().flatMap { listOf(it.name, it.alias).filter(String::isNotEmpty) }
          else emptyList()
        } else
            when (args.size) {
              1 ->
                  listOf(
                      "list",
                      "info",
                      "create",
                      "import",
                      "load",
                      "unload",
                      "setspawn",
                      "modify",
                      "entity-spawn-config",
                      "gamerule",
                  )
              2 ->
                  registry.entries().flatMap {
                    listOf(it.name, it.alias).filter(String::isNotEmpty)
                  }
              else -> emptyList()
            }
    return choices.filter { it.startsWith(args.lastOrNull().orEmpty(), true) }.distinct()
  }

  fun execute(
      sender: CommandSender,
      name: String,
      args: Array<out String>,
  ): Boolean {
    if (name.equals("mvtp", true)) return teleport(sender, args)
    val sub = args.firstOrNull()?.lowercase(Locale.ROOT).orEmpty()
    val node =
        when (sub) {
          "list" -> "multiverse.core.list.worlds"
          "info" -> "multiverse.core.info"
          "create" -> "multiverse.core.create"
          "import" -> "multiverse.core.import"
          "load" -> "multiverse.core.load"
          "unload" -> "multiverse.core.unload"
          "setspawn" -> "multiverse.core.spawn.set"
          "modify" -> "multiverse.core.modify"
          "entity-spawn-config" -> "multiverse.core.entityspawnconfig.modify"
          "gamerule" -> "multiverse.core.gamerule.set"
          else -> {
            sender.sendMessage(
                "Usage: /mv <list|info|create|import|load|unload|setspawn|modify|entity-spawn-config|gamerule>"
            )
            return true
          }
        }
    if (!sender.hasPermission(node)) {
      sender.sendMessage("[MV] 権限がありません: $node")
      return true
    }
    when (sub) {
      "list" ->
          sender.sendMessage("[MV] Worlds: " + registry.entries().joinToString(", ") { it.name })
      "info" -> {
        val entry = args.getOrNull(1)?.let(registry::find)
        sender.sendMessage(
            if (entry == null) "[MV] ワールドが見つかりません"
            else
                "[MV] ${entry.name}: key=${entry.key} environment=${entry.environment} generator=${entry.generator} difficulty=${entry.difficulty} pvp=${entry.pvp} allow-flight=${entry.allowFlight} monster=${entry.monsterSpawn} animal=${entry.animalSpawn} spawn=${entry.spawn} loaded=${Bukkit.getWorld(entry.name) != null}"
        )
      }
      "create",
      "import" -> createOrImport(sender, args, sub == "create")
      "load" -> {
        val entry = args.getOrNull(1)?.let(registry::find)
        sender.sendMessage(
            if (entry != null && registry.load(entry)) "[MV] Loaded ${entry.name}"
            else "[MV] 読み込めませんでした"
        )
      }
      "unload" -> {
        val entry = args.getOrNull(1)?.let(registry::find)
        val world = entry?.let { Bukkit.getWorld(it.name) }
        sender.sendMessage(
            if (world != null && Bukkit.unloadWorld(world, true)) "[MV] Unloaded ${entry.name}"
            else "[MV] アンロードできませんでした"
        )
      }
      "setspawn" -> {
        val player = sender as? Player
        val entry = player?.let { registry.find(it.world.name) }
        if (player == null || entry == null) sender.sendMessage("[MV] 登録ワールド内のプレイヤーから実行してください")
        else {
          entry.spawn = locationValues(player.location)
          player.world.setSpawnLocation(player.location)
          registry.save()
          sender.sendMessage("[MV] Spawn set: ${entry.name}")
        }
      }
      "modify" -> modify(sender, args)
      "entity-spawn-config" -> entitySpawn(sender, args)
      "gamerule" -> gamerule(sender, args)
    }
    return true
  }

  private fun teleport(sender: CommandSender, args: Array<out String>): Boolean {
    if (args.size !in 1..2) {
      sender.sendMessage("Usage: /mvtp [player] <world>")
      return true
    }
    val player = if (args.size == 1) sender as? Player else Bukkit.getPlayerExact(args[0])
    if (player == null) {
      sender.sendMessage("[MV] プレイヤーが見つかりません")
      return true
    }
    val entry = registry.find(args.last())
    val world = entry?.let { Bukkit.getWorld(it.name) }
    if (entry == null || world == null) {
      sender.sendMessage("[MV] ロード済みワールドが見つかりません")
      return true
    }
    val scope = if (sender == player) "self" else "other"
    val node = "multiverse.teleport.$scope.w.${entry.name}"
    if (!sender.hasPermission(node)) {
      sender.sendMessage("[MV] 権限がありません: $node")
      return true
    }
    val spawn =
        entry.spawn?.let { Location(world, it[0], it[1], it[2], it[3].toFloat(), it[4].toFloat()) }
            ?: world.spawnLocation
    sender.sendMessage(
        if (player.teleport(spawn)) "[MV] Teleported to ${entry.name}" else "[MV] テレポートに失敗しました"
    )
    return true
  }

  private fun createOrImport(sender: CommandSender, args: Array<out String>, create: Boolean) {
    if (
        args.size < 3 ||
            (create && args.size != 3 && !(args.size == 5 && args[3] == "-g")) ||
            (!create && args.size != 3)
    ) {
      sender.sendMessage(
          "Usage: /mv ${if (create) "create" else "import"} <name> <environment> ${if (create) "[-g generator]" else ""}"
      )
      return
    }
    val name = args[1]
    val environment = World.Environment.entries.firstOrNull { it.name.equals(args[2], true) }
    val key =
        runCatching { NamespacedKey.fromString("minecraft:${name.lowercase(Locale.ROOT)}") }
            .getOrNull()
    if (
        !OwgConfig.isSafeWorldName(name) ||
            name == "." ||
            name == ".." ||
            key == null ||
            environment == null ||
            name in heightConfig().configuredWorldNames ||
            registry.find(name) != null ||
            Bukkit.getWorld(name) != null
    ) {
      sender.sendMessage("[MV] 名前・環境が不正か、登録済みです")
      return
    }
    val folder = registry.folder(key)
    if (folder == null || folder.exists() == create) {
      sender.sendMessage("[MV] ${if (create) "既存フォルダがあります" else "既存フォルダがありません"}")
      return
    }
    val generator = if (create) args.getOrNull(4).orEmpty() else ""
    if (
        generator.isNotEmpty() && WorldCreator.getGeneratorForName(name, generator, sender) == null
    ) {
      sender.sendMessage("[MV] generator が見つかりません: $generator")
      return
    }
    val entry = NormalWorld(name, key, environment, generator)
    if (registry.load(entry, create)) {
      registry.add(entry)
      sender.sendMessage("[MV] ${if (create) "Created" else "Imported"} $name")
    } else sender.sendMessage("[MV] ワールドを開けませんでした")
  }

  private fun modify(sender: CommandSender, args: Array<out String>) {
    if (args.size != 5 || !args[2].equals("set", true)) {
      sender.sendMessage("Usage: /mv modify <world> set <property> <value>")
      return
    }
    val entry =
        registry.find(args[1])
            ?: run {
              sender.sendMessage("[MV] ワールドが見つかりません")
              return
            }
    val property = args[3].lowercase(Locale.ROOT).replace('_', '-')
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
          "allow-flight",
          "allowflight" ->
              bool?.let {
                entry.allowFlight = it
                true
              }
          "alias" -> {
            entry.alias = value.takeUnless { it == entry.name }.orEmpty()
            true
          }
          "keep-spawn-in-memory",
          "keepspawninmemory" ->
              bool?.let {
                entry.keepSpawnInMemory = it
                true
              }
          "auto-load" ->
              bool?.let {
                entry.autoLoad = it
                true
              }
          "generator" -> {
            entry.generator = value
            true
          }
          "environment" ->
              World.Environment.entries
                  .firstOrNull { it.name.equals(value, true) }
                  ?.let {
                    entry.environment = it
                    true
                  }
          "monster",
          "monster-spawn" ->
              bool?.let {
                entry.monsterSpawn = it
                true
              }
          "animal",
          "animal-spawn" ->
              bool?.let {
                entry.animalSpawn = it
                true
              }
          "spawn-location" ->
              value
                  .split(',')
                  .map(String::toDoubleOrNull)
                  .takeIf {
                    (it.size == 3 || it.size == 5) && it.all { part -> part?.isFinite() == true }
                  }
                  ?.filterNotNull()
                  ?.let {
                    entry.spawn = if (it.size == 3) it + listOf(0.0, 0.0) else it
                    true
                  }
          else -> {
            if (property in IGNORED_PROPERTIES) {
              sender.sendMessage("[MV] $property: 対象外のため変更しませんでした")
              return
            }
            sender.sendMessage("[MV] 不明な項目です: $property")
            return
          }
        }
    if (changed != true) {
      sender.sendMessage("[MV] 値が不正です: $value")
      return
    }
    registry.save()
    Bukkit.getWorld(entry.name)?.let { registry.apply(entry, it) }
    sender.sendMessage("[MV] ${entry.name} $property=$value を保存しました")
  }

  private fun entitySpawn(sender: CommandSender, args: Array<out String>) {
    if (
        args.size != 7 ||
            !args[1].equals("modify", true) ||
            !args[5].equals("spawn", true) ||
            !args[4].equals("set", true)
    ) {
      sender.sendMessage(
          "Usage: /mv entity-spawn-config modify <world> <monster|animal> set spawn <true|false>"
      )
      return
    }
    val entry =
        registry.find(args[2])
            ?: run {
              sender.sendMessage("[MV] ワールドが見つかりません")
              return
            }
    val value =
        args[6].toBooleanStrictOrNull()
            ?: run {
              sender.sendMessage("[MV] true または false を指定してください")
              return
            }
    when (args[3].lowercase(Locale.ROOT)) {
      "monster" -> entry.monsterSpawn = value
      "animal" -> entry.animalSpawn = value
      else -> {
        sender.sendMessage("[MV] ${args[3]}: 対象外のため変更しませんでした")
        return
      }
    }
    registry.save()
    Bukkit.getWorld(entry.name)?.let { registry.apply(entry, it) }
    sender.sendMessage("[MV] ${entry.name} ${args[3]} spawn=$value")
  }

  private fun gamerule(sender: CommandSender, args: Array<out String>) {
    if (args.size != 5 || !args[1].equals("set", true)) {
      sender.sendMessage("Usage: /mv gamerule set <rule> <value> <world>")
      return
    }
    val world = registry.find(args[4])?.let { Bukkit.getWorld(it.name) }
    if (world == null || !world.setGameRuleValue(args[2], args[3]))
        sender.sendMessage("[MV] gamerule を設定できませんでした")
    else sender.sendMessage("[MV] ${args[2]}=${args[3]} in ${world.name}")
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
            "entry-fee",
            "hidden",
            "portal-form",
            "scale",
            "respawn-world",
            "world-blacklist",
            "adjust-spawn",
            "allow-weather",
            "allow-advancement-grant",
            "bed-respawn",
            "anchor-respawn",
            "biome",
            "seed",
            "tick-rate",
            "spawn-limit",
            "water-animal",
            "water-ambient",
            "water-underground-creature",
            "ambient",
            "axolotl",
            "misc",
            "generator-settings",
        )
  }
}
