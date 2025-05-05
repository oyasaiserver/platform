package com.github.oyasaiserver.vertex.services

import com.github.oyasaiserver.vertex.Vertex.Companion.plugin
import org.bukkit.event.Listener
import java.util.logging.Logger

abstract class Service : Listener {
    val logger: Logger by lazy { plugin.logger }

    open fun onLoad() {}

    open fun onEnable() {}

    open fun onDisable() {}
}
