package com.github.oyasaiserver.vertex.database

import com.github.oyasaiserver.vertex.Config.Database.Mongo
import com.github.oyasaiserver.vertex.Config.Database.Postgres
import com.github.oyasaiserver.vertex.database.codec.MongoKotlinUuidCodec
import com.github.oyasaiserver.vertex.database.table.Buildings
import com.github.oyasaiserver.vertex.database.table.Likes
import com.mongodb.ConnectionString
import com.mongodb.MongoClientSettings
import com.mongodb.kotlin.client.coroutine.MongoClient
import org.bson.codecs.configuration.CodecRegistries
import org.jetbrains.exposed.sql.Database
import org.jetbrains.exposed.sql.SchemaUtils
import org.jetbrains.exposed.sql.transactions.TransactionManager
import org.jetbrains.exposed.sql.transactions.transaction

object DatabaseManager {
    val postgres by lazy {
        Database.connect(
            url = "jdbc:postgresql://${Postgres.HOST}:${Postgres.PORT}/${Postgres.DB}",
            user = Postgres.USER,
            password = Postgres.PASSWORD,
        )
    }

    private val mongoClient by lazy {
        val connectionString = ConnectionString("mongodb://${Mongo.HOST}:${Mongo.PORT}")
        val codeRegistry =
            CodecRegistries.fromRegistries(
                CodecRegistries.fromCodecs(MongoKotlinUuidCodec()),
                MongoClientSettings.getDefaultCodecRegistry(),
            )
        MongoClientSettings
            .builder()
            .applyConnectionString(connectionString)
            .codecRegistry(codeRegistry)
            .build()
            .run { MongoClient.create(this) }
    }

    val mongo by lazy {
        Mongo(mongoClient)
    }

    fun initialize() {
        val postgresSchemaDatabase =
            Database.connect(
                url = "jdbc:postgresql://${Postgres.HOST}:${Postgres.PORT}/postgres",
                user = Postgres.USER,
                password = Postgres.PASSWORD,
            )
        transaction {
            connection.autoCommit = true
            if (Postgres.DB !in SchemaUtils.listDatabases()) {
                SchemaUtils.createDatabase(Postgres.DB)
            }
            connection.autoCommit = false
        }
        transaction(postgres) {
            MigrationUtils
                .statementsRequiredForDatabaseMigration(
                    Buildings,
                    Likes,
                ).forEach {
                    runCatching {
                        exec(it)
                    }
                }
        }
        TransactionManager.closeAndUnregister(postgresSchemaDatabase)
    }

    fun close() {
        TransactionManager.closeAndUnregister(postgres)
        mongoClient.close()
    }
}
