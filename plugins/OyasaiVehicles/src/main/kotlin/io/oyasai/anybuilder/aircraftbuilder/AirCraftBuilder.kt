package io.oyasai.anybuilder.aircraftbuilder

import io.oyasai.anybuilder.aircraftbuilder.command.AircraftBuilderCommand
import io.oyasai.anybuilder.aircraftbuilder.command.AircraftBuilderCommandTab
import io.oyasai.anybuilder.aircraftbuilder.data.AircraftBuilderBaseCache
import io.oyasai.anybuilder.aircraftbuilder.data.AircraftBuilderEntityList
import io.oyasai.anybuilder.aircraftbuilder.event.AircraftBuilderEvents
import io.oyasai.anybuilder.common.command.BuilderLifecycle

object AircraftBuilder {
  fun onEnable() {
    BuilderLifecycle.register(
        commandName = "aircraftbuilder",
        executor = AircraftBuilderCommand,
        tabCompleter = AircraftBuilderCommandTab,
        events = AircraftBuilderEvents,
        entityList = AircraftBuilderEntityList,
        cache = AircraftBuilderBaseCache)
  }

  fun onDisable() {
    AircraftBuilderEntityList.allExit()
  }
}
