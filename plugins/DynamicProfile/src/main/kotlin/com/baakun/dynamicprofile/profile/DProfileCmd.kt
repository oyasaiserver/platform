package com.baakun.dynamicprofile.profile

import com.baakun.dynamicprofile.Tools
import com.baakun.dynamicprofile.Tools.addText
import com.baakun.dynamicprofile.Tools.allFlag
import com.baakun.dynamicprofile.gui.GuiInventory
import com.baakun.dynamicprofile.gui.GuiItem.guiRun
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.entity.Player

/** /dprofileコマンドの処理 */
object DProfileCmd : CommandExecutor {
  override fun onCommand(
    sender: CommandSender,
    command: Command,
    label: String,
    args: Array<out String>,
  ): Boolean {
    if (command.name != "dprofile") return false

    if (sender !is Player) return false
    val inventory = GuiInventory.createInventory(6, sender.name)
    val item1 =
      Tools.getPlayerHead(sender.uniqueId)
        .addText("&f" + sender.name, mutableListOf("Test"))
        .allFlag()
    item1.guiRun { sender.sendMessage("Test OK!") }
    inventory.addItem(item1)
    sender.openInventory(inventory)

    return true
  }
}
