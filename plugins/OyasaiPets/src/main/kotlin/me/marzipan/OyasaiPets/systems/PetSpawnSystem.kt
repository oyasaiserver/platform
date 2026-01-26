package me.marzipan.OyasaiPets.systems

import me.marzipan.OyasaiPets.*
import me.marzipan.OyasaiPets.domain.PetCategory
import me.marzipan.OyasaiPets.domain.PetRegistry
import me.marzipan.OyasaiPets.domain.PetSpec
import me.marzipan.OyasaiPets.domain.VariantHandler
import me.marzipan.OyasaiPets.SpawnUtils
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.format.NamedTextColor.*
import org.bukkit.Bukkit
import org.bukkit.attribute.Attribute
import org.bukkit.entity.*
import org.bukkit.plugin.java.JavaPlugin
import java.util.UUID

/**
 * ペットのスポーン・初期化システム
 * ペットの生成、セットアップ、マウント処理を管理
 */
class PetSpawnSystem(
    private val plugin: JavaPlugin,
    private val mountCooldowns: MutableMap<UUID, Long>,
    private val startControlTask: (Player, LivingEntity) -> Unit,
    private val updateStats: (LivingEntity, Int, PetSpec) -> Unit
) {

    /**
     * アクティブなペット数をカウント
     */
    fun countActivePets(player: Player): Int {
        var count = 0
        val targetId = player.uniqueId.toString()
        for (world in Bukkit.getWorlds()) {
            for (entity in world.livingEntities) {
                if (entity.ownerId == targetId) {
                    count++
                }
            }
        }
        return count
    }

    /**
     * ペットをスポーンしてプレイヤーをマウント
     * @return 生成されたペットのID（失敗時はnull）
     */
    fun spawnAndMountEntity(player: Player, type: EntityType, variantName: String?): String? {
        if (countActivePets(player) >= BigWolfConfig.MAX_PET_COUNT) {
            player.sendMessage(
                Component.text("ペットは同時に${BigWolfConfig.MAX_PET_COUNT}匹までしか召喚できません！", RED)
            )
            return null
        }

        val spec = PetRegistry.get(type)
        val baseLoc = player.location.clone().add(0.0, 1.0, 0.0)
        val safeLoc = SpawnUtils.findSafeSpawnLocation(baseLoc)
        if (safeLoc == null) {
            player.sendMessage(Component.text("この場所では召喚できません（足場と空間が必要です）。", RED))
            return null
        }
        val entity = player.world.spawnEntity(safeLoc, type) as? LivingEntity

        if (entity == null || !entity.isValid) {
            player.sendMessage(Component.text("この場所では召喚できません（保護されています）。", RED))
            return null
        }

        setupPetEntity(entity, spec, player)

        if (variantName != null) {
            VariantHandler.applyVariant(entity, variantName)
        }

        val petId = UUID.randomUUID().toString()
        entity.ownerId = player.uniqueId.toString()
        entity.petId = petId
        entity.foodLevel = 0
        entity.isSilentMode = false
        entity.particleType = 0
        entity.skillUnlockedLevel = 0
        entity.skillType = 0
        entity.isHovering = false

        // 遊んだ記録：新規召喚はゼロ初期化
        entity.statDistance = 0.0
        entity.statJumps = 0
        entity.statToys = 0

        updateStats(entity, 0, spec)

        // 2tick後にマウント
        Bukkit.getScheduler().runTaskLater(plugin, Runnable {
            if (entity.isValid) {
                entity.addPassenger(player)
                mountCooldowns[player.uniqueId] = System.currentTimeMillis()
                startControlTask(player, entity)
            }
        }, 2L)

        player.sendMessage(Component.text("巨大な ${type.name} を召喚しました！", AQUA))
        return petId
    }

    /**
     * ペットエンティティの基本設定
     */
    fun setupPetEntity(entity: LivingEntity, spec: PetSpec, player: Player) {
        entity.apply {
            customName(Component.text("${player.name}の大${type.name}"))
            isCustomNameVisible = true
            setRemoveWhenFarAway(false)
            isInvulnerable = true
            setAI(true)

            getAttribute(Attribute.SCALE)?.baseValue = spec.scaleRange.start
            getAttribute(Attribute.MOVEMENT_SPEED)?.baseValue = 0.0
            getAttribute(Attribute.FLYING_SPEED)?.baseValue = 0.0
            getAttribute(Attribute.STEP_HEIGHT)?.baseValue = 1.1

            if (this is Tameable) {
                isTamed = true
                owner = player
            }
            if (this is Sittable) isSitting = false
            if (this is Ageable) setAdult()
        }
    }
}
