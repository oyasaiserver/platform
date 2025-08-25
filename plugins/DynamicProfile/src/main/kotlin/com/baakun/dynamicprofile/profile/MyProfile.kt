package com.baakun.dynamicprofile.profile

import com.baakun.dynamicprofile.command.DProfileCmd.addBlackStandGlass
import com.baakun.dynamicprofile.command.DProfileCmd.commonFunc
import com.baakun.dynamicprofile.gui.GuiInventory
import com.baakun.dynamicprofile.gui.GuiItem.guiRun
import com.baakun.dynamicprofile.gui.GuiItem.guiRunRight
import com.baakun.dynamicprofile.gui.GuiItem.guiRunShiftRight
import com.baakun.dynamicprofile.model.Calculator
import com.baakun.dynamicprofile.model.LevelReward
import com.baakun.dynamicprofile.model.Recommended
import com.baakun.dynamicprofile.profile.playerTitle.SelectTitle
import com.baakun.dynamicprofile.profile.playerTitle.TitleUtils.getTitleFromId
import com.baakun.dynamicprofile.util.Tools
import com.baakun.dynamicprofile.util.Tools.addText
import com.baakun.dynamicprofile.util.Tools.allFlag
import com.baakun.dynamicprofile.util.Tools.getStats
import com.baakun.dynamicprofile.util.Tools.toFormat
import com.github.srain3.sociallikes.datas.Data
import org.bukkit.Material
import org.bukkit.Sound
import org.bukkit.SoundCategory
import org.bukkit.entity.Player
import org.bukkit.inventory.Inventory
import org.bukkit.inventory.ItemStack

object MyProfile {

  fun display(player: Player) {
    val required = Tools.plugin.config.getInt("Required", 100000)
    val inventory = GuiInventory.createInventory(6, player.name)

    addBlackStandGlass(
      inventory,
      arrayOf(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 18, 27, 36, 45, 12, 13, 14, 15, 16, 51, 52, 53),
    )
    commonFunc(inventory, player, player.name)

    val statsData = getStats(player.uniqueId)

    var playerHeadItemStatus = false
    var title = "&f" + player.name + " &7Lv.${Calculator.getLevel(player)}"
    if (statsData.title != -1) {
      if (getTitleFromId(statsData.title).owners.contains(player.uniqueId)) {
        title = "&7[${getTitleFromId(statsData.title).title}&7] " + title
      } else {
        statsData.title = -1
      }
    }
    val titleLore =
      mutableListOf(
        "&a総プレイ時間: &7${statsData.getPlayTime()}",
        "&a初ログイン: &7${statsData.getFirstPlayed()}",
      )
    if (statsData.title != -1) {
      val currentTitle = getTitleFromId(statsData.title)
      if (currentTitle.description != null && !currentTitle.description.isEmpty()) {
        titleLore.add("")
        titleLore.add("&7称号の説明 &f:")
        currentTitle.description.forEach { line -> titleLore.add(" &f$line") }
      }
    }
    val playerHeadItem = Tools.getPlayerHead(player.uniqueId).addText(title, titleLore).allFlag()
    /** ヘッドをクリックした際に、Loreの表示を切り替える */
    playerHeadItem.guiRun {
      player.playSound(player.eyeLocation, Sound.UI_BUTTON_CLICK, SoundCategory.MASTER, 0.75F, 1F)
      val list: MutableList<String>
      if (playerHeadItemStatus) {
        list =
          mutableListOf(
            "&a総プレイ時間: &7${statsData.getPlayTime()}",
            "&a初ログイン: &7${statsData.getFirstPlayed()}",
          )
        if (statsData.title != -1) {
          val currentTitle = getTitleFromId(statsData.title)
          if (currentTitle.description != null && !currentTitle.description.isEmpty()) {
            list.add("")
            list.add("&7称号の説明 &f:")
            currentTitle.description.forEach { line -> list.add(" &f$line") }
          }
        }
        playerHeadItemStatus = false
      } else {
        list =
          mutableListOf(
            "&a獲得経験値: &7${statsData.exp}",
            "&a総プレイ時間: &7${statsData.getPlayTime()}",
            "&a移動距離: &7${statsData.move+statsData.fly+statsData.vehicle}m",
            "&aジャンプ数: &7${statsData.jump}回",
            "&aブロック設置数: &7${statsData.block}個",
            "&a投票した回数: &7${statsData.vote}回",
            "&aイイねした回数: &7${statsData.like}回",
            "&aイイねされた回数: &7${statsData.receiveLike}回",
            "&aログインした回数: &7${statsData.join}日",
            "&aチャットした回数: &7${statsData.chat}回",
          )
        playerHeadItemStatus = true
      }
      playerHeadItem.addText(title, list).allFlag()

      inventory.setItem(0, playerHeadItem)
    }

    inventory.setItem(0, playerHeadItem)
    addMenuItems(inventory, player)

    player.openInventory(inventory)
  }

