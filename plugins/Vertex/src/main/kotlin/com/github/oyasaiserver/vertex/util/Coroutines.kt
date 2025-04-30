package com.github.oyasaiserver.vertex.util

import com.github.oyasaiserver.vertex.Vertex.Companion.plugin
import kotlinx.coroutines.CoroutineDispatcher
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.Job
import kotlinx.coroutines.launch
import kotlinx.coroutines.withContext
import org.bukkit.Bukkit
import kotlin.coroutines.CoroutineContext

inline fun <T, R> T.runBlocking(crossinline block: suspend T.() -> R): R = kotlinx.coroutines.runBlocking { block() }

object BukkitDispatcher : CoroutineDispatcher() {
    override fun dispatch(
        context: CoroutineContext,
        block: Runnable,
    ) {
        Bukkit.getScheduler().runTask(plugin, block)
    }
}

suspend fun <T> runOnMain(block: suspend CoroutineScope.() -> T): T = withContext(BukkitDispatcher, block)

fun launchAsync(block: suspend CoroutineScope.() -> Unit): Job = CoroutineScope(Dispatchers.IO).launch { block() }

fun <T> T.launchAsync(block: suspend (T) -> Unit): Job = CoroutineScope(Dispatchers.IO).launch { block(this@launchAsync) }
