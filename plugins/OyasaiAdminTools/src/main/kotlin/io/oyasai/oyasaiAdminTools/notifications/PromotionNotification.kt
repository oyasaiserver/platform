package io.oyasai.oyasaiAdminTools.notifications

import com.baakun.dynamicprofile.data.PromotionRecord
import java.util.UUID

data class PromotionNotification(
    val targetUUID: UUID,
    val targetName: String,
    val newRankName: String,
    val promoterName: String,
    val record: PromotionRecord,
    val special: Boolean,
)
