package com.github.sahyuya.oyasaiMusic.item

import com.github.sahyuya.oyasaiMusic.OyasaiMusic
import com.github.sahyuya.oyasaiMusic.gui.MainMenuScreen
import com.github.sahyuya.oyasaiMusic.gui.MenuManager
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.format.NamedTextColor
import net.kyori.adventure.text.format.TextDecoration
import org.bukkit.Material
import org.bukkit.NamespacedKey
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.block.Action
import org.bukkit.event.player.PlayerInteractEvent
import org.bukkit.inventory.ItemStack
import org.bukkit.persistence.PersistentDataType

/**
 * UI/UX設計書 9章「物理アイテム連携」: resin_brick(樹脂レンガ)に「音楽プレイヤー」と命名した専用アイテム。
 * 右クリックで前回開いていたGUIを復元、Shift+右クリックでメインメニューを開く。
 */
class PhysicalMusicPlayerItem(
    private val plugin: OyasaiMusic,
    private val menuManager: MenuManager,
) : Listener {

  companion object {
    val KEY: NamespacedKey =
        NamespacedKey.fromString("oyasaimusic:music_player_item")
            ?: throw IllegalStateException("NamespacedKeyの生成に失敗しました")

    fun create(): ItemStack {
      val item = ItemStack(Material.RESIN_BRICK)
      item.editMeta { meta ->
        meta.displayName(
            Component.text("音楽プレイヤー", NamedTextColor.LIGHT_PURPLE)
                .decoration(TextDecoration.ITALIC, false),
        )
        meta.lore(
            listOf(
                Component.text("右クリック: 前回のGUIを開く", NamedTextColor.GRAY)
                    .decoration(TextDecoration.ITALIC, false),
                Component.text("Shift+右クリック: メインメニュー", NamedTextColor.GRAY)
                    .decoration(TextDecoration.ITALIC, false),
            ),
        )
        meta.persistentDataContainer.set(KEY, PersistentDataType.BYTE, 1)
      }
      return item
    }

    fun isMusicPlayerItem(item: ItemStack?): Boolean {
      if (item == null || item.type != Material.RESIN_BRICK) return false
      val meta = item.itemMeta ?: return false
      return meta.persistentDataContainer.has(KEY, PersistentDataType.BYTE)
    }
  }

  @EventHandler
  fun onInteract(event: PlayerInteractEvent) {
    if (event.action != Action.RIGHT_CLICK_AIR && event.action != Action.RIGHT_CLICK_BLOCK) return
    val item = event.item ?: return
    if (!isMusicPlayerItem(item)) return
    event.isCancelled = true

    val player = event.player
    if (player.isSneaking) {
      openMainMenu(player)
      return
    }
    val last = menuManager.lastKnownMenu(player.uniqueId)
    if (last != null) {
      menuManager.open(player, last, rememberAsPrevious = false)
    } else {
      openMainMenu(player)
    }
  }

  private fun openMainMenu(player: Player) {
    menuManager.open(
        player,
        MainMenuScreen(plugin, menuManager, player),
        rememberAsPrevious = false,
    )
  }
}
