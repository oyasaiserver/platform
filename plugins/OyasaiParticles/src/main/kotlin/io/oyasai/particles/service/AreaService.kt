package io.oyasai.particles.service

import io.oyasai.particles.model.AreaIdValidator
import io.oyasai.particles.model.AreaShape
import io.oyasai.particles.model.HistoryAction
import io.oyasai.particles.model.HistoryEntry
import io.oyasai.particles.model.ParticleArea
import io.oyasai.particles.model.ParticleEffectConfig
import io.oyasai.particles.storage.AreaRepository
import java.util.UUID
import java.util.concurrent.ConcurrentHashMap

sealed interface RollbackResult {
  data class Success(val entry: HistoryEntry, val restoredArea: ParticleArea?) : RollbackResult

  data object NotFound : RollbackResult

  data object NothingToChange : RollbackResult
}

class AreaService(
    private val repository: AreaRepository,
    private val maxHistoryEntries: Int = 500,
) {
  private val areas = LinkedHashMap<String, ParticleArea>()
  private val history = ArrayDeque<HistoryEntry>()
  private val disabledPlayers = ConcurrentHashMap.newKeySet<UUID>()
  private var nextHistoryId: Long = 1L

  fun load() {
    val state = repository.load()
    areas.clear()
    for (area in state.areas) {
      areas[area.id] = area
    }
    history.clear()
    for (entry in state.history) {
      history.addLast(entry)
    }
    trimHistory()
    disabledPlayers.clear()
    disabledPlayers.addAll(state.disabledPlayers)
    nextHistoryId = state.nextHistoryId
  }

  fun saveAll() {
    repository.saveAreas(areas.values.toList())
    repository.saveHistory(history.toList(), nextHistoryId)
    repository.savePreferences(disabledPlayers.toSet())
  }

  fun isVisualEnabled(playerUuid: UUID): Boolean = !disabledPlayers.contains(playerUuid)

  fun toggleVisual(playerUuid: UUID): Boolean {
    val nowEnabled =
        if (disabledPlayers.remove(playerUuid)) {
          true
        } else {
          disabledPlayers.add(playerUuid)
          false
        }
    repository.savePreferences(disabledPlayers.toSet())
    return nowEnabled
  }

  fun allAreas(): List<ParticleArea> = areas.values.toList()

  fun areasInWorld(worldName: String): List<ParticleArea> =
      areas.values.filter { it.worldName == worldName }

  fun areasOwnedBy(ownerUuid: UUID): List<ParticleArea> =
      areas.values.filter { it.ownerUuid == ownerUuid }

  fun countAreasOwnedBy(ownerUuid: UUID): Int = areas.values.count { it.ownerUuid == ownerUuid }

  fun findById(id: String): ParticleArea? = areas[id]

  fun findByIdOrName(query: String): ParticleArea? =
      areas[query] ?: areas.values.firstOrNull { it.name.equals(query, ignoreCase = true) }

  fun generateItemAreaId(): String {
    while (true) {
      val candidate = "item_${UUID.randomUUID().toString().replace("-", "").take(8)}"
      if (!areas.containsKey(candidate)) return candidate
    }
  }

  fun createArea(
      id: String,
      name: String,
      worldName: String,
      ownerUuid: UUID,
      ownerName: String,
      shape: AreaShape,
      effect: ParticleEffectConfig,
      createdFromItem: Boolean,
      actorUuid: UUID = ownerUuid,
      actorName: String = ownerName,
  ): ParticleArea {
    val safeId =
        AreaIdValidator.sanitizeOrNull(id) ?: throw IllegalArgumentException("Invalid area id: $id")
    require(!areas.containsKey(safeId)) { "Area id already exists: $safeId" }

    val now = System.currentTimeMillis()
    val created =
        ParticleArea(
            id = safeId,
            name = name,
            worldName = worldName,
            ownerUuid = ownerUuid,
            ownerName = ownerName,
            shape = shape,
            effect = effect.normalized(),
            createdFromItem = createdFromItem,
            createdAt = now,
            updatedAt = now,
        )
    areas[safeId] = created
    appendHistory(
        actorUuid = actorUuid,
        actorName = actorName,
        action = HistoryAction.CREATE,
        areaId = created.id,
        areaName = created.name,
        before = null,
        after = created,
    )
    persistAreasAndHistory()
    return created
  }

  fun updateArea(
      id: String,
      actorUuid: UUID,
      actorName: String,
      transform: (ParticleArea) -> ParticleArea,
  ): ParticleArea? {
    val current = areas[id] ?: return null
    val updated =
        transform(current)
            .copy(
                id = current.id,
                updatedAt = System.currentTimeMillis(),
            )
            .let { it.copy(effect = it.effect.normalized()) }
    areas[id] = updated
    appendHistory(
        actorUuid = actorUuid,
        actorName = actorName,
        action = HistoryAction.UPDATE,
        areaId = updated.id,
        areaName = updated.name,
        before = current,
        after = updated,
    )
    persistAreasAndHistory()
    return updated
  }

  fun deleteArea(
      id: String,
      actorUuid: UUID,
      actorName: String,
      action: HistoryAction = HistoryAction.DELETE,
  ): ParticleArea? {
    val removed = areas.remove(id) ?: return null
    appendHistory(
        actorUuid = actorUuid,
        actorName = actorName,
        action = action,
        areaId = removed.id,
        areaName = removed.name,
        before = removed,
        after = null,
    )
    persistAreasAndHistory()
    return removed
  }

  fun reclaimArea(id: String, actorUuid: UUID, actorName: String): ParticleArea? =
      deleteArea(id, actorUuid, actorName, HistoryAction.RECLAIM)

  fun listHistory(areaQuery: String? = null, limit: Int = 20): List<HistoryEntry> {
    val safeLimit = limit.coerceIn(1, 100)
    val filtered =
        if (areaQuery.isNullOrBlank()) {
          history.toList()
        } else {
          history.filter {
            it.areaId.equals(areaQuery, ignoreCase = true) ||
                it.areaName.equals(areaQuery, ignoreCase = true)
          }
        }
    return filtered.asReversed().take(safeLimit)
  }

  fun rollback(historyId: Long, actorUuid: UUID, actorName: String): RollbackResult {
    val targetEntry = history.firstOrNull { it.id == historyId } ?: return RollbackResult.NotFound
    val areaId = targetEntry.areaId
    val current = areas[areaId]
    val targetBefore = targetEntry.before

    if (current == targetBefore) {
      return RollbackResult.NothingToChange
    }

    val restored =
        if (targetBefore == null) {
          areas.remove(areaId)
          null
        } else {
          val copy = targetBefore.copy(updatedAt = System.currentTimeMillis())
          areas[areaId] = copy
          copy
        }

    val rollbackEntry =
        appendHistory(
            actorUuid = actorUuid,
            actorName = actorName,
            action = HistoryAction.ROLLBACK,
            areaId = areaId,
            areaName = restored?.name ?: targetEntry.areaName,
            before = current,
            after = restored,
        )
    persistAreasAndHistory()
    return RollbackResult.Success(rollbackEntry, restored)
  }

  private fun appendHistory(
      actorUuid: UUID,
      actorName: String,
      action: HistoryAction,
      areaId: String,
      areaName: String,
      before: ParticleArea?,
      after: ParticleArea?,
  ): HistoryEntry {
    val entry =
        HistoryEntry(
            id = nextHistoryId++,
            timestamp = System.currentTimeMillis(),
            actorUuid = actorUuid,
            actorName = actorName,
            action = action,
            areaId = areaId,
            areaName = areaName,
            before = before,
            after = after,
        )
    history.addLast(entry)
    trimHistory()
    return entry
  }

  private fun trimHistory() {
    val cap = maxHistoryEntries.coerceAtLeast(1)
    while (history.size > cap) {
      history.removeFirst()
    }
  }

  private fun persistAreasAndHistory() {
    repository.saveAreas(areas.values.toList())
    repository.saveHistory(history.toList(), nextHistoryId)
  }
}
