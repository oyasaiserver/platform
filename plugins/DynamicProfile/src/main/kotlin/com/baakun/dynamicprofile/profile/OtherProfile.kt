package com.baakun.dynamicprofile.profile

import com.baakun.dynamicprofile.command.DProfileCmd.addBlackStandGlass
import com.baakun.dynamicprofile.command.DProfileCmd.commonFunc
import com.baakun.dynamicprofile.gui.GuiInventory
import com.baakun.dynamicprofile.gui.GuiItem.guiRun
import com.baakun.dynamicprofile.model.GiftItem
import com.baakun.dynamicprofile.model.Pay
import com.baakun.dynamicprofile.util.Tools
import com.baakun.dynamicprofile.util.Tools.addText
import com.baakun.dynamicprofile.util.Tools.allFlag
import com.baakun.dynamicprofile.util.Tools.color
import com.baakun.dynamicprofile.util.Tools.getStats
import com.baakun.dynamicprofile.util.Tools.toFormat
import com.github.srain3.sociallikes.datas.Data
import org.bukkit.*
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

    ProfileUtil.setupProfileHead(
      player = ofp,
      statsData = statsData,
      inventory = inventory,
      isSelfProfile = false,
      soundPlayer = sender,
    )

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
      val recommend = statsData.recommends[i] ?: -1
      if (recommend == -1) {
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
          viewer.playSound(viewer.location, Sound.UI_BUTTON_CLICK, SoundCategory.MASTER, 0.75F, 1F)
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
          viewer.playSound(viewer.location, Sound.UI_BUTTON_CLICK, SoundCategory.MASTER, 0.75F, 1F)
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
          viewer.playSound(viewer.location, Sound.UI_BUTTON_CLICK, SoundCategory.MASTER, 0.75F, 1F)
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
          viewer.playSound(viewer.location, Sound.UI_BUTTON_CLICK, SoundCategory.MASTER, 0.75F, 1F)
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
