package io.oyasai.signshop

import org.bukkit.Material
import org.bukkit.inventory.Inventory
import org.bukkit.inventory.ItemStack

internal class StockPlan private constructor(private val changes: List<Change>) {
  fun apply(): StockResult {
    val touched = mutableListOf<Change>()
    return try {
      if (changes.any { !same(it.inventory.getItem(it.slot), it.before) })
          return StockResult.RESTORED
      for (change in changes) {
        touched.add(change)
        change.inventory.setItem(change.slot, change.after?.clone())
        require(same(change.inventory.getItem(change.slot), change.after))
      }
      StockResult.OK
    } catch (_: Exception) {
      for (change in touched.asReversed()) {
        try {
          if (same(change.inventory.getItem(change.slot), change.before)) continue
          if (!same(change.inventory.getItem(change.slot), change.after)) return StockResult.UNKNOWN
          change.inventory.setItem(change.slot, change.before?.clone())
          if (!same(change.inventory.getItem(change.slot), change.before))
              return StockResult.UNKNOWN
        } catch (_: Exception) {
          return StockResult.UNKNOWN
        }
      }
      StockResult.RESTORED
    }
  }

  private data class Change(
      val inventory: Inventory,
      val slot: Int,
      val before: ItemStack?,
      val after: ItemStack?,
  )

  companion object {
    fun plan(
        source: Inventory?,
        destination: Inventory?,
        items: List<ItemStack>,
        playerSource: Boolean,
        playerDestination: Boolean,
    ): StockPlan? {
      if (items.isEmpty() || items.any { it.type == Material.AIR || it.amount <= 0 }) return null
      val current = linkedMapOf<Pair<Inventory, Int>, ItemStack?>()
      fun slots(inventory: Inventory, player: Boolean) =
          0 until (if (player) minOf(36, inventory.size) else inventory.size)
      fun get(inventory: Inventory, slot: Int): ItemStack? {
        val key = inventory to slot
        if (!current.containsKey(key)) current[key] = inventory.getItem(slot)?.clone()
        return current[key]
      }
      if (source != null)
          for (item in items) {
            var remaining = item.amount
            for (slot in slots(source, playerSource)) {
              val stack = get(source, slot) ?: continue
              if (!stack.isSimilar(item)) continue
              val count = minOf(remaining, stack.amount)
              current[source to slot] =
                  if (stack.amount == count) null else stack.clone().apply { amount -= count }
              remaining -= count
              if (remaining == 0) break
            }
            if (remaining != 0) return null
          }
      if (destination != null)
          for (item in items) {
            var remaining = item.amount
            for (slot in slots(destination, playerDestination)) {
              val stack = get(destination, slot)
              if (stack != null && !stack.isSimilar(item)) continue
              val limit = minOf(destination.maxStackSize, item.maxStackSize)
              val capacity = limit - (stack?.amount ?: 0)
              if (capacity <= 0) continue
              val count = minOf(remaining, capacity)
              current[destination to slot] =
                  (stack ?: item.clone().apply { amount = 0 }).apply { amount += count }
              remaining -= count
              if (remaining == 0) break
            }
            if (remaining != 0) return null
          }
      val changes =
          current.mapNotNull { (where, after) ->
            val before = where.first.getItem(where.second)?.clone()
            if (same(before, after)) null
            else Change(where.first, where.second, before, after?.clone())
          }
      return StockPlan(changes)
    }

    private fun same(a: ItemStack?, b: ItemStack?): Boolean {
      val left = if (a?.type == Material.AIR) null else a
      val right = if (b?.type == Material.AIR) null else b
      return left == right
    }
  }
}
