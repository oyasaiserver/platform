package com.baakun.dynamicprofile.command

import com.baakun.dynamicprofile.DynamicProfile
import com.baakun.dynamicprofile.gui.GuiItem.guiRun
import com.baakun.dynamicprofile.profile.MyProfile
import com.baakun.dynamicprofile.profile.OtherProfile
import com.baakun.dynamicprofile.profile.playerSelect.PlayerSelect
import com.baakun.dynamicprofile.util.Tools
import com.baakun.dynamicprofile.util.Tools.addText
import com.baakun.dynamicprofile.util.Tools.allFlag
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
    val grayStandGlassPane = ItemStack(Material.GRAY_STAINED_GLASS_PANE)
    grayStandGlassPane.addText(" ", mutableListOf()).allFlag()
    for (i in 0..53) {
      if (except.contains(i)) continue
      inv.setItem(i, grayStandGlassPane.clone())
    }
  }

  private fun applyBorderGlass(inv: Inventory, pane: ItemStack) {
    for (x in 1..8) {
      inv.setItem(x, pane.clone())
    }
    for (y in 1..5) {
      inv.setItem(9 * y, pane.clone())
    }
  }

  /** 共通の処理（自、他プレイヤープロフィールGUI） */
  fun commonFunc(inv: Inventory, viewer: Player, target: String) {
    val defaultGlassPane =
        ItemStack(Material.LIME_STAINED_GLASS_PANE).addText(" ", mutableListOf()).allFlag()
    applyBorderGlass(inv, defaultGlassPane)

    DynamicProfile.provider?.provider?.let { perms ->
      val targetUuid =
          Bukkit.getPlayerExact(target)?.uniqueId
              ?: Bukkit.getOfflinePlayerIfCached(target)?.uniqueId
              ?: Bukkit.getOfflinePlayer(target).uniqueId
      perms.userManager.loadUser(targetUuid).thenAccept { user ->
        val permissions =
            user.cachedData.getPermissionData(
                perms.contextManager.getQueryOptions(user).orElseGet {
                  perms.contextManager.staticQueryOptions
                }
            )
        var material = Material.LIME_STAINED_GLASS_PANE
        if (permissions.checkPermission("group.chukyu").asBoolean())
            material = Material.GREEN_STAINED_GLASS_PANE
        if (permissions.checkPermission("group.jokyu").asBoolean())
            material = Material.CYAN_STAINED_GLASS_PANE
        if (permissions.checkPermission("group.builder").asBoolean())
            material = Material.PURPLE_STAINED_GLASS_PANE
        if (permissions.checkPermission("group.takumi").asBoolean())
            material = Material.RED_STAINED_GLASS_PANE
        if (permissions.checkPermission("group.blue").asBoolean())
            material = Material.BLUE_STAINED_GLASS_PANE
        if (permissions.checkPermission("group.white").asBoolean())
            material = Material.WHITE_STAINED_GLASS_PANE

        val applyTask = Runnable {
          val standGlassPane = ItemStack(material).addText(" ", mutableListOf()).allFlag()
          applyBorderGlass(inv, standGlassPane)
        }
        val server = runCatching { Bukkit.getServer() }.getOrNull()
        val pluginInstance = runCatching { Tools.plugin }.getOrNull()
        if (server != null && !server.isPrimaryThread && pluginInstance != null) {
          server.scheduler.runTask(pluginInstance, applyTask)
        } else {
          applyTask.run()
        }
      }
    }

    // プレイヤー選択画面を開く
    val headPlayer = Bukkit.getOnlinePlayers().randomOrNull() ?: viewer
    val selectPlayer = Tools.getPlayerHead(headPlayer.uniqueId)
    selectPlayer
        .addText(
            "&a他プレイヤーのプロフィールを開く",
            mutableListOf(
                "&7現在のプレイヤー数..&7${Bukkit.getOnlinePlayers().size}/${Bukkit.getMaxPlayers()}"
            ),
        )
        .guiRun {
          viewer.playSound(viewer.location, Sound.UI_BUTTON_CLICK, SoundCategory.MASTER, 0.75F, 1F)
          PlayerSelect.display(viewer)
        }
    inv.setItem(53, selectPlayer)
  }
}
