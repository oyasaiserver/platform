package com.github.oyasaiserver.vertex.database

import com.github.oyasaiserver.vertex.Config.Database.Postgres
import com.github.oyasaiserver.vertex.database.entity.Buildings
import com.github.oyasaiserver.vertex.database.entity.Likes
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

    private val postgresSchemaDatabase by lazy {
        Database.connect(
            url = "jdbc:postgresql://${Postgres.HOST}:${Postgres.PORT}/postgres",
            user = Postgres.USER,
            password = Postgres.PASSWORD,
        )
    }

    fun initialize() {
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
    }
}
