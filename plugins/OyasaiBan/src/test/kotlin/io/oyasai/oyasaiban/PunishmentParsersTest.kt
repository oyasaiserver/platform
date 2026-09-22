package io.oyasai.oyasaiban

import java.nio.file.Files
import java.util.UUID
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertIs
import kotlin.test.assertNull
import kotlin.test.assertTrue

class DurationParserTest {
  @Test
  fun parsesSupportedUnits() {
    assertEquals(1000L, millis("1s"))
    assertEquals(2L * 60 * 1000, millis("2mi"))
    assertEquals(3L * 60 * 60 * 1000, millis("3h"))
    assertEquals(4L * 24 * 60 * 60 * 1000, millis("4d"))
    assertEquals(5L * 7 * 24 * 60 * 60 * 1000, millis("5w"))
    assertEquals(6L * 30 * 24 * 60 * 60 * 1000, millis("6mo"))
    assertEquals(365L * 24 * 60 * 60 * 1000, millis("1y"))
    assertEquals(31L * 24 * 60 * 60 * 1000, millis("1mo1d"))
  }

  @Test
  fun rejectsAmbiguousMinutesAndNumericTypos() {
    assertNull(DurationParser.parse("5m"))
    assertNull(DurationParser.parse("5mx"))
    val parsed = BanArguments.parse(listOf("5m", "あらし"))
    assertIs<BanArguments.Invalid>(parsed)
  }

  @Test
  fun distinguishesPermanentReasonFromDuration() {
    val implicit = assertIs<BanArguments.Valid>(BanArguments.parse(listOf("あらし", "行為")))
    assertIs<PunishmentDuration.Permanent>(implicit.duration)
    assertEquals("あらし 行為", implicit.reason)
    assertEquals("あらし", implicit.notificationReason)

    val oneWordReason = assertIs<BanArguments.Valid>(BanArguments.parse(listOf("perm")))
    assertIs<PunishmentDuration.Permanent>(oneWordReason.duration)
    assertEquals("perm", oneWordReason.reason)
    assertEquals("永久", oneWordReason.durationLabel)
  }

  private fun millis(raw: String): Long =
      assertIs<PunishmentDuration.Temporary>(DurationParser.parse(raw)).millis
}

class AdvancedBanImporterTest {
  @Test
  fun handlesEscapesUuidNormalizationAndExcludedTypes() {
    val script =
        """
        INSERT INTO PUNISHMENTS VALUES(1,'Steve','069a79f444e94726a5befca404e35881','it''s bad','CONSOLE','TEMP_BAN',1000,2000,'1s')
        INSERT INTO PUNISHMENTS VALUES(2,'1.2.3.4','1.2.3.4','ip','CONSOLE','IP_BAN',1000,-1,NULL)
        INSERT INTO PUNISHMENTHISTORY VALUES(3,'Alex','00000000-0000-0000-0000-000000000001','grief','Admin','BAN',1000,-1,NULL)
        INSERT INTO PUNISHMENTHISTORY VALUES(4,'Alex','00000000-0000-0000-0000-000000000001','kick','Admin','KICK',1000,-1,NULL)
        INSERT INTO PUNISHMENTHISTORY VALUES(5,'1.2.3.4','1.2.3.4','ip','Admin','IP_BAN',1000,-1,NULL)
        """
            .trimIndent()
    val batch = AdvancedBanImporter.parse(script)

    assertEquals(1, batch.active.size)
    assertEquals(1, batch.history.size)
    assertEquals("it's bad", batch.active.single().reason)
    assertEquals(
        UUID.fromString("069a79f4-44e9-4726-a5be-fca404e35881"),
        batch.active.single().uuid,
    )
    assertEquals(mapOf("TEMP_BAN" to 1, "IP_BAN" to 1), batch.activeCounts)
    assertEquals(mapOf("BAN" to 1, "KICK" to 1, "IP_BAN" to 1), batch.historyCounts)
  }

  @Test
  fun reportsProductionShapeCountsWithoutImportingIpBanOrKick() {
    fun rows(table: String, type: String, count: Int, firstId: Int) =
        (0 until count).joinToString("\n") { offset ->
          val id = firstId + offset
          "INSERT INTO $table VALUES($id,'P$id','00000000-0000-0000-0000-${id.toString().padStart(12, '0')}','r','op','$type',1,-1,NULL)"
        }
    val script =
        listOf(
                rows("PUNISHMENTS", "BAN", 294, 1),
                rows("PUNISHMENTS", "TEMP_BAN", 51, 1001),
                rows("PUNISHMENTS", "IP_BAN", 1, 2001),
                rows("PUNISHMENTHISTORY", "BAN", 299, 3001),
                rows("PUNISHMENTHISTORY", "TEMP_BAN", 158, 4001),
                rows("PUNISHMENTHISTORY", "KICK", 3, 5001),
                rows("PUNISHMENTHISTORY", "IP_BAN", 1, 6001),
            )
            .joinToString("\n")
    val batch = AdvancedBanImporter.parse(script)

    assertEquals(346, batch.activeCounts.values.sum())
    assertEquals(461, batch.historyCounts.values.sum())
    assertEquals(345, batch.active.size)
    assertEquals(457, batch.history.size)
  }

  @Test
  fun decodesHsqldbUnicodeEscapesAndResolvesNameOnlyRows() {
    val known = UUID.fromString("00000000-0000-0000-0000-00000000000a")
    val script =
        """
        INSERT INTO PUNISHMENTS VALUES(1,'Known','known','破壊 \n','op','TEMP_BAN',1,2,NULL)
        INSERT INTO PUNISHMENTS VALUES(2,'Ghost','ghost','r','op','TEMP_BAN',1,2,NULL)
        """
            .trimIndent()
    val batch = AdvancedBanImporter.parse(script) { if (it == "known") known else null }

    assertEquals(known, batch.active.single().uuid)
    assertEquals("破壊 \\n", batch.active.single().reason)
    assertEquals(listOf("ghost"), batch.unresolvedNames)
  }

