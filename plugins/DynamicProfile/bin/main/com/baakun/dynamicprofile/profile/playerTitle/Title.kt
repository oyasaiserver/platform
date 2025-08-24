package com.baakun.dynamicprofile.profile.playerTitle

import com.google.gson.annotations.Expose
import java.util.UUID

data class Title(
  @Expose var id: Int,
  @Expose var title: String = "NewTitle",
  @Expose var owners: MutableList<UUID> = mutableListOf(),
  @Expose var rarity: Int = 0,
  @Expose var createdAt: Long = System.currentTimeMillis(),
) {}
