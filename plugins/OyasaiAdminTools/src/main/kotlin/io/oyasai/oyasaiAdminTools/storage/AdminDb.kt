package io.oyasai.oyasaiAdminTools.storage

import com.google.gson.reflect.TypeToken
import io.oyasai.oyasaiAdminTools.bulletin.announcement.models.Announcement
import io.oyasai.oyasaiAdminTools.bulletin.survey.models.Survey
import io.oyasai.oyasaiAdminTools.bulletin.survey.models.SurveyResult
import io.oyasai.oyasaiAdminTools.utils.JsonUtils
import io.oyasai.oyasaiAdminTools.worldborder.WorldBorderData
import java.io.File
import java.sql.Connection
import java.sql.DriverManager
import java.util.concurrent.Executors
import java.util.logging.Logger

class AdminDb(private val file: File, private val logger: Logger) : AutoCloseable {
  private lateinit var connection: Connection
  private val writer =
      Executors.newSingleThreadExecutor { task -> Thread(task, "AdminTools storage") }

  fun open() {
    Class.forName("org.sqlite.JDBC")
    file.parentFile?.mkdirs()
    connection = DriverManager.getConnection("jdbc:sqlite:${file.absolutePath}")
    connection.createStatement().use {
      it.execute("PRAGMA journal_mode=WAL")
      it.execute("PRAGMA synchronous=FULL")
      it.execute("PRAGMA busy_timeout=5000")
    }
    ensureFeature(
        "bulletin",
        1,
        listOf(
            "CREATE TABLE bulletin_announcements(id TEXT PRIMARY KEY, sort INTEGER NOT NULL, body TEXT NOT NULL)",
            "CREATE TABLE bulletin_surveys(id TEXT PRIMARY KEY, sort INTEGER NOT NULL, body TEXT NOT NULL)",
            "CREATE TABLE bulletin_survey_counts(survey_id TEXT, uuid TEXT, responses INTEGER NOT NULL, rewards INTEGER NOT NULL, PRIMARY KEY(survey_id, uuid))",
            "CREATE TABLE bulletin_survey_results(id INTEGER PRIMARY KEY AUTOINCREMENT, survey_id TEXT NOT NULL, uuid TEXT NOT NULL, name TEXT NOT NULL, answered_at INTEGER NOT NULL, answers TEXT NOT NULL)",
        ),
    )
    ensureFeature(
        "worldborder",
        1,
        listOf(
            "CREATE TABLE worldborder_borders(world TEXT PRIMARY KEY, x REAL NOT NULL, z REAL NOT NULL, radius_x INTEGER NOT NULL, radius_z INTEGER NOT NULL, shape_round INTEGER NULL)"
        ),
    )
  }

  fun ensureFeature(name: String, version: Int, tables: List<String>) = ordered {
    require(name.matches(Regex("[a-z]+")))
    transaction {
      connection.createStatement().use {
        it.execute(
            "CREATE TABLE IF NOT EXISTS ${name}_meta(key TEXT PRIMARY KEY, value TEXT NOT NULL)"
        )
      }
      val existing = meta(name, "schema_version")
      if (existing == null) {
        check(tables.none { tableExists(it.substringAfter("TABLE ").substringBefore('(')) }) {
          "$name tables exist without schema_version"
        }
        connection.createStatement().use { statement -> tables.forEach(statement::execute) }
        putMeta(name, "schema_version", version.toString())
      } else {
        check(existing == version.toString()) { "Unsupported $name schema version $existing" }
        check(tables.all { tableExists(it.substringAfter("TABLE ").substringBefore('(')) }) {
          "$name schema is incomplete"
        }
      }
    }
  }

  private fun tableExists(name: String): Boolean =
      connection.prepareStatement("SELECT 1 FROM sqlite_master WHERE type='table' AND name=?").use {
        it.setString(1, name)
        it.executeQuery().use { rows -> rows.next() }
      }

  private fun meta(feature: String, key: String): String? =
      connection.prepareStatement("SELECT value FROM ${feature}_meta WHERE key=?").use {
        it.setString(1, key)
        it.executeQuery().use { rows -> if (rows.next()) rows.getString(1) else null }
      }

