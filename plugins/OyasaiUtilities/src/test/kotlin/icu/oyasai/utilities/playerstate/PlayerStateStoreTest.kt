package icu.oyasai.utilities.playerstate

import java.io.File
import java.nio.file.Files
import java.util.UUID
import kotlin.test.*
import org.bukkit.configuration.file.YamlConfiguration

class PlayerStateStoreTest {
  private fun withDirectories(test: (File, File) -> Unit) {
    val root = File("build/test-tmp").apply { mkdirs() }
    val temporary = Files.createTempDirectory(root.toPath(), "player-state-").toFile()
    try {
      test(File(temporary, "own"), File(temporary, "essentials").apply { mkdirs() })
    } finally {
      temporary.deleteRecursively()
    }
  }

  @Test
  fun `first legacy import is persisted and clearing nickname never imports again`() =
      withDirectories { own, legacy ->
        val id = UUID.randomUUID()
        val legacyFile = File(legacy, "$id.yml")
        legacyFile.writeText("nickname: LegacyName\nflymode: true\n")
        val store = PlayerStateStore(own, legacy)
        val imported = store.get(id)
        assertEquals("LegacyName", imported.nickname)
        assertTrue(imported.flyMode)
        assertTrue(
            YamlConfiguration.loadConfiguration(File(own, "$id.yml"))
                .getBoolean("essentials-imported")
        )
        imported.nickname = null
        imported.flyMode = false
        imported.flying = true
        imported.flySpeed = 0.4f
        imported.walkSpeed = 0.3f
        imported.lastHeal = 123456789
        store.save(id, imported)
        legacyFile.writeText("nickname: ChangedLegacyName\nflymode: true\n")
        val reloaded = PlayerStateStore(own, legacy).get(id)
        assertNull(reloaded.nickname)
        assertFalse(reloaded.flyMode)
        assertTrue(reloaded.flying)
        assertEquals(0.4f, reloaded.flySpeed)
        assertEquals(0.3f, reloaded.walkSpeed)
        assertEquals(123456789L, reloaded.lastHeal)
        store.forget(id)
        assertNull(store.get(id).nickname)
      }

  @Test
  fun `absent legacy nickname is also marked imported before a later legacy file appears`() =
      withDirectories { own, legacy ->
        val id = UUID.randomUUID()
        assertNull(PlayerStateStore(own, legacy).get(id).nickname)
        File(legacy, "$id.yml").writeText("nickname: LateLegacyName\nflymode: true\n")
        val state = PlayerStateStore(own, legacy).get(id)
        assertNull(state.nickname)
        assertFalse(state.flyMode)
      }
}
