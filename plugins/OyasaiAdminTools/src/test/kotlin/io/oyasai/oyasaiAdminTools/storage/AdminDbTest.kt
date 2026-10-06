package io.oyasai.oyasaiAdminTools.storage

import java.io.File
import java.nio.file.Path
import java.sql.DriverManager
import java.util.logging.Logger
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith
import kotlin.test.assertFalse
import kotlin.test.assertNull
import org.junit.jupiter.api.io.TempDir

class AdminDbTest {
  @TempDir lateinit var temp: Path
  private val logger = Logger.getLogger("AdminDbTest")

  private fun count(file: File, table: String): Int =
      DriverManager.getConnection("jdbc:sqlite:${file.absolutePath}").use { db ->
        db.createStatement().use { st ->
          st.executeQuery("SELECT count(*) FROM $table").use { rows ->
            rows.next()
            rows.getInt(1)
          }
        }
      }

  @Test
  fun bulletinImportsOnceAndAppendsResults() {
    val folder = temp.toFile()
    val file = File(folder, "admintools.db")
    File(folder, "announcements.json").writeText("""[{"id":"one"},{"id":"two"}]""")
    File(folder, "surveys.json")
        .writeText("""[{"id":"survey","respondedPlayers":{"a":2},"rewardedPlayers":{"b":1}}]""")
    File(folder, "surveys").mkdirs()
    File(folder, "surveys/results_survey.json")
        .writeText("""[{"uuid":"a","name":"user","timestamp":123,"answers":["yes"]}]""")
    AdminDb(file, logger).use { db ->
      db.open()
      val imported = db.importBulletinIfNeeded(folder)!!
      assertEquals(2, imported["legacy_announcements"])
      assertEquals(1, imported["legacy_surveys"])
      assertEquals(2, imported["legacy_counts"])
      assertEquals(1, imported["legacy_results"])
      assertEquals(0, imported["legacy_skipped"])
      val survey = db.loadSurveys().single()
      assertEquals(2, survey.respondedPlayers["a"])
      assertEquals(0, survey.rewardedPlayers["a"])
      assertEquals(0, survey.respondedPlayers["b"])
      assertEquals(1, survey.rewardedPlayers["b"])
      db.saveAnswer("survey", "a", "user", 3, 0, listOf("first"))
      db.saveAnswer("survey", "a", "user", 4, 0, listOf("second"))
      db.flush()
      assertEquals(3, db.results("survey").size)
      assertEquals(2, count(file, "bulletin_survey_counts"))
    }
    AdminDb(file, logger).use { db ->
      db.open()
      assertNull(db.importBulletinIfNeeded(folder))
      assertEquals(3, db.results("survey").size)
      assertEquals(4, db.loadSurveys().single().respondedPlayers["a"])
    }
    assertEquals(2, count(file, "bulletin_announcements"))
  }

  @Test
  fun invalidJsonLeavesImportUnmarked() {
    val folder = temp.toFile()
    val file = File(folder, "admintools.db")
    File(folder, "announcements.json").writeText("[")
    AdminDb(file, logger).use { db ->
      db.open()
      assertFailsWith<Exception> { db.importBulletinIfNeeded(folder) }
      assertEquals(0, count(file, "bulletin_announcements"))
      File(folder, "announcements.json").writeText("[]")
      assertEquals(0, db.importBulletinIfNeeded(folder)!!["legacy_announcements"])
    }
  }

  @Test
  fun worldborderRestoresNamesAndOptionalShape() {
    val folder = temp.toFile()
    val file = File(folder, "admintools.db")
    File(folder, "worldborder.yml")
        .writeText(
            """
            worlds:
              world<one:
                x: 1.5
                z: -2
                radius: 20
              other:
                x: 0
                z: 0
                radiusX: 30
                radiusZ: 40
                shape-round: false
            """
                .trimIndent()
        )
    AdminDb(file, logger).use { db ->
      db.open()
      assertEquals(
          2,
          db.importWorldborderIfNeeded(folder, File(folder, "missing.yml"), emptyMap())!![
              "legacy_borders"],
      )
      val borders = db.loadBorders()
      assertEquals(20, borders.getValue("world.one").radiusX)
      assertEquals(20, borders.getValue("world.one").radiusZ)
      assertNull(borders.getValue("world.one").shapeRound)
      assertFalse(borders.getValue("other").shapeRound!!)
      assertNull(db.importWorldborderIfNeeded(folder, File(folder, "missing.yml"), emptyMap()))
    }
    assertEquals(2, count(file, "worldborder_borders"))
  }
}
