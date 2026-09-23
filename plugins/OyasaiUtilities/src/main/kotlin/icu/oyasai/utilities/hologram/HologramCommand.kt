package icu.oyasai.utilities.hologram

import org.bukkit.Location
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.command.TabCompleter
import org.bukkit.entity.Player

object HologramCommand : CommandExecutor, TabCompleter {
  private val subs = listOf("create", "delete", "list", "near", "movehere", "line", "import")
  private val lineSubs = listOf("add", "set", "remove")

  override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<out String>,
  ): Boolean {
    if (!sender.hasPermission(HologramFeature.PERMISSION)) return true
    if (args.isEmpty()) {
      help(sender)
      return true
    }
    when (args[0].lowercase()) {
      "create" -> create(sender, args)
      "delete" -> delete(sender, args)
      "list" -> list(sender)
      "near" -> near(sender, args)
      "movehere" -> moveHere(sender, args)
      "line" -> line(sender, args)
      "import" -> import(sender)
      else -> help(sender)
    }
    return true
  }

  override fun onTabComplete(
      sender: CommandSender,
      command: Command,
      alias: String,
      args: Array<out String>,
  ): List<String> {
    if (!sender.hasPermission(HologramFeature.PERMISSION)) return emptyList()
    if (args.size == 1) return subs.filter { it.startsWith(args[0], ignoreCase = true) }
    if (args[0].equals("line", ignoreCase = true)) {
      if (args.size == 2) return lineSubs.filter { it.startsWith(args[1], ignoreCase = true) }
      if (args.size == 3 && lineSubs.any { it.equals(args[1], ignoreCase = true) }) {
        return names(args[2])
      }
      return emptyList()
    }
    if (
        args.size == 2 &&
            (args[0].equals("delete", ignoreCase = true) ||
                args[0].equals("movehere", ignoreCase = true))
    ) {
      return names(args[1])
    }
    return emptyList()
  }

  private fun create(sender: CommandSender, args: Array<out String>) {
    val player = sender as? Player ?: return sender.sendMessage("[oholo] プレイヤーのみ")
    val name = args.getOrNull(1)
    if (name.isNullOrEmpty()) return help(sender)
    if (HologramFeature.get(name) != null) return sender.sendMessage("[oholo] 既にある: $name")
    val text = args.drop(2).joinToString(" ")
    val lines = if (text.isEmpty()) emptyList() else listOf(text)
    val loc = player.location
    HologramFeature.put(
        Hologram(name, loc.world.name, loc.x, loc.y, loc.z, lines, enabled = true),
    )
    sender.sendMessage("[oholo] 作成: $name")
  }

  private fun delete(sender: CommandSender, args: Array<out String>) {
    val name = args.getOrNull(1) ?: return help(sender)
    if (!HologramFeature.delete(name)) return sender.sendMessage("[oholo] 無い: $name")
    sender.sendMessage("[oholo] 削除: $name")
  }

  private fun list(sender: CommandSender) {
    val all = HologramFeature.all().sortedBy { it.name }
    sender.sendMessage("[oholo] ${all.size}件")
    for (holo in all) {
      sender.sendMessage(
          "[oholo] ${holo.name} ${holo.world} ${holo.x} ${holo.y} ${holo.z} lines=${holo.lines.size} enabled=${holo.enabled}",
      )
    }
  }

  private fun near(sender: CommandSender, args: Array<out String>) {
    val player = sender as? Player ?: return sender.sendMessage("[oholo] プレイヤーのみ")
    val radius =
        if (args.size < 2) {
          16.0
        } else {
          args[1].toDoubleOrNull()?.takeIf { it > 0 } ?: return sender.sendMessage("[oholo] 半径は正の数")
        }
    val here = player.location
    val rows =
        HologramFeature.all()
            .mapNotNull { holo ->
              if (holo.world != here.world.name) return@mapNotNull null
              val distance = here.distance(Location(here.world, holo.x, holo.y, holo.z))
              if (distance > radius) null else holo to distance
            }
            .sortedBy { it.second }
    sender.sendMessage("[oholo] near ${rows.size}件 radius=$radius")
    for ((holo, distance) in rows) {
      sender.sendMessage("[oholo] ${holo.name} ${"%.1f".format(distance)}")
    }
  }

  private fun moveHere(sender: CommandSender, args: Array<out String>) {
    val player = sender as? Player ?: return sender.sendMessage("[oholo] プレイヤーのみ")
    val name = args.getOrNull(1) ?: return help(sender)
    val holo = HologramFeature.get(name) ?: return sender.sendMessage("[oholo] 無い: $name")
    val loc = player.location
    HologramFeature.put(holo.copy(world = loc.world.name, x = loc.x, y = loc.y, z = loc.z))
    sender.sendMessage("[oholo] 移動: $name")
  }

  private fun line(sender: CommandSender, args: Array<out String>) {
    when (args.getOrNull(1)?.lowercase()) {
      "add" -> addLine(sender, args)
      "set" -> setLine(sender, args)
      "remove" -> removeLine(sender, args)
      else -> help(sender)
    }
  }

  private fun addLine(sender: CommandSender, args: Array<out String>) {
    val name = args.getOrNull(2) ?: return help(sender)
    val text = args.drop(3).joinToString(" ")
    if (text.isEmpty()) return help(sender)
    val holo = HologramFeature.get(name) ?: return sender.sendMessage("[oholo] 無い: $name")
    HologramFeature.put(holo.copy(lines = holo.lines + text))
    sender.sendMessage("[oholo] 行追加: $name ${holo.lines.size + 1}")
  }

  private fun setLine(sender: CommandSender, args: Array<out String>) {
    val name = args.getOrNull(2) ?: return help(sender)
    val index = args.getOrNull(3)?.toIntOrNull() ?: return help(sender)
    val text = args.drop(4).joinToString(" ")
    if (text.isEmpty()) return help(sender)
    val holo = HologramFeature.get(name) ?: return sender.sendMessage("[oholo] 無い: $name")
    if (index !in 1..holo.lines.size) return sender.sendMessage("[oholo] 行番号が範囲外: $index")
    val lines = holo.lines.toMutableList()
    lines[index - 1] = text
    HologramFeature.put(holo.copy(lines = lines))
    sender.sendMessage("[oholo] 行変更: $name $index")
  }

  private fun removeLine(sender: CommandSender, args: Array<out String>) {
    val name = args.getOrNull(2) ?: return help(sender)
    val index = args.getOrNull(3)?.toIntOrNull() ?: return help(sender)
    val holo = HologramFeature.get(name) ?: return sender.sendMessage("[oholo] 無い: $name")
    if (index !in 1..holo.lines.size) return sender.sendMessage("[oholo] 行番号が範囲外: $index")
    val lines = holo.lines.toMutableList()
    lines.removeAt(index - 1)
    HologramFeature.put(holo.copy(lines = lines))
    sender.sendMessage("[oholo] 行削除: $name $index")
  }

  private fun import(sender: CommandSender) {
    val result = HologramFeature.importDecent()
    if (result.missingDir) {
      sender.sendMessage("[oholo] DecentHolograms/holograms が無い")
    } else {
      sender.sendMessage("[oholo] import ${result.imported}件 skip ${result.skipped}件")
    }
  }

  private fun names(prefix: String): List<String> =
      HologramFeature.all().map { it.name }.filter { it.startsWith(prefix, ignoreCase = true) }

  private fun help(sender: CommandSender) {
    sender.sendMessage(
        "[oholo] create <name> [text] / delete <name> / list / near [radius] / movehere <name> / import",
    )
    sender.sendMessage(
        "[oholo] line add <name> <text> / line set <name> <index> <text> / line remove <name> <index>"
    )
  }
}
