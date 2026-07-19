package com.ququla89.headhunt.manager

import java.util.UUID

interface TreasureCatalog {
  val size: Int

  fun contains(id: UUID): Boolean
}
