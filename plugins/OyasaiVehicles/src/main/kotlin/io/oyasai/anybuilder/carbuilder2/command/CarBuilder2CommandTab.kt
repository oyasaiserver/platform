package io.oyasai.anybuilder.carbuilder2.command

import io.oyasai.anybuilder.carbuilder2.data.CarBuilder2BaseCache
import io.oyasai.anybuilder.common.BuilderCommandTabSupport
import io.oyasai.canCreateCarBuilder2
import io.oyasai.canRideCarBuilder2OrAdmin
import io.oyasai.canUseCarBuilder2
import io.oyasai.hasOyasaiAdminPermission
import java.util.Locale
import org.bukkit.Material
import org.bukkit.command.Command
import org.bukkit.command.CommandSender
import org.bukkit.command.ConsoleCommandSender
import org.bukkit.command.TabCompleter
import org.bukkit.entity.Player

// carbuilder2|cbmenu tab completion for: <name>
// spawn|buy|info|save|size|offset|headlight|sound|spring|machineset|eventcar

object CarBuilder2CommandTab : TabCompleter {
  override fun onTabComplete(
      sender: CommandSender,
      command: Command,
      alias: String,
      args: Array<out String>
  ): MutableList<String>? {
    return handleCarBuilder2Tab(sender, command, alias, args)
  }
}

