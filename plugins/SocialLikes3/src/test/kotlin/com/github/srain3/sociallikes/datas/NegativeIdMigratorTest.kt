package com.github.srain3.sociallikes.datas

import java.io.File
import java.util.logging.Logger
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertTrue
import org.bukkit.configuration.file.YamlConfiguration
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
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
}
