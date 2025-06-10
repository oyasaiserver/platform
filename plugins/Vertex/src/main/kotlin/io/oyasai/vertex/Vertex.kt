package io.oyasai.vertex

import com.earth2me.essentials.Essentials
import io.oyasai.vertex.services.Service
import io.oyasai.vertex.util.getSubKotlinObjectsOf
import org.bukkit.command.Command
import org.bukkit.plugin.java.JavaPlugin
import org.reflections.Reflections

class Vertex : JavaPlugin() {
    override fun onLoad() {
        //        launchAsync { DatabaseManager.initialize() }
        services.forEach { it.onLoad() }
    }

    override fun onEnable() {
        services.forEach {
            server.pluginManager.registerEvents(it, this)
            it.onEnable()
        }
        reflections.getSubKotlinObjectsOf<Command>().forEach { command ->
            server.commandMap.run {
                knownCommands.values.removeIf { it.name == command.name }
                register(name, command)
            }
        }
    }

    override fun onDisable() {
        services.forEach { it.onDisable() }
        //        DatabaseManager.close()
    }

    companion object {
        val plugin by lazy { getPlugin(Vertex::class.java) }
        val essentials by lazy { getPlugin(Essentials::class.java) }
        val reflections = Reflections(Vertex::class.java.packageName)
        val services = reflections.getSubKotlinObjectsOf<Service>()
    }
}
