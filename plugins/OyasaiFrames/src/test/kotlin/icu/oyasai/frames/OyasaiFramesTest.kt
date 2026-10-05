package icu.oyasai.frames

import java.lang.reflect.Proxy
import java.nio.file.Files
import java.util.UUID
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith
import kotlin.test.assertFalse
import kotlin.test.assertTrue
import org.bukkit.NamespacedKey
import org.bukkit.plugin.Plugin
import org.bukkit.plugin.PluginDescriptionFile

class OyasaiFramesTest {
  @Test
  fun legacyDataPreventsDatabaseCreation() {
    val plugins = Files.createTempDirectory("oyasai-frames-migration").toFile()
    plugins.resolve("ImageOnMap").mkdir()
    plugins.resolve("ImageOnMap/image.db").createNewFile()
    val dataFolder = plugins.resolve("OyasaiFrames")

    assertFailsWith<IllegalStateException> {
      requireMigratedDatabases(dataFolder)
      FrameStore(dataFolder.resolve("frames.db")).close()
    }
    assertFalse(dataFolder.resolve("frames.db").exists())
    assertFalse(dataFolder.resolve("pictures.db").exists())
  }

  @Test
  fun legacyPdcKeys() {
    val lockerName = PluginDescriptionFile("Gakubuchi-Locker", "1", "main")
    val paintName = PluginDescriptionFile("PaintTools", "1", "main")
    assertEquals("gakubuchi-locker", lockerName.namespace())
    assertEquals("painttools", paintName.namespace())
    assertEquals(NamespacedKey(oldPlugin(lockerName.namespace()), "owner"), OWNER_KEY)
    assertEquals(NamespacedKey(oldPlugin(paintName.namespace()), "ID"), PAINT_ID_KEY)
    assertEquals("gakubuchi-locker:owner", OWNER_KEY.toString())
    assertEquals("painttools:id", PAINT_ID_KEY.toString())
    assertEquals("imageonmap:splatter", NamespacedKey("imageonmap", "splatter").toString())
  }

  private fun oldPlugin(namespace: String): Plugin =
      Proxy.newProxyInstance(Plugin::class.java.classLoader, arrayOf(Plugin::class.java)) {
          _,
          method,
          _ ->
        if (method.name == "namespace") namespace else error("Unexpected ${method.name}")
      } as Plugin

  @Test
  fun paintAndTransparencyRequireFrameOwnerOrOp() {
    val owner = UUID.randomUUID()
    val stranger = UUID.randomUUID()
    assertFalse(mayModify(owner, stranger, false))
    assertTrue(mayModify(owner, owner, false))
    assertTrue(mayModify(owner, stranger, true))
    assertTrue(mayModify(null, stranger, false))
    assertEquals(owner, frameOwner(null, owner.toString()))
    assertEquals(owner, frameOwner(owner, stranger.toString()))
  }
}
