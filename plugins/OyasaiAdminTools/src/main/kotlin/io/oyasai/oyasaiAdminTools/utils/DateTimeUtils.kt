package io.oyasai.oyasaiAdminTools.utils

import java.time.LocalDateTime
import java.time.ZoneId
import java.time.ZonedDateTime
import java.time.format.DateTimeFormatter

object DateTimeUtils {
    private val jstZone = ZoneId.of("Asia/Tokyo")
    private val formatter = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss")

    fun parseToJST(dateString: String): ZonedDateTime {
        val ldt = LocalDateTime.parse(dateString, formatter)
        return ldt.atZone(jstZone)
    }

    fun formatToString(ldt: LocalDateTime): String {
        val jstDateTime = ldt.atZone(jstZone)
        return jstDateTime.format(formatter)
    }

    fun unixToJST(epochMilli: Long): ZonedDateTime {
        return ZonedDateTime.ofInstant(java.time.Instant.ofEpochMilli(epochMilli), jstZone)
    }

    fun formatToString(zonedDateTime: ZonedDateTime): String {
        val jstDateTime = zonedDateTime.withZoneSameInstant(jstZone)
        return jstDateTime.format(formatter)
    }

    fun getCurrentJST(): ZonedDateTime {
        return ZonedDateTime.now(jstZone)
    }


}