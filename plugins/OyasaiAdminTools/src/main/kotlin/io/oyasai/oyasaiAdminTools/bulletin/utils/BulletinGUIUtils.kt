package io.oyasai.oyasaiAdminTools.bulletin.utils

import com.github.stefvanschie.inventoryframework.gui.GuiItem
import com.github.stefvanschie.inventoryframework.gui.type.ChestGui
import com.github.stefvanschie.inventoryframework.pane.PaginatedPane
import com.github.stefvanschie.inventoryframework.pane.StaticPane
import com.github.stefvanschie.inventoryframework.pane.util.Slot
import io.oyasai.oyasaiAdminTools.OyasaiAdminTools.Companion.plugin
import net.kyori.adventure.text.minimessage.MiniMessage
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.Sound
import org.bukkit.entity.Player
import org.bukkit.inventory.ItemStack

object BulletinGUIUtils {
  private val miniMessage = MiniMessage.miniMessage()

  fun createNavigationPane(
    gui: ChestGui,
    pane: PaginatedPane,
    player: Player,
    onReload: () -> Unit,
    onRefresh: () -> Unit
  ): StaticPane {
    val navigation = StaticPane(9, 1)

    // Previous Page
    navigation.addItem(GuiItem(ItemStack(Material.ARROW).apply {
      itemMeta = itemMeta.apply { displayName(miniMessage.deserialize("前のページ")) }
    }) {
      if (pane.page > 0) {
        pane.page--
        gui.update()
      }
    }, 0, 0)

    // Next Page
    navigation.addItem(GuiItem(ItemStack(Material.ARROW).apply {
      itemMeta = itemMeta.apply { displayName(miniMessage.deserialize("次のページ")) }
    }) {
      if (pane.page < pane.pages - 1) {
        pane.page++
        gui.update()
      }
    }, 8, 0)

    // Reload
    navigation.addItem(GuiItem(ItemStack(Material.SUNFLOWER).apply {
      itemMeta = itemMeta.apply { displayName(miniMessage.deserialize("<green>リロード</green>")) }
    }) {
      onReload()
      player.sendMessage(miniMessage.deserialize("<green>設定をリロードしました。</green>"))
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
      player.sendMessage(miniMessage.deserialize("<red>LuckPermsが見つかりません。</red>"))
      onBack()
      return
    }

    val allGroups = lpApi.groupManager.loadedGroups.sortedBy { it.weight.orElse(0) }.reversed()

    val items = allGroups.map { group ->
      val isSelected = currentGroups.contains(group.name)
      val item = ItemStack(if (isSelected) Material.LIME_BANNER else Material.WHITE_BANNER)
      val meta = item.itemMeta
      meta.displayName(miniMessage.deserialize("<yellow>${group.displayName ?: group.name}</yellow>"))
      meta.lore(
        listOf(
          miniMessage.deserialize("<gray>内部名: ${group.name}</gray>"),
          miniMessage.deserialize("<gray>状態: </gray>${if (isSelected) "<green>選択中" else "<red>未選択"}")
        )
      )
      item.itemMeta = meta

      GuiItem(item) { _ ->
        val newGroups = if (isSelected) {
          currentGroups.filter { it != group.name }
        } else {
          currentGroups + group.name
        }
        onUpdate(newGroups)
        // Recursive call to update the UI with new state
        openTargetGroupsEditor(player, title, newGroups, onUpdate, onBack)
      }
    }

    pane.populateWithGuiItems(items)
    gui.addPane(Slot.fromXY(0, 0), pane)

    val actions = StaticPane(9, 1)

    // Navigation for groups list
    actions.addItem(GuiItem(ItemStack(Material.ARROW).apply {
      itemMeta = itemMeta.apply { displayName(miniMessage.deserialize("前のページ")) }
    }) {
      if (pane.page > 0) {
        pane.page--; gui.update()
      }
    }, 0, 0)

    actions.addItem(GuiItem(ItemStack(Material.ARROW).apply {
      itemMeta = itemMeta.apply { displayName(miniMessage.deserialize("次のページ")) }
    }) {
      if (pane.page < pane.pages - 1) {
        pane.page++; gui.update()
      }
    }, 1, 0)

    // Back Button
    actions.addItem(GuiItem(ItemStack(Material.ARROW).apply {
      itemMeta = itemMeta.apply { displayName(miniMessage.deserialize("保存して戻る")) }
    }) {
      onBack()
    }, 8, 0)

  }
  fun createSettingItem(
    player: Player,
    material: Material,
    displayName: String,
    currentValue: String,
    bookTitle: String,
    bookDescription: String,
    sessionId: String,
    onUpdate: (String) -> Unit
  ): GuiItem {
    val item = ItemStack(material).apply {
      itemMeta = itemMeta.apply {
        displayName(miniMessage.deserialize("<yellow>$displayName</yellow>"))
        lore(listOf(miniMessage.deserialize("<gray>現在: $currentValue</gray>")))
      }
    }

    return GuiItem(item) {
      io.oyasai.oyasaiAdminTools.utils.BookInputHandler.requestInput(
        player,
        sessionId,
        bookTitle,
        bookDescription,
        currentValue,
        onUpdate
      )
    }
  }
}
