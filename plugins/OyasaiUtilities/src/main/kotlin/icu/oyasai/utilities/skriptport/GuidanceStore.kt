package icu.oyasai.utilities.skriptport

import icu.oyasai.utilities.storage.transaction
import java.io.File
import java.nio.ByteBuffer
import java.nio.charset.CodingErrorAction
import java.sql.Connection
import java.sql.DriverManager
import java.util.HexFormat
import java.util.Locale
import java.util.UUID

internal data class GuidanceRecord(val guide: String?, val name: String?, val at: Long?)

internal data class GuidanceImport(
    val clicked: Set<Pair<UUID, String>>,
    val guides: Map<UUID, String>,
    val names: Map<UUID, String>,
    val dates: Map<UUID, Long>,
)

// 一時的な Skript CSV 取り込み。本番で全件の SQLite 取り込み済みを確認したら、
// readGuidanceCsv と importLegacy、および enable 内の呼び出しを撤去する。
internal fun readGuidanceCsv(file: File): GuidanceImport {
  val clicked = linkedSetOf<Pair<UUID, String>>()
  val guides = linkedMapOf<UUID, String>()
  val names = linkedMapOf<UUID, String>()
  val dates = linkedMapOf<UUID, Long>()
  file.forEachLine { line ->
    if (line.isBlank() || line.trimStart().startsWith("#")) return@forEachLine
    val row = guidanceCsvRow(line)
    val key = row.first().split("::", limit = 4)
    if (
        key.size < 3 ||
            key[0] != "guide" ||
            key[1] !in setOf("clicked", "guidedby", "guidedbyname", "guidedat")
    )
        return@forEachLine
    require(row.size == 3) { "Invalid guidance CSV column count" }
    val uuid = UUID.fromString(key[2])
    val type = row[1].trim()
    val bytes = HexFormat.of().parseHex(row[2].trim())
    when (key[1]) {
      "clicked" -> {
        require(key.size == 4 && type == "boolean" && bytes.size == 1 && bytes[0].toInt() in 0..1)
        // Skript は true/false ではなく「変数が set か」で再クリックを判定する。
        require(clicked.add(uuid to key[3])) { "Duplicate clicked variable" }
      }
      "guidedat" -> {
        require(key.size == 3 && type == "date" && bytes.size == 20)
        // Yggdrasil: 1 field, UTF-8 field name 'timestamp', long tag 04, big-endian millis.
        require(
            bytes
                .copyOfRange(0, 12)
                .contentEquals(HexFormat.of().parseHex("810974696d657374616d7004"))
        )
        require(dates.put(uuid, ByteBuffer.wrap(bytes, 12, 8).long) == null)
      }
      else -> {
        require(key.size == 3 && type == "string" && bytes.size >= 2)
        // Yggdrasil の短い UTF-8 string: 上位ビット付き 2 byte のバイト長 + UTF-8。
        val length = ByteBuffer.wrap(bytes, 0, 2).short.toInt() and 0xffff
        require(length and 0x8000 != 0 && length and 0x7fff == bytes.size - 2)
        val value =
            Charsets.UTF_8.newDecoder()
                .onMalformedInput(CodingErrorAction.REPORT)
                .onUnmappableCharacter(CodingErrorAction.REPORT)
                .decode(ByteBuffer.wrap(bytes, 2, bytes.size - 2))
                .toString()
        if (key[1] == "guidedby") {
          UUID.fromString(value)
          require(guides.put(uuid, value) == null)
        } else require(names.put(uuid, value) == null)
      }
    }
  }
  return GuidanceImport(clicked, guides, names, dates)
}

internal fun guidanceCsvRow(line: String): List<String> {
  val fields = mutableListOf<String>()
  val field = StringBuilder()
  var quoted = false
  var index = 0
  while (index < line.length) {
    val char = line[index++]
    when {
      char == '"' && quoted && index < line.length && line[index] == '"' -> {
        field.append('"')
        index++
      }
      char == '"' -> quoted = !quoted
      char == ',' && !quoted -> {
        fields.add(field.toString().trim())
        field.setLength(0)
      }
      else -> field.append(char)
    }
  }
  require(!quoted) { "Unclosed guidance CSV quote" }
  fields.add(field.toString().trim())
  return fields
}

