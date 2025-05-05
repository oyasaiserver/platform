package com.github.oyasaiserver.vertex.util

import com.github.oyasaiserver.vertex.Vertex.Companion.plugin
import kotlinx.coroutines.CoroutineDispatcher
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.Job
import kotlinx.coroutines.launch
import org.bukkit.Bukkit
import kotlin.coroutines.CoroutineContext

object BukkitDispatcher : CoroutineDispatcher() {
    override fun dispatch(
        context: CoroutineContext,
        block: Runnable,
    ) {
        Bukkit.getScheduler().runTask(plugin, block)
    }
}

fun <T> T.runOnMain(block: suspend (T) -> Unit): Job = CoroutineScope(BukkitDispatcher).launch { block(this@runOnMain) }

fun <T> T.launchAsync(block: suspend (T) -> Unit): Job = CoroutineScope(Dispatchers.IO).launch { block(this@launchAsync) }

fun launchAsync(block: suspend CoroutineScope.() -> Unit): Job = CoroutineScope(Dispatchers.IO).launch { block() }
