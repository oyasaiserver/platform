package io.oyasaiserver

import io.oyasaiserver.anybuilder.common.VehicleRegistry
import io.oyasaiserver.toolbox.Tools
import io.oyasaiserver.toolbox.UnderBlockPattern
import io.oyasaiserver.vehicle.base.VehicleBalanceSettings

object VehicleReloadService {
    fun reloadSettings(): String {
        val plugin = requireNotNull(Tools.pl) { "Plugin is not initialized" }
        plugin.reloadConfig()
        VehicleBalanceSettings.reload(plugin.config)
        val underBlockCount = UnderBlockPattern.loadConfig()
        return "[OyasaiVehicles] 設定を再読込しました (UnderBlock=$underBlockCount)"
    }

    fun reloadVehicles(): String {
        VehicleRegistry.reloadAllCaches()
        return "[OyasaiVehicles] 車両データの再読込を開始しました"
    }

    fun reloadAll(): String {
        val settingsMessage = reloadSettings()
        val vehicleMessage = reloadVehicles()
        return "$settingsMessage / $vehicleMessage"
    }
}

