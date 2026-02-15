package me.ankokunsan.entityPose

import org.bukkit.Material
import org.bukkit.Sound
import org.bukkit.entity.Player
import org.bukkit.scheduler.BukkitRunnable

object AirBlock {
  fun airblockplace(player: Player) {
    val block = player.location.subtract(0.0, 1.0, 0.0).block

    if (block.type != Material.AIR) return

    val nearby = block.world.getNearbyEntities(block.location.add(0.5, 0.5, 0.5), 0.5, 0.5, 0.5)
    if (nearby.any { it != player }) return

    // 足場を設置
    block.setType(Material.GLASS, false)
    val centerLoc = block.location.add(0.5, 0.0, 0.5)
    centerLoc.world?.playSound(centerLoc, Sound.ENTITY_CHICKEN_EGG, 1.0f, 2.0f)

    object : BukkitRunnable() {
          override fun run() {
            // 1. プレイヤーとブロックの水平距離を計算
            // (ブロックの中心点とプレイヤーの現在地の平面距離)
            val pLoc = player.location
            val distance = pLoc.distance(centerLoc.clone().apply { y = pLoc.y })
            // 2. 判定：1.1マス（ブロックの端）より外に出たら消去してタスク終了
            if (distance >= 1.1) {
              removeBlock()
              player.sendMessage("§6[EntityPose] §c足場から離れたため消去しました")
              centerLoc.world?.playSound(centerLoc, Sound.BLOCK_GLASS_BREAK, 2.0f, 1.0f)
              this.cancel()
              return
            }
          }

          private fun removeBlock() {
            if (block.type == Material.GLASS) {
              block.type = Material.AIR
              // サバイバルでの表示バグ（透明な壁が残る現象）を防止
              player.sendBlockChange(block.location, Material.AIR.createBlockData())
            }
            cancel()
          }
        }
        .runTaskTimer(EntityPose.INSTANCE, 0L, 20L) // 0Lにすることで、設置直後から判定を開始
  }
}
