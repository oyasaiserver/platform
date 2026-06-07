package io.oyasai.oyasaiAdminTools.utils

/** Utility for creating CSV formatted strings safely. */
object CSVUtils {

  /**
   * Converts a list of headers and a list of rows into a CSV string. Handles escaping of quotes and
   * joins fields with commas.
   */
  fun createCsv(headers: List<String>, rows: List<List<String>>): String {
    val sb = StringBuilder()

    // Append Header
    sb.append(formatRow(headers)).append("\n")

    // Append Rows
    rows.forEach { row -> sb.append(formatRow(row)).append("\n") }

    return sb.toString()
  }

  private fun formatRow(row: List<String>): String {
    return row.joinToString(",") { field -> "\"${field.replace("\"", "\"\"")}\"" }
  }
}
