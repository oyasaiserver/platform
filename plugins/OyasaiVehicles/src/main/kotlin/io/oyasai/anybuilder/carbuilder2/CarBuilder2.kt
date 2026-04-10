package io.oyasai.anybuilder.carbuilder2

import io.oyasai.anybuilder.carbuilder2.command.CarBuilder2Command
import io.oyasai.anybuilder.carbuilder2.command.CarBuilder2CommandTab
import io.oyasai.anybuilder.carbuilder2.data.CarBuilder2BaseCache
import io.oyasai.anybuilder.carbuilder2.data.CarBuilder2EntityList
import io.oyasai.anybuilder.carbuilder2.event.CarBuilder2Events
import io.oyasai.anybuilder.common.BuilderLifecycle

object CarBuilder2 {
  fun onEnable() {
    BuilderLifecycle.register(
        commandName = "carbuilder2",
        executor = CarBuilder2Command,
        tabCompleter = CarBuilder2CommandTab,
        events = CarBuilder2Events,
        reloadCache = CarBuilder2BaseCache::reloadCache)
  }

  fun onDisable() {
    CarBuilder2EntityList.allExit()
  }
}
