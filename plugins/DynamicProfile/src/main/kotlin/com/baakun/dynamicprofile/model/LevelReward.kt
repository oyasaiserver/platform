package com.baakun.dynamicprofile.model

import com.baakun.dynamicprofile.data.Reward
import com.baakun.dynamicprofile.gui.GuiInventory
import com.baakun.dynamicprofile.gui.GuiItem.guiRun
import com.baakun.dynamicprofile.util.Tools.addText
import com.baakun.dynamicprofile.util.Tools.allFlag
import com.baakun.dynamicprofile.util.Tools.color
import com.baakun.dynamicprofile.util.Tools.econ
import com.baakun.dynamicprofile.util.Tools.getStats
import com.baakun.dynamicprofile.util.Tools.plugin
import com.baakun.dynamicprofile.util.Tools.token
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.event.ClickEvent
import org.bukkit.*
import org.bukkit.block.Chest
import org.bukkit.block.ShulkerBox
import org.bukkit.entity.Player
import org.bukkit.inventory.ItemStack
import org.bukkit.inventory.meta.BlockStateMeta

object LevelReward {
  /** リワード受け取り画面を開く */
  fun display(player: Player) {
    val world =
        plugin.config.getString("RewardChestWorld", "lifeworld")?.let { Bukkit.getWorld(it) }
    val XYZList = plugin.config.getDoubleList("RewardChestXYZ")
    val statsData = getStats(player.uniqueId)
    val loc = Location(world, XYZList[0], XYZList[1], XYZList[2])

    if (loc.block.type == Material.CHEST) {
      val inventory = GuiInventory.createInventory(3, "レベル報酬")

      val chest: Chest = loc.block.state as Chest
      val rawRewards = chest.inventory.contents
      val rewards = mutableMapOf<Int, Reward>()

      // リワード設定チェストの中身を探索
      for (rawItem in rawRewards) {
        if (rawItem == null) continue

        val item = rawItem.clone()
        val lv = Integer.parseInt(item.itemMeta.displayName.split(",").get(0))
        val reward = rewards.getOrDefault(lv, Reward(lv, item, mutableListOf(), mutableListOf()))

        if (Calculator.getLevel(player) >= lv && !statsData.getReceiveRewardStatus(lv)) {
          when (item.type) {
            Material.IRON_INGOT -> {
              val text = reward.lores
              text.add(
                  econ?.format(item.itemMeta.displayName.split(",").get(1).toDouble()).toString()
              )

              reward.runnables.add {
                econ?.depositPlayer(
                    Bukkit.getOfflinePlayer(player.uniqueId),
                    item.itemMeta.displayName.split(",").get(1).toDouble(),
                )
              }
            }
            Material.GOLD_INGOT -> {
              val text = reward.lores
              text.add("Pt." + item.itemMeta.displayName.split(",").get(1).toInt().toString())

              reward.runnables.add {
                token?.addTokens(player, item.itemMeta.displayName.split(",").get(1).toLong())
              }
            }
            Material.COAL -> {
              val text = reward.lores
              text.add("Mile." + item.itemMeta.displayName.split(",").get(1).toInt().toString())

              reward.runnables.add {
                Bukkit.getServer()
                    .dispatchCommand(
                        Bukkit.getConsoleSender(),
                        "milepoint add ${item.itemMeta.displayName.split(",").get(1)}",
                    )
              }
            }
            Material.SHULKER_BOX -> {
              val text = reward.lores
              val meta = item.itemMeta
              val box: ShulkerBox = (meta as BlockStateMeta).blockState as ShulkerBox

              for (it in box.inventory.contents) {
                if (it != null) {
                  text.add("${it.itemMeta.displayName()}×${it.amount}")
                }
              }
              reward.runnables.add {
                item.addText("&a[Lv.${lv}] &fレベル報酬", mutableListOf()).allFlag()
                player.inventory.addItem(item)
              }
            }
            else -> {
              val text = reward.lores
              text.add("${item.type.name}×${item.amount}")
              reward.runnables.add {
                item.addText("&a[Lv.${lv}] &fレベル報酬", mutableListOf()).allFlag()
                player.inventory.addItem(item)
              }
            }
          }
          rewards.put(lv, reward)
        }
      }
      for (reward in rewards.values) {
        val displayItem = ItemStack(Material.CHEST)
        displayItem
            .addText("&a[Lv.${reward.lv}] &fレベル報酬", reward.lores)
            .guiRun {
              if (player.gameMode == GameMode.CREATIVE || player.gameMode == GameMode.SPECTATOR) {
                player.playSound(player.eyeLocation, Sound.ENTITY_ENDERMAN_TELEPORT, 0.5F, 1F)
                player.closeInventory()
                val message =
                    Component.text("クリエイティブ状態だと受け取れません。（クリックしてサバイバルに変更）")
                        .clickEvent(ClickEvent.runCommand("/gamemode survival ${player.name}"))
                        .hoverEvent(Component.text("クリックしてサバイバルモードに変更"))
                player.sendMessage(message)
              } else {
                player.playSound(player.eyeLocation, Sound.ENTITY_EXPERIENCE_ORB_PICKUP, 0.5F, 1F)
                player.sendMessage(Component.text("&6[Lv.${reward.lv}] &fのレベル報酬を受け取りました！".color()))
                statsData.addReceiveRewardStatus(reward.lv)
                for (run in reward.runnables) {
                  run.run()
                }
                display(player) // 開きなおす(表示の順番を詰める)
              }
            }
            .allFlag()
        inventory.addItem(displayItem)
      }
      player.openInventory(inventory)
    }
  }
}
