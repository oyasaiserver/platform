package me.marzipan.OyasaiPets.services

import me.marzipan.OyasaiPets.*
import me.marzipan.OyasaiPets.domain.PetRegistry
import me.marzipan.OyasaiPets.domain.PetSpec
import me.marzipan.OyasaiPets.items.PetItemFactory
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.format.NamedTextColor.*
import net.kyori.adventure.text.serializer.plain.PlainTextComponentSerializer
import org.bukkit.Particle
import org.bukkit.Sound
import org.bukkit.attribute.Attribute
import org.bukkit.entity.LivingEntity
import org.bukkit.entity.Player
import org.bukkit.inventory.ItemStack
import org.bukkit.plugin.java.JavaPlugin

/**
 * ペットとプレイヤーの相互作用を管理するサービス
 * スキル、パーティクル、餌やり、ブラシ、おやつなど
 */
class PetInteractionService(private val plugin: JavaPlugin) {


    private val brushCooldowns = mutableMapOf<java.util.UUID, Long>()

    /**
     * スキルアンロック処理
     */
    fun handleSkillUnlock(
        player: Player,
        entity: LivingEntity,
        item: ItemStack,
        itemLevel: Int,
        consumeTokens: (Player, Int) -> Boolean
    ) {
        val currentUnlocked = entity.skillUnlockedLevel

        if (itemLevel <= currentUnlocked) {
            player.sendMessage(Component.text("このスキル（またはそれ以上）は既に解放されています！", RED))
            return
        }

        if (itemLevel > currentUnlocked + 1) {
            player.sendMessage(Component.text("前の段階のスキルを先に解放する必要があります！", RED))
            return
        }

        // ポイントコストを取得
        val cost = BigWolfConfig.getSkillBookCost(itemLevel)

        // ポイント残高チェックと消費
        if (cost > 0) {
            if (!consumeTokens(player, cost)) {
                player.playSound(player.location, Sound.ENTITY_VILLAGER_NO, 1f, 1f)
                return
            }
        }

        // 解放成功
        entity.skillUnlockedLevel = itemLevel
        entity.skillType = itemLevel
        item.amount -= 1
        sync(entity)

        entity.world.playSound(entity.location, Sound.UI_TOAST_CHALLENGE_COMPLETE, 1f, 1.2f)
        entity.world.spawnParticle(Particle.EXPLOSION_EMITTER, entity.location.add(0.0, 1.0, 0.0), 1)
        player.sendMessage(Component.text("おめでとうございます！新しいスキルがアンロックされました！ (-${cost}pt)", GREEN))
    }

    /**
     * パーティクルアンロック処理
     */
    fun handleParticleUnlock(player: Player, entity: LivingEntity, item: ItemStack) {
        val particleId = PetItemFactory.getParticleUnlockId(item)
        if (particleId < 5 || particleId > 10) {
            player.sendMessage(Component.text("無効なパーティクルアイテムです。", RED))
            return
        }

        if (entity.isParticleUnlocked(particleId)) {
            player.sendMessage(Component.text("このパーティクルは既にアンロック済みです！", RED))
            return
        }

        entity.unlockParticle(particleId)
        item.amount -= 1

        val particleName = PetItemFactory.getParticleName(particleId)
        entity.world.playSound(entity.location, Sound.BLOCK_AMETHYST_BLOCK_CHIME, 1f, 1.5f)
        entity.world.spawnParticle(Particle.END_ROD, entity.location.add(0.0, 1.0, 0.0), 20, 0.5, 0.5, 0.5, 0.1)
        player.sendMessage(Component.text("パーティクル「$particleName」をアンロックしました！", LIGHT_PURPLE))
        sync(entity)
    }

