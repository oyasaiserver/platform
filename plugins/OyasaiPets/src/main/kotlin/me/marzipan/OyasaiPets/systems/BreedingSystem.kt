@file:Suppress("DEPRECATION")

package me.marzipan.OyasaiPets

import java.util.UUID
import java.util.concurrent.ConcurrentHashMap
import me.realized.tm.api.TMAPI
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.format.NamedTextColor.*
import org.bukkit.*
import org.bukkit.command.*
import org.bukkit.entity.*
import org.bukkit.inventory.*
import org.bukkit.plugin.java.JavaPlugin
import org.bukkit.scheduler.BukkitRunnable
import org.bukkit.scheduler.BukkitTask

/** ペット交配システム ペット同士の交配、世代管理、能力値継承を管理 */
class BreedingSystem(
    private val plugin: JavaPlugin,
    private val countActivePets: (Player) -> Int,
    private val setupPetEntity: (LivingEntity, PetSpec, Player) -> Unit,
    private val updateStats: (LivingEntity, Int, PetSpec) -> Unit,
    private val consumeTokens: (Player, Int) -> Boolean,
    private val onPetSpawned: (LivingEntity) -> Unit = {},
) {

  private val activeDescentTasks = ConcurrentHashMap<UUID, BukkitTask>()

  /** 交配可能な条件を満たすペットのリストを取得 */
  fun getBreedablePets(player: Player): List<LivingEntity> {
    val playerUuidStr = player.uniqueId.toString()
    return ActivePetRegistry.getByOwner(playerUuidStr).filter {
      it.foodLevel >= BigWolfConfig.breedMinLevel
    }
  }

  /** 交配GUI を開く（27枠・ペット直接選択式） */
  @Suppress("UNUSED_PARAMETER")
  fun openBreedGui(player: Player, pets: List<LivingEntity>, title: Component): Inventory {
    val inv = Bukkit.createInventory(null, 27, title)

    // 交配可能なペットを上部2行に表示（最大18匹）
    pets.take(18).forEachIndexed { index, entity ->
      val eggMat = Material.getMaterial("${entity.type.name}_SPAWN_EGG") ?: Material.PIG_SPAWN_EGG
      val nameComp = entity.customName() ?: Component.text(MobTranslator.toJapanese(entity.type))
      val gen = entity.generation
      val breedCount = entity.breedCount
      val temperamentDisplay = TemperamentHelper.getDisplayName(entity.temperament)

      val item =
          ItemStack(eggMat).apply {
            itemMeta =
                itemMeta.apply {
                  displayName(
                      Component.text("${MobTranslator.toJapanese(entity.type)} ", YELLOW)
                          .append(nameComp)
                  )
                  lore(
                      listOf(
                          Component.text("レベル: ${entity.foodLevel}", GREEN),
                          Component.text("世代: 第${gen}世代", AQUA),
                          Component.text(
                              "性質: $temperamentDisplay",
                              if (entity.isAtypical()) LIGHT_PURPLE else GRAY,
                          ),
                          Component.text("交配回数: ${breedCount}回", GRAY),
                          Component.text("", GRAY),
                          Component.text("クリックで親に選択", GREEN),
                      )
                  )
                }
          }
      inv.setItem(index, item)
    }

    // 3行目: 選択状態と操作ボタン
    // スロット18: 親1選択状態
    val parent1Item =
        ItemStack(Material.LIGHT_BLUE_STAINED_GLASS_PANE).apply {
          itemMeta =
              itemMeta.apply {
                displayName(Component.text("親1: 未選択", AQUA))
                lore(listOf(Component.text("上のペットをクリックして選択", GRAY)))
              }
        }
    inv.setItem(18, parent1Item)

    // スロット20: 親2選択状態
    val parent2Item =
        ItemStack(Material.PINK_STAINED_GLASS_PANE).apply {
          itemMeta =
              itemMeta.apply {
                displayName(Component.text("親2: 未選択", LIGHT_PURPLE))
                lore(listOf(Component.text("上のペットをクリックして選択", GRAY)))
              }
        }
    inv.setItem(20, parent2Item)

    // スロット22: 説明
    val infoItem =
        ItemStack(Material.BOOK).apply {
          itemMeta =
              itemMeta.apply {
                displayName(Component.text("交配の手順", GOLD))
                lore(
                    listOf(
                        Component.text("1. 上段のペットから親1を選択", GRAY),
                        Component.text("2. 上段のペットから親2を選択", GRAY),
                        Component.text("3. 緑ボタンで交配実行", GRAY),
                        Component.text("", GRAY),
                        Component.text("必要条件:", YELLOW),
                        Component.text("- レベル${BigWolfConfig.breedMinLevel}以上", GRAY),
                        Component.text("コスト: ${BigWolfConfig.breedCost}pt", RED),
                    )
                )
              }
        }
    inv.setItem(22, infoItem)

    // スロット24: メインメニューへ戻る
    val backItem =
        ItemStack(Material.ARROW).apply {
          itemMeta =
              itemMeta.apply {
                displayName(Component.text("← メインメニューへ", WHITE))
                lore(listOf(Component.text("メインメニューに戻る", GRAY)))
              }
        }
    inv.setItem(24, backItem)

    // スロット26: 決定ボタン
    val confirmItem =
        ItemStack(Material.GREEN_WOOL).apply {
          itemMeta =
              itemMeta.apply {
                displayName(Component.text("交配を実行", GREEN))
                lore(
                    listOf(
                        Component.text("親を2匹選択してください", GRAY),
                        Component.text("コスト: ${BigWolfConfig.breedCost}pt", RED),
                    )
                )
              }
        }
    inv.setItem(26, confirmItem)

    return inv
  }

  /** 交配を実行 */
  fun executeBreeding(player: Player, parent1: LivingEntity, parent2: LivingEntity) {
    // ペット数制限チェック
    if (countActivePets(player) >= BigWolfConfig.MAX_PET_COUNT) {
      player.sendMessage(Component.text("ペットは同時に${BigWolfConfig.MAX_PET_COUNT}匹までしか召喚できません！", RED))
      player.sendMessage(Component.text("他のペットを収納してから交配してください。", GRAY))
      return
    }

    // コスト消費前に生成場所を確認
    val safeGround =
        SpawnUtils.findSafeGroundLocation(player.location.clone())
            ?: run {
              player.sendMessage(Component.text("この場所ではペットを生成できません。", RED))
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

    // バリアントをランダムに選択
    val variant = selectRandomVariant(parent1, parent2)

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
    val genBonus =
        (newGeneration * BigWolfConfig.breedGenBonusPerGen).coerceAtMost(
            BigWolfConfig.breedGenBonusMax
        )

    // 突然変異
    val mutation =
        if (Math.random() < BigWolfConfig.breedMutationChance) {
          1.0 + BigWolfConfig.breedMutationBoost
        } else {
          1.0
        }

    var newSpeed = parentSpeedAvg * randomFactor * mutation + genBonus
    var newJump = parentJumpAvg * randomFactor * mutation + genBonus

    // 上限設定
    newSpeed = newSpeed.coerceAtMost(BigWolfConfig.breedStatCap)
    newJump = newJump.coerceAtMost(BigWolfConfig.breedStatCap)

    val spawnLoc = safeGround.clone().add(0.0, 10.0, 0.0)

    val spec = PetRegistry.get(type)
    val newEntity = player.world.spawnEntity(spawnLoc, type) as? LivingEntity

    if (newEntity == null) {
      player.sendMessage(Component.text("この場所ではペットを生成できません。", RED))
      // ポイント返却
      @Suppress("DEPRECATION") TMAPI.addTokens(player.uniqueId, cost)
      return
    }

    // petIdとバリアントを先に設定（setupPetEntityでデフォルト名生成に必要）
    newEntity.petId = newPetId
    newEntity.ownerId = player.uniqueId.toString()
    newEntity.originalOwnerId = player.uniqueId.toString()

    // バリアント適用（setupPetEntityでバリアント名取得に必要）
    if (variant != null) {
      VariantHandler.applyVariant(newEntity, variant)
    }

    // エンティティ設定
    setupPetEntity(newEntity, spec, player)

    newEntity.generation = newGeneration
    newEntity.parent1Id = parent1.petId
    newEntity.parent2Id = parent2.petId
    newEntity.pcdVersion = BigWolfKeys.CURRENT_PCD_VERSION
    newEntity.speedMultiplier = newSpeed
    newEntity.jumpMultiplier = newJump
    newEntity.particleUnlocked = "0,1,2,3,4"

    // v3: 性質を決定（親の性質に基づく確率）
    newEntity.temperament =
        TemperamentHelper.determineForBreeding(parent1.temperament, parent2.temperament)

    // 世代ボーナスで初期レベル
    val bonusLevel =
        ((newGeneration - 1) * BigWolfConfig.breedBonusLevelPerGen).coerceAtMost(
            BigWolfConfig.breedBonusLevelMax
        )
    if (bonusLevel > 0) {
      newEntity.foodLevel = bonusLevel
      updateStats(newEntity, bonusLevel, spec)
    }

    // 親の交配回数更新
    updateParentBreedCount(player, parent1, parent2)

    // PetDataManagerに記録（ActivePetRegistry登録前にJSONを確保）
    val petData =
        PetDataManager.recordBreeding(
            ownerUuid = player.uniqueId,
            petId = newPetId,
            type = type,
            variant = variant,
            customName = null,
            parent1Id = parent1.petId ?: "",
            parent2Id = parent2.petId ?: "",
            generation = newGeneration,
        )

    // エンティティの表示名をJSON保存名（連番ベース）で上書き
    petData.customName?.let { newEntity.customName(Component.text(it)) }

    // 着地時に表示するボーナス情報をクロージャとして準備
    val hasMutation = mutation != 1.0
    val isCapped = newSpeed >= BigWolfConfig.breedStatCap || newJump >= BigWolfConfig.breedStatCap
    val onLand: () -> Unit = {
      val temperamentDisplay = TemperamentHelper.getDisplayName(newEntity.temperament)
      if (newEntity.isAtypical()) {
        player.sendMessage(
            Component.text(
                "★★ 新しいペットが誕生しました！ (第${newGeneration}世代) [$temperamentDisplay]",
                LIGHT_PURPLE,
            )
        )
      } else {
        player.sendMessage(Component.text("★ 新しいペットが誕生しました！ (第${newGeneration}世代)", GREEN))
      }
      player.sendMessage(Component.text("  ${petData.customName ?: ""}", GRAY))
      player.sendMessage(
          Component.text("  速度: ", GRAY)
              .append(Component.text(String.format("%.3f", newSpeed), if (isCapped) RED else GREEN))
              .append(Component.text("  ジャンプ: ", GRAY))
              .append(Component.text(String.format("%.3f", newJump), if (isCapped) RED else GREEN))
      )
      val bonuses = buildList {
        add(
            Component.text(
                "ランダム${(randomFactor * 100).toInt()}%",
                if (randomFactor >= 1.0) GREEN else YELLOW,
            )
        )
        if (genBonus > 0) add(Component.text("世代補正+${String.format("%.2f", genBonus)}", AQUA))
        if (hasMutation) add(Component.text("突然変異★", LIGHT_PURPLE))
        if (bonusLevel > 0) add(Component.text("初期Lv+$bonusLevel", GREEN))
        if (isCapped) add(Component.text("上限到達", RED))
      }
      if (bonuses.isNotEmpty()) {
        val line =
            bonuses.drop(1).fold(Component.text("  ボーナス: ", GRAY).append(bonuses[0])) { acc, c ->
              acc.append(Component.text(" / ", DARK_GRAY)).append(c)
            }
        player.sendMessage(line)
      }
    }

    // 降臨演出（着地時にonLandが呼ばれる）
    spawnDescentEffect(newEntity, safeGround.y + 0.5, onLand)

    // ActivePetRegistryに登録
    onPetSpawned(newEntity)

    player.playSound(player.location, Sound.ENTITY_PLAYER_LEVELUP, 1f, 1.5f)
  }

  private fun spawnDescentEffect(
      entity: LivingEntity,
      targetY: Double,
      onLand: (() -> Unit)? = null,
  ) {
    activeDescentTasks[entity.uniqueId]?.cancel()
    var currentY = entity.location.y
    val task =
        object : BukkitRunnable() {
          override fun run() {
            if (!entity.isValid || entity.isDead) {
              activeDescentTasks.remove(entity.uniqueId)
              cancel()
              return
            }

            val world = entity.world
            val loc = entity.location
            world.spawnParticle(
                Particle.HEART,
                loc.clone().add(0.0, 1.0, 0.0),
                5,
                0.3,
                0.5,
                0.3,
                0.02,
            )
            world.spawnParticle(
                Particle.TOTEM_OF_UNDYING,
                loc.clone().add(0.0, 2.0, 0.0),
                3,
                0.2,
                0.2,
                0.2,
                0.01,
            )
            world.spawnParticle(
                Particle.FIREWORK,
                loc.clone().add(0.0, 0.5, 0.0),
                2,
                0.4,
                0.3,
                0.4,
                0.0,
            )

            currentY = (currentY - 0.3).coerceAtLeast(targetY)
            val nextLoc = loc.clone()
            nextLoc.y = currentY
            entity.teleport(nextLoc)

            if (currentY <= targetY) {
              world.spawnParticle(
                  Particle.EXPLOSION_EMITTER,
                  entity.location.clone().add(0.0, 0.5, 0.0),
                  1,
              )
              world.playSound(entity.location, Sound.ENTITY_GENERIC_EXPLODE, 0.8f, 1.5f)

              // 非定型の特別エフェクト
              if (entity.isAtypical()) {
                world.spawnParticle(
                    Particle.HEART,
                    entity.location.add(0.0, 1.5, 0.0),
                    15,
                    0.5,
                    0.5,
                    0.5,
                    0.1,
                )
              }
              // ボーナス表示コールバック（交配時に渡される）
              onLand?.invoke()
              activeDescentTasks.remove(entity.uniqueId)
              cancel()
            }
          }
        }
    activeDescentTasks[entity.uniqueId] = task.runTaskTimer(plugin, 0L, 2L)
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

  /**
   * 交配時にバリアントをランダムに選択
   *
   * ロジック:
   * 1. 親1と親2のバリアントを取得
   * 2. そのMOBタイプで利用可能な全バリアントを取得
   * 3. 親のバリアントを優先的に（70%）、その他のバリアントも候補に（30%）
   */
  private fun selectRandomVariant(parent1: LivingEntity, parent2: LivingEntity): String? {
    val type = parent1.type

    // 利用可能なバリアント一覧を取得
    val availableVariants = VariantHandler.getVariantNames(type)
    if (availableVariants.isEmpty()) return null

    val parent1Variant = VariantHandler.getVariantNameFromEntity(parent1)
    val parent2Variant = VariantHandler.getVariantNameFromEntity(parent2)
    val parentVariants = setOfNotNull(parent1Variant, parent2Variant)

    // 各バリアントの重みを集計（同じ親バリアントが両親に一致する場合は2倍）
    // 重みはconfig.ymlの breed.variantWeights で設定可能
    val weights = LinkedHashMap<String, Int>()
    parent1Variant?.let {
      weights[it] = (weights[it] ?: 0) + BigWolfConfig.breedParentVariantWeight
    }
    parent2Variant?.let {
      weights[it] = (weights[it] ?: 0) + BigWolfConfig.breedParentVariantWeight
    }
    for (variant in availableVariants) {
      if (variant !in parentVariants) {
        weights[variant] = BigWolfConfig.breedOtherVariantWeight
      }
    }

    if (weights.isEmpty()) return availableVariants.randomOrNull()

    // 重み付きランダム選択（リストを生成せず1パスで決定）
    var remaining = (0 until weights.values.sum()).random()
    for ((variant, weight) in weights) {
      remaining -= weight
      if (remaining < 0) return variant
    }
    return weights.keys.last()
  }
}
