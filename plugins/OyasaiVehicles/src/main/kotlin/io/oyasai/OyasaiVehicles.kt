package io.oyasai

import io.oyasai.anybuilder.aircraftbuilder.AircraftBuilder
import io.oyasai.anybuilder.carbuilder2.CarBuilder2
import io.oyasai.anybuilder.network.NmsMetadataFilterService
import io.oyasai.anybuilder.runtime.EntityRuntime
import io.oyasai.milepoint.MileagePoint
import io.oyasai.milepoint.MileagePointCommand
import io.oyasai.race.TimeAttackCommand
import io.oyasai.toolbox.CustomHead
import io.oyasai.toolbox.UnderBlockPattern
import org.bukkit.plugin.java.JavaPlugin

class OyasaiVehicles : JavaPlugin() {
  override fun onEnable() {
    this.saveDefaultConfig()
    io.oyasai.toolbox.Tools.setPlugin(this)
    CustomHead.createHeadPlayers()
    CustomHead.createBanner()

    getCommand("milepoint")?.let {
      it.setExecutor(MileagePointCommand)
      it.tabCompleter = MileagePointCommand
    }

    getCommand("realvehicle")?.let {
      it.setExecutor(VehicleMenuCommand)
      it.tabCompleter = VehicleMenuCommand
    }

    getCommand("timeattack")?.let { it.setExecutor(TimeAttackCommand) }

    server.pluginManager.registerEvents(VehicleGarageService, this)
    server.pluginManager.registerEvents(MileagePoint, this)
    server.pluginManager.registerEvents(io.oyasai.toolbox.OyasaiMenuListener, this)

    VehicleGarageService.enableFix()
    UnderBlockPattern.loadConfig()
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
}
