package com.github.srain3.sociallikes.datas

import java.io.File
import java.sql.Connection
import java.sql.DriverManager
import java.sql.SQLException
import java.util.logging.Logger
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertIs
import kotlin.test.assertNull
import kotlin.test.assertTrue
import org.bukkit.configuration.file.YamlConfiguration
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.assertThrows
import org.junit.jupiter.api.io.TempDir

class NegativeIdMigratorTest {

  @TempDir lateinit var tempDir: File

  private val logger = Logger.getLogger("NegativeIdMigratorTest")

  @BeforeEach fun setup() {}

  @Test
  fun testDirNameCalculation() {
    // 負ID
    assertEquals("-1--49", Data.getDirName(-1))
    assertEquals("-1--49", Data.getDirName(-49))
    assertEquals("-50--99", Data.getDirName(-50))
    assertEquals("-50--99", Data.getDirName(-99))
    assertEquals("-100--149", Data.getDirName(-100))

    // 正ID
    assertEquals("0-49", Data.getDirName(0))
    assertEquals("0-49", Data.getDirName(1))
    assertEquals("0-49", Data.getDirName(49))
    assertEquals("50-99", Data.getDirName(50))
    assertEquals("500-549", Data.getDirName(500))
  }

  @Test
  fun testMigrateYamlFilesSuccess() {
    val dataDir = File(tempDir, "data")
    dataDir.mkdirs()

    // 負ID -1 と -50 の YAML ファイルを作成
    val oldDir1 = File(dataDir, "-1--49").apply { mkdirs() }
    val oldFile1 = File(oldDir1, "-1.yml")
    val yml1 = YamlConfiguration()
    yml1.set("id", -1)
    yml1.set("title", "Test Build -1")
    yml1.set("owner", "00000000-0000-0000-0000-000000000001")
    yml1.save(oldFile1)

    val oldDir2 = File(dataDir, "-50--99").apply { mkdirs() }
    val oldFile2 = File(oldDir2, "-50.yml")
    val yml2 = YamlConfiguration()
    yml2.set("id", -50)
    yml2.set("title", "Test Build -50")
    yml2.set("owner", "00000000-0000-0000-0000-000000000002")
    yml2.save(oldFile2)

    val idMap = mapOf(-1 to 101, -50 to 102)

    val (migratedCount, missingCount, failedIds) =
        NegativeIdMigrator.migrateYamlFiles(dataDir, idMap, dryRun = false, logger = logger)

    assertEquals(2, migratedCount)
    assertEquals(0, missingCount)
    assertTrue(failedIds.isEmpty())

    // 旧ファイルが削除されていることを確認
    assertFalse(oldFile1.exists())
    assertFalse(oldFile2.exists())

    // 新ファイルが作成され、idが更新されていることを確認
    val newFile1 = File(dataDir, "100-149/101.yml")
    val newFile2 = File(dataDir, "100-149/102.yml")
    assertTrue(newFile1.exists())
    assertTrue(newFile2.exists())

    val loadedYml1 = YamlConfiguration.loadConfiguration(newFile1)
    assertEquals(101, loadedYml1.getInt("id"))
    assertEquals("Test Build -1", loadedYml1.getString("title"))

    val loadedYml2 = YamlConfiguration.loadConfiguration(newFile2)
    assertEquals(102, loadedYml2.getInt("id"))
    assertEquals("Test Build -50", loadedYml2.getString("title"))
  }

  @Test
  fun testMigrateYamlFilesDryRun() {
    val dataDir = File(tempDir, "data")
    dataDir.mkdirs()

    val oldDir = File(dataDir, "-1--49").apply { mkdirs() }
    val oldFile = File(oldDir, "-1.yml")
    val yml = YamlConfiguration()
    yml.set("id", -1)
    yml.set("title", "DryRun Build")
    yml.save(oldFile)

    val idMap = mapOf(-1 to 200)

    val (migratedCount, missingCount, failedIds) =
        NegativeIdMigrator.migrateYamlFiles(dataDir, idMap, dryRun = true, logger = logger)

    assertEquals(1, migratedCount)
    assertEquals(0, missingCount)
    assertTrue(failedIds.isEmpty())

    // dryRun では旧ファイルがそのまま残り、新ファイルは作成されない
    assertTrue(oldFile.exists())
    val newFile = File(dataDir, "200-249/200.yml")
    assertFalse(newFile.exists())

    val reloadedOld = YamlConfiguration.loadConfiguration(oldFile)
    assertEquals(-1, reloadedOld.getInt("id"))
  }

