@file:Suppress("DEPRECATION")

package me.marzipan.OyasaiPets

import net.kyori.adventure.text.format.NamedTextColor.*
import org.bukkit.*
import org.bukkit.command.*
import org.bukkit.entity.*
import org.bukkit.inventory.*
import org.bukkit.persistence.PersistentDataType

/** LivingEntityの拡張プロパティ - ペットデータへのアクセスを提供 */

// 基本情報
var LivingEntity.foodLevel: Int
  get() = persistentDataContainer.get(BigWolfKeys.FOOD, PersistentDataType.INTEGER) ?: 0
  set(value) = persistentDataContainer.set(BigWolfKeys.FOOD, PersistentDataType.INTEGER, value)

var LivingEntity.ownerId: String?
  get() = persistentDataContainer.get(BigWolfKeys.OWNER, PersistentDataType.STRING)
  set(value) {
    if (value != null)
        persistentDataContainer.set(BigWolfKeys.OWNER, PersistentDataType.STRING, value)
  }

var LivingEntity.particleType: Int
  get() = persistentDataContainer.get(BigWolfKeys.PARTICLE, PersistentDataType.INTEGER) ?: 0
  set(value) = persistentDataContainer.set(BigWolfKeys.PARTICLE, PersistentDataType.INTEGER, value)

var LivingEntity.petId: String?
  get() = persistentDataContainer.get(BigWolfKeys.PET_ID, PersistentDataType.STRING)
  set(value) {
    if (value != null)
        persistentDataContainer.set(BigWolfKeys.PET_ID, PersistentDataType.STRING, value)
  }

// スキル関連
var LivingEntity.skillType: Int
  get() = persistentDataContainer.get(BigWolfKeys.SKILL_TYPE, PersistentDataType.INTEGER) ?: 0
  set(value) =
      persistentDataContainer.set(BigWolfKeys.SKILL_TYPE, PersistentDataType.INTEGER, value)

var LivingEntity.skillUnlockedLevel: Int
  get() = persistentDataContainer.get(BigWolfKeys.SKILL_UNLOCKED, PersistentDataType.INTEGER) ?: 0
  set(value) =
      persistentDataContainer.set(BigWolfKeys.SKILL_UNLOCKED, PersistentDataType.INTEGER, value)

var LivingEntity.isHovering: Boolean
  get() =
      (persistentDataContainer.get(BigWolfKeys.HOVER_STATE, PersistentDataType.BYTE) ?: 0)
          .toInt() == 1
  set(value) =
      persistentDataContainer.set(
          BigWolfKeys.HOVER_STATE,
          PersistentDataType.BYTE,
          if (value) 1 else 0,
      )

// 統計情報
var LivingEntity.statDistance: Double
  get() = persistentDataContainer.get(BigWolfKeys.STAT_DISTANCE, PersistentDataType.DOUBLE) ?: 0.0
  set(value) =
      persistentDataContainer.set(BigWolfKeys.STAT_DISTANCE, PersistentDataType.DOUBLE, value)

var LivingEntity.statJumps: Int
  get() = persistentDataContainer.get(BigWolfKeys.STAT_JUMPS, PersistentDataType.INTEGER) ?: 0
  set(value) =
      persistentDataContainer.set(BigWolfKeys.STAT_JUMPS, PersistentDataType.INTEGER, value)

var LivingEntity.statToys: Int
  get() = persistentDataContainer.get(BigWolfKeys.STAT_TOYS, PersistentDataType.INTEGER) ?: 0
  set(value) = persistentDataContainer.set(BigWolfKeys.STAT_TOYS, PersistentDataType.INTEGER, value)

var LivingEntity.statBrushes: Int
  get() = persistentDataContainer.get(BigWolfKeys.STAT_BRUSHES, PersistentDataType.INTEGER) ?: 0
  set(value) =
      persistentDataContainer.set(BigWolfKeys.STAT_BRUSHES, PersistentDataType.INTEGER, value)

var LivingEntity.statTreats: Int
  get() = persistentDataContainer.get(BigWolfKeys.STAT_TREATS, PersistentDataType.INTEGER) ?: 0
  set(value) =
      persistentDataContainer.set(BigWolfKeys.STAT_TREATS, PersistentDataType.INTEGER, value)

