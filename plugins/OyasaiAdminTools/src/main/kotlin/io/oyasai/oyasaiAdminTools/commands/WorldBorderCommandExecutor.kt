package io.oyasai.oyasaiAdminTools.commands

import io.oyasai.oyasaiAdminTools.worldborder.WorldBorderManager
import org.bukkit.Bukkit
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.command.TabCompleter
import org.bukkit.entity.Player

object WorldBorderCommandExecutor : CommandExecutor, TabCompleter {
  private val subcommands = listOf("set", "radius", "info", "list", "reload", "clear", "help")

  override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<out String>,
  ): Boolean {
    val (worldHint, rest) = splitWorldPrefix(args)
    if (rest.isEmpty()) {
      return handleInfo(sender, worldHint)
    }
    return when (rest[0].lowercase()) {
      "set" -> handleSet(sender, worldHint, rest.drop(1))
      "radius" -> handleRadius(sender, worldHint, rest.drop(1))
      "info" -> handleInfo(sender, worldHint ?: rest.getOrNull(1))
      "list" -> handleList(sender)
      "reload" -> handleReload(sender)
      "clear" -> handleClear(sender, worldHint ?: rest.getOrNull(1))
      "help" -> {
        sendHelp(sender, label)
        true
      }
      else -> {
        if (WorldBorderManager.getBorder(rest[0]) != null || Bukkit.getWorld(rest[0]) != null) {
          handleInfo(sender, rest[0])
        } else {
          sender.sendMessage("§c不明なサブコマンドです。/wb help")
          true
        }
      }
    }
  }

  override fun onTabComplete(
      sender: CommandSender,
      command: Command,
      alias: String,
      args: Array<out String>,
  ): List<String> {
    val worlds = knownWorldNames()
    return when (args.size) {
      1 -> (subcommands + worlds).filter { it.startsWith(args[0], ignoreCase = true) }
      2 ->
          when (args[0].lowercase()) {
            "set",
            "radius" ->
                (listOf("100", "300", "1000", "2000") + worlds).filter {
                  it.startsWith(args[1], ignoreCase = true)
                }
            "info",
            "clear" -> worlds.filter { it.startsWith(args[1], ignoreCase = true) }
            in worlds.map { it.lowercase() } ->
                listOf("set", "radius", "info", "clear").filter {
                  it.startsWith(args[1], ignoreCase = true)
                }
            else -> emptyList()
          }
      3 ->
          when {
            args[0].equals("set", ignoreCase = true) || args[1].equals("set", ignoreCase = true) ->
                listOf("100", "300", "1000", "2000").filter { it.startsWith(args[2]) }
            args[0].equals("radius", ignoreCase = true) ||
                args[1].equals("radius", ignoreCase = true) ->
                listOf("+50", "+100", "100", "1000").filter { it.startsWith(args[2]) }
            else -> emptyList()
          }
      else -> emptyList()
    }
  }

  private fun handleSet(
      sender: CommandSender,
      worldHint: String?,
      params: List<String>,
  ): Boolean {
    if (!hasPermission(sender, "set")) {
      sender.sendMessage("§c権限がありません。")
      return true
    }
    if (params.isEmpty()) {
      sender.sendMessage("§c使用法: /wb set <radius>  または  /wb set <world> <radius>")
      return true
    }

    var worldName = worldHint
    var radiusArgs = params
    if (worldName == null && params.size >= 2 && parseRadiusToken(params[0]) == null) {
      worldName = params[0]
      radiusArgs = params.drop(1)
    }
    if (worldName == null) {
      if (sender !is Player) {
        sender.sendMessage("§cコンソールからはワールド名を指定してください: /wb set <world> <radius>")
        return true
      }
      worldName = sender.world.name
    }

    val radiusX = parseRadiusToken(radiusArgs.getOrNull(0))
    if (radiusX == null) {
      sender.sendMessage("§c半径は整数で指定してください。")
      return true
    }
    val radiusZ = parseRadiusToken(radiusArgs.getOrNull(1)) ?: radiusX
    if (radiusX < WorldBorderManager.knockBack || radiusZ < WorldBorderManager.knockBack) {
      sender.sendMessage("§c半径はノックバック距離 (${WorldBorderManager.knockBack}) より大きくしてください。")
      return true
    }

    val center =
        when {
          sender is Player && sender.world.name == worldName -> sender.location
          else -> Bukkit.getWorld(worldName)?.spawnLocation
        }
    val x = center?.x ?: 0.0
    val z = center?.z ?: 0.0
    if (Bukkit.getWorld(worldName) == null) {
      sender.sendMessage("§eワールド \"$worldName\" は未ロードですが、ボーダー設定は保存します。")
    }

    val data = WorldBorderManager.setBorder(worldName, radiusX, radiusZ, x, z)
    sender.sendMessage("§aBorder has been set. " + WorldBorderManager.describe(worldName))
    sender.sendMessage("§8${data.describe()}")
    return true
  }

  private fun handleRadius(
      sender: CommandSender,
      worldHint: String?,
      params: List<String>,
  ): Boolean {
    if (!hasPermission(sender, "radius")) {
      sender.sendMessage("§c権限がありません。")
      return true
    }
    var worldName = worldHint
    var radiusArgs = params
    if (worldName == null && params.isNotEmpty() && parseRadiusToken(params[0]) == null) {
      worldName = params[0]
      radiusArgs = params.drop(1)
    }
    if (worldName == null) {
      if (sender !is Player) {
        sender.sendMessage("§cコンソールからはワールド名を指定してください: /wb radius <world> <radius>")
        return true
      }
      worldName = sender.world.name
    }
    val current = WorldBorderManager.getBorder(worldName)
    if (current == null) {
      sender.sendMessage("§cこのワールド ($worldName) にはWorldBorderが設定されていません。先に /wb set を行ってください。")
      return true
    }
    if (radiusArgs.isEmpty()) {
      sender.sendMessage("§c使用法: /wb radius <radius>  または  /wb radius <world> <radius>")
      return true
    }
    val radiusX = parseRelativeRadius(radiusArgs[0], current.radiusX)
    val radiusZ =
        if (radiusArgs.size >= 2) parseRelativeRadius(radiusArgs[1], current.radiusZ) else radiusX
    if (radiusX == null || radiusZ == null) {
      sender.sendMessage("§c半径は整数、または +50 / -50 のように指定してください。")
      return true
    }
    WorldBorderManager.setRadii(worldName, radiusX, radiusZ)
    sender.sendMessage("§aRadius has been set. " + WorldBorderManager.describe(worldName))
    return true
  }

  private fun handleInfo(sender: CommandSender, worldName: String?): Boolean {
    if (!hasPermission(sender, "list")) {
      sender.sendMessage("§c権限がありません。")
      return true
    }
    val name =
        worldName
            ?: if (sender is Player) sender.world.name
            else {
              return handleList(sender)
            }
    sender.sendMessage("§a" + WorldBorderManager.describe(name))
    val data = WorldBorderManager.getBorder(name)
    if (data != null) {
      val shape =
          if (data.isRound(WorldBorderManager.roundBorder)) "round/elliptic" else "square/rect"
      val enforcement =
          if (data.usesVanillaBorder(WorldBorderManager.roundBorder)) "vanilla" else "custom"
      sender.sendMessage("§8shape: $shape  enforcement: $enforcement")
    }
    return true
  }

  private fun handleList(sender: CommandSender): Boolean {
    if (!hasPermission(sender, "list")) {
      sender.sendMessage("§c権限がありません。")
      return true
    }
    val all = WorldBorderManager.allBorders()
    if (all.isEmpty()) {
      sender.sendMessage("§eボーダーが設定されているワールドはありません。")
      return true
    }
    sender.sendMessage("§aWorld borders (${all.size}):")
    all.forEach { (name, data) -> sender.sendMessage("§7- §f$name §8${data.describe()}") }
    return true
  }

  private fun handleReload(sender: CommandSender): Boolean {
    if (!hasPermission(sender, "reload")) {
      sender.sendMessage("§c権限がありません。")
      return true
    }
    WorldBorderManager.reload()
    sender.sendMessage("§aWorld borders reloaded (${WorldBorderManager.allBorders().size} worlds).")
    return true
  }

  private fun handleClear(sender: CommandSender, worldName: String?): Boolean {
    if (!hasPermission(sender, "clear")) {
      sender.sendMessage("§c権限がありません。")
      return true
    }
    val name =
        worldName
            ?: (sender as? Player)?.world?.name
            ?: run {
              sender.sendMessage("§cワールド名を指定してください。")
              return true
            }
    if (WorldBorderManager.removeBorder(name)) {
      sender.sendMessage("§aRemoved border for world \"$name\".")
    } else {
      sender.sendMessage("§cNo border was found for the world \"$name\".")
    }
    return true
  }

  private fun sendHelp(sender: CommandSender, label: String) {
    sender.sendMessage("§a/$label commands:")
    sender.sendMessage("§7/$label set <radius> §8- 現在ワールドにボーダーを設定（足元が中心）")
    sender.sendMessage("§7/$label set <world> <radius> §8- 指定ワールドにボーダーを設定")
    sender.sendMessage("§7/$label <world> set <radius> §8- Brettflan 互換")
    sender.sendMessage("§7/$label radius <radius> §8- 既存ボーダーの半径を変更（+50 可）")
    sender.sendMessage("§7/$label info [world] §8- ボーダー情報")
    sender.sendMessage("§7/$label list §8- 全ワールドのボーダー")
    sender.sendMessage("§7/$label reload §8- worldborder.yml を再読込")
    sender.sendMessage("§7/$label clear [world] §8- ボーダーを削除")
  }

  private fun splitWorldPrefix(args: Array<out String>): Pair<String?, List<String>> {
    if (args.isEmpty()) return null to emptyList()
    val first = args[0]
    if (first.lowercase() in subcommands) return null to args.toList()
    if (args.size >= 2 && args[1].lowercase() in subcommands) {
      return first to args.drop(1)
    }
    return null to args.toList()
  }

  private fun parseRadiusToken(raw: String?): Int? = raw?.toIntOrNull()

  private fun parseRelativeRadius(raw: String, current: Int): Int? {
    return when {
      raw.startsWith("+") -> raw.substring(1).toIntOrNull()?.let { current + it }
      raw.startsWith("-") && raw.length > 1 && raw[1].isDigit() ->
          raw.substring(1).toIntOrNull()?.let { current - it }
      else -> raw.toIntOrNull()
    }
  }

  private fun knownWorldNames(): List<String> {
    val loaded = Bukkit.getWorlds().map { it.name }
    val stored = WorldBorderManager.allBorders().keys
    return (loaded + stored).distinct()
  }

  private fun hasPermission(sender: CommandSender, node: String): Boolean {
    if (sender !is Player) return true
    return sender.hasPermission("oyasai.worldborder") ||
        sender.hasPermission("worldborder.$node") ||
        sender.hasPermission("worldborder.*")
  }
}
