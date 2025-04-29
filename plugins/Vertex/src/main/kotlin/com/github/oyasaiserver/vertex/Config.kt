package com.github.oyasaiserver.vertex

object Config {
    object Database {
        object Mongo {
            const val HOST = "mongo"
            const val PORT = "27017"
            const val DB = "prod"
        }

        object Postgres {
            const val HOST = "postgres"
            const val PORT = "5432"
            const val DB = "prod"
            const val USER = "postgres"
            const val PASSWORD = "password"
        }
    }
}
