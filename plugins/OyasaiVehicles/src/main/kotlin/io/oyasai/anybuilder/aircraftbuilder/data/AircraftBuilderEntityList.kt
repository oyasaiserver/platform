package io.oyasai.anybuilder.aircraftbuilder.data

import io.oyasai.anybuilder.runtime.BaseVehicleEntityList
import java.util.LinkedHashSet
import java.util.UUID

object AircraftBuilderEntityList : BaseVehicleEntityList<AircraftBuilderEntityData>() {
  override val cache: MutableSet<AircraftBuilderEntityData> = LinkedHashSet()

  fun getAircraftBuilderEntityData(uuid: UUID): AircraftBuilderEntityData? = getData(uuid)

  fun breakUserAircraft(uuid: UUID): Int = breakUserVehicles(uuid)

  fun countOwnedVehicles(uuid: UUID): Int = cache.count { !it.exit && it.owner == uuid }
}