  @Test
  fun appliesLogInsertsAndDeletesById() {
    val script =
        """
        INSERT INTO PUNISHMENTS VALUES(1,'Old','00000000-0000-0000-0000-000000000001','old','op','BAN',100,-1,NULL)
        INSERT INTO PUNISHMENTHISTORY VALUES(10,'Gone','00000000-0000-0000-0000-000000000010','gone','op','BAN',100,-1,NULL)
        """
            .trimIndent()
    val log =
        """
        /*C255*/DELETE FROM PUBLIC.PUNISHMENTS WHERE NAME='Old' AND ID=1 AND UUID='x'
        /*C255*/INSERT INTO PUBLIC.PUNISHMENTS VALUES(2,'New','00000000-0000-0000-0000-000000000002','\u65b0','op','TEMP_BAN',200,9999999999999,NULL)
        DELETE FROM PUBLIC.PUNISHMENTHISTORY WHERE ID=10 AND NAME='Gone'
        INSERT INTO PUNISHMENTHISTORY (ID,NAME,UUID,REASON,OPERATOR,PUNISHMENTTYPE,START,END,CALCULATION) VALUES(11,'Kept','00000000-0000-0000-0000-000000000011','kept','op','BAN',200,-1,NULL)
        COMMIT
        """
            .trimIndent()

    val batch = AdvancedBanImporter.parse(script, log)

    assertEquals(listOf("New"), batch.active.map { it.name })
    assertEquals("新", batch.active.single().reason)
    assertEquals(listOf("Kept"), batch.history.map { it.name })
  }
}

class PunishmentRecordTest {
  private val record =
      PunishmentRecord(
          uuid = UUID.randomUUID(),
          name = "Steve",
          type = PunishmentType.TEMP_BAN,
          reason = "reason",
          operator = "Admin",
          start = 100,
          end = 200,
      )

  @Test
  fun expiresAtBoundary() {
    assertTrue(record.isActiveAt(199))
    assertFalse(record.isActiveAt(200))
    assertTrue(record.copy(end = null).isActiveAt(Long.MAX_VALUE))
  }
}

class PunishmentDatabaseTest {
  @Test
  fun expiredBanIsRemovedDuringLookup() {
    val database =
        PunishmentDatabase(
            java.nio.file.Files.createTempDirectory("oyasaiban-test").resolve("test.db")
        )
    val uuid = UUID.randomUUID()
    try {
      database
          .createBan(
              PunishmentRecord(
                  uuid = uuid,
                  name = "Steve",
                  type = PunishmentType.TEMP_BAN,
                  reason = "reason",
                  operator = "Admin",
                  start = 100,
                  end = 200,
              )
          )
          .join()
      assertNull(database.check(uuid, 200).join())
      assertTrue(database.banList(200).join().isEmpty())
    } finally {
      database.close()
    }
  }

  @Test
  fun repeatedImportAddsNothing() {
    val database =
        PunishmentDatabase(Files.createTempDirectory("oyasaiban-test").resolve("test.db"))
    val uuid = UUID.fromString("00000000-0000-0000-0000-000000000001")
    val script =
        writeScript(
            """
            INSERT INTO PUNISHMENTS VALUES(1,'Steve','$uuid','active','op','BAN',100,-1,NULL)
            INSERT INTO PUNISHMENTS VALUES(3,'Expired','00000000-0000-0000-0000-000000000003','expired','op','TEMP_BAN',100,200,NULL)
            INSERT INTO PUNISHMENTHISTORY VALUES(2,'Steve','$uuid','history','op','BAN',100,-1,NULL)
            """
        )
    try {
      val dryRun = database.importAdvancedBan(script, null, false, { null }, now = 200).join()
      val first = database.importAdvancedBan(script, null, true, { null }, now = 200).join()
      val second = database.importAdvancedBan(script, null, true, { null }, now = 200).join()

      assertEquals(1, dryRun.activeNew)
      assertEquals(1, dryRun.historyNew)
      assertEquals(1, first.activeNew)
      assertEquals(1, first.historyNew)
      assertEquals(0, second.activeNew)
      assertEquals(0, second.historyNew)
      assertEquals(1, database.banList(200).join().size)
      assertEquals(1, database.history(uuid).join().size)
    } finally {
      database.close()
    }
  }

  @Test
  fun importDoesNotReplaceAnOyasaiBanActivePunishment() {
    val database =
        PunishmentDatabase(Files.createTempDirectory("oyasaiban-test").resolve("test.db"))
    val uuid = UUID.fromString("00000000-0000-0000-0000-000000000002")
    val existing =
        PunishmentRecord(
            uuid = uuid,
            name = "New",
            type = PunishmentType.BAN,
            reason = "new",
            operator = "Admin",
            start = 200,
            end = null,
        )
    val script =
        writeScript("INSERT INTO PUNISHMENTS VALUES(1,'Old','$uuid','old','op','BAN',100,-1,NULL)")
    try {
      database.createBan(existing).join()
      val result = database.importAdvancedBan(script, null, true, { null }, now = 300).join()

      assertEquals(0, result.activeNew)
      assertEquals("new", database.check(uuid, 300).join()?.reason)
    } finally {
      database.close()
    }
  }

  private fun writeScript(contents: String) =
      Files.createTempFile("advancedban", ".script").also { Files.writeString(it, contents) }
}
