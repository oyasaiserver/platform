package com.github.srain3.sociallikes.datas

import java.time.LocalDateTime
import java.util.UUID

data class PublicityData(
    val dataID: Int,
    val timeStamp: LocalDateTime,
    val user: UUID,
    val slid: Int
)
