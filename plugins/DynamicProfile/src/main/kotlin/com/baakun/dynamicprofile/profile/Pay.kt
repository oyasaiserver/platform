package com.baakun.dynamicprofile.profile

import com.baakun.dynamicprofile.Tools.addText
import com.baakun.dynamicprofile.Tools.allFlag
import com.baakun.dynamicprofile.gui.GuiInventory
import com.baakun.dynamicprofile.gui.GuiItem.guiRun
import com.baakun.dynamicprofile.gui.NumberBanner
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.SoundCategory
import org.bukkit.entity.Player
import org.bukkit.inventory.Inventory
import org.bukkit.inventory.ItemStack

/** Profileでお金やポイントを送金する時に使う */
object Pay {
  private val amountMap =
    mapOf(
      Pair(1, 1),
      Pair(2, 10),
      Pair(3, 100),
      Pair(4, 1000),
      Pair(5, 10000),
      Pair(6, 100000),
      Pair(7, 1000000),
      Pair(8, 10000000),
      Pair(9, 100000000),
    )

  /** プレイヤーからプレイヤーへ/payする為のGUIを返す */
  fun getPayAmountGUI(from: Player, to: String): Inventory {
    val gui = GuiInventory.createInventory(3, "送金額を決める 送信先: ${to}")
    var amount = 100
    for (y in 0..1) {
      for (x in 1..9) {
        val amountSetItem =
          if (y == 0) {
            ItemStack(Material.GREEN_WOOL)
              .addText("&a+${amountMap[x]}", mutableListOf("&a送る額を増やします"))
              .allFlag()
              .guiRun {
                amount += amountMap[x] ?: 0
                if (amount > 999999999) {
                  amount = 999999999
                }
                amountChangeToGui(gui, amount, from, to)
              }
          } else {
            ItemStack(Material.RED_WOOL)
              .addText("&c-${amountMap[x]}", mutableListOf("&c送る額を減らします"))
              .allFlag()
              .guiRun {
                amount -= amountMap[x] ?: 0
                if (amount < 1) {
                  amount = 1
                }
                amountChangeToGui(gui, amount, from, to)
              }
          }

        if (y == 0) {
          gui.setItem(9 - x, amountSetItem)
        } else {
          gui.setItem(9 - x + 18, amountSetItem)
        }
      }
    }
    amountChangeToGui(gui, amount, from, to)
    return gui
  }

  /** 金額の変化を反映する */
  private fun amountChangeToGui(gui: Inventory, amount: Int, from: Player, to: String) {
    val chars = amount.toString().toCharArray()
    chars.size
    if (chars.size < 9) {
      for (i in chars.size..8) {
        gui.setItem(17 - i, null)
      }
    }
    for (i in 0..chars.lastIndex) {
      val nb = NumberBanner.getBannerChar(chars[i]) ?: break
      nb.addText("&e${amount}", mutableListOf("&fクリックで送金します")).allFlag().guiRun {
        from.performCommand("pay $to $amount")
        from.closeInventory()
        Bukkit.getLogger().info("${from.name} to dProfile sendCommand: /pay $to $amount")
      }
      gui.setItem(17 - chars.lastIndex + i, nb)
    }

    from.playSound(from.location, org.bukkit.Sound.UI_BUTTON_CLICK, SoundCategory.MASTER, 0.75F, 1F)
  }

  /** プレイヤーからプレイヤーへ/payする為のGUIを返す */
  fun getTokenAmountGUI(from: Player, to: String): Inventory {
    val gui = GuiInventory.createInventory(3, "送るポイントを決める 送信先: ${to}")
    var amount = 10
    for (y in 0..1) {
      for (x in 1..9) {
        val amountSetItem =
          if (y == 0) {
            ItemStack(Material.GREEN_WOOL)
              .addText("&a+${amountMap[x]}", mutableListOf("&a送る額を増やします"))
              .allFlag()
              .guiRun {
                amount += amountMap[x] ?: 0
                if (amount > 999999999) {
                  amount = 999999999
                }
                tokenAmountChangeToGui(gui, amount, from, to)
              }
          } else {
            ItemStack(Material.RED_WOOL)
              .addText("&c-${amountMap[x]}", mutableListOf("&c送る額を減らします"))
              .allFlag()
              .guiRun {
                amount -= amountMap[x] ?: 0
                if (amount < 1) {
                  amount = 1
                }
                tokenAmountChangeToGui(gui, amount, from, to)
              }
          }

        if (y == 0) {
          gui.setItem(9 - x, amountSetItem)
        } else {
          gui.setItem(9 - x + 18, amountSetItem)
        }
      }
    }
    tokenAmountChangeToGui(gui, amount, from, to)
    return gui
  }

  /** 金額の変化を反映する */
  private fun tokenAmountChangeToGui(gui: Inventory, amount: Int, from: Player, to: String) {
    val chars = amount.toString().toCharArray()
    chars.size
    if (chars.size < 9) {
      for (i in chars.size..8) {
        gui.setItem(17 - i, null)
      }
    }
    for (i in 0..chars.lastIndex) {
      val nb = NumberBanner.getBannerChar(chars[i]) ?: break
      nb.addText("&e${amount}", mutableListOf("&fクリックで送ります")).allFlag().guiRun {
        from.performCommand("token send $to $amount")
        from.closeInventory()
        Bukkit.getLogger().info("${from.name} to dProfile sendCommand: /token send $to $amount")
      }
      gui.setItem(17 - chars.lastIndex + i, nb)
    }

    from.playSound(from.location, org.bukkit.Sound.UI_BUTTON_CLICK, SoundCategory.MASTER, 0.75F, 1F)
  }
}
