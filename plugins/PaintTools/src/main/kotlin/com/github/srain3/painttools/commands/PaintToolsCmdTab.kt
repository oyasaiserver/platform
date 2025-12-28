package com.github.srain3.painttools.commands

import org.bukkit.command.Command
import org.bukkit.command.CommandSender
import org.bukkit.command.TabCompleter
import org.bukkit.entity.Player

/** コマンド「/painttools」のTab補完を処理する */
object PaintToolsCmdTab : TabCompleter {
  override fun onTabComplete(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<out String>,
  ): MutableList<String>? {
    if (command.name != "painttools") return null
    if (!sender.hasPermission("painttools.command.painttools")) return null

    when (args.size) {
      0,
      1 -> {
        return mutableListOf("canvas", "lock", "unlock", "dye", "brushsize", "undo")
      }

      2 -> {
        when (args[0]) {
          "canvas" -> {
            return if (sender !is Player) {
              null
            } else {
              mutableListOf("[ID(Num)] or [null]")
            }
          }

          "lock",
          "unlock" -> {
            return if (sender !is Player) {
              null
            } else {
              mutableListOf("[ID(Int)]")
            }
          }

          "brushsize" -> {
            return if (sender !is Player) {
              null
            } else {
              mutableListOf("[0～20(Default:2)]")
            }
          }

          "undo" -> {
            return if (sender !is Player) {
              null
            } else {
              mutableListOf("[1～3(分前)]")
            }
          }
        }
      }
    }

    return null
  }
}
