package com.baakun.dynamicprofile.profile.playerSelect

import com.baakun.dynamicprofile.gui.GuiInventory
import com.baakun.dynamicprofile.gui.GuiItem.guiRun
import com.baakun.dynamicprofile.model.Calculator
import com.baakun.dynamicprofile.profile.MyProfile
import com.baakun.dynamicprofile.profile.playerTitle.TitleUtils.getTitleFromId
import com.baakun.dynamicprofile.profile.playerTitle.TitleUtils.getTitles
import com.baakun.dynamicprofile.util.Tools
import com.baakun.dynamicprofile.util.Tools.addText
import com.baakun.dynamicprofile.util.Tools.allFlag
import com.baakun.dynamicprofile.util.Tools.getIndexes
import com.baakun.dynamicprofile.util.Tools.getStats
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.SoundCategory
import org.bukkit.entity.Player
import org.bukkit.inventory.Inventory
import org.bukkit.inventory.ItemStack

object PlayerSelect {
  /** GUIを開く */
  fun display(player: Player, type: RunType) {
    var page = 0
    val inventory = GuiInventory.createInventory(6, "プレイヤー選択")
    heads(player, page, inventory, type)

    // 最大ページ数を計算
    val playerSize = Bukkit.getOnlinePlayers().size

    val maxPage: Int =
      if (playerSize <= 45) {
        0
      } else {
        if (playerSize % 45 != 0) {
          (playerSize / 45) + 1
        } else {
          (playerSize / 45)
        }
      }

    val nextPage = ItemStack(Material.ARROW)
    val previousPage = ItemStack(Material.ARROW)
    nextPage
      .guiRun {
        if (page < maxPage) {
          player.playSound(
            player.eyeLocation,
            org.bukkit.Sound.UI_BUTTON_CLICK,
            SoundCategory.MASTER,
            0.75F,
            1F,
          )
          page += 1
          heads(player, page, inventory, type)
        }
      }
      .allFlag()
    previousPage
      .guiRun {
        if (page > 0) {
          player.playSound(
            player.eyeLocation,
            org.bukkit.Sound.UI_BUTTON_CLICK,
            SoundCategory.MASTER,
            0.75F,
            1F,
          )
          page -= 1
          heads(player, page, inventory, type)
        }
      }
      .allFlag()
    inventory.setItem(53, nextPage)
    inventory.setItem(45, previousPage)

    val myProfile = Tools.getPlayerHead(player.uniqueId)
    myProfile
      .addText("&a自分のプロフィールを開く", mutableListOf())
      .guiRun {
        player.playSound(
          player.eyeLocation,
          org.bukkit.Sound.UI_BUTTON_CLICK,
          SoundCategory.MASTER,
          0.75F,
          1F,
        )
        MyProfile.display(player)
      }
      .allFlag()
    inventory.setItem(49, myProfile)

    player.openInventory(inventory)
  }

  /** プレイヤーヘッドを配置 */
  private fun heads(player: Player, page: Int, inventory: Inventory, type: RunType) {
    val players = mutableListOf<Player>()
    players.addAll(Bukkit.getOnlinePlayers().toList())
    players.sortByDescending { Calculator.getLevel(it) }
    for (i in 0..44) {
      inventory.setItem(i, ItemStack(Material.AIR))
    }
    var slot = 0
    for (i in getIndexes(page, 44, players.size)) {

      if (i == players.size) {
        break
      } else {
        val currentPlayer = players.get(i)
        val statsData = getStats(currentPlayer.uniqueId)
        val head = Tools.getPlayerHead(currentPlayer.uniqueId)

        var title = "&f" + currentPlayer.name + " &7Lv.${Calculator.getLevel(currentPlayer)}"
        if (statsData.title != -1) {
          if (getTitles(currentPlayer.uniqueId).contains(statsData.title)) {
            title = "&7[${getTitleFromId(statsData.title).title}&7] " + title
          } else {
            statsData.title = -1
          }
        }

        head
          .addText(
            title,
            mutableListOf(
              "&a総プレイ時間: &7${statsData.getPlayTime()}",
              "&a初ログイン; &7${statsData.getFirstPlayed()}",
            ),
          )
          .guiRun {
            player.playSound(
              player.eyeLocation,
              org.bukkit.Sound.UI_BUTTON_CLICK,
              SoundCategory.MASTER,
              0.75F,
              1F,
            )
            PlayerSelectRun.run(player, currentPlayer, type)
          }
          .allFlag()

        inventory.setItem(slot, head)
      }
      slot++
    }
    //        for(i in 0..44){
    //            if(i+(page*45) == players.size){
    //                break
    //            }else{
    //                val currentPlayer = players.get(i+(page*45))
    //                val statsData = getStats(currentPlayer.uniqueId)
    //                val head = Tools.getPlayerHead(currentPlayer.uniqueId)
    //
    //                var title = "&f"+currentPlayer.name+"
    // &7Lv.${Calculator.getLevel(currentPlayer)}"
    //                if (statsData.title!=null){
    //                    if(TitleUtils.getTitles(currentPlayer.uniqueId).map { it.title
    // }.contains(statsData.title)){
    //                        title = "&7[${statsData.title}&7] " + title
    //                    } else{
    //                        statsData.title = null
    //                    }
    //                }
    //
    //                head.addText(
    //                    title,
    //                    mutableListOf(
    //                        "&a総プレイ時間: &7${statsData.getPlayTime()}",
    //                        "&a初ログイン; &7${statsData.getFirstPlayed()}"
    //                    )
    //                ).guiRun{
    //                    player.playSound(player.eyeLocation,org.bukkit.Sound.UI_BUTTON_CLICK,
    // SoundCategory.MASTER,0.75F,1F)
    //                    PlayerSelectRun.run(player, currentPlayer, type)
    //                }.allFlag()
    //
    //                inventory.setItem(i, head)
    //            }
    //        }

  }
}
