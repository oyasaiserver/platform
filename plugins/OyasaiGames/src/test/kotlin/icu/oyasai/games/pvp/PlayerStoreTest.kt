package icu.oyasai.games.pvp

import java.io.File
import kotlin.test.*
import org.bukkit.configuration.file.YamlConfiguration
import org.junit.jupiter.api.io.TempDir

class PlayerStoreTest {
  @Test
  fun `both arena modules share the snapshot participation gate`(@TempDir folder: File) {
    val id = java.util.UUID.randomUUID()
    assertFalse(gameSnapshotPending(folder, id))
    val pvp =
        File(folder, "pvp/players/$id.yml").also {
          it.parentFile.mkdirs()
          it.writeText("original: true")
        }
    assertTrue(gameSnapshotPending(folder, id))
    pvp.delete()
    File(folder, "tntrun/players/$id.yml").also {
      it.parentFile.mkdirs()
      it.writeText("original: true")
    }
    assertTrue(gameSnapshotPending(folder, id))
    assertFalse(gameSnapshotPending(folder, java.util.UUID.randomUUID()))
  }

  @Test
  fun `a failed restore or vanilla save retains the journal for the next connection`(
      @TempDir folder: File
  ) {
    val file = File(folder, "player.yml")
    val state =
        YamlConfiguration().also {
          it.set("inventory", listOf("fictional original item"))
          it.set("health", 18.0)
        }
    saveYaml(file, state)
    var inventory = listOf("fictional game item")
    assertFails {
      recoverSavedState(file) { y ->
        inventory = y.getStringList("inventory")
        error("simulated player-data save failure")
      }
    }
    assertTrue(file.exists())
    assertEquals(listOf("fictional original item"), inventory)
    recoverSavedState(file) { y ->
      inventory = y.getStringList("inventory")
      assertTrue(file.exists(), "journal must remain until player-data save completes")
    }
    assertFalse(file.exists())
    assertEquals(listOf("fictional original item"), inventory)
  }

  @Test
  fun `corrupt snapshot is retained and never applied`(@TempDir folder: File) {
    val file = File(folder, "player.yml").also { it.writeText("inventory: [unterminated") }
    var called = false
    assertFails { recoverSavedState(file) { called = true } }
    assertFalse(called)
    assertTrue(file.exists())
  }

  @Test
  fun `failed snapshot write does not publish a player journal`(@TempDir folder: File) {
    val file = File(folder, "player.yml")
    File(folder, "player.yml.tmp").mkdir()
    assertFails { saveYaml(file, YamlConfiguration()) }
    assertFalse(file.exists())
  }
}
