package io.oyasai.oyasaiAdminTools.bulletin.announcement

import com.github.stefvanschie.inventoryframework.gui.GuiItem
import com.github.stefvanschie.inventoryframework.gui.type.ChestGui
import com.github.stefvanschie.inventoryframework.pane.PaginatedPane
import com.github.stefvanschie.inventoryframework.pane.StaticPane
import com.github.stefvanschie.inventoryframework.pane.util.Slot
import io.oyasai.oyasaiAdminTools.OyasaiAdminTools.Companion.plugin
import io.oyasai.oyasaiAdminTools.bulletin.announcement.models.Announcement
import io.oyasai.oyasaiAdminTools.bulletin.utils.BulletinGUIUtils
import io.oyasai.oyasaiAdminTools.bulletin.utils.BulletinManagerUtils
import io.oyasai.oyasaiAdminTools.utils.MMUtils.mm
import io.oyasai.oyasaiAdminTools.utils.MMUtils.msg
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.Sound
import org.bukkit.entity.Player
import org.bukkit.inventory.ItemStack
import java.util.*

object AnnouncementGUI {
    fun openMenu(player: Player) {
        val gui = ChestGui(6, "お知らせ一覧")
        gui.setOnTopClick { it.isCancelled = true }
        gui.setOnTopDrag { it.isCancelled = true }
        val pane = PaginatedPane(9, 5)

        val items = AnnouncementManager.announcements.map { announcement ->
            val item = ItemStack(if (announcement.enabled) Material.LIME_STAINED_GLASS_PANE else Material.RED_STAINED_GLASS_PANE)
            val meta = item.itemMeta
            meta.displayName("<yellow>ID: ${announcement.id}</yellow>".mm())
            val lore = mutableListOf(
                "<gray>内容: </gray><white>${announcement.message}</white>".mm(),
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
                    openEditor(player, target)
                } else if (event.isRightClick) {
                    BulletinManagerUtils.updateAnnouncement(target.id) { it.copy(enabled = !it.enabled) }
                    player.playSound(player.location, Sound.UI_BUTTON_CLICK, 1.0f, 1.0f)
                    Bukkit.getScheduler().runTask(plugin, Runnable { openMenu(player) })
                }
            }
        }

        pane.populateWithGuiItems(items)
        gui.addPane(Slot.fromXY(0, 0), pane)
        gui.addPane(Slot.fromXY(0, 5), BulletinGUIUtils.createNavigationPane(gui, pane, player, { AnnouncementManager.reload() }, { openMenu(player) }))
        gui.show(player)
    }

    private fun openEditor(player: Player, announcement: Announcement) {
        val gui = ChestGui(3, "編集: ${announcement.id}")
        gui.setOnTopClick { it.isCancelled = true }
        val pane = StaticPane(9, 3)

        // Message
        pane.addItem(BulletinGUIUtils.createSettingItem(
            player, Material.WRITABLE_BOOK, "メッセージ変更", announcement.message,
            "告知メッセージ", "定期放送されるメッセージを入力してください。\nMiniMessage形式が使用可能です。",
            "announcement:${announcement.id}:message"
        ) { input ->
            BulletinManagerUtils.updateAnnouncement(announcement.id) { it.copy(message = input) }
            openEditor(player, AnnouncementManager.announcements.find { it.id == announcement.id }!!)
        }, 1, 1)

        // Interval
        pane.addItem(BulletinGUIUtils.createSettingItem(
            player, Material.CLOCK, "間隔変更 (秒)", announcement.interval.toString(),
            "間隔 (秒)", "放送する間隔を秒単位の数字で入力してください。",
            "announcement:${announcement.id}:interval"
        ) { input ->
            val sec = input.trim().toLongOrNull() ?: run { player.msg("<red>数字を入力してください。</red>"); return@createSettingItem }
            BulletinManagerUtils.updateAnnouncement(announcement.id) { it.copy(interval = sec) }
            openEditor(player, AnnouncementManager.announcements.find { it.id == announcement.id }!!)
        }, 2, 1)

        // Sound
        pane.addItem(BulletinGUIUtils.createSettingItem(
            player, Material.JUKEBOX, "効果音設定", announcement.sound ?: "なし",
            "効果音ID", "告知時に流す効果音のIDを入力してください。\n内容を空にすると無効になります。",
            "announcement:${announcement.id}:sound"
        ) { input ->
            val cleaned = input.trim()
            BulletinManagerUtils.updateAnnouncement(announcement.id) { it.copy(sound = cleaned.ifBlank { null }) }
            openEditor(player, AnnouncementManager.announcements.find { it.id == announcement.id }!!)
        }, 3, 1)

        // Expiration
        pane.addItem(BulletinGUIUtils.createSettingItem(
            player, Material.COMPASS, "期限設定 (UNIXミリ秒)", announcement.expiresAt?.toString() ?: "なし",
            "期限 (UNIXミリ秒)", "自動停止する期限をUNIXタイムスタンプ(ミリ秒)で入力してください。",
            "announcement:${announcement.id}:expiresAt"
        ) { input ->
            val cleaned = input.trim()
            if (cleaned.isNotEmpty() && cleaned.toLongOrNull() == null) {
                player.msg("<red>無効なUNIXタイムスタンプです。</red>")
                return@createSettingItem
            }
            val time = cleaned.ifBlank { null }?.toLongOrNull()
            BulletinManagerUtils.updateAnnouncement(announcement.id) { it.copy(expiresAt = time) }
            openEditor(player, AnnouncementManager.announcements.find { it.id == announcement.id }!!)
        }, 4, 1)

        // Groups
        pane.addItem(GuiItem(ItemStack(Material.WHITE_BANNER).apply {
            itemMeta = itemMeta.apply { 
                displayName("<yellow>ターゲットグループ設定</yellow>".mm())
                lore(listOf(
                    "<gray>現在: ${announcement.targetGroups.joinToString(", ").ifEmpty { "全員" }}</gray>".mm(),
                    "<gray>クリックしてGUIで選択</gray>".mm()
                ))
            }
        }) {
            BulletinGUIUtils.openTargetGroupsEditor(
                player, 
                announcement.id,
                announcement.targetGroups,
                { newGroups -> BulletinManagerUtils.updateAnnouncement(announcement.id) { it.copy(targetGroups = newGroups) } },
                { openEditor(player, AnnouncementManager.announcements.find { it.id == announcement.id }!!) }
            )
        }, 5, 1)

        // Delete
        pane.addItem(GuiItem(ItemStack(Material.BARRIER).apply {
            itemMeta = itemMeta.apply { displayName("<red>削除する</red>".mm()) }
        }) {
            BulletinGUIUtils.openConfirmationGUI(
                player, "削除の確認", announcement.id,
                {
                    AnnouncementManager.announcements.removeIf { it.id == announcement.id }
                    AnnouncementManager.save()
                    AnnouncementManager.refreshTimers()
                    openMenu(player)
                    player.msg("<green>削除しました。</green>")
                },
                { openEditor(player, announcement) }
            )
        }, 7, 1)

        // Back
        pane.addItem(GuiItem(ItemStack(Material.ARROW).apply {
            itemMeta = itemMeta.apply { displayName("戻る".mm()) }
        }) { openMenu(player) }, 8, 2)

        gui.addPane(Slot.fromXY(0, 0), pane)
        gui.show(player)
    }
}
