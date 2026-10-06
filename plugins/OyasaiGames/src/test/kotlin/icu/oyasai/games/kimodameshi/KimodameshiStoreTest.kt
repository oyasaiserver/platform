package icu.oyasai.games.kimodameshi

import java.nio.ByteBuffer
import java.nio.file.Files
import java.util.UUID
import java.util.logging.Logger
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith
import kotlin.test.assertNull
import kotlin.test.assertTrue

class KimodameshiStoreTest {
  @Test
  fun decodesSignedLongDoubleAndTextcomponent() {
    assertEquals(
        -123.0,
        SkriptKimodameshiImport.decodeNumber(
            "long",
            hex(ByteBuffer.allocate(8).putLong(-123).array()),
        ),
    )
    assertEquals(
        2.5,
        SkriptKimodameshiImport.decodeNumber(
            "double",
            hex(ByteBuffer.allocate(8).putDouble(2.5).array()),
        ),
    )
    assertEquals(
        "TestPlayer",
        SkriptKimodameshiImport.decodeName("textcomponent", nameHex("TestPlayer")),
    )
    assertFailsWith<IllegalArgumentException> {
      SkriptKimodameshiImport.decodeName("textcomponent", "81046a736f6e208001222222")
    }
    assertFailsWith<IllegalArgumentException> { SkriptKimodameshiImport.decodeNumber("long", "01") }
  }

  @Test
  fun importsOnlyPointsAndNamesOnceAndKeepsRecoveryAcrossReopen() {
    val folder = Files.createTempDirectory("kimodameshi-store")
    val csv = folder.resolve("variables.csv").toFile()
    val database = folder.resolve("kimodameshi.db").toFile()
    val first = UUID.randomUUID()
    val second = UUID.randomUUID()
    val logger = Logger.getAnonymousLogger()
    csv.writeText(
        """
      # Skript variable storage
      minigame::event_points::$first, long, 0000000000000007
      minigame::player_name::$first, textcomponent, ${nameHex("TestPlayer")}
      minigame::player_name::$second, textcomponent, ${nameHex("OtherPlayer")}
      minigame::stamina::$first, long, 0000000000000064
      minigame::backup_inventory::$first, itemstack, not-imported
      """
            .trimIndent()
    )
    KimodameshiStore(database).use { store ->
      assertEquals(ImportCounts(1, 2), store.importLegacy(csv, logger))
      assertEquals(mapOf(first to 7.0), store.allPoints())
      assertEquals("OtherPlayer", store.name(second))
      store.setPoints(first, 10.5)
      store.saveRecovery(first, "inventory: []\n")
    }
    KimodameshiStore(database).use { store ->
      assertNull(store.importLegacy(csv, logger))
      assertEquals(10.5, store.points(first))
      assertEquals(mapOf(first to "inventory: []\n"), store.recoveries())
      store.deleteRecovery(first)
      assertTrue(store.recoveries().isEmpty())
    }
  }

  @Test
  fun runtimeSurvivesReopenAndReplacesPreviousState() {
    val database = Files.createTempDirectory("kimodameshi-runtime").resolve("runtime.db").toFile()
    KimodameshiStore(database).use { store ->
      assertNull(store.runtime())
      store.saveRuntime("state: grace\ntimer: 890\n")
    }
    KimodameshiStore(database).use { store ->
      assertEquals("state: grace\ntimer: 890\n", store.runtime())
      store.saveRuntime("state: playing\ntimer: 860\n")
    }
    KimodameshiStore(database).use { store ->
      assertEquals("state: playing\ntimer: 860\n", store.runtime())
    }
  }

  @Test
  fun emptySuccessfulImportAlsoRunsOnlyOnceAndMalformedRowsAreAtomic() {
    val folder = Files.createTempDirectory("kimodameshi-empty")
    val csv = folder.resolve("variables.csv").toFile()
    val uuid = UUID.randomUUID()
    val logger = Logger.getAnonymousLogger()
    csv.writeText("minigame::stamina::$uuid, long, 0000000000000000")
    KimodameshiStore(folder.resolve("empty.db").toFile()).use { store ->
      assertEquals(ImportCounts(0, 0), store.importLegacy(csv, logger))
      csv.writeText("minigame::event_points::$uuid, long, 0000000000000001")
      assertNull(store.importLegacy(csv, logger))
      assertTrue(store.allPoints().isEmpty())
    }
    csv.writeText(
        "minigame::event_points::$uuid, long, 0000000000000001\nminigame::player_name::$uuid, textcomponent, 00"
    )
    KimodameshiStore(folder.resolve("malformed.db").toFile()).use { store ->
      assertFailsWith<IllegalStateException> { store.importLegacy(csv, logger) }
      assertTrue(store.allPoints().isEmpty())
      assertNull(store.name(uuid))
    }
  }

  private fun nameHex(name: String): String {
    val json = "\"$name\"".toByteArray(Charsets.UTF_8)
    return "81046a736f6e2080" + hex(byteArrayOf(json.size.toByte())) + hex(json)
  }

  private fun hex(bytes: ByteArray): String =
      bytes.joinToString("") { "%02x".format(it.toInt() and 0xff) }
}
