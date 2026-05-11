package io.oyasaiserver.anybuilder.aircraftbuilder

import io.oyasaiserver.anybuilder.common.command.BuilderLifecycle
import io.oyasaiserver.anybuilder.aircraftbuilder.data.AircraftBuilderBaseCache
import io.oyasaiserver.anybuilder.aircraftbuilder.data.AircraftBuilderEntityList
import io.oyasaiserver.anybuilder.aircraftbuilder.command.AircraftBuilderCommand
import io.oyasaiserver.anybuilder.aircraftbuilder.command.AircraftBuilderCommandTab
import io.oyasaiserver.anybuilder.aircraftbuilder.event.AircraftBuilderEvents

object AircraftBuilder {
    fun onEnable() {
        BuilderLifecycle.register(
            commandName = "aircraftbuilder",
            executor = AircraftBuilderCommand,
            tabCompleter = AircraftBuilderCommandTab,
            events = AircraftBuilderEvents,
            entityList = AircraftBuilderEntityList,
            cache = AircraftBuilderBaseCache
        )
    }

    fun onDisable() {
        AircraftBuilderEntityList.allExit()
    }
}
