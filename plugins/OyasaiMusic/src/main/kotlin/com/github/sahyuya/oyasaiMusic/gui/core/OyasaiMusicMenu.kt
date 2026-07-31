package com.github.sahyuya.oyasaiMusic.gui

import net.kyori.adventure.text.Component
import org.bukkit.Bukkit
import org.bukkit.entity.Player
import org.bukkit.event.inventory.InventoryClickEvent
import org.bukkit.event.inventory.InventoryCloseEvent
import org.bukkit.inventory.Inventory
import org.bukkit.inventory.InventoryHolder

/**
 * OyasaiMusicのGUI画面が実装する共通契約。
 * [MenuManager]はこの型を通じてクリック・再描画・履歴管理を扱う。
 */
interface OyasaiMusicMenu {
    val viewer: Player
    val inventory: Inventory

    /** GUI内のクリックを処理する。アイテム移動は[MenuManager]が既定で無効化する。 */
    fun onClick(event: InventoryClickEvent)

    /** GUIクローズ時の後処理。 */
    fun onClose(event: InventoryCloseEvent) {}

    /** 状態変更後に現在の表示を再構築する。 */
    fun refresh() {}
}

/** InventoryからOyasaiMusicのGUI画面を識別するためのホルダー。 */
class OyasaiMusicMenuHolder(val menu: OyasaiMusicMenu) : InventoryHolder {
    override fun getInventory(): Inventory = menu.inventory
}

/**
 * 54スロット（6×9）の標準GUI基底クラス。
 * 左列ナビゲーション・下段コントローラー・5×8コンテンツ領域を持つ画面で使用する。
 */
abstract class BaseGridMenu(
    final override val viewer: Player,
    title: Component,
) : OyasaiMusicMenu {
    final override val inventory: Inventory = Bukkit.createInventory(OyasaiMusicMenuHolder(this), 54, title)
}
