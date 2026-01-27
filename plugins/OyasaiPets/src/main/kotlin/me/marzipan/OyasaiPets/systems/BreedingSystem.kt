package me.marzipan.OyasaiPets.systems

import me.marzipan.OyasaiPets.*
import me.marzipan.OyasaiPets.domain.PetRegistry
import me.marzipan.OyasaiPets.domain.VariantHandler
import me.marzipan.OyasaiPets.SpawnUtils
import me.realized.tm.api.TMAPI
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.format.NamedTextColor.*
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.Particle
import org.bukkit.Sound
import org.bukkit.entity.LivingEntity
import org.bukkit.entity.Player
import org.bukkit.inventory.Inventory
import org.bukkit.plugin.java.JavaPlugin
import org.bukkit.scheduler.BukkitRunnable
import java.util.UUID

/**
 * ペット交配システム
 * ペット同士の交配、世代管理、能力値継承を管理
 */
class BreedingSystem(
    private val plugin: JavaPlugin,
    private val countActivePets: (Player) -> Int,
    private val setupPetEntity: (LivingEntity, me.marzipan.OyasaiPets.domain.PetSpec, Player) -> Unit,
    private val updateStats: (LivingEntity, Int, me.marzipan.OyasaiPets.domain.PetSpec) -> Unit,
    private val consumeTokens: (Player, Int) -> Boolean
) {

    /**
     * 交配可能な条件を満たすペットのリストを取得
     */
    fun getBreedablePets(player: Player): List<LivingEntity> {
        val pets = mutableListOf<LivingEntity>()
        val playerUuidStr = player.uniqueId.toString()

        for (world in Bukkit.getWorlds()) {
            for (entity in world.livingEntities) {
                if (entity.ownerId == playerUuidStr &&
                    entity.foodLevel >= BigWolfConfig.breedMinLevel &&
                    entity.breedCount < BigWolfConfig.maxBreedCount
                ) {
                    pets.add(entity)
                }
            }
        }
        return pets
    }

    /**
     * 交配GUI を開く（9枠のシンプル選択式）
     */
    fun openBreedGui(player: Player, pets: List<LivingEntity>, title: Component): Inventory {
        val inv = Bukkit.createInventory(null, 9, title)

        // 親1の表示（スロット1）
        val parent1Item = org.bukkit.inventory.ItemStack(Material.LIGHT_BLUE_STAINED_GLASS_PANE).apply {
            itemMeta = itemMeta.apply {
                displayName(Component.text("親1: 選択してください", AQUA))
                lore(listOf(
                    Component.text("", GRAY),
                    Component.text("フィールドのペットをクリック", YELLOW)
                ))
            }
        }
        inv.setItem(1, parent1Item)

        // 親2の表示（スロット3）
        val parent2Item = org.bukkit.inventory.ItemStack(Material.PINK_STAINED_GLASS_PANE).apply {
            itemMeta = itemMeta.apply {
                displayName(Component.text("親2: 選択してください", LIGHT_PURPLE))
                lore(listOf(
                    Component.text("", GRAY),
                    Component.text("フィールドのペットをクリック", YELLOW)
                ))
            }
        }
        inv.setItem(3, parent2Item)

        // 決定ボタン（スロット7）
        val confirmItem = org.bukkit.inventory.ItemStack(Material.GREEN_WOOL).apply {
            itemMeta = itemMeta.apply {
                displayName(Component.text("交配を実行", GREEN))
                lore(listOf(
                    Component.text("親を2匹選択してください", GRAY),
                    Component.text("コスト: ${BigWolfConfig.breedCost}pt", RED)
                ))
            }
        }
        inv.setItem(7, confirmItem)

        // 説明（スロット4）
        val infoItem = org.bukkit.inventory.ItemStack(Material.BOOK).apply {
            itemMeta = itemMeta.apply {
                displayName(Component.text("交配の手順", GOLD))
                lore(listOf(
                    Component.text("1. フィールドのペットを右クリック", GRAY),
                    Component.text("   してGUIで「親1に選択」", GRAY),
                    Component.text("2. 別のペットを右クリック", GRAY),
                    Component.text("   してGUIで「親2に選択」", GRAY),
                    Component.text("3. 緑の決定ボタンを押す", GRAY),
                    Component.text("", GRAY),
                    Component.text("必要条件:", YELLOW),
                    Component.text("- レベル${BigWolfConfig.breedMinLevel}以上", GRAY),
                    Component.text("- 交配回数${BigWolfConfig.maxBreedCount}回未満", GRAY)
                ))
            }
        }
        inv.setItem(4, infoItem)

        return inv
    }

    /**
     * 交配を実行
     */
    fun executeBreeding(player: Player, parent1: LivingEntity, parent2: LivingEntity) {
        // ペット数制限チェック
        if (countActivePets(player) >= BigWolfConfig.MAX_PET_COUNT) {
            player.sendMessage(Component.text("ペットは同時に${BigWolfConfig.MAX_PET_COUNT}匹までしか召喚できません！", RED))
            player.sendMessage(Component.text("他のペットを収納してから交配してください。", GRAY))
            return
        }

        // コスト確認
        val cost = BigWolfConfig.breedCost
        if (!consumeTokens(player, cost)) {
            return
        }

        // 新しいペットを生成
        val newPetId = UUID.randomUUID().toString()
        val type = parent1.type
        val variant = VariantHandler.getVariantNameFromEntity(parent1)
            ?: VariantHandler.getVariantNameFromEntity(parent2)

        // 世代計算
        val gen1 = parent1.generation
        val gen2 = parent2.generation
        val newGeneration = maxOf(gen1, gen2) + 1

        // 能力値の遺伝計算
        val parentSpeedAvg = (parent1.speedMultiplier + parent2.speedMultiplier) / 2.0
        val parentJumpAvg = (parent1.jumpMultiplier + parent2.jumpMultiplier) / 2.0

        // ランダム要素
        val randomRange = BigWolfConfig.breedRandomMax - BigWolfConfig.breedRandomMin
        val randomFactor = BigWolfConfig.breedRandomMin + (Math.random() * randomRange)

        // 世代ボーナス
        val genBonus = (newGeneration * BigWolfConfig.breedGenBonusPerGen)
            .coerceAtMost(BigWolfConfig.breedGenBonusMax)

        // 突然変異
        val mutation = if (Math.random() < BigWolfConfig.breedMutationChance) {
            BigWolfConfig.breedMutationBoost
        } else {
            1.0
        }

        var newSpeed = parentSpeedAvg * randomFactor * mutation + genBonus
        var newJump = parentJumpAvg * randomFactor * mutation + genBonus

        // 上限設定
        newSpeed = newSpeed.coerceAtMost(BigWolfConfig.breedStatCap)
        newJump = newJump.coerceAtMost(BigWolfConfig.breedStatCap)

        val safeGround =
            SpawnUtils.findSafeSpawnLocation(player.location.clone())
                ?: run {
                    player.sendMessage(Component.text("この場所ではペットを生成できません。", RED))
                    @Suppress("DEPRECATION")
                    TMAPI.addTokens(player.uniqueId, cost)
                    return
                }
        val spawnLoc = safeGround.clone().add(0.0, 10.0, 0.0)

        val spec = PetRegistry.get(type)
        val newEntity = player.world.spawnEntity(spawnLoc, type) as? LivingEntity

        if (newEntity == null) {
            player.sendMessage(Component.text("この場所ではペットを生成できません。", RED))
            // ポイント返却
            @Suppress("DEPRECATION")
            TMAPI.addTokens(player.uniqueId, cost)
            return
        }

        // エンティティ設定
        setupPetEntity(newEntity, spec, player)
        newEntity.petId = newPetId
        newEntity.ownerId = player.uniqueId.toString()
        newEntity.originalOwnerId = player.uniqueId.toString()
        newEntity.generation = newGeneration
        newEntity.parent1Id = parent1.petId
        newEntity.parent2Id = parent2.petId
        newEntity.pcdVersion = BigWolfKeys.CURRENT_PCD_VERSION
        newEntity.speedMultiplier = newSpeed
        newEntity.jumpMultiplier = newJump
        newEntity.particleUnlocked = "0,1,2,3,4"

        // 世代ボーナスで初期レベル
        val bonusLevel = ((newGeneration - 1) * BigWolfConfig.breedBonusLevelPerGen)
            .coerceAtMost(BigWolfConfig.breedBonusLevelMax)
        if (bonusLevel > 0) {
            newEntity.foodLevel = bonusLevel
            updateStats(newEntity, bonusLevel, spec)
        }

        // バリアント適用
        if (variant != null) {
            VariantHandler.applyVariant(newEntity, variant)
        }

        // 降臨演出
        spawnDescentEffect(newEntity, player, newGeneration, safeGround.y + 0.5)

        // 親の交配回数更新
        updateParentBreedCount(player, parent1, parent2)

        // PetDataManagerに記録
        PetDataManager.recordBreeding(
            ownerUuid = player.uniqueId,
            petId = newPetId,
            type = type,
            variant = variant,
            customName = null,
            parent1Id = parent1.petId ?: "",
            parent2Id = parent2.petId ?: "",
            generation = newGeneration,
            speedMultiplier = newSpeed,
            jumpMultiplier = newJump
        )

        player.playSound(player.location, Sound.ENTITY_PLAYER_LEVELUP, 1f, 1.5f)
    }

    private fun spawnDescentEffect(
        entity: LivingEntity,
        player: Player,
        generation: Int,
        targetY: Double
    ) {
        var currentY = entity.location.y
        object : BukkitRunnable() {
            override fun run() {
                if (!entity.isValid || entity.isDead) {
                    cancel()
                    return
                }

                val world = entity.world
                val loc = entity.location
                world.spawnParticle(Particle.HEART, loc.clone().add(0.0, 1.0, 0.0), 5, 0.3, 0.5, 0.3, 0.02)
                world.spawnParticle(Particle.TOTEM_OF_UNDYING, loc.clone().add(0.0, 2.0, 0.0), 3, 0.2, 0.2, 0.2, 0.01)
                world.spawnParticle(Particle.FIREWORK, loc.clone().add(0.0, 0.5, 0.0), 2, 0.4, 0.3, 0.4, 0.0)

                currentY = (currentY - 0.3).coerceAtLeast(targetY)
                val nextLoc = loc.clone()
                nextLoc.y = currentY
                entity.teleport(nextLoc)

                if (currentY <= targetY) {
                    world.spawnParticle(
                        Particle.EXPLOSION_EMITTER,
                        entity.location.clone().add(0.0, 0.5, 0.0),
                        1
                    )
                    world.playSound(entity.location, Sound.ENTITY_GENERIC_EXPLODE, 0.8f, 1.5f)
                    player.sendMessage(Component.text("★ 新しいペットが誕生しました！ (第${generation}世代)", GREEN))
                    cancel()
                }
            }
        }.runTaskTimer(plugin, 0L, 2L)
    }

    private fun updateParentBreedCount(player: Player, parent1: LivingEntity, parent2: LivingEntity) {
        parent1.breedCount++
        parent2.breedCount++

        val parent1Id = parent1.petId
        val parent2Id = parent2.petId

        if (parent1Id != null) {
            val petData1 = PetDataManager.getPetData(player.uniqueId, parent1Id)
            if (petData1 != null) {
                petData1.breedCount = parent1.breedCount
                PetDataManager.savePet(player.uniqueId, petData1)
            }
        }

        if (parent2Id != null) {
            val petData2 = PetDataManager.getPetData(player.uniqueId, parent2Id)
            if (petData2 != null) {
                petData2.breedCount = parent2.breedCount
                PetDataManager.savePet(player.uniqueId, petData2)
            }
        }
    }
}
