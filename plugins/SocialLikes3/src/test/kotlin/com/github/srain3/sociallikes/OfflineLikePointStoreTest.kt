package com.github.srain3.sociallikes

import java.io.File
import java.util.UUID
import kotlin.test.assertEquals
import kotlin.test.assertFails
import kotlin.test.assertFalse
import org.bukkit.configuration.file.YamlConfiguration
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.io.TempDir

class OfflineLikePointStoreTest {

  @TempDir lateinit var tempDir: File

  @Test
  fun saveBeforeLoadLeavesExistingFileUntouched() {
    val file = tempDir.resolve("offlineLikePoint.yml")
    val original = "existing: data\n"
    file.writeText(original)

    OfflineLikePointStore(tempDir.toPath()).save(emptyMap())

    assertEquals(original, file.readText())
  }

  @Test
  fun saveAfterFailedLoadLeavesExistingFileUntouched() {
    val file = tempDir.resolve("offlineLikePoint.yml")
    val original = "[invalid yaml"
    file.writeText(original)
    val store = OfflineLikePointStore(tempDir.toPath())

    assertFails { store.load() }
    store.save(emptyMap())

    assertEquals(original, file.readText())
  }

  @Test
  fun saveReplacesThePreviousPendingRewardsAndOmitsZeroValues() {
    val store = OfflineLikePointStore(tempDir.toPath())
    val paidUuid = UUID.randomUUID()
    val pendingUuid = UUID.randomUUID()

    store.load()
    store.save(mapOf(paidUuid to 78, pendingUuid to 2))
    store.save(mapOf(pendingUuid to 0))

    val yml = YamlConfiguration.loadConfiguration(tempDir.resolve("offlineLikePoint.yml"))
    assertFalse(yml.contains(paidUuid.toString()))
    assertFalse(yml.contains(pendingUuid.toString()))
    assertEquals(emptyMap(), store.load())
    assertFalse(tempDir.listFiles().orEmpty().any { it.name.endsWith(".tmp") })
  }

  @Test
  fun saveAndLoadRoundTripPendingRewards() {
    val store = OfflineLikePointStore(tempDir.toPath())
    val firstUuid = UUID.randomUUID()
    val secondUuid = UUID.randomUUID()
    val expected = mapOf(firstUuid to 2, secondUuid to 14)

    store.load()
    store.save(expected)

    assertEquals(expected, store.load())
  }
}