    /**
     * パーティクルをスポーンさせる
     */
    fun spawnParticles(entity: LivingEntity) {
        val pType = entity.particleType
        if (pType == 0) return // 0 = なし

        val particle = when (pType) {
            1 -> Particle.ELECTRIC_SPARK  // 電気
            2 -> Particle.FLAME           // 炎
            3 -> Particle.SOUL_FIRE_FLAME // 青炎
            4 -> Particle.HEART           // ハート
            5 -> Particle.END_ROD         // 星
            6 -> Particle.NOTE            // 音符
            7 -> Particle.SNOWFLAKE       // 雪
            8 -> Particle.CHERRY_LEAVES   // 桜
            9 -> Particle.PORTAL          // エンド
            10 -> Particle.ITEM_SLIME     // スライム
            else -> return
        }
        entity.world.spawnParticle(particle, entity.location, 5, 0.5, 0.2, 0.5, 0.0)
    }

    /**
     * ペットに餌を与える（レベルアップ）
     */
    fun giveFood(player: Player, entity: LivingEntity, consumeTokens: (Player, Int) -> Boolean) {
        val level = entity.foodLevel
        if (level >= BigWolfConfig.maxFoodLevel) {
            return player.sendMessage(Component.text("既に最大レベルです！", RED))
        }

        // ポイント残高チェックと消費
        if (!consumeTokens(player, BigWolfConfig.foodPointCost)) {
            player.playSound(player.location, Sound.ENTITY_VILLAGER_NO, 1f, 1f)
            return
        }

        val newLevel = level + 1
        entity.foodLevel = newLevel

        val spec = PetRegistry.get(entity.type)
        updateStats(entity, newLevel, spec)

        // フードアイテムは消費しない（減らさない）
        entity.world.playSound(entity.location, Sound.ENTITY_GENERIC_EAT, 1f, 1f)
        entity.world.spawnParticle(Particle.HEART, entity.location.add(0.0, 1.0, 0.0), 5, 0.5, 0.5, 0.5)
        player.sendMessage(Component.text("成長しました！ (-${BigWolfConfig.foodPointCost}pt)", GOLD))
        sync(entity)
    }

    /**
     * ペットのステータスを更新（スケールなど）
     */
    fun updateStats(entity: LivingEntity, level: Int, spec: PetSpec) {
        val progress = level.toDouble() / BigWolfConfig.maxFoodLevel
        val scale = spec.scaleRange.start + (spec.scaleRange.endInclusive - spec.scaleRange.start) * progress
        entity.getAttribute(Attribute.SCALE)?.baseValue = scale
    }

    /**
     * オーナーの移行チェック（古いペットの互換性）
     */
    fun checkAndMigrateOwner(entity: LivingEntity, player: Player) {
        val plainName = entity.customName()?.let { PlainTextComponentSerializer.plainText().serialize(it) } ?: ""
        if (entity.ownerId == null && plainName.startsWithDefaultPetName(player.name)) {
            entity.ownerId = player.uniqueId.toString()
        }
    }

    /**
     * プレイヤーがペットのオーナーかどうか
     */
    fun isOwner(entity: LivingEntity, player: Player) =
        entity.ownerId == player.uniqueId.toString()

    /**
     * ブラシを使う（なでる）
     */
    fun useBrush(player: Player, entity: LivingEntity) {
        val now = System.currentTimeMillis()
        val lastBrush = brushCooldowns.getOrDefault(player.uniqueId, 0L)
        val cooldownMillis = 5000L // 5秒

        if (now - lastBrush < cooldownMillis) {
            val remainingSec = ((cooldownMillis - (now - lastBrush)) / 1000.0).toInt() + 1
            player.sendActionBar(Component.text("クールダウン中... ${remainingSec}秒", RED))
            player.playSound(player.location, Sound.ENTITY_VILLAGER_NO, 0.5f, 1f)
            return
        }

        brushCooldowns[player.uniqueId] = now

        entity.statBrushes = entity.statBrushes + 1
        entity.world.spawnParticle(Particle.HEART, entity.location.add(0.0, 1.0, 0.0), 6, 0.4, 0.4, 0.4)
        // 代替音を使用（ITEM_BRUSH_BRUSHING_GENERICは1.21.8では非推奨の可能性）
        entity.world.playSound(entity.location, Sound.ENTITY_CAT_PURR, 1f, 1.2f)
        player.sendMessage(Component.text("なでなで...", AQUA))

        // 遊びでレベルアップ
        tryPlayLevelUp(player, entity)
        sync(entity)
    }

