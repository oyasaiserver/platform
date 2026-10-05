package icu.oyasai.games.kimodameshi

import com.google.gson.JsonParser
import java.io.File
import java.nio.ByteBuffer
import java.sql.DriverManager
import java.util.UUID
import java.util.logging.Logger

internal class KimodameshiStore(file: File) : AutoCloseable {
  private val db = run {
    Class.forName("org.sqlite.JDBC")
    file.parentFile?.mkdirs()
    DriverManager.getConnection("jdbc:sqlite:${file.absolutePath}")
  }

  init {
    db.createStatement().use {
      it.execute("PRAGMA busy_timeout = 5000")
      it.execute(
          "CREATE TABLE IF NOT EXISTS kimodameshi_players (uuid TEXT PRIMARY KEY, points REAL, name TEXT)"
      )
      it.execute(
          "CREATE TABLE IF NOT EXISTS kimodameshi_recovery (uuid TEXT PRIMARY KEY, yaml TEXT NOT NULL)"
      )
      it.execute(
          "CREATE TABLE IF NOT EXISTS kimodameshi_metadata (key TEXT PRIMARY KEY, value TEXT NOT NULL)"
      )
      it.execute(
          "CREATE TABLE IF NOT EXISTS kimodameshi_runtime (id INTEGER PRIMARY KEY CHECK (id = 1), yaml TEXT NOT NULL)"
      )
    }
  }

  fun points(uuid: UUID): Double =
      db.prepareStatement("SELECT points FROM kimodameshi_players WHERE uuid = ?").use {
        it.setString(1, uuid.toString())
        it.executeQuery().use { rows -> if (rows.next()) rows.getDouble(1) else 0.0 }
      }

  fun name(uuid: UUID): String? =
      db.prepareStatement("SELECT name FROM kimodameshi_players WHERE uuid = ?").use {
        it.setString(1, uuid.toString())
        it.executeQuery().use { rows -> if (rows.next()) rows.getString(1) else null }
      }

  fun allPoints(): Map<UUID, Double> = buildMap {
    db.createStatement().use { statement ->
      statement
          .executeQuery("SELECT uuid, points FROM kimodameshi_players WHERE points IS NOT NULL")
          .use { while (it.next()) put(UUID.fromString(it.getString(1)), it.getDouble(2)) }
    }
  }

  fun setPoints(uuid: UUID, points: Double) {
    db.prepareStatement(
            "INSERT INTO kimodameshi_players (uuid, points) VALUES (?, ?) ON CONFLICT(uuid) DO UPDATE SET points = excluded.points"
        )
        .use {
          it.setString(1, uuid.toString())
          it.setDouble(2, points)
          it.executeUpdate()
        }
  }

  fun setName(uuid: UUID, name: String) {
    db.prepareStatement(
            "INSERT INTO kimodameshi_players (uuid, name) VALUES (?, ?) ON CONFLICT(uuid) DO UPDATE SET name = excluded.name"
        )
        .use {
          it.setString(1, uuid.toString())
          it.setString(2, name)
          it.executeUpdate()
        }
  }

  fun saveRecovery(uuid: UUID, yaml: String) {
    db.prepareStatement(
            "INSERT INTO kimodameshi_recovery (uuid, yaml) VALUES (?, ?) ON CONFLICT(uuid) DO UPDATE SET yaml = excluded.yaml"
        )
        .use {
          it.setString(1, uuid.toString())
          it.setString(2, yaml)
          it.executeUpdate()
        }
  }

  fun recoveries(): Map<UUID, String> = buildMap {
    db.createStatement().use { statement ->
      statement.executeQuery("SELECT uuid, yaml FROM kimodameshi_recovery").use {
        while (it.next()) put(UUID.fromString(it.getString(1)), it.getString(2))
      }
    }
  }

  fun deleteRecovery(uuid: UUID) {
    db.prepareStatement("DELETE FROM kimodameshi_recovery WHERE uuid = ?").use {
      it.setString(1, uuid.toString())
      it.executeUpdate()
    }
  }

  fun saveRuntime(yaml: String) {
    db.prepareStatement(
            "INSERT INTO kimodameshi_runtime (id, yaml) VALUES (1, ?) ON CONFLICT(id) DO UPDATE SET yaml = excluded.yaml"
        )
        .use {
          it.setString(1, yaml)
          it.executeUpdate()
        }
  }

