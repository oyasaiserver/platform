package com.github.srain3.sociallikes.datas

import java.time.Instant
import java.time.LocalDateTime
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertNotNull
import kotlin.test.assertTrue

class BuildTimestampsTest {
  @Test
  fun `epoch values are read as JST`() {
    val epoch = Instant.parse("2026-06-15T00:00:00Z").toEpochMilli().toString()
    assertEquals(LocalDateTime.of(2026, 6, 15, 9, 0), BuildTimestamps.parseStored(epoch))
  }

  @Test
  fun `winter New York wall clock is converted with fourteen hour difference`() {
    assertEquals(
        LocalDateTime.of(2022, 12, 24, 4, 0),
        BuildTimestamps.parseStored("2022-12-23T14:00:00"),
    )
  }

  @Test
  fun `summer New York wall clock is converted with thirteen hour difference`() {
    assertEquals(
        LocalDateTime.of(2022, 6, 16, 3, 0),
        BuildTimestamps.parseStored("2022-06-15T14:00:00"),
    )
  }

  @Test
  fun `JST wall clock remains unchanged`() {
    assertEquals(
        LocalDateTime.of(2023, 6, 15, 14, 0),
        BuildTimestamps.parseStored("2023-06-15T14:00:00"),
    )
  }

  @Test
  fun `UTC wall clock is converted with nine hour difference`() {
    assertEquals(
        LocalDateTime.of(2026, 6, 15, 23, 0),
        BuildTimestamps.parseStored("2026-06-15T14:00:00"),
    )
  }

  @Test
  fun `New York autumn overlap is resolved by TZDB`() {
    assertNotNull(BuildTimestamps.parseStored("2022-11-06T01:30:00"))
  }

  @Test
  fun `encoded timestamps are idempotent`() {
    val parsed = assertNotNull(BuildTimestamps.parseStored("2022-06-15T14:00:00"))
    val stored = BuildTimestamps.toStored(parsed)
    assertTrue(stored.all(Char::isDigit))
    assertEquals(parsed, BuildTimestamps.parseStored(stored))
  }
}