    /**
     * おやつを与える
     */
    fun giveTreat(player: Player, entity: LivingEntity) {
        val item = player.inventory.itemInMainHand
        if (item.amount > 0) {
            item.amount -= 1
        }
        entity.statTreats = entity.statTreats + 1
        // Heal the pet slightly, up to max
        val maxHealth = entity.getAttribute(Attribute.MAX_HEALTH)?.value ?: entity.health
        entity.health = (entity.health + 2.0).coerceAtMost(maxHealth)
        entity.world.spawnParticle(Particle.HEART, entity.location.add(0.0, 1.0, 0.0), 8, 0.5, 0.5, 0.5)
        entity.world.playSound(entity.location, Sound.ENTITY_GENERIC_EAT, 1f, 1.1f)
        player.sendMessage(Component.text("おやつをあげた！", GOLD))

        // 遊びでレベルアップ
        tryPlayLevelUp(player, entity)
        sync(entity)
    }

    fun healPet(player: Player, entity: LivingEntity) {
        val item = player.inventory.itemInMainHand
        if (item.amount > 0) {
            item.amount -= 1
        }
        val maxHealth = entity.getAttribute(Attribute.MAX_HEALTH)?.value ?: entity.health
        if (entity.health >= maxHealth) {
            player.sendMessage(Component.text("ペットの体力はすでに満タンです。", GRAY))
            return
        }
        entity.health =
            (entity.health + BigWolfConfig.healItemAmount.toDouble()).coerceAtMost(maxHealth)
        entity.world.spawnParticle(Particle.END_ROD, entity.location.add(0.0, 1.0, 0.0), 10, 0.5, 0.5, 0.5, 0.0)
        entity.world.playSound(entity.location, Sound.BLOCK_BREWING_STAND_BREW, 1f, 1.1f)
        player.sendMessage(Component.text("ペットの体力を回復しました！", AQUA))
        sync(entity)
    }

    /**
     * 遊びでレベルアップ（確率判定）
     */
    fun tryPlayLevelUp(player: Player, entity: LivingEntity) {
        val currentLevel = entity.foodLevel
        val maxPlayLevel = BigWolfConfig.playLevelUpMaxLevel

        // 基本確率 + 非定型ボーナス
        val baseChance = BigWolfConfig.playLevelUpChance
        val multiplier = me.marzipan.OyasaiPets.domain.TemperamentHelper.getLevelUpMultiplier(entity.temperament)
        val chance = baseChance * multiplier

        // すでに遊びでの上限に達している場合はスキップ
        if (currentLevel >= maxPlayLevel) return

        // 確率判定
        if (Math.random() < chance) {
            entity.foodLevel = currentLevel + 1
            val spec = PetRegistry.get(entity.type)
            updateStats(entity, entity.foodLevel, spec)

            // 非定型の場合は特別なメッセージ
            val msg = if (entity.isAtypical()) {
                "★★ ペットのレベルが上がった！ (Lv.${entity.foodLevel}) [非定型ボーナス]"
            } else {
                "★ ペットのレベルが上がった！ (Lv.${entity.foodLevel})"
            }
            player.sendMessage(Component.text(msg, GREEN))
            player.playSound(player.location, Sound.ENTITY_PLAYER_LEVELUP, 1f, 1.5f)
            entity.world.spawnParticle(Particle.TOTEM_OF_UNDYING, entity.location.add(0.0, 1.0, 0.0), 20, 0.5, 0.5, 0.5, 0.1)
            sync(entity)
        }
    }

    private fun sync(entity: LivingEntity) {
        PetSynchronizer.syncEntityToJson(entity)
    }
}