  @Test
  fun testMigrateYamlFilesMissingAndFaultTolerant() {
    val dataDir = File(tempDir, "data")
    dataDir.mkdirs()

    // -1 は存在するが、-2 は存在しない
    val oldDir = File(dataDir, "-1--49").apply { mkdirs() }
    val oldFile = File(oldDir, "-1.yml")
    val yml = YamlConfiguration()
    yml.set("id", -1)
    yml.set("title", "Existing Build")
    yml.save(oldFile)

    val idMap = mapOf(-1 to 301, -2 to 302)

    val (migratedCount, missingCount, failedIds) =
        NegativeIdMigrator.migrateYamlFiles(dataDir, idMap, dryRun = false, logger = logger)

    assertEquals(1, migratedCount)
    assertEquals(1, missingCount)
    assertTrue(failedIds.isEmpty())

    assertTrue(File(dataDir, "300-349/301.yml").exists())
    assertFalse(oldFile.exists())
  }

  @Test
  fun testMigratePublicityHistory() {
    val pubFile = File(tempDir, "PublicityHistory.yml")
    val pubYml = YamlConfiguration()
    pubYml.set("1.TimeStamp", "2024-01-01T12:00:00")
    pubYml.set("1.User", "00000000-0000-0000-0000-000000000001")
    pubYml.set("1.SLID", -1)

    pubYml.set("2.TimeStamp", "2024-01-02T12:00:00")
    pubYml.set("2.User", "00000000-0000-0000-0000-000000000002")
    pubYml.set("2.SLID", 50) // 正IDはそのまま

    pubYml.set("3.TimeStamp", "2024-01-03T12:00:00")
    pubYml.set("3.User", "00000000-0000-0000-0000-000000000003")
    pubYml.set("3.SLID", -50)

    pubYml.save(pubFile)

    val idMap = mapOf(-1 to 501, -50 to 502)

    // dryRun テスト
    val dryRunUpdated =
        NegativeIdMigrator.migratePublicityHistory(pubFile, idMap, dryRun = true, logger = logger)
    assertEquals(2, dryRunUpdated)

    val reloadedDryRun = YamlConfiguration.loadConfiguration(pubFile)
    assertEquals(-1, reloadedDryRun.getInt("1.SLID"))
    assertEquals(50, reloadedDryRun.getInt("2.SLID"))
    assertEquals(-50, reloadedDryRun.getInt("3.SLID"))

    // 実際の置換テスト
    val actualUpdated =
        NegativeIdMigrator.migratePublicityHistory(pubFile, idMap, dryRun = false, logger = logger)
    assertEquals(2, actualUpdated)

    val reloadedActual = YamlConfiguration.loadConfiguration(pubFile)
    assertEquals(501, reloadedActual.getInt("1.SLID"))
    assertEquals(50, reloadedActual.getInt("2.SLID"))
    assertEquals(502, reloadedActual.getInt("3.SLID"))
  }

  @Test
  fun testMigrateYamlFilesCorruptedFileFaultTolerant() {
    val dataDir = File(tempDir, "data")
    dataDir.mkdirs()

    // 正常ファイル -1
    val oldDir1 = File(dataDir, "-1--49").apply { mkdirs() }
    val oldFile1 = File(oldDir1, "-1.yml")
    val yml1 = YamlConfiguration()
    yml1.set("id", -1)
    yml1.set("title", "Valid Build -1")
    yml1.save(oldFile1)

    // 不正ファイル -2 (不正なYAMLシンタックス)
    val oldFile2 = File(oldDir1, "-2.yml")
    oldFile2.writeText("invalid: yaml: content: [unclosed")

    // 正常ファイル -3
    val oldFile3 = File(oldDir1, "-3.yml")
    val yml3 = YamlConfiguration()
    yml3.set("id", -3)
    yml3.set("title", "Valid Build -3")
    yml3.save(oldFile3)

    val idMap = mapOf(-1 to 101, -2 to 102, -3 to 103)

    val (migratedCount, missingCount, failedIds) =
        NegativeIdMigrator.migrateYamlFiles(dataDir, idMap, dryRun = false, logger = logger)

    assertEquals(2, migratedCount)
    assertEquals(0, missingCount)
    assertEquals(listOf(-2), failedIds)

    // -1 と -3 は移行されていること
    assertTrue(File(dataDir, "100-149/101.yml").exists())
    assertTrue(File(dataDir, "100-149/103.yml").exists())
    assertFalse(oldFile1.exists())
    assertFalse(oldFile3.exists())

    // -2 は移行失敗で残っていること
    assertTrue(oldFile2.exists())
  }

