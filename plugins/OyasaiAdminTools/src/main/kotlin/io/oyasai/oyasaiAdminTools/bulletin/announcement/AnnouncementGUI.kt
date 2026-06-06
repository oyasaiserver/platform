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
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.minimessage.MiniMessage
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.Sound
import org.bukkit.entity.Player
import org.bukkit.inventory.ItemStack
import java.text.SimpleDateFormat
import java.util.*

object AnnouncementGUI {
    private val miniMessage = MiniMessage.miniMessage()
    private val dateFormat = SimpleDateFormat("yyyy/MM/dd HH:mm")

    fun openMenu(player: Player) {
        val gui = ChestGui(6, "お知らせ一覧")
        gui.setOnTopClick { it.isCancelled = true }
        gui.setOnTopDrag { it.isCancelled = true }
        val pane = PaginatedPane(9, 5)

        val items = AnnouncementManager.announcements.map { announcement ->
            val item = ItemStack(if (announcement.enabled) Material.LIME_STAINED_GLASS_PANE else Material.RED_STAINED_GLASS_PANE)
            val meta = item.itemMeta
            meta.displayName(miniMessage.deserialize("<yellow>ID: ${announcement.id}</yellow>"))
            val lore = mutableListOf(
                miniMessage.deserialize("<gray>内容: </gray><white>${announcement.message}</white>"),
                miniMessage.deserialize("<gray>間隔: ${announcement.interval}s</gray>"),
                miniMessage.deserialize("<gray>状態: </gray>${if (announcement.enabled) "<green>有効" else "<red>無効"}")
            )
            announcement.expiresAt?.let { lore.add(miniMessage.deserialize("<gray>期限: </gray><aqua>${dateFormat.format(Date(it))}</aqua>")) }
            if (announcement.targetGroups.isNotEmpty()) lore.add(miniMessage.deserialize("<gray>対象: </gray><white>${announcement.targetGroups.joinToString(", ")}</white>"))
            
            lore.add(Component.empty())
            lore.add(miniMessage.deserialize("<yellow>左クリック: 詳細編集</yellow>"))
            lore.add(miniMessage.deserialize("<aqua>右クリック: 有効/無効の切替</aqua>"))
            
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
            val sec = input.trim().toLongOrNull() ?: return@createSettingItem
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
            val time = input.trim().ifBlank { null }?.toLongOrNull()
            BulletinManagerUtils.updateAnnouncement(announcement.id) { it.copy(expiresAt = time) }
            openEditor(player, AnnouncementManager.announcements.find { it.id == announcement.id }!!)
        }, 4, 1)

        // Groups
        pane.addItem(GuiItem(ItemStack(Material.WHITE_BANNER).apply {
            itemMeta = itemMeta.apply { 
                displayName(miniMessage.deserialize("<yellow>ターゲットグループ設定</yellow>"))
                lore(listOf(
                    miniMessage.deserialize("<gray>現在: ${announcement.targetGroups.joinToString(", ").ifEmpty { "全員" }}</gray>"),
                    miniMessage.deserialize("<gray>クリックしてGUIで選択</gray>")
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
            itemMeta = itemMeta.apply { displayName(miniMessage.deserialize("<red>削除する</red>")) }
        }) {
            AnnouncementManager.announcements.removeIf { it.id == announcement.id }
            AnnouncementManager.save()
            AnnouncementManager.refreshTimers()
            openMenu(player)
        }, 7, 1)

        // Back
        pane.addItem(GuiItem(ItemStack(Material.ARROW).apply {
            itemMeta = itemMeta.apply { displayName(miniMessage.deserialize("戻る")) }
        }) { openMenu(player) }, 8, 2)

        gui.addPane(Slot.fromXY(0, 0), pane)
        gui.show(player)
    }
}
