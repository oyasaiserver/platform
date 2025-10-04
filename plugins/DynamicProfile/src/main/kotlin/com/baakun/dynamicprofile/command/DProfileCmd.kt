package com.baakun.dynamicprofile.command

import com.baakun.dynamicprofile.DynamicProfile
import com.baakun.dynamicprofile.gui.GuiItem.guiRun
import com.baakun.dynamicprofile.profile.MyProfile
import com.baakun.dynamicprofile.profile.OtherProfile
import com.baakun.dynamicprofile.profile.playerSelect.PlayerSelect
import com.baakun.dynamicprofile.profile.playerSelect.RunType
import com.baakun.dynamicprofile.util.Tools
import com.baakun.dynamicprofile.util.Tools.addText
import com.baakun.dynamicprofile.util.Tools.allFlag
import kotlin.concurrent.thread
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.Sound
import org.bukkit.SoundCategory
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.entity.Player
import org.bukkit.inventory.Inventory
import org.bukkit.inventory.ItemStack

/** /dprofileコマンドの処理 */
object DProfileCmd : CommandExecutor {
  private val required = Tools.plugin.config.getInt("Required", 100000)

  override fun onCommand(
    sender: CommandSender,
    command: Command,
    label: String,
    args: Array<out String>,
  ): Boolean {
    if (command.name != "dprofile") return false

    if (sender !is Player) return false

    var target: String = sender.name
    if (args.isNotEmpty()) target = args[0]
    if (target == sender.name) {
      MyProfile.display(sender)
    } else {
      OtherProfile.display(sender, target)
    }
    return true
  }

  /** 右下の黒いガラスを埋める */
  fun addBlackStandGlass(inv: Inventory, except: Array<Int>) {
    thread {
      val grayStandGlassPane = ItemStack(Material.GRAY_STAINED_GLASS_PANE)
      grayStandGlassPane.addText(" ", mutableListOf()).allFlag()
      for (i in 0..53) {
        if (except.contains(i)) continue
        inv.setItem(i, grayStandGlassPane.clone())
      }
    }
  }

  /** 共通の処理（自、他プレイヤープロフィールGUI） */
  fun commonFunc(inv: Inventory, viewer: Player, target: String) {
    thread { // Threadを使わないと、サーバーが固まる可能性があると表示され処理が止まる
      var standGlassPane = ItemStack(Material.LIME_STAINED_GLASS_PANE)
      standGlassPane.addText(" ", mutableListOf()).allFlag()
      DynamicProfile.perms?.let { perms ->
        if (perms.playerHas("*", Bukkit.getOfflinePlayer(target), "group.chukyu"))
          standGlassPane = ItemStack(Material.GREEN_STAINED_GLASS_PANE).addText(" ", mutableListOf()).allFlag()
        if (perms.playerHas("*", Bukkit.getOfflinePlayer(target), "group.jokyu"))
          standGlassPane = ItemStack(Material.CYAN_STAINED_GLASS_PANE).addText(" ", mutableListOf()).allFlag()
        if (perms.playerHas("*", Bukkit.getOfflinePlayer(target), "group.builder"))
          standGlassPane = ItemStack(Material.PURPLE_STAINED_GLASS_PANE).addText(" ", mutableListOf()).allFlag()
        if (perms.playerHas("*", Bukkit.getOfflinePlayer(target), "group.takumi"))
          standGlassPane = ItemStack(Material.RED_STAINED_GLASS_PANE).addText(" ", mutableListOf()).allFlag()
        if (perms.playerHas("*", Bukkit.getOfflinePlayer(target), "group.blue"))
          standGlassPane = ItemStack(Material.BLUE_STAINED_GLASS_PANE).addText(" ", mutableListOf()).allFlag()
        if (perms.playerHas("*", Bukkit.getOfflinePlayer(target), "group.white"))
          standGlassPane = ItemStack(Material.WHITE_STAINED_GLASS_PANE).addText(" ", mutableListOf()).allFlag()
      }

      for (x in 1..8) {
        inv.setItem(x, standGlassPane.clone())
      }
      for (y in 1..5) {
        inv.setItem(9 * y, standGlassPane.clone())
      }
    }

    // プレイヤー選択画面を開く
    val headPlayer =
      Bukkit.getOnlinePlayers().toList().get((0..Bukkit.getOnlinePlayers().size - 1).random())
    val selectPlayer = Tools.getPlayerHead(headPlayer.uniqueId)
    selectPlayer
      .addText(
        "&a他プレイヤーのプロフィールを開く",
        mutableListOf("&7現在のプレイヤー数..&7${Bukkit.getOnlinePlayers().size}/${Bukkit.getMaxPlayers()}"),
      )
      .guiRun {
        viewer.playSound(viewer.location, Sound.UI_BUTTON_CLICK, SoundCategory.MASTER, 0.75F, 1F)
        PlayerSelect.display(viewer, RunType.OPEN_PROFILE)
      }
    inv.setItem(53, selectPlayer)
  }
}