  private fun createTestDatabase(dbFile: File): Connection {
    val conn = DriverManager.getConnection("jdbc:sqlite:${dbFile.absolutePath}?busy_timeout=5000")
    conn.createStatement().use { stmt ->
      stmt.execute("PRAGMA foreign_keys = ON;")
      stmt.execute(
          """
          CREATE TABLE builds (
              id INTEGER PRIMARY KEY,
              world_name VARCHAR(255) NOT NULL,
              loc_x DOUBLE NOT NULL,
              loc_y DOUBLE NOT NULL,
              loc_z DOUBLE NOT NULL,
              chunk_x INTEGER NOT NULL,
              chunk_z INTEGER NOT NULL,
              created_at VARCHAR(64) NOT NULL,
              owner_uuid VARCHAR(36) NOT NULL,
              title TEXT NOT NULL,
              checked BOOLEAN NOT NULL,
              comment TEXT NOT NULL,
              discord_text_id BIGINT NOT NULL,
              deleted_at VARCHAR(64),
              deleted_by VARCHAR(36),
              sign_material VARCHAR(64)
          );
          """
              .trimIndent()
      )
      stmt.execute(
          """
          CREATE TABLE build_likes (
              build_id INTEGER NOT NULL,
              player_uuid VARCHAR(36) NOT NULL,
              liked_at BIGINT,
              PRIMARY KEY (build_id, player_uuid),
              CONSTRAINT fk_build_likes_build_id__id FOREIGN KEY (build_id) REFERENCES builds(id) ON DELETE CASCADE ON UPDATE RESTRICT
          );
          """
              .trimIndent()
      )
      stmt.execute(
          """
          CREATE TABLE publicity_history (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              timestamp VARCHAR(64) NOT NULL,
              user_uuid VARCHAR(36) NOT NULL,
              sl_id INTEGER NOT NULL
          );
          """
              .trimIndent()
      )
      stmt.execute(
          """
          CREATE TABLE sl_event_log (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              build_id INTEGER NOT NULL,
              event_type VARCHAR(32) NOT NULL,
              actor_uuid VARCHAR(36),
              before_json TEXT,
              after_json TEXT,
              occurred_at VARCHAR(64) NOT NULL
          );
          """
              .trimIndent()
      )
      stmt.execute(
          """
          CREATE TABLE id_migration_map (
              old_negative_id INTEGER PRIMARY KEY,
              new_positive_id INTEGER UNIQUE
          );
          """
              .trimIndent()
      )
    }
    return conn
  }

