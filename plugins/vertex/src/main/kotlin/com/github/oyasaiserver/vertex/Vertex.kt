package com.github.oyasaiserver.vertex

import com.github.oyasaiserver.vertex.parrot.Parrot
import com.google.genai.Client
import io.ktor.client.HttpClient
import io.ktor.client.engine.cio.CIO
import org.bukkit.plugin.java.JavaPlugin

class Vertex : JavaPlugin() {
    override fun onEnable() {
        server.pluginManager.registerEvents(Parrot, this)
    }

    companion object {
        val plugin by lazy { getPlugin(Vertex::class.java) }
        val genaiClient = Client()
        val httpClient = HttpClient(CIO)
    }
}