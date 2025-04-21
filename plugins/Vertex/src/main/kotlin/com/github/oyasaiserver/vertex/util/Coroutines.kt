package com.github.oyasaiserver.vertex.util

inline fun <T, R> T.runBlocking(crossinline block: suspend T.() -> R): R = kotlinx.coroutines.runBlocking { block() }