  fun runtime(): String? =
      db.createStatement().use { statement ->
        statement.executeQuery("SELECT yaml FROM kimodameshi_runtime WHERE id = 1").use {
          if (it.next()) it.getString(1) else null
        }
      }

  // 一時的な Skript 移行処理。本番で取り込み件数と保存値を確認したら、デコーダーとともに撤去する。
  // ゲームの一時変数・Skript のプレイヤー退避状態は取り込まない。ゲーム停止中に切り替える。
  fun importLegacy(file: File, logger: Logger): ImportCounts? {
    if (!file.isFile) return null
    db.createStatement().use { statement ->
      statement.executeQuery("SELECT COUNT(*) FROM kimodameshi_players").use {
        if (it.next() && it.getInt(1) != 0) return null
      }
      statement
          .executeQuery("SELECT COUNT(*) FROM kimodameshi_metadata WHERE key = 'skript_imported'")
          .use { if (it.next() && it.getInt(1) != 0) return null }
    }
    // 先に全対象行を読み解く。失敗時は部分的な取り込みを残さず、個人情報を例外文に含めない。
    val imported = SkriptKimodameshiImport.read(file)
    db.autoCommit = false
    try {
      imported.points.forEach(::setPoints)
      imported.names.forEach(::setName)
      db.createStatement().use {
        it.executeUpdate(
            "INSERT INTO kimodameshi_metadata (key, value) VALUES ('skript_imported', 'true')"
        )
      }
      db.commit()
    } catch (error: Exception) {
      db.rollback()
      throw error
    } finally {
      db.autoCommit = true
    }
    val counts = ImportCounts(imported.points.size, imported.names.size)
    logger.info("肝試し Skript データ取り込み: ポイント ${counts.points} 件、名前 ${counts.names} 件")
    return counts
  }

  override fun close() = db.close()
}

internal data class ImportCounts(val points: Int, val names: Int)

internal data class ImportedKimodameshiData(
    val points: Map<UUID, Double>,
    val names: Map<UUID, String>,
)

internal object SkriptKimodameshiImport {
  fun read(file: File): ImportedKimodameshiData {
    val points = mutableMapOf<UUID, Double>()
    val names = mutableMapOf<UUID, String>()
    file.useLines { lines ->
      lines.forEachIndexed { index, line ->
        val key = line.substringBefore(',').trim().removeSurrounding("\"")
        val point = key.startsWith("minigame::event_points::")
        val name = key.startsWith("minigame::player_name::")
        if (!point && !name) return@forEachIndexed
        try {
          val fields = line.split(',').map { it.trim().removeSurrounding("\"") }
          require(fields.size == 3)
          val uuid = UUID.fromString(key.substringAfterLast("::"))
          if (point) points[uuid] = decodeNumber(fields[1], fields[2])
          else names[uuid] = decodeName(fields[1], fields[2])
        } catch (_: Exception) {
          error("肝試し Skript データの読み解きに失敗: 行 ${index + 1}")
        }
      }
    }
    return ImportedKimodameshiData(points, names)
  }

  fun decodeNumber(type: String, hex: String): Double {
    val bytes = decodeHex(hex)
    require(bytes.size == 8)
    return when (type) {
      "long" -> ByteBuffer.wrap(bytes).long.toDouble()
      "double" -> ByteBuffer.wrap(bytes).double.also { require(it.isFinite()) }
      else -> error("未対応のポイント型")
    }
  }

  fun decodeName(type: String, hex: String): String {
    require(type == "textcomponent")
    val bytes = decodeHex(hex)
    val header = decodeHex("81046a736f6e2080")
    require(bytes.size >= 9 && bytes.copyOfRange(0, 8).contentEquals(header))
    require((bytes[8].toInt() and 0xff) == bytes.size - 9)
    val json = JsonParser.parseString(String(bytes, 9, bytes.size - 9, Charsets.UTF_8))
    require(json.isJsonPrimitive && json.asJsonPrimitive.isString)
    return json.asString
  }

  private fun decodeHex(hex: String): ByteArray {
    require(hex.length % 2 == 0)
    return ByteArray(hex.length / 2) { hex.substring(it * 2, it * 2 + 2).toInt(16).toByte() }
  }
}