  private fun addMenuItems(inventory: Inventory, player: Player) {
    val required = Tools.plugin.config.getInt("Required", 100000)
    val statsData = getStats(player.uniqueId)

    val setTitle = ItemStack(Material.BAMBOO_HANGING_SIGN)
    setTitle.addText("&a称号設定", mutableListOf("&7プロフィール画面で表示される", "&7称号を設定する")).guiRun {
      SelectTitle.display(player)
    }

    inventory.setItem(10, setTitle)

    for (i in 0..4) {
      val recommend = statsData.recommends[i] ?: -0
      if (recommend == -0) {
        val noRecommend = ItemStack(Material.PAPER)
        noRecommend.addText("空スロット#${i + 1}", mutableListOf("右クリックして編集")).allFlag()
        noRecommend.guiRunRight {
          player.closeInventory()
          Recommended.display(player, i)
        }
        inventory.setItem(i + 12, noRecommend)
      } else {
        val signData = Data.getSLData(recommend)
        val sign = ItemStack(Material.OAK_SIGN)
        if (signData != null) {
          sign.addText(
            "&f>>&a${signData.title} &fID:${signData.id}",
            mutableListOf(
              "&3イイね: ${signData.likes.size}",
              "&3作成日: ${signData.time.toFormat()}",
              "&f&nクリックしてテレポート",
              "右クリックして編集",
              "Shift+右クリックで登録解除",
            ),
          )
        }
        sign.guiRun {
          player.closeInventory()
          signData?.let { player.teleport(it.loc) }
        }
        sign.guiRunRight {
          player.closeInventory()
          Recommended.display(player, i)
        }
        sign.guiRunShiftRight {
          statsData.recommends[i] = -0
          player.sendMessage("§aおすすめを削除しました。")
          player.closeInventory()
          addMenuItems(inventory, player)
        }
        inventory.setItem(i + 12, sign)
      }
    }
    val noticeSetting = ItemStack(Material.BELL)

    noticeSetting
      .guiRun {
        player.playSound(player.eyeLocation, Sound.UI_BUTTON_CLICK, SoundCategory.MASTER, 0.75F, 1F)
        statsData.notice = statsData.notice.not()
        noticeSetting.addText(
          "&aレベルアップをタイトルで通知する",
          mutableListOf("&f" + if (statsData.notice) "はい" else "いいえ"),
        )
        inventory.setItem(51, noticeSetting)
      }
      .addText("&aレベルアップをタイトルで通知する", mutableListOf("&f" + if (statsData.notice) "はい" else "いいえ"))
    inventory.setItem(51, noticeSetting)

    val receiveLevelRewards = ItemStack(Material.CHEST)
    receiveLevelRewards
      .guiRun {
        player.playSound(
          player.eyeLocation,
          Sound.BLOCK_CHEST_OPEN,
          SoundCategory.MASTER,
          0.75F,
          1F,
        )
        LevelReward.display(player)
      }
      .addText(
        "&aレベル報酬を受け取る",
        mutableListOf(
          "&7現在のレベル: &6${Calculator.getLevel(player)}",
          "&7次のレベルまで: &3${Calculator.getExpFromLevel(Calculator.getLevel(player)+1)-statsData.exp}",
        ),
      )
      .allFlag()
    inventory.setItem(52, receiveLevelRewards)
  }
}
