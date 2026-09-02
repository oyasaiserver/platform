package com.github.srain3.sociallikes.datas

import java.time.LocalDateTime
import java.util.*
import org.bukkit.Location

/** SocialLikesの看板データ */
data class SLData(
    val id: Int,
    var loc: Location,
    val time: LocalDateTime,
    val owner: UUID,
    var title: String,
    val likes: MutableList<UUID>,
    val likesWithTimestamp: MutableMap<UUID, Long> = mutableMapOf(),
    var check: Boolean,
    var comment: String,
    var worldName: String,
    var discordTextID: Long,
    var deletedAt: LocalDateTime? = null,
    var deletedBy: UUID? = null,
    var signMaterial: String? = null,
)
