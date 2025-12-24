package com.github.sahyuya.socialvotes.util

import com.github.sahyuya.socialvotes.SocialVotes
import java.text.SimpleDateFormat
import java.util.Calendar
import java.util.Date
import java.util.TimeZone

object TimeParser {

    private val TOKEN_REGEX = Regex("(\\d+)(y|M|d|h|min)")
    private val JST: TimeZone = TimeZone.getTimeZone("Asia/Tokyo")

    fun parse(input: String): Long? {

        val trimmed = input.trim()

        // ---- クリア指定 ----
        if (trimmed == "0") {
            return -1L
        }

        val now = Calendar.getInstance(JST)

        var year: Int? = null
        var month: Int? = null
        var day: Int? = null
        var hour: Int? = null
        var minute: Int? = null

        for (m in TOKEN_REGEX.findAll(trimmed)) {
            val value = m.groupValues[1].toInt()
            when (m.groupValues[2]) {
                "y" -> year = value
                "M" -> month = value
                "d" -> day = value
                "h" -> hour = value
                "min" -> minute = value
            }
        }

        // 必須チェック
        if (day == null || hour == null) return null

        val cal = Calendar.getInstance(JST)
        cal.clear()

        cal.set(Calendar.YEAR, year ?: now.get(Calendar.YEAR))
        cal.set(Calendar.MONTH, (month ?: (now.get(Calendar.MONTH) + 1)) - 1)
        cal.set(Calendar.DAY_OF_MONTH, day)
        cal.set(Calendar.HOUR_OF_DAY, hour)
        cal.set(Calendar.MINUTE, minute ?: 0)
        cal.set(Calendar.SECOND, 0)
        cal.set(Calendar.MILLISECOND, 0)

        return cal.timeInMillis
    }
}

object TimeUtil {

    private val JST: TimeZone = TimeZone.getTimeZone("Asia/Tokyo")
    private val FORMAT = SimpleDateFormat("yyyy/MM/dd HH:mm").apply { timeZone = JST }

    fun format(time: Long?): String {
        return if (time == null) {
            "未設定（常時可）"
        } else {
            FORMAT.format(Date(time))
        }
    }

    fun formatPeriod(start: Long?, end: Long?): List<String> {
        return listOf(
            if (start == null) " §7開始: 未設定（常時可）"
            else " §7開始: §e${format(start)}",

            if (end == null) " §7終了: 未設定（常時可）"
            else " §7終了: §e${format(end)}"
        )
    }
    fun isVotePeriod(groupName: String?): Boolean {
        if (groupName == null) return true
        val g = SocialVotes.dataManager.groupByName[groupName] ?: return true
        val now = System.currentTimeMillis()

        g.startTime?.let { if (now < it) return false }
        g.endTime?.let { if (now >= it) return false }

        return true
    }

}