  private fun putMeta(feature: String, key: String, value: String) {
    connection.prepareStatement("INSERT INTO ${feature}_meta(key,value) VALUES (?,?)").use {
      it.setString(1, key)
      it.setString(2, value)
      it.executeUpdate()
    }
  }

  private fun <T> transaction(block: () -> T): T {
    connection.autoCommit = false
    try {
      val result = block()
      connection.commit()
      return result
    } catch (failure: Exception) {
      connection.rollback()
      throw failure
    } finally {
      connection.autoCommit = true
    }
  }

  private fun <T> ordered(block: () -> T): T = writer.submit<T> { block() }.get()

  private fun write(block: () -> Unit) {
    writer.execute {
      try {
        transaction(block)
      } catch (failure: Exception) {
        logger.severe("AdminTools SQLite write failed: ${failure.message}")
      }
    }
  }

  fun loadAnnouncements(): MutableList<Announcement> = ordered {
    val list = mutableListOf<Announcement>()
    connection.createStatement().use { st ->
      st.executeQuery("SELECT body FROM bulletin_announcements ORDER BY sort").use { rows ->
        while (rows.next()) list.add(
            JsonUtils.gson.fromJson(rows.getString(1), Announcement::class.java)
        )
      }
    }
    list
  }

  fun loadSurveys(): MutableList<Survey> = ordered {
    val list = mutableListOf<Survey>()
    connection.createStatement().use { st ->
      st.executeQuery("SELECT body FROM bulletin_surveys ORDER BY sort").use { rows ->
        while (rows.next()) {
          val survey = JsonUtils.gson.fromJson(rows.getString(1), Survey::class.java)
          list.add(survey.copy(respondedPlayers = mutableMapOf(), rewardedPlayers = mutableMapOf()))
        }
      }
      st.executeQuery("SELECT survey_id,uuid,responses,rewards FROM bulletin_survey_counts").use {
          rows ->
        while (rows.next()) {
          val survey = list.find { it.id == rows.getString(1) } ?: continue
          survey.respondedPlayers[rows.getString(2)] = rows.getInt(3)
          survey.rewardedPlayers[rows.getString(2)] = rows.getInt(4)
        }
      }
    }
    list
  }

  fun loadBorders(): Map<String, WorldBorderData> = ordered {
    val borders = linkedMapOf<String, WorldBorderData>()
    connection.createStatement().use { st ->
      st.executeQuery("SELECT world,x,z,radius_x,radius_z,shape_round FROM worldborder_borders")
          .use { rows ->
            while (rows.next()) {
              val shape = rows.getInt(6).let { if (rows.wasNull()) null else it != 0 }
              borders[rows.getString(1)] =
                  WorldBorderData(
                      rows.getDouble(2),
                      rows.getDouble(3),
                      rows.getInt(4),
                      rows.getInt(5),
                      shape,
                  )
            }
          }
    }
    borders
  }

  fun saveAnnouncements(items: List<Announcement>) {
    val snapshot = items.toList()
    write { replaceAnnouncements(snapshot) }
  }

  private fun replaceAnnouncements(items: List<Announcement>) {
    connection.createStatement().use { it.executeUpdate("DELETE FROM bulletin_announcements") }
    connection.prepareStatement("INSERT INTO bulletin_announcements VALUES (?,?,?)").use { st ->
      items.forEachIndexed { index, item ->
        st.setString(1, item.id)
        st.setInt(2, index)
        st.setString(3, JsonUtils.gson.toJson(item))
        st.addBatch()
      }
      st.executeBatch()
    }
  }

  fun saveSurveys(items: List<Survey>) {
    val snapshot = items.toList()
    write { replaceSurveys(snapshot) }
  }

