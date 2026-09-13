package io.oyasai.oyasaiAdminTools.punishment

import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertIs
import kotlin.test.assertNull
import kotlin.test.assertTrue

class DurationParserTest {
  @Test
  fun parsesTabCompleteDurations() {
    assertEquals(30L * 24 * 60 * 60 * 1000, millis("1mo"))
    assertEquals(2L * 7 * 24 * 60 * 60 * 1000, millis("2w"))
    assertEquals(3L * 24 * 60 * 60 * 1000, millis("3d"))
    assertEquals(4L * 60 * 60 * 1000, millis("4h"))
    assertEquals(5L * 60 * 1000, millis("5m"))
    assertEquals(6L * 1000, millis("6s"))
  }

  @Test
  fun monthsAreNotParsedAsMinutes() {
    assertEquals(30L * 24 * 60 * 60 * 1000, millis("1mo"))
  }

  @Test
  fun concatenatesUnits() {
    assertEquals(24L * 60 * 60 * 1000 + 2L * 60 * 60 * 1000, millis("1d2h"))
  }

  @Test
  fun permanentKeywords() {
    assertIs<PunishmentDuration.Permanent>(DurationParser.parse("perm"))
    assertIs<PunishmentDuration.Permanent>(DurationParser.parse("permanent"))
    assertIs<PunishmentDuration.Permanent>(DurationParser.parse("-1"))
  }

  @Test
  fun rejectsGarbage() {
    assertNull(DurationParser.parse("1x"))
    assertNull(DurationParser.parse(""))
    assertNull(DurationParser.parse("abc"))
  }

  private fun millis(raw: String): Long {
    val parsed = DurationParser.parse(raw)
    assertIs<PunishmentDuration.Temporary>(parsed)
    return parsed.millis
  }
}

class WarnActionParserTest {
  @Test
  fun parsesSimplifiedActions() {
    assertEquals(WarnAction.Kick, WarnActionParser.parse("kick"))
    assertEquals(WarnAction.Ban(PunishmentDuration.Permanent), WarnActionParser.parse("ban"))
    val temp = WarnActionParser.parse("tempban 30m")
    assertIs<WarnAction.Ban>(temp)
    assertEquals(30L * 60 * 1000, (temp.duration as PunishmentDuration.Temporary).millis)
  }

  @Test
  fun parsesAdvancedBanTemplates() {
    val parsed =
        WarnActionParser.parse("tempban %PLAYER% 7d &c&oYou have received your 6th warning!")
    assertIs<WarnAction.Ban>(parsed)
    assertEquals(7L * 24 * 60 * 60 * 1000, (parsed.duration as PunishmentDuration.Temporary).millis)
  }
}

class AdvancedBanImporterTest {
  @Test
  fun parsesHsqldbInserts() {
    val script =
        """
        CREATE MEMORY TABLE PUBLIC.PUNISHMENTS(ID INTEGER)
        INSERT INTO PUNISHMENTHISTORY VALUES(0,'Steve','069a79f4-44e9-4726-a5be-fca404e35881','it''s bad','CONSOLE','TEMP_BAN',1000,2000,'1s')
        INSERT INTO PUBLIC.PUNISHMENTS VALUES(0,'Steve','069a79f4-44e9-4726-a5be-fca404e35881','it''s bad','CONSOLE','TEMP_BAN',1000,2000,'1s')
        INSERT INTO PUNISHMENTHISTORY VALUES(1,'Alex','00000000000000000000000000000001','note','OP','NOTE',1,-1,NULL)
        """
            .trimIndent()
    val batch = AdvancedBanImporter.parseHsqldbScript(script)
    assertEquals(1, batch.history.size)
    assertEquals(1, batch.active.size)
    assertEquals("Steve", batch.active.first().name)
    assertEquals("it's bad", batch.active.first().reason)
    assertEquals(PunishmentType.TEMPBAN, batch.active.first().type)
    assertEquals(2000L, batch.active.first().end)
    assertTrue(batch.active.first().active)
    assertFalse(batch.history.first().active)
  }

  @Test
  fun parsesCsvDump() {
    val csv =
        """
        uuid,name,type,reason,operator,start,end,active
        069a79f4-44e9-4726-a5be-fca404e35881,Steve,BAN,grief,OP,1000,,true
        """
            .trimIndent()
    val rows = AdvancedBanImporter.parseCsv(csv)
    assertEquals(1, rows.size)
    assertEquals(PunishmentType.BAN, rows.first().type)
    assertNull(rows.first().end)
    assertTrue(rows.first().active)
  }

  @Test
  fun readsLocalAdvancedBanScriptIfPresent() {
    val file =
        java.io.File(
            "/Users/aa/platform/local/paperclip-tmp/plugins/AdvancedBan/data/storage.script"
        )
    if (!file.isFile) return
    val batch = AdvancedBanImporter.parseHsqldbScript(file.readText())
    assertEquals(0, batch.history.size + batch.active.size)
  }
}

class PunishmentStoreTest {
  @Test
  fun roundTripAndExpire() {
    val dir = java.nio.file.Files.createTempDirectory("oyasai-punish")
    val store = PunishmentStore(dir.resolve("punishments.db").toFile())
    store.open()
    val uuid = java.util.UUID.fromString("069a79f4-44e9-4726-a5be-fca404e35881")
    store.insert(
        PunishmentRecord(
            uuid = uuid,
            name = "Steve",
            type = PunishmentType.TEMPBAN,
            reason = "grief",
            operator = "OP",
            start = 1,
            end = 2,
            active = true,
        )
    )
    assertNull(store.findActive(uuid, PunishmentStore.BAN_TYPES))
    store.insert(
        PunishmentRecord(
            uuid = uuid,
            name = "Steve",
            type = PunishmentType.BAN,
            reason = "grief",
            operator = "OP",
            start = System.currentTimeMillis(),
            end = null,
            active = true,
        )
    )
    assertEquals(PunishmentType.BAN, store.findActive(uuid, PunishmentStore.BAN_TYPES)?.type)
    store.close()
  }
}

class MuteCommandMatcherTest {
  private val commands = MuteCommands.DEFAULT

  @Test
  fun blocksNamespacedMe() {
    assertTrue(MuteCommands.isMuted("/minecraft:me hello", commands))
    assertTrue(MuteCommands.isMuted("/msg Steve hi", commands))
    assertTrue(MuteCommands.isMuted("/p msg party", commands))
    assertFalse(MuteCommands.isMuted("/help", commands))
  }
}
