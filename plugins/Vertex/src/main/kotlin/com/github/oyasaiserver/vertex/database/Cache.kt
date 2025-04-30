package com.github.oyasaiserver.vertex.database

import com.github.benmanes.caffeine.cache.Caffeine
import kotlin.time.Duration.Companion.hours
import kotlin.time.toJavaDuration

class Cache<K : Any, V : Any>(
    private val loader: (K) -> V,
) {
    private val cache =
        Caffeine.newBuilder().maximumSize(5_000).expireAfterWrite(2.hours.toJavaDuration()).build<
            K,
            V,
        > {
            loader(it)
        }

    operator fun get(k: K): V = cache[k]

    operator fun set(
        k: K,
        v: V,
    ) {
        cache.put(k, v)
    }
}
