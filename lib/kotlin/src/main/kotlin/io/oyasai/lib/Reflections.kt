package io.oyasai.lib

import org.reflections.Reflections

inline fun <reified T> Reflections.getSubKotlinObjectsOf(): List<T> =
    getSubTypesOf(T::class.java).mapNotNull { it.kotlin.objectInstance }