@Suppress("UNUSED_PARAMETER")
fun handleCarBuilder2Tab(
    sender: CommandSender,
    command: Command,
    alias: String,
    args: Array<out String>
): MutableList<String>? {
  if (command.name != "carbuilder2") return null

  return when (args.size) {
    1 -> {
      val list = CarBuilder2BaseCache.getNameList()
      BuilderCommandTabSupport.filterContains(args[0], list)
    }
    2 -> {
      val data =
          CarBuilder2BaseCache.getBaseData(args[0])
              ?: return if (sender.canCreateCarBuilder2()) mutableListOf("save")
              else mutableListOf()
      val subCommands = mutableListOf<String>()
      if (sender.canRideCarBuilder2OrAdmin()) {
        subCommands.add("spawn")
      }
      if (sender.canUseCarBuilder2()) {
        subCommands.add("buy")
        subCommands.add("info")
      }
      if (sender.canManageCarBuilder2(data)) {
        subCommands.addAll(
            listOf("save", "size", "offset", "headlight", "sound", "spring", "delete"))
      }
      if (sender.hasOyasaiAdminPermission()) {
        subCommands.addAll(listOf("eventcar", "machineset"))
      }
      BuilderCommandTabSupport.filterStartsWith(args[1], subCommands)
    }
    3 -> {
      val sub = args[1].lowercase(Locale.ROOT)
      val current = args[2].lowercase(Locale.ROOT)
      when (sub) {
        "machineset" -> tabFilter(current, listOf("<最高速(1～180)>", "80", "120", "160", "180"))
        "offset" -> tabFilter(current, listOf("seat", "body", "wheel", "wheel2", "headlight"))
        "spring" -> tabFilter(current, listOf("<大きいほど柔らかい>", "1.0"))
        "headlight" -> tabFilter(current, listOf("angle", "rotateoffset"))
        "sound" -> tabFilter(current, listOf("Default", "EV", "Turbo", "Default2", "Default3"))
        "spawn" -> {
          if (sender is Player) {
            val targetBlock = sender.getTargetBlockExact(5)
            val type = targetBlock?.type
            if (type == Material.COMMAND_BLOCK ||
                type == Material.CHAIN_COMMAND_BLOCK ||
                type == Material.REPEATING_COMMAND_BLOCK) {
              return tabFilter(current, CARDINAL_DIRECTIONS)
            }
          }
          if (sender is ConsoleCommandSender) null else mutableListOf()
        }
        "eventcar" -> tabFilter(current, listOf("<コスト上限値(1～)>", "100", "150", "200", "300", "500"))
        "save",
        "size" -> tabFilter(current, listOf("body", "wheel", "wheel2", "headlight"))
        else -> mutableListOf()
      }
    }
    4 -> {
      val sub = args[1].lowercase(Locale.ROOT)
      val sub2 = args[2].lowercase(Locale.ROOT)
      val current = args[3].lowercase(Locale.ROOT)
      when (sub) {
        "machineset" ->
            tabFilter(
                current, listOf("<パワー(1～1000)>", "64", "180", "280", "320", "500", "700", "1000"))
        "offset" -> tabFilter(current, listOf("管理番号(0～9)", "0", "1", "2", "3"))
        "headlight" -> {
          if (sub2 == "angle") tabFilter(current, listOf("45.0"))
          else if (sub2 == "rotateoffset") tabFilter(current, listOf("<x>", "0.000"))
          else mutableListOf()
        }
        "size" -> {
          if (sub2 == "body") tabFilter(current, listOf("3.5", "3.125"))
          else tabFilter(current, listOf("0.5", "0.125"))
        }
        else -> mutableListOf()
      }
    }
    5 -> {
      val sub = args[1].lowercase(Locale.ROOT)
      val sub2 = args[2].lowercase(Locale.ROOT)
      val current = args[4].lowercase(Locale.ROOT)
      when (sub) {
        "machineset" ->
            tabFilter(
                current,
                listOf("<ブレーキ(1～1000)>", "128", "200", "350", "425", "500", "600", "800", "1000"))
        "offset" -> tabFilter(current, listOf("<x>", "0.000", "del"))
        "headlight" -> {
          if (sub2 == "rotateoffset") tabFilter(current, listOf("<y>", "0.000"))
          else mutableListOf()
        }
        else -> mutableListOf()
      }
    }
    6 -> {
      val sub = args[1].lowercase(Locale.ROOT)
      val sub2 = args[2].lowercase(Locale.ROOT)
      val current = args[5].lowercase(Locale.ROOT)
      when (sub) {
        "machineset" ->
            tabFilter(current, listOf("<ギア数(1～100)>", "1", "2", "3", "4", "5", "6", "7", "8"))
        "offset" -> tabFilter(current, listOf("<y>", "0.000"))
        "headlight" -> {
          if (sub2 == "rotateoffset") tabFilter(current, listOf("<z>", "0.000"))
          else mutableListOf()
        }
        else -> mutableListOf()
      }
    }
    7 -> {
      val sub = args[1].lowercase(Locale.ROOT)
      val current = args[6].lowercase(Locale.ROOT)
      when (sub) {
        "machineset" -> tabFilter(current, listOf("<grip(1～200)>", "1", "50", "100", "150", "200"))
        "offset" -> tabFilter(current, listOf("<z>", "0.000"))
        "headlight" -> mutableListOf()
        else -> mutableListOf()
      }
    }
    8 -> {
      val sub = args[1].lowercase(Locale.ROOT)
      val current = args[7].lowercase(Locale.ROOT)
      if (sub == "machineset") tabFilter(current, listOf("<isMT(true/false>", "true", "false"))
      else mutableListOf()
    }
    9 -> {
      val sub = args[1].lowercase(Locale.ROOT)
      val current = args[8].lowercase(Locale.ROOT)
      if (sub == "machineset") tabFilter(current, listOf("<Mode>", "Normal", "Normal_Race", "Pro"))
      else mutableListOf()
    }
    10 -> {
      val sub = args[1].lowercase(Locale.ROOT)
      val current = args[9].lowercase(Locale.ROOT)
      if (sub == "machineset") {
        if (sender is Player) {
          val targetBlock = sender.getTargetBlockExact(5)
          if (targetBlock?.type == Material.COMMAND_BLOCK) {
            return tabFilter(current, CARDINAL_DIRECTIONS)
          }
        }
        if (sender is ConsoleCommandSender) null else mutableListOf()
      } else mutableListOf()
    }
    else -> mutableListOf()
  }
}

private fun tabFilter(current: String, list: List<String>): MutableList<String> {
  return BuilderCommandTabSupport.filterStartsWith(current, list)
}
