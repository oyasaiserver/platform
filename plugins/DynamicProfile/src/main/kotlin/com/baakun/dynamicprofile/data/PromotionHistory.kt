package com.baakun.dynamicprofile.data

import com.google.gson.annotations.Expose
import java.time.LocalDateTime
import java.time.format.DateTimeFormatter

enum class PromotionType {
  PROMOTE,
  DEMOTE,
}

data class PromotionRecord(
    @Expose val type: PromotionType = PromotionType.PROMOTE,
    @Expose val newRank: String = "NONE",
    @Expose val previousRank: String = "NONE",
    @Expose val promotedBy: String = "CONSOLE",
    @Expose val isForced: Boolean = false,
    @Expose
    val date: String = LocalDateTime.MIN.format(DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss")),
    @Expose val note: String = "",
    @Expose val playedSec: Long = 0L,
    @Expose val lastBuildID: Int = Integer.MIN_VALUE,
    @Expose val builds: Int = 0,
    @Expose val lastLv: Int = 0,
    @Expose val lastExp: Int = 0,
)

class PromotionHistory {
  @Expose val records: MutableList<PromotionRecord> = mutableListOf()
}
