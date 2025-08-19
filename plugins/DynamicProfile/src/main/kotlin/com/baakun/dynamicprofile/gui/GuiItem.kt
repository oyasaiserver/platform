package com.baakun.dynamicprofile.gui

import com.baakun.dynamicprofile.Tools
import org.bukkit.Material
import org.bukkit.NamespacedKey
import org.bukkit.event.inventory.InventoryClickEvent
import org.bukkit.event.inventory.InventoryPickupItemEvent
import org.bukkit.inventory.ItemStack
import org.bukkit.persistence.PersistentDataType

/**
 * GuiInventoryと連携して使う、クリックするとアクションが起こるアイテム用
 */
object GuiItem {
    //Long型の最小値～最大値のrange、GuiItemのランダムID用
    private val rangeLong = (Long.MIN_VALUE..Long.MAX_VALUE)
    //GuiItemのデータのKey用
    private val key by lazy { NamespacedKey(Tools.plugin, "GuiItemID") }
    private val keyright by lazy { NamespacedKey(Tools.plugin, "GuiItemIDright") }
    private val keyshiftright by lazy { NamespacedKey(Tools.plugin, "GuiItemIDshiftright") }
    //GuiItemID別のRunnable保存用
    private val cache = mutableMapOf<Long, Runnable>()
    //GuiItemID別のRunnable保存用(右クリックのみ)
    private val cacheRight = mutableMapOf<Long, Runnable>()
    //GuiItemID別のRunnable保存用(Shift+右クリックのみ)
    private val cacheShiftRight = mutableMapOf<Long, Runnable>()

    /**
     * Gui用の処理を登録
     * @param run ここに処理したい内容
     */
    fun ItemStack.guiRun(run: Runnable): ItemStack {
        val meta = this.itemMeta
        val idLong = rangeLong.random()
        meta.persistentDataContainer.set(key, PersistentDataType.LONG, idLong)
        this.itemMeta = meta
        cache[idLong] = run
        return this
    }

    fun ItemStack.guiRunRight(run: Runnable): ItemStack {
        val meta = this.itemMeta
        val idLong = rangeLong.random()
        meta.persistentDataContainer.set(keyright, PersistentDataType.LONG, idLong)
        this.itemMeta = meta
        cacheRight[idLong] = run
        return this
    }

    fun ItemStack.guiRunShiftRight(run: Runnable): ItemStack {
        val meta = this.itemMeta
        val idLong = rangeLong.random()
        meta.persistentDataContainer.set(keyshiftright, PersistentDataType.LONG, idLong)
        this.itemMeta = meta
        cacheShiftRight[idLong] = run
        return this
    }

    /**
     * ClickEventからクリックされたアイテムを取得してrunが存在すれば実行する
     */
    fun clickItemToRun(e: InventoryClickEvent) {
        val clickItem = e.currentItem ?: return
        val idLong = clickItem.itemMeta.persistentDataContainer.get(key, PersistentDataType.LONG)
        val idLongright = clickItem.itemMeta.persistentDataContainer.get(keyright, PersistentDataType.LONG)
        val idLongshiftright = clickItem.itemMeta.persistentDataContainer.get(keyshiftright, PersistentDataType.LONG)
        val run = if(e.isRightClick && e.isShiftClick){
            cacheShiftRight[idLongshiftright] ?: cacheRight[idLongright] ?: cache[idLong]
        }else if(e.isRightClick){
            cacheRight[idLongright] ?: cache[idLong]
        }else{
            cache[idLong]
        }
        run?.run()
    }

}