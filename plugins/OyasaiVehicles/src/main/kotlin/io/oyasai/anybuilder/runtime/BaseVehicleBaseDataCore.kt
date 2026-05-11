package io.oyasaiserver.anybuilder.runtime

import io.oyasaiserver.toolbox.CustomYaml
import io.oyasaiserver.toolbox.Tools
import org.bukkit.plugin.Plugin
import java.io.File

abstract class BaseVehicleBaseDataCore<C : CustomYaml>(
    final override val name: String,
    val config: C,
    private val rootFolderName: String
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
