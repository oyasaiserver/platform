package io.oyasai.oyasaiAdminTools.announcements

import com.github.stefvanschie.inventoryframework.gui.GuiItem
import com.github.stefvanschie.inventoryframework.gui.type.ChestGui
import com.github.stefvanschie.inventoryframework.pane.PaginatedPane
import com.github.stefvanschie.inventoryframework.pane.StaticPane
import com.github.stefvanschie.inventoryframework.pane.util.Slot
import io.oyasai.oyasaiAdminTools.OyasaiAdminTools.Companion.plugin
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

        pane.addItem(GuiItem(broadcastsItem) { _ ->
            openBroadcastsMenu(player)
        }, 3, 1)

        // Surveys icon
        val surveysItem = ItemStack(Material.PAPER)
        val surveysMeta = surveysItem.itemMeta
        surveysMeta.displayName(miniMessage.deserialize("<gold>アンケート管理</gold>"))
        surveysItem.itemMeta = surveysMeta

        pane.addItem(GuiItem(surveysItem) { _ ->
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
            val lore = mutableListOf(
                miniMessage.deserialize("<gray>内容: </gray>${broadcast.message}"),
                miniMessage.deserialize("<gray>間隔: ${broadcast.interval}s</gray>"),
                miniMessage.deserialize("<gray>状態: </gray>${if (broadcast.enabled) "<green>有効" else "<red>無効"}")
            )
            
            broadcast.expiresAt?.let {
                lore.add(miniMessage.deserialize("<gray>期限: </gray><aqua>${dateFormat.format(Date(it))}</aqua>"))
            }
            if (broadcast.requiredGroups.isNotEmpty()) {
                lore.add(miniMessage.deserialize("<gray>対象: </gray><white>${broadcast.requiredGroups.joinToString(", ")}</white>"))
            }
            
            lore.add(Component.empty())
            lore.add(miniMessage.deserialize("<yellow>左クリック: 有効/無効の切替</yellow>"))
            
            meta.lore(lore)
            item.itemMeta = meta

            GuiItem(item) { _ ->
                val target = AnnouncementManager.broadcasts.find { it.id == broadcast.id } ?: return@GuiItem
                val index = AnnouncementManager.broadcasts.indexOf(target)
                if (index != -1) {
                    val updated = target.copy(enabled = !target.enabled)
                    AnnouncementManager.broadcasts[index] = updated
                    AnnouncementManager.save()
                    AnnouncementManager.refreshTimers()
                    
                    Bukkit.getScheduler().runTask(plugin, Runnable { openBroadcastsMenu(player) })
                }
            }
        }

        pane.populateWithGuiItems(items)
        gui.addPane(Slot.fromXY(0, 0), pane)

        gui.addPane(Slot.fromXY(0, 5), createNavigationPane(gui, pane, player, "broadcasts"))
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
            val lore = mutableListOf(
                miniMessage.deserialize("<gray>タイトル: ${survey.title}</gray>"),
                miniMessage.deserialize("<gray>状態: </gray>${if (survey.enabled) "<green>有効" else "<red>無効"}")
            )
            
            val responseCount = survey.respondedPlayers.size
            lore.add(miniMessage.deserialize("<gray>回答者数: </gray><yellow>${responseCount}名</yellow>"))
            
            survey.expiresAt?.let {
                lore.add(miniMessage.deserialize("<gray>期限: </gray><aqua>${dateFormat.format(Date(it))}</aqua>"))
            }
            
            lore.add(Component.empty())
            lore.add(miniMessage.deserialize("<yellow>左クリック: 有効/無効の切替</yellow>"))
            lore.add(miniMessage.deserialize("<aqua>右クリック: 結果をDiscordに送信</aqua>"))
            
            meta.lore(lore)
            item.itemMeta = meta

            GuiItem(item) { event ->
                val target = AnnouncementManager.surveys.find { it.id == survey.id } ?: return@GuiItem
                val index = AnnouncementManager.surveys.indexOf(target)
                
                if (event.isRightClick) {
                    SurveyManager.exportResultsToDiscord(player, target.id)
                    player.playSound(player.location, Sound.UI_BUTTON_CLICK, 1.0f, 1.0f)
                    return@GuiItem
                }
                
                if (index != -1) {
                    val updated = target.copy(enabled = !target.enabled)
                    AnnouncementManager.surveys[index] = updated
                    AnnouncementManager.save()
                    AnnouncementManager.refreshTimers()
                    
                    Bukkit.getScheduler().runTask(plugin, Runnable { openSurveysMenu(player) })
                }
            }
        }

        pane.populateWithGuiItems(items)
        gui.addPane(Slot.fromXY(0, 0), pane)

        gui.addPane(Slot.fromXY(0, 5), createNavigationPane(gui, pane, player, "surveys"))
        gui.show(player)
    }

    private fun createNavigationPane(gui: ChestGui, pane: PaginatedPane, player: Player, type: String): StaticPane {
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
        
        val reloadItem = ItemStack(Material.SUNFLOWER)
        reloadItem.itemMeta = reloadItem.itemMeta.apply {
            displayName(miniMessage.deserialize("<green>リロード</green>"))
            lore(listOf(miniMessage.deserialize("<gray>設定ファイルを再読み込みします</gray>")))
        }
        navigation.addItem(GuiItem(reloadItem) { _ ->
            AnnouncementManager.reload()
            player.sendMessage(miniMessage.deserialize("<green>設定をリロードしました。</green>"))
            player.playSound(player.location, Sound.BLOCK_NOTE_BLOCK_CHIME, 1.0f, 1.2f)
            Bukkit.getScheduler().runTask(plugin, Runnable {
                if (type == "broadcasts") openBroadcastsMenu(player) else openSurveysMenu(player)
            })
        }, 4, 0)

        return navigation
    }
}
