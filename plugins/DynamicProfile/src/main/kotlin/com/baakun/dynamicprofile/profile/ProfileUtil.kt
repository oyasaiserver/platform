package com.baakun.dynamicprofile.profile

import com.baakun.dynamicprofile.data.Stats
import com.baakun.dynamicprofile.gui.GuiItem.guiRun
import com.baakun.dynamicprofile.model.Calculator
import com.baakun.dynamicprofile.profile.playerTitle.TitleUtils.getTitleFromId
import com.baakun.dynamicprofile.util.Tools
import com.baakun.dynamicprofile.util.Tools.addText
import com.baakun.dynamicprofile.util.Tools.allFlag
import org.bukkit.OfflinePlayer
import org.bukkit.Sound
import org.bukkit.SoundCategory
import org.bukkit.entity.Player
import org.bukkit.inventory.Inventory
import org.bukkit.inventory.ItemStack

object ProfileUtil {
  /** プロフィールヘッドアイテムを生成 */
  fun setupProfileHead(
      player: OfflinePlayer,
      statsData: Stats,
      inventory: Inventory,
      isSelfProfile: Boolean = false,
      extraLoreFunc: ((MutableList<String>) -> Unit)? = null,
      soundPlayer: Player? = null,
  ): ItemStack {
    var playerHeadItemStatus = false
    var title = "&f" + (player.name ?: "Null") + " &7Lv.${Calculator.getLevel(player)}"
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
    if (!isSelfProfile) {
      titleLore.add(
          "&a最終オンライン: &7${if (player.isOnline) {"現在オンライン"} else {statsData.getLastOnlineTime()}}"
      )
    }
    if (statsData.introduction.isNotEmpty()) {
      titleLore.add("")
      titleLore.add("&7自己紹介 &f:")
      statsData.introduction.split("\n").forEach { line -> titleLore.add(" &f$line") }
    }
    if (statsData.title != -1) {
      val currentTitle = getTitleFromId(statsData.title)
      if (!currentTitle.description.isNullOrEmpty()) {
        titleLore.add("")
        titleLore.add("&7称号の説明 &f:")
        currentTitle.description.forEach { line -> titleLore.add(" &f$line") }
      }
    }
    extraLoreFunc?.invoke(titleLore)
    val playerHeadItem = Tools.getPlayerHead(player.uniqueId).addText(title, titleLore).allFlag()
    playerHeadItem.guiRun {
      soundPlayer?.playSound(
          soundPlayer.eyeLocation,
          Sound.UI_BUTTON_CLICK,
          SoundCategory.MASTER,
          0.75F,
          1F,
      )
      val list: MutableList<String> =
          if (playerHeadItemStatus) {
            mutableListOf(
                    "&a総プレイ時間: &7${statsData.getPlayTime()}",
                    "&a初ログイン: &7${statsData.getFirstPlayed()}",
                )
                .apply {
                  if (!isSelfProfile)
                      add(
                          "&a最終オンライン: &7${if (player.isOnline) {"現在オンライン"} else {statsData.getLastOnlineTime()}}"
                      )
                  if (statsData.introduction.isNotEmpty()) {
                    add("")
                    add("&7自己紹介 &f：")
                    statsData.introduction.split("\n").forEach { line -> add(" &f$line") }
                  }
                  if (statsData.title != -1) {
                    val currentTitle = getTitleFromId(statsData.title)
                    if (!currentTitle.description.isNullOrEmpty()) {
                      add("")
                      add("&7称号の説明 &f:")
                      currentTitle.description.forEach { line -> add(" &f$line") }
                    }
                  }
                  extraLoreFunc?.invoke(this)
                }
          } else {
            mutableListOf(
                "&a獲得経験値: &7${statsData.exp}",
                "&a総プレイ時間: &7${statsData.getPlayTime()}",
                "&a移動距離: &7${statsData.move+statsData.fly+statsData.vehicle}m",
                "&aジャンプ数: &7${statsData.jump}回",
                "&aブロック設置数: &7${statsData.block}個",
                if (isSelfProfile) "&a投票した回数: &7${statsData.vote}回"
                else "&a投票数: &7${statsData.vote}回",
                "&aイイねした回数: &7${statsData.like}回",
                "&aイイねされた回数: &7${statsData.receiveLike}回",
                "&aログインした回数: &7${statsData.join}日",
                "&aチャットした回数: &7${statsData.chat}回",
            )
          }
      playerHeadItemStatus = !playerHeadItemStatus
      playerHeadItem.addText(title, list).allFlag()
      inventory.setItem(0, playerHeadItem)
    }
    inventory.setItem(0, playerHeadItem)
    return playerHeadItem
  }
}
