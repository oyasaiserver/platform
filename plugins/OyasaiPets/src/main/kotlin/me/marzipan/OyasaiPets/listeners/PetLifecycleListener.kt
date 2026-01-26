package me.marzipan.OyasaiPets.listeners

import me.marzipan.OyasaiPets.*
import me.marzipan.OyasaiPets.domain.PetCategory
import me.marzipan.OyasaiPets.domain.PetRegistry
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.format.NamedTextColor.*
import net.kyori.adventure.text.serializer.plain.PlainTextComponentSerializer
import org.bukkit.Bukkit
import org.bukkit.entity.LivingEntity
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.entity.EntityDeathEvent
import org.bukkit.event.entity.EntityDismountEvent
import org.bukkit.event.player.PlayerQuitEvent
import org.bukkit.plugin.java.JavaPlugin
import org.bukkit.scheduler.BukkitRunnable
import java.util.UUID
import java.util.logging.Logger

/**
 * ペットライフサイクル関連のイベントリスナー
 * - ペットの死亡
 * - プレイヤー切断時のペット位置記録
 * - ペット降車時の処理
 */
class PetLifecycleListener(
    private val plugin: JavaPlugin,
    private val logger: Logger,
    private val onPlayerQuitCallback: (Player) -> Unit
) : Listener {

    /**
     * ペット死亡時の処理
     */
    @EventHandler
    fun onPetDeath(event: EntityDeathEvent) {
        val entity = event.entity
        val petId = entity.petId ?: return
        val ownerId = entity.ownerId ?: return

        val ownerUuid = runCatching { UUID.fromString(ownerId) }.getOrNull() ?: return

        // 死亡データを記録
        PetDataManager.recordDeath(ownerUuid, entity)

        // オーナーにメッセージを送信
        val owner = Bukkit.getPlayer(ownerUuid)
        if (owner != null) {
            val petName = entity.customName()?.let {
                PlainTextComponentSerializer.plainText().serialize(it)
            } ?: entity.type.name
            owner.sendMessage(Component.text("あなたのペット「$petName」が死亡しました...", RED))
            owner.sendMessage(Component.text("/bigwolf dead で死亡したペットを確認できます。", GRAY))
            owner.sendMessage(
                Component.text("/bigwolf revive <番号> で ${BigWolfConfig.reviveCost}pt で復活できます。", GRAY)
            )
        }

        logger.info("Pet died: Owner=$ownerId, PetId=$petId")
    }

    /**
     * プレイヤー切断時の処理
     */
    @EventHandler
    fun onPlayerQuit(event: PlayerQuitEvent) {
        val player = event.player

        // コールバックでプラグイン側のクリーンアップを実行
        onPlayerQuitCallback(player)

        // ペットの位置を記録（見失い対策）
        val vehicle = player.vehicle as? LivingEntity
        if (vehicle != null) {
            val petId = vehicle.petId
            val ownerId = vehicle.ownerId
            if (petId != null && ownerId != null) {
                val ownerUuid = runCatching { UUID.fromString(ownerId) }.getOrNull()
                if (ownerUuid != null) {
                    PetDataManager.updateLastLocation(ownerUuid, petId, vehicle.location)
                }
            }
        }

        // 所有する全ペットの位置も更新
        val playerUuidStr = player.uniqueId.toString()
        for (world in Bukkit.getWorlds()) {
            for (entity in world.livingEntities) {
                if (entity.ownerId == playerUuidStr) {
                    val petId = entity.petId ?: continue
                    PetDataManager.updateLastLocation(player.uniqueId, petId, entity.location)
                }
            }
        }
    }

    /**
     * ペット降車時の処理（飛行ペットの着地待機など）
     */
    @EventHandler
    fun onPetDismount(event: EntityDismountEvent) {
        if (event.entity !is Player) return
        val entity = event.dismounted as? LivingEntity ?: return
        if (entity.ownerId == null) return

        val spec = PetRegistry.get(entity.type)
        if (spec.category == PetCategory.FLYING) {
            // 飛行ペットは着地するまでゆっくり降下
            object : BukkitRunnable() {
                override fun run() {
                    if (!entity.isValid || entity.isDead || entity.passengers.isNotEmpty()) {
                        cancel()
                        return
                    }
                    if (entity.isOnGround) {
                        cancel()
                        return
                    }
                    // ゆっくり降下
                    entity.velocity = entity.velocity.setY(-0.2)
                }
            }.runTaskTimer(plugin, 5L, 2L)
        }
    }
}
