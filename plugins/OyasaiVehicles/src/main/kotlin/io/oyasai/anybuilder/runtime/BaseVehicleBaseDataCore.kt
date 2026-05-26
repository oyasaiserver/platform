package io.oyasai.anybuilder.runtime

import io.oyasai.toolbox.CustomYaml
import io.oyasai.toolbox.Tools
import java.io.File
import org.bukkit.plugin.Plugin

abstract class BaseVehicleBaseDataCore<C : CustomYaml>(
    final override val name: String,
    val config: C,
    private val rootFolderName: String,
) : VehicleBaseData {
  protected val plugin: Plugin = requireNotNull(Tools.pl) { "Plugin is not initialized" }

  protected fun vehicleFolder(): File = File(plugin.dataFolder, "$rootFolderName/$name")

  protected fun vehicleFile(fileName: String): File = File(vehicleFolder(), fileName)

  fun deleteFiles(): Boolean {
    config.delete()
    val folder = vehicleFolder()
    return folder.exists() && folder.deleteRecursively()
  }
}
