package me.marzipan.OyasaiPets

import org.bukkit.entity.LivingEntity
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

var LivingEntity.isSilentMode: Boolean
  get() =
      (persistentDataContainer.get(BigWolfKeys.SILENT, PersistentDataType.BYTE) ?: 0).toInt() == 1
  set(value) =
      persistentDataContainer.set(BigWolfKeys.SILENT, PersistentDataType.BYTE, if (value) 1 else 0)

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
          BigWolfKeys.HOVER_STATE, PersistentDataType.BYTE, if (value) 1 else 0)

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
  get() = persistentDataContainer.get(BigWolfKeys.PARTICLE_UNLOCKED, PersistentDataType.STRING) ?: "0,1,2,3,4"
  set(value) =
      persistentDataContainer.set(BigWolfKeys.PARTICLE_UNLOCKED, PersistentDataType.STRING, value)

/** パーティクルがアンロック済みかチェック */
fun LivingEntity.isParticleUnlocked(particleId: Int): Boolean {
  return particleUnlocked.split(",").map { it.trim().toIntOrNull() ?: -1 }.contains(particleId)
}

/** パーティクルをアンロック */
fun LivingEntity.unlockParticle(particleId: Int) {
  val current = particleUnlocked.split(",").map { it.trim().toIntOrNull() ?: -1 }.filter { it >= 0 }.toMutableSet()
  current.add(particleId)
  particleUnlocked = current.sorted().joinToString(",")
}

// 能力値補正（v2.1）
var LivingEntity.speedMultiplier: Double
  get() = persistentDataContainer.get(BigWolfKeys.SPEED_MULTIPLIER, PersistentDataType.DOUBLE) ?: 1.0
  set(value) = persistentDataContainer.set(BigWolfKeys.SPEED_MULTIPLIER, PersistentDataType.DOUBLE, value)

var LivingEntity.jumpMultiplier: Double
  get() = persistentDataContainer.get(BigWolfKeys.JUMP_MULTIPLIER, PersistentDataType.DOUBLE) ?: 1.0
  set(value) = persistentDataContainer.set(BigWolfKeys.JUMP_MULTIPLIER, PersistentDataType.DOUBLE, value)

/** このエンティティがBigWolfのペットかどうかを判定 */
fun LivingEntity.isPet(): Boolean = petId != null && ownerId != null

/** 指定されたプレイヤーがこのペットの飼い主かどうかを判定 */
fun LivingEntity.isOwnedBy(playerId: String): Boolean = ownerId == playerId

/** PCDのマイグレーション - 古いバージョンのデータを最新に更新 */
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
      if (persistentDataContainer.get(BigWolfKeys.TRANSFER_COUNT, PersistentDataType.INTEGER) == null) {
        transferCount = 0
      }
      // particleUnlockedが未設定なら"0"（デフォルトパーティクルのみ）
      if (persistentDataContainer.get(BigWolfKeys.PARTICLE_UNLOCKED, PersistentDataType.STRING) == null) {
        particleUnlocked = "0"
      }
      // generationが未設定なら1（第1世代）
      if (persistentDataContainer.get(BigWolfKeys.GENERATION, PersistentDataType.INTEGER) == null) {
        generation = 1
      }
      // breedCountが未設定なら0
      if (persistentDataContainer.get(BigWolfKeys.BREED_COUNT, PersistentDataType.INTEGER) == null) {
        breedCount = 0
      }
    }
    // 最新バージョンに更新
    pcdVersion = BigWolfKeys.CURRENT_PCD_VERSION
  }
}

