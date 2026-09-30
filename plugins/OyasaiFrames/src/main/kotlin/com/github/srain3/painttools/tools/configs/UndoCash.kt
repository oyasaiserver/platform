package com.github.srain3.painttools.tools.configs

import java.awt.Color

data class UndoCash(var undoData: MutableList<MutableList<MapDataCash>?> = mutableListOf()) {
  fun save(dataCash: MutableList<MapDataCash>): Boolean {
    if (undoData.size >= 3) {
      undoData[0] = null
      undoData = undoData.filterNotNull().toMutableList()
    }
    val list = mutableListOf<MapDataCash>()
    for (oldData in dataCash) {
      val list2 = oldData.cash.toMutableMap()
      list.add(MapDataCash(id = oldData.id, cash = list2, time = oldData.time))
    }
    undoData.add(list)
    return true
  }

  fun get(min: Int, id: Int): MutableMap<Int, Color>? {
    return if (undoData.size == 3 && min in 1..3) {
      undoData[3 - min]?.lastOrNull { it.checkID(id) }?.cash
    } else {
      null
    }
  }
}
