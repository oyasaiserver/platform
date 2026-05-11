package io.oyasai

import io.oyasai.anybuilder.common.VehicleRegistry
import io.oyasai.toolbox.Tools
import io.oyasai.toolbox.UnderBlockPattern
import io.oyasai.vehicle.base.VehicleBalanceSettings

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
