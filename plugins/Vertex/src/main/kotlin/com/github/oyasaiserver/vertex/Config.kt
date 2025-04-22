package com.github.oyasaiserver.vertex

object Config {
    object Database {
        object Postgres {
            const val HOST = "postgres"
            const val PORT = "5432"
            const val DB = "prod"
            const val USER = "postgres"
            const val PASSWORD = "password"
        }
    }
}
