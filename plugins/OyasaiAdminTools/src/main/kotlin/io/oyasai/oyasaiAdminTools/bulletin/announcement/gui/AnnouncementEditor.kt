package io.oyasai.oyasaiAdminTools.bulletin.announcement.gui

import com.github.stefvanschie.inventoryframework.gui.GuiItem
import com.github.stefvanschie.inventoryframework.gui.type.ChestGui
import com.github.stefvanschie.inventoryframework.pane.StaticPane
import com.github.stefvanschie.inventoryframework.pane.util.Slot
import io.oyasai.oyasaiAdminTools.bulletin.announcement.AnnouncementManager
import io.oyasai.oyasaiAdminTools.bulletin.announcement.models.Announcement
import io.oyasai.oyasaiAdminTools.bulletin.utils.BulletinGUIUtils
import io.oyasai.oyasaiAdminTools.bulletin.utils.BulletinManagerUtils
import io.oyasai.oyasaiAdminTools.utils.MMUtils.mm
import io.oyasai.oyasaiAdminTools.utils.MMUtils.msg
import org.bukkit.Material
import org.bukkit.entity.Player
import org.bukkit.inventory.ItemStack

object AnnouncementEditor {

    fun open(player: Player, announcement: Announcement) {
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
            open(player, AnnouncementManager.announcements.find { it.id == announcement.id }!!)
        }, 1, 1)

        // Interval
        pane.addItem(BulletinGUIUtils.createSettingItem(
            player, Material.CLOCK, "間隔変更 (秒)", announcement.interval.toString(),
            "間隔 (秒)", "放送する間隔を秒単位の数字で入力してください。",
            "announcement:${announcement.id}:interval"
        ) { input ->
            val sec = input.trim().toLongOrNull() ?: run { player.msg("<red>数字を入力してください。</red>"); return@createSettingItem }
            BulletinManagerUtils.updateAnnouncement(announcement.id) { it.copy(interval = sec) }
            open(player, AnnouncementManager.announcements.find { it.id == announcement.id }!!)
        }, 2, 1)

        // Sound
        pane.addItem(BulletinGUIUtils.createSettingItem(
            player, Material.JUKEBOX, "効果音設定", announcement.sound ?: "",
            "効果音ID", "告知時に流す効果音のIDを入力してください。\n内容を空にすると無効になります。",
            "announcement:${announcement.id}:sound"
        ) { input ->
            val cleaned = input.trim()
            BulletinManagerUtils.updateAnnouncement(announcement.id) { it.copy(sound = cleaned.ifBlank { null }) }
            open(player, AnnouncementManager.announcements.find { it.id == announcement.id }!!)
        }, 3, 1)

        // Expiration
        pane.addItem(BulletinGUIUtils.createSettingItem(
            player, Material.COMPASS, "期限設定 (UNIXミリ秒)", announcement.expiresAt?.toString() ?: "",
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
            open(player, AnnouncementManager.announcements.find { it.id == announcement.id }!!)
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
                { open(player, AnnouncementManager.announcements.find { it.id == announcement.id }!!) }
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
                    AnnouncementBrowser.open(player)
                    player.msg("<green>削除しました。</green>")
                },
                { open(player, announcement) }
            )
        }, 7, 1)

        // Back
        pane.addItem(GuiItem(ItemStack(Material.ARROW).apply {
            itemMeta = itemMeta.apply { displayName("戻る".mm()) }
        }) { AnnouncementBrowser.open(player) }, 8, 2)

        gui.addPane(Slot.fromXY(0, 0), pane)
        gui.show(player)
    }
}
