package com.baakun.dynamicprofile.profile

import com.baakun.dynamicprofile.Tools
import com.baakun.dynamicprofile.Tools.addText
import com.baakun.dynamicprofile.Tools.allFlag
import com.baakun.dynamicprofile.Tools.color
import com.baakun.dynamicprofile.Tools.getStats
import com.baakun.dynamicprofile.Tools.toFormat
import com.baakun.dynamicprofile.exp.Calculator
import com.baakun.dynamicprofile.gui.GuiInventory
import com.baakun.dynamicprofile.gui.GuiItem.guiRun
import com.baakun.dynamicprofile.profile.DProfileCmd.addBlackStandGlass
import com.baakun.dynamicprofile.profile.DProfileCmd.commonFunc
import com.baakun.dynamicprofile.profile.playerTitle.TitleUtils.getTitleFromId
import com.github.srain3.sociallikes.datas.Data
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.OfflinePlayer
import org.bukkit.SoundCategory
import org.bukkit.entity.Player
import org.bukkit.inventory.Inventory
import org.bukkit.inventory.ItemStack

object OtherProfile {
  fun display(sender: Player, target: String) {
    val ofpNullable = Bukkit.getOfflinePlayerIfCached(target)
    if (ofpNullable == null) {
      val ofp = Bukkit.getOfflinePlayer(target)
      Bukkit.getLogger().info("Creating a unknown player...: $target")

      val name = ofp.name ?: "Null"

      var guiTitle = name

      if (!ofp.hasPlayedBefore()) guiTitle = "$name （何だこのおっさん！？）"

      val inventory = GuiInventory.createInventory(6, guiTitle)

      sender.openInventory(inventory)
      Thread { displayFunc(sender, ofp, inventory) }.start()
    } else {

      val name = ofpNullable.name ?: "Null"

      var guiTitle = name

      if (!ofpNullable.hasPlayedBefore()) guiTitle = "$name （何だこのおっさん！？）"

      val inventory = GuiInventory.createInventory(6, guiTitle)

      sender.openInventory(inventory)

      displayFunc(sender, ofpNullable, inventory)
    }
  }

