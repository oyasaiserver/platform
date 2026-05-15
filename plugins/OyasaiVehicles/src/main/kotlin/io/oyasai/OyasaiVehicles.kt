package io.oyasai

import io.oyasai.anybuilder.aircraftbuilder.AircraftBuilder
import io.oyasai.anybuilder.carbuilder2.CarBuilder2
import io.oyasai.anybuilder.network.NmsMetadataFilterService
import io.oyasai.anybuilder.runtime.EntityRuntime
import io.oyasai.milepoint.MileagePoint
import io.oyasai.milepoint.MileagePointCommand
import io.oyasai.race.TimeAttackCommand
import io.oyasai.toolbox.CustomHead
import org.bukkit.command.CommandExecutor
import org.bukkit.command.TabCompleter
import org.bukkit.event.Listener
import org.bukkit.plugin.java.JavaPlugin

class OyasaiVehicles : JavaPlugin() {
  override fun onEnable() {
    this.saveDefaultConfig()
    io.oyasai.toolbox.Tools.setPlugin(this)
    VehicleReloadService.reloadSettings()
    CustomHead.createHeadPlayers()
    CustomHead.createBanner()

    registerCommand("milepoint", MileagePointCommand, MileagePointCommand)
    registerCommand("realvehicle", VehicleMenuCommand, VehicleMenuCommand)
    registerCommand("timeattack", TimeAttackCommand)

    registerListener(VehicleGarageService)
    registerListener(MileagePoint)
    registerListener(io.oyasai.toolbox.OyasaiMenuListener)

    VehicleGarageService.enableFix()
    CarBuilder2.onEnable()
    AircraftBuilder.onEnable()

    MileagePoint.enableFix(server.onlinePlayers.toMutableList())
    EntityRuntime.startPacketTickLoop()
    NmsMetadataFilterService.enable(this)
  }

  override fun onDisable() {
    NmsMetadataFilterService.disable()
    CarBuilder2.onDisable()
    AircraftBuilder.onDisable()
    VehicleGarageService.disableFix()
    VehicleMenuCommand.onDisable()
    MileagePoint.disableFix(server.onlinePlayers.toMutableList())
  }

  private fun registerCommand(
      name: String,
      executor: CommandExecutor,
      tabCompleter: TabCompleter? = null
  ) {
    getCommand(name)?.apply {
      setExecutor(executor)
      if (tabCompleter != null) {
        this.tabCompleter = tabCompleter
      }
    }
  }

  private fun registerListener(listener: Listener) {
    server.pluginManager.registerEvents(listener, this)
  }
}
