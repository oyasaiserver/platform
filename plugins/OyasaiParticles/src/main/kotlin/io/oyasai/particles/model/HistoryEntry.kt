package io.oyasai.particles.model

import java.util.UUID

enum class HistoryAction(val label: String) {
  CREATE("作成"),
  UPDATE("変更"),
  DELETE("削除"),
  RECLAIM("アイテム回収"),
  ROLLBACK("ロールバック");

  companion object {
    fun fromKey(raw: String?): HistoryAction =
        entries.firstOrNull { it.name.equals(raw, ignoreCase = true) } ?: UPDATE
  }
}

data class HistoryEntry(
    val id: Long,
    val timestamp: Long,
    val actorUuid: UUID,
    val actorName: String,
    val action: HistoryAction,
    val areaId: String,
    val areaName: String,
    val before: ParticleArea?,
    val after: ParticleArea?,
)
