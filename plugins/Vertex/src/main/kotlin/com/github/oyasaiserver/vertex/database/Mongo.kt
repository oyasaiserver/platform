package com.github.oyasaiserver.vertex.database

import com.github.oyasaiserver.vertex.Env.Database
import com.mongodb.kotlin.client.coroutine.MongoClient
import com.mongodb.kotlin.client.coroutine.MongoCollection
import org.bson.Document
import kotlin.collections.ifEmpty
import kotlin.jvm.java
import kotlin.reflect.KClass
import kotlin.reflect.KProperty1
import kotlin.reflect.full.memberProperties

class Mongo(
    private val client: MongoClient,
) {
    val database by lazy { client.getDatabase(Database.Mongo.DB) }

    inline fun <reified T : Any> getCollection(): MongoCollection<T> = database.getCollection<T>(T::class.java.simpleName)

    companion object {
        fun flip(path: String) = listOf(Document("\$set", Document(path, Document("\$not", "$$path"))))

        inline fun <reified T : Any> path(target: KProperty1<*, *>): String = bfs(listOf(Pair("", T::class)), setOf(T::class), target)

        tailrec fun bfs(
            frontier: List<Pair<String, KClass<*>>>,
            visited: Set<KClass<*>>,
            target: KProperty1<*, *>,
        ): String =
            frontier
                .flatMap { (path, klass) ->
                    klass.memberProperties.map {
                        Pair(it, if (path.isEmpty()) it.name else "$path.${it.name}")
                    }
                }.also {
                    it.forEach { (prop, full) ->
                        if (prop == target) {
                            return@bfs full
                        }
                    }
                }.mapNotNull { (it, full) ->
                    val kclass = it.returnType.classifier as? KClass<*>
                    if (
                        kclass != null &&
                        kclass !in visited &&
                        !kclass.java.isPrimitive &&
                        kclass != String::class &&
                        kclass != Any::class
                    ) {
                        Pair(full, kclass)
                    } else {
                        null
                    }
                }.ifEmpty {
                    return ""
                }.let {
                    return bfs(it, visited + it.map { it.second }, target)
                }
    }
}
