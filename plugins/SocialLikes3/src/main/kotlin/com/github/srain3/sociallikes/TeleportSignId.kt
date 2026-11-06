package com.github.srain3.sociallikes

/** 未マークのIDは看板の文字と照合し、特定できなければ従来の行き先を維持する。 */
internal fun resolveTeleportSignId(
    rawId: Int,
    generation: Int?,
    placedCommand: String?,
    migrate: (Int) -> Int,
    titleLine: String = "",
    ownerLine: String = "",
    buildingText: (Int) -> Pair<String, String?>? = { null },
): Int {
  if (generation == Events.CURRENT_ID_GENERATION) return rawId
  val commandId =
      placedCommand?.let {
        Regex("""/(?:sociallikes3:)?sltp (-?\d+)""")
            .matchEntire(it)
            ?.groupValues
            ?.get(1)
            ?.toIntOrNull()
      }
  val migratedId = migrate(rawId)
  val scores =
      listOfNotNull(commandId, rawId, migratedId).distinct().map { id ->
        val text = buildingText(id)
        val score =
            if (text == null) 0
            else
                (if (titleLine.isNotBlank() && titleLine == "[${text.first}]") 1 else 0) +
                    (if (ownerLine.isNotBlank() && ownerLine == text.second) 1 else 0)
        id to score
      }
  val bestScore = scores.maxOf { it.second }
  return scores.singleOrNull { it.second == bestScore && bestScore > 0 }?.first
      ?: commandId
      ?: migratedId
}
