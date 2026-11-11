package com.github.sahyuya.oyasaiMusic.audio

import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith
import kotlin.test.assertTrue

class SoundCatalogUpgradeTest {
  private fun catalog(name: String) =
      checkNotNull(javaClass.getResourceAsStream("/$name")).bufferedReader().use { it.readText() }

  @Test
  fun `26 point 3 catalog preserves every old sign number and seed mapping`() {
    val previous = VanillaSoundCatalog.parseDefinitions(catalog("sound-catalog-26.2.json"))
    val current =
        VanillaSoundCatalog.parseDefinitions(catalog("sound-catalog.json")).associateBy {
          it.eventKey
        }
    assertEquals(1961, previous.size)
    assertEquals(1984, current.size)
    for (old in previous) {
      val updated = current.getValue(old.eventKey)
      assertEquals(old.idPrefix, updated.idPrefix, old.eventKey)
      assertEquals(old.availablePatterns(), updated.availablePatterns(), old.eventKey)
      for (seed in 0L..31L) {
        assertEquals(old.patternForSeed(seed), updated.patternForSeed(seed), old.eventKey)
      }
    }
    val oldKeys = previous.mapTo(mutableSetOf()) { it.eventKey }
    val added = current.values.filter { it.eventKey !in oldKeys }
    assertEquals(23, added.size)
    assertEquals(23, added.map { it.idPrefix }.toSet().size)
    assertTrue(added.all { it.idPrefix?.startsWith("10.") == true && !it.bankCompatible })
  }

  @Test
  fun `duplicate supplemental numbers are rejected`() {
    assertFailsWith<IllegalArgumentException> {
      VanillaSoundCatalog.parseDefinitions(
          """{
            "block.example.one": {"sounds":["one"],"oyasaimusic_sign_id":"10.1.1"},
            "block.example.two": {"sounds":["two"],"oyasaimusic_sign_id":"10.1.1"}
          }"""
      )
    }
  }
}
