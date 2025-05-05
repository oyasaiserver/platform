package com.github.oyasaiserver.vertex.util

import org.reflections.Reflections

/** クラスTを継承するKotlin Objectをリフレクションで取得する。 */
inline fun <reified T> Reflections.getSubKotlinObjectsOf(): List<T> = getSubTypesOf(T::class.java).mapNotNull { it.kotlin.objectInstance }
