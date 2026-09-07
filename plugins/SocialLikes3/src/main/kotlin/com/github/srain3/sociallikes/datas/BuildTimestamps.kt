package com.github.srain3.sociallikes.datas

import java.time.Instant
import java.time.LocalDate
import java.time.LocalDateTime
import java.time.ZoneId
import java.util.logging.Logger

/**
 * The single codec for persisted SocialLikes timestamps.
 *
 * Stored numeric values are epoch milliseconds. Older ISO local timestamps are interpreted using
 * the zone that was in use when that wall-clock value was written.
 */
object BuildTimestamps {
  val ZONE_JST: ZoneId = ZoneId.of("Asia/Tokyo")

  private val zoneNewYork: ZoneId = ZoneId.of("America/New_York")
  private val lastNewYorkDate: LocalDate = LocalDate.of(2022, 12, 23)
  private val lastJstDate: LocalDate = LocalDate.of(2025, 7, 22)
  private val logger: Logger = Logger.getLogger(BuildTimestamps::class.java.name)
  private val epochMillis = Regex("\\d{10,}")

  fun isEpochMillis(raw: String): Boolean = raw.length == 13 && raw.all(Char::isDigit)

  fun normalizeStored(raw: String): String? = parseStored(raw)?.let(::toStored)

  /** Returns a JST local time, or null after logging malformed persisted input. */
  fun parseStored(raw: String): LocalDateTime? =
      try {
        if (raw.matches(epochMillis)) {
          Instant.ofEpochMilli(raw.toLong()).atZone(ZONE_JST).toLocalDateTime()
        } else {
          val wallClock = LocalDateTime.parse(raw)
          wallClock
              .atZone(zoneFor(wallClock.toLocalDate()))
              .withZoneSameInstant(ZONE_JST)
              .toLocalDateTime()
        }
      } catch (e: Exception) {
        logger.warning("[SL3] Could not parse stored build timestamp '$raw': ${e.message}")
        null
      }

  /** Encodes a JST local time as a decimal epoch-millisecond string. */
  fun toStored(time: LocalDateTime): String =
      time.atZone(ZONE_JST).toInstant().toEpochMilli().toString()

  private fun zoneFor(wallDate: LocalDate): ZoneId =
      when {
        !wallDate.isAfter(lastNewYorkDate) -> zoneNewYork
        !wallDate.isAfter(lastJstDate) -> ZONE_JST
        else -> ZoneId.of("UTC")
      }
}