  private fun seedTestData(conn: Connection) {
    conn
        .prepareStatement(
            "INSERT INTO builds (id, world_name, loc_x, loc_y, loc_z, chunk_x, chunk_z, created_at, owner_uuid, title, checked, comment, discord_text_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"
        )
        .use { stmt ->
          val builds =
              listOf(
                  Triple(-50, "Build -50", "00000000-0000-0000-0000-000000000001"),
                  Triple(-1, "Build -1", "00000000-0000-0000-0000-000000000002"),
                  Triple(10, "Build 10", "00000000-0000-0000-0000-000000000003"),
              )
          for ((id, title, owner) in builds) {
            stmt.setInt(1, id)
            stmt.setString(2, "world")
            stmt.setDouble(3, 0.0)
            stmt.setDouble(4, 64.0)
            stmt.setDouble(5, 0.0)
            stmt.setInt(6, 0)
            stmt.setInt(7, 0)
            stmt.setString(8, "2024-01-01T00:00:00")
            stmt.setString(9, owner)
            stmt.setString(10, title)
            stmt.setBoolean(11, true)
            stmt.setString(12, "")
            stmt.setLong(13, 0L)
            stmt.addBatch()
          }
          stmt.executeBatch()
        }

    conn
        .prepareStatement(
            "INSERT INTO build_likes (build_id, player_uuid, liked_at) VALUES (?, ?, ?)"
        )
        .use { stmt ->
          stmt.setInt(1, -50)
          stmt.setString(2, "00000000-0000-0000-0000-000000000010")
          stmt.setLong(3, 1000L)
          stmt.addBatch()

          stmt.setInt(1, -1)
          stmt.setString(2, "00000000-0000-0000-0000-000000000011")
          stmt.setLong(3, 2000L)
          stmt.addBatch()

          stmt.executeBatch()
        }

    conn
        .prepareStatement(
            "INSERT INTO publicity_history (timestamp, user_uuid, sl_id) VALUES (?, ?, ?)"
        )
        .use { stmt ->
          stmt.setString(1, "2024-01-01T12:00:00")
          stmt.setString(2, "00000000-0000-0000-0000-000000000001")
          stmt.setInt(3, -50)
          stmt.executeUpdate()
        }

    conn
        .prepareStatement(
            "INSERT INTO sl_event_log (build_id, event_type, actor_uuid, before_json, after_json, occurred_at) VALUES (?, ?, ?, ?, ?, ?)"
        )
        .use { stmt ->
          stmt.setInt(1, -1)
          stmt.setString(2, "EDIT")
          stmt.setString(3, "00000000-0000-0000-0000-000000000002")
          stmt.setString(4, null)
          stmt.setString(5, null)
          stmt.setString(6, "2024-01-01T12:00:00")
          stmt.executeUpdate()
        }
  }

  @Test
  fun testFkConstraintBlocksUpdateInsideTransaction() {
    val dbFile = File(tempDir, "fk_test.db")
    createTestDatabase(dbFile).use { conn ->
      seedTestData(conn)

      // トランザクション開始後に PRAGMA foreign_keys = OFF を実行しても効かない（no-op）ため、
      // ON UPDATE RESTRICT により UPDATE が拒否されることを確認する
      conn.autoCommit = false
      conn.createStatement().use { it.execute("PRAGMA foreign_keys = OFF;") }

      val ex =
          assertThrows<SQLException> {
            conn.prepareStatement("UPDATE builds SET id = 11 WHERE id = -50").use {
              it.executeUpdate()
            }
          }
      assertTrue(
          ex.message?.contains("FOREIGN KEY") == true || ex.message?.contains("constraint") == true,
          "Expected foreign key constraint violation, got: ${ex.message}",
      )
      conn.rollback()
    }
  }

  @Test
  fun testMigrateNegativeIdsDirectSuccessWithFk() {
    val dbFile = File(tempDir, "migration_success.db")
    createTestDatabase(dbFile).use { conn ->
      seedTestData(conn)

      val result = SLDatabase.migrateNegativeIdsDirect(conn, dryRun = false)
      assertIs<SLDatabase.MigrationResult.Success>(result)
      assertEquals(2, result.migratedCount)
      // maxPositiveId is 10, negativeIds in ASC order: -50 -> 11, -1 -> 12
      assertEquals(mapOf(-50 to 11, -1 to 12), result.idMap)

      // builds の確認
      val builds = mutableMapOf<Int, String>()
      conn.createStatement().use { stmt ->
        stmt.executeQuery("SELECT id, title FROM builds ORDER BY id ASC").use { rs ->
          while (rs.next()) {
            builds[rs.getInt("id")] = rs.getString("title")
          }
        }
      }
      assertEquals(mapOf(10 to "Build 10", 11 to "Build -50", 12 to "Build -1"), builds)

      // build_likes の確認（FK制約が保たれつつ更新されていること）
      val likes = mutableMapOf<Int, String>()
      conn.createStatement().use { stmt ->
        stmt
            .executeQuery("SELECT build_id, player_uuid FROM build_likes ORDER BY build_id ASC")
            .use { rs ->
              while (rs.next()) {
                likes[rs.getInt("build_id")] = rs.getString("player_uuid")
              }
            }
      }
      assertEquals(
          mapOf(
              11 to "00000000-0000-0000-0000-000000000010",
              12 to "00000000-0000-0000-0000-000000000011",
          ),
          likes,
      )

      // publicity_history の確認
      conn.createStatement().use { stmt ->
        stmt.executeQuery("SELECT sl_id FROM publicity_history").use { rs ->
          assertTrue(rs.next())
          assertEquals(11, rs.getInt("sl_id"))
        }
      }

      // sl_event_log の確認
      conn.createStatement().use { stmt ->
        stmt.executeQuery("SELECT build_id FROM sl_event_log").use { rs ->
          assertTrue(rs.next())
          assertEquals(12, rs.getInt("build_id"))
        }
      }

      // id_migration_map の確認
      val mapRows = mutableMapOf<Int, Int>()
      conn.createStatement().use { stmt ->
        stmt.executeQuery("SELECT old_negative_id, new_positive_id FROM id_migration_map").use { rs
          ->
          while (rs.next()) {
            mapRows[rs.getInt("old_negative_id")] = rs.getInt("new_positive_id")
          }
        }
      }
      assertEquals(mapOf(-50 to 11, -1 to 12), mapRows)

      // 終了時に foreign_keys が ON に戻っていることを確認
      conn.createStatement().use { stmt ->
        stmt.executeQuery("PRAGMA foreign_keys;").use { rs ->
          assertTrue(rs.next())
          assertEquals(1, rs.getInt(1), "PRAGMA foreign_keys must be ON after migration")
        }
      }
    }
  }