internal class GuidanceStore(private val file: File) : AutoCloseable {
  private lateinit var connection: Connection

  fun open() {
    Class.forName("org.sqlite.JDBC")
    file.parentFile?.mkdirs()
    connection = DriverManager.getConnection("jdbc:sqlite:${file.absolutePath}")
    connection.createStatement().use {
      it.execute("PRAGMA busy_timeout=5000")
      it.execute(
          "CREATE TABLE IF NOT EXISTS guide_clicked (uuid TEXT NOT NULL, sign_id TEXT NOT NULL, PRIMARY KEY(uuid, sign_id))"
      )
      it.execute(
          "CREATE TABLE IF NOT EXISTS guide_records (uuid TEXT PRIMARY KEY, guide TEXT, name TEXT, at INTEGER)"
      )
      it.execute("CREATE TABLE IF NOT EXISTS guide_import (done INTEGER NOT NULL)")
    }
  }

  fun canImport(): Boolean =
      connection.createStatement().use {
        it.executeQuery(
                "SELECT (SELECT COUNT(*) FROM guide_clicked) + (SELECT COUNT(*) FROM guide_records) + (SELECT COUNT(*) FROM guide_import)"
            )
            .use { rows ->
              rows.next()
              rows.getInt(1) == 0
            }
      }

  fun importLegacy(data: GuidanceImport): Boolean {
    if (!canImport()) return false
    connection.transaction {
      data.clicked.forEach { (uuid, sign) -> saveClicked(uuid, sign) }
      (data.guides.keys + data.names.keys + data.dates.keys).forEach { uuid ->
        saveRecord(uuid, GuidanceRecord(data.guides[uuid], data.names[uuid], data.dates[uuid]))
      }
      connection.createStatement().use {
        it.executeUpdate("INSERT INTO guide_import(done) VALUES (1)")
      }
    }
    return true
  }

  // Skript の変数名は小文字化されるため、看板 ID も同じキーにする。
  fun clicked(uuid: UUID, sign: String): Boolean =
      connection
          .prepareStatement("SELECT 1 FROM guide_clicked WHERE uuid = ? AND sign_id = ?")
          .use {
            it.setString(1, uuid.toString())
            it.setString(2, sign.lowercase(Locale.ENGLISH))
            it.executeQuery().use { rows -> rows.next() }
          }

  fun record(uuid: UUID): GuidanceRecord? =
      connection.prepareStatement("SELECT guide, name, at FROM guide_records WHERE uuid = ?").use {
        it.setString(1, uuid.toString())
        it.executeQuery().use { rows ->
          if (!rows.next()) null
          else {
            val at = rows.getLong(3).let { value -> if (rows.wasNull()) null else value }
            GuidanceRecord(rows.getString(1), rows.getString(2), at)
          }
        }
      }

  fun complete(uuid: UUID, sign: String, guide: UUID, name: String, at: Long) =
      connection.transaction {
        saveClicked(uuid, sign)
        saveRecord(uuid, GuidanceRecord(guide.toString(), name, at))
      }

  private fun saveClicked(uuid: UUID, sign: String) {
    connection.prepareStatement("INSERT INTO guide_clicked(uuid, sign_id) VALUES (?, ?)").use {
      it.setString(1, uuid.toString())
      it.setString(2, sign.lowercase(Locale.ENGLISH))
      it.executeUpdate()
    }
  }

  private fun saveRecord(uuid: UUID, record: GuidanceRecord) {
    connection
        .prepareStatement(
            "INSERT INTO guide_records(uuid, guide, name, at) VALUES (?, ?, ?, ?) ON CONFLICT(uuid) DO UPDATE SET guide = excluded.guide, name = excluded.name, at = excluded.at"
        )
        .use {
          it.setString(1, uuid.toString())
          it.setString(2, record.guide)
          it.setString(3, record.name)
          if (record.at == null) it.setNull(4, java.sql.Types.BIGINT) else it.setLong(4, record.at)
          it.executeUpdate()
        }
  }

  override fun close() {
    if (::connection.isInitialized) connection.close()
  }
}
