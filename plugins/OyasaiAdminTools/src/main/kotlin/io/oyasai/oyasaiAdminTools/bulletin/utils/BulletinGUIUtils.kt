package io.oyasai.oyasaiAdminTools.bulletin.utils

import com.github.stefvanschie.inventoryframework.gui.GuiItem
import com.github.stefvanschie.inventoryframework.gui.type.ChestGui
import com.github.stefvanschie.inventoryframework.pane.PaginatedPane
import com.github.stefvanschie.inventoryframework.pane.StaticPane
import com.github.stefvanschie.inventoryframework.pane.util.Slot
import io.oyasai.oyasaiAdminTools.OyasaiAdminTools.Companion.plugin
import io.oyasai.oyasaiAdminTools.utils.MMUtils.mm
import io.oyasai.oyasaiAdminTools.utils.MMUtils.msg
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.Sound
import org.bukkit.entity.Player
import org.bukkit.inventory.ItemStack
import java.text.SimpleDateFormat

object BulletinGUIUtils {
    val dateFormat = SimpleDateFormat("yyyy/MM/dd HH:mm")

    fun createNavigationPane(
        gui: ChestGui,
        pane: PaginatedPane,
        player: Player,
        onReload: () -> Unit,
        onRefresh: () -> Unit
    ): StaticPane {
        val navigation = StaticPane(9, 1)

        navigation.addItem(GuiItem(ItemStack(Material.ARROW).apply {
            itemMeta = itemMeta.apply { displayName("前のページ".mm()) }
        }) {
            if (pane.page > 0) {
                pane.page--
                gui.update()
            }
        }, 0, 0)

        navigation.addItem(GuiItem(ItemStack(Material.ARROW).apply {
            itemMeta = itemMeta.apply { displayName("次のページ".mm()) }
        }) {
            if (pane.page < pane.pages - 1) {
                pane.page++
                gui.update()
            }
        }, 8, 0)

        navigation.addItem(GuiItem(ItemStack(Material.SUNFLOWER).apply {
            itemMeta = itemMeta.apply { displayName("<green>リロード</green>".mm()) }
        }) {
            onReload()
            player.msg("<green>設定をリロードしました。</green>")
            player.playSound(player.location, Sound.BLOCK_NOTE_BLOCK_CHIME, 1.0f, 1.2f)
            Bukkit.getScheduler().runTask(plugin, Runnable { onRefresh() })
        }, 4, 0)

        return navigation
    }

    fun openTargetGroupsEditor(
        player: Player,
        title: String,
        currentGroups: List<String>,
        onUpdate: (List<String>) -> Unit,
        onBack: () -> Unit
    ) {
        val gui = ChestGui(6, "グループ選択: $title")
        gui.setOnTopClick { it.isCancelled = true }
        val pane = PaginatedPane(9, 5)

        val lpApi = try {
            net.luckperms.api.LuckPermsProvider.get()
        } catch (e: Exception) {
            player.msg("<red>LuckPermsが見つかりません。</red>")
            onBack()
            return
        }

        val allGroups = lpApi.groupManager.loadedGroups.sortedBy { it.weight.orElse(0) }.reversed()

        val items = allGroups.map { group ->
            val isSelected = currentGroups.contains(group.name)
            val item = ItemStack(if (isSelected) Material.LIME_BANNER else Material.WHITE_BANNER)
            val meta = item.itemMeta
            meta.displayName("<yellow>${group.displayName ?: group.name}</yellow>".mm())
            meta.lore(listOf(
                "<gray>内部名: ${group.name}</gray>".mm(),
                "<gray>状態: </gray>${if (isSelected) "<green>選択中" else "<red>未選択"}".mm()
            ))
            item.itemMeta = meta

            GuiItem(item) { _ ->
                val newGroups = if (isSelected) {
                    currentGroups.filter { it != group.name }
                } else {
                    currentGroups + group.name
                }
                onUpdate(newGroups)
                openTargetGroupsEditor(player, title, newGroups, onUpdate, onBack)
            }
        }

        pane.populateWithGuiItems(items)
        gui.addPane(Slot.fromXY(0, 0), pane)

        val actions = StaticPane(9, 1)
        actions.addItem(GuiItem(ItemStack(Material.ARROW).apply {
            itemMeta = itemMeta.apply { displayName("前のページ".mm()) }
        }) { if (pane.page > 0) { pane.page--; gui.update() } }, 0, 0)

        actions.addItem(GuiItem(ItemStack(Material.ARROW).apply {
            itemMeta = itemMeta.apply { displayName("次のページ".mm()) }
        }) { if (pane.page < pane.pages - 1) { pane.page++; gui.update() } }, 1, 0)

        actions.addItem(GuiItem(ItemStack(Material.ARROW).apply {
            itemMeta = itemMeta.apply { displayName("保存して戻る".mm()) }
        }) { onBack() }, 8, 0)

        gui.addPane(Slot.fromXY(0, 5), actions)
        gui.show(player)
    }

    fun openConfirmationGUI(player: Player, title: String, message: String, onConfirm: () -> Unit, onCancel: () -> Unit) {
        val gui = ChestGui(3, title)
        gui.setOnTopClick { it.isCancelled = true }
        val pane = StaticPane(9, 3)

        val confirm = ItemStack(Material.LIME_STAINED_GLASS_PANE).apply {
            itemMeta = itemMeta.apply { displayName("<green>確定する: $message</green>".mm()) }
        }
        val cancel = ItemStack(Material.RED_STAINED_GLASS_PANE).apply {
            itemMeta = itemMeta.apply { displayName("<red>キャンセル</red>".mm()) }
        }

        pane.addItem(GuiItem(confirm) { onConfirm() }, 3, 1)
        pane.addItem(GuiItem(cancel) { onCancel() }, 5, 1)

        gui.addPane(Slot.fromXY(0, 0), pane)
        gui.show(player)
    }

    fun createSettingItem(
        player: Player,
        material: Material,
        displayName: String,
        displayCurrentValue: String, // Descriptive text for the UI (e.g. "3個登録済み")
        bookTitle: String,
        bookDescription: String,
        sessionId: String,
        dataValue: String = displayCurrentValue, // Actual data for the book (e.g. "msg1\n<bold>msg2</bold>")
        onUpdate: (String) -> Unit
    ): GuiItem {
        val displayValue = displayCurrentValue.ifBlank { "<gray>なし</gray>" }
        val item = ItemStack(material).apply {
            itemMeta = itemMeta.apply {
                displayName("<yellow>$displayName</yellow>".mm())
                lore(listOf("<gray>現在: </gray><white>$displayValue</white>".mm()))
            }
        }

        return GuiItem(item) {
            io.oyasai.oyasaiAdminTools.utils.BookInputHandler.requestInput(
                player, sessionId, bookTitle, bookDescription, dataValue, onUpdate
            )
        }
    }
}