  @Test
  fun testMigrateNegativeIdsDirectDryRunDoesNotMutate() {
    val dbFile = File(tempDir, "migration_dry_run.db")
    createTestDatabase(dbFile).use { conn ->
      seedTestData(conn)

      val result = SLDatabase.migrateNegativeIdsDirect(conn, dryRun = true)
      assertIs<SLDatabase.MigrationResult.Success>(result)
      assertEquals(2, result.migratedCount)
      assertEquals(mapOf(-50 to 11, -1 to 12), result.idMap)

      // DB内のデータは負IDのまま変更されていないことを確認
      val buildIds = mutableListOf<Int>()
      conn.createStatement().use { stmt ->
        stmt.executeQuery("SELECT id FROM builds ORDER BY id ASC").use { rs ->
          while (rs.next()) buildIds.add(rs.getInt("id"))
        }
      }
      assertEquals(listOf(-50, -1, 10), buildIds)

      // id_migration_map は空のままであること
      conn.createStatement().use { stmt ->
        stmt.executeQuery("SELECT COUNT(*) FROM id_migration_map").use { rs ->
          assertTrue(rs.next())
          assertEquals(0, rs.getInt(1))
        }
      }

      // 終了時に foreign_keys が ON に戻っていることを確認
      conn.createStatement().use { stmt ->
        stmt.executeQuery("PRAGMA foreign_keys;").use { rs ->
          assertTrue(rs.next())
          assertEquals(1, rs.getInt(1))
        }
      }
    }
  }

  @Test
  fun testMigrateNegativeIdsDirectNoTarget() {
    val dbFile = File(tempDir, "migration_no_target.db")
    createTestDatabase(dbFile).use { conn ->
      // 正IDのみ挿入
      conn
          .prepareStatement(
              "INSERT INTO builds (id, world_name, loc_x, loc_y, loc_z, chunk_x, chunk_z, created_at, owner_uuid, title, checked, comment, discord_text_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"
          )
          .use { stmt ->
            stmt.setInt(1, 100)
            stmt.setString(2, "world")
            stmt.setDouble(3, 0.0)
            stmt.setDouble(4, 64.0)
            stmt.setDouble(5, 0.0)
            stmt.setInt(6, 0)
            stmt.setInt(7, 0)
            stmt.setString(8, "2024-01-01T00:00:00")
            stmt.setString(9, "00000000-0000-0000-0000-000000000001")
            stmt.setString(10, "Positive Build")
            stmt.setBoolean(11, true)
            stmt.setString(12, "")
            stmt.setLong(13, 0L)
            stmt.executeUpdate()
          }

      val result = SLDatabase.migrateNegativeIdsDirect(conn, dryRun = false)
      assertIs<SLDatabase.MigrationResult.NoTarget>(result)

      // foreign_keys が ON に戻っていることを確認
      conn.createStatement().use { stmt ->
        stmt.executeQuery("PRAGMA foreign_keys;").use { rs ->
          assertTrue(rs.next())
          assertEquals(1, rs.getInt(1))
        }
      }
    }
  }

