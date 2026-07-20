@file:Suppress("DEPRECATION")

package me.marzipan.OyasaiPets

import java.util.UUID
import java.util.concurrent.ConcurrentHashMap
import net.kyori.adventure.text.format.NamedTextColor.*
import org.bukkit.*
import org.bukkit.command.*
import org.bukkit.entity.*
import org.bukkit.inventory.*

/** 召喚中のペットエンティティを一元管理するグローバルレジストリ。 全ワールドスキャン (world.livingEntities) の代替として使用する。 */
object ActivePetRegistry {
  // entityUUID → LivingEntity
  private val byEntityId = ConcurrentHashMap<UUID, LivingEntity>()
  // petId (PDC文字列) → entityUUID
  private val byPetId = ConcurrentHashMap<String, UUID>()
  // PDC read を毎秒省くためのインメモリキャッシュ
  private val cachedIsAtypical = ConcurrentHashMap<UUID, Boolean>()
  private val cachedOwnerId = ConcurrentHashMap<UUID, String>()

  /** ペット召喚時に登録 */
  fun register(entity: LivingEntity) {
    val petId = entity.petId ?: return
    byEntityId[entity.uniqueId] = entity
    byPetId[petId] = entity.uniqueId
    cachedIsAtypical[entity.uniqueId] = entity.isAtypical()
    cachedOwnerId[entity.uniqueId] = entity.ownerId ?: ""
  }

  /** ペット収納・死亡・放棄時に登録解除 */
  fun unregister(entityUuid: UUID) {
    val entity = byEntityId.remove(entityUuid) ?: return
    entity.petId?.let { byPetId.remove(it) }
    cachedIsAtypical.remove(entityUuid)
    cachedOwnerId.remove(entityUuid)
  }

  /** キャッシュから isAtypical を取得（PDC 不要） */
  fun isAtypical(entityUuid: UUID): Boolean = cachedIsAtypical[entityUuid] ?: false

  /** キャッシュから ownerId を取得（PDC 不要） */
  fun getOwnerId(entityUuid: UUID): String? = cachedOwnerId[entityUuid]?.ifBlank { null }

  /** petId でエンティティを検索（無効ならクリーンアップして null を返す） */
  fun findByPetId(petId: String): LivingEntity? {
    val uuid = byPetId[petId] ?: return null
    val entity = byEntityId[uuid]
    if (entity == null || !entity.isValid) {
      byEntityId.remove(uuid)
      byPetId.remove(petId)
      return null
    }
    return entity
  }

  /** 指定オーナーのペット一覧（無効エンティティを遅延クリーンアップ） */
  fun getByOwner(ownerUuidStr: String): List<LivingEntity> {
    val result = mutableListOf<LivingEntity>()
    val iter = byEntityId.entries.iterator()
    while (iter.hasNext()) {
      val entry = iter.next()
      val entity = entry.value
      if (!entity.isValid) {
        iter.remove()
        entity.petId?.let { byPetId.remove(it) }
        cachedIsAtypical.remove(entry.key)
        cachedOwnerId.remove(entry.key)
        continue
      }
      if (cachedOwnerId[entry.key] == ownerUuidStr) result.add(entity)
    }
    return result
  }

  /** 指定オーナーのアクティブペット数 */
  fun countByOwner(ownerUuidStr: String): Int = getByOwner(ownerUuidStr).size

  /** 全登録エンティティ一覧（無効エンティティを遅延クリーンアップ） */
  fun getAll(): List<LivingEntity> {
    val result = mutableListOf<LivingEntity>()
    val iter = byEntityId.entries.iterator()
    while (iter.hasNext()) {
      val entry = iter.next()
      val entity = entry.value
      if (!entity.isValid) {
        iter.remove()
        entity.petId?.let { byPetId.remove(it) }
        continue
      }
      result.add(entity)
    }
    return result
  }

  /** サーバー停止時やテスト用にリセット */
  fun clear() {
    byEntityId.clear()
    byPetId.clear()
    cachedIsAtypical.clear()
    cachedOwnerId.clear()
  }
}
