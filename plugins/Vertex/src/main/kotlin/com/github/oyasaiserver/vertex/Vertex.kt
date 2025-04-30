package com.github.oyasaiserver.vertex

import com.github.oyasaiserver.vertex.database.DatabaseManager
import com.github.oyasaiserver.vertex.services.nexus.Nexus
import com.github.oyasaiserver.vertex.util.launchAsync
import org.bukkit.plugin.java.JavaPlugin

class Vertex : JavaPlugin() {
    override fun onLoad() {
        launchAsync { DatabaseManager.initialize() }
    }

    override fun onEnable() {
        server.pluginManager.registerEvents(Nexus, this)
    }

    override fun onDisable() {
        DatabaseManager.close()
    }

    companion object {
        val plugin by lazy { getPlugin(Vertex::class.java) }
    }
}
