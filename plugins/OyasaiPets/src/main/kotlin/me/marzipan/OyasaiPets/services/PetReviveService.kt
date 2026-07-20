@file:Suppress("DEPRECATION")

package me.marzipan.OyasaiPets

import net.kyori.adventure.text.Component
import net.kyori.adventure.text.format.NamedTextColor.*
import org.bukkit.*
import org.bukkit.command.*
import org.bukkit.entity.*
import org.bukkit.inventory.*
import org.bukkit.plugin.java.JavaPlugin
import org.bukkit.scheduler.BukkitRunnable

/**
 * ペット復活を担当するサービス
 * - 死亡ペットの復活処理
 * - 降臨演出
 */
class PetReviveService(
    private val plugin: JavaPlugin,
    private val economySystem: EconomySystem,
    private val countActivePets: (Player) -> Int,
    private val setupPetEntity: (LivingEntity, PetSpec, Player) -> Unit,
    private val interactionService: PetInteractionService,
    private val onPetSpawned: (LivingEntity) -> Unit = {},
) {

  /** ペットを復活させる */
  fun handleRevivePet(player: Player, args: Array<out String>) {
    if (args.size < 2) {
      player.sendMessage(Component.text("使い方: /bigwolf revive <ペット番号>", RED))
      player.sendMessage(Component.text("/bigwolf dead で死亡したペットを確認できます。", GRAY))
      return
    }

    val petNumber = args[1].toIntOrNull()
    if (petNumber == null) {
      player.sendMessage(Component.text("ペット番号は数字で指定してください。", RED))
      return
    }

    val petData = PetDataManager.getDeathDataForRevive(player.uniqueId, petNumber)
    if (petData == null) {
      player.sendMessage(Component.text("番号 $petNumber の死亡したペットは見つかりません。", RED))
      return
    }

    // ペット数制限チェック
    if (countActivePets(player) >= BigWolfConfig.MAX_PET_COUNT) {
      player.sendMessage(Component.text("ペットは同時に${BigWolfConfig.MAX_PET_COUNT}匹までしか召喚できません！", RED))
      return
    }

    // ポイント消費
    val cost = BigWolfConfig.reviveCost
    if (!economySystem.consumeTokens(player, cost)) {
      return
    }

    // ペットを復活（上空からの降臨演出）
    val type = runCatching { EntityType.valueOf(petData.type) }.getOrNull() ?: EntityType.WOLF
    val spec = PetRegistry.get(type)

    val safeGround = SpawnUtils.findSafeGroundLocation(player.location.clone())
    if (safeGround == null) {
      player.sendMessage(Component.text("この場所ではペットを復活できません（足場と空間が必要です）。", RED))
      return
    }

    // 上空10ブロックからスタート
    val spawnLoc = safeGround.clone().add(0.0, 10.0, 0.0)

    val entity = player.world.spawnEntity(spawnLoc, type) as? LivingEntity
    if (entity == null) {
      player.sendMessage(Component.text("この場所ではペットを復活できません。", RED))
      return
    }

    // petIdとownerIdを先に設定（ActivePetRegistry登録・名前生成に必要）
    entity.ownerId = player.uniqueId.toString()
    entity.petId = petData.petId

    // バリアントを先に適用（setupPetEntityでバリアント名取得に必要）
    petData.variant?.let { VariantHandler.applyVariant(entity, it) }

    setupPetEntity(entity, spec, player)

    // ChildAISystemに登録（petId/ownerId設定後に実行）
    onPetSpawned(entity)

    // データ復元
    if (petData.customName != null) {
      // デフォルト名に古い番号が埋め込まれている場合、正しいpetNumberで修正して保存
      val rawName = petData.customName!!
      val corrected = rawName.replace(Regex(""" #\d+$"""), " #${petData.petNumber}")
      if (corrected != rawName) {
        petData.customName = corrected
        PetDataManager.savePet(player.uniqueId, petData)
      }
      entity.customName(LEGACY_AMP.deserialize(corrected))
      entity.isCustomNameVisible = true
    }

    entity.foodLevel = petData.foodLevel
    entity.skillType = petData.skillType
    entity.skillUnlockedLevel = petData.skillUnlockedLevel
    entity.statDistance = petData.stats.distance
    entity.statJumps = petData.stats.jumps
    entity.statToys = petData.stats.toys
    entity.statBrushes = petData.stats.brushes
    entity.statTreats = petData.stats.treats
    entity.particleUnlocked = petData.particleUnlocked
    entity.speedMultiplier = petData.speedMultiplier
    entity.jumpMultiplier = petData.jumpMultiplier
    entity.particleType = petData.particleType
    entity.isHovering = petData.isHovering
    entity.temperament = petData.temperament
    entity.generation = petData.breedInfo?.generation ?: 1
    entity.parent1Id = petData.breedInfo?.parent1Id
    entity.parent2Id = petData.breedInfo?.parent2Id
    entity.breedCount = petData.breedCount
    entity.transferCount = petData.transferHistory.size
    entity.originalOwnerId = petData.originalOwner

    interactionService.updateStats(entity, petData.foodLevel, spec)

    // ステータス更新
    PetDataManager.markAsRevived(player.uniqueId, petData.petId)

    // ★ 上空から降りてくる演出
    player.playSound(player.location, Sound.ENTITY_PLAYER_LEVELUP, 1f, 1.2f)
    player.sendMessage(Component.text("ペット #${petNumber} を復活させました！ (-${cost}pt)", GREEN))

    // 降臨演出タスク
    startDescentAnimation(entity, safeGround)
  }

  /** 降臨演出タスク（テレポートで段階的に降下） */
  private fun startDescentAnimation(entity: LivingEntity, safeGround: Location) {
    val targetY = safeGround.y + 0.5 // 着地点
    val spawnY = entity.location.y

    object : BukkitRunnable() {
          var currentY = spawnY

          override fun run() {
            if (!entity.isValid) {
              cancel()
              return
            }

            // パーティクル演出（キラキラと光の柱）
            val currentLoc = entity.location
            entity.world.spawnParticle(
                Particle.TOTEM_OF_UNDYING,
                currentLoc.clone().add(0.0, 1.0, 0.0),
                5,
                0.3,
                0.5,
                0.3,
                0.02,
            )
            entity.world.spawnParticle(
                Particle.END_ROD,
                currentLoc.clone().add(0.0, 2.0, 0.0),
                3,
                0.2,
                0.2,
                0.2,
                0.01,
            )
            entity.world.spawnParticle(
                Particle.FIREWORK,
                currentLoc.clone().add(0.0, 0.5, 0.0),
                2,
                0.4,
                0.3,
                0.4,
                0.0,
            )

            // テレポートでゆっくり降下（物理演算を使わない）
            if (currentY > targetY) {
              currentY -= 0.3 // 1tickあたり0.3ブロック降下
              if (currentY < targetY) currentY = targetY

              val newLoc = safeGround.clone()
              newLoc.y = currentY
              newLoc.yaw = entity.location.yaw
              newLoc.pitch = entity.location.pitch
              entity.teleport(newLoc)
              entity.fallDistance = 0f // 落下ダメージ防止
            } else {
              // 着地完了
              val finalLoc = safeGround.clone()
              finalLoc.y = targetY
              finalLoc.yaw = entity.location.yaw
              finalLoc.pitch = entity.location.pitch
              entity.teleport(finalLoc)

              // 着地時の派手なエフェクト
              entity.world.spawnParticle(
                  Particle.TOTEM_OF_UNDYING,
                  entity.location.add(0.0, 1.0, 0.0),
                  50,
                  1.0,
                  1.0,
                  1.0,
                  0.2,
              )
              entity.world.spawnParticle(
                  Particle.EXPLOSION,
                  entity.location.add(0.0, 0.5, 0.0),
                  3,
                  0.5,
                  0.5,
                  0.5,
                  0.0,
              )
              entity.world.playSound(entity.location, Sound.ENTITY_FIREWORK_ROCKET_TWINKLE, 1f, 1f)
              entity.world.playSound(entity.location, Sound.BLOCK_BEACON_ACTIVATE, 0.8f, 1.2f)

              cancel()
            }
          }
        }
        .runTaskTimer(plugin, 0L, 1L)
  }
}