// PCDバージョン（v2で追加）
var LivingEntity.pcdVersion: Int
  get() = persistentDataContainer.get(BigWolfKeys.PCD_VERSION, PersistentDataType.INTEGER) ?: 1
  set(value) =
      persistentDataContainer.set(BigWolfKeys.PCD_VERSION, PersistentDataType.INTEGER, value)

// 譲渡関連（v2で追加）
var LivingEntity.originalOwnerId: String?
  get() = persistentDataContainer.get(BigWolfKeys.ORIGINAL_OWNER, PersistentDataType.STRING)
  set(value) {
    if (value != null)
        persistentDataContainer.set(BigWolfKeys.ORIGINAL_OWNER, PersistentDataType.STRING, value)
  }

var LivingEntity.transferCount: Int
  get() = persistentDataContainer.get(BigWolfKeys.TRANSFER_COUNT, PersistentDataType.INTEGER) ?: 0
  set(value) =
      persistentDataContainer.set(BigWolfKeys.TRANSFER_COUNT, PersistentDataType.INTEGER, value)

// 交配関連（v2で追加）
var LivingEntity.parent1Id: String?
  get() = persistentDataContainer.get(BigWolfKeys.PARENT_1, PersistentDataType.STRING)
  set(value) {
    if (value != null)
        persistentDataContainer.set(BigWolfKeys.PARENT_1, PersistentDataType.STRING, value)
  }

var LivingEntity.parent2Id: String?
  get() = persistentDataContainer.get(BigWolfKeys.PARENT_2, PersistentDataType.STRING)
  set(value) {
    if (value != null)
        persistentDataContainer.set(BigWolfKeys.PARENT_2, PersistentDataType.STRING, value)
  }

var LivingEntity.generation: Int
  get() = persistentDataContainer.get(BigWolfKeys.GENERATION, PersistentDataType.INTEGER) ?: 1
  set(value) =
      persistentDataContainer.set(BigWolfKeys.GENERATION, PersistentDataType.INTEGER, value)

var LivingEntity.breedCount: Int
  get() = persistentDataContainer.get(BigWolfKeys.BREED_COUNT, PersistentDataType.INTEGER) ?: 0
  set(value) =
      persistentDataContainer.set(BigWolfKeys.BREED_COUNT, PersistentDataType.INTEGER, value)

// パーティクルアンロック（v2で追加）- カンマ区切りの文字列
// デフォルト: 0,1,2,3,4 (なし、電気、炎、青炎、ハート)
var LivingEntity.particleUnlocked: String
  get() =
      persistentDataContainer.get(BigWolfKeys.PARTICLE_UNLOCKED, PersistentDataType.STRING)
          ?: "0,1,2,3,4"
  set(value) =
      persistentDataContainer.set(BigWolfKeys.PARTICLE_UNLOCKED, PersistentDataType.STRING, value)

/** パーティクルがアンロック済みかチェック */
fun LivingEntity.isParticleUnlocked(particleId: Int): Boolean {
  return particleUnlocked.split(",").map { it.trim().toIntOrNull() ?: -1 }.contains(particleId)
}

/** パーティクルをアンロック */
fun LivingEntity.unlockParticle(particleId: Int) {
  val current =
      particleUnlocked
          .split(",")
          .map { it.trim().toIntOrNull() ?: -1 }
          .filter { it >= 0 }
          .toMutableSet()
  current.add(particleId)
  particleUnlocked = current.sorted().joinToString(",")
}

// 能力値補正（v2.1）
var LivingEntity.speedMultiplier: Double
  get() =
      persistentDataContainer.get(BigWolfKeys.SPEED_MULTIPLIER, PersistentDataType.DOUBLE) ?: 1.0
  set(value) =
      persistentDataContainer.set(BigWolfKeys.SPEED_MULTIPLIER, PersistentDataType.DOUBLE, value)

var LivingEntity.jumpMultiplier: Double
  get() = persistentDataContainer.get(BigWolfKeys.JUMP_MULTIPLIER, PersistentDataType.DOUBLE) ?: 1.0
  set(value) =
      persistentDataContainer.set(BigWolfKeys.JUMP_MULTIPLIER, PersistentDataType.DOUBLE, value)

// 性質（v3）: "typical" = 定型, "atypical" = 非定型
var LivingEntity.temperament: String
  get() =
      persistentDataContainer.get(BigWolfKeys.TEMPERAMENT, PersistentDataType.STRING) ?: "typical"
  set(value) =
      persistentDataContainer.set(BigWolfKeys.TEMPERAMENT, PersistentDataType.STRING, value)

