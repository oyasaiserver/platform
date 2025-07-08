package io.oyasai.vertex

import io.oyasai.lib.Client
import io.oyasai.proto.HelloServiceClient
import io.oyasai.proto.helloRequest
import kotlinx.coroutines.runBlocking
import org.bukkit.plugin.java.JavaPlugin

class Vertex : JavaPlugin() {
    override fun onLoad() {
        runBlocking {
            HelloServiceClient(Client.protocol).sayHello(helloRequest { name = "Vertex" }).success {
                println(it.message.message)
            }
        }
    }

    override fun onEnable() {}

    override fun onDisable() {}

    companion object {
        val plugin by lazy { getPlugin(Vertex::class.java) }
    }
}
