package io.oyasai.oyasaiAdminTools.bulletin.announcement

import com.github.stefvanschie.inventoryframework.gui.GuiItem
import com.github.stefvanschie.inventoryframework.gui.type.ChestGui
import com.github.stefvanschie.inventoryframework.pane.PaginatedPane
import com.github.stefvanschie.inventoryframework.pane.StaticPane
import com.github.stefvanschie.inventoryframework.pane.util.Slot
import io.oyasai.oyasaiAdminTools.OyasaiAdminTools.Companion.plugin
import io.oyasai.oyasaiAdminTools.bulletin.announcement.models.Announcement
import io.oyasai.oyasaiAdminTools.utils.BookInputHandler
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
                    val index = AnnouncementManager.announcements.indexOf(target)
                    if (index != -1) {
                        AnnouncementManager.announcements[index] = target.copy(enabled = !target.enabled)
                        AnnouncementManager.save()
                        AnnouncementManager.refreshTimers()
                        player.playSound(player.location, Sound.UI_BUTTON_CLICK, 1.0f, 1.0f)
                        Bukkit.getScheduler().runTask(plugin, Runnable { openMenu(player) })
                    }
                }
            }
        }

        pane.populateWithGuiItems(items)
        gui.addPane(Slot.fromXY(0, 0), pane)
        gui.addPane(Slot.fromXY(0, 5), createNavigationPane(gui, pane, player))
        gui.show(player)
    }

    private fun openEditor(player: Player, announcement: Announcement) {
        val gui = ChestGui(3, "編集: ${announcement.id}")
        gui.setOnTopClick { it.isCancelled = true }
        val pane = StaticPane(9, 3)

        // Message
        pane.addItem(GuiItem(ItemStack(Material.WRITABLE_BOOK).apply {
            itemMeta = itemMeta.apply {
                displayName(miniMessage.deserialize("<yellow>メッセージ変更</yellow>"))
                lore(listOf(miniMessage.deserialize("<gray>現在: ${announcement.message}</gray>")))
            }
        }) {
            BookInputHandler.requestInput(
                player,
                "announcement:${announcement.id}:message",
                "告知メッセージ",
                "定期放送されるメッセージを入力してください。\nMiniMessage形式が使用可能です。\n(例: <green>投票してね！</green>)",
                announcement.message
            ) { input ->
                updateAnnouncement(announcement.id) { it.copy(message = input) }
                openEditor(player, AnnouncementManager.announcements.find { it.id == announcement.id }!!)
            }
        }, 1, 1)

        // Interval
        pane.addItem(GuiItem(ItemStack(Material.CLOCK).apply {
            itemMeta = itemMeta.apply {
                displayName(miniMessage.deserialize("<yellow>間隔変更 (秒)</yellow>"))
                lore(listOf(miniMessage.deserialize("<gray>現在: ${announcement.interval}秒</gray>")))
            }
        }) {
            BookInputHandler.requestInput(
                player,
                "announcement:${announcement.id}:interval",
                "間隔 (秒)",
                "放送する間隔を秒単位の数字で入力してください。\n(例: 1800 -> 30分間隔)",
                announcement.interval.toString()
            ) { input ->
                val sec = input.trim().toLongOrNull() ?: return@requestInput
                updateAnnouncement(announcement.id) { it.copy(interval = sec) }
                openEditor(player, AnnouncementManager.announcements.find { it.id == announcement.id }!!)
            }
        }, 2, 1)

        // Sound
        pane.addItem(GuiItem(ItemStack(Material.JUKEBOX).apply {
            itemMeta = itemMeta.apply {
                displayName(miniMessage.deserialize("<yellow>効果音設定</yellow>"))
                lore(listOf(miniMessage.deserialize("<gray>現在: ${announcement.sound ?: "なし"}</gray>")))
            }
        }) {
            BookInputHandler.requestInput(
                player,
                "announcement:${announcement.id}:sound",
                "効果音ID",
                "告知時に流す効果音のIDを入力してください。\n内容を空にして署名すると無効になります。\n(例: entity.experience_orb.pickup)",
                announcement.sound ?: ""
            ) { input ->
                val cleaned = input.trim()
                updateAnnouncement(announcement.id) { it.copy(sound = cleaned.ifBlank { null }) }
                openEditor(player, AnnouncementManager.announcements.find { it.id == announcement.id }!!)
            }
        }, 3, 1)

        // Expiration
        pane.addItem(GuiItem(ItemStack(Material.COMPASS).apply {
            itemMeta = itemMeta.apply {
                displayName(miniMessage.deserialize("<yellow>期限設定 (UNIXミリ秒)</yellow>"))
                lore(listOf(miniMessage.deserialize("<gray>現在: ${announcement.expiresAt ?: "なし"}</gray>")))
            }
        }) {
            BookInputHandler.requestInput(
                player,
                "announcement:${announcement.id}:expiresAt",
                "期限 (UNIXミリ秒)",
                "自動停止する期限をUNIXタイムスタンプ(ミリ秒)で入力してください。\n内容を空にして署名すると無期限になります。\n(現在の時刻: ${System.currentTimeMillis()})",
                announcement.expiresAt?.toString() ?: ""
            ) { input ->
                val cleaned = input.trim()
                val time = cleaned.ifBlank { null }?.toLongOrNull()
                updateAnnouncement(announcement.id) { it.copy(expiresAt = time) }
                openEditor(player, AnnouncementManager.announcements.find { it.id == announcement.id }!!)
            }
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
            openTargetGroupsEditor(player, announcement.id)
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

    private fun openTargetGroupsEditor(player: Player, id: String) {
        val gui = ChestGui(6, "グループ選択")
        gui.setOnTopClick { it.isCancelled = true }
        val pane = PaginatedPane(9, 5)

        val lpApi = net.luckperms.api.LuckPermsProvider.get()
        val allGroups = lpApi.groupManager.loadedGroups.sortedBy { it.weight.orElse(0) }.reversed()

        val currentGroups = AnnouncementManager.announcements.find { it.id == id }?.targetGroups ?: emptyList()

        val items = allGroups.map { group ->
            val isSelected = currentGroups.contains(group.name)
            val item = ItemStack(if (isSelected) Material.LIME_BANNER else Material.WHITE_BANNER)
            val meta = item.itemMeta
            meta.displayName(miniMessage.deserialize("<yellow>${group.displayName ?: group.name}</yellow>"))
            meta.lore(listOf(
                miniMessage.deserialize("<gray>内部名: ${group.name}</gray>"),
                miniMessage.deserialize("<gray>状態: </gray>${if (isSelected) "<green>選択中" else "<red>未選択"}")
            ))
            item.itemMeta = meta

            GuiItem(item) { _ ->
                val newGroups = if (isSelected) {
                    currentGroups.filter { it != group.name }
                } else {
                    currentGroups + group.name
                }

                updateAnnouncement(id) { it.copy(targetGroups = newGroups) }
                openTargetGroupsEditor(player, id)
            }
        }

        pane.populateWithGuiItems(items)
        gui.addPane(Slot.fromXY(0, 0), pane)

        val actions = StaticPane(9, 1)
        actions.addItem(GuiItem(ItemStack(Material.ARROW).apply {
            itemMeta = itemMeta.apply { displayName(miniMessage.deserialize("保存して戻る")) }
        }) {
            openEditor(player, AnnouncementManager.announcements.find { it.id == id }!!)
        }, 8, 0)

        gui.addPane(Slot.fromXY(0, 5), actions)
        gui.show(player)
    }

    private fun updateAnnouncement(id: String, action: (Announcement) -> Announcement) {
        val target = AnnouncementManager.announcements.find { it.id == id } ?: return
        val index = AnnouncementManager.announcements.indexOf(target)
        if (index != -1) {
            AnnouncementManager.announcements[index] = action(target)
            AnnouncementManager.save()
            AnnouncementManager.refreshTimers()
        }
    }

    private fun createNavigationPane(gui: ChestGui, pane: PaginatedPane, player: Player): StaticPane {
        val navigation = StaticPane(9, 1)
        navigation.addItem(GuiItem(ItemStack(Material.ARROW).apply {
            itemMeta = itemMeta.apply { displayName(miniMessage.deserialize("前のページ")) }
        }) {
            if (pane.page > 0) { pane.page--; gui.update() }
        }, 0, 0)
        navigation.addItem(GuiItem(ItemStack(Material.ARROW).apply {
            itemMeta = itemMeta.apply { displayName(miniMessage.deserialize("次のページ")) }
        }) {
            if (pane.page < pane.pages - 1) { pane.page++; gui.update() }
        }, 8, 0)
        navigation.addItem(GuiItem(ItemStack(Material.SUNFLOWER).apply {
            itemMeta = itemMeta.apply { displayName(miniMessage.deserialize("<green>リロード</green>")) }
        }) {
            AnnouncementManager.reload()
            player.sendMessage(miniMessage.deserialize("<green>設定をリロードしました。</green>"))
            player.playSound(player.location, Sound.BLOCK_NOTE_BLOCK_CHIME, 1.0f, 1.2f)
            Bukkit.getScheduler().runTask(plugin, Runnable { openMenu(player) })
        }, 4, 0)
        return navigation
    }
}
