package com.ququla89.headhunt.manager

import com.ququla89.headhunt.model.Treasure
import java.nio.file.Files
import java.nio.file.Path
import java.util.UUID
import java.util.logging.Logger
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertTrue
import org.junit.jupiter.api.io.TempDir

class TreasureFileStoreTest {
  @TempDir lateinit var tempDirectory: Path

  private val logger: Logger = Logger.getAnonymousLogger()

  @Test
  fun `save is round trippable and preserves a backup`() {
    val dataFile = tempDirectory.resolve("treasures.yml").toFile()
    val store = TreasureFileStore(dataFile, logger)
    val first = Treasure(UUID.randomUUID(), "world", 1, 64, 2)
    val second = Treasure(UUID.randomUUID(), "world_nether", 3, 70, 4)

    assertTrue(store.save(listOf(first)))
    assertTrue(store.save(listOf(second)))
    assertEquals(listOf(second), store.load().values.toList())

    val backupStore = TreasureFileStore(tempDirectory.resolve("treasures.yml.bak").toFile(), logger)
    assertEquals(listOf(first), backupStore.load().values.toList())
  }

  @Test
  fun `load skips malformed entries instead of inventing zero coordinates`() {
    val validId = UUID.randomUUID()
    val invalidId = UUID.randomUUID()
    val dataFile = tempDirectory.resolve("treasures.yml")
    Files.writeString(
        dataFile,
        """
            treasures:
              $validId:
                world: world
                x: 1
                y: 64
                z: 2
              $invalidId:
                world: world
                x: 3
                z: 4
            """
            .trimIndent(),
    )

    val loaded = TreasureFileStore(dataFile.toFile(), logger).load()

    assertEquals(setOf(validId), loaded.keys)
    assertEquals(Treasure(validId, "world", 1, 64, 2), loaded[validId])
  }
}
