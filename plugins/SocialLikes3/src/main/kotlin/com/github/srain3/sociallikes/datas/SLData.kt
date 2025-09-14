package com.github.srain3.sociallikes.datas

import org.bukkit.Location
import java.time.LocalDateTime
import java.util.*

/**
 * SocialLikesの看板データ
 */
data class SLData(
    val id: Int,
    val loc: Location,
    val time: LocalDateTime,
    val owner: UUID,
    var title: String,
    val likes: MutableList<UUID>,
    var check: Boolean,
    var comment: String,
    val worldName: String,
    var discordTextID: Long
)
