package io.oyasai.anybuilder.common

import io.oyasai.anybuilder.runtime.BaseVehicleCache
import io.oyasai.anybuilder.runtime.BaseVehicleEntityList
import java.util.UUID

object VehicleRegistry {
  private val entityLists = mutableListOf<BaseVehicleEntityList<*>>()
  private val caches = mutableListOf<BaseVehicleCache<*>>()

  fun register(entityList: BaseVehicleEntityList<*>, cache: BaseVehicleCache<*>) {
    entityLists.add(entityList)
    caches.add(cache)
  }

  fun breakAllUserVehicles(uuid: UUID): Int {
    return entityLists.sumOf { it.breakUserVehicles(uuid) }
  }

  fun reloadAllCaches() {
    caches.forEach { it.reloadCache() }
  }

  fun allExit() {
    entityLists.forEach { it.allExit() }
  }
}