/** このペットが非定型かどうかを判定 */
fun LivingEntity.isAtypical(): Boolean = temperament == "atypical"

fun String.containsDefaultPetMarker(): Boolean = this.contains("'s Big ") || this.contains("の大")

fun String.startsWithDefaultPetName(playerName: String): Boolean =
    this.startsWith("${playerName}'s Big ") || this.startsWith("${playerName}の大")

/** PCDのマイグレーション - 古いバージョンのデータを最新に更新 */
@Suppress("unused")
fun LivingEntity.migratePcdIfNeeded() {
  val version = pcdVersion
  if (version < BigWolfKeys.CURRENT_PCD_VERSION) {
    // v1 → v2 マイグレーション
    if (version < 2) {
      // originalOwnerが未設定なら現在のownerを設定
      if (originalOwnerId == null && ownerId != null) {
        originalOwnerId = ownerId
      }
      // transferCountが未設定なら0
      if (
          persistentDataContainer.get(BigWolfKeys.TRANSFER_COUNT, PersistentDataType.INTEGER) ==
              null
      ) {
        transferCount = 0
      }
      // particleUnlockedが未設定なら"0"（デフォルトパーティクルのみ）
      if (
          persistentDataContainer.get(BigWolfKeys.PARTICLE_UNLOCKED, PersistentDataType.STRING) ==
              null
      ) {
        particleUnlocked = "0"
      }
      // generationが未設定なら1（第1世代）
      if (persistentDataContainer.get(BigWolfKeys.GENERATION, PersistentDataType.INTEGER) == null) {
        generation = 1
      }
      // breedCountが未設定なら0
      if (
          persistentDataContainer.get(BigWolfKeys.BREED_COUNT, PersistentDataType.INTEGER) == null
      ) {
        breedCount = 0
      }
    }
    // 最新バージョンに更新
    pcdVersion = BigWolfKeys.CURRENT_PCD_VERSION
  }
}

object SpawnUtils {
  private const val MAX_CLEARANCE_SEARCH = 6

  /**
   * 通常のスポーンエッグと同じ挙動でスポーン位置を決定
   * - 基本的にクリックした位置をそのまま使用
   * - 固体ブロック内の場合のみ調整
   */
  fun findSafeSpawnLocation(base: Location): Location {
    val world = base.world ?: return base
    val loc = base.clone()

    // クリック位置のブロックが固体の場合のみ上に移動
    val block = world.getBlockAt(loc.blockX, loc.blockY, loc.blockZ)
    if (block.type.isSolid && !block.isPassable) {
      // 上に空間を探す
      for (i in 1..MAX_CLEARANCE_SEARCH) {
        val checkBlock = world.getBlockAt(loc.blockX, loc.blockY + i, loc.blockZ)
        if (checkBlock.isPassable || checkBlock.isLiquid) {
          loc.y = (loc.blockY + i).toDouble() + 0.01
          return loc
        }
      }
    }

    // そのままの位置を返す（水中、空中、地上すべてOK）
    return loc
  }

  /** 旧式の安全な地上スポーン位置を検索（後方互換性のため残す） */
  fun findSafeGroundLocation(base: Location): Location? {
    val world = base.world ?: return null
    val loc = base.clone()
    if (!ensureAirColumn(world, loc)) {
      @Suppress("unused")
      for (step in 1..MAX_CLEARANCE_SEARCH) {
        loc.y += 1.0
        if (ensureAirColumn(world, loc)) break
      }
      if (!ensureAirColumn(world, loc)) {
        return null
      }
    }
    var groundY = loc.blockY - 1
    var steps = 0
    while (steps < MAX_CLEARANCE_SEARCH) {
      val ground = world.getBlockAt(loc.blockX, groundY, loc.blockZ)
      if (ground.type.isSolid && !ground.isLiquid) {
        loc.y = groundY + 1.01
        return loc
      }
      groundY--
      steps++
    }
    return null
  }

  private fun ensureAirColumn(world: World, loc: Location): Boolean {
    for (offset in 0..1) {
      val block = world.getBlockAt(loc.blockX, loc.blockY + offset, loc.blockZ)
      if (!block.isPassable || block.isLiquid) {
        return false
      }
    }
    return true
  }
}
