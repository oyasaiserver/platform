package com.github.oyasaiserver.vertex

import com.fren_gor.ultimateAdvancementAPI.AdvancementMain
import com.fren_gor.ultimateAdvancementAPI.UltimateAdvancementAPI
import com.github.oyasaiserver.vertex.database.DatabaseManager
import com.github.oyasaiserver.vertex.services.Service
import com.github.oyasaiserver.vertex.util.getSubKotlinObjectsOf
import com.github.oyasaiserver.vertex.util.launchAsync
import org.bukkit.command.Command
import org.bukkit.plugin.java.JavaPlugin
import org.reflections.Reflections

class Vertex : JavaPlugin() {
    override fun onLoad() {
        launchAsync { DatabaseManager.initialize() }
        advancementMain.load()
        services.forEach { it.onLoad() }
    }

    override fun onEnable() {
        advancementMain.enableInMemory()
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
        advancementMain.disable()
        DatabaseManager.close()
    }

    companion object {
        val plugin by lazy { getPlugin(Vertex::class.java) }
        val ultimateAdvancementApi by lazy { UltimateAdvancementAPI.getInstance(plugin) }
        val advancementMain by lazy { AdvancementMain(plugin) }
        val reflections = Reflections(Vertex::class.java.packageName)
        val services = reflections.getSubKotlinObjectsOf<Service>()
    }
}
