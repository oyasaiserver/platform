package com.baakun.dynamicprofile.profile.playerTitle

import com.baakun.dynamicprofile.gui.GuiInventory
import com.baakun.dynamicprofile.gui.GuiItem.guiRun
import com.baakun.dynamicprofile.profile.MyProfile
import com.baakun.dynamicprofile.profile.playerTitle.TitleUtils.getTitleFromId
import com.baakun.dynamicprofile.profile.playerTitle.TitleUtils.getTitles
import com.baakun.dynamicprofile.util.Tools
import com.baakun.dynamicprofile.util.Tools.addText
import com.baakun.dynamicprofile.util.Tools.allFlag
import com.baakun.dynamicprofile.util.Tools.getIndexes
import com.baakun.dynamicprofile.util.Tools.getStats
import org.bukkit.Material
import org.bukkit.SoundCategory
import org.bukkit.enchantments.Enchantment
import org.bukkit.entity.Player
import org.bukkit.inventory.Inventory
import org.bukkit.inventory.ItemFlag
import org.bukkit.inventory.ItemStack

object SelectTitle {
  /** GUIを開く */
  fun display(player: Player) {
    var page = 0
    val inventory = GuiInventory.createInventory(6, "称号を設定")
    titles(player, page, inventory)

    // 最大ページ数を計算
    val titleSize = getTitles(player).size
    val maxPage = if (titleSize <= 45) 0 else (titleSize - 1) / 45

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
            page++
            titles(player, page, inventory)
          }
        }
        .addText("&a次のページへ", mutableListOf())
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
            page--
            titles(player, page, inventory)
          }
        }
        .addText("&a前のページへ", mutableListOf())
        .allFlag()
    inventory.setItem(53, nextPage)
    inventory.setItem(45, previousPage)

    val myProfile = Tools.getPlayerHead(player.uniqueId)
    myProfile
        .addText("&a自分のプロフィールに戻る", mutableListOf())
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

  /** 称号のアイテムを配置 */
  private fun titles(player: Player, page: Int, inventory: Inventory) {
    val titles = getTitles(player).toMutableList()
    titles.sortByDescending { getTitleFromId(it).rarity }
    repeat(45) { i -> inventory.setItem(i, ItemStack(Material.AIR)) }
    val stats = getStats(player.uniqueId)
    getIndexes(page, 44, titles.size).forEachIndexed { slot, i ->
      if (i == titles.size) return@forEachIndexed
      val currentTitle = getTitleFromId(titles[i])
      val title = ItemStack(Material.FILLED_MAP)
      val titleLore = mutableListOf<String>()
      titleLore.addAll(
          mutableListOf(
              "&a所有者数: &7${currentTitle.owners.size}",
              "&aバリュー(表示優先度): &7${currentTitle.rarity}",
          )
      )
      if (currentTitle.description != null && !currentTitle.description.isEmpty()) {
        titleLore.add("")
        titleLore.add("&7称号の説明 &f:")
        currentTitle.description.forEach { line -> titleLore.add(" &f$line") }
      }

      title.addText("&6[称号] ${currentTitle.title}", titleLore)
      if (stats.title != -1 && stats.title == currentTitle.id) {
        title.addUnsafeEnchantment(Enchantment.MENDING, 1)
        title.addItemFlags(ItemFlag.HIDE_ENCHANTS)
        title.guiRun {
          player.playSound(
              player.eyeLocation,
              org.bukkit.Sound.UI_BUTTON_CLICK,
              SoundCategory.MASTER,
              0.75F,
              1F,
          )
          stats.title = -1
          display(player)
        }
      } else {
        title
            .guiRun {
              player.playSound(
                  player.eyeLocation,
                  org.bukkit.Sound.UI_BUTTON_CLICK,
                  SoundCategory.MASTER,
                  0.75F,
                  1F,
              )
              stats.title = currentTitle.id
              display(player)
            }
            .allFlag()
      }
      inventory.setItem(slot, title)
    }
  }
}
