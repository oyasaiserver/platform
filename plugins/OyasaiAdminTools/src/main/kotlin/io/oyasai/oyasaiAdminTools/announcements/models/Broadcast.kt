package io.oyasai.oyasaiAdminTools.announcements.models

data class Broadcast(
    val id: String = "",
    val message: String = "",
    val interval: Long = 0,
    val enabled: Boolean = true,
    val requiredGroups: List<String> = emptyList()
)
