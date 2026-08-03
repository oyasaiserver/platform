package com.github.sahyuya.oyasaiMusic.gui

import com.github.sahyuya.oyasaiMusic.OyasaiMusic
import com.github.sahyuya.oyasaiMusic.util.HeadTextureUtil
import java.util.UUID
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.format.NamedTextColor
import org.bukkit.Bukkit
import org.bukkit.entity.Player
import org.bukkit.event.inventory.InventoryClickEvent

/**
 * プレイヤー頭一覧からの選択画面（参照画像8枚目「オンラインプレイヤー一覧」）。 検索メニューの「③オンライン作者一覧」「④フォロー中作者一覧」、および
 * 「②作者検索」の候補複数時の結果表示で共通利用する。
 *
 * UI/UX設計書1章「モブヘッドのプレースホルダーは実際のプレイヤースキンヘッドに置換」に対応するため [HeadTextureUtil.resolveAsync]
 * でスキンを非同期解決してから差し替える。
 */
class PlayerHeadListMenu(
    private val plugin: OyasaiMusic,
    private val menuManager: MenuManager,
    viewer: Player,
    title: String,
    private val uuids: List<UUID>,
    private val onSelect: (UUID, String) -> OyasaiMusicMenu,
) : BaseGridMenu(viewer, Component.text(title)) {

  companion object {
    const val PAGE_SIZE = 40
    val SLOTS: List<Int> = (0..4).flatMap { row -> (1..8).map { col -> row * 9 + col } }
  }

  private var page = 0

  init {
    render()
  }

  override fun refresh() = render()

  private fun currentPageUuids(): List<UUID> = uuids.drop(page * PAGE_SIZE).take(PAGE_SIZE)

  private fun render() {
    val state = plugin.controllerStateService.stateFor(viewer.uniqueId)
    GuiChrome.render(
        inventory,
        null,
        state,
        sortLabel = "-",
        viewer = viewer,
        plugin = plugin,
        actionModeCategory = null,
    )

    currentPageUuids().forEachIndexed { index, uuid ->
      val name = Bukkit.getOfflinePlayer(uuid).name ?: uuid.toString().take(8)
      HeadTextureUtil.resolveAsync(plugin, uuid, name) { item ->
        if (currentPageUuids().getOrNull(index) != uuid) return@resolveAsync
        item.editMeta { meta -> meta.displayName(Component.text(name, NamedTextColor.WHITE)) }
        inventory.setItem(SLOTS[index], item)
      }
    }
    if (page == 0) inventory.setItem(ControllerSlots.PAGE_PREV, GuiChrome.backControllerButton())
  }

  override fun onClick(event: InventoryClickEvent) {
    val slot = event.rawSlot
    if (NavTabRouter.handle(slot, null, null, plugin, menuManager, viewer)) return
    if (plugin.playbackController.handleControllerClick(slot, viewer)) return
    when (slot) {
      ControllerSlots.PAGE_PREV ->
          if (page > 0) {
            page--
            render()
          } else menuManager.openPrevious(viewer)
      ControllerSlots.PAGE_NEXT ->
          if (uuids.size > (page + 1) * PAGE_SIZE) {
            page++
            render()
          }
      else -> {
        val index = SLOTS.indexOf(slot)
        if (index == -1) return
        val uuid = currentPageUuids().getOrNull(index) ?: return
        val name = Bukkit.getOfflinePlayer(uuid).name ?: return
        menuManager.open(viewer, onSelect(uuid, name))
      }
    }
  }
}
