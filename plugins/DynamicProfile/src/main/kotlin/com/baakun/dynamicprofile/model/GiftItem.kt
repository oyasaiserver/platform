@file:Suppress("DEPRECATION")

package com.baakun.dynamicprofile.model

import com.baakun.dynamicprofile.util.Tools
import com.baakun.dynamicprofile.util.Tools.addText
import com.baakun.dynamicprofile.util.Tools.color
import com.baakun.dynamicprofile.util.Tools.econ
import java.time.LocalDateTime
import java.time.format.DateTimeFormatter
import org.bukkit.Bukkit
import org.bukkit.Location
import org.bukkit.Material
import org.bukkit.block.Chest
import org.bukkit.block.ShulkerBox
import org.bukkit.enchantments.Enchantment
import org.bukkit.entity.HumanEntity
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.inventory.InventoryCloseEvent
import org.bukkit.event.inventory.InventoryType
import org.bukkit.inventory.Inventory
import org.bukkit.inventory.ItemStack
import org.bukkit.inventory.meta.BlockStateMeta

object GiftItem : Listener {
  private val giftInventory = mutableMapOf<Inventory, Player>()

  fun getGiftGui(toPlayer: Player): Inventory {
    val inventory =
        Bukkit.createInventory(null, InventoryType.SHULKER_BOX, "gift box 送信先: ${toPlayer.name}")
    giftInventory[inventory] = toPlayer
    return inventory
  }

  @EventHandler
  fun getCloseEvent(e: InventoryCloseEvent) {
    if (!giftInventory.contains(e.view.topInventory)) return
    val giftInv = e.view.topInventory
    if (giftInv.isEmpty) return

    val toPlayer = giftInventory[giftInv] ?: return
    if (!toPlayer.isOnline) {
      e.player.sendMessage("&c相手がオフラインです！".color())
      giftInv.contents.forEach {
        if (it == null) return@forEach
        e.player.inventory.addItem(it)
      }
      e.player.sendMessage("&eアイテムを返却しました。".color())
      return
    }

    val econResult = econ?.withdrawPlayer(e.player.name, 100.0) ?: return
    val balance = econ?.getBalance(Bukkit.getOfflinePlayer(e.player.uniqueId)) ?: return
    if (balance < 100.0) e.player.sendMessage("所持金額が${100-balance}足りません")
    if (!econResult.transactionSuccess()) return
    e.player.sendMessage("シュルカー代 ${econ?.format(econResult.amount)} を払いました。")

    val shulkerBoxItem = ItemStack(Material.SHULKER_BOX)
    val bsm = shulkerBoxItem.itemMeta as BlockStateMeta
    val sb = bsm.blockState as ShulkerBox
    sb.inventory.contents = giftInv.contents

    bsm.blockState = sb
    shulkerBoxItem.itemMeta = bsm

    shulkerBoxItem.addText("&6GiftBox", mutableListOf("&7${e.player.name}さんのプレゼント"))

    val drop =
        if (toPlayer.inventory.storageContents.contains(null)) {
          toPlayer.inventory.addItem(shulkerBoxItem)
          false
        } else {
          toPlayer.world.dropItem(toPlayer.location, shulkerBoxItem)
          true
        }
    toPlayer.sendMessage("[ｷﾞﾌﾄ] &a${e.player.name}さん&eから受け取りました！".color())
    if (drop) {
      toPlayer.sendMessage("[ｷﾞﾌﾄ] &cインベントリが満タンのため足元へドロップしました".color())
    } else {
      toPlayer.sendMessage("[ｷﾞﾌﾄ] &eインベントリを確認してください".color())
    }
    recordGifts(e.player, toPlayer, bsm)
  }

  private fun recordGifts(from: HumanEntity, to: Player, shulkerBoxMeta: BlockStateMeta) {
    val world =
        Tools.plugin.config.getString("giftRecordWorld", "lifeworld")?.let { Bukkit.getWorld(it) }
    val locs = Tools.plugin.config.getDoubleList("giftRecordWorldChestXYZ")
    //        val shulkerBoxItem = ItemStack((if (from.gameMode == GameMode.CREATIVE||from.gameMode
    // == GameMode.SPECTATOR) Material.WHITE_SHULKER_BOX else Material.SHULKER_BOX))
    val shulkerBoxItem = ItemStack(Material.SHULKER_BOX)
    val dbLoc = Location(world, locs[0], locs[1], locs[2])
    val db: Chest = dbLoc.block.state as Chest
    shulkerBoxItem.itemMeta = shulkerBoxMeta
    shulkerBoxItem.addUnsafeEnchantment(Enchantment.MENDING, 1)
    shulkerBoxItem.addText(
        "${from.name} → ${to.name}",
        mutableListOf(
            LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy年MM月dd日 HH時mm分ss秒"))),
    )
    db.inventory.addItem(shulkerBoxItem)
  }
}
