package io.oyasai.worldgen.world

import java.nio.file.Files
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertNotNull
import org.bukkit.NamespacedKey

class NormalWorldFolderTest {
  @Test
  fun resolvesExistingAndMissingWorldFolders() {
    val root = Files.createTempDirectory("fictional-level")
    try {
      val arena = normalWorldFolder(root, NamespacedKey.minecraft("arena_key"))
      assertNotNull(arena).mkdirs()
      assertEquals(true, arena.isDirectory)
      assertEquals(
          false,
          normalWorldFolder(root, NamespacedKey.minecraft("missing_key"))?.isDirectory,
      )
    } finally {
      root.toFile().deleteRecursively()
    }
  }
}
