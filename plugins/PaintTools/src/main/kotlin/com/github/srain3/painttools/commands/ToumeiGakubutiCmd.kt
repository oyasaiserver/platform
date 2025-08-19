package com.github.srain3.painttools.commands

import com.github.srain3.painttools.tools.ToolBox
import kotlin.math.PI
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.entity.ItemFrame
import org.bukkit.entity.Player
import org.bukkit.util.Vector

/** 透明額縁を簡単に作れるコマンド */
object ToumeiGakubutiCmd : CommandExecutor {
  override fun onCommand(
    sender: CommandSender,
    command: Command,
    label: String,
    args: Array<out String>,
  ): Boolean {
    if (command.name != "toumeigakubuti") return false
    if (sender !is Player) return false

    if (sender.hasPermission("painttools.command.toumeigakubuti.admin")) {
      if (args.isNotEmpty()) {
        when (args[0]) {
          "force" -> {
            var count = 0
            sender.getNearbyEntities(8.0, 8.0, 8.0).filterIsInstance<ItemFrame>().forEach {
              if (!it.isVisible) {
                it.isVisible = true
                count++
              }
            }
            sender.sendMessage(
              ToolBox.colorMessage(
                "[PaintTools] &aPlayer中心に&6半径8block&aほどの透明額縁&6${count}個&aを&c透明解除&aしました"
              )
            )
          }

          "count" -> {
            val count =
              sender
                .getNearbyEntities(8.0, 8.0, 8.0)
                .filterIsInstance<ItemFrame>()
                .filter { !it.isVisible }
                .size
            sender.sendMessage(
              ToolBox.colorMessage("[PaintTools] &aPlayer中心に&6半径8block&aほどの透明額縁の数は&e${count}個&aです")
            )
          }

          else -> {
            sender.sendMessage(ToolBox.colorMessage("[PaintTools] [ &6force &r| &6count &r]"))
          }
        }
        return true
      }
    }

    val vec = Vector(0.0, 0.0, 1.0)
    vec.rotateAroundX(PI / 180 * sender.eyeLocation.pitch)
    vec.rotateAroundY(PI / 180 * -sender.eyeLocation.yaw)

    val entity =
      sender.world
        .rayTraceEntities(sender.eyeLocation, vec, 8.0, 0.025) { it is ItemFrame }
        ?.hitEntity
    if (entity is ItemFrame) {
      entity.isVisible = !entity.isVisible
      sender.sendMessage(
        ToolBox.colorMessage("[PaintTools] &a額縁の透明化を&6${!entity.isVisible}&aへ変更しました!")
      )
    } else {
      sender.sendMessage(ToolBox.colorMessage("[PaintTools] &c額縁に視線を合わせて下さい!"))
    }
    return true
  }
}
