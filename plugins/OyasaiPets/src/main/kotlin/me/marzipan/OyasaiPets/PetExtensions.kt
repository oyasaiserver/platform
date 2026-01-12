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

/** このエンティティがBigWolfのペットかどうかを判定 */
fun LivingEntity.isPet(): Boolean = petId != null && ownerId != null

/** 指定されたプレイヤーがこのペットの飼い主かどうかを判定 */
fun LivingEntity.isOwnedBy(playerId: String): Boolean = ownerId == playerId
