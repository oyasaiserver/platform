package me.ankokunsan.entityPose

import org.bukkit.Material
import org.bukkit.Sound
import org.bukkit.entity.Entity
import org.bukkit.entity.Player
import org.bukkit.metadata.FixedMetadataValue
import org.bukkit.scheduler.BukkitRunnable

object AirBlock {
    private val glowingTarget = mutableMapOf<java.util.UUID, Entity>()
    private val enabledPlayers = mutableSetOf<java.util.UUID>()

    fun setStatus(player: Player, status: Boolean) {
        if (status) {
            enabledPlayers.add(player.uniqueId)
        } else {
            enabledPlayers.remove(player.uniqueId)
        }
    }

    fun isEnabled(player: Player): Boolean = enabledPlayers.contains(player.uniqueId)

    fun airblockplace(player: Player) {
        if (!isEnabled(player)) return
        val block = player.location.subtract(0.0,1.0,0.0).block

        if (block.type != Material.AIR) return

        val nearby = block.world.getNearbyEntities(block.location.add(0.5, 0.5, 0.5), 0.5, 0.5, 0.5)
        if (nearby.any { it != player }) return

        // 足場を設置
        block.setType(Material.GLASS, false)
        block.setMetadata("EntityHojo", FixedMetadataValue(EntityPose.INSTANCE,true))
        val centerLoc = block.location.add(0.5, 0.0, 0.5)
        centerLoc.world?.playSound(
            centerLoc, Sound.ENTITY_CHICKEN_EGG, 1.0f, 2.0f)

        object : BukkitRunnable() {
            override fun run() {
                // 1. プレイヤーとブロックの水平距離を計算
                // (ブロックの中心点とプレイヤーの現在地の平面距離)
                val pLoc = player.location
                val distance = pLoc.distance(centerLoc.clone().apply { y = pLoc.y })

                if (distance >= 1.1 || !player.isOnline) {
                    removeBlock()
                    player.sendMessage("§6[EntityPose] §c足場から離れたため消去しました")
                    centerLoc.world?.playSound(centerLoc,Sound.BLOCK_GLASS_BREAK,2.0f,1.0f)
                    this.cancel()
                    return
                }
            }

            private fun removeBlock() {
                if (block.hasMetadata("EntityHojo")) {
                    block.type = Material.AIR
                    block.removeMetadata("EntityHojo", EntityPose.INSTANCE)
                    player.sendBlockChange(block.location, Material.AIR.createBlockData())
                }
                cancel()
            }
        }.runTaskTimer(EntityPose.INSTANCE, 0L, 20L)
    }

    fun startglowing(player: Player) {
        object : BukkitRunnable() {
            override fun run() {
                val hand = player.inventory.itemInMainHand

                if (!isEntiStick(hand)||  !player.isOnline) {
                glowingTarget[player.uniqueId]?.isGlowing = false
                    this.cancel()
                    return
                }
                val result = player.world.rayTraceEntities(player.eyeLocation, player.location.direction, 7.0, 0.6) { it != player }
                val target = result?.hitEntity ?: return

                val lastTarget = glowingTarget[player.uniqueId]
                if (target != lastTarget) {
                    lastTarget?.isGlowing = false

                    target.isGlowing = true
                    glowingTarget[player.uniqueId] = target
                }
            }
        }.runTaskTimer(EntityPose.INSTANCE, 0L, 2L) // 0Lにすることで、設置直後から判定を開始
    }
}