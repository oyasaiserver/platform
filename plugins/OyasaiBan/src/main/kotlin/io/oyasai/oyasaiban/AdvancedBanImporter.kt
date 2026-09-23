package io.oyasai.oyasaiban

import java.util.UUID

data class ImportBatch(
    val active: List<PunishmentRecord>,
    val history: List<PunishmentRecord>,
    val activeCounts: Map<String, Int>,
    val historyCounts: Map<String, Int>,
    val unresolvedNames: List<String> = emptyList(),
)

private data class HsqldbRow(
    val columns: List<String>,
    val values: List<String?>,
)

object AdvancedBanImporter {
  private val insert =
      Regex(
          """^INSERT INTO (?:PUBLIC\.)?(PUNISHMENTS|PUNISHMENTHISTORY)\s*(?:\(([^)]+)\))?\s*VALUES\s*\(""",
          RegexOption.IGNORE_CASE,
      )
  private val delete =
      Regex(
          """^DELETE FROM (?:PUBLIC\.)?(PUNISHMENTS|PUNISHMENTHISTORY)\s+WHERE\s+(.+)$""",
          RegexOption.IGNORE_CASE,
      )
  private val deleteId = Regex("""\b\"?ID\"?\s*=\s*(\d+)""", RegexOption.IGNORE_CASE)
  private val sessionPrefix = Regex("""^/\*C\d+\*/\s*""", RegexOption.IGNORE_CASE)

  // AdvancedBan は UUID を取れなかったとき、UUID 列に小文字の名前を入れている。
  fun parse(
      script: String,
      log: String = "",
      resolveName: (String) -> UUID? = { null },
  ): ImportBatch {
    val activeRows = linkedMapOf<Long, HsqldbRow>()
    val historyRows = linkedMapOf<Long, HsqldbRow>()
    apply(script, activeRows, historyRows)
    apply(log, activeRows, historyRows)

    val activeCounts = linkedMapOf<String, Int>()
    val historyCounts = linkedMapOf<String, Int>()
    val unresolved = linkedSetOf<String>()
    fun convert(row: HsqldbRow, counts: MutableMap<String, Int>): PunishmentRecord? {
      val typeName = column(row, "PUNISHMENTTYPE", 5)?.normalizedType() ?: return null
      counts[typeName] = counts.getOrDefault(typeName, 0) + 1
      val type =
          when (typeName) {
            "BAN" -> PunishmentType.BAN
            "TEMP_BAN" -> PunishmentType.TEMP_BAN
            else -> return null
          }
      val rawUuid = column(row, "UUID", 2) ?: return null
      val uuid =
          parseUuid(rawUuid)
              ?: resolveName(rawUuid.lowercase())
              ?: run {
                unresolved += rawUuid.lowercase()
                return null
              }
      val start = column(row, "START", 6)?.toLongOrNull() ?: return null
      val endRaw = column(row, "END", 7)?.toLongOrNull()
      return PunishmentRecord(
          uuid = uuid,
          name = column(row, "NAME", 1).orEmpty().ifBlank { "unknown" },
          type = type,
          reason = column(row, "REASON", 3).orEmpty().ifBlank { "none" },
          operator = column(row, "OPERATOR", 4).orEmpty().ifBlank { "CONSOLE" },
          start = start,
          end = endRaw?.takeIf { it >= 0 },
      )
    }

    return ImportBatch(
        activeRows.values.mapNotNull { convert(it, activeCounts) },
        historyRows.values.mapNotNull { convert(it, historyCounts) },
        activeCounts,
        historyCounts,
        unresolved.toList(),
    )
  }

  private fun apply(
      sql: String,
      activeRows: MutableMap<Long, HsqldbRow>,
      historyRows: MutableMap<Long, HsqldbRow>,
  ) {
    for (rawLine in sql.lineSequence()) {
      val line = rawLine.trim().replaceFirst(sessionPrefix, "")
      insert.find(line)?.let { match ->
        val columns =
            match.groupValues[2]
                .takeIf { it.isNotBlank() }
                ?.split(',')
                ?.map { it.trim().trim('"').uppercase() }
                .orEmpty()
        val values = extractValues(line)?.let(::parseValues) ?: return@let
        val row = HsqldbRow(columns, values)
        val id = column(row, "ID", 0)?.toLongOrNull() ?: return@let
        table(match.groupValues[1], activeRows, historyRows)[id] = row
        continue
      }
      delete.find(line)?.let { match ->
        val id =
            deleteId.find(match.groupValues[2])?.groupValues?.get(1)?.toLongOrNull() ?: return@let
        table(match.groupValues[1], activeRows, historyRows).remove(id)
      }
    }
  }

  private fun table(
      name: String,
      activeRows: MutableMap<Long, HsqldbRow>,
      historyRows: MutableMap<Long, HsqldbRow>,
  ): MutableMap<Long, HsqldbRow> =
      if (name.equals("PUNISHMENTS", ignoreCase = true)) activeRows else historyRows

  internal fun parseUuid(raw: String): UUID? {
    val value = raw.trim()
    return runCatching { UUID.fromString(value) }
        .getOrElse {
          if (value.matches(Regex("[0-9a-fA-F]{32}"))) {
            runCatching {
                  UUID.fromString(
                      "${value.substring(0, 8)}-${value.substring(8, 12)}-${value.substring(12, 16)}-${value.substring(16, 20)}-${value.substring(20)}"
                  )
                }
                .getOrNull()
          } else null
        }
  }

  private fun String.normalizedType(): String = uppercase().replace('-', '_')

  private fun column(row: HsqldbRow, name: String, defaultIndex: Int): String? {
    val index = if (row.columns.isEmpty()) defaultIndex else row.columns.indexOf(name)
    return row.values.getOrNull(index)
  }

  private fun extractValues(line: String): String? {
    val open = line.indexOf('(', line.indexOf("VALUES", ignoreCase = true))
    if (open < 0) return null
    var depth = 0
    var quoted = false
    var index = open
    while (index < line.length) {
      val char = line[index]
      if (quoted && char == '\'' && line.getOrNull(index + 1) == '\'') {
        index += 2
        continue
      }
      if (char == '\'') quoted = !quoted
      if (!quoted) {
        if (char == '(') depth++
        if (char == ')' && --depth == 0) return line.substring(open + 1, index)
      }
      index++
    }
    return null
  }

  private fun parseValues(raw: String): List<String?> {
    val result = mutableListOf<String?>()
    var index = 0
    while (index < raw.length) {
      when {
        raw[index].isWhitespace() || raw[index] == ',' -> index++
        raw[index] == '\'' -> {
          val value = StringBuilder()
          index++
          while (index < raw.length) {
            if (raw[index] == '\'' && raw.getOrNull(index + 1) == '\'') {
              value.append('\'')
              index += 2
            } else if (raw[index] == '\'') {
              index++
              break
            } else value.append(raw[index++])
          }
          result += value.toString().decodeHsqldbEscapes()
        }
        raw.regionMatches(index, "NULL", 0, 4, ignoreCase = true) -> {
          result += null
          index += 4
        }
        else -> {
          val start = index
          while (index < raw.length && raw[index] != ',') index++
          result += raw.substring(start, index).trim()
        }
      }
    }
    return result
  }

  // HSQLDB の .script は ASCII 以外を \uXXXX で書き出す（\ 自体も \u005c になる）。
  internal fun String.decodeHsqldbEscapes(): String =
      replace(Regex("""\\u([0-9a-fA-F]{4})""")) { it.groupValues[1].toInt(16).toChar().toString() }
}
