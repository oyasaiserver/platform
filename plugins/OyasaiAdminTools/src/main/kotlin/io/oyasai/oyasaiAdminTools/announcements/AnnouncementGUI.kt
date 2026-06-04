package io.oyasai.oyasaiAdminTools.announcements

import com.github.stefvanschie.inventoryframework.gui.GuiItem
import com.github.stefvanschie.inventoryframework.gui.type.ChestGui
import com.github.stefvanschie.inventoryframework.pane.PaginatedPane
import com.github.stefvanschie.inventoryframework.pane.StaticPane
import com.github.stefvanschie.inventoryframework.pane.util.Slot
import net.kyori.adventure.text.minimessage.MiniMessage
import org.bukkit.Material
import org.bukkit.entity.Player
import org.bukkit.inventory.ItemStack

object AnnouncementGUI {
    private val miniMessage = MiniMessage.miniMessage()

    fun openMainMenu(player: Player) {
        val gui = ChestGui(3, "放送室")
        gui.setOnTopClick { it.isCancelled = true }
        gui.setOnTopDrag { it.isCancelled = true }
        val pane = StaticPane(9, 3)

        // Broadcasts icon
        val broadcastsItem = ItemStack(Material.HORN_CORAL)
        val broadcastsMeta = broadcastsItem.itemMeta
        broadcastsMeta.displayName(miniMessage.deserialize("<gold>お知らせ管理</gold>"))
        broadcastsItem.itemMeta = broadcastsMeta

        pane.addItem(GuiItem(broadcastsItem) { event ->
            openBroadcastsMenu(player)
        }, 3, 1)

        // Surveys icon
        val surveysItem = ItemStack(Material.PAPER)
        val surveysMeta = surveysItem.itemMeta
        surveysMeta.displayName(miniMessage.deserialize("<gold>アンケート管理</gold>"))
        surveysItem.itemMeta = surveysMeta

        pane.addItem(GuiItem(surveysItem) { event ->
            openSurveysMenu(player)
        }, 5, 1)

        gui.addPane(Slot.fromXY(0, 0), pane)
        gui.show(player)
    }

    private fun openBroadcastsMenu(player: Player) {
        val gui = ChestGui(6, "お知らせ一覧")
        gui.setOnTopClick { it.isCancelled = true }
        gui.setOnTopDrag { it.isCancelled = true }
        val pane = PaginatedPane(9, 5)

        val items = AnnouncementManager.broadcasts.map { broadcast ->
            val item = ItemStack(if (broadcast.enabled) Material.LIME_STAINED_GLASS_PANE else Material.RED_STAINED_GLASS_PANE)
            val meta = item.itemMeta
            meta.displayName(miniMessage.deserialize("<yellow>ID: ${broadcast.id}</yellow>"))
            meta.lore(listOf(
                miniMessage.deserialize("<gray>内容: </gray>${broadcast.message}"),
                miniMessage.deserialize("<gray>間隔: ${broadcast.interval}s</gray>"),
                miniMessage.deserialize("<gray>状態: </gray>${if (broadcast.enabled) "<green>有効" else "<red>無効"}")
            ))
            item.itemMeta = meta

            GuiItem(item) { _ ->
                val index = AnnouncementManager.broadcasts.indexOf(broadcast)
                if (index != -1) {
                    val updated = broadcast.copy(enabled = !broadcast.enabled)
                    AnnouncementManager.broadcasts[index] = updated
                    AnnouncementManager.save()
                    AnnouncementManager.reload()
                    openBroadcastsMenu(player)
                }
            }
        }

        pane.populateWithGuiItems(items)
        gui.addPane(Slot.fromXY(0, 0), pane)

        gui.addPane(Slot.fromXY(0, 5), createNavigationPane(gui, pane))
        gui.show(player)
    }

    private fun openSurveysMenu(player: Player) {
        val gui = ChestGui(6, "アンケート一覧")
        gui.setOnTopClick { it.isCancelled = true }
        gui.setOnTopDrag { it.isCancelled = true }
        val pane = PaginatedPane(9, 5)

        val items = AnnouncementManager.surveys.map { survey ->
            val item = ItemStack(if (survey.enabled) Material.BOOK else Material.ENCHANTED_BOOK)
            val meta = item.itemMeta
            meta.displayName(miniMessage.deserialize("<yellow>ID: ${survey.id}</yellow>"))
            meta.lore(listOf(
                miniMessage.deserialize("<gray>タイトル: ${survey.title}</gray>"),
                miniMessage.deserialize("<gray>状態: </gray>${if (survey.enabled) "<green>有効" else "<red>無効"}")
            ))
            item.itemMeta = meta

            GuiItem(item) { _ ->
                val index = AnnouncementManager.surveys.indexOf(survey)
                if (index != -1) {
                    val updated = survey.copy(enabled = !survey.enabled)
                    AnnouncementManager.surveys[index] = updated
                    AnnouncementManager.save()
                    AnnouncementManager.reload()
                    openSurveysMenu(player)
                }
            }
        }

        pane.populateWithGuiItems(items)
        gui.addPane(Slot.fromXY(0, 0), pane)

        gui.addPane(Slot.fromXY(0, 5), createNavigationPane(gui, pane))
        gui.show(player)
    }

    private fun createNavigationPane(gui: ChestGui, pane: PaginatedPane): StaticPane {
        val navigation = StaticPane(9, 1)
        navigation.addItem(GuiItem(ItemStack(Material.ARROW).apply {
            itemMeta = itemMeta.apply { displayName(miniMessage.deserialize("前のページ")) }
        }) {
            if (pane.page > 0) {
                pane.page--
                gui.update()
            }
        }, 0, 0)

        navigation.addItem(GuiItem(ItemStack(Material.ARROW).apply {
            itemMeta = itemMeta.apply { displayName(miniMessage.deserialize("次のページ")) }
        }) {
            if (pane.page < pane.pages - 1) {
                pane.page++
                gui.update()
            }
        }, 8, 0)
        return navigation
    }
}
