package io.oyasai.particles.storage

import io.oyasai.particles.model.HistoryEntry
import io.oyasai.particles.model.ParticleArea
import java.util.UUID

data class PersistedState(
    val areas: List<ParticleArea>,
    val history: List<HistoryEntry>,
    val disabledPlayers: Set<UUID>,
    val nextHistoryId: Long,
)

interface AreaRepository {
  fun load(): PersistedState

  fun saveAreas(areas: List<ParticleArea>)

  fun saveHistory(history: List<HistoryEntry>, nextHistoryId: Long)

  fun savePreferences(disabledPlayers: Set<UUID>)
}
