package com.github.oyasaiserver.vertex.database

import MigrationUtils
import com.github.oyasaiserver.vertex.Env.Database.Postgres
import com.github.oyasaiserver.vertex.Vertex.Companion.reflections
import com.github.oyasaiserver.vertex.util.getSubKotlinObjectsOf
import org.jetbrains.exposed.sql.Database
import org.jetbrains.exposed.sql.SchemaUtils
import org.jetbrains.exposed.sql.Table
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

    fun initialize() {
        Database
            .connect(
                url = "jdbc:postgresql://${Postgres.HOST}:${Postgres.PORT}/postgres",
                user = Postgres.USER,
                password = Postgres.PASSWORD,
            ).also {
                transaction(it) {
                    connection.autoCommit = true
                    if (Postgres.DB !in SchemaUtils.listDatabases()) {
                        SchemaUtils.createDatabase(Postgres.DB)
                    }
                    connection.autoCommit = false
                }
                TransactionManager.closeAndUnregister(it)
            }
        TransactionManager.defaultDatabase = postgres
        transaction {
            MigrationUtils
                .statementsRequiredForDatabaseMigration(
                    *reflections.getSubKotlinObjectsOf<Table>().toTypedArray(),
                ).forEach { runCatching { exec(it) } }
        }
    }

    fun close() {
        TransactionManager.closeAndUnregister(postgres)
    }
}
