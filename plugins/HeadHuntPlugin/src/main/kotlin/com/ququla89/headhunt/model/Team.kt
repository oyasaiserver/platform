package com.ququla89.headhunt.model

import java.util.UUID

class Team(
    val name: String,
) {
  val members: MutableSet<UUID> = linkedSetOf()
}