  private fun displayFunc(sender: Player, ofp: OfflinePlayer, inventory: Inventory) {
    addBlackStandGlass(
      inventory,
      arrayOf(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 14, 15, 16, 18, 27, 36, 45, 53),
    )
    commonFunc(inventory, sender, ofp.name ?: "Null")

    val statsData = getStats(ofp.uniqueId)

    var playerHeadItemStatus = false
    var title = "&f" + ofp.name + " &7Lv.${Calculator.getLevel(ofp)}"
    if (statsData.title != -1) {
      if (getTitleFromId(statsData.title).owners.contains(ofp.uniqueId)) {
        title = "&7[${getTitleFromId(statsData.title).title}&7] " + title
      } else {
        statsData.title = -1
      }
    }
    val titleLore = mutableListOf(
      "&a総プレイ時間: &7${statsData.getPlayTime()}",
      "&a初ログイン: &7${statsData.getFirstPlayed()}",
      "&a最終オンライン: &7${if (ofp.isOnline) {"現在オンライン"} else {statsData.getLastOnlineTime()}}",
    )
    if (statsData.title != -1){
      val currentTitle = getTitleFromId(statsData.title)
      if (currentTitle.description!=null&&!currentTitle.description.isEmpty()) {
        titleLore.add("")
        titleLore.add("&7称号の説明 &f:")
        currentTitle.description.forEach { line -> titleLore.add(" &f$line") }
      }
    }
    val playerHeadItem =
      Tools.getPlayerHead(ofp.uniqueId)
        .addText(
          title,
          titleLore,
        )
        .allFlag()
    /** ヘッドをクリックした際に、Loreの表示を切り替える */
    playerHeadItem.guiRun {
      sender.playSound(
        sender.location,
        org.bukkit.Sound.UI_BUTTON_CLICK,
        SoundCategory.MASTER,
        0.75F,
        1F,
      )
      val list: MutableList<String>
      if (playerHeadItemStatus) {
        list =
          mutableListOf(
            "&a総プレイ時間: &7${statsData.getPlayTime()}",
            "&a初ログイン: &7${statsData.getFirstPlayed()}",
            "&a最終オンライン: &7${if (ofp.isOnline) {"現在オンライン"} else {statsData.getLastOnlineTime()}}",
          )
        if (statsData.title != -1){
          val currentTitle = getTitleFromId(statsData.title)
          if (currentTitle.description!=null&&!currentTitle.description.isEmpty()) {
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
            "&a投票数: &7${statsData.vote}回",
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

    addMenuItems(inventory, sender, ofp.name ?: "null", ofp)

    sender.updateInventory()
  }

  private fun addMenuItems(
    inventory: Inventory,
    viewer: Player,
    target: String,
    ofp: OfflinePlayer,
  ) {
    val statsData = getStats(Bukkit.getOfflinePlayer(target).uniqueId)

    for (i in 0..4) {
      val recommend = statsData.recommends[i] ?: -0
      if (recommend == -0) {
        val noRecommend = ItemStack(Material.PAPER)
        noRecommend.addText("空スロット#${i + 1}", mutableListOf("未設定")).allFlag()
        inventory.setItem(i + 12, noRecommend)
      } else {
        val signData = Data.getSLData(recommend)
        val sign = ItemStack(Material.OAK_SIGN)
        if (signData != null) {
          sign
            .addText(
              "&f>>&a${signData.title} &fID:${signData.id}",
              mutableListOf(
                "&3イイね: ${signData.likes.size}",
                "&3作成日: ${signData.time.toFormat()}",
                "&f&nクリックしてテレポート",
              ),
            )
            .allFlag()
        }
        sign.guiRun {
          viewer.closeInventory()
          signData?.let { viewer.teleport(it.loc) }
        }
        inventory.setItem(i + 12, sign)
      }
    }

    val moneyEmerald =
      ItemStack(Material.EMERALD)
        .addText(
          "&fクリックで送金画面を開く",
          mutableListOf("&a${target}の所持金: &7${statsData.getMoneyString()}"),
        )
        .allFlag()
        .guiRun {
          viewer.playSound(
            viewer.location,
            org.bukkit.Sound.UI_BUTTON_CLICK,
            SoundCategory.MASTER,
            0.75F,
            1F,
          )
          ofp.name?.let {
            viewer.closeInventory()
            val payGui = Pay.getPayAmountGUI(viewer, target)
            viewer.openInventory(payGui)
          }
        }
    inventory.setItem(10, moneyEmerald)
    val pointDiamond =
      ItemStack(Material.DIAMOND)
        .addText(
          "&fクリックでポイント送金画面を開く",
          mutableListOf("&9${target}の所持ポイント: &7${statsData.getPoint()}P"),
        )
        .allFlag()
        .guiRun {
          viewer.playSound(
            viewer.location,
            org.bukkit.Sound.UI_BUTTON_CLICK,
            SoundCategory.MASTER,
            0.75F,
            1F,
          )
          ofp.name?.let {
            viewer.closeInventory()
            val payGui = Pay.getTokenAmountGUI(viewer, target)
            viewer.openInventory(payGui)
          }
        }
    inventory.setItem(19, pointDiamond)

    val tpaEnderPearl =
      ItemStack(Material.ENDER_PEARL)
        .addText("&fクリックで${target}へtpa要求を送る", mutableListOf("&7相手へテレポートしたい時用", "&7相手が許可するとテレポートする"))
        .allFlag()
        .guiRun {
          viewer.playSound(
            viewer.location,
            org.bukkit.Sound.UI_BUTTON_CLICK,
            SoundCategory.MASTER,
            0.75F,
            1F,
          )
          ofp.name?.let {
            viewer.closeInventory()
            viewer.performCommand("tpa $target")
            Bukkit.getLogger().info("${viewer.name} to dProfile sendCommand: /tpa $target")
          }
        }
    inventory.setItem(28, tpaEnderPearl)
    val giftBox =
      ItemStack(Material.SHULKER_BOX)
        .addText(
          "&fクリックで${target}へアイテムを送る",
          mutableListOf(
            "&7相手へアイテムをプレゼントする時用",
            "&7シュルカーボックスで相手に送られます。",
            "&e※シュルカーボックス代 ${Tools.econ?.format(100.0)} が発生します",
            "&e※中身を入れてインベントリを閉じると自動で相手へ送られます",
          ),
        )
        .allFlag()
        .guiRun {
          viewer.playSound(
            viewer.location,
            org.bukkit.Sound.UI_BUTTON_CLICK,
            SoundCategory.MASTER,
            0.75F,
            1F,
          )
          viewer.closeInventory()

          //                if (!viewer.isOp && viewer.gameMode != GameMode.CREATIVE) {
          //                    viewer.sendMessage("&cギフト機能はサバイバルモード時のみ有効です。".color())
          //                    return@guiRun
          //                }

          val toPlayer = Bukkit.getOfflinePlayer(target)

          if (toPlayer.isOnline) {
            val toPlayerFinal = Bukkit.getPlayer(target)
            if (toPlayerFinal != null) {
              val giftGUI = GiftItem.getGiftGui(toPlayerFinal)
              viewer.openInventory(giftGUI)
            }
          } else {
            viewer.sendMessage("&c相手がオンラインではありません！".color())
          }
        }
    inventory.setItem(37, giftBox)
  }
}
