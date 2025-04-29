package com.github.oyasaiserver.vertex.database

import com.github.oyasaiserver.vertex.Config.Database
import com.mongodb.kotlin.client.coroutine.MongoClient
import com.mongodb.kotlin.client.coroutine.MongoCollection

class Mongo(
    private val client: MongoClient,
) {
    val database by lazy {
        client.getDatabase(Database.Mongo.DB)
    }

    inline fun <reified T : Any> getCollection(): MongoCollection<T> = database.getCollection<T>(T::class.java.simpleName)
}
