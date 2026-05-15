package io.oyasai.anybuilder.aircraftbuilder.model

import io.oyasai.anybuilder.runtime.BaseVehicleEntityList
import java.util.LinkedHashSet

object AircraftBuilderEntityList : BaseVehicleEntityList<AircraftBuilderEntityData>() {
  override val cache: MutableSet<AircraftBuilderEntityData> = LinkedHashSet()
}
