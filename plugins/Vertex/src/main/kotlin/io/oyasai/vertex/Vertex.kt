package io.oyasai.vertex

import io.oyasai.lib.getSubKotlinObjectsOf
import io.oyasai.lib.minecraft.Service
import org.bukkit.plugin.java.JavaPlugin
import org.reflections.Reflections

class Vertex : JavaPlugin() {
    override fun onLoad() {
        services.forEach { it.onLoad() }
    }

    override fun onEnable() {
        services.forEach {
            server.pluginManager.registerEvents(it, this)
            it.onEnable()
        }
    }

    override fun onDisable() {
        services.forEach { it.onDisable() }
    }

    companion object {
        val plugin by lazy { getPlugin(Vertex::class.java) }
        val reflections by lazy { Reflections(Vertex::class.java.packageName) }
        val services by lazy { reflections.getSubKotlinObjectsOf<Service>() }
    }
}
