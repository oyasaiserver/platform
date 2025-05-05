package com.github.oyasaiserver.vertex

import java.lang.System.getenv

object Env {
    object Database {
        object Mongo {
            val HOST = getEnv("MONGO_HOST")
            val PORT = getIntEnv("MONGO_PORT")
            val DB = getEnv("MONGO_DB")
        }

        object Postgres {
            val HOST = getEnv("POSTGRES_HOST")
            val PORT = getIntEnv("POSTGRES_PORT")
            val DB = getEnv("POSTGRES_DB")
            val USER = getEnv("POSTGRES_USER")
            val PASSWORD = getEnv("POSTGRES_PASSWORD")
        }
    }

    private fun getEnv(name: String): String = requireNotNull(getenv(name)) { "Environment variable $name is not set." }

    private fun getIntEnv(name: String): Int =
        requireNotNull(getEnv(name).toIntOrNull()) {
            "Environment variable $name is not an integer."
        }
}
