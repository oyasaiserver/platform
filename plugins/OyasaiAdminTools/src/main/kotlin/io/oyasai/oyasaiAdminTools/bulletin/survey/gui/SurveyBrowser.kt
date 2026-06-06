package io.oyasai.oyasaiAdminTools.bulletin.survey.gui

import com.github.stefvanschie.inventoryframework.gui.GuiItem
import com.github.stefvanschie.inventoryframework.gui.type.ChestGui
import com.github.stefvanschie.inventoryframework.pane.PaginatedPane
import com.github.stefvanschie.inventoryframework.pane.util.Slot
import io.oyasai.oyasaiAdminTools.OyasaiAdminTools.Companion.plugin
import io.oyasai.oyasaiAdminTools.bulletin.survey.SurveyManager
import io.oyasai.oyasaiAdminTools.bulletin.utils.BulletinGUIUtils
import io.oyasai.oyasaiAdminTools.bulletin.utils.BulletinManagerUtils
import io.oyasai.oyasaiAdminTools.utils.MMUtils.mm
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.Sound
import org.bukkit.entity.Player
import org.bukkit.inventory.ItemStack
import java.util.*

object SurveyBrowser {

    fun open(player: Player) {
        val gui = ChestGui(6, "アンケート一覧")
        gui.setOnTopClick { it.isCancelled = true }
        gui.setOnTopDrag { it.isCancelled = true }
        val pane = PaginatedPane(9, 5)

        val items = SurveyManager.surveys.map { survey ->
            val item = ItemStack(if (survey.enabled) Material.BOOK else Material.ENCHANTED_BOOK)
            val meta = item.itemMeta
            meta.displayName("<yellow>ID: ${survey.id}</yellow>".mm())
            val lore = mutableListOf(
                "<gray>タイトル: ${survey.title}</gray>".mm(),
                "<gray>状態: </gray>${if (survey.enabled) "<green>有効" else "<red>無効"}".mm()
            )
            lore.add("<gray>回答者数: </gray><yellow>${survey.respondedPlayers.size}名</yellow>".mm())
            survey.expiresAt?.let { lore.add("<gray>期限: </gray><aqua>${BulletinGUIUtils.dateFormat.format(Date(it))}</aqua>".mm()) }
            
            lore.add(net.kyori.adventure.text.Component.empty())
            lore.add("<yellow>左クリック: 詳細編集</yellow>".mm())
            lore.add("<aqua>右クリック: 有効/無効の切替</aqua>".mm())
            
            meta.lore(lore)
            item.itemMeta = meta

            GuiItem(item) { event ->
                val target = SurveyManager.surveys.find { it.id == survey.id } ?: return@GuiItem
                
                if (event.isLeftClick) {
                    SurveyEditor.open(player, target)
                } else if (event.isRightClick) {
                    BulletinManagerUtils.updateSurvey(target.id) { it.copy(enabled = !it.enabled) }
                    player.playSound(player.location, Sound.UI_BUTTON_CLICK, 1.0f, 1.0f)
                    Bukkit.getScheduler().runTask(plugin, Runnable { open(player) })
                }
            }
        }

        pane.populateWithGuiItems(items)
        gui.addPane(Slot.fromXY(0, 0), pane)
        gui.addPane(Slot.fromXY(0, 5), BulletinGUIUtils.createNavigationPane(gui, pane, player, { SurveyManager.reload() }, { open(player) }))
        gui.show(player)
    }
}
