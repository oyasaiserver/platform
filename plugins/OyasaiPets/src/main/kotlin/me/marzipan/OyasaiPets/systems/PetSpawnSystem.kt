@file:Suppress("DEPRECATION")

package me.marzipan.OyasaiPets

import java.util.UUID
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.format.NamedTextColor.*
import org.bukkit.*
import org.bukkit.command.*
import org.bukkit.entity.*
import org.bukkit.inventory.*
import org.bukkit.plugin.java.JavaPlugin

/** ペットのスポーン・初期化システム ペットの生成、セットアップ、マウント処理を管理 */
class PetSpawnSystem(
    private val plugin: JavaPlugin,
    private val mountCooldowns: MutableMap<UUID, Long>,
    private val startControlTask: (Player, LivingEntity) -> Unit,
    private val updateStats: (LivingEntity, Int, PetSpec) -> Unit,
    private val setupPetEntity: (LivingEntity, PetSpec, Player) -> Unit,
    private val onPetSpawned: (LivingEntity) -> Unit = {},
) {

  /** アクティブなペット数をカウント */
  fun countActivePets(player: Player): Int {
    return ActivePetRegistry.countByOwner(player.uniqueId.toString())
  }

  /**
   * ペットをスポーンしてプレイヤーをマウント
   *
   * @return 生成されたペットのID（失敗時はnull）
   */
  fun spawnAndMountEntity(player: Player, type: EntityType, variantName: String?): String? {
    if (countActivePets(player) >= BigWolfConfig.MAX_PET_COUNT) {
      player.sendMessage(Component.text("ペットは同時に${BigWolfConfig.MAX_PET_COUNT}匹までしか召喚できません！", RED))
      return null
    }

    val spec = PetRegistry.get(type)
    val baseLoc = player.location.clone().add(0.0, 1.0, 0.0)
    // 通常のスポーンエッグと同じ挙動: プレイヤー位置にそのままスポーン
    val safeLoc = SpawnUtils.findSafeSpawnLocation(baseLoc)
    val entity = player.world.spawnEntity(safeLoc, type) as? LivingEntity

    if (entity == null || !entity.isValid) {
      player.sendMessage(Component.text("この場所では召喚できません（保護されています）。", RED))
      return null
    }

    // petIdを先に設定（setupPetEntityでデフォルト名生成に必要）
    val petId = UUID.randomUUID().toString()
    entity.petId = petId
    entity.ownerId = player.uniqueId.toString()

    // バリアントを先に適用（setupPetEntityでバリアント名取得に必要）
    if (variantName != null) {
      VariantHandler.applyVariant(entity, variantName)
    }

    setupPetEntity(entity, spec, player)

    entity.foodLevel = 0
    entity.particleType = 0
    entity.skillUnlockedLevel = 0
    entity.skillType = 0
    entity.isHovering = false

    // v3: 性質を決定
    entity.temperament = TemperamentHelper.determineForPurchase()

    // 遊んだ記録：新規召喚はゼロ初期化
    entity.statDistance = 0.0
    entity.statJumps = 0
    entity.statToys = 0

    updateStats(entity, 0, spec)

    // ChildAISystemに登録
    onPetSpawned(entity)

    // 2tick後にマウント
    Bukkit.getScheduler()
        .runTaskLater(
            plugin,
            Runnable {
              if (entity.isValid) {
                entity.addPassenger(player)
                mountCooldowns[player.uniqueId] = System.currentTimeMillis()
                startControlTask(player, entity)
              }
            },
            2L,
        )

    // 性質に応じたメッセージ
    val mobName = MobTranslator.toJapanese(type)
    if (entity.isAtypical()) {
      val temperamentDisplay = TemperamentHelper.getDisplayName(entity.temperament)
      player.sendMessage(Component.text("★★ $mobName を召喚しました！ [$temperamentDisplay]", LIGHT_PURPLE))
    } else {
      player.sendMessage(Component.text("$mobName を召喚しました！", AQUA))
    }
    return petId
  }
}
