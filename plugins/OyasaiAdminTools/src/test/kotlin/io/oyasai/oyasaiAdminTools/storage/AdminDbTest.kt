package io.oyasai.oyasaiAdminTools.storage

import io.oyasai.oyasaiAdminTools.bulletin.announcement.models.Announcement
import io.oyasai.oyasaiAdminTools.bulletin.survey.models.Survey
import io.oyasai.oyasaiAdminTools.worldborder.WorldBorderData
import java.io.File
import java.nio.file.Path
import java.sql.DriverManager
import java.util.logging.Logger
import kotlin.test.Test
import kotlin.test.assertEquals
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
  fun bulletinPersistsAndAppendsResults() {
    val folder = temp.toFile()
    val file = File(folder, "admintools.db")
    AdminDb(file, logger).use { db ->
      db.open()
      db.saveAnnouncements(listOf(Announcement(id = "one"), Announcement(id = "two")))
      db.saveSurveys(listOf(Survey(id = "survey")))
      db.saveAnswer("survey", "a", "user", 2, 0, listOf("yes"))
      db.saveAnswer("survey", "b", "other", 0, 1, emptyList())
      db.flush()
      val survey = db.loadSurveys().single()
      assertEquals(2, survey.respondedPlayers["a"])
      assertEquals(0, survey.rewardedPlayers["a"])
      assertEquals(0, survey.respondedPlayers["b"])
      assertEquals(1, survey.rewardedPlayers["b"])
      db.saveAnswer("survey", "a", "user", 3, 0, listOf("first"))
      db.saveAnswer("survey", "a", "user", 4, 0, listOf("second"))
      db.flush()
      assertEquals(4, db.results("survey").size)
      assertEquals(2, count(file, "bulletin_survey_counts"))
    }
    AdminDb(file, logger).use { db ->
      db.open()
      assertEquals(4, db.results("survey").size)
      assertEquals(4, db.loadSurveys().single().respondedPlayers["a"])
    }
    assertEquals(2, count(file, "bulletin_announcements"))
  }

  @Test
  fun worldborderPersistsNamesAndOptionalShape() {
    val folder = temp.toFile()
    val file = File(folder, "admintools.db")
    AdminDb(file, logger).use { db ->
      db.open()
      db.saveBorder("world.one", WorldBorderData(1.5, -2.0, 20, 20))
      db.saveBorder("other", WorldBorderData(0.0, 0.0, 30, 40, false))
      db.flush()
      val borders = db.loadBorders()
      assertEquals(20, borders.getValue("world.one").radiusX)
      assertEquals(20, borders.getValue("world.one").radiusZ)
      assertNull(borders.getValue("world.one").shapeRound)
      assertFalse(borders.getValue("other").shapeRound!!)
    }
    assertEquals(2, count(file, "worldborder_borders"))
  }
}