  private fun replaceSurveys(items: List<Survey>) {
    connection.createStatement().use { it.executeUpdate("DELETE FROM bulletin_surveys") }
    connection.prepareStatement("INSERT INTO bulletin_surveys VALUES (?,?,?)").use { st ->
      items.forEachIndexed { index, item ->
        val body = JsonUtils.gson.toJsonTree(item).asJsonObject
        body.remove("respondedPlayers")
        body.remove("rewardedPlayers")
        st.setString(1, item.id)
        st.setInt(2, index)
        st.setString(3, body.toString())
        st.addBatch()
      }
      st.executeBatch()
    }
  }

  fun saveAnswer(
      surveyId: String,
      uuid: String,
      name: String,
      responses: Int,
      rewards: Int,
      answers: List<String>,
  ) {
    val answerJson = JsonUtils.gson.toJson(answers.toList())
    val timestamp = System.currentTimeMillis()
    write {
      connection
          .prepareStatement(
              "INSERT INTO bulletin_survey_counts VALUES (?,?,?,?) ON CONFLICT(survey_id,uuid) DO UPDATE SET responses=excluded.responses,rewards=excluded.rewards"
          )
          .use { st ->
            st.setString(1, surveyId)
            st.setString(2, uuid)
            st.setInt(3, responses)
            st.setInt(4, rewards)
            st.executeUpdate()
          }
      connection
          .prepareStatement(
              "INSERT INTO bulletin_survey_results(survey_id,uuid,name,answered_at,answers) VALUES (?,?,?,?,?)"
          )
          .use { st ->
            st.setString(1, surveyId)
            st.setString(2, uuid)
            st.setString(3, name)
            st.setLong(4, timestamp)
            st.setString(5, answerJson)
            st.executeUpdate()
          }
    }
  }

  fun results(surveyId: String): List<SurveyResult> = ordered {
    val results = mutableListOf<SurveyResult>()
    connection
        .prepareStatement(
            "SELECT uuid,name,answered_at,answers FROM bulletin_survey_results WHERE survey_id=? ORDER BY id"
        )
        .use { st ->
          st.setString(1, surveyId)
          st.executeQuery().use { rows ->
            while (rows.next()) {
              val answers: List<String> =
                  JsonUtils.gson.fromJson(
                      rows.getString(4),
                      object : TypeToken<List<String>>() {}.type,
                  )
              results.add(
                  SurveyResult(rows.getString(1), rows.getString(2), rows.getLong(3), answers)
              )
            }
          }
        }
    results
  }

  fun saveBorder(name: String, border: WorldBorderData) = write { upsertBorder(name, border) }

  private fun upsertBorder(name: String, border: WorldBorderData) {
    connection
        .prepareStatement(
            "INSERT INTO worldborder_borders VALUES (?,?,?,?,?,?) ON CONFLICT(world) DO UPDATE SET x=excluded.x,z=excluded.z,radius_x=excluded.radius_x,radius_z=excluded.radius_z,shape_round=excluded.shape_round"
        )
        .use { st ->
          st.setString(1, name)
          st.setDouble(2, border.x)
          st.setDouble(3, border.z)
          st.setInt(4, border.radiusX)
          st.setInt(5, border.radiusZ)
          when (border.shapeRound) {
            null -> st.setNull(6, java.sql.Types.INTEGER)
            true -> st.setInt(6, 1)
            false -> st.setInt(6, 0)
          }
          st.executeUpdate()
        }
  }

  fun deleteBorder(name: String) = write {
    connection.prepareStatement("DELETE FROM worldborder_borders WHERE world=?").use {
      it.setString(1, name)
      it.executeUpdate()
    }
  }

  /** All feature SQL shares the ordered connection; failures propagate to the caller. */
  fun <T> readFeature(block: (Connection) -> T): T = ordered { block(connection) }

  fun <T> writeFeature(block: (Connection) -> T): T = ordered { transaction { block(connection) } }

  fun flush() {
    ordered {}
  }

  override fun close() {
    writer.shutdown()
    while (!writer.awaitTermination(1, java.util.concurrent.TimeUnit.MINUTES)) logger.warning(
        "Waiting for AdminTools SQLite writes"
    )
    if (::connection.isInitialized) connection.close()
  }
}
