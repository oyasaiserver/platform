package com.baakun.dynamicprofile.model

import com.baakun.dynamicprofile.gui.GuiInventory
import com.baakun.dynamicprofile.gui.GuiItem.guiRun
import com.baakun.dynamicprofile.gui.NumberBanner
import com.baakun.dynamicprofile.util.Tools.addText
import com.baakun.dynamicprofile.util.Tools.allFlag
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.Sound
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
  fun getPayAmountGUI(from: Player, to: String): Inventory =
      createAmountGUI(from, to, "送金額を決める 送信先: ${to}", 100, "pay", "&fクリックで送金します")

  /** プレイヤーからプレイヤーへ/payする為のGUIを返す */
  fun getTokenAmountGUI(from: Player, to: String): Inventory =
      createAmountGUI(from, to, "送るポイントを決める 送信先: ${to}", 10, "token send", "&fクリックで送ります")

  private fun createAmountGUI(
      from: Player,
      to: String,
      title: String,
      initialAmount: Int,
      command: String,
      clickLore: String,
  ): Inventory {
    val gui = GuiInventory.createInventory(3, title)
    var amount = initialAmount
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
                    amountChangeToGui(gui, amount, from, to, command, clickLore)
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
                    amountChangeToGui(gui, amount, from, to, command, clickLore)
                  }
            }

        if (y == 0) {
          gui.setItem(9 - x, amountSetItem)
        } else {
          gui.setItem(9 - x + 18, amountSetItem)
        }
      }
    }
    amountChangeToGui(gui, amount, from, to, command, clickLore)
    return gui
  }

  /** 金額の変化を反映する */
  private fun amountChangeToGui(
      gui: Inventory,
      amount: Int,
      from: Player,
      to: String,
      command: String,
      clickLore: String,
  ) {
    val chars = amount.toString().toCharArray()
    if (chars.size < 9) {
      for (i in chars.size..8) {
        gui.setItem(17 - i, null)
      }
    }
    for (i in 0..chars.lastIndex) {
      val nb = NumberBanner.getBannerChar(chars[i]) ?: break
      nb.addText("&e${amount}", mutableListOf(clickLore)).allFlag().guiRun {
        from.performCommand("$command $to $amount")
        from.closeInventory()
        Bukkit.getLogger().info("${from.name} to dProfile sendCommand: /$command $to $amount")
      }
      gui.setItem(17 - chars.lastIndex + i, nb)
    }

    from.playSound(from.location, Sound.UI_BUTTON_CLICK, SoundCategory.MASTER, 0.75F, 1F)
  }
}
