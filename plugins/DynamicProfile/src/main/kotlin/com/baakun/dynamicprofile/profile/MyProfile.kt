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
  val EMPTY = Integer.MIN_VALUE

  fun display(player: Player) {
    val inventory = GuiInventory.createInventory(6, player.name)

    addBlackStandGlass(
        inventory,
        arrayOf(
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 18, 27, 36, 45, 46, 12, 13, 14, 15, 16, 51, 52, 53),
    )
    commonFunc(inventory, player, player.name)

    val statsData = getStats(player.uniqueId)
    ProfileUtil.setupProfileHead(
        player = player,
        statsData = statsData,
        inventory = inventory,
        isSelfProfile = true,
        soundPlayer = player,
    )

    addMenuItems(inventory, player)
    player.openInventory(inventory)
  }

  private fun addMenuItems(inventory: Inventory, player: Player) {
    val statsData = getStats(player.uniqueId)

    val setTitle = ItemStack(Material.BAMBOO_HANGING_SIGN)
    setTitle.addText("&a称号設定", mutableListOf("&7プロフィール画面で表示される", "&7称号を設定する")).guiRun {
      SelectTitle.display(player)
    }

    inventory.setItem(10, setTitle)

    for (i in 0..4) {
      val recommend = statsData.recommends[i] ?: EMPTY
      if (recommend == EMPTY) {
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
          statsData.recommends[i] = EMPTY
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
          player.playSound(
              player.eyeLocation, Sound.UI_BUTTON_CLICK, SoundCategory.MASTER, 0.75F, 1F)
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

    // 自己紹介編集ボタン
    val editIntro = ItemStack(Material.WRITABLE_BOOK)
    editIntro.addText("&a自己紹介を編集", mutableListOf("&7クリックして自己紹介文を本で編集", "&7閉じて完了"))
    editIntro.guiRun {
      player.closeInventory()
      val book = ItemStack(Material.WRITABLE_BOOK)
      val meta = book.itemMeta as org.bukkit.inventory.meta.BookMeta
      meta.setCustomModelData(114514)
      if (statsData.introduction.isNotEmpty()) {
        meta.addPage(statsData.introduction)
      }
      book.itemMeta = meta
      if (player.inventory.firstEmpty() != -1) {
        player.inventory.addItem(book)
        player.sendMessage("§a自己紹介編集用の本を付与しました。内容を書いて閉じてください。")
        player.sendMessage("§7閉じた時点で内容が自己紹介として保存されます。")
        player.sendMessage("§7変更せず終了する場合は、署名してください。")
      } else {
        player.sendMessage("§cインベントリに空きがないため、自己紹介編集用の本を開けません。")
      }
    }
    inventory.setItem(46, editIntro)
  }
}
