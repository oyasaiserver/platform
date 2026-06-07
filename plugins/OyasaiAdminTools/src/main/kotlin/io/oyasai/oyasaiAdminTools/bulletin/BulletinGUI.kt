package io.oyasai.oyasaiAdminTools.bulletin

import com.github.stefvanschie.inventoryframework.gui.GuiItem
import com.github.stefvanschie.inventoryframework.gui.type.ChestGui
import com.github.stefvanschie.inventoryframework.pane.StaticPane
import com.github.stefvanschie.inventoryframework.pane.util.Slot
import io.oyasai.oyasaiAdminTools.bulletin.announcement.gui.AnnouncementBrowser
import io.oyasai.oyasaiAdminTools.bulletin.survey.gui.SurveyBrowser
import io.oyasai.oyasaiAdminTools.utils.MMUtils.mm
import org.bukkit.Material
import org.bukkit.entity.Player
import org.bukkit.inventory.ItemStack

object BulletinGUI {

  fun openMainMenu(player: Player) {
    val gui = ChestGui(3, "広報管理")
    gui.setOnTopClick { it.isCancelled = true }
    val pane = StaticPane(9, 3)

    pane.addItem(
        GuiItem(
            ItemStack(Material.HORN_CORAL).apply {
              itemMeta = itemMeta.apply { displayName("<gold>お知らせ管理</gold>".mm()) }
            }
        ) {
          AnnouncementBrowser.open(player)
        },
        3,
        1,
    )

    pane.addItem(
        GuiItem(
            ItemStack(Material.PAPER).apply {
              itemMeta = itemMeta.apply { displayName("<gold>アンケート管理</gold>".mm()) }
            }
        ) {
          SurveyBrowser.open(player)
        },
        5,
        1,
    )

    gui.addPane(Slot.fromXY(0, 0), pane)
    gui.show(player)
  }
}