  @Test
  fun testMigrationResultSummaryDistinguishesFailureAndNoTarget() {
    val noTargetSummary =
        NegativeIdMigrator.MigrationResultSummary(
            targetNegativeCount = 0,
            newIdStart = null,
            newIdEnd = null,
            sqliteMigratedCount = 0,
            yamlMigratedCount = 0,
            yamlMissingCount = 0,
            failedYamlIds = emptyList(),
            publicityHistoryUpdatedCount = 0,
            isDryRun = false,
            isSuccess = true,
            errorMessage = null,
        )
    assertTrue(noTargetSummary.isSuccess)
    assertEquals(0, noTargetSummary.targetNegativeCount)
    assertNull(noTargetSummary.errorMessage)

    val failureSummary =
        NegativeIdMigrator.MigrationResultSummary(
            targetNegativeCount = 0,
            newIdStart = null,
            newIdEnd = null,
            sqliteMigratedCount = 0,
            yamlMigratedCount = 0,
            yamlMissingCount = 0,
            failedYamlIds = emptyList(),
            publicityHistoryUpdatedCount = 0,
            isDryRun = false,
            isSuccess = false,
            errorMessage = "FOREIGN KEY constraint failed",
        )
    assertFalse(failureSummary.isSuccess)
    assertEquals("FOREIGN KEY constraint failed", failureSummary.errorMessage)
  }

  @Test
  fun testMigrateNegativeIdsDirectPreservesExistingMapping() {
    val dbFile = File(tempDir, "migration_existing_map.db")
    createTestDatabase(dbFile).use { conn ->
      seedTestData(conn)

      // 既存マッピング: -50 -> 999 をあらかじめ登録
      conn
          .prepareStatement(
              "INSERT INTO id_migration_map (old_negative_id, new_positive_id) VALUES (?, ?)"
          )
          .use { stmt ->
            stmt.setInt(1, -50)
            stmt.setInt(2, 999)
            stmt.executeUpdate()
          }

      val result = SLDatabase.migrateNegativeIdsDirect(conn, dryRun = false)
      assertIs<SLDatabase.MigrationResult.Success>(result)
      assertEquals(2, result.migratedCount)
      // -50 は既存の 999、-1 は maxPositiveId(10) + 1 = 11
      assertEquals(mapOf(-50 to 999, -1 to 11), result.idMap)

      val buildIds = mutableListOf<Int>()
      conn.createStatement().use { stmt ->
        stmt.executeQuery("SELECT id FROM builds ORDER BY id ASC").use { rs ->
          while (rs.next()) buildIds.add(rs.getInt("id"))
        }
      }
      assertEquals(listOf(10, 11, 999), buildIds)
    }
  }

  @Test
  fun testMigrateNegativeIdsDirectRollsBackOnFailure() {
    val dbFile = File(tempDir, "migration_rollback.db")
    createTestDatabase(dbFile).use { conn ->
      seedTestData(conn)

      // 移行の UPDATE 時に確実に失敗するようにトリガーを仕掛ける
      conn.createStatement().use { stmt ->
        stmt.execute(
            "CREATE TRIGGER test_fail_trigger BEFORE UPDATE ON builds BEGIN SELECT RAISE(ABORT, 'simulated migration failure'); END;"
        )
      }

      // UPDATE builds 実行時にトリガーで SQLException が発生する
      val ex =
          assertThrows<SQLException> { SLDatabase.migrateNegativeIdsDirect(conn, dryRun = false) }
      assertTrue(
          ex.message?.contains("simulated migration failure") == true,
          "Expected simulated failure, got: ${ex.message}",
      )

      // ロールバックされて builds テーブルのデータが負IDのままであることを確認
      val buildIds = mutableListOf<Int>()
      conn.createStatement().use { stmt ->
        stmt.executeQuery("SELECT id FROM builds ORDER BY id ASC").use { rs ->
          while (rs.next()) buildIds.add(rs.getInt("id"))
        }
      }
      assertEquals(listOf(-50, -1, 10), buildIds, "Build IDs must remain unchanged after rollback")

      // 終了時に foreign_keys が ON に戻っていることを確認
      conn.createStatement().use { stmt ->
        stmt.executeQuery("PRAGMA foreign_keys;").use { rs ->
          assertTrue(rs.next())
          assertEquals(1, rs.getInt(1), "PRAGMA foreign_keys must be ON even after failure")
        }
      }
    }
  }
}
