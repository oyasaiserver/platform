package io.oyasaiserver

import io.oyasaiserver.anybuilder.runtime.EntityRuntime
import io.oyasaiserver.anybuilder.aircraftbuilder.AircraftBuilder
import io.oyasaiserver.anybuilder.carbuilder2.CarBuilder2
import io.oyasaiserver.anybuilder.network.NmsMetadataFilterService
import io.oyasaiserver.milepoint.MileagePoint
import io.oyasaiserver.milepoint.MileagePointCommand
import io.oyasaiserver.race.TimeAttackCommand
import io.oyasaiserver.toolbox.CustomHead
import org.bukkit.command.CommandExecutor
import org.bukkit.command.TabCompleter
import org.bukkit.event.Listener
import org.bukkit.plugin.java.JavaPlugin

class OyasaiVehicles : JavaPlugin() {
    override fun onEnable() {
        this.saveDefaultConfig()
        io.oyasaiserver.toolbox.Tools.setPlugin(this)
        VehicleReloadService.reloadSettings()
        CustomHead.createHeadPlayers()
        CustomHead.createBanner()

        registerCommand("milepoint", MileagePointCommand, MileagePointCommand)
        registerCommand("realvehicle", VehicleMenuCommand, VehicleMenuCommand)
        registerCommand("timeattack", TimeAttackCommand)

        registerListener(VehicleGarageService)
        registerListener(MileagePoint)
        registerListener(io.oyasaiserver.toolbox.OyasaiMenuListener)

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
