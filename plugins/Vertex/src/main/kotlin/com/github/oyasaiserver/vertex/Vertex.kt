package com.github.oyasaiserver.vertex

import com.github.oyasaiserver.vertex.database.DatabaseManager
import com.github.oyasaiserver.vertex.parrot.Parrot
import org.bukkit.plugin.java.JavaPlugin

class Vertex : JavaPlugin() {
    override fun onLoad() {
        DatabaseManager.initialize()
    }

    override fun onEnable() {
        server.pluginManager.registerEvents(Parrot, this)
    }

    override fun onDisable() {
        DatabaseManager.close()
    }

    companion object {
        val plugin by lazy { getPlugin(Vertex::class.java) }
    }
}
