package io.oyasai.oyasaiAdminTools.bulletin.announcement.models

data class Announcement(
  val id: String = "",
  val message: String = "", // MiniMessage format
  val interval: Long = 0,  // seconds
  val enabled: Boolean = true,
  val targetGroups: List<String> = emptyList(),
  val sound: String? = null,
  val expiresAt: Long? = null
)
