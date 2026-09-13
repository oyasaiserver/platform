package io.oyasai.oyasaiAdminTools.punishment

import java.util.UUID

data class ImportedPunishment(
    val uuid: UUID,
    val name: String,
    val type: PunishmentType,
    val reason: String,
    val operator: String,
    val start: Long,
    val end: Long?,
    val active: Boolean,
)

data class ImportBatch(
    val history: List<ImportedPunishment>,
    val active: List<ImportedPunishment>,
)

object AdvancedBanImporter {
  private val INSERT =
      Regex(
          """^INSERT INTO (?:PUBLIC\.)?(PUNISHMENTS|PUNISHMENTHISTORY)\s*(?:\(([^)]+)\))?\s*VALUES\s*\(""",
          RegexOption.IGNORE_CASE,
      )

  fun parseHsqldbScript(script: String): ImportBatch {
    val history = mutableListOf<ImportedPunishment>()
    val active = mutableListOf<ImportedPunishment>()
    for (rawLine in script.lineSequence()) {
      val line = rawLine.trim()
      val match = INSERT.find(line) ?: continue
      val table = match.groupValues[1].uppercase()
      val columns =
          match.groupValues[2]
              .takeIf { it.isNotBlank() }
              ?.split(",")
              ?.map { it.trim().uppercase() }
              .orEmpty()
      val valuesRaw = extractValuesClause(line) ?: continue
      val values = parseSqlValues(valuesRaw)
      val row = toImported(columns, values, activeTable = table == "PUNISHMENTS") ?: continue
      if (table == "PUNISHMENTS") active.add(row) else history.add(row)
    }
    return ImportBatch(history = history, active = active)
  }

  fun parseCsv(text: String): List<ImportedPunishment> {
    val lines = text.lineSequence().map { it.trim() }.filter { it.isNotEmpty() }.toList()
    if (lines.isEmpty()) return emptyList()
    val header = splitCsv(lines.first()).map { it.trim().lowercase() }
    return lines.drop(1).mapNotNull { line ->
      val cols = splitCsv(line)
      val map = header.zip(cols).toMap()
      val type =
          PunishmentType.fromAdvancedBan(map["type"] ?: return@mapNotNull null)
              ?: return@mapNotNull null
      val uuid = parseUuid(map["uuid"] ?: return@mapNotNull null) ?: return@mapNotNull null
      val endRaw = map["end"].orEmpty()
      ImportedPunishment(
          uuid = uuid,
          name = map["name"].orEmpty().ifBlank { "unknown" },
          type = type,
          reason = map["reason"].orEmpty().ifBlank { "none" },
          operator = map["operator"].orEmpty().ifBlank { "CONSOLE" },
          start = map["start"]?.toLongOrNull() ?: return@mapNotNull null,
          end =
              if (endRaw.isBlank() || endRaw == "-1" || endRaw.equals("null", true)) null
              else endRaw.toLongOrNull(),
          active = map["active"]?.equals("true", true) == true || map["active"] == "1",
      )
    }
  }

  internal fun extractValuesClause(line: String): String? {
    val idx = line.indexOf("VALUES", ignoreCase = true)
    if (idx < 0) return null
    val open = line.indexOf('(', idx)
    if (open < 0) return null
    var depth = 0
    var inQuote = false
    var i = open
    while (i < line.length) {
      val c = line[i]
      if (inQuote) {
        if (c == '\'' && i + 1 < line.length && line[i + 1] == '\'') {
          i += 2
          continue
        }
        if (c == '\'') inQuote = false
      } else {
        when (c) {
          '\'' -> inQuote = true
          '(' -> depth++
          ')' -> {
            depth--
            if (depth == 0) return line.substring(open + 1, i)
          }
        }
      }
      i++
    }
    return null
  }

  internal fun parseSqlValues(raw: String): List<String?> {
    val result = mutableListOf<String?>()
    var i = 0
    while (i < raw.length) {
      val c = raw[i]
      when {
        c == ' ' || c == '\t' || c == ',' -> i++
        c == '\'' -> {
          val sb = StringBuilder()
          i++
          while (i < raw.length) {
            if (raw[i] == '\'' && i + 1 < raw.length && raw[i + 1] == '\'') {
              sb.append('\'')
              i += 2
            } else if (raw[i] == '\'') {
              i++
              break
            } else {
              sb.append(raw[i])
              i++
            }
          }
          result.add(sb.toString())
        }
        raw.regionMatches(i, "NULL", 0, 4, ignoreCase = true) -> {
          result.add(null)
          i += 4
        }
        else -> {
          val start = i
          while (i < raw.length && raw[i] != ',') i++
          result.add(raw.substring(start, i).trim())
        }
      }
    }
    return result
  }

  private fun toImported(
      columns: List<String>,
      values: List<String?>,
      activeTable: Boolean,
  ): ImportedPunishment? {
    fun col(name: String, index: Int): String? {
      val idx = if (columns.isEmpty()) index else columns.indexOf(name)
      if (idx < 0 || idx >= values.size) return null
      return values[idx]
    }

    val type =
        PunishmentType.fromAdvancedBan(col("PUNISHMENTTYPE", 5) ?: return null) ?: return null
    val uuid = parseUuid(col("UUID", 2) ?: return null) ?: return null
    val endRaw = col("END", 7)?.toLongOrNull()
    return ImportedPunishment(
        uuid = uuid,
        name = col("NAME", 1).orEmpty().ifBlank { "unknown" },
        type = type,
        reason = col("REASON", 3).orEmpty().ifBlank { "none" },
        operator = col("OPERATOR", 4).orEmpty().ifBlank { "CONSOLE" },
        start = col("START", 6)?.toLongOrNull() ?: return null,
        end = if (endRaw == null || endRaw < 0) null else endRaw,
        active = activeTable,
    )
  }

  internal fun parseUuid(raw: String): UUID? {
    val value = raw.trim()
    return try {
      UUID.fromString(value)
    } catch (_: Exception) {
      if (value.length == 32 && value.all { it.isLetterOrDigit() }) {
        val dashed =
            "${value.substring(0, 8)}-${value.substring(8, 12)}-${value.substring(12, 16)}-${value.substring(16, 20)}-${value.substring(20)}"
        runCatching { UUID.fromString(dashed) }.getOrNull()
      } else {
        null
      }
    }
  }

  private fun splitCsv(line: String): List<String> {
    val result = mutableListOf<String>()
    val sb = StringBuilder()
    var inQuote = false
    var i = 0
    while (i < line.length) {
      val c = line[i]
      when {
        c == '"' && inQuote && i + 1 < line.length && line[i + 1] == '"' -> {
          sb.append('"')
          i += 2
        }
        c == '"' -> {
          inQuote = !inQuote
          i++
        }
        c == ',' && !inQuote -> {
          result.add(sb.toString())
          sb.clear()
          i++
        }
        else -> {
          sb.append(c)
          i++
        }
      }
    }
    result.add(sb.toString())
    return result
  }
}
