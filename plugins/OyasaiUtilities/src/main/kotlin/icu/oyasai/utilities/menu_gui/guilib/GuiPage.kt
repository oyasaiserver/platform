package icu.oyasai.utilities.menu_gui.guilib

import kotlin.collections.forEach
import org.bukkit.inventory.ItemStack

abstract class GuiPage(
    val x: Int,
    val y: Int,
    private val itemList: MutableMap<Int, MutableList<ItemStack?>> = mutableMapOf(),
) {
  private var nowPage: Int = 0

  init {
    if (itemList.isEmpty()) {
      newPage()
    }
  }

  private fun newPage(index: Int = itemList.size) {
    val list = mutableListOf<ItemStack?>()
    repeat(x * y) { list.add(null) }
    itemList[index] = list
  }

  fun getNowPage(): Int {
    return nowPage
  }

  fun getMaxPage(): Int {
    return itemList.size
  }

  fun nextPage(): Boolean {
    if (nowPage + 1 < getMaxPage()) {
      nowPage++
      return true
    }
    return false
  }

  fun backPage(): Boolean {
    if (nowPage - 1 >= 0) {
      nowPage--
      return true
    }
    return false
  }

  /**
   * 指定ページに有るアイテムリストをクローンして返す(=編集不可能) 指定ページがない場合nullを返す
   *
   * @return 指定ページのアイテムリスト
   */
  fun getItemList(index: Int): List<ItemStack?>? {
    val list = mutableListOf<ItemStack?>()
    itemList[index]?.forEach { item -> list.add(item?.clone()) } ?: return null
    return list
  }

  /**
   * 全アイテムリストをクローンして返す(=編集不可能)
   *
   * @return 全ページのアイテムリスト
   */
  fun getItemList(): Map<Int, List<ItemStack?>> {
    val map = mutableMapOf<Int, List<ItemStack?>>()
    repeat(getMaxPage()) { map[it] = getItemList(it) ?: return@repeat }
    return map
  }

  /**
   * アイテムを追加する、失敗するとnullを返す
   *
   * @param item 追加するアイテム
   * @param index 指定ページ番号(0~)、nullの場合は先頭の空きに追加or新規ページ作成して追加
   * @param xy 指定ページのSlot番号(0~)、nullの場合は先頭の空きに追加
   * @param replace 既にアイテムがある場合上書きするか
   * @return 追加したアイテム、失敗した場合null
   */
  fun addItem(
      item: ItemStack,
      index: Int? = null,
      xy: Int? = null,
      replace: Boolean = false,
  ): ItemStack? {
    if (index == null) {
      val result = firstEmpty()
      if (result.second == null) {
        newPage(result.first)
        return addItem(item, result.first, 0)
      } else {
        itemList[result.first]!![result.second!!] = item
        return item
      }
    } else {
      if (itemList[index] == null) return null
      if (xy == null) {
        val result = firstEmptyPage(index)
        if (result == null) {
          return null
        } else {
          itemList[index]!![result] = item
          return item
        }
      } else {
        if (itemList[index]!![xy] != null && !replace) return null
        itemList[index]!![xy] = item
        return item
      }
    }
  }

  /**
   * 最初に空いているページ場所を返す、新規ページが必要な場合secondはnullを返す
   *
   * @return Pair(first:ページ番号, second:空いている場所)
   */
  private fun firstEmpty(index: Int = 0): Pair<Int, Int?> {
    val list = itemList[index] ?: return Pair(index, null)
    list.forEachIndexed { i, item ->
      if (item == null) {
        return Pair(index, i)
      }
    }
    return firstEmpty(index + 1)
  }

  /**
   * 指定ページの空きSlotを返す、新規ページが必要な場合nullを返す
   *
   * @return 空いている場所
   */
  private fun firstEmptyPage(index: Int): Int? {
    val list = itemList[index] ?: return null
    list.forEachIndexed { i, item ->
      if (item == null) {
        return i
      }
    }
    return null
  }
}
