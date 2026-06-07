package io.oyasai.oyasaiAdminTools.bulletin.announcement.gui

import com.github.stefvanschie.inventoryframework.gui.GuiItem
import com.github.stefvanschie.inventoryframework.gui.type.ChestGui
import com.github.stefvanschie.inventoryframework.pane.PaginatedPane
import com.github.stefvanschie.inventoryframework.pane.util.Slot
import io.oyasai.oyasaiAdminTools.OyasaiAdminTools.Companion.plugin
import io.oyasai.oyasaiAdminTools.bulletin.announcement.AnnouncementManager
import io.oyasai.oyasaiAdminTools.bulletin.utils.BulletinGUIUtils
import io.oyasai.oyasaiAdminTools.bulletin.utils.BulletinManagerUtils
import io.oyasai.oyasaiAdminTools.utils.MMUtils.mm
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.Sound
import org.bukkit.entity.Player
import org.bukkit.inventory.ItemStack
import java.util.*

object AnnouncementBrowser {

    fun open(player: Player) {
        val gui = ChestGui(6, "お知らせ一覧")
        gui.setOnTopClick { it.isCancelled = true }
        gui.setOnTopDrag { it.isCancelled = true }
        val pane = PaginatedPane(9, 5)

        val items = AnnouncementManager.announcements.map { announcement ->
            val item = ItemStack(if (announcement.enabled) Material.LIME_STAINED_GLASS_PANE else Material.RED_STAINED_GLASS_PANE)
            val meta = item.itemMeta
            meta.displayName("<yellow>ID: ${announcement.id}</yellow>".mm())
            val firstMsg = announcement.messages.firstOrNull() ?: "<gray>なし</gray>"
            val lore = mutableListOf(
                "<gray>内容: </gray><white>$firstMsg</white>".mm(),
                "<gray>間隔: ${announcement.interval}s</gray>".mm(),
                "<gray>状態: </gray>${if (announcement.enabled) "<green>有効" else "<red>無効"}".mm()
            )
            announcement.expiresAt?.let { lore.add("<gray>期限: </gray><aqua>${BulletinGUIUtils.dateFormat.format(Date(it))}</aqua>".mm()) }
            if (announcement.targetGroups.isNotEmpty()) lore.add("<gray>対象: </gray><white>${announcement.targetGroups.joinToString(", ")}</white>".mm())

            lore.add(net.kyori.adventure.text.Component.empty())
            lore.add("<yellow>左クリック: 詳細編集</yellow>".mm())
            lore.add("<aqua>右クリック: 有効/無効の切替</aqua>".mm())

            meta.lore(lore)
            item.itemMeta = meta

            GuiItem(item) { event ->
                val target = AnnouncementManager.announcements.find { it.id == announcement.id } ?: return@GuiItem

                if (event.isLeftClick) {
                    AnnouncementEditor.open(player, target)
                } else if (event.isRightClick) {
                    BulletinManagerUtils.updateAnnouncement(target.id) { it.copy(enabled = !it.enabled) }
                    player.playSound(player.location, Sound.UI_BUTTON_CLICK, 1.0f, 1.0f)
                    Bukkit.getScheduler().runTask(plugin, Runnable { open(player) })
                }
            }
        }

        pane.populateWithGuiItems(items)
        gui.addPane(Slot.fromXY(0, 0), pane)
        gui.addPane(Slot.fromXY(0, 5), BulletinGUIUtils.createNavigationPane(gui, pane, player, { AnnouncementManager.reload() }, { open(player) }))
        gui.show(player)
    }
}
