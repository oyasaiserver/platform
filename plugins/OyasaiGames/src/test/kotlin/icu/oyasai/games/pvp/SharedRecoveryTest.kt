package icu.oyasai.games.pvp

import java.io.File
import kotlin.test.*
import org.junit.jupiter.api.io.TempDir

class SharedRecoveryTest {
  @Test
  fun `another inventory game cannot capture temporary items`(@TempDir root: File) {
    val pvp = File(root, "pvp/players").also { it.mkdirs() }
    val bw = File(root, "bedwars/players").also { it.mkdirs() }
    requireExclusiveSnapshot(bw, "fictional.yml")
    File(pvp, "fictional.yml").writeText("original inventory")
    assertFailsWith<IllegalStateException> { requireExclusiveSnapshot(bw, "fictional.yml") }
    requireExclusiveSnapshot(pvp, "fictional.yml")
    File(pvp, "fictional.yml").delete()
    File(bw, "fictional.yml").writeText("original inventory")
    assertFailsWith<IllegalStateException> { requireExclusiveSnapshot(pvp, "fictional.yml") }
  }

  @Test
  fun `all inventory modules reject another module journal`(@TempDir root: File) {
    val modules = listOf("pvp", "bedwars", "tntrun")
    for (owner in modules) {
      val directory = File(root, "$owner/players").also { it.mkdirs() }
      val journal = File(directory, "fictional.yml").also { it.writeText("original inventory") }
      for (candidate in modules.filter { it != owner }) {
        assertFailsWith<IllegalStateException> {
          requireExclusiveSnapshot(File(root, "$candidate/players"), journal.name)
        }
      }
      requireExclusiveSnapshot(directory, journal.name)
      journal.delete()
    }
  }
}
